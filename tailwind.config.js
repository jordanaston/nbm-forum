/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      backgroundColor: {
        ForumPurple: '#6537FF',
        ForumLightGray: '#E8E8E8',
        ForumCharcoal: '#383939',
      },
      textColor: {
        ForumCharcoal: '#383939',
        ForumPurple: '#6537FF',
      },
      borderColor: {
        ForumPurple: '#6537FF',
        ForumLightGray: '#E8E8E8',
        ForumCharcoal: '#383939',
        ForumBlack: '#010214',
      },
      fontFamily: {
        'lexend-thin': ['Lexend-Thin', 'default'],
        'lexend-extralight': ['Lexend-ExtraLight', 'default'],
        'lexend-light': ['Lexend-Light', 'default'],
        'lexend-regular': ['Lexend-Regular', 'default'],
        'lexend-medium': ['Lexend-Medium', 'default'],
        'lexend-semibold': ['Lexend-SemiBold', 'default'],
        'lexend-bold': ['Lexend-Bold', 'default'],
        'lexend-extrabold': ['Lexend-ExtraBold', 'default'],
        'lexend-black': ['Lexend-Black', 'default'],

        'syne-regular': ['Syne-Regular', 'default'],
        'syne-medium': ['Syne-Medium', 'default'],
        'syne-semibold': ['Syne-SemiBold', 'default'],
        'syne-extrabold': ['Syne-ExtraBold', 'default'],
        'syne-bold': ['Syne-Bold', 'default'],
      },
    },
  },
  plugins: [],
};

