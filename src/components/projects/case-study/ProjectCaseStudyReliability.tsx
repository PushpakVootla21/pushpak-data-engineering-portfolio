import { Tag } from "@/components/ui/Tag";
import { CaseStudySection } from "@/components/projects/case-study/CaseStudySection";
import type { CaseStudy } from "@/types/content";

export function ValidationRules({ details }: { details: CaseStudy }) {
  if (!details.validationRules?.length) return null;
  return <CaseStudySection id="data-quality" title="Data Quality and Validation"><div className="case-study-card-grid">{details.validationRules.map((rule) => <article className="detail-card" key={rule.name}><h3>{rule.name}</h3><dl className="control-details"><div><dt>Purpose</dt><dd>{rule.purpose}</dd></div><div><dt>Implementation</dt><dd>{rule.implementation}</dd></div><div><dt>Failure handling</dt><dd>{rule.failureHandling}</dd></div></dl></article>)}</div></CaseStudySection>;
}

export function SecurityControls({ details }: { details: CaseStudy }) {
  if (!details.securityControls?.length) return null;
  return <CaseStudySection id="security" title={details.securitySectionTitle ?? "Security and Access"}><div className="case-study-card-grid">{details.securityControls.map((control) => <article className="detail-card" key={control.name}><h3>{control.name}</h3><p>{control.purpose}</p><p className="control-behaviour"><strong>Behaviour:</strong> {control.behaviour}</p>{control.clarification && <p className="control-clarification">{control.clarification}</p>}</article>)}</div></CaseStudySection>;
}

export function MonitoringControls({ details }: { details: CaseStudy }) {
  if (!details.monitoringControls?.length) return null;
  return <CaseStudySection id="monitoring" title="Monitoring and Failure Handling"><div className="case-study-card-grid">{details.monitoringControls.map((control) => <article className="detail-card" key={control.name}><h3>{control.name}</h3><p>{control.purpose}</p><p className="control-behaviour"><strong>Behaviour:</strong> {control.behaviour}</p></article>)}</div></CaseStudySection>;
}

export function RecoveryConsiderations({ details }: { details: CaseStudy }) {
  if (!details.recoveryConsiderations?.length) return null;
  return <CaseStudySection id="recovery" title={details.recoveryTitle ?? "Rerun and Recovery Considerations"}><div className="case-study-card-grid">{details.recoveryConsiderations.map((item) => <article className="detail-card" key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>{details.recoveryClarification && <p className="recovery-clarification">{details.recoveryClarification}</p>}</CaseStudySection>;
}

export function DesignDecisions({ details }: { details: CaseStudy }) {
  if (!details.designDecisions?.length) return null;
  return <CaseStudySection id="decisions" title="Key Design Decisions"><ol className="decision-list">{details.designDecisions.map((item, index) => <li key={item.decision}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.decision}</h3><p>{item.reason}</p>{item.alternative && <p><strong>Alternative considered:</strong> {item.alternative}</p>}{item.tradeOff && <p><strong>Trade-off:</strong> {item.tradeOff}</p>}</div></li>)}</ol></CaseStudySection>;
}

export function ProjectChallenges({ details }: { details: CaseStudy }) {
  if (!details.challenges?.length) return null;
  return <CaseStudySection id="challenges" title={details.challengesTitle ?? "Challenges and Implementation Considerations"}><div className="case-study-card-grid">{details.challenges.map((item) => <article className="detail-card" key={item.challenge}><h3>{item.challenge}</h3><p>{item.importance}</p><p><strong>Approach:</strong> {item.approach}</p>{item.limitation && <p><strong>Remaining limitation:</strong> {item.limitation}</p>}</article>)}</div></CaseStudySection>;
}

export function ProjectOutcome({ details }: { details: CaseStudy }) {
  if (!details.outcomeSummary) return null;
  return <CaseStudySection id="outcome" title="Outcome and Demonstrated Value" className="case-study-outcome"><p className="outcome-summary">{details.outcomeSummary}</p>{details.demonstratedValue?.length ? <ul className="case-study-list outcome-list">{details.demonstratedValue.map((value) => <li key={value}>{value}</li>)}</ul> : null}{details.lessonsLearned?.length ? <div className="outcome-followup"><h3>Lessons Learned</h3><ul className="case-study-list">{details.lessonsLearned.map((lesson) => <li key={lesson}>{lesson}</li>)}</ul></div> : null}{details.futureImprovements?.length ? <div className="outcome-followup future-improvements"><p className="future-label">{details.futureImprovementsLabel ?? "Potential Extension"}</p><h3>{details.futureImprovementsTitle ?? "Future Improvements"}</h3><ul className="case-study-list">{details.futureImprovements.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}</CaseStudySection>;
}

export function TechnologyGroups({ details }: { details: CaseStudy }) {
  if (!details.technologyGroups?.length) return null;
  return <CaseStudySection id="technology-stack" title="Technology Stack"><div className="technology-group-grid">{details.technologyGroups.map((group) => <article key={group.label}><h3>{group.label}</h3><div className="tag-list">{group.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}</div></article>)}</div></CaseStudySection>;
}
