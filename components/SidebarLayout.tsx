import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 bg-gray-50">{children}</main>
        <Footer />
      </div>
    </div>
  );
}