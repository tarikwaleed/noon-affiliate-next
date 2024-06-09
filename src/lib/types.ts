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
interface DataPoint {
    x: string;
    y: number;
}

export interface PerformanceData {
    id: string|number;
    color: string;
    data: DataPoint[];
}

export interface CouponDetails {
    num_total_orders: number;
    total_order_value: number;
    average_order_value: number;
    performance_data: PerformanceData[];
    commission:number
}