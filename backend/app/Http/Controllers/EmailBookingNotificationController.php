<?php

namespace App\Http\Controllers;

use App\Mail\EmailBooking;
use App\Models\EmailBookingNotification;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class EmailBookingNotificationController extends Controller
{
    public function subscribe(Request $request) 
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users'
        ]);

        if ($validator->fails()) {
            return new JsonResponse(['success' => false, 'message' => $validator->errors()], 422);
        }  

        $email = $request->all()['email'];
        //     $subscriber = Subscriber::create([
        //         'email' => $email
        //     ]
        // ); 

        
        Mail::to($email)->send(new EmailBooking($email));
        return new JsonResponse(
            [
                'success' => true, 
                'message' => "Thank you for subscribing to our email, please check your inbox"
            ], 
            200
        );
        
    }
}
