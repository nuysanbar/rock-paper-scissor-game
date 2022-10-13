import {useState} from 'react';
import {BsFillTrophyFill} from 'react-icons/bs';
const Result=({yourSelection,computerSelection,whoWin})=>{
    return (
        <div>
             <div className='win'>
               <h1 className='winner'> {whoWin=='win'? <BsFillTrophyFill  className='trophy'/>:whoWin=='lost'?<span className='lost'>{whoWin}</span>:<span className='tryAgain'>{whoWin}</span>}</h1>
            </div>
            <div className="imageContainer">
                <div>
                    <img src ={`./gameImages/${yourSelection}.jpg`} className="image" alt="your choice"/>
                </div>
                <div>
                    <img src={`./gameImages/${computerSelection}.jpg`} className="image" alt='computer selected'/>
                </div>
            </div>
        </div>
    )
}
export default Result;