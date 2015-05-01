<!DOCTYPE html>
<html lang="pt">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Club Mate</title>

	<link href="{{ asset('/css/app.css') }}" rel="stylesheet">

	<!-- Fonts -->
	<link href='//fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>
<body>

	<div id="wrapper">

        <div id="sidebar-wrapper">
			<div>
	            <ul class="sidebar-nav">
	                <li class="sidebar-brand">
						<a href="/">Club Mate</a>
	                </li>
	                <li><a href="/sobre-o-club-mate">Sobre o Club Mate</a></li>
	                <li><a href="/yerba-mate">Yerba Mate</a></li>
	                <li><a href="/cocktails">Cocktails</a></li>
	                <li><a href="/onde-encontrar">Onde Encontrar</a></li>
	                <li><a href="/contactos">Contactos</a></li>
	            </ul>
				<!--
					<a href="mailto:info@club-mate.pt">info@club-mate.pt</a>
				-->
			</div>
        </div><!-- /#sidebar-wrapper -->

        <div id="page-content-wrapper">
            <div class="container-fluid">
				<div class="row">
					<div class="col-lg-12">
						<a id="menu-toggle" class="glyphicon" href="#"></a>
					</div>
				</div>
                <div class="row">
                    <div class="col-lg-12">
						@yield('content')
                    </div>
                </div>
            </div>
        </div><!-- /#page-content-wrapper -->

    </div><!-- /#wrapper -->



	<!-- Scripts -->
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.1/js/bootstrap.min.js"></script>

	<!-- Menu Toggle Script -->
	<script>
	function toggle() {
		var isToggled = $("#wrapper").hasClass("toggled");
		console.warn("isToggled: " + isToggled);
		$("#menu-toggle").toggleClass("glyphicon-remove", !isToggled);
		console.warn("glyphicon-remove: " + $("#menu-toggle").hasClass("glyphicon-remove"));
		$("#menu-toggle").toggleClass("glyphicon-menu-hamburger", isToggled);
		console.warn("glyphicon-ok: " + $("#menu-toggle").hasClass("glyphicon-menu-hamburger"));
	}
	$("#menu-toggle").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		toggle();
	});
	$( toggle );
	</script>

</body>
</html>
