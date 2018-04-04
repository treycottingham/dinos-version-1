import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import JobForm from './components/JobForm'
import JobList from './components/JobList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <JobList />
          <JobForm />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
