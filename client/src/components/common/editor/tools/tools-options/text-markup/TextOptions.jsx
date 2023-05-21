import './assets/fonts.css';

export function TextOptions()
{


    return (
        <div>
            <ul className="w-full overflow-auto h-screen grid grid-cols-2 gap-4 scrollbar-thin
                scrollbar-thumb-slate-500 scrollbar-track-slate-700 justify-center
            ">
                <li className="w-14 hover:bg-slate-800 h-14" id="bubbleBrush">
                    <h3 style={{fontFamily: "'Bebas Neue', sans-serif"}}>
                        Your text
                    </h3>
                </li>
            </ul>
        </div>
    )
}