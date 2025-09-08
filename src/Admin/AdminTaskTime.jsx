import React from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const AdminDashboard = () => {
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        background: "rgb(169, 173, 179)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "linear-gradient(to right,  #00bcd4, #006f8e",
          color: "white",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderEndStartRadius: "40px",
          borderEndEndRadius: "40px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* <img src="/logo.png" alt="Career Tech Academy" style={{ height: "40px" }} /> */}
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 600 }}>
            CRBIX SOLUTIONS
          </h2>
        </div>
        <div style={{ fontSize: "50px", cursor: "pointer", color: "black" }}>
          <PowerSettingsNewIcon />
        </div>
      </header>

      {/* Content */}
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          width: "90%",
          maxWidth: "1200px",
          marginTop: "40px",
        }}
      >
        {/* Left Panel */}
        <div
          style={{
            flex: "0.3",
            minWidth: "250px",
            background: "rgb(207 207 207)",
            borderRadius: "16px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(to right,  #00bcd4, #006f8e",
              borderRadius: "50%",
            }}
          ></div>

          <div
            style={{
              background: "#4bb9c9",
              color: "black",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
              fontWeight: 600,
              width: "100%",
            }}
          >
            In Time: <br /> Out Time:
          </div>

          <div
            style={{
              background: "#4bb9c9",
              color: "black",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
              fontWeight: 600,
              width: "100%",
              height:"50px",
              textAlignLast:"center"
            }}
          >
            <p>No of Tasks Assigned</p>
          </div>

          <div
            style={{
              background: "#4bb9c9",
              color: "black",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
              fontWeight: 600,
              width: "100%",
              height:"50px",
              textAlignLast:"center"
            }}
          >
            <p>No of Hrs Logged In</p>
          </div>
        </div>

        {/* Right Panel */}
        <div
          style={{
            flex: "0.7",
            minWidth: "280px",
            background: "rgb(207 207 207)",
            borderRadius: "16px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Dropdowns */}
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

          {/* Cards */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                flex: 1,
                minWidth: "250px",
                background: "#4bb9c9",
                padding: "20px",
                borderRadius: "12px",
                textAlign: "center",
                fontWeight: 600,
                color: "black",
              }}
            >
              <p>Name of Employees whose <br/>Tasks Are Due</p>
              <select
                style={{
                  marginTop: "15px",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "1px solid #666",
                  width: "90%",
                }}
              >
                <option>Employee List</option>
              </select>
            </div>

            <div
              style={{
                flex: 1,
                minWidth: "250px",
                background: "#4bb9c9",
                padding: "20px",
                borderRadius: "12px",
                textAlign: "center",
                fontWeight: 600,
                color: "black",
              }}
            >
              <p>Name of Employees Who <br/>Escalated the Tasks</p>
              <select
                style={{
                  marginTop: "15px",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "1px solid #666",
                  width: "90%",
                }}
              >
                <option>Employee List</option>
              </select>
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

export default AdminDashboard;
