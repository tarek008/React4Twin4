import logo from './logo.svg';
import './App.css';

function App() {

  const input=[["a","b","c"],["c","d","f"],["d","f","g"]]  
const obj={}

const occurence=(tab)=>{
  tab.map((each)=>{
  if (obj[each]){
    obj[each]+=1
  }else{
    obj[each]=1
  }  
   
})
   return obj
}



let students=[{name:'John',id:123,marks:98},
{name:'Baba',id:101,marks:23},
{name:'John',id:200,marks:45},
{name:'Wick',id:115,marks:45}

]
const summ=0
const res = students.map(function(input){
 if(input.marks>50){
  summ=summ+input.marks
 }
 return summ ;
})

const Tab={}
Tab.push({nom:"Haythem"},{prenom:"Manoubi"})


  
  return (
    <div className="App">
        <p>Test:</p>
    </div>
  );
}

export default App;
