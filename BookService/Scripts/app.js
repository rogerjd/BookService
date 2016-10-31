var ViewModel = function () {
    var self = this;
    self.books = ko.observableArray();
    self.error = ko.observable();

    var booksUri = "/api/books/";

    function ajaxHelper(uri, method, data) {
        self.error('');
    }
};
ko.applyBindings(new ViewModel());