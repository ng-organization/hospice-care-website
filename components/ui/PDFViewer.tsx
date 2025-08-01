"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface PDFViewerProps {
  file: string;
  className?: string;
  onDownload?: () => void;
}

export function PDFViewer({ file, className = "", onDownload }: PDFViewerProps) {
  const t = useTranslations();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
  }, [file]);

  const handleIframeLoad = () => {
    setLoading(false);
    setError(null);
  };

  const handleIframeError = () => {
    setLoading(false);
    setError('Unable to load PDF preview');
  };

  const handleDownloadClick = () => {
    if (onDownload) {
      onDownload();
    } else {
      // Fallback download functionality
      try {
        const link = document.createElement("a");
        link.href = file;
        link.download = file.split('/').pop() || 'document.pdf';
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Error downloading file:", error);
        window.open(file, "_blank");
      }
    }
  };

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center h-full min-h-[400px] bg-slate-50 rounded-lg ${className}`}>
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Unable to Preview PDF</h3>
          <p className="text-slate-600 mb-4">The PDF document could not be loaded for preview. Please download it to view.</p>
          <Button onClick={handleDownloadClick} className="bg-primary-600 hover:bg-primary-700">
            <Download className="w-4 h-4 mr-2" />
            {t("common.download")} PDF
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col h-full ${className}`}>
      {/* PDF Controls */}
      <div className="flex items-center justify-between p-3 bg-slate-100 border-b flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-600">PDF Preview</span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleDownloadClick} className="h-8">
            <Download className="w-3 h-3 mr-1" />
            Download
          </Button>
        </div>
      </div>

      {/* PDF Document via Iframe */}
      <div className="flex-1 overflow-hidden bg-slate-50 relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-slate-50">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-2"></div>
              <span className="text-sm text-slate-600">Loading PDF...</span>
            </div>
          </div>
        )}
        
        <iframe
          src={`${file}#toolbar=1&navpanes=1&scrollbar=1`}
          className="w-full h-full border-0"
          title="PDF Preview"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          style={{ minHeight: '400px' }}
        />
      </div>
    </div>
  );
}