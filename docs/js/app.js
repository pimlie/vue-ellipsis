(function(t){function e(e){for(var l,s,a=e[0],r=e[1],d=e[2],g=0,p=[];g<a.length;g++)s=a[g],o[s]&&p.push(o[s][0]),o[s]=0;for(l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],l=!0,a=1;a<n.length;a++){var r=n[a];0!==o[r]&&(l=!1)}l&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var l={},o={app:0},i=[];function s(e){if(l[e])return l[e].exports;var n=l[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=l,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)s.d(n,l,function(e){return t[e]}.bind(null,l));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],r=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var c=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var l=n("64a9"),o=n.n(l);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var l=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("div",{staticClass:"demos"},[n("h3",[t._v("引入")]),n("code",[t._v("import Ellipsis from '@hyjican/vue-ellipsis'")]),n("code",[t._v("Vue.use(Ellipsis)")]),n("component-demo",{staticStyle:{float:"left"}}),n("directive-demo",{staticStyle:{float:"right"}})],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticStyle:{float:"left"}},[n("span",[t._v("vue-ellipsis")]),n("small",[t._v("Customize ellipsis-like "),n("b",[t._v("directive")]),t._v(" for Vue2. ")])]),n("div",{staticStyle:{float:"right"}},[n("span",[t._v("仓库:")]),n("a",{attrs:{href:"https://github.com/hyjiacan/vue-ellipsis"}},[t._v("Github")]),n("a",{attrs:{href:"https://gitee.com/hyjiacan/vue-ellipsis"}},[t._v("Gitee")])])])}],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("h1",[t._v("组件")]),n("code",[t._v('\n        <ellipsis position="start|middle|end" show-title="always|none|auto" :rows="1" scale fill="###"/>\n    ')]),n("h2",[t._v("自动缩小文字")]),n("ellipsis",{staticClass:"sample-item",attrs:{scale:""}},[t._v("|这里有一些文字这里有一些文字这里有一些文字字这里有一些文字字这里有一些文字|")]),n("code",[t._v("scale")]),n("h2",[t._v("左边")]),n("ellipsis",{staticClass:"sample-item",staticStyle:{color:"red"},attrs:{position:"start",rows:t.rows,title:"自定义title"}},[t._v("\n        很长很long long long long long long lo长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长long long long long\n        long long lo的文字，"+t._s(t.timeout)+"秒后显示所有文字\n    ")]),n("code",[t._v('position="start" :rows="rows"')]),n("ellipsis",{staticClass:"sample-item",staticStyle:{"font-size":"24px"},attrs:{position:"start"}},[t._v("\n        这段文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长，会显示 title 提示框\n    ")]),n("code",[t._v('position="start"')]),n("ellipsis",{staticClass:"sample-item",staticStyle:{"font-size":"40px"},attrs:{position:"start",delay:"",fill:"------"}},[t._v("\n        很长很长long long long long long long lo很长很long long long long long long lo长很长很长很长很长long long long long long\n        long lo很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字\n    ")]),n("code",[t._v('position="start" delay fill="------"')]),n("ellipsis",{staticClass:"sample-item",attrs:{position:"start",rows:2,fill:"------"}},[t._v("long long long long long long long\n        long long\n        long\n        long long long\n        long long long long long long long long long long text\n    ")]),n("code",[t._v('position="start" :rows="2" fill="------"')]),n("h2",[t._v("中间")]),n("ellipsis",{staticClass:"sample-item",attrs:{position:"middle"}},[t._v("\n        这段文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长，但是并不会显示 title 提示框\n    ")]),n("code",[t._v('position="middle"')]),n("ellipsis",{staticClass:"sample-item",attrs:{position:"middle"}},[t._v("long long long long long long long long long long long long long\n        long long long long long long long long long long text\n    ")]),n("code",[t._v('position="middle"')]),n("ellipsis",{staticClass:"sample-item",attrs:{position:"middle","show-title":"none",fill:"------"}},[t._v("\n        这段文字不会显示 中间的填充数据中间的填充数据中间的填充数据 title\n    ")]),n("code",[t._v('position="middle" show-title="none" fill="------"')]),n("h2",[t._v("右边")]),n("ellipsis",{staticClass:"sample-item",attrs:{position:"end"}},[t._v("\n        "+t._s(t.text)+"\n    ")]),n("code",[t._v('position="end"')]),n("ellipsis",{staticClass:"sample-item",attrs:{position:"end",showTitle:"always"}},[t._v("\n        这段文字始终显示 title\n    ")]),n("code",[t._v('position="end" showTitle="always"')]),n("ellipsis",{staticClass:"sample-item",attrs:{position:"end",fill:"------"}},[t._v("\n        "+t._s(t.text)+"\n    ")]),n("code",[t._v('position="end" fill="------"')]),n("ellipsis",{staticClass:"sample-item",attrs:{position:"end",rows:3,fill:"------"}},[t._v("long long long long long\n        long long\n        "),n("span",[t._v("long")]),n("b",[t._v("long long long long long")]),n("div",[t._v("long long long long long long long long long long text")]),t._v("\n        long long long long long long long long long long text\n        long long long long long long long long long long text\n        long long long long long long long long long long text\n    ")]),n("code",[t._v('position="end" :rows="3" fill="------"')])],1)},a=[],r={name:"ComponentDemo",data:function(){return{rows:1,text:"很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字",timeout:10}},mounted:function(){var t=this,e=setInterval(function(){t.timeout--,t.timeout>0||(clearInterval(e),t.rows=0,t.text="不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长的文字")},1e3)}},d=r,c=n("2877"),g=Object(c["a"])(d,s,a,!1,null,null,null),p=g.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("h1",[t._v("指令")]),n("code",[t._v('\n        <div v-ellipsis.[start|middle|end].[always|none|auto].scale="1" data-ellipsis="###"/>\n    ')]),n("h2",[t._v("自动缩小文字")]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.scale",modifiers:{scale:!0}}],staticClass:"sample-item"},[t._v("\n        |这里有一些文字这里有一些文字这里有一些文字字这里有一些文字字这里有一些文字|\n    ")]),n("code",[t._v("v-ellipsis.scale")]),n("h2",[t._v("左边")]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.start",value:t.rows,expression:"rows",modifiers:{start:!0}}],staticClass:"sample-item",staticStyle:{color:"red"},attrs:{title:"自定义title"}},[t._v("\n        很长很long long long long long long lo长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长long long long long\n        long long lo的文字，"+t._s(t.timeout)+"秒后显示所有文字\n    ")]),n("code",[t._v('v-ellipsis.start="rows"')]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.start",modifiers:{start:!0}}],staticClass:"sample-item",staticStyle:{"font-size":"24px"}},[t._v("\n        这段文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长，会显示 title 提示框\n    ")]),n("code",[t._v("v-ellipsis.start")]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.delay.start",modifiers:{delay:!0,start:!0}}],staticClass:"sample-item",staticStyle:{"font-size":"40px"},attrs:{"data-ellipsis":"------"}},[t._v("\n        很长很长long long long long long long lo很长很long long long long long long lo长很长很长很长很长long long long long long\n        long lo很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字\n    ")]),n("code",[t._v('v-ellipsis.delay.start data-ellipsis="------"')]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.start",value:2,expression:"2",modifiers:{start:!0}}],staticClass:"sample-item",attrs:{"data-ellipsis":"------"}},[t._v("long long long long long long long\n        long long\n        long\n        long long long\n        long long long long long long long long long long text\n    ")]),n("code",[t._v('v-ellipsis.start="2" data-ellipsis="------"')]),n("h2",[t._v("中间")]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.middle",modifiers:{middle:!0}}],staticClass:"sample-item"},[t._v("\n        这段文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长，但是并不会显示 title 提示框\n    ")]),n("code",[t._v("v-ellipsis.middle")]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.middle",modifiers:{middle:!0}}],staticClass:"sample-item"},[t._v("long long long long long long long long long long long long long\n        long long long long long long long long long long text\n    ")]),n("code",[t._v("v-ellipsis.middle")]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.middle.none",modifiers:{middle:!0,none:!0}}],staticClass:"sample-item",attrs:{"data-ellipsis":"------"}},[t._v("\n        这段文字不会显示 中间的填充数据中间的填充数据中间的填充数据 title\n    ")]),n("code",[t._v('v-ellipsis.middle.none data-ellipsis="------"')]),n("h2",[t._v("右边")]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.end",modifiers:{end:!0}}],staticClass:"sample-item"},[t._v("\n        "+t._s(t.text)+"\n    ")]),n("code",[t._v("v-ellipsis.end")]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.end.always",modifiers:{end:!0,always:!0}}],staticClass:"sample-item"},[t._v("\n        这段文字始终显示 title\n    ")]),n("code",[t._v("v-ellipsis.end.always")]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.end",modifiers:{end:!0}}],staticClass:"sample-item",attrs:{"data-ellipsis":"------"}},[t._v("\n        "+t._s(t.text)+"\n    ")]),n("code",[t._v('v-ellipsis.end data-ellipsis="------"')]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.end",value:3,expression:"3",modifiers:{end:!0}}],staticClass:"sample-item",attrs:{"data-ellipsis":"------"}},[t._v("long long long long long\n        long long\n        "),n("span",[t._v("long")]),n("b",[t._v("long long long long long")]),n("div",[t._v("long long long long long long long long long long text")]),t._v("\n        long long long long long long long long long long text\n        long long long long long long long long long long text\n    ")]),n("code",[t._v('v-ellipsis.end="3" data-ellipsis="------"')])])},f=[],u={name:"DirectiveDemo",data:function(){return{rows:1,text:"很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字",timeout:10}},mounted:function(){var t=this,e=setInterval(function(){t.timeout--,t.timeout>0||(clearInterval(e),t.rows=0,t.text="不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长的文字")},1e3)}},m=u,h=Object(c["a"])(m,v,f,!1,null,null,null),y=h.exports,w={name:"app",components:{ComponentDemo:p,DirectiveDemo:y}},_=w,x=(n("034f"),Object(c["a"])(_,o,i,!1,null,null,null)),b=x.exports,S=n("768b"),C=(n("ac6a"),n("456d"),n("9ec8"),n("a481"),n("6c7b"),n("5df3"),n("f400"),new Map),W=document.querySelector("#vue-ellipsis-proxy"),P={init:function(){W||(W=P.createProxy(document.body),W.id="vue-ellipsis-proxy",W.style.top="-99999px",W.style.left="0",W.style.position="fixed",W.style.visibility="hidden")},validate:function(t,e,n){return-1===["start","middle","end"].indexOf(e)?(console.warn('Invalid ellipse position value "'.concat(e,'", available: start, middle, end')),!1):t>1&&"middle"===e?(console.warn('Ellipsis accept single row while position is "middle", got value "'.concat(t,'"')),!1):!(t>1&&n)||(console.warn('Ellipsis accept single row while "scale" enabled, got value "'.concat(t,'"')),!1)},destroy:function(t){if(C.has(t)){var e=C.get(t),n=e.contentProxy,l=e.fillProxy,o=e.wordProxy;W.removeChild(n),W.removeChild(l),W.removeChild(o),C.delete(t)}},createProxy:function(t,e,n){var l=document.createElement("div");return e&&l.setAttribute("data-proxy-id",e),n&&l.setAttribute("data-proxy-type",n),t.appendChild(l),l},getProxy:function(t,e){return C.has(e)?C.get(e):(C.set(e,{contentProxy:P.createProxy(W,e,"content"),fillProxy:P.createProxy(W,e,"fill"),wordProxy:P.createProxy(W,e,"word")}),C.get(e))},setProxyStyle:function(t,e){t.style.fontSize=e.fontSize,t.style.fontWeight=e.fontWeight,t.style.letterSpacing=e.letterSpacing,t.style.wordSpacing=e.wordSpacing,t.style.wordWrap=e.wordWrap,t.style.fontFamily=e.fontFamily,t.style.transform=e.transform,t.style.whiteSpace="nowrap",t.style.wordBreak="keep-all",t.style.top="-99999px",t.style.left="0",t.style.position="fixed"},getStyle:function(t){return window.getComputedStyle(t)},isAlphabet:function(t){return/^[a-z']$/.test(t)},isSeparator:function(t){return/[\s\t\r\n,.+=-_:;"/<>!@#$%^&*()|`~\\[\]{}]/.test(t)},getPrevWord:function(t,e){if(P.isSeparator(t[e]))return" ";for(var n=[];e>=0;e--){var l=t[e];if(P.isSeparator(l))break;if(n.unshift(l),!P.isAlphabet(l))break}return n.join("")},getNextWord:function(t,e){if(P.isSeparator(t[e]))return" ";for(var n=[];e<t.length;e++){var l=t[e];if(P.isSeparator(l))break;if(n.push(l),!P.isAlphabet(l))break}return n.join("")},getWordWidth:function(t,e){return t.innerHTML=" "===e?"&nbsp;":e,parseFloat(window.getComputedStyle(t).width)},getMeta:function(t,e,n){var l=n.content,o=n.fill;if(!t)return{};var i=P.getProxy(t,e),s=i.wordProxy,a=i.contentProxy,r=i.fillProxy;a.innerHTML=l;var d=P.getStyle(t);P.setProxyStyle(s,d),P.setProxyStyle(a,d);var c=0;o.length&&(r.innerHTML=o,P.setProxyStyle(r,d),c=parseFloat(P.getStyle(r).width));var g=parseFloat(P.getStyle(a).width),p=parseFloat(d.width),v=parseFloat(d.maxWidth),f="break-all"===d.wordBreak;if(!p&&!v)throw new Error('You should specify "width" or "max-width" for ellipsis');return p||(p=v),{fillWidth:c,contentWidth:g,containerWidth:p,containerWordbreak:f,containerMaxWidth:v,contentProxy:a,containerStyle:d,wordProxy:s}},clearContent:function(t){return t.replace(/[\r\n]/g," ").replace(/\s+/g," ").trim()},getScaleInfo:function(t){var e=t.containerWidth,n=t.contentProxy,l=t.contentWidth,o=t.containerStyle,i={height:parseFloat(P.getStyle(n).height),rate:e/l,fontsize:parseFloat(o.fontSize)};return i.viewBox="0 -".concat(i.height/2,"0 ").concat(e," ").concat(i.height),i.scale=i.fontsize*i.rate,i.scaled=Math.round(i.fontsize)>Math.round(i.scale),i},makeLeft:function(t,e){for(var n=t.containerWidth,l=t.fillWidth,o=t.wordProxy,i=t.containerWordbreak,s=e.content,a=e.fill,r=e.rows,d="",c=s.length-1,g=r;g>=1;g--)for(var p=1===g?n-l:n;c>=0;){var v=i?s[c]:P.getPrevWord(s,c);if(c-=v.length,p-=P.getWordWidth(o,v),p<0)break;d=v+d}return"".concat(a).concat(d)},makeCenter:function(t,e){for(var n=t.containerWidth,l=t.fillWidth,o=t.wordProxy,i=e.content,s=e.fill,a=n-l,r=i.length,d="",c="",g=0;g<r;g++){var p=i[g];if(a-=P.getWordWidth(o,p),a<0)break;if(d+=p,p=i[r-1-g],a-=P.getWordWidth(o,p),a<0)break;c=p+c}return"".concat(d).concat(s).concat(c)},makeRight:function(t,e){for(var n=t.containerWidth,l=t.fillWidth,o=t.wordProxy,i=t.containerWordbreak,s=e.content,a=e.fill,r=e.rows,d=s.length,c="",g=0,p=0;p<r;p++)for(var v=p===r-1?n-l:n;g<d;){var f=i?s[g]:P.getNextWord(s,g);if(g+=f.length,v-=P.getWordWidth(o,f),v<0)break;if(c+=f,g===d)return c}return"".concat(c).concat(a)},make:function(t,e){if(t.contentWidth<=t.containerWidth||t.contentWidth+t.fillWidth<=t.containerWidth)return[!1,e.content];switch(e.position){case"start":return[!0,P.makeLeft(t,e)];case"middle":return[!0,P.makeCenter(t,e)];case"end":return[!0,P.makeRight(t,e)];default:return[!1,e.content]}},newId:function(){return"".concat((new Date).getTime()).concat(Math.round(1e3*Math.random()))}};P.init();var k=P;function j(t,e,n,l,o){var i=t.dataset.ellipsis;i=i||"...";var s=k.newId();t.classList.add("vue-ellipsis"),t.setAttribute("data-ellipsis-id",s);var a={content:e,fill:i,rows:l,position:n},r=k.getMeta(t,s,a);if(0!==l&&Object.keys(r).length){var d,c;if(o.scale){var g=M(r,a),p=Object(S["a"])(g,2);d=p[0],c=p[1]}else{var v=k.make(r,a),f=Object(S["a"])(v,2);d=f[0],c=f[1]}O(t,d,e,c,o,s)}else O(t,!1,e,e,o,s)}function O(t,e,n,l,o,i){k.destroy(i),t.innerHTML=l,o.always?t.title=n:e&&!o.none&&(t.title=n)}function M(t,e){var n=e.content,l=k.getScaleInfo(t),o=l.height,i=l.viewBox,s=l.scale,a=l.scaled;return[a,'<svg viewBox="'.concat(i,'" height="').concat(o,'px"><text x="0" y="0" style="font-size: ').concat(s,'px;">').concat(n,"</text></svg>")]}function T(t){var e=[];return t.children.forEach(function(t){e.push(t.text),t.children&&t.children.length&&e.push(T(t))}),e.join("")}function N(t,e,n){var l=e.modifiers,o=e.value,i="middle";if(l.start?i="start":l.middle?i="middle":l.end&&(i="end"),k.validate(a,i,l.scale)){var s=T(n);if(s)if(0!==o){var a=o||1;s=k.clearContent(s),k.validate(a,i,l.scale)&&(l.delay?setTimeout(function(){j(t,s,i,a,l)},parseInt(t.dataset.delay)||200):j(t,s,i,a,l))}else t.innerHTML=s}}function z(t){k.destroy(t)}var E={inserted:N,update:N,unbind:z},I=(n("c5f6"),{name:"Ellipsis",props:{fill:{type:String,default:"..."},position:{type:String,default:"end"},showTitle:{type:String,default:""},rows:{type:Number,default:1},scale:{type:Boolean,default:!1},content:{type:String}},data:function(){return{id:k.newId()}},mounted:function(){k.validate(this.rows,this.position,this.scale),this.content||this.$forceUpdate()},render:function(t){var e,n,l=k.clearContent(this.content||this.getText()),o={content:l,fill:this.fill,rows:this.rows,position:this.position},i=k.getMeta(this.$el,this.id,o);if(0===this.rows||!Object.keys(i).length)return this.doRender(t,!1,l,l);if(this.scale){var s=this.makeSvg(t,i,o),a=Object(S["a"])(s,2);e=a[0],n=a[1]}else{var r=k.make(i,o),d=Object(S["a"])(r,2);e=d[0],n=d[1]}return this.doRender(t,e,l,n)},methods:{doRender:function(t,e,n,l){k.destroy(this.id);var o=void 0;return("always"===this.showTitle||e&&"none"!==this.showTitle)&&(o=n),t("div",{attrs:{class:"vue-ellipsis","data-ellipsis-id":this.id,title:o}},[l])},getText:function(){var t=this.$slots.default;return t&&0!==t.length?t.map(function(t){return t.text}).join(""):""},makeSvg:function(t,e,n){var l=n.content,o=k.getScaleInfo(e),i=o.height,s=o.viewBox,a=o.scale,r=o.scaled;return[r,t("svg",{attrs:{viewBox:s,height:"".concat(i,"px")}},[t("text",{attrs:{x:"0",y:"0",style:"font-size: ".concat(a,"px;")}},l)])]}},beforeDestroy:function(){k.destroy(this.id)}});E.install=function(t){t.directive("ellipsis",E),t.component("ellipsis",I)};var $=E;l["a"].config.productionTip=!1,l["a"].use($),new l["a"]({render:function(t){return t(b)}}).$mount("#app")},"64a9":function(t,e,n){}});