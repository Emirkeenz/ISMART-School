import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
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
  background-color: #dbdbdb;
  padding: 15px;
  border-radius: 15px;
`;

const CardImg = styled.img`
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
`;

const CardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

// const CategoryItem = styled.div`
//   height: auto;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 15px;
//   background-color: #dbdbdb;
//   padding: 15px;
//   border-radius: 15px;
// `;

// const CategoryImg = styled.img`
//   height: 180px;
//   object-fit: cover;
//   border-radius: 10px;
// `;

// const CategoryBody = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 5px;
// `;

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
          <h1>{category.name}</h1>
          <List>
            {category.teams.map((eachTeam) => (
              <CardItem key={eachTeam.id}>
                <CardImg variant="top" src={eachTeam.photo} />
                <CardBody>
                  <h2>{eachTeam.name}</h2>
                  <Link
                    to={`/subcategory/${eachTeam.id}`}
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
                </CardBody>
              </CardItem>
            ))}
          </List>
        </div>
      ))}
    </div>
    // <div style={{ padding: '25px 0' }}>
    //   <List>
    //     {categoriesList?.map((category) => (
    //       <CategoryItem key={category.id}>
    //         <CategoryImg variant="top" src={category.photo} />
    //         <CategoryBody>
    //           <h2>{category.name}</h2>
    //         </CategoryBody>
    //       </CategoryItem>
    //     ))}
    //   </List>
    // </div>
  );
};

export default CompetitionListItem;
