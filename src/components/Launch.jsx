import React from "react";

const Launch = ({ launch, launchId, currentlySelected, setSelectedLaunch }) => (
  <div
    tabIndex="0"
    role="button"
    onClick={() => setSelectedLaunch(launch)}
    onKeyDown={() => setSelectedLaunch(launch)}
  >
    <details>
      <summary>
        Mission: {launch.mission_name} - Flight Number: {launch.flight_number}
      </summary>
      <div className={currentlySelected && "expanded"}>
        <p>Rocket ID: {launch.rocket.rocket_id}</p>
        <p>Description: {launch.details}</p>
      </div>
    </details>
  </div>
);

export default Launch;
