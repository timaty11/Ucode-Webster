import { useState } from 'react'

export function FontOptions({setFontFamily})
{
    const [currentFont, setCurrentFont] = useState();

    function handleFontClick(font)
    {
        if (setFontFamily){
            console.log("🚀 ~ file: FontsOptions.jsx:7 ~ setFontFamily:", setFontFamily)
            setFontFamily(font);
            
        }
        setCurrentFont(font);
    }

    return (
        <div className='mt-8 mr-4'>
            {/* <div id="fontCurr" id={currentFont}></div> */}
            <ul className="w-full overflow-auto h-screen grid grid-cols-2 gap-2 scrollbar-thin
                scrollbar-thumb-slate-500 scrollbar-track-slate-700 justify-center text-2xl text-center align-middle
            ">
                <li className={` hover:bg-slate-800 h-16 m-4 p-2 `} style={{fontFamily: "Indie Flower"}}
                    onClick={() => handleFontClick('Indie Flower')}
                    
                    id={"Indie Flower"}
                >
                    Hello
                </li>
                <li className=" hover:bg-slate-800 h-16 m-4 p-2" style={{fontFamily: "Satisfy"}}
                    onClick={() => handleFontClick('Satisfy')}  id={"Satisfy"}
                >
                    Hello
                </li>
                <li className=" hover:bg-slate-800 h-16 m-4 p-2" style={{fontFamily: "Permanent Marker"}}
                    onClick={() => handleFontClick('Permanent Marker')}  id={"Permanent Marker"}
                >
                    Hello
                </li>
                <li className=" hover:bg-slate-800 h-16 m-4 p-2" style={{fontFamily: "Alegreya Sans"}}
                    onClick={() => handleFontClick('Alegreya Sans')}  id={"Alegreya Sans"}
                >
                    Hello
                </li>
                <li className=" hover:bg-slate-800 h-16 m-4 p-2" style={{fontFamily: "Orbitron"}}
                    onClick={() => handleFontClick('Orbitron')}  id={"Orbitron"}
                >
                    Hello
                </li>
                <li className=" hover:bg-slate-800 h-16 m-4 p-2" style={{fontFamily: "Kalam"}}
                    onClick={() => handleFontClick('Kalam')}  id={"Kalam"}
                >
                    Hello
                </li>
                <li className=" hover:bg-slate-800 h-16 m-4 p-2" style={{fontFamily: "Great Vibes"}}
                    onClick={() => handleFontClick('Great Vibes')}  id={"Great Vibes"}
                >
                    Hello
                </li>
                <li className=" hover:bg-slate-800 h-16 m-4 p-2" style={{fontFamily: "Carter One"}}
                    onClick={() => handleFontClick('Carter One')}  id={"Carter One"}
                >
                    Hello
                </li>
                <li className="  hover:bg-slate-800 h-16 m-4 p-2" style={{fontFamily: "Gruppo"}}
                    onClick={() => handleFontClick('Gruppo')}  id={"Gruppo"}
                >
                    Hello
                </li>
                <li className=" hover:bg-slate-800 h-16 m-4 p-2" style={{fontFamily: "Kaushan Script"}}
                    onClick={() => handleFontClick('Kaushan Script')}  id={"Kaushan Script"}
                >
                    Hello
                </li>
                <li className=" hover:bg-slate-800 h-16 m-4 p-2" style={{fontFamily: "Sacramento"}}
                    onClick={() => handleFontClick('Sacramento')}  id={"Sacramento"}
                >
                    Hello
                </li>
                <li className=" hover:bg-slate-800 h-16 m-4 p-2" style={{fontFamily: "Gloria Hallelujah"}}
                    onClick={() => handleFontClick('Gloria Hallelujah')}  id={"Gloria Hallelujah"}
                >
                    Hello
                </li>
                <li className=" hover:bg-slate-800 h-16 m-4 p-2" style={{fontFamily: "Zeyada"}}
                    onClick={() => handleFontClick('Zeyada')}  id={"Zeyada"}
                >
                    Hello
                </li>
                <li className=" hover:bg-slate-800 h-16 m-4 p-2" style={{fontFamily: "Luckiest Guy"}}
                    onClick={() => handleFontClick('Luckiest Guy')}  id={"Luckiest Guy"}
                >
                    Hello
                </li>
                <li className=" hover:bg-slate-800 h-16 m-4 p-2" style={{fontFamily: "Patrick Hand"}}
                    onClick={() => handleFontClick('Patrick Hand')}  id={"Patrick Hand"}
                >
                    Hello
                </li>
                <li className=" hover:bg-slate-800 h-16 m-4 p-2" style={{fontFamily: "Merienda"}}
                    onClick={() => handleFontClick('Merienda')}  id={"Merienda"}
                >
                    Hello
                </li>
                <li className=" hover:bg-slate-800 h-16 m-4 p-2" style={{fontFamily: "Tangerine"}}
                    onClick={() => handleFontClick('Tangerine')}  id={"Tangerine"}
                >
                    Hello
                </li>
                <li className=" hover:bg-slate-800 h-16 m-4 p-2" style={{fontFamily: "Bad Script"}}
                    onClick={() => handleFontClick('Bad Script')}  id={"Bad Script"}
                >
                    Hello
                </li>

            </ul>
        </div>
    )
}