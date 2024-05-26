<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Client\Request;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;

class ProductController extends Controller
{
    public function index()
    {
      $Product = Product::all();
      return response()->json($Product);
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
      Product::create($Field);
      return response()->json(['created']);
    }
  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Product $Product)
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
  public function destroy(Product $Product)
  {
    $Product->delete();
    return response()->json(['success', 'Product deleted successfully']);
          }

        
  public function show(Product $Product)
  {
    return response()->json($Product);
  }
}
