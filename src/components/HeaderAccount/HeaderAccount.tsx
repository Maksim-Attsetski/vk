import React, {FC, useRef} from 'react';
import './HeaderAccount.scss';
import {VscAccount, VscSettings} from "react-icons/vsc";
import {IMenu} from "../Header/Header";
import {AnimatePresence, motion} from "framer-motion";
import {NavLink, useNavigate} from "react-router-dom";
import {routeNames} from "../../routes/routeNames";
import {BiExit} from "react-icons/bi";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import {useTypedDispatch} from "../../hooks/redux";
import {authActions} from "../../redux/slices/AuthSlice";

interface IProps {
    menu: IMenu,
    setMenu: (menu: IMenu) => void,
}

const HeaderAccount: FC<IProps> = ({menu, setMenu}) => {
    const headerAccount = useRef<HTMLDivElement | null>(null)
    const dispatch = useTypedDispatch()
    const {logout} = authActions
    const navigate = useNavigate()

    const toggleAccount = (): void => {
        if (menu.more) return

        if (menu.account) {
            setMenu({...menu, account: false})
            headerAccount?.current?.classList.remove('active')
        } else {
            headerAccount?.current?.classList.add('active')
            setMenu({...menu, account: true})
        }
    }

    return (
        <div
            ref={headerAccount}
            className="header-account"
            onClick={toggleAccount}
        >
            <div className="header-account__icon"><VscAccount/></div>
            <AnimatePresence>
                {menu.account && <motion.ul
                    key={'header-account-menu'}
                    initial={{x: -50, opacity: 0, pointerEvents: 'none',}}
                    animate={{x: 0, opacity: 1, pointerEvents: 'all',}}
                    exit={{x: 50, opacity: 0, pointerEvents: 'none',}}
                    transition={{type: "spring", stiffness: 70, staggerChildren: 0.3}}
                    className="header-account-menu"
                >
                    <motion.li className={'header-account-menu__item'}>
                        <span><VscAccount/></span>
                        <NavLink to={routeNames.ABOUT_ME}>Моя страница</NavLink>
                    </motion.li>
                    <motion.li className={'header-account-menu__item'}>
                        <span><VscSettings/></span>
                        <NavLink to={routeNames.SETTING}>Настройки</NavLink>
                    </motion.li>
                    <motion.li>
                        <ThemeSwitcher className={'header-account-menu__item'}/>
                    </motion.li>
                    <motion.li className={'header-account-menu__item'}>
                        <span><BiExit/></span>
                        <div onClick={() => {
                            dispatch(logout())
                            navigate('/', {replace: true})
                        }}>
                            Выйти
                        </div>
                    </motion.li>
                </motion.ul>}
            </AnimatePresence>
        </div>
    );
};

export default HeaderAccount;