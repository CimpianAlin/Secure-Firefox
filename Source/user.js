// https://github.com/delight-im/Secure-Firefox

user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.http.referer.XOriginPolicy", 1);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("general.buildID.override", "20100101");
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("beacon.enabled", false);
user_pref("app.update.auto", true);
user_pref("security.fileuri.strict_origin_policy", true);
user_pref("network.jar.open-unsafe-types", false);
user_pref("privacy.donottrackheader.enabled", false);
user_pref("browser.safebrowsing.enabled", true);
user_pref("browser.safebrowsing.malware.enabled", true);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("network.stricttransportsecurity.preloadlist", true);
user_pref("dom.enable_performance", false);
user_pref("device.sensors.enabled", false);
user_pref("camera.control.face_detection.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("browser.send_pings", false);
user_pref("dom.battery.enabled", false);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("network.prefetch-next", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.formfill.enable", false);
user_pref("browser.newtabpage.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("browser.download.useDownloadDir", false);
user_pref("devtools.webide.enabled", false);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("network.IDN_show_punycode", true);