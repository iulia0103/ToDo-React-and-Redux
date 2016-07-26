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
      <div>
        <Jumbotron>
          <Grid>
            <h1>Habitica</h1>
            <p>This is a simple to do app which allows users to keep track of their habits, daily and weekly tasks, as well as general tasks.</p>

            <ProgressBars progressbars={progressbars} />
          </Grid>
        </Jumbotron>

        <Grid>
          <Row>
            <Col md={3}>
              <h3>Habits</h3>
              <Habits habits={habits} {...this.props} />
            </Col>

            <Col md={3}>
              <h3>Daily</h3>
              <Tasks tasks={dailies} type="daily" {...this.props} />
            </Col>

            <Col md={3}>
              <h3>Weekly</h3>
              <Tasks tasks={weeklies} type="weekly" {...this.props} />
            </Col>

            <Col md={3}>
              <h3>To Do</h3>
              <Tasks tasks={todos} type="todo" {...this.props}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
});

export default Main;
