import React from "react";
import "../styles/Information.css"

const Information = (props) => {
  const { infos } = props;

  return (
    <ul className="final-cv">
        <li className="final-name">{infos.name}</li>
        <span className="phoneEmailSpan">
          <li className="final-email">Email: {infos.email}</li>
          <li className="final-phone">Phone: {infos.phone}</li>
        </span>
        <p className="lineBreak"></p>

        <span className="schoolSpan">
          <li className="final-school">{infos.school}</li>
          <li className="final-study">{infos.study}</li>
          <li className="final-studyDate">{infos.studyDate}</li>
        </span>
        <p className="lineBreak"></p>

        <li className="final-company">{infos.company}</li>
        <li className="final-position">{infos.position}</li>
        <li className="final-description">{infos.description}</li>

        <span className="dateSpan">
          <li className="final-dateFrom">From: {infos.dateFrom}</li>
          <li className="final-dateUntil">Until: {infos.dateUntil}</li>
        </span>
        <p className="lineBreak"></p>
    </ul>
  );
};

export default Information;
