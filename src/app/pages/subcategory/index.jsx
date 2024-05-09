import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer';
import { StemEducationVideo } from '../../assets';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getSubcategoriesList } from '../../../redux/subcategories/reducer';
import { useParams } from 'react-router-dom';

const SubcategoryDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-left: 10%;
  padding-right: 10%;
  margin: 80px 0 30px 0;

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: stretch;

    > video {
      width: 50%;
    }

    > div {
      width: 50%;
    }
  }
`;

const Description = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  gap: 15px;

  @media (min-width: 800px) {
    grid-template-rows: auto;
  }
`;

const DescriptionItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 15px;

  &:nth-child(3) {
    grid-column: span 2;
  }
`;

const LeaderDescriptionItem = styled(DescriptionItem)`
  width: 100%;
`;

const TeamsListContainer = styled.div`
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  margin: 35px 0;
  text-align: center;
  flex-grow: 1;
`;

const TeamsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Team = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  border-radius: 15px;
  background-color: #ffffff;
`;

const Subcategory = () => {
  const { id } = useParams(); // Extract subcategory ID from URL parameters
  const dispatch = useDispatch();
  const subcategoriesList = useSelector((state) => state.subcategory.subcategoriesList);
  const selectedSubcategory = subcategoriesList.find(
    (subcategory) => subcategory.id === parseInt(id)
  );

  useEffect(() => {
    dispatch(getSubcategoriesList());
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <SubcategoryDescription>
        <video autoPlay muted loop style={{ height: 'auto' }}>
          <source src={StemEducationVideo} type="video/mp4" />
        </video>
        <Description>
          <DescriptionItem>
            <span>Конец мероприятия</span>
            <span>11:45</span>
          </DescriptionItem>
          <DescriptionItem>
            <span>Количество команд</span>
            <span>15</span>
          </DescriptionItem>
          <LeaderDescriptionItem>
            <span>Лидер</span>
            <span>45pts</span>
          </LeaderDescriptionItem>
        </Description>
      </SubcategoryDescription>
      {selectedSubcategory && (
        <h1 style={{ color: '#000', fontSize: '36px', textAlign: 'center' }}>
          Список команд - {selectedSubcategory.name}
        </h1>
      )}
      <TeamsListContainer>
        <TeamsList>
          <Team>
            <span>School 24</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span>Score: 25pts</span>
              <span>status</span>
            </div>
          </Team>
          <Team>
            <span>School 24</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span>Score: 25pts</span>
              <span>status</span>
            </div>
          </Team>
          <Team>
            <span>School 24</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span>Score: 25pts</span>
              <span>status</span>
            </div>
          </Team>
          <Team>
            <span>School 24</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span>Score: 25pts</span>
              <span>status</span>
            </div>
          </Team>
          <Team>
            <span>School 24</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span>Score: 25pts</span>
              <span>status</span>
            </div>
          </Team>
        </TeamsList>
      </TeamsListContainer>
      <Footer />
    </div>
  );
};

export default Subcategory;
