export function SidebarTools(props) {

    function handleOption(e) {
        props.setOption(e);
    }

    function download() {
        props.download();
    }

    return (
        <div className="sidebar-tools bg-slate-800 h-full">
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <ul style={{ color: "#c8c8c8" }} className="text-xl">
                <li className="flex gap-4 items-center p-5 cursor-pointer" onClick={e => handleOption(1)}>
                    <i className='bx bx-cut'></i>
                    {/* <p >Crop</p> */}
                </li>
                <li className="flex gap-4 items-center p-5 cursor-pointer"  onClick={e => handleOption(5)} id="image-settings">
                    <i className='bx bxs-brightness-half'></i>
                    {/* <p>Brightness</p> */}
                </li>
                <li className="flex gap-4 items-center p-5 cursor-pointer" onClick={e => handleOption(3)}>
                    <i className='bx bxs-color-fill'></i>
                    {/* <p>Effects</p> */}
                </li>
                <li className="flex gap-4 items-center p-5 cursor-pointer" onClick={e => handleOption(4)}>
                    <i className='bx bxs-paint'></i>
                    {/* <p>Paint</p> */}
                </li>
                <li className="flex gap-4 items-center p-5 cursor-pointer" onClick={e => handleOption(5)} id="magic-brush-options">
                    <i className='bx bxs-magic-wand' ></i>
                    {/* <p>Magic stick</p> */}
                </li>
                <li className="flex gap-4 items-center p-5 cursor-pointer"
                    title="Advanced paint"
                    onClick={e => handleOption(5)}
                    id="advanced-brush-options"
                >
                    <i className='bx bxs-palette'></i>
                </li>
                <li className="flex gap-4 items-center p-5 cursor-pointer" onClick={() => { handleOption(7) }}>
                    <i className='bx bx-text' ></i>
                    {/* <p>Text</p> */}
                </li>
                <li className="flex gap-4 items-center p-5 cursor-pointer" onClick={() => handleOption(5)} id="scratch-brush-options">
                    <i className='bx bx-star'></i>
                </li>
                <li className="flex gap-4 items-center p-5 cursor-pointer" onClick={() => handleOption(8)} title="Remove background">
                    <i className='bx bx-minus-back'></i>
                </li>
                <li className="flex gap-4 items-center p-5 cursor-pointer" id="remove-object" onClick={() => handleOption(5)}>
                    <i className='bx bx-trim'></i>
                </li>
                <li className="flex gap-4 items-center p-5 cursor-pointer" id="save-button"
                    // onClick={download}
                >
                    <i className='bx bx-download'></i>
                    {/* <p>Download</p> */}
                </li>
                
            </ul>
        </div>
    )
}