<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;
use App\Http\Requests\StoreCategoriesRequest;
use App\Http\Requests\UpdateCategoriesRequest;

class CategoriesController extends Controller
{
    public function index()
    {
      $Categorie = Categories::all();
      return response()->json($Categorie);
    }
  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request){
      $request->validate([
        'categorie' => 'required|max:20'
      ]);
      Categories::create($request->all());
      return response()->json(['created']);
    }
  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Categories $Categorie)
  {
    $request->validate([
      'categorie' => 'required|max:20'
    ]);
    $Categorie->update($request->all());
    return response()->json(['updated']);
  }
  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(Categories $Categorie)
  {
    $Categorie->delete();
    return response()->json(['success', 'Categorie deleted successfully']);
          }
  // routes functions
  /**
   * Show the form for creating a new post.
   *
   * @return \Illuminate\Http\Response
   */

  public function show(Categories $categories)
    {
        return response()->json($categories);
    }
}
