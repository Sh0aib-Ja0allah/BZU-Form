import './App.css';
import BasicTable from './Components/Data/BasicTable';
import Form from './Components/Form/Form.tsx';

function App() {
  return (
    <div className="App">
      <Form />
      <hr />
      <BasicTable />
    </div>
  );
}

export default App;

// icons library:
// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

// Material UI:
// npm install @mui/material @emotion/react @emotion/styled

// Axios library:
// npm install axios