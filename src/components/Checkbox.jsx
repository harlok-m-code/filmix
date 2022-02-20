import React, { useState } from 'react'

function Checkbox() {

    const [theme, setTheme] = useState(true)

    const changeTheme = (e) => {
        setTheme(!theme)
    }
  return (
        <div class="form-check form-switch">
            <input onClick={changeTheme} class="form-check-input theme" type="checkbox" id="flexSwitchCheckChecked"/>
            <label class="form-check-label" for="flexSwitchCheckChecked"></label>
        </div>
  )
}

export default Checkbox