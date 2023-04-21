#!/bin/bash

rm ./gi-types/*.gir
flatpak run --filesystem="$(pwd)" --command=sh org.gnome.Sdk//44 -c '/usr/bin/cp /usr/share/gir-1.0/*.gir ./girs/'