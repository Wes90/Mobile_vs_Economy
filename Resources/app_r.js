// % of Total Population with Mobile Penetration vs % of population >15 YO w/ banking services
// Ratio bar chart

// Create a function to pull in the json data
// Using 'd3.json' gather the metadata for each sample
d3.json('merged_normalized_data.json').then((merged_normalized_data)=>{
    var id=merged_normalized_data.Country_name;
    console.log(merged_normalized_data.metadata);

    //select the drop down menu
    var select=d3.selectAll('#ZZZZZZt');;

    Country_name.forEach((v)=>{
        select.append('option').text(v).property("value",v);
    })   

    firstcountry=Country_name[0]
    makePlot(firstcountry)
    updateMeta(firstcountry)
})   

// Update metadata
function updateMeta(Country_name){
    // read in the data file 
    d3.json('merged_normalized_data.json').then((merged_normalized_data)=>{
        var meta=merged_normalized_data.metadata;
        // Take the country and filter the variable meta
        var results = meta.filter(newData => newData.Country_name == Country_name)[0]
        // With the filtered results post them in the #sample-metadata div
        var metadata=d3.selectAll('#sample-metadata');;    
        metadata.html("");
        // Show all the meta data
        Object.entries(results).forEach(([key, value]) => {
            metadata.append("p").text(`${key}: ${value}`);
        })
    })
}

// Define the source of the data and make the charts

// Define the bubble chart
var otuValue=merged_normalized_data.map(row=>row.sample_values);
var otuValue=otuValue[testNum];
var otuId=merged_normalized_data.map(row=>row.otu_ids);
var otuId=otuId[testNum];
var otuLabel=merged_normalized_data.map(row=>row.otu_labels); 
var otuLabel=otuLabel[testNum];
var minIds=d3.min(otuId);
var maxIds=d3.max(otuId);
var mapNr = d3.scaleLinear().domain([minIds, maxIds]).range([0, 1]);
var bubbleColors = otuId.map( val => d3.interpolateRgbBasis(["royalblue", "greenyellow", "goldenrod"])(mapNr(val)));
var trace1={
    x: otuId,
    y: otuValue,
    text: otuLabel,
    mode: 'markers',
    type: 'scatter'
    }
};
var data1=[trace1];
var Layout={
    xaxis:{
        range: [0,1.5],
        title: {
            text: 'OTU ID'
        }
    },
};
Plotly.newPlot('bubble',data1,bubbleLayout); 
})
}