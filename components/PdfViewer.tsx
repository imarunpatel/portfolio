// components/PdfViewer.js
import { FC, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Download } from 'lucide-react';

// Set up the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

interface Props {
    file: string
}
const PdfViewer: FC<Props> = ({ file }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  function onDocumentLoadSuccess({ numPages } : { numPages: number }) {
    setIsLoading(false);
    setNumPages(numPages);
  }

  function onDocumentLoadError(error: Error) {
    setIsLoading(false); 
    setError('Failed to load the PDF. Please try again later.');
    console.error('PDF loading error:', error);
  }

  return (
    <div className='dark:bg-gray-900 relative'>
      
      <div className='max-h-[80vh] overflow-y-auto'>
        { isLoading && 
        <div className='min-h-52 text-neutral-400 flex justify-center items-center'>
          Loading document...
        </div> }

        { error && 
        <div className='text-red-600 min-h-52 flex justify-center items-center'>
         {error}
        </div> }

        <Document file={file} onLoadError={onDocumentLoadError} onLoadSuccess={onDocumentLoadSuccess}>
        {!isLoading && !error && Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
        </Document>

      </div>
      {!isLoading && !error &&  <a href="resume.pdf" download="Arun_Patel_Resume.pdf" target='_blank'>
        <button className="absolute bottom-3 right-3 px-2 py-2 rounded-full bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
          <Download />
        </button>
      </a>}
    </div>
  );
}

export default PdfViewer;