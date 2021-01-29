
// function readDataPCI ()  {
//     d3.csv("data-per_capita_income.csv").then(function(data){ 
//         console.log(data)

       
//             var listElement = {y:data[0].x2011_pci, label: data[0].country_name};
//             var x2011List= [];
//             var x2014List= [];
//             var x2017List= [];
//         var i;
//         for (i = 0; i < data.length; i++) {
//             let countryName=data[i].country_name;
//             let x2011PCI=data[i].x2011_pci;
//             let x2014PCI=data[i].x2014_pci;
//             let x2017PCI=data[i].x2017_pci;

//             let listElement2011 = {y:data[i].x2011_pci, label: data[i].country_name};
//             let listElement2014 = {y:data[i].x2014_pci, label: data[i].country_name};
//             let listElement2017 = {y:data[i].x2017_pci, label: data[i].country_name};

//             x2011List.push(listElement2011);
//             x2014List.push(listElement2014);
//             x2017List.push(listElement2017);
        
//         console.log(countryName);
//         console.log(x2011PCI);
//         console.log(x2011List);
//         }   

//     })

//The above code results in the correct population of lists to plug into the graph. 
//But how do I plug them int othe graph? A tag in the html? ugh. 

window.onload = function () {
    d3.csv("data-per_capita_income.csv").then(function(data){ 
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
        
        console.log(countryName);
        console.log(x2011PCI);
        console.log(x2011List);
           

            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                title:{
                    text: "Income by Country: 2011, 2014, 2017"
                },
                axisY: {
                    title: "Income",
                    includeZero: true
                },
                legend: {
                    cursor:"pointer",
                    itemclick : toggleDataSeries
                },
                toolTip: {
                    shared: true,
                    content: toolTipFormatter
                },
                data: [{
                    type: "bar",
                    showInLegend: true,
                    name: "2011",
                    color: "gold",
                    dataPoints: x2011List
                // dataPoints: [
                    // 	{ y: 243, label: "Italy" },
                    // 	{ y: 236, label: "China" },
                    // 	{ y: 243, label: "France" },
                    // 	{ y: 273, label: "Great Britain" },
                    // 	{ y: 269, label: "Germany" },
                    // 	{ y: 196, label: "Russia" },
                    // 	{ y: 1118, label: "USA" }
                    // ]
                },
                {
                    type: "bar",
                    showInLegend: true,
                    name: "2014",
                    color: "silver",
                    dataPoints: [
                        { y: 212, label: "Italy" },
                        { y: 186, label: "China" },
                        { y: 272, label: "France" },
                        { y: 299, label: "Great Britain" },
                        { y: 270, label: "Germany" },
                        { y: 165, label: "Russia" },
                        { y: 896, label: "USA" }
                    ]
                },
                {
                    type: "bar",
                    showInLegend: true,
                    name: "2017",
                    color: "#A57164",
                    dataPoints: [
                        { y: 236, label: "Italy" },
                        { y: 172, label: "China" },
                        { y: 309, label: "France" },
                        { y: 302, label: "Great Britain" },
                        { y: 285, label: "Germany" },
                        { y: 188, label: "Russia" },
                        { y: 788, label: "USA" }
                    ]
                }]
            });
            chart.render();
            
            function toolTipFormatter(e) {
                var str = "";
                var total = 0 ;
                var str3;
                var str2 ;
                for (var i = 0; i < e.entries.length; i++){
                    var str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\">" + e.entries[i].dataSeries.name + "</span>: <strong>"+  e.entries[i].dataPoint.y + "</strong> <br/>" ;
                    total = e.entries[i].dataPoint.y + total;
                    str = str.concat(str1);
                }
                str2 = "<strong>" + e.entries[0].dataPoint.label + "</strong> <br/>";
                str3 = "<span style = \"color:Tomato\">Total: </span><strong>" + total + "</strong><br/>";
                return (str2.concat(str)).concat(str3);
            }
            
            function toggleDataSeries(e) {
                if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                    e.dataSeries.visible = false;
                }
                else {
                    e.dataSeries.visible = true;
                }
                chart.render();
            }
            
            }
        }});
        
readDataPCI();

//Setting variables to use in the website
// let countryName=data.map(info=>info.country_name);
// let 2011PCI=dataPCI.map(info=>info.2011_pci);
// let 2014PCI=dataPCI.map(info=>info.2014_pci);
// let 2017PCI=dataPCI.map(info=>info.2017_pci);

// let samples=data.samples


