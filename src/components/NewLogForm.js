import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewLogForm(props){
  function handleNewLogFormSubmission(event) {
    event.preventDefault();
    props.onNewLogCreation({games: event.target.games.value, location: event.target.location.value, date: event.target.date.value, view: 1, id: v4()});
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewLogFormSubmission}
        buttonText="Log" />
    </React.Fragment>
  );
}

NewLogForm.propTypes = {
  onNewLogCreation: PropTypes.func
};
export default NewLogForm;