import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-60 min-h-screen bg-gray-900 text-white p-4 space-y-6">
            <div className="text-2xl font-bold tracking-tight mb-8">TheDevSwissknife</div>

            <div>
                <h4 className="text-sm uppercase text-gray-400 mb-2">Algorithms</h4>
                <ul className="space-y-1 text-sm">
                    <li><Link href="/algorithms/sorting" className="hover:underline">Sorting</Link></li>
                    <li><Link href="/algorithms/searching" className="hover:underline">Searching</Link></li>
                    <li><Link href="/algorithms/graph" className="hover:underline">Graph</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="text-sm uppercase text-gray-400 mb-2">Data Structures</h4>
                <ul className="space-y-1 text-sm">
                    <li><Link href="/data-structures/stack" className="hover:underline">Stack</Link></li>
                    <li><Link href="/data-structures/queue" className="hover:underline">Queue</Link></li>
                    <li><Link href="/data-structures/tree" className="hover:underline">Tree</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="text-sm uppercase text-gray-400 mb-2">Tools</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                    <li>Converters <span className="text-xs">(soon)</span></li>
                    <li>Calculators <span className="text-xs">(soon)</span></li>
                    <li>Generators <span className="text-xs">(soon)</span></li>
                </ul>
            </div>
        </aside>
    );
}
