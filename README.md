# Text (Joke) Generator Frontend
* Frontend of Text Generator backend application (https://github.com/CS201-G2T10/rest-api.git)
* Text generator uses a Weighted Directed Graph
* Compiles down predictions to a Range Tree (RBT) to improve time complexity of non greedy predictions

<p align="center">
  <img src="https://imgur.com/b0dxWG5.png" width="300" title="">
  <img src="https://imgur.com/gjx3nRe.png" width="300" title="">
</p>

### Running the Application
* Running the Backend (https://github.com/CS201-G2T10/rest-api.git)
* Running the Frontend
```
brew install node           // Download node / npm => for macs
npm i                       // instal node_modules
npm start                   // running dev server on localhost:3000

npm i -g serve              // install build server
npm run build               // build react application
serve -s build -p 3000      // running build server on localhost:3000
```

### Text Generation Algorithm / Data Structure
<p align="center">
  <img src="https://imgur.com/fOw9VDh.png" width="400" title="">
</p>