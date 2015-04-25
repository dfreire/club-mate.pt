<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/*
Route::get('/', 'WelcomeController@index');

Route::get('home', 'HomeController@index');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
*/

Route::get('/', 'PagesController@index');
Route::get('sobre-o-club-mate', 'PagesController@sobre_o_club_mate');
//Route::get('yerba-mate', 'PagesController@yerba_mate');
//Route::get('cocktails, 'PagesController@cocktails');
//Route::get('onde-encontrar, 'PagesController@onde_encontrar');
//Route::get('contactos, 'PagesController@contactos');
