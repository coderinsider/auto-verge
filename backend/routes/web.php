<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/admin/dashboard', 'AdminController@admindashboard')->middleware('auth');
Route::get('/admin/users-list', 'AdminController@usermanagement')->middleware('auth');
Route::get('/admin/users-list/create', 'AdminController@usermanagementcreate')->middleware('auth');
Route::get('/admin/user-list/edit/{id}', 'AdminController@usermanagementedit')->middleware('auth');

Route::get('/admin/our-services', 'AdminController@ourservicelist')->middleware('auth');
Route::get('/admin/our-services/create', 'AdminController@ourservicecreate')->middleware('auth');
Route::get('/admin/our-services/edit/{id}', 'AdminController@ourserviceedit')->middleware('auth');
Route::get('/admin/services', 'AdminController@carservices')->middleware('auth');
Route::get('/admin/services/create', 'AdminController@carservicecreate')->middleware('auth');
Route::get('/admin/services/edit/{id}', 'AdminController@carserviceedit')->middleware('auth');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';
