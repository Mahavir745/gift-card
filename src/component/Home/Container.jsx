import React, { useContext, useEffect, useState } from 'react'
import CardFrame from './CardFrame'
import { dataStoreProvider } from '../StoreData/StoreInputData'
import Quotes from "../StoreData/Quotes"

const Container = () => {
  const { InputData } = useContext(dataStoreProvider)
  const [card, setCard] = useState([])
  let [newImageData, setnewImageData] = useState([]);


  let name = InputData.names || "Mahavir,Kumar,Mahato"
  const namestr = name.split(",")

  let heading;
  if (InputData.event === "" || InputData.event === "mixed") {
    heading = "For You"
  }
  else {
    heading = InputData.event 
  }


  useEffect(() => {
    const data = Quotes.filter((item) => {
      if (!(InputData.event.includes(item.heading))) {
        return item.heading === "mixed"
      }
      else if(InputData.event.includes(item.heading)){
        return item
      }
    })

    const newdata = data[0].quotes;
    const ImageArray = data[0].images;

    const quantity = InputData.quantity || 3
    let newArray = []
    let newImageArray = []

    for (let i = 0; i < quantity; i++) {
      let random = Math.floor(Math.random() * newdata.length)
      const quote = newdata[random]
      const image = ImageArray[random];

      newArray.push(quote)
      newImageArray.push(image)
    }

    setCard(newArray)
    setnewImageData(newImageArray)
  }, [InputData])



  return (
    <div className='w-[100%] p-2 flex justify-center flex-wrap gap-3'>
      {card.map((item, index) => <CardFrame 
      key={index}
      item={item}
      name={namestr[index]}
      heading={heading}
      image={newImageData[index]} />)}
    </div>
  )
}

export default Container