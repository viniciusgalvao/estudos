angular.module('listaTelefonica').filter('ellipsis', function (){
	return function (input, size) {
		var output = input.length <= size ? input : input.substring(0, (size || 2)) + "...";
		return output;
	};
});