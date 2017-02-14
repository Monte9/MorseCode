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

  handleClick(e, letter) {
    console.log(`${letter} pressed`);

    <Sound
      url="cool_sound.mp3"
      playStatus={Sound.status.PLAYING}
      playFromPosition={300 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying} />

    console.log(`Playing audio now!!`);
  }

  render() {
    const alphabet = 'ABCDEFGHIJKLMNOPRSTUVWXYZ0123456789'.split('');

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
                    <p><Button bsStyle="primary" bsSize="large" onClick={(e) => this.handleClick(e, letter)}>{letter}</Button></p>
                  </Col>
                );
              }, this)}
            </Row>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}
