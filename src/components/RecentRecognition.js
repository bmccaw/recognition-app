import React, { useEffect, useState } from "react";

const RecentRecognition = () => {
  const [historicData, setHistoricData] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const result = await fetch(
          `https://yfvnkbux6j.execute-api.us-east-1.amazonaws.com/history/`,
          {
            method: `GET`,
          }
        );

        const body = await result.json();
        console.log('history', body);
        setHistoricData(body);
      } catch (err) {
        console.log(err);
        return null;
      }
    };
    fetchHistory();
  }, []);
  return (
  <>
    <h2>Recent Recognition</h2>
    <table className="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Submitted By</th>
        <th>Gift Level</th>
        <th>Text</th>
      </tr>
      </thead>
      <tbody>
      {historicData.map((history) => {
        return (
          <tr key={history.id}>
            <td>{history.name}</td>
            <td>{history.submittedBy}</td>
            <td>{history.level}</td>
            <td>{history.text}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  </>
  );
};

export default RecentRecognition;
