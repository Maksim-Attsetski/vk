import React, {FC, useRef} from 'react';
import './HeaderMore.scss';
import {CgMoreO} from "react-icons/cg";
import {IMenu} from "../Header/Header";
import {AnimatePresence, motion} from 'framer-motion';
import {svgType} from "../../types/global-types";
import {routeNames} from "../../routes/routeNames";
import {NavLink} from "react-router-dom";
import {VscAccount} from "react-icons/vsc";
import {IoNewspaperOutline} from "react-icons/io5";
import {FaUserFriends} from "react-icons/fa";
import {BiMessageRoundedDetail} from "react-icons/bi";
import {HiMusicNote} from "react-icons/hi";
import {BsCameraVideo} from "react-icons/bs";
import {useTypedSelector} from "../../hooks/redux";

interface IProps {
    menu: IMenu,
    setMenu: (menu: IMenu) => void
}

interface IHeaderMoreLink {
    text: string,
    to: string,
    icon: svgType
}

const HeaderMore: FC<IProps> = ({menu, setMenu}) => {
    const headerMore = useRef<HTMLDivElement | null>(null)
    const {authUser} = useTypedSelector(state => state.authList)
    const headerMoreLinks: IHeaderMoreLink[] = [
        {text: 'Моя страница', to: `${routeNames.ABOUT_ME}/${authUser.id}`, icon: <VscAccount/>},
        {text: 'Новости', to: routeNames.FEED, icon: <IoNewspaperOutline/>},
        {text: 'Друзья', to: routeNames.FRIENDS, icon: <FaUserFriends/>},
        {text: 'Сообщения', to: routeNames.MESSAGE, icon: <BiMessageRoundedDetail/>},
        {text: 'Музыка', to: routeNames.MUSIC, icon: <HiMusicNote/>},
        {text: 'Видео', to: routeNames.VIDEO, icon: <BsCameraVideo/>},
    ]

    const toggleMore = (): void => {
        if (menu.account) return

        if (menu.more) {
            setMenu({...menu, more: false})
            headerMore?.current?.classList.remove('active')
        } else {
            headerMore?.current?.classList.add('active')
            setMenu({...menu, more: true})
        }

    }

    return (
        <div className={'header-more'}
             ref={headerMore}
             onClick={toggleMore}
        >
            <div className="header-more__icon"><CgMoreO/> <span>Ещё</span></div>
            <AnimatePresence>
                {menu.more && <motion.ul
                    key={'header-more-menu'}
                    initial={{x: -50, opacity: 0, pointerEvents: 'none',}}
                    exit={{x: 80, opacity: 0, pointerEvents: 'none',}}
                    animate={{x: 0, opacity: 1, pointerEvents: 'all',}}
                    transition={{type: "spring", stiffness: 70, staggerChildren: 0.3}}
                    className="header-more-menu">
                    {headerMoreLinks.map((link: IHeaderMoreLink) =>
                        <motion.div key={link.to} className={'header-more-menu__item'}>
                            <span>{link.icon}</span>
                            <NavLink data-item='burger' to={link.to}>
                                {link.text}
                            </NavLink>
                        </motion.div>
                    )}
                </motion.ul>}
            </AnimatePresence>
        </div>
    );
};

export default HeaderMore;