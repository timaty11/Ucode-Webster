import { AdvancedDrawOptions } from "../tools-options/advanced-draw/AdvancedDrawOptions";
import { AdvancedDrawingSketch } from "./AdvancedDrawingSketch";

export function AdvancedDrawing({imageUrl})
{


    return (
        <div>
            <AdvancedDrawingSketch imageUrl={imageUrl}/>
            <AdvancedDrawOptions/>
        </div>
    )
}