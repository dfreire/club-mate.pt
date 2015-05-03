@extends('layout')

@section('content')
<div class="row">
    <div class="col-lg-12">
        <h1>Onde Encontrar</h1>
    </div>
</div>
@stop

@section('scripts')
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
