import React from 'react'
import { Link} from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <Link to={'./contact'}>
        <button>go to contact</button>
        </Link>
       
    </div>
  )
}

