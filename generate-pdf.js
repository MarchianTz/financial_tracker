const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Load the HTML file
  const htmlPath = `file://${path.resolve('docs/Financial_Tracker_Report.html')}`;
  await page.goto(htmlPath, { waitUntil: 'networkidle2' });

  // Generate PDF
  await page.pdf({
    path: 'docs/Financial_Tracker_Report.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' }
  });

  console.log('✓ PDF generated: docs/Financial_Tracker_Report.pdf');
  await browser.close();
})();
