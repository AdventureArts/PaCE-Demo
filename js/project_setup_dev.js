require.config({
	//use PaCE path to load its development version
	baseUrl: 'js/lib/pace/src/js/'
});

require(['setup'], function() {
	require(['pace'], function() {
		require(['../../../../../js/project_setup']);
	});
});
