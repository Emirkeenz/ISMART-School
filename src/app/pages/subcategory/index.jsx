import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer';
import { StemEducationVideo } from '../../assets';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getSubcategoriesList } from '../../../redux/subcategories/reducer';
import { useParams } from 'react-router-dom';
import { getTeamsList } from '../../../redux/teams/reducer';
import { clearTeamList } from '../../../redux/teams/slice';
import { getAllGamesByTimeList } from '../../../redux/game/reducer';
import { clearGameList } from '../../../redux/game/slice';

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
  /* background-color: ${(props) => (props.dark ? '#fcfcfc' : '#ffffff')}; */
`;

const Subcategory = () => {
  const { id } = useParams(); // Extract subcategory ID from URL parameters
  const dispatch = useDispatch();
  const subcategoriesList = useSelector((state) => state.subcategory.subcategoriesList);
  const teamsList = useSelector((state) => state.team.teamList);
  const gamesList = useSelector((state) => state.game.gameList);
  const selectedSubcategory = subcategoriesList.find(
    (subcategory) => subcategory.id === parseInt(id)
  );

  const [numTeams, setNumTeams] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [leaderName, setLeaderName] = useState('');

  useEffect(() => {
    dispatch(getSubcategoriesList());
    dispatch(getTeamsList({ params: { subcategory: id } }));
    dispatch(getAllGamesByTimeList({ params: { team: id } }));

    return () => {
      dispatch(clearGameList());
      dispatch(clearTeamList());
    };
  }, []);

  useEffect(() => {
    // Calculate the number of teams
    if (teamsList) {
      setNumTeams(teamsList.length);
    }

    // Calculate the maximum score
    if (gamesList) {
      let max = 0;
      let leader = '';
      gamesList.forEach((game) => {
        if (game.score > max) {
          max = game.score;
          leader = game.team.name;
        }
      });
      setMaxScore(max);
      setLeaderName(leader);
    }
  }, [teamsList, gamesList]);

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
            <span>{numTeams}</span>
          </DescriptionItem>
          <LeaderDescriptionItem>
            <span>Лидер: {leaderName}</span>
            <span>{maxScore} pts</span>
          </LeaderDescriptionItem>
        </Description>
      </SubcategoryDescription>
      {selectedSubcategory && (
        <div style={{ width: '100%', paddingLeft: '10%', paddingRight: '10%' }}>
          <h1 style={{ color: '#000', fontSize: '36px', textAlign: 'center' }}>
            Список команд - {selectedSubcategory.name}
          </h1>
          <p>{selectedSubcategory.description}</p>
        </div>
      )}
      <TeamsListContainer>
        <TeamsList>
          {teamsList &&
            teamsList.map((team) => (
              <Team key={team.id}>
                <span>{team.name}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {(() => {
                    // Find all games associated with the current team
                    const teamGames = gamesList.filter((game) => game.team.name === team.name);
                    // Calculate the total score from the found games
                    const totalScore = teamGames.reduce((acc, curr) => acc + curr.score, 0);

                    return <span>Score: {totalScore}pts</span>;
                  })()}
                </div>
              </Team>
            ))}
        </TeamsList>
      </TeamsListContainer>
      <Footer />
    </div>
  );
};

export default Subcategory;
