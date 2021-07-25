import { useState, useEffect } from 'react';
import Plotly from "plotly.js";
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

function PlotContainer(props) {

    const [[ GKPdata, DEFdata, MIDdata, FWDdata, xLabel, yLabel, text ], setXYData ] = useState(getXYData(props.data, props.preferences))

    useEffect(() => {
        setXYData(getXYData(props.data, props.preferences))
    }, [props])

    return (
        <div id="plot-container">
                <Plot 
                    data={[
                        /* GKP data */ 
                        {
                            x: GKPdata[0],
                            y: GKPdata[1],
                            type: 'scatter',
                            text: GKPdata[2],
                            mode: 'markers'+text,
                            textposition: 'top center',
                            name: "GKP",
                            marker: { size: 8 },
                        },
                        /* DEF data */ 
                        {
                            x: DEFdata[0],
                            y: DEFdata[1],
                            type: 'scatter',
                            text: DEFdata[2],
                            mode: 'markers'+text,
                            textposition: 'top center',
                            name: "DEF",
                            marker: { size: 8 },
                        },
                        /* MID data */ 
                        {
                            x: MIDdata[0],
                            y: MIDdata[1],
                            type: 'scatter',
                            text: MIDdata[2],
                            mode: 'markers'+text,
                            textposition: 'top center',
                            name: "MID",
                            marker: { size: 8 },
                        },
                        /* FWD data */ 
                        {
                            x: FWDdata[0],
                            y: FWDdata[1],
                            type: 'scatter',
                            text: FWDdata[2],
                            mode: 'markers'+text,
                            textposition: 'top center',
                            name: "FWD",
                            marker: { size: 8 },
                        },
                    ]}
                    layout={ {
                        height: 480,
                        xaxis: {
                            title: xLabel,
                            autorange: true,
                            gridcolor: 'grey',
                            linecolor: '#636363',
                            linewidth: 2
                        },
                        yaxis: {
                            title: yLabel,
                            autorange: true,
                            gridcolor: 'grey',
                            linecolor: '#636363',
                            linewidth: 2
                        },
                        hovermode: 'closest',
                        plot_bgcolor:"#222",
                        paper_bgcolor:"#222",
                        font: {
                            color: "white",
                        }
                    }}
                    config = {{responsive: true}}
                />
            </div>
    )
}

//IMPORTANT FUNCTION: filters and returns data according to user preferences
function getXYData(JSONdata, preferences) {
    let xDataGKP = []
    let yDataGKP = []
    let namesGKP = []

    let xDataDEF = []
    let yDataDEF = []
    let namesDEF = []

    let xDataMID = []
    let yDataMID = []
    let namesMID = []

    let xDataFWD = []
    let yDataFWD = []
    let namesFWD = []

    const xLabel = preferences[0]
    const yLabel = preferences[1]

    const GKPchecked = preferences[2]
    const DEFchecked = preferences[3]
    const MIDchecked = preferences[4]
    const FWDchecked = preferences[5]

    const  minMinutesPlayed = preferences[6]
    
    const priceRange = preferences[7]

    const teamSelected = preferences[8]

    const playerAvailability = preferences[9]

    for (let i = 0; i < JSONdata.length; i++) {
        if ( (JSONdata[i]['minutes'] > minMinutesPlayed) && ((JSONdata[i]['price'] <= priceRange[1] && JSONdata[i]['price'] >= priceRange[0]) || priceRange === '') && (JSONdata[i]['team'] === teamSelected || teamSelected === 'All teams')
            && (JSONdata[i]['status'] === playerAvailability || playerAvailability === 'All')) {
            if (JSONdata[i]['position'] === 'GKP' && GKPchecked) {
                xDataGKP.push(JSONdata[i][convertLabel(xLabel)])
                yDataGKP.push(JSONdata[i][convertLabel(yLabel)])
                namesGKP.push(JSONdata[i]['web_name'])

            }
            if (JSONdata[i]['position'] === 'DEF' && DEFchecked) {
                xDataDEF.push(JSONdata[i][convertLabel(xLabel)])
                yDataDEF.push(JSONdata[i][convertLabel(yLabel)])
                namesDEF.push(JSONdata[i]['web_name'])

            }
            if (JSONdata[i]['position'] === 'MID' && MIDchecked) {
                xDataMID.push(JSONdata[i][convertLabel(xLabel)])
                yDataMID.push(JSONdata[i][convertLabel(yLabel)])
                namesMID.push(JSONdata[i]['web_name'])

            }
            if (JSONdata[i]['position'] === 'FWD' && FWDchecked) {
                xDataFWD.push(JSONdata[i][convertLabel(xLabel)])
                yDataFWD.push(JSONdata[i][convertLabel(yLabel)])
                namesFWD.push(JSONdata[i]['web_name'])

            }
            


        }
    }

    const GKPdata = [xDataGKP, yDataGKP, namesGKP]
    const DEFdata = [xDataDEF, yDataDEF, namesDEF]
    const MIDdata = [xDataMID, yDataMID, namesMID]
    const FWDdata = [xDataFWD, yDataFWD, namesFWD]

    const showNames = preferences[10]

    let text = ''

    if (showNames === 'Always') {
        text = '+text';
    }
    

    return [GKPdata, DEFdata, MIDdata, FWDdata, xLabel, yLabel, text];
}

function convertLabel(label) {
    let db_label = "";
    switch (label) {
        case 'Total points':
            db_label = 'total_points';
            break;
        case 'Price':
            db_label = 'price';
            break;
        case 'Total minutes':
            db_label = 'minutes';
            break;

        case 'Points per Game':
            db_label = 'points_per_game';
            break;
        case 'Points per Price':
            db_label = 'points_per_price';
            break;
        case 'Points per Price per Game':
            db_label = 'points_per_price_per_game';
            break;
        default: 
            db_label = '';
    }

    return db_label;
}

export default PlotContainer;