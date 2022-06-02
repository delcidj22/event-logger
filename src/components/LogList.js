import React from "react";
import Log from "./Log";
import PropTypes from "prop-types";


function LogList(props) { // Add props as parameter.
  return (
    <React.Fragment>
      <hr />
      {props.logList.map((log) =>
        <Log
          whenLogClicked = { props.onLogSelection }
          games={log.games}
          view={log.view}
          location={log.location}
          date={log.date}
          id={log.id}
          key={log.id}/>
      )}
    </React.Fragment>
  );
}

// Add propTypes for ticketList.
LogList.propTypes = {
  logList: PropTypes.array,
  onLogSelection: PropTypes.func
};

export default LogList;