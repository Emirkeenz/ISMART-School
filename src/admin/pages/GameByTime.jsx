import React from 'react';
import { Checkbox, TextField, Tooltip, tooltipClasses, Typography } from '@mui/material';
import { mockTeamData, participantsTableHead } from '../constant';
import styled from 'styled-components';

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
  return (
    <div className="m-20 flex flex-col gap-4">
      <div className="flex basis-full gap-8">
        {participantsTableHead.map((item) => (
          <p key={item.id} className="flex-1 m-1">
            {item.title}
          </p>
        ))}
      </div>
      {mockTeamData.map((team) => (
        <div key={team.id} className="flex items-center gap-8">
          <p className="flex-1">{team.id} </p>
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">{team.participant}</Typography>
                <Typography color="inherit">{team.subcategory}</Typography>
              </React.Fragment>
            }>
            <p className="flex-1">{team.name}</p>
          </HtmlTooltip>

          <p className="flex-1">{team.school}</p>
          <Checkbox className="flex-1" />
          <TextField type="number" className="flex-1" />
          <TextField type="number" className="flex-1" />
          <TextField type="number" className="flex-1" />
          <div className="flex-1 bg-amber-300">
            <TextField type="number" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameByTime;
