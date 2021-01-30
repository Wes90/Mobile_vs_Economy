// Mobile Penetration vs % of population >15 YO w/ banking services
// Ratio bar chart

// Create a function to pull in the json data
// Using 'd3.json' gather the metadata for each sample
d3.json('mergerd_tables.json').then((mergerd_tables)=>{
    var id=mergerd_tables.Country%20name;
    console.log(mergerd_tables.metadata);

    var select=d3.selectAll('#ZZZZZZt');;

    country.forEach((v)=>{
        select.append('option').text(v).property("value",v);
    })   

    