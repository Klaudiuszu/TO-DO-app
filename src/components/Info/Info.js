import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={settings.info.titletext} image={settings.info.image}/>
    <p>{settings.info.text}</p>
  </Container>
);

export default Info;