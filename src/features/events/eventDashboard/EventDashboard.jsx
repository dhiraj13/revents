import { Grid } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import EventList from './EventList'

export default function EventDashboard() {
  const { events } = useSelector((state) => state.event)

  function handleDeleteEvent(eventId) {
    // setEvents(events.filter((evt) => evt.id !== eventId))
  }

  return (
    <Grid>
      <Grid.Column width='10'>
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width='6'>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  )
}
