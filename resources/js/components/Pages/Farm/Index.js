import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import route from "ziggy-js";
import { Ziggy } from './ziggy';
const Index = () => {
    const { farm } = usePage().props;
    const { data } = farm;

    return (
        <div>
            <div className="container mx-auto">
                <h1 className="mb-8 text-3xl font-bold text-center">Farm Inventory</h1>
                <div className="flex items-center justify-between mb-6">
                    <InertiaLink
                        className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                        href={route('farm-inventory.create',Ziggy)}>
                        Create inventory
                    </InertiaLink>
                </div>

                <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="w-full whitespace-nowrap">
                        <thead className="text-white bg-gray-600">
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">#</th>
                                <th className="px-6 pt-5 pb-4">Name</th>
                                <th className="px-6 pt-5 pb-4">Description</th>
                                <th>Image</th>
                                <th className="px-6 pt-5 pb-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {farm.map(({ id, name, description,image }) => (
                                <tr key={id} className="">
                                    <td className="border-t">
                                        <InertiaLink
                                            href={route("farm-inventory.edit", id)}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {id}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            href={route("farm-inventory.edit", id)}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {name}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            tabIndex="1"
                                            className="flex items-center px-6 py-4"
                                            href={route("farm-inventory.edit", id)}
                                        >
                                            {description}
                                        </InertiaLink>
                                    </td>
                                    <td>
                                      <img width="50px" src={`http://localhost:8000/storage/farm/image/${image}`} />
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            tabIndex="1"
                                            className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                            href={route("farm-inventory.edit", id)}
                                        >
                                            Edit
                                        </InertiaLink>
                                    </td>
                                </tr>
                            ))}
                            {farm.length === 0 && (
                                <tr>
                                    <td
                                        className="px-6 py-4 border-t"
                                        colSpan="4"
                                    >
                                        No inventory found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Index;