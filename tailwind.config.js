// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // --- PALET WARNA BARU (LIGHT THEME) ---
      // Disesuaikan agar mirip dengan gaya Radison.
      colors: {
        'background': '#FFFFFF', // Latar belakang utama putih bersih
        'primary': '#0A0A0A',   // Warna utama untuk tombol dan teks tebal (hitam pekat)
        'secondary': '#525252', // Warna teks sekunder (abu-abu)
        'border': '#E5E5E5',     // Warna border yang sangat lembut
        'accent': '#3B82F6',    // Warna aksen (biru) untuk ikon atau link jika dibutuhkan
      },
      fontFamily: {
        // Anda bisa sesuaikan jika Framer template menggunakan font spesifik
        sans: ['Inter', 'sans-serif'],
      },
      
      // --- ANIMASI YANG SUDAH DIPERBAIKI DAN DILENGKAPI ---
      animation: {
        // Animasi untuk logo ticker (lebih cepat)
        ticker: 'ticker 40s linear infinite',
        // Animasi untuk testimonial ticker (lebih lambat dan elegan)
        'testimonial-ticker': 'ticker 90s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
