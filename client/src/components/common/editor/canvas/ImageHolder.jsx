export function ImageHolder(fileDataURL) {
    let isVisible = "hidden";

    if (fileDataURL.fileDataURL) {
        isVisible = "block";
    }

    function DeleteCurrentImage() {
        isVisible = "hidden";
        fileDataURL = null;
    }

    return (
        <div className="w-8/12">
            <div className={`h-200 image_holder  ${isVisible} `}>
                <button onClick={e => DeleteCurrentImage}><i className='bx bx-message-square-x text-white'></i></button>
                <img src={fileDataURL.fileDataURL} alt="img" id="image"></img>
            </div>
        </div>
    )
}

