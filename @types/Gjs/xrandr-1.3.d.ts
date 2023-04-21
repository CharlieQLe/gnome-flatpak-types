/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * xrandr-1.3
 */

/// <reference path="Gjs.d.ts" />
import type * as Gjs from './Gjs.js';
/// <reference path="GObject-2.0.d.ts" />
import type GObject from './GObject-2.0.js';

declare namespace xrandr {

interface ScreenSize {
}

class ScreenSize {

    // Own properties of xrandr-1.3.xrandr.ScreenSize

    static name: string
}

interface ScreenChangeNotifyEvent {
}

class ScreenChangeNotifyEvent {

    // Own properties of xrandr-1.3.xrandr.ScreenChangeNotifyEvent

    static name: string
}

interface NotifyEvent {
}

class NotifyEvent {

    // Own properties of xrandr-1.3.xrandr.NotifyEvent

    static name: string
}

interface ScreenResources {
}

class ScreenResources {

    // Own properties of xrandr-1.3.xrandr.ScreenResources

    static name: string
}

interface OutputChangeNotifyEvent {
}

class OutputChangeNotifyEvent {

    // Own properties of xrandr-1.3.xrandr.OutputChangeNotifyEvent

    static name: string
}

interface CrtcChangeNotifyEvent {
}

class CrtcChangeNotifyEvent {

    // Own properties of xrandr-1.3.xrandr.CrtcChangeNotifyEvent

    static name: string
}

interface OutputPropertyNotifyEvent {
}

class OutputPropertyNotifyEvent {

    // Own properties of xrandr-1.3.xrandr.OutputPropertyNotifyEvent

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
export default xrandr;