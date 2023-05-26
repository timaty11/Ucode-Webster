import { DrawOnImage } from "./DrawOnImage";
import { ImageDrawOptions } from "../tools-options/draw/ImageDrawOptions";
import { useState } from "react";

export function ImageDrawing({ imageUrl, setCroppedImageFor, onCancel})
{
    const [colorBrush, setColorBrush] = useState("#fff");
    const [eraseMode, setEraseMode] = useState();
    const [strokeWidth, setStrokeWidth] = useState(1);
    const [eraseWidth, setEraseWidth] = useState(1);

    const [tool, setTool] = useState("");
//w-full grid grid-cols-[23%_72%] gap-6 h-screen
    return (
        <div className="flex">
            
            <DrawOnImage 
                imageUrl={imageUrl} 
                strokeColor={colorBrush}
                eraseMode={eraseMode}
                strokeWidth={strokeWidth}
                eraseWidth={eraseWidth}
                setCroppedImageFor={ setCroppedImageFor }
                onCancel={onCancel}
                setTool={setTool}
            />
            <ImageDrawOptions 
                setColorBrush={setColorBrush}
                setEraseMode={setEraseMode}
                setEraseWidth={setEraseWidth}
                setStrokeWidth={setStrokeWidth}
                tool={tool}
            />
        </div>
    )
}