// Tableau de profils fictifs
const profiles = [
    { name: 'Jean Dupont', job: 'Développeur Web', location: 'Paris, France' },
    { name: 'Marie Curie', job: 'Scientifique', location: 'Varsovie, Pologne' },
    { name: 'Albert Einstein', job: 'Physicien', location: 'Princeton, États-Unis' },
    { name: 'Ada Lovelace', job: 'Mathématicienne', location: 'Londres, Royaume-Uni' },
    // Ajoutez plus de profils ici
];

// Fonction pour rechercher des profils
function searchProfiles() {
    // Récupérer la valeur de l'input de recherche et la convertir en minuscules
    const input = document.getElementById('maRecherche').value.toLowerCase();
    // Conteneur où les profils seront affichés
    const container = document.getElementById('profilesContainer');
    // Vider le conteneur avant d'afficher les nouveaux résultats
    container.innerHTML = '';
    // Filtrer les profils en fonction de la recherche
    const filteredProfiles = profiles.filter(profile => 
        profile.name.toLowerCase().includes(input) ||
        profile.job.toLowerCase().includes(input) ||
        profile.location.toLowerCase().includes(input)
    );

    // Afficher un message si aucun profil n'est trouvé
    if (filteredProfiles.length === 0) {
        container.innerHTML = '<p>Aucun profil trouvé.</p>';
    } else {
        // Afficher les profils filtrés
        filteredProfiles.forEach(profile => {
            const profileDiv = document.createElement('div');
            profileDiv.classList.add('profile');
            profileDiv.innerHTML = `
                <h2>${profile.name}</h2>
                <p>${profile.job}</p>
                <p>${profile.location}</p>
            `;
            container.appendChild(profileDiv);
        });
    }
}