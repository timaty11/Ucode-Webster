const API_KEY = 'gWnwqCkxv88Gw4V3wefCwBWH';
import { useEffect, useState } from "react";
import axios from "axios";
import FormData from 'form-data'
import "./remove.css"
// import fs from 'fs';
// import { Buffer } from "buffer";
// window.Buffer = window.Buffer || require("buffer").Buffer; 
// import { RemoveBgResult, RemoveBgError, removeBackgroundFromImageBase64 } from "remove.bg";
// import { RemoveBgResult, RemoveBgError, removeBackgroundFromImageBase64 } from "remove.bg";

export function RemoveBackground({ imageUrl }) {
    const [isLoading, setIsLoading] = useState(false);
    const [resultImg, setResultImg] = useState();
    const [currentImageUrl, setCurrentImageUrl] = useState();

    function base64toBlob(base64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 1024;
        var byteCharacters = window.atob(base64Data);
        var bytesLength = byteCharacters.length;
        var slicesCount = Math.ceil(bytesLength / sliceSize);
        var byteArrays = new Array(slicesCount);

        for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            var begin = sliceIndex * sliceSize;
            var end = Math.min(begin + sliceSize, bytesLength);

            var bytes = new Array(end - begin);
            for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new Blob(byteArrays, { type: contentType });
    }

    function _arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }

    function b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }

    useEffect(() => {
        // Split the base64 string in data and contentType
        var block = imageUrl.split(";");
        // Get the content type of the image
        var contentType = block[0].split(":")[1];// In this case "image/gif"
        // get the real base64 content of the file
        var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."

        // Convert it to a blob to upload
        var blob = b64toBlob(realData, contentType);
       
        const readerBlob = new FileReader();
        readerBlob.onloadend = () => setCurrentImageUrl(readerBlob.result)
        readerBlob.readAsDataURL(blob);
    }, [])

    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = window.atob(arr[arr.length - 1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }
    

    async function RemoveBg() {
        

        const formData = new FormData();
        formData.append('size', 'auto');
        let inputPath = 'src\\components\\common\\editor\\tools\\remove-bg\\tmp\\imageTmp.png';
        let file = dataURLtoFile(imageUrl, 'src\\components\\common\\editor\\tools\\remove-bg\\tmp\\imageTmp.png');
        formData.append('image_file', file, file.name);
       
        await axios({
            method: 'post',
            url: 'https://api.remove.bg/v1.0/removebg',
            data: formData,
            responseType: 'blob',
            headers: {
                // ...formData.getHeaders(),
                'X-Api-Key': 'gWnwqCkxv88Gw4V3wefCwBWH',
            },
            encoding: null
        })
            .then((response) => {
                if (response.status != 200) return console.error('Error:', response.status, response.statusText);
                console.log(response.data)
                const reader = new FileReader();
                reader.onloadend = () => setResultImg(reader.result)
                reader.readAsDataURL(response.data);
                // setIsLoading(false);
            })
            .catch((error) => {
                return console.error('Request failed:', error);
            });
    }




    return (
        <div>
            {isLoading ?
                <div>
                    <div className="text-center">
                        <div role="status">
                            <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>

                :
                <div>
                    <img className="okeeeeeey" src={resultImg}></img>
                </div>
            }
            <div>
                <img  className="okeeeeeey" src={currentImageUrl}></img>
            </div>
            <button className="jopa" onClick={RemoveBg} disabled={isLoading}>Apply</button>
        </div>
    )
}