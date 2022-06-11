import React, {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';
import './Header.scss';
import {SiGnusocial} from "react-icons/si";
import {Link} from "react-router-dom";
import {routeNames} from "../../routes/routeNames";
import HeaderBurger from "../HeaderBurger";
import HeaderAccount from "../HeaderAccount/HeaderAccount";
import HeaderMore from "../HeaderMore/HeaderMore";
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux";
import {themeActions} from "../../redux/slices/ThemeSlice";
import {motion} from 'framer-motion';

export interface IMenu {
    burger: boolean,
    account: boolean,
    more: boolean,
}

const Header: FC = () => {
    const {auth} = useTypedSelector(state => state.auth)
    const [searchValue, setSearchValue] = useState('')
    const [menu, setMenu] = useState<IMenu>({
        burger: false,
        account: false,
        more: false
    })

    const {setCurrentTheme} = themeActions
    const dispatch = useTypedDispatch()
    useEffect(() => {
        dispatch(setCurrentTheme())
    }, [])

    const searchFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(searchValue)
        // clear input
        setSearchValue('')
    }

    const handleMenuClick = (event: any): void => {
        const {item} = event?.target?.dataset;
        if (item !== 'burger') return
        setMenu({burger: false, account: false, more: false})
    }

    return (
        <header className={'header'}>
            <div className="header__body container">
                <Link to={routeNames.HOME} className="header__logo">
                    <SiGnusocial/> MaksVkCopy
                </Link>

                {auth && <HeaderBurger menu={menu} setMenu={setMenu}/>}

                {auth && <motion.div
                    className={`header__menu ${menu.burger ? 'active' : ''}`}
                    initial={{right: '-150%'}}
                    animate={menu.burger ? {right: '-20%',} : {right: '-150%',}}
                    transition={{type: "spring", duration: 1, stiffness: 70}}
                    onClick={handleMenuClick}
                >
                    <form onSubmit={searchFormSubmit} className="header-search">
                        <input
                            value={searchValue}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
                            className="header-search__input input"
                        />
                    </form>

                    <HeaderMore menu={menu} setMenu={setMenu}/>
                    <HeaderAccount menu={menu} setMenu={setMenu}/>
                </motion.div>}
            </div>
        </header>
    );
};

export default Header;