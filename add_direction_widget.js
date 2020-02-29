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
                    routeTaskUrl: "https://utility.arcgis.com/usrsvcs/appservices/srsKxBIxJZB0pTZ0/rest/services/World/Route/NAServer/Route_World",
                    stops: 
                    [
                        [[174.816448,-36,902955],[174.85,-36.88]]
                    ]
                }
            ); 
            view.ui.add(directions, ui_position);
        }
    }
    support_functions.PutLocationWidget("top-right");   
}