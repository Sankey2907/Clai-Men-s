function performSearch() {
    var searchTerm = document.getElementById('searchInput').value.trim();

    if (searchTerm !== '') {
        // Redirect to the search results page
        window.location.href = 'search-results.html?query=' + encodeURIComponent(searchTerm);
    } else {
        // Redirect to the error page
        window.location.href = 'error.html';
    }
}
