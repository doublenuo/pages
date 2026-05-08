function isWechat() {

    return /MicroMessenger/i.test(
        navigator.userAgent
    );

}