import {IUser} from "../types/global-types";

interface ICheckIsUserExist {
    (userList: IUser[], newUser: IUser): boolean
}

export const checkIsUserExist: ICheckIsUserExist = (userList, newUser) => {
    const {email, pass} = newUser

    const currentUser: IUser[] = userList.filter((user: IUser) => {
        return (user.email === email && user.pass === pass)
    })

    console.log(currentUser)
    return currentUser && (currentUser[0].email === email && currentUser[0].pass === pass)
}