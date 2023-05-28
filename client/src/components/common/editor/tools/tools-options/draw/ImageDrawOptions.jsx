import ColorPicker, { themes } from "react-pick-color";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export function ImageDrawOptions({ setColorBrush, setStrokeWidth, setEraseWidth, tool }) {
    const [color, setColor] = useState("#fff");
    const [currentStrokeWidth, setCurrentStrokeWidth] = useState(1);
    const [currentEraseWidth, setCurrentEraseWidth] = useState(1);

    function handleChangeColor(color) {
        setColor(color.hex);
        setColorBrush(color.rgb);
    }

    function handleChangeStrokeWidth(e) {
        setCurrentStrokeWidth(e.target.value);
        setStrokeWidth(e.target.value);
    }

    function handleChangeEraserWidth(e) {
        setCurrentEraseWidth(e.target.value);
        setEraseWidth(e.target.value);
    }



    const [tools, setTools] = useState('');
    // console.log(1, tools)
    testValue = tools;
    useEffect(() => {
        temp = toool;
    })

    return (
        <div className="h-full mt-64">
            {/* <ColorPicker
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
                nodeValue={color}
                className="image-drawing-color-pick"
            /> */}
            {
                tool === "pencil" ?
                    <div>
                        <div id="parent-color-picker"></div>
                        <div className="text-white m-10 text-xl text-center">
                            <label>Stroke width</label><br />
                            <input
                                id="image-drawing-stroke-width"
                                className="text-black"
                                type="range" min={1} max={200}
                                onChange={(e) => handleChangeStrokeWidth(e)}
                                value={currentStrokeWidth}
                            ></input>
                            <label> </label>
                            <label>{currentStrokeWidth}</label></div>
                    </div>
                    :
                    <div className="text-white m-10 text-xl text-center">
                        <label>Eraser width</label><br />
                        <input
                            id="image-drawing-eraser-width"
                            className="text-black"
                            type="range" min={1} max={200}
                            onChange={(e) => handleChangeEraserWidth(e)}
                            defaultValue={currentEraseWidth}
                        ></input>
                        <label> </label>
                        <label>{currentEraseWidth}</label>
                    </div>
            }

            {/* return ( */}
            {/* <div >
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
            </div> */}
        </div>

    )
}