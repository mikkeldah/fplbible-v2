import { Link } from "react-router-dom";
import { useEffect } from "react";
import setTheme from "../../utils/Themes";

const options1 = [
    {
        optionName: "Recommender",
        description: "Recieve player recommendations based on availablity, performance and opponent",
        link: "/recommender"
    },
    {
        optionName: "Plot builder",
        description: "Gain insight on stand-out players by making your own plots based on up-to-date FPL data",
        link: "/plot-builder"
    },
    {
        optionName: "Captain Picks",
        description: "Get a thorough analysis of the most current captain picks for gameweek 1",
        link: "/captain-picks"

    },
    {
        optionName: "Players",
        description: "Search through the FPL player database",
        link: "/"
    }
    
]

function Home( props ) {

    //set theme to purple when rendering the players page
    useEffect(() => {
        setTheme('#38003c', '#530553');
    })

    useEffect(() => {
        props.handlePageSwitch('Home');
    })

    return (
        <div id="home-main">
            <div id="options-container">
                <div className="home-options-row">
                    {options1.map((option) => {
                        const { optionName, description, link } = option;
                        return (
                            <Link to={link} style={{ textDecoration: 'none' }}>
                                <HomeOption optionName={optionName} description={description}/>
                            </Link>
                        )
                    })}
                </div>   
            </div>
        </div>
    )
};

function HomeOption(props) {
    return (
        <div className="home-option-container">
            <h2>{props.optionName}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default Home;