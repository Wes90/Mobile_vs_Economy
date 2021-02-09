// % of Total Population with Mobile Penetration vs % of population >15 YO w/ banking services


// Create a chart to show all countries for 2011 Data
function makePlot2011(){
    d3.csv('merged_normalized_data.csv').then((merged_normalized_data)=>{
        Country_name=[]
        merged_normalized_data.forEach((v)=>{
        Country_name.push(v.Country_name);
        })

    // Create a cross plot of 2011 data
    var ao_2011=merged_normalized_data.map(row=>row.x2011_AO);
    var subs_2011=merged_normalized_data.map(row=>row.x2011_SUBS_norm);
    var countryLabel=merged_normalized_data.map(row=>row.Country_name); 

    var trace11={
        x: subs_2011,
        y: ao_2011,
        text: countryLabel,
        mode: 'markers',
        type: 'scatter',
        marker: {
            color: "purple"
        },
    }
    
    var data11 = [trace11]
    var layout = {
        title:'2011 Mobile Subscriptions vs Mobile Banking Services',
        xaxis: {
            title: {
                text: 'Percent of Population with Mobile Subscriptions',
                
            },
            range: [0,200],
        },
        yaxis: {
            title: {
                text: '% of population >15 YO w/ banking services',
            },
            range: [0,110],
        },
        // paper_bgcolor: 'rgba(089,089,150,0)',
        // plot_bgcolor: 'rgba(0,0,0,0)',
    };
    Plotly.newPlot('scatter2011', data11, layout);
    })
}
makePlot2011()

// Create a chart to display all 2014 data
function makePlot2014(){
    d3.csv('merged_normalized_data.csv').then((merged_normalized_data)=>{
        Country_name=[]
        merged_normalized_data.forEach((v)=>{
        Country_name.push(v.Country_name);
        })

    // Create a cross plot of 2014 data
    var ao_2014=merged_normalized_data.map(row=>row.x2014_AO);
    var subs_2014=merged_normalized_data.map(row=>row.x2014_SUBS_norm);
    var countryLabel=merged_normalized_data.map(row=>row.Country_name); 

    var trace14={
        x: subs_2014,
        y: ao_2014,
        text: countryLabel,
        mode: 'markers',
        type: 'scatter',
        marker: {
            color: "purple"
        },
    }
    
    var data14 = [trace14]
    var layout14 = {
        title:'2014 Mobile Subscriptions vs Mobile Banking Services',
        xaxis: {
            title: {
                text: 'Percent of Population with Mobile Subscriptions',
                
            },
            range: [0,200],
        },
        yaxis: {
            title: {
                text: '% of population >15 YO w/ banking services',
            },
            range: [0,110],
        },
        
    };
    Plotly.newPlot('scatter2014', data14, layout14);
    })
}
makePlot2014()

// Create a chart to display all 2017 data
function makePlot2017(){
    d3.csv('merged_normalized_data.csv').then((merged_normalized_data)=>{
        Country_name=[]
        merged_normalized_data.forEach((v)=>{
        Country_name.push(v.Country_name);
        })
        // console.log(merged_normalized_data)

    // Create a cross plot of 2017 data
    var ao_2017=merged_normalized_data.map(row=>row.x2017_AO);
    var subs_2017=merged_normalized_data.map(row=>row.x2017_SUBS_norm);
    var countryLabel=merged_normalized_data.map(row=>row.Country_name); 

    var trace17={
        x: subs_2017,
        y: ao_2017,
        text: countryLabel,
        mode: 'markers',
        type: 'scatter',
        marker: {
            color: "purple",
        },
    }
    
    var data17 = [trace17]
    var layout17 = {
        title:'2017 Mobile Subscriptions vs Mobile Banking Services',
        xaxis: {
            title: {
                text: 'Percent of Population with Mobile Subscriptions',
                
            },
            range: [0,200]
        },
        yaxis: {
            title: {
                text: '% of population >15 YO w/ banking services',
            },
            range: [0,110],
        },
        
    };
    Plotly.newPlot('scatter2017', data17, layout17);
    })
}
makePlot2017()

//  Create a chart with a drop down menu to allow visitors to choose a specific country of interest

d3.csv('merged_normalized_data.csv').then((merged_normalized_data)=>{
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
    d3.csv('merged_normalized_data.csv').then((merged_normalized_data)=>{
        Country_name=[]
        var holder = merged_normalized_data
        holder=holder.filter(a =>a.Country_name == country)


    // Define the chart
    var ao_2011=holder.map(row=>row.x2011_AO);
    var subs_2011=holder.map(row=>row.x2011_SUBS_norm);
    var ao_2014=holder.map(row=>row.x2014_AO);
    var subs_2014=holder.map(row=>row.x2014_SUBS_norm);
    var ao_2017=holder.map(row=>row.x2017_AO);
    var subs_2017=holder.map(row=>row.x2017_SUBS_norm);
    var countryLabel=holder.map(row=>row.Country_name); 
    subs_2011 = subs_2011.map((i) => Number(i));
    subs_2014 = subs_2014.map((i) => Number(i));
    subs_2017 = subs_2017.map((i) => Number(i));
    ao_2011 = ao_2011.map((i) => Number(i));
    ao_2014 = ao_2014.map((i) => Number(i));
    ao_2017 = ao_2017.map((i) => Number(i));
    var trace1={
        x: subs_2011,
        y: ao_2011, 
        mode: 'markers',
        type: 'scatter',
        name: '2011',
    };
    var trace2={
        x: subs_2014,
        y: ao_2014, 
        mode: 'markers',
        type: 'scatter',
        name: '2014',
    };
    var trace3={
        x: subs_2017,
        y: ao_2017, 
        mode: 'markers',
        type: 'scatter',
        name: '2017',
    };
    var data1=[trace1, trace2, trace3];
    var Layout={
            title: {
                text: '% of Pop. w/mobile accounts vs % Pop. w/mobile subscriptions',
            },    
        
        xaxis:{
            title: {
                text: 'Percent of Population with Mobile Subscriptions',
                
            },
            range: [0,200],             
        },

        yaxis: {
            title: {
                text: '% of population >15 YO w/ banking services',
            },
            range: [0,110],   
        }
    }

    Plotly.newPlot('scatter_country',data1, Layout); 
    })
}    


// Review new Country
function optionChanged(newCountry) {
    // Select a new ID from the drop down menu
    makePlot(newCountry);
}

