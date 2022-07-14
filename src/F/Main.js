import './Tabel.css'
import { useState } from 'react'



export default function Main()
{
  function CheckWinner(arr)
  {
    if (JSON.stringify(arr[0]) === JSON.stringify(['x','x','x']) || JSON.stringify(arr[1]) === JSON.stringify(['x','x','x']) || JSON.stringify(arr[2]) === JSON.stringify(['x','x','x']) || JSON.stringify([arr[0][0],arr[1][1],arr[2][2]]) === JSON.stringify(['x','x','x']) || JSON.stringify([arr[0][2],arr[1][1],arr[2][0]]) === JSON.stringify(['x','x','x']) || JSON.stringify([arr[0][0],arr[1][0],arr[2][0]]) === JSON.stringify(['x','x','x']) || JSON.stringify([arr[0][1],arr[1][1],arr[2][1]]) === JSON.stringify(['x','x','x']) || JSON.stringify([arr[0][2],arr[1][2],arr[2][2]]) === JSON.stringify(['x','x','x']))
    {
      return 'x';
    }
    else if (JSON.stringify(arr[0]) === JSON.stringify(['o','o','o']) || JSON.stringify(arr[1]) === JSON.stringify(['o','o','o']) || JSON.stringify(arr[2]) === JSON.stringify(['o','o','o']) || JSON.stringify([arr[0][0],arr[1][1],arr[2][2]]) === JSON.stringify(['o','o','o']) || JSON.stringify([arr[0][2],arr[1][1],arr[2][0]]) === JSON.stringify(['o','o','o']) || JSON.stringify([arr[0][0],arr[1][0],arr[2][0]]) === JSON.stringify(['o','o','o']) || JSON.stringify([arr[0][1],arr[1][1],arr[2][1]]) === JSON.stringify(['o','o','o']) || JSON.stringify([arr[0][2],arr[1][2],arr[2][2]]) === JSON.stringify(['o','o','o']))
    {
      return 'o';
    }
    else{
      return 'draw';
    }
  }


  function Get(n)
  {
    if (0<n && n<4)
    {
    return [0,n-1];  
    }
    else if (3<n && n<7)
    {
      return [1,n-4];
    }
    else{
      return [2,n-7];
    }
  }

  const [Array, setArray] = useState([['-','-','-'],['-','-','-'],['-','-','-']]);
  const [Turn, setTurn] = useState('x');
  const [Count, setCount] = useState(1)

  function update(num){
    let arr = Array.flat();
    console.log(Array);
    
    if (arr.indexOf('-') !== -1 )
      {
        let [rw,cl] = Get(num);
        if (Array[rw][cl] === '-')
        {
          setCount(Count+1)
          if (Turn === 'x')
          {
            
            setTurn('o');
            Array[rw][cl] = 'x';
          }
          else
          {
            Array[rw][cl] = 'o';
            setTurn('x');
          }
          setArray(Array);
          let S = CheckWinner(Array);
          console.log(S === 'x')
          if (S === 'x' || S === 'o')
          {
            console.log('Im in');
            alert('Winner = '+S);
          }
          console.log('Count = ',Count)
          if (Count === 9)
          {
            alert('Draw Match')
          }
        }
        else
        {
          alert(num);
        }
      }
      else
      {
        let S = CheckWinner(Array)
        alert('Game completed '+S+' Winner')
      }
  }
  
  function Td({num})
  {
    let [rw,cl] = Get(num);
    return <td onClick={() => {update(num)}}>{Array[rw][cl]}</td>
  }
    return (
    <div>
      <h1 className='target' style={{'font-size':'50px'}}>Tic Toc Toe</h1>
      <h3 className='target1'>It's '{Turn}' Turn</h3>
      <table className='target'>
        <tbody>
          <tr>
            <Td num = {1}/>
            <Td num = {2}/>
            <Td num = {3}/>
          </tr>
          <tr>
            <Td num = {4}/>
            <Td num = {5}/>
            <Td num = {6}/>
          </tr>
          <tr>
            <Td num = {7}/>
            <Td num = {8}/>
            <Td num = {9}/>
          </tr>
        </tbody>
      </table>
    </div>
  )
}