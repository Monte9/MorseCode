import React from 'react';
import styles from './App.css';

import _ from 'lodash';

import ReactAudioPlayer from 'react-audio-player';
import { Button, Grid, Row, Col, Jumbotron } from 'react-bootstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }

  handleClick() {
    console.log("Letter pressed");

    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const alphabet = 'ABCDEFGHIJKLMNOPRSTUVWXYZ'.split('');

    return (
      <div className={styles.app}>
        <Jumbotron className={styles.jumboStyle}>
          <h1 className={styles.jumboTitle}>Morse Code Player</h1>
          <p>This is a simple web app to play morse code for sentence and numbers.</p>
          <Grid>
            <Row className="show-grid">
              { alphabet.map(function(letter){
                return (
                  <Col sm={3} md={3}>
                    <p><Button bsStyle="primary" bsSize="large" onClick={(e) => this.handleClick(e)}>{letter}</Button></p>
                  </Col>
                );
              })}
            </Row>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}
