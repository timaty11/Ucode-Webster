import { useState } from "react";
import { MagicBrushOptions } from "../tools-options/magic-brush/MagicBrushOptions";
import { MagicBrushDraw } from "./MagicBrushDraw";

export function MagicBrush({ imageUrl })
{
    const [brush, setBrush] = useState();
    console.log("🚀 ~ file: MagicBrush.jsx:5 ~ imageUrl:", imageUrl)
    return (
        <div className="columns-2">
            <MagicBrushDraw imageUrl={ imageUrl } brush={brush} />
            <MagicBrushOptions setBrush={setBrush} />
        </div>
    )
}