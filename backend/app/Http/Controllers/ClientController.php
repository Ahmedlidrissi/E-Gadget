<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;

class ClientController extends Controller
{
    public function index()
    {
      $Client = Client::all();
      return response()->json($Client);
    }
  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request){
      $Field = $request->validate([
        'FirstName' => 'required|max:20',
        'LastName' => 'required|max:20',
        'PhoneNumber' => 'required|max:15'
      ]);
      Client::create($Field);
      return response()->json(['created']);
    }
  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Client $Client)
  {
    $Field = $request->validate([
        'FirstName' => 'required|max:20',
        'LastName' => 'required|max:20',
        'PhoneNumber' => 'required|max:15'
    ]);

    $Client->update($Field);
    return response()->json(['updated']);
  }
  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(Client $Client)
  {
    $Client->delete();
    return response()->json(['success', 'Product deleted successfully']);
          }

        
  public function show(Client $Client)
  {
    return response()->json($Client);
  }
}
