export function ChoosePhoto(props) {

    function UploadImage(e)
    {
        const { files } = e.target
        const file = files[0];
        
        if (file)
        {
            let choose_image = document.querySelector('.choose_image');
            choose_image.style.display = "none";
            props.setFile(file);
        }
    }

    return (
        <div className="choose_image">
           
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <div className="upload_img_box box-border h-72 w-72 p-4 border-2 border-dashed text-center">
                <i className='bx bx-upload text-3xl' style={{color:"#c8c8c8"}}></i>
                <input 
                    type="file" 
                    className="w-150 h-150"
                    name="selectedImage" 
                    id="selectedImage" 
                    accept="image/jpg, image/jpeg, image/png"
                    onChange={e => UploadImage(e)}    
                ></input>
            </div>
            
        </div>
    )
}