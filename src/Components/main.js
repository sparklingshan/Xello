import React, { Component } from 'react';
import Filter from './filter.js';
import Board from './board.js';

class Home extends Component {
  render() {
    return (
      <div className="hotspot">
        <nav className="navbar navbar-default home-nav">
            <div className="container-fluid">
                <div className="navbar-header" style={{width: '50%'}}>
                    <h1>High School Diploma 2017</h1>
                    <div style={{float: 'left', width: "50%", paddingTop: '5.5%', paddingLeft: '2%'}}>
                      <div className='circle'>14</div>
                      <div style={{fontSize: '0.8em', paddingLeft: '1%', paddingTop: '0.5%', float: 'left', width: '60%'}}>Credits Left</div>
                    </div>
                </div>
                <div style={{width: '20%', height: '100%'}}>
                  <div className="progress" style={{width: '79%', float: 'left', marginTop: '6%', height: '14px', border: '1px #eee solid'}}>
                    <div className="progress-bar bg-success" role="progressbar" style={{width: '47%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span style={{float: 'left', fontSize: '0.9em', marginTop: '4%'}}>&nbsp;&nbsp;<span style={{color: 'green'}}>14</span> / 30</span>
                </div>
            </div>
        </nav>
        <Filter/>
        <Board />
      </div>
    );
  }
}

export default Home;