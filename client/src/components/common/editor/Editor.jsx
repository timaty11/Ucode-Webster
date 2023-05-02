import { ChoosePhoto } from "./canvas/ChoosePhoto";
import { ImageHolder } from "./canvas/ImageHolder";
import { SidebarTools } from "./sidebar-tools/SidebarTools";

import { useState } from "react";
import { useEffect } from "react";
import { ImageCropDialog } from "./tools/ImageCropDialog";
import { ImageEffects } from "./tools/ImageEffects";
import { ImageEffectsOptions } from "./tools/tools-options/ImageEffectsOptions";

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
        <div className="w-full grid grid-cols-[12%_88%]">
            <div className="w-50px min-h-screen">
                <SidebarTools setOption={setOption} download={Download_btn} />
            </div>
            <div className="min-h-screen grid justify-items-center items-center">
                { !fileDataURL ?
                        <ChoosePhoto
                            setFile={setFile}
                        />
                : null}
                {/* <Canvas className="hidden" /> */}
                <canvas className="absolute opacity-0" id="image_canvas"></canvas>

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
                        />
                    </div>
                : null}
            </div>
        </div>
    )
}