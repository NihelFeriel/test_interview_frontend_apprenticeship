
import './App.css'
import Greeting from './components/Greeting.jsx'
import Counter from './components/Counter.jsx'

function App() {
  
  const names = ['Alice', 'Bob', 'Charlie', 'David'];

  return (
    <div className='container'>
      
      {names.map((name, index) => (
        <div key={index} className='card'>
          <Greeting name={name} />
          <Counter />
        </div>
      ))}
      
    </div>
  )
}

export default App
