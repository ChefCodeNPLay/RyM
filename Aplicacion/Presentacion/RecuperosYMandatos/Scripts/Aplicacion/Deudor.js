var deudor = {
     confirmarDatoIdentificacion: function (contenedor) {
        var errores = [];
        var model = build.renderizarModelFrom(contenedor);
        errores = deudor.validarCampoIdentificacion(model, errores);
        custom.setearLoader();
        if (errores.length !== 0) {
            var el = $('.my-el');
            el.protipShow({
                title: 'Por favor, ingrese una identificación correcta',
                scheme: 'blue'
            });
            return false;
        } 
     },
     validarCampoIdentificacion: function (model, lisErroes) {
         if ((!model.ID)||(model.ID!=="12345678"))
         { lisErroes.push("Por favor, ingrese su identificación."); }
        return lisErroes;
     },
     confirmarDatosContacto: function () {
         custom.setearLoader();
     },
     confirmarPregunta1: function() {
         custom.setearLoader();
     },
     validarDatosContacto: function (model) {
         var el;
         if (!model.Apellido)
         {
             el = $('.my-el');
             el.protipShow({
                 title: 'Por favor, ingrese su apellido',
                 scheme: 'blue'
             });
             return;
         }
         if (!model.Nombre)
         {
             el = $('.my-nombre');
             el.protipShow({
                 title: 'Por favor, ingrese su nombre',
                 scheme: 'blue'
             });
             return;
         }
         if (!model.Telefono_celular) {
             el = $('.my-telefono_celular');
             el.protipShow({
                 title: 'Por favor, ingrese su teléfono celular',
                 scheme: 'blue'
             });
             return;
         }
         if (!model.Correo_electronico) {
             el = $('.my-correo_electronico');
             el.protipShow({
                 title: 'Por favor, ingrese su correo electrónico',
                 scheme: 'blue'
             });
             return;
         }
     }
}