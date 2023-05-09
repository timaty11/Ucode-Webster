export function SidebarTools(props) {

    function handleOption(e)
    {
        props.setOption(e);
    }

    function download()
    {
        props.download();
    }

    return (
        <div className="sidebar-tools bg-slate-800 h-full">
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <ul style={{ color: "#c8c8c8" }} className="text-xl">
                <li className="flex gap-4 items-center p-5 cursor-pointer" onClick={e => handleOption(1)}>
                    <i className='bx bx-cut'></i>
                    <p >Crop</p>
                </li>
                <li className="flex gap-4 items-center p-5 cursor-pointer">
                    <i className='bx bxs-brightness-half'></i>
                    <p>Brightness</p>
                </li>
                <li className="flex gap-4 items-center p-5 cursor-pointer" onClick={e => handleOption(3)}>
                    <i className='bx bxs-color-fill'></i>
                    <p>Effects</p>
                </li>
                <li className="flex gap-4 items-center p-5 cursor-pointer" onClick={e => handleOption(4)}>
                    <i className='bx bxs-paint'></i>
                    <p>Paint</p>
                </li>
                <li className="flex gap-4 items-center p-5 cursor-pointer">
                    <i className='bx bxs-magic-wand' ></i>
                    <p>Magic stick</p>
                </li>
                <li className="flex gap-4 items-center p-5 cursor-pointer">
                    <i className='bx bx-text' ></i>
                    <p>Text</p>
                </li>
                <li className="flex gap-4 items-center p-5 cursor-pointer" onClick={download}>
                    <i className='bx bx-download'></i>
                    <p>Download</p>
                </li>
            </ul>
        </div>
    )
}