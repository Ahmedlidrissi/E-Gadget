<?php

namespace App\Http\Controllers;

use App\Models\Blogs;
use Illuminate\Http\Request;
use App\Http\Requests\StoreBlogsRequest;
use App\Http\Requests\UpdateBlogsRequest;

class BlogsController extends Controller
{
    public function index()
    {
      $Blogs = Blogs::all();
      return response()->json($Blogs);
    }
  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request){
      $Field = $request->validate([
        'article' => 'required',
        'author' => 'required|max:90',
        'comment' => 'required',
        'image' => ''
      ]);
      //$usersField['PFP'] = $request->file('PFP')->store('/users','public');
      $Field['image'] = $request->file('image')->store('/blogs','/public');
      Blogs::create($Field);
      return response()->json(['created']);
    }
  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Blogs $Blogs)
  {
    $Field = $request->validate([
      'article' => 'required',
      'author' => 'required|max:90',
      'comment' => 'required',
      'image' => ''
    ]);
    if($request->hasFile('image')){
      $Field['image']=$request->file('image')->store('/blogs','public');
    }

    $Blogs->update($Field);
    return response()->json(['updated']);
  }
  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(Blogs $Blog)
  {
    $Blog->delete();
    return response()->json(['success', 'Blogs deleted successfully']);
          }

        
  public function show(Blogs $Blog)
  {
    return response()->json($Blog);
  }
}
