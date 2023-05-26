import { useState, createRef } from "react";

import { ReactSketchCanvas } from 'react-sketch-canvas'

export function RemoveObjectFromImage({ imageUrl }) {
    const [resultImage, setResultImage] = useState();

    const styles = {
        border: '0.0625rem solid #9c9c9c',
        borderRadius: '0.25rem',
        // backgroundSize: "90% 100%",
    };

    const canvasRef = createRef();

    function getImageDataURL(svgXml) {
        return "data:image/svg+xml;base64," + window.btoa(decodeURI(encodeURIComponent(svgXml)));
    }
    let imageNewUrl;
    async function Save()
    {
        imageNewUrl = await canvasRef.current.exportSvg();
        // console.log("🚀 ~ file: RemoveObjectFromImage.jsx:23 ~ RemoveObjectFromImage ~ imageNewUrl:", imageNewUrl)
        let b64 = getImageDataURL(imageNewUrl);
        console.log("🚀 ~ file: RemoveObjectFromImage.jsx:24 ~ RemoveObjectFromImage ~ b64:", b64)
        setResultImage(b64);
    }

    function ApplyRemove() {
        fetch({
            'method': 'POST',
            'url': 'https://techhk.aoscdn.com/api/tasks/visual/inpaint',
            'headers': {
                'X-API-KEY': 'wx5hka2amkq6b3c4l'
            },
            formData: {
                'sync': '1',
                'image_base64': imageUrl,
                'mask_base64': '/path/to/mask.jpg'
            }
        }, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
            setResultImage(response.data.image);
        });
    }

    return (
        <div className="flex" id="remove-object-from-image">
            {/* {resultImage ? <img src={resultImage}></img> : null}
             <ReactSketchCanvas
                    style={styles}
                    backgroundImage={imageUrl}
                    width={`600px`}
                    height={`500px`}
                    // preserveBackgroundImageAspectRatio='none'
                    // exportWithBackgroundImage={true}
                    strokeWidth={15}
                    strokeColor={'white'}
                    exportWithBackgroundImage={false}
                    eraserWidth={15}
                    ref={canvasRef}

                /> */}
                <div className='text-white text-2xl columns-1 gap-y-2'>
                <button className='w-full'
                    onClick={() => {
                        canvasRef.current.eraseMode(false);
                    }}
                >
                    <i className='bx bxs-pencil'></i>
                </button>
                <button className='w-full'
                    onClick={() => {
                        canvasRef.current.eraseMode(true);
                    }}
                >
                    <i className='bx bxs-eraser' ></i>
                </button>
                


                <button className='w-full' title='Save' id='apply-remove-object'
                    // onClick={() => {
                    //     Save();
                    // }}
                >
                    <i className='bx bxs-save'></i>
                </button>

                <button className='w-full' title='Cancel'
                    onClick={() => {
                        canvasRef.current.clearCanvas();
                        onCancel();
                    }}
                >
                    <i className='bx bx-x-circle'></i>
                </button>
            </div>
        </div>
    )
}