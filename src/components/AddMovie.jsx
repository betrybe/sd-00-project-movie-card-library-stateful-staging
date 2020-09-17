import PropTypes from 'prop-types';
import React, { Component } from 'react';


export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.SubmitMovie = this.SubmitMovie.bind(this);
  }

  onChangeHandler(event, type) {
    const { value } = event.target;
    if (type === 'rating') { this.setState({ [type]: +value }); } else this.setState({ [type]: value });
  }

  SubmitMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  tituloLabel() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="input">
        Título
        <input data-testid="title-input" type="text" value={title} id="title" onChange={(e) => this.onChangeHandler(e, 'title')} />
      </label>
    );
  }

  subtituloLabel() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="input">
        Subtítulo
        <input data-testid="subtitle-input" type="text" value={subtitle} id="subtitle" onChange={(e) => this.onChangeHandler(e, 'subtitle')} />
      </label>
    );
  }

  imagemLabel() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="input">
        Imagem
        <input data-testid="image-input" type="text" value={imagePath} id="imagePath" onChange={(e) => this.onChangeHandler(e, 'imagePath')} />
      </label>
    );
  }


  render() {
    const { storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.tituloLabel()}
        {this.subtituloLabel()}
        {this.imagemLabel()}
        <label data-testid="storyline-input-label" htmlFor="input">
          Sinopse
          <textarea data-testid="storyline-input" value={storyline} id="storyline" onChange={(e) => this.onChangeHandler(e, 'storyline')} />
        </label>
        <label data-testid="rating-input-label" htmlFor="input">
          Avaliação
          <input data-testid="rating-input" type="number" value={rating} id="rating" onChange={(e) => this.onChangeHandler(e, 'rating')} />
        </label>
        <label data-testid="genre-input-label" htmlFor="input">
          Gênero
          <select data-testid="genre-input" value={genre} id="genre" onChange={(e) => this.onChangeHandler(e, 'genre')}>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          data-testid="send-button"
          type="button"
          onClick={this.SubmitMovie}
        >
Adicionar filme

        </button>


      </form>

    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
