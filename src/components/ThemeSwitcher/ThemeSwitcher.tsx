import React, {FC} from 'react';
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux";
import {themeActions} from "../../redux/slices/ThemeSlice";
import {IoIosColorPalette} from "react-icons/io";

interface IProps {
    className?: string,
}

const ThemeSwitcher: FC<IProps> = ({className}) => {
    const {darkMode} = useTypedSelector(state => state.theme)
    const dispatch = useTypedDispatch()
    const {toggleTheme} = themeActions

    return (
        <div className={className}
             onClick={() => dispatch(toggleTheme())}
        >
            <div><IoIosColorPalette/></div>
            <div style={{display: 'flex', gap: 5}}>Тема: <em>{darkMode ? 'тёмная' : 'светлая'}</em></div>
        </div>
    );
};

export default ThemeSwitcher;