
	d3.csv("Merged_table_top_bottom.csv").then(function(data){ 

       
        var listElementPCI = {y:data[0].x2011_pci, label: data[0].country_name};
                    var x2011ListPCI= [];
                    var x2014ListPCI= [];
                    var x2017ListPCI= [];
                var i;
                for (i = 0; i < data.length; i++) {
                    let countryName=data[i].country_name;
                    let x2011PCI=data[i].x2011_pci;
                    let x2014PCI=data[i].x2014_pci;
                    let x2017PCI=data[i].x2017_pci;
        
                    let listElement2011PCI = {y:parseInt(data[i].x2011_pci), label: data[i].country_name};
                    let listElement2014PCI = {y:parseInt(data[i].x2014_pci), label: data[i].country_name};
                    let listElement2017PCI = {y:parseInt(data[i].x2017_pci), label: data[i].country_name};
        
                    x2011ListPCI.push(listElement2011PCI);
                    x2014ListPCI.push(listElement2014PCI);
					x2017ListPCI.push(listElement2017PCI);
					
					

					console.log(x2011ListPCI);
					
				}
		let topSlice2011PCI=x2011ListPCI.slice(0,10);
		let topSlice2014PCI=x2014ListPCI.slice(0,10);
		let topSlice2017PCI=x2017ListPCI.slice(0,10);
		
	

		let bottomSlice2011PCI=x2011ListPCI.slice(11,20);
		let bottomSlice2014PCI=x2014ListPCI.slice(11,20);
		let bottomSlice2017PCI=x2017ListPCI.slice(11,20);


        console.log(topSlice2011PCI.y);

        
//This is where I c/p in the mobile subscriptions logic.
        var listElementSUBS = {y:data[0].x2011_SUBS, label: data[0].country_name};
                    var x2011ListSUBS= [];
                    var x2014ListSUBS= [];
                    var x2017ListSUBS= [];
                var i;
                for (i = 0; i < data.length; i++) {
                    let countryName=data[i].country_name;
                    let x2011SUBS=data[i].x2011_SUBS;
                    let x2014SUBS=data[i].x2014_SUBS;
                    let x2017SUBS=data[i].x2017_SUBS;

                    let listElement2011SUBS = {y:parseInt(data[i].x2011_SUBS), label: data[i].country_name};
                    let listElement2014SUBS = {y:parseInt(data[i].x2014_SUBS), label: data[i].country_name};
                    let listElement2017SUBS = {y:parseInt(data[i].x2017_SUBS), label: data[i].country_name};

                    x2011ListSUBS.push(listElement2011SUBS);
                    x2014ListSUBS.push(listElement2014SUBS);
                    x2017ListSUBS.push(listElement2017SUBS);



                console.log(x2011ListSUBS);

        }
        let topSlice2011SUBS=x2011ListSUBS.slice(0,10);
        let topSlice2014SUBS=x2014ListSUBS.slice(0,10);
        let topSlice2017SUBS=x2017ListSUBS.slice(0,10);



        let bottomSlice2011SUBS=x2011ListSUBS.slice(11,20);
        let bottomSlice2014SUBS=x2014ListSUBS.slice(11,20);
        let bottomSlice2017SUBS=x2017ListSUBS.slice(11,20);


//This is where I c/p in the logic for account ownership
        var listElementAO = {y:data[0].x2011_AO, label: data[0].country_name};
                    var x2011ListAO= [];
                    var x2014ListAO= [];
                    var x2017ListAO= [];
                var i;
                for (i = 0; i < data.length; i++) {
                    let countryName=data[i].country_name;
                    let x2011AO=data[i].x2011_AO;
                    let x2014AO=data[i].x2014_AO;
                    let x2017AO=data[i].x2017_AO;

                    let listElement2011AO = {y:parseInt(data[i].x2011_AO), label: data[i].country_name};
                    let listElement2014AO = {y:parseInt(data[i].x2014_AO), label: data[i].country_name};
                    let listElement2017AO = {y:parseInt(data[i].x2017_AO), label: data[i].country_name};

                    x2011ListAO.push(listElement2011AO);
                    x2014ListAO.push(listElement2014AO);
                    x2017ListAO.push(listElement2017AO);



                console.log(x2011ListAO);

        }
        let topSlice2011AO=x2011ListAO.slice(0,10);
        let topSlice2014AO=x2014ListAO.slice(0,10);
        let topSlice2017AO=x2017ListAO.slice(0,10);



        let bottomSlice2011AO=x2011ListAO.slice(11,20);
        let bottomSlice2014AO=x2014ListAO.slice(11,20);
        let bottomSlice2017AO=x2017ListAO.slice(11,20);


    function buildChart(myDiv, topSlice2011PCI, topSlice2014PCI, topSlice2017PCI, title){
            
        console.log("myDiv", myDiv);

        CanvasJS.addColorSet("greenShades",
                [//colorSet Array

                // "#2F4F4F",
                "#008080",
                "#2E8B57",
                // "#3CB371",
                "#90EE90"                
                ]);
    
        var chart = new CanvasJS.Chart(myDiv, {
            animationEnabled: true,
            theme: "dark2",
            colorSet: "greenShades",
            title:{
                text: title
            },
            axisY: {
                title: "Years",
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
                // color: "#6D78AD",
                dataPoints: topSlice2011PCI
            
            },
            {
                type: "bar",
                showInLegend: true,
                name: "2014",
                // color: "silver",
                dataPoints: topSlice2014PCI
            },
            {
                type: "bar",
                showInLegend: true,
                name: "2017",
                // color: "#51CDA0",
                dataPoints: topSlice2017PCI
            }]
            
        })
         
        return chart;
    }
        chart1=buildChart("chartContainer", topSlice2011PCI, topSlice2014PCI, topSlice2017PCI, "PCI of Countries that are Top Ten by 2017 Mobile Subscription Penetration")
        chart1.render()
        chart2=buildChart("chartContainerB", bottomSlice2011PCI, bottomSlice2014PCI, bottomSlice2017PCI, "PCI of Countries that are Bottom Ten by 2017 Mobile Subscription Penetration")
        chart2.render()
        chart3=buildChart("chartContainerC", topSlice2011SUBS, topSlice2014SUBS, topSlice2017SUBS, "Number of Mobile Subscriptions in Countries that are Top Ten by 2017 Mobile Subscription Penetration")
        chart3.render()
        chart4=buildChart("chartContainerD", bottomSlice2011SUBS, bottomSlice2014SUBS, bottomSlice2017SUBS, "Number of Mobile Subscriptions in Countries that are Bottom Ten by 2017 Mobile Subscription Penetration")
        chart4.render()
        chart3=buildChart("chartContainerE", topSlice2011AO, topSlice2014AO, topSlice2017AO, "Number of Bank Accounts Ownership in Countries that are Top Ten by 2017 Mobile Subscription Penetration")
        chart3.render()
        chart4=buildChart("chartContainerF", bottomSlice2011AO, bottomSlice2014AO, bottomSlice2017AO, "Number of Bank Account ownership in Countries that are Bottom Ten by 2017 Mobile Subscription Penetration")
        chart4.render()
	});
	

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
	


	
	
		
	

