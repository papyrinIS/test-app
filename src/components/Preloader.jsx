import React from "react";
import Preloader from "../img/preloader.gif"
import styles from '../App.module.scss';


export const PreloaderPage=()=><div className={styles.PreloaderContainer}><img className={styles.preloader} src={Preloader} alt="preloader"/></div>
