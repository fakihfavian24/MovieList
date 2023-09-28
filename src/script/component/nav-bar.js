class NavBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    }

    :host {
      display: flex;
      position: fixed;
      padding: 1rem 10rem;
      width: 100%;
      background-color: #10d0b8;
      color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      background-color: transparent;
      backdrop-filter: blur(6px);
      z-index: 1;
    }
    
    :host h2 {
      padding: 16px;
      margin-left: 4rem;
      color: #10d0b8;
      text-shadow: 2px 1px 1px rgba(0, 0, 0, 1);
    }
    
    @media (max-width:768px) {
      :host h2 {
        margin-left: 1rem;
      }
    }
    </style>

    <h2><i class="fa-solid fa-film"></i> MovieList</h2>
    `;
  }
}

customElements.define('nav-bar', NavBar);