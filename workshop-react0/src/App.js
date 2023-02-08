import logo from './logo.svg';
import './App.css';
import {findLongestWord} from './Ecmascript/Ecmascript'
import { search } from './Ecmascript/fonction';
function App() {



//Question 3
let students=[{name:'John',id:123,marks:98},
{name:'Baba',id:101,marks:23},
{name:'John',id:200,marks:45},
{name:'Wick',id:115,marks:45}

]

let totalMarks = students.reduce((acc, curr) => {
  if (curr.marks < 50) {
    acc += curr.marks + 15;
  } else {
    acc += curr.marks;
  }
  return acc;
}, 0);

console.log(totalMarks);

//Question 4
let Tab = [
  { id:1 , name: 'John', marks: 98 },
  { id:2 , name: 'Baba', marks: 23 },
  { id:3, name: 'Jane', marks: 45 },
  { id:4 , name: 'Wick', marks: 85 }
];



Tab.push({ id:10 , name: 'New Name', marks: 50 });
console.log(search(Tab, 3));
  
  return (
    <div className="App">
         
    </div>
  );
}

//Question 1 
const str=["this","isssssssssss","esprit"]

console.log(findLongestWord(str));



//Question 2
const array=[["a","b","c"],["b","c","a"],["d","f","f"]]

const countOccurrences = (array) => {
  return array.flat().reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
};


console.log(countOccurrences(array))




export default App;
