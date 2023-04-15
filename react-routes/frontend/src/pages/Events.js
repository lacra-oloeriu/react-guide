import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function Events() {
  const data = useLoaderData();
  //if ( data.isError) {
  // return <p>{data.message}</p>
  //}
  const events = data.events;
  return <EventsList events={events} />;
}

export default Events;

export async function loader() {
  const response = await fetch("http://localhost:8080/eventsdsfdasfs");
  if (!response.ok) {
    // return { isError:true, message: 'Could not fetch events.'}
    throw { message: "Could not fetch events." };
  } else {
    return response;
  }
}
