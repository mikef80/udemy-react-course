import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>EventDetailPage</h1>
      <p>This is event {params.id}</p>
    </>
  );
};
export default EventDetailPage;
