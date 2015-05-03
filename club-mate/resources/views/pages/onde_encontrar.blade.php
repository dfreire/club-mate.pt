@extends('layout')

@section('scriptsEndHead')
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=API_KEY"></script>
<!-- <script src="//maps.googleapis.com/maps/api/js?v=3.19&amp;signed_in=true"></script> -->
<script type="text/javascript">
function initialize() {
    var mapOptions = {
        center: { lat: -34.397, lng: 150.644},
        zoom: 8
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
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
    <div class="col-lg-12">
        <div id="map-canvas"></div>
    </div>
</div>
@stop
