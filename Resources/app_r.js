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
    name: '2011'
    text: countryLabel,
    textposition: 'top center',
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
    var ao=merged_normalized_data.map(row=>row.2011_AO);
    var subs=merged_normalized_data.map(row=>row.2011_SUBS);
    var countryLabel=merged_normalized_data.map(row=>row.Country_name); 
    var trace1={
        x: subs,
        y: ao,
        mode: 'markers+text',
        type: 'scatter'
        name: '2011'
        text: [Country_name]
    };
    var data1=[trace1];
    var Layout={
        xaxis:{
            range: [0,1.5],
            title: {
                text: 'Percent of Population with Mobile Subscriptions'
            }
        },
        yaxis: {
            range: [0,1],
            text: '% of population >15 YO w/ banking services'
        }
    };
    Plotly.newPlot('XXXX',data1,Layout); 
    