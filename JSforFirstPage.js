
// Function to check if the user is logged in
function isLoggedIn() {
    // Replace this condition with your actual validation logic
    return false; // Assume the user is not logged in
}

// Function to handle button click event
function exploreButtonClick() {
    if (!isLoggedIn()) {
        // User is not logged in, display validation message
        alert('Please sign up or log in first.');
    } else {
        // User is logged in, continue to the next page or action
        alert('You are logged in. Exploring...');
    }
}

// Add event listener to the explore button
document.getElementById('exploreBtn').addEventListener('click', exploreButtonClick);


const searchInput = document.getElementById('search-input');
const suggestions = document.getElementById('suggestions');

const places = [
    'Island City Mall Cinema ',
    'Alturas Mall Cinema',
    'Bohol Quality Mall Cinema',
    'SM Cinema',
    'Robinsons Movieworld',
    'Vista Cinemas',
    'Megaworld Cinemas',
    'Cinépolis',
    'Greenhills Cinemas',
    'Power Plant Cinemas',
    'SM Seaside City Cebu Cinemas',
    'Century City Mall Cinemas',
    'Uptown Cinemas',
    'Evia Lifestyle Center Cinemas',
    'Newport Cinemas',
    'Trinoma Cinemas',
    'Fairview Terraces Cinemas'
];

searchInput.addEventListener('input', function() {
    const searchText = this.value.toLowerCase();
    const matchedPlaces = places.filter(place => place.toLowerCase().includes(searchText));
    showSuggestions(matchedPlaces);
});

function showSuggestions(matches) {
    if (matches.length === 0) {
        suggestions.style.display = 'none';
        return;
    }

    const html = matches.map(match => `<li>${match}</li>`).join('');
    suggestions.innerHTML = `<ul>${html}</ul>`;
    suggestions.style.display = 'block';
}

suggestions.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        searchInput.value = event.target.textContent;
        suggestions.style.display = 'none';
    }
});

Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
    e.addEventListener('keyup', (el)=>{
        if(e.value.length > 0) {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(180deg)";
        }else {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(0deg)";
        }

    })
})