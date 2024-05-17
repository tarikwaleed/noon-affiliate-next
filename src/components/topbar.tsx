import { UserButton } from "@clerk/nextjs";

export default function TopBar() {
    return (
        <header className="flex items-end justify-between h-20 shadow-lg bg-gray-100 ">
            <div></div>
            <div className="p-6">
                <UserButton afterSignOutUrl="/" ></UserButton>
            </div>
        </header>
    );
}
