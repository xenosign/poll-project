import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PollMain from './pages/PollMain';
import PollDetail from './pages/PollDetail';
import PollSuggest from './pages/PollSuggest';
import UserMain from './pages/UserMain';
import UserDetail from './pages/UserDetail';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={ <MainPage/> } />
        <Route path="/poll" element={ <PollMain/> } />
        <Route path="/poll/:id" element={ <PollDetail/> } />
        <Route path="/poll/suggest" element={ <PollSuggest/> } />
        <Route path="/user" element={ <UserMain/> } />
        <Route path="/user/:id" element={ <UserDetail/> } />\
        <Route path="/register" element={ <Register/> } />
        <Route path="/login" element={ <Login/> } />
      </Routes>
    </Router>            
  );
}

export default App;
