import './App.css';
import { CTable, TableContainer } from './lib';
import { useEffect, useState } from 'react';

function App() {

  const DATA = [
    {
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
    },
    {
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv"
    },
    {
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
    },
  ]

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: 30
    }}>
      <TableContainer>
        <CTable
          headerColor={'#c7b800'}
          primaryColor={'#ffff56'}
          secondaryColor={'#ffea00'}
          data={DATA}
        />
      </TableContainer>
    </div>
  );
}

export default App;
