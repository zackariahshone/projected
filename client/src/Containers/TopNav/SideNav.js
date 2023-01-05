
import React,{useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ROUTES } from '../../GlobalConstanst';
import styles from "./sidenav.module.css"

export default function Sidenav() {
    const [open, setopen] = useState(false)
    const toggleOpen = () => {
        setopen(!open)
    }
  return (
    <div className={open?styles.sidenav:styles.sidenavClosed}>
        <button className={styles.menuBtn} onClick={toggleOpen}>
            {open? '<<' : '>>'}
        </button>
        <NavLink className={styles.sideitem} to={'/'} as={Link}>{open ? 'Projected':''}</NavLink>
        {ROUTES.map(item =>{
            return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
            {open ? item.name:''}
            <span className={styles.linkText}>{item.text}</span>
        </NavLink>
        })}
        <NavLink
            to={'/login'}
            as={Link}
        > {open ?'Login':''} </NavLink>
    </div>
  )
}