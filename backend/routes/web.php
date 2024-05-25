<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\usersController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategorieController;



Route::apiResource('users', usersController::class);
Route::apiResource('products', ProductController::class);





// rcategorie routs
Route::get('/categories', CategorieController::class .'@index')->name('categories.index');
Route::post('/categories', CategorieController::class .'@store')->name('categories.store');
Route::get('/categories/{categorie}', CategorieController::class.'@show')->name('categories.show');
Route::put('/categories/{categories}', CategorieController::class .'@update')->name('categories.update');
Route::delete('/categories/{categories}', CategorieController::class .'@destroy')->name('categories.destroy');
// categorie routs