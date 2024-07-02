<?php

namespace App\Http\Controllers;

use App\Models\About;
use Illuminate\Http\Request;
use App\Http\Requests\StoreAboutRequest;
use App\Http\Requests\UpdateAboutRequest;

class AboutController extends Controller
{
    public function index()
    {
      $About = About::all();
      return response()->json($About);
    }
  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request){
      $Field = $request->validate([
        'histroy' => 'required',
        'Missions_and_values' => 'required',
        'Social_and_environmental_commitments' => 'required'
      ]);
      About::create($Field);
      return response()->json(['created']);
    }
  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, About $About)
  {
    $Field = $request->validate([
        'histroy' => 'required',
        'Missions_and_values' => 'required',
        'Social_and_environmental_commitments' => 'required'
    ]);

    $About->update($Field);
    return response()->json(['updated']);
  }
  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(About $Abouts)
  {
    $Abouts->delete();
    return response()->json(['success', 'About deleted successfully']);
          }

        
  public function show(About $Abouts)
  {
    return response()->json($Abouts);
  }
}
