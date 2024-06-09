"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useRef, useState } from 'react'
import { useUser } from "@clerk/clerk-react";
import { Coupon } from '@/lib/types'
import { CouponCard } from '@/components/coupon-card';
import Confetti from 'react-confetti'
import { ProgressSpinner } from 'primereact/progressspinner';

const page = () => {
    const { user } = useUser();
    const [coupon, setCoupon] = useState<Coupon | null>(null)
    const [hasCoupon, setHasCoupon] = useState<boolean>(false)
    const [showConfetti, setShowConfetti] = useState<boolean>(false)
    const getCoupon = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/coupon?user_id=${user?.id}`)
        const json = await res.json()
        console.log(json)
        if (res.status == 201) {
            setHasCoupon(false)
            setCoupon(json)
            celebrate()
        }
        if (res.status == 200) {
            setHasCoupon(true)
        }
    }
    const userHasCoupon = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/coupon/has?user_id=${user?.id}`)
        const json = await res.json()
        console.log(json)
        if (res.status == 201) {
            setHasCoupon(true)
            setCoupon(json)
        }
        if (res.status == 200) {
            setHasCoupon(false)
        }
    }
    useEffect(() => {
        if (user?.id)
            userHasCoupon()
    }, [user])
    const celebrate = () => {
        setShowConfetti(true)
        setTimeout(() => {
            setShowConfetti(false)
        }, 3000);
    }

    return (
        <>
            {showConfetti &&
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    gravity={.5}

                />
            }
            <div className='pt-20' />
            <main>

                {user?.id ?
                    <>
                        {
                            hasCoupon ?
                                <>
                                    <div dir='rtl'>
                                        <span className='text-4xl font-bold'>الكوبون الخاص بك</span>
                                    </div>
                                    <div className="pb-20"></div>
                                    <div className='flex flex-row justify-center'>
                                        <CouponCard
                                            couponCode={coupon?.coupon_code}
                                        ></CouponCard>
                                    </div>


                                </> :
                                <>
                                    <div className="flex flex-row justify-center">
                                        <Button
                                            onClick={() => {
                                                getCoupon()
                                            }}

                                            className='text-xl'
                                        >
                                            Get Coupon
                                        </Button>
                                    </div>
                                </>
                        }
                    </>
                    :
                    <>
                        <div className="flex flex-row items-center">
                            <ProgressSpinner></ProgressSpinner>
                        </div>
                    </>}

            </main>
            <div className='pt-20' />
        </>

    )
}

export default page