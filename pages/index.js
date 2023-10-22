import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h1 className="text-4xl font-bold animate-pulse">Under Construction DNTreHab</h1>
                <h2 className="text-2xl mt-4 animate-bounce">Coming Soon!</h2>
            </div>
        </div>
    );
}

export default Home;
