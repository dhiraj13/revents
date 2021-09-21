import { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import EventForm from '../eventForm/EventForm'
import EventList from './EventList'
import { sampleData } from '../../../app/api/sampleData'

export default function EventDashboard({
  formOpen,
  selectEvent,
  setFormOpen,
  selectedEvent,
}) {
  const [events, setEvents] = useState(sampleData)

  function handleCreateEvent(event) {
    setEvents([...events, event])
  }

  return (
    <Grid>
      <Grid.Column width='10'>
        <EventList events={events} selectEvent={selectEvent} />
      </Grid.Column>
      <Grid.Column width='6'>
        {formOpen && (
          <EventForm
            setEvents={setEvents}
            setFormOpen={setFormOpen}
            createEvent={handleCreateEvent}
            selectedEvent={selectedEvent}
          />
        )}
      </Grid.Column>
    </Grid>
  )
}
