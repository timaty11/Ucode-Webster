import { useEffect, useState } from "react";
import { MagicBrushOptions } from "../tools-options/magic-brush/MagicBrushOptions";
import { MagicBrushDraw } from "./MagicBrushDraw";
import { brushes } from "../tools-options/magic-brush/brushes";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import '../text-p5/tabs.css';

import Sketch from "react-p5";
import { AdvancedDrawOptions } from "../tools-options/advanced-draw/AdvancedDrawOptions";
import { ScratchOptions } from "../scratch-effect/ScratchOptions";
import { RemoveObjectFromImage } from "../remove-object/RemoveObjectFromImage";
import { ImageSetting } from "../setting-image/ImageSetting";
import { ImageDrawing } from "../draw-on-image/ImageDrawing";

let time = 1.5;

export function MagicBrush({ imageUrl, setCroppedImageFor, onCancel }) {
    const [brush, setBrush] = useState(null);
    const [brushOption, setBrushOption] = useState(null);
    const [colorBrush, setColorBrush] = useState("#fff");
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
        <div className="grid grid-cols-[80%_20%] w-full">
            <MagicBrushDraw imageUrl={imageUrl} setCroppedImageFor={setCroppedImageFor} onCancel={onCancel} color={colorBrush}/>
            {/* <Tabs>
                <TabList>
                    <Tab>
                        <i className='bx bxs-spray-can' ></i>
                    </Tab>
                    <Tab>
                        <i className='bx bxs-spray-can' ></i>
                    </Tab>
                    <Tab>
                        H
                    </Tab>
                </TabList>


                <TabPanel> */}
                    {/* {
                        setTimeout(() => {
                            <div> */}
                                 {/* <MagicBrushOptions setBrush={setBrushOption} /> */}
                                 
                            {/* </div>
                        }, 1500)
                    } */}
                    <MagicBrushOptions setBrush={setBrushOption} />
                {/* </TabPanel>
                <TabPanel> */}
                    <AdvancedDrawOptions />


                {/* </TabPanel>
                <TabPanel> */}
                    <ScratchOptions />
                    <RemoveObjectFromImage/>
                    <ImageSetting />
                    <ImageDrawing colorBrush={colorBrush} setColorBrush={setColorBrush} />
                {/* </TabPanel>
            </Tabs> */}
        </div>
    )
}