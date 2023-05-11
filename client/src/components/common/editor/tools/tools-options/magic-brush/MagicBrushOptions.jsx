export function MagicBrushOptions({ setBrush }) {

    return (
        <div>
            <ul className="columns-2">
                <li className="w-1/2"
                    onClick={() => {
                        setBrush("src\\components\\common\\editor\\tools\\magic-brush\\assets\\star.png");
                    }}
                >
                    <img src="src\\components\\common\\editor\\tools\\magic-brush\\assets\\star.png" alt="" />
                </li>
                <li className="w-1/2"
                    onClick={() => {
                        setBrush("src\\components\\common\\editor\\tools\\magic-brush\\assets\\bubble.png");
                    }}
                >
                    <img src="src\\components\\common\\editor\\tools\\magic-brush\\assets\\bubble.png" alt="" />
                </li>
            </ul>
        </div>
    )
}