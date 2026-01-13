module.exports = {
  stylesheet: './style.css',
  pdf_options: {
    format: 'A4',
    margin: {
      top: '2.5cm',
      bottom: '2.5cm',
      left: '2.5cm',
      right: '2.5cm'
    },
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: '<div style="font-size: 10px; text-align: center; width: 100%; margin: 0 auto;">Seite <span class="pageNumber"></span> von <span class="totalPages"></span></div>'
  }
};
