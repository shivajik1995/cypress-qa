afterEach(function () {
console.log('E2E FILE LOADED');
  if (this.currentTest.state === 'failed') {

    cy.task('aiAnalyze', {
      testName: this.currentTest.title,
      error: this.currentTest.err?.message || 'Unknown Error'
    });

  }

});