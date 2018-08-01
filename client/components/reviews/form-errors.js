import React from 'react'

const FormErrors = ({formErrors}) => (
  <div>
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <p key={i} style={{color: 'red'}}>
            {fieldName.slice(0, 1).toUpperCase()}
            {fieldName.slice(1)} {formErrors[fieldName]}
          </p>
        )
      } else {
        return ''
      }
    })}
  </div>
)

export default FormErrors
