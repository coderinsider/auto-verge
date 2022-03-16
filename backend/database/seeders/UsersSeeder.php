<?php 
namespace Database\Seeders;
use Illuminate\Database\Seeder; 
use App\Models\User; 
use Illuminate\Support\Facades\Hash;
class UsersSeeder extends Seeder { 
    /** 
    * Run the database seeds. 
    * 
    * @return void */

 
   public function run() { 
        User::truncate(); 
        $users = [ 
            [ 
              'name' => 'Black Code',
              'email' => 'coderinsider1@gmail.com',
              'password' => 'coderinsider1@gmail.com',
              'phone' => '09253354614',
              'userrole' => 'auto_admin',
              'gender'=>'male',
            ],
            [ 
              'name' => 'Myat Ko',
              'email' => 'hometown.ht1993@gmail.com',
              'password' => 'hometown.ht1993@gmail.com',
              'phone' => '09253354614',
              'userrole' => 'auto_admin',
              'gender'=>'male',
            ],
            [ 
              'name' => 'Web Admin',
              'email' => 'webadmin@gmail.com',
              'password' => 'webadmin@gmail.co',
              'phone' => '09253354614',
              'userrole' => 'auto_admin',
              'gender'=>'male',
            ],
        ];

        foreach($users as $user) {
            User::create([
               'name' => $user['name'],
               'email' => $user['email'],
               'password' => Hash::make($user['password'])
            ]);
        }

    }
}