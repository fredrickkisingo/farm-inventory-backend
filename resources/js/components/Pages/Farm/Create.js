import React,{useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import route from "ziggy-js";

const Create = () => {
    const { data, setData, errors, post } = useForm({
        name: "",
        description: "",
        image:""
    });
    


    function handleSubmit(e) {
        e.preventDefault();
        post(route("farm-inventory.store"));
    }

    return (
        <div className="mt-20">
            <div className="container flex flex-col justify-center mx-auto">
                <div>
                    <h1 className="mb-8 text-3xl font-bold">
                        <InertiaLink
                            href={route("farm-inventory.index")}
                            className="text-indigo-600 hover:text-indigo-700"
                        >
                            Farm-Inventory
                        </InertiaLink>
                        <span className="font-medium text-indigo-600"> / </span>
                        Create
                    </h1>
                </div>
                <div className="max-w-6xl p-8 bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label className="">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="Name"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.name}
                                </span>
                            </div>
                            <div className="mb-0">
                                <label className="">Description</label>
                                <textarea
                                    type="text"
                                    className="w-full rounded"
                                    label="description"
                                    name="description"
                                    errors={errors.description}
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.description}
                                </span>
                            </div>

                            <div className="mb-0">
                                <label className="">Image</label>
                                <input
                                    type="file"
                                    className="w-full rounded"
                                    label="image"
                                    name="image"
                                    errors={errors.image}
                                    value={data.image}
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.image} 
                                </span>
                            </div>

                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Create;