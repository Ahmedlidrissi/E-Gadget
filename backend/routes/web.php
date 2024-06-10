<?php

use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::apiResource('users', UserController::class);
// Route::apiResource('products', ProductController::class);




// // rcategorie routs
// Route::get('/categories', CategorieController::class .'@index')->name('categories.index');
// Route::post('/categories', CategorieController::class .'@store')->name('categories.store');
// Route::get('/categories/{categorie}', CategorieController::class.'@show')->name('categories.show');
// Route::put('/categories/{categories}', CategorieController::class .'@update')->name('categories.update');
// Route::delete('/categories/{categories}', CategorieController::class .'@destroy')->name('categories.destroy');
// // rcategorie routs

Route::get('/',function(){
    return 'Hello world';
});