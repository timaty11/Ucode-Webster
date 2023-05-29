import SidebarButton from "./SidebarButton.jsx";


export function SidebarTools(props) {

    function handleOption(e) {
        props.setOption(e);
    }

    function download() {
        props.download();
    }

    return (
        <div className="sidebar-tools bg-dark-bg-800 border-gray-200 h-full pt-7">
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <div className="absolute inset-0 w-1 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full dark:bg-dark-bg-700"></div>
            <ul style={{ color: "#c8c8c8" }} className="text-xl">
                <SidebarButton icon='bx-cut' clickHandle={e => handleOption(1)}/>
                <SidebarButton icon='bxs-brightness-half' clickHandle={e => handleOption(5)} id="image-settings"/>
                {/* <SidebarButton icon='bxs-color-fill' clickHandle={e => handleOption(3)}/> */}
                <SidebarButton icon='bxs-paint' clickHandle={e => handleOption(5)} id="image-drawing-options"/>
                <SidebarButton icon='bxs-magic-wand' clickHandle={e => handleOption(5)} id="magic-brush-options"/>
                <SidebarButton icon='bxs-palette' clickHandle={e => handleOption(5)} id="advanced-brush-options"/>
                {/* <SidebarButton icon='bx-text' clickHandle={e => handleOption(7)}/> */}
                <SidebarButton icon='bx-text' clickHandle={e => handleOption(5)} id="text-p5"/>
                <SidebarButton icon='bx-star' clickHandle={e => handleOption(5)} id="scratch-brush-options"/>
                <SidebarButton icon='bx-minus-back' clickHandle={e => handleOption(8)}/>
                <SidebarButton icon='bx-trim' clickHandle={e => handleOption(5)} id="remove-object"/>
                <SidebarButton icon='bx-download' clickHandle={e => handleOption(5)} id="save-button"/>
            </ul>
        </div>
    )
}

{/* <li className="flex gap-4 items-center p-4 cursor-pointer"  onClick={e => handleOption(5)} id="image-settings">
                    <i className='bx bxs-brightness-half'></i>
                </li>
                <li className="flex gap-4 items-center p-4 cursor-pointer" onClick={e => handleOption(3)}>
                    <i className='bx bxs-color-fill'></i>
                </li>
                <li className="flex gap-4 items-center p-4 cursor-pointer" onClick={e => handleOption(5)} id="image-drawing-options">
                    <i className='bx bxs-paint'></i>
                </li>
                <li className="flex gap-4 items-center p-4 cursor-pointer" onClick={e => handleOption(5)} id="magic-brush-options">
                    <i className='bx bxs-magic-wand' ></i>
                </li>
                <li className="flex gap-4 items-center p-4 cursor-pointer"
                    title="Advanced paint"
                    onClick={e => handleOption(5)}
                    id="advanced-brush-options"
                >
                    <i className='bx bxs-palette'></i>
                </li>
                <li className="flex gap-4 items-center p-4 cursor-pointer" onClick={() => { handleOption(7) }}>
                    <i className='bx bx-text' ></i>
                </li>
                <li className="flex gap-4 items-center p-4 cursor-pointer" id="text-p5" onClick={() => { handleOption(5) }}>
                    <i className='bx bx-text' >2</i>
                </li>
                <li className="flex gap-4 items-center p-4 cursor-pointer" onClick={() => handleOption(5)} id="scratch-brush-options">
                    <i className='bx bx-star'></i>
                </li>
                <li className="flex gap-4 items-center p-4 cursor-pointer" onClick={() => handleOption(8)} title="Remove background">
                    <i className='bx bx-minus-back'></i>
                </li>
                <li className="flex gap-4 items-center p-4 cursor-pointer" id="remove-object" onClick={() => handleOption(5)}>
                    <i className='bx bx-trim'></i>
                </li>
                <li className="flex gap-4 items-center p-4 cursor-pointer" id="save-button"
                >
                    <i className='bx bx-download'></i>
                </li> */}