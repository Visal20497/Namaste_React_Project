import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    let error=useRouteError()
    console.log(error)
  return (
    <div>
        <h1>Opps !</h1>
        <h1>Something went wrong !</h1>
        {/* <div>{error.status}: {error.statusText}</div> */}
    </div>
  )
}

export default Error