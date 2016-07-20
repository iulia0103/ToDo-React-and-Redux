import React from 'react';
import {Link} from 'react-router';

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
            <p><Button bsStyle='primary' bsSize='large'>Learn more »</Button></p>
          </Grid>
        </Jumbotron>

        <Grid>
          <Row>
            <Col md={3}>
              <h3>Habits</h3>
              <span><Button bsStyle='default' bsSize='small'>Strong »</Button></span>
              <span><Button bsStyle='default' bsSize='small'>Weak »</Button></span>
              <Habits habits={habits}/>
            </Col>

            <Col md={3}>
              <h3>Daily</h3>
              <span><Button bsStyle='default' bsSize='small'>Active »</Button></span>
              <span><Button bsStyle='default' bsSize='small'>Completed »</Button></span>
              <Todos todos={dailies}/>
            </Col>

            <Col md={3}>
              <h3>Weekly</h3>
              <span><Button bsStyle='default' bsSize='small'>Active »</Button></span>
              <span><Button bsStyle='default' bsSize='small'>Completed »</Button></span>
              <Todos todos={weeklies}/>
            </Col>

            <Col md={3}>
              <h3>To Do</h3>
              <span><Button bsStyle='default' bsSize='small'>Active »</Button></span>
              <span><Button bsStyle='default' bsSize='small'>Completed »</Button></span>
              <Todos todos={todos}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
});

export default Main;
