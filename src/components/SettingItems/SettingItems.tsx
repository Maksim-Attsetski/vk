import React, {FC, useState} from 'react';
import {FiEdit2, FiSave} from "react-icons/fi";

interface IProps {
    editItem: string,
    labelText: string,
    children: React.ReactNode
}

const SettingItems: FC<IProps> = ({editItem, labelText, children}) => {
    const [isEdit, setIsEdit] = useState(false)

    const handleBtnClick = (): void => {
        setIsEdit(!isEdit)
        if (isEdit) {

        }
    }


    return (
        <div className={'setting-page-params__item'}>
            {isEdit ? <div>{children}</div>
                : <div className="setting-page-params__text">{labelText} - {editItem}</div>}
            <button className='btn'
                    onClick={handleBtnClick}
            >{isEdit ? <FiSave/> : <FiEdit2/>}</button>
        </div>
    );
};

export default SettingItems;