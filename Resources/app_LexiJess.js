
//Set up to read the data file
// d3.json("mobile_subscriptions_clean.csv").then(function(data){ 
//     console.log(data)});

function readDataPCI ()  {
    d3.csv("Merged_table_top_bottom.csv").then(function(data){ 
        console.log(data)

       
        var listElement = {y:data[0].x2011_pci, label: data[0].country_name};
                    var x2011List= [];
                    var x2014List= [];
                    var x2017List= [];
                var i;
                for (i = 0; i < data.length; i++) {
                    let countryName=data[i].country_name;
                    let x2011PCI=data[i].x2011_pci;
                    let x2014PCI=data[i].x2014_pci;
                    let x2017PCI=data[i].x2017_pci;
        
                    let listElement2011 = {y:data[i].x2011_pci, label: data[i].country_name};
                    let listElement2014 = {y:data[i].x2014_pci, label: data[i].country_name};
                    let listElement2017 = {y:data[i].x2017_pci, label: data[i].country_name};
                    
                    
                    x2011List.push(listElement2011);
                    x2014List.push(listElement2014);
                    x2017List.push(listElement2017);

                    let sliced2011=x2011List.slice(0,10);
                    let sliced2014=x2014List.slice(0,10);
                    let sliced2017=x2011List.slice(0,10);
        
        console.log(countryName);
        console.log(x2011PCI);
        console.log(x2011List);
        console.log(sliced2011);
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



//The above code results in the correct population of lists to plug into the graph. 
//But how do I plug them int othe graph? A tag in the html? ugh. 

//Looks like the canvas library is generally executed in JS within the HTML file! This is weird, eh?

//I tried to consolidate the above code into the template code from canvas below
// but still no luck. Doesn't populate. :(

//This is the canvas html tags...how do they fit in? I now have a box in second_try
/* <div><script>
    var c = document.getElementById("myCanvas");</div> */


        
