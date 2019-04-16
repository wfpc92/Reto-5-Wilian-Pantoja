console.log("perra");
Vue.component('v-select', VueSelect.VueSelect);
let nombre = "nombre";


Vue.component("super-componente", {
  props: [
    'nombre'
  ],
  template: `<h1>Soy un super compoente y me llamo {{nombre}}</h1>`
});
var app = new Vue({
  el: "#app",
  data: {
    titulo: "Vue Class 2",
    estudiantes: [{
        id: 1,
        nombre: "Edwin OrdoÃ±ez"
      },
      {
        id: 1,
        nombre: "David Mosquera"
      },
      {
        id: 1,
        nombre: "Jonatan Sosapanta"
      },
    ],
    estudiante_id: 0,
    selected: 0,
    estudiante: {}
  },
  methods: {
    cambiob: (id) => {
      console.log(id)
    }
  }
});


////////////////////////////////////////////////////////////
Vue.use(VueCurrencyFilter,
  {
    symbol : '$',
    thousandsSeparator: '.',
    fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  })


Vue.component('informacion-producto', {
  props: ['facturacion'],
  template: `
  <div>
    <div class="panel-body">
      <div class="row">
        <div class="col-sm-3">
          <label for="" class="control-label">Código</label>
        </div>
        <div class="col-sm-9">
          <input type="text" min="1" v-model="facturacion.productoSeleccionado.producto"
            class="form-control input-sm" required>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <label for="" class="control-label">Descripción</label>
        </div>
        <div class="col-sm-9">
          <input type="text" min="1" v-model="facturacion.productoSeleccionado.descripcion"
            class="form-control input-sm" required>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <label for="" class="control-label">Precio</label>
        </div>
        <div class="col-sm-9">
          <input type="number" min="1" v-model="facturacion.productoSeleccionado.precio"
            class="form-control input-sm" required>
        </div>
      </div>
    </div>
    <div class="panel-footer">
      <div class="row">
        <div class="col-sm-3">
          <label for="" class="control-label">Cantidad:</label>
        </div>
        <div class="col-sm-6">
          <input type="number" min="1" v-model="facturacion.productoSeleccionado.cantidad"
            class="form-control col-sm-6 input-sm" required>
        </div>
        <div class="col-sm-3 text-right">
          <button class="btn btn-primary" @click="agregarLinea">Agregar</button>
        </div>
      </div>
    </div>
  </div>
  `,
  methods: {
    agregarLinea: function () {
      var productoSeleccionado = this.facturacion.productoSeleccionado,
        existe = this.facturacion.productosAgregados.find(function (el) {
          return el.producto == productoSeleccionado.producto;
        });

      if (!existe) {
        this.facturacion.productosAgregados.push({
          producto: productoSeleccionado.producto,
          descripcion: productoSeleccionado.descripcion,
          precio: productoSeleccionado.precio,
          cantidad: productoSeleccionado.cantidad
        });
      } else {
        var lineaFactura = this.facturacion.productosAgregados.find(function (el) {
          if (el.producto == productoSeleccionado.producto) {
            return el.cantidad;
          }
        });

        lineaFactura.cantidad = parseInt(lineaFactura.cantidad) +
          parseInt(productoSeleccionado.cantidad);
      }
    },
  }
})

new Vue({
  el: '#app_factura',
  data: {
    facturacion: {
      productoSeleccionado: {
        producto: '',
        cantidad: 1
      },
      productosAgregados: []
    }
  },
  methods: {
    eliminarProducto: function (indice) {
      this.facturacion.productosAgregados.splice(indice, 1);
    }
  },
  computed: {
    totalLineas: function () {
      var total = 0;
      this.facturacion.productosAgregados.forEach(function (el) {
        total += el.cantidad * el.precio;
      });
      return total;
    }
  }
});