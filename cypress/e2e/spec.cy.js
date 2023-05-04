describe('Search', () => {
  it('Finds Movies By Title', () => {
    cy.visit('/');
    cy.get('input[name=searchInput]').type('pitch perfect 3{enter}');
    cy.get('#main-content-movies .movie-title:first-child h3').should('contain', 'Pitch Perfect 3');
  });

  it('Clears Results when search input is empty', () => {
    cy.visit('/');
    cy.get('input[name=searchInput]').type('pitch perfect 3{enter}');
    cy.get('#main-content-movies .movie-title').should('have.length', 1);

    cy.get('input[name=searchInput]').type('{selectall}{backspace}{enter}');
    cy.get('#main-content-movies .movie-title').should('have.length', 6);
  });
});

describe('Sort', () => {
  it('Sorts Movies By Title', () => {
    cy.visit('/');
    cy.get('#sort-control .dropdown-input').click();

    cy.get('#sort-control .dropdown-menu .sort-control-option')
      .filter((index, element) => element.textContent.includes("Title"))
      .click();

    cy.get('#main-content-movies .movie-title h3').should(($h3) => {
      const texts = $h3.map((index, el) => el.textContent).get();
      const sortedTexts = [...texts].sort((a, b) => a.localeCompare(b));
      expect(texts).to.deep.eq(sortedTexts);
    });
  });

  it('Sorts Movies By Release Date', () => {
    cy.visit('/');
    cy.get('#sort-control .dropdown-input').click();

    cy.get('#sort-control .dropdown-menu .sort-control-option')
      .filter((index, element) => element.textContent.includes("Release Date"))
      .click();

    cy.get('#main-content-movies .movie-title span.movie-title-release-year').should(($span) => {
      const texts = $span.map((index, el) => el.textContent).get();
      const sortedTexts = [...texts].sort((year1, year2) => Number(year2) - Number(year1));
      expect(texts).to.deep.eq(sortedTexts);
    });
  });

});

describe('Genre Select', () => {

  it('Should Switch To The Specified Genre', () => {
    cy.visit('/');
    cy.get('.genre-select button:nth-child(2)').click();
    cy.get('#main-content-movies .movie-title .movie-title-genres').should(($div) => {
      $div.map((index, el) => el.textContent).get().forEach((text) => {
        expect(text).to.match(/Action/g);
      });
    });
  });
});

describe('Movie Select', () => {
  it('Should Show Details Of A Movie When Selected', () => {
    cy.visit('/');
    cy.get('#main-content-movies .movie-title:first-child').click();
    cy.get('#heading-content .movie-details h1').should('have.text', 'Fifty Shades Freed');
  });

  it('Should Return to Search After clicking the return to search button', () => {
    cy.visit('/');
    cy.get('#main-content-movies .movie-title:first-child').click();
    cy.get('#heading-content #heading-content-tools #back-to-search').click();
    cy.get('#heading-content h1').should('have.text', 'Find Your Movie');
  });
});