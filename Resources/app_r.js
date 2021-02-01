// % of Total Population with Mobile Penetration vs % of population >15 YO w/ banking services
// Ratio bar chart

// Create a function to pull in the json data
// Using 'd3.json' gather the metadata for each sample
d3.json('merged_normalized_data.json').then((merged_normalized_data)=>{
    var id=merged_normalized_data.Country%20name;
    console.log(merged_normalized_data.metadata);

    //select the drop down menu
    var select=d3.selectAll('#ZZZZZZt');;

    Country%20name.forEach((v)=>{
        select.append('option').text(v).property("value",v);
    })   

    firstcountry=Country%20name[0]
    makePlot(firstcountry)
    updateMeta(firstcountry)
})   

// Update metadata
function updateMeta(Country%20name){
    // read in the data file 
    d3.json('merged_normalized_data.json').then((merged_normalized_data)=>{
        var meta=merged_normalized_data.metadata;
        // Take the country and filter the variable meta
        var results = meta.filter(newData => newData.Country%20name == Country%20name)[0]
        // With the filtered results post them in the #sample-metadata div
        var metadata=d3.selectAll('#sample-metadata');;    
        metadata.html("");
        // Show all the meta data
        Object.entries(results).forEach(([key, value]) => {
            metadata.append("p").text(`${key}: ${value}`);
        })
    })
}