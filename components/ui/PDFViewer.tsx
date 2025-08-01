"use client";

import { useState, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw, Download } from 'lucide-react';
import { useTranslations } from 'next-intl';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  file: string;
  className?: string;
  onDownload?: () => void;
}

export function PDFViewer({ file, className = "", onDownload }: PDFViewerProps) {
  const t = useTranslations();
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(0.8);
  const [rotation, setRotation] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }, []);

  const onDocumentLoadError = useCallback((error: Error) => {
    console.error('Error loading PDF:', error);
    setError('Failed to load PDF document');
    setLoading(false);
  }, []);

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(prev + 1, numPages));
  };

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 3.0));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.4));
  };

  const rotate = () => {
    setRotation(prev => (prev + 90) % 360);
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
          <p className="text-slate-600 mb-4">The PDF document could not be loaded for preview.</p>
          {onDownload && (
            <Button onClick={onDownload} className="bg-primary-600 hover:bg-primary-700">
              <Download className="w-4 h-4 mr-2" />
              {t("common.download")} PDF
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col h-full ${className}`}>
      {/* PDF Controls */}
      <div className="flex items-center justify-between p-3 bg-slate-100 border-b flex-wrap gap-2">
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="w-3 h-3" />
          </Button>
          
          <span className="text-xs text-slate-600 min-w-[70px] text-center px-2">
            {loading ? (
              <span className="animate-pulse">Loading...</span>
            ) : (
              `${pageNumber} / ${numPages}`
            )}
          </span>
          
          <Button
            variant="outline"
            size="sm"
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="w-3 h-3" />
          </Button>
        </div>

        <div className="flex items-center gap-1">
          <Button variant="outline" size="sm" onClick={zoomOut} disabled={scale <= 0.4} className="h-8 w-8 p-0">
            <ZoomOut className="w-3 h-3" />
          </Button>
          
          <span className="text-xs text-slate-600 min-w-[45px] text-center">
            {Math.round(scale * 100)}%
          </span>
          
          <Button variant="outline" size="sm" onClick={zoomIn} disabled={scale >= 3.0} className="h-8 w-8 p-0">
            <ZoomIn className="w-3 h-3" />
          </Button>

          <Button variant="outline" size="sm" onClick={rotate} className="h-8 w-8 p-0">
            <RotateCw className="w-3 h-3" />
          </Button>

          {onDownload && (
            <Button variant="outline" size="sm" onClick={onDownload} className="h-8 w-8 p-0">
              <Download className="w-3 h-3" />
            </Button>
          )}
        </div>
      </div>

      {/* PDF Document */}
      <div className="flex-1 overflow-auto bg-slate-50 p-2">
        {loading && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-2"></div>
              <span className="text-sm text-slate-600">Loading PDF...</span>
            </div>
          </div>
        )}
        
        {!loading && (
          <div className="flex justify-center min-h-full">
            <Document
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading=""
              className="react-pdf__Document"
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                rotate={rotation}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="react-pdf__Page"
              />
            </Document>
          </div>
        )}
      </div>
    </div>
  );
}