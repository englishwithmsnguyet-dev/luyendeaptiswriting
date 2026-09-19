import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const assetsDir = path.join(distDir, 'assets');

const files = fs.readdirSync(assetsDir);
// The latest bundle is the largest js file
const jsFiles = files.filter(f => f.startsWith('index-') && f.endsWith('.js'));
jsFiles.sort((a, b) => fs.statSync(path.join(assetsDir, b)).size - fs.statSync(path.join(assetsDir, a)).size);
const jsFile = jsFiles[0];

const cssFile = files.find(f => f.startsWith('index-') && f.endsWith('.css'));

if (!jsFile || !cssFile) {
  console.error('Could not find bundle files in dist/assets');
  process.exit(1);
}

console.log('Using JS:', jsFile, 'and CSS:', cssFile);

const jsContent = fs.readFileSync(path.join(assetsDir, jsFile), 'utf8');
const cssContent = fs.readFileSync(path.join(assetsDir, cssFile), 'utf8');

const html = `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>APTIS WRITING PRACTICE - ENGLISH WITH MISS NGUYET</title>
    <style>
${cssContent}
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script>
${jsContent.replace(/<\/script>/g, '<\\/script>')}
    </script>
  </body>
</html>`;

fs.writeFileSync('CHAY_TRUC_TIEP.html', html, 'utf8');
console.log('Successfully created CHAY_TRUC_TIEP.html! Size:', Math.round(html.length / 1024), 'KB');
