// useCouponStore.ts
import { create } from "zustand";
import { Coupon } from "@/lib/types";

interface CouponState {
  coupon: Coupon | null;
  hasCoupon: boolean;
  setCoupon: (coupon: Coupon) => void;
  setHasCoupon: (hasCoupon: boolean) => void;
}

export const useCouponStore = create<CouponState>((set) => ({
  coupon: null,
  hasCoupon: false,
  setCoupon: (coupon) => set({ coupon }),
  setHasCoupon: (hasCoupon) => set({ hasCoupon }),
}));
