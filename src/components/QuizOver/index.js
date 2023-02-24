import React, { useEffect, useState } from 'react'
import {GiTrophyCup} from 'react-icons/gi';
import Loader from '../Loader';

const QuizOver = React.forwardRef((props,ref) => {
  const {
    levelNames,
    score,
    maxQuestions,
    quizLevel,
    percent,
    loadLevelQuestions
  } = props;

 const [asked,setAsked] =  useState([]);

  useEffect(()=> {
      setAsked(ref.current);
  },[ref])

  const averageGrade = maxQuestions/ 2;
  if(score < averageGrade) {
    setTimeout(()=> loadLevelQuestions(quizLevel),3000)
  }
  const decision = score >= averageGrade ? (
    <>
        <div className='stepsBtnContainer'>
            {
              quizLevel < levelNames.length ?
            (
              <>
                <p className='successMsg'>Bravo, Passez au niveau suivant!</p>
                <button onClick={()=>loadLevelQuestions(quizLevel)} className='btnResult success'>Niveau Suivant</button>
              </>
            )
            :
            (
              <>
                <p className='successMsg'>
                <GiTrophyCup size='50px'/> Bravo vous etes un expert !</p>
                <button onClick={()=>loadLevelQuestions(0)} className='btnResult gameOver'>Acceuil</button>
              </>
              
            )
          }
        </div>

        <div className='percentage'>
          <div className='progressPercent'>Réussite: {percent}%</div>
          <div className='progressPercent'>Note: {score}/{maxQuestions}</div>
        </div>
     </>

  )
  :
  (
    <>
      <div className='stepsBtnContainer'>
          <p className='failureMsg'>Vous avez echoué !</p>
        </div>
        <div className='percentage'>
          <div className='progressPercent'>Réussite: {percent}%</div>
          <div className='progressPercent'>Note: {score}/{maxQuestions}</div>
        </div>
    </>

  )
  const questionAnswer =    score >= averageGrade ? (
    asked.map(question => {
      return(
      <tr key={question.id}>
        <td>{question.question}</td>
        <td>{question.answer}</td>
        <td>
          <button className='btnInfo'>Infos</button>
        </td>
      </tr>
      )
    }) 
    )
    :
    (
      <tr>
        <td colSpan="3">
          <Loader 
              loadingMsg='Pas de réponse'
              styling ={{textAlign:'center', color:'red'}}
          />
        </td>
    </tr>

    )

  return (
    <>
      {decision}

      <hr/>
      <p>Les réponses aux questions posées:</p>
      <div className='answerContainer'>
        <table className='answers'>
          <thead>
            <tr>
              <th>Questions</th>
              <th>Réponses</th>
              <th>Infos</th>
            </tr>
          </thead>
          <tbody>
              {questionAnswer}
          </tbody>

        </table>
      </div>
    </>
  )
})


export default React.memo(QuizOver)
