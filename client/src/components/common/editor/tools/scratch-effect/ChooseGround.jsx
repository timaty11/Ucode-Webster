import "./choose.css"
export function ChooseGround() {


    return (
        <div className="text-white">
            {/* <div className="mb-4 mt-4">
                <h3 className="mb-4">
                    Choose foreground
                </h3>
                <div>
                    <div>
                        <input type="file" id="file-input-scratch-fore"></input>
                    </div>
                    <div>
                        <label>Choose current </label>
                        <input type="checkbox" id="checkForeground"></input>
                    </div>
                </div>
            </div> */}
            <div className="w-full mb-4 mt-12">
                <h3 className="mb-4 ">
                    Choose background
                </h3>
                <div className="ml-12">
                    <div className="flex text-center items-center">
                        <div className="lip mr-8" id="parent-color-picker-back"></div>
                        {/* <button className="nut" id="apply-back-scratch">Apply</button> */}
                        <button type="button" id="apply-back-scratch"
                            class=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Apply</button>
                    </div>
                    {/* <div>
                        <label>Choose current </label>
                        <input type="checkbox" id="checkBackground"></input>
                    </div> */}
                </div>
            </div>
        </div>
    )
}