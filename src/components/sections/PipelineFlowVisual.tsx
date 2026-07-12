import { pipelineStages } from "@/data/content";

export function PipelineFlowVisual() {
  return (
    <div className="pipeline-visual" aria-label="Data engineering workflow from source systems to analytics">
      <h2 className="pipeline-label">Reliable data flow</h2>
      <div className="pipeline-stages">
        {pipelineStages.map((stage, index) => (
          <div className="pipeline-stage-wrap" key={stage.title}>
            <div className="pipeline-stage">
              <span className="stage-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{stage.title}</h3>
              <p>{stage.technologies}</p>
            </div>
            {index < pipelineStages.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
