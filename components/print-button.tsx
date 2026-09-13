'use client';

import { Printer } from 'lucide-react';

export function PrintButton() {
  return <button type="button" className="print-button" onClick={() => window.print()}><Printer aria-hidden="true" />Print recipe</button>;
}
