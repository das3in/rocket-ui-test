import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLaunches } from "../actions/Launches";
import Layout from "./Layout";
import Launch from "../components/Launch";
import Navigation from "../components/Navigation";

const menu = Navigation();

const Launches = () => {
  const { launches, fetching } = useSelector((state) => state.launchCollection);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLaunches);
  }, []);

  return (
    <Layout pageName="launches" menu={menu}>
      {fetching ? (
        <div>LOADING</div>
      ) : (
        <div>
          {launches.map((launch) => (
            <Launch key={launch.launch_id} launch={launch} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Launches;
