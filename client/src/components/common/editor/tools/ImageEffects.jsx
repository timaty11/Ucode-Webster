import { ImageContainer } from "image-effects-react"
import { ImageHolder } from "../canvas/ImageHolder"
import { getFilteredImg } from "./filterImage";

export function ImageEffects({ imageUrl, filter, setCroppedImageFor, onCancel }) {

    const onSaveImageEffect = async (filter) => {
        const filteredImageUrl = await getFilteredImg(imageUrl, filter);
        setCroppedImageFor(filteredImageUrl);
    }

    return (
        <div className="w-full flex items-center text-center justify-center">
            { filter !== null ? <ImageContainer
                options={{
                    filter: filter.key,
                }}
                className="w-auto h-auto"
                style={{width: "70%", height: "auto"}}
            >
                <img src={imageUrl} alt="filter" className="w-auto h-auto" style={{width: "auto", height: "auto"}} />
            </ImageContainer> : <ImageHolder fileDataUrl={imageUrl} /> }
            <div className="controls text-white">
                <button className="p-5 border-solid border-2 border-slate-400 mr-5" onClick={e => onSaveImageEffect(filter)}>Apply</button>
                <button
                    onClick={() => {
                        onCancel();
                    }}
                >Cancel</button>
            </div>
        </div>
    )
}