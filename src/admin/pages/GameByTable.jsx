import React, { useState } from 'react';
import styled from 'styled-components';
import { categoriesList } from '../constant';

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid #e2e8f0;
`;

const Th = styled.th`
  border: 1px solid #e2e8f0;
  padding: 0.5rem;
`;

const Td = styled.td`
  border: 1px solid #e2e8f0;
  padding: 0.5rem;
`;

const Input = styled.input`
  border: 2px solid #e2e8f0;
  padding: 0.5rem;
`;

const Button = styled.button`
  background-color: #3b82f6;
  color: #fff;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;

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
      <Table>
        <thead>
          <tr>
            {categoriesList.map((item) => (
              <Th key={item.id}>{item.name}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {categoriesList.map((item) => (
            <tr key={item.id}>
              <Td>{item.name}</Td>
              <Td>
                <Input type="text" />
              </Td>
              <Td>
                <Input type="text" />
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <hr />
      <Input type="text" value={message} onChange={updateMessage} />
      <Button onClick={handleClick}>Add Item</Button>
    </div>
  );
};

export default GameByTable;
