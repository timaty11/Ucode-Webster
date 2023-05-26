import { Editor } from 'react-image-markup'
import React from 'react'
import { useRef, useEffect } from 'react';
// import './text.css'

export function TextOnImage({ imageUrl, fontFamily, colorText }) {
  const editor = useRef();

  useEffect(() => {
    editor.current.setBackgroundImage(imageUrl);
  }, []);


  let textModeOptions = {
    fill: colorText,
    fontFamily: fontFamily,
    fontSize: 16,
    placeholder: "Type something"
  };
  return (
    <div className='w-full h-full items-center justify-center text-white absolute'>
     
        <button
          onClick={() => {
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
        <Editor height="auto" width="auto" ref={editor}  />
      
    </div>
  )
}