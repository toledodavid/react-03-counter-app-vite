import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
// import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';

import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title='Hello, I am David' subTitle={1234} />
    {/* <CounterApp value={6} /> */}
  </React.StrictMode>
)