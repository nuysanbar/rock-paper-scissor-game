import Result from './result';
import Play from './play'
import {useState} from 'react';
import {MdReplayCircleFilled} from 'react-icons/md';
const App=()=>{
    const [switchOn,setSwitc]=useState('play');
    const [yourSelection,setYourSelection]=useState('');
    const [computerSelection,setComputerSelection]=useState('');
    const [whoWin,setWhoWin]=useState('');
    const [yourWins,setYourWins]=useState(0);
    const [computerWins,setComputerWins]=useState(0);
    const handlePlay=(choice)=>{
        setSwitc('result');
        const choices=['rock','paper','scissor'];
        let generateRandom=()=>{
            return choices[Math.floor(Math.random()*3)]
        }
        const computerValue=generateRandom();
        if(choice==computerValue){
            setWhoWin('try again')
        }
        else if(choice=='rock'&&computerValue=='paper'){
            setWhoWin('lost')
            setComputerWins(()=>computerWins+1)
        }
        else if(choice=='scissor'&&computerValue=='paper'){
            setWhoWin('win')
            setYourWins(()=>yourWins+1)
        }
        else if(choice=='rock'&&computerValue=='scissor'){
            setWhoWin('win')
            setYourWins(()=>yourWins+1)
        }
        else if(choice=='paper'&&computerValue=='scissor'){
            setWhoWin('lost')
            setComputerWins(()=>computerWins+1)
        }
        else if(choice=='paper'&&computerValue=='rock'){
            setWhoWin('win')
            setYourWins(()=>yourWins+1)
        }
        else{
            setWhoWin('lost')
            setComputerWins(()=>computerWins+1)
        }
        setYourSelection(choice);
        setComputerSelection(computerValue);
    }
    return (
        <div className="main">
            {switchOn==="play"?<Play handlePlay={handlePlay}/>:
            <Result yourSelection={yourSelection} 
                    computerSelection={computerSelection}
                    whoWin={whoWin}/>}
            <h4 className='score'>you {yourWins}   |   {computerWins} comp</h4>
            {switchOn ==="result" && <MdReplayCircleFilled onClick={()=>setSwitc('play')} className="playAgain"/>}
        </div>
    )
}
export default App;