import React from 'react'
import {Label} from 'semantic-ui-react'

const FormErrors = ({formErrors}) => (
  <div>
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <Label pointing key={i} style={{color: 'red'}}>
            {fieldName.slice(0, 1).toUpperCase()}
            {fieldName.slice(1)} {formErrors[fieldName]}
          </Label>
        )
      } else {
        return ''
      }
    })}
  </div>
)

export default FormErrors
