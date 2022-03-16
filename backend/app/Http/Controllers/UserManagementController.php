<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\CarService;
class UserManagementController extends Controller
{
    //
    public function __construct(User $user,CarService $service) {
        $this->user = $user;
        $this->service = $service; 
    }

    public function userslist() {
        $userAll = $this->user->where('userrole', 'user')->get();
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

    public function usermanagementstore(Request $req) {
        $userName = $req->input('name') ?? null;
        $password = $req->input('password') ?? null;
        $email = $req->input('email') ?? null;
        $gender = $req->input('gender') ?? null;
        $phone = $req->input('phone') ?? null;
        if($userName != null && $password != null && $email != null) {
            $dataRecord = [
                'gender' => $gender,
                'name' => $userName,
                'phone' => $phone,
                'email'  => $email,
                'password' => Hash::make($password),
                'userrole' => 'user'
            ];
            // finding exists user record in users db.
            $existsUser = $this->user->where('name', $userName);
            $existsEmail = $this->user->where('email', $email);
            if($existsUser->exists()) {
                return response()->json(['name' => 'Your current username is already taken in our records'], 200);
            }
            if($existsEmail->exists()) {
                return response()->json(['email' => 'Your current email is already taken in our records'], 200);
            }    
            $createNew = $this->user->create($dataRecord);       
            return response()->json(['status' => true, 'success' => 'Your account create successfully', 'data' => $createNew], 200); 
        } else {
            $phoneMessage = ($phone == null) ? 'Pease insert your  phone' : '';
            $genderMessage =($gender == null) ? 'Select gender' : '';
            $passwordMessage = ($password == null) ? 'Please insert password' : '';
            $nameMessage = ($userName == null) ? "Please insert Request name":'';
            $emailMessage = ($email== null) ? 'Please insert request email': '';

            return response()->json(['status'=> false, 'phone' => $phoneMessage, 'gender' => $genderMessage, 'password' => $passwordMessage, 'name' => $nameMessage, 'email' => $emailMessage], 200);
        }
    }
    public function usermanagementcurrent($id) {
        $findRecord = $this->user->find($id);
        if($findRecord) {
            return response()->json(['status' => true, 'data' => $findRecord],200);
        }
        return response()->json(['status' => false, 'message'  => 'Sorry, user doens\'t exists'], 200);
    }
    public function usermanagementupdate($id, Request $req) {
        $userName = $req->input('name') ?? null;
        $password = $req->input('password') ?? null;
        $email = $req->input('email') ?? null;
        $gender = $req->input('gender') ?? null;
        $phone = $req->input('phone') ?? null;   
        
        // finding exists user record in users db.
        $existsUser = $this->user->where('id', '!=', $id)->where('name', $userName);
        $existsEmail = $this->user->where('id', '!=', $id)->where('email', $email);
        if($existsUser->exists()) {
            return response()->json(['status' => false, 'name' => 'Your current username is already taken in our records'], 200);
        }
        if($existsEmail->exists()) {
            return response()->json(['status' => false, 'email' => 'Your current email is already taken in our records'], 200);
        }


        if($userName != null && $password != null && $email != null) {
            if($password == null) {
                $updateOne = [
                    'gender' => $gender,
                    'name' => $userName,
                    'phone' => $phone,
                    'email'  => $email,
                ];
            } else {
                $updateOne = [
                    'gender' => $gender,
                    'name' => $userName,
                    'phone' => $phone,
                    'email'  => $email,
                    'password' => Hash::make($password),
                ];
            }

 
            $updateRecord= $this->user->where('id', $id)->update($updateOne);       
            return response()->json(['status' => true, 'success' => 'Your account edit successfully', 'data' => $updateRecord], 200); 
        } else {
            $phoneMessage = ($phone == null) ? 'Pease insert your  phone' : '';
            $genderMessage =($gender == null) ? 'Select gender' : '';
            $passwordMessage = ($password == null) ? 'Please insert password' : '';
            $nameMessage = ($userName == null) ? "Please insert Request name":'';
            $emailMessage = ($email== null) ? 'Please insert request email': '';

            return response()->json(['status'=> false, 'phone' => $phoneMessage, 'gender' => $genderMessage, 'password' => $passwordMessage, 'name' => $nameMessage, 'email' => $emailMessage], 200);
        }

    }
    public function usermanagementdelete($id, Request $req) {
        $findRecord = $this->user->where('id', $id);
        if($findRecord->exists()) {
            $deleteNow = $findRecord->delete();
            if($deleteNow) {
                return response()->json(['status' => true, 'success' => 'Your account delete successfully'], 200); 
            }
        } else {
            return response()->json(['status' => false, 'failed' => 'Sorry, We can\'t find current record.'], 200);
        }
    }

    /* Car Services */
    public function serviceslists() {
        $findAll = $this->service->where('customer_name', '!=', '')->get();
        if($findAll) {
            return response()->json(['status' => true, 'data' => $findAll],200);
        } else {
            return response()->json(['status' => false, 'message' => 'data'], 200);
        }
        
    }

    public function servicecreate(Request $req) {
        $customer_name =  $req->input('customer_name') ?? "";
        $customer_email = $req->input('customer_email') ?? "";
        $car_number = $req->input('car_number') ?? "";
        $additional_service = $req->input('additional_service') ?? '';
        $duration = $req->input('duration') ?? "";
        $description = $req->input('description') ?? "";
        $insertOne = [
            'customer_name' => $customer_name,
            'customer_email' => $customer_email,
            'car_number' => $car_number,
            'additional_service' => $additional_service,
            'duration' => $duration,
            'description' => $description
        ];
        $createOne = $this->service->create($insertOne);

        //return response()->json(['data' => 'Working'], 200);
        if($createOne) {
            return response()->json(['status' => true, 'success' => 'Services create successfully', 'data' => $createOne], 200);
        } else {
            return response()->json(['status' => false, 'failed' => 'Failed. Something went wrong'], 200);
        }
        
    }
    public function serviceeditcurrent($id) {
        $findRecord = $this->service->find($id);
        if($findRecord) {
            return response()->json(['status' => true, 'data' => $findRecord],200);
        }
        return response()->json(['status' => false, 'message'  => 'Sorry, user doens\'t exists'], 200);
    }
    public function serviceedit($id, Request $req) {
        $customer_name =  $req->input('customer_name') ?? "";
        $customer_email = $req->input('customer_email') ?? "";
        $car_number = $req->input('car_number') ?? "";
        $additional_service = $req->input('additional_service') ?? '';
        $duration = $req->input('duration') ?? "";
        $description = $req->input('description') ?? "";
        $insertOne = [
            'customer_name' => $customer_name,
            'customer_email' => $customer_email,
            'car_number' => $car_number,
            'additional_service' => $additional_service,
            'duration' => $duration,
            'description' => $description
        ];
        $createOne = $this->service->where('id', $id)->update($insertOne);

        //return response()->json(['data' => 'Working'], 200);
        if($createOne) {
            return response()->json(['status' => true, 'success' => 'Services update successfully', 'data' => $createOne], 200);
        } else {
            return response()->json(['status' => false, 'failed' => 'Failed. Something went wrong'], 200);
        }        
    }
    public function servicedelete($id) {
        $findRecord = $this->service->where('id', $id);
        if($findRecord->exists()) {
            $deleteNow = $findRecord->delete();
            if($deleteNow) {
                return response()->json(['status' => true, 'success' => 'Your service delete successfully'], 200); 
            }
        } else {
            return response()->json(['status' => false, 'failed' => 'Sorry, We can\'t find current record.'], 200);
        }        
    }
}
