;/*FB_PKG_DELIM*/

__d("StoriesCreateQuery$Parameters",["StoriesCreateQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("StoriesCreateQuery_facebookRelayOperation"),metadata:{},name:"StoriesCreateQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("StoriesIsCommentEnabled.relayprovider",["qex"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){var a;return(a=c("qex")._("573"))!=null?a:!1}};g["default"]=a}),98);
__d("StoriesIsCommentPreviewsEnabled.relayprovider",["qex"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){var a;return(a=c("qex")._("146"))!=null?a:!1}};g["default"]=a}),98);
__d("StoriesIsCommentRightRailEnabled.relayprovider",["qex"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){var a;return(a=c("qex")._("18"))!=null?a:!1}};g["default"]=a}),98);
__d("StoriesIsCommentSheetEnabled.relayprovider",["qex"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){var a;return(a=c("qex")._("381"))!=null?a:!1}};g["default"]=a}),98);
__d("StoriesIsContextualReplyDisabled.relayprovider",["qex"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){var a;return(a=c("qex")._("457"))!=null?a:!1}};g["default"]=a}),98);
__d("StoriesSuspenseContentPaneRootWithEntryPointQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5685762004855745"}),null);
__d("StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters",["StoriesIsCommentEnabled.relayprovider","StoriesIsCommentPreviewsEnabled.relayprovider","StoriesIsCommentRightRailEnabled.relayprovider","StoriesIsCommentSheetEnabled.relayprovider","StoriesIsContextualReplyDisabled.relayprovider","StoriesRing.relayprovider","StoriesSuspenseContentPaneRootWithEntryPointQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("StoriesSuspenseContentPaneRootWithEntryPointQuery_facebookRelayOperation"),metadata:{},name:"StoriesSuspenseContentPaneRootWithEntryPointQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__StoriesIsCommentEnabledrelayprovider:b("StoriesIsCommentEnabled.relayprovider"),__relay_internal__pv__StoriesIsCommentPreviewsEnabledrelayprovider:b("StoriesIsCommentPreviewsEnabled.relayprovider"),__relay_internal__pv__StoriesIsContextualReplyDisabledrelayprovider:b("StoriesIsContextualReplyDisabled.relayprovider"),__relay_internal__pv__StoriesRingrelayprovider:b("StoriesRing.relayprovider"),__relay_internal__pv__StoriesIsCommentSheetEnabledrelayprovider:b("StoriesIsCommentSheetEnabled.relayprovider"),__relay_internal__pv__StoriesIsCommentRightRailEnabledrelayprovider:b("StoriesIsCommentRightRailEnabled.relayprovider")}}};e.exports=a}),null);
__d("StoriesSuspenseNavigationPaneRootWithEntryPointQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5299475086848912"}),null);
__d("StoriesSuspenseNavigationPaneRootWithEntryPointQuery$Parameters",["StoriesSuspenseNavigationPaneRootWithEntryPointQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("StoriesSuspenseNavigationPaneRootWithEntryPointQuery_facebookRelayOperation"),metadata:{},name:"StoriesSuspenseNavigationPaneRootWithEntryPointQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("StoriesCreateRoot.entrypoint",["JSResourceForInteraction","StoriesCreateQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{storiesCreateQueryReference:{parameters:b("StoriesCreateQuery$Parameters"),variables:{satpScale:d("WebPixelRatio").get()+1,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("StoriesCreateRoot.react").__setRef("StoriesCreateRoot.entrypoint")};g["default"]=a}),98);
__d("StoriesGatingEntrypoint.entrypointutils",["WebPixelRatio","qex"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b,e,f,g;b=(b=c("qex")._("1598"))!=null?b:!1;e=(e=c("qex")._("68"))!=null?e:!1;f=(f=c("qex")._("573"))!=null?f:!1;g=(g=c("qex")._("276"))!=null?g:!1;return{UFI2CommentsProvider_commentsKey:"StoriesSuspenseContentPaneRootWithEntryPointQuery",blur:d("WebPixelRatio").get()*10,bucketID:a||"",displayCommentsContextEnableComment:!0,displayCommentsContextIsAdPreview:!1,displayCommentsContextIsAggregatedShare:!1,displayCommentsContextIsStorySet:!1,displayCommentsFeedbackContext:null,feedbackSource:65,feedLocation:"COMET_MEDIA_VIEWER",focusCommentID:null,initialBucketID:a||"",initialLoad:!0,isStoryCommentingEnabled:f,scale:d("WebPixelRatio").get(),shouldDeferLoad:g,shouldEnableArmadilloStoryReply:e,shouldEnableLiveInStories:b}}function b(a){var b,e;b=(b=c("qex")._("1598"))!=null?b:!1;e=(e=c("qex")._("68"))!=null?e:!1;return{UFI2CommentsProvider_commentsKey:"StoriesSuspenseCarouselCenterPaneRootWithEntryPointQuery",blur:d("WebPixelRatio").get()*10,bucketID:a||"",displayCommentsContextEnableComment:!0,displayCommentsContextIsAdPreview:!1,displayCommentsContextIsAggregatedShare:!1,displayCommentsContextIsStorySet:!1,displayCommentsFeedbackContext:null,feedbackSource:65,feedLocation:"COMET_MEDIA_VIEWER",focusCommentID:null,initialBucketID:a||"",initialLoad:!0,scale:d("WebPixelRatio").get(),shouldEnableArmadilloStoryReply:e,shouldEnableLiveInStories:b}}function h(){var a;a=(a=c("qex")._("1585"))!=null?a:4;return Math.ceil(a/2)*2}function e(a,b){var c=[];a!=null&&c.push(a);b!=null&&b.length>0&&(c=b);a=Math.max(h(),c.length);return{blur:d("WebPixelRatio").get()*10,bucketsCount:a,pinnedIDs:c,scale:d("WebPixelRatio").get()}}g.getContentPaneParams=a;g.getCarouselContentPaneParams=b;g.getSidePaneParam=e}),98);
__d("FBUnifiedStoriesTrayType",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum").Mirrored(["AUTOPLAY_NOTIFICATION_TRAY","FEED_PROFILE_TRAY","FEED_UNITS_PAGINATION","GROUPS_STORIES_TRAY","MONTAGE","ONE_BY_ONE_AUTOPLAY","PERMALINK","PORTAL_TRAY","SHOP_TAB_STORY_TRAY","SUGGESTED_STORIES","SUGGESTED_STORIES_FOR_HYBRID_TRAY","TOP_OF_FEED_TRAY","TOP_OF_FEED_TRAY_SHUFFLE","WEARABLE_STORIES_FACE_TRAY"]);c=a;f["default"]=c}),66);
__d("FBUnifiedStoriesTrayTypeUtils.facebook",["$InternalEnumUtils","FBUnifiedStoriesTrayType"],(function(a,b,c,d,e,f,g){a=d("$InternalEnumUtils").createToJSEnum(c("FBUnifiedStoriesTrayType"));b=d("$InternalEnumUtils").createFromJSEnum(c("FBUnifiedStoriesTrayType"));g.toJSEnum=a;g.fromJSEnum=b}),98);
__d("StoriesCometSuspenseRoot.entrypoint",["FBUnifiedStoriesTrayTypeUtils.facebook","JSResourceForInteraction","StoriesGatingEntrypoint.entrypointutils","StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters","StoriesSuspenseNavigationPaneRootWithEntryPointQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=a.passthroughProps,e=a.routeParams;a=a.routeProps;var f=e.bucket_id,g=a.bucket_id_from_card_id;a=a.buckets_count;e=(e==null?void 0:e.source)==="story_tray";c=d("FBUnifiedStoriesTrayTypeUtils.facebook").fromJSEnum((c=c==null?void 0:c.storiesTrayType)!=null?c:"TOP_OF_FEED_TRAY");e={bucketsCount:(a=a)!=null?a:9,extendedViewerInitialBucketID:(a=f)!=null?a:"",includeInitialBucket:f!==""&&f!==null&&!e,pinnedIDs:[(a=f)!=null?a:""],scale:d("WebPixelRatio").get(),storiesTrayType:c};c=d("StoriesGatingEntrypoint.entrypointutils").getContentPaneParams((a=f)!=null?a:g);return{queries:{storiesSuspenseContentPaneRootReference:{parameters:b("StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters"),variables:c},storiesSuspenseNavigationPaneRootReference:{parameters:b("StoriesSuspenseNavigationPaneRootWithEntryPointQuery$Parameters"),variables:e}}}},root:c("JSResourceForInteraction")("StoriesCometSuspenseRoot.react").__setRef("StoriesCometSuspenseRoot.entrypoint")};g["default"]=a}),98);