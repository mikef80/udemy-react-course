import { Link } from "react-router-dom";

const EventsPage = () => {
  const EVENTS = [
    { id: 0, title: "Some event" },
    { id: 1, title: "Another event" },
  ];

  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default EventsPage;
