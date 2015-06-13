import Ember from 'ember';

export default Ember.Select.extend({
  optionLabelPath: 'content.label',
  optionLabelKeyPrefix: null,

  labelKeyPrefixDidChange: function() {
    var content = this.get('content');
    var labelKeyPrefix = this.get('optionLabelKeyPrefix');

    if (!content || !labelKeyPrefix) { return; }

    content.forEach(function(option) {
      Ember.set(option, 'label', this.t('%@.%@'.fmt(labelKeyPrefix, option.value)));
    }.bind(this));
  }.observes('content', 'optionLabelKeyPrefix', 'i18n.locale').on('init')
});
