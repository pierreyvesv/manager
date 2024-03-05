export default class UserAccountUsersDisableCtrl {
  /* @ngInject */
  constructor($scope, UseraccountUsersService, Alerter, $translate) {
    this.$scope = $scope;
    this.usersService = UseraccountUsersService;
    this.alerter = Alerter;
    this.$translate = $translate;
    this.user = $scope.currentActionData;
    this.loader = false;
  }

  $onInit() {
    this.$scope.disableUser = this.disableUser.bind(this);
  }

  disableUser() {
    this.loader = true;

    this.usersService
      .disableUser(this.user)
      .then(() => {
        this.alerter.success(
          this.$translate.instant('user_users_disable_success_message', {
            login: this.user.login,
          }),
          'userUsers',
        );
      })
      .catch((err) => {
        if (err.status === 403) {
          return this.alerter.warning(
            `${this.$translate.instant(
              'user_users_disable_error_message',
            )} ${this.$translate.instant('user_need_rights_message')} ${
              err.data.details.unauthorizedActionsByIAM
            }`,
            'userUsers',
          );
        }
        return this.alerter.error(
          `${this.$translate.instant('user_users_disable_error_message')} ${
            err.data.message
          }`,
          'userUsers',
        );
      })
      .finally(() => {
        this.loader = false;
        this.$scope.resetAction();
      });
  }
}
