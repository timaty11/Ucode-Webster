import { Editor } from 'react-image-markup'
import React from 'react'
import { useRef, useEffect } from 'react';
// import './text.css'

export function TextOnImage({ imageUrl }) {
    // const editor = useRef();

    // useEffect(() => {
    //     editor.current.setBackgroundImage(imageUrl);
    // }, []);

   

    // return (
    //     <div className='overlay text-white'>
    //         <div>
    //         <button
    //             onClick={() => {
    //                 let textModeOptions = {
    //                     fill: "red",
    //                     fontFamily: "Verdana",
    //                     fontSize: 16,
    //                     placeholder: "Type something"
    //                 };
    //                 editor.current.set("text", textModeOptions);
    //                 console.log("🚀 ~ file: TextOnImage.jsx:24 ~ TextOnImage ~ text:", "text")
    //             }}
    //         >
    //             text
    //         </button>
    //         <button
    //             onClick={() => {
    //                 console.log(editor.current.saveImage());
    //             }}
    //         >
    //             save
    //         </button>
    //         <button
    //             onClick={() => {
    //                 editor.current.undo();
    //             }}
    //         >
    //             clear
    //         </button>
    //         <Editor height="400" width="500" ref={editor} style={{position: 'fixed'}} />
    //         </div>
    //     </div>
    // )
    const editor = useRef();

    useEffect(() => {
      editor.current.setBackgroundImage(
        imageUrl
      );
        
      // editor.current.set("circle");
    }, []);

    let g = document.getElementsByClassName('.upper-canvas ');
    for (let i = 0; i < g.length; i++) {
      g[i].style.position = 'relative';
    }
  
    return (
      // <div className="App">
        <div class=" text-white relative">
          {/* <button
            onClick={() => {
              let customizeRectangle = {
                stroke: "white",
                strokeWidth: "5"
              };
              editor.current.set("rect", customizeRectangle);
              console.log("AAAA");
              // editor.current.set("freeDrawing");
            }}
          >
            draw
          </button> */}
          <button
            onClick={() => {
              let textModeOptions = {
                fill: "red",
                fontFamily: "Verdana",
                fontSize: 16,
                placeholder: "Type something"
              };
              editor.current.set("text", textModeOptions);
            }}
          >
            text
          </button>
          <button
            onClick={() => {
              console.log(editor.current.saveImage());
            }}
          >
            save
          </button>
          <button
            onClick={() => {
              editor.current.undo();
            }}
          >
            clear
          </button>
  
          <Editor className="absolute t-0" height="500" width="500" ref={editor} />
        {/* </div> */}
      </div>
    );
}