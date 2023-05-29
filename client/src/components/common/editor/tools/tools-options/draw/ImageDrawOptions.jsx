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

    let testValue;
    let toool;
    let temp;


    const [tools, setTools] = useState('');
    // console.log(1, tools)
    testValue = tools;
    useEffect(() => {
        temp = toool;
    })

    return ( //mt-64
        <div className="h-full mt-24">
            {/* {
                tool === "pencil" ? */}
            <div>
                <div className="inline-flex text-center items-center ml-8">
                    <label className="text-white">Color: </label>
                    <div className="text-white m-10 text-xl text-center" id="parent-color-picker"></div>
                </div>

                <div className="text-white m-10 text-xl text-center">
                    <label>Stroke width</label><br />
                    <input
                        id="image-drawing-stroke-width"
                        className="text-black w-full"
                        type="range" min={1} max={200}
                        onChange={(e) => handleChangeStrokeWidth(e)}
                        value={currentStrokeWidth}
                    ></input>
                    {/* <label> </label> */}
                    <label>{currentStrokeWidth}</label></div>
            </div>
            {/* : */}
            <div className="text-white m-10 text-xl text-center">
                <label>Eraser width</label><br />
                <input
                    id="image-drawing-eraser-width"
                    className="text-black w-full"
                    type="range" min={1} max={200}
                    onChange={(e) => handleChangeEraserWidth(e)}
                    defaultValue={currentEraseWidth}
                ></input>
                {/* <label> </label> */}
                <label>{currentEraseWidth}</label>
            </div>
            {/* } */}
        </div>

    )
}