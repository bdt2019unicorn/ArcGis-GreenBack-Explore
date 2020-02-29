export function AddDirectionsWidget(Directions, view)
{
    var support_functions = 
    {
        PutLocationWidget(ui_position)
        {
            var directions = new Directions 
            (
                {
                    view: view
                }
            ); 
            view.ui.add(directions, ui_position);
        }
    }
    support_functions.PutLocationWidget("top-left");   
}