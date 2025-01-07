import { Environment } from "./enums/environment.enum";

export const environment = {
  buildType: Environment.Production,
  entityBaseUrl: `${window.location.origin}/RuleServer/services/entity/assets/`,
  adviceExcelGenBaseUrl: `${window.location.origin}/RuleServer/services/AdviceExcelGen/assets/`,
  basePathURL: `${window.location.origin}`,
  host: `${window.location.origin}/RuleServer/`,
  EngineAdviceExcelGen: `AdviceExcelGen`,
  EngineEntity: `entity`,
  EnginePaymentUploader: `payment_uploader`,
  workFlowBaseUrl: `${window.location.origin}/RuleServer/workflows/`,
};
