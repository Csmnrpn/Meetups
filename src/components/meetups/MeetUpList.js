import MeetupItem from "./MeetupItem";

function MeetUpList(props) {
  return (
    <ul>
      {props.meetups.map((meetup) => (
        <MeetupItem
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          key={meetup.id}
          id={meetup.id}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetUpList;
