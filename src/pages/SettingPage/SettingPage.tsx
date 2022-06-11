import React, {ChangeEvent, useEffect, useState} from 'react';
import './SettingPage.scss';
import AnimPage from "../../components/H-O-C/AnimPage";
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux";
import SettingItems from "../../components/SettingItems/SettingItems";
import {authListActions} from "../../redux/slices/AuthList";
import {IUser} from "../../types/global-types";

export interface ISetting {
    firstName: string,
    lastName: string,
    customID: string,
}

const SettingPage = () => {
    const {authUser} = useTypedSelector(state => state.authList)
    const dispatch = useTypedDispatch()
    const {changeAuthUser} = authListActions
    const setting: ISetting = {
        firstName: authUser.firstName,
        lastName: authUser.lastName,
        customID: authUser.customID,
    }
    const [editItems, setEditItems] = useState<ISetting>(setting)
    useEffect(() => {
        setEditItems(setting)
    }, [authUser])

    const saveChanges = (): void => {
        const user: IUser = {
            ...authUser,
            firstName: editItems.firstName,
            lastName: editItems.lastName,
            customID: editItems.customID,
        }

        dispatch(changeAuthUser(user))
    }

    return (
        <div className={'setting-page'}>
            <AnimPage className={'setting-page__body'}>
                <div className={'setting-page__title'}>Настройки</div>
                <div className={'setting-page-params'}>
                    <SettingItems labelText={'Имя'} editItem={editItems.firstName}>
                        <input value={editItems.firstName} className={'input'}
                               onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                   setEditItems({...editItems, firstName: event.target.value})
                               }}/>
                    </SettingItems>
                    <SettingItems labelText={'Фамилия'} editItem={editItems.lastName}>
                        <input value={editItems.lastName} className={'input'}
                               onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                   setEditItems({...editItems, lastName: event.target.value})
                               }}/>
                    </SettingItems>
                    <SettingItems labelText={'Свой ID'} editItem={editItems.customID}>
                        <input value={editItems.customID} className={'input'}
                               onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                   setEditItems({...editItems, customID: event.target.value})
                               }}/>
                    </SettingItems>
                </div>
                <button className='btn' onClick={saveChanges}>Сохранить изменения</button>
            </AnimPage>
        </div>
    );
};

export default SettingPage;