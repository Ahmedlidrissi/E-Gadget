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
      $Field = $request->validate([
        'productName' => 'required|max:60',
        'description' => 'required',
        'price' => 'required|max:10',
        'image' => 'required|max:3200',
        'stock' => 'required|max:10',
        'categorie' => 'required|max:50',
      ]);
      $Field['image'] = $request->file('image')->store('/products','public');
      Products::create($Field);
      return response()->json(['created']);
    }
  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Products $Product)
  {
    $Field = $request->validate([
        'description' => 'required',
        'price' => 'required|max:10',
        'image' => 'required|max:3200',
        'stock' => 'required|max:10',
        'categorie' => 'required|max:50',
    ]);
    if($request->hasFile('image')){
      $Field['image']=$request->file('image')->store('/products','public');
    }

    $Product->update($Field);
    return response()->json(['updated']);
  }
  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(Products $Product)
  {
    $Product->delete();
    return response()->json(['success', 'Product deleted successfully']);
          }

        
  public function show(Products $Product)
  {
    return response()->json($Product);
  }
}
