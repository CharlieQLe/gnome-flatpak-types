/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * GCab-1.0
 */

/// <reference path="Gjs.d.ts" />
import type * as Gjs from './Gjs.js';
/// <reference path="Gio-2.0.d.ts" />
import type Gio from './Gio-2.0.js';
/// <reference path="GObject-2.0.d.ts" />
import type GObject from './GObject-2.0.js';
/// <reference path="GLib-2.0.d.ts" />
import type GLib from './GLib-2.0.js';

declare namespace GCab {

/**
 * Compression used by the #GCabFolder.
 */
enum Compression {
    /**
     * No compression.
     */
    NONE,
    /**
     * MSZIP compression.
     */
    MSZIP,
    /**
     * QUANTUM compression (unsupported).
     */
    QUANTUM,
    /**
     * LZX compression (only decompression supported).
     */
    LZX,
    /**
     * compression value mask.
     */
    MASK,
}
/**
 * The various errors triggered by the GCab functions.
 */
enum Error {
    /**
     * The given file is not of Cabinet format.
     */
    FORMAT,
    /**
     * General function failure.
     */
    FAILED,
    /**
     * Action or format is not supported
     */
    NOT_SUPPORTED,
    /**
     * Data stream was invalid
     */
    INVALID_DATA,
}
/**
 * Attributes associated with the #GCabFile.
 */
enum FileAttribute {
    /**
     * file is read-only
     */
    RDONLY,
    /**
     * file is hidden
     */
    HIDDEN,
    /**
     * file is a system file
     */
    SYSTEM,
    /**
     * file modified since last backup
     */
    ARCH,
    /**
     * run after extraction
     */
    EXEC,
    /**
     * name contains UTF
     */
    NAME_IS_UTF,
}
function error_quark(): GLib.Quark
/**
 * The type used for callback called when processing Cabinet archive
 * files.
 * @callback 
 * @param file the file being processed
 */
interface FileCallback {
    (file: File): boolean
}
module Cabinet {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GCab-1.0.GCab.Cabinet

        reserved?: Uint8Array | null
        signature?: Uint8Array | null
    }

}

interface Cabinet {

    // Own properties of GCab-1.0.GCab.Cabinet

    reserved: Uint8Array
    signature: Uint8Array

    // Owm methods of GCab-1.0.GCab.Cabinet

