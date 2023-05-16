import React from "react";

const Information = (props) => {
  const { infos } = props;

  return (
    <ul>
        <li>{infos.name}</li>
        <li>{infos.email}</li>
        <li>{infos.phone}</li>
        <li>{infos.school}</li>
        <li>{infos.study}</li>
        <li>{infos.studyDate}</li>
        <li>{infos.company}</li>
        <li>{infos.position}</li>
        <li>{infos.description}</li>
        <li>{infos.dateFrom}</li>
        <li>{infos.dateUntil}</li>
    </ul>
  );
};

export default Information;
