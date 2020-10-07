import React, { useState } from 'react'
import './App.css';
import qs from 'qs'

/* eslint-disable no-console */

const Page = () => {
  const [word, setWord] = useState('trump');
  const [num, setNum] = useState(50);
  const [sentences, setSentences] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchParams = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      mode: 'cors',
      body: qs.stringify({string: word, length: num})
    };
    fetch("http://localhost:8081/api/model", fetchParams)
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
                  {sentence.word}
                  &quot;
                  &nbsp; Length:&nbsp;
                  {sentence.length}
                </div>
                <div className="bigger">
                  {sentence.sentence}
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
