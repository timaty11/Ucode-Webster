export function ChooseStamp()
{

    return (
        <div className="text-white mt-10">
            <h1>Choose stamp</h1>
            <ul className="w-full overflow-auto h-1/2 grid grid-cols-2 gap-4 scrollbar-thin
                scrollbar-thumb-slate-500 scrollbar-track-slate-700 justify-center text-2xl text-center
            ">
                <li className="w-16 hover:bg-slate-800 h-16 m-4">
                    <i className='bx bxs-pencil'></i>
                </li>
                {/* <li className="w-16 hover:bg-slate-800 h-16 m-4" id="star-scratch">
                    <img src="src\\components\\common\\editor\\tools\\scratch-effect\\assets\\starScratch.png"></img>
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" id="green-leaf-scratch">
                    <img src="src\\components\\common\\editor\\tools\\scratch-effect\\assets\\big_green_leaf.png"></img>
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" id="autumn-leaf-scratch">
                    <img src="src\\components\\common\\editor\\tools\\scratch-effect\\assets\\autumn_leaf.png"></img>
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" id="xmas-ball-scratch">
                    <img src="src\\components\\common\\editor\\tools\\scratch-effect\\assets\\Xmas_ball.png"></img>
                </li> */}
                <li className="w-16 hover:bg-slate-800 h-16 m-4" id="star-scratch">
                    <img src="src\\components\\common\\editor\\tools\\scratch-effect\\assets\\starScratch.png"></img>
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" id="green-leaf-scratch">
                    <img src="src\\components\\common\\editor\\tools\\scratch-effect\\assets\\big_green_leaf.png"></img>
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" id="autumn-leaf-scratch">
                    <img src="src\\components\\common\\editor\\tools\\scratch-effect\\assets\\autumn_leaf.png"></img>
                </li>
                <li className="w-16 hover:bg-slate-800 h-16 m-4" id="xmas-ball-scratch">
                    <img src="src\\components\\common\\editor\\tools\\scratch-effect\\assets\\Xmas_ball.png"></img>
                </li>
            </ul>
        </div>
    )
}