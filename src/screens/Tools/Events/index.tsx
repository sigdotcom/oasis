import moment from "moment";
import Modal from "react-modal";
import * as React from "react"
import styled from "styled-components"

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

interface IEventState {
  error: any;
  events: IEvent[];
  isLoaded: boolean;
  modalIsOpen: boolean;
  modalId: number | undefined;
  editData: any;
}

interface IEventProps {
  event: IEvent;
  key: number;
  editEvent: any;
}

interface IEventState {
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

const EventWrapper = styled.li`
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
`
const EventContent = styled.div`
  display: flex;
  align-items: center;
`
const EventFlier = styled.img`
  height: 88px;
  width: 68px;
`
const EventDetails = styled.div`
`
const EventHighLevel = styled.div`
  display: flex;
`
const EventTitle = styled.h3`
  margin: 0;
  line-height: 20px;
`
const EventDate = styled.p`
  padding: 0 6px;
  margin: 0 0 0 20px;
  border-radius: 20px;
  border: 2px solid blue;
`
const EventMidLevel = styled.div`
`
const EventDescription = styled.div`
`
const EventLowLevel = styled.div`
`

function formatDate(date: Date) {
  return moment(date).format("MMMM Do h:mmA");
}

class Event extends React.Component<IEventProps, IEventState> {
  public constructor(props: IEventProps) {
    super(props)
  }

  handleEdit = () => {
    this.props.editEvent(this.props.event.id, this.props.event);
  }

  render() {
    const { event } = this.props;
    return (
      <EventWrapper>
        <EventContent>
          <EventFlier src={event.eventLink} alt={"Flier"} />
          <EventDetails>
            <EventHighLevel>
              <EventTitle>ACM {event.hostSigs.name}: {event.eventTitle}</EventTitle>
              <EventDate>
                {formatDate(event.dateHosted)}{event.dateHosted !== event.dateExpire && (" - " + formatDate(event.dateExpire))}
              </EventDate>
            </EventHighLevel>
            <EventMidLevel>
              {event.location}{event.eventLink && (<span> - <a href={event.eventLink}>Link</a></span>)}
            </EventMidLevel>
            <EventDescription>{event.description}</EventDescription>
            <EventLowLevel>{formatDate(event.dateCreated)}</EventLowLevel>
          </EventDetails>
        </EventContent>
        <div>
          Hello
          <button onClick={this.handleEdit}>Edit</button>
        </div>
      </EventWrapper>
    );
  }
}

class Events extends React.Component<{}, IEventState> {
  public constructor(props: {}) {
    super(props)

    this.state = {
      error: null,
      events: [],
      isLoaded: false,
      modalIsOpen: false,
      modalId: undefined,
      editData: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({
      modalId: undefined,
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

  private editEvent = (id: number, data: any) => {
    data["hostSigs"] = data["hostSigs"].name
    this.setState({
      modalId: id,
      modalIsOpen: true,
      editData: data
    });
  }

  private patchEvent = (event: any) => {
    event.preventDefault()
    console.log(this.state.editData)
    fetch("http://localhost/api/v1/events/" + this.state.modalId,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PATCH",
        body: JSON.stringify(this.state.editData)
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
    const { events, isLoaded, error, modalIsOpen, modalId, editData } = this.state;
    let content;
    const modal = (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={this.closeModal}
        contentLabel={"Edit" + modalId}
      >

        <button onClick={this.closeModal}>close</button>
        <form onSubmit={this.patchEvent}>
          <input onChange={this.handleChange("id")} value={editData.id}/>
          <input onChange={this.handleChange("eventTitle")} value={editData.eventTitle}/>
          <input onChange={this.handleChange("description")} value={editData.description}/>
          <input onChange={this.handleChange("location")} value={editData.location}/>
          <input onChange={this.handleChange("flierLink")} value={editData.flierLink}/>
          <input onChange={this.handleChange("eventLink")} value={editData.eventLink}/>
          <input type="submit" value="Submit" />
        </form>
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
        <h3>Error: {error}</h3>
      )
    } else {
      content = events.map((event: IEvent, index: number) => {
          return (
            <Event event={event} editEvent={this.editEvent} key={index} />
          )
      })
    }

    return (
      <PageWrapper>
        <h1>Events</h1>
        {modal}
        <EventsList>
          {content}
        </EventsList>
      </PageWrapper>
    );
  }
}
export default Events