    /**
     * Add `folder` to `cabinet`.
     * @param folder a #GCabFolder
     * @returns %TRUE on success.
     */
    add_folder(folder: Folder): boolean
    /**
     * Extract files to given path.
     * 
     * If `path` is NULL then the files are decompressed to memory blobs stored on
     * each #GCabFile.
     * @param path the path to extract files
     * @param file_callback an optional #GCabFile callback,     return %FALSE to filter out or skip files.
     * @param progress_callback a progress callback
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     * @returns %TRUE on success.
     */
    extract(path: Gio.File | null, file_callback: FileCallback | null, progress_callback: Gio.FileProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Extract files to given path.
     * @param path the path to extract files
     * @param file_callback an optional #GCabFile callback,     return %FALSE to filter out or skip files.
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     * @returns %TRUE on success.
     */
    extract_simple(path: Gio.File, file_callback: FileCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Get the Cabinet folders within the `cabinet`.
     * Note that Cabinet folders are not like filesystem path, they are
     * group of files sharing some layout parameters.
     * @returns an array of #GCabFolder
     */
    get_folders(): Folder[]
    /**
     * Lookup the cabinet authenticode signature if any.
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     * @returns the array containing the PKCS#7 signed data or %NULL on error.
     */
    get_signature(cancellable: Gio.Cancellable | null): Uint8Array
    /**
     * Get the size of the compressed cabinet file.
     * @returns size in bytes
     */
    get_size(): number
    /**
     * Load a cabinet archive.
     * @param stream a #GInputStream
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     * @returns %TRUE on success
     */
    load(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean
    /**
     * Save `cabinet` to the output stream `out`. `out` must be a #GSeekable.
     * @param stream a #GOutputStream also #GSeekable
     * @param file_callback report current file being saved
     * @param progress_callback report saving progress
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     * @returns %TRUE on success.
     */
    write(stream: Gio.OutputStream, file_callback: FileCallback | null, progress_callback: Gio.FileProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Save `cabinet` to the output stream `out`. `out` must be a #GSeekable.
     * @param stream a #GOutputStream also #GSeekable
     * @param file_callback report current file being saved
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     * @returns %TRUE on success.
     */
    write_simple(stream: Gio.OutputStream, file_callback: FileCallback | null, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of GCab-1.0.GCab.Cabinet

    connect(sigName: "notify::reserved", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reserved", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reserved", ...args: any[]): void
    connect(sigName: "notify::signature", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signature", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::signature", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An opaque object holding a Cabinet file reference.
 * @class 
 */
class Cabinet extends GObject.Object {

    // Own properties of GCab-1.0.GCab.Cabinet

    static name: string
    static $gtype: GObject.GType<Cabinet>

    // Constructors of GCab-1.0.GCab.Cabinet

    constructor(config?: Cabinet.ConstructorProperties) 
    /**
     * Create a new #GCabCabinet object to read or create a Cabinet
     * archive.
     * @constructor 
     * @returns a new #GCabCabinet
     */
    constructor() 
    /**
     * Create a new #GCabCabinet object to read or create a Cabinet
     * archive.
     * @constructor 
     * @returns a new #GCabCabinet
     */
    static new(): Cabinet
    _init(config?: Cabinet.ConstructorProperties): void
}

module File {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GCab-1.0.GCab.File

        bytes?: GLib.Bytes | null
        file?: Gio.File | null
        name?: string | null
    }

}

interface File {

    // Own properties of GCab-1.0.GCab.File

    bytes: GLib.Bytes
    file: Gio.File
    name: string | null

    // Owm methods of GCab-1.0.GCab.File

    /**
     * Get the file attributes.
     * @returns the cabinet file attributes
     */
    get_attributes(): number
    /**
     * Get the #GFile associated with `file`. This will only be non-%NULL if the
     * #GCabFile has been created using gcab_file_new_with_bytes().
     * @returns the associated #GBytes or %NULL
     */
    get_bytes(): GLib.Bytes
    /**
     * Get the file date, in `result`.
     * @param result a #GTimeVal to return date
     * @returns %TRUE if @tv was set
     */
    get_date(result: GLib.TimeVal): boolean
    /**
     * Gets the file date and returns it as a #GDateTime..
     * @returns file date, or NULL if unknown.
     */
    get_date_time(): GLib.DateTime
    /**
     * Get the file name to use for extraction, or %NULL.
     * @returns a file name
     */
    get_extract_name(): string | null
    /**
     * If the cabinet is being created, get the #GFile associated with
     * `file`. This must be an exisiting file that can be read, in order to
     * be added to the archive during cabinet creation.
     * 
     * If `file` is from an existing cabinet, the fuction will return
     * %NULL.
     * @returns the associated #GFile or %NULL
     */
    get_file(): Gio.File
    /**
     * Get the file name within the cabinet.
     * @returns the cabinet file name
     */
    get_name(): string | null
    /**
     * Get the file size.
     * @returns the cabinet file size
     */
    get_size(): number
    /**
     * Set the file attributes.
     * @param attr the attributes, e.g. %GCAB_FILE_ATTRIBUTE_RDONLY
     */
    set_attributes(attr: number): void
    /**
     * Replace the #GBytes associated with `self`.
     * This is most usefule when the #GCabFile has been created using
     * gcab_file_new_with_bytes() and the data needs to be modified.
     * @param bytes a #GBytes
     */
    set_bytes(bytes: GLib.Bytes): void
    /**
     * Sets the file modification date, instead of the value provided by the GFile.
     * @param tv a #GTimeVal
     */
    set_date(tv: GLib.TimeVal): void
    /**
     * Sets the file modification date (instead of the date provided by the GFile)
     * @param dt a #GDateTime
     */
    set_date_time(dt: GLib.DateTime): void
    /**
     * Sets the file name to use for extraction, instead of the name
     * provided by the Cabinet.
     * @param name a file name or %NULL
     */
    set_extract_name(name: string | null): void

    // Class property signals of GCab-1.0.GCab.File

    connect(sigName: "notify::bytes", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytes", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bytes", ...args: any[]): void
    connect(sigName: "notify::file", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An opaque object, referencing a file in a Cabinet.
 * @class 
 */
class File extends GObject.Object {

    // Own properties of GCab-1.0.GCab.File

    static name: string
    static $gtype: GObject.GType<File>

    // Constructors of GCab-1.0.GCab.File

    constructor(config?: File.ConstructorProperties) 
    /**
     * Create a #GCabFile from a given #GBytes.
     * 
     * If this file is to be added to an archive you should also probably use
     * gcab_file_set_date() and gcab_file_set_attributes() to set sensible values.
     * @constructor 
     * @param name name of the file within the cabinet
     * @param bytes a #GBytes to be added to the cabinet
     * @returns a new #GCabFile
     */
    static new_with_bytes(name: string | null, bytes: GLib.Bytes): File
    /**
     * Create a #GCabFile from a given #GFile, to be added to a
     * #GCabCabinet for archive creation.
     * @constructor 
     * @param name name of the file within the cabinet
     * @param file a #GFile to be added to the cabinet
     * @returns a new #GCabFile
     */
    static new_with_file(name: string | null, file: Gio.File): File
    _init(config?: File.ConstructorProperties): void
}

module Folder {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GCab-1.0.GCab.Folder

        comptype?: number | null
        reserved?: Uint8Array | null
    }

}

interface Folder {

    // Own properties of GCab-1.0.GCab.Folder

    readonly compression: Compression
    readonly comptype: number
    reserved: Uint8Array

    // Owm methods of GCab-1.0.GCab.Folder

    /**
     * Add `file` to the #GCabFolder.
     * @param cabfile file to be added
     * @param recurse whether to recurse through subdirectories
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     * @returns %TRUE on succes
     */
    add_file(cabfile: File, recurse: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns the compression used in this folder.
     * @returns a #GCabCompression, e.g. %GCAB_COMPRESSION_MSZIP
     */
    get_comptype(): number
    /**
     * Gets a specific #GCabFile files contained in the `cabfolder`.
     * @param name a file name
     * @returns A #GCabFile, or %NULL if not found
     */
    get_file_by_name(name: string | null): File
    /**
     * Get the list of #GCabFile files contained in the `cabfolder`.
     * @returns list of files
     */
    get_files(): File[]
    /**
     * Get the number of files in this `folder`.
     * @returns a #guint
     */
    get_nfiles(): number

    // Class property signals of GCab-1.0.GCab.Folder

    connect(sigName: "notify::compression", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compression", ...args: any[]): void
    connect(sigName: "notify::comptype", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comptype", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::comptype", ...args: any[]): void
    connect(sigName: "notify::reserved", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reserved", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reserved", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An opaque object, referencing a folder in a Cabinet.
 * @class 
 */
class Folder extends GObject.Object {

    // Own properties of GCab-1.0.GCab.Folder

    static name: string
    static $gtype: GObject.GType<Folder>

    // Constructors of GCab-1.0.GCab.Folder

    constructor(config?: Folder.ConstructorProperties) 
    /**
     * Creates a new empty Cabinet folder. Use gcab_folder_add_file() to
     * add files to an archive.
     * 
     * A Cabinet folder is not a file path, it is a container for files.
     * @constructor 
     * @param comptype compression to used in this folder
     * @returns a new #GCabFolder
     */
    constructor(comptype: number) 
    /**
     * Creates a new empty Cabinet folder. Use gcab_folder_add_file() to
     * add files to an archive.
     * 
     * A Cabinet folder is not a file path, it is a container for files.
     * @constructor 
     * @param comptype compression to used in this folder
     * @returns a new #GCabFolder
     */
    static new(comptype: number): Folder
    _init(config?: Folder.ConstructorProperties): void
}

interface CabinetClass {

    // Own fields of GCab-1.0.GCab.CabinetClass

    parent_class: GObject.ObjectClass
}

abstract class CabinetClass {

    // Own properties of GCab-1.0.GCab.CabinetClass

    static name: string
}

interface FileClass {

    // Own fields of GCab-1.0.GCab.FileClass

    parent_class: GObject.ObjectClass
}

abstract class FileClass {

    // Own properties of GCab-1.0.GCab.FileClass

    static name: string
}

interface FolderClass {

    // Own fields of GCab-1.0.GCab.FolderClass

    parent_class: GObject.ObjectClass
}

abstract class FolderClass {

    // Own properties of GCab-1.0.GCab.FolderClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}
export default GCab;