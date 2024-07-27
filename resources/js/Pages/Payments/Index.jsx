import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";
import { format } from "date-fns";

export default function Index({ auth, pesanan }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Payments
                </h2>
            }
        >
            <Head title="Payments" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/* <div className="p-6 bg-white text-right">
                            <Link href={route("pesanan.create")}>
                                <PrimaryButton>Add Order</PrimaryButton>
                            </Link>
                        </div> */}
                        <div className="p-6 border-t border-gray-200">
                            <h3 className="text-lg font-semibold mb-4">
                                Recent Orders
                            </h3>
                            <dl className="border-t border-gray-200">
                                <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-900 sm:col-span-2">
                                        Customer Name
                                    </dt>
                                    <dt className="text-sm font-medium text-gray-900 sm:col-span-2">
                                        Order Date
                                    </dt>
                                    <dt className="text-sm font-medium text-gray-900 sm:col-span-1">
                                        Status
                                    </dt>
                                    <dt className="text-sm font-medium text-gray-900 sm:col-span-1">
                                        Actions
                                    </dt>
                                </div>
                                {pesanan.map((pesanan) => (
                                    <div
                                        key={pesanan.Id_Pesanan}
                                        className="bg-white px-4 py-5 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6 items-center"
                                    >
                                        <dt className="text-sm text-gray-900 sm:col-span-2">
                                            {pesanan.pembeli.Nama}
                                        </dt>
                                        <dt className="text-sm text-gray-900 sm:col-span-2">
                                            {format(
                                                new Date(pesanan.Tanggal),
                                                "dd MMM yyyy HH:mm:ss"
                                            )}
                                        </dt>
                                        <dt className="text-sm text-gray-900 sm:col-span-1">
                                            {pesanan.nota
                                                ? pesanan.nota.Status
                                                : "Unpaid"}
                                        </dt>
                                        <dt className="text-sm text-gray-900 sm:col-span-1">
                                            <Link
                                                href={route(
                                                    "nota.process",
                                                    pesanan.Id_Pesanan
                                                )}
                                                className="text-indigo-600 hover:text-indigo-900 mr-2"
                                            >
                                                <SecondaryButton
                                                    disabled={
                                                        pesanan.nota
                                                            ? true
                                                            : false
                                                    }
                                                >
                                                    Process
                                                </SecondaryButton>
                                            </Link>
                                            {/* <Link
                                                href={route(
                                                    "pesanan.show",
                                                    pesanan.Id_Pesanan
                                                )}
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                <SecondaryButton>
                                                    Show
                                                </SecondaryButton>
                                            </Link> */}
                                        </dt>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
