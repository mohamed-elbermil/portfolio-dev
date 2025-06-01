import React from 'react';
import Title from '../Title/Title';
import { section } from 'framer-motion/client';

export default function Intro() {
  return (
    <>
    <section>
        <Title
                theme="Outils"
                    title={
                        <>
                        Le contexte de l' <span className='span'>&lt;Alternance /&gt;</span>
                        </>
                            }
                            text="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."
                            />
        <ul>
            <li>Mon rôle : Intégrateur Web</li>
            <li>Rythme d’alternance : 2 jours d’école et 3 jours entreprises</li>
        </ul>

    </section>
    </>
  );
}


