import * as React from "react"
import { useReducer} from "react";
import {passwordReducer} from "../reducers/password";

export default function Home() {

    const [password, dispatch] = useReducer(passwordReducer,initalState)

    const onUppercase = (e) => {
        dispatch({
            type: 'UPPERCASE',
            payload: e.target.checked
        })
        console.log(e.target.checked)
    }

    const onLowercase = (e) => {
        dispatch({
            type: 'LOWERCASE',
            payload: e.target.checked
        })
        console.log(e.target.checked)
    }

    const onNumbers = (e) => {
        dispatch({
            type: 'NUMBERS',
            payload: e.target.checked
        })
        console.log(e.target.checked)
    }

    const onSymbols = (e) => {
        dispatch({
            type: 'SYMBOLS',
            payload: e.target.checked
        })
        console.log(e.target.checked)
    }

    const onLength = (e) => {
        dispatch({
            type: 'LENGTH',
            payload: e.target.value
        })
        console.log(e.target.value)
    }

  return (
      <div className="container">
          <input
                type="checkbox"
                onChange={e => onUppercase(e)}
                defaultChecked={password.uppercase}
          />
            <input
                type="checkbox"
                onChange={e => onLowercase(e)}
                defaultChecked={password.lowercase}
            />
            <input
                type="checkbox"
                onChange={e => onNumbers(e)}
                defaultChecked={password.numbers}
            />
            <input
                type="checkbox"
                onChange={e => onSymbols(e)}
                defaultChecked={password.symbols}
            />
            <input
                type="range"
                min={password.minLength}
                max={password.maxLength}
                onChange={e => onLength(e)}
                value={password.length}
                step={1}
            />
      </div>
  )
}


const initalState = {
    password: '',
    defaultLength: 16,
    maxLength: 50,
    minLength: 8,
    length: 16,
    uppercase: true,
    lowercase: false,
    numbers: true,
    symbols: true,
    bgColor: 'bg-green-500',
    copy: false,
}