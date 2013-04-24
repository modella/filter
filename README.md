# Modella-Filter

A plugin to filter attributes from [modella](http://github.com/modella/modella) models.

## Basic Usage

    var modella = require('modella'),
        filter  = require('modella-filter');

    var User = modella('User');
    User.use(filter);

    User.attr('username')
        .attr('email')
        .attr('password')

    var user = new User;

    user.set({username: 'JimBo',
                 email: 'jimbo@bob.com',
              password: '123456' });


    user.filter('password');
     => {username: 'JimBo',
            email: 'jimbo@bob.com' }

## Filtering multiple attributes

You can also specify multiple attributes to filter by using an array:

    user.filter(['password', 'username']);
     =>  { email: 'jimbo@bob.com' }

## Always Filtering

Sometimes there are certain variables that you'd always want to filter, without
having to include them as an argument to filter, such as hashed-passwords. You
can do this by defining it as an option for the attribute.

    User.attr('username')
        .attr('email')
        .attr('password', {filtered: true})

    user.filter('email');
     => {username: 'JimBo' }

## No Arguments Required

If you don't specify any fields to be filtered, `.filter()` will just filter
fields defined to be filtered.

    User.attr('username')
        .attr('email')
        .attr('password', {filtered: true})

    user.filter();
     => {username: 'JimBo',
            email: 'jimbo@bob.com' }

