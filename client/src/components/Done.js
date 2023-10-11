
const Done = ({score, startGame}) => {
    const percent = (score/20) * 100;
  return (
    <section className="isOn">
        <div className="info">
            <div className="scoreInfo">
                <p>Your Score:</p>
                <p className="big">{score}</p>
            </div>
            <div className="percent">
                <p>{percent}%</p>
            </div>
            <div className="buttons">
                <button onClick={startGame}>Play Again</button>
                <button>Another Topic</button>
            </div>
        </div>
    </section>
    )
}

export default Done