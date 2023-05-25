import { ChoosePhoto } from "./canvas/ChoosePhoto";
import { ImageHolder } from "./canvas/ImageHolder";
import { SidebarTools } from "./sidebar-tools/SidebarTools";

import { useState } from "react";
import { useEffect } from "react";
import { ImageCropDialog } from "./tools/crop-image/ImageCropDialog";
import { ImageEffects } from "./tools/effects-image/ImageEffects";
import { ImageEffectsOptions } from "./tools/tools-options/effects/ImageEffectsOptions";
import { ImageDrawing } from "./tools/draw-on-image/ImageDrawing";
import { MagicBrush } from "./tools/magic-brush/MagicBrush";
import { AdvancedDrawing } from "./tools/advanced-drawing/AdvancedDrawing";
import { TextOnImage } from "./tools/text-markup/TextOnImage";
import { RemoveBackground } from "./tools/remove-bg/RemoveBackground";
import { TextOptions } from "./tools/text-p5/TextOptions";
import { TextContainer } from "./tools/text-markup/TextContainer";
import { Scratch } from "./tools/scratch-effect/Scratch";
import { RemoveObjectFromImage } from "./tools/remove-object/RemoveObjectFromImage";

export function Editor() {
    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);
    const [option, setOption] = useState(null);
    const [filter, setFilter] = useState(null);

    useEffect(() => {
        let fileReader, isCancel = false;
        if (file) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result && !isCancel) {
                    setFileDataURL(result)
                }
            }
            fileReader.readAsDataURL(file);
        }
        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }

    }, [file]);

    const onCancel = () => {
        setOption(null);
    };

    const setCroppedImageFor = (crop, zoom, aspect, croppedImageUrl, filter) => {
        const newImage = { croppedImageUrl, crop, zoom, aspect, filter }
        setImage(newImage);
        setOption(null);
    };

    const setEditedImageFor = (editedImageUrl) => {
        if (image) {
            image.croppedImageUrl = editedImageUrl;
            console.log("🚀 ~ file: Editor.jsx:53 ~ setEditedImageFor ~ croppedImageUrl:", image.croppedImageUrl)
        }
        else {
            setImage({ croppedImageUrl: editedImageUrl });
        }
        setOption(null);
    }

    const resetImage = (imageUrl) => {
        setCroppedImageFor(imageUrl);
    };

    function Download_btn() {
        let canvas = document.querySelector('#image_canvas');
        const context = canvas.getContext('2d');
        const imageObj = new Image();

        if (image) {
            imageObj.src = image.croppedImageUrl ? image.croppedImageUrl : fileDataURL;

            context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);

            var jpegUrl = canvas.toDataURL("image/jpg");

            const link = document.createElement("a");

            document.body.appendChild(link);

            link.setAttribute("href", jpegUrl);
            link.setAttribute("download", fileDataURL);
            link.click();

            document.body.removeChild(link);
        }
    }

    return (
        <div className="w-full grid grid-cols-[5%_95%]">
            <div className="w-50px min-h-screen">
                <SidebarTools setOption={setOption} download={Download_btn} />
            </div>
            <div className="min-h-screen m-10 grid justify-items-center">
                {!fileDataURL ?
                    <ChoosePhoto
                        setFile={setFile}
                    />
                    : null}
                {/* <Canvas className="hidden" />*/}
                <canvas className="absolute opacity-0 hidden" id="image_canvas"></canvas>

                {!option ?
                    <ImageHolder
                        fileDataURL={image && image.croppedImageUrl ? image.croppedImageUrl : fileDataURL}
                    />
                    : null}

                {option === 1 && file ?
                    <ImageCropDialog
                        imageUrl={image && image.croppedImageUrl ? image.croppedImageUrl : fileDataURL}
                        cropInit={file.crop}
                        zoomInit={file.zoom}
                        aspectInit={file.aspect}
                        onCancel={onCancel}
                        setCroppedImageFor={setCroppedImageFor}
                        resetImage={resetImage}
                    />
                    : null}

                {option === 3 && file ?
                    <div className="w-full grid grid-cols-[23%_72%] gap-6 h-screen">
                        <ImageEffectsOptions setFilter={setFilter} />
                        <ImageEffects
                            imageUrl={image && image.croppedImageUrl ? image.croppedImageUrl : fileDataURL}
                            filter={filter}
                            setCroppedImageFor={setEditedImageFor}
                            onCancel={onCancel}
                        />
                    </div>
                    : null}
                {option === 4 && file ?
                    <ImageDrawing
                        imageUrl={image && image.croppedImageUrl ? image.croppedImageUrl : fileDataURL}
                        setCroppedImageFor={setEditedImageFor}
                        onCancel={onCancel}
                    />
                    : null}
                {
                    option === 5 && file ?
                        <MagicBrush
                            imageUrl={image && image.croppedImageUrl ? image.croppedImageUrl : fileDataURL}
                            onCancel={onCancel}
                            setCroppedImageFor={setCroppedImageFor}
                        />
                        : null
                }
                {
                    option === 6 && file ?
                        <AdvancedDrawing
                            imageUrl={image && image.croppedImageUrl ? image.croppedImageUrl : fileDataURL}
                        />
                        : null
                }
                {
                    option === 7 && file ?
                        <TextContainer
                            imageUrl={image && image.croppedImageUrl ? image.croppedImageUrl : fileDataURL}
                        />
                        : null
                }
                {
                    option === 8 && file ?
                        <RemoveBackground imageUrl={image && image.croppedImageUrl ? image.croppedImageUrl : fileDataURL} />
                        : null
                }
                {
                    option === 9 && file ?
                        <Scratch />
                        :
                        null
                }
                {
                    option === 10 && file ?
                        <RemoveObjectFromImage
                            imageUrl={image && image.croppedImageUrl ? image.croppedImageUrl : fileDataURL}
                        />
                        :
                        null
                }
            </div>
        </div>
    )
}