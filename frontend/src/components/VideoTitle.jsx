const VideoTitle = ({title, overview})=>{
    const movieDescription = overview.length > 200 ? overview.slice(0, 200) + "..." : overview;
    return(
        <div className="max-sm:pt-[25%] max-lg:pt-[30%] pt-[25%] px-8 absolute">
            <h1 className="sm:text-5xl max-sm:text-2xl max-sm:mt-14 font-bold text-shadow-black text-shadow-md text-white">{title}</h1>
            <p className="text-lg my-3 w-2/5 text-shadow-black text-shadow-md text-white max-lg:hidden">{movieDescription}</p>
            <div className="gap-1">
                <button className="max-sm:hidden border-2 border-white text-xl mr-4 my-4 px-4 py-2 bg-white cursor-pointer text-black rounded-sm hover:opacity-85"><i className="fa-regular fa-circle-play pr-2"></i>Play</button>
                <button className="max-sm:hidden border-2 border-gray-600 text-xl mr-4 my-4 px-4 py-2 bg-gray-600 cursor-pointer text-white rounded-sm"><i className="fa-solid fa-circle-info pr-2"></i>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;
