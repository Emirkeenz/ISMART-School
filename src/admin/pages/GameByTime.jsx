import React, { useEffect, useState } from 'react';
import { Checkbox, TextField, Tooltip, tooltipClasses, Typography } from '@mui/material';
import { participantsTableHead } from '../constant';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeGameByTimeValue, getAllGamesByTimeList } from '../../redux/game/reducer';
import { useDebounce } from '../../utils/debounce';
import { updateTeam } from '../../redux/teams/reducer';

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
  // const teamList = useSelector((state) => state.team.teamList);
  const gameList = useSelector((state) => state.game.gameList);
  const [timeValue, setTimeValue] = useState({ name: '', value: 0, id: 0 });
  const debouncedCurrentValue = useDebounce(timeValue.value, 500);

  const onChangeStatusIsVisited = (value, id) => {
    const data = {
      is_arrived: value
    };
    dispatch(updateTeam({ id, data }));
    console.log(data);
  };

  const onChangeStatusIsActive = (value, id) => {
    const data = {
      is_active: value
    };
    dispatch(changeGameByTimeValue({ id, data }));
    console.log(data);
  };

  // const createGameForAllTeams = () => {
  //   Promise.all(
  //     teamList.map((team) => {
  //       const data = {
  //         team: team.id,
  //         game: team.subcategory,
  //         first_time: 0,
  //         second_time: 0,
  //         third_time: 0,
  //         least_time: 0
  //       };
  //       dispatch(startGameByTime({ data }));
  //     })
  //   ).then(() => {
  //     console.log('All team registered and games started!');
  //   });
  // };

  useEffect(() => {
    const data = {
      [timeValue.name]: debouncedCurrentValue
    };
    dispatch(changeGameByTimeValue({ id: timeValue.id, data }));
    console.log(data);
  }, [debouncedCurrentValue]);

  useEffect(() => {
    // async function fetchData() {
    dispatch(getAllGamesByTimeList());
    // setTimeout(() => {
    //   if (gameList.length === 0) {
    //     dispatch(getTeamsList());
    //     createGameForAllTeams();
    //   }
    // }, 1000);
    // }
    // fetchData();
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
      {gameList.map((game) => (
        <div key={game.team.id} className="flex items-center gap-8">
          <p className="flex-1">{game.team.id} </p>
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
            onChange={(e) => {
              setTimeValue({ name: 'first_time', value: +e.target.value, id: game.team.id });
            }}
            type="number"
            className="flex-1"
          />
          <TextField
            onChange={(e) => {
              setTimeValue({ name: 'second_time', value: +e.target.value, id: game.team.id });
            }}
            type="number"
            className="flex-1"
          />
          <TextField
            onChange={(e) => {
              setTimeValue({ name: 'third_time', value: +e.target.value, id: game.team.id });
            }}
            type="number"
            className="flex-1"
          />
          <div className="flex-1 bg-amber-300">
            <TextField disabled type="number" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameByTime;
