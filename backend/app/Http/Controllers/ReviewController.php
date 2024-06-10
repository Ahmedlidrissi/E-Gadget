<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use App\Http\Requests\StoreReviewRequest;
use App\Http\Requests\UpdateReviewRequest;

class ReviewController extends Controller
{
    public function index()
    {
      $Review = Review::all();
      return response()->json($Review);
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
      Review::create($Field);
      return response()->json(['created']);
    }
  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Review $Review)
  {
    $Field = $request->validate([
      'Comment' => 'required',
      'Rating' => 'required|max:3',
      'Clinet_Id' => 'required|max:5'
    ]);

    $Review->update($Field);
    return response()->json(['updated']);
  }
  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(Review $Review)
  {
    $Review->delete();
    return response()->json(['success', 'Product deleted successfully']);
          }

        
  public function show(Review $Review)
  {
    return response()->json($Review);
  }
}
