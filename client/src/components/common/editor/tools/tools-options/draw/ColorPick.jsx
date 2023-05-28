import ColorPicker, { themes } from "react-pick-color";
import { useEffect, useState } from "react";



export function ColorPick()
{

    const [color, setColor] = useState("#fff");

    function handleChangeColor(color) {
        setColor(color.hex);
        setColorBrush(color.hex);
    }

    return (
        <ColorPicker
                color={color}
                onChange={(color) => handleChangeColor(color)}
                // theme={{
                //     background: "lightgrey",
                //     inputBackground: "grey",
                //     borderColor: "darkgrey",
                //     borderRadius: "8px",
                //     color: "black",
                //     width: "320px"
                // }}
                theme={themes.dark}
                value={color}
                id="image-drawing-color-pick"
            />
    )
}