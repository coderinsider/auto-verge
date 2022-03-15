@extends('admin.layout.app')
@section('breadcrumb')
<ol class="breadcrumb custombreadcrumb">
    <li class="bread-item active" aria-current="page"><a href="#"><h4>User Manage</h4></a></li>
</ol>
@endsection
@section('content')
<section>
    <div id="user-manage-create"></div>
</section>
@include('admin.inc.messagestatus')
@endsection
@section('script')
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
@endsection