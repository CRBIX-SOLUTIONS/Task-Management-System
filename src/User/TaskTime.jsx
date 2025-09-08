import React from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const TaskTime = () => {
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
        <div style={{ fontSize: "40px", cursor: "pointer", color: "black" }}>
          <PowerSettingsNewIcon />
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
              marginBottom: "20px",
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
              color: "white",
              textAlign: "center",
            }}
          >
            No of tasks Assigned
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
            <div style={{ ...cardBoxStyle, flex: "2 1 400px" }}>
              <p>Due Task</p>
            </div>
            <div style={{ ...cardBoxStyle, flex: "1 1 250px" }}>
              <p>Escalations</p>
            </div>
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
  minHeight: "250px",
};

export default TaskTime;
