module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['"Roboto Condensed"', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
        'italic': ['Playfair Display', 'serif'],
      },
      grayscale: {
        'grayscale-0': 'grayscale(0)',
        'grayscale-25': 'grayscale(0.25)',
        'grayscale-50': 'grayscale(0.50)',
        'grayscale-75': 'grayscale(0.75)',
        'grayscale': 'grayscale(1)',
      },
      spacing:{
        sli: '485px',
        67.5: '16.875rem', //270px
        92.5: '23.125rem', //370px
        143.75: '35.9375rem', //575px
      },
      colors: {
        'main': '#3cb477', //nogoon
        'main1': '#2c9d63', //baraan nogoon
        'main3': '#1e4e7f', //tsenher
        'text1': '#1f1f1f', //tod saaral buyu arai baraan ni
        'text2': '#D3D3D3', //budeg saaral
      },
      backgroundColor: theme => ({
        'saaral' : '#F8F8F8',
      }),
      fill: theme => ({
        'gray': theme('colors.gray.400'),
        'green': theme('colors.green.500'),
        'blue': theme('colors.blue.500'),
      }),
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'active', 'group-hover'],
      display: ['hover', 'focus', 'active', 'group-hover'],
      transitionProperty: ['hover', 'focus', 'active', 'group-hover'],
      grayscale: ['hover', 'focus'],
      
    },
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
  
    
    
  },
  plugins: [
    require('tailwind-filter-utilities'),
  ],
}
