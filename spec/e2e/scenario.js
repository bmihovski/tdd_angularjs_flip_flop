describe('Given a view A that has a single button', function() {
	describe('When the button is pushed', function() {
		var viewA = element(by.css('#viewA'));
		var viewB = element(by.css('#viewB'));
		var buttonToPush = element(by.linkText('flip'));
		beforeEach(function() {
			browser.get('/');
			expect(viewA.isPresent()).toBeTruthy();
			buttonToPush.click();
		});
		it('Should be switched to view B', function() {
			expect(viewB.isPresent()).toBeTruthy();
		});
		it('Should not display view A', function() {
			expect(viewA.isPresent()).toBeFalsy();
		});
		it('Should be switched to view A', function() {
			buttonToPush.click();
			expect(viewA.isPresent()).toBeTruthy();
		});
	});
});