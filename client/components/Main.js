import React from 'react';
import {Link} from 'react-router';
import {Line} from 'rc-progress';

//import components
import Habits from './Habits.js';
import Tasks from './Tasks.js';
import ProgressBars from './ProgressBars.js';

//import bootstrap
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


const Main = React.createClass({
  render(){
    const {habits, dailies, weeklies, todos, progressbars, actionCreators} = this.props;

    return(
      <div className="main">
        <Jumbotron className="jumbotron">
          <Grid>
            <h1>Harmony</h1>
            <p>Keep track of your daily, weekly and general tasks, as well as your habits!</p>

            <ProgressBars progressbars={progressbars} />
          </Grid>
        </Jumbotron>

        <Grid>
          <Row>
            <Col md={3} className="list">
              <h2>Habits</h2>
              <Habits habits={habits} {...this.props} />
            </Col>

            <Col md={3} className="list">
              <h2>Daily</h2>
              <Tasks tasks={dailies} type="daily" {...this.props} />
            </Col>

            <Col md={3} className="list">
              <h2>Weekly</h2>
              <Tasks tasks={weeklies} type="weekly" {...this.props} />
            </Col>

            <Col md={3} className="list">
              <h2>General</h2>
              <Tasks tasks={todos} type="todo" {...this.props}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
});

export default Main;
