import { brushes } from "./brushes";
import "./mmmm.css"


export function MagicBrushOptions({ setBrush }) {

    return (
        <div className="h-screen p-8 w-full mt-8" id="magic-brushes">
            <ul className="mm w-full overflow-auto  grid grid-cols-2  scrollbar-thin
                scrollbar-thumb-slate-500 scrollbar-track-slate-700 justify-center
            ">

               <li className="aa" id="bubbleBrush">
                    <img src="src\\components\\common\\editor\\tools\\magic-brush\\assets\\bubble.png" alt="" />
                </li>
                <li className="aa" id="starBlueBrush">
                    <img src="src\\components\\common\\editor\\tools\\magic-brush\\assets\\star.png" alt="" />
                </li>
                <li className="aa" id="starDustBrush">
                    <img src="src\\components\\common\\editor\\tools\\magic-brush\\assets\\stardust.png" alt="" />
                </li>
                <li className="aa" id="flareBrush">
                    <img src="src\\components\\common\\editor\\tools\\magic-brush\\assets\\flare.png" alt="" />
                </li>
                <li className="aa" id="dandelionBrush">
                    <img src="src\\components\\common\\editor\\tools\\magic-brush\\assets\\dandelion.png" alt="" />
                </li>
                <li className="aa" id="cloudBrush">
                    <img src="src\\components\\common\\editor\\tools\\magic-brush\\assets\\cloud.png" alt="" />
                </li>
            </ul>
            <br/>
            <div className="controls text-white ">
                {/* <button
                className="but butam"
                    id="saveSketchButton"
                >Save</button> */}
                <button
                className="but red"
                    id="cancelSketchButton"
                >Cancel</button>
            </div>
        </div>
    )
}