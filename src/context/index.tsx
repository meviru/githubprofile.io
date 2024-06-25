import { createContext, useEffect, useState } from "react";
import { Children, GithubContextType, Profile } from "../models";
import { getProfileInfo, getRepoList } from "../services/GitHubService";
import { ToastContainer, toast } from "react-toastify";

export const GithubContext = createContext<GithubContextType>({
  profile: {},
  selectedProfile: {},
  isLoading: false,
  repositoryList: [],
  fetchProfileInfo: () => { },
  setProfileInfo: () => { },
});

const GithubProvider = ({ children }: Children) => {
  const defaultProfile = "github";
  const [profile, setProfile] = useState({});
  const [selectedProfile, setSelectedProfile] = useState({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [repositoryList, setRepositoryList] = useState([]);

  const fetchProfileInfo = async (username: string, isSearch: boolean = false) => {
    if (!isSearch) {
      setIsLoading(true);
    }
    try {
      const response: any = await getProfileInfo(username);
      if (!isSearch) {
        setResponse(response);
      } else {
        setSelectedProfile(response);
      }
    } catch (error: any) {
      toast.error("Error fetching user information.", {
        theme: "colored",
        hideProgressBar: true
      });
    }
  };

  const setResponse = async (response: any) => {
    setProfile(response);
    if (Object.keys(response).length > 0) {
      const repoList = await getRepoList(response.repos_url);
      setRepositoryList(repoList);
      setIsLoading(false);
    }
  }

  const setProfileInfo = (profile: Profile) => {
    setProfile(profile);
  }

  useEffect(() => {
    fetchProfileInfo(defaultProfile);
  }, [])

  return (
    <GithubContext.Provider
      value={{ profile, selectedProfile, isLoading, repositoryList, fetchProfileInfo, setProfileInfo }}
    >
      {children}
      <ToastContainer />
    </GithubContext.Provider>
  );
};

export default GithubProvider;
