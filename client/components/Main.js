import React from 'react';
import {Link} from 'react-router';
import {Line} from 'rc-progress';

//import components
import Habits from './Habits.js';
import Todos from './Todos.js';

//import bootstrap
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


const Main = React.createClass({
  render(){
    const {habits, dailies, weeklies, todos} = this.props;

    return(
      <div>
        <Jumbotron>
          <Grid>
            <h1>Habitica</h1>
            <p>This is a simple to do app which allows users to keep track of their habits, daily and weekly tasks, as well as general tasks.</p>

            <Row>
              <Col md={2}>
                <p>Health <span>&#10084;</span></p>
              </Col>
              <Col md={10}>
                <Line percent="70" strokeWidth="1" strokeColor="white" />
              </Col>
            </Row>

            <Row>
              <Col md={2}>
                <p>Experience <span>&#9733;</span></p>
              </Col>
              <Col md={10}>
                <Line percent="50" strokeWidth="1" strokeColor="white" />
              </Col>
            </Row>
          </Grid>
        </Jumbotron>

        <Grid>
          <Row>
            <Col md={3}>
              <h3>Habits</h3>
              <Habits habits={habits}/>
            </Col>

            <Col md={3}>
              <h3>Daily</h3>
              <Todos todos={dailies}/>
            </Col>

            <Col md={3}>
              <h3>Weekly</h3>
              <Todos todos={weeklies}/>
            </Col>

            <Col md={3}>
              <h3>To Do</h3>
              <Todos todos={todos}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
});

export default Main;
