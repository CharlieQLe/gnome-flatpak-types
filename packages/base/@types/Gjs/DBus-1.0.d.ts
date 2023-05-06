/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * DBus-1.0
 */

/// <reference path="Gjs.d.ts" />
import type * as Gjs from './Gjs.js';
/// <reference path="GObject-2.0.d.ts" />
import type GObject from './GObject-2.0.js';

declare namespace DBus {

enum BusType {
    SESSION,
    SYSTEM,
    STARTER,
}
interface Connection {
}

class Connection {

    // Own properties of DBus-1.0.DBus.Connection

    static name: string
}

interface Error {
}

class Error {

    // Own properties of DBus-1.0.DBus.Error

    static name: string
}

interface Message {
}

class Message {

    // Own properties of DBus-1.0.DBus.Message

    static name: string
}

interface MessageIter {
}

class MessageIter {

    // Own properties of DBus-1.0.DBus.MessageIter

    static name: string
}

interface PendingCall {
}

class PendingCall {

    // Own properties of DBus-1.0.DBus.PendingCall

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
export default DBus;