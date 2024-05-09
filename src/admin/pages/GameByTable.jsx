import React, { useState } from 'react';
import { categoriesList } from '../constant';

const GameByTable = () => {
  const [message, setMessage] = useState('');
  const [items, setItems] = useState([]);

  const updateMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setItems([...items, message]);
    setMessage('');
  };

  return (
    <div>
      <table className="">
        <thead>
          <tr>
            {categoriesList.map((item) => (
              <th key={item.id}>{item.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {categoriesList.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <input className="border-2" type="text" />
              </td>
              <td>
                <input className="border-2" type="text" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <input type="text" value={message} onChange={updateMessage} />
      <button onClick={handleClick}>Add Item</button>
    </div>
  );
};

export default GameByTable;
