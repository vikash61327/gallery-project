import React from "react";

const Card = ({user}) => {
  return (
    <div>
      <a href={user.url} target="_blank">
        <div className="h-85 w-80 bg-white overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={user.download_url}
            alt="Not Found"
          ></img>
        </div>

        <h2 className="font-bold text-lg text-center">{user.author}</h2>
      </a>
    </div>
  );
};

export default Card;
