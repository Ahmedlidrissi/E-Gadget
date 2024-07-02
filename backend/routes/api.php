<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\BlogsController;
use App\Http\Controllers\CustomerServiceController;
use App\Http\Controllers\DiscountsController;
use App\Http\Controllers\OrderTrakingController;
use App\Http\Controllers\PurchaseGideController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::apiResource('users', UserController::class);
Route::apiResource('products', ProductController::class);
Route::apiResource('clients',ClientController::class);
Route::apiResource('reviews',ReviewController::class);
Route::apiResource('about',AboutController::class);
Route::apiResource('blogs',BlogsController::class);
Route::apiResource('services',CustomerServiceController::class);
Route::apiResource('discounts',DiscountsController::class);
Route::apiResource('orders',OrderTrakingController::class);
Route::apiResource('contacts',ContactController::class);
Route::apiResource('gides',PurchaseGideController::class);


// rcategorie routs
Route::get('/categories', CategorieController::class .'@index')->name('categories.index');
Route::post('/categories', CategorieController::class .'@store')->name('categories.store');
Route::get('/categories/{categorie}', CategorieController::class.'@show')->name('categories.show');
Route::put('/categories/{categories}', CategorieController::class .'@update')->name('categories.update');
Route::delete('/categories/{categories}', CategorieController::class .'@destroy')->name('categories.destroy');
// rcategorie routs