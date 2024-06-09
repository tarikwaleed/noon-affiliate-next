import SideBar from '@/components/sidebar';
import TopBar from '@/components/topbar';


// export default function Layout({ children }: { children: React.ReactNode }) {
//     return (
//         <div className="grid min-h-screen w-full lg:grid-cols-[400px_1fr]">
//             <SideBar />
//             <div>
//                 <TopBar />
//                 <div className="flex-grow p-6">{children}</div>
//             </div>
//         </div>
//     );
// }
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid min-h-screen w-full lg:grid-cols-[1fr_400px]" >
            <div>
                <TopBar />
                <div className="flex-grow p-6">{children}</div>
            </div>
            <SideBar />
        </div>
    );
}