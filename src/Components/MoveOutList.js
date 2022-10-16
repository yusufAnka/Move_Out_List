import React from "react";
import List from "../../src/moveOutList.json";
import './MoveOutList.css'

const MoveOutList = () => {
  return (
    <div>
        <div className="container">
          <h2>Move-out-listx</h2>
          <table className="styled-table">
            <thead className="table-header">
              <tr>
                <th>Move-out Date</th>
                <th>ID</th>
                <th>Address</th>
                <th>Room</th>
                <th>Location</th>
                <th>Last Occupant</th>
                <th>UID</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {List.map((MoveList, index) => (
                <tr className="table-row">
                    <td>
                      {MoveList.move_out_date}
                    </td>
                    <td>{MoveList.id}</td>
                    <td>
                      <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                        <img className="img" src={MoveList.icon} />
                        <span>{MoveList.address}</span>
                      </div></td>
                    <td>{MoveList.room}</td>
                    <td>{MoveList.location}</td>
                    <td>{MoveList.lastOccupant}</td>
                    <td>{MoveList.UID}</td>
                    <td>{MoveList.Balance}</td>
                    <td className="dropdown">
                      <button className="btn" >Flip room</button>
                    </td>
                    </tr>
                    ))}
                </tbody>
          </table>
        </div>
    </div>
  );
};

export default MoveOutList;

   