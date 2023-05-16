import React from "react";

const Information = (props) => {
  const { infos } = props;

  return (
    <ul>
        <li>{infos.name}</li>
    </ul>
  );
};

export default Information;
