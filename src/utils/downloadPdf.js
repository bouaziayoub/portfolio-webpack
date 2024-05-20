import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const downloadSectionAsPDF = (sectionSelector, fileName) => {
  const section = document.querySelector(sectionSelector);
  if (!section) {
    console.error('No se pudo encontrar la sección especificada.');
    return;
  }

  html2canvas(section).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210; // ancho en mm para A4
    const pageHeight = 297; // alto en mm para A4
    const imgHeight = canvas.height * imgWidth / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(fileName);
  });
};
