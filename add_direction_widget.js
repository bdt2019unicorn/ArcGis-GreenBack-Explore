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
                    routeTaskUrl: "https://utility.arcgis.com/usrsvcs/appservices/AVA7HfDc1IGamElH/rest/services/World/Route/NAServer/Route_World/solve?stops=-117.1957,34.0564; -117.184,34.0546"
                }
            ); 
            view.ui.add(directions, ui_position);
        }
    }
    support_functions.PutLocationWidget("top-right");   
}