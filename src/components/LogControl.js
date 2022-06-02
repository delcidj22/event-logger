import React from 'react';
import NewLogForm from './NewLogForm';
import LogList from './LogList';
import LogDetail from './LogDetail';
import EditLogForm from './EditLogForm';

class LogControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainLogList: [],
      selectedLog: null,
      editing: false,
      increase: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleIncreaseClick = () => {
    this.setState({increase: true})
  }

  handleIncreaseViews = (logToIncrease) => {
    const editedMainLogList = this.state.mainLogList
    .filter(log => log.id !== this.state.selectedLog.id)
    .concat(logToIncrease);   
    logToIncrease.view++; 
    console.log(logToIncrease.view) 
    this.setState({
      mainLogList: editedMainLogList,
      editing: false,
      selectedLog: null
    });   
  }
  
  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingLogInList = (LogToEdit) => {
    const editedMainLogList = this.state.mainLogList
      .filter(log => log.id !== this.state.selectedLog.id)
      .concat(LogToEdit);
    this.setState({
        mainLogList: editedMainLogList,
        editing: false,
        selectedLog: null
      });
  }
  
  handleDeletingLog = (id) => {
    const newMainLogList = this.state.mainLogList.filter(log => log.id !== id);
    this.setState({
      mainLogList: newMainLogList,
      selectedLog: null
    });
  }

  handleChangingSelectedLog = (id) => {
    const selectedLog = this.state.mainLogList.filter(log => log.id === id)[0];
    this.setState({selectedLog: selectedLog});
  }

  handleAddingNewLogToList = (newLog) => {
    const newMainLogList = this.state.mainLogList.concat(newLog);
    this.setState({mainLogList: newMainLogList,
                  formVisibleOnPage: false });
    }

  handleClick = () => {
    if (this.state.selectedLog != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedLog: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    
     if (this.state.editing ) {      
      currentlyVisibleState = <EditLogForm log = {this.state.selectedLog} onEditLog = {this.handleEditingLogInList} />
      buttonText = "Return to Event Log List";
    }
    else if (this.state.selectedLog != null) {
      currentlyVisibleState = <LogDetail log = {this.state.selectedLog} onClickingDelete = {this.handleDeletingLog} onClickingEdit = {this.handleEditClick} onClickingIncrease = {this.handleIncreaseViews}/>
      buttonText = "Return to Event Log List";
    }
    else if (this.state.formVisibleOnPage) {
      // This conditional needs to be updated to "else if."
      currentlyVisibleState = <NewLogForm onNewLogCreation={this.handleAddingNewLogToList}  />;
      buttonText = "Return to Event Log List";
    } else {
      currentlyVisibleState = <LogList logList={this.state.mainLogList} onLogSelection={this.handleChangingSelectedLog} />;
      // Because a user will actually be clicking on the ticket in the Ticket component, we will need to pass our new handleChangingSelectedTicket method as a prop.
      buttonText = "Add Event Log";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default LogControl;