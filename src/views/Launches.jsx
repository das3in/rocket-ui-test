import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLaunches } from "../actions/Launches";
import Layout from "./Layout";
import Launch from "../components/Launch";
import Navigation from "../components/Navigation";

const menu = Navigation();

const generateLaunchId = (flightNumber, missionName) =>
  `${flightNumber}+${missionName}`;

const Launches = () => {
  const [selectedLaunch, setSelectedLaunch] = useState(null);
  const { launches, fetching } = useSelector((state) => state.launchCollection);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!launches.length) {
      dispatch(fetchLaunches);
    }
  }, []);

  return (
    <Layout pageName="launches" menu={menu}>
      {fetching ? (
        <div>LOADING</div>
      ) : (
        <div>
          {launches.map((launch) => {
            const launchId = generateLaunchId(
              launch.flight_number,
              launch.mission_name
            );
            return (
              <Launch
                key={launchId}
                launchId={launchId}
                launch={launch}
                currentlySelected={launchId === selectedLaunch}
                setSelectedLaunch={setSelectedLaunch}
              />
            );
          })}
        </div>
      )}
    </Layout>
  );
};

export default Launches;
