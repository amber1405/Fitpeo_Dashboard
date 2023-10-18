
import Hero from './components/Hero'
import Navbar from './components/Navbar'
function App() {

  return (
    <div className='flex flex-col lg:flex-row'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
