/* jshint -W117, -W030 */

describe('Modal Component', function() {
  beforeEach(bard.appModule('app.shared', 'ngMock'));

  beforeEach(function() {
    bard.inject(this, '$componentController');
  })

  describe('Modal Component Initial State', function() {
    /**
     * Must have default closed
     * Must Have default title
     * Must inherit title if it is passed in the component
     */
    var component, bindings;
    beforeEach(function() {
      bindings = {
        title: 'Sample Title',
        modalId: 'myModal'
      };

      component = $componentController('ttModalComponent', null, bindings);
    });

    it('should have defualt modal title', function() {
      bindings.modalId = undefined;
      component = $componentController('ttModalComponent', null, bindings);
      component.$onInit();
      expect(component.modalId).to.equal('defaultModalId');
    });

    it('should have displu the given modal title', function() {
      component.$onInit();
      expect(component.modalId).to.equal('myModal');
    });

    it('should default to empty title string if there is no title', function() {
      bindings.title = undefined;
      component = $componentController('ttModalComponent', null, bindings);
      component.$onInit();
      expect(component.title).to.equal('');
    });

    it('should use the passed in title through the bindings', function () {
      component.$onInit();
      expect(component.title).to.equal('Sample Title');
    });
  });

  describe('Model Close events', function() {
    /**
     * When function is called, it should close the modal
     * Capture Enter Events
     */
  });
});
