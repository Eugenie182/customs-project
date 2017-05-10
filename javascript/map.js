googleMap = null;
markers = [];
markersEnabled = true;

goodsMode = true;

documentsPane = $('#documentsPane');
borderPane = $('#borderPane');

documentsPane.hide()
borderPane.hide();

coordinates = [
    {lat: 53.76170183, lng: 28.28979492},
    {lat: 53.76170183, lng: 28.38979492},
    {lat: 53.76170183, lng: 28.48979492}
]

MDPCoordinates = [
    {lat: 62.1782139, lng: 30.6934647},
    {lat: 65.798333, lng: 30.1075}
]

TDCoordinates = [
    {lat: 62.1782139, lng: 30.6934647},
    {lat: 65.798333, lng: 30.1075},
    {lat: 68.6693586, lng: 30.0998134},
    {lat: 66.8326525, lng: 28.6701181},
    {lat: 64.5452494, lng: 29.9937487}
]

// 4. Âÿðòñèëÿ 62.1782139 30.6934647
// 5. Ñóîïåðÿ 65.798333 30.1075
// 6. Ëîòòà 68.6693586 30.0998134
// 7. Ñàëëà 66.8326525 28.6701181
// 8. Ëþòòÿ 64.5452494 29.9937487


function initMap(){
    console.log("Initialising map");

    var BelarusCenter = {lat: 53.76170183, lng: 28.28979492};

    googleMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: BelarusCenter
    });
    
    showMarkers(coordinates);
}

function showMarkers(coordinates){
    coordinates.forEach(function(el){
        console.log(el.lat);
        console.log(el.lng);

        var marker = new google.maps.Marker({
          position: el,
          map: googleMap
        });

        markers.push(marker);
    });
    markersEnabled = true;
}

function clearMarkers(){
    markers.forEach(function(elem){
        elem.setMap(null);
    });
    markers = [];
    markersEnabled = false;
}


// $('#markers-switch').on('click', function(e){
//     console.log('CLICK');
//     if (markersEnabled){
//         console.log("Clearing!");
//         clearMarkers();
//     } else {
//         showMarkers(coordinates);
//     }
// })

$('#goodsSelector').on('click', function(){
    goodsMode = true;
    documentsPane.hide()
    borderPane.show();
});


$('#documentsSelector').on('click', function(){
    goodsMode = false;
    documentsPane.show()
    borderPane.hide();
});


$('#documentTransitSelection input').on('change', function() {
    var selectedDocument = $('#documentTransitSelection input[type="radio"]:checked').attr('postName');

    if (selectedDocument === 'MDP'){
        clearMarkers();
        showMarkers(MDPCoordinates);
    } else if (selectedDocument === 'TD') {
        clearMarkers();
        showMarkers(TDCoordinates)
    } else {
        console.error("Unknown document: " + selectedDocument);
    }
});


$('#selectCountryFrom').selectpicker({
  style: 'btn-info',
  size: 4
});

$('#selectCountryTo').selectpicker({
  style: 'btn-info',
  size: 4
});