import { Environment } from "./enums/environment.enum";

export const environment = {
  buildType: Environment.Development,
  entityBaseUrl: 'http://172.16.10.167:8080/RuleServer/services/entity/assets/',
  adviceExcelGenBaseUrl: 'http://172.16.10.167:8080/RuleServer/services/AdviceExcelGen/assets/',
  basePathURL: 'http://172.16.10.167:8080',
  host: 'http://172.16.10.167:8080/RuleServer/',
  EngineAdviceExcelGen: `AdviceExcelGen`,
  EngineEntity: `entity`,
  EnginePaymentUploader: `payment_uploader`,
  workFlowBaseUrl: `http://172.16.10.167:8080/RuleServer/workflows/`,
};
