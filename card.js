const RADIUS = 50;
const PERIMETER = (2 * Math.PI * RADIUS).toFixed(3);

function gameScoreCard(rating, quote) {
    return `    
    <div class="card">
        <span class="card-title">Game Score</span>
        <div class="row1">
            <img src="user-profile.png" alt="User Profile" class="user-pfp">
            <div class="ring-container">
                <svg class="progress-ring" viewBox="0 0 120 120">
                    <circle class="ring-background" cx="60" cy="60" r="50" ></circle>
                    <circle class="ring-fill" cx="60" cy="60" r="50" style="stroke: ${getColor(rating)}; stroke-dasharray: ${PERIMETER} ;stroke-dashoffset: ${getDashOffSet(rating)} ; "></circle>
                </svg>
                <span class="rating-container">
                    <span class="rating">${rating}</span><span class="out-of">/10</span>
                </span>
            </div>
        </div>
        <span class="quote">"${quote}"</span>
    </div>

    `
}


const body = document.querySelector('body');

function addScoreCard(game) {
    const div = document.createElement("div");
    div.innerHTML = gameScoreCard(game.rating, game.quote);
    body.appendChild(div);
}







const games = [
    { rating: 7.5, quote: "Ok, I guess" },
    { rating: 10, quote: "J*bless" },
    { rating: 0, quote: "close but, not cigar" },
    { rating: 5, quote: "get good!" },
]

games.forEach(game => addScoreCard(game)); // assume already filtered for rating edge case just after fetching!


/**
 * Returns the perimeter, and offSetperimeter using rating
 * @param {Number} rating the rating for the game 
 * @returns {offSetPercentage}  
 */
function getDashOffSet(rating) {
    if (rating < 0 || rating > 10) return 0;
    let offSetPercentage = (10 - rating) / 10;
    return PERIMETER * offSetPercentage;
}


/**
 * Retuns the color for progress bar based on rating
 * @param {Number} rating the rating for the game 
 * @returns {'grey' | 'red' | 'yellow' | 'green'}
 */
function getColor(rating) {
    if (rating > 10 || rating < 0) return 'grey';

    if (rating < 3) return 'red';
    else if (rating < 6) return 'yellow';
    else return 'green';
}

