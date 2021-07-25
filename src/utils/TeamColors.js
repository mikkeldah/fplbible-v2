function TeamColorLogo( props ) {

    const teamColors = {
        'ARS': ['#EF0107', '#DB0007'],
        'AVL': ['#95BFE5', '#670E36'],
        'BRE': ['white', '#e30613'],
        'BHA': ['#0057B8', '#0057B8'],
        'BUR': ['#6C1D45', '#6C1D45'],
        'CHE': ['#034694', '#034694'],
        'CRY': ['#1B458F', '#C4122E'],
        'EVE': ['#003399', '#003399'],
        'LEE': ['white', '#FFCD00'],
        'LEI': ['#003090', '#FDBE11'],
        'LIV': ['#C8102E', '#C8102E'],
        'MCI': ['#6CABDD', '#6CABDD'],
        'MUN': ['#DA291C', '#DA291C'],
        'NEW': ['#241F20', 'white'],
        'NOR': ['#FFF200', '#00A650'],
        'SOU': ['#D71920', 'white'],
        'TOT': ['white', '#132257'],
        'WAT': ['#FBEE23', '#11210C'],
        'WHU': ['#7A263A', '#1BB1E7'],
        'WOL': ['#FDB913', '#231F20'],

    }

    return (
        <div 
            style={
                { background: 'linear-gradient(to right, '+teamColors[props.teamName][0]+' 0%, '+teamColors[props.teamName][0]+' 50%, '+teamColors[props.teamName][1]+' 50%, '+teamColors[props.teamName][1]+' 100%)',
                width: props.diameter, height: props.diameter}
            } 
            id="team-color-box">
        </div>
    )

}

export default TeamColorLogo;