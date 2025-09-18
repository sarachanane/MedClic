import Signup from '@/components/Signup'
import React from 'react'

const page = ({params}) => {
  return (
    <Signup type={params?.type}  />
  )
}

export default page