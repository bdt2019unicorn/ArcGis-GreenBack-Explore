function ArcGis()
{
    return new Promise
    (
        (resolve, reject)=>
        {
            require
            (
                ["esri/Map","esri/views/MapView","esri/Graphic", "esri/tasks/RouteTask","esri/tasks/support/RouteParameters","esri/tasks/support/FeatureSet","esri/geometry/Point", "esri/widgets/Locate"], 
                function(Map, MapView, Graphic, RouteTask,RouteParameters,FeatureSet, Point, Locate) 
                {
                    resolve
                    (
                        {
                            Map: Map, 
                            MapView: MapView,
                            Graphic: Graphic, 
                            RouteTask: RouteTask,
                            RouteParameters: RouteParameters,
                            FeatureSet: FeatureSet, 
                            Point: Point,
                            Locate: Locate
                        }
                    );
                }
            );
        }
    ); 
}

export var ArcGisClass = ArcGis(); 

