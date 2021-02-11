import React from 'react'
import { Link } from 'react-router-dom'

import { Paths } from '../../../data'

import './styles.scss'

export const Results: React.FC = () => {
  return (
    <div className='results'>
      <div className='wrapper'>
        <h1 className='results__title'>Results</h1>
        <p className='results__subtitle'>Order basket redisign</p>
        <Link to={Paths.DASHBOARD}>
          <button className='button-back'>Back</button>
        </Link>
      </div>
    </div>
  )
}
