import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { IRoutine } from '../RoutinesContainer/RoutinesContainer';
import DeleteRoutine from '../deleteRotine/DeleteRoutine';

const PDFViewer = ( routine:IRoutine):React.ReactNode => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div className='border-slate-500 bg-slate-200 m-4 p-6 border-b-2 min-h-screen'>
            <DeleteRoutine {...routine} />
            <h4 className='font-semibold text-3xl text-gray-800'>{routine.name}</h4>
            <p className='font-bold text-lg text-secondary tracking-wider'>{routine.type}</p>
            <div className='m-auto p-4 w-3/4'>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={routine.pdf_url} plugins={[defaultLayoutPluginInstance]} />
                </Worker>
            </div>
            
        </div>
    );
};

export default PDFViewer;