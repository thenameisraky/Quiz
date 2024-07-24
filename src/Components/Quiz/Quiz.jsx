import React, { useState } from 'react';
import './quiz.css';
import { data } from '../../Data';

export default function Quiz() {
  const [index , setIndex]=useState(0);
  const [question , setQuestion]=useState(data[index]);

  const [isLastPage,setIslastPage]=useState(false);

  const[score,setScore]=useState(0);

  const [lock,setLock]=useState(false);

    function newQuestion()
    {
      setLock(false);
//use
      const listItems = document.querySelectorAll('li');
      listItems.forEach((item) => {
        item.classList.remove('correct');
        item.classList.remove('incorrect');
      });
//use
      if(index < data.length-1)
      {
      setIndex(index+1);
      setQuestion(data[index+1]);
      }
      else
      {
        setIslastPage(true);
      }
    
    }
    if(isLastPage=== true)
    {
      return(
        <h3 className='bod'> Congrats, Quiz is Completed!...  <br></br> score ={score} </h3>
      )
    }

    
    
    function checkAnswer(e,ans)
    {
      if(lock === false)
      {
        if(ans === question.ans)
          {
            setScore(score+1);
            e.target.classList.add('correct');
            
          }
          else
          {
            e.target.classList.add('incorrect');
           
            const correctOption = document.querySelector(`li:nth-child(${question.ans})`);
            correctOption.classList.add('correct');
          }
      }
      setLock(true);
    }
  
  return (
    
    <div className='quiz' draggable>
        <h1 className='head'>Kod Quiz</h1>
        <p className='cont'></p>
        <h3>{question.question}</h3>
        <ul>
            <li  onClick={(e)=>{checkAnswer(e,'1')}}>{question.option1} </li>
            <li  onClick={(e)=>{checkAnswer(e,'2')}}>{question.option2}  </li>
            <li  onClick={(e)=>{checkAnswer(e,'3')}}> {question.option3} </li>
            <li  onClick={(e)=>{checkAnswer(e,'4')}}> {question.option4} </li>
            
           
            
        </ul>
        <button onClick={newQuestion}>Next</button>
        <div>Question:{index+1} of{data.length}  </div>

        
    </div>
  )
}
