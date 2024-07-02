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
      $Field = $request->validate([
        'discount' => 'required|max:10',
        'DiscountCode' => 'required|max:10',
        'ValidationDate' => 'required|max:60'
      ]);
      Discounts::create($Field);
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
    $Field = $request->validate([
        'discount' => 'required|max:10',
        'DiscountCode' => 'required|max:10',
        'ValidationDate' => 'required|max:60'
    ]);
    $Discounts->update($Field);
    return response()->json(['updated']);
  }
  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(Discounts $Discount)
  {
    $Discount->delete();
    return response()->json(['success', 'Discounts deleted successfully']);
          }

        
  public function show(Discounts $Discount)
  {
    return response()->json($Discount);
  }
}
