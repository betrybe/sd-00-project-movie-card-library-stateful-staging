import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.addMovie = this.addMovie.bind(this);
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = [...movies];
    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((e) => e.bookmarked);
    }
    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((e) => e.genre === selectedGenre);
    }
    if (searchText) {
      filteredMovies = filteredMovies.filter((e) => e.title.includes(searchText)
        || e.subtitle.includes(searchText) || e.storyline.includes(searchText));
    }

    return filteredMovies;
  }

  addMovie(obj) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, obj] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={(event) => this.setState({ searchText: event.target.value })}
          onBookmarkedChange={(event) => this.setState({ bookmarkedOnly: event.target.checked })}
          onSelectedGenreChange={(event) => this.setState({ selectedGenre: event.target.value })}
        />
        <MovieList movies={this.filterMovies()} />
        <AddMovie onClick={this.addMovie} />

      </div>

    );
  }
}
