import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

import Header from "../Header.jsx";
import { deleteEvent, fetchEvent } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: () => deleteEvent({ id }),
    onSuccess: () => {
      navigate("/");
    },
  });

  const { data, isPending, isError, error } = useQuery({
    queryKey: [`event-${id}`],
    queryFn: () => fetchEvent({ id: id }),
  });

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info?.message || "Failed to fetch events."}
      />
    );
  }

  function handleDelete({ id }) {
    mutate({ id });
  }

  if (data) {
    const { id, title, image, description, date, time, location } = data;
    content = (
      <article id="event-details">
        <header>
          <h1>{title}</h1>
          <nav>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${image}`} alt="" />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {date} @ {time}
              </time>
            </div>
            <p id="event-details-description">{description}</p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {content}
      {/* <article id="event-details">
        <header>
          <h1>EVENT TITLE</h1>
          <nav>
            <button>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src="" alt="" />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">EVENT LOCATION</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>DATE @ TIME</time>
            </div>
            <p id="event-details-description">EVENT DESCRIPTION</p>
          </div>
        </div>
      </article> */}
    </>
  );
}
