import React, { useEffect, useState } from 'react';
import { categoriesList, categoriesListHead } from '../constant';

const GameByTable2 = () => {
  // const [value, setValue] = useState();
  // const [team1, setTeam1] = useState();
  // const [team2, setTeam2] = useState();
  const [matrix, setMatrix] = useState([]);
  //
  // useEffect(() => {
  //   if (value) console.log(value, team1, team2);
  //   setValue(0);
  // }, [value]);

  // let matrix = [];
  const onChangeValue = (col_idx, row_idx, value, field, game_id) => {
    matrix[row_idx][col_idx][field] = value;
    setMatrix([...matrix.map((row) => [...row])]);
    const data = {
      id: game_id,
      [field]: value
    };
    console.log(data);
  };

  // Fill matrix with absolute difference of scores
  useEffect(() => {
    let matrix = [];
    for (let i = 0; i < categoriesList.length; i++) {
      matrix[i] = [];
      for (let j = 0; j < categoriesList.length; j++) {
        matrix[i][j] = {
          id: categoriesList[i].id,
          team1: categoriesList[i].team1,
          team2: categoriesList[j].team2,
          score_team1: categoriesList[i].score_team1,
          score_team2: categoriesList[j].score_team2
        };
      }
    }
    setMatrix(matrix);
  }, []);

  // console.log(matrix);

  return (
    <div>
      <table className="">
        <thead>
          {/*<tr>*/}
          {/*  {categoriesListHead.map((item) => (*/}
          {/*    <th key={item.id}>{item.team1?.name}</th>*/}
          {/*  ))}*/}
          {/*</tr>*/}
        </thead>
        <tbody>
          {matrix.map((row, idx) => (
            <tr key={row.id}>
              <td>
                <p className="w-40 font-bold">{row[1].team1.name}</p>
              </td>
              {row.map((col, col_index) => (
                <td key={col.id}>
                  <div
                    className={`border-2 h-16 p-3 flex items-center ${col.id === categoriesListHead[col_index + 1]?.id && 'bg-amber-200'}`}>
                    {col.id !== categoriesListHead[col_index + 1].id && (
                      <>
                        <input
                          className="border h-full w-10 m-1 text-center"
                          onChange={(e) => {
                            onChangeValue(col_index, idx, e.target.value, 'score_team1', col.id);
                          }}
                          value={col.score_team1}
                          type="text"
                        />
                        :
                        <input
                          className="border h-full w-10 m-1 text-center"
                          onChange={(e) => {
                            onChangeValue(col_index, idx, e.target.value, 'score_team2', col.id);
                          }}
                          value={col.score_team2}
                          type="text"
                        />
                      </>
                    )}
                  </div>
                </td>
              ))}
              <td>
                <p className="w-40 font-bold">{row[idx].team1.round_robin_total}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameByTable2;
