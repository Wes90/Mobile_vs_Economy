// % of Total Population with Mobile Penetration vs % of population >15 YO w/ banking services
// Ratio bar chart

// Create a function to pull in the json data
// Using 'd3.json' gather the metadata for each sample
d3.csv('Resources/merged_normalized_data.csv').then((merged_normalized_data)=>{
    // var countryName=merged_normalized_data.Country_name;
    
    console.log(merged_normalized_data);

    //select the drop down menu
    var select=d3.selectAll('#selDataset');;
    
    // An array for country name
    Country_name=[]
    merged_normalized_data.forEach((v)=>{
        Country_name.push(v.Country_name);
        // console.log(v.Country_name)
        select.append('option').text(v.Country_name).property("value",v.Country_name);
    })   

    firstcountry=Country_name[0]
    makePlot(firstcountry)
})   

// Define the source of the data and make the charts
function makePlot(country){
    d3.csv('Resources/merged_normalized_data.csv').then((merged_normalized_data)=>{
        // create an array
        // var merged_normalized_data=merged_normalized_data.merged_normalized_data;
        // var countryName=merged_normalized_data.map(row=>row.Country_name).indexOf(country);
        Country_name=[]
        // merged_normalized_data.forEach((v)=>{
        // Country_name.push(v.Country_name);
        var holder = merged_normalized_data
        holder=holder.filter(a =>a.Country_name == country)


    // Define the chart
    var ao_2011=holder.map(row=>row.x2011_AO);
    var subs_2011=holder.map(row=>row.x2011_SUBS_norm);
    var ao_2014=merged_normalized_data.map(row=>row.x2014_AO);
    var subs_2014=merged_normalized_data.map(row=>row.x2014_SUBS_norm);
    var ao_2017=merged_normalized_data.map(row=>row.x2017_AO);
    var subs_2017=merged_normalized_data.map(row=>row.x2017_SUBS_norm);
    var countryLabel=merged_normalized_data.map(row=>row.Country_name); 
    console.log("dinosaurs", subs_2011)
    subs_2011 = subs_2011.map((i) => Number(i));
    ao_2011 = ao_2011.map((i) => Number(i));
    console.log("1", ao_2011)
    var trace1={
        x: subs_2011,
        y: ao_2011, 
        mode: 'markers+text',
        type: 'scatter',
        name: '2011',
        // text: data['Country_name'],
        // hover data = ['Country_name']
    };
    var data1=[trace1];
    var Layout={
        xaxis:{
            range: [0,1.50],
            title: {
                text: 'Percent of Population with Mobile Subscriptions'
            }
        },
        yaxis: {
            range: [0,100],
            text: '% of population >15 YO w/ banking services'
        }
    };
    Plotly.newPlot('scatter_country',data1, Layout); 
    // })
}

)}
// Review new Country
function optionChanged(newCountry) {
    // Select a new ID from the drop down menu
    makePlot(newCountry);
}
    // Create a cross plot of 2011 data
    // var ao_2011=merged_normalized_data.map(row=>row.x2011_AO);
    // var subs_2011=merged_normalized_data.map(row=>row.x2011_SUBS);
    // var ao_2014=merged_normalized_data.map(row=>row.x2014_AO);
    // var subs_2014=merged_normalized_data.map(row=>row.x2014_SUBS);
    // var ao_2017=merged_normalized_data.map(row=>row.x2017_AO);
    // var subs_2017=merged_normalized_data.map(row=>row.x2017_SUBS);
    // var countryLabel=merged_normalized_data.map(row=>row.Country_name); 

    // var trace2={
        // x: [subs_2011],
        // y: [ao_2011],
    //     mode: 'markers+text',
    //     type: 'scatter',
    //     text: data['Country_name']
    // }
    
    // var data2 = [trace2]
    // var layout = {
    //     xaxis: {
    //         range: [0,1.5]
    //     },
    //     yaxis: {
    //         range: [0,1]
    //     },
    //     title:'2011 Mobile Subscriptions vs Mobile Banking Services'
    // };
    // Plotly.newPlot('scatter2011', data2, layout);