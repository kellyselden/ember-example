import Ember from 'ember';

export default Ember.Select.extend({
  optionLabelPath: 'content.label',
  optionLabelKeyPrefix: null,

  labelKeyPrefixDidChange: function() {
    var content = this.get('content');
    var labelKeyPrefix = this.get('optionLabelKeyPrefix');

    if (!content || !labelKeyPrefix) { return; }

    content.forEach((option) => {
      Ember.set(option, 'label', this.get('i18n').t(`${labelKeyPrefix}.${option.value}`));
    });
  }.observes('content', 'optionLabelKeyPrefix', 'i18n.locale').on('init')
});
