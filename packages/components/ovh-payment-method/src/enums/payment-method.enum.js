export const AVAILABLE_PAYMENT_METHOD_TYPE_ENUM = {
  BANK_ACCOUNT: 'BANK_ACCOUNT',
  CREDIT_CARD: 'CREDIT_CARD',
  DEFERRED_PAYMENT_ACCOUNT: 'DEFERRED_PAYMENT_ACCOUNT',
  PAYPAL: 'PAYPAL',
  SEPA_DIRECT_DEBIT: 'SEPA_DIRECT_DEBIT',
};

export const AVAILABLE_PAYMENT_METHOD_INTEGRATION_ENUM = {
  COMPONENT: 'COMPONENT',
  NONE: 'NONE',
  REDIRECT: 'REDIRECT',
  IFRAME_VANTIV: 'IFRAME_VANTIV',
  IN_CONTEXT: 'IN_CONTEXT',
  POST_FORM: 'POST_FORM',
};

export const PAYMENT_METHOD_STATUS_ENUM = {
  CANCELED: 'CANCELED',
  CANCELING: 'CANCELING',
  CREATED: 'CREATED',
  ERROR: 'ERROR',
  EXPIRED: 'EXPIRED',
  FAILED: 'FAILED',
  CREATING: 'CREATING',
  MAINTENANCE: 'MAINTENANCE',
  PAUSED: 'PAUSED',
  TOO_MANY_FAILURES: 'TOO_MANY_FAILURES',
  VALID: 'VALID',
};

export default {
  AVAILABLE_PAYMENT_METHOD_TYPE_ENUM,
  AVAILABLE_PAYMENT_METHOD_INTEGRATION_ENUM,
  PAYMENT_METHOD_STATUS_ENUM,
};
