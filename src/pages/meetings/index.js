import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';
import styles from '../../styles/Meetings.module.css';

const Meetings = () => {
    const router = useRouter();
    const [meetings, setMeetings] = useState([]);

    useLayoutEffect(() => {
        const localStorageMeetings = JSON.parse(localStorage.getItem('meetings'));

        if (localStorageMeetings) {
            setMeetings(localStorageMeetings)
        }
    }, [])

    const goToMeeting = (id) => {
        router.push(`/meeting/${id}`);
    }

    const renderMeetings = () => {
        if (meetings.length < 1) {
            return (
                <span className={styles.noMeetings}>You don't have a meeting list you created before.</span>
            )
        } else {
            return (
                <div className={styles.meetings}>
                    {
                        meetings.map((meeting, idx) => {
                            return (
                                <div onClick={() => goToMeeting(meeting.id)} key={meeting.id} className={styles.meeting}>
                                    <span className={styles.index}>{idx + 1}</span>
                                    <span className={styles.name}>{meeting.meetingName || '-'}</span>
                                    <span className={styles.participantsNumber}>{meeting.participants.length} 👨‍👨‍👧‍👧</span>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }

    console.log(meetings)

    return (
        <div className={styles.meetingsContainer}>
            <div className={styles.goHomeContainer}>
                <Link className={styles.ctaButton} href={'/'}>Go Home</Link>
            </div>
            {renderMeetings()}
        </div>
    )
}

export default Meetings;