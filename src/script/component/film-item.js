class FilmItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set film(film) {
    this._film = film;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `

    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :host {
      display: block;
      margin-bottom: 18px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      overflow: hidden;
    }
    
    .fan-art-club {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
      object-position: center;
    }
    
    .club-info {
      padding: 24px;
    }
    
    .club-info>h2 {
      font-weight: lighter;
    }

    .club-info>p {
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 10;
      /* number of lines to show */
    }
    </style>

      <img class="fan-art-club" src="https://image.tmdb.org/t/p/w500/${this._film.poster_path}" alt="Image">
      <div class="club-info">
        <h2>${this._film.title}</h2>
        <p>${this._film.overview}</p>
      </div>
    `;
  }
}

customElements.define('film-item', FilmItem);
