import { Environment } from "./enums/environment.enum";

export const environment = {
  buildType: Environment.Development,
  entityBaseUrl: `${window.location.origin}/RuleServer/services/entity/assets/`,
  adviceExcelGenBaseUrl: `${window.location.origin}/RuleServer/services/AdviceExcelGen/assets/`,
  basePathURL: `${window.location.origin}`,
  host: `${window.location.origin}/RuleServer/`,
  EngineAdviceExcelGen: `AdviceExcelGen`,
  EnginePaymentUploader: `payment_uploader`,
  EngineEntity: `entity`,
  workFlowBaseUrl: `${window.location.origin}/RuleServer/workflows/`,
};

