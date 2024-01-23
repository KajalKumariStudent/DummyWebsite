import React from 'react'
import { useParams } from "react-router-dom";

function User() {
    const {id} = useParams();
  return (
    <div className='bg-gray-600 text-cyan-50 text-3xl p-4'>
      User : {id}
    </div>
  )
}

export default User
