export type OptionalUrl = string | null;

export interface SiteConfig {
  siteName: string;
  siteTitle: string;
  siteDescription: string;
  siteUrl: OptionalUrl;
  locale: "en_IN";
  author: string;
  professionalTitle: string;
  email: string;
  location: string;
  linkedinUrl: OptionalUrl;
  githubUrl: OptionalUrl;
  resumeFile: OptionalUrl;
  profileImage: OptionalUrl;
  socialImage: OptionalUrl;
}

export interface NavigationItem {
  label: string;
  href: OptionalUrl;
}

export interface SocialLink {
  label: "GitHub" | "LinkedIn";
  href: OptionalUrl;
}

export interface Profile {
  name: string;
  professionalTitle: string;
  location: string;
  shortLocation: string;
  email: string;
  linkedinUrl: OptionalUrl;
  githubUrl: OptionalUrl;
  portfolioUrl: OptionalUrl;
  resumeFile: OptionalUrl;
  profileImage: OptionalUrl;
  brandLabel: string;
  heroLabel: string;
  headline: string;
  introduction: string;
  supportingIntroduction: string;
  availability: string;
  about: string[];
  socialLinks: SocialLink[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
  certifications: Certification[];
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  context?: string;
  featured?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
  displayOrder: number;
}

export interface ExperienceEntry {
  organisation: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  dateLabel: string;
  employmentType: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  current: boolean;
}

export interface EducationEntry {
  institution: string;
  qualification: string;
  field: string;
  startDate: string;
  endDate: string;
  dateLabel: string;
  location?: string;
  note?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  credentialUrl: OptionalUrl;
  credentialId: string | null;
  status: "Completed";
}

export interface TechnologyGroup {
  label: string;
  technologies: string[];
}

export type ProjectPlatform =
  | "Microsoft Fabric"
  | "Azure Data Factory"
  | "Azure Databricks";

export type ProjectTechnology = string;
export type ProblemType =
  | "Business problem"
  | "Engineering problem"
  | "Learning implementation";
export type ProjectMediaType =
  | "architecture"
  | "screenshot"
  | "flow"
  | "sequence"
  | "pipeline"
  | "notebook"
  | "data-output"
  | "configuration"
  | "other";

export interface ProjectMedia {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  type: ProjectMediaType;
  width: number;
  height: number;
  featured?: boolean;
}

export interface ArchitectureLayer {
  name: string;
  description: string;
  order: number;
  technologies?: ProjectTechnology[];
}

export interface DataFlowStep {
  title: string;
  description: string;
  technologies?: ProjectTechnology[];
  input?: string;
  output?: string;
  decisionOutcome?: string;
  operationalPurpose?: string;
}

export interface ImplementationGroup {
  title: string;
  explanation: string;
  details?: string[];
  reference?: string;
}

export interface MetadataResponsibility {
  title: string;
  description: string;
  items?: string[];
}

export interface ValidationRule {
  name: string;
  purpose: string;
  implementation: string;
  failureHandling: string;
}

export interface SecurityControl {
  name: string;
  purpose: string;
  behaviour: string;
  clarification?: string;
}

export interface MonitoringControl {
  name: string;
  purpose: string;
  behaviour: string;
}

export interface RecoveryConsideration {
  title: string;
  description: string;
}

export interface DesignDecision {
  decision: string;
  reason: string;
  alternative?: string;
  tradeOff?: string;
}

export interface ProjectChallenge {
  challenge: string;
  importance: string;
  approach: string;
  limitation?: string;
}

export interface CaseStudyTechnologyGroup {
  label: string;
  technologies: ProjectTechnology[];
}

export interface CaseStudyOverviewItem {
  label: string;
  value: string;
}

export type ImplementationStatusLabel =
  | "Completed"
  | "Implemented"
  | "Integrated"
  | "Validated"
  | "Guarded Dry Run"
  | "Potential Extension";

export interface CaseStudyStatusItem {
  label: string;
  status: ImplementationStatusLabel;
  description: string;
}

export interface CaseStudyAdditionalSection {
  id: string;
  title: string;
  description?: string;
  status?: ImplementationStatusLabel;
  items?: string[];
  groups?: MetadataResponsibility[];
  sequence?: string[];
  clarification?: string;
}

export interface ProjectSeo {
  title?: string;
  description: string;
  openGraphTitle: string;
  openGraphDescription: string;
}

export interface CaseStudy {
  documentationComplete: boolean;
  heroPlatformLabel?: string;
  heroTechnologies?: ProjectTechnology[];
  heroSummary?: string;
  supportingStatement?: string;
  mediaPlaceholder?: string;
  overviewItems?: CaseStudyOverviewItem[];
  implementationStatus?: CaseStudyStatusItem[];
  projectType: string;
  dataSources: string[];
  processingApproach: string;
  targets: string[];
  engineeringFocus: string[];
  problemType: ProblemType;
  problemStatement: string;
  problemPoints?: string[];
  constraints?: string[];
  architectureSummary?: string;
  architectureLayers?: ArchitectureLayer[];
  keyArchitecturalPrinciple?: string;
  dataFlow?: DataFlowStep[];
  dataFlowTitle?: string;
  implementationGroups?: ImplementationGroup[];
  implementationTitle?: string;
  additionalSections?: CaseStudyAdditionalSection[];
  metadataSummary?: string;
  metadataResponsibilities?: MetadataResponsibility[];
  metadataClarification?: string;
  validationRules?: ValidationRule[];
  securityControls?: SecurityControl[];
  securitySectionTitle?: string;
  monitoringControls?: MonitoringControl[];
  recoveryConsiderations?: RecoveryConsideration[];
  recoveryTitle?: string;
  recoveryClarification?: string;
  designDecisions?: DesignDecision[];
  challenges?: ProjectChallenge[];
  challengesTitle?: string;
  outcomeSummary?: string;
  demonstratedValue?: string[];
  lessonsLearned?: string[];
  futureImprovements?: string[];
  futureImprovementsTitle?: string;
  futureImprovementsLabel?: ImplementationStatusLabel;
  technologyGroups?: CaseStudyTechnologyGroup[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  platform: ProjectPlatform;
  platforms?: ProjectPlatform[];
  category: string;
  summary: string;
  businessProblem: string;
  technologies: ProjectTechnology[];
  engineeringPatterns: string[];
  highlights: string[];
  outcome: string;
  featured: boolean;
  status?: "Completed";
  githubUrl?: OptionalUrl;
  caseStudyAvailable: boolean;
  architectureImage?: ProjectMedia;
  screenshots?: ProjectMedia[];
  media?: ProjectMedia[];
  caseStudy?: CaseStudy;
  seo?: ProjectSeo;
}

export interface ContentCard {
  title: string;
  description: string;
  items?: string[];
}

export interface WorkflowStage {
  title: string;
  description: string;
}

export interface PipelineStage {
  title: string;
  technologies: string;
}
