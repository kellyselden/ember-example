import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('locale-chooser', 'Integration | Component | locale chooser', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{locale-chooser}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#locale-chooser}}
      template block text
    {{/locale-chooser}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
