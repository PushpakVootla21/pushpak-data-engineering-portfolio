import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { isValidExternalUrl, isValidResumePath } from "@/lib/links";
import { profile } from "@/lib/site";

function assertUnique(values: string[], label: string) {
  const duplicates = values.filter((value, index) => values.indexOf(value) !== index);
  if (duplicates.length) throw new Error(`Duplicate ${label}: ${[...new Set(duplicates)].join(", ")}`);
}

export function validatePortfolioContent() {
  assertUnique(projects.map((project) => project.id), "project IDs");
  assertUnique(projects.map((project) => project.slug), "project slugs");
  assertUnique(profile.certifications.map((certification) => certification.id), "certification IDs");
  assertUnique(skillGroups.flatMap((group) => group.skills.map((skill) => skill.id)), "skill IDs");

  if (projects.some((project) => !project.title.trim() || (project.caseStudyAvailable && !project.caseStudy))) throw new Error("Every published project requires a title and case-study content.");
  if (profile.certifications.some((certification) => !certification.name.trim())) throw new Error("Every certification requires a name.");
  if (skillGroups.some((group) => !group.title.trim() || group.skills.length === 0)) throw new Error("Every skill group requires a title and at least one skill.");

  const externalUrls = [profile.linkedinUrl, profile.portfolioUrl, ...profile.certifications.map((certification) => certification.credentialUrl)].filter((url): url is string => Boolean(url));
  if (externalUrls.some((url) => !isValidExternalUrl(url))) throw new Error("Configured external URLs must use HTTPS.");
  if (profile.resumeFile && !isValidResumePath(profile.resumeFile)) throw new Error("The configured resume must be a PDF under /resume/.");
}
