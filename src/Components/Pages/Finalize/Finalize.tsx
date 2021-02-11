import React from 'react'
import { Link } from 'react-router-dom'

import { Paths } from '../../../data'

import './styles.scss'

export const Finalize: React.FC = () => {
  return (
    <div className='finalize'>
      <div className='wrapper'>
        <h1 className='finalize__title'>Finalize</h1>
        <p className='finalize__subtitle'>Spring promotion</p>
        <Link to={Paths.DASHBOARD}>
          <button className='button-back'>Back</button>
        </Link>
      </div>
    </div>
  )
}
