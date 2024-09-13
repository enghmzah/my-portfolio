angular.module('portfolioApp', [])
.controller('MainController', function($scope) {
    $scope.skills = [
        {name: 'HTML', description: 'Markup language for the web'},
        {name: 'CSS', description: 'Stylesheets for modern web design'},
        {name: 'JavaScript', description: 'Dynamic programming for the web'},
        {name: 'Bootstrap', description: 'Responsive design framework'},
        {name: 'AngularJS', description: 'JavaScript framework for building dynamic web apps'}
    ];

    $scope.projects = [
        {title: 'Project 1', description: 'Description of project 1', image: 'project1.jpg'},
        {title: 'Project 2', description: 'Description of project 2', image: 'project2.jpg'},
        {title: 'Project 3', description: 'Description of project 3', image: 'project3.jpg'},
        {title: 'Project 2', description: 'Description of project 4', image: 'project2.jpg'},
        {title: 'Project 3', description: 'Description of project 5', image: 'project3.jpg'}
    ];
});