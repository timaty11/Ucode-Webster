import { DrawOnImage } from "./DrawOnImage";
import { ImageDrawOptions } from "../tools-options/draw/ImageDrawOptions";
import { useState } from "react";

export function ImageDrawing({ imageUrl, setCroppedImageFor, onCancel, colorBrush, setColorBrush })
{
    
    const [eraseMode, setEraseMode] = useState();
    const [strokeWidth, setStrokeWidth] = useState(1);
    const [eraseWidth, setEraseWidth] = useState(1);
//w-full grid grid-cols-[23%_72%] gap-6 h-screen
    return (
        <div className="w-full grid grid-cols-2" id="image-drawing">
            
            <DrawOnImage 
                imageUrl={imageUrl} 
                strokeColor={colorBrush}
                eraseMode={eraseMode}
                strokeWidth={strokeWidth}
                eraseWidth={eraseWidth}
                setCroppedImageFor={ setCroppedImageFor }
                onCancel={onCancel}
            />
            <ImageDrawOptions 
                setColorBrush={setColorBrush}
                setEraseMode={setEraseMode}
                setEraseWidth={setEraseWidth}
                setStrokeWidth={setStrokeWidth}
            />
        </div>
    )
}