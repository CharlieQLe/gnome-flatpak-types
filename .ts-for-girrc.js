export default {
    "buildType": "types",
    "environments": [
        "gjs"
    ],
    "generateAlias": true,
    "girDirectories": [
        "./girs"
    ],
    "modules": [
        "*"
    ],
    "promisify": true,
    "ignore": [
        "GdkX11-3.0",
        "Gtk-3.0",
        "Gdk-3.0",
        "Gcr-3",
        "GcrUi-3",
        "Gck-1",
        "GtkSource-4",
        "WebKit2-4.1",
        "WebKit2WebExtension-4.1",
        "JavaScriptCore-4.1"
    ]
}