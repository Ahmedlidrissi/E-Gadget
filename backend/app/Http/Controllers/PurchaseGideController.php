<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Purchase_Gide;
use App\Http\Requests\StorePurchase_GideRequest;
use App\Http\Requests\UpdatePurchase_GideRequest;

class PurchaseGideController extends Controller
{

    public function index()
    {
      $Purchase_Gide = Purchase_Gide::all();
      return response()->json($Purchase_Gide);
    }
  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request){
      $Field = $request->validate([
        'tips_for_using_theProduct' => 'required',
        'size' => 'required|max:10',
        'color' => 'required',
      ]);
      Purchase_Gide::create($Field);
      return response()->json(['created']);
    }
  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Purchase_Gide $Purchase_Gide)
  {
    $Field = $request->validate([
        'tips_for_using_theProduct' => 'required',
        'size' => 'required|max:10',
        'color' => 'required',
    ]);
    $Purchase_Gide->update($Field);
    return response()->json(['updated']);
  }
  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(Purchase_Gide $Purchase_Gides)
  {
    $Purchase_Gides->delete();
    return response()->json(['success', 'Purchase_Gide deleted successfully']);
          }

        
  public function show(Purchase_Gide $Purchase_Gides)
  {
    return response()->json($Purchase_Gides);
  }
}
