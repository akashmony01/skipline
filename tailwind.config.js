/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#5A36CD', dark: '#1C0F46', },
        textColor: { DEFAULT: '#000000', light: '#838383' },
        bgColor: { DEFAULT: '#FBF9FF', dark: '#1C0F46' }
      },
      fontFamily: {
				sans: ['Satoshi', 'sans-serif'],
			},
    },
    container: {
			center: true,
			padding: {
				DEFAULT: "10px",
				sm: "10px",
				md: "20px",
			},
		},
  },
  plugins: [
		function ({ addComponents }) {
			addComponents({
				'.container': {
					maxWidth: '100%',
					'@screen sm': {
						maxWidth: '100%',
					},
					'@screen md': {
						maxWidth: '100%',
					},
					'@screen lg': {
						maxWidth: '100%',
					},
					'@screen xl': {
						maxWidth: '1370px',
					},
				}
			})
		},
	],
}

