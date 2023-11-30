import './App.css'
import HomePage from './components/Home/HomePage'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HomePage />
      </main>
    </div>
  )
}

export default App
