import React, { useEffect, useState } from 'react';
import { Checkbox, TextField, Tooltip, tooltipClasses, Typography } from '@mui/material';
import { participantsTableHead } from '../constant';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeGameByTimeValue,
  getAllGamesByTimeList,
  startGameByTime
} from '../../redux/game/reducer';
import { getTeamsList, updateTeam } from '../../redux/teams/reducer';
import { useParams } from 'react-router-dom';
import { clear } from '../../redux/game/slice';

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    border: '1px solid #dadde9'
  }
}));

const GameByTime = () => {
  const dispatch = useDispatch();
  const teamList = useSelector((state) => state.team.teamList);
  const gameList = useSelector((state) => state.game.gameList);
  const [timeValue, setTimeValue] = useState({ name: '', value: 0, id: 0 });
  const [data, setData] = useState([]);
  const [gameRequest, setGameRequest] = useState(false);
  // const debouncedCurrentValue = useDebounce(timeValue.value, 1000);
  const { id } = useParams();

  const params = {
    team__subcategory: id
  };

  const onChangeStatusIsVisited = (value, game_id) => {
    const data = {
      is_arrived: value
    };
    dispatch(updateTeam({ id: game_id, data, category_id: id }));
    console.log(data);
  };

  const onChangeStatusIsActive = (value, id) => {
    const data = {
      is_active: value
    };
    dispatch(updateTeam({ id, data }));
    console.log(data);
  };

  const onChangeValue = (field, value, game_id, game_index) => {
    setData((prevData) => {
      const newData = [...prevData];
      const updatedGame = { ...newData[game_index] };
      updatedGame[field] = value;
      newData[game_index] = updatedGame;
      return newData;
    });
    const data = {
      [field]: value
    };
    dispatch(changeGameByTimeValue({ id: game_id, data, category_id: id }));
  };

  const createGameForAllTeams = () => {
    Promise.all(
      teamList.map((team) => {
        const data = {
          team: team.id,
          game: id,
          first_time: 0,
          second_time: 0,
          third_time: 0,
          least_time: 0
        };
        dispatch(startGameByTime({ data }));
      })
    ).then(() => {
      console.log('All team registered and games started!');
    });
  };

  // useEffect(() => {
  //   const data = {
  //     [timeValue.name]: debouncedCurrentValue
  //   };
  //   dispatch(changeGameByTimeValue({ id: timeValue.id, data, category_id: id }));
  //   console.log(data);
  //   setTimeValue({ name: '', value: 0, id: 0 });
  // }, [debouncedCurrentValue]);

  useEffect(() => {
    setData(gameList);
  }, [gameList]);

  useEffect(() => {
    async function fetchData() {
      if (gameRequest && !gameList.length) {
        await dispatch(getTeamsList({ params: { subcategory: id } }));
        createGameForAllTeams();
      }
    }
    fetchData();
  }, [gameRequest]);

  useEffect(() => {
    async function fetchData() {
      await dispatch(getAllGamesByTimeList({ params }));
      setGameRequest(true);
    }
    fetchData();

    return () => dispatch(clear());
  }, []);

  return (
    <div className="m-20 flex flex-col gap-4">
      <div className="flex basis-full gap-8">
        {participantsTableHead.map((item) => (
          <p key={item} className="flex-1 m-1">
            {item}
          </p>
        ))}
      </div>
      {data?.map((game, index) => (
        <div key={game.team.id} className="flex items-center gap-8">
          <p className="flex-1">{index + 1} </p>
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">{game.team.participant}</Typography>
                <Typography color="inherit">{game.game.name}</Typography>
              </React.Fragment>
            }>
            <p onClick={() => onChangeStatusIsActive(true, game.team.id)} className="flex-1">
              {game.team.name}
            </p>
          </HtmlTooltip>

          <p className="flex-1">{game.team.school}</p>
          <Checkbox
            checked={game.team.is_arrived}
            onChange={(e) => onChangeStatusIsVisited(e.target.checked, game.team.id)}
            className="flex-1"
          />
          <TextField
            onChange={(e) => onChangeValue('first_time', e.target.value, game.id, index)}
            value={timeValue && timeValue.id === game.id ? timeValue.value : game.first_time}
            type="number"
            className="flex-1"
          />
          <TextField
            onChange={(e) => {
              onChangeValue('second_time', e.target.value, game.id, index);
              setTimeValue(e.target.value);
            }}
            value={game.second_time}
            type="number"
            className="flex-1"
          />
          <TextField
            onChange={(e) => {
              onChangeValue('third_time', e.target.value, game.id, index);
              setTimeValue(e.target.value);
            }}
            value={game.third_time}
            type="number"
            className="flex-1"
          />
          <div className="flex-1 bg-amber-300">
            <TextField className="text-center" value={game.least_time} disabled type="number" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameByTime;
