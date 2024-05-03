import React from 'react';
// import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer';
import { StemEducationVideo } from '../../assets';
import styled from 'styled-components';

const SubcategoryDescription = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  padding-left: 10%;
  padding-right: 10%;
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const DescriptionItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #dcdcdc;
  border-radius: 10px;
  padding: 10px 15px;
`;

// const Text = styled.p`
//   color: #000;
// `;

const TeamsListContainer = styled.div`
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  margin: 35px 0;
  text-align: center;
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
  padding: 15px 15px;
  border-radius: 30px;
  background-color: #dcdcdc;
`;

const Subcategory = () => {
  return (
    <div>
      <Navbar />
      <SubcategoryDescription>
        <video autoPlay muted loop>
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
          <DescriptionItem>
            <span>Лидер</span>
            <span>45pts</span>
          </DescriptionItem>
        </Description>
      </SubcategoryDescription>
      <TeamsListContainer>
        <h2>Participants List</h2>
        <TeamsList>
          <Team>
            <span>School 24</span>
            <span>Score: 25pts</span>
          </Team>
          <Team>
            <span>School 24</span>
            <span>Score: 25pts</span>
          </Team>
          <Team>
            <span>School 24</span>
            <span>Score: 25pts</span>
          </Team>
          <Team>
            <span>School 24</span>
            <span>Score: 25pts</span>
          </Team>
          <Team>
            <span>School 24</span>
            <span>Score: 25pts</span>
          </Team>
        </TeamsList>
      </TeamsListContainer>
      <Footer />
    </div>
  );
};

export default Subcategory;
