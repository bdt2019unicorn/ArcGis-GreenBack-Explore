export function AddDirectionsWidget(Directions, view)
{
    var support_functions = 
    {
        PutLocationWidget(ui_position)
        {
            var directions = new Directions 
            (
                {
                    view: view,
                    routeServiceUrl: "https://utility.arcgis.com/usrsvcs/appservices/AVA7HfDc1IGamElH/rest/services/World/Route/NAServer/Route_World", 
                    _stops: [ new window.ArcGis.Point(174.816448, -36.902955), new window.ArcGis.Point(174.816448, -36.902952)]
                }
            ); 
            view.ui.add(directions, ui_position);
            console.log(directions); 
            console.log("stops"); 
            console.log(directions.stops); 
            console.log("_stops"); 
            console.log(directions._stops); 

        }
    }
    support_functions.PutLocationWidget("top-right");   
}