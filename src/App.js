// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyItem } from './Redux/Action/itemAction';

const App = () => {
  // Use useSelector to get the current number of items from the Redux store
  const items = useSelector((state) => state.items);
  
  // Use useDispatch to create a dispatch function for sending actions to the store
  const dispatch = useDispatch();

  // Handle the buy item action by dispatching the buyItem action
  const handleBuyItem = () => {
    dispatch(buyItem());
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Stationary Shop</h1>
      <h2>Items in Stock: {items}</h2>
      <button onClick={handleBuyItem} disabled={items === 0}>
        Buy Item
      </button>
    </div>
  );
};

export default App;
