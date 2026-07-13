module.exports = {
  stylesheet: "./style.css",
  pdf_options: {
    format: "A4",
    margin: {
      top: "2.5cm",
      bottom: "3cm",
      left: "2.5cm",
      right: "2.5cm",
    },
    displayHeaderFooter: true,
    headerTemplate: "<span></span>",
    footerTemplate:
      "<div style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 10pt; text-align: center; width: 100%;\">Seite <span class=\"pageNumber\"></span> von <span class=\"totalPages\"></span></div>",
  },
};
