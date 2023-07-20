import Link from 'next/link';
import styles from '../styles/MainPage.module.css';

const MainPage = () => {
    return (
        <div className={styles.mainPageContainer}>
            <h1 className={styles.mainPageHeading}>Welcome To TalkTracker</h1>
            <span className={styles.mainPageSubHeading}>Track who is talked!</span>
            <div className={styles.actionsContainer}>
                <div className={styles.ctaContainer}>
                    <span className={styles.ctaDescription}>Meetings I attend regularly</span>
                    <Link data-cy="meetings-button" className={styles.ctaButton} href='/meetings'>Go To Previous Meeting List</Link>
                </div>
                <div className={styles.ctaContainer}>
                    <span className={styles.ctaDescription}>Create a new meeting</span>
                    <Link data-cy="new-meeting-button" className={styles.ctaButton} href='/new-meeting'>Create New List</Link>
                </div>
            </div>
        </div>
    )
}

export default MainPage;