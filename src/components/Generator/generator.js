import * as React from "react"
import {useState} from "react"
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Checkbox} from "../Checkbox/checkbox";


export const Generator = ({onUppercase, onLowercase, onSymbols, onNumbers, onLength, password, generatePassword}) => {

    const [copy, setCopy] = useState(false)

    const onCopy = () => {
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
        }, 2000);
    }

    return (
        <div className="px-4 py-24 sm:px-4 md:max-w-5xl md:px-0 mx-auto">
            <h1 className="text-3xl font-semibold text-white md:text-4xl tracking-[1.2px]">
                Facilitez votre sécurité en ligne avec notre générateur de mot de passe
            </h1>
            <div>
                <div className="py-6 md:pt-12 relative w-full relative">
                    <input
                        type="text"
                        id="screen"
                        readOnly={true}
                        aria-readonly={true}
                        defaultValue={password.password}
                        className="w-full h-16 bg-inherit text-white font-semibold outline-none tracking-wider md:text-2xl"
                    />
                    <button
                        className={`absolute px-4 py-2 z-20 right-0 bottom-11 ${password.bgColor}`}
                        onClick={generatePassword}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </button>
                    <div className="w-full border-b-2 border-white h-[2px]"></div>
                </div>
                <div className="text-white flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
                    <div>
                        <p className="font-medium">Force du mot de passe : <span className="font-semibold">{password.force}</span></p>
                    </div>
                    <div>
                        <CopyToClipboard text={password.password} onCopy={onCopy}>
                            <button className="bg-white text-gray-900 text-1xl font-semibold px-4 py-4 rounded-md w-full md:w-max"
                            >
                                {copy ? "Copié !" : "Copier le mot de passe"}
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className="flex flex-col gap-3 py-7">
                    <div>
                        <p className="text-white font-semibold">Longueur du mot de passe : {password.length}</p>
                    </div>
                    <RangeSlider
                        className="single-thumb"
                        min={password.minLength}
                        max={password.maxLength}
                        defaultValue={[0, password.length]}
                        thumbsDisabled={[true, false]}
                        rangeSlideDisabled={true}
                        onInput={(e) => {
                            onLength(e)
                        }}
                    />
                </div>
                <div className="flex flex-wrap gap-4 md:justify-between">
                    <div className="flex items-center">
                        <Checkbox label="Utiliser des majuscules" checked={password.uppercase} onChange={onUppercase}/>
                    </div>
                    <div className="flex items-center">
                        <Checkbox label="Utiliser des minuscules" checked={password.lowercase} onChange={onLowercase}/>
                    </div>
                    <div className="flex items-center">
                        <Checkbox label="Utiliser des chiffres" checked={password.numbers} onChange={onNumbers}/>
                    </div>
                    <div className="flex items-center">
                        <Checkbox label="Utiliser des symboles" checked={password.symbols} onChange={onSymbols} disabled={true}/>
                    </div>
                </div>
            </div>
        </div>
    )
}