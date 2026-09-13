'use client';

import { Printer } from 'lucide-react';

export function BookActions() {
  return (
    <div className="book-actions">
      <button
        type="button"
        className="print-button"
        onClick={() => window.print()}
      >
        <Printer aria-hidden="true" /> Save book as PDF
      </button>
      <p>
        In the print window, choose <strong>Save as PDF</strong>.
      </p>
    </div>
  );
}
