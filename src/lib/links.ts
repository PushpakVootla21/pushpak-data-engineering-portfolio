export function getGmailComposeUrl(email: string, subject: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: email,
    su: subject,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function isValidExternalUrl(value: string | null): value is string {
  if (!value) return false;
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}

export function isValidResumePath(value: string | null): value is string {
  return Boolean(value?.startsWith("/resume/") && value.toLowerCase().endsWith(".pdf"));
}
