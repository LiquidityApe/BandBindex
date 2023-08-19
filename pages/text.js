import React from "react";

const text = () => {
  var Girl = 45;
  const obj = { width: 100, height: 100, border: "2px solid black" };
  const obj3 = {
    width: 100,
    height: 100,
    border: "2px solid black",
    alignSelf: "flex-start",
  };
  const obj2 = {
    width: 800,
    height: 800,
    border: "2px solid green",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  };

  const joy = Girl;
  console.log(joy != 45);
  return (
    <>
      {/* <div style={obj2}>
        <div style={obj}></div>
        <div style={obj}></div>
        <div style={obj3}></div>
        <p style={{ alignSelf: "flex-start" }}></p>
      </div> */}
      <div
        style={{
          width: 700,
          height: 700,
          border: "3px solid blue",
          display: "flex",
          flexDirection: "row",
          padding: 150,
          // justifyContent: "center",
          position: "relative",

          justifyContent: "space-between",
          // alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            border: "2px solid black",
            marginLeft: 40,
          }}
        ></div>
        <div
          style={{ width: 100, height: 100, border: "2px solid black" }}
        ></div>
        <div
          style={{ width: 100, height: 100, border: "2px solid black" }}
        ></div>
        <div
          style={{
            width: 20,
            height: 20,
            backgroundColor: "gold",
            border: "2px solid black",
            position: "absolute",
            bottom: 10,
            right: 10,
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 100,
            border: "2px solid black",
            marginRight: 20,
          }}
        ></div>
      </div>
    </>
  );
};

export default text;

// const Animate = ()=>{}
