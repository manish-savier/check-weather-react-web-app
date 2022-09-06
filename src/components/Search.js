function Search(props){
    return(
        <div className="search">
            <input type="text" onChange={props.location} onKeyDown={props.getTemp} placeholder="Enter City Name" value={props.value} />
            <img src="images/search.png" alt="search-img" onClick={props.click} />
        </div>

    );
}

export default Search;