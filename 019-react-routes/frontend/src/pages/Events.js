import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some event",
  },
  {
    id: "e2",
    title: "Second event",
  },
];

function EventsPage() {
  return (
    <>
      <hi>EventsPage</hi>
      <ul>
        {DUMMY_EVENTS.map((event) => 
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        )}
      </ul>
    </>
  );
}

export default EventsPage;
