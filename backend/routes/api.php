<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmailBookingNotificationController;
use App\Http\Controllers\BookingCompleteNotificationController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/userlists', 'UserManagementController@userslist');
Route::post('/userlists/create', 'UserManagementController@usermanagementstore');
Route::get('/userlists/edit/current/{id}', 'UserManagementController@usermanagementcurrent');
Route::post('/userlists/edit/{id}', 'UserManagementController@usermanagementupdate');
Route::post('/userlists/delete/{id}', 'UserManagementController@usermanagementdelete');


Route::get('/services/lists', 'UserManagementController@serviceslists');
Route::post('/services/create', 'UserManagementController@servicecreate');
Route::get('/services/edit/current/{id}', 'UserManagementController@serviceeditcurrent');
Route::post('/services/edit/{id}', 'UserManagementController@serviceedit');
Route::post('/services/delete/{id}', 'UserManagementController@servicedelete');

Route::get('/services-lists/lists','UserManagementController@servicelistsall');
Route::post('/services-lists/create', 'UserManagementController@servicelistcreate');
Route::get('/services-lists/edit/current/{id}','UserManagementController@servicelisteditcurrent');
Route::post('/services-lists/edit/{id}','UserManagementController@servicelistedit');
Route::post('/services-lists/delete/{id}', 'UserManagementController@servicelistdelete');

Route::get('/login', 'UserManagementController@userlogin');
Route::post('/register', 'UserManagementController@userregister');

// EMAIL NOTIFICATION
Route::post('/emailbooking', [EmailBookingNotificationController::class, 'subscribe']);
Route::post('/completebooking', [BookingCompleteNotificationController::class, 'subscribe']);