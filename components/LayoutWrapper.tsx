import NavBar from "./NavBar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="max-w-5xl mx-auto px-4 py-6">{children}</main>
      <Footer />
    </>
  );
}