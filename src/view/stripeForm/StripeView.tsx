import React from 'react'
import STPayForm from '../../Components/PayForms/STForm/STPayForm'

function StripeView():React.ReactElement {
  return (
    <div className="flex justify-center my-52">
      <STPayForm />
    </div>
  )
}

export default StripeView