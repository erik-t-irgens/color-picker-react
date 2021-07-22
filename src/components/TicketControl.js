// import React from 'react';
// import NewTicketForm from './NewTicketForm';
// import TicketList from './TicketList';
// import TicketDetail from './TicketDetail';
// import EditTicketForm from './EditTicketForm';
// import { connect } from 'react-redux';
// import PropTypes from "prop-types";
// import * as a from './../actions';
// import { withFirestore, isLoaded } from 'react-redux-firebase'

// class TicketControl extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedTicket: null,
//       editing: false//true
//     };
//   }



//   handleClick = () => {
//     if (this.state.selectedTicket != null) {
//       this.setState({
//         selectedTicket: null,
//         editing: false
//       });
//     } else {
//       const { dispatch } = this.props;
//       const action = a.toggleForm();
//       dispatch(action);
//     }
//   }

//   handleAddingNewTicketToList = () => {
//     const { dispatch } = this.props;
//     // const action = a.addTicket(newTicket)
//     // dispatch(action);
//     const action2 = a.toggleForm();
//     dispatch(action2);
//   }

//   handleChangingSelectedTicket = (id) => {
//     this.props.firestore.get({ collection: 'tickets', doc: id }).then((ticket) => {
//       const firestoreTicket = {
//         names: ticket.get("names"),
//         location: ticket.get("location"),
//         issue: ticket.get("issue"),
//         id: ticket.id
//       }
//       this.setState({ selectedTicket: firestoreTicket });
//     });
//   }

//   handleEditClick = () => {
//     this.setState({ editing: true });
//   }

//   handleEditingTicketInList = () => {
//     // const { dispatch } = this.props;
//     // const action = a.addTicket(ticketToEdit);
//     // dispatch(action);
//     this.setState({
//       editing: false,
//       selectedTicket: null
//     });
//     // dispatch(action and payload) -- the reducer, actions, etc would handle changing the state within your redux store
//   }

//   handleDeletingTicket = (id) => {
//     this.props.firestore.delete({ collection: 'tickets', doc: id });
//     this.setState({ selectedTicket: null });
//   }

//   render() {
//     const auth = this.props.firebase.auth();
//     if (!isLoaded(auth)) {
//       return (
//         <React.Fragment>
//           <h1>Loading.....</h1>
//         </React.Fragment>
//       )
//     }
//     if ((isLoaded(auth)) && (auth.currentUser == null)) {
//       return (
//         <React.Fragment>
//           <h1>You must be signed in to access the queue.</h1>
//         </React.Fragment>
//       )
//     }
//     if ((isLoaded(auth)) && (auth.currentUser != null)) {
//       let currentlyVisibleState = null;
//       let buttonText = null;
//       if (this.state.editing) {
//         currentlyVisibleState = <EditTicketForm ticket={this.state.selectedTicket} onEditTicket={this.handleEditingTicketInList} />
//         buttonText = "Return to Ticket List";
//       } else if (this.state.selectedTicket != null) {
//         currentlyVisibleState =
//           <TicketDetail
//             ticket={this.state.selectedTicket}
//             onClickingDelete={this.handleDeletingTicket}
//             onClickingEdit={this.handleEditClick} />
//         buttonText = "Return to Ticket List";
//       } else if (this.props.formVisibleOnPage) {
//         currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />;
//         buttonText = "Return to Ticket List";
//       } else {
//         currentlyVisibleState = <TicketList ticketList={this.props
//           .masterTicketList
//         } onTicketSelection={this.handleChangingSelectedTicket} />;
//         buttonText = "Add Ticket";
//       }
//       return (
//         <React.Fragment>
//           {currentlyVisibleState}
//           <button onClick={this.handleClick}>{buttonText}</button>
//         </React.Fragment>
//       );
//     }
//   }
// }


// TicketControl.propTypes = {
//   masterTicketList: PropTypes.object
// };

// const mapStateToProps = state => {
//   return {
//     formVisibleOnPage: state.formVisibleOnPage
//   }
// }

// TicketControl = connect(mapStateToProps)(TicketControl);

// export default withFirestore(TicketControl);