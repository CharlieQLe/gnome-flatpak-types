/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */

import type * as Gjs from './Gjs.js'
import type Adw1 from "./Adw-1.js";
import type AppStreamGlib10 from "./AppStreamGlib-1.0.js";
import type Atk10 from "./Atk-1.0.js";
import type Atspi20 from "./Atspi-2.0.js";
import type DBus10 from "./DBus-1.0.js";
import type DBusGLib10 from "./DBusGLib-1.0.js";
import type GCab10 from "./GCab-1.0.js";
import type GDesktopEnums30 from "./GDesktopEnums-3.0.js";
import type GIRepository20 from "./GIRepository-2.0.js";
import type GL10 from "./GL-1.0.js";
import type GLib20 from "./GLib-2.0.js";
import type GModule20 from "./GModule-2.0.js";
import type GObject20 from "./GObject-2.0.js";
import type GUdev10 from "./GUdev-1.0.js";
import type Gck2 from "./Gck-2.js";
import type Gcr4 from "./Gcr-4.js";
import type Gdk40 from "./Gdk-4.0.js";
import type GdkPixbuf20 from "./GdkPixbuf-2.0.js";
import type GdkPixdata20 from "./GdkPixdata-2.0.js";
import type GdkWayland40 from "./GdkWayland-4.0.js";
import type GdkX1140 from "./GdkX11-4.0.js";
import type Gee08 from "./Gee-0.8.js";
import type Geoclue20 from "./Geoclue-2.0.js";
import type Gio20 from "./Gio-2.0.js";
import type Graphene10 from "./Graphene-1.0.js";
import type Gsk40 from "./Gsk-4.0.js";
import type Gst10 from "./Gst-1.0.js";
import type GstAllocators10 from "./GstAllocators-1.0.js";
import type GstApp10 from "./GstApp-1.0.js";
import type GstAudio10 from "./GstAudio-1.0.js";
import type GstBadAudio10 from "./GstBadAudio-1.0.js";
import type GstBase10 from "./GstBase-1.0.js";
import type GstCheck10 from "./GstCheck-1.0.js";
import type GstCodecs10 from "./GstCodecs-1.0.js";
import type GstController10 from "./GstController-1.0.js";
import type GstGL10 from "./GstGL-1.0.js";
import type GstGLEGL10 from "./GstGLEGL-1.0.js";
import type GstGLWayland10 from "./GstGLWayland-1.0.js";
import type GstGLX1110 from "./GstGLX11-1.0.js";
import type GstInsertBin10 from "./GstInsertBin-1.0.js";
import type GstMpegts10 from "./GstMpegts-1.0.js";
import type GstNet10 from "./GstNet-1.0.js";
import type GstPbutils10 from "./GstPbutils-1.0.js";
import type GstPlay10 from "./GstPlay-1.0.js";
import type GstPlayer10 from "./GstPlayer-1.0.js";
import type GstRtp10 from "./GstRtp-1.0.js";
import type GstRtsp10 from "./GstRtsp-1.0.js";
import type GstSdp10 from "./GstSdp-1.0.js";
import type GstTag10 from "./GstTag-1.0.js";
import type GstTranscoder10 from "./GstTranscoder-1.0.js";
import type GstVideo10 from "./GstVideo-1.0.js";
import type GstVulkan10 from "./GstVulkan-1.0.js";
import type GstVulkanWayland10 from "./GstVulkanWayland-1.0.js";
import type GstVulkanXCB10 from "./GstVulkanXCB-1.0.js";
import type GstWebRTC10 from "./GstWebRTC-1.0.js";
import type Gtk40 from "./Gtk-4.0.js";
import type GtkSource5 from "./GtkSource-5.js";
import type Handy1 from "./Handy-1.js";
import type HarfBuzz00 from "./HarfBuzz-0.0.js";
import type IBus10 from "./IBus-1.0.js";
import type JavaScriptCore60 from "./JavaScriptCore-6.0.js";
import type Json10 from "./Json-1.0.js";
import type Manette02 from "./Manette-0.2.js";
import type Nice01 from "./Nice-0.1.js";
import type Notify07 from "./Notify-0.7.js";
import type Pango10 from "./Pango-1.0.js";
import type PangoCairo10 from "./PangoCairo-1.0.js";
import type PangoFT210 from "./PangoFT2-1.0.js";
import type PangoFc10 from "./PangoFc-1.0.js";
import type PangoOT10 from "./PangoOT-1.0.js";
import type Polkit10 from "./Polkit-1.0.js";
import type Rsvg20 from "./Rsvg-2.0.js";
import type Secret1 from "./Secret-1.js";
import type Soup30 from "./Soup-3.0.js";
import type Tracker30 from "./Tracker-3.0.js";
import type Vulkan10 from "./Vulkan-1.0.js";
import type WebKit60 from "./WebKit-6.0.js";
import type WebKitWebProcessExtension60 from "./WebKitWebProcessExtension-6.0.js";
import type Cairo10 from "./cairo-1.0.js";
import type Fontconfig20 from "./fontconfig-2.0.js";
import type Freetype220 from "./freetype2-2.0.js";
import type Libxml220 from "./libxml2-2.0.js";
import type Win3210 from "./win32-1.0.js";
import type Xfixes40 from "./xfixes-4.0.js";
import type Xft20 from "./xft-2.0.js";
import type Xlib20 from "./xlib-2.0.js";
import type Xrandr13 from "./xrandr-1.3.js";

