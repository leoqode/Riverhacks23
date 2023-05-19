import { Outlet } from "react-router-dom";
import Nav from "./Nav";


// eslint-disable-next-line react/prop-types
export default function NavRoute({ children }) {
  
  return (
    <div className='flex flex-col w-full h-full'>
      <Nav/>
      <div style={{backgroundSize:'100%',backgroundColor:'#a2d5ac'}} className="grow overflow-y-scroll scrollbar-hide">
        { children ? children : <Outlet /> }
      </div>
    </div>
    )
}