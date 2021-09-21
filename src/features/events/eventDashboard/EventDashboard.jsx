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

  function handleUpdateEvent(updatedEvent) {
    setEvents(
      events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
    )
    selectEvent(null)
  }

  function handleDeleteEvent(eventId) {
    setEvents(events.filter((evt) => evt.id !== eventId))
  }

  return (
    <Grid>
      <Grid.Column width='10'>
        <EventList
          events={events}
          selectEvent={selectEvent}
          deleteEvent={handleDeleteEvent}
        />
      </Grid.Column>
      <Grid.Column width='6'>
        {formOpen && (
          <EventForm
            setEvents={setEvents}
            setFormOpen={setFormOpen}
            createEvent={handleCreateEvent}
            selectedEvent={selectedEvent}
            updateEvent={handleUpdateEvent}
            key={selectedEvent ? selectedEvent.id : null}
          />
        )}
      </Grid.Column>
    </Grid>
  )
}
