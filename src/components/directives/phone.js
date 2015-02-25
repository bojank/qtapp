'use strict';

angular.module('questtrade')
.directive('phone', function() {
	return {
		restrict: "A",
		require: "ngModel",
		link: function (scope, element, attr, ngModelCtrl) {
			var  parse = function (value) {
				var numbers = value && value.replace(/[^0-9.]/g, "");
				if (/^\d{10}$/.test(numbers))
					return numbers;
				return undefined;
			}

			var format = function (value) {
				var numbers = value && value.replace(/[^0-9.]/g, "");
				var matches = numbers && numbers.match(/^(\d{3})(\d{3})(\d{4})$/);
				if (matches)
					return '(' + matches[1] + ") " + matches[2] + "-" + matches[3];
				return undefined;
			}

			ngModelCtrl.$parsers.push(parse);
			ngModelCtrl.$formatters.push(format);

			element.bind("blur", function () {
				var value = format(element.val());
				var isValid = !!value;
				if (isValid) {
					ngModelCtrl.$setViewValue(value);
					ngModelCtrl.$render();
				}

				ngModelCtrl.$setValidity("phone", isValid);
				scope.$apply();
			});
		}
	};
});