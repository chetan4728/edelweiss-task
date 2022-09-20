
import GetUserDetails from './pages/getUserDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowUserDetails from './pages/showUserDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' exact element={<GetUserDetails/>}/>
      <Route path='/details' exact element={<ShowUserDetails/>}/>
    </Routes>
   </Router>
  );
}

export default App;
