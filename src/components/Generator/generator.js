import * as React from "react"
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';





export const Generator = ({onUppercase, onLowercase, onSymbols, onNumbers, onLength, password, generatePassword}) => {

    return (
        <div className="py-12 px-3 sm:px-4 md:max-w-4xl mx-auto">
            <h1 className="text-1xl font-bold text-white md:text-3xl">
                Génére un mot de passe robuste et sécurisé !
            </h1>
            <div>
                <div className="py-6 md:pt-12 relative w-full relative">
                    <input
                        type="text"
                        id="screen"
                        readOnly={true}
                        aria-readonly={true}
                        defaultValue={password.password}
                        className="w-full  h-16 bg-inherit text-white font-semibold outline-none tracking-wider md:text-2xl"
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
                <div className="text-white">
                    <p>Force du mot de passe : <span className="font-semibold">{password.force}</span></p>
                </div>
                <div className="flex flex-col gap-3 py-7">
                    <div>
                        <p className="text-white font-semibold">Length({password.length})</p>
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
                        <input
                            type="checkbox" id="majuscule" className="w-6 h-6 cursor-pointer"
                            checked={password.uppercase}
                            onChange={onUppercase}
                        />
                        <label htmlFor="majuscule" className="ml-2 text-white cursor-pointer">
                            Utiliser des majuscules
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="minuscule" className="w-6 h-6 cursor-pointer"
                            checked={password.lowercase}
                            onChange={onLowercase}
                        />
                        <label htmlFor="minuscule" className="ml-2 text-white cursor-pointer">
                            Utiliser des minuscules
                        </label>
                    </div>
                    <div className="flex items-center">
                            <input type="checkbox" id="chiffres" className="w-6 h-6 cursor-pointer"
                                checked={password.numbers}
                                onChange={onNumbers}
                            />
                            <label htmlFor="chiffres" className="ml-2 text-white cursor-pointer">
                                Utiliser des chiffres
                            </label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="symboles" className="w-6 h-6 cursor-not-allowed"
                            checked={password.symbols}
                            onChange={onSymbols} disabled={true}
                        />
                        <label htmlFor="symboles" className="ml-2 text-white cursor-not-allowed">
                            Utiliser des symboles
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}