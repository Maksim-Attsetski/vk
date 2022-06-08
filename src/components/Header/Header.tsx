import React, {ChangeEvent, FC, FormEvent, useEffect, useRef, useState} from 'react';
import './Header.scss';
import {SiGnusocial} from "react-icons/si";
import {Link} from "react-router-dom";
import {routeNames} from "../../routes/routeNames";
import HeaderBurger from "../HeaderBurger";
import HeaderAccount from "../HeaderAccount/HeaderAccount";
import HeaderMore from "../HeaderMore/HeaderMore";
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux";
import {themeActions} from "../../redux/slices/ThemeSlice";

export interface IMenu {
    burger: boolean,
    account: boolean,
    more: boolean,
}

const Header: FC = () => {
    const {auth} = useTypedSelector(state => state.auth)
    const authData: boolean = !!localStorage.getItem('auth')
    const [searchValue, setSearchValue] = useState('')
    const [menu, setMenu] = useState<IMenu>({
        burger: false,
        account: false,
        more: false
    })

    const headerMenu = useRef<HTMLDivElement | null>(null)
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

    return (
        <header className={'header'}>
            <div className="header__body container">
                <Link to={routeNames.HOME} className="header__logo">
                    <SiGnusocial/> MaksVkCopy
                </Link>

                {(auth || authData) &&
                    <HeaderBurger menu={menu} setMenu={setMenu} headerMenu={headerMenu?.current}/>}

                {(auth || authData) && <div className="header__menu" ref={headerMenu}>
                    <form onSubmit={searchFormSubmit} className="header-search">
                        <input
                            value={searchValue}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
                            type="text"
                            className="header-search__input input"/>
                    </form>

                    <HeaderMore menu={menu} setMenu={setMenu}/>
                    <HeaderAccount menu={menu} setMenu={setMenu}/>
                </div>}
            </div>
        </header>
    );
};

export default Header;