(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{61:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return c})),i.d(t,"metadata",(function(){return s})),i.d(t,"rightToc",(function(){return l})),i.d(t,"default",(function(){return u}));var n=i(2),o=i(6),r=(i(0),i(76)),a=["components"],c={id:"ios-api",title:"iOS Specific Commands",sidebar_label:"iOS specific"},s={unversionedId:"api/ios-api",id:"api/ios-api",isDocsHomePage:!1,title:"iOS Specific Commands",description:"registerRemoteNotifications(options?: string[])",source:"@site/docs/api/ios-api.md",slug:"/api/ios-api",permalink:"/react-native-notifications/api/ios-api",editUrl:"https://github.com/wix/react-native-notifications/edit/master/docs/docs/api/ios-api.md",version:"current",sidebar_label:"iOS specific",sidebar:"api",previous:{title:"General Commands",permalink:"/react-native-notifications/api/general-api"},next:{title:"General",permalink:"/react-native-notifications/api/general-events"}},l=[{value:"registerRemoteNotifications(options?: string[])",id:"registerremotenotificationsoptions-string",children:[]},{value:"checkPermissions()",id:"checkpermissions",children:[]},{value:"abandonPermissions()",id:"abandonpermissions",children:[]},{value:"registerPushKit()",id:"registerpushkit",children:[]},{value:"cancelAllLocalNotifications()",id:"cancelalllocalnotifications",children:[]},{value:"getDeliveredNotifications()",id:"getdeliverednotifications",children:[]},{value:"removeDeliveredNotifications()",id:"removedeliverednotifications",children:[]},{value:"getBadgeCount()",id:"getbadgecount",children:[]},{value:"setBadgeCount()",id:"setbadgecount",children:[]}],p={rightToc:l};function u(e){var t=e.components,i=Object(o.a)(e,a);return Object(r.b)("wrapper",Object(n.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"registerremotenotificationsoptions-string"},"registerRemoteNotifications(options?: string[])"),Object(r.b)("p",null,"Requests notification permissions from iOS, prompting the user's dialog box."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Notifications.ios.registerRemoteNotifications(['ProvidesAppNotificationSettings']);\n")),Object(r.b)("h2",{id:"checkpermissions"},"checkPermissions()"),Object(r.b)("p",null,"See what push permissions are currently enabled."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Notifications.ios.checkPermissions();\n")),Object(r.b)("h2",{id:"abandonpermissions"},"abandonPermissions()"),Object(r.b)("p",null,"Unregister for all remote notifications received via Apple Push Notification service."),Object(r.b)("p",null,"You should call this method in rare circumstances only, such as when a new version of the app removes support for all types of remote notifications. Users can temporarily prevent apps from receiving remote notifications through the Notifications section of the Settings app. Apps unregistered through this method can always re-register."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Notifications.ios.abandonPermissions();\n")),Object(r.b)("h2",{id:"registerpushkit"},"registerPushKit()"),Object(r.b)("p",null,"Register for PushKit notifications"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Notifications.ios.registerPushKit();\n")),Object(r.b)("h2",{id:"cancelalllocalnotifications"},"cancelAllLocalNotifications()"),Object(r.b)("p",null,"Cancels all scheduled localNotifications"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Notifications.ios.cancelAllLocalNotifications();\n")),Object(r.b)("h2",{id:"getdeliverednotifications"},"getDeliveredNotifications()"),Object(r.b)("p",null,"Provides you with a list of the app\u2019s notifications that are still displayed in Notification Center"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Notifications.ios.getDeliveredNotifications();\n")),Object(r.b)("h2",{id:"removedeliverednotifications"},"removeDeliveredNotifications()"),Object(r.b)("p",null,"Removes the specified notifications from Notification Center"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Notifications.ios.removeDeliveredNotifications(identifiers);\n")),Object(r.b)("h2",{id:"getbadgecount"},"getBadgeCount()"),Object(r.b)("p",null,"Gets the badge count number from the aps object"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Notifications.ios.getBadgeCount();\n")),Object(r.b)("h2",{id:"setbadgecount"},"setBadgeCount()"),Object(r.b)("p",null,"Sets the badge number for the app icon on the home screen"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Notifications.ios.setBadgeCount(1);\n")))}u.isMDXComponent=!0},76:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return f}));var n=i(0),o=i.n(n);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):c(c({},t),e)),i},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(i),d=n,f=u["".concat(a,".").concat(d)]||u[d]||b[d]||r;return i?o.a.createElement(f,c(c({ref:t},l),{},{components:i})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<r;l++)a[l]=i[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"}}]);