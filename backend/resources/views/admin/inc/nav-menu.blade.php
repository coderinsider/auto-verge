<div class="navigation nav-menu">
    <ul class="navlists">
        <li class="{{ ($current_page == 'dashboard') ? 'navmenuactive' : 'navmenudeactive'}}">
            <img src="{{ asset('uploads/menu/monitor.png') }}">
            <a href="/admin/dashboard">Dashboard</a>
        </li>
        <li class="{{ ($current_page == 'userlist') ? 'navmenuactive' : 'navmenudeactive'}}">
            <img src="{{ asset('uploads/menu/monitor.png') }}">
            <a href="/admin/users-list">Users Manage</a>
        </li>        
        <li class="{{ ($current_page == 'services') ? 'navmenuactive' : 'navmenudeactive'}}">
            <img src="{{ asset('uploads/menu/monitor.png') }}">
            <a href="/admin/services">Booking</a>
        </li>      
        <li class="{{ ($current_page == 'services') ? 'navmenuactive' : 'navmenudeactive'}}">
            <img src="{{ asset('uploads/menu/monitor.png') }}">
            <a href="/admin/our-services">Services</a>
        </li>     
    </ul>
</div>