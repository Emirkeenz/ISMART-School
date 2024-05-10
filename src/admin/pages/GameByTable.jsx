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
  const [value, setValue] = useState();
  const [team1, setTeam1] = useState();
  const [team2, setTeam2] = useState();

  useEffect(() => {
    if (value) console.log(value, team1, team2);
    setValue(0);
  }, [value]);

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
