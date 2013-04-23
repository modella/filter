# Modella-Filtered

A plugin to filter attributes from [modella](http://github.com/modella/modella) models.

## Basic Usage

    var modella = require('modella');

    var User = modella('User');

    User.attr('username')
        .attr('email')
        .attr('password')

    var user = new User;

    user.set({username: 'JimBo',
                 email: 'jimbo@bob.com',
              password: '123456' });


    user.filter(['password']);
     => {username: 'JimBo',
            email: 'jimbo@bob.com' }

You can also specify single attributes to filter such as:

    user.filter('password');


If you'd like an attribute to always be filtered, you can also specify it when defining the attribute.

Filter can also be called without an argument, filtering just attributes defined to
auto-filter:

    User.attr('password', {filtered: true});

    user.filter();
     => {username: 'JimBo',
            email: 'jimbo@bob.com' }

