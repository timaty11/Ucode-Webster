import { useEffect, useState } from "react";
import { MagicBrushOptions } from "../tools-options/magic-brush/MagicBrushOptions";
import { MagicBrushDraw } from "./MagicBrushDraw";
import { brushes } from "../tools-options/magic-brush/brushes";

import Sketch from "react-p5";

export function MagicBrush({ imageUrl, setCroppedImageFor, onCancel }) {
    const [brush, setBrush] = useState(null);
    const [brushOption, setBrushOption] = useState(null);
    let backgroundImage;
    let starBlue;
    let bubble;
    let br;

    

//    useEffect(() => {
//     if (brushOption === 1) {
//         setBrush(starBlue);
//     }
//     else {
//         setBrush(bubble);
//     }
//    }, [])

    return (
        <div className="grid grid-cols-[82%_18%] w-full">
            <MagicBrushDraw imageUrl={imageUrl}  setCroppedImageFor={setCroppedImageFor} onCancel={onCancel} />
            <MagicBrushOptions setBrush={setBrushOption}  />
        </div>
    )
}