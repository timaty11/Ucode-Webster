import "./mmmm.css"

export function AdvancedDrawOptions()
{

    return (
        <div id="advanced-brushes">
            <ul className="w-full mmm overflow-auto grid grid-cols-2 gap-4 scrollbar-thin
                scrollbar-thumb-slate-500 scrollbar-track-slate-700 justify-center
            ">
                <li className="aaa" id="jap-ink-advanced">
                    <img className="bbb" src="src\\components\\common\\editor\\tools\\tools-options\\advanced-draw\\assets\\jap-ink.png"></img>
                </li>
                <li className="  aaa" id="ellipses-advanced">
                    <img className="bbb" src="src\\components\\common\\editor\\tools\\tools-options\\advanced-draw\\assets\\ellipses.png"></img>
                </li>
                <li className="aaa" id="balls-advanced">
                    <img className="bbb" src="src\\components\\common\\editor\\tools\\tools-options\\advanced-draw\\assets\\balls.png"></img>
                </li>
                <li className="aaa" id="classic-ink">
                    <img className="bbb" src="src\\components\\common\\editor\\tools\\tools-options\\advanced-draw\\assets\\classic_ink.png"></img>
                </li>
                <li className="aaa" id="spray-ink">
                    <img className="bbb" src="src\\components\\common\\editor\\tools\\tools-options\\advanced-draw\\assets\\spray_ink.png"></img>
                </li>
            </ul>
        </div>
    )
}