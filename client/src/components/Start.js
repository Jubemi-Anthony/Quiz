
const Start = ({startGame, timed, setTimed}) => {
  return (
    <div className="isOn">
        <div className="timerQuestion">
            <h1>Do you want a timer?</h1>
          <div className="check">
            <div onClick={()=> setTimed(false)} className="checks">
              <div className="holdMe">
                <img src="https://cdn4.iconfinder.com/data/icons/time-121/24/timer-no-64.png" alt="No Timer" />
              </div>
              {timed === false && <p>Choosing this option means that your game won't be timed, your score won't be uploaded to the database and won't be ranked in the global highscore.</p>}
            </div>
            <div onClick={()=> setTimed(true)} className="checks">
              <div className="holdMe">
                <img src="https://cdn4.iconfinder.com/data/icons/remixicon-system/24/timer-flash-fill-64.png" alt="Timer" />
              </div>
              {timed === true && <p>Choosing this option means that your game would be timed, your score would be uploaded to the database and would be ranked in the global highscore.</p>}
            </div>
          </div>
          </div>
        <button onClick={startGame}>START</button>
    </div>
  )
}

export default Start