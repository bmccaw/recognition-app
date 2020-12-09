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
    <table className="table">
      <thead>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Level 1</th>
        <th>Level 2</th>
        <th>Level 3</th>
        <th>Level 4</th>
      </tr>
      </thead>
      <tbody>
      {fansData.map((fan) => {
        return (
          <tr key={fan.rank}>
            <td>{fan.rank}</td>
            <td>{fan.name}</td>
            <td>{fan.level1}</td>
            <td>{fan.level2}</td>
            <td>{fan.level3}</td>
            <td>{fan.level4}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};

export default SuperFans;
