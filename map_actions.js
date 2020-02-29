function TestEverything()
{
    console.log(window.map_view);
    console.log(window.ArcGis); 
}

function PutAnotherPoint()
{
    var variation = Math.random()*Math.random()*Math.random(); 
    var location = 
    {
        longitude: 174.7635+variation, 
        latitude: -36.8487 + variation
    }

    window.GetDataAroundLocation(location, window.map_view, window.ArcGis); 
}