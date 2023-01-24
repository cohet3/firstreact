import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const X = () => 
       <ul>
        <li>PRimer obejto</li>
        <li>segundo obejto</li>
        <li>tercer objeto</li>
       </ul>


ReactDOM.render(
  <X />,  document.getElementById('root')
)
// esto se utiliza para renderizar la aplicacion y donde 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//sirve para medir el rendimiento se puede mandar a donde quieras usando los parentecis
reportWebVitals();
