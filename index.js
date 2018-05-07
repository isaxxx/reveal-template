let targetDirPath = 'src/' + process.argv[2] + '/',
	bs = require('browser-sync').create('reveal-template');

bs.init({
    server: true,
	startPath: targetDirPath,
});

bs.watch(targetDirPath + '*.html').on('change', bs.reload);
