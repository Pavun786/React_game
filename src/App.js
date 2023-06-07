import {useState} from "react";
import './App.css';

function App() {

  const [count,setCount] = useState(1);

  const [winner,setWinner] = useState("");

  const [char,setChar] = useState("X");

  const[matrix,setMatrix]=useState([
    ["","",""],
    ["","",""],
    ["","",""],
  ])

 
 const getBGClass =(value)=>{
    if( value === "X") return "yellow";
    if(value === "O") return "orange";

    return "";
  }

  const checkWinner =()=>{

    //Check row wise:

    if( matrix[0][0] && matrix[0][0] === matrix[0][1] && matrix[0][1] === matrix[0][2] ){
      setWinner(matrix[0][0] + 'is the winner🎉🎊🏆')
    }

    if( matrix[1][0] && matrix[1][0] === matrix[1][1] && matrix[1][1] === matrix[1][2] ){
      setWinner(matrix[1][0] + 'is the winner🎉🎊🏆')
    }
    if( matrix[2][0] && matrix[2][0] === matrix[2][1] && matrix[2][1] === matrix[2][2] ){
      setWinner(matrix[2][0] + 'is the winner🎉🎊🏆')
    }

    //Check col wise:
    if(matrix[0][0] && matrix[0][0] === matrix[1][0] && matrix[1][0] === matrix[2][0] ){
      setWinner(matrix[0][0] + 'is the winner🎉🎊🏆')
    }

    if(matrix[0][1] && matrix[0][1] === matrix[1][1] && matrix[1][1] === matrix[2][1] ){
      setWinner(matrix[0][1] + 'is the winner🎉🎊🏆')
    }

    if(matrix[0][2] && matrix[0][2] === matrix[1][2] && matrix[1][2] === matrix[2][2] ){
      setWinner(matrix[0][2] + 'is the winner🎉🎊🏆')
    }

    //Check Diagonal wise:
    if(matrix[0][0] && matrix[0][0] === matrix[1][1] && matrix[1][1]=== matrix[2][2] ){
      setWinner(matrix[0][0] + 'is the winner🎉🎊🏆')
    }

    if(matrix[0][2] && matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0] ){
      setWinner(matrix[0][2] + 'is the winner🎉🎊🏆')
    }

    if(count === 9){
      setWinner("The Match has been drawn")
      
    }
  }

  const handleClick =(r,c)=>{

    if(matrix[r][c]) return; //its used for not allow cell change dynamicaly

    const tempMatrix = [...matrix];
    tempMatrix[r][c]= char;
    setMatrix(tempMatrix);
    setChar(char === "X" ? "O":"X");
    setCount(count + 1);
    checkWinner()
    console.log(count)
  }

  return (
    <div className="app">

    <div className="header alignCenter">

        Tic Tac Toe Game
    </div>
     <div className="board alignCenter">

{/* //write for  winner messasge & turn now messages change dynamically */}
      { !winner && <p>{char} turn now..</p>} 
     
     <div className="gameBoard"> 
    
    {/* write for winner message & gameboard change dynamically */}

     { winner || matrix.map((row,rIndex)=>(
        <div className="row">
          {
            row.map((cell,cIndex)=>(
              <div 
              onClick={()=> handleClick(rIndex,cIndex)}
              className={`cell alignCenter ${getBGClass(matrix[rIndex][cIndex])}`}>{matrix[rIndex][cIndex]}</div>

            ))
          }
        </div>
      ))
     }
     </div>
     <button className="btn" onClick={()=>{
        setCount(1)
        setWinner(""); 
        setMatrix(
          [
            ["","",""],
            ["","",""],
            ["","",""],
          ]
        )

     }} >Restart Game</button>
     </div>
       </div>
  );
}

export default App;
