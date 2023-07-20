import { useState, useLayoutEffect, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import styles from '../../styles/Meeting.module.css';

const Meeting = () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get('id');
  const [meeting, setMeeting] = useState(null);

  useLayoutEffect(() => {
    const localStorageMeetings = JSON.parse(localStorage.getItem('meetings'));
    const selectedMeeting = localStorageMeetings?.find((m) => m.id === id);

    if (selectedMeeting) {
      setMeeting(selectedMeeting);
    }
  }, [searchParams]);

  useEffect(() => {
    if (meeting) {
      const localStorageMeetings = JSON.parse(localStorage.getItem('meetings'));
      const index = localStorageMeetings.findIndex((m) => m.id === meeting.id);
      localStorageMeetings[index] = meeting;

      localStorage.setItem('meetings', JSON.stringify(localStorageMeetings));
    }
  }, [meeting]);

  const toggleParticipantTalked = (index) => {
    const participants = meeting.participants.map((p, idx) => {
      if (index === idx) {
        p.isTalked = !p.isTalked;
      }

      return {
        name: p.name,
        isTalked: p.isTalked,
      };
    });

    setMeeting((prev) => ({
      ...prev,
      participants,
    }));
  };

  const clearAllIsTalkedValues = () => {
    const participants = meeting.participants.map((p, idx) => {
      return {
        name: p.name,
        isTalked: false,
      };
    });

    setMeeting((prev) => ({
      ...prev,
      participants,
    }));
  };

  const renderParticipants = () => {
    return (
      <div className={styles.meetingParticipant}>
        {meeting?.participants.map((participant, idx) => {
          return (
            <div className={styles.participant}>
              <span className={styles.index}>{idx + 1}</span>
              <span className={styles.name}>{participant.name}</span>
              <span
                data-cy='toggle-button'
                onClick={() => toggleParticipantTalked(idx)}
                className={styles.talkedIndicator}
              >
                {participant.isTalked ? '👍' : '-'}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  const render = () => {
    if (!meeting) {
      return <span>Cannot find this meeting.</span>;
    } else {
      return (
        <>
          <span data-cy='meeting-name' className={styles.meetingName}>
            {meeting?.meetingName}
          </span>
          <span className={styles.isTalked}>Is Talked?</span>
          {renderParticipants()}
          <span onClick={clearAllIsTalkedValues} className={styles.clear}>
            Clear
          </span>
          <div className={styles.goHomeContainer}>
            <Link
              data-cy='go-home-button'
              className={styles.ctaButton}
              href={'/'}
            >
              Go Home
            </Link>
          </div>
        </>
      );
    }
  };

  return <div className={styles.meetingContainer}>{render()}</div>;
};

export default Meeting;
