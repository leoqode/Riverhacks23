import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { useState } from "react";

export default function Nav() {

  const [showMobile, setShowMobile] = useState(false);

  return (
    <nav className="bg-zinc-900 text-zinc-50 select-none">
      <div className="mx-auto mr-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            {/* primary */}
            <div className="hidden md:flex space-x-4 items-center">
              <Link className='pt-1.5 pb-2.5 hover:text-zinc-300' to='/game'>Game</Link>
              <Link className='pt-1.5 pb-2.5 hover:text-zinc-300' to='/user'>Profile</Link>
              <Link className='pt-1.5 pb-2.5 hover:text-zinc-300' to='/mindful'>Social</Link>
            </div>
          </div>

          {/* mobile menu */}
          <div className="md:hidden flex items-center">
            <Hamburger shown={showMobile} onClick={() => {setShowMobile(!showMobile)}}/>
          </div>
        </div>
      </div>
      {/* make this flex and justify between */}
      <div className={`absolute z-10 w-full bg-zinc-900 transition-all md:hidden overflow-hidden flex flex-col justify-between ${showMobile ? ' max-h-64' : 'max-h-0'}`}>
        <Link className="block py-2 border-t border-zinc-800 grow" to="/game">Game</Link>
        <Link className="block py-2 border-t border-zinc-800 grow" to="/user">Profile</Link>
        <Link className='block py-2 border-t border-zinc-800 grow' to='/mindful'>Social</Link>
      </div>
    </nav>
  )
}