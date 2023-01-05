
import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../GlobalConstanst';
import styles from "./sidenav.module.css"

export default function Sidenav() {
    const [open, setopen] = useState(true)
    const toggleOpen = () => {
        setopen(!open)
    }
  return (
    <div className={open?styles.sidenav:styles.sidenavClosed}>
        <button className={styles.menuBtn} onClick={toggleOpen}>
            {open? '<<' : '>>'}
        </button>
        {ROUTES.map(item =>{
            return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
            {open ? item.name:''}
            <span className={styles.linkText}>{item.text}</span>
        </NavLink>
        })}
    </div>
  )
}