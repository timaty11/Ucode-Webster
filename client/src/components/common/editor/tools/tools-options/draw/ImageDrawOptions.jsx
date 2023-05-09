import ColorPicker, { themes } from "react-pick-color";
import { useState } from "react";

export function ImageDrawOptions({ setColorBrush, setStrokeWidth, setEraseWidth }) {
    const [color, setColor] = useState("#fff");
    const [currentStrokeWidth, setCurrentStrokeWidth] = useState(1);
    const [currentEraseWidth, setCurrentEraseWidth] = useState(1);

    function handleChangeColor(color) {
        setColor(color.hex);
        setColorBrush(color.hex);
    }

    function handleChangeStrokeWidth(e) {
        setCurrentStrokeWidth(e.target.value);
        setStrokeWidth(e.target.value);
    }

    function handleChangeEraserWidth(e) {
        setCurrentEraseWidth(e.target.value);
        setEraseWidth(e.target.value);
    }

    return (
        <div className="m-10">
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
            />
            <div className="text-white">
                <label>Stroke width</label>
                <input 
                    className="text-black"
                    type="number" 
                    onChange={(e) => handleChangeStrokeWidth(e)}
                    defaultValue={currentStrokeWidth}
                ></input>
            </div>
            <div className="text-white">
                <label>Eraser width</label>
                <input 
                    className="text-black"
                    type="number" 
                    onChange={(e) => handleChangeEraserWidth(e)}
                    defaultValue={currentEraseWidth}
                ></input>
            </div>
        </div>
    )
}