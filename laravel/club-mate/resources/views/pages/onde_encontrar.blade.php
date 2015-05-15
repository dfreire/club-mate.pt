@extends('layout')

@section('scriptsEndHead')
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCml3WiJ1_Idu3CXluCDbXHFh366CaJVlQ"></script>
<script type="text/javascript">
function initialize() {
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: new google.maps.LatLng(39.6833333,-8.1166667),
        zoom: 6
    });

    function createMarker(lat, lon, id) {
        var marker = new google.maps.Marker({
            map: map,
            icon: "/club-mate-marker.png",
            position: new google.maps.LatLng(lat, lon)
        });

        google.maps.event.addListener(marker, 'click', function() {
            new google.maps.InfoWindow({
                content: $(id).html()
            }).open(map, marker);
        });
    }

    createMarker(41.148056, -8.642722, "#casa-d-oro");
    createMarker(38.7159764, -9.1467839, "#pizza-a-pezzi");
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
