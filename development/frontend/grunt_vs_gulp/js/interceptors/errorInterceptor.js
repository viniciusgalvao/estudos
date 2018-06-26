angular.module("listaTelefonica").factory("errorInterceptor", function ($q, $location){
	return {
		responseError: function (rejection) { 
			if (rejection.status == 404) { // checando e redirecionando para página de error.
				$location.path("/error");
			}
			return $q.reject(rejection);
		}
	};
});