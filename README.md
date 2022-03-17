# Auto Verge
## Welcome to web application

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Auto Verge is a car service web application  system.
## Installation

Install the dependencies and devDependencies and start the server.
Open your terminal. and then start run following commands.


```sh
git clone https://github.com/coderinsider/auto-verge.git
```
Let create MySQL database name is "auto_verge"

and then. Go to backend directory.
```sh
cd auto-verge/backend/
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan db:seed --class=UsersSeeder
php artisan serve --port=8000
```

For Frontend. You need to do something. Example
```sh
cd auto-verge/backend/
npm install && npm run dev
```
### Login User and Password
http://127.0.1:8000/login
### Account Information

| Username | Password |
| ------ | ------ |
| Web Admin | webadmin@gmail.co |



Thanks.