/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
      },
      colors: {
        fondo: '#15151b',
        encabezado: '#0f0f14',
        seccion: '#1d1d24',
        tarjeta: '#26262f',
        etiqueta: '#292932',
        borde: '#393943',
        morado: '#b99cff',
        moradoOscuro: '#62458e',
      }
    },
  },
  plugins: [],
}