import React from "react";

const Table = () => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="p-2 py-4 text-left">S/N</th>
          <th className="p-2 py-4 text-left">Match</th>
          <th className="p-2 py-4 text-left">Tips</th>
          <th className="p-2 py-4 text-left hidden lg:block">Predicted CS</th>
          <th className="p-2 py-4 text-left">League</th>
          <th className="p-2 py-4 text-center">Outcome</th>
        </tr>
      </thead>
      <tbody>
        <tr className="even:bg-slate-100">
          <td className="p-2 py-4">1.</td>
          <td className="p-2 py-4">Manchester United vs Manchester City</td>
          <td className="p-2 py-4">HWEH</td>
          <td className="p-2 py-4 hidden lg:block">2-0</td>
          <td className="p-2 py-4">Premier League</td>
          <td className="p-2 py-4 text-center">🚚</td>
        </tr>
        <tr className="even:bg-slate-100">
          <td className="p-2 py-4">1.</td>
          <td className="p-2 py-4">Manchester United vs Manchester City</td>
          <td className="p-2 py-4">HWEH</td>
          <td className="p-2 py-4 hidden lg:block">2-0</td>
          <td className="p-2 py-4">Bundesliga League</td>
          <td className="p-2 py-4 text-center">🚚</td>
        </tr>
        
      </tbody>
    </table>
  );
};

export default Table;
