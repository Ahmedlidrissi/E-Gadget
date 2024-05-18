<?php

namespace App\Http\Controllers;

use App\Models\Discounts;
use Illuminate\Http\Request;
use App\Http\Requests\StoreDiscountsRequest;
use App\Http\Requests\UpdateDiscountsRequest;

class DiscountsController extends Controller
{
    public function index()
    {
      $Discounts = Discounts::all();
      return response()->json($Discounts);
    }
  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request){
      $fields = $request->validate([
        'discount' => 'required|max:80',
        'discountCode' => 'required|max:10',
        'ValidationDate' => 'required|max:40',
        
      ]);
      Discounts::create($fields);
      return response()->json(['created']);
    }
  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Discounts $Discounts)
  {
    $fields = $request->validate([
        'discount' => 'required|max:80',
        'discountCode' => 'required|max:10',
        'ValidationDate' => 'required|max:40',
    ]);
    $Discounts->update($fields);
    return response()->json(['updated']);
  }
  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(Discounts $Discounts)
  {
    $Discounts->delete();
    return response()->json(['success', 'Discounts deleted successfully']);
          }
  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show(Discounts $discount)
  {
    return response()->json($discount);
  }
}
