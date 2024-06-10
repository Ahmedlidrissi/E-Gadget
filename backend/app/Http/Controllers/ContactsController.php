<?php

namespace App\Http\Controllers;

use App\Models\Contacts;
use Illuminate\Http\Request;
use App\Http\Requests\StoreContactsRequest;
use App\Http\Requests\UpdateContactsRequest;

class ContactsController extends Controller
{
    public function index()
    {
      $Contacts = Contacts::all();
      return response()->json($Contacts);
    }
  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request){
      $Field = $request->validate([
        'Comment' => 'required',
        'Rating' => 'required|max:3',
        'Clinet_Id' => 'required|max:5'
      ]);
      Contacts::create($Field);
      return response()->json(['created']);
    }
  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Contacts $Contacts)
  {
    $Field = $request->validate([
      'Comment' => 'required',
      'Rating' => 'required|max:3',
      'Clinet_Id' => 'required|max:5'
    ]);

    $Contacts->update($Field);
    return response()->json(['updated']);
  }
  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(Contacts $Contacts)
  {
    $Contacts->delete();
    return response()->json(['success', 'Contacts deleted successfully']);
          }

        
  public function show(Contacts $Contacts)
  {
    return response()->json($Contacts);
  }
}
