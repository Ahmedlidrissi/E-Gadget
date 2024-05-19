<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use Illuminate\Http\Request;
use App\Http\Requests\StoreCategorieRequest;
use App\Http\Requests\UpdateCategorieRequest;

class CategorieController extends Controller
{
    public function index()
    {
      $categories = Categorie::all();
      return response()->json($categories);
    }
  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request){
      $Field = $request->validate([
        'categorie' => 'required|max:60',
      ]);
      Categorie::create($Field);
      return response()->json(['created']);
    }
  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Categorie $categories)
  {
    $Field = $request->validate([
        'categorie' => 'required|max:60',
    ]);
    $categories->update($Field);
    return response()->json(['updated']);
  }
  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(Categorie $categories)
  {
    $categories->delete();
    return response()->json(['success', 'categories deleted successfully']);
}

        
  public function show($id)
  {
    return response()->json(Categorie::find($id));
  }
}
