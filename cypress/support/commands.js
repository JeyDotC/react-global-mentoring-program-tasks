// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("visitAsHtml", (route, baseUrlOverride) => {
    cy.request(`${baseUrlOverride}${route}`)
      .its("body")
      .then((html) => {
        // remove the application code JS bundle
        console.log(html);
        html = html.replace(
          /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
          ""
        ).replace(
            /href="\//gi,
            `href="${baseUrlOverride}/`
        );
        
        cy.document().invoke({ log: false }, "open");
        cy.document().invoke({ log: false }, "write", html);
        cy.document().invoke({ log: false }, "close");
      });
    // now we can use "normal" Cypress api on the page
  });