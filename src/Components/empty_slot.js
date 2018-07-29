import React,{Component} from 'react';

class EmptySlot extends Component{

    render(){
        return(
            <div className='empty-slot'>
                <div className='empty-slot-text'>
                    Available Slot
                </div>
            </div>
        );
    }
}

export default EmptySlot;