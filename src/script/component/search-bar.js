class SearchBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {

    this.render();

  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {

    this.shadowDOM.innerHTML = `
    
      <style>

      @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');

      .search {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 4rem auto;
        width: 100%;
        max-width: 600px;
        background: rgba(225, 225, 225, 0.2);
        border-radius: 60px;
        padding: 5px 10px;
        backdrop-filter: blur(4px) saturate(180%);
      }
      
      .search input {
        background: transparent;
        flex: 1;
        border: 0;
        outline: none;
        padding: 15px 11px;
        font-size: 18px;
        color: #10d0b8;
      }
      
      ::placeholder {
        color: #666;
      }
      
      .search button i {
        width: 20px;
      }
      
      .search button {
        border: 0;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background: #10d0b8;
        cursor: pointer;
      }
      
      @media (max-width:768px) {
        .search {
          max-width: 300px;
          background: rgba(225, 225, 225, 0.2);
          border-radius: 40px;
          padding: 3px 8px;
        }
      }
      </style>
    
      <div id="search" class="search">
      <input placeholder="Cari Film Kesukaanmu" id="searchElement" type="search">
      <button id="searchButtonElement" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);

  }

}

customElements.define('search-bar', SearchBar);