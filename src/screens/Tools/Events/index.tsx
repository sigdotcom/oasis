import * as moment from "moment";
import * as React from "react"
import styled from "styled-components"

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
}

interface IEventState {
  error: any;
  events: IEvent[];
  isLoaded: boolean;
}

interface IEventProps {
  event: IEvent;
  key: number;
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

const Event = (props: IEventProps) => {
  const { event } = props;
  return (
    <EventWrapper>
      <EventContent>
        <EventFlier src={event.eventLink} alt={"Flier"} />
        <EventDetails>
          <EventHighLevel>
            <EventTitle>{event.eventTitle}</EventTitle>
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
      </div>
    </EventWrapper>
  );
}

class Events extends React.Component<{}, IEventState> {
  public constructor(props: {}) {
    super(props)
    this.state = {
      error: null,
      events: [],
      isLoaded: false
    }
  }

  public componentDidMount() {
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

  public render() {
    const { events, isLoaded, error } = this.state;
    let content;

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
            <Event event={event} key={index} />
          )
      })
    }

    return (
      <PageWrapper>
        <h1>Events</h1>
        <EventsList>
          {content}
        </EventsList>
      </PageWrapper>
    );
  }
}
export default Events
