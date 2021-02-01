import './App.css';
import {CTable} from './lib';
import {useEffect, useState} from 'react';

function App() {

  const [Data, setData] = useState([])
   
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setData(json))
  }, [])

  return (
    <div className="App">
        <CTable 
          caption={"Data"}
          data={Data}
          conditionalCellStyle={
            [
              {
                columns: ['id'],
                styleTrue: {
                  color: 'red'
                },
                styleFalse: {
                  color: 'green'
                },
                validation: function(value){
                  if(value  === 1) return true
                  else return false
                } 
              }
            ]
          }
        />
    </div>
  );
}

export default App;
