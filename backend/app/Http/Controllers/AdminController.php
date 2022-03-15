<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    //
    public function admindashboard() {
        $data = [];
        $data['page_title'] = "Dashboard";
        $data['current_page'] = 'admindashboard';
        return view('admin.dashboard.index', $data);
    }
}
