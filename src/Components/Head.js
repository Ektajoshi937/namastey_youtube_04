 import React from "react";
 import {useDispatch} from 'react-redux';
import { toggleMenu } from "../utils/appSlice";
 const Head=()=>{
   const dispatch=useDispatch();
   const toggleMenuHandler = ()=>{
      dispatch(toggleMenu());
   }
    return (
   <div className="grid grid-flow-col p-2 m-2 shadow-lg">
   <div className="flex col-span-1">
      <img 
      onClick={()=>toggleMenuHandler()}
      alt="menu" 
      className="h-8 cursor-pointer"
      src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"/>
      <a href="/"></a>
      <img 
      className="h-8 ml-2"
      alt="youtube_logo" 
      src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"/>
   </div>
   <div className="col-span-10 text-center">
      <input className ="w-1/2 border border-gray-400 rounded-l-full p-2"type="text" placeholder="Search"/>
      <button className="border border-gray-400 rounded-r-full px-2 py-2">🔍</button>
   </div>
   <div className="col-span-1">
      <img alt="user-icon" className="h-8" src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"/>
   </div>
   
   </div>   
   
    )
 }

 export default Head;