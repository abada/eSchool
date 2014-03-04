if (OS_IOS) {
    Alloy.Globals.navgroup = $.navgroup;  
    $.navgroup.open();
} else if (OS_ANDROID) {
    $.loginForm.getView().open();
} else {
    alert(L('unsupportedPlatform', 'Unsupported Platform'));
}
