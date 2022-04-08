import React from "react";

function Profile(props) {
  const buttonStyle = {
    color: "white",
    backgroundColor: "blue",
    height: 30,
    width: 100,
    borderRadius: 7,
    border: "none",
    marginTop: 20,
  };
  const bodyStyle = {
    marginTop: 30,
  };

  return (
    <div style={bodyStyle}>
      <div>{props.children}</div>
      <h1>{props.fullName}</h1>
      <h2>{props.profession}</h2>
      <p>{props.bio}</p>
      <button
        style={buttonStyle}
        onClick={() => props.handleName(`My name is ${props.fullName}`)}
      >
        ClickMe
      </button>
    </div>
  );
}

Profile.defaultProps = {
  fullName: "Temiloluwa Olowo",
  profession: "Student",
  bio: "A fullstack Javascript student at GoMyCode",
  children: (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQoG6J5c964rS4k4QqvIxLaov92JVYEzD4A&usqp=CAU"
      alt=""
    />
  ),
};

export default Profile;
