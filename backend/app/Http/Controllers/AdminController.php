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
}
