'use strict';(function(){(function(){var cmpScriptElement=document.createElement('script');var firstScript=document.getElementsByTagName('script')[0];cmpScriptElement.async=true;cmpScriptElement.type='text/javascript';var cmpVersion='https://quantcast.mgr.consensu.org/cmp.js';cmpScriptElement.src=cmpVersion;firstScript.parentNode.insertBefore(cmpScriptElement,firstScript);})();(function(){var css=""
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   background-color: #368bd6 !important; "
+"   border-color: transparent !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   color: #ffffff !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   color: #368bd6 !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   background-color: #eee !important; "
+"   border-color: transparent !important; "
+" } "
+""
+"";var stylesElement=document.createElement('style');var re=new RegExp('&quote;','g');css=css.replace(re,'"');stylesElement.type='text/css';if(stylesElement.styleSheet){stylesElement.styleSheet.cssText=css;}else{stylesElement.appendChild(document.createTextNode(css));}
var head=document.head||document.getElementsByTagName('head')[0];head.appendChild(stylesElement);})();(function(){var gdprAppliesGlobally=true;function addFrame(){if(!window.frames['__cmpLocator']){if(document.body){(function(){var body=document.body;var iframe=document.createElement('iframe');iframe.name='__cmpLocator';iframe.style.cssText='display:none';body.appendChild(iframe);})();}else{setTimeout(addFrame,5);}}}
addFrame();function cmpMsgHandler(event){var json=void 0;var msgIsString=typeof event.data==='string';if(msgIsString){json=event.data.indexOf('__cmpCall')!==-1?JSON.parse(event.data):{};}else{json=event.data;}
if(json.__cmpCall){(function(){var cmpCall=json.__cmpCall;window.__cmp(cmpCall.command,cmpCall.parameter,function(returnValue,success){var returnMsg={'__cmpReturn':{'success':success,'callId':cmpCall.callId,'returnValue':returnValue}};event.source.postMessage(msgIsString?JSON.stringify(returnMsg):returnMsg,'*');});})();}}
window.__cmp=function(command){var arg=arguments;var returnValue=null;if(!arg.length){returnValue=__cmp.a;}else if(arg[0]==='ping'){arg[2]({'cmpLoaded':false,'gdprAppliesGlobally':gdprAppliesGlobally},true);}else if(command==='__cmp'){returnValue=false;}else{if(typeof __cmp.a==='undefined'){__cmp.a=[];}
__cmp.a.push([].slice.apply(arg));}
return returnValue}
window.__cmp.gdprAppliesGlobally=gdprAppliesGlobally;window.__cmp.msgHandler=cmpMsgHandler;if(window.addEventListener){window.addEventListener('message',cmpMsgHandler,false);}else{window.attachEvent('onmessage',cmpMsgHandler);}})();var autoDetectedLanguage='en';function splitLang(lang){return lang.length>2?lang.split('-')[0]:lang;};function isSupported(lang){var langs=['bg','cs','da','de','el','en','es','et','fi','fr','ga','hr','hu','it','lt','lv','mt','nl','pl','pt','ro','sk','sl','sv'];return langs.indexOf(lang)===-1?false:true;};if(isSupported(splitLang(document.documentElement.lang))){autoDetectedLanguage=splitLang(document.documentElement.lang);}else if(isSupported(splitLang(navigator.language))){autoDetectedLanguage=splitLang(navigator.language);};var choiceMilliSeconds=(new Date).getTime();window.__cmp('init',{'UI Layout':'popup','Publisher Name':'Space','Publisher Logo':'https://dg876rejmw3ebkm51boa0sx2-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/space-logo.png','Mode':1,'Display Persistent Consent Link':false,'No Option':false,'Soft Opt-in Enabled':false,'Min Days Between UI Displays':30,'Default Value for Toggles':'off','Google Personalization':true,'Consent Scope':'service','Language':autoDetectedLanguage,'Publisher Vendor List URL':'https://quantcast.mgr.consensu.org'.concat('/choice').concat('/uer8ZPXHG8WDU').concat('/www.space.com').concat('/.well-known/pubvendors.json').concat('?timestamp','=',choiceMilliSeconds),'Initial Screen Body Text Option':1,'PCode':'uer8ZPXHG8WDU','Display UI':'inEU'});})();