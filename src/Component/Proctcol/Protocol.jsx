import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function Protocol({logindata}) {
  return (
    <>
{logindata?<Outlet/>  :<Navigate  to="/Login"/> }
</>
  )
}
