import { Link } from "react-router-dom";
import { useEffect } from "react";
import setTheme from "../../utils/Themes";
import recommenderPic from "../../static/images/recommender.PNG"
import statsPic from "../../static/images/statsboard.PNG"
import captainPic from "../../static/images/captainpicks.PNG"
import playersPic from "../../static/images/players.PNG"

const options1 = [
    {
        optionName: "Recommender",
        description: "Recieve player recommendations based on availablity, performance and opponent",
        link: "/recommender", 
        img: recommenderPic
    },
    {
        optionName: "Plot builder",
        description: "Gain insight on stand-out players by making your own plots based on up-to-date FPL data",
        link: "/plot-builder",
        img: statsPic
    },
    {
        optionName: "Captain Picks",
        description: "Get a thorough analysis of the most current captain picks for gameweek 1",
        link: "/captain-picks",
        img: captainPic

    },
    {
        optionName: "Players",
        description: "Search through the FPL player database",
        link: "/players",
        img: playersPic
    }
    
]

function Home( props ) {

    //set theme to purple when rendering the players page
    useEffect(() => {
        setTheme('#38003c', '#530553');
    })

    useEffect(() => {
        props.handlePageSwitch('Home');
        document.title = "The FPL Bible | Home";
    })

    return (
        <div id="home-main">
            <div className="home-options-row">
                {options1.map((option) => {
                    const { optionName, description, link, img } = option;
                    return (
                        <Link to={link} style={{ textDecoration: 'none' }}>
                            <HomeOption optionName={optionName} description={description} img={img}/>
                        </Link>
                    )
                })}
            </div>   
        </div>
    )
};

function HomeOption(props) {
    return (
        <div className="home-option-container">
            <div className="home-image-container">
                <img src={props.img}></img>
            </div>
            <div className="home-title-and-desc">
                <div className="home-title-and-desc-inner">
                    <h2>{props.optionName}</h2>
                    <p>{props.description}</p>
                 </div>
            </div>
        </div>
    )
}

export default Home;