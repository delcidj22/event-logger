import React from "react";
import PropTypes from "prop-types";

function LogDetail(props){
  const { log, onClickingDelete } = props; //new code

  return (
    <React.Fragment>
      <h1>Log Detail</h1>
      <h3>Views: {log.view}</h3>
      <h3>{log.location}</h3> 
      <h3>{log.date}</h3>
      <h3>{log.games}</h3>
      <button onClick={ props.onClickingEdit }>Update Log</button>
      <button onClick={()=> onClickingDelete(log.id) }>Delete Log</button> 
      <hr/>
    </React.Fragment>
  );
}

LogDetail.propTypes = {
  log: PropTypes.object,
  onClickingDelete: PropTypes.func ,
  onClickingEdit: PropTypes.func,
};



export default LogDetail;