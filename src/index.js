import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/index.css';

const Index = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <div className={styles.testing}>This is a test</div>
        </div>
    );
};

ReactDOM.render(<Index />, document.getElementById("index"));