<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer_service;
use App\Http\Requests\StoreCustomer_serviceRequest;
use App\Http\Requests\UpdateCustomer_serviceRequest;

class CustomerServiceController extends Controller
{
    public function index()
    {
      $Customer_service = Customer_service::all();
      return response()->json($Customer_service);
    }
  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request){
      $Field = $request->validate([
        'returnPolicy' => 'required',
        'FAQ' => 'required',
        'suportRequest' => 'required'
      ]);
      Customer_service::create($Field);
      return response()->json(['created']);
    }
  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Customer_service $Customer_service)
  {
    $Field = $request->validate([
        'returnPolicy' => 'required',
        'FAQ' => 'required',
        'suportRequest' => 'required'
    ]);
    $Customer_service->update($Field);
    return response()->json(['updated']);
  }
  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(Customer_service $Customers_service)
  {
    $Customers_service->delete();
    return response()->json(['success', 'Customer_service deleted successfully']);
          }

        
  public function show(Customer_service $Customers_service)
  {
    return response()->json($Customers_service);
  }
}
