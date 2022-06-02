import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditLogForm(props){
  const { log } = props;

  function handleEditLogFormSubmission(event) {
    event.preventDefault();
    props.onEditLog({names: event.target.games.value, location: event.target.location.value, issue: event.target.date.value, id: log.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditLogFormSubmission} 
        buttonText="Update Log" />
    </React.Fragment>
  );
}

EditLogForm.propTypes = {
  log: PropTypes.object,
  onEditLog: PropTypes.func
};

export default EditLogForm;