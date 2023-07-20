import cuid from 'cuid';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../styles/NewMeeting.module.css';
import NewParticipant from './new-participant';

const NewMeeting = () => {
  const router = useRouter();
  const [newMeeting, setNewMeeting] = useState({
    meetingName: '',
    participants: [],
    id: null,
  });

  const addNewParticipant = (person) => {
    setNewMeeting((prev) => ({
      ...prev,
      participants: [...prev.participants, person],
    }));
  };

  const changeMeetingName = (value) => {
    setNewMeeting((prev) => ({
      ...prev,
      meetingName: value,
    }));
  };

  const deleteParticipant = (index) => {
    const newParticipants = newMeeting.participants.filter(
      (item, idx) => idx !== index
    );

    setNewMeeting((prev) => ({
      ...prev,
      participants: newParticipants,
    }));
  };

  const renderParticipants = () => {
    return newMeeting.participants.map((person, idx) => {
      return (
        <div className={styles.participants} key={`${person.name + idx}`}>
          <span className={styles.index}>{idx + 1}</span>
          <span className={styles.name}>{person.name}</span>
          <span
            onClick={() => deleteParticipant(idx)}
            className={styles.delete}
          >
            ❌
          </span>
        </div>
      );
    });
  };

  const saveMeeting = () => {
    const id = cuid();
    const meetingData = {
      ...newMeeting,
      id,
    };

    const meetings = JSON.parse(localStorage.getItem('meetings'));

    if (meetings) {
      meetings.push(meetingData);
      localStorage.setItem('meetings', JSON.stringify(meetings));
    } else {
      localStorage.setItem('meetings', JSON.stringify([meetingData]));
    }

    router.push(`/meeting/${id}`);
  };

  return (
    <div className={styles.newMeetingContainer}>
      <Link className={styles.ctaButton} href={'/'}>
        Go Home
      </Link>
      <div className={styles.newMeetingForm}>
        <input
          className={styles.input}
          placeholder='Meeting Name'
          onChange={(e) => changeMeetingName(e.target.value)}
          value={newMeeting.meetingName}
          data-cy='meeting-name-input'
        />
        <NewParticipant
          addNewParticipant={(person) => addNewParticipant(person)}
        />
        {renderParticipants()}
      </div>
      {newMeeting.participants.length > 1 && (
        <div className={styles.saveButtonContainer}>
          <button
            data-cy='save-meeting-button'
            className={styles.button}
            onClick={saveMeeting}
          >
            Save Meeting
          </button>
        </div>
      )}
    </div>
  );
};

export default NewMeeting;
