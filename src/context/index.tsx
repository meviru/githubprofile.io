import { createContext, useState } from "react";
import { Children } from "../models";

export const GithubContext = createContext<any>({
    profile: {},
    fetchProfileInfo: () => { }
});

const GithubProvider = ({ children }: Children) => {
    const [profile, setProfile] = useState(null);

    const fetchProfileInfo = async (username: string) => {
        try {
            const response: any = await fetchProfileInfo(username);
            setProfile(response);
        } catch (error) {
            console.log(error);
        }
    }

    return <GithubContext.Provider value={{ profile, fetchProfileInfo }}>{children}</GithubContext.Provider>
}

export default GithubProvider;
