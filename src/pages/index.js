import * as React from "react"
import {useEffect, useReducer} from "react"
import {passwordReducer} from "../reducers/password";
import {passwordOptions} from "../Function/funcs";

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
        if(e.target.value < 10) {
            dispatch({
                type: 'BG_COLOR',
                payload: "bg-red-500"
            })
        } else {
            dispatch({
                type: 'BG_COLOR',
                payload: "bg-green-500"
            })
        }
        console.log(e.target.value)
    }

    const generatePassword = () => {
        const options = passwordOptions(password);
        let passwordFinal = "";
        for (let i = 0; i < password.length; i++) {
            const randomOption = options[Math.floor(Math.random() * options.length)];
            passwordFinal += randomOption();
        }
        dispatch({
            type: 'GENERATE',
            payload: passwordFinal
        })
    }

    useEffect(() => {
        generatePassword()
    }, [password.length, password.lowercase, password.uppercase, password.numbers, password.symbols])


    return (
      <section className={`mx-auto ${password.bgColor}`}>
            <h1>Hello</h1>
      </section>
  )
}


const initalState = {
    password: '',
    defaultLength: 16,
    maxLength: 50,
    minLength: 8,
    length: 16,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: true,
    bgColor: 'bg-green-500',
    copy: false,
}

