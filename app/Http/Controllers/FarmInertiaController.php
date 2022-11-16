<?php
namespace App\Http\Controllers;

use App\Models\Farm;
use Exception;
use App\Http\Requests\StoreFarmInventoryRequest;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class FarmInertiaController extends Controller
{

    public function index()
    {
        $farm = Farm::latest()->get();

        return Inertia::render('Farm/Index', ['farm' => $farm]);
    }

     /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Farm/Create');
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
            'image'=>'required'
        ]);


        try{
            
            $imageName=Str::random().'.'.$request->file('image')->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('farm/image',$request->image,$imageName);
            Farm::create($request->post()+ ['image'=>$imageName]);

            return Redirect::route('farm-inventory.index');

            
            }catch(Exception $e){

                
                Log::error($e->getMessage());
                return Redirect::route('farm-inventory.index');

             
            }


    }



      /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $farm=Farm::find($id);
        return Inertia::render('Farm/Edit', [
            'farm' => [
                'id' => $farm->id,
                'name' => $farm->name,
                'description' => $farm->description
            ]
        ]);
    }

     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $farm= Farm::find($id);
        
        $farm->fill($request->post())->update();

      
        if($request->hasFile('image') && $request->image !== null){

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

        return Redirect::route('farm-inventory.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
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
            return Redirect::route('farm-inventory.index');

            
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return Redirect::route('farm-inventory.index');

        }

    }


}