import React, {useEffect} from 'react'

import styles from "./AboutPage.module.css";

import img from '/assets/_05ad490d-72df-4679-a5d1-4ae277e1d085.jpg'
import myPic from '/assets/1686057181268 1.png'
import sunSvg from '/assets/Untitled-1 1.svg'

export const AboutPage = () => {

  useEffect(() => {
    document.documentElement.style.backgroundImage = `url(${img})`;
    document.documentElement.style.backgroundRepeat = 'no-repeat';
    document.documentElement.style.backgroundPosition = 'center';
    document.documentElement.style.backgroundSize = '100%';
    document.documentElement.style.transition = 'all 1s';


    return () => {
    document.documentElement.style.backgroundImage = '';
    document.documentElement.style.backgroundSize = '';
    document.documentElement.style.backgroundRepeat = '';
    document.documentElement.style.backgroundPosition = '';
    document.documentElement.style.transition = '';
    };
  }, []);

  return (
    <>
       <div className={ styles.picDiv }>
        <img className={ styles.myPic} src={ myPic } alt="" />  
       </div>
       <div className={ styles.textDiv }>
        <div className={ styles.title }>
          <h2>ABOUT ME</h2>
          <img src={ sunSvg } alt="" />
        </div>
        <div className={ styles.longText } >
          <p>Lorem ipsum dolor sit amet consectetur. Accumsan consectetur egestas nisl at amet ut. Eleifend turpis in molestie quis fermentum velit mollis turpis. Ornare in in amet integer sed blandit nulla enim. Augue pulvinar integer cras egestas tincidunt pellentesque. Suspendisse molestie dictumst eu bibendum. Pharetra lorem scelerisque felis feugiat ornare quis amet. Lectus sit non nulla donec nunc cursus. Aliquam vulputate nunc in sit. </p>
        </div>
        <div className={ styles.shortText }>
          <p>Lorem ipsum dolor sit amet consectetur. Accumsan consectetur egestas nisl at amet ut.</p>
        </div>
       </div>
    </>
  )
}
