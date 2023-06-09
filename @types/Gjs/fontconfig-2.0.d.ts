/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * fontconfig-2.0
 */

/// <reference path="Gjs.d.ts" />
import type * as Gjs from './Gjs.js';
/// <reference path="GObject-2.0.d.ts" />
import type GObject from './GObject-2.0.js';

declare namespace fontconfig {

function init(): void
interface Pattern {
}

class Pattern {

    // Own properties of fontconfig-2.0.fontconfig.Pattern

    static name: string
}

interface CharSet {
}

class CharSet {

    // Own properties of fontconfig-2.0.fontconfig.CharSet

    static name: string
}

interface Config {
}

class Config {

    // Own properties of fontconfig-2.0.fontconfig.Config

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
export default fontconfig;