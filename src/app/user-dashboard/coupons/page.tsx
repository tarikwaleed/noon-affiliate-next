import CouponsList from '@/components/coupons-list'
import CreateCouponButton from '@/components/create-coupon-btn'
import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='pt-20'>
            <div className='flex flex-row justify-center'>
                <CreateCouponButton></CreateCouponButton>
            </div>
            <div className='pt-20'>
                <CouponsList></CouponsList>
            </div>
        </div>

    )
}

export default page