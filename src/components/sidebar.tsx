import { TicketIcon } from "lucide-react";
import Link from "next/link";

export default function SideBar() {
    return (
        <nav className={`bg-white shadow-lg`}>
            <div className="bg-gray-100 h-20 shadow-lg">
                <div className="flex  p-4 flex-row items-center">
                    <Link href="/" >
                        <img src="/logo-ar-nobg.png" className="object-contain w-20" alt="" />
                    </Link>
                </div>
            </div>
            <div className="pt-20"></div>
            <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-3xl transition-all hover:bg-gray-100"
                href="/user-dashboard/coupons"
            >
                <TicketIcon className="w-5 h-5" />
                Coupons
            </Link>
        </nav>
    );
}
