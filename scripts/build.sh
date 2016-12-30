#!/bin/bash

REVEAL_JS_NODE_MODULES="./node_modules/reveal.js"
REVEAL_JS="${REVEAL_JS_NODE_MODULES}/js/reveal.js"
REVEAL_CSS="${REVEAL_JS_NODE_MODULES}/css/reveal.css"
REVEAL_CSS_OUT="./css"
ZENBURN="${REVEAL_JS_NODE_MODULES}/lib/css/zenburn.css"
THEME_DIR="${REVEAL_JS_NODE_MODULES}/css/theme"
REVEAL_LIB="${REVEAL_JS_NODE_MODULES}/lib/js"
REVEAL_LIB_OUT="./lib"
REVEAL_PLUGINS="${REVEAL_JS_NODE_MODULES}/plugin"
REVEAL_PLUGINS_OUT="./plugin"
LEAGUE_GOTHIC="${REVEAL_JS_NODE_MODULES}/lib/font/league-gothic"
LEAGUE_GOTHIC_OUT="./lib"

create_reveal_folder_structure() {
    mkdir -p css lib plugin
}

setup_reveal_library() {
    cp ${REVEAL_JS} .
    cp ${REVEAL_CSS} .
    cp ${ZENBURN} .
    cp -r ${THEME_DIR} ${REVEAL_CSS_OUT}
    cp -r ${REVEAL_PLUGINS} ${REVEAL_PLUGINS_OUT}
    cp -r ${LEAGUE_GOTHIC} ${LEAGUE_GOTHIC_OUT}
    cp -r ${REVEAL_LIB} ${REVEAL_LIB_OUT}
}

# Setup Folder Structure
create_reveal_folder_structure

# Put Files in correct location
setup_reveal_library