"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import { useUser } from "@clerk/clerk-react";


const page = () => {
    const { user } = useUser();

    const getCoupon = async () => {
        const coupon = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/coupon?user_id=${user?.id}`)
        console.log("pressed")
        console.log(coupon)

    }

    return (
        <div className='pt-20'>
            <div className='flex flex-row justify-center'>
                <Button
                    onClick={() => {
                        getCoupon()
                    }}
                    className='text-xl'
                >
                    Get Coupon</Button>
            </div>
            <div className='pt-20'>

            </div>
        </div>

    )
}

export default page