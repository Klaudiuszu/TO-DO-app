import PropTypes from 'prop-types';
import React from 'react';
import styles from '../App/App.scss';

const Hero = props => (
    <div>
    <header className={styles.title}>
    <h2 className={styles.title}>{props.titleText}</h2>
    <img {props.titleLink}/>
    
    </header>
    </div>
    );
    
    Hero.propTypes = {
        titleText: PropTypes.node,
        title: PropTypes.node,
        children: PropTypes.node,
        };

    export default Hero;
