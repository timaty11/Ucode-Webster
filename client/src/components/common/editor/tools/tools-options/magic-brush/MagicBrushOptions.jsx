import { brushes } from "./brushes";


export function MagicBrushOptions({ setBrush }) {

    return (
        <div className="h-screen p-8 bg-slate-950 w-full" id="magic-brushes">
            <ul className="w-full overflow-auto h-screen grid grid-cols-2 gap-4 scrollbar-thin
                scrollbar-thumb-slate-500 scrollbar-track-slate-700 justify-center
            ">

               <li className="w-14 hover:bg-slate-800 h-14" id="bubbleBrush">
                    <img src="src\\components\\common\\editor\\tools\\magic-brush\\assets\\bubble.png" alt="" />
                </li>
                <li className="w-14 hover:bg-slate-800 h-14" id="starBlueBrush">
                    <img src="src\\components\\common\\editor\\tools\\magic-brush\\assets\\star.png" alt="" />
                </li>
                <li className="w-14 hover:bg-slate-800 h-14" id="starDustBrush">
                    <img src="src\\components\\common\\editor\\tools\\magic-brush\\assets\\stardust.png" alt="" />
                </li>
                <li className="w-14 hover:bg-slate-800 h-14" id="flareBrush">
                    <img src="src\\components\\common\\editor\\tools\\magic-brush\\assets\\flare.png" alt="" />
                </li>
                <li className="w-14 hover:bg-slate-800 h-14" id="dandelionBrush">
                    <img src="src\\components\\common\\editor\\tools\\magic-brush\\assets\\dandelion.png" alt="" />
                </li>
                <li className="w-14 hover:bg-slate-800 h-14" id="cloudBrush">
                    <img src="src\\components\\common\\editor\\tools\\magic-brush\\assets\\cloud.png" alt="" />
                </li>
            </ul>
            <div className="controls text-white">
                <button
                    id="saveSketchButton"
                >Save</button>
                <button
                    id="cancelSketchButton"
                >Cancel</button>
            </div>
        </div>
    )
}