<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
class UserManagementController extends Controller
{
    //
    public function __construct(User $user) {
        $this->user = $user;
    }

    public function userslist() {
        $userAll = $this->user->get();
        return response()->json(['data' => $userAll],200);
    }
    public function userregister(Request $req) {
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
