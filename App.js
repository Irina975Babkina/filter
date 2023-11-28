import React from 'react';
import ReactDOM from 'react-dom';
import Filter from './components/Filter';

const arr = ["california", "everything", "aboveboard", "washington", "basketball", "weathering", "characters", "literstyre", "contraband", "appreciate"];


ReactDOM.render(
  <Filter arrList = {arr}/>, 
  document.getElementById('container') 
);
