import React, {FC} from 'react';
import {FiSettings} from "react-icons/fi";
import {IMenu} from "./Header/Header";

interface IProps {
    menu: IMenu,
    setMenu: (menu: IMenu) => void,
    headerMenu: HTMLDivElement | null
}

const HeaderBurger: FC<IProps> = ({menu, setMenu, headerMenu}) => {

    const toggleBurger = () => {
        if (menu.burger) {
            setMenu({...menu, burger: false})
            headerMenu?.classList.remove('active')
            document.body.classList.remove('block')
        } else {
            headerMenu?.classList.add('active')
            setTimeout(() => {
                document.body.classList.add('block')
                setMenu({...menu, burger: true})
            }, 290)
        }
    }


    return (
        <div className="header__burger"
             onClick={toggleBurger}
        >
            <FiSettings/>
        </div>
    );
};

export default HeaderBurger;