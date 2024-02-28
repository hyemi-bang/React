import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import ProfileList from './chap03/ProfileList';
import AlarmList from './chap04/AlarmList';
import AlarmList2 from './chap04/chap04-1/AlarmList2';
import AlarmList3 from './chap04/chap04-2/AlarmList3';

const root = ReactDOM.createRoot(document.getElementById('root'));

/*root.render(
  <React.StrictMode>
    <Mybutton />
    <DrinkList />
  </React.StrictMode>
);

setInterval(()=>{
  root.render(
    <React.StrictMode>
      <Mybutton />
      <DrinkList />
      <Clock/>
    </React.StrictMode>
  );
},1000);
*/
root.render(
  <React.StrictMode>
    <AlarmList/>
    <ProfileList />
    <AlarmList2/>
    <AlarmList3/>
  </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();