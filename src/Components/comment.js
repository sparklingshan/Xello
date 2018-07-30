import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Comment extends Component{
    render(){
        return (
            <div className='comment'>
                <div style={{width: '20%', height: '100%', padding: '6%', borderRight: '1px #999 solid', float: 'left'}}>
                    <FontAwesomeIcon icon="th" size='lg'/>
                </div>
                <div style={{width: '20%', float: 'right', height: '100%', marginRight: '10%'}}>
                    <label className="switch" style={{marginTop: '18%'}}>
                        <input type="checkbox"/>
                        <span className="slider round">
                            <span style={{fontSize: '0.8em'}}>&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span style={{fontSize: '0.8em'}}>No</span>
                        </span>
                    </label>
                </div>
            </div>
        );
    }
}

export default Comment;