<!-- Show Message -->
@if (session()->has('failed'))
<div class="showmessage failed">
    <i class="fa fa-times-circle fail-icon"></i>
    <p>{{ session()->get('failed') }}</p>
</div>
@endif
@if (session()->has('success'))
<div class="showmessage success">
    <i class="fas fa-check-circle"></i>
    <p>{{ session()->get('success') }}</p>
</div>
@endif