module.exports = {
  theme: {
    listStyleType: {
      disc: 'disc'
      // decimal: 'decimal',
      // square: 'square',
      // roman: 'upper-roman',
    },
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: 'hsl(207, 73%, 57%)',
          darker: 'hsl(207, 73%, 44%)'
        }
			},
			container: {
				center: true,
				padding: '2rem'
			}
    }
  },
  variants: {},
  plugins: []
};
