// Mobile Penetration vs banking services
// Ratio bar chart

// Create a function to pull in the json data
// Using 'd3.json' gather the metadata for each sample
d3.json('mobile_subscriptions_clean.json').then((samples)=>{
    var id=mobile_subscriptions_clean.Country%20name;
    console.log(mobile_subscriptions_clean.metadata);
