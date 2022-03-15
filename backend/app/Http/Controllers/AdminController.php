<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    //
    public function admindashboard() {
        $data = [];
        $data['current_page'] = 'admindashboard';
        return view('admin.dashboard.index', $data);
    }
}
