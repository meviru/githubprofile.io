const API_URL = 'https://api.github.com/users';

const getProfileInfo = async (username: string) => {
    try {
        const response = await fetch(`${API_URL}/${username}`);
        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching card data:', error);
        throw error
    }
};

export default getProfileInfo;
