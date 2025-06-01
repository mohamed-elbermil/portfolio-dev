import React from 'react';
import Title from '../Title/Title';
import styles from "./Mission.module.css"
import Card from '../Card/Card';

export default function Mission() {
  return (
    <>
    <section className={styles.context}>
        <Title
                theme="Missions"
                    title={
                        <>
                        Mes missions, mes actions, mes <span className='span'>&lt;résultats /&gt;</span>
                        </>
                            }
                                
                            /><br></br>
                            <div className={styles.allCard}>

                            <Card
                                icon={
                                    <>
                                    <i class="fa-solid fa-briefcase"></i>
                                    </>
                                }
                                title ="Création de marque blanche"
                                description ="tesregegergerrgegregregergegregergt"
                            />
                            <Card
                                icon={
                                    <>
                                    <i class="fa-solid fa-briefcase"></i>
                                    </>
                                }
                                title ="Création de marque blanche"
                                description ="tesregegergerrgegregregergegregergt"
                            />
                            <Card
                                icon={
                                    <>
                                    <i class="fa-solid fa-briefcase"></i>
                                    </>
                                }
                                title ="Création de marque blanche"
                                description ="tesregegergerrgegregregergegregergt"
                            />
                            <Card
                                icon={
                                    <>
                                    <i class="fa-solid fa-briefcase"></i>
                                    </>
                                }
                                title ="Création de marque blanche"
                                description ="tesregegergerrgegregregergegregergt"
                            />
                            <Card
                                icon={
                                    <>
                                    <i class="fa-solid fa-briefcase"></i>
                                    </>
                                }
                                title ="Création de marque blanche"
                                description ="tesregegergerrgegregregergegregergt"
                            />
                            </div>

    </section>
    </>
  );
}


