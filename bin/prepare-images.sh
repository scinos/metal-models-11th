#!/usr/bin/env bash
set -o errexit
set -o nounset
set -o pipefail
set -x

# Original size 5472 x 3072

SOURCE=$1
TARGET=$2
ENTRY=$3

# Vertical
bigSize='3840x2156'
cardSize='1200x630'
smallSize='700x400'

mkdir -p "$TARGET"

for file in "$SOURCE"/*.JPG; do
    name=$(basename -- "$file")


    # Card
    if [[ "$name" == "card.JPG" ]];
    then
        card="${TARGET}/card.jpg"
        convert -auto-orient "$file" -resize "${cardSize}" "${card}"
        continue
    fi

    # Big image
    image="${TARGET}/${name%.*}.jpg"
    convert -auto-orient "$file" -resize "${bigSize}" "${image}"
    jpegoptim "${image}" --strip-all

    # Thumbnail
    thumb="${TARGET}/${name%.*}_thumb.jpg"
    convert -auto-orient "$file" -resize "${smallSize}"   "${thumb}"
    cwebp "${thumb}" -o "${thumb%.*}.webp";
    rm "${thumb}"

    # Entry
    if [[ "$name" == "$ENTRY" ]];
    then
        entry="${TARGET}/entry.jpg"
        convert -auto-orient "$file" -thumbnail 200x200^ -gravity center -extent 200x200 "${entry}"
        cwebp "${entry}" -o "${entry%.*}.webp";
        rm "${entry}"
    fi

done