import { ReactNode } from "react";

export interface Children {
    children: ReactNode
}

export interface GithubContextType {
    profile: Object,
    fetchProfileInfo: (value: string) => void
}