import { Link } from "react-router-dom";

const EventsPage = () => {
  const EVENTS = [
    { id: 0, title: "Event 0" },
    { id: 1, title: "Event 1" },
  ];
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {EVENTS.map((event) => (
          <li id={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default EventsPage;
