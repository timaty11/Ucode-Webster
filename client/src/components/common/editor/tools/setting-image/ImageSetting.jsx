
import { useState } from "react";

export function ImageSetting({ imageUrl, setCroppedImageFor, onCancel })
{
    const [blur, setBlur] = useState("");
    const [grayscale, setGrayscale] = useState();
    const [invert, setInvert] = useState(1);
    const [brightness, setBrightness] = useState(1);
    const [sepia, setSepia] = useState();
    const [contrast, setContrast] = useState(1);
    const [saturate, setSaturate] = useState(1);
    // const [huerotate, setHuerotate] = useState(1);

    async function handleSaveImage()
    {
        let imageNewUrl = await canvasRef.current.exportImage('png');
        setCroppedImageFor(imageNewUrl);
    }

    let ctx;

    async function submit(){
        ctx.filter = film
    
        let imgtmp = p5.createImg(imageUrl);
        imgtmp.hide();
        ctx.drawImage(imgtmp.elt, 0, 0);
    }



//w-full grid grid-cols-[23%_72%] gap-6 h-screen
    return (
        <div className=" grid grid-rows-[80%_20%] ">

            <div className=" grid grid-cols-[70%_30%] ">
                <div>
                    <img src={imageUrl} alt="filter" className="w-auto h-auto" style={{width: "80%", height: "80%"}} />
                </div>
                <div className="text-white text-xl text-center">
                {/* <div className="text-white text-xl text-center "> */}
                        <label>Blur</label><br/>
                        <input 
                            className="text-black"
                            type="range" min={0} max={100}
                            onChange={(e) => setBlur(e)}
                            defaultValue="0"
                        ></input>
                        <label> </label>
                        <label>{blur}</label>
                        {/* </div>
                    <div className="text-white m-10 text-xl text-center"> */}
                        <br/><label>Grayscale</label><br/>
                        <input 
                            className="text-black"
                            type="range" min={0} max={200}
                            onChange={(e) => setGrayscale(e)}
                            defaultValue="0"
                        ></input>
                        <label> </label>
                        <label>{grayscale}</label>
                    {/* </div>
                    <div className="text-white m-10 text-xl text-center "> */}
                        <br/><label>Invert</label><br/>
                        <input 
                            className="text-black"
                            type="range" min={0} max={1}
                            onChange={(e) => setInvert(e)}
                            defaultValue="0"
                        ></input>
                        <label> </label>
                        <label>{invert}</label>
                        {/* </div>
                    <div className="text-white m-10 text-xl text-center"> */}
                        <br/><label>Brightness</label><br/>
                        <input 
                            className="text-black"
                            type="range" min={0} max={200}
                            onChange={(e) => setBrightness(e)}
                            defaultValue="100"
                        ></input>
                        <label> </label>
                        <label>{brightness}</label>
                    {/* </div>
                    <div className="text-white m-10 text-xl text-center "> */}
                        <br/><label>Sepia</label><br/>
                        <input 
                            className="text-black"
                            type="range" min={0} max={100}
                            onChange={(e) => setSepia(e)}
                            defaultValue="0"
                        ></input>
                        <label> </label>
                        <label>{sepia}</label>
                        {/* </div>
                    <div className="text-white m-10 text-xl text-center"> */}
                        <br/><label>Contrast</label><br/>
                        <input 
                            className="text-black"
                            type="range" min={0} max={200}
                            onChange={(e) => setContrast(e)}
                            defaultValue="100"
                        ></input>
                        <label> </label>
                        <label>{contrast}</label>
                    {/* </div>
                    <div className="text-white m-10 text-xl text-center "> */}
                        <br/><label>Saturate</label><br/>
                        <input 
                            className="text-black"
                            type="range" min={0} max={200}
                            onChange={(e) => setSaturate(e)}
                            defaultValue="100"
                        ></input>
                        <label> </label>
                        <label>{saturate}</label>
                        {/* </div> */}
                </div>
            </div>
            <div className="text-white text-xl grid grid-cols-[auto_auto_auto]">
                <button className='w-full' title='Submit'
                    onClick={() => {
                        submit();
                    }}
                >
                    <i className='bx bx-reset' ></i>
                </button>

                <button className='w-full' title='Save'
                    onClick={() => {
                        handleSaveImage();
                    }}
                >
                    <i className='bx bxs-save'></i>
                </button>

                <button className='w-full' title='Cancel'
                    // onClick={() => {
                    //     canvasRef.current.clearCanvas();
                    //     onCancel();
                    // }}
                >
                    <i className='bx bx-x-circle'></i>
                </button>
            </div>
            
            {/* <SettingImage 
                imageUrl={imageUrl}
                blur={blur}
                grayscale={grayscale}
                invert={invert}
                brightness={brightness}
                sepia={sepia}
                contrast={contrast}
                saturate={saturate}
                // huerotate={huerotate}
                setCroppedImageFor={ setCroppedImageFor }
                onCancel={onCancel}
            />
            <ImageSettingOptions 
                setBlur={setBlur}
                setGrayscale={setGrayscale}
                setInvert={setInvert}
                setBrightness={setBrightness}
                setSepia={setSepia}
                setContrast={setContrast}
                setSaturate={setSaturate}
                // setHuerotate={setHuerotate}
            /> */}
        </div>
    )
}