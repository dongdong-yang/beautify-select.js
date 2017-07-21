/**
 * @author Dongdong Yang <hi@dongdong.ca>
 * Copyright (c) 2017 Dongdong Yang - released under MIT License
 * https://github.com/stupidong/display-value-as-column.js
 * Usage: $('#yourselect').DisplayValueAsColumn(data);
**/

jQuery.fn.extend({
    BeautifySelect: function (options) {
        var self = this;
        var $self = $(this);
        if (options && options.items) {
            Object.keys(options.items).forEach(function (key) {
                var option = $('<option>');
                option.val(key);
                option.text(options.items[key]);
                $self.append(option);
            })
        }
        $self.attr('size', $self.find('option').length);
        $self.wrap('<div class="beautify-select"></div>').wrap('<span>');

        var displaySelect = $('<select class="display-select"></select>');
        $self.before(displaySelect);
        $self.before($('<br>'));
        $self.addClass('value-select');

        if (options && options.showValue) {
            $self.addClass('display-value-as-column');
        }

        displaySelect.on('click', function () {
            $self.slideToggle(110);
        })
        $self.on('click', function () {
            $self.hide();
            displaySelect.empty();
            var selectedOption = $self.find('option:selected').clone().appendTo(displaySelect);
        })
    }
});


