var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'appPhone',
  // App id
  id: 'com.appPhone.Phone',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');

var $$ = Dom7;

// Alert
$$('.alerta').on('click', function () {
  app.dialog.alert('Hola Este buton manda un alert porque no se me ocurrio nada de nada');
});

$$('.alerta').on('click', function(){
  /*var formData = app.form.convertToData('#my-form');
  alert(JSON.stringify(formData));*/
  var name = $$('#my-form [name="nombre"]').val();
  var apPat = $$('#my-form [name="apellPat"]').val();
  alert('Nombre: ' + name + 'Apellido Pat: ' + apPat);
});