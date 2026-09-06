window.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('download-pdf-btn');
    if (btn) {
        btn.addEventListener('click', function() {
            const resume = document.querySelector('.resume-container');
            const html2pdf = window.html2pdf;
            const downloadControl = btn.closest('.download-control');

            if (!resume || !html2pdf) {
                console.error('No se pudo generar el PDF: falta la libreria de exportacion.');
                return;
            }

            btn.disabled = true;
            btn.setAttribute('aria-busy', 'true');
            if (downloadControl) {
                downloadControl.style.display = 'none';
            }

            const restoreButton = function() {
                if (downloadControl) {
                    downloadControl.style.display = '';
                }
                btn.disabled = false;
                btn.removeAttribute('aria-busy');
            };

            html2pdf()
                .set({
                    margin: [0.25, 0.25, 0.25, 0.25],
                    filename: 'LuisOrozco_Resume.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2, useCORS: true },
                    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
                    pagebreak: {
                        mode: ['css', 'legacy'],
                        avoid: ['.experience-item', '.education-item', '.project-item', '.certification-item']
                    }
                })
                .from(resume)
                .save()
                .then(restoreButton)
                .catch(function(error) {
                    restoreButton();
                    console.error('No se pudo generar el PDF.', error);
                });
        });
    }
});
