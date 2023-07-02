(function($) {
    (function($) {
        $.fn.repeater = function(selector , addButton) {
            var repeater = $(selector);
            var addButton = repeater.next(addButton);
            var counter = 1;
            
            addButton.click(function() {
                var clone = repeater.find('[data-repeater-item]').first().clone();
                counter++;
                
                var nameAttr = clone.find('[data-repeater-input]').attr('name');
                var newNameAttr = nameAttr.replace(/-\d+$/, '') + '-' + counter;
                
                clone.find('[data-repeater-input]').attr('name', newNameAttr);
                
                repeater.append(clone);
            });
        };
    })(jQuery);
})(jQuery);