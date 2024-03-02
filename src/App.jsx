
import './App.css'
import FormContainer from './Components/FormContainer'
import BannerImage from './Components/ImageContainer'

function App() {
  
  return (
    <div className='bg-gradient-to-r from-indigo-500 to-purple-600 w-screen h-screen flex items-center justify-center font-sans'>
      <div className='bg-white w-[80%] h-[90%] flex justify-around items-center rounded-sm'>
      <FormContainer/>
      <BannerImage/>
      </div>
     
    </div>
  )
}

export default App
