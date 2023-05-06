import * as fs from "fs";
import * as path from "path";

const CWD = process.cwd();
const TYPES_DIR = path.join(CWD, "packages", "base", "@types", "Gjs");
const AMBIENT_TARGET = path.join(CWD, "packages", "base-ambient", "index.d.ts"); 

function createDeclaration(name: string, giName: string, importPath: string, version?: string) {
    if (version) {
        return `declare module "${giName}?version=${version}" {\n\timport ${name} from "${importPath}";\n\texport default ${name};\n}\n\n`;
    } else {
        return `declare module "${giName}" {\n\timport ${name} from "${importPath}";\n\texport default ${name};\n}\n\n`;
    }
}

// Find all types and read the module name and version to a map
const filenames = fs.readdirSync(TYPES_DIR);
const moduleMap = new Map<string, string[]>();
filenames.forEach(filename => {
    if (filename === "index.d.ts" || filename === "Gjs.d.ts") return;
    const p = path.join(TYPES_DIR, filename);
    const contents = fs.readFileSync(p).toString();
    const lines = contents.split("\n");
    if (lines.length < 8) return;
    const match = lines[7].trim().match(/^\* (.+)-(.+)/);
    if (!match) return;
    const moduleName = match[1];
    const moduleVersion = match[2];
    const versions = moduleMap.get(moduleName);
    if (versions) versions.push(moduleVersion);
    else moduleMap.set(moduleName, [moduleVersion]);
});

// Iterate over the map to build the contents
let ambientContent = "";
moduleMap.forEach((versions, name) => {
    versions.forEach(v => {
        const importPath = path.join("@gnome-flatpak-types", "base", "@types", "Gjs", `${name}-${v}.d.ts`);
        if (name === "cairo") {
            ambientContent += createDeclaration(name, name, importPath);
            return;
        }
        ambientContent += createDeclaration(name, `gi://${name}`, importPath, v);
        if (versions.length === 1) ambientContent += createDeclaration(name, `gi://${name}`, importPath);
    });
});

// Save the contents to a file
fs.unlinkSync(AMBIENT_TARGET);
fs.writeFileSync(AMBIENT_TARGET, ambientContent);