const BASE_URL = 'https://api.github.com';

export async function fetchUserProfile(username) {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    if (!response.ok) {
        throw new Error('User not found');
    }
    return await response.json();
}

export async function fetchUserRepos(username) {
    const response = await fetch(`${BASE_URL}/users/${username}/repos?per_page=10&sort=created`);
    if (!response.ok) {
        throw new Error('Repos not found');
    }
    return await response.json();
}