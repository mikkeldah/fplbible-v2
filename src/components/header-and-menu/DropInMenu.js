import { Link } from "react-router-dom";

function DropInMenu( props ) {

    
    /* Hides the menu and hides shadow when link clicked */ 
    const hideMenuOnClick = () => {
        const menu = document.getElementById('menu');
        const shadowDiv = document.getElementById('shadow-div');

        let opacity = document.getElementById("bar2");
        opacity.style.opacity = 1;

        let rotateRight = document.getElementById("bar1");
        rotateRight.style.transform = "translateY(0) rotate(0)";

        let rotateLeft = document.getElementById("bar3");
        rotateLeft.style.transform = "translateY(0) rotate(0)";

        menu.style.transform = "translateX(-251px)";
        shadowDiv.style.display = "none";

        props.dropInMenuVisibilityChange(true);

    }

    return (
        <div id="menu">
            <Link to="/recommender" style={{ textDecoration: 'none' }} onClick={hideMenuOnClick}>
                <div className="menuItem">
                    <p>Recommender</p>
                </div>
            </Link>
            <Link to="/plot-builder" style={{ textDecoration: 'none' }} onClick={hideMenuOnClick}>
                <div className="menuItem">
                    <p>Plot Builder</p>
                </div>
            </Link>                     
            <Link to="/captain-picks" style={{ textDecoration: 'none' }} onClick={hideMenuOnClick}>
                <div className="menuItem">
                    <p>Captain Picks</p>
                </div>
            </Link>  
            <Link to="/players" style={{ textDecoration: 'none' }} onClick={hideMenuOnClick}>
                <div className="menuItem">
                    <p>Players</p>
                </div>
            </Link>    
            <Link to="/contact" style={{ textDecoration: 'none' }} onClick={hideMenuOnClick}>
                <div className="menuItem">
                    <p>Contact</p>
                </div>
            </Link>        
        </div>

    )
};


export default DropInMenu;