import React from 'react';
import ReactDOM from 'react-dom/client';
import {DataRender} from './DataRender';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DataRender />
  </React.StrictMode>
);

