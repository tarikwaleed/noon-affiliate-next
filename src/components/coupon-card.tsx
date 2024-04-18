"use client"
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

const CouponCard = ({ code, id }: { code: string, id: string }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
            <Card className="max-w-md shadow-lg rounded-lg">

                <Link href={`/user-dashboard/coupons/${id}`}>
                    <CardContent>
                        <pre className="bg-gray-100 p-4 rounded-md">{code}</pre>
                    </CardContent>
                </Link>
                <div className="flex justify-end mt-4">
                    <button
                        className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md focus:outline-none"
                        onClick={copyToClipboard}
                    >
                        <ClipboardIcon className="h-4 w-4 mr-2" />
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </Card>
    );
};

export default CouponCard;