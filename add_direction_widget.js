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
                    routeServiceUrl: "https://utility.arcgis.com/usrsvcs/appservices/AVA7HfDc1IGamElH/rest/services/World/Route/NAServer/Route_World"
                }
            ); 
            view.ui.add(directions, ui_position);
            console.log(directions); 
        }
    }
    support_functions.PutLocationWidget("top-right");   
}