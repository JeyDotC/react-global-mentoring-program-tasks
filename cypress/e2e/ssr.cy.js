const baseUrl = 'http://localhost:9001';
describe('Search', () => {
    it('Query parameter should trigger a search', () => {

        cy.visitAsHtml('/?query=pitch perfect 3', baseUrl);
        cy.get('input[name=query]').should('have.value', 'pitch perfect 3');
        cy.get('#main-content-movies .movie-title:first-child h3').should('contain', 'Pitch Perfect 3');
    });
});

it('Clears Results when query parameter is empty', () => {
    cy.visitAsHtml('/?query=pitch perfect 3', baseUrl);
    cy.get('#main-content-movies .movie-title').should('have.length', 1);

    cy.visitAsHtml('/?query=', baseUrl);
    cy.get('input[name=query]').should('have.value', '');
    cy.get('#main-content-movies .movie-title').should('have.length', 6);
});

describe('Sort', () => {
    it('OrderBy parameter should order movies By Title', () => {
        cy.visitAsHtml('/?orderBy=Title', baseUrl);

        cy.get('#main-content-movies .movie-title h3').should(($h3) => {
            const texts = $h3.map((index, el) => el.textContent).get();
            const sortedTexts = [...texts].sort((a, b) => a.localeCompare(b));

            expect(texts).to.deep.eq(sortedTexts);
        });
    });

    it('Sorts Movies By Release Date', () => {
        cy.visitAsHtml('/?orderBy=Release Date', baseUrl);

        cy.get('#main-content-movies .movie-title span.movie-title-release-year').should(($span) => {
            const texts = $span.map((index, el) => el.textContent).get();
            const sortedTexts = [...texts].sort().reverse();
            expect(texts).to.deep.eq(sortedTexts);
        });
    });

});

describe('Genre Select', () => {

    it('Genre parameter should Switch To The Specified Genre', () => {
        cy.visitAsHtml('/?genre=Action', baseUrl);
        cy.get('.genre-select button:nth-child(2)').should('have.class', 'active');
        cy.get('#main-content-movies .movie-title .movie-title-genres').should(($div) => {
            $div.map((index, el) => el.textContent).get().forEach((text) => {
                expect(text).to.match(/Action/g);
            });
        });
    });
});

describe('Movie Select', () => {
    it('Should Show Details Of A Movie When Selected', () => {
        cy.visitAsHtml('/337167', baseUrl);
        cy.get('#heading-content .movie-details h1').should('have.text', 'Fifty Shades Freed');
    });

    it('Should Return to Search After clearing the movieId param', () => {
        cy.visitAsHtml('/337167', baseUrl);
        cy.get('#heading-content .movie-details h1').should('have.text', 'Fifty Shades Freed');

        cy.visitAsHtml('/', baseUrl);
        cy.get('#heading-content h1').should('have.text', 'Find Your Movie');
    });

    it('Should Return to Search After clicking the return to search button', () => {
        cy.visitAsHtml('/337167', baseUrl);
        cy.get('#heading-content #heading-content-tools #back-to-search').click();
        cy.location().should(({ pathname }) => expect(pathname).to.eq('/'));
    });
});

describe('All Filters', () => {
    it('Should work with all filters', () => {
        cy.visitAsHtml('/?orderBy=Release+Date&genre=Comedy&query=deadpool', baseUrl);
        cy.get('.movie-title').should(($movieTitles) => {
            const data = $movieTitles.map((index, el) => ({
                title: el.querySelector('h3').textContent.trim(),
                year: el.querySelector('.movie-title-release-year').textContent.trim()
            }))
                .get();

            expect(data).to.deep.eq([
                { title: "Deadpool 2", year: "2018" },
                { title: "Deadpool", year: "2016" },
            ]);
        });
    });
});