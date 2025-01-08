import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { dataStoreProvider } from '../StoreData/StoreInputData';

const InputField = () => {

  const {addInputData} = useContext(dataStoreProvider)

  const quantityElement = useRef();
  const namesElement = useRef();
  const eventElement = useRef();
  const navigate = useNavigate();


  const HandleSubmitForm = (e) => {
    e.preventDefault();
    const quantity = quantityElement.current.value;
    const names = namesElement.current.value;
    const event = eventElement.current.value;
    const id = Date.now();
    quantityElement.current.value = "";
    namesElement.current.value = "";
    eventElement.current.value = " ";

    let count = 0

    if(quantity !== ""){
      count+=1
    }

    if(names != ""){
      count+=1
    }

    if(count === 2){
      addInputData(quantity,names,event.toLowerCase())
      navigate("/cards")
    }
    else{
      count = 0
      alert("* mandatory should be value")
    }

  }
  return (
    <div className='w-[100%] h-[500px] flex items-center'>
      <form className='w-[600px] h-auto p-2 m-auto border border-pink-600 rounded-md  shadow-md shadow-pink-500 flex flex-col  gap-3 justify-between' onSubmit={(e) => HandleSubmitForm(e)}>
        <div className='flex gap-2'>
          <div className='border border-white w-auto h-[100px] p-3'>
            <label htmlFor="quantity" className='block text-pink-600 mb-2'> How Many Cards You Want: <span className='text-black'>*</span></label>
            <input type="number" placeholder='Enter a number' ref={quantityElement} className='border rounded-md w-[100%] p-2 text-gray-600 focus:outline-pink-300 text-[14px]' />
          </div>
          <div className='border border-white w-auto h-[100px] p-3 flex-grow'>
            <label htmlFor="name" className='block text-pink-600 mb-2'>Card Name:</label>
            <input type="text" placeholder="Eg: love,Birthday etc." ref={eventElement} className='border rounded-md w-[100%] p-2 text-gray-600 focus:outline-pink-300 text-[14px]' />
            <span className='text-[11px] text-pink-600'>Eg: love,Birthday etc."</span>
          </div>
        </div>
        <div className='border border-white w-auto h-[100px] p-3'>
          <label htmlFor="name" className='block text-pink-600 mb-2'>Enter Your Friends Name: <span className='text-black'>*</span></label>
          <input type="text" placeholder="Enter your friend's name, separated by commas." ref={namesElement} className='border rounded-md w-[100%] p-2 text-gray-600 focus:outline-pink-300 text-[14px]' />
        </div>
        <div>
          <button type="submit" className='bg-pink-500 text-white p-2 w-[100%] rounded-md'>Create Cards</button>
        </div>
      </form>
    </div>
  )
}

export default InputField