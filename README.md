# How to run the project

To run the project locally, all you need to do is clone it and then run 'npm install && npm start'. If a browser tab doesn't open automatically, just go to 'localhost:3000' and you should be able to see the app.

# Notes

* I started the app with create-react-app and added the following: typescript and react-router
* Each page has its own folder with index/style/test files, which are imported by the App.tsx file.
* Functional components allow us to extract the most from hooks and other es6+ features of JS.
* There are plenty of improvements to be made but i kept it simple for the most part. A few examples that we can discuss: 

1) isolate the strings and import them on the files, 
2) using a css preprocessor, 
3) global state management if we were to build something bigger, 
4) responsive design for a set of different screen resolutions,
5) add an http client such as axios for more robust request logic,
6) add more tests (unit, integration and even e2e depending on the feature and necessity),
among some others. :)