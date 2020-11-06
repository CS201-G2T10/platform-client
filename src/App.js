import React, { useState } from 'react'
import './App.css';
// import qs from 'qs'

/* eslint-disable no-console */

const Page = () => {
  const [word, setWord] = useState('');
  const [num, setNum] = useState(30);
  const [sentences, setSentences] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchParams = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({first_word: word, max_length: num})
    };
    fetch("http://localhost:8080/api/model/predict", fetchParams)
      .then(res => res.json())
      .then((res) => {
        setSentences([
          res,
          ...sentences
        ])
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="page">
      <div className="page-header">
        <div>Generating Sentences</div>
      </div>
      <div className="page-input">
        <form onSubmit={handleSubmit}>
          <div>
            <div>Enter a Word</div>
            <input
              type="text"
              onChange={(e) => { setWord(e.target.value) }}
              value={word}
              placeholder="Starting Word..."
            />
          </div>
          <div>
            <div>Enter a Number</div>
            <input
              type="number"
              onChange={(e) => { setNum(e.target.value) }}
              value={num}
            />
          </div>
          <input
            type="submit"
            value="GENERATE Sentence!"
          />
        </form>
      </div>
      <div className="page-list">
        <div className="page-list-header">Sentences:</div>
        <div className="page-list-map">
          {sentences.map((sentence) => {
            return (
              <div className="page-list-sentence">
                <div>
                  Generation Parameters:&nbsp;
                  &quot;
                  {sentence.joke}
                  &quot;
                  &nbsp; Length:&nbsp;
                  {sentence.max_length}
                </div>
                <div className="bigger">
                  {sentence.first_word}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Page
