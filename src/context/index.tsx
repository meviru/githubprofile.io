import { createContext, useState } from "react";
import { Children, GithubContextType } from "../models";
import getProfileInfo from "../services/GitHubService";
import { ToastContainer, toast } from "react-toastify";

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
    } catch (error: any) {
      toast.error("Error fetching user information.", {
        theme: "colored",
      });
    }
  };

  return (
    <GithubContext.Provider value={{ profile, fetchProfileInfo }}>
      {children}
      <ToastContainer />
    </GithubContext.Provider>
  );
};

export default GithubProvider;
