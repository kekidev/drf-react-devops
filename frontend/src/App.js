import "./App.css";
import axios from "axios";
import React from "react";
const baseURL = "http://localhost:8000";

function App() {
  const [users, setUsers] = React.useState(null);

  React.useEffect(() => {
    async function fetchapi() {
      axios.get(baseURL + "/api/users").then((res) => {
        setUsers(res.data);
      });
    }
    fetchapi();
  }, []);

  return (
    <div className="App">
      <h1>hey</h1>
      {users &&
        users.map((user, index) => {
          if (user.username) {
            return (
              <div>
                <h1 key={index}> username: {user.username}</h1>
                <h1 key={index}>email: {user.email}</h1>
              </div>
            );
          }
        })}
    </div>
  );
}

export default App;
