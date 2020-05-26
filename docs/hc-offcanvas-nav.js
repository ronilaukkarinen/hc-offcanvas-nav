/*
 * HC Off-canvas Nav
 * ===================
 * Version: 4.1.4
 * Author: Some Web Media
 * Author URL: https://github.com/somewebmedia/
 * Plugin URL: https://github.com/somewebmedia/hc-offcanvas-nav
 * Description: jQuery plugin for creating off-canvas multi-level navigations
 * License: MIT
 */
"use strict";function _typeof(n){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}!function(sn,rn){var dn=rn.document,vn=sn(rn),pn=sn(dn.getElementsByTagName("html")[0]),fn=sn(dn),un=!1;try{var n=Object.defineProperty({},"passive",{get:function(){un={passive:!1}}});rn.addEventListener("testPassive",null,n),rn.removeEventListener("testPassive",null,n)}catch(n){}var i,hn=(/iPad|iPhone|iPod/.test(navigator.userAgent)||!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform))&&!rn.MSStream,mn="ontouchstart"in rn||navigator.maxTouchPoints||rn.DocumentTouch&&dn instanceof DocumentTouch,gn=function(n){return!isNaN(parseFloat(n))&&isFinite(n)},bn=function(n){return"auto"===n?n:gn(n)?n+"px":n},yn=function(n){return n.stopPropagation()},xn=function(n){return n.preventDefault()},kn=function(e){return function(n){n.preventDefault(),n.stopPropagation(),"function"==typeof e&&e()}},Cn=function(n){var e=["Webkit","Moz","Ms","O"],t=(dn.body||dn.documentElement).style,a=n.charAt(0).toUpperCase()+n.slice(1);if(void 0!==t[n])return n;for(var o=0;o<e.length;o++)if(void 0!==t[e[o]+a])return e[o]+a;return!1},On=function(n,e,t){var a=t.children(),o=a.length,i=-1<e?Math.max(0,Math.min(e-1,o)):Math.max(0,Math.min(o+e+1,o));0===i?t.prepend(n):a.eq(i-1).after(n)},wn=function(n){return-1!==["left","right"].indexOf(n)?"x":"y"},Tn=(i=Cn("transform"),function(n,e,t){if(i)if(!1===e)n.css(i,"");else if("x"===wn(t)){var a="left"===t?e:0-e;n.css(i,"translate3d(".concat(a,"px,0,0)"))}else{var o="top"===t?e:0-e;n.css(i,"translate3d(0,".concat(o,"px,0)"))}else n.css(t,e)}),e=function(n,e,t){console.warn("%cHC Off-canvas Nav:%c "+t+"%c '"+n+"'%c is now deprecated and will be removed in the future. Use%c '"+e+"'%c option instead. See details about plugin usage at https://github.com/somewebmedia/hc-offcanvas-nav.","color: #fa253b","color: default","color: #5595c6","color: default","color: #5595c6","color: default")},Mn=0;sn.fn.extend({hcOffcanvasNav:function(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!this.length)return this;var en=this,tn=sn(dn.body);void 0!==n.maxWidth&&(e("maxWidth","disableAt","option"),n.disableAt=n.maxWidth);var an=sn.extend({},{width:280,height:"auto",disableAt:!1,pushContent:!1,swipeGestures:!0,expanded:!1,position:"left",levelOpen:"overlap",levelSpacing:40,levelTitles:!0,closeOpenLevels:!0,closeActiveLevel:!1,navTitle:null,navClass:"",disableBody:!0,closeOnClick:!0,customToggle:null,bodyInsert:"prepend",removeOriginalNav:!1,rtl:!1,insertClose:!0,insertBack:!0,levelTitleAsBack:!0,labelClose:"Close",labelBack:"Back"},n),on=[],cn="nav-open",ln=function(n){if(!on.length)return!1;var e=!1;"string"==typeof n&&(n=[n]);for(var t=n.length,a=0;a<t;a++)-1!==on.indexOf(n[a])&&(e=!0);return e};return this.each(function(){var e=sn(this);if(e.find("ul").addBack("ul").length){var n,o,i,c,a,t,r,l,y="hc-nav-".concat(++Mn),s=(n="hc-offcanvas-".concat(Mn,"-style"),o=sn('<style id="'.concat(n,'">')).appendTo(sn("head")),i={},c={},a=function(n){return";"!==n.substr(-1)&&(n+=";"!==n.substr(-1)?";":""),n},{reset:function(){i={},c={}},add:function(n,e,t){n=n.trim(),e=e.trim(),t?(t=t.trim(),c[t]=c[t]||{},c[t][n]=a(e)):i[n]=a(e)},remove:function(n,e){n=n.trim(),e?(e=e.trim(),void 0!==c[e][n]&&delete c[e][n]):void 0!==i[n]&&delete i[n]},insert:function(){var n="";for(var e in c){for(var t in n+="@media screen and (".concat(e,") {\n"),c[e])n+="".concat(t," { ").concat(c[e][t]," }\n");n+="}\n"}for(var a in i)n+="".concat(a," { ").concat(i[a]," }\n");o.html(n)}}),d="keydown.hc-offcanvas-nav",v=sn('<nav role="navigation">').on("click",yn),p=sn('<div class="nav-container">').appendTo(v),f=null,u=null,h={},m=!1,g=!1,b=null,x=0,k=0,C=0,O=null,w={},T=[],M=!1,S=[],E=null,L=null,B=!1,A=!1;e.addClass("hc-nav-original ".concat(y)),an.customToggle?f=sn(an.customToggle).addClass("hc-nav-trigger ".concat(y)).on("click",R):(f=sn('<a href="#" aria-label="Open Menu" class="hc-nav-trigger '.concat(y,'"><span></span></a>')).on("click",R),e.after(f)),f.attr("role","button").attr("aria-controls",y).on("keydown",function(n){"Enter"!==n.key&&13!==n.keyCode||setTimeout(function(){N(0,0)},0)});var N=function(n,e,t){if("number"==typeof e&&("number"==typeof n||S.length)){var a='[tabindex=0], a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',o=p.find(".nav-wrapper").filter("[data-level=".concat(e,"]")).filter(function(){return"number"!=typeof t||sn(this).is("[data-index=".concat(t,"]"))}).children(".nav-content").children("ul").children("li").children(":not(.nav-wrapper)").find(a).addBack(a).filter(":not([tabindex=-1])");if(o.length){var i=o.first(),c=o.last();"number"==typeof n?o.eq(n).focus():(S[S.length-1].focus(),S.pop()),fn.off(d),fn.on(d,function(n){("Tab"===n.key||9===n.keyCode)&&(n.shiftKey?dn.activeElement===i[0]&&(n.preventDefault(),c.focus()):dn.activeElement===c[0]&&(n.preventDefault(),i.focus()))})}}},P=function(){fn.off(d),setTimeout(function(){f.focus()},r)},D=function(){var n;p.css("transition","none"),k=p.outerWidth(),C=p.outerHeight(),s.add(".hc-offcanvas-nav.".concat(y,".nav-position-left .nav-container"),"transform: translate3d(-".concat(k,"px, 0, 0)")),s.add(".hc-offcanvas-nav.".concat(y,".nav-position-right .nav-container"),"transform: translate3d(".concat(k,"px, 0, 0)")),s.add(".hc-offcanvas-nav.".concat(y,".nav-position-top .nav-container"),"transform: translate3d(0, -".concat(C,"px, 0)")),s.add(".hc-offcanvas-nav.".concat(y,".nav-position-bottom .nav-container"),"transform: translate3d(0, ".concat(C,"px, 0)")),s.insert(),p.css("transition",""),t=p.css("transition-property").split(",")[0],n=p.css("transition-duration").split(",")[0],r=parseFloat(n)*(/\ds$/.test(n)?1e3:1),l=p.css("transition-timing-function").split(",")[0],an.pushContent&&u&&t&&s.add(function n(e){return"string"==typeof e?e:e.attr("id")?"#"+e.attr("id"):e.attr("class")?e.prop("tagName").toLowerCase()+"."+e.attr("class").replace(/\s+/g,"."):n(e.parent())+" "+e.prop("tagName").toLowerCase()}(an.pushContent),"transition: ".concat(t," ").concat(r,"ms ").concat(l)),s.insert()},j=function(n){var e=f.css("display"),t=!!an.disableAt&&"max-width: ".concat(an.disableAt-1,"px"),a=bn(an.width),o=bn(an.height);-1!==a.indexOf("px")&&(k=parseInt(a)),-1!==o.indexOf("px")&&(C=parseInt(o)),ln(["disableAt","position"])&&s.reset(),s.add(".hc-offcanvas-nav.".concat(y),"display: block",t),s.add(".hc-nav-original.".concat(y),"display: none",t),s.add(".hc-nav-trigger.".concat(y),"display: ".concat(e&&"none"!==e?e:"block"),t),-1!==["left","right"].indexOf(an.position)?s.add(".hc-offcanvas-nav.".concat(y," .nav-container"),"width: ".concat(a)):s.add(".hc-offcanvas-nav.".concat(y," .nav-container"),"height: ".concat(o)),s.add(".hc-offcanvas-nav.".concat(y,".nav-position-left .nav-container"),"transform: translate3d(-".concat("auto"===a?"100%":a,", 0, 0);")),s.add(".hc-offcanvas-nav.".concat(y,".nav-position-right .nav-container"),"transform: translate3d(".concat("auto"===a?"100%":a,", 0, 0);")),s.add(".hc-offcanvas-nav.".concat(y,".nav-position-top .nav-container"),"transform: translate3d(0, -".concat("auto"===o?"100%":o,", 0);")),s.add(".hc-offcanvas-nav.".concat(y,".nav-position-bottom .nav-container"),"transform: translate3d(0, ".concat("auto"===o?"100%":o,", 0);")),s.add(".hc-offcanvas-nav.".concat(y,".nav-levels-overlap.nav-position-left li.level-open > .nav-wrapper"),"transform: translate3d(-".concat(an.levelSpacing,"px,0,0)"),t),s.add(".hc-offcanvas-nav.".concat(y,".nav-levels-overlap.nav-position-right li.level-open > .nav-wrapper"),"transform: translate3d(".concat(an.levelSpacing,"px,0,0)"),t),s.add(".hc-offcanvas-nav.".concat(y,".nav-levels-overlap.nav-position-top li.level-open > .nav-wrapper"),"transform: translate3d(0,-".concat(an.levelSpacing,"px,0)"),t),s.add(".hc-offcanvas-nav.".concat(y,".nav-levels-overlap.nav-position-bottom li.level-open > .nav-wrapper"),"transform: translate3d(0,".concat(an.levelSpacing,"px,0)"),t),s.insert(),(!n||n&&ln("pushContent"))&&("string"==typeof an.pushContent?(u=sn(an.pushContent)).length||(u=null):u=an.pushContent instanceof jQuery?an.pushContent:null),p.css("transition","none");var i=v.hasClass(cn),c=["hc-offcanvas-nav",an.navClass||"",y,an.navClass||"","nav-levels-"+an.levelOpen||"none","nav-position-"+an.position,an.disableBody?"disable-body":"",hn?"is-ios":"",mn?"touch-device":"",i?cn:"",an.rtl?"rtl":""].join(" ");v.off("click").attr("class","").attr("aria-hidden",!0).attr("aria-labelledby",y).addClass(c),an.disableBody&&v.on("click",J),n?D():setTimeout(D,0)},H=function(){var n;h=function l(n,e){var t=[];return n.each(function(){var n=sn(this),c={id:e,classes:n.attr("class")||null,items:[]};void 0!==n.attr("data-nav-active")&&(b=e,n.removeAttr("data-nav-active")),n.children("li").each(function(){var n=sn(this),e=void 0!==n.attr("data-nav-custom-content"),t=e?n.children():n.children().filter(function(){var n=sn(this);return n.is(":not(ul)")&&!n.find("ul").length}).add(n.contents().filter(function(){return 3===this.nodeType&&this.nodeValue.trim()})),a=e?sn():n.find("ul"),o=a.first().add(a.first().siblings("ul")),i=null;o.length&&(n.data("hc-uniqid")?i=n.data("hc-uniqid"):(i=Math.random().toString(36).substr(2),n.data("hc-uniqid",i))),void 0!==n.attr("data-nav-active")&&(b=i,n.removeAttr("data-nav-active")),c.items.push({id:i,classes:n.attr("class")||null,content:t,custom:e,subnav:o.length?l(o,i):[],highlight:void 0!==n.attr("data-nav-highlight")})}),t.push(c)}),t}((n=e.find("ul").addBack("ul")).first().add(n.first().siblings("ul")),null)},q=function(n){n&&(p.empty(),w={}),function h(n,e,m,g,t,a){var b=sn('<div class="nav-wrapper nav-wrapper-'.concat(m,'" data-level="').concat(m,'" data-index="').concat(t||0,'">')).appendTo(e).on("click",yn),o=sn('<div class="nav-content">').appendTo(b);if(g&&o.prepend("<h2>".concat(g,"</h2>")),sn.each(n,function(n,e){var u=sn('<ul role="menu" aria-level="'.concat(m+1,'">')).addClass(e.classes).appendTo(o);0===n&&g&&u.attr("aria-label",g),e.id&&u.attr("aria-labelledby","menu-"+e.id),sn.each(e.items,function(n,e){var t=e.content;if(e.custom){var a=sn('<li class="custom-content">').addClass(e.classes).append(sn('<div class="nav-item nav-item-custom">').append(t.clone(!0,!0)));u.append(a)}else{var o=t.find("a").addBack("a"),i=o.length?o.clone(!1,!0).addClass("nav-item"):sn("<".concat(e.subnav.length?'a href="#"':"span",' class="nav-item">')).append(t.clone(!0,!0)).on("click",yn);i.is("a")&&i.attr("tabindex","0").attr("role","menuitem"),o.length&&i.on("click",function(n){n.stopPropagation(),(sn._data(o[0],"events")||{}).click&&o[0].click()}),"#"===i.attr("href")&&i.on("click",function(n){n.preventDefault()}),an.closeOnClick&&($()?i.filter("a").filter('[data-nav-close!="false"]:not([disabled])').filter(function(){var n=sn(this);return!e.subnav.length||n.attr("href")&&"#"!==n.attr("href").charAt(0)}).on("click",J):i.filter("a").filter('[data-nav-close!="false"]:not([disabled])').on("click",J));var c=sn("<li>").addClass(e.classes).append(i).appendTo(u);if(e.highlight&&c.addClass("nav-highlight"),i.wrap('<div class="nav-item-wrapper">'),an.levelSpacing&&("expand"===an.levelOpen||!1===an.levelOpen||"none"===an.levelOpen)){var l=an.levelSpacing*m;l&&u.css("text-indent","".concat(l,"px"))}if(e.subnav.length){var s=m+1,r=e.id,d="";if(w[s]||(w[s]=0),c.addClass("nav-parent"),$()){var v=function(n){n.on("click",function(){f.prop("checked",!f.prop("checked")).trigger("change")}).on("keydown",function(n){"Enter"!==n.key&&13!==n.keyCode||(M=!0,S.push(sn(this)))}).attr("aria-controls","menu-"+r).attr("aria-haspopup","overlap"===an.levelOpen).attr("aria-expanded",!1)},p=w[s],f=sn('<input type="checkbox" id="'.concat(y,"-").concat(s,"-").concat(p,'" class="hc-chk" tabindex="-1">')).attr("data-level",s).attr("data-index",p).val(r).on("click",yn).on("change",Y).prependTo(c);-1!==T.indexOf(r)&&(b.addClass("sub-level-open").on("click",function(){return nn(s,p)}),c.addClass("level-open"),f.prop("checked",!0)),d=!0===an.levelTitles?t.text().trim():"",i.attr("href")&&"#"!==i.attr("href")?v(sn('<a href="#" class="nav-next" aria-label="'.concat(d,' Submenu" role="menuitem" tabindex="0"><span>')).on("click",yn).insertAfter(i)):(sn('<span class="nav-next"><span>').appendTo(i),v(i))}else i.attr("aria-expanded",!0);w[s]++,h(e.subnav,c,s,d,w[s]-1,g)}}})}),m&&void 0!==t&&!1!==an.insertBack&&"overlap"===an.levelOpen){var i=o.children("ul"),c=an.levelTitleAsBack&&a||an.labelBack||"",l=sn('<li class="nav-back"><a href="#" role="menuitem" tabindex="0">'.concat(c,"<span></span></a></li>")),s=function(){return nn(m,t)};l.children("a").on("click",kn(s)).on("keydown",function(n){"Enter"!==n.key&&13!==n.keyCode||(M=!0)}).wrap('<div class="nav-item-wrapper">'),!0===an.insertBack?i.first().prepend(l):gn(an.insertBack)&&On(l,an.insertBack,i)}if(0===m&&!1!==an.insertClose){var r=o.children("ul"),d=sn('<li class="nav-close"><a href="#" role="menuitem" tabindex="0">'.concat(an.labelClose||"","<span></span></a></li>"));d.children("a").on("click",kn(J)).on("keydown",function(n){"Enter"!==n.key&&13!==n.keyCode||P()}).wrap('<div class="nav-item-wrapper">'),!0===an.insertClose?r.first().prepend(d):gn(an.insertClose)&&On(d,an.insertClose,r.first().add(r.first().siblings("ul")))}}(h,p,0,an.navTitle)},I=function(e){return function(n){"left"!=an.position&&"right"!=an.position||(E=n.touches[0].clientX,L=n.touches[0].clientY,"doc"==e?A||(dn.addEventListener("touchmove",_,un),dn.addEventListener("touchend",F,un)):(A=!0,p[0].addEventListener("touchmove",G,un),p[0].addEventListener("touchend",Q,un)))}},W=function(n,e){rn.addEventListener("touchmove",xn,un),v.css("visibility","visible"),p.css(Cn("transition"),"none"),Tn(p,n,an.position),u&&(u.css(Cn("transition"),"none"),Tn(u,e,an.position))},X=function(n){var e=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],t=2<arguments.length&&void 0!==arguments[2]&&arguments[2],a=3<arguments.length&&void 0!==arguments[3]&&arguments[3];rn.removeEventListener("touchmove",xn,un),p.css(Cn("transition"),""),Tn(p,t,an.position),u&&(u.css(Cn("transition"),""),Tn(u,a,an.position)),"open"==n?V():(J(),e?setTimeout(function(){v.css("visibility","")},r):v.css("visibility",""))},_=function(n){var e=0-(E-n.touches[0].clientX),t="overlap"===an.levelOpen?K()*an.levelSpacing:0,a=k+t;e="left"==an.position?Math.min(Math.max(e,0),a):Math.abs(Math.min(Math.max(e,-a),0)),("left"==an.position&&E<20||"right"==an.position&&E>fn.width()-20)&&(B=!0,W(0-(k-e),Math.abs(e)))},F=function n(e){if(dn.removeEventListener("touchmove",_),dn.removeEventListener("touchend",n),B){var t=e.changedTouches[e.changedTouches.length-1],a=0-(E-t.clientX),o="overlap"===an.levelOpen?K()*an.levelSpacing:0,i=k+o;(a="left"==an.position?Math.min(Math.max(a,0),i):Math.abs(Math.min(Math.max(a,-i),0)))?X(70<a?"open":"close"):X("close",!1),L=E=null,B=!1}},G=function(n){var e=0-(E-n.touches[0].clientX),t=0-(L-n.touches[0].clientY);if(!(Math.abs(e)<Math.abs(t))){var a="overlap"===an.levelOpen?K()*an.levelSpacing:0,o=k+a;e="left"==an.position?Math.min(Math.max(e,-o),0):Math.min(Math.max(e,0),o),("left"==an.position&&e<0||"right"==an.position&&0<e)&&(B=!0,W(-Math.abs(e)+a,o-Math.abs(e)))}},Q=function n(e){if(p[0].removeEventListener("touchmove",G),p[0].removeEventListener("touchend",n),A=!1,B){var t=e.changedTouches[e.changedTouches.length-1],a=0-(E-t.clientX),o="overlap"===an.levelOpen?K()*an.levelSpacing:0,i=k+o;(a="left"==an.position?Math.abs(Math.min(Math.max(a,-i),0)):Math.abs(Math.min(Math.max(a,0),i)))==i?X("close",!1):50<a?X("close"):X("open",!0,o,i),L=E=null,B=!1}};j(),H(),q(),!0===an.removeOriginalNav&&e.remove(),"prepend"===an.bodyInsert?tn.prepend(v):"append"===an.bodyInsert&&tn.append(v),!0===an.expanded&&(g=!0,V()),an.swipeGestures&&(p[0].addEventListener("touchstart",I("nav"),un),dn.addEventListener("touchstart",I("doc"),un)),fn.on("keydown",function(n){if(z()&&("Escape"===n.key||27===n.keyCode)){var e=K();0===e?(J(),P()):(nn(e),N(null,e-1))}});var U=function(n,e,t){var a=sn("#".concat(y,"-").concat(n,"-").concat(e));if(a.length){var o=a.val(),i=a.parent("li"),c=i.closest(".nav-wrapper");if(a.prop("checked",!1),c.removeClass("sub-level-open"),i.removeClass("level-open"),i.children(".nav-item-wrapper").children("[aria-controls]").attr("aria-expanded",!1),-1!==T.indexOf(o)&&T.splice(T.indexOf(o),1),t&&"overlap"===an.levelOpen&&(c.off("click").on("click",yn),Tn(p,(n-1)*an.levelSpacing,an.position),u)){var l="x"===wn(an.position)?k:C;Tn(u,l+(n-1)*an.levelSpacing,an.position)}}};en.getSettings=function(){return Object.assign({},an)},en.isOpen=z,en.open=V,en.close=J,en.update=function(n,e){if(on=[],"object"===_typeof(n)){for(var t in n)an[t]!==n[t]&&on.push(t);an=sn.extend({},an,n)}if(!0===n||!0===e){if(an.removeOriginalNav)return void console.warn("%c! HC Offcanvas Nav:%c Can't update because original navigation has been removed. Disable `removeOriginalNav` option.","color: #fa253b","color: default");j(!0),H(),q(!0)}else j(!0),q(!0)}}else console.error("%c! HC Offcanvas Nav:%c Menu must contain <ul> element.","color: #fa253b","color: default");function Y(){var n=sn(this),e=n.data("level"),t=n.data("index");n.prop("checked")?Z(e,t):nn(e,t)}function $(){return!1!==an.levelOpen&&"none"!==an.levelOpen}function z(){return m}function K(){return T.length?p.find(".hc-chk").filter("[value=".concat(T[T.length-1],"]")).data("level"):0}function V(n,e){if((!z()||void 0!==e)&&(function(){if(!z()){if(m=!0,v.css("visibility","visible").attr("aria-hidden",!1).addClass(cn),f.addClass("toggle-open"),"expand"===an.levelOpen&&O&&clearTimeout(O),an.disableBody&&(x=vn.scrollTop()||pn.scrollTop()||tn.scrollTop(),dn.documentElement.scrollHeight>dn.documentElement.clientHeight&&pn.addClass("hc-nav-yscroll"),tn.addClass("hc-nav-open"),x&&tn.css("top",-x)),u){var n="x"===wn(an.position)?k:C;Tn(u,n,an.position)}if(g)return g=!1;setTimeout(function(){en.trigger("open",sn.extend({},an))},r)}}(),$())){var t;if("number"==typeof n&&"number"==typeof e){if(!(t=sn("#".concat(y,"-").concat(n,"-").concat(e))).length)return void console.warn("HC Offcanvas Nav: level ".concat(n," doesn't have index ").concat(e))}else b?(t=p.find(".hc-chk").filter("[value=".concat(b,"]")),!an.closeActiveLevel&&an.closeOpenLevels||(b=null)):!1===an.closeOpenLevels&&(t=p.find(".hc-chk").filter(":checked").last());if(t&&t.length){var a=[];n=t.data("level"),e=t.data("index"),1<n&&(t.parents(".nav-wrapper").each(function(){var n=sn(this),e=n.data("level");0<e&&a.push({level:e,index:n.data("index")})}),a=a.reverse()),a.push({level:n,index:e});for(var o=0;o<a.length;o++)Z(a[o].level,a[o].index,!1)}}}function J(){if(z()){if(m=!1,u&&Tn(u,!1),v.removeClass(cn).attr("aria-hidden",!0),p.removeAttr("style"),f.removeClass("toggle-open"),"expand"===an.levelOpen&&-1!==["top","bottom"].indexOf(an.position)?nn(0):$()&&(O=setTimeout(function(){nn(0)},"expand"===an.levelOpen?r:0)),an.disableBody&&(tn.removeClass("hc-nav-open"),pn.removeClass("hc-nav-yscroll"),x)){if(tn.css("top","").scrollTop(x),pn.scrollTop(x),"bottom"===an.position){var n=x;setTimeout(function(){tn.scrollTop(n),pn.scrollTop(n)},0)}x=0}setTimeout(function(){v.css("visibility",""),en.trigger("close.$",sn.extend({},an)),en.trigger("close.once",sn.extend({},an)).off("close.once")},r)}}function R(n){n.preventDefault(),n.stopPropagation(),m?J():V()}function Z(n,e){var t=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],a=sn("#".concat(y,"-").concat(n,"-").concat(e)),o=a.val(),i=a.parent("li"),c=i.closest(".nav-wrapper"),l=i.children(".nav-wrapper");if(!1===t&&l.css("transition","none"),a.prop("checked",!0),c.addClass("sub-level-open"),i.addClass("level-open"),i.children(".nav-item-wrapper").children("[aria-controls]").attr("aria-expanded",!0),!1===t&&setTimeout(function(){l.css("transition","")},r),-1===T.indexOf(o)&&T.push(o),"overlap"===an.levelOpen&&(c.on("click",function(){return nn(n,e)}),Tn(p,n*an.levelSpacing,an.position),u)){var s="x"===wn(an.position)?k:C;Tn(u,s+n*an.levelSpacing,an.position)}M&&(N(0,n,e),M=!1)}function nn(n,e){for(var t=n;t<=Object.keys(w).length;t++)if(t==n&&void 0!==e)U(n,e,!0);else if(0!==n||an.closeOpenLevels)for(var a=0;a<w[t];a++)U(t,a,t==n);M&&(N(null,n-1),M=!1)}})}})}(jQuery,"undefined"!=typeof window?window:this);