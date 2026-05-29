import { fetchUserProfile, fetchUserRepos } from './api.js';
import { renderUserProfile } from './ui.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

async function getUserProfile() {
    const username = inputSearch.value.trim();

    if (!username) {
        alert('Por favor, digite um nome de usuário do GitHub.');
        profileResults.innerHTML = '';
        return;
    }
    profileResults.innerHTML = '<p class="loading">Carregando...</p>';
    try {
        const userData = await fetchUserProfile(username);
        const userRepos = await fetchUserRepos(username);
        renderUserProfile(userData, userRepos, profileResults);
    } catch (error) {
        console.error('Erro ao realizar a busca:', error);
        alert('Usuario não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
        profileResults.innerHTML = '';
    }
}

btnSearch.addEventListener('click', getUserProfile);

inputSearch.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        getUserProfile();
    }
})