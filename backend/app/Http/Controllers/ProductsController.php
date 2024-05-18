<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use App\Http\Requests\StoreProductsRequest;
use App\Http\Requests\UpdateProductsRequest;

class ProductsController extends Controller
{
    public function index()
    {
      $Products = Products::all();
      return response()->json($Products);
    }
  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request){
      $fields = $request->validate([
        'ProductName' => 'required|max:80',
        'description' => 'required|max:3000',
        'price' => 'required|max:40',
        'image' => 'required|max:3072',
        'stock' => 'required|max:20',
        'categorie_id' => 'required|max:20'
        
      ]);
      $fields['image']=$request->file('image')->store('/Products','public');
      // dd($fields['image']);
      Products::create($fields);
      return response()->json(['created']);
    }
  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Products $Products)
  {
    $fields = $request->validate([
        'ProductName' => 'required|max:80',
        'description' => 'required|max:1000',
        'price' => 'required|max:40',
        'image' => 'required|max:3072',
        'stock' => 'required|max:20',
        'categorie_id' => 'required|max:20'
    ]);
    if($request->hasFile('image')){
      $fields['image']=$request->file('image')->store('/Products','public');
    }
    $Products->update($fields);
    return response()->json(['updated']);
  }
  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(Products $Products)
  {
    $Products->delete();
    return response()->json(['success', 'Product deleted successfully']);
          }
  // routes functions
  /**
   * Show the form for creating a new post.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    return view('Products.create');
  }
  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show(Products $product)
  {
    return response()->json($product);
  }
}
