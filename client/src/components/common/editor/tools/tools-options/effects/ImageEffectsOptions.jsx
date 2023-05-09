import { ImageContainer } from "image-effects-react"
import { filters } from "./image-effects";

let url
    = "https://media.istockphoto.com/id/1125907192/photo/green-garden.jpg?s=612x612&w=0&k=20&c=EVV-99EGJaO5sZ9ZUYKlbKsxj4-yvmLEjfS72rtmR5Q=";

export function ImageEffectsOptions(props) {
    function handleSetFilter(filterName)
    {
        props.setFilter(filterName);
    }

    return (
        <div className="h-screen">
            <ul className="w-full overflow-auto h-screen grid grid-cols-2 gap-4 m-5 mr-13 scrollbar-thin 
            scrollbar-thumb-slate-500 scrollbar-track-slate-700">
                {
                    filters && filters.map((filter) => (
                        <li className="" onClick={e => handleSetFilter(filter)} key={filters.indexOf(filter)}>
                            <ImageContainer
                                options={{
                                    filter: filter.key,
                                }}
                                style={{width: "auto", height: "auto"}}
                            >
                                <img className="w-32 h-auto object-cover" src={url} alt="filter" style={{width: "100%", height: "auto"}} />
                            </ImageContainer>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}