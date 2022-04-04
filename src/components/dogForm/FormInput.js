import React from 'react'

const FormInput = (props) => {
  const { label, type = 'text', name, value } = props

  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} value={value} required />
    </div>
  )
}

export default FormInput