// See also https://github.com/microsoft/TypeScript/blob/main/lib/lib.dom.d.ts
declare global {
    function print(...args: any[]): void
    function printerr(...args: any[]): void
    function log(message: any): void
    function logError(exception: object, message?: any): void
    function logError(message?: any): void

    interface Console {
        /**
         * Logs a critical message if the condition is not truthy.
         * {@link console.error()} for additional information.
         *
         * @param condition a boolean condition which, if false, causes
         *   the log to print
         * @param data formatting substitutions, if applicable
         * @returns
         */
        assert(condition: boolean, ...data: any[]): void

        /**
         * Resets grouping and clears the terminal on systems supporting ANSI
         * terminal control sequences.
         *
         * In file-based stdout or systems which do not support clearing,
         * console.clear() has no visual effect.
         *
         */
        clear(): void

        /**
         * Logs a message with severity equal to {@link GLib20.LogLevelFlags.DEBUG}.
         *
         * @param  {...any} data formatting substitutions, if applicable
         */
        debug(...data: any[]): void

        /**
         * Logs a message with severity equal to {@link GLib20.LogLevelFlags.CRITICAL}.
         * Does not use {@link GLib20.LogLevelFlags.ERROR} to avoid asserting and
         * forcibly shutting down the application.
         *
         * @param data formatting substitutions, if applicable
         */
        error(...data: any[]): void

        /**
         * Logs a message with severity equal to {@link GLib20.LogLevelFlags.INFO}.
         *
         * @param data formatting substitutions, if applicable
         */
        info(...data: any[]): void

        /**
         * Logs a message with severity equal to {@link GLib20.LogLevelFlags.MESSAGE}.
         *
         * @param data formatting substitutions, if applicable
         */
        log(...data: any[]): void

        // 1.1.7 table(tabularData, properties)
        table(tabularData: any, _properties: never): void

        /**
         * @param data formatting substitutions, if applicable
         */
        trace(...data: any[]): void

        /**
         * @param data formatting substitutions, if applicable
         */
        warn(...data: any[]): void

        /**
         * @param item an item to format generically
         * @param [options] any additional options for the formatter. Unused
         *   in our implementation.
         */
        dir(item: object, options: never): void

        /**
         * @param data formatting substitutions, if applicable
         */
        dirxml(...data: any[]): void

        // 1.2 Counting functions
        // https://console.spec.whatwg.org/#counting

        /**
         * Logs how many times console.count(label) has been called with a given
         * label.
         * {@link console.countReset()} for resetting a count.
         *
         * @param label unique identifier for this action
         */
        count(label: string): void

        /**
         * @param label the unique label to reset the count for
         */
        countReset(label: string): void

        // 1.3 Grouping functions
        // https://console.spec.whatwg.org/#grouping

        /**
         * @param data formatting substitutions, if applicable
         */
        group(...data: any[]): void

        /**
         * Alias for console.group()
         *
         * @param  {...any} data formatting substitutions, if applicable
         */
        groupCollapsed(...data: any[]): void

        /**
         */
        groupEnd(): void

        // 1.4 Timing functions
        // https://console.spec.whatwg.org/#timing

        /**
         * @param label unique identifier for this action, pass to
         *   console.timeEnd() to complete
         */
        time(label: string): void

        /**
         * Logs the time since the last call to console.time(label) where label is
         * the same.
         *
         * @param label unique identifier for this action, pass to
         *   console.timeEnd() to complete
         * @param data string substitutions, if applicable
         */
        timeLog(label: string, ...data: any[]): void

        /**
         * Logs the time since the last call to console.time(label) and completes
         * the action.
         * Call console.time(label) again to re-measure.
         *
         * @param label unique identifier for this action
         */
        timeEnd(label: string): void

        // Non-standard functions which are de-facto standards.
        // Similar to Node, we define these as no-ops for now.

        /**
         * @deprecated Not implemented in GJS
         *
         * @param _label unique identifier for this action, pass to
         *   console.profileEnd to complete
         */
        profile(_label: string): void

        /**
         * @deprecated Not implemented in GJS
         *
         * @param _label unique identifier for this action
         */
        profileEnd(_label: string): void

        /**
         * @deprecated Not implemented in GJS
         *
         * @param _label unique identifier for this action
         */
        timeStamp(_label: string): void

        // GJS-specific extensions for integrating with GLib structured logging

        /**
         * @param logDomain the GLib log domain this Console should print
         *   with. Defaults to 'Gjs-Console'.
         */
        setLogDomain(logDomain: string): void

        logDomain: string
    }

    const pkg: typeof Gjs.Package
    const console: Console
    

    // https://gitlab.gnome.org/GNOME/gjs/-/blob/1.73.2/modules/esm/_encoding/encodingMap.js#L7-232
    type TextDecoderEncoding =
        | 'unicode-1-1-utf-8'
        | 'unicode11utf8'
        | 'unicode20utf8'
        | 'utf-8'
        | 'utf8'
        | 'x-unicode20utf8'
        | '866'
        | 'cp866'
        | 'csibm866'
        | 'ibm866'
        | 'csisolatin2'
        | 'iso-8859-2'
        | 'iso-ir-101'
        | 'iso8859-2'
        | 'iso88592'
        | 'iso_8859-2'
        | 'iso_8859-2:1987'
        | 'l2'
        | 'latin2'
        | 'csisolatin3'
        | 'iso-8859-3'
        | 'iso-ir-109'
        | 'iso8859-3'
        | 'iso88593'
        | 'iso_8859-3'
        | 'iso_8859-3:1988'
        | 'l3'
        | 'latin3'
        | 'csisolatin4'
        | 'iso-8859-4'
        | 'iso-ir-110'
        | 'iso8859-4'
        | 'iso88594'
        | 'iso_8859-4'
        | 'iso_8859-4:1988'
        | 'l4'
        | 'latin4'
        | 'csisolatincyrillic'
        | 'cyrillic'
        | 'iso-8859-5'
        | 'iso-ir-144'
        | 'iso8859-5'
        | 'iso88595'
        | 'iso_8859-5'
        | 'iso_8859-5:1988'
        | 'arabic'
        | 'asmo-708'
        | 'csiso88596e'
        | 'csiso88596i'
        | 'csisolatinarabic'
        | 'ecma-114'
        | 'iso-8859-6'
        | 'iso-8859-6-e'
        | 'iso-8859-6-i'
        | 'iso-ir-127'
        | 'iso8859-6'
        | 'iso88596'
        | 'iso_8859-6'
        | 'iso_8859-6:1987'
        | 'csisolatingreek'
        | 'ecma-118'
        | 'elot_928'
        | 'greek'
        | 'greek8'
        | 'iso-8859-7'
        | 'iso-ir-126'
        | 'iso8859-7'
        | 'iso88597'
        | 'iso_8859-7'
        | 'iso_8859-7:1987'
        | 'sun_eu_greek'
        | 'csiso88598e'
        | 'csisolatinhebrew'
        | 'hebrew'
        | 'iso-8859-8'
        | 'iso-8859-8-e'
        | 'iso-ir-138'
        | 'iso8859-8'
        | 'iso88598'
        | 'iso_8859-8'
        | 'iso_8859-8:1988'
        | 'visual'
        | 'csiso88598i'
        | 'iso-8859-8-i'
        | 'logical'
        | 'csisolatin6'
        | 'iso-8859-10'
        | 'iso-ir-157'
        | 'iso8859-10'
        | 'iso885910'
        | 'l6'
        | 'latin6'
        | 'iso-8859-13'
        | 'iso8859-13'
        | 'iso885913'
        | 'iso-8859-14'
        | 'iso8859-14'
        | 'iso885914'
        | 'csisolatin9'
        | 'iso-8859-15'
        | 'iso8859-15'
        | 'iso885915'
        | 'iso_8859-15'
        | 'l9'
        | 'iso-8859-16'
        | 'cskoi8r'
        | 'koi'
        | 'koi8'
        | 'koi8-r'
        | 'koi8_r'
        | 'koi8-ru'
        | 'koi8-u'
        | 'csmacintosh'
        | 'mac'
        | 'macintosh'
        | 'x-mac-roman'
        | 'dos-874'
        | 'iso-8859-11'
        | 'iso8859-11'
        | 'iso885911'
        | 'tis-620'
        | 'windows-874'
        | 'cp1250'
        | 'windows-1250'
        | 'x-cp1250'
        | 'cp1251'
        | 'windows-1251'
        | 'x-cp1251'
        | 'ansi_x3.4-1968'
        | 'ascii'
        | 'cp1252'
        | 'cp819'
        | 'csisolatin1'
        | 'ibm819'
        | 'iso-8859-1'
        | 'iso-ir-100'
        | 'iso8859-1'
        | 'iso88591'
        | 'iso_8859-1'
        | 'iso_8859-1:1987'
        | 'l1'
        | 'latin1'
        | 'us-ascii'
        | 'windows-1252'
        | 'x-cp1252'
        | 'cp1253'
        | 'windows-1253'
        | 'x-cp1253'
        | 'cp1254'
        | 'csisolatin5'
        | 'iso-8859-9'
        | 'iso-ir-148'
        | 'iso8859-9'
        | 'iso88599'
        | 'iso_8859-9'
        | 'iso_8859-9:1989'
        | 'l5'
        | 'latin5'
        | 'windows-1254'
        | 'x-cp1254'
        | 'cp1255'
        | 'windows-1255'
        | 'x-cp1255'
        | 'cp1256'
        | 'windows-1256'
        | 'x-cp1256'
        | 'cp1257'
        | 'windows-1257'
        | 'x-cp1257'
        | 'cp1258'
        | 'windows-1258'
        | 'x-cp1258'
        | 'x-mac-cyrillic'
        | 'x-mac-ukrainian'
        | 'chinese'
        | 'csgb2312'
        | 'csiso58gb231280'
        | 'gb2312'
        | 'gb_2312'
        | 'gb_2312-80'
        | 'gbk'
        | 'iso-ir-58'
        | 'x-gbk'
        | 'gb18030'
        | 'big5'
        | 'cn-big5'
        | 'csbig5'
        | 'x-x-big5'
        | 'cseucpkdfmtjapanese'
        | 'euc-jp'
        | 'x-euc-jp'
        | 'csiso2022jp'
        | 'iso-2022-jp'
        | 'csshiftjis'
        | 'ms932'
        | 'ms_kanji'
        | 'shift-jis'
        | 'shift_jis'
        | 'sjis'
        | 'windows-31j'
        | 'x-sjis'
        | 'cseuckr'
        | 'csksc56011987'
        | 'euc-kr'
        | 'iso-ir-149'
        | 'korean'
        | 'ks_c_5601-1987'
        | 'ks_c_5601-1989'
        | 'ksc5601'
        | 'ksc_5601'
        | 'windows-949'
        | 'unicodefffe'
        | 'utf-16be'
        | 'csunicode'
        | 'iso-10646-ucs-2'
        | 'ucs-2'
        | 'unicode'
        | 'unicodefeff'
        | 'utf-16'
        | 'utf-16le'

    interface TextDecodeOptions {
        // As of Gjs 1.73.2 stream mode is not supported yet.
        // stream?: boolean
    }

    interface TextDecoderOptions {
        /** Indicates whether the error mode is fatal. */
        fatal?: boolean
        /** Indicates whether whether the byte order mark is ignored. */
        ignoreBOM?: boolean
    }

    /**
     * The TextDecoder interface represents a decoder for a specific text encoding.
     * It takes a stream of bytes as input and emits a stream of code points.
     *
     * @version Gjs 1.69.2
     */
    interface TextDecoder {
        /** A string containing the name of the decoder, that is a string describing the method the TextDecoder will use. */
        readonly encoding: TextDecoderEncoding
        /** A Boolean indicating whether the error mode is fatal. */
        readonly fatal: boolean
        /** A Boolean indicating whether the byte order mark is ignored. */
        readonly ignoreBOM: boolean

        /**
         * Returns a string containing the text decoded with the method of the specific TextDecoder object.
         *
         * If the error mode is "fatal" and the encoder method encounter an error it WILL THROW a TypeError.
         *
         * @param input Buffer containing the text to decode
         * @param options Object defining the decode options
         */
        decode(input?: ArrayBufferView | ArrayBuffer, options?: TextDecodeOptions): string
    }

    
    const TextDecoder: {
        prototype: TextDecoder
        new (label?: TextDecoderEncoding, options?: TextDecoderOptions): TextDecoder
    }
    

    interface TextEncoderEncodeIntoResult {
        read?: number
        written?: number
    }

    /**
     * TextEncoder takes a stream of code points as input and emits a stream of bytes.
     *
     * @version Gjs 1.69.2
     */
    interface TextEncoder {
        readonly encoding: 'utf-8'

        /**
         * Takes a string as input, and returns a buffer containing the text given in parameters encoded with the UTF-8 method.
         *
         * @param input Text to encode.
         */
        encode(input?: string): Uint8Array
        /**
         * Takes a string to encode and a destination Uint8Array to put resulting UTF-8 encoded text into,
         * and returns a dictionary object indicating the progress of the encoding.
         *
         * This is potentially more performant than the older encode() method.
         *
         * @param source Text to encode.
         * @param destination Buffer where to place the resulting UTF-8 encoded text into.
         */
        encodeInto(source: string, destination: Uint8Array): TextEncoderEncodeIntoResult
    }

    
    const TextEncoder: {
        prototype: TextEncoder
        new (): TextEncoder
    }
    

    interface BooleanConstructor {
        $gtype: GObject20.GType<boolean>
    }

    interface NumberConstructor {
        $gtype: GObject20.GType<number>
    }

    interface StringConstructor {
        $gtype: GObject20.GType<string>
    }

    const ARGV: string[]

    // Timers
    // See https://gitlab.gnome.org/GNOME/gjs/-/blob/master/modules/esm/_timers.js

    /**
     * @version Gjs 1.71.1
     * @param callback a callback function
     * @param delay the duration in milliseconds to wait before running callback
     * @param args arguments to pass to callback
     */
    function setTimeout(callback: (...args: any[]) => any, delay?: number, ...args: any[]): GLib20.Source

    /**
     * @version Gjs 1.71.1
     * @param callback a callback function
     * @param delay the duration in milliseconds to wait between calling callback
     * @param args arguments to pass to callback
     */
    function setInterval(callback: (...args: any[]) => any, delay?: number, ...args: any[]): GLib20.Source

    /**
     * @version Gjs 1.71.1
     * @param timeout the timeout to clear
     */
    function clearTimeout(timeout: GLib20.Source): void

    /**
     * @version Gjs 1.71.1
     * @param timeout the timeout to clear
     */
    function clearInterval(timeout: GLib20.Source): void

    const imports: typeof Gjs & {
        gi: {
              Adw:                typeof Adw1
              AppStreamGlib:                typeof AppStreamGlib10
              Atk:                typeof Atk10
              Atspi:                typeof Atspi20
              DBus:                typeof DBus10
              DBusGLib:                typeof DBusGLib10
              GCab:                typeof GCab10
              GDesktopEnums:                typeof GDesktopEnums30
              GIRepository:                typeof GIRepository20
              GL:                typeof GL10
              GLib:                typeof GLib20
              GModule:                typeof GModule20
              GObject:                typeof GObject20
              GUdev:                typeof GUdev10
              Gck:                typeof Gck2
              Gcr:                typeof Gcr4
              Gdk:                typeof Gdk40
              GdkPixbuf:                typeof GdkPixbuf20
              GdkPixdata:                typeof GdkPixdata20
              GdkWayland:                typeof GdkWayland40
              GdkX11:                typeof GdkX1140
              Gee:                typeof Gee08
              Geoclue:                typeof Geoclue20
              Gio:                typeof Gio20
              Graphene:                typeof Graphene10
              Gsk:                typeof Gsk40
              Gst:                typeof Gst10
              GstAllocators:                typeof GstAllocators10
              GstApp:                typeof GstApp10
              GstAudio:                typeof GstAudio10
              GstBadAudio:                typeof GstBadAudio10
              GstBase:                typeof GstBase10
              GstCheck:                typeof GstCheck10
              GstCodecs:                typeof GstCodecs10
              GstController:                typeof GstController10
              GstGL:                typeof GstGL10
              GstGLEGL:                typeof GstGLEGL10
              GstGLWayland:                typeof GstGLWayland10
              GstGLX11:                typeof GstGLX1110
              GstInsertBin:                typeof GstInsertBin10
              GstMpegts:                typeof GstMpegts10
              GstNet:                typeof GstNet10
              GstPbutils:                typeof GstPbutils10
              GstPlay:                typeof GstPlay10
              GstPlayer:                typeof GstPlayer10
              GstRtp:                typeof GstRtp10
              GstRtsp:                typeof GstRtsp10
              GstSdp:                typeof GstSdp10
              GstTag:                typeof GstTag10
              GstTranscoder:                typeof GstTranscoder10
              GstVideo:                typeof GstVideo10
              GstVulkan:                typeof GstVulkan10
              GstVulkanWayland:                typeof GstVulkanWayland10
              GstVulkanXCB:                typeof GstVulkanXCB10
              GstWebRTC:                typeof GstWebRTC10
              Gtk:                typeof Gtk40
              GtkSource:                typeof GtkSource5
              Handy:                typeof Handy1
              HarfBuzz:                typeof HarfBuzz00
              IBus:                typeof IBus10
              JavaScriptCore:                typeof JavaScriptCore60
              Json:                typeof Json10
              Manette:                typeof Manette02
              Nice:                typeof Nice01
              Notify:                typeof Notify07
              Pango:                typeof Pango10
              PangoCairo:                typeof PangoCairo10
              PangoFT2:                typeof PangoFT210
              PangoFc:                typeof PangoFc10
              PangoOT:                typeof PangoOT10
              Polkit:                typeof Polkit10
              Rsvg:                typeof Rsvg20
              Secret:                typeof Secret1
              Soup:                typeof Soup30
              Tracker:                typeof Tracker30
              Vulkan:                typeof Vulkan10
              WebKit:                typeof WebKit60
              WebKitWebProcessExtension:                typeof WebKitWebProcessExtension60
              cairo:                typeof Cairo10
              fontconfig:                typeof Fontconfig20
              freetype2:                typeof Freetype220
              libxml2:                typeof Libxml220
              win32:                typeof Win3210
              xfixes:                typeof Xfixes40
              xft:                typeof Xft20
              xlib:                typeof Xlib20
              xrandr:                typeof Xrandr13
            versions: {
                  Adw:                    '1'
                  AppStreamGlib:                    '1.0'
                  Atk:                    '1.0'
                  Atspi:                    '2.0'
                  DBus:                    '1.0'
                  DBusGLib:                    '1.0'
                  GCab:                    '1.0'
                  GDesktopEnums:                    '3.0'
                  GIRepository:                    '2.0'
                  GL:                    '1.0'
                  GLib:                    '2.0'
                  GModule:                    '2.0'
                  GObject:                    '2.0'
                  GUdev:                    '1.0'
                  Gck:                    '2'
                  Gcr:                    '4'
                  Gdk:                    '4.0'
                  GdkPixbuf:                    '2.0'
                  GdkPixdata:                    '2.0'
                  GdkWayland:                    '4.0'
                  GdkX11:                    '4.0'
                  Gee:                    '0.8'
                  Geoclue:                    '2.0'
                  Gio:                    '2.0'
                  Graphene:                    '1.0'
                  Gsk:                    '4.0'
                  Gst:                    '1.0'
                  GstAllocators:                    '1.0'
                  GstApp:                    '1.0'
                  GstAudio:                    '1.0'
                  GstBadAudio:                    '1.0'
                  GstBase:                    '1.0'
                  GstCheck:                    '1.0'
                  GstCodecs:                    '1.0'
                  GstController:                    '1.0'
                  GstGL:                    '1.0'
                  GstGLEGL:                    '1.0'
                  GstGLWayland:                    '1.0'
                  GstGLX11:                    '1.0'
                  GstInsertBin:                    '1.0'
                  GstMpegts:                    '1.0'
                  GstNet:                    '1.0'
                  GstPbutils:                    '1.0'
                  GstPlay:                    '1.0'
                  GstPlayer:                    '1.0'
                  GstRtp:                    '1.0'
                  GstRtsp:                    '1.0'
                  GstSdp:                    '1.0'
                  GstTag:                    '1.0'
                  GstTranscoder:                    '1.0'
                  GstVideo:                    '1.0'
                  GstVulkan:                    '1.0'
                  GstVulkanWayland:                    '1.0'
                  GstVulkanXCB:                    '1.0'
                  GstWebRTC:                    '1.0'
                  Gtk:                    '4.0'
                  GtkSource:                    '5'
                  Handy:                    '1'
                  HarfBuzz:                    '0.0'
                  IBus:                    '1.0'
                  JavaScriptCore:                    '6.0'
                  Json:                    '1.0'
                  Manette:                    '0.2'
                  Nice:                    '0.1'
                  Notify:                    '0.7'
                  Pango:                    '1.0'
                  PangoCairo:                    '1.0'
                  PangoFT2:                    '1.0'
                  PangoFc:                    '1.0'
                  PangoOT:                    '1.0'
                  Polkit:                    '1.0'
                  Rsvg:                    '2.0'
                  Secret:                    '1'
                  Soup:                    '3.0'
                  Tracker:                    '3.0'
                  Vulkan:                    '1.0'
                  WebKit:                    '6.0'
                  WebKitWebProcessExtension:                    '6.0'
                  cairo:                    '1.0'
                  fontconfig:                    '2.0'
                  freetype2:                    '2.0'
                  libxml2:                    '2.0'
                  win32:                    '1.0'
                  xfixes:                    '4.0'
                  xft:                    '2.0'
                  xlib:                    '2.0'
                  xrandr:                    '1.3'
            }
        }
        lang: typeof Gjs.Lang
        system: typeof Gjs.System
        signals: typeof Gjs.Signals
        package: typeof Gjs.Package
        mainloop: typeof Gjs.Mainloop
        searchPath: string[]
    }
}

declare const _imports: typeof imports
export default _imports
