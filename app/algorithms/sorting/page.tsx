'use client';

import { useState } from 'react';
import axios from 'axios';

export default function SortingPage() {
  const [input, setInput] = useState('[5, 3, 1]');
  const [algorithm, setAlgorithm] = useState('quicksort');
  const [result, setResult] = useState<string | null>(null);
  const [steps, setSteps] = useState<string[]>([]);
  const [pseudocode, setPseudocode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post('/api/algorithms/sorting', {
        algorithm,
        input: JSON.parse(input),
      });
      setResult(JSON.stringify(data.result));
      setSteps(data.steps);
      setPseudocode(data.pseudocode);
    } catch (err: any) {
      alert('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Sorting Algorithms</h2>
      <div className="flex gap-4 items-end">
        <div className="flex-1">
          <label className="block mb-1 font-medium">Input Array</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 border rounded"
            rows={3}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Algorithm</label>
          <select
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="quicksort">QuickSort</option>
            <option value="mergesort">MergeSort</option>
          </select>
        </div>
        <button
          onClick={handleRun}
          disabled={loading}
          className="h-10 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {loading ? 'Running...' : 'Run'}
        </button>
      </div>

      {result && (
        <div>
          <h3 className="text-xl font-semibold">Result</h3>
          <div className="p-2 bg-green-50 border rounded">{result}</div>
        </div>
      )}

      {steps.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold">Steps</h3>
          <ul className="list-disc list-inside space-y-1">
            {steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </div>
      )}

      {pseudocode && (
        <div>
          <h3 className="text-xl font-semibold">Pseudocode</h3>
          <pre className="p-4 bg-gray-100 rounded overflow-x-auto text-sm font-mono">{pseudocode}</pre>
        </div>
      )}
    </div>
  );
}