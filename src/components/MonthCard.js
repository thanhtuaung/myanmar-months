import React from "react";
import { Link } from "react-router-dom";

const MonthCard = ({ month }) => {
  return (
    <div className="px-2" data-aos="zoom-in" data-aos-duration="1300">
      <Link to={`/months/${month.id}`}>
        <div className="month-card">
          <div>
            <img
              src={require(`../img/${month.id}.jpg`)}
              alt=""
              style={{ width: "100%", height: "200px" }}
            />
          </div>
          <p>{month.MonthMm}</p>
        </div>
      </Link>
    </div>
  );
};

export default MonthCard;
