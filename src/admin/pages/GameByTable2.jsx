import React, { useState } from 'react';
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

  // Fill matrix with absolute difference of scores
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
  // console.log(matrix);

  const onChangeValue = (col_idx, value, field, row_idx) => {
    setMatrix((prevMatrix) => {
      return prevMatrix.map((row, rowIndex) => {
        if (rowIndex === row_idx) {
          return row.map((col, colIndex) => {
            if (colIndex === col_idx) {
              return {
                ...col,
                [field]: value
              };
            }
            return col;
          });
        }
        return row;
      });
    });
  };

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
                <p className="w-40 font-bold">{row.team1}</p>
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
                            onChangeValue(col_index, e.target.value, 'score_team1', idx);
                          }}
                          value={col.score_team1}
                          type="text"
                        />
                        :
                        <input
                          className="border h-full w-10 m-1 text-center"
                          onChange={(e) => {
                            onChangeValue(col.id, e.target.value, 'score_team2', idx);
                          }}
                          value={col.score_team2}
                          type="text"
                        />
                      </>
                    )}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameByTable2;
