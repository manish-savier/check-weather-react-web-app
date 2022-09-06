function CurrentTemp(props) {
    return (
        <div className="temp-main-div">
        <h2>Temperature in {props.name}</h2>
            <div className="temp-div">
                <div className="temp-image-div">
                    <img src={props.img} alt="weather-icon" />
                </div>
                <h1>
                {props.temp}
                </h1>
                <div className="temp-div-item">
                    <span><sup>o</sup>C</span>
                </div>
            </div>
            <p>{props.climate}: {props.desc}</p>
        </div>  
    );
}

export default CurrentTemp;