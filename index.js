const bs = require('browser-sync').create('reveal-template');
const targetDirPath = 'src/' + process.argv[2] + '/';

bs.init({
  server: true,
  startPath: targetDirPath
});

bs.watch(targetDirPath + '*.html').on('change', bs.reload);
