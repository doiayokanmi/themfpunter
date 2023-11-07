import { getData } from "@/sanity-utils";
import React, { useEffect, useState } from "react";

const Table = ({ currentDate }: { currentDate: string }) => {
  interface Item {
    homeTeam: string;
    awayTeam: string;
    time: string;
    prediction: string;
    correctScore: string;
    league: string;
    outcome: string;
    _createdAt: string;
    date: string;
    odd: string;
  }

  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchData() {
      const allData = await getData();

      const dataToday = allData.filter((item: Item) => {
        const itemDate = item.date.split("T")[0];
        return itemDate === currentDate;
      });

      setData(dataToday);
    }

    fetchData();
  }, [currentDate]);

  return (
    <>
      {data.length > 0 ? (
        <table className="w-full text-xs lg:text-base">
          <thead>
            <tr>
              <th className="p-2 py-4 text-left">S/N</th>
              <th className="p-2 py-4 text-left">Match</th>
              <th className="p-2 py-4 text-center">Tips</th>
              <th className="p-2 py-4 text-center hidden lg:block">
                Predicted CS
              </th>
              <th className="p-2 py-4 text-left">League</th>
              <th className="p-2 py-4 text-center">Outcome</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: Item, index: number) => (
              <tr key={index} className="even:bg-slate-100">
                <td className="p-2 py-4">{index + 1}</td>
                <td className="p-2 py-4 capitalize">
                  <div>
                    <p>
                      {item.homeTeam} vs {item.awayTeam}
                    </p>
                    <div className="mt-2 flex"><p>🕗{item.time}</p> <p className="lg:ms-16 ms-8">🔢{item.odd}</p></div>
                  </div>
                </td>
                <td className="p-2 py-4 text-center">{item.prediction}</td>
                <td className="p-2 py-4 text-center hidden lg:block">
                  {item.correctScore}
                </td>
                <td className="p-2 py-4">{item.league}</td>
                <td className="p-2 py-4 text-center relative group">
                  <div className="absolute text-primary text-xs py-2 w-full h-full left-0 top-0 hidden group-hover:block">
                    {item.outcome}
                  </div>
                  {item.outcome == "won"
                    ? "✔️"
                    : item.outcome == "void"
                    ? "✖️"
                    : item.outcome == "ongoing"
                    ? "⚽️"
                    : item.outcome == "loss"
                    ? "❌"
                    : "🔜"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center flex items-center text-4xl font-bold justify-center  py-24 p-4">NO GAME YET</div>
      )}
    </>
  );
};

export default Table;
