# Resume PDF

The canonical resume content is rendered by `src/components/resume/ResumeDocument.tsx` from the central profile, skills and project data.

1. Start the production or development server at `http://localhost:3000`.
2. Run `npm run resume:pdf`.
3. The script prints `/resume/print` with headless Chrome to `public/resume/pushpak-vootla-resume.pdf`.
4. Verify the PDF page count, selectable text and rendered page images before publishing.

Set `RESUME_PRINT_URL` when the application uses a different local origin. Set `CHROME_PATH` when Chrome is installed elsewhere.
