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

    public function usermanagement() {
        $data = [];
        $data['page_title'] = "User Manage";
        $data['current_page'] = 'usermanage';
        return view('admin.users.index', $data);
    }
    public function usermanagementcreate() {
        $data = [];
        $data['page_title'] = " | User Create";
        $data['current_page'] = 'usercreate';
        return view('admin.users.create', $data);   
    }

    public function usermanagementstore(Request $req) {
        $userName = $req->input('name') ?? null;
        $password = $req->input('password') ?? null;
        $email = $req->input('email') ?? null;
        if($userName != null && $password != null && $email != null) {
            $dataRecord = [
                'name' => $userName,
                'email'  => $email,
                'password' => Hash::make($password)
            ];
            // finding exists user record in users db.
            $existsUser = $this->user->where('name', $userName);
            $existsEmail = $this->user->where('email', $email);
            if($existsUser->exists()) {
                return response()->json(['message' => 'Your current username is already taken in our records'], 200);
            }
            if($existsEmail->exists()) {
                return response()->json(['message' => 'Your current email is already taken in our records'], 200);
            }    
            $createNew = $this->user->create($dataRecord);       
            return response()->json(['status' => true, 'data' => $createNew], 200); 
        } else {
            return response()->json(['message' => "Please insert Request data"], 200);
        }

        // if Username and password are authenticate
        
    }

    public function usermanagementedit($id) {
        $data = [];
        $data['id'] = $id;
        $data['page_title'] = " | User Create";
        $data['current_page'] = 'usercreate';
        return view('admin.users.edit', $data);   
    }

    /* Car Services */
    public function carservices() {
        $data = [];
        $data['page_title'] = " | Booking";
        $data['current_page'] = 'booking';
        return view('admin.service.index', $data);          
    }
    public function carservicecreate() {
        $data = [];
        $data['page_title'] = " | Create Booking";
        $data['current_page'] = 'create-booking';
        return view('admin.service.create', $data);  
    }

    public function carserviceedit($id) {
        $data = [];
        $data['id'] = $id;
        $data['page_title'] = " | Edit Booking";
        $data['current_page'] = 'edit-booking';
        return view('admin.service.edit', $data);
    }

    // OuR Services
    public function ourservicelist() {
        $data = [];
        $data['page_title'] = " | Services";
        $data['current_page'] = 'servicesx';
        return view('admin.ourservice.index', $data);         
    }

    public function ourservicecreate() {
        $data = [];
        $data['page_title'] = " | Services Create";
        $data['current_page'] = 'servicesx';
        return view('admin.ourservice.create', $data);          
    }
    public function ourserviceedit($id) {
        $data = [];
        $data['id'] = $id;
        $data['page_title'] = " | Services Edit";
        $data['current_page'] = 'servicesx';
        return view('admin.ourservice.edit', $data);            
    }
}
