import React, { useEffect, useMemo, useState } from 'react';
import { categoriesList, getCategoriesNames } from '../constant';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllGamesByRoundRobin, getAllSumoFinalists } from '../../redux/game/reducer';

const GameByTable2 = () => {
  // const [value, setValue] = useState();
  // const [team1, setTeam1] = useState();
  // const [team2, setTeam2] = useState();
  // const teamList = useSelector((state) => state.team.teamList);
  const gameBYRoundRobin = useSelector((state) => state.game.gameRoundRobinList);
  // const sumoFinalists = useSelector((state) => state.game.sumoFinalists);
  const [matrix, setMatrix] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();
  const names = useMemo(() => getCategoriesNames(gameBYRoundRobin), [gameBYRoundRobin]);
  //
  // useEffect(() => {
  //   if (value) console.log(value, team1, team2);
  //   setValue(0);
  // }, [value]);

  // let matrix = [];

  // const onChangeValue = (col_idx, row_idx, value, field, game_id) => {
  //   matrix[row_idx][col_idx][field] = value;
  //   setMatrix([...matrix.map((row) => [...row])]);
  //   const data = {
  //     id: game_id,
  //     [field]: value
  //   };
  //   console.log({ data, col_idx, row_idx });
  // };

  // function createPairs(array) {
  //   const pairs = [];
  //
  //   for (let i = 0; i < array.length; i++) {
  //     for (let j = i + 1; j < array.length; j++) {
  //       pairs.push([array[i], array[j]]);
  //     }
  //   }
  //   return pairs;
  // }

  // const createGameForAllTeams = () => {
  //   Promise.all(
  //     createPairs(teamList).map((pair) => {
  //       const data = {
  //         team1: pair[0].id,
  //         team2: pair[1].id,
  //         score_team1: 0,
  //         score_team2: 0
  //       };
  //       dispatch(startGameByRoundRobin({ data }));
  //     })
  //   ).then(() => {
  //     console.log('All team registered and games started!');
  //   });
  // };
  // Fill matrix with absolute difference of scores

  // const pairs = createPairs(teamList);

  // console.log('resss: ', pairs);

  // function createBracket(matches) {
  //   const bracket = [];
  //   const numberOfMatches = matches.length / 2;
  //
  //   for (let i = 0; i < numberOfMatches; i++) {
  //     bracket.push([matches[i], matches[matches.length - 1 - i]]);
  //   }
  //
  //   return bracket;
  // }

  // useEffect(() => {
  //   let matrix = [];
  //   for (let i = 0; i < categoriesList.length; i++) {
  //     matrix[i] = [];
  //     for (let j = 0; j < categoriesList.length; j++) {
  //       matrix[i][j] = {
  //         id: categoriesList[i].id,
  //         team1: categoriesList[i].team1,
  //         team2: categoriesList[j].team2,
  //         score_team1: categoriesList[i].score_team1,
  //         score_team2: categoriesList[j].score_team2
  //       };
  //     }
  //   }
  //
  //   setMatrix(matrix);
  //   dispatch(getAllGamesByRoundRobin({ params: { subcategory: id } }));
  //   dispatch(getTeamsList({ params: { subcategory: id } }));
  //   createGameForAllTeams();
  //   console.log('matrix222: ', createBracket(categoriesList));
  // }, []);

  // useEffect(() => {
  //   const temp = [];
  //   for (let i = 0; i < categoriesList.length; i++) {
  //     temp[i] = [];
  //     for (let j = i; j < categoriesList.length + i; j++) {
  //       const idx = j % categoriesList.length;
  //       temp[i].push(categoriesList[idx]);
  //     }
  //   }
  //   console.log(temp);
  //   setMatrix(temp);
  // }, []);

  useEffect(() => {
    dispatch(getAllGamesByRoundRobin({ params: { subcategory: id } }));
    dispatch(getAllSumoFinalists());
  }, []);

  useEffect(() => {
    const temp = [];
    for (let i = 0; i < names.length; i++) {
      const name1 = names[i];
      temp[i] = [];
      for (let j = 0; j < names.length; j++) {
        const name2 = names[j];
        if (name1 === name2) {
          temp[i].push(null);
        } else {
          const target = categoriesList.find((item) => {
            const isFirstCond = item.team1.name === name1 && item.team2.name === name2;
            const isSecondCond = item.team1.name === name2 && item.team2.name === name1;
            return isFirstCond || isSecondCond;
          });
          temp[i].push(target);
        }
      }
    }
    console.log({ temp, gameBYRoundRobin, matrix });
    setMatrix(temp);
  }, [gameBYRoundRobin]);

  console.log({ matrix });

  return (
    <div>
      {/*<table>*/}
      {/*  <thead>*/}
      {/*    <td></td>*/}
      {/*    {names.map((item) => (*/}
      {/*      <td key={item.id}>{item}</td>*/}
      {/*    ))}*/}
      {/*  </thead>*/}
      {/*  <tbody>*/}
      {/*    {matrix.map((row, rowIdx) => (*/}
      {/*      <tr key={row.id}>*/}
      {/*        <td>{names[rowIdx]}</td>*/}
      {/*        {row.map((col, colIdx) => {*/}
      {/*          if (rowIdx === colIdx) {*/}
      {/*            return (*/}
      {/*              <>*/}
      {/*                <td></td>*/}
      {/*              </>*/}
      {/*            );*/}
      {/*          }*/}
      {/*          if (rowIdx >= colIdx)*/}
      {/*            return (*/}
      {/*              <td key={col.id}>*/}
      {/*                <input*/}
      {/*                  className="border h-full w-10 m-1 text-center"*/}
      {/*                  onChange={(e) =>*/}
      {/*                    onChangeValue(colIdx, rowIdx, e.target.value, 'score_team1', col.id)*/}
      {/*                  }*/}
      {/*                  value={col.score_team1}*/}
      {/*                  type="text"*/}
      {/*                />*/}
      {/*                :*/}
      {/*                <input*/}
      {/*                  className="border h-full w-10 m-1 text-center"*/}
      {/*                  onChange={(e) =>*/}
      {/*                    onChangeValue(colIdx, rowIdx, e.target.value, 'score_team2', col.id)*/}
      {/*                  }*/}
      {/*                  value={col.score_team2}*/}
      {/*                  type="text"*/}
      {/*                />*/}
      {/*              </td>*/}
      {/*            );*/}
      {/*          return (*/}
      {/*            <td key={col.id}>*/}
      {/*              <input*/}
      {/*                className="border h-full w-10 m-1 text-center"*/}
      {/*                onChange={(e) =>*/}
      {/*                  onChangeValue(colIdx, rowIdx, e.target.value, 'score_team2', col.id)*/}
      {/*                }*/}
      {/*                value={col.score_team2}*/}
      {/*                type="text"*/}
      {/*              />*/}
      {/*              :*/}
      {/*              <input*/}
      {/*                className="border h-full w-10 m-1 text-center"*/}
      {/*                onChange={(e) =>*/}
      {/*                  onChangeValue(colIdx, rowIdx, e.target.value, 'score_team1', col.id)*/}
      {/*                }*/}
      {/*                value={col.score_team1}*/}
      {/*                type="text"*/}
      {/*              />*/}
      {/*            </td>*/}
      {/*          );*/}
      {/*        })}*/}
      {/*      </tr>*/}
      {/*    ))}*/}
      {/*  </tbody>*/}
      {/*</table>*/}
      <table>
        <thead>
          <td></td>
          {names.map((item) => (
            <td key={item.id}>{item}</td>
          ))}
        </thead>
        <tbody>
          {matrix.map((row, rowIdx) => (
            <tr key={row.id}>
              <td>{names[rowIdx]}</td>
              {row.map((col, colIdx) => {
                if (col === null) return <td key={col.id}></td>;
                if (col === undefined) return <td key={col.id}>0:0</td>;
                if (rowIdx >= colIdx)
                  return (
                    <td key={col.id}>
                      {col.score_team1} : {col.score_team2}
                    </td>
                  );
                return (
                  <td key={col.id}>
                    {col.score_team2} : {col.score_team1}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameByTable2;
