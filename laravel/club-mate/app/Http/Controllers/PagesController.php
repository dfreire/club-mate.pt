<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class PagesController extends Controller {

	public function index()
	{
		return view('pages/index');
	}

	public function sobre_o_club_mate()
	{
		return view('pages/sobre_o_club_mate');
	}

	public function yerba_mate()
	{
		return view('pages/yerba_mate');
	}

	public function cocktails()
	{
		return view('pages/cocktails');
	}

	public function onde_encontrar()
	{
		return view('pages/onde_encontrar');
	}

	public function contactos()
	{
		return view('pages/contactos');
	}
}
