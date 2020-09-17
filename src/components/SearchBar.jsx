import PropTypes from 'prop-types';
import React, { Component } from 'react';

function renderInput(bookmarkedOnly, onBookmarkedChange) {
  return (
    <label data-testid="checkbox-input-label" htmlFor="input">
  Mostrar somente favoritos
      <input
        data-testid="checkbox-input"
        type="checkbox"
        checked={bookmarkedOnly}
        onChange={onBookmarkedChange}
      />

    </label>
  );
}

function rendergenre(selectedGenre, onSelectedGenreChange) {
  return (
    <label data-testid="select-input-label" htmlFor="input">
  Filtrar por gênero
      <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}>
        <option data-testid="select-option" value="">Todos</option>
        <option data-testid="select-option" value="action">Ação</option>
        <option data-testid="select-option" value="comedy">Comédia</option>
        <option data-testid="select-option" value="thriller">Suspense</option>

      </select>

    </label>
  );
}

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="input">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>

        {renderInput(bookmarkedOnly, onBookmarkedChange)}
        {rendergenre(selectedGenre, onSelectedGenreChange)}

      </form>
    );
  }
}

SearchBar.propTypes = {
  bookmarkedOnly: PropTypes.number.isRequired,
  onBookmarkedChange: PropTypes.number.isRequired,
  onSearchTextChange: PropTypes.number.isRequired,
  onSelectedGenreChange: PropTypes.number.isRequired,
  searchText: PropTypes.number.isRequired,
  selectedGenre: PropTypes.number.isRequired,
};
