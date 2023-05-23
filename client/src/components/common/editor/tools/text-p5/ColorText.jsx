import { useState } from "react";
import ColorPicker, { themes } from "react-pick-color";

export function ColorText({setColorText})
{
    const [color, setColor] = useState('#fff');
    return (
        <div>
            <ColorPicker color={color} onChange={(color) => {setColor(color.hex); setColorText(color.hex)}} theme={themes.dark} />
            <h3>Recent colors</h3>
        </div>
    )
}