import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
// import competitions from '../../competitions.json';
import { fetchCategoriesList } from '../../../redux/categories/reducer';
import { selectCategoriesList } from '../../../redux/categories/slice';

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

const CardItem = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background-color: #ffffff;
  border-radius: 15px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  border-radius: 10px;
`;

const CardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 15px;
`;

const CompetitionListItem = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  const categoriesList = useSelector(selectCategoriesList);
  return (
    <div style={{ padding: '25px 0' }}>
      {categoriesList?.map((category) => (
        <div key={category.id} style={{ width: '100%', textAlign: 'center' }}>
          <h1 style={{ color: 'black', marginBottom: '15px', fontSize: '38px', fontWeight: '600' }}>
            {category.name}
          </h1>
          <List>
            {category.teams.map((eachCard) => (
              <CardItem key={eachCard.id}>
                <CardImg variant="top" src={eachCard.photo} />
                <CardBody>
                  <h2 style={{ fontSize: '22px' }}>{eachCard.name}</h2>
                  <Link
                    to={`/subcategory/${eachCard.id}`}
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
                        background: '#f1f1f1',
                        color: '#151515',
                        border: '1px solid #1d1d1d',
                        borderRadius: '8px',
                        padding: '8px 5px'
                      }}>
                      Перейти
                    </Button>
                  </Link>
                </CardBody>
              </CardItem>
            ))}
          </List>
        </div>
      ))}
    </div>
  );
};

export default CompetitionListItem;
