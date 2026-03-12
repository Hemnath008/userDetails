import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./index.css";

function  Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://699b0ad5377ac05ce28f4e40.mockapi.io/users/Users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Users Data:", data);
        setUsers(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <div className="container">
      {users.map((user, i) => (

        <Card key={i} sx={{ width: 300, margin: "2px", padding: "20px", borderRadius : "12px", borderLeft : "5px solid black" }} >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              User Details
            </Typography>

            <Typography variant="body1">
              <strong>First Name:</strong> {user.FirstName}
            </Typography>

            <Typography variant="body1">
              <strong>Last Name:</strong> {user.LastName}
            </Typography>

            <Typography variant="body1">
              <strong>Phone:</strong> {user.PhoneNumber}
            </Typography>

            <Typography variant="body1">
              <strong>Email:</strong> {user.EmailId}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Users;
