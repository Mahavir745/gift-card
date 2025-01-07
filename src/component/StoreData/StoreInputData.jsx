import { createContext, useReducer } from "react";

export const dataStoreProvider = createContext({
  InputData : [],
  addInputData : ()=>{},
})

const HandleInputData = (currentData,action) => {

  let newData  = currentData;
  if(action.type === "INPUT_DATA"){
    newData = {
      quantity: action.payload.quantity,
      names: action.payload.names,
      event: action.payload.event,
    }
  }
  return newData;
}

const defaultObj = {
  quantity: 3,
  names: "mahavir,Kumar,Mahato",
  event:"mixed",
}

const AllDataStoreProvider = ({children})=>{
  const [InputData, dispatchedInputData] = useReducer(HandleInputData,defaultObj)

  const addInputData = (quantity,names,event)=>{
    dispatchedInputData({
      type: "INPUT_DATA",
      payload: {
        quantity,names,event
      }
    })
  }
  return (
    <dataStoreProvider.Provider value={
     { 
      InputData,
      addInputData
    }
    }>
      {children}
    </dataStoreProvider.Provider>
  )
}

export default AllDataStoreProvider;