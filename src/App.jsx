import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [friends, setFriends] = useState([
    {
      id: 1,
      name: "Devansh Shingh Thakur",
      isFriend: false,
      image: "https://i.pinimg.com/736x/0a/84/5f/0a845f819072aa2c0b6acc6007eda410.jpg", 
    },
    {
      id: 2,
      name: "Chandrprakash Rathore",
      isFriend: false,
      image: "https://i.pinimg.com/236x/c3/06/93/c306933012eb840e84f77f5e6064fd1e.jpg", // Placeholder image
    },
    {
      id: 3,
      name: "Anurag Shingh Rajpoot",
      isFriend: false,
      image: "https://i.pinimg.com/736x/a0/b6/fe/a0b6fec6e21d67c347e4533154355377.jpg", // Placeholder image
    },
  ]);

  const handleFriendToggle = (id) => {
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === id
          ? { ...friend, isFriend: !friend.isFriend }
          : friend
      )
    );
  };

  return (
    <div className="container">
      <h1 className="title">NayeDost.com</h1>
      <div className="list">
        {friends.map((friend) => (
          <div key={friend.id} className="card">
            <img src={friend.image} alt={friend.name} className="avatar" />
            <div className="info">
              <p className="name">{friend.name}</p>
              <button
                className={`button ${friend.isFriend ? "remove" : "add"}`}
                onClick={() => handleFriendToggle(friend.id)}
              >
                {friend.isFriend ? "Remove Friend" : "Add Friend"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
