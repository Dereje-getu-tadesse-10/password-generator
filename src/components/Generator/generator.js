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
                <div className="pt-6 pb-6 md:pt-12 relative w-full relative">
                    <input
                        type="text"
                        id="screen"
                        readOnly={true}
                        aria-readonly={true}
                        className="px-3 w-full py-2 h-16 text-gray-700 bg-inherit outiline-none focus:outline-none focus:ring-0 focus:border-0"
                    />
                    <button className="absolute right-0 bottom-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </button>
                    <div className="w-full border-b-2 border-white h-[2px]"></div>
                </div>
                <div>
                    <RangeSlider
                        className="single-thumb"
                        defaultValue={[0, 50]}
                        thumbsDisabled={[true, false]}
                        rangeSlideDisabled={true}
                    />
                </div>
                <div className="flex flex-wrap gap-4 md:justify-between">
                    <div className="flex items-center">
                        <input
                            type="checkbox" id="majuscule" className="w-6 h-6 cursor-pointer" />
                        <label htmlFor="majuscule" className="ml-2 text-white cursor-pointer">
                            Utiliser des majuscules
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="minuscule" className="w-6 h-6 cursor-pointer" />
                        <label htmlFor="minuscule" className="ml-2 text-white cursor-pointer">
                            Utiliser des minuscules
                        </label>
                    </div>
                    <div className="flex items-center">
                            <input type="checkbox" id="chiffres" className="w-6 h-6 cursor-pointer" />
                            <label htmlFor="chiffres" className="ml-2 text-white cursor-pointer">
                                Utiliser des chiffres
                            </label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="symboles" className="w-6 h-6 cursor-pointer" />
                        <label htmlFor="symboles" className="ml-2 text-white cursor-pointer">
                            Utiliser des symboles
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}