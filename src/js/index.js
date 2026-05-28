import { fetchUserProfile } from './api.js';
import { renderUserProfile } from './ui.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async() => {
    const username = inputSearch.value.trim();

    if (!username) {
        alert('Por favor, digite um nome de usuário do GitHub.');
        profileResults.innerHTML = '';
        return;
    }
    profileResults.innerHTML = '<p class="loading">Carregando...</p>';
    try {
        const userData = await fetchUserProfile(username);
        renderUserProfile(userData, profileResults);
    } catch (error) {
        console.error('Erro ao buscar perfil do usuário:', error);
        alert('Usuario não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
        profileResults.innerHTML = '';
    }
});