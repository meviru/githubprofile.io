const API_URL = 'https://api.github.com/users';

export const getProfileInfo = async (username: string) => {
    try {
        const response = await fetch(`${API_URL}/${username}`);
        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching the user information:', error);
        throw error
    }
};

export const getRepoList = async (url: string) => {
    try {
        const response = await fetch(`${url}?per_page=4`);
        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching the repositories:', error);
        throw error;
    }
}