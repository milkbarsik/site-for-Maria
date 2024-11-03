import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import AppRouter from './components/router/appRouter'

function App() {

  return (
    <div className='wrapper'>
			<Header />
			<AppRouter />
			<Footer />
    </div>
  )
}

export default App
