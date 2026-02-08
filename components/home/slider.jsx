"use client"
import React, { useEffect, useState } from "react"
import styles from "@/app/styles/slider.module.css"
import Image from "next/image"
const images=[
    'https://images.unsplash.com/photo-1585298723682-7115561c51b7?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1695305098144-24d4a245ff92?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1600964373031-f0b65565f354?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1520186994231-6ea0019d8d51?q=80&w=843&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1633419089775-61072af2a2a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]


export default function Slider(){

    const [currslide,setslide]=useState(0);

        useEffect(
            ()=>{
                  const interval=setInterval(() => {
                     setslide(
                        (currval)=>{
                            if(currval==images.length-1){
                                return 0;
                            }else{
                                return currval+1;
                            }
                        }
                     )
            }, 3000);
            return ()=>{
                clearInterval(interval);
            }
            },[]
        )

          


    return (
        <>
            <div className={styles.slidersection}>
                <div className={styles.imageContainer}>
                    {
                        images.map(
                            (image,index)=>{
                                return (
                                    <Image alt={"slider"+index} className={`${styles.slider} ${currslide ==index && styles.active} `} key={index} src={image} fill />
                                )
                            }
                        )
                    }
                </div>
            </div>
        </>
    )
}