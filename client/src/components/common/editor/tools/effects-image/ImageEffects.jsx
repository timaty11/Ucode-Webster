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
         let ctx;
    
    // ctx.filter = "contrast(110%) brightness(110%) grayscale(100%)"
    
    // let imgtmp = p5.createImg(imageUrl);
    // imgtmp.hide();
    // ctx.drawImage(imgtmp.elt, 0, 0);
    function bubod(film){
        ctx.filter = film
    
        let imgtmp = p5.createImg(imageUrl);
        imgtmp.hide();
        ctx.drawImage(imgtmp.elt, 0, 0);
    }
    
    }

    return (

        <div className="w-full grid grid-rows-[50%_50%]  items-center text-center justify-center">
            <div className="ml-10 mt-60">
                { filter !== null ? <ImageContainer
                        options={{
                            filter: filter.key,
                        }}
                        className="w-auto h-auto"
                        style={{width: "80%", height: "80%"}}
                        
                    >
                        {/* bubod(filter.key) */}
                        <img src={imageUrl} alt="filter" className="w-auto h-auto" style={{width: "100%", height: "100%"}} />
                    </ImageContainer> : <img src={imageUrl} alt="filter" className="w-auto h-auto" style={{width: "100%", height: "100%"}} /> }
            </div>
            
            <div className="mr-35 controls text-white">
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