document.addEventListener('DOMContentLoaded', () => {
    loadGiftCards();
    openTab('Sevira1'); // Abre a aba "Sevira1" por padrão
});

function openTab(tabName) {
    const tabs = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';
}