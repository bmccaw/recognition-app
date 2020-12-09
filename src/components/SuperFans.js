import React, { useEffect, useState } from "react";

const SuperFans = () => {
  const [fansData, setFansData] = useState([]);

  useEffect(() => {
    const fetchSuperfans = async () => {
      try {
        const result = await fetch(
          `https://yfvnkbux6j.execute-api.us-east-1.amazonaws.com/superfans/`,
          {
            method: `GET`,
          }
        );

        const body = await result.json();
        console.log('superfans', body);
        setFansData(body)
      } catch (err) {
        console.log(err);
        return null;
      }
    };
    fetchSuperfans();
  }, []);
  return (
    <>
    <h2>Superfans!</h2>
    <table className="table">
      <thead>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Gratitude</th>
        <th>Cheers for Peers</th>
        <th>Game Changer</th>
        <th>Raise The Roof!</th>
      </tr>
      </thead>
      <tbody>
      {fansData.map((fan) => {
        return (
          <tr key={fan.rank}>
            <td>{fan.rank}</td>
            <td>{fan.name}</td>
            <td>{fan.level5}</td>
            <td>{fan.level10}</td>
            <td>{fan.level20}</td>
            <td>{fan.level25}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
    </>
  );
};

export default SuperFans;
