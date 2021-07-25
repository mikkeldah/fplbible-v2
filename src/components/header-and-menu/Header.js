import { Link } from "react-router-dom";

function Header( props ) {

    const HideOrShowMenu = () => {
        let menu = document.getElementById("menu");
        
        if (props.dropInMenuHidden) {
            let opacity = document.getElementById("bar2");
            opacity.style.opacity = 0;
    
            let rotateRight = document.getElementById("bar1");
            rotateRight.style.transform = "translateY(8px) rotate(45deg)";
    
            let rotateLeft = document.getElementById("bar3");
            rotateLeft.style.transform = "translateY(-8px) rotate(-45deg)";
    
            menu.style.transform = "translateX(0)";
    
            document.getElementById('shadow-div').style.display = "block";

            props.dropInMenuVisibilityChange(false);
    
        }
    
        else {
            let opacity = document.getElementById("bar2");
            opacity.style.opacity = 1;
    
            let rotateRight = document.getElementById("bar1");
            rotateRight.style.transform = "translateY(0) rotate(0)";
    
            let rotateLeft = document.getElementById("bar3");
            rotateLeft.style.transform = "translateY(0) rotate(0)";
    
            menu.style.transform = "translateX(-251px)";
    
            document.getElementById('shadow-div').style.display = "none";
            
            props.dropInMenuVisibilityChange(true);
            
        }
    }
    return (
        <div id="header">
            <div className="hamburger-and-page-container">
                <div className="hamburger-container">
                    <div className="hamburger" onClick={HideOrShowMenu}>
                        <span className="bar" id="bar1"></span>
                        <span className="bar" id="bar2"></span>
                        <span className="bar" id="bar3"></span>
                    </div> 
                </div>
                <div id="page-container">
                    <p style={{ fontSize: "0.8rem"}}>{"/"}{props.page}</p>
                </div>
            </div>
            <Title title="The FPL Bible"></Title>
            <div className="hamburger-and-page-container" id="remove-on-mobile-size">
                <div className="hamburger-container">
                </div>
                <div id="page-container" style={{ visibility: 'hidden' }}>
                    <p>{props.page}</p>
                </div>
            </div>
        </div>
    )
};


function Title(props) {
    return (
        <div className="title-container">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <h1 style={{ color: "white" }}>{props.title}</h1>
            </Link>
        </div>
    )
};


export default Header;