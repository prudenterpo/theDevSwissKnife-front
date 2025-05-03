import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold tracking-tight">TheDevSwissknife</div>
      <div className="space-x-6">
        <Link href="/algorithms/sorting" className="hover:underline">Algorithms</Link>
        <Link href="/data-structures/stack" className="hover:underline">Data Structures</Link>
      </div>
    </nav>
  );
}