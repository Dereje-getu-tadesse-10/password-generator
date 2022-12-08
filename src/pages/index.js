import * as React from "react"
import {useEffect, useReducer} from "react"
import {passwordReducer} from "../reducers/password";
import {passwordOptions} from "../Function/funcs";
import {Generator} from "../components/Generator/generator";

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
    }

    const onLength = (e) => {
        dispatch({
            type: 'LENGTH',
            payload: e[1]
        })
        if(e[1] < 9) {
            dispatch({
                type: 'BG_COLOR',
                payload: "bg-red-700"
            })
            dispatch({
                type: 'FORCE_UPDATE',
                payload: "MOYEN"
            })
        } else {
            dispatch({
                type: 'BG_COLOR',
                payload: "bg-green-800"
            })
            dispatch({
                type: 'FORCE_UPDATE',
                payload: "FORT"
            })
        }
        console.log(password)
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
    }, [password.length, password.lowercase, password.uppercase, password.numbers, password.symbols, password.copy])


    return (
      <section className={`mx-auto ${password.bgColor}`}>
            <Generator
                password={password}
                onUppercase={onUppercase}
                onLowercase={onLowercase}
                onNumbers={onNumbers}
                onSymbols={onSymbols}
                onLength={onLength}
                generatePassword={generatePassword}
            />
      </section>
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
    numbers: false,
    symbols: true,
    bgColor: 'bg-green-800',
    force: 'FORT',
}

