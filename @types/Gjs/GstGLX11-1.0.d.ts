/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * GstGLX11-1.0
 */

/// <reference path="Gjs.d.ts" />
import type * as Gjs from './Gjs.js';
/// <reference path="GstVideo-1.0.d.ts" />
import type GstVideo from './GstVideo-1.0.js';
/// <reference path="GstBase-1.0.d.ts" />
import type GstBase from './GstBase-1.0.js';
/// <reference path="Gst-1.0.d.ts" />
import type Gst from './Gst-1.0.js';
/// <reference path="GObject-2.0.d.ts" />
import type GObject from './GObject-2.0.js';
/// <reference path="GLib-2.0.d.ts" />
import type GLib from './GLib-2.0.js';
/// <reference path="GModule-2.0.d.ts" />
import type GModule from './GModule-2.0.js';
/// <reference path="GstGL-1.0.d.ts" />
import type GstGL from './GstGL-1.0.js';

declare namespace GstGLX11 {

module GLDisplayX11 {

    // Constructor properties interface

    interface ConstructorProperties extends GstGL.GLDisplay.ConstructorProperties {
    }

}

interface GLDisplayX11 {

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstGLX11-1.0.GstGLX11.GLDisplayX11

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * the contents of a #GstGLDisplayX11 are private and should only be accessed
 * through the provided API
 * @class 
 */
class GLDisplayX11 extends GstGL.GLDisplay {

    // Own properties of GstGLX11-1.0.GstGLX11.GLDisplayX11

    static name: string
    static $gtype: GObject.GType<GLDisplayX11>

    // Constructors of GstGLX11-1.0.GstGLX11.GLDisplayX11

    constructor(config?: GLDisplayX11.ConstructorProperties) 
    /**
     * Create a new #GstGLDisplayX11 from the x11 display name.  See `XOpenDisplay`()
     * for details on what is a valid name.
     * @constructor 
     * @param name a display name
     * @returns a new #GstGLDisplayX11 or %NULL
     */
    constructor(name: string | null) 
    /**
     * Create a new #GstGLDisplayX11 from the x11 display name.  See `XOpenDisplay`()
     * for details on what is a valid name.
     * @constructor 
     * @param name a display name
     * @returns a new #GstGLDisplayX11 or %NULL
     */
    static new(name: string | null): GLDisplayX11

    // Overloads of new

    static new(): GstGL.GLDisplay
    _init(config?: GLDisplayX11.ConstructorProperties): void
}

interface GLDisplayX11Class {

    // Own fields of GstGLX11-1.0.GstGLX11.GLDisplayX11Class

    object_class: GstGL.GLDisplayClass
    _padding: any[]
}

abstract class GLDisplayX11Class {

    // Own properties of GstGLX11-1.0.GstGLX11.GLDisplayX11Class

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
export default GstGLX11;