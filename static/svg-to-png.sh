#!/bin/bash

# Check if the output folder exists, if not, create it
OUTPUT_DIR="png_output"
mkdir -p $OUTPUT_DIR

# Loop over all SVG files in the current directory
for svg in *.svg; do
    # Extract the base filename without extension
    filename=$(basename "$svg" .svg)

    # Convert SVG to PNG using Inkscape
    inkscape "$svg" --export-filename="$OUTPUT_DIR/$filename.png"

    echo "Converted $svg to $OUTPUT_DIR/$filename.png"
done