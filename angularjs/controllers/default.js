exports.install = function() {
	framework.route('/*', view_app);
};

function view_app() {
	var self = this;
	self.view('matrix');
}
