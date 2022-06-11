import React from "react";

export type svgType = React.ReactElement

interface IDefault {
    id: number,
    title: string,
    description: string,
}

export interface IUser {
    id: number | string,
    customID: string,
    createdAt: string,
    firstName: string,
    lastName: string,
    email: string,
    pass: string,
    posts: IPosts[],
    friends: IFriends[],
    music: IMusic[],
    video: IVideo[],
}

export interface IPosts extends IDefault {
    comments: IComments[]
}

export interface IComments extends IDefault {
    nickName: string,
    likes: number,
}

export interface IMusic extends IDefault {
    likes: number,
    duration: string,
}

export interface IVideo extends IDefault {
    likes: number,
}

export interface IFriends extends IDefault {
    likes: number,
}