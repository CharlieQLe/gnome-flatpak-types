/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * xft-2.0
 */

/// <reference path="Gjs.d.ts" />
import type * as Gjs from './Gjs.js';
/// <reference path="xlib-2.0.d.ts" />
import type xlib from './xlib-2.0.js';
/// <reference path="GObject-2.0.d.ts" />
import type GObject from './GObject-2.0.js';

declare namespace xft {

function init(): void
interface Color {
}

class Color {

    // Own properties of xft-2.0.xft.Color

    static name: string
}

interface Draw {
}

class Draw {

    // Own properties of xft-2.0.xft.Draw

    static name: string
}

interface Font {
}

class Font {

    // Own properties of xft-2.0.xft.Font

    static name: string
}

interface GlyphSpec {
}

class GlyphSpec {

    // Own properties of xft-2.0.xft.GlyphSpec

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
export default xft;