import Sketch from "react-p5";
import { useEffect, useState, useRef } from "react";
import "./setting.css"

export function ImageSetting({ imageUrl, setCroppedImageFor, onCancel })
{
    const [blur, setBlur] = useState("0");
    const [grayscale, setGrayscale] = useState("0");
    const [invert, setInvert] = useState("0");
    const [brightness, setBrightness] = useState("100");
    const [sepia, setSepia] = useState("0");
    const [contrast, setContrast] = useState("100");
    const [saturate, setSaturate] = useState("100");

    async function reset(){
        setBlur("0");
        setGrayscale("0");
        setInvert("0");
        setBrightness("100");
        setSepia("0");
        setContrast("100");
        setSaturate("100");
    }
    // const [huerotate, setHuerotate] = useState(1);s

    async function handleSaveImage()
    {
        let imageNewUrl = await canvasRef.current.exportImage('png');
        setCroppedImageFor(imageNewUrl);
    }
    
    //   let ctx;

      const canvasRef = useRef(null);


        useEffect(() => {
            // if(imageUrl){
            //     const canvas =  document.querySelector("image");
            //     ctx = canvas.getContext("2d");
            // }
            
        }, []);

    
    // const submit = p5 => {
    async function submit(){
        // console.log(`blur(${blur}px) grayscale(${grayscale}%) invert(${invert*100}%) 
        // brightness(${brightness}%) sepia(${sepia}%) contrast(${contrast}%) saturate(${saturate}%)`);

        // ctx.filter = `blur(${blur}px) grayscale(${grayscale}%) invert(${invert*100}%) 
        // brightness(${brightness}%) sepia(${sepia}%) contrast(${contrast}%) saturate(${saturate}%)`
    
        // let imgtmp = p5.createImg(imageUrl);
        // imgtmp.hide();
        // ctx.drawImage(imgtmp.elt, 0, 0);
    }



//w-full grid grid-cols-[23%_72%] gap-6 h-screen
// grid grid-rows-[80%_20%]       grid grid-cols-[65%_35%]
    return (
        <div className="w-full" id="image-setting">

            <div className="w-full mt-10 bg-slate-900">
                {/* <div className="text-center flex  ml-10"> */}
                    {/* <canvas id="image" >
                        <img src={imageUrl} alt="filter"  className="w-auto h-auto" />
                    </canvas> */}     
                {/* </div> */}
                <div className="text-white text-xl ">
                <div className="text-white text-xl  ">
                        <label>Blur { blur}</label><br/>
                        <label>0    </label>
                        <label> </label>
                        <input 
                            className="text-black slider"
                            type="range" min={0} max={100}
                            onChange={(e) => setBlur(e.target.value)}
                            onClick={()=>{submit()}}
                            // defaultValue="0"
                            id="blur"
                            value={blur}
                        ></input>
                        <label> </label>
                        <label>100</label>
                        </div>
                        
                    <div className="text-white  text-xl ">
                        <br/><label>Grayscale { grayscale}</label><br/>
                        <label>0    </label>
                        <label> </label>
                        <input 
                            className="text-black slider"
                            type="range" min={0} max={200}
                            onChange={(e) => setGrayscale(e.target.value)}
                            // defaultValue="0"
                            onClick={()=>{submit()}}
                            id="grayscale"
                            value={grayscale}
                        ></input>
                        <label> </label>
                        <label>200</label>
                    </div>

                    <div className="text-white text-xl  ">
                        <br/><label>Invert { invert*100}</label><br/>
                        <label>0    </label>
                        <label> </label>
                        <input 
                            className="text-black slider"
                            type="range" min={0} max={1}
                            onChange={(e) => setInvert(e.target.value)}
                            // defaultValue="0"
                            onClick={()=>{submit()}}
                            id="invert"
                            value={invert}
                        ></input>
                        <label> </label>
                        <label>100</label>
                        </div>

                    <div className="text-white text-xl ">
                        <br/><label>Brightness { brightness}</label><br/>
                        <label>0    </label>
                        <label> </label>
                        <input 
                            className="text-black slider"
                            type="range" min={0} max={200}
                            onChange={(e) => setBrightness(e.target.value)}
                            // defaultValue="100"
                            onClick={()=>{submit()}}
                            id="brightness"
                            value={brightness}
                        ></input>
                        <label> </label>
                        <label>200</label>
                    </div>

                    <div className="text-white  text-xl  ">
                        <br/><label>Sepia {sepia}</label><br/>
                        <label>0    </label>
                        <label> </label>
                        <input 
                            className="text-black slider"
                            type="range" min={0} max={100}
                            onChange={(e) => setSepia(e.target.value)}
                            // defaultValue="0"
                            onClick={()=>{submit()}}
                            id="sepia"
                            value={sepia}
                        ></input>
                        <label> </label>
                        <label>100</label>
                        </div>

                    <div className="text-white  text-xl ">
                        <br/><label>Contrast { contrast}</label><br/>
                        <label>0    </label>
                        <label> </label>
                        <input 
                            className="text-black slider"
                            type="range" min={0} max={200}
                            onChange={(e) => setContrast(e.target.value)}
                            onClick={()=>{submit()}}
                            // defaultValue="100"
                            id="contrast"
                            value={contrast}
                        ></input>
                        <label> </label>
                        <label>200</label>
                    </div>

                    <div className="text-white  text-xl ">
                        <br/><label>Saturate { saturate}</label><br/>
                        <label>0    </label>
                        <label> </label>
                        <input 
                            className="text-black slider"
                            type="range" min={0} max={200}
                            onChange={(e) => setSaturate(e.target.value)}
                            onClick={()=>{submit()}}
                            // defaultValue="100"
                            id="saturate"
                            value={saturate}
                        ></input>
                        <label> </label>
                        <label>200</label>
                        </div>
                </div>
            </div><br/>
            <div className="text-white text-xl grid grid-cols-[auto_auto]">
                <button className="bu buam" title='Submit'
                    // onClick={() => {
                    //     handleSaveImage();
                    // }}
                    id="image-settings-save-button"
                >
                    <i className='bx bxs-save'></i>
                    {/* Submit */}
                </button>
                <button className='className="bu burd"' title='Reset'
                    onClick={() => {
                        reset();
                    }}
                >
                    <i className='bx bx-reset' ></i>
                    {/* Reset */}
                </button>
                </div>
        </div>
    )
}