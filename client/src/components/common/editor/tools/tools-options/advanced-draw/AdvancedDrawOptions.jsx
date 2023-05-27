export function AdvancedDrawOptions()
{

    return (
        <div id="advanced-brushes">
            <ul className="w-full overflow-auto h-screen grid grid-cols-2 gap-4 scrollbar-thin
                scrollbar-thumb-slate-500 scrollbar-track-slate-700 justify-center
            ">
                <li className="w-16 hover:bg-slate-800 h-16 m-4" id="jap-ink-advanced">
                    <img src="src\\components\\common\\editor\\tools\\tools-options\\advanced-draw\\assets\\jap-ink.png"></img>
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" id="ellipses-advanced">
                    <img src="src\\components\\common\\editor\\tools\\tools-options\\advanced-draw\\assets\\ellipses.png"></img>
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" id="balls-advanced">
                    <img src="src\\components\\common\\editor\\tools\\tools-options\\advanced-draw\\assets\\balls.png"></img>
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" id="classic-ink">
                    <img src="src\\components\\common\\editor\\tools\\tools-options\\advanced-draw\\assets\\classic_ink.png"></img>
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" id="spray-ink">
                    <img src="src\\components\\common\\editor\\tools\\tools-options\\advanced-draw\\assets\\spray_ink.png"></img>
                </li>
            </ul>
        </div>
    )
}