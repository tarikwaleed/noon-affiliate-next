"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { CouponCard } from "@/components/coupon-card";
import Confetti from "react-confetti";
import { ProgressSpinner } from "primereact/progressspinner";
import { useCouponStore } from "@/stores/useCouponStore";

const UserDashboard = () => {
  const { user } = useUser();
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const { coupon, hasCoupon, setCoupon, setHasCoupon } = useCouponStore(
    (state) => ({
      coupon: state.coupon,
      hasCoupon: state.hasCoupon,
      setCoupon: state.setCoupon,
      setHasCoupon: state.setHasCoupon,
    }),
  );

  const getCoupon = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/coupon?user_id=${user?.id}`,
    );
    const json = await res.json();
    console.log(json);
    // new coupon assigned to user
    if (res.status == 201) {
      setHasCoupon(true);
      setCoupon(json);
      celebrate();
    }
    // user already has coupon
    // if (res.status == 200) {
    //   setHasCoupon(true);
    // }
  };

  const userHasCoupon = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/coupon/has?user_id=${user?.id}`,
    );
    const json = await res.json();
    console.log(json);
    if (res.status == 201) {
      setHasCoupon(true);
      setCoupon(json);
    }
    if (res.status == 200) {
      setHasCoupon(false);
    }
  };

  useEffect(() => {
    if (user) {
      userHasCoupon();
    }
  }, [user]);
  const celebrate = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  return (
    <>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          gravity={0.5}
        />
      )}
      <div className="pt-20" />
      <main>
        {user?.id ? (
          <>
            {hasCoupon ? (
              <>
                <div className="flex flex-row justify-cente" dir="rtl">
                  <span className="text-4xl font-bold">الكوبون الخاص بك</span>
                </div>
                <div className="pb-20"></div>
                <div className="flex flex-row justify-center">
                  <CouponCard couponCode={coupon?.coupon_code}></CouponCard>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-row justify-center">
                  <Button
                    onClick={() => {
                      getCoupon();
                    }}
                    className="text-xl"
                  >
                    احصل على كوبون جديد
                  </Button>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="flex flex-row items-center">
              <ProgressSpinner></ProgressSpinner>
            </div>
          </>
        )}
      </main>
      <div className="pt-20" />
    </>
  );
};
export default UserDashboard;
