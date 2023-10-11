import {shuffle} from 'lodash';
import { useState, useEffect } from 'react';

const QuestionContainer = ({
        gameQuestions, 
        Q, 
        setAnswered, 
        answered, 
        isOn,
        optA,setOptA,
        optB,setOptB,
        optC,setOptC,
        score,setScore
    }) => {

    const [gameOptions, setGameOptions]  = useState([0,1,2]);

    useEffect(() => {
      const doThis = ()=>{
        setGameOptions(shuffle([0,1,2]));
      }
        doThis()
    }, [isOn, Q])


    function getA(e){
        if(answered === true) return;
        setAnswered(true);
        if(e.target.value === gameQuestions[Q-1][1][0]){
            setOptA('y');
            setScore(score+1);
        }else{
            setOptA('n');
            
            if(document.getElementById('B').value === gameQuestions[Q-1][1][0]){
                setOptB('y');
            }
            if(document.getElementById('C').value === gameQuestions[Q-1][1][0]){
                setOptC('y');
            }
        }
    }
    function getB(e){
        if(answered === true) return;
        setAnswered(true);
        if(e.target.value === gameQuestions[Q-1][1][0]){
            setOptB('y')
            setScore(score+1);
        }else{
            setOptB('n');
            if(document.getElementById('A').value === gameQuestions[Q-1][1][0]){
                setOptA('y');
            } 
            if(document.getElementById('C').value === gameQuestions[Q-1][1][0]){
                setOptC('y');
            }
        }
    }
    function getC(e){
        if(answered === true) return;
        setAnswered(true);
        if(e.target.value === gameQuestions[Q-1][1][0]){
            setOptC('y')
            setScore(score+1);
        }else{
            setOptC('n');
            if(document.getElementById('A').value === gameQuestions[Q-1][1][0]){
                setOptA('y');
            }
            
            if(document.getElementById('B').value === gameQuestions[Q-1][1][0]){
                setOptB('y');
            }
        }
    }
  return (
    <section className="question-container">
        <div className="ask">
            <p>{gameQuestions[Q-1][0]}</p>
        </div>
        <div className="answer">
            <div className="option" >
                <textarea id='A' className={optA === 'y' ? 'correct' : optA === 'n' ? 'wrong' : ''} onClick={(e)=> getA(e)} readOnly value={gameQuestions[Q-1][1][gameOptions[0]]}/>
            </div>
            <div className="option" >
                <textarea id='B' className={optB === 'y' ? 'correct' : optB === 'n' ? 'wrong' : ''} onClick={(e)=> getB(e)} readOnly value={gameQuestions[Q-1][1][gameOptions[1]]}/>
            </div>
            <div className="option">
                <textarea id='C' className={optC === 'y' ? 'correct' : optC === 'n' ? 'wrong' : ''} onClick={(e)=> getC(e)} readOnly value={gameQuestions[Q-1][1][gameOptions[2]]}/>
            </div>
        </div>
    </section>
  )
}

export default QuestionContainer