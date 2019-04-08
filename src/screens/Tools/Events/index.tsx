import Modal from "react-modal"
import * as React from "react"
import styled from "styled-components"
import { Form, Button } from 'antd'

import Event from "./Event"
import EventForm from "./EventForm"

Modal.setAppElement('#root')

interface ISig {
  dateFounded: Date;
  description: string;
  name: string;
}

interface IEvent {
  dateCreated: Date;
  dateExpire: Date;
  dateHosted: Date;
  description: string;
  eventLink: string;
  eventTitle: string;
  flierLink: string;
  id: number;
  location: string;
  hostSigs: ISig;
}

interface IEventsState {
  error: any;
  events: IEvent[];
  isLoaded: boolean;
  modalIsOpen: boolean;
  editData: any;
  editing: boolean
}

const PageWrapper = styled.div`
  margin: 0 auto;
  padding: 15px;
  max-width: 800px;
`
const EventsList = styled.ul`
  padding: 0;
  margin: 0;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

class Events extends React.Component<{}, IEventsState> {
  public constructor(props: {}) {
    super(props)

    this.state = {
      error: null,
      events: [],
      isLoaded: false,
      modalIsOpen: false,
      editData: {},
      editing: true
    }

    this.handleChange = this.handleChange.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      editData: {}
    });
  }

  public componentDidMount() {
    this.refresh();
  }

  private refresh = () => {
    fetch("http://localhost/api/v1/events/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            events: result,
            isLoaded: true
          });
        },
        (error) => {
          this.setState({
            error,
            isLoaded: true
          });
        }
      )
  }

  private addEvent = (event: any) => {
    this.setState({
      modalIsOpen: true,
      editData: {},
      editing: false
    });
  }

  private editEvent = (data: any) => {
    let copyData = JSON.parse(JSON.stringify(data))
    copyData["hostSigs"] = data["hostSigs"].name
    this.setState({
      modalIsOpen: true,
      editData: copyData,
      editing: true
    });
  }
  
  private deleteEvent = (id: number) => {
    fetch("http://localhost/api/v1/events/" + id,
      {
        method: "DELETE",
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.refresh()
        },
        (error) => {
          // TODO
        }
      )
  }

  private postEvent = (data: any) => {
    fetch("http://localhost/api/v1/events/",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.closeModal()
          this.refresh()
        },
        (error) => {
          // TODO
        }
      )
  }

  private patchEvent = (data: any) => {
    fetch("http://localhost/api/v1/events/" + data.id,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PATCH",
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.closeModal()
          this.refresh()
        },
        (error) => {
          // TODO
        }
      )
  }

  changeValue = (field: string, event: any) => {
    let { editData } = this.state;
    editData[field] = event.target.value
    this.setState({editData: editData});
  }

  handleChange = (field: string) => {
    return (event: any) => this.changeValue(field, event)
  }


  public render() {
    const { events, isLoaded, error, modalIsOpen, editData, editing } = this.state;
    let content;
    const WrappedForm = Form.create({ name: 'edit' })(EventForm);
    const intent = editing ? "Edit" : "Add";

    const modal = (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={this.closeModal}
        contentLabel={intent + "Event"}
      >
        <Button onClick={this.closeModal}>Close</Button>
        <h1>{intent} Event Details</h1>
        <WrappedForm editing={editing} postEvent={this.postEvent} patchEvent={this.patchEvent} handleChange={this.handleChange} editData={editData}/>
      </Modal>
    )
    /*
          Add these to the form
          "dateCreated": "2019-04-07T18:43:13.087Z",
          "dateHosted": "2019-04-07T13:43:13.033Z",
          "dateExpire": "2019-04-07T13:43:13.033Z",
    */

    if (!isLoaded) {
      content = (
        <h3>Loading...</h3>
      )
    } else if (error) {
      content = (
        <h3>Error: {error.toString()}</h3>
      )
    } else {
      content = events.map((event: IEvent, index: number) => {
          return (
            <Event event={event} deleteEvent={this.deleteEvent} editEvent={this.editEvent} key={index} />
          )
      })
    }

    return (
      <PageWrapper>
        <Header>
          <h1>Events</h1>
          <Button onClick={this.addEvent}>Add Event</Button>
        </Header>
        {modal}
        <EventsList>
          {content}
        </EventsList>
      </PageWrapper>
    );
  }
}
export default Events
