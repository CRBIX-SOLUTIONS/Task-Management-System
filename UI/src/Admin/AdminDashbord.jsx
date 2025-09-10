import React from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("userId");
      navigate("/");
    }
  };
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        background: "rgb(169 173 179)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "linear-gradient(to right, #006f8e, #00bcd4)",
          color: "white",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderEndStartRadius: "50px",
          borderEndEndRadius: "50px",
          minHeight: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* <img src="" alt="logo" style={{ height: "40px" }} /> */}
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 600 }}>
            CRBIX SOLUTIONS
          </h2>
        </div>
        <div
          onClick={handleLogout}
          style={{ fontSize: "40px", cursor: "pointer", color: "black" }}
        >
          <PowerSettingsNewIcon />
          <p
            style={{
              fontWeight: "800",
              fontSize: "13px",
              margin: "-10px -7px -10px",
              color: "black",
            }}
          >
            LogOut
          </p>
        </div>
      </header>

      {/* Main layout */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {/* Left Side */}
        <div
          style={{
            flex: "1 1 250px",
            background: "rgb(207 207 207)",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            padding: "20px",
            minHeight: "300px",
          }}
        >
          <div
            style={{
              margin: "auto",
              width: "90px",
              height: "90px",
              background: "linear-gradient(to right, #006f8e, #00bcd4)",
              borderRadius: "50%",
              marginBottom: "25px",
            }}
          ></div>
          <div
            style={{
              background: "#018ea3",
              padding: "15px",
              borderRadius: "12px",
              marginBottom: "25px",
              color: "white",
              textAlign: "center",
            }}
          >
            In Time: <br /> Out Time:
          </div>
          <div
            style={{
              background: "#018ea3",
              padding: "15px",
              borderRadius: "12px",
              marginBottom: "25px",
              color: "white",
              textAlign: "center",
            }}
          >
            No of tasks Assigned
          </div>
          <div
            style={{
              background: "#018ea3",
              padding: "15px",
              borderRadius: "12px",
              color: "white",
              textAlign: "center",
            }}
          >
            <p>No of Hrs Logged In</p>
          </div>
        </div>

        {/* Right Side */}
        <div
          style={{
            flex: "3 1 600px",
            background: "rgb(207 207 207)",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            minHeight: "300px",
          }}
        >
          {/* Filters */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <select style={dropdownStyle}>
              <option>Filter 1</option>
            </select>
            <select style={dropdownStyle}>
              <option>Filter 2</option>
            </select>
            <select style={dropdownStyle}>
              <option>Filter 3</option>
            </select>
          </div>

          {/* Task & Escalations */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              flex: 1,
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "center",
              }}
            >
              <thead>
                <tr style={{ background: "#e0f7fa" }}>
                  <th style={thStyle}>Emp Name</th>
                  <th style={thStyle}>Task Assigned</th>
                  <th style={thStyle}>Task Status</th>
                  <th style={thStyle}>Emp Work Hrs</th>
                  <th style={thStyle}>No of Tasks Left</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Name</td>
                  <td style={tdStyle}>Task Summary</td>
                  <td style={tdStyle}>
                    <select style={{ padding: "5px", borderRadius: "6px" }}>
                      <option>-- Select --</option>
                      <option>In Progress</option>
                      <option>Completed</option>
                    </select>
                  </td>
                  <td style={tdStyle}>
                    In: <br />
                    Out: <br />
                    Hrs:
                  </td>
                  <td style={tdStyle}>
                    <input
                      type="number"
                      placeholder="0"
                      style={{
                        padding: "5px",
                        width: "60px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const dropdownStyle = {
  padding: "10px",
  borderRadius: "12px",
  background: "linear-gradient(to right, #006f8e, #00bcd4)",
  color: "white",
  border: "none",
  flex: "1 1 200px",
  minWidth: "150px",
};

const cardBoxStyle = {
  background: "linear-gradient(to right, #006f8e, #00bcd4)",
  borderRadius: "12px",
  color: "white",
  padding: "15px",
  minHeight: "200px",
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #0a0a0aff",
  // borderRadius:"10px",
};
const thStyle = {
  // borderRadius:"10px",
  padding: "12px",
  border: "1px solid #0c0c0cff",
  fontWeight: "bold",
};

export default AdminDashboard;
