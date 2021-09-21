import EventListItem from './EventListItem'

export default function EventList({ deleteEvent, events, selectEvent }) {
  return (
    <>
      {events.map((event) => (
        <EventListItem
          event={event}
          key={event.id}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      ))}
    </>
  )
}
