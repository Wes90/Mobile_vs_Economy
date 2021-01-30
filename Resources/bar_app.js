
	d3.csv("data-per_capita_income.csv").then(function(data){ 

       
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
        
                    let listElement2011 = {y:parseInt(data[i].x2011_pci), label: data[i].country_name};
                    let listElement2014 = {y:parseInt(data[i].x2014_pci), label: data[i].country_name};
                    let listElement2017 = {y:parseInt(data[i].x2017_pci), label: data[i].country_name};
        
                    x2011List.push(listElement2011);
                    x2014List.push(listElement2014);
					x2017List.push(listElement2017);
					
					

					console.log(x2011List);
					
				}
		let topSlice2011=x2011List.slice(0,10);
		let topSlice2014=x2014List.slice(0,10);
		let topSlice2017=x2017List.slice(0,10);
		
	

		let bottomSlice2011=x2011List.slice(174,184);
		let bottomSlice2014=x2014List.slice(174,184);
		let bottomSlice2017=x2017List.slice(174,184);


        console.log(topSlice2011.y);
        

    function buildChart(myDiv, topSlice2011, topSlice2014, topSlice2017, title){
            
        console.log("myDiv", myDiv);
    
        var chart = new CanvasJS.Chart(myDiv, {
            animationEnabled: true,
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
                color: "gold",
                dataPoints: topSlice2011
            
            },
            {
                type: "bar",
                showInLegend: true,
                name: "2014",
                color: "silver",
                dataPoints: topSlice2014
            },
            {
                type: "bar",
                showInLegend: true,
                name: "2017",
                color: "#A57164",
                dataPoints: topSlice2017
            }]
            
        })
         
        return chart;
    }
        chart1=buildChart("chartContainer", topSlice2011, topSlice2014, topSlice2017, "Years top10")
        chart1.render()
        
        chart2=buildChart("chartContainerB", bottomSlice2011, bottomSlice2014, bottomSlice2017, "Years Bottom10")
        chart2.render()
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
	


	
	
		
	

