import { useState } from "react";
import styles from '../../styles/NewMeeting.module.css';

const NewParticipant = (props) => {
    const [person, setPerson] = useState({
        name: '',
        isTalked: false
    });

    const onChangeHandler = (name) => {
        setPerson(prev => ({
            ...prev,
            name
        }));
    }

    const addNewParticipant = (e) => {
        e.preventDefault();
        props.addNewParticipant(person);
        setPerson({
            name: '',
            isTalked: false
        })
    }

    const renderNewParticipant = () => {
        return (
            <form className={styles.newPersonForm} onSubmit={(e) => addNewParticipant(e)}>
                <input data-cy='participant-name-input' className={styles.input} value={person.name} onChange={(e) => onChangeHandler(e.target.value)} placeholder='Participant Name' />
                <button data-cy='add-participant-button' className={styles.button}>Add</button>
            </form>
        )
    }

    return (
        <>
            { renderNewParticipant() }
        </>
    )
}

export default NewParticipant;