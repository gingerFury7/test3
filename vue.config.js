module.exports = {
  pages: {
    'login': {
      entry: './src/main.ts',
      template: 'public/index.html',
      chunks: [ 'chunk-vendors', 'chunk-common', 'login' ],
      subpage: './src/subpage/main.ts',
      title: 'Вход'
    },
    'main_page': {
      entry: './src/Main_page/main_page.ts',
      template: 'public/index.html',
      chunks: [ 'chunk-vendors', 'chunk-common', 'main_page' ],
      subpage: './src/subpage/main_page.ts',
      title: 'Основная страница'
    }
  }
}
