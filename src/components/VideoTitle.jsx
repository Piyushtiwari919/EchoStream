const VideoTitle = ({title, overview})=>{
    return(
        <div className="pt-44 px-8">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="text-lg my-3 w-2/5">{overview}</p>
            <div className="gap-1">
                <button className="border-2 border-gray-600 text-xl mr-4 my-4 px-4 py-2 bg-gray-600 cursor-pointer text-white rounded-sm"><i className="fa-regular fa-circle-play pr-2"></i>Play</button>
                <button className="border-2 border-gray-600 text-xl mr-4 my-4 px-4 py-2 bg-gray-600 cursor-pointer text-white rounded-sm"><i className="fa-solid fa-circle-info pr-2"></i>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;
