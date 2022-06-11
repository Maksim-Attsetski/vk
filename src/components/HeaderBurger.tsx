import React, {FC} from 'react';
import {FiSettings} from "react-icons/fi";
import {IMenu} from "./Header/Header";

interface IProps {
    menu: IMenu,
    setMenu: (menu: IMenu) => void,
}

const HeaderBurger: FC<IProps> = ({menu, setMenu}) => {

    const toggleBurger = () => {
        if (menu.burger) {
            setMenu({...menu, burger: false})
            document.body.classList.remove('block')
        } else {
            setTimeout(() => {
                document.body.classList.add('block')
                setMenu({...menu, burger: true})
            }, 290)
        }
    }

    window.addEventListener('resize', () => {
        if (!(window.innerWidth >= 765 && window.innerWidth <= 770) && menu.burger) return
        setMenu({...menu, burger: false})
        document.body.classList.remove('block')
    })

    return (
        <div className="header__burger"
             onClick={toggleBurger}
        >
            <FiSettings/>
        </div>
    );
};

export default HeaderBurger;