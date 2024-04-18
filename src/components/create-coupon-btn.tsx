"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'

type Props = {}

const CreateCouponButton = (props: Props) => {
    const [couponCount, setCouponCount] = useState(0); // State to keep track of the coupon count
    const create = useMutation(api.coupons.createOne);
    const generateCouponCode = () => {
        // Generate the coupon code based on the current coupon count
        const code = `MON${couponCount.toString().padStart(2, '0')}`;
        // Increment the coupon count for the next coupon
        setCouponCount(couponCount + 1);
        return code;
    };

    return (
        <Button
            className='text-lg font-bold'
            onClick={() => {
                const code = generateCouponCode();
                create({
                    code: code
                });
            }}
        >
            Get Coupon
        </Button>
    );
};

export default CreateCouponButton