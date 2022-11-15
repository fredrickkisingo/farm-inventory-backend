<?php

namespace App\Http\Controllers;

use App\Models\Farm;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class FarmController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return Farm::select('id','description','name','image')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'description'=>'required',
            'name'=>'required',
            'image'=>'required|image'
        ]);

        try{
            
            $imageName=Str::random().'.'.$request->image->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('farm/image',$request->image,$imageName);
            Farm::create($request->post()+ ['image'=>$imageName]);

            return response()->json([
                'message'=>'Farm inventory added successfully!!'
            ]);

            
            }catch(Exception $e){

                
                Log::error($e->getMessage());
                return response()->json([
                    'message'=>'Something went wrong while adding the inventory!!'
                ],500);

            }
        }
    

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Farm  $farm
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $farm=Farm::find($id);
        return response()->json([
            'farm'=>$farm
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Farm  $farm
     * @return \Illuminate\Http\Response
     */
    public function edit(Farm $farm)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Farm  $farm
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $farm=Farm::find($id);



        try{

            $farm->fill($request->post())->update();

            if($request->hasFile('image')){

                // remove old image
                if($farm->image){
                    $exists = Storage::disk('public')->exists("farm/image/{$farm->image}");
                    if($exists){
                        Storage::disk('public')->delete("farm/image/{$farm->image}");
                    }
                }

                $imageName = Str::random().'.'.$request->image->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('farm/image', $request->image,$imageName);
                $farm->image = $imageName;
                $farm->save();
            }

            return response()->json([
                'message'=>'Farm inventory Updated Successfully!!'
            ]);

        }catch(\Exception $e){
            Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something went  wrong while updating the inventory!!'
            ],500);
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Farm  $farm
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $farm= Farm::find($id);


            if($farm->image){
                $exists = Storage::disk('public')->exists("farm/image/{$farm->image}");
                if($exists){
                    Storage::disk('public')->delete("farm/image/{$farm->image}");
                }
            }

            $farm->delete();

            return response()->json([
                'message'=>'Inventory Deleted Successfully!!'
            ]);
            
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something went wrong while deleting the inventory!!'
            ]);
        }
    }
}
