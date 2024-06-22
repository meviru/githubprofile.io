import { createContext, useState } from "react";
import { Children, GithubContextType } from "../models";
import { getProfileInfo, getRepoList } from "../services/GitHubService";
import { ToastContainer, toast } from "react-toastify";

export const GithubContext = createContext<GithubContextType>({
  profile: {},
  repositoryList: [],
  fetchProfileInfo: () => {},
});

const GithubProvider = ({ children }: Children) => {
  const [profile, setProfile] = useState({});
  const [repositoryList, setRepositoryList] = useState([]);

  const fetchProfileInfo = async (username: string) => {
    try {
      const response: any = await getProfileInfo(username);
      setProfile(response);
      if (Object.keys(response).length > 0) {
        const repoList = await getRepoList(response.repos_url);
        setRepositoryList(repoList);
      }
    } catch (error: any) {
      toast.error("Error fetching user information.", {
        theme: "colored",
      });
    }
  };

  return (
    <GithubContext.Provider
      value={{ profile, repositoryList, fetchProfileInfo }}
    >
      {children}
      <ToastContainer />
    </GithubContext.Provider>
  );
};

export default GithubProvider;
