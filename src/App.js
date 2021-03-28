import './App.css';
import { Box } from '@material-ui/core';
import Navbar from './components/navbar/Navbar';
import Score from './components/score/Score';

function App() {
  return (
    <Box>
      <Navbar />
      <Score />
    </Box>
  );
}

export default App;
