/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "C:/Users/user/Documents/htmltrain/**/*.html",
    "C:/Users/user/Documents/htmltrain/**/*.js"
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.625rem', // Teks ekstra kecil
        'xxl': '2.75rem',  // Teks antara 2xl dan 3xl
        'huge': '5rem',    // Teks sangat besar
      },
      maxHeight: {
        '900': '900px', // Contoh kustom max-height
        '95vh': '95vh', // Menggunakan unit "vh"
      },
      scale: {
        '20': '.2', // Contoh kustom max-height
        '30': '.3', // Menggunakan unit "vh"
      },
      height: {
        '900': '900px', // Contoh kustom max-height
        '700': '700px', // Contoh kustom max-height
        '500': '500px', // Contoh kustom max-height
        '300': '300px', // Contoh kustom max-height
        '95vh': '95vh', // Menggunakan unit "vh"
      },
      screens: {
        'xxs': {'max':'360px'}, // Tambahkan breakpoint untuk ukuran layar ekstra kecil
        'xs': {'max':'460px'}, // Tambahkan breakpoint untuk ukuran layar ekstra kecil
        'sm': '640px', // Default breakpoint untuk ukuran layar kecil
        'md': '768px', // Breakpoint untuk ukuran layar menengah
        'lg': '1024px', // Breakpoint untuk ukuran layar besar
        'xl': '1280px', // Breakpoint untuk layar ekstra besar
        '2xl': '1536px', // Untuk ukuran layar lebih besar
      },
    },
  },
  plugins: [],
};
