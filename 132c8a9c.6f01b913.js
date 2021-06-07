(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{51:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),i=(n(0),n(76)),r=["components"],c={id:"installation-android",title:"Android Installation",sidebar_label:"Android Installation"},s={unversionedId:"docs/installation-android",id:"docs/installation-android",isDocsHomePage:!1,title:"Android Installation",description:"Add the library to your application class (e.g. MainApplication.java):",source:"@site/docs/docs/installation-android.md",slug:"/docs/installation-android",permalink:"/react-native-notifications/docs/installation-android",editUrl:"https://github.com/wix/react-native-notifications/edit/master/docs/docs/docs/installation-android.md",version:"current",sidebar_label:"Android Installation",sidebar:"docs",previous:{title:"iOS Manual Installation",permalink:"/react-native-notifications/docs/installation-ios"},next:{title:"iOS Advanced API",permalink:"/react-native-notifications/docs/advanced-ios"}},l=[{value:"Receiving push notifications",id:"receiving-push-notifications",children:[]}],d={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,r);return Object(i.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Add the library to your application class (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"MainApplication.java"),"):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"import com.wix.reactnativenotifications.RNNotificationsPackage;\n\n")),Object(i.b)("h3",{id:"receiving-push-notifications"},"Receiving push notifications"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This section is only necessary in case you wish to be able to ",Object(i.b)("strong",{parentName:"p"},"receive")," push notifications in your React-Native app."))),Object(i.b)("p",null,"Push notifications on Android are managed and dispatched using ",Object(i.b)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging"},"Google's FCM service"),". The following installation steps are a TL;DR of ",Object(i.b)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging/android/client"},"Google's FCM setup guide"),". You can follow them to get FCM integrated quickly, but we recommend that you will in the very least have a peek at the guide's overview."),Object(i.b)("h4",{id:"step-1-subscribe-to-googles-fcm"},"Step #1: Subscribe to Google's FCM"),Object(i.b)("p",null,"To set FCM in your app, you must first create a google-services.json file. If you have no existing API project yet, the easiest way to go about in creating one is using ",Object(i.b)("a",{parentName:"p",href:"https://firebase.google.com/docs/android/setup"},"this step-by-step installation process"),";"),Object(i.b)("h4",{id:"step-2-copy-google-servicesjson"},"Step #2: Copy google-services.json"),Object(i.b)("p",null,"After creating google-services.json, copy it into your project's android/app folder."),Object(i.b)("h4",{id:"step-3-add-google-services-package"},"Step #3: Add google-services package"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-gradle",metastring:'title="./android/build.gradle"',title:'"./android/build.gradle"'},"buildscript {\n    ...\n    dependencies {\n        ...\n        classpath 'com.google.gms:google-services:4.0.0'\n    }\n}\n")),Object(i.b)("h4",{id:"step-4-add-firebase-core-package-and-apply-google-services-plugin"},"Step #4: Add firebase-core package and apply google-services plugin"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-gradle",metastring:'title="./android/app/build.gradle"',title:'"./android/app/build.gradle"'},"dependencies {\n    ...\n    implementation project(':react-native-notifications')\n    implementation 'com.google.firebase:firebase-core:16.0.0'\n}\n\napply plugin: 'com.google.gms.google-services'\n")),Object(i.b)("h4",{id:"step-5-link-react-native-notifications"},"Step #5: Link react-native-notifications"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-gradle",metastring:'title="./android/settings.gradle"',title:'"./android/settings.gradle"'},"include ':react-native-notifications'\nproject(':react-native-notifications').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-notifications/lib/android/app')\n")),Object(i.b)("h4",{id:"step-6-customize-the-appearance"},"Step #6: Customize the appearance"),Object(i.b)("p",null,"It is important to name the icon that you would like to display ",Object(i.b)("inlineCode",{parentName:"p"},"notification_icon"),".\nAndroid studio allows to ",Object(i.b)("a",{parentName:"p",href:"https://developer.android.com/studio/write/image-asset-studio"},"generate")," the appropriate drawables according to the ",Object(i.b)("a",{parentName:"p",href:"https://developer.android.com/studio/write/image-asset-studio#notification"},"documentation"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml",metastring:'title="AndroidManifest.xml"',title:'"AndroidManifest.xml"'},'\x3c!-- Set custom default icon. This is used when no icon is set for incoming notification messages.\n            See README(https://goo.gl/l4GJaQ) for more. --\x3e\n<meta-data\n        android:name="com.google.firebase.messaging.default_notification_icon"\n        android:resource="@drawable/notification_icon" />\n\x3c!-- Set color used with incoming notification messages. This is used when no color is set for the incoming\n            notification message. See README(https://goo.gl/6BKBk7) for more. --\x3e\n<meta-data\n        android:name="com.google.firebase.messaging.default_notification_color"\n        android:resource="@color/colorAccent" />\n')),Object(i.b)("p",null,"If you want to use a color like in the example above, you also need to define the color value"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml",metastring:'title="res/values/colors.xml"',title:'"res/values/colors.xml"'},'<resources>\n    <color name="colorAccent">#C60C30</color>\n</resources>\n')))}p.isMDXComponent=!0},76:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),g=o,b=p["".concat(r,".").concat(g)]||p[g]||u[g]||i;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);