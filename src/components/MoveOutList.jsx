import React from "react";
import "./moveOutList.css";

import { useDispatch, useSelector } from "react-redux";
import { increaseRooms } from "../store/reducer/moveOutListReducer";

const MoveOutList = () => {
  const { rooms } = useSelector((state) => state.room);
  const dispatch = useDispatch();

  const flipButton = (id, room) => {
    dispatch(increaseRooms({ id: id, room: room }));
  };

  return (
    <div className="container">
      <h1 className="heading">Move-Out List</h1>
      <table className="table">
        <thead className="tableHead">
          <tr>
            <th>Move out data</th>
            <th>Id</th>
            <th>Address</th>
            <th>Room</th>
            <th>Location</th>
            <th>LastOccupant</th>
            <th>UID</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody className="t-body">
          {rooms.map((data, index) => (
            <tr key={index}>
              <td>{data.move_out_date}</td>
              <td>{data.id}</td>
              <td>
                <div style={{display:"flex"}}>
                  <img className="image" src={data.image} alt="" />
                  <span style={{marginLeft:"1rem"}}>{data.address}</span>
                </div>
              </td>
              <td>{data.room}</td>
              <td>{data.location}</td>
              <td>{data.lastOccupant}</td>
              <td>{data.uid}</td>
              <td>{data.balance}</td>
              <td>
                <button
                  className="button"
                  onClick={(e) => {
                    e.preventDefault();
                    flipButton(data.id, data.room);
                  }}
                >
                  Flip room
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoveOutList;