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

function GetDirectionPointsAndWork()
{
    var points = 
    [
        new window.ArcGis.Point(174.816448, -36.902955),
        new window.ArcGis.Point(174.7633, -36.8485)
    ]; 
    var graphics = []; 
    points.forEach(element => {
        var graphic = new window.ArcGis.Graphic 
        (
            {
                geometry: element, 
                symbol: 
                {
                    type: "simple-marker",
                    color: "blue",  
                    size: "8px"
                }
            }
        ); 
        graphics.push(graphic); 
    });
    GetDirection(graphics, window.map_view); 
}


function GetDirection(points, view)
{
    console.log("get here to the get direction"); 
    var routeTask = new window.ArcGis.RouteTask
    (
        {
            // url: "https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World"
            // url: "https://utility.arcgis.com/usrsvcs/appservices/blastor555/rest/services/World/Route/NAServer/Route_World/solve"
            url: "https://utility.arcgis.com/usrsvcs/appservices/AVA7HfDc1IGamElH/rest/services/World/Route/NAServer/Route_World/solve"
        }
    );

    var routeParams = new window.ArcGis.RouteParameters
    (
        {
            stops: new window.ArcGis.FeatureSet
            (
                {
                    features: points
                }
            ),
            returnDirections: true
        }
    );

    routeTask.solve(routeParams)
    .then
    (
        function(data)
        {
            data.routeResults.forEach
            (
                function(direction)
                {
                    direction.route.symbol = 
                    {
                        type: "simple-line",
                        color: "blue",
                        width: 3
                    }
                    view.graphics.add(direction.route); 
                }
            ); 
        }
    ); 
}