import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Filter extends Component {
    render() {
        return (
          <div className="filter container-fluid">
              <div style={{width: '10%', float: "left",marginTop: '1%', fontSize: '0.9em'}}>Requirements</div>
              <div className="input-group" style={{width: '23%', float: "left", height: '80%', marginTop: '0.4%', position: 'relative'}}>
                <input placeholder='Show All' style={{height: '100%'}} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                <FontAwesomeIcon icon="angle-down" className='angle-down'/>
              </div>

              <div style={{height: '30px', borderLeft: '1px solid #999', float: 'left', marginLeft: '1%',marginTop: '0.7%'}}></div> 
              <div style={{float: 'left', width: '10%',marginLeft: '1%',marginTop: '1%'}}> Credits</div>

              <div className="checkbox">
                <label>
                <input type="checkbox" value=""/>
                <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                All
                </label>
              </div>

              <div className="checkbox">
                <label>
                <input type="checkbox" value=""/>
                <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                Earned
                </label>
              </div>

              <div className="checkbox">
                <label>
                <input type="checkbox" value=""/>
                <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                Planned
                </label>
              </div>

              <div className="checkbox">
                <label>
                <input type="checkbox" value=""/>
                <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                Remainning
                </label>
              </div>

              <div style={{float: 'none'}}></div>
          </div>
        );
      }
};

export default Filter;