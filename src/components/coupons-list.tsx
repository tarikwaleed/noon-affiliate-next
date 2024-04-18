"use client"
import { useQuery } from 'convex/react';
import CouponCard from './coupon-card';
import { api } from '../../convex/_generated/api';

const CouponsList = () => {
    const coupons = useQuery(api.coupons.getAll);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coupons?.map(({ _id, code }) => <CouponCard code={code} id={_id}/>)}
        </div>
    );
};

export default CouponsList;
