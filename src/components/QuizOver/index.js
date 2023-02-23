import React, { useEffect, useState } from 'react'

const QuizOver = React.forwardRef((props,ref) => {
 const [asked,setAsked] =  useState([]);

  useEffect(()=> {
      setAsked(ref.current);
  },[ref])

  const questionAnswer =  asked.map(question => {
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
  
  return (
    <>
      <div className='stepsBtnContainer'>
        <p className='successMsg'>Bravo vous etes un expert !</p>
        <button className='btnResult success'>Niveau Suivant</button>
      </div>
      <div className='percentage'>
        <div className='progressPercent'>Réussite: 10%</div>
        <div className='progressPercent'>Note: 10/10</div>
      </div>
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
