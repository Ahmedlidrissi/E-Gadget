<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
      $users = User::all();
      return response()->json($users);
    }
  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request){
      $usersField = $request->validate([
        'FullName' => 'required|max:60',
        'username' => 'required|max:30',
        'PhoneNumber' => 'required|max:10',
        'email' => 'required|max:100',
        'PFP' => '',
        'is_Active'  => 'required|max:30',
        'is_Admin' => 'required|max:30',
        'password' => 'required|max:300',
      ]);
      $usersField['PFP'] = $request->file('PFP')->store('/users','public');
      $usersField['password']=Hash::make($request->password);
      User::create($usersField);
      return response()->json(['created']);
    }
  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, User $user)
  {
    $usersField = $request->validate([
        'FullName' => 'required|max:60',
        'username' => 'required|max:30',
        'PhoneNumber' => 'required|max:10',
        'email' => 'required|max:100',
        'PFP' => '',
        'is_Active'  => 'required|max:30',
        'is_Admin' => 'required|max:30',
        'password' => 'required|max:300',
    ]);
    if ($request->has('password')) {
        $usersField['password'] = Hash::make($request->input('password'));
      }

    if($request->hasFile('image')){
      $usersField['PFP']=$request->file('PFP')->store('/users','public');
    }

    $user->update($usersField);
    return response()->json(['updated']);
  }
  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(User $user)
  {
    $user->delete();
    return response()->json(['success', 'user deleted successfully']);
          }

        
  public function show(User $user)
  {
    return response()->json($user);
  }
}
