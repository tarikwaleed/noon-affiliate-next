"use client"
import { useQuery } from 'convex/react';
import React from 'react'
import { api } from '../../../../../convex/_generated/api';
import { Button } from '@/components/ui/button';
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

type Props = {}

const CouponDetails = ({ params }: { params: any }) => {
    const coupon = useQuery(api.coupons.getOneById, { id: params.couponId });
    return (
        // <>
        //     <Button>{coupon?.code}</Button>
        // </>

        <main className="flex flex-col items-center justify-center min-h-screen py-2">
            <header className="w-full max-w-4xl px-4 py-6 bg-gray-100 dark:bg-gray-800">
                <h1 className="text-xl font-semibold text-center">Coupon: {coupon?.code}</h1>
            </header>
            <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full mt-6">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Coupon Details</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                            <h2 className="font-semibold text-lg">
                                Order Date: <span className="font-normal">01/01/2024</span>
                            </h2>
                            <h2 className="font-semibold text-lg">
                                Advertiser: <span className="font-normal">Advertiser 1</span>
                            </h2>
                            <h2 className="font-semibold text-lg">
                                Platform: <span className="font-normal">Platform 1</span>
                            </h2>
                            <h2 className="font-semibold text-lg">
                                Country: <span className="font-normal">Country 1</span>
                            </h2>
                            <h2 className="font-semibold text-lg">
                                Coupon Code: <span className="font-normal">{coupon?.code}</span>
                            </h2>
                            <h2 className="font-semibold text-lg">
                                Total Orders: <span className="font-normal">100</span>
                            </h2>
                            <h2 className="font-semibold text-lg">
                                Non-Payable Orders: <span className="font-normal">10</span>
                            </h2>
                            <h2 className="font-semibold text-lg">
                                Total Order Value: <span className="font-normal">$1000</span>
                            </h2>
                            <h2 className="font-semibold text-lg">
                                FTU Orders: <span className="font-normal">50</span>
                            </h2>
                            <h2 className="font-semibold text-lg">
                                FTU Order Value: <span className="font-normal">$500</span>
                            </h2>
                            <h2 className="font-semibold text-lg">
                                RTU Orders: <span className="font-normal">40</span>
                            </h2>
                            <h2 className="font-semibold text-lg">
                                RTU Order Value: <span className="font-normal">$400</span>
                            </h2>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

export default CouponDetails