import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import route from "ziggy-js";

const Edit = () => {
    const { farm } = usePage().props;


    const { data, setData, put, errors } = useForm({
        name: farm.name || "",
        description: farm.description || "",
        image: farm.image || "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route("farm-inventory.update", farm.id));
    }
    function destroy() {
        if (confirm("Are you sure you want to delete this inventory?")) {
            Inertia.delete(route("farm-inventory.destroy", farm.id));
        }
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
                            Farm Inventory
                        </InertiaLink>
                        <span className="font-medium text-indigo-600"> /</span>
                        Edit
                    </h1>
                </div>
                <div className="max-w-3xl p-8 bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label className="">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="name"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.title}
                                </span>
                            </div>
                            <div className="mb-4">
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

                            <div className="mb-4">
                                <label className="">Image</label>
                                <input
                                    type="file"
                                    className="w-full rounded"
                                    label="image"
                                    name="image"
                                    errors={errors.image}
                                    value ={data.image}
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.image} 
                                </span>
                            </div>

                        </div>
                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-green-500 rounded"
                            >
                                Update
                            </button>
                            <button
                                onClick={destroy}
                                tabIndex="-1"
                                type="button"
                                className="px-4 py-2 text-white bg-red-500 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;