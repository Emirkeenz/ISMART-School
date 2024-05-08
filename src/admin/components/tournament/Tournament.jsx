import React, { useState } from 'react';
import './Tournament.css';

const Tournament = () => {
  const [teams] = useState(['Team A', 'Team B', 'Team C', 'Team D']);
  const [results] = useState([
    { match: ['Team A', 'Team B'], winner: 'Team A' },
    { match: ['Team A', 'Team C'], winner: 'Team C' },
    { match: ['Team A', 'Team D'], winner: null },
    { match: ['Team B', 'Team C'], winner: null },
    { match: ['Team B', 'Team D'], winner: null },
    { match: ['Team C', 'Team D'], winner: null }
  ]);

  const generateFixture = () => {
    // Реализация генерации фикстуры
  };

  return (
    <div className="tournament-container">
      <h2>Tournament</h2>
      {results.length > 0 && (
        <div>
          <h3>Results</h3>
          <table>
            <thead>
              <tr>
                <th></th>
                {teams.map((team, index) => (
                  <th key={index}>{team}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {teams.map((team1, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{team1}</td>
                  {teams.map((team2, colIndex) => {
                    const matchResult = results.find(
                      (result) =>
                        (result.match[0] === team1 && result.match[1] === team2) ||
                        (result.match[0] === team2 && result.match[1] === team1)
                    );
                    return (
                      <td key={colIndex}>
                        {matchResult ? (matchResult.winner ? '1 : 0' : '0 : 1') : '-'}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div>
        <h3>Teams</h3>
        <ul>
          {teams.map((team, index) => (
            <li key={index}>{team}</li>
          ))}
        </ul>
        <button onClick={generateFixture}>Generate Fixture</button>
      </div>
    </div>
  );
};

export default Tournament;
