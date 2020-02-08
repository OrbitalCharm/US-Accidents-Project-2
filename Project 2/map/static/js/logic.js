
// var state = "state.json"

// // var data=d3.json(document.getElementById('data'))

// var data=d3.json("final.json")
// var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
//         attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
//         maxZoom: 18,
//         id: "mapbox.light",
//         accessToken: API
//     })
//  var satellitemap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
//         attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
//         maxZoom: 18,
//         id: "mapbox.satellite",
//         accessToken: API
//     })

//     var outdoormap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
//         attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
//         maxZoom: 18,
//         id: "mapbox.outdoors",
//         accessToken: API
//     })
// var myMap = L.map("map", {
//     center: [37.0902, -95.7129],
//     zoom: 4,
//     layers:[lightmap]
// })

// function circleSize(mag) {
//     return mag * 5
// }

// function circleColor(mag) {
//     return mag > 5 ? "#F06B6B" :
//         mag > 4 ? "#F0A76B" :
//             mag > 3 ? "#F3BA4D" :
//                 mag > 2 ? "#F3DB4D" :
//                     mag > 1 ? "#E1F34D" :
//                         "#B7F34D";
// }
// data.then(function (data) {
//     d3.json(state).then(function (state) {
//         createFeatures(data.features, state.features)
//     })
// })
// function createFeatures(data, stateboundry) {
//     function onEachFeature(feature, layer) {
//         layer.bindPopup(`<h1>${feature.State}</h1>  <hr> Accident Number: ${feature.Accident}`)

//     }
//     function geojsonMarkerOptions(feature) {
//         return {
//             radius: circleSize(feature.Severity),
//             color: "#000",
//             weight: 0.1,
//             fillColor: circleColor(feature.Severity),
//             fillOpacity: 1
//         }
//     }
   
//     var accidents = L.geoJSON(data, {
//         pointToLayer: function (feature, latlng) {
//             return L.circleMarker(latlng, geojsonMarkerOptions(feature.Accident))
//         },
//         onEachFeature: onEachFeature
//     })
//     var severities=L.geoJSON(data,{
//         pointToLayer: function (feature,latlng){
//             return L.circleMarker(latlng,geojsonMarkerOptions(feature.Severity))
//         }
//     })

//     var states = L.geoJSON(stateboundry, {
//         style: {
//             color: "#FDA400",
//             weight: 2,
//             fillOpacity: 0.1
//         },
//         onEachFeature: function(feature,layer){
//             layer.on({
//                 mouseover:function(event){
//                     layer=event.target
//                     layer.setStyle({
//                         fillOpacity:0.5
//                     })
//                 },
//                 mouseout: function(event){
//                     layer=event.target
//                     layer.setStyle({
//                         fillOpacity:0.1
//                     })
//                 },
//                 click:function(event){
//                     myMap.fitBounds(event.target.getBounds())
//                 }
//             })
            
//             layer.bindPopup(`<h1>${feature.State}</h1> <hr> <h3> Severity Number: ${feature.Severity} <hr> Accident Number: ${feature.Accident}`)
//         }

//     }).addTo(myMap)
//     createMap(accidents,severities, states)
// }

// function createMap(accidents,severities ,states) {
   

//     var baseMaps = {
//         "Light": lightmap,
//         "Satellite": satellitemap,
//         "Outdoor": outdoormap
//     }



//     var overlayMaps = {
//         "Accidents Number": accidents,
//         "State Boundary": states,
//         "Severity Number":severities
//     }

    
    
//     L.control
//         .layers(baseMaps, overlayMaps, {
//             collapsed: true
//         }).addTo(myMap);

//     var legend = L.control({ position: 'bottomright' })
//     legend.onAdd = function () {
//         var div = L.DomUtil.create('div', 'info legend'),
//             grades = [0, 1, 2, 3, 4, 5],
//             labels = []
//         for (var i = 0; i < grades.length; i++) {
//             div.innerHTML +=
//                 '<i style="background:' + circleColor(grades[i] + 1) + '"></i> ' +
//                 grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');

//         }
//         return div;
//     };


//     legend.addTo(myMap)
// }




// var data=d3.json(document.getElementById('data'))

var data=d3.json("finalstate.json")
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.light",
        accessToken: API
    })
 var satellitemap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.satellite",
        accessToken: API
    })

    var outdoormap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.outdoors",
        accessToken: API
    })
var myMap = L.map("map", {
    center: [37.0902, -95.7129],
    zoom: 4,
    layers:[lightmap]
})



function SetColor(mag) {
    return mag > 200000 ? "#F06B6B" :
        mag > 50000 ? "#F0A76B" :
            mag > 10000 ? "#F3BA4D" :
                mag > 1000 ? "#F3DB4D" :
                    mag > 100 ? "#E1F34D" :
                        "#B7F34D";
}
data.then(function (data) {
    
        createFeatures(data.features)
   
})
function createFeatures(data) {
    
    
    var states = L.geoJSON(data, {
        style: function(feature){
            return{
            color: SetColor(feature.properties.Accident),
            weight: 2,
            fillOpacity: 0.5
        }},
        onEachFeature: function(feature,layer){
            layer.on({
                mouseover:function(event){
                    layer=event.target
                    layer.setStyle({
                        fillOpacity:1
                    })
                },
                mouseout: function(event){
                    layer=event.target
                    layer.setStyle({
                        fillOpacity:0.5
                    })
                },
                click:function(event){
                    myMap.fitBounds(event.target.getBounds())
                }
            })
            
            layer.bindPopup(`<h1>${feature.properties.NAME}</h1>  <hr> Accident Number: ${feature.properties.Accident}`)
        }

    }).addTo(myMap)
    createMap( states)
}

function createMap(states) {
   

    var baseMaps = {
        "Light": lightmap,
        "Satellite": satellitemap,
        "Outdoor": outdoormap
    }



    var overlayMaps = {
        
        "State": states,
        
    }

    
    
    L.control
        .layers(baseMaps, overlayMaps, {
            collapsed: true
        }).addTo(myMap);

    var legend = L.control({ position: 'bottomright' })
    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 100, 1000, 10000, 50000 , 200000],
            labels = []
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + SetColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');

        }
        return div;
    };


    legend.addTo(myMap)
}


