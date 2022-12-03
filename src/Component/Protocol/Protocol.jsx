import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function Protocol({loginData}) {
  return (
    <>
      {loginData?<Outlet/>  :<Navigate  to="/Login"/> }
    </>
  )
}
