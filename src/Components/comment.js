import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Comment extends Component{
    render(){
        return (
            <div className='comment'>
                <div style={{width: '20%', height: '100%', padding: '6%', borderRight: '1px #999 solid'}}>
                    <FontAwesomeIcon icon="th" size='lg'/>
                </div>
            </div>
        );
    }
}

export default Comment;