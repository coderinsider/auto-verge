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
        <li class="{{ ($current_page == 'adsbanner') ? 'navmenuactive' : 'navmenudeactive'}}">
            <img src="{{ asset('uploads/menu/tear-off-ads.png') }}">
            <a href="/admin/adsbanner">ADS Banner</a></li>
        <li class="{{ ($current_page == 'couponcards') ? 'navmenuactive' : 'navmenudeactive'}}">
            <img src="{{ asset('uploads/menu/coupon.png') }}">
            <a href="/admin/couponcards">Coupon Cards</a>
        </li>
    </ul>
</div>