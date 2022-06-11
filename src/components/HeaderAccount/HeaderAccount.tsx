import React, {FC, useRef} from 'react';
import './HeaderAccount.scss';
import {VscAccount, VscSettings} from "react-icons/vsc";
import {IMenu} from "../Header/Header";
import {AnimatePresence, motion} from "framer-motion";
import {NavLink, useNavigate} from "react-router-dom";
import {routeNames} from "../../routes/routeNames";
import {BiExit} from "react-icons/bi";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux";
import {authActions} from "../../redux/slices/AuthSlice";
import {getAnimateParams} from "../../helpers/getMenuAnimParams";

interface IProps {
    menu: IMenu,
    setMenu: (menu: IMenu) => void,
}

const HeaderAccount: FC<IProps> = ({menu, setMenu}) => {
    const headerAccount = useRef<HTMLDivElement | null>(null)
    const {authUser} = useTypedSelector(state => state.authList)
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
        >
            <div className="header-account__icon" onClick={toggleAccount}><VscAccount/> <span>Аккаунт</span></div>
            <AnimatePresence>
                {menu.account && <motion.ul
                    key={'header-account-menu'}
                    initial={{right: getAnimateParams('init'), opacity: 0, pointerEvents: 'none',}}
                    animate={{right: getAnimateParams('anim'), opacity: 1, pointerEvents: 'all',}}
                    exit={{right: getAnimateParams('init'), opacity: 0, pointerEvents: 'none',}}
                    transition={{type: "spring", stiffness: 70, staggerChildren: 0.3}}
                    className="header-account-menu"
                >
                    <motion.li className={'header-account-menu__item'}>
                        <span><VscAccount/></span>
                        <NavLink data-item='burger' to={`${routeNames.ABOUT_ME}/${authUser.id}`}>Моя страница</NavLink>
                    </motion.li>
                    <motion.li className={'header-account-menu__item'}>
                        <span><VscSettings/></span>
                        <NavLink data-item='burger' to={routeNames.SETTING}>Настройки</NavLink>
                    </motion.li>
                    <motion.li>
                        <ThemeSwitcher className={'header-account-menu__item'}/>
                    </motion.li>
                    <motion.li className={'header-account-menu__item'}>
                        <span><BiExit/></span>
                        <div data-item='burger' onClick={() => {
                            dispatch(logout())
                            navigate(routeNames.HOME, {replace: true})
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