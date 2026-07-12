import { access, mkdir, stat } from "node:fs/promises";
import { spawn } from "node:child_process";
import { resolve } from "node:path";

const chrome = process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const output = resolve("public/resume/pushpak-vootla-resume.pdf");
const url = process.env.RESUME_PRINT_URL ?? "http://localhost:3000/resume/print";

await mkdir(resolve("public/resume"), { recursive: true });
await access(chrome).catch(() => { throw new Error(`Chrome executable is unavailable at ${chrome}. Set CHROME_PATH to a valid executable.`); });
const response = await fetch(url).catch((error) => { throw new Error(`Resume print route is unavailable at ${url}: ${error.message}`); });
if (!response.ok) throw new Error(`Resume print route returned HTTP ${response.status} at ${url}.`);

const child = spawn(chrome, ["--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--virtual-time-budget=2000", `--print-to-pdf=${output}`, url], { stdio: "inherit" });
const exitCode = await new Promise((resolveExit, reject) => { child.on("error", reject); child.on("exit", resolveExit); });
if (exitCode !== 0) process.exit(exitCode ?? 1);
const generatedPdf = await stat(output);
if (generatedPdf.size === 0) throw new Error(`Resume generation created an empty PDF at ${output}.`);
console.log(`Generated ${output}`);
