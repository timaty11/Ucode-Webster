import ColorPicker, { themes } from "react-pick-color";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export function ImageDrawOptions({ setColorBrush, setStrokeWidth, setEraseWidth, tool }) {
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
        <div >
{
                tool === "pencil" ? 
                <div>
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
                
                <div className="text-white text-2xl text-center">
                <br/><label>Stroke width {tool}</label><br/>
                        <input 
                            className="text-black"
                            type="range" min={1} max={200}
                            onChange={(e) => handleChangeStrokeWidth(e)}
                            defaultValue={currentStrokeWidth}
                        ></input>
                        <label> </label>
                        <label>{currentStrokeWidth}</label>
            </div>
                </div>

                
            :
            <div className="text-white text-2xl text-center">
                <br/><label>Eraser width {tool}</label><br/>
                <input 
                            className="text-black"
                            type="range" min={1} max={200}
                            onChange={(e) => handleChangeEraserWidth(e)}
                            defaultValue={currentEraseWidth}
                        ></input>
                        <label> </label>
                        <label>{currentEraseWidth}</label>
                </div>
            
            } 
            </div>
    )
}