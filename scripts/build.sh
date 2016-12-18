#!/bin/bash

REACT_LIBRARY_PATH="./node_modules/react/dist/react.min.js"
REACT_DOM_LIBRARY_PATH="./node_modules/react-dom/dist/react-dom.min.js"

copy_react_dependencies() {
    cp ${REACT_LIBRARY_PATH} ../static/build
    cp ${REACT_DOM_LIBRARY_PATH} ../static/build
}

copy_react_dependencies