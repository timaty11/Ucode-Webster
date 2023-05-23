export function FontOptions({setFontFamily})
{

    function handleFontClick(font)
    {
        setFontFamily(font);
    }

    return (
        <div>
            <ul className="w-full overflow-auto h-screen grid grid-cols-2 gap-4 scrollbar-thin
                scrollbar-thumb-slate-500 scrollbar-track-slate-700 justify-center text-2xl text-center
            ">
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Indie Flower"}}
                    onClick={() => handleFontClick('Indie Flower')}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Satisfy"}}
                    onClick={() => handleFontClick('Satisfy')}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Permanent Marker"}}
                    onClick={() => handleFontClick('Permanent Marker')}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Alegreya Sans"}}
                    onClick={() => handleFontClick('Alegreya Sans')}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Orbitron"}}
                    onClick={() => handleFontClick('Orbitron')}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Kalam"}}
                    onClick={() => handleFontClick('Kalam')}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Great Vibes"}}
                    onClick={() => handleFontClick('Great Vibes')}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Carter One"}}
                    onClick={() => handleFontClick('Carter One')}
                >
                    Hello
                </li>
                <li className="w-16 text-justify hover:bg-slate-800 h-16 m-4 " style={{fontFamily: "Gruppo"}}
                    onClick={() => handleFontClick('Gruppo')}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Kaushan Script"}}
                    onClick={() => handleFontClick('Kaushan Script')}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Sacramento"}}
                    onClick={() => handleFontClick('Sacramento')}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Gloria Hallelujah"}}
                    onClick={() => handleFontClick('Gloria Hallelujah')}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Zeyada"}}
                    onClick={() => handleFontClick('Zeyada')}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Luckiest Guy"}}
                    onClick={() => handleFontClick('Luckiest Guy')}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Patrick Hand"}}
                    onClick={() => handleFontClick('Patrick Hand')}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Merienda"}}
                    onClick={() => handleFontClick('Merienda')}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Tangerine"}}
                    onClick={() => handleFontClick('Tangerine')}
                >
                    Hello
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" style={{fontFamily: "Bad Script"}}
                    onClick={() => handleFontClick('Bad Script')}
                >
                    Hello
                </li>

            </ul>
        </div>
    )
}