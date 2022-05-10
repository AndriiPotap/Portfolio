import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<App/>, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const toggle = document.querySelector('.hover-show');
// // console.log(toggle);

// toggle.addEventListener('click', () => {
//   toggle.classList.toggle('active');
// });

// let Icons = document.querySelectorAll('.navigation .icon');
// console.log(Icons);

// Icons.forEach((icon) => {
//   icon.addEventListener('click', () => {
//     changeactive();

//     icon.classList.add('active-nav');
//   });
// });

// function changeactive() {
//   Icons.forEach((icon) => {
//     icon.classList.remove('active-nav');
//   });
// }
// console.log(Icons);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
