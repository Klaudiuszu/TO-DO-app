import PropTypes from 'prop-types';
import React from 'react';
import styles from '../Hero/Hero.scss';

const Hero = props => (

    <header className={styles.component}>
    <h2 className={styles.title}>{props.titleText}</h2>
    <img className={styles.image} />
    </header>
    );

    Hero.propTypes = {
        titleText: PropTypes.node.isRequired,
    };
    
    
    export default Hero;
