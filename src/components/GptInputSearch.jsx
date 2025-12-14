const GptInputSearch = ()=>{
    return(
        <form>
            <input type="text" name="queryInput" placeholder="What would you like to watch?" className="m-2 pl-2 py-2 border-2 border-black rounded-md"/>
            <button className="bg-red-600 p-2 text-white m-2 font-bold rounded-md">Search</button>
        </form>    
    )
}

export default GptInputSearch;