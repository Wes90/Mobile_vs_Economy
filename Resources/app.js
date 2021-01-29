//Set up to read the data file
// d3.json("mobile_subscriptions_clean.csv").then(function(data){ 
//     console.log(data)});

function readDataPCI ()  {
    d3.csv("data-per_capita_income.csv").then(function(data){ 
        console.log(data)

       
            var listElement = {y:data[0].x2011_pci, label: data[0].country_name};
            var x2011List= [];


        var i;
        for (i = 0; i < data.length; i++) {
            let countryName=data[i].country_name;
            let x2011PCI=data[i].x2011_pci;
            let listElement = {y:data[i].x2011_pci, label: data[i].country_name};
            x2011List.push(listElement);
        
        console.log(countryName);
        console.log(x2011PCI);
        console.log(x2011List);
        }   
            
            
    
        
        //Setting variables to use in the website
        // let samplevalues=data.samples.map(info=>info.sample_values);
        // let otuID=data.samples.map(info=>info.otu_ids);
        // let otulabel=data.samples.map(info=> info.otu_labels);
        // let metaData=data.metadata
        // let samples=data.samples
        
        console.log (listElement);



    })

};
    
readDataPCI();

//Setting variables to use in the website
// let countryName=data.map(info=>info.country_name);
// let 2011PCI=dataPCI.map(info=>info.2011_pci);
// let 2014PCI=dataPCI.map(info=>info.2014_pci);
// let 2017PCI=dataPCI.map(info=>info.2017_pci);

// let samples=data.samples


