export async function fetchUserProfile(username) {
    const BASE_URL = 'https://api.github.com';
    const response = await fetch(`${BASE_URL}/users/${username}`);
    if (!response.ok) {
        throw new Error('User not found');
    }
    return await response.json();
}
