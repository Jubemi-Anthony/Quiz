import { useNavigate } from "react-router-dom";

const Done = ({score, startGame, topic}) => {
    const navigate = useNavigate();
    const percent = (score/20) * 100;
    function goHome(){
        navigate('/');
    }
  return (
    <section className="isOn">
        <div className="info">
            <div className="scoreInfo">
                <p>Your Score:</p>
                <p className="big">{score}</p>
            </div>
            <div className="scoreInfo">
                <p>Category:</p>
                <p className="big">{topic}</p>
            </div>
            <div className="percent">
                <p>{percent}%</p>
            </div>
            <div className="buttons">
                <button onClick={startGame}>Play Again</button>
                <button onClick={goHome}>Another Topic</button>
            </div>
        </div>
    </section>
    )
}

export default Done