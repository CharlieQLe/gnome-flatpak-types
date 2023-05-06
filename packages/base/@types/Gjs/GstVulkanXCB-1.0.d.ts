/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * GstVulkanXCB-1.0
 */

/// <reference path="Gjs.d.ts" />
import type * as Gjs from './Gjs.js';
/// <reference path="Vulkan-1.0.d.ts" />
import type Vulkan from './Vulkan-1.0.js';
/// <reference path="GstVulkan-1.0.d.ts" />
import type GstVulkan from './GstVulkan-1.0.js';
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

declare namespace GstVulkanXCB {

module VulkanDisplayXCB {

    // Constructor properties interface

    interface ConstructorProperties extends GstVulkan.VulkanDisplay.ConstructorProperties {
    }

}

interface VulkanDisplayXCB {

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

    // Class property signals of GstVulkanXCB-1.0.GstVulkanXCB.VulkanDisplayXCB

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * the contents of a #GstVulkanDisplayXCB are private and should only be accessed
 * through the provided API
 * @class 
 */
class VulkanDisplayXCB extends GstVulkan.VulkanDisplay {

    // Own properties of GstVulkanXCB-1.0.GstVulkanXCB.VulkanDisplayXCB

    static name: string
    static $gtype: GObject.GType<VulkanDisplayXCB>

    // Constructors of GstVulkanXCB-1.0.GstVulkanXCB.VulkanDisplayXCB

    constructor(config?: VulkanDisplayXCB.ConstructorProperties) 
    /**
     * Create a new #GstVulkanDisplayXCB from the xcb display name.  See XOpenDisplay\()
     * for details on what is a valid name.
     * @constructor 
     * @param name a display name
     * @returns a new #GstVulkanDisplayXCB or %NULL
     */
    constructor(name: string | null) 
    /**
     * Create a new #GstVulkanDisplayXCB from the xcb display name.  See XOpenDisplay\()
     * for details on what is a valid name.
     * @constructor 
     * @param name a display name
     * @returns a new #GstVulkanDisplayXCB or %NULL
     */
    static new(name: string | null): VulkanDisplayXCB

    // Overloads of new

    static new(instance: GstVulkan.VulkanInstance): GstVulkan.VulkanDisplay
    _init(config?: VulkanDisplayXCB.ConstructorProperties): void
}

interface VulkanDisplayXCBClass {

    // Own fields of GstVulkanXCB-1.0.GstVulkanXCB.VulkanDisplayXCBClass

    object_class: GstVulkan.VulkanDisplayClass
}

abstract class VulkanDisplayXCBClass {

    // Own properties of GstVulkanXCB-1.0.GstVulkanXCB.VulkanDisplayXCBClass

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
export default GstVulkanXCB;