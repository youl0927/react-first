import { useEffect } from "react";
import "./App.css";

/*
function App() {

  console.log('App실행됨');

  const[num, setNum] = useState(5);

  let sample = [
    {id:1, name:"홍길동"},
    {id:2, name:"임꺽정"},
    {id:3, name:"장보고"},
    {id:4, name:"코스"}
  ];

  const [users,setUsers] = useState(sample);


  const download =() =>{
    //sample.push({id:5, name: '조자룡'});
    //const a = sample.concat({id:5, name: '조자룡'});
    //console.log(a);
    
    setUsers([...sample,{id:num, name:'조자룡'}]);
    setNum(num+1);
  }

return <div>
  <button onClick={download}>다운로드</button> 
  {users.map(u=>(
    <h1>
      {u.id},{u.name}
      </h1>
    ))} 
</div>
}

export default App;
*/

function App(){

  useEffect(() => {
    effect
    return () =>{
      cleanup
    }
  },[input])


  return <div>Hello World</div>;
}

export default App;