

function PageTitleAndDesc( props ) {
    return (
        <div id="title-and-description-container">
            <h1>{props.page === "Home" ? "Welcome to The FPL Bible" : props.page}</h1>
            <p >{props.description}</p>
        </div>
    )
}

export default PageTitleAndDesc;