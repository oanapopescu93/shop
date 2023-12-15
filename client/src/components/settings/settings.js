import React from 'react'
import Setting from './setting'

function Settings(props) {
    const {settings} = props
    let lang = settings.lang
    let currency = settings.currency
    let language_array = settings.language_array
    let currency_array = settings.currency_array

    return <div className="settings">
        <Setting title={lang} array={language_array} template="language" id="language_button"></Setting>
        <Setting title={currency} array={currency_array} template="currency" id="currency_button"></Setting>
    </div>
}

export default Settings