<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class CarService extends Model
{
    use HasFactory;
    protected $table = "service_manage";
    // protected $fillable = [
    //     'car_number', 'car_brand', 'car_parking', 'car_washing', 'car_polishing', 'car_repair'
    // ];
    protected $fillable = [
        'customer_name', 'customer_email', 'car_number', 'additional_service', 'duration', 'description'
    ];
}