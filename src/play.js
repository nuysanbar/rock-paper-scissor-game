const  Play=({handlePlay})=>{
    return(
        <div>
            <div><h3 className="play"><span className="rock"><span className="rocka">rock </span><span className="paper">paper </span><span className="scissor">scissor </span></span></h3></div>
            <img onClick={()=>handlePlay('rock')} src="./gameImages/rock.jpg" alt="rock" className="playImage"/>
            <img onClick={()=>handlePlay('paper')} src="./gameImages/paper.jpg" alt="paper" className="playImage"/>
            <img onClick={()=>handlePlay('scissor')} src="./gameImages/scissor.jpg" alt="scissor" className="playImage"/>
        </div>
    )
}
export default Play;