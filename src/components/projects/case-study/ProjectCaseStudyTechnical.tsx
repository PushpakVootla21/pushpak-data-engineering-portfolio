import { Tag } from "@/components/ui/Tag";
import { CaseStudySection } from "@/components/projects/case-study/CaseStudySection";
import type { CaseStudy, CaseStudyAdditionalSection } from "@/types/content";

export function ProblemSection({ details }: { details: CaseStudy }) {
  return (
    <CaseStudySection id="problem" title="Problem to Solve">
      <div className="problem-panel">
        <p className="problem-type">{details.problemType}</p>
        <p>{details.problemStatement}</p>
        {details.problemPoints?.length ? <ul className="case-study-list">{details.problemPoints.map((point) => <li key={point}>{point}</li>)}</ul> : null}
        {details.constraints?.length ? <div className="constraints"><h3>Constraints</h3><ul className="case-study-list">{details.constraints.map((constraint) => <li key={constraint}>{constraint}</li>)}</ul></div> : null}
      </div>
    </CaseStudySection>
  );
}

export function ArchitectureWorkflow({ details }: { details: CaseStudy }) {
  if (!details.architectureSummary || !details.architectureLayers?.length) return null;
  const layers = [...details.architectureLayers].sort((a, b) => a.order - b.order);
  return (
    <CaseStudySection id="architecture" title="Architecture Overview" description={details.architectureSummary}>
      <ol className="architecture-workflow">
        {layers.map((layer) => (
          <li key={`${layer.order}-${layer.name}`}>
            <span className="workflow-number">{String(layer.order).padStart(2, "0")}</span>
            <h3>{layer.name}</h3>
            <p>{layer.description}</p>
            {layer.technologies?.length ? <div className="tag-list">{layer.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}</div> : null}
          </li>
        ))}
      </ol>
      {details.keyArchitecturalPrinciple && <p className="architectural-principle"><strong>Key principle:</strong> {details.keyArchitecturalPrinciple}</p>}
    </CaseStudySection>
  );
}

export function DataFlowSteps({ details }: { details: CaseStudy }) {
  if (!details.dataFlow?.length) return null;
  return (
    <CaseStudySection id="data-flow" title={details.dataFlowTitle ?? "End-to-End Data Flow"}>
      <ol className="data-flow-steps">
        {details.dataFlow.map((step, index) => (
          <li key={`${index}-${step.title}`}>
            <span className="flow-step-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {step.technologies?.length ? <div className="tag-list">{step.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}</div> : null}
              {(step.input || step.output || step.decisionOutcome || step.operationalPurpose) && (
                <dl className="step-details">
                  {step.input && <div><dt>Input</dt><dd>{step.input}</dd></div>}
                  {step.output && <div><dt>Output</dt><dd>{step.output}</dd></div>}
                  {step.decisionOutcome && <div><dt>Decision</dt><dd>{step.decisionOutcome}</dd></div>}
                  {step.operationalPurpose && <div><dt>Operational purpose</dt><dd>{step.operationalPurpose}</dd></div>}
                </dl>
              )}
            </div>
          </li>
        ))}
      </ol>
    </CaseStudySection>
  );
}

export function ImplementationGroups({ details }: { details: CaseStudy }) {
  if (!details.implementationGroups?.length) return null;
  return (
    <CaseStudySection id="implementation" title={details.implementationTitle ?? "Technical Implementation"}>
      <div className="case-study-card-grid">
        {details.implementationGroups.map((group) => (
          <article className="detail-card" key={group.title}>
            <h3>{group.title}</h3><p>{group.explanation}</p>
            {group.details?.length ? <ul className="case-study-list">{group.details.map((detail) => <li key={detail}>{detail}</li>)}</ul> : null}
            {group.reference && <p className="configuration-reference"><strong>Reference:</strong> {group.reference}</p>}
          </article>
        ))}
      </div>
    </CaseStudySection>
  );
}

export function ImplementationStatus({ details }: { details: CaseStudy }) {
  if (!details.implementationStatus?.length) return null;
  return (
    <CaseStudySection id="implementation-status" title="Implementation Status">
      <div className="status-grid">
        {details.implementationStatus.map((item) => (
          <article className="status-card" key={item.label}>
            <p className="status-label">{item.status}</p>
            <h3>{item.label}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </CaseStudySection>
  );
}

export function AdditionalCaseStudySections({ details, sections = details.additionalSections }: { details: CaseStudy; sections?: CaseStudyAdditionalSection[] }) {
  if (!sections?.length) return null;
  return sections.map((section) => (
    <CaseStudySection key={section.id} id={section.id} title={section.title} description={section.description}>
      {section.status && <p className="status-label section-status">{section.status}</p>}
      {section.sequence?.length ? (
        <ol className="control-sequence" aria-label={`${section.title} sequence`}>
          {section.sequence.map((step) => <li key={step}>{step}</li>)}
        </ol>
      ) : null}
      {section.items?.length ? <ul className="case-study-list additional-section-list">{section.items.map((item) => <li key={item}>{item}</li>)}</ul> : null}
      {section.groups?.length ? (
        <div className="case-study-card-grid additional-groups">
          {section.groups.map((group) => (
            <article className="detail-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              {group.items?.length ? <ul className="case-study-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul> : null}
            </article>
          ))}
        </div>
      ) : null}
      {section.clarification && <p className="recovery-clarification">{section.clarification}</p>}
    </CaseStudySection>
  ));
}

export function MetadataDesign({ details }: { details: CaseStudy }) {
  if (!details.metadataSummary || !details.metadataResponsibilities?.length) return null;
  return (
    <CaseStudySection id="metadata-design" title="Metadata Design" description={details.metadataSummary}>
      <div className="case-study-card-grid">
        {details.metadataResponsibilities.map((group) => (
          <article className="detail-card" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            {group.items?.length ? <ul className="case-study-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul> : null}
          </article>
        ))}
      </div>
      {details.metadataClarification && <p className="recovery-clarification">{details.metadataClarification}</p>}
    </CaseStudySection>
  );
}
