import React,{Component} from "react";
import EmptySlot from "./empty_slot";

class Board extends Component{
    render(){     
        let slots = [];  
        for (let i = 0 ;i<8;i++){
            slots.push(<EmptySlot key={i}/>);
        }
        return (
            <div className='board'>
                <div className="board-item">
                    <div className='board-item-title'>
                        <h3>YEAR 9 (next year)</h3>
                        <span>1 credit planned</span>
                    </div>
                    <div className='board-item-slots'>
                        <div className='green-slot'>
                            <div className='green-slot-color'></div>
                            <div className='green-slot-text'>
                                <span className='green-slot-title'>English</span><br/>
                                <span className='green-slot-code'>ENG1PL <span style={{color: "#aaa"}}>| English 9</span></span>
                                <span className='green-slot-corner'>1 cr.</span>
                            </div>
                        </div>
                        <div className='green-slot'>
                            <div className='green-slot-color'></div>
                            <div className='green-slot-text'>
                                <span className='green-slot-title'>Functions</span><br/>
                                <span className='green-slot-code'>MAT1U1 <span style={{color: "#aaa"}}>| Math 9</span></span>
                                <span className='green-slot-corner'>1 cr.</span>
                            </div>
                        </div>
                        <div className='slot-add'>
                            <div className='slot-add-color'><span>+</span></div>
                            <div className='slot-add-title'><span>Add Science 9</span></div>
                            <div className='slot-add-credit'>1 cr.</div>
                        </div>
                        <div className='slot-add'>
                            <div className='slot-add-color'><span>+</span></div>
                            <div className='slot-add-title'><span>Add Geography</span></div>
                            <div className='slot-add-credit'>1 cr.</div>
                        </div>
                        <div className='slot-add'>
                            <div className='slot-add-color'><span>+</span></div>
                            <div className='slot-add-title'><span>Add French</span></div>
                            <div className='slot-add-credit'>1 cr.</div>
                        </div>
                        <div className='slot-add'>
                            <div className='slot-add-color'><span>+</span></div>
                            <div className='slot-add-title'><span>Add Elective</span></div>
                            <div className='slot-add-credit'>1 cr.</div>
                        </div>
                        <EmptySlot/>
                        <EmptySlot/>
                        <div className='board-item-footer'>
                            <button className="btn btn-primary" type="button" >
                                <span>Ready To Submit</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='board-item-repeat first'>
                    <div className='board-item-repeat-title'>
                        <h3>YEAR 10</h3>
                        <span>0 credit earned</span>
                    </div>
                    <div className='board-item-repeat-slots'>
                        {slots}
                    </div>
                </div>
                <div className='board-item-repeat'>
                    <div className='board-item-repeat-title'>
                        <h3>YEAR 11</h3>
                        <span>0 credit earned</span>
                    </div>
                    <div className='board-item-repeat-slots'>
                        {slots}
                    </div>
                </div>
                <div className='board-item-repeat'>
                    <div className='board-item-repeat-title'>
                        <h3>YEAR 12</h3>
                        <span>0 credit earned</span>
                    </div>
                    <div className='board-item-repeat-slots'>
                        {slots}
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;