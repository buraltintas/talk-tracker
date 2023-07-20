import Head from 'next/head';
import styles from '../styles/Layout.module.css';

const Layout = ({children}) => {
    return (
        <>
        <Head>
            <title>TalkTracker</title>
            <meta name="description" content="Now It's Easy To Track Who Is Talked!" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="shortcut icon" type="image/png" href="/chat.png" />
        </Head>
        <div className={styles.layout}>{children}</div>
        </>
    )
}

export default Layout;