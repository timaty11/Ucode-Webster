import Cropper from 'react-easy-crop'

import { useState, useCallback } from 'react';

export function ImageHolder(fileDataURL) {
    let isVisible = "hidden";
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
    }, [])

    if (fileDataURL.fileDataURL) {
        isVisible = "block";
    }

    function DeleteCurrentImage() {
        isVisible = "hidden";
        fileDataURL = null;

    }

    return (
        <div className="w-8/12">
            <div className={`h-200 image_holder  ${isVisible} `}>
                <button onClick={DeleteCurrentImage}><i className='bx bx-message-square-x text-white'></i></button>
                <img src={fileDataURL.fileDataURL} alt="img" id="image"></img>
                {/* <Cropper
                    image={fileDataURL.fileDataURL}
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 3}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom} 
                /> */}
            </div>
        </div>

    )
}

