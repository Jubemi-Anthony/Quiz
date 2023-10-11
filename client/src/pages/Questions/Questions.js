import "./Questions.css";
import {useEffect, useState} from 'react';
import { Link, useParams } from "react-router-dom";
import QuestionContainer from "../../components/QuestionContainer";
import {geology} from "../../data/geology";
import {science} from "../../data/science";
import {history} from "../../data/history";
import {animals} from "../../data/animals";
import {generalA} from "../../data/generalA";
import {generalB} from "../../data/generalB";
import {htmlcss} from "../../data/htmlcss";
import {football} from "../../data/football";
import {javascript} from "../../data/javascript";
import Done from "../../components/Done";
import Start from "../../components/Start";

const Questions = ({isOn, setIsOn, chosen, setChosen}) => {

    const {topic} = useParams();
    
    switch (topic) {
        case 'geology':
            setChosen(geology)
        break;
        case 'science':
            setChosen(science)
        break;
        case 'history':
            setChosen(history)
        break;
        case 'animals':
            setChosen(animals)
        break;
        case 'general 1':
            setChosen(generalA)
        break;
        case 'general 2':
            setChosen(generalB)
        break;
        case 'HTML & CSS':
            setChosen(htmlcss)
        break;
        case 'football':
            setChosen(football)
        break;
        case 'javascript':
            setChosen(javascript)
        break;
        default:
        break;
    }

    const [Q, setQ] = useState(1);
    const range = (Q / 20)*100; 
    const [gameQuestions, setGameQuestions] = useState([]);
    const [buttonText, setButtonText] = useState('next question');
    const [answered, setAnswered] = useState(false);
    const [optA, setOptA] = useState('');
    const [optB, setOptB] = useState('');
    const [optC, setOptC] = useState('');
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(70);
    const [timed, setTimed] = useState(null);
    const [finalExport, setFinalExport] = useState({
        user: 'Jubemi Pajiah',
        score: 0,
        category: topic,
    })
    useEffect(() => {
        if(timed === false) return;
        const countdown = setInterval(() => {
        if (time > 0) {
            setTime((prevTimes) => prevTimes - 1);
        }else{
            setIsOn('done');
        }
        }, 1000);
    
        return () => clearInterval(countdown);
    }, [time]);
    

    const shuffleGameQuestions = (arr) =>{
        const gameQuestionS = []
        for(let i=0; i<20; i++){
            gameQuestionS.push(arr[Math.floor(Math.random()*arr.length)])
        }
        setGameQuestions(gameQuestionS);
    }

    function nextQuestion(){
        if(answered === false) return;
        setOptA('');
        setOptB('');
        setOptC('');
        if(Q <= 19){
            setQ(Q+1);
            if(Q===19){
                setButtonText('finish');
            };
        }
        if(buttonText === 'finish'){
            setIsOn('done')
            setFinalExport({
                user: 'Jubemi Pajiah',
                score: score,
                category: topic,
            })
            console.log(finalExport);
        }
        setAnswered(false);
    }

    const startGame = ()=>{
        if(timed === null) return;
        setOptA('');
        setOptB('');
        setOptC('');
        setAnswered(false);
        shuffleGameQuestions(chosen);
        setQ(1);
        setIsOn('yes');
        setTime(70);
        setScore(0);
        setButtonText('next question')
        
    }
  return (
    <main className="Questions">
        {isOn === 'yes' ? 
        <div>
            <section className="top">
            <div className="container">
               <div className="highest">
               <div className="back">
                    <Link to='/'>
                    <img src="https://cdn2.iconfinder.com/data/icons/leto-most-searched-mix-6/64/__arrow_back_undo-64.png" alt="back" />
                    </Link>
                </div>
                <div className="high-right">
                    <div className="score"><img src="https://cdn4.iconfinder.com/data/icons/miscellaneous-icons-2-1/200/misc_movie_leaderboards1-64.png" alt="score" /> <span>{score}</span></div>
                    <div className="score">
                        <div className="time">
                        <img src="https://cdn1.iconfinder.com/data/icons/webina-seo-development-and-marketing/128/seo_web-80-64.png" alt="timer" />
                        </div>
                        <span className="time-span">{time}</span>
                    </div>
                </div>
               </div>
                <div className="range">
                    <p>Question {Q}<span>/{20}</span></p>
                    <div id="input-range">
                        <div style={{width: `${range}%`}}/>
                    </div>
                </div>
            </div>
        </section>

        <QuestionContainer
            gameQuestions={gameQuestions}
            Q={Q}
            answered={answered}
            setAnswered={setAnswered}
            isOn={isOn}
            optA={optA}
            optB={optB}
            optC={optC}
            setOptA={setOptA}
            setOptB={setOptB}
            setOptC={setOptC}
            setScore={setScore}
            score={score}
        />

        <div className="submit">
            <button onClick={nextQuestion}>{buttonText}</button>
        </div>
        </div> : isOn === 'no' ?
        <Start
            timed={timed}
            setTimed={setTimed}
            startGame={startGame}
        /> : <Done score={score} startGame={startGame}/>
        }
    </main>
  )
}

export default Questions