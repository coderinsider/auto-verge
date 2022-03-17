<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') . $page_title ?? '' }}</title>
        <!-- Styles -->
        <meta name="theme-color" content="#eaedef" />
        <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('uploads/apple-touch-icon.png') }}" />
        <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('uploads/favicon-32x32.png') }}" />
        <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('uploads/favicon-16x16.png') }}" />

        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <link rel="stylesheet" href="{{ asset('css/all.min.css') }}">
        <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="{{ asset('js/admin.css') }}">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <!-- Scripts -->
        <script src="{{ mix('js/app.js') }}" defer></script>
        <!-- Scripts -->       
        @yield('style')

    </head>
    <bodyclass="antialiased" style="background: #EEEDF0;">
        <section id="mainwrapper" style="display: flex;">
            <article id="dashboardleft" style="width: 50px;background: #4392F1; height: 100vh;" class="sidenav">
                <div class="app-logo-view-head">
                    <div class="app-logo-img" style="margin: 0 10px;width: 10px;">
                        <img src="https://laravel.com/img/logomark.min.svg" style="width:20px;">
                    </div>
                    <div class="app-logo-name justshowme">
                        <h3>Auto Van</h3>
                    </div>
                </div>
                @include('admin.inc.nav-menu')
            </article>

            <article id="dashboardright" style="width: calc(100% - 50px);color: #000;">
                <div class="dashboardheadpanel" style="display: flex;background: #EEEDF0;border: 1px solid #ddd">
                    <div class="headerbaraction" style="display: flex;align-items: center;justify-content:  center;width: 50px;height: 50px;line-height: 25px;padding: 10px;">
                        <div class="dashright-headerbar openbar" onclick="openNav()">
                            <i class="fas fa-bars"></i>
                        </div>
                        <div class="dashright-headerbar closebar" onclick="closeNav()" style="display: none;">
                            <i class="fas fa-times"></i>
                        </div>
                    </div>                
                    <div class="dashboardheadright">
                        <nav aria-label="breadcrumb">
                            @yield('breadcrumb')
                        </nav>
                        <div class="accountuserright">
                            <div class="accounuserpanel">
                                <div class="accountuserlogo">
                                    <div class="headuser"></div>
                                    <div class="bodyuser"></div>
                                </div>
                                <div class="accountusercontent">
                                    <div class="accountusername">
                                        @if(Auth::check())
                                        <p>{{ Auth::user()->name }}</p></div>
                                        @endif
                                    <div class="accountuserrole"><p style="cursor: pointer" onclick="event.preventDefault();getElementById('logout').submit()">Logout</p></div>
                                    <form id="logout" action="/logout" method="post">
                                        @csrf
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="margin-left: 50px;padding: 10px 0;">
                    @yield('content')
                </div>
            </article>            
        </section>
        <script src="{{ asset('js/bootstrap.min.js')}}"></script>
        <script src="{{ asset('js/popper.min.js') }}"></script>
        <script src="{{ asset('js/all.min.js') }}"></script>
        <script>
        document.querySelector(".justshowme").style.display = "none";
        document.getElementById("dashboardright").style.marginLeft= "50px";
        function openNav() {
            var x = document.getElementById("dashboardleft").style.width = "250px";
            document.getElementById("dashboardright").style.marginLeft = "250px";
            document.querySelector(".openbar").style.display = "none";
            document.querySelector(".closebar").style.display = "block";
            if(x) {
                document.querySelector(".justshowme").style.display = "block";
            }
        }

        function closeNav() {
            document.getElementById("dashboardleft").style.width = "50px";
            document.getElementById("dashboardright").style.marginLeft= "50px";
            document.querySelector(".openbar").style.display = "block";
            document.querySelector(".closebar").style.display = "none"; 
            document.querySelector(".justshowme").style.display = "none";
         
        }
        </script>
        @yield('script')
    </body>    
</html>
