import React from 'react'
import counterReducer from '../features/counter/counterSlice'
import usersReducer from '../features/users/usersSlice'

const rootReducer = {
  counter:counterReducer,
  users:usersReducer
}

export default rootReducer