/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from 'react';
import { jsx } from '@emotion/react';

import HomePage from '@/pages/HomePage';
import DeviceSelectionPage from '@/pages/DeviceSelectionPage';
import SpecsSearchPage from '@/pages/SpecsSearchPage';
import ResultsPage from '@/pages/ResultsPage';

export default function App() {
  const [page, setPage] = useState<'home' | 'device' | 'specs' | 'results'>('home');
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);
  const [selectedSpecs, setSelectedSpecs] = useState<{ protocol: string; length: string } | undefined>();

  const showHome = () => setPage('home');
  const handleDevices = (devices: string[]) => {
    setSelectedDevices(devices);
    setSelectedSpecs(undefined);
    setPage('results');
  };
  const handleSpecs = (specs: { protocol: string; length: string }) => {
    setSelectedDevices([]);
    setSelectedSpecs(specs);
    setPage('results');
  };

  if (page === 'device') {
    return <DeviceSelectionPage onSubmit={handleDevices} />;
  }
  if (page === 'specs') {
    return <SpecsSearchPage onSubmit={handleSpecs} />;
  }
  if (page === 'results') {
    return <ResultsPage devices={selectedDevices} specs={selectedSpecs} onBack={showHome} />;
  }
  return <HomePage onSelectDevices={() => setPage('device')} onSpecSearch={() => setPage('specs')} />;
}
