export interface Coupon {
    request_id: string
    prefix: string
    coupon_code: string
    advertiser: string
    num_coupons: number
    status: string
    created_at: Date
    user_id: string
}
export interface Order {
    order_date: string;
    advertiser: string;
    country: string;
    coupon_code: string;
    total_orders: number;
    non_payable_orders: number;
    total_order_value: string;
    ftu_orders: number;
    ftu_order_values: string;
    rtu_orders: number;
    rtu_order_value: string;
    platform: string;
}


export interface CouponDetails {
    num_total_orders: number;
    total_order_value: number;
    average_order_value: number;
    total_commission: number
    commission_stats: {
        month: string,
        value: number
    }[]

}