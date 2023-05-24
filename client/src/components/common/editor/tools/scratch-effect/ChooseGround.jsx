export function ChooseGround() {


    return (
        <div className="text-white ">
            <div className="mb-4 mt-4">
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
            </div>
            <div className="mb-4 mt-12">
                <h3 className="mb-4">
                    Choose background
                </h3>
                <div>
                    <div>
                        <input type="file" id="file-input-scratch-back"></input>
                    </div>
                    <div>
                        <label>Choose current </label>
                        <input type="checkbox" id="checkBackground"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}