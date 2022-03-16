<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class ServiceLists extends Model
{
    use HasFactory;
    protected $table = "service_lists";
    // protected $fillable = [
    //     'car_number', 'car_brand', 'car_parking', 'car_washing', 'car_polishing', 'car_repair'
    // ];
    protected $fillable = [
        'service_name'
    ];
}