<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceManage extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_manage', function (Blueprint $table) {
            $table->id();
            $table->string('car_number')->nullable();
            $table->string('car_brand')->nullable();
            $table->string('car_parking')->nullable();
            $table->string('car_washing')->nullable();
            $table->string('car_polishing')->nullable();
            $table->string('car_repair')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_manage');
    }
}
