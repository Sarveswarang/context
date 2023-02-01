import "./styles.css";
import{createContext, useContext, useState}from "react";

// export default function App() {
//   const[count,setcount]=useState(10);
//   return (
//     <countCtx.Provider>
//     <div className="App">
//        <Child count={count} setcount={setcount}/>
//         </div>
//         </countCtx.Provider>
//   );
// }

// function Child({count,setcount}){
//   return(
//     <div>
//       <h1>child</h1>
//      < GrandChild count={count} setcount={setcount}/>
//     </div>
//   )
// }
// function GrandChild({count,setcount}){
//   return(
//     <div>
//       <h2>GrandChild</h2>
//       <button onClick={()=>setcount(count+1)} > + </button>
//       count:{count}
//       <button onClick={()=>setcount(count-1)} > - </button>

//       </div>
//   )
// }
const countCtx=createContext();
export default function App() {
  const[count,setcount]=useState(10);
  return (
    <countCtx.Provider value={[count,setcount]}>
    <div className="App">
       <Child />
        </div>
        </countCtx.Provider>
  );
}

function Child(){
  return(
    <div>
      <h1>child</h1>
     < GrandChild />
    </div>
  )
}
function GrandChild(){
  const[count,setcount]=useContext(countCtx)
  return(
    <div>
      <h2>GrandChild</h2>
      <button onClick={()=>setcount(count+1)} > + </button>
      count:{count}
      <button onClick={()=>setcount(count-1)} > - </button>

      </div>
  )
}
