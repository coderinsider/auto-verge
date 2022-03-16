<?php
namespace App\Models;
class CarService extends Model
{
    use HasFactory;
    protected $table = "service_manage";
    protected $fillable = [
        'car_number', 'car_brand', 'car_parking', 'car_washing', 'car_polishing', 'car_repair'
    ];
}