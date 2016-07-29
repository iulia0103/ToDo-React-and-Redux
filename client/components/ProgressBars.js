import React from 'react';
import {Line} from 'rc-progress';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import {MdStar, MdFavorite} from 'react-icons/lib/md';

const ProgressBars = React.createClass({
  render(){
    return (
      <div>
        {this.props.progressbars.map((progressbar, i) =>
          <div key={i}>
            <Row>
              <Col md={2}>
                <p>
                  {progressbar.progressType}
                  {(progressbar.progressType === 'Experience') ? <MdStar /> : <MdFavorite /> }
                </p>
              </Col>
              <Col md={10}>
                <Line percent={progressbar.progress} strokeWidth="1" strokeColor="white" />
              </Col>
            </Row>
          </div>
        )}
      </div>
    )
  }
});

export default ProgressBars;
