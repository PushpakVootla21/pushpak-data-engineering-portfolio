export function getMailtoUrl(email: string, subject: string) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
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
