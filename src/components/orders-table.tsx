import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Paginator } from 'primereact/paginator';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useEffect, useState } from "react";
import { Order } from '@/lib/types'
import { CardFooter } from "./ui/card";


export function OrdersTable({ couponCode }: { couponCode: string }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [totalRecords,setTotalRecords]=useSta
    const onPageChange = (event: any) => {
        if (event.page + 1 != currentPage) {
            setIsLoading(true)
            setFirst(event.first)
            setRows(event.rows)
            setCurrentPage(event.page + 1)
        }
    };

    // Fetch Entities
    useEffect(() => {
        const fetchEntities = async () => {
            try {
                let url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/sales/all?coupon_code=${couponCode}&page=${currentPage}`;
                const response = await fetch(url);
                if (response.ok) {
                    const data: any = await response.json();
                    setOrders(data.results);
                    setIsLoading(false)
                    console.log(data);
                } else {
                    console.error('Failed to fetch orders');
                }
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchEntities();
    }, [currentPage]);
    return (
        <>
            <Table>
                <TableCaption>تفاصيل العمولات</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead >تاريخ الطلب</TableHead>
                        <TableHead>إجمالي الطلبيات</TableHead>
                        <TableHead>قيمة الطلب الإجمالية</TableHead>
                        <TableHead>منصة</TableHead>
                        {/* <TableHead>المعلن</TableHead> */}
                        {/* <TableHead>البلد</TableHead> */}
                        {/* <TableHead>رمز القسيمة</TableHead> */}
                        {/* <TableHead>الطلبيات غير القابلة للدفع</TableHead> */}
                        {/* <TableHead>عدد الطلبيات للمستخدمين الجدد</TableHead> */}
                        {/* <TableHead>قيمة الطلب للمستخدمين الجدد</TableHead> */}
                        {/* <TableHead>عدد الطلبيات للمستخدمين الحاليين</TableHead> */}
                        {/* <TableHead>قيمة الطلب للمستخدمين الحاليين</TableHead> */}

                    </TableRow>
                </TableHeader>
                <TableBody dir="rtl">
                    {orders.map((order, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{order.order_date}</TableCell>
                            <TableCell>{order.total_orders}</TableCell>
                            <TableCell>{order.total_order_value}</TableCell>
                            <TableCell >{order.platform}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    {/* <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow> */}
                </TableFooter>

            </Table>

            <CardFooter className="flex justify-center" >
                <Paginator first={first} rows={rows} totalRecords={120} onPageChange={onPageChange} dir="ltr" />
            </CardFooter>
        </>


    )
}
