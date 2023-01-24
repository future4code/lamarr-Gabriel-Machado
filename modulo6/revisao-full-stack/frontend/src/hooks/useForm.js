import {useState} from "react";

export const  useForm = (initialState) => {
    const [ form, setForm ] = useState(initialState)
    const onChange = ( event ) => {
        const {name, value} = event.target
        const newForm = { ...form, [name]: value }
        setForm(newForm)
    }
    const resetState = () => {
        setForm(initialState)
    }
    return [form, onChange, resetState ]
}