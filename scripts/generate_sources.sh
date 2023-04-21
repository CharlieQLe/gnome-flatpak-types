#!/bin/bash

if ! command -v flatpak-node-generator > /dev/null ; then
    echo "Flatpak Node Generator not found! Install from \"https://github.com/flatpak/flatpak-builder-tools\"!"
    exit 1
fi

flatpak-node-generator yarn -r yarn.lock -o modules/yarn-deps/generated-sources.json

# TODO: use `~/.var/app/com.visualstudio.code/data/python/bin/flatpak-node-generator` if in flatpak