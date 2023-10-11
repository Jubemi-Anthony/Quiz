
const Done = () => {
  return (
    <section className="isOn">
        <div className="info">
            <div className="scoreInfo">
                <p>Your Score:</p>
                <p className="big">{15}</p>
            </div>
            <div className="percent">
                <p>25%</p>
            </div>
            <div className="buttons">
                <button>Play Again</button>
                <button>Another Topic</button>
            </div>
        </div>
    </section>
    )
}

export default Done