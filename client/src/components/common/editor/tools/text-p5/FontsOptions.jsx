export function FontOptions({setFontFamily})
{

    function handleFontClick(font)
    {
        if (setFontFamily !== undefined || setFontFamily !== null){
            setFontFamily(font);
        }
        
    }

    return (
        <div>
            <ul className="w-full overflow-auto h-screen grid grid-cols-2 gap-4 scrollbar-thin
                scrollbar-thumb-slate-500 scrollbar-track-slate-700 justify-center text-2xl text-center
            ">
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Indie Flower"}}
                    onClick={() => handleFontClick('Indie Flower')}
                    id="font" value={"Indie Flower"}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Satisfy"}}
                    onClick={() => handleFontClick('Satisfy')} id="font" value={"Satisfy"}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Permanent Marker"}}
                    onClick={() => handleFontClick('Permanent Marker')} id="font" value={"Permanent Marker"}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Alegreya Sans"}}
                    onClick={() => handleFontClick('Alegreya Sans')} id="font" value={"Alegreya Sans"}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Orbitron"}}
                    onClick={() => handleFontClick('Orbitron')} id="font" value={"Orbitron"}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Kalam"}}
                    onClick={() => handleFontClick('Kalam')} id="font" value={"Kalam"}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Great Vibes"}}
                    onClick={() => handleFontClick('Great Vibes')} id="font" value={"Great Vibes"}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Carter One"}}
                    onClick={() => handleFontClick('Carter One')} id="font" value={"Carter One"}
                >
                    Hello
                </li>
                <li className="w-16 text-justify hover:bg-slate-800 h-16 m-4 " style={{fontFamily: "Gruppo"}}
                    onClick={() => handleFontClick('Gruppo')} id="font" value={"Gruppo"}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Kaushan Script"}}
                    onClick={() => handleFontClick('Kaushan Script')} id="font" value={"Kaushan Script"}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Sacramento"}}
                    onClick={() => handleFontClick('Sacramento')} id="font" value={"Sacramento"}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Gloria Hallelujah"}}
                    onClick={() => handleFontClick('Gloria Hallelujah')} id="font" value={"Gloria Hallelujah"}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Zeyada"}}
                    onClick={() => handleFontClick('Zeyada')} id="font" value={"Zeyada"}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Luckiest Guy"}}
                    onClick={() => handleFontClick('Luckiest Guy')} id="font" value={"Luckiest Guy"}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Patrick Hand"}}
                    onClick={() => handleFontClick('Patrick Hand')} id="font" value={"Patrick Hand"}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Merienda"}}
                    onClick={() => handleFontClick('Merienda')} id="font" value={"Merienda"}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Tangerine"}}
                    onClick={() => handleFontClick('Tangerine')} id="font" value={"Tangerine"}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Bad Script"}}
                    onClick={() => handleFontClick('Bad Script')} id="font" value={"Bad Script"}
                >
                    Hello
                </li>

            </ul>
        </div>
    )
}