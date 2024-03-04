const resp = {};
const obj = JSON.parse(typeof $response !== "undefined" && $response.body || null);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
const list = {
    'avatar': { name: 'pro', id: 'ai_avatar_life_time' },
    'PhotoEnhancer': { name: 'allaccess', id: 'ai_enhancer_1y' },
    'StarLookAlike': { name: 'allaccess', id: 'celebrity_looklike_1y' },
    'NFTPriceEstimation': {name: 'pro', id: 'textoimage_starterkit_lifetime' },
    'Baby%20Generator%20-%20Store': {name: 'allaccess', id: 'apunew_starterkit_1y' },
    'AIWriter': {name: 'pro', id: 'com.MattSutton.AIWriterProYearly' },
    'TutorPal': {name: 'pro', id: 'com.MattSutton.TutorPalYearly' },
    'PaperPal': {name: 'pro', id: 'com.MattSutton.PaperPalProYearly' },
    'Finger%20Flutter': {name: 'pro', id: 'com.FingerFlutter.RemoveAds' },
    'BarcodeScanner': {name: 'pro', id: 'com.MattSutton.BarcodeScannerProLifetime' },
    'TimeBuddy': {name: 'pro', id: 'com.MattSutton.TimeBuddyPlusYearly' },
    'TraceMaster': {name: 'pro', id: 'com.MattSutton.TraceMasterProLifetime' },
    'QRKit': {name: 'pro', id: 'com.MattSutton.QRKitProLifetime' },
    'IconKit': {name: 'pro', id: 'com.mattsutton.iconkitpro' },
    'Watermark': {name: 'pro', id: 'com.mattsutton.watermarkpro' },
    'TipCalc': {name: 'pro', id: 'com.mattsutton.supportTipCalc' },
    'BookPal': {name: 'pro', id: 'com.MattSutton.BookPalProYearly' },
    'AIKeyboard': {name: 'pro', id: 'com.MattSutton.AIKeyboardProYearly' },
    'ArtGenerator': {name: 'pro', id: 'com.MattSutton.FlairLifetime' },
    'LockSwitch': {name: 'pro', id: 'com.MattSutton.LockSwitchProAnnual' },
    'SuperFast': {name: 'pro', id: 'com.MattSutton.SuperFastPremiumMonthly' },
    'GameLog': {name: 'pro', id: 'com.MattSutton.GameLogPremiumLifetime' },
    'Litstick': {name: 'Plus', id: 'com.mangolabs.stickered.premium.yearly' },
    'Fontkey': {name: 'plus', id: 'timl.copy.fontkey.plus.weekly' },
    'Petify': {name: 'Petify Premium', id: 'app.petify.prod.premium.yearly' },
    'Daily%20Stories%20Prod': {name: 'Cosmic Vision Premium', id: 'app.cosmicvision.prod.premium.yearly' },
    'RizzgodProd': {name: 'RizzGod Premium', id: 'app.rizzgod.prod.premium.yearly' },
    'Ristretto%20Prod': {name: 'Ristretto Premium', id: 'fm.ristretto.app.premium.yearly' },
    'Celebify%20Prod': {name: 'premium', id: 'app.avastar.prod.premium.yearly' },
    'BabyLab': {name: 'plus', id: 'com.mangolabs.babylab.plus.annually' },
    'Fontmaker': {name: 'premium', id: 'com.mangolabs.fontmaker.plus.annually' },
    'AutoPaste': {name: 'premium', id: 'com.mangolabs.copypaste.plus.weekly' },
    'Celebs': {name: 'plus', id: 'com.xpcapital.celebs.plus.weekly' },
    'Rose': {name: 'gold', id: 'com.onrose.Vibe.plus.new.yearly' },
    'Mojo': {name: 'pro', id: 'video.mojo.pro.yearly.version.e' },
    'AI%20Text%20Enhancer': {name: 'pro', id: 'enhancer_pro_1y' },
    'WidgetSmith': {name: 'Premium', id: 'PremiumAnnualWidget' },
    'Rapchat': {name: 'Gold', id: 'rc_2999_1Y' },
    'Mindset': {name: 'premium', id: 'com.vanir.mindset.YearlyPayment' },
    'Evia': {name: 'full', id: 'com.mindsethealth.meno.3month' },
    'Finito': {name: 'full', id: 'com.mindsethealth.quit.lifetime' },
    'audiomack-iphone': {name: 'Premium1', id: 'com.audiomack.premium.2023' },
    'oto': {name: 'Oto Premium', id: 'lifetime_access' },
    'Dipsea': {name: 'subscriptions', id: 'com.dipsea.unlimited.lifetime' },
    'blaze': {name: 'premium', id: 'blaze_premium_subscription_tier50_yearly' },
    'Picolo': {name: 'premium', id: 'premium' },
    'Snax': {name: 'premium', id: 'snax_premium_subscription_tier50_yearly' },
    'Baby': {name: 'premium', id: 'com.doleearts.Baby.premium' },
    'CardPointers': {name: 'pro', id: 'cardpointers_lifetime_100' },
    'Done': {name: 'done_premium', id: 'com.tbd.Done.lifetime.v3' },
    'oath': {name: 'oath_premium', id: 'com.oath.subscription.yearly.v3' },
    'Timetable': {name: 'Premium', id: 'com.timetable.subscription.yearly.v3' },
    'Purr': {name: 'Pro', id: 'com.purr.promode' },
    'HabitMinder': {name: 'habitminder_premium', id: 'habitminder.unlimited' },
    'Moody': {name: 'moody_premium', id: 'com.tbd.Moody.subscription.yearly.v6' },
    'Mindfulness': {name: 'themindfulnessapp_premium', id: 'com.themindfulnessapp.lifetime.v3' },
    '1Blocker': {name: 'premium', id: 'blocker.ios.subscription.yearly' },
    'Amie': {name: 'pro', id: 'amie_pro_9999_1y_23012024' },
    'Darkroom': {name: 'co.bergen.Darkroom.entitlement.allToolsAndFilters', id: 'co.bergen.Darkroom.product.forever.everything' },
    'Radarbot': {name: 'gold_access', id: 'rb_gold_3599_annual_offer_1y2499' },
    'Structured': {name: 'pro', id: 'today.structured.pro' },
    'Grateful': {name: 'grateful_premium', id: 'com.tbd.Grateful.subscription.yearly.v6' },
    'FastingForWoman': {name: 'wefast_premium', id: 'wf_19999_lifetime_1' },
    'timebloc': {name: 'timebloc_premium', id: 'com.foruslabs.timebloc.lifetime.v3' },
    'Habit': {name: 'premium', id: 'com.habit.lifetime.14dollar' },
    'Reflectly': {name: 'reflectly_premium', id: 'reflectly.lifetime.v3' },
    'Monefy': {name: 'monefy_premium', id: 'com.monefyapp.subscription.yearly.v1' },
    'Last': {name: 'OneTime_Upgrades', id: 'com.tbd.Last.Premium' },
    'Tally': {name: 'tally_premium', id: 'com.tbd.Tally.subscription.yearly.v6' },
    'My%20GI': {name: 'premium', id: 'mygi_onetime' },
    'HealthView': {name: 'healthview_premium', id: 'com.funnmedia.HealthMinder.onetimepurchase' },
    'Days': {name: 'Growth_Bundle_Subscription', id: 'com.tomasvitek.days.growth.bundle.yearly.v1' },
    'Story': {name: 'Premium', id: 'storyStandard' },
    'Mascot': {name: 'Premium', id: 'mascotLarge' },
    'Advice': {name: 'Premium', id: 'advicePremiumAnnually' },
    'Voice': {name: 'Premium', id: 'transcribePremiumAnnually' },
    'Fluently': {name: 'Premium', id: 'languagePremiumAnnually' },
    'Compose': {name: 'ProStandard', id: 'com.pixery.compose.yearly' },
    'Morphose': {name: 'ProStandard', id: 'com.pixery.morphose.yearly' },
    'Faceoff': {name: 'ProStandard', id: 'com.pixery.faceoff.yearly' },
    'Ivy': {name: 'ProStandard', id: 'com.pixery.ivy.yearly' },
    'Relight': {name: 'ProStandard', id: 'com.pixerylabs.luxify.yearly' },
    'Velomingo': {name: 'ProStandard', id: 'com.pixery.velomingo.yearly' },
    'Fluently': {name: 'Premium', id: 'languagePremiumAnnually' },
    'AIAvatar': {name: 'Premium', id: 'aiAvatarLarge' },
    'AIAssistant': {name: 'Premium', id: 'assistantPremiumAnnually' },
    'AIStudio': {name: 'Premium', id: 'aiCanvasPremiumAnnually' },
    'Translate%20-%20Talk%20Translator': {name: 'Premium', id: 'premiumAnnually' },
    'CoachGuitar': {name: 'premium', id: 'yearly_pass' },
    'Friday': {name: 'PRO', id: 'GEO_LIFETIME_89.99' },
    'FridayAIKeyboard': {name: 'AI Keyboard PRO', id: 'GEO_69.99_LIFETIME_KBRD' },
    'ChatLLM': {name: 'Pro', id: 'com.curiouscreatorsco.ChatLLM.pro.1year.notrial.69_99' },
    'Dedupe': {name: 'Pro', id: 'com.curiouscreatorsco.Dedupe.pro.lifetime.notrial.39_99' },
    'Pregnancy%20Pics': {name: 'unlimited', id: 'com.curiouskiwico.PregnancyPics.pregnancyart' },
    'Precious': {name: 'unlimited', id: 'com.laubrothersllc.BabyArt.autoalbums' },
    'RizzGPT': {name: 'unlimitedLinesEntitlement', id: 'noAdsUnlimited' },
    'TinderHelperSimple': {name: 'PREMIUM', id: 'AIWFULLANNUAL' },
    'FLIRT': {name: 'Premium', id: 'com.mountainviewer.FLIRT.YearlyPremiumPlan' },
    'flirt-ai': {name: 'pro', id: 'app.flirtai.abo9' },
    'memeGPT': {name: 'unlimited', id: 'unlimited_instaplan' },
    'Therapist': {name: 'pro', id: 'app.therapist.one.year' },
    'trainingCybersport': {name: 'pro', id: 'sixmonth' },
    'daily%20quoute': {name: 'premium', id: '399' },
    'daily%20quoute': {name: 'premium', id: 'dq_499_3d0' },
    'Qr%20Pro%20Scanner': {name: 'pro', id: 'qrcs_4999_1y_3d0' },
    'cleareplhone': {name: 'pro', id: 'cs_1499' },
    'CodeScanner': {name: 'pro', id: 'pro_monthly_499' },
    'Chai': {name: 'bot_builder', id: 'bot_builder_subscription_annual' },
    'Chai': {name: 'premium', id: 'subscription_gold' },
    'Chai': {name: 'pro', id: 'subscription_pro_annual' },
    'HeroMe': {name: 'app.herome.prod.premium', id: 'app.herome.prod.premium.yearly' },
    'Rizz': {name: 'unlimited.replies', id: 'sandwich.two.1.year' },
    'Rizzler': {name: 'Pro', id: 'money.tursunov.rizzler.subscription.year' },
    'Roaster': {name: 'premium', id: 'roastergenius_299_1m' },
    'LooksMaxAI': {name: 'pro', id: 'sub_looksmax_1w_399' },
    'YouMax%20LooksMax': {name: 'pro1', id: 'youmax_weekly_299' },
    'LooksMax_AI': {name: 'pro', id: 'lmai_6999_lt' },
    'ask.fun': {name: 'ngl_pro', id: 'ngl_pro_10' },
    'sendit': {name: 'allaccess', id: 'subscription_weekly_allaccess_1' },
    'linkit': {name: 'unlimitedhints', id: 'senditig_diamond_weekly_499' },
    'starmatch': {name: 'diamondStarmatchWeekly', id: 'diamond_startmatch_weekly_599' }
  };  
const data = {
  "expires_date": "9692-02-18T07:52:54Z",
  "original_purchase_date": "2020-02-11T07:52:55Z",
  "purchase_date": "2020-02-11T07:52:54Z",
  "ownership_type": "PURCHASED",
  "is_sandbox": false,
  "store": "app_store"
};

if (typeof $response === "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  resp.headers = $request.headers;
} else if (obj && obj.subscriber) {
  obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
  obj.subscriber.entitlement = obj.subscriber.entitlement || {};

  for (const appName in list) {
    const appInfo = list[appName];
    const regex = new RegExp(appName, 'i'); // Case-insensitive match

    if (regex.test(ua)) {
      obj.subscriber.subscriptions[appInfo.id] = data;
      obj.subscriber.entitlements[appInfo.name] = JSON.parse(JSON.stringify(data));
      obj.subscriber.entitlements[appInfo.name].product_identifier = appInfo.id;
      break;
    }
  }

  resp.body = JSON.stringify(obj);
}

$done(resp);
