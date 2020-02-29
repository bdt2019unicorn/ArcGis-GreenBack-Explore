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
                    routeTaskUrl: "https://utility.arcgis.com/usrsvcs/appservices/AVA7HfDc1IGamElH/rest/services/World/Route/NAServer/Route_World/solve"
                }
            ); 
            view.ui.add(directions, ui_position);
        }
    }
    support_functions.PutLocationWidget("top-right");   
}