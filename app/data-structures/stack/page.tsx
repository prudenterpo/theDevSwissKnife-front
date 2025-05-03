'use client';

import { useState } from 'react';
import axios from 'axios';
import AppModal from '../../../components/AppModal';
import PrimaryButton from '../../../components/PrimaryButton';

export default function StackPage() {
  const [operations, setOperations] = useState("push 5\npush 10\npop");
  const [result, setResult] = useState<string | null>(null);
  const [steps, setSteps] = useState<string[]>([]);
  const [pseudocode, setPseudocode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleRun = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post('/api/data-structures/stack', {
        operations: operations.split('\n')
      });
      setResult(JSON.stringify(data.result));
      setSteps(data.steps);
      setPseudocode(data.pseudocode);
    } catch (err: any) {
      setModalMessage('Error: ' + err.message);
      setModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Stack Simulator</h2>
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-end">
        <div className="flex-1">
          <label className="block mb-1 font-medium">Operations</label>
          <textarea
            value={operations}
            onChange={(e) => setOperations(e.target.value)}
            className="w-full p-2 border rounded"
            rows={5}
          />
        </div>
        <PrimaryButton onClick={handleRun} disabled={loading}>
          {loading ? 'Running...' : 'Run'}
        </PrimaryButton>
      </div>

      {result && (
        <div>
          <h3 className="text-xl font-semibold">Final Stack</h3>
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

      <AppModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title="Error"
        description={modalMessage}
      />
    </div>
  );
}