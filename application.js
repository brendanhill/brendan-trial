/*global Ember $*/
(function() {
    'use strict'
    
    var MySite;
    
    MySite = Ember.Application.create({
    
        ApplicationView: Ember.View.extend({
            templateName: 'application'
        }),
        ApplicationController: Ember.Controller.extend({}),
        
        HomeController: Ember.Controller.extend(),
        HomeView: Ember.View.extend({
            templateName: 'home'
        }),
        
        AboutController: Ember.Controller.extend(),
        AboutView: Ember.View.extend({
            templateName: 'about'
        }),
        
        Router: Ember.Router.extend({
            root: Ember.Route.extend({
                toggle: function(router, event) {
                    console.log();
                    router.transitionTo(router.currentState.next);
                },
                
                home: Ember.Route.extend({
                    route: '/',
                    connectOutlets: function(router, event) {
                        console.log('in home');
                        router.get('applicationController').connectOutlet('home');
                    },
                    next: 'about'
                }),
                
                about: Ember.Route.extend({
                    next: 'home',
                    route: '/about',
                    connectOutlets: function(router, event) {
                        console.log('in about');
                        router.get('applicationController').connectOutlet('about');
//                        router.get('sidebarController').connectOutlet('sidebar');
//                        router.get('contentController').connectOutlet('content');
//                        router.get('footerController').connectOutlet('footer');
                    }   
                })
            })
        })
    
    });
    
    MySite.initialize();

})();