import password from "../../assets/password.json"
import forgot from "../../assets/forgot.json"
import React, { createRef, useEffect } from "react";
import lottie from 'lottie-web';

export const Info = () => {

    let animationContainer = createRef();
    let animationContainer2 = createRef();
    let anim = null;
    let anim2 = null;
    useEffect(() => {
        anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: password
        });
        anim2 = lottie.loadAnimation({
            container: animationContainer2.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: forgot
        });
    }, []);

    return (
        <section className="container mx-auto md:max-w-5xl px-4 ">
            <div className="my-16 w-full flex flex-col-reverse md:flex-row md:justify-between md:items-center" >
                <div className="w-2/4 h-64 my-7 mx-auto" ref={animationContainer}></div>
                <div className="w-full md:w-2/4">
                    <h1 className="py-4 text-2xl font-bold text-gray-700">
                        Pourquoi crée un mot de pass robuste ?
                    </h1>
                    <p className="text-lg">
                        Il est important d'avoir un mot de passe robuste pour protéger la sécurité de vos comptes en ligne. Un mot de passe fort est moins susceptible d'être deviné ou piraté. Pour créer un mot de passe robuste, il faut choisir un mot de passe difficile à deviner et différent des autres mots de passe. Il est également important de changer régulièrement vos mots de passe et d'utiliser des outils de gestion pour les gérer et les protéger.
                    </p>
                </div>
            </div>

            <div className="my-16 w-full md:flex md:justify-between md:items-center" >
                <div className="w-full md:w-2/4">
                    <h1 className="py-4 text-2xl font-bold text-gray-700">
                        Pourquoi utiliser un générateur de mot de passe ?
                    </h1>
                    <p>
                        En utilisant un générateur de mot de passe, vous pouvez être sûr que vos mots de passe sont forts et difficiles à pirater, ce qui peut contribuer à protéger vos comptes en ligne contre les attaques de pirates informatiques.
                    </p>
                </div>
                <div
                    className="w-2/4 h-64 my-7 mx-auto"
                    ref={animationContainer2}
                ></div>
            </div>
        </section>
    )
}

