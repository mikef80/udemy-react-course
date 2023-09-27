import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://images.unsplash.com/photo-1695632844647-d9252f33100d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    address: "Soem address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://images.unsplash.com/photo-1695632844647-d9252f33100d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    address: "Soem address 5, 12345 Some City",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://images.unsplash.com/photo-1695632844647-d9252f33100d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    address: "Soem address 5, 12345 Some City",
    description: "This is a third meetup!",
  },
  {
    id: "m4",
    title: "A Fourth Meetup",
    image:
      "https://images.unsplash.com/photo-1695632844647-d9252f33100d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    address: "Soem address 5, 12345 Some City",
    description: "This is a fourth meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
export default HomePage;
