// import React, { useEffect, useState } from 'react';
// import { categoriesList, categoriesListHead } from '../constant';

const GameByTable = () => {
  //   const [value, setValue] = useState();
  //   const [team1, setTeam1] = useState();
  //   const [team2, setTeam2] = useState();
  //
  //   useEffect(() => {
  //     if (value) console.log(value, team1, team2);
  //     setValue(0);
  //   }, [value]);
  //
  //   return (
  //     <div>
  //       <table className="">
  //         <thead>
  //           <tr>
  //             {categoriesListHead.map((item) => (
  //               <th key={item.id}>{item.team1?.name}</th>
  //             ))}
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {categoriesList.map((row) => (
  //             <tr key={row.id}>
  //               <td>
  //                 <p className="w-40 font-bold">{row.team1.name}</p>
  //               </td>
  //               {categoriesList.map((col, index) => (
  //                 <td key={col.id}>
  //                   <div
  //                     className={`border-2 h-16 p-3 flex items-center ${row.id === categoriesListHead[index + 1]?.id && 'bg-amber-200'}`}>
  //                     {row.id !== categoriesListHead[index + 1].id && (
  //                       <>
  //                         <input
  //                           className="border h-full w-10 m-1 text-center"
  //                           onChange={(e) => {
  //                             setTeam1(row);
  //                             setTeam2(categoriesListHead[index + 1]);
  //                             setValue(e.target.value);
  //                           }}
  //                           value={col.score_team1}
  //                           type="text"
  //                         />
  //                         :
  //                         <input
  //                           className="border h-full w-10 m-1 text-center"
  //                           onChange={(e) => {
  //                             setTeam1(row);
  //                             setTeam2(categoriesListHead[index + 1]);
  //                             setValue(e.target.value);
  //                           }}
  //                           value={col.score_team2}
  //                           type="text"
  //                         />
  //                       </>
  //                     )}
  //                   </div>
  //                 </td>
  //               ))}
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   );
};

export default GameByTable;
