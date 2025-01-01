import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import { LiaFlagUsaSolid } from "react-icons/lia";
import pp from "../images/pp.png";
import p4 from "../images/4.png";
import ppp from "../images/ppp.png";
import p5 from "../images/5.png";
import ff from "../images/ff.png";
import p8 from "../images/8.png";
import Invite from "../components/Invite";

const Home = () => {
  const [groupedData, setGroupedData] = useState({
    Setting: [],
    Advanced: [],
    Rules: [],
  });
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/get-data`);
      const data = await response.json();

      const grouped = data.reduce(
        (acc, item) => {
          acc[item.category].push(item);
          return acc;
        },
        { Setting: [], Advanced: [], Rules: [] }
      );

      setGroupedData(grouped);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const capitalize = (text) => text?.toUpperCase() || "";

  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-lg-12 grid-margin">
          <div className="">
            <div className="card-body">
              <div className="d-flex flex-column">
                <h4 className="text-white">! RC3-BASEMAPS</h4>
                <div className="d-flex">
                  <div className="usa me-2">
                    <LiaFlagUsaSolid />
                  </div>
                  <p className="text-white" style={{ font: "0.5px" }}>
                    {" "}
                    CONQUEST LARGE - LANCANG DAM - CUSTOM - 60HZ
                  </p>
                </div>
                <p className="text-white" style={{ font: "3px" }}>
                  Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
                  Request, Appeal, Visit us: www.epg.gg | Discord
                </p>
                <p className="text-white" style={{ font: "3px" }}> https://discord.gg/3r5NK4d</p>
              </div>

              <div className="d-flex gap-2">
                <button
                  type="button"
                  className="btn1 btn-outline-light border py-2 px-5"
                >
                  {" "}
                  JOIN{" "}
                </button>
                <button
                  type="button"
                  className="btn1 btn-outline-light border px-5"
                >
                  SPECTATE
                </button>
                <button
                  type="button"
                  className="btn1 btn-outline-light border px-5"
                >
                  JOIN AS COMMANDER
                </button>
                <button
                  type="button"
                  className="btn1 btn-outline-light border px-5"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <p>
                      <IoMdStar />
                    </p>
                    <p>13672</p>
                  </div>
                </button>
              </div>

              <div className="d-flex mt-3">
                <div className="d-flex flex-column pe-5">
                  <p className="text-white mb-0">PLAYERS</p>
                  <h3 className="text-white">60/64</h3>
                </div>
                <div className="d-flex flex-column px-5">
                  <p className="text-white mb-0">PING</p>
                  <h3 className="text-white">104ms</h3>
                </div>
                <div className="d-flex flex-column ps-5">
                  <p className="text-white mb-0">TICKRATE</p>
                  <h3 className="text-white">60 HZ</h3>
                </div>
              </div>

              <div className="d-flex gap-3">
                <div className="table-responsive ">
                  <table className="table">
                    <thead>
                      <tr className="bg">
                        <th
                          className="bg text-white small-text"
                          style={{ background: "transparent" }}
                        >
                          SETTINGS
                        </th>
                        <th
                          className="bg text-white"
                          style={{ background: "transparent" }}
                        >
                          {" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {groupedData.Setting.map((item, index) => (
                        <tr className="bg hover-row" key={index}>
                          <td
                            className="bg text-white"
                            style={{
                              background: "transparent",
                              padding: "5px 10px",
                            }}
                          >
                            {capitalize(item.name)}
                          </td>
                          <td
                            className="bg text-white"
                            style={{
                              background: "transparent",
                              padding: "5px 10px",
                            }}
                          >
                            {capitalize(item.title)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="table-responsive">
                  <table className="table table-fixed">
                    <thead>
                      <tr className="bg">
                        <th
                          className="bg text-white small-text"
                          style={{ background: "transparent" }}
                        >
                          ADVANCED
                        </th>
                        <th
                          className="bg text-white"
                          style={{ background: "transparent" }}
                        >
                          {" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {groupedData.Advanced.map((item, index) => (
                        <tr className="bg hover-row" key={index}>
                          <td
                            className="bg text-white bge"
                            style={{
                              background: "transparent",
                              padding: "5px 10px",
                            }}
                          >
                            {capitalize(item.name)}
                          </td>
                          <td
                            className="bg text-white"
                            style={{
                              background: "transparent",
                              padding: "5px 10px",
                            }}
                          >
                            {capitalize(item.title)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr className="bg">
                        <th
                          className="bg text-white small-text"
                          style={{ background: "transparent" }}
                        >
                          RULES
                        </th>
                        <th
                          className="bg text-white"
                          style={{ background: "transparent" }}
                        >
                          {" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {groupedData.Rules.map((item, index) => (
                        <tr className="bg hover-row" key={index}>
                          <td
                            className="bg text-white"
                            style={{
                              background: "transparent",
                              padding: "5px 10px",
                            }}
                          >
                            {capitalize(item.name)}
                          </td>
                          <td
                            className="bg text-white"
                            style={{
                              background: "transparent",
                              padding: "5px 10px",
                            }}
                          >
                            {capitalize(item.title)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="">
          <p className="text-white">MAP ROTATION</p>
        </div>

        <div className="">

          <div className="row">
            <div className="col-12 col-lg-3">
              <div className="custom-card">
                <img
                  src={pp} 
                  alt="Card Image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">CONQUEST LARGE</p>
                  <p className="card-text">DAWNBREAKER</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <div className=" custom-card">
                <img
                  src={ppp} 
                  alt="Card Image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">CONQUEST LARGE</p>
                  <p className="card-text">PROPAGANDA</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <div className=" custom-card">
                <img
                  src={p4} 
                  alt="Card Image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">CONQUEST LARGE</p>
                  <p className="card-text">OPERATION LOCKER</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <div className=" custom-card">
                <img
                  src={p5} 
                  alt="Card Image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">CONQUEST LARGE</p>
                  <p className="card-text">LANCANG DAM</p>
                </div>
              </div>
            </div>

          </div>

          <div className="row mt-3">

            <div className="col-12 col-lg-3">
              <div className=" custom-card">
                <img
                  src={p4} 
                  alt="Card Image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">CONQUEST LARGE</p>
                  <p className="card-text">IEGE OF SHANGHAI</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <div className="  custom-card">
                <img
                  src={p5} 
                  alt="Card Image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">CONQUEST LARGE</p>
                  <p className="card-text">GOLMUD RAILWAY</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <div className="  custom-card">
                <img
                  src={ppp} 
                  alt="Card Image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">CONQUEST LARGE</p>
                  <p className="card-text">PROPAGANDA</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <div className="  custom-card">
                <img
                  src={p5} 
                  alt="Card Image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">CONQUEST LARGE</p>
                  <p className="card-text">SIEGE OF SHANGHAI</p>
                </div>
              </div>
            </div>

          </div>

          <div className="row mt-3">

            <div className="col-12 col-lg-3">
              <div className="custom-card">
                <img
                  src={pp} 
                  alt="Card Image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">CONQUEST LARGE</p>
                  <p className="card-text">DAWNBREAKER</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <div className=" custom-card">
                <img
                  src={ppp} 
                  alt="Card Image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">CONQUEST LARGE</p>
                  <p className="card-text">PROPAGANDA</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <div className=" custom-card">
                <img
                  src={p5} 
                  alt="Card Image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">CONQUEST LARGE</p>
                  <p className="card-text">OPERATION LOCKER</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <div className=" custom-card">
                <img
                  src={p4} 
                  alt="Card Image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">CONQUEST LARGE</p>
                  <p className="card-text">LANCANG DAM</p>
                </div>
              </div>
            </div>

          </div>

          <div className="row mt-3">

            <div className="col-12 col-lg-3">
              <div className=" custom-card">
                <img
                  src={p4} 
                  alt="Card Image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">CONQUEST LARGE</p>
                  <p className="card-text">SIEGE OF SHANGHAI</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <div className="  custom-card">
                <img
                  src={p5} 
                  alt="Card Image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">CONQUEST LARGE</p>
                  <p className="card-text">GOLMUD RAILWAY</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <div className="  custom-card">
                <img
                  src={ppp} 
                  alt="Card Image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">CONQUEST LARGE</p>
                  <p className="card-text">PROPAGANDA</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <div className="  custom-card">
                <img
                  src={p5} 
                  alt="Card Image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">CONQUEST LARGE</p>
                  <p className="card-text">SIEGE OF SHANGHAI</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Invite Component */}
      <div
  className="invite-section"
  style={{
    position: "absolute",
    top: "30%",
    right: "30px",
    transform: "translateY(-50%)",
    zIndex: 20,
  }}
>
  <Invite />
</div>
    </div>
  );
};

export default Home;
