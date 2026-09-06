
# Luis Orozco - Resume

A responsive, web-based resume for Luis Guillermo Orozco Lazo, a Software Engineering student. The resume includes professional experience, education, technical skills, projects, certifications, and contact information.

## Features

- Responsive resume layout for desktop and mobile screens
- Structured sections for experience, education, skills, projects, certifications, and languages
- Contact links for email, telephone, GitHub, and Microsoft Learn
- One-click PDF download
- Standardized PDF output in A4 portrait format
- Page-break handling to keep resume entries together
- Easy customization with plain HTML and CSS

## Usage

1. Clone or download this repository.
2. Open `index.html` in a modern web browser.
3. Click **Descargar PDF** to automatically download `LuisOrozco_Resume.pdf`.

The page loads its external libraries from CDNs, so an internet connection is required for the Bootstrap styles, Bootstrap Icons, and PDF export functionality when opening the page directly.

## Project Structure

| File | Purpose |
| --- | --- |
| `index.html` | Resume content and external library references |
| `style.css` | Responsive layout, colors, typography, and print/export styles |
| `pdf-export.js` | One-click A4 PDF generation and download behavior |
| `codeswing.json` | CodeSwing workspace configuration |

## Customization

- Edit the text and links in `index.html`.
- Update colors, spacing, typography, and responsive behavior in `style.css`.
- Change the PDF filename, margins, scale, or page-break selectors in `pdf-export.js`.

No build step or package installation is required. A local web server can be used for development, but opening `index.html` directly is also supported.

## External Libraries

- [Bootstrap 5](https://getbootstrap.com/) for layout utilities
- [Bootstrap Icons](https://icons.getbootstrap.com/) for interface icons
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) for direct A4 PDF generation

## License

This project is for personal and educational use.

