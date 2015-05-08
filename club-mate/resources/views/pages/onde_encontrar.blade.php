@extends('layout')

@section('scriptsEndHead')
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCml3WiJ1_Idu3CXluCDbXHFh366CaJVlQ"></script>
<script type="text/javascript">
function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(39.6833333,-8.1166667),
        zoom: 6
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var icon = "/club-mate-marker.png";

    function createMarker(position, title) {
        var marker = new google.maps.Marker({
            map: map,
            icon: icon,
            position: position,
            title: title
        });

        google.maps.event.addListener(marker, 'click', function() {
            new google.maps.InfoWindow({
                content: title
            }).open(map, marker);
        });
    }

    createMarker(new google.maps.LatLng(41.148056, -8.642722), "Restaurante Casa D'Oro");
    createMarker(new google.maps.LatLng(38.7159764,-9.1467839), "Restaurante Pizza à Pezzi");
}

google.maps.event.addDomListener(window, 'load', initialize);
</script>
@stop

@section('content')
<div class="row">
    <div class="col-lg-12">
        <h1>Onde Encontrar</h1>
    </div>
</div>
<div class="row">
    <div class="col-lg-8">
        <div id="map-canvas"></div>
    </div>
    <div class="col-lg-4">
        <div id="casa-d-oro">
            <address>
                <strong>Restaurante Casa D'Oro</strong><br/>
                Rua do Ouro, Nº797<br/>
                4150 Porto<br/>
                <a href="https://www.google.pt/maps/@41.148056,-8.642722,20z">41.148056, -8.642722</a><br/>
            </address>
        </div>
        <div id="pizza-a-pezzi">
            <address>
                <strong>Restaurante Pizza à Pezzi</strong><br/>
                Rua Dom Pedro V, Nº84 (Príncipe Real)<br/>
                1250-001 Lisboa<br/>
                <a href="https://www.google.pt/maps/@38.7159764,-9.1467839,20z">38.7159764, -9.1467839</a><br/>
            </address>
        </div>
    </div>
</div>
@stop

@section('scriptsEndBody')
<script type="text/javascript">
$(window).resize(function () {
    var h = $(window).height(),
        offsetTop = 150; // Calculate the top offset
        marginBotton = 30;

    $('#map-canvas').css('height', (h - offsetTop - marginBotton)).css('margin-bottom', marginBotton);
}).resize();
</script>
@stop
