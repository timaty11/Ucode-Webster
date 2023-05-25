import { ImageContainer } from "image-effects-react"
import { ImageHolder } from "../../canvas/ImageHolder"
import { getFilteredImg } from "./filterImage";
import axios from 'axios';
import { useState } from "react";
// import { response } from "express";

let api_key ="oaRw1waFrdfLqx64HCHDWinnw2u2";

export function ImageEffects({ imageUrl, filter, setCroppedImageFor, onCancel }) {
    const [resultImg, setResultImg] = useState();

    const onSaveImageEffect = async (filter) => {
        axios.get('https://studio.pixelixe.com/api/photo/effect/v2', {
            params: {
                preset: "earlybird",
                imageUrl: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg"
            },
            headers: {
                Authorization: "Bearer " + api_key
            }
        }).then((response) => {
            if (response.status != 200) return console.error('Error:', response.status, response.statusText);
                console.log(response)
                const reader = new FileReader();
                reader.onloadend = () => setResultImg(reader.result)
                reader.readAsDataURL(response.data);
        }).catch(err => {
            console.log(err);
        })
        // const filteredImageUrl = await getFilteredImg(imageUrl, filter);
        // setCroppedImageFor(filteredImageUrl);
    }

    return (

        <div className="w-full flex items-center text-center justify-center">
            <div className="mt-20 ml-20">
                { filter !== null ? <ImageContainer
                        options={{
                            filter: filter.key,
                        }}
                        className="w-auto h-auto"
                        style={{width: "70%", height: "auto"}}
                    >
                        <img src={imageUrl} alt="filter" className="w-auto h-auto" style={{width: "auto", height: "auto"}} />
                    </ImageContainer> : <ImageHolder fileDataUrl={imageUrl} /> }
            </div>
            
            <div className="mr-30 controls text-white">
                <button className="p-5 border-solid border-2 border-slate-400 mr-5" 
                onClick={e => onSaveImageEffect(filter)}>Apply</button>
                <button
                    onClick={() => {
                        onCancel();
                    }}
                >Cancel</button>
            </div>
        </div>
    )
}