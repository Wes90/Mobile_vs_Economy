 // Referencing geojson file.
    
  
    
 // Function that will determine the color based on the depth of the earthquake
 function chooseColor(ao) {
   if (ao > 90)
   return "red";
   else if (depth > 70)
   return "pink";
   else if (depth > 50)
   return "orange";
   else if (depth > 30)
   return "yellow";
   else if (depth >10)
   return "lime";
   else
   return "green";
 }
 
 // Function that will determine the size of marker based on the magnitute of the earthquake
   function chooseSize(pci) {
       return (pci*300)

   }

   //Perform get request for the query
   d3.json(mygeojson, function(data) 
 {
   createFeatures(data.features)});


   //Define function
   function createFeatures(data){
       var demoinfo =  L.geoJson(data, {
        

           // Called on each feature
           onEachFeature: function(feature, layer) {
               layer.bindPopup("<h1> Account Ownership" + feature.properties.ao+ "</h2> <hr> Income Per Capita <h2>" + feature.properties.pci + "</h1> <hr> Number of Subscriptions <h2>" + feature.geometry.subs)
           },
           pointToLayer: function (feature, latlong){
               return new L.circle(latlong, {
                   color: "white",
                 // Call the chooseColor function to decide which color to color our country (color based on account ownership)
                 fillColor: chooseColor(feature.properties.ao),
                 fillOpacity: 0.5,
                 weight: 1.5,
                 radius: chooseSize(feature.properties.pci)
               })

               }
       })
       //calling createMap function
       createMap(demoinfo)
   }
   //create the createMap function
   function createMap(demoinfo){
       // Creating map object
   var myMap = L.map("mapid", {
   center: [40.7128, -94.0059],
   zoom: 5
   });
 
 // Adding tile layer
   var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
   tileSize: 512,
   maxZoom: 18,
   zoomOffset: -1,
   id: "mapbox/streets-v11",
   accessToken: API_KEY
   }).addTo(myMap);

   var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
       attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
       maxZoom: 18,
       id: "dark-v10",
       accessToken: API_KEY
     });
     
     //Legend
     var legend = L.control({position: 'bottomright'});

     legend.onAdd = function (map) {
     
         var infodiv = L.DomUtil.create('div', 'info legend'),
             ao = ["-10-10", "10-30", "30-50", "50-70", "70-90", "90+"],
             colors = ["green","lime","yellow","orange","pink","red"];
     
         // loop through our density intervals and generate a label with a colored square for each interval
         for (var i = 0; i < ao.length; i++) {
             infodiv.innerHTML +=
                 '<i style="background:' + (colors[i]) + '"></i> ' +
                 ao[i] + "<br>" + "<br>" ; 
         }
     
         return infodiv;
     };
     
     
     // Define a baseMaps object to hold our base layers
     var baseMaps = {
       "Street Map": streetmap,
       "Dark Map": darkmap
     };
   
     // Create overlay object to hold our overlay layer
     var overlayMaps = {
       DemographicINFO: demoinfo
     };
     // Create a layer control
   // Pass in our baseMaps and overlayMaps
   // Add the layer control to the map
   L.control.layers(baseMaps, overlayMaps, {
       collapsed: false
   }).addTo(myMap);
   legend.addTo(myMap);

   var geojsonLayer = L.geoJSON(mygeojson);
   geojsonLayer.addTo(myMap);
   
   }