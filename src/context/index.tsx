import { createContext, useState } from "react";
import { Children, GithubContextType } from "../models";
import getProfileInfo from "../services/GitHubService";

export const GithubContext = createContext<GithubContextType>({
  profile: {},
  fetchProfileInfo: () => {},
});

const GithubProvider = ({ children }: Children) => {
  const [profile, setProfile] = useState({});

  const fetchProfileInfo = async (username: string) => {
    try {
      const response: any = await getProfileInfo(username);
      setProfile(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GithubContext.Provider value={{ profile, fetchProfileInfo }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
