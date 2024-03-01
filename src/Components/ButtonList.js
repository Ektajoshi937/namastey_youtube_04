import React from 'react'
import ButtonData from './ButtonData'

const list=['All','Gaming','Songs','Live','Socker','Cricket','Cooking','Valentines','Education']

const ButtonList = () => {

  return (
    <div className='flex m-2'>
    {
        list.map((data) => <ButtonData key = {data}name={data}/>)
    }
    </div>
    
    // <div className='flex m-2'>
    //     <ButtonData name="All"/>
    //     <ButtonData name="Gaming"/> 
    //     <ButtonData name="Songs"/> 
    //     <ButtonData name="Live"/>
    //     <ButtonData name="Socker"/>
    //     <ButtonData name="Cricket"/>
    //     <ButtonData name="Cooking"/>
    //     <ButtonData name="Valentines"/>
    // </div>
  )
}

export default ButtonList