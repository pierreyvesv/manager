import controller from './private-order.controller';
import template from './private-order.html';

export default {
  bindings: {
    atTrack: '<',
    goBack: '<',
    hasDefaultPaymentMethod: '<',
    serverName: '<',
    serviceId: '<',
    specifications: '<',
    trackingPrefix: '<',
    user: '<',
    onError: '&?',
    onSuccess: '&?',
  },
  controller,
  template,
};
