<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order_traking;
use App\Http\Requests\StoreOrder_trakingRequest;
use App\Http\Requests\UpdateOrder_trakingRequest;

class OrderTrakingController extends Controller
{
    public function index()
    {
      $Order_traking = Order_traking::all();
      return response()->json($Order_traking);
    }
  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request){
      $Field = $request->validate([
        'order_status' => 'required|max:60',
        'order_history' => 'required',
        'traking_number' => 'required|max:60'
      ]);
      Order_traking::create($Field);
      return response()->json(['created']);
    }
  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Order_traking $Order_traking)
  {
    $Field = $request->validate([
        'order_status' => 'required|max:60',
        'order_history' => 'required',
        'traking_number' => 'required|max:60'
    ]);
    $Order_traking->update($Field);
    return response()->json(['updated']);
  }
  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(Order_traking $Orders_traking)
  {
    $Orders_traking->delete();
    return response()->json(['success', 'Product deleted successfully']);
          }

        
  public function show(Order_traking $Orders_traking)
  {
    return response()->json($Orders_traking);
  }
}
