<?php

use App\Http\Controllers\CategorieController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::apiResource('users', UserController::class);
// Route::apiResource('categories', CategorieController::class);
// returns the home page with all posts
Route::get('/categories', CategorieController::class .'@index')->name('categories.index');
Route::post('/categories', CategorieController::class .'@store')->name('categories.store');
Route::get('/categories/{categorie}', CategorieController::class.'@show')->name('categories.show');
Route::put('/categories/{categories}', CategorieController::class .'@update')->name('categories.update');
Route::delete('/categories/{categories}', CategorieController::class .'@destroy')->name('categories.destroy');