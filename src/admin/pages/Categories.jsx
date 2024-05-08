import React from 'react';
import styled from 'styled-components';
import { categoriesList } from '../constant';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-left: 10%;
  padding-right: 10%;
  margin-bottom: 35px;

  @media (max-width: 970px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CategoryItem = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background-color: #dbdbdb;
  padding: 15px;
  border-radius: 15px;
`;

const CategoryImg = styled.img`
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
`;

const CategoryBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const Categories = () => {
  return (
    <div>
      <div style={{ padding: '25px 0' }}>
        <List>
          {categoriesList?.map((category) => (
            <CategoryItem key={category.id}>
              <CategoryImg variant="top" src={category.photo} />
              <CategoryBody>
                <h2>{category.name}</h2>
              </CategoryBody>
              <Link
                to={`/admin/game-time`}
                style={{
                  textDecoration: 'none',
                  color: '#1a1a1a',
                  width: '80%',
                  transition: 'none'
                }}>
                <Button
                  variant="primary"
                  style={{
                    width: '100%',
                    background: '#000F38',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '15px'
                  }}>
                  Перейти
                </Button>
              </Link>
            </CategoryItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Categories;
