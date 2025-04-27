document.addEventListener('DOMContentLoaded', () => {
    const rankingContainer = document.getElementById('ranking-container');
    const addMovieBtn = document.getElementById('add-movie');
    const movieModal = document.getElementById('movie-modal');
    const closeModal = document.querySelector('.close');
    const movieForm = document.getElementById('movie-form');
    const getRecommendationBtn = document.getElementById('get-recommendation');
    const recommendationContainer = document.getElementById('recommendation-container');
    const recommendationCard = document.getElementById('recommendation-card');
    const closeRecommendationBtn = document.getElementById('close-recommendation');


    let movies = [
        { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994, genre: "drama", country: "USA" },
        { title: "The Godfather", director: "Francis Ford Coppola", year: 1972, genre: "drama", country: "USA" },
        { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994, genre: "thriller", country: "USA" },
        { title: "Parasite", director: "Bong Joon Ho", year: 2019, genre: "thriller", country: "South Korea" },
        { title: "Spirited Away", director: "Hayao Miyazaki", year: 2001, genre: "animation", country: "Japan" },
        { title: "As Tears Go By", director: "Wong Kar-wai", year: 1988, genre: "drama", country: "Hong Kong" },
        { title: "Days of Being Wild", director: "Wong Kar-wai", year: 1990, genre: "drama", country: "Hong Kong" },
        { title: "Rumble in the Bronx", director: "Stanley Tong", year: 1995, genre: "action", country: "Hong Kong" },
        { title: "Infernal Affairs", director: "Andrew Lau, Alan Mak", year: 2002, genre: "thriller", country: "Hong Kong" },
        { title: "The Raid 2", director: "Gareth Evans", year: 2014, genre: "action", country: "Indonesia" },
        { title: "My Neighbor Totoro", director: "Hayao Miyazaki", year: 1988, genre: "animation", country: "Japan" },
        { title: "Bad Lieutenant", director: "Abel Ferrara", year: 1992, genre: "drama", country: "USA" },
        { title: "Cleo from 5 to 7", director: "Agnes Varda", year: 1962, genre: "drama", country: "France" },
        { title: "High and Low", director: "Akira Kurosawa", year: 1963, genre: "crime", country: "Japan" },
        { title: "Ran", director: "Akira Kurosawa", year: 1985, genre: "drama", country: "Japan" },
        { title: "The Parallax View", director: "Alan J. Pakula", year: 1974, genre: "thriller", country: "USA" },
        { title: "North by Northwest", director: "Alfred Hitchcock", year: 1959, genre: "thriller", country: "USA" },
        { title: "Rope", director: "Alfred Hitchcock", year: 1948, genre: "thriller", country: "USA" },
        { title: "Ashes and Diamonds", director: "Andrzej Wajda", year: 1958, genre: "drama", country: "Poland" },
        { title: "Blow Out", director: "Brian De Palma", year: 1981, genre: "thriller", country: "USA" },
        { title: "The Night of the Hunter", director: "Charles Laughton", year: 1955, genre: "thriller", country: "USA" },
        { title: "Farewell My Concubine", director: "Chen Kaige", year: 1993, genre: "drama", country: "China" },
        { title: "Beau Travail", director: "Claire Denis", year: 1999, genre: "drama", country: "France" },
        { title: "Raising Arizona", director: "Joel Coen", year: 1987, genre: "comedy", country: "USA" },
        { title: "The Fly", director: "David Cronenberg", year: 1986, genre: "horror", country: "USA" },
        { title: "Se7en", director: "David Fincher", year: 1995, genre: "thriller", country: "USA" },
        { title: "The Bridge on the River Kwai", director: "David Lean", year: 1957, genre: "war", country: "UK" },
        { title: "Harlem Nights", director: "Eddie Murphy", year: 1989, genre: "comedy", country: "USA" },
        { title: "On the Waterfront", director: "Elia Kazan", year: 1954, genre: "drama", country: "USA" },
        { title: "The Red Shoes", director: "Michael Powell, Emeric Pressburger", year: 1948, genre: "drama", country: "UK" },
        { title: "Friday", director: "F. Gary Gray", year: 1995, genre: "comedy", country: "USA" },
        { title: "Paris is Burning", director: "Jennie Livingston", year: 1990, genre: "documentary", country: "USA" },
        { title: "When We Were Kings", director: "Leon Gast", year: 1996, genre: "documentary", country: "USA" },
        { title: "Mickey 17", director: "Bong Joon Ho", year: 1996, genre: "sci-fi", country: "USA" },
        { title: "Heat", director: "Michael Mann", year: 1996, genre: "crime", country: "USA" },
        { title: "Alien", director: "Ridley Scott", year: 1979, genre: "sci-fi", country: "USA" },
        { title: "Jackie Brown", director: "Quinton Tarantino", year: 1979, genre: "crime", country: "USA" },
        { title: "Malcolm X", director: "Spike Lee", year: 1992, genre: "drama", country: "USA" },
        { title: "Run Lola Run", director: "Tom Tykwer", year: "1998", genre: "action", country: "Germany" },
        { title: "Aguirre, the Wrath of God", director: "Werner Herzog", year: "1972", genre: "drama", country: "Germany" },
        { title: "Fitzcarraldo", director: "Werner Herzog", year: "1982", genre: "adventure", country: "Germany" },
        { title: "Sorcerer", director: "William Friedkin", year: "1977", genre: "thriller", country: "USA" },
        { title: "The Exorcist", director: "William Friedkin", year: "1973", genre: "horror", country: "USA" },
        { title: "Chungking Express", director: "Wong Kar-wai", year: "1994", genre: "romance", country: "Hong Kong" },
        { title: "Fallen Angels", director: "Wong Kar-wai", year: "1995", genre: "crime", country: "Hong Kong" },
        { title: "Happy Together", director: "Wong Kar-wai", year: "1997", genre: "drama", country: "Hong Kong" },
        { title: "Joint Security Area", director: "Park Chan-wook", year: "2000", genre: "thriller", country: "South Korea" },
        { title: "Crouching Tiger, Hidden Dragon", director: "Ang Lee", year: "2000", genre: "action", country: "Taiwan" },
        { title: "Love & Basketball", director: "Gina Prince-Bythewood", year: "2000", genre: "romance", country: "USA" },
        { title: "The Man Who Wasnt There", director: "Joel Coen", year: "2001", genre: "crime", country: "USA" },
        { title: "Training Day", director: "Antoine Fuqua", year: "2001", genre: "crime", country: "USA" },
        { title: "The Lord of the Rings: The Fellowship of the Ring", director: "Peter Jackson", year: "2001", genre: "fantasy", country: "New Zealand" },
        { title: "Spirited Away", director: "Hayao Miyazaki", year: "2001", genre: "animation", country: "Japan" },
        { title: "The Lord of the Rings: The Two Towers", director: "Peter Jackson", year: "2002", genre: "fantasy", country: "New Zealand" },
        { title: "Adaptation", director: "Spike Jonze", year: "2002", genre: "drama", country: "USA" },
        { title: "City of God", director: "Fernando Meirelles", year: "2002", genre: "crime", country: "Brazil" },
        { title: "Paid in Full", director: "Charles Stone III", year: "2002", genre: "crime", country: "USA" },
        { title: "Oldboy", director: "Park Chan-wook", year: "2003", genre: "thriller", country: "South Korea" },
        { title: "The Lord of the Rings: The Return of the King", director: "Peter Jackson", year: "2003", genre: "fantasy", country: "New Zealand" },
        { title: "Master and Commander: The Far Side of the World", director: "Peter Weir", year: "2003", genre: "war", country: "USA" },
        { title: "Memories of Murder", director: "Bong Joon-ho", year: "2003", genre: "crime", country: "South Korea" },
        { title: "Kill Bill: Vol 1", director: "Quentin Tarantino", year: "2003", genre: "action", country: "USA" },
        { title: "Eternal Sunshine of the Spotless Mind", director: "Michel Gondry", year: "2004", genre: "sci-fi", country: "USA" },
        { title: "Kung Fu Hustle", director: "Stephen Chow", year: "2004", genre: "comedy", country: "Hong Kong" },
        { title: "Collateral", director: "Michael Mann", year: "2004", genre: "thriller", country: "USA" },
        { title: "The Prestige", director: "Christopher Nolan", year: "2006", genre: "thriller", country: "USA" },
        { title: "The Host", director: "Bong Joon-ho", year: "2006", genre: "horror", country: "South Korea" },
        { title: "There Will Be Blood", director: "Paul Thomas Anderson", year: "2007", genre: "drama", country: "USA" },
        { title: "Zodiac", director: "David Fincher", year: "2007", genre: "crime", country: "USA" },
        { title: "No Country for Old Men", director: "Coen Brothers", year: "2007", genre: "thriller", country: "USA" },
        { title: "Tropic Thunder", director: "Ben Stiller", year: "2008", genre: "comedy", country: "USA" },
        { title: "Hunger", director: "Steve McQueen", year: "2008", genre: "drama", country: "UK" },
        { title: "Inglourious Basterds", director: "Quentin Tarantino", year: "2009", genre: "war", country: "USA" },
        { title: "Fantastic Mr. Fox", director: "Wes Anderson", year: "2009", genre: "animation", country: "USA" },
        { title: "Black Dynamite", director: "Scott Sanders", year: "2009", genre: "comedy", country: "USA" },
        { title: "Unstoppable", director: "Tony Scott", year: "2010", genre: "action", country: "USA" },
        { title: "The Social Network", director: "David Fincher", year: "2010", genre: "drama", country: "USA" },
        { title: "The Raid", director: "Gareth Evans", year: "2011", genre: "action", country: "Indonesia" },
        { title: "Django Unchained", director: "Quentin Tarantino", year: "2012", genre: "action", country: "USA" },
        { title: "Birdman or (The Unexpected Virtue of Ignorance)", director: "Alejandro Gonzalez Inarritu", year: "2014", genre: "drama", country: "USA" },
        { title: "Whiplash", director: "Damien Chazelle", year: "2014", genre: "drama", country: "USA" },
        { title: "The Grand Budapest Hotel", director: "Wes Anderson", year: "2014", genre: "comedy", country: "USA" },
        { title: "Gone Girl", director: "David Fincher", year: "2014", genre: "thriller", country: "USA" },
        { title: "The Witch", director: "Robert Eggers", year: "2015", genre: "horror", country: "USA" },
        { title: "Sicario", director: "Denis Villeneuve", year: "2015", genre: "thriller", country: "USA" },
        { title: "Tangerine", director: "Sean Baker", year: "2015", genre: "comedy-drama", country: "USA" },
        { title: "Creed", director: "Ryan Coogler", year: "2015", genre: "sports", country: "USA" },
        { title: "Mad Max: Fury Road", director: "George Miller", year: "2015", genre: "action", country: "Australia" },
        { title: "Arrival", director: "Denis Villeneuve", year: "2016", genre: "sci-fi", country: "USA" },
        { title: "The Handmaiden", director: "Park Chan-wook", year: "2016", genre: "thriller", country: "South Korea" },
        { title: "La La Land", director: "Damien Chazelle", year: "2016", genre: "romance", country: "USA" },
        { title: "Moonlight", director: "Barry Jenkins", year: "2016", genre: "drama", country: "USA" },
        { title: "Certain Women", director: "Kelly Reichardt", year: "2016", genre: "drama", country: "USA" },
        { title: "The Florida Project", director: "Sean Baker", year: "2017", genre: "drama", country: "USA" },
        { title: "First Reformed", director: "Paul Schrader", year: "2017", genre: "drama", country: "USA" },
        { title: "If Beale Street Could Talk", director: "Barry Jenkins", year: "2018", genre: "drama", country: "USA" },
        { title: "Sorry to Bother You", director: "Boots Riley", year: "2018", genre: "comedy", country: "USA" },
        { title: "The Texas Chainsaw Massacre", director: "Tobe Hooper", year: "1974", genre: "horror", country: "USA" },
        { title: "Road House", director: "Rowdy Herrinton", year: 1989, genre: "action", country: "USA" },
        { title: "Eyes Wide Shut", director: "Stanley Kubrick", year: 1999, genre: "drama", country: "UK"}

    ];

    

    let draggedItem = null;

    function init() {
        renderMovies();
        setupEventListeners();
    }

    function renderMovies() {
        rankingContainer.innerHTML = '';
        movies.forEach((movie, index) => {
            const movieCard = createMovieCard(movie, index);
            rankingContainer.appendChild(movieCard);
        });
    }

    function createMovieCard(movie, index) {
        const card = document.createElement('div');
        card.className = `movie-card ${movie.genre}`;
        card.draggable = true;
        card.dataset.title = movie.title;
        card.innerHTML = `
            <h3>${index + 1}. ${movie.title} (${movie.year})</h3>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Country:</strong> ${movie.country}</p>
        `;
        return card;
    }

    function setupEventListeners() {
        addMovieBtn.addEventListener('click', () => movieModal.classList.remove('hidden'));
        closeModal.addEventListener('click', () => movieModal.classList.add('hidden'));
        window.addEventListener('click', e => { if (e.target === movieModal) movieModal.classList.add('hidden'); });
        movieForm.addEventListener('submit', handleFormSubmit);
        getRecommendationBtn.addEventListener('click', showRecommendation);
        closeRecommendationBtn.addEventListener('click', () => recommendationContainer.classList.add('hidden'));

        rankingContainer.addEventListener('dragstart', handleDragStart);
        rankingContainer.addEventListener('dragover', handleDragOver);
        rankingContainer.addEventListener('drop', handleDrop);
        rankingContainer.addEventListener('dragend', handleDragEnd);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const newMovie = {
            title: document.getElementById('title').value.trim(),
            director: document.getElementById('director').value.trim(),
            year: parseInt(document.getElementById('year').value),
            genre: document.getElementById('genre').value,
            country: document.getElementById('country').value.trim()
        };
        movies.push(newMovie);
        renderMovies();
        movieForm.reset();
        movieModal.classList.add('hidden');
    }

    function handleDragStart(e) {
        if (e.target.classList.contains('movie-card')) {
            draggedItem = e.target;
            draggedItem.classList.add('dragging');
        }
    }

    function handleDragOver(e) {
        e.preventDefault();
        const afterElement = getDragAfterElement(rankingContainer, e.clientY);
        const dragging = document.querySelector('.dragging');
        if (!afterElement) {
            rankingContainer.appendChild(dragging);
        } else {
            rankingContainer.insertBefore(dragging, afterElement);
        }
    }

    function handleDrop(e) {
        e.preventDefault();
    }

    function handleDragEnd() {
        if (draggedItem) {
            draggedItem.classList.remove('dragging');
            updateMovieOrder();
            renderMovies();
            draggedItem = null;
        }
    }

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.movie-card:not(.dragging)')];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            return (offset < 0 && offset > closest.offset) ? { offset, element: child } : closest;
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    function updateMovieOrder() {
        const cards = rankingContainer.querySelectorAll('.movie-card');
        const newOrder = [];
        cards.forEach(card => {
            const movie = movies.find(m => m.title === card.dataset.title);
            if (movie) newOrder.push(movie);
        });
        movies = newOrder;
    }

    function showRecommendation() {
        if (movies.length === 0) {
            alert('Please add some movies first!');
            return;
        }
        const randomIndex = Math.floor(Math.random() * movies.length);
        const recommendedMovie = movies[randomIndex];
        recommendationCard.className = `movie-card ${recommendedMovie.genre}`;
        recommendationCard.innerHTML = `
            <h3>${recommendedMovie.title} (${recommendedMovie.year})</h3>
            <p><strong>Director:</strong> ${recommendedMovie.director}</p>
            <p><strong>Genre:</strong> ${recommendedMovie.genre}</p>
            <p><strong>Country:</strong> ${recommendedMovie.country}</p>
            <p>Why not rewatch this one?</p>
        `;
        recommendationContainer.classList.remove('hidden');
    }

    init();
});
