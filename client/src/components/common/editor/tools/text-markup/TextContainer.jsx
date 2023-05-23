import { TextOnImage } from "./TextOnImage"
import { TextOptions } from "../text-p5/TextOptions"
import { useState } from "react"

export function TextContainer( {imageUrl}) {
    const [fontFamily, setFontFamily] = useState("Verdana");
    const [colorText, setColorText] = useState('black');

    return (
        <div className="w-full grid grid-cols-[80%_20%]">
            <TextOnImage
                imageUrl={imageUrl}
                fontFamily={fontFamily}
                colorText={colorText}
            />
            <TextOptions setFontFamily={setFontFamily} setColorText={setColorText} />
        </div>
    )
}