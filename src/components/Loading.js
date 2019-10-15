import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return (
    <div className="spinner mx-auto text-center loadingCenter">
      <FontAwesomeIcon icon={faCompactDisc} spin size="4x" />
    </div>
  );
};

export default Loading;
