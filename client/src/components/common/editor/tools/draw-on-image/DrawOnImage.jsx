import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas' 

export function DrawOnImage({ imageUrl, strokeWidth, strokeColor, eraseWidth, setCroppedImageFor, onCancel, setTool }) {
    const styles = {
        border: '0.0625rem solid #9c9c9c',
        borderRadius: '0.25rem',
        // backgroundSize: "90% 100%",
    };


    const canvasRef = React.createRef();


    function handleChangeTool(tools) {
        console.log(tools)
        setTool(tools);
    }
    
    async function handleSaveImage()
    {
        let imageNewUrl = await canvasRef.current.exportImage('png');
        setCroppedImageFor(imageNewUrl);
    }

    const [tools, setTools] = useState('');

    const whatTools = async (tool) => {
        localStorage.setItem(
            "toool", tool);

            setTools(tool);
    }

    

    //const background = "no-repeat url(" + imageUrl + ")";
    //m-10 grid grid-cols-[90%_10%] gap-6
    //grid grid-cols-[80%_20%]
    return (
        <div className='flex'>
            {/* <div className='wl-20'>
                <ReactSketchCanvas
                    style={styles}
                    id='image'
                    backgroundImage={imageUrl}
                    width={`600px`}
                    height={`500px`}
                    // preserveBackgroundImageAspectRatio='none'
                    // exportWithBackgroundImage={true}
                    strokeWidth={strokeWidth}
                    strokeColor={strokeColor}

                    eraserWidth={eraseWidth}
                    ref={canvasRef}

                />
            </div> */}

            

            <div className='text-white text-2xl flex space-x-9'>
                <button className='w-full' id='image-drawing-pencil'
                    onClick={() => {
                        // canvasRef.current.eraseMode(false);
                        whatTools("pencil");
                    }}
                >
                    <i className='bx bxs-pencil'></i>
                </button>
                <button className='w-full' id='image-drawing-erase'
                    onClick={() => {
                        // canvasRef.current.eraseMode(true);
                        whatTools("sterka");
                    }}
                >
                    <i className='bx bxs-eraser' ></i>
                </button>
                <button className='w-full' id='undo-draw'
                    onClick={() => {
                        // canvasRef.current.undo();
                        // whatTools("nazad");
                    }}
                >
                    <i className='bx bx-undo' ></i>
                </button>
                <button className='w-full' id='redo-draw'
                    onClick={() => {
                        // canvasRef.current.redo();
                        // whatTools("vpered");
                    }}
                >
                    <i className='bx bx-redo' ></i>
                </button>

                <button className='w-full' title='Clear all'
                    onClick={() => {
                        // canvasRef.current.clearCanvas();
                        // whatTools("clear");
                    }}
                >
                    <i className='bx bxs-trash-alt' ></i>
                </button>

                {/* <button className='w-full' title='Reset'
                    onClick={() => {
                        canvasRef.current.resetCanvas();
                    }}
                >
                    <i className='bx bx-reset' ></i>
                </button> */}

                {/* <button className='w-full' title='Save'
                    onClick={() => {
                        handleSaveImage();
                    }}
                >
                    <i className='bx bxs-save'></i>
                </button> */}

                {/* <button className='w-full' title='Cancel'
                    onClick={() => {
                        canvasRef.current.clearCanvas();
                        onCancel();
                    }}
                >
                    <i className='bx bx-x-circle'></i>
                </button> */}
            </div>

        </div>
    )
}