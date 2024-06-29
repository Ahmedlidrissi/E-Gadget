<?php

namespace App\Http\Controllers;

use App\Models\contact;
use Illuminate\Http\Request;
use App\Http\Requests\StorecontactRequest;
use App\Http\Requests\UpdatecontactRequest;

class ContactController extends Controller
{
    public function index()
    {
      $Contacts = contact::all();
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
        'phoneNumber' => 'required|max:20',
        'email' => 'required|max:50',
        'facebook' => 'required',
        'instagram' => 'required',
        'youtube' => 'required'
      ]);
      contact::create($Field);
      return response()->json(['created']);
    }
  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, contact $Contact)
  {
    $Field = $request->validate([
        'phoneNumber' => 'required|max:20',
        'email' => 'required|max:50',
        'facebook' => 'required',
        'instagram' => 'required',
        'youtube' => 'required'
    ]);

    $Contact->update($Field);
    return response()->json(['updated']);
  }
  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(contact $Contacts)
  {
    $Contacts->delete();
    return response()->json(['success', 'Contacts deleted successfully']);
          }

        
  public function show(contact $Contact)
  {
    return response()->json($Contact);
  }
}
