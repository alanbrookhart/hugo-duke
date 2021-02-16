(function() {
  class Header {
    static initialize () {
      const toggle = document.querySelector('[data-js="menu-toggle"]')
      toggle.addEventListener('click', (event) => { this.handleMenuToggle(event) })
    }

    static handleMenuToggle (event) {
      event.currentTarget.classList.toggle('active')
      document.querySelector('[data-js="menu-dropdown"]').classList.toggle('active')
    }
  }

  Header.initialize()
})()
