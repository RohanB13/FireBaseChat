/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*! @license Firebase v2.0.6 - License: https://www.firebase.com/terms/terms-of-service.html */ (function() {var h,aa=this;function n(a){return void 0!==a}function ba(){}function ca(a){a.Qb=function(){return a.ef?a.ef:a.ef=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)}
function la(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var ma=Date.now||function(){return+new Date};function na(a,b){function c(){}c.prototype=b.prototype;a.oc=b.prototype;a.prototype=new c;a.Ag=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function oa(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function pa(){this.Id=void 0}
function qa(a,b,c){switch(typeof b){case "string":ra(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],qa(a,a.Id?a.Id.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),ra(f,c),
c.push(":"),qa(a,a.Id?a.Id.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var sa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ta=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function ra(a,b){b.push('"',a.replace(ta,function(a){if(a in sa)return sa[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return sa[a]=e+b.toString(16)}),'"')};function ua(a){return"undefined"!==typeof JSON&&n(JSON.parse)?JSON.parse(a):oa(a)}function t(a){if("undefined"!==typeof JSON&&n(JSON.stringify))a=JSON.stringify(a);else{var b=[];qa(new pa,a,b);a=b.join("")}return a};function u(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function v(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function va(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function wa(a){var b={};va(a,function(a,d){b[a]=d});return b};function xa(a){this.xc=a;this.Hd="firebase:"}h=xa.prototype;h.set=function(a,b){null==b?this.xc.removeItem(this.Hd+a):this.xc.setItem(this.Hd+a,t(b))};h.get=function(a){a=this.xc.getItem(this.Hd+a);return null==a?null:ua(a)};h.remove=function(a){this.xc.removeItem(this.Hd+a)};h.ff=!1;h.toString=function(){return this.xc.toString()};function ya(){this.ha={}}ya.prototype.set=function(a,b){null==b?delete this.ha[a]:this.ha[a]=b};ya.prototype.get=function(a){return u(this.ha,a)?this.ha[a]:null};ya.prototype.remove=function(a){delete this.ha[a]};ya.prototype.ff=!0;function za(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new xa(b)}}catch(c){}return new ya}var Aa=za("localStorage"),Ba=za("sessionStorage");function Ca(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Cb=b;this.yb=c;this.yg=d;this.Gd=e||"";this.Ka=Aa.get("host:"+a)||this.host}function Da(a,b){b!==a.Ka&&(a.Ka=b,"s-"===a.Ka.substr(0,2)&&Aa.set("host:"+a.host,a.Ka))}Ca.prototype.toString=function(){var a=(this.Cb?"https://":"http://")+this.host;this.Gd&&(a+="<"+this.Gd+">");return a};function Ea(){this.Ta=-1};function Fa(){this.Ta=-1;this.Ta=64;this.R=[];this.be=[];this.Af=[];this.Dd=[];this.Dd[0]=128;for(var a=1;a<this.Ta;++a)this.Dd[a]=0;this.Rd=this.Tb=0;this.reset()}na(Fa,Ea);Fa.prototype.reset=function(){this.R[0]=1732584193;this.R[1]=4023233417;this.R[2]=2562383102;this.R[3]=271733878;this.R[4]=3285377520;this.Rd=this.Tb=0};
function Ga(a,b,c){c||(c=0);var d=a.Af;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.R[0];c=a.R[1];for(var g=a.R[2],k=a.R[3],l=a.R[4],m,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),m=1518500249):(f=c^g^k,m=1859775393):60>e?(f=c&g|k&(c|g),m=2400959708):(f=c^g^k,m=3395469782),f=(b<<
5|b>>>27)+f+l+m+d[e]&4294967295,l=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.R[0]=a.R[0]+b&4294967295;a.R[1]=a.R[1]+c&4294967295;a.R[2]=a.R[2]+g&4294967295;a.R[3]=a.R[3]+k&4294967295;a.R[4]=a.R[4]+l&4294967295}
Fa.prototype.update=function(a,b){n(b)||(b=a.length);for(var c=b-this.Ta,d=0,e=this.be,f=this.Tb;d<b;){if(0==f)for(;d<=c;)Ga(this,a,d),d+=this.Ta;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Ta){Ga(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Ta){Ga(this,e);f=0;break}}this.Tb=f;this.Rd+=b};function Ha(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^ma()).toString(36)};var w=Array.prototype,Ia=w.indexOf?function(a,b,c){return w.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ja=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ka=w.filter?function(a,b,c){return w.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];b.call(c,l,k,a)&&(e[f++]=l)}return e},La=w.map?function(a,b,c){return w.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ma=w.reduce?function(a,b,c,d){d&&(b=q(b,d));return w.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;Ja(a,function(c,g){e=b.call(d,e,c,g,a)});return e},Na=w.every?function(a,b,c){return w.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=
p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Oa(a,b){var c=Pa(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function Pa(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Qa(a,b){var c=Ia(a,b);0<=c&&w.splice.call(a,c,1)}function Ra(a,b,c,d){return w.splice.apply(a,Sa(arguments,1))}function Sa(a,b,c){return 2>=arguments.length?w.slice.call(a,b):w.slice.call(a,b,c)}
function Ta(a,b){a.sort(b||Ua)}function Ua(a,b){return a>b?1:a<b?-1:0};var Va;a:{var Wa=aa.navigator;if(Wa){var Xa=Wa.userAgent;if(Xa){Va=Xa;break a}}Va=""}function Ya(a){return-1!=Va.indexOf(a)};var Za=Ya("Opera")||Ya("OPR"),$a=Ya("Trident")||Ya("MSIE"),ab=Ya("Gecko")&&-1==Va.toLowerCase().indexOf("webkit")&&!(Ya("Trident")||Ya("MSIE")),bb=-1!=Va.toLowerCase().indexOf("webkit");(function(){var a="",b;if(Za&&aa.opera)return a=aa.opera.version,ha(a)?a():a;ab?b=/rv\:([^\);]+)(\)|;)/:$a?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:bb&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(Va))?a[1]:"");return $a&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var cb=null,db=null,eb=null;function fb(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");gb();for(var c=b?db:cb,d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,k=g?a[e+1]:0,l=e+2<a.length,m=l?a[e+2]:0,r=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|m>>6,m=m&63;l||(m=64,g||(k=64));d.push(c[r],c[f],c[k],c[m])}return d.join("")}
function gb(){if(!cb){cb={};db={};eb={};for(var a=0;65>a;a++)cb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),db[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),eb[db[a]]=a}};var hb=function(){var a=1;return function(){return a++}}();function x(a,b){if(!a)throw ib(b);}function ib(a){return Error("Firebase INTERNAL ASSERT FAILED:"+a)}
function jb(a){try{var b;if("undefined"!==typeof atob)b=atob(a);else{gb();for(var c=eb,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],g=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var l=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==g||null==k||null==l)throw Error();d.push(f<<2|g>>4);64!=k&&(d.push(g<<4&240|k>>2),64!=l&&d.push(k<<6&192|l))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Sa(d,c,
c+8192));b=a}}return b}catch(m){kb("base64Decode failed: ",m)}return null}function lb(a){var b=mb(a);a=new Fa;a.update(b);var b=[],c=8*a.Rd;56>a.Tb?a.update(a.Dd,56-a.Tb):a.update(a.Dd,a.Ta-(a.Tb-56));for(var d=a.Ta-1;56<=d;d--)a.be[d]=c&255,c/=256;Ga(a,a.be);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.R[d]>>e&255,++c;return fb(b)}
function nb(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+nb.apply(null,arguments[c]):"object"===typeof arguments[c]?b+t(arguments[c]):b+arguments[c],b+=" ";return b}var ob=null,pb=!0;function kb(a){!0===pb&&(pb=!1,null===ob&&!0===Ba.get("logging_enabled")&&qb(!0));if(ob){var b=nb.apply(null,arguments);ob(b)}}function rb(a){return function(){kb(a,arguments)}}
function sb(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+nb.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function tb(a){var b=nb.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function z(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+nb.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function ub(a){var b="",c="",d="",e=!0,f="https",g="";if(p(a)){var k=a.indexOf("//");0<=k&&(f=a.substring(0,k-1),a=a.substring(k+2));k=a.indexOf("/");-1===k&&(k=a.length);b=a.substring(0,k);a=a.substring(k+1);var l=b.split(".");if(3===l.length){k=l[2].indexOf(":");e=0<=k?"https"===f||"wss"===f:!0;c=l[1];d=l[0];g="";a=("/"+a).split("/");for(k=0;k<a.length;k++)if(0<a[k].length){l=a[k];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch(m){}g+="/"+l}d=d.toLowerCase()}else 2===l.length&&(c=l[0])}return{host:b,
domain:c,vg:d,Cb:e,scheme:f,Pc:g}}function vb(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function wb(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function xb(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=yb(a),d=yb(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function zb(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+t(b));}
function Ab(a){if("object"!==typeof a||null===a)return t(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=t(b[d]),c+=":",c+=Ab(a[b[d]]);return c+"}"}function Bb(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function Cb(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else A(a,b)}
function Db(a){x(!vb(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;a-=1)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;a-=1)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}var Eb=/^-?\d{1,10}$/;function yb(a){return Eb.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function Fb(a){try{a()}catch(b){setTimeout(function(){throw b;},Math.floor(0))}}function B(a,b){if(ha(a)){var c=Array.prototype.slice.call(arguments,1).slice();Fb(function(){a.apply(null,c)})}};function Gb(a,b,c,d){this.me=b;this.Ld=c;this.Rc=d;this.nd=a}Gb.prototype.Rb=function(){var a=this.Ld.hc();return"value"===this.nd?a.path:a.parent().path};Gb.prototype.oe=function(){return this.nd};Gb.prototype.Pb=function(){return this.me.Pb(this)};Gb.prototype.toString=function(){return this.Rb().toString()+":"+this.nd+":"+t(this.Ld.Xe())};function Hb(a,b,c){this.me=a;this.error=b;this.path=c}Hb.prototype.Rb=function(){return this.path};Hb.prototype.oe=function(){return"cancel"};
Hb.prototype.Pb=function(){return this.me.Pb(this)};Hb.prototype.toString=function(){return this.path.toString()+":cancel"};function Ib(a,b,c){this.Kb=a;this.mb=b;this.vc=c||null}h=Ib.prototype;h.pf=function(a){return"value"===a};h.createEvent=function(a,b){var c=b.w.m;return new Gb("value",this,new C(a.Wa,b.hc(),c))};h.Pb=function(a){var b=this.vc;if("cancel"===a.oe()){x(this.mb,"Raising a cancel event on a listener with no cancel callback");var c=this.mb;return function(){c.call(b,a.error)}}var d=this.Kb;return function(){d.call(b,a.Ld)}};h.Te=function(a,b){return this.mb?new Hb(this,a,b):null};
h.matches=function(a){return a instanceof Ib&&(!a.Kb||!this.Kb||a.Kb===this.Kb)&&a.vc===this.vc};h.cf=function(){return null!==this.Kb};function Jb(a,b,c){this.ba=a;this.mb=b;this.vc=c}h=Jb.prototype;h.pf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ba};h.Te=function(a,b){return this.mb?new Hb(this,a,b):null};h.createEvent=function(a,b){var c=b.hc().k(a.nb);return new Gb(a.type,this,new C(a.Wa,c,b.w.m),a.Rc)};
h.Pb=function(a){var b=this.vc;if("cancel"===a.oe()){x(this.mb,"Raising a cancel event on a listener with no cancel callback");var c=this.mb;return function(){c.call(b,a.error)}}var d=this.ba[a.nd];return function(){d.call(b,a.Ld,a.Rc)}};h.matches=function(a){if(a instanceof Jb){if(this.ba&&a.ba){var b=Kb(a.ba);if(b===Kb(this.ba)){if(1===b){var b=Lb(a.ba),c=Lb(this.ba);return c===b&&(!a.ba[b]||!this.ba[c]||a.ba[b]===this.ba[c])}return Mb(this.ba,function(b,c){return a.ba[c]===b})}return!1}return!0}return!1};
h.cf=function(){return null!==this.ba};function mb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,x(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function D(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function E(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
function F(a,b,c,d){if((!d||n(c))&&!ha(c))throw Error(E(a,b,d)+"must be a valid function.");}function Nb(a,b,c){if(n(c)&&(!ia(c)||null===c))throw Error(E(a,b,!0)+"must be a valid context object.");};var Ob=/[\[\].#$\/\u0000-\u001F\u007F]/,Pb=/[\[\].#$\u0000-\u001F\u007F]/;function Qb(a){return p(a)&&0!==a.length&&!Ob.test(a)}function Rb(a){return null===a||p(a)||ga(a)&&!vb(a)||ia(a)&&u(a,".sv")}function Sb(a,b,c){c&&!n(b)||Tb(E(a,1,c),b)}
function Tb(a,b,c,d){c||(c=0);d=d||[];if(!n(b))throw Error(a+"contains undefined"+Ub(d));if(ha(b))throw Error(a+"contains a function"+Ub(d)+" with contents: "+b.toString());if(vb(b))throw Error(a+"contains "+b.toString()+Ub(d));if(1E3<c)throw new TypeError(a+"contains a cyclic object value ("+d.slice(0,100).join(".")+"...)");if(p(b)&&b.length>10485760/3&&10485760<mb(b).length)throw Error(a+"contains a string greater than 10485760 utf8 bytes"+Ub(d)+" ('"+b.substring(0,50)+"...')");if(ia(b))for(var e in b)if(u(b,
e)){var f=b[e];if(".priority"!==e&&".value"!==e&&".sv"!==e&&!Qb(e))throw Error(a+" contains an invalid key ("+e+")"+Ub(d)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');d.push(e);Tb(a,f,c+1,d);d.pop()}}function Ub(a){return 0==a.length?"":" in property '"+a.join(".")+"'"}function Vb(a,b){if(!ia(b)||ea(b))throw Error(E(a,1,!1)+" must be an Object containing the children to replace.");Sb(a,b,!1)}
function Wb(a,b,c){if(vb(c))throw Error(E(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Rb(c))throw Error(E(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
function Xb(a,b,c){if(!c||n(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(E(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Yb(a,b,c,d){if((!d||n(c))&&!Qb(c))throw Error(E(a,b,d)+'was an invalid key: "'+c+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function Zb(a,b){if(!p(b)||0===b.length||Pb.test(b))throw Error(E(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function $b(a,b){if(".info"===G(b))throw Error(a+" failed: Can't modify data under /.info/");}function ac(a,b){if(!p(b))throw Error(E(a,1,!1)+"must be a valid credential (a string).");}function bc(a,b,c){if(!p(c))throw Error(E(a,b,!1)+"must be a valid string.");}
function cc(a,b,c,d){if(!d||n(c))if(!ia(c)||null===c)throw Error(E(a,b,d)+"must be a valid object.");}function dc(a,b,c){if(!ia(b)||null===b||!u(b,c))throw Error(E(a,1,!1)+'must contain the key "'+c+'"');if(!p(v(b,c)))throw Error(E(a,1,!1)+'must contain the key "'+c+'" with type "string"');};function ec(a,b){return xb(a.name,b.name)}function fc(a,b){return xb(a,b)};function gc(){}var hc={};function H(a){return q(a.compare,a)}gc.prototype.df=function(a,b){return 0!==this.compare(new I("[MIN_NAME]",a),new I("[MIN_NAME]",b))};gc.prototype.Ae=function(){return ic};function jc(a){this.Vb=a}na(jc,gc);h=jc.prototype;h.se=function(a){return!a.B(this.Vb).e()};h.compare=function(a,b){var c=a.K.B(this.Vb),d=b.K.B(this.Vb),c=c.he(d);return 0===c?xb(a.name,b.name):c};h.ye=function(a,b){var c=J(a),c=K.I(this.Vb,c);return new I(b,c)};
h.ze=function(){var a=K.I(this.Vb,kc);return new I("[MAX_NAME]",a)};h.toString=function(){return this.Vb};var L=new jc(".priority");function lc(){}na(lc,gc);h=lc.prototype;h.compare=function(a,b){return xb(a.name,b.name)};h.se=function(){throw ib("KeyIndex.isDefinedOn not expected to be called.");};h.df=function(){return!1};h.Ae=function(){return ic};h.ze=function(){return new I("[MAX_NAME]",K)};h.ye=function(a){x(p(a),"KeyIndex indexValue must always be a string.");return new I(a,K)};
h.toString=function(){return".key"};var mc=new lc;function nc(){this.yc=this.na=this.nc=this.ga=this.ka=!1;this.xb=0;this.Hb="";this.Bc=null;this.Xb="";this.Ac=null;this.Ub="";this.m=L}var oc=new nc;function pc(a){x(a.ga,"Only valid if start has been set");return a.Bc}function qc(a){x(a.ga,"Only valid if start has been set");return a.nc?a.Xb:"[MIN_NAME]"}function rc(a){x(a.na,"Only valid if end has been set");return a.Ac}function sc(a){x(a.na,"Only valid if end has been set");return a.yc?a.Ub:"[MAX_NAME]"}
function tc(a){x(a.ka,"Only valid if limit has been set");return a.xb}function uc(a){var b=new nc;b.ka=a.ka;b.xb=a.xb;b.ga=a.ga;b.Bc=a.Bc;b.nc=a.nc;b.Xb=a.Xb;b.na=a.na;b.Ac=a.Ac;b.yc=a.yc;b.Ub=a.Ub;b.m=a.m;return b}h=nc.prototype;h.ve=function(a){var b=uc(this);b.ka=!0;b.xb=a;b.Hb="";return b};h.we=function(a){var b=uc(this);b.ka=!0;b.xb=a;b.Hb="l";return b};h.xe=function(a){var b=uc(this);b.ka=!0;b.xb=a;b.Hb="r";return b};
h.Md=function(a,b){var c=uc(this);c.ga=!0;c.Bc=a;null!=b?(c.nc=!0,c.Xb=b):(c.nc=!1,c.Xb="");return c};h.md=function(a,b){var c=uc(this);c.na=!0;c.Ac=a;n(b)?(c.yc=!0,c.Ub=b):(c.Dg=!1,c.Ub="");return c};function vc(a,b){var c=uc(a);c.m=b;return c}function wc(a){return!(a.ga||a.na||a.ka)};function M(a,b,c,d){this.g=a;this.path=b;this.w=c;this.dc=d}
function xc(a){var b=null,c=null;a.ga&&(b=pc(a));a.na&&(c=rc(a));if(a.m===mc){if(a.ga){if("[MIN_NAME]"!=qc(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if(null!=b&&"string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.na){if("[MAX_NAME]"!=sc(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if(null!=
c&&"string"!==typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.m===L){if(null!=b&&!Rb(b)||null!=c&&!Rb(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(x(a.m instanceof jc,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
}function yc(a){if(a.ga&&a.na&&a.ka&&(!a.ka||""===a.Hb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function zc(a,b){if(!0===a.dc)throw Error(b+": You can't combine multiple orderBy calls.");}M.prototype.hc=function(){D("Query.ref",0,0,arguments.length);return new O(this.g,this.path)};M.prototype.ref=M.prototype.hc;
M.prototype.zb=function(a,b,c,d){D("Query.on",2,4,arguments.length);Xb("Query.on",a,!1);F("Query.on",2,b,!1);var e=Ac("Query.on",c,d);if("value"===a)Bc(this.g,this,new Ib(b,e.cancel||null,e.Ha||null));else{var f={};f[a]=b;Bc(this.g,this,new Jb(f,e.cancel,e.Ha))}return b};M.prototype.on=M.prototype.zb;
M.prototype.bc=function(a,b,c){D("Query.off",0,3,arguments.length);Xb("Query.off",a,!0);F("Query.off",2,b,!0);Nb("Query.off",3,c);var d=null,e=null;"value"===a?d=new Ib(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new Jb(e,null,c||null));e=this.g;d=".info"===G(this.path)?e.ud.hb(this,d):e.M.hb(this,d);Cc(e.Z,this.path,d)};M.prototype.off=M.prototype.bc;
M.prototype.gg=function(a,b){function c(g){f&&(f=!1,e.bc(a,c),b.call(d.Ha,g))}D("Query.once",2,4,arguments.length);Xb("Query.once",a,!1);F("Query.once",2,b,!1);var d=Ac("Query.once",arguments[2],arguments[3]),e=this,f=!0;this.zb(a,c,function(b){e.bc(a,c);d.cancel&&d.cancel.call(d.Ha,b)})};M.prototype.once=M.prototype.gg;
M.prototype.ve=function(a){z("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");D("Query.limit",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limit: First argument must be a positive integer.");if(this.w.ka)throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");var b=this.w.ve(a);yc(b);return new M(this.g,this.path,b,this.dc)};M.prototype.limit=M.prototype.ve;
M.prototype.we=function(a){D("Query.limitToFirst",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.w.ka)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new M(this.g,this.path,this.w.we(a),this.dc)};M.prototype.limitToFirst=M.prototype.we;
M.prototype.xe=function(a){D("Query.limitToLast",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.w.ka)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new M(this.g,this.path,this.w.xe(a),this.dc)};M.prototype.limitToLast=M.prototype.xe;
M.prototype.hg=function(a){D("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');Yb("Query.orderByChild",1,a,!1);zc(this,"Query.orderByChild");var b=vc(this.w,new jc(a));xc(b);return new M(this.g,this.path,b,!0)};M.prototype.orderByChild=M.prototype.hg;
M.prototype.ig=function(){D("Query.orderByKey",0,0,arguments.length);zc(this,"Query.orderByKey");var a=vc(this.w,mc);xc(a);return new M(this.g,this.path,a,!0)};M.prototype.orderByKey=M.prototype.ig;M.prototype.jg=function(){D("Query.orderByPriority",0,0,arguments.length);zc(this,"Query.orderByPriority");var a=vc(this.w,L);xc(a);return new M(this.g,this.path,a,!0)};M.prototype.orderByPriority=M.prototype.jg;
M.prototype.Md=function(a,b){D("Query.startAt",0,2,arguments.length);Sb("Query.startAt",a,!0);Yb("Query.startAt",2,b,!0);var c=this.w.Md(a,b);yc(c);xc(c);if(this.w.ga)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");n(a)||(b=a=null);return new M(this.g,this.path,c,this.dc)};M.prototype.startAt=M.prototype.Md;
M.prototype.md=function(a,b){D("Query.endAt",0,2,arguments.length);Sb("Query.endAt",a,!0);Yb("Query.endAt",2,b,!0);var c=this.w.md(a,b);yc(c);xc(c);if(this.w.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new M(this.g,this.path,c,this.dc)};M.prototype.endAt=M.prototype.md;
M.prototype.Of=function(a,b){D("Query.equalTo",1,2,arguments.length);Sb("Query.equalTo",a,!1);Yb("Query.equalTo",2,b,!0);if(this.w.ga)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.w.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Md(a,b).md(a,b)};M.prototype.equalTo=M.prototype.Of;
function Dc(a){a=a.w;var b={};a.ga&&(b.sp=a.Bc,a.nc&&(b.sn=a.Xb));a.na&&(b.ep=a.Ac,a.yc&&(b.en=a.Ub));if(a.ka){b.l=a.xb;var c=a.Hb;""===c&&(c=a.ga?"l":"r");b.vf=c}a.m!==L&&(b.i=a.m.toString());return b}M.prototype.Da=function(){var a=Ab(Dc(this));return"{}"===a?"default":a};
function Ac(a,b,c){var d={cancel:null,Ha:null};if(b&&c)d.cancel=b,F(a,3,d.cancel,!0),d.Ha=c,Nb(a,4,d.Ha);else if(b)if("object"===typeof b&&null!==b)d.Ha=b;else if("function"===typeof b)d.cancel=b;else throw Error(E(a,3,!0)+" must either be a cancel callback or a context object.");return d};function P(a,b){if(1==arguments.length){this.n=a.split("/");for(var c=0,d=0;d<this.n.length;d++)0<this.n[d].length&&(this.n[c]=this.n[d],c++);this.n.length=c;this.aa=0}else this.n=a,this.aa=b}function G(a){return a.aa>=a.n.length?null:a.n[a.aa]}function Q(a){return a.n.length-a.aa}function R(a){var b=a.aa;b<a.n.length&&b++;return new P(a.n,b)}P.prototype.toString=function(){for(var a="",b=this.aa;b<this.n.length;b++)""!==this.n[b]&&(a+="/"+this.n[b]);return a||"/"};
P.prototype.parent=function(){if(this.aa>=this.n.length)return null;for(var a=[],b=this.aa;b<this.n.length-1;b++)a.push(this.n[b]);return new P(a,0)};P.prototype.k=function(a){for(var b=[],c=this.aa;c<this.n.length;c++)b.push(this.n[c]);if(a instanceof P)for(c=a.aa;c<a.n.length;c++)b.push(a.n[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new P(b,0)};P.prototype.e=function(){return this.aa>=this.n.length};var S=new P("");
function T(a,b){var c=G(a);if(null===c)return b;if(c===G(b))return T(R(a),R(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}P.prototype.ja=function(a){if(Q(this)!==Q(a))return!1;for(var b=this.aa,c=a.aa;b<=this.n.length;b++,c++)if(this.n[b]!==a.n[c])return!1;return!0};P.prototype.contains=function(a){var b=this.aa,c=a.aa;if(Q(this)>Q(a))return!1;for(;b<this.n.length;){if(this.n[b]!==a.n[c])return!1;++b;++c}return!0};function Ec(){this.children={};this.dd=0;this.value=null}function Fc(a,b,c){this.yd=a?a:"";this.Oc=b?b:null;this.D=c?c:new Ec}function Gc(a,b){for(var c=b instanceof P?b:new P(b),d=a,e;null!==(e=G(c));)d=new Fc(e,d,v(d.D.children,e)||new Ec),c=R(c);return d}h=Fc.prototype;h.ta=function(){return this.D.value};function Hc(a,b){x("undefined"!==typeof b,"Cannot set value to undefined");a.D.value=b;Ic(a)}h.clear=function(){this.D.value=null;this.D.children={};this.D.dd=0;Ic(this)};
h.pd=function(){return 0<this.D.dd};h.e=function(){return null===this.ta()&&!this.pd()};h.ca=function(a){var b=this;A(this.D.children,function(c,d){a(new Fc(d,b,c))})};function Jc(a,b,c,d){c&&!d&&b(a);a.ca(function(a){Jc(a,b,!0,d)});c&&d&&b(a)}function Kc(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}h.path=function(){return new P(null===this.Oc?this.yd:this.Oc.path()+"/"+this.yd)};h.name=function(){return this.yd};h.parent=function(){return this.Oc};
function Ic(a){if(null!==a.Oc){var b=a.Oc,c=a.yd,d=a.e(),e=u(b.D.children,c);d&&e?(delete b.D.children[c],b.D.dd--,Ic(b)):d||e||(b.D.children[c]=a.D,b.D.dd++,Ic(b))}};function Lc(a,b){this.Ga=a;this.pa=b?b:Mc}h=Lc.prototype;h.Ja=function(a,b){return new Lc(this.Ga,this.pa.Ja(a,b,this.Ga).W(null,null,!1,null,null))};h.remove=function(a){return new Lc(this.Ga,this.pa.remove(a,this.Ga).W(null,null,!1,null,null))};h.get=function(a){for(var b,c=this.pa;!c.e();){b=this.Ga(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function Nc(a,b){for(var c,d=a.pa,e=null;!d.e();){c=a.Ga(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}h.e=function(){return this.pa.e()};h.count=function(){return this.pa.count()};h.Ic=function(){return this.pa.Ic()};h.Zb=function(){return this.pa.Zb()};h.Ba=function(a){return this.pa.Ba(a)};
h.Aa=function(a){return new Oc(this.pa,null,this.Ga,!1,a)};h.rb=function(a,b){return new Oc(this.pa,a,this.Ga,!1,b)};h.Sb=function(a,b){return new Oc(this.pa,a,this.Ga,!0,b)};h.bf=function(a){return new Oc(this.pa,null,this.Ga,!0,a)};function Oc(a,b,c,d,e){this.qf=e||null;this.te=d;this.ac=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.te?a.left:a.right;else if(0===e){this.ac.push(a);break}else this.ac.push(a),a=this.te?a.right:a.left}
function U(a){if(0===a.ac.length)return null;var b=a.ac.pop(),c;c=a.qf?a.qf(b.key,b.value):{key:b.key,value:b.value};if(a.te)for(b=b.left;!b.e();)a.ac.push(b),b=b.right;else for(b=b.right;!b.e();)a.ac.push(b),b=b.left;return c}function Pc(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:Mc;this.right=null!=e?e:Mc}h=Pc.prototype;h.W=function(a,b,c,d,e){return new Pc(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};
h.count=function(){return this.left.count()+1+this.right.count()};h.e=function(){return!1};h.Ba=function(a){return this.left.Ba(a)||a(this.key,this.value)||this.right.Ba(a)};function Qc(a){return a.left.e()?a:Qc(a.left)}h.Ic=function(){return Qc(this).key};h.Zb=function(){return this.right.e()?this.key:this.right.Zb()};h.Ja=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.W(null,null,null,e.left.Ja(a,b,c),null):0===d?e.W(null,b,null,null,null):e.W(null,null,null,null,e.right.Ja(a,b,c));return Rc(e)};
function Sc(a){if(a.left.e())return Mc;a.left.$()||a.left.left.$()||(a=Tc(a));a=a.W(null,null,null,Sc(a.left),null);return Rc(a)}
h.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.$()||c.left.left.$()||(c=Tc(c)),c=c.W(null,null,null,c.left.remove(a,b),null);else{c.left.$()&&(c=Uc(c));c.right.e()||c.right.$()||c.right.left.$()||(c=Vc(c),c.left.left.$()&&(c=Uc(c),c=Vc(c)));if(0===b(a,c.key)){if(c.right.e())return Mc;d=Qc(c.right);c=c.W(d.key,d.value,null,null,Sc(c.right))}c=c.W(null,null,null,null,c.right.remove(a,b))}return Rc(c)};h.$=function(){return this.color};
function Rc(a){a.right.$()&&!a.left.$()&&(a=Wc(a));a.left.$()&&a.left.left.$()&&(a=Uc(a));a.left.$()&&a.right.$()&&(a=Vc(a));return a}function Tc(a){a=Vc(a);a.right.left.$()&&(a=a.W(null,null,null,null,Uc(a.right)),a=Wc(a),a=Vc(a));return a}function Wc(a){return a.right.W(null,null,a.color,a.W(null,null,!0,null,a.right.left),null)}function Uc(a){return a.left.W(null,null,a.color,null,a.W(null,null,!0,a.left.right,null))}
function Vc(a){return a.W(null,null,!a.color,a.left.W(null,null,!a.left.color,null,null),a.right.W(null,null,!a.right.color,null,null))}function Xc(){}h=Xc.prototype;h.W=function(){return this};h.Ja=function(a,b){return new Pc(a,b,null)};h.remove=function(){return this};h.count=function(){return 0};h.e=function(){return!0};h.Ba=function(){return!1};h.Ic=function(){return null};h.Zb=function(){return null};h.$=function(){return!1};var Mc=new Xc;function I(a,b){this.name=a;this.K=b}function Yc(a,b){return new I(a,b)};function Zc(a,b){this.A=a;x(null!==this.A,"LeafNode shouldn't be created with null value.");this.fa=b||K;$c(this.fa);this.wb=null}h=Zc.prototype;h.P=function(){return!0};h.O=function(){return this.fa};h.ib=function(a){return new Zc(this.A,a)};h.B=function(a){return".priority"===a?this.fa:K};h.da=function(a){return a.e()?this:".priority"===G(a)?this.fa:K};h.Y=function(){return!1};h.af=function(){return null};h.I=function(a,b){return".priority"===a?this.ib(b):K.I(a,b).ib(this.fa)};
h.L=function(a,b){var c=G(a);if(null===c)return b;x(".priority"!==c||1===Q(a),".priority must be the last token in a path");return this.I(c,K.L(R(a),b))};h.e=function(){return!1};h.Ua=function(){return 0};h.N=function(a){return a&&!this.O().e()?{".value":this.ta(),".priority":this.O().N()}:this.ta()};h.hash=function(){if(null===this.wb){var a="";this.fa.e()||(a+="priority:"+ad(this.fa.N())+":");var b=typeof this.A,a=a+(b+":"),a="number"===b?a+Db(this.A):a+this.A;this.wb=lb(a)}return this.wb};
h.ta=function(){return this.A};h.he=function(a){if(a===K)return 1;if(a instanceof bd)return-1;x(a.P(),"Unknown node type");var b=typeof a.A,c=typeof this.A,d=Ia(cd,b),e=Ia(cd,c);x(0<=d,"Unknown leaf type: "+b);x(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.A<a.A?-1:this.A===a.A?0:1:e-d};var cd=["object","boolean","number","string"];Zc.prototype.Wd=function(){return this};Zc.prototype.Yb=function(){return!0};
Zc.prototype.ja=function(a){return a===this?!0:a.P()?this.A===a.A&&this.fa.ja(a.fa):!1};Zc.prototype.toString=function(){return"string"===typeof this.A?this.A:'"'+this.A+'"'};function dd(a,b){this.td=a;this.Wb=b}dd.prototype.get=function(a){var b=v(this.td,a);if(!b)throw Error("No index defined for "+a);return b===hc?null:b};function ed(a,b,c){var d=fd(a.td,function(d,f){var g=v(a.Wb,f);x(g,"Missing index implementation for "+f);if(d===hc){if(g.se(b.K)){for(var k=[],l=c.Aa(Yc),m=U(l);m;)m.name!=b.name&&k.push(m),m=U(l);k.push(b);return gd(k,H(g))}return hc}g=c.get(b.name);k=d;g&&(k=k.remove(new I(b.name,g)));return k.Ja(b,b.K)});return new dd(d,a.Wb)}
function hd(a,b,c){var d=fd(a.td,function(a){if(a===hc)return a;var d=c.get(b.name);return d?a.remove(new I(b.name,d)):a});return new dd(d,a.Wb)}var id=new dd({".priority":hc},{".priority":L});function bd(a,b,c){this.j=a;(this.fa=b)&&$c(this.fa);this.sb=c;this.wb=null}h=bd.prototype;h.P=function(){return!1};h.O=function(){return this.fa||K};h.ib=function(a){return new bd(this.j,a,this.sb)};h.B=function(a){if(".priority"===a)return this.O();a=this.j.get(a);return null===a?K:a};h.da=function(a){var b=G(a);return null===b?this:this.B(b).da(R(a))};h.Y=function(a){return null!==this.j.get(a)};
h.I=function(a,b){x(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.ib(b);var c=new I(a,b),d;b.e()?(d=this.j.remove(a),c=hd(this.sb,c,this.j)):(d=this.j.Ja(a,b),c=ed(this.sb,c,this.j));return new bd(d,this.fa,c)};h.L=function(a,b){var c=G(a);if(null===c)return b;x(".priority"!==G(a)||1===Q(a),".priority must be the last token in a path");var d=this.B(c).L(R(a),b);return this.I(c,d)};h.e=function(){return this.j.e()};h.Ua=function(){return this.j.count()};var jd=/^(0|[1-9]\d*)$/;
h=bd.prototype;h.N=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.ca(L,function(f,g){b[f]=g.N(a);c++;e&&jd.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],g;for(g in b)f[g]=b[g];return f}a&&!this.O().e()&&(b[".priority"]=this.O().N());return b};h.hash=function(){if(null===this.wb){var a="";this.O().e()||(a+="priority:"+ad(this.O().N())+":");this.ca(L,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.wb=""===a?"":lb(a)}return this.wb};
h.af=function(a,b,c){return(c=kd(this,c))?(a=Nc(c,new I(a,b)))?a.name:null:Nc(this.j,a)};function ld(a,b){var c;c=(c=kd(a,b))?(c=c.Ic())&&c.name:a.j.Ic();return c?new I(c,a.j.get(c)):null}function md(a,b){var c;c=(c=kd(a,b))?(c=c.Zb())&&c.name:a.j.Zb();return c?new I(c,a.j.get(c)):null}h.ca=function(a,b){var c=kd(this,a);return c?c.Ba(function(a){return b(a.name,a.K)}):this.j.Ba(b)};h.Aa=function(a){return this.rb(a.Ae(),a)};
h.rb=function(a,b){var c=kd(this,b);return c?c.rb(a,function(a){return a}):this.j.rb(a.name,Yc)};h.bf=function(a){return this.Sb(a.ze(),a)};h.Sb=function(a,b){var c=kd(this,b);return c?c.Sb(a,function(a){return a}):this.j.Sb(a.name,Yc)};h.he=function(a){return this.e()?a.e()?0:-1:a.P()||a.e()?1:a===kc?-1:0};
h.Wd=function(a){if(a===mc||nd(this.sb.Wb,a.toString()))return this;var b=this.sb,c=this.j;x(a!==mc,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Aa(Yc),f=U(c);f;)e=e||a.se(f.K),d.push(f),f=U(c);d=e?gd(d,H(a)):hc;e=a.toString();c=od(b.Wb);c[e]=a;a=od(b.td);a[e]=d;return new bd(this.j,this.fa,new dd(a,c))};h.Yb=function(a){return a===mc||nd(this.sb.Wb,a.toString())};
h.ja=function(a){if(a===this)return!0;if(a.P())return!1;if(this.O().ja(a.O())&&this.j.count()===a.j.count()){var b=this.Aa(L);a=a.Aa(L);for(var c=U(b),d=U(a);c&&d;){if(c.name!==d.name||!c.K.ja(d.K))return!1;c=U(b);d=U(a)}return null===c&&null===d}return!1};function kd(a,b){return b===mc?null:a.sb.get(b.toString())}h.toString=function(){var a="{",b=!0;this.ca(L,function(c,d){b?b=!1:a+=", ";a+='"'+c+'" : '+d.toString()});return a+="}"};function J(a,b){if(null===a)return K;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);x(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new Zc(a,J(c));if(a instanceof Array){var d=K,e=a;A(e,function(a,b){if(u(e,b)&&"."!==b.substring(0,1)){var c=J(a);if(c.P()||!c.e())d=
d.I(b,c)}});return d.ib(J(c))}var f=[],g=!1,k=a;va(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=J(k[a]);b.e()||(g=g||!b.O().e(),f.push(new I(a,b)))}});var l=gd(f,ec,function(a){return a.name},fc);if(g){var m=gd(f,H(L));return new bd(l,J(c),new dd({".priority":m},{".priority":L}))}return new bd(l,J(c),id)}var pd=Math.log(2);function qd(a){this.count=parseInt(Math.log(a+1)/pd,10);this.Ve=this.count-1;this.Jf=a+1&parseInt(Array(this.count+1).join("1"),2)}
function rd(a){var b=!(a.Jf&1<<a.Ve);a.Ve--;return b}
function gd(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var m=a[b],r=c?c(m):m;return new Pc(r,m.K,!1,null,null)}var m=parseInt(f/2,10)+b,f=e(b,m),s=e(m+1,d),m=a[m],r=c?c(m):m;return new Pc(r,m.K,!1,f,s)}a.sort(b);var f=function(b){function d(b,g){var k=r-b,s=r;r-=b;var s=e(k+1,s),k=a[k],y=c?c(k):k,s=new Pc(y,k.K,g,null,s);f?f.left=s:m=s;f=s}for(var f=null,m=null,r=a.length,s=0;s<b.count;++s){var y=rd(b),N=Math.pow(2,b.count-(s+1));y?d(N,!1):(d(N,!1),d(N,!0))}return m}(new qd(a.length));
return null!==f?new Lc(d||b,f):new Lc(d||b)}function ad(a){return"number"===typeof a?"number:"+Db(a):"string:"+a}function $c(a){if(a.P()){var b=a.N();x("string"===typeof b||"number"===typeof b||"object"===typeof b&&u(b,".sv"),"Priority must be a string or number.")}else x(a===kc||a.e(),"priority of unexpected type.");x(a===kc||a.O().e(),"Priority nodes can't have a priority of their own.")}var K=new bd(new Lc(fc),null,id);function sd(){bd.call(this,new Lc(fc),K,id)}na(sd,bd);h=sd.prototype;
h.he=function(a){return a===this?0:1};h.ja=function(a){return a===this};h.O=function(){throw ib("Why is this called?");};h.B=function(){return K};h.e=function(){return!1};var kc=new sd,ic=new I("[MIN_NAME]",K);function C(a,b,c){this.D=a;this.U=b;this.m=c}C.prototype.N=function(){D("Firebase.DataSnapshot.val",0,0,arguments.length);return this.D.N()};C.prototype.val=C.prototype.N;C.prototype.Xe=function(){D("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.D.N(!0)};C.prototype.exportVal=C.prototype.Xe;C.prototype.Qf=function(){D("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.D.e()};C.prototype.exists=C.prototype.Qf;
C.prototype.k=function(a){D("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));Zb("Firebase.DataSnapshot.child",a);var b=new P(a),c=this.U.k(b);return new C(this.D.da(b),c,L)};C.prototype.child=C.prototype.k;C.prototype.Y=function(a){D("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Zb("Firebase.DataSnapshot.hasChild",a);var b=new P(a);return!this.D.da(b).e()};C.prototype.hasChild=C.prototype.Y;
C.prototype.O=function(){D("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.D.O().N()};C.prototype.getPriority=C.prototype.O;C.prototype.forEach=function(a){D("Firebase.DataSnapshot.forEach",1,1,arguments.length);F("Firebase.DataSnapshot.forEach",1,a,!1);if(this.D.P())return!1;var b=this;return!!this.D.ca(this.m,function(c,d){return a(new C(d,b.U.k(c),L))})};C.prototype.forEach=C.prototype.forEach;
C.prototype.pd=function(){D("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.D.P()?!1:!this.D.e()};C.prototype.hasChildren=C.prototype.pd;C.prototype.name=function(){z("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead.");D("Firebase.DataSnapshot.name",0,0,arguments.length);return this.key()};C.prototype.name=C.prototype.name;C.prototype.key=function(){D("Firebase.DataSnapshot.key",0,0,arguments.length);return this.U.key()};
C.prototype.key=C.prototype.key;C.prototype.Ua=function(){D("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.D.Ua()};C.prototype.numChildren=C.prototype.Ua;C.prototype.hc=function(){D("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.U};C.prototype.ref=C.prototype.hc;function td(a){x(ea(a)&&0<a.length,"Requires a non-empty array");this.Bf=a;this.Gc={}}td.prototype.Td=function(a,b){for(var c=this.Gc[a]||[],d=0;d<c.length;d++)c[d].sc.apply(c[d].Ha,Array.prototype.slice.call(arguments,1))};td.prototype.zb=function(a,b,c){ud(this,a);this.Gc[a]=this.Gc[a]||[];this.Gc[a].push({sc:b,Ha:c});(a=this.pe(a))&&b.apply(c,a)};td.prototype.bc=function(a,b,c){ud(this,a);a=this.Gc[a]||[];for(var d=0;d<a.length;d++)if(a[d].sc===b&&(!c||c===a[d].Ha)){a.splice(d,1);break}};
function ud(a,b){x(Oa(a.Bf,function(a){return a===b}),"Unknown event: "+b)};function vd(){td.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.qc=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.qc&&(c.qc=b,c.Td("visible",b))},!1)}}na(vd,td);ca(vd);vd.prototype.pe=function(a){x("visible"===a,"Unknown event type: "+a);return[this.qc]};function wd(){td.call(this,["online"]);this.Lc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.Lc||a.Td("online",!0);a.Lc=!0},!1);window.addEventListener("offline",function(){a.Lc&&a.Td("online",!1);a.Lc=!1},!1)}}na(wd,td);ca(wd);wd.prototype.pe=function(a){x("online"===a,"Unknown event type: "+a);return[this.Lc]};function A(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function fd(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function Mb(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function Kb(a){var b=0,c;for(c in a)b++;return b}function Lb(a){for(var b in a)return b}function xd(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function yd(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function nd(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function zd(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function Ad(a,b){var c=zd(a,b,void 0);return c&&a[c]}function Bd(a){for(var b in a)return!1;return!0}function Cd(a,b){return b in a?a[b]:void 0}function od(a){var b={},c;for(c in a)b[c]=a[c];return b}var Dd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ed(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Dd.length;f++)c=Dd[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Fd(){this.wc={}}function Gd(a,b,c){n(c)||(c=1);u(a.wc,b)||(a.wc[b]=0);a.wc[b]+=c}Fd.prototype.get=function(){return od(this.wc)};function Hd(a){this.Kf=a;this.vd=null}Hd.prototype.get=function(){var a=this.Kf.get(),b=od(a);if(this.vd)for(var c in this.vd)b[c]-=this.vd[c];this.vd=a;return b};function Id(a,b){this.uf={};this.Nd=new Hd(a);this.S=b;var c=1E4+2E4*Math.random();setTimeout(q(this.nf,this),Math.floor(c))}Id.prototype.nf=function(){var a=this.Nd.get(),b={},c=!1,d;for(d in a)0<a[d]&&u(this.uf,d)&&(b[d]=a[d],c=!0);c&&(a=this.S,a.ia&&(b={c:b},a.f("reportStats",b),a.wa("s",b)));setTimeout(q(this.nf,this),Math.floor(6E5*Math.random()))};var Jd={},Kd={};function Ld(a){a=a.toString();Jd[a]||(Jd[a]=new Fd);return Jd[a]}function Md(a,b){var c=a.toString();Kd[c]||(Kd[c]=b());return Kd[c]};var Nd=null;"undefined"!==typeof MozWebSocket?Nd=MozWebSocket:"undefined"!==typeof WebSocket&&(Nd=WebSocket);function Od(a,b,c){this.ie=a;this.f=rb(this.ie);this.frames=this.Cc=null;this.kb=this.lb=this.Oe=0;this.Qa=Ld(b);this.Za=(b.Cb?"wss://":"ws://")+b.Ka+"/.ws?v=5";"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(this.Za+="&r=f");b.host!==b.Ka&&(this.Za=this.Za+"&ns="+b.yb);c&&(this.Za=this.Za+"&s="+c)}var Pd;
Od.prototype.open=function(a,b){this.fb=b;this.cg=a;this.f("Websocket connecting to "+this.Za);this.zc=!1;Aa.set("previous_websocket_failure",!0);try{this.oa=new Nd(this.Za)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.eb();return}var e=this;this.oa.onopen=function(){e.f("Websocket connected.");e.zc=!0};this.oa.onclose=function(){e.f("Websocket connection was disconnected.");e.oa=null;e.eb()};this.oa.onmessage=function(a){if(null!==e.oa)if(a=a.data,e.kb+=
a.length,Gd(e.Qa,"bytes_received",a.length),Qd(e),null!==e.frames)Rd(e,a);else{a:{x(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.Oe=b;e.frames=[];a=null;break a}}e.Oe=1;e.frames=[]}null!==a&&Rd(e,a)}};this.oa.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.eb()}};Od.prototype.start=function(){};
Od.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==Nd&&!Pd};Od.responsesRequiredToBeHealthy=2;Od.healthyTimeout=3E4;h=Od.prototype;h.wd=function(){Aa.remove("previous_websocket_failure")};function Rd(a,b){a.frames.push(b);if(a.frames.length==a.Oe){var c=a.frames.join("");a.frames=null;c=ua(c);a.cg(c)}}
h.send=function(a){Qd(this);a=t(a);this.lb+=a.length;Gd(this.Qa,"bytes_sent",a.length);a=Bb(a,16384);1<a.length&&this.oa.send(String(a.length));for(var b=0;b<a.length;b++)this.oa.send(a[b])};h.Yc=function(){this.ub=!0;this.Cc&&(clearInterval(this.Cc),this.Cc=null);this.oa&&(this.oa.close(),this.oa=null)};h.eb=function(){this.ub||(this.f("WebSocket is closing itself"),this.Yc(),this.fb&&(this.fb(this.zc),this.fb=null))};h.close=function(){this.ub||(this.f("WebSocket is being closed"),this.Yc())};
function Qd(a){clearInterval(a.Cc);a.Cc=setInterval(function(){a.oa&&a.oa.send("0");Qd(a)},Math.floor(45E3))};function Sd(a){this.cc=a;this.Fd=[];this.Mb=0;this.ge=-1;this.Ab=null}function Td(a,b,c){a.ge=b;a.Ab=c;a.ge<a.Mb&&(a.Ab(),a.Ab=null)}function Ud(a,b,c){for(a.Fd[b]=c;a.Fd[a.Mb];){var d=a.Fd[a.Mb];delete a.Fd[a.Mb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;Fb(function(){f.cc(d[e])})}if(a.Mb===a.ge){a.Ab&&(clearTimeout(a.Ab),a.Ab(),a.Ab=null);break}a.Mb++}};function Vd(){this.set={}}h=Vd.prototype;h.add=function(a,b){this.set[a]=null!==b?b:!0};h.contains=function(a){return u(this.set,a)};h.get=function(a){return this.contains(a)?this.set[a]:void 0};h.remove=function(a){delete this.set[a]};h.clear=function(){this.set={}};h.e=function(){return Bd(this.set)};h.count=function(){return Kb(this.set)};function Wd(a,b){A(a.set,function(a,d){b(d,a)})};function Xd(a,b,c){this.ie=a;this.f=rb(a);this.kb=this.lb=0;this.Qa=Ld(b);this.Kd=c;this.zc=!1;this.bd=function(a){b.host!==b.Ka&&(a.ns=b.yb);var c=[],f;for(f in a)a.hasOwnProperty(f)&&c.push(f+"="+a[f]);return(b.Cb?"https://":"http://")+b.Ka+"/.lp?"+c.join("&")}}var Yd,Zd;
Xd.prototype.open=function(a,b){this.Ue=0;this.ea=b;this.gf=new Sd(a);this.ub=!1;var c=this;this.ob=setTimeout(function(){c.f("Timed out trying to connect.");c.eb();c.ob=null},Math.floor(3E4));wb(function(){if(!c.ub){c.Na=new $d(function(a,b,d,k,l){ae(c,arguments);if(c.Na)if(c.ob&&(clearTimeout(c.ob),c.ob=null),c.zc=!0,"start"==a)c.id=b,c.mf=d;else if("close"===a)b?(c.Na.Jd=!1,Td(c.gf,b,function(){c.eb()})):c.eb();else throw Error("Unrecognized command received: "+a);},function(a,b){ae(c,arguments);
Ud(c.gf,a,b)},function(){c.eb()},c.bd);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Na.Ud&&(a.cb=c.Na.Ud);a.v="5";c.Kd&&(a.s=c.Kd);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.bd(a);c.f("Connecting via long-poll to "+a);be(c.Na,a,function(){})}})};
Xd.prototype.start=function(){var a=this.Na,b=this.mf;a.Xf=this.id;a.Yf=b;for(a.Zd=!0;ce(a););a=this.id;b=this.mf;this.$b=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.$b.src=this.bd(c);this.$b.style.display="none";document.body.appendChild(this.$b)};Xd.isAvailable=function(){return!Zd&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.zg)&&(Yd||!0)};h=Xd.prototype;
h.wd=function(){};h.Yc=function(){this.ub=!0;this.Na&&(this.Na.close(),this.Na=null);this.$b&&(document.body.removeChild(this.$b),this.$b=null);this.ob&&(clearTimeout(this.ob),this.ob=null)};h.eb=function(){this.ub||(this.f("Longpoll is closing itself"),this.Yc(),this.ea&&(this.ea(this.zc),this.ea=null))};h.close=function(){this.ub||(this.f("Longpoll is being closed."),this.Yc())};
h.send=function(a){a=t(a);this.lb+=a.length;Gd(this.Qa,"bytes_sent",a.length);a=mb(a);a=fb(a,!0);a=Bb(a,1840);for(var b=0;b<a.length;b++){var c=this.Na;c.Qc.push({og:this.Ue,wg:a.length,We:a[b]});c.Zd&&ce(c);this.Ue++}};function ae(a,b){var c=t(b).length;a.kb+=c;Gd(a.Qa,"bytes_received",c)}
function $d(a,b,c,d){this.bd=d;this.fb=c;this.Fe=new Vd;this.Qc=[];this.ke=Math.floor(1E8*Math.random());this.Jd=!0;this.Ud=hb();window["pLPCommand"+this.Ud]=a;window["pRTLPCB"+this.Ud]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||kb("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.$a=a.contentDocument:a.contentWindow?a.$a=a.contentWindow.document:a.document&&(a.$a=a.document);this.va=a;a="";this.va.src&&"javascript:"===this.va.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.va.$a.open(),this.va.$a.write(a),this.va.$a.close()}catch(f){kb("frame writing exception"),f.stack&&kb(f.stack),kb(f)}}
$d.prototype.close=function(){this.Zd=!1;if(this.va){this.va.$a.body.innerHTML="";var a=this;setTimeout(function(){null!==a.va&&(document.body.removeChild(a.va),a.va=null)},Math.floor(0))}var b=this.fb;b&&(this.fb=null,b())};
function ce(a){if(a.Zd&&a.Jd&&a.Fe.count()<(0<a.Qc.length?2:1)){a.ke++;var b={};b.id=a.Xf;b.pw=a.Yf;b.ser=a.ke;for(var b=a.bd(b),c="",d=0;0<a.Qc.length;)if(1870>=a.Qc[0].We.length+30+c.length){var e=a.Qc.shift(),c=c+"&seg"+d+"="+e.og+"&ts"+d+"="+e.wg+"&d"+d+"="+e.We;d++}else break;de(a,b+c,a.ke);return!0}return!1}function de(a,b,c){function d(){a.Fe.remove(c);ce(a)}a.Fe.add(c);var e=setTimeout(d,Math.floor(25E3));be(a,b,function(){clearTimeout(e);d()})}
function be(a,b,c){setTimeout(function(){try{if(a.Jd){var d=a.va.$a.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){kb("Long-poll script failed to load: "+b);a.Jd=!1;a.close()};a.va.$a.body.appendChild(d)}}catch(e){}},Math.floor(1))};function ee(a){fe(this,a)}var ge=[Xd,Od];function fe(a,b){var c=Od&&Od.isAvailable(),d=c&&!(Aa.ff||!0===Aa.get("previous_websocket_failure"));b.yg&&(c||z("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.$c=[Od];else{var e=a.$c=[];Cb(ge,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function he(a){if(0<a.$c.length)return a.$c[0];throw Error("No transports available");};function ie(a,b,c,d,e,f){this.id=a;this.f=rb("c:"+this.id+":");this.cc=c;this.Kc=d;this.ea=e;this.De=f;this.Q=b;this.Ed=[];this.Se=0;this.xf=new ee(b);this.Pa=0;this.f("Connection created");je(this)}
function je(a){var b=he(a.xf);a.J=new b("c:"+a.id+":"+a.Se++,a.Q);a.He=b.responsesRequiredToBeHealthy||0;var c=ke(a,a.J),d=le(a,a.J);a.ad=a.J;a.Xc=a.J;a.C=null;a.vb=!1;setTimeout(function(){a.J&&a.J.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.rd=setTimeout(function(){a.rd=null;a.vb||(a.J&&102400<a.J.kb?(a.f("Connection exceeded healthy timeout but has received "+a.J.kb+" bytes.  Marking connection healthy."),a.vb=!0,a.J.wd()):a.J&&10240<a.J.lb?a.f("Connection exceeded healthy timeout but has sent "+
a.J.lb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function le(a,b){return function(c){b===a.J?(a.J=null,c||0!==a.Pa?1===a.Pa&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.Q.Ka.substr(0,2)&&(Aa.remove("host:"+a.Q.host),a.Q.Ka=a.Q.host)),a.close()):b===a.C?(a.f("Secondary connection lost."),c=a.C,a.C=null,a.ad!==c&&a.Xc!==c||a.close()):a.f("closing an old connection")}}
function ke(a,b){return function(c){if(2!=a.Pa)if(b===a.Xc){var d=zb("t",c);c=zb("d",c);if("c"==d){if(d=zb("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.Kd=c.s;Da(a.Q,f);0==a.Pa&&(a.J.start(),me(a,a.J,d),"5"!==e&&z("Protocol version mismatch detected"),c=a.xf,(c=1<c.$c.length?c.$c[1]:null)&&ne(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.Xc=a.C;for(c=0;c<a.Ed.length;++c)a.Bd(a.Ed[c]);a.Ed=[];oe(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
a.De&&(a.De(c),a.De=null),a.ea=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Da(a.Q,c),1===a.Pa?a.close():(pe(a),je(a))):"e"===d?sb("Server Error: "+c):"o"===d?(a.f("got pong on primary."),qe(a),re(a)):sb("Unknown control packet command: "+d)}else"d"==d&&a.Bd(c)}else if(b===a.C)if(d=zb("t",c),c=zb("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?se(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.C.close(),a.ad!==a.C&&a.Xc!==a.C||a.close()):"o"===c&&(a.f("got pong on secondary."),
a.tf--,se(a)));else if("d"==d)a.Ed.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}ie.prototype.wa=function(a){te(this,{t:"d",d:a})};function oe(a){a.ad===a.C&&a.Xc===a.C&&(a.f("cleaning up and promoting a connection: "+a.C.ie),a.J=a.C,a.C=null)}
function se(a){0>=a.tf?(a.f("Secondary connection is healthy."),a.vb=!0,a.C.wd(),a.C.start(),a.f("sending client ack on secondary"),a.C.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.J.send({t:"c",d:{t:"n",d:{}}}),a.ad=a.C,oe(a)):(a.f("sending ping on secondary."),a.C.send({t:"c",d:{t:"p",d:{}}}))}ie.prototype.Bd=function(a){qe(this);this.cc(a)};function qe(a){a.vb||(a.He--,0>=a.He&&(a.f("Primary connection is healthy."),a.vb=!0,a.J.wd()))}
function ne(a,b){a.C=new b("c:"+a.id+":"+a.Se++,a.Q,a.Kd);a.tf=b.responsesRequiredToBeHealthy||0;a.C.open(ke(a,a.C),le(a,a.C));setTimeout(function(){a.C&&(a.f("Timed out trying to upgrade."),a.C.close())},Math.floor(6E4))}function me(a,b,c){a.f("Realtime connection established.");a.J=b;a.Pa=1;a.Kc&&(a.Kc(c),a.Kc=null);0===a.He?(a.f("Primary connection is healthy."),a.vb=!0):setTimeout(function(){re(a)},Math.floor(5E3))}
function re(a){a.vb||1!==a.Pa||(a.f("sending ping on primary."),te(a,{t:"c",d:{t:"p",d:{}}}))}function te(a,b){if(1!==a.Pa)throw"Connection is not connected";a.ad.send(b)}ie.prototype.close=function(){2!==this.Pa&&(this.f("Closing realtime connection."),this.Pa=2,pe(this),this.ea&&(this.ea(),this.ea=null))};function pe(a){a.f("Shutting down all connections");a.J&&(a.J.close(),a.J=null);a.C&&(a.C.close(),a.C=null);a.rd&&(clearTimeout(a.rd),a.rd=null)};function ue(a){var b={},c={},d={},e="";try{var f=a.split("."),b=ua(jb(f[0])||""),c=ua(jb(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(g){}return{Bg:b,fe:c,data:d,sg:e}}function ve(a){a=ue(a).fe;return"object"===typeof a&&a.hasOwnProperty("iat")?v(a,"iat"):null}function we(a){a=ue(a);var b=a.fe;return!!a.sg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")};function xe(a,b,c,d){this.id=ye++;this.f=rb("p:"+this.id+":");this.Eb=!0;this.ua={};this.la=[];this.Nc=0;this.Jc=[];this.ia=!1;this.Va=1E3;this.xd=3E5;this.Cd=b;this.Ad=c;this.Ee=d;this.Q=a;this.Ke=null;this.Tc={};this.ng=0;this.Dc=this.ue=null;ze(this,0);vd.Qb().zb("visible",this.fg,this);-1===a.host.indexOf("fblocal")&&wd.Qb().zb("online",this.dg,this)}var ye=0,Ae=0;h=xe.prototype;
h.wa=function(a,b,c){var d=++this.ng;a={r:d,a:a,b:b};this.f(t(a));x(this.ia,"sendRequest call when we're not connected not allowed.");this.La.wa(a);c&&(this.Tc[d]=c)};function Be(a,b,c,d,e){var f=b.Da(),g=b.path.toString();a.f("Listen called for "+g+" "+f);a.ua[g]=a.ua[g]||{};x(!a.ua[g][f],"listen() called twice for same path/queryId.");b={H:e,qd:c,kg:Dc(b),tag:d};a.ua[g][f]=b;a.ia&&Ce(a,g,f,b)}
function Ce(a,b,c,d){a.f("Listen on "+b+" for "+c);var e={p:b};d.tag&&(e.q=d.kg,e.t=d.tag);e.h=d.qd();a.wa("q",e,function(e){if((a.ua[b]&&a.ua[b][c])===d){a.f("listen response",e);var g=e.s;"ok"!==g&&De(a,b,c);e=e.d;d.H&&d.H(g,e)}})}h.T=function(a,b,c){this.Lb={Mf:a,Ye:!1,sc:b,cd:c};this.f("Authenticating using credential: "+a);Ee(this);(b=40==a.length)||(a=ue(a).fe,b="object"===typeof a&&!0===v(a,"admin"));b&&(this.f("Admin auth credential detected.  Reducing max reconnect time."),this.xd=3E4)};
h.Pe=function(a){delete this.Lb;this.ia&&this.wa("unauth",{},function(b){a(b.s,b.d)})};function Ee(a){var b=a.Lb;a.ia&&b&&a.wa("auth",{cred:b.Mf},function(c){var d=c.s;c=c.d||"error";"ok"!==d&&a.Lb===b&&delete a.Lb;b.Ye?"ok"!==d&&b.cd&&b.cd(d,c):(b.Ye=!0,b.sc&&b.sc(d,c))})}function Fe(a,b,c,d){a.ia?Ge(a,"o",b,c,d):a.Jc.push({Pc:b,action:"o",data:c,H:d})}function He(a,b,c,d){a.ia?Ge(a,"om",b,c,d):a.Jc.push({Pc:b,action:"om",data:c,H:d})}
h.Ce=function(a,b){this.ia?Ge(this,"oc",a,null,b):this.Jc.push({Pc:a,action:"oc",data:null,H:b})};function Ge(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.wa(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}h.put=function(a,b,c,d){Ie(this,"p",a,b,c,d)};function Ke(a,b,c,d){Ie(a,"m",b,c,d,void 0)}function Ie(a,b,c,d,e,f){d={p:c,d:d};n(f)&&(d.h=f);a.la.push({action:b,of:d,H:e});a.Nc++;b=a.la.length-1;a.ia?Le(a,b):a.f("Buffering put: "+c)}
function Le(a,b){var c=a.la[b].action,d=a.la[b].of,e=a.la[b].H;a.la[b].lg=a.ia;a.wa(c,d,function(d){a.f(c+" response",d);delete a.la[b];a.Nc--;0===a.Nc&&(a.la=[]);e&&e(d.s,d.d)})}
h.Bd=function(a){if("r"in a){this.f("from server: "+t(a));var b=a.r,c=this.Tc[b];c&&(delete this.Tc[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,c=a.b,this.f("handleServerMessage",b,c),"d"===b?this.Cd(c.p,c.d,!1,c.t):"m"===b?this.Cd(c.p,c.d,!0,c.t):"c"===b?Me(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.Lb,delete this.Lb,c&&c.cd&&c.cd(a,b)):"sd"===b?this.Ke?this.Ke(c):"msg"in c&&"undefined"!==typeof console&&console.log("FIREBASE: "+c.msg.replace("\n",
"\nFIREBASE: ")):sb("Unrecognized action received from server: "+t(b)+"\nAre you using the latest client?"))}};h.Kc=function(a){this.f("connection ready");this.ia=!0;this.Dc=(new Date).getTime();this.Ee({serverTimeOffset:a-(new Date).getTime()});Ne(this);this.Ad(!0)};function ze(a,b){x(!a.La,"Scheduling a connect when we're already connected/ing?");a.Nb&&clearTimeout(a.Nb);a.Nb=setTimeout(function(){a.Nb=null;Oe(a)},Math.floor(b))}
h.fg=function(a){a&&!this.qc&&this.Va===this.xd&&(this.f("Window became visible.  Reducing delay."),this.Va=1E3,this.La||ze(this,0));this.qc=a};h.dg=function(a){a?(this.f("Browser went online.  Reconnecting."),this.Va=1E3,this.Eb=!0,this.La||ze(this,0)):(this.f("Browser went offline.  Killing connection; don't reconnect."),this.Eb=!1,this.La&&this.La.close())};
h.jf=function(){this.f("data client disconnected");this.ia=!1;this.La=null;for(var a=0;a<this.la.length;a++){var b=this.la[a];b&&"h"in b.of&&b.lg&&(b.H&&b.H("disconnect"),delete this.la[a],this.Nc--)}0===this.Nc&&(this.la=[]);if(this.Eb)this.qc?this.Dc&&(3E4<(new Date).getTime()-this.Dc&&(this.Va=1E3),this.Dc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Va=this.xd,this.ue=(new Date).getTime()),a=Math.max(0,this.Va-((new Date).getTime()-this.ue)),a*=Math.random(),this.f("Trying to reconnect in "+
a+"ms"),ze(this,a),this.Va=Math.min(this.xd,1.3*this.Va);else for(var c in this.Tc)delete this.Tc[c];this.Ad(!1)};function Oe(a){if(a.Eb){a.f("Making a connection attempt");a.ue=(new Date).getTime();a.Dc=null;var b=q(a.Bd,a),c=q(a.Kc,a),d=q(a.jf,a),e=a.id+":"+Ae++;a.La=new ie(e,a.Q,b,c,d,function(b){z(b+" ("+a.Q.toString()+")");a.Eb=!1})}}h.tb=function(){this.Eb=!1;this.La?this.La.close():(this.Nb&&(clearTimeout(this.Nb),this.Nb=null),this.ia&&this.jf())};
h.kc=function(){this.Eb=!0;this.Va=1E3;this.La||ze(this,0)};function Me(a,b,c){c=c?La(c,function(a){return Ab(a)}).join("$"):"default";(a=De(a,b,c))&&a.H&&a.H("permission_denied")}function De(a,b,c){b=(new P(b)).toString();var d=a.ua[b][c];delete a.ua[b][c];0===Kb(a.ua[b])&&delete a.ua[b];return d}function Ne(a){Ee(a);A(a.ua,function(b,d){A(b,function(b,c){Ce(a,d,c,b)})});for(var b=0;b<a.la.length;b++)a.la[b]&&Le(a,b);for(;a.Jc.length;)b=a.Jc.shift(),Ge(a,b.action,b.Pc,b.data,b.H)};function Pe(){this.j=this.A=null}Pe.prototype.ic=function(a,b){if(a.e())this.A=b,this.j=null;else if(null!==this.A)this.A=this.A.L(a,b);else{null==this.j&&(this.j=new Vd);var c=G(a);this.j.contains(c)||this.j.add(c,new Pe);c=this.j.get(c);a=R(a);c.ic(a,b)}};
function Qe(a,b){if(b.e())return a.A=null,a.j=null,!0;if(null!==a.A){if(a.A.P())return!1;var c=a.A;a.A=null;c.ca(L,function(b,c){a.ic(new P(b),c)});return Qe(a,b)}return null!==a.j?(c=G(b),b=R(b),a.j.contains(c)&&Qe(a.j.get(c),b)&&a.j.remove(c),a.j.e()?(a.j=null,!0):!1):!0}function Re(a,b,c){null!==a.A?c(b,a.A):a.ca(function(a,e){var f=new P(b.toString()+"/"+a);Re(e,f,c)})}Pe.prototype.ca=function(a){null!==this.j&&Wd(this.j,function(b,c){a(b,c)})};function Se(){this.Wc=K}Se.prototype.toString=function(){return this.Wc.toString()};function Te(){this.qb=[]}function Ue(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Rb();null===c||f.ja(c.Rb())||(a.qb.push(c),c=null);null===c&&(c=new Ve(f));c.add(e)}c&&a.qb.push(c)}function Cc(a,b,c){Ue(a,c);We(a,function(a){return a.ja(b)})}function Xe(a,b,c){Ue(a,c);We(a,function(a){return a.contains(b)||b.contains(a)})}
function We(a,b){for(var c=!0,d=0;d<a.qb.length;d++){var e=a.qb[d];if(e)if(e=e.Rb(),b(e)){for(var e=a.qb[d],f=0;f<e.od.length;f++){var g=e.od[f];if(null!==g){e.od[f]=null;var k=g.Pb();ob&&kb("event: "+g.toString());Fb(k)}}a.qb[d]=null}else c=!1}c&&(a.qb=[])}function Ve(a){this.Ca=a;this.od=[]}Ve.prototype.add=function(a){this.od.push(a)};Ve.prototype.Rb=function(){return this.Ca};var Ye="auth.firebase.com";function Ze(a,b,c){this.ed=a||{};this.Sd=b||{};this.lc=c||{};this.ed.remember||(this.ed.remember="default")}var $e=["remember","redirectTo"];function af(a){var b={},c={};va(a||{},function(a,e){0<=Ia($e,a)?b[a]=e:c[a]=e});return new Ze(b,{},c)};var bf={NETWORK_ERROR:"Unable to contact the Firebase server.",SERVER_ERROR:"An unknown server error occurred.",TRANSPORT_UNAVAILABLE:"There are no login transports available for the requested method.",REQUEST_INTERRUPTED:"The browser redirected the page before the login request could complete.",USER_CANCELLED:"The user cancelled authentication."};function V(a){var b=Error(v(bf,a),a);b.code=a;return b};function cf(){var a=window.opener.frames,b;for(b=a.length-1;0<=b;b--)try{if(a[b].location.protocol===window.location.protocol&&a[b].location.host===window.location.host&&"__winchan_relay_frame"===a[b].name)return a[b]}catch(c){}return null}function df(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function ef(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}
function ff(a){/^https?:\/\//.test(a)||(a=window.location.href);var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);return b?b[1]:a}function gf(a){var b="";try{a=a.replace("#","");var c={},d=a.replace(/^\?/,"").split("&");for(a=0;a<d.length;a++)if(d[a]){var e=d[a].split("=");c[e[0]]=e[1]}c&&u(c,"__firebase_request_key")&&(b=v(c,"__firebase_request_key"))}catch(f){}return b}
function hf(a){var b=[],c;for(c in a)if(u(a,c)){var d=v(a,c);if(ea(d))for(var e=0;e<d.length;e++)b.push(encodeURIComponent(c)+"="+encodeURIComponent(d[e]));else b.push(encodeURIComponent(c)+"="+encodeURIComponent(v(a,c)))}return b.join("&")}function jf(){var a=ub(Ye);return a.scheme+"://"+a.host+"/v2"};function kf(){return!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(navigator.userAgent)}function lf(){var a=navigator.userAgent;if("Microsoft Internet Explorer"===navigator.appName){if((a=a.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1])}else if(-1<a.indexOf("Trident")&&(a=a.match(/rv:([0-9]{2,2}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1]);return!1};function mf(a){a=a||{};a.method||(a.method="GET");a.headers||(a.headers={});a.headers.content_type||(a.headers.content_type="application/json");a.headers.content_type=a.headers.content_type.toLowerCase();this.options=a}
mf.prototype.open=function(a,b,c){function d(){c&&(c(V("REQUEST_INTERRUPTED")),c=null)}var e=new XMLHttpRequest,f=this.options.method.toUpperCase(),g;df(window,"beforeunload",d);e.onreadystatechange=function(){if(c&&4===e.readyState){var a;if(200<=e.status&&300>e.status){try{a=ua(e.responseText)}catch(b){}c(null,a)}else 500<=e.status&&600>e.status?c(V("SERVER_ERROR")):c(V("NETWORK_ERROR"));c=null;ef(window,"beforeunload",d)}};if("GET"===f)a+=(/\?/.test(a)?"":"?")+hf(b),g=null;else{var k=this.options.headers.content_type;
"application/json"===k&&(g=t(b));"application/x-www-form-urlencoded"===k&&(g=hf(b))}e.open(f,a,!0);a={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"};Ed(a,this.options.headers);for(var l in a)e.setRequestHeader(l,a[l]);e.send(g)};mf.isAvailable=function(){return!!window.XMLHttpRequest&&"string"===typeof(new XMLHttpRequest).responseType&&(!(navigator.userAgent.match(/MSIE/)||navigator.userAgent.match(/Trident/))||lf())};mf.prototype.uc=function(){return"json"};function nf(a){a=a||{};this.Uc=Ha()+Ha()+Ha();this.kf=a||{}}
nf.prototype.open=function(a,b,c){function d(){c&&(c(V("USER_CANCELLED")),c=null)}var e=this,f=ub(Ye),g;b.requestId=this.Uc;b.redirectTo=f.scheme+"://"+f.host+"/blank/page.html";a+=/\?/.test(a)?"":"?";a+=hf(b);(g=window.open(a,"_blank","location=no"))&&ha(g.addEventListener)?(g.addEventListener("loadstart",function(a){var b;if(b=a&&a.url)a:{var f=a.url;try{var r=document.createElement("a");r.href=f;b=r.host===ub(Ye).host&&"/blank/page.html"===r.pathname;break a}catch(s){}b=!1}b&&(a=gf(a.url),g.removeEventListener("exit",
d),g.close(),a=new Ze(null,null,{requestId:e.Uc,requestKey:a}),e.kf.requestWithCredential("/auth/session",a,c),c=null)}),g.addEventListener("exit",d)):c(V("TRANSPORT_UNAVAILABLE"))};nf.isAvailable=function(){return kf()};nf.prototype.uc=function(){return"redirect"};function of(a){a=a||{};if(!a.window_features||-1!==navigator.userAgent.indexOf("Fennec/")||-1!==navigator.userAgent.indexOf("Firefox/")&&-1!==navigator.userAgent.indexOf("Android"))a.window_features=void 0;a.window_name||(a.window_name="_blank");a.relay_url||(a.relay_url=jf()+"/auth/channel");this.options=a}
of.prototype.open=function(a,b,c){function d(a){g&&(document.body.removeChild(g),g=void 0);r&&(r=clearInterval(r));ef(window,"message",e);ef(window,"unload",d);if(m&&!a)try{m.close()}catch(b){k.postMessage("die",l)}m=k=void 0}function e(a){if(a.origin===l)try{var b=ua(a.data);"ready"===b.a?k.postMessage(s,l):"error"===b.a?(d(!1),c&&(c(b.d),c=null)):"response"===b.a&&(d(b.forceKeepWindowOpen),c&&(c(null,b.d),c=null))}catch(e){}}var f=lf(),g,k,l=ff(a);if(l!==ff(this.options.relay_url))c&&setTimeout(function(){c(Error("invalid arguments: origin of url and relay_url must match"))},
0);else{f&&(g=document.createElement("iframe"),g.setAttribute("src",this.options.relay_url),g.style.display="none",g.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(g),k=g.contentWindow);a+=(/\?/.test(a)?"":"?")+hf(b);var m=window.open(a,this.options.window_name,this.options.window_features);k||(k=m);var r=setInterval(function(){m&&m.closed&&(d(!1),c&&(c(V("USER_CANCELLED")),c=null))},500),s=t({a:"request",d:b});df(window,"unload",d);df(window,"message",e)}};
of.isAvailable=function(){return"postMessage"in window&&!/^file:\//.test(location.href)&&!(kf()||navigator.userAgent.match(/Windows Phone/)||window.Windows&&/^ms-appx:/.test(location.href)||navigator.userAgent.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i)||navigator.userAgent.match(/CriOS/)||navigator.userAgent.match(/Twitter for iPhone/)||navigator.userAgent.match(/FBAN\/FBIOS/)||window.navigator.standalone)&&!navigator.userAgent.match(/PhantomJS/)};of.prototype.uc=function(){return"popup"};function pf(a){a=a||{};a.callback_parameter||(a.callback_parameter="callback");this.options=a;window.__firebase_auth_jsonp=window.__firebase_auth_jsonp||{}}
pf.prototype.open=function(a,b,c){function d(){c&&(c(V("REQUEST_INTERRUPTED")),c=null)}function e(){setTimeout(function(){window.__firebase_auth_jsonp[f]=void 0;Bd(window.__firebase_auth_jsonp)&&(window.__firebase_auth_jsonp=void 0);try{var a=document.getElementById(f);a&&a.parentNode.removeChild(a)}catch(b){}},1);ef(window,"beforeunload",d)}var f="fn"+(new Date).getTime()+Math.floor(99999*Math.random());b[this.options.callback_parameter]="__firebase_auth_jsonp."+f;a+=(/\?/.test(a)?"":"?")+hf(b);
df(window,"beforeunload",d);window.__firebase_auth_jsonp[f]=function(a){c&&(c(null,a),c=null);e()};qf(f,a,c)};
function qf(a,b,c){setTimeout(function(){try{var d=document.createElement("script");d.type="text/javascript";d.id=a;d.async=!0;d.src=b;d.onerror=function(){var b=document.getElementById(a);null!==b&&b.parentNode.removeChild(b);c&&c(V("NETWORK_ERROR"))};var e=document.getElementsByTagName("head");(e&&0!=e.length?e[0]:document.documentElement).appendChild(d)}catch(f){c&&c(V("NETWORK_ERROR"))}},0)}pf.isAvailable=function(){return!kf()};pf.prototype.uc=function(){return"json"};function rf(a,b){this.Ge=["session",a.Gd,a.yb].join(":");this.Pd=b}rf.prototype.set=function(a,b){if(!b)if(this.Pd.length)b=this.Pd[0];else throw Error("fb.login.SessionManager : No storage options available!");b.set(this.Ge,a)};rf.prototype.get=function(){var a=La(this.Pd,q(this.Tf,this)),a=Ka(a,function(a){return null!==a});Ta(a,function(a,c){return ve(c.token)-ve(a.token)});return 0<a.length?a.shift():null};rf.prototype.Tf=function(a){try{var b=a.get(this.Ge);if(b&&b.token)return b}catch(c){}return null};
rf.prototype.clear=function(){var a=this;Ja(this.Pd,function(b){b.remove(a.Ge)})};function sf(a){a=a||{};this.Uc=Ha()+Ha()+Ha();this.kf=a||{}}sf.prototype.open=function(a,b){Ba.set("redirect_request_id",this.Uc);b.requestId=this.Uc;b.redirectTo=b.redirectTo||window.location.href;a+=(/\?/.test(a)?"":"?")+hf(b);window.location=a};sf.isAvailable=function(){return!/^file:\//.test(location.href)&&!kf()};sf.prototype.uc=function(){return"redirect"};function tf(a,b,c,d){td.call(this,["auth_status"]);this.Q=a;this.Re=b;this.xg=c;this.Be=d;this.mc=new rf(a,[Aa,Ba]);this.jb=null;uf(this)}na(tf,td);h=tf.prototype;h.ne=function(){return this.jb||null};function uf(a){Ba.get("redirect_request_id")&&vf(a);var b=a.mc.get();b&&b.token?(wf(a,b),a.Re(b.token,function(c,d){xf(a,c,d,!1,b.token,b)},function(b,d){yf(a,"resumeSession()",b,d)})):wf(a,null)}
function zf(a,b,c,d,e,f){"firebaseio-demo.com"===a.Q.domain&&z("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com.");a.Re(b,function(f,k){xf(a,f,k,!0,b,c,d||{},e)},function(b,c){yf(a,"auth()",b,c,f)})}function Af(a,b){a.mc.clear();wf(a,null);a.xg(function(a,d){if("ok"===a)B(b,null);else{var e=(a||"error").toUpperCase(),f=e;d&&(f+=": "+d);f=Error(f);f.code=e;B(b,f)}})}
function xf(a,b,c,d,e,f,g,k){"ok"===b?(d&&(b=c.auth,f.auth=b,f.expires=c.expires,f.token=we(e)?e:"",c=null,b&&u(b,"uid")?c=v(b,"uid"):u(f,"uid")&&(c=v(f,"uid")),f.uid=c,c="custom",b&&u(b,"provider")?c=v(b,"provider"):u(f,"provider")&&(c=v(f,"provider")),f.provider=c,a.mc.clear(),we(e)&&(g=g||{},c=Aa,"sessionOnly"===g.remember&&(c=Ba),"none"!==g.remember&&a.mc.set(f,c)),wf(a,f)),B(k,null,f)):(a.mc.clear(),wf(a,null),f=a=(b||"error").toUpperCase(),c&&(f+=": "+c),f=Error(f),f.code=a,B(k,f))}
function yf(a,b,c,d,e){z(b+" was canceled: "+d);a.mc.clear();wf(a,null);a=Error(d);a.code=c.toUpperCase();B(e,a)}function Bf(a,b,c,d,e){Cf(a);var f=[mf,pf];c=new Ze(d||{},{},c||{});Df(a,f,"/auth/"+b,c,e)}
function Ef(a,b,c,d){Cf(a);var e=[of,nf];c=af(c);"anonymous"===b||"password"===b?setTimeout(function(){B(d,V("TRANSPORT_UNAVAILABLE"))},0):(c.Sd.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top="+("object"===typeof screen?.5*(screen.height-625):0)+",left="+("object"===typeof screen?.5*(screen.width-625):0),c.Sd.relay_url=jf()+"/"+a.Q.yb+"/auth/channel",c.Sd.requestWithCredential=q(a.Vc,a),Df(a,e,"/auth/"+b,c,d))}
function vf(a){var b=Ba.get("redirect_request_id");if(b){var c=Ba.get("redirect_client_options");Ba.remove("redirect_request_id");Ba.remove("redirect_client_options");var d=[mf,pf],b={requestId:b,requestKey:gf(document.location.hash)},c=new Ze(c,{},b);try{document.location.hash=document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/,"")}catch(e){}Df(a,d,"/auth/session",c)}}h.je=function(a,b){Cf(this);var c=af(a);c.lc._method="POST";this.Vc("/users",c,function(a,c){a?B(b,a):B(b,a,c)})};
h.Ie=function(a,b){var c=this;Cf(this);var d="/users/"+encodeURIComponent(a.email),e=af(a);e.lc._method="DELETE";this.Vc(d,e,function(a,d){!a&&d&&d.uid&&c.jb&&c.jb.uid&&c.jb.uid===d.uid&&Af(c);B(b,a)})};h.ee=function(a,b){Cf(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=af(a);d.lc._method="PUT";d.lc.password=a.newPassword;this.Vc(c,d,function(a){B(b,a)})};
h.Je=function(a,b){Cf(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=af(a);d.lc._method="POST";this.Vc(c,d,function(a){B(b,a)})};h.Vc=function(a,b,c){Ff(this,[mf,pf],a,b,c)};function Df(a,b,c,d,e){Ff(a,b,c,d,function(b,c){!b&&c&&c.token&&c.uid?zf(a,c.token,c,d.ed,function(a,b){a?B(e,a):B(e,null,b)}):B(e,b||V("UNKNOWN_ERROR"))})}
function Ff(a,b,c,d,e){b=Ka(b,function(a){return"function"===typeof a.isAvailable&&a.isAvailable()});0===b.length?setTimeout(function(){B(e,V("TRANSPORT_UNAVAILABLE"))},0):(b=new (b.shift())(d.Sd),d=wa(d.lc),d.v="js-2.0.6",d.transport=b.uc(),d.suppress_status_codes=!0,a=jf()+"/"+a.Q.yb+c,b.open(a,d,function(a,b){if(a)B(e,a);else if(b&&b.error){var c=Error(b.error.message);c.code=b.error.code;c.details=b.error.details;B(e,c)}else B(e,null,b)}))}
function wf(a,b){var c=null!==a.jb||null!==b;a.jb=b;c&&a.Td("auth_status",b);a.Be(null!==b)}h.pe=function(a){x("auth_status"===a,'initial event must be of type "auth_status"');return[this.jb]};function Cf(a){var b=a.Q;if("firebaseio.com"!==b.domain&&"firebaseio-demo.com"!==b.domain&&"auth.firebase.com"===Ye)throw Error("This custom Firebase server ('"+a.Q.domain+"') does not support delegated login.");};function Gf(a,b){return a&&"object"===typeof a?(x(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Hf(a,b){var c=new Pe;Re(a,new P(""),function(a,e){c.ic(a,If(e,b))});return c}function If(a,b){var c=a.O().N(),c=Gf(c,b),d;if(a.P()){var e=Gf(a.ta(),b);return e!==a.ta()||c!==a.O().N()?new Zc(e,J(c)):a}d=a;c!==a.O().N()&&(d=d.ib(new Zc(c)));a.ca(L,function(a,c){var e=If(c,b);e!==c&&(d=d.I(a,e))});return d};function W(a,b,c,d){this.type=a;this.Wa=b;this.nb=c;this.Rc=null;this.$f=d};function Jf(){}var Kf=new Jf;function Lf(a,b,c,d){var e,f;f=X(c);e=X(b);if(d.e())return c.u?(a=[],e?e.ja(f)||(e.P()?a=Mf(f):f.P()?(a=[],e.P()||e.e()||a.push(new W("children_removed",e))):a=Nf(e,f),a.push(new W("value",f))):(a=Mf(f),a.push(new W("value",f))),0!==a.length||b.u||a.push(new W("value",f)),a):e?Nf(e,f):Mf(f);if(".priority"===G(d))return!c.u||e&&e.ja(f)?[]:[new W("value",f)];if(c.u||1===Q(d))return e=G(d),f=f.B(e),a.kd(b,c,e,f);e=G(d);return f.Y(e)?(f=f.B(e),a.kd(b,c,e,f)):[]}
Jf.prototype.kd=function(a,b,c,d){(a=X(a))?a.Y(c)?(a=a.B(c),c=a.ja(d)?[]:d.e()?[new W("child_removed",a,c)]:[new W("child_changed",d,c,a)]):c=d.e()?[]:[new W("child_added",d,c)]:c=d.e()?[]:[new W("child_added",d,c)];0<c.length&&b.u&&c.push(new W("value",X(b)));return c};function Mf(a){var b=[];a.P()||a.e()||b.push(new W("children_added",a));return b}
function Nf(a,b){var c=[],d=[],e=[],f=[],g={},k={},l,m,r,s;l=a.Aa(L);r=U(l);m=b.Aa(L);s=U(m);for(var y=H(L);null!==r||null!==s;){var N;N=r?s?y(r,s):-1:1;0>N?(N=v(g,r.name),n(N)?(f.push(d[N]),d[N]=null):(k[r.name]=e.length,e.push(r)),r=U(l)):(0<N?(N=v(k,s.name),n(N)?(f.push(s),e[N]=null):(g[s.name]=d.length,d.push(s))):((r=r.K.hash()!==s.K.hash())&&f.push(s),r=U(l)),s=U(m))}for(g=0;g<e.length;g++)(k=e[g])&&c.push(new W("child_removed",k.K,k.name));for(g=0;g<d.length;g++)(e=d[g])&&c.push(new W("child_added",
e.K,e.name));for(g=0;g<f.length;g++)d=f[g],c.push(new W("child_changed",d.K,d.name,a.B(d.name)));return c}function Of(a,b,c){this.bb=a;this.Ma=c;this.m=b}na(Of,Jf);
Of.prototype.kd=function(a,b,c,d){var e=X(a)||K,f=X(b)||K;if(e.Ua()<this.bb||f.Ua()<this.bb)return Of.oc.kd.call(this,a,b,c,d);x(!e.P()&&!f.P(),"If it's a leaf node, we should have hit the above case.");a=[];var g=e.B(c);g.e()?f.Y(c)&&(e=this.Ma?ld(e,this.m):md(e,this.m),a.push(new W("child_removed",e.K,e.name)),a.push(new W("child_added",d,c))):f.Y(c)?d.ja(g)||a.push(new W("child_changed",d,c,e.B(c))):(a.push(new W("child_removed",g,c)),e=this.Ma?ld(f,this.m):md(f,this.m),a.push(new W("child_added",
e.K,e.name)));0<a.length&&b.u&&a.push(new W("value",f));return a};function Pf(){}h=Pf.prototype;
h.Xa=function(a,b,c,d){var e;if(b.type===Qf){if(b.source.$e)return this.Fa(a,b.path,b.Oa,c,d);x(b.source.Ze,"Unknown source.");e=b.source.wf;return this.Sa(a,b.path,b.Oa,c,d,e)}if(b.type===Rf){if(b.source.$e)return this.ae(a,b.path,b.children,c,d);x(b.source.Ze,"Unknown source.");e=b.source.wf;return this.$d(a,b.path,b.children,c,d,e)}if(b.type===Sf){if(b.sf)a:{var f=b.path;Tf(this,a);b=a.u;e=a.X;if(a.F){x(a.u,"Must have event snap if we have server snap");var g=c.Ya(f,a.u,a.F);if(g)if(b=a.u.L(f,
g),f.e())b=this.G(b);else{e=G(f);b=b.B(e);a=this.Ra(a,e,b,a.F,a.o,c,d);break a}}else if(a.o)if(a.u)(d=c.Ob())?b=this.G(d):(c=c.Ya(f,a.u,a.o))&&(b=this.G(b.L(f,c)));else{if(x(a.X,"We must at least have complete children"),x(!f.e(),"If the path were empty, we would have an event snap from the set"),c=c.Ya(f,a.X,a.o))e=a.X.L(f,c),e=this.G(e)}else if(a.u)(c=c.Ob())&&(b=this.G(c));else if(a.X){x(!f.e(),"If the path was empty, we would have an event snap");g=G(f);if(a.X.Y(g)){a=(b=c.Ib.Ob(c.Gb.k(g)))?this.Ra(a,
g,b,a.F,a.o,c,d):this.Ra(a,g,K,a.F,a.o,c,null);break a}x(1<Q(f),"Must be a deep set being reverted")}a=new Uf(a.F,a.o,b,e)}else a=this.Ea(a,b.path,c,d);return a}if(b.type===Vf)return b=b.path,Tf(this,a),this.Sa(a,b,(a.ab()||K).da(b),c,d,!1);throw ib("Unknown operation type: "+b.type);};function Tf(a,b){Wf(a,b.F);Wf(a,b.o);Wf(a,b.u);Wf(a,b.X)}function Wf(a,b){x(!b||a.Yb(b),"Expected an indexed snap")}
h.Fa=function(a,b,c,d,e){Tf(this,a);if(b.e())return b=this.G(c),new Uf(a.F,a.o,b,null);var f=X(a)||K,g=G(b);return 1===Q(b)||a.u||f.Y(g)?(c=f.B(G(b)).L(R(b),c),this.Ra(a,G(b),c,a.F,a.o,d,e)):a};h.ae=function(a,b,c,d,e){Tf(this,a);var f=this,g=a;Xf(c,function(c,l){var m=b.k(c);Yf(a,G(m))&&(g=f.Fa(g,m,l,d,e))});Xf(c,function(c,l){var m=b.k(c);Yf(a,G(m))||(g=f.Fa(g,m,l,d,e))});return g};
h.Ea=function(a,b,c,d){var e=a.u,f=a.X,g;Tf(this,a);if(a.F){x(e,"If we have a server snap, we must have an event snap");var k=c.Ya(b,a.u,a.F);if(k)if(b.e())e=this.G(k);else return g=G(b),b=e.L(b,k).B(g),this.Ra(a,g,b,a.F,a.o,c,d)}else if(a.o)if(e){var l=!1;a.o.ca(L,function(a,b){l||e.B(a).ja(b)||(l=!0);l&&(e=e.I(a,b))});l&&(e=this.G(e))}else if(f&&(x(0<Q(b),"If it were an empty path, we would have an event snap"),g=G(b),1===Q(b)||f.Y(g))&&(k=c.Ya(b,f,a.o)))return b=f.L(b,k).B(g),this.Ra(a,g,b,a.F,
a.o,c,d);return new Uf(a.F,a.o,e,f)};
h.Sa=function(a,b,c,d,e,f){var g;Tf(this,a);var k=a.F,l=a.o;if(a.F)k=b.e()?this.G(c,f):this.G(a.F.L(b,c),f);else if(b.e())k=this.G(c,f),l=null;else if(1===Q(b)&&(a.o||!c.e()))l=a.o||this.Ia(K),l=this.G(l.L(b,c),f);else if(a.o&&(g=G(b),a.o.Y(g)))var m=a.o.B(g).L(R(b),c),l=this.G(a.o.I(g,m),f);g=!1;f=a.u;m=a.X;if(k!==a.F||l!==a.o)if(k&&!f)f=this.G(d.xa(k)),m=null;else if(k&&f&&!c.e()&&k.da(b).ja(f.da(b)))g=!0;else if(c=d.Ya(b,f,k||l))if(b.e())f=this.G(c),m=null;else{g=G(b);b=R(b);a:{f=g;if(a.u)m=a.u.B(f);
else if(a.X)a.X.Y(f)?m=a.X.B(f):(x(b.e(),"According to precondition, this must be true"),m=K);else{if(b.e()){m=c;break a}x(a.F||a.o,"If we do not have event data, we must have server data");m=(a.F||a.o).B(f)}m=m.e()&&a.ab()?a.ab().B(f).L(b,c):m.L(b,c)}return this.Ra(a,g,m,k,l,d,e)}else g=!0;x(!g||f===a.u&&m===a.X,"We thought we could skip diffing, but we changed the eventCache.");return new Uf(k,l,f,m)};
h.$d=function(a,b,c,d,e,f){if(!a.F&&!a.o&&b.e())return a;Tf(this,a);var g=this,k=a;Xf(c,function(c,m){var r=b.k(c);Yf(a,G(r))&&(k=g.Sa(k,r,m,d,e,f))});Xf(c,function(c,m){var r=b.k(c);Yf(a,G(r))||(k=g.Sa(k,r,m,d,e,f))});return k};h.Ra=function(a,b,c,d,e){var f=a.u;a=a.X;f?f=this.G(f.I(b,c)):(a||(a=this.Ia(K)),a=this.G(a.I(b,c)));return new Uf(d,e,f,a)};h.G=function(a){return this.Ia(a)};function Yf(a,b){var c=X(a),d=a.ab();return!!(c&&c.Y(b)||d&&d.Y(b))};function Zf(a){this.gb=a;this.index=a.m;this.gb.ga&&n(pc(this.gb))?(a=qc(this.gb),a=this.index.ye(pc(this.gb),a)):a=this.index.Ae();this.Fb=a;this.gb.na&&n(rc(this.gb))?(a=sc(this.gb),a=this.index.ye(rc(this.gb),a)):a=this.index.ze();this.pb=a}na(Zf,Pf);Zf.prototype.Ia=function(a){return a.Wd(this.index)};Zf.prototype.Yb=function(a){return a.Yb(this.index)};
Zf.prototype.G=function(a,b){if(!1===b)return Zf.oc.G.call(this,a,!1);if(a.P())return this.Ia(K);for(var c=this.Ia(a),d=this.Fb,e=this.pb,f=H(this.index),g=c.Aa(this.index),k=U(g);k&&0<f(d,k);)c=c.I(k.name,K),k=U(g);g=c.rb(e,this.index);for((k=U(g))&&0>=f(k,e)&&(k=U(g));k;)c=c.I(k.name,K),k=U(g);return c};
Zf.prototype.Fa=function(a,b,c,d,e){Tf(this,a);if(1<Q(b)){var f=G(b);if((null!==X(a)?X(a):K).Y(f))return Zf.oc.Fa.call(this,a,b,c,d,e);var g=null!==e?e:a.ab(),g=null!==g&&g.Y(f)?g.B(f):null,g=d.k(f).xa(g);return null!==g?(b=g.L(R(b),c),this.Ra(a,f,b,a.F,a.o,d,e)):a}return Zf.oc.Fa.call(this,a,b,c,d,e)};function $f(a){Zf.call(this,a);this.Ma=!(""===a.Hb?a.ga:"l"===a.Hb);this.bb=tc(a)}na($f,Zf);
$f.prototype.G=function(a,b){if(!1===b)return $f.oc.G.call(this,a,!1);if(a.P())return this.Ia(K);var c=this.Ia(a),d,e,f,g;if(2*this.bb<a.Ua())for(d=this.Ia(K.ib(a.O())),c=this.Ma?c.Sb(this.pb,this.index):c.rb(this.Fb,this.index),e=U(c),f=0;e&&f<this.bb;)if(g=this.Ma?0>=H(this.index)(this.Fb,e):0>=H(this.index)(e,this.pb))d=d.I(e.name,e.K),f++,e=U(c);else break;else{d=this.Ia(a);var k,l,m=H(this.index);if(this.Ma){c=c.bf(this.index);k=this.pb;l=this.Fb;var r=m,m=function(a,b){return-1*r(a,b)}}else c=
c.Aa(this.index),k=this.Fb,l=this.pb;f=0;var s=!1;for(e=U(c);e;)!s&&0>=m(k,e)&&(s=!0),(g=s&&f<this.bb&&0>=m(e,l))?f++:d=d.I(e.name,K),e=U(c)}return d};$f.prototype.Ra=function(a,b,c,d,e,f,g){var k=X(a);return!k||k.Ua()<this.bb?$f.oc.Ra.call(this,a,b,c,d,e,f,g):(b=ag(this,a,b,c,f,g||d))?a.u?new Uf(d,e,b,null):new Uf(d,e,null,b):new Uf(d,e,a.u,a.X)};
function ag(a,b,c,d,e,f){var g=H(a.index),k;k=a.Ma?function(a,b){return-1*g(a,b)}:g;b=X(b);x(b.Ua()===a.bb,"Limit should be full.");var l=new I(c,d),m=a.Ma?ld(b,a.index):md(b,a.index);x(null!=m,"Shouldn't be null, since oldEventCache shouldn't be empty.");var r=0>=H(a.index)(a.Fb,l)&&0>=H(a.index)(l,a.pb);if(b.Y(c)){f=e.de(f,m,1,a.Ma,a.index);e=null;0<f.length&&(e=f[0],e.name===c&&(e=2<=f.length?f[1]:null));k=null==e?1:k(e,l);if(r&&!d.e()&&0<=k)return b.I(c,d);c=b.I(c,K);return null!=e&&0>=H(a.index)(a.Fb,
e)&&0>=H(a.index)(e,a.pb)?c.I(e.name,e.K):c}return d.e()?null:r?0<=k(m,l)?b.I(c,d).I(m.name,K):null:null};function bg(a){this.m=a}na(bg,Pf);bg.prototype.Ia=function(a){return a.Wd(this.m)};bg.prototype.Yb=function(a){return a.Yb(this.m)};function cg(a){this.U=a;this.m=a.w.m}
function dg(a,b,c,d){var e=[],f=a.m,g=La(Ka(b,function(a){return"child_changed"===a.type&&f.df(a.$f,a.Wa)}),function(a){return new W("child_moved",a.Wa,a.nb)}),k=Pa(b,function(a){return"child_removed"!==a.type&&"child_added"!==a.type});for(la(Ra,b,k,0).apply(null,g);0<b.length;){var g=b[0].type,k=eg(b,g),l=b.slice(0,k);b=b.slice(k);"value"===g||"children_added"===g||"children_removed"===g?x(1===l.length,"We should not have more than one of these at a view"):Ta(l,q(a.Lf,a));e=e.concat(fg(a,d,l,c))}return e}
function eg(a,b){var c=Pa(a,function(a){return a.type!==b});return-1===c?a.length:c}
function fg(a,b,c,d){for(var e=[],f=0;f<c.length;++f)for(var g=c[f],k=null,l=null,m=0;m<b.length;++m){var r=b[m];if(r.pf(g.type)){if(!k&&!l)if("children_added"===g.type){var s=a,y=g.Wa,l=[];if(!y.P()&&!y.e())for(var s=y.Aa(s.m),y=null,N=U(s);N;){var Je=new W("child_added",N.K,N.name);Je.Rc=y;l.push(Je);y=N.name;N=U(s)}}else if("children_removed"===g.type){if(s=a,y=g.Wa,l=[],!y.P()&&!y.e())for(s=y.Aa(s.m),y=U(s);y;)l.push(new W("child_removed",y.K,y.name)),y=U(s)}else k=g,"value"!==k.type&&"child_removed"!==
k.type&&(k.Rc=d.af(k.nb,k.Wa,a.m));if(k)e.push(r.createEvent(k,a.U));else for(s=0;s<l.length;++s)e.push(r.createEvent(l[s],a.U))}}return e}cg.prototype.Lf=function(a,b){if(null==a.nb||null==b.nb)throw ib("Should only compare child_ events.");return this.m.compare(new I(a.nb,a.Wa),new I(b.nb,b.Wa))};function gg(a,b){this.U=a;var c=a.w;wc(c)?(this.ec=new bg(c.m),this.ld=Kf):c.ka?(this.ec=new $f(c),this.ld=new Of(tc(c),c.m,this.ec.Ma)):(this.ec=new Zf(c),this.ld=Kf);c=this.ec;this.ha=new Uf(b.F&&c.G(b.F,!1),b.o&&c.G(b.o,!1),b.u&&c.G(b.u),b.X&&c.G(b.X));this.ya=[];this.le=new cg(a)}function hg(a){return a.U}h=gg.prototype;h.ab=function(){return this.ha.ab()};h.za=function(a){var b=this.ha.za();return b&&(wc(this.U.w)||!a.e()&&!b.B(G(a)).e())?b.da(a):null};h.e=function(){return 0===this.ya.length};
h.Jb=function(a){this.ya.push(a)};h.hb=function(a,b){var c=[];if(b){x(null==a,"A cancel should cancel all event registrations.");var d=this.U.path;Ja(this.ya,function(a){(a=a.Te(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.ya.length;++f){var g=this.ya[f];if(!g.matches(a))e.push(g);else if(a.cf()){e=e.concat(this.ya.slice(f+1));break}}this.ya=e}else this.ya=[];return c};
h.Xa=function(a,b,c){a.type===Rf&&null!==a.source.fc&&(x(this.ha.za(),"We should always have a full cache before handling merges"),x(!!this.ha.u,"Missing event cache, even though we have a server cache"));var d=this.ha;b=this.ec.Xa(d,a,b,c);Tf(this.ec,b);this.ha=b;return X(b)!==X(d)?(a=Lf(this.ld,d,b,a.path),d=X(b),dg(this.le,a,d,this.ya)):b.u&&!d.u?(x(X(b)===X(d),"Caches should be the same."),d=X(b),dg(this.le,[new W("value",d)],d,this.ya)):[]};function Uf(a,b,c,d){this.F=a;this.o=b;this.u=c;this.X=d;x(null==a||null==b,"Only one of serverSnap / serverChildren can be non-null.");x(null==c||null==d,"Only one of eventSnap / eventChildren can be non-null.")}function X(a){return a.u||a.X}Uf.prototype.ab=function(){return this.F||this.o};Uf.prototype.za=function(){return this.F};var ig=new Uf(null,null,null,null);function jg(a,b){this.value=a;this.children=b||kg}var kg=new Lc(function(a,b){return a===b?0:a<b?-1:1}),lg=new jg(null);function mg(a){var b=lg;A(a,function(a,d){b=b.set(new P(d),a)});return b}h=jg.prototype;h.e=function(){return null===this.value&&this.children.e()};function ng(a,b,c){if(null!=a.value&&c(a.value))return{path:S,value:a.value};if(b.e())return null;var d=G(b);a=a.children.get(d);return null!==a?(b=ng(a,R(b),c),null!=b?{path:(new P(d)).k(b.path),value:b.value}:null):null}
function og(a,b){return ng(a,b,function(){return!0})}h.subtree=function(a){if(a.e())return this;var b=this.children.get(G(a));return null!==b?b.subtree(R(a)):lg};h.set=function(a,b){if(a.e())return new jg(b,this.children);var c=G(a),d=(this.children.get(c)||lg).set(R(a),b),c=this.children.Ja(c,d);return new jg(this.value,c)};
h.remove=function(a){if(a.e())return this.children.e()?lg:new jg(null,this.children);var b=G(a),c=this.children.get(b);return c?(a=c.remove(R(a)),b=a.e()?this.children.remove(b):this.children.Ja(b,a),null===this.value&&b.e()?lg:new jg(this.value,b)):this};h.get=function(a){if(a.e())return this.value;var b=this.children.get(G(a));return b?b.get(R(a)):null};
function pg(a,b,c){if(b.e())return c;var d=G(b);b=pg(a.children.get(d)||lg,R(b),c);d=b.e()?a.children.remove(d):a.children.Ja(d,b);return new jg(a.value,d)}function qg(a,b){return rg(a,S,b)}function rg(a,b,c){var d={};a.children.Ba(function(a,f){d[a]=rg(f,b.k(a),c)});return c(b,a.value,d)}function sg(a,b,c){return tg(a,b,S,c)}function tg(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=G(b);return(a=a.children.get(e))?tg(a,R(b),c.k(e),d):null}
function ug(a,b,c){if(!b.e()){var d=!0;a.value&&(d=c(S,a.value));!0===d&&(d=G(b),(a=a.children.get(d))&&vg(a,R(b),S.k(d),c))}}function vg(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=G(b);return(a=a.children.get(e))?vg(a,R(b),c.k(e),d):lg}function Xf(a,b){wg(a,S,b)}function wg(a,b,c){a.children.Ba(function(a,e){wg(e,b.k(a),c)});a.value&&c(b,a.value)}function xg(a,b){a.children.Ba(function(a,d){d.value&&b(a,d.value)})};function yg(){this.qa={}}h=yg.prototype;h.e=function(){return Bd(this.qa)};h.Xa=function(a,b,c){var d=a.source.fc;if(null!==d)return d=v(this.qa,d),x(null!=d,"SyncTree gave us an op for an invalid query."),d.Xa(a,b,c);var e=[];A(this.qa,function(d){e=e.concat(d.Xa(a,b,c))});return e};h.Jb=function(a,b,c,d,e){var f=a.Da(),g=v(this.qa,f);g||(c=(g=c.xa(d))?null:c.ce(e),d=new Uf(d,e,g,c),g=new gg(a,d),this.qa[f]=g);g.Jb(b);a=g;(f=X(a.ha))?(d=Lf(a.ld,ig,a.ha,S),b=dg(a.le,d,f,b?[b]:a.ya)):b=[];return b};
h.hb=function(a,b,c){var d=a.Da(),e=[],f=[],g=null!=zg(this);if("default"===d){var k=this;A(this.qa,function(a,d){f=f.concat(a.hb(b,c));a.e()&&(delete k.qa[d],wc(a.U.w)||e.push(a.U))})}else{var l=v(this.qa,d);l&&(f=f.concat(l.hb(b,c)),l.e()&&(delete this.qa[d],wc(l.U.w)||e.push(l.U)))}g&&null==zg(this)&&e.push(new O(a.g,a.path));return{mg:e,Pf:f}};function Ag(a){return Ka(xd(a.qa),function(a){return!wc(a.U.w)})}h.za=function(a){var b=null;A(this.qa,function(c){b=b||c.za(a)});return b};
function Bg(a,b){if(wc(b.w))return zg(a);var c=b.Da();return v(a.qa,c)}function zg(a){return Ad(a.qa,function(a){return wc(a.U.w)})||null};function Cg(){this.V=lg;this.ra=[];this.Ec=-1}
function Dg(a,b){var c=Pa(a.ra,function(a){return a.Xd===b});x(0<=c,"removeWrite called with nonexistent writeId.");var d=a.ra[c];a.ra.splice(c,1);for(var e=!1,f=!1,g=!1,k=a.ra.length-1;!e&&0<=k;){var l=a.ra[k];k>=c&&Eg(l,d.path)?e=!0:!f&&d.path.contains(l.path)&&(k>=c?f=!0:g=!0);k--}e||(f||g?Fg(a):d.Oa?a.V=a.V.remove(d.path):A(d.children,function(b,c){a.V=a.V.remove(d.path.k(c))}));c=d.path;if(og(a.V,c)){if(g)return c;x(e,"Must have found a shadow");return null}return c}h=Cg.prototype;
h.Ob=function(a){var b=og(this.V,a);if(b){var c=b.value;a=T(b.path,a);return c.da(a)}return null};
h.xa=function(a,b,c,d){var e,f;if(c||d)return e=this.V.subtree(a),!d&&e.e()?b:d||null!==b||null!==e.value?(e=Gg(this.ra,function(b){return(b.visible||d)&&(!c||!(0<=Ia(c,b.Xd)))&&(b.path.contains(a)||a.contains(b.path))},a),f=b||K,Xf(e,function(a,b){f=f.L(a,b)}),f):null;if(e=og(this.V,a))return b=T(e.path,a),e.value.da(b);e=this.V.subtree(a);return e.e()?b:b||e.value?(f=b||K,Xf(e,function(a,b){f=f.L(a,b)}),f):null};
h.ce=function(a,b){var c=!1,d=K,e=this.Ob(a);if(e)return e.P()||e.ca(L,function(a,b){d=d.I(a,b)}),d;if(b)return d=b,xg(this.V.subtree(a),function(a,b){d=d.I(a,b)}),d;xg(this.V.subtree(a),function(a,b){c=!0;d=d.I(a,b)});return c?d:null};h.Ya=function(a,b,c,d){x(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.k(b);if(og(this.V,a))return null;a=this.V.subtree(a);if(a.e())return d.da(b);var e=d.da(b);Xf(a,function(a,b){e=e.L(a,b)});return e};
h.de=function(a,b,c,d,e,f){var g;a=this.V.subtree(a);a.value?g=a.value:b&&(g=b,Xf(a,function(a,b){g=g.L(a,b)}));if(g){b=[];g=g.Wd(f);a=H(f);e=e?g.Sb(c,f):g.rb(c,f);for(f=U(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=U(e);return b}return[]};function Eg(a,b){return a.Oa?a.path.contains(b):!!zd(a.children,function(c,d){return a.path.k(d).contains(b)})}function Fg(a){a.V=Gg(a.ra,Hg,S);a.Ec=0<a.ra.length?a.ra[a.ra.length-1].Xd:-1}function Hg(a){return a.visible}
function Gg(a,b,c){for(var d=lg,e=0;e<a.length;++e){var f=a[e];if(b(f)){var g=f.path,k;f.Oa?(c.contains(g)?(k=T(c,g),f=f.Oa):(k=S,f=f.Oa.da(T(g,c))),d=Ig(d,k,f)):d=Jg(d,f.path,f.children)}}return d}function Ig(a,b,c){var d=og(a,b);if(d){var e=d.value,d=d.path;b=T(d,b);c=e.L(b,c);a=pg(a,d,new jg(c))}else a=pg(a,b,new jg(c));return a}
function Jg(a,b,c){var d=og(a,b);if(d){var e=d.value,d=d.path,f=T(d,b),g=e;A(c,function(a,b){g=g.L(f.k(b),a)});a=pg(a,d,new jg(g))}else A(c,function(c,d){a=pg(a,b.k(d),new jg(c))});return a}function Kg(a,b){this.Gb=a;this.Ib=b}h=Kg.prototype;h.Ob=function(){return this.Ib.Ob(this.Gb)};h.xa=function(a,b,c){return this.Ib.xa(this.Gb,a,b,c)};h.ce=function(a){return this.Ib.ce(this.Gb,a)};h.Ya=function(a,b,c){return this.Ib.Ya(this.Gb,a,b,c)};
h.de=function(a,b,c,d,e){return this.Ib.de(this.Gb,a,b,c,d,e)};h.k=function(a){return new Kg(this.Gb.k(a),this.Ib)};function Lg(a,b,c){this.type=Qf;this.source=a;this.path=b;this.Oa=c}Lg.prototype.Mc=function(a){return this.path.e()?new Lg(this.source,S,this.Oa.B(a)):new Lg(this.source,R(this.path),this.Oa)};function Mg(a,b){this.type=Sf;this.source=Ng;this.path=a;this.sf=b}Mg.prototype.Mc=function(){return this.path.e()?this:new Mg(R(this.path),this.sf)};function Og(a,b){this.type=Vf;this.source=a;this.path=b}Og.prototype.Mc=function(){return this.path.e()?new Og(this.source,S):new Og(this.source,R(this.path))};function Pg(a,b,c){this.type=Rf;this.source=a;this.path=b;this.children=c}Pg.prototype.Mc=function(a){if(this.path.e())return a=this.children.subtree(new P(a)),a.e()?null:a.value?new Lg(this.source,S,a.value):new Pg(this.source,S,a);x(G(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new Pg(this.source,R(this.path),this.children)};var Qf=0,Rf=1,Sf=2,Vf=3;function Qg(a,b,c,d){this.$e=a;this.Ze=b;this.fc=c;this.wf=d;x(!d||b,"Tagged queries must be from server.")}var Ng=new Qg(!0,!1,null,!1),Rg=new Qg(!1,!0,null,!1);function Sg(a){this.ma=lg;this.Bb=new Cg;this.Zc={};this.gc={};this.Fc=a}h=Sg.prototype;h.Fa=function(a,b,c,d){var e=this.Bb,f=d;x(c>e.Ec,"Stacking an older write on top of newer ones");n(f)||(f=!0);e.ra.push({path:a,Oa:b,Xd:c,visible:f});f&&(e.V=Ig(e.V,a,b));e.Ec=c;return d?Tg(this,new Lg(Ng,a,b)):[]};
h.ae=function(a,b,c){var d=this.Bb;x(c>d.Ec,"Stacking an older merge on top of newer ones");d.ra.push({path:a,children:b,Xd:c,visible:!0});d.V=Jg(d.V,a,b);d.Ec=c;b=mg(b);return Tg(this,new Pg(Ng,a,b))};h.Ea=function(a,b){b=b||!1;var c=Dg(this.Bb,a);return null==c?[]:Tg(this,new Mg(c,b))};h.Sa=function(a,b){return Tg(this,new Lg(Rg,a,b))};h.$d=function(a,b){var c=mg(b);return Tg(this,new Pg(Rg,a,c))};
function Ug(a,b,c,d){d=Cd(a.Zc,"_"+d);if(null!=d){var e=Vg(d);d=e.path;e=e.fc;b=T(d,b);c=new Lg(new Qg(!1,!0,e,!0),b,c);return Wg(a,d,c)}return[]}function Xg(a,b,c,d){if(d=Cd(a.Zc,"_"+d)){var e=Vg(d);d=e.path;e=e.fc;b=T(d,b);c=mg(c);c=new Pg(new Qg(!1,!0,e,!0),b,c);return Wg(a,d,c)}return[]}
h.Jb=function(a,b){var c=a.path,d=null,e=!1;ug(this.ma,c,function(a,b){var f=T(a,c);d=b.za(f);e=e||null!=zg(b);return!d});var f=this.ma.get(c);f?(e=e||null!=zg(f),d=d||f.za(S)):(f=new yg,this.ma=this.ma.set(c,f));var g=null;if(!d){var k=!1,g=K;xg(this.ma.subtree(c),function(a,b){var c=b.za(S);c&&(k=!0,g=g.I(a,c))});k||(g=null)}var l=null!=Bg(f,a);if(!l&&!wc(a.w)){var m=Yg(a);x(!(m in this.gc),"View does not exist, but we have a tag");var r=Zg++;this.gc[m]=r;this.Zc["_"+r]=m}m=f.Jb(a,b,new Kg(c,this.Bb),
d,g);l||e||(f=Bg(f,a),m=m.concat($g(this,a,f)));return m};
h.hb=function(a,b,c){var d=a.path,e=this.ma.get(d),f=[];if(e&&("default"===a.Da()||null!=Bg(e,a))){f=e.hb(a,b,c);e.e()&&(this.ma=this.ma.remove(d));e=f.mg;f=f.Pf;b=-1!==Pa(e,function(a){return wc(a.w)});var g=sg(this.ma,d,function(a,b){return null!=zg(b)});if(b&&!g&&(d=this.ma.subtree(d),!d.e()))for(var d=ah(d),k=0;k<d.length;++k){var l=d[k],m=l.U,l=bh(this,l);this.Fc.Le(m,ch(this,m),l.qd,l.H)}if(!g&&0<e.length&&!c)if(b)this.Fc.Od(a,null);else{var r=this;Ja(e,function(a){a.Da();var b=r.gc[Yg(a)];
r.Fc.Od(a,b)})}dh(this,e)}return f};h.xa=function(a,b){var c=this.Bb,d=sg(this.ma,a,function(b,c){var d=T(b,a);if(d=c.za(d))return d});return c.xa(a,d,b,!0)};function ah(a){return qg(a,function(a,c,d){if(c&&null!=zg(c))return[zg(c)];var e=[];c&&(e=Ag(c));A(d,function(a){e=e.concat(a)});return e})}function dh(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!wc(d.w)){var d=Yg(d),e=a.gc[d];delete a.gc[d];delete a.Zc["_"+e]}}}
function $g(a,b,c){var d=b.path,e=ch(a,b);c=bh(a,c);b=a.Fc.Le(b,e,c.qd,c.H);d=a.ma.subtree(d);if(e)x(null==zg(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=qg(d,function(a,b,c){if(!a.e()&&b&&null!=zg(b))return[hg(zg(b))];var d=[];b&&(d=d.concat(La(Ag(b),function(a){return a.U})));A(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Fc.Od(c,ch(a,c));return b}
function bh(a,b){var c=b.U,d=ch(a,c);return{qd:function(){return(b.ab()||K).hash()},H:function(b,f){if("ok"===b){if(f&&"object"===typeof f&&u(f,"w")){var g=v(f,"w");ea(g)&&0<=Ia(g,"no_index")&&z("Using an unspecified index. Consider adding "+('".indexOn": "'+c.w.m.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}if(d){var k=c.path;if(g=Cd(a.Zc,"_"+d))var l=Vg(g),g=l.path,l=l.fc,k=T(g,k),k=new Og(new Qg(!1,!0,l,!0),k),g=Wg(a,g,k);else g=[]}else g=Tg(a,new Og(Rg,
c.path));return g}g="Unknown Error";"too_big"===b?g="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?g="Client doesn't have permission to access the desired data.":"unavailable"==b&&(g="The service is unavailable");g=Error(b+": "+g);g.code=b.toUpperCase();return a.hb(c,null,g)}}}function Yg(a){return a.path.toString()+"$"+a.Da()}
function Vg(a){var b=a.indexOf("$");x(-1!==b&&b<a.length-1,"Bad queryKey.");return{fc:a.substr(b+1),path:new P(a.substr(0,b))}}function ch(a,b){var c=Yg(b);return v(a.gc,c)}var Zg=1;function Wg(a,b,c){var d=a.ma.get(b);x(d,"Missing sync point for query tag that we're tracking");return d.Xa(c,new Kg(b,a.Bb),null)}function Tg(a,b){return eh(a,b,a.ma,null,new Kg(S,a.Bb))}
function eh(a,b,c,d,e){if(b.path.e())return fh(a,b,c,d,e);var f=c.get(S);null==d&&null!=f&&(d=f.za(S));var g=[],k=G(b.path),l=b.Mc(k);if((c=c.children.get(k))&&l)var m=d?d.B(k):null,k=e.k(k),g=g.concat(eh(a,l,c,m,k));f&&(g=g.concat(f.Xa(b,e,d)));return g}function fh(a,b,c,d,e){var f=c.get(S);null==d&&null!=f&&(d=f.za(S));var g=[];c.children.Ba(function(c,f){var m=d?d.B(c):null,r=e.k(c),s=b.Mc(c);s&&(g=g.concat(fh(a,s,f,m,r)))});f&&(g=g.concat(f.Xa(b,e,d)));return g};function gh(a){this.Q=a;this.Qa=Ld(a);this.Z=new Te;this.zd=1;this.S=new xe(this.Q,q(this.Cd,this),q(this.Ad,this),q(this.Ee,this));this.ug=Md(a,q(function(){return new Id(this.Qa,this.S)},this));this.pc=new Fc;this.qe=new Se;var b=this;this.ud=new Sg({Le:function(a,d,e,f){d=[];e=b.qe.Wc.da(a.path);e.e()||(d=b.ud.Sa(a.path,e),setTimeout(function(){f("ok")},0));return d},Od:ba});hh(this,"connected",!1);this.ea=new Pe;this.T=new tf(a,q(this.S.T,this.S),q(this.S.Pe,this.S),q(this.Be,this));this.jd=0;
this.re=null;this.M=new Sg({Le:function(a,d,e,f){Be(b.S,a,e,d,function(d,e){var l=f(d,e);Xe(b.Z,a.path,l)});return[]},Od:function(a,d){var e=b.S,f=a.path.toString(),g=a.Da();e.f("Unlisten called for "+f+" "+g);if(De(e,f,g)&&e.ia){var k=Dc(a);e.f("Unlisten on "+f+" for "+g);f={p:f};d&&(f.q=k,f.t=d);e.wa("n",f)}}})}h=gh.prototype;h.toString=function(){return(this.Q.Cb?"https://":"http://")+this.Q.host};h.name=function(){return this.Q.yb};
function ih(a){var b=new P(".info/serverTimeOffset");a=a.qe.Wc.da(b).N()||0;return(new Date).getTime()+a}function jh(a){a=a={timestamp:ih(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}h.Cd=function(a,b,c,d){this.jd++;var e=new P(a);b=this.re?this.re(a,b):b;a=[];d?c?(b=fd(b,function(a){return J(a)}),a=Xg(this.M,e,b,d)):(b=J(b),a=Ug(this.M,e,b,d)):c?(d=fd(b,function(a){return J(a)}),a=this.M.$d(e,d)):(d=J(b),a=this.M.Sa(e,d));d=e;0<a.length&&(d=kh(this,e));Xe(this.Z,d,a)};
h.Ad=function(a){hh(this,"connected",a);!1===a&&lh(this)};h.Ee=function(a){var b=this;Cb(a,function(a,d){hh(b,d,a)})};h.Be=function(a){hh(this,"authenticated",a)};function hh(a,b,c){b=new P("/.info/"+b);c=J(c);var d=a.qe;d.Wc=d.Wc.L(b,c);c=a.ud.Sa(b,c);Xe(a.Z,b,c)}
h.Db=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,Cg:c});var e=jh(this);b=J(b,c);var e=If(b,e),f=this.zd++,e=this.M.Fa(a,e,f,!0);Ue(this.Z,e);var g=this;this.S.put(a.toString(),b.N(!0),function(b,c){var e="ok"===b;e||z("set at "+a+" failed: "+b);e=g.M.Ea(f,!e);Xe(g.Z,a,e);mh(d,b,c)});e=nh(this,a);kh(this,e);Xe(this.Z,e,[])};
h.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=jh(this),f={};A(b,function(a,b){d=!1;var c=J(a);f[b]=If(c,e)});if(d)kb("update() called with empty data.  Don't do anything."),mh(c,"ok");else{var g=this.zd++,k=this.M.ae(a,f,g);Ue(this.Z,k);var l=this;Ke(this.S,a.toString(),b,function(b,d){x("ok"===b||"permission_denied"===b,"merge at "+a+" failed.");var e="ok"===b;e||z("update at "+a+" failed: "+b);var e=l.M.Ea(g,!e),f=a;0<e.length&&(f=kh(l,a));Xe(l.Z,f,e);mh(c,b,d)});
b=nh(this,a);kh(this,b);Xe(this.Z,a,[])}};function lh(a){a.f("onDisconnectEvents");var b=jh(a),c=[];Re(Hf(a.ea,b),S,function(b,e){c=c.concat(a.M.Sa(b,e));var f=nh(a,b);kh(a,f)});a.ea=new Pe;Xe(a.Z,S,c)}h.Ce=function(a,b){var c=this;this.S.Ce(a.toString(),function(d,e){"ok"===d&&Qe(c.ea,a);mh(b,d,e)})};function oh(a,b,c,d){var e=J(c);Fe(a.S,b.toString(),e.N(!0),function(c,g){"ok"===c&&a.ea.ic(b,e);mh(d,c,g)})}
function ph(a,b,c,d,e){var f=J(c,d);Fe(a.S,b.toString(),f.N(!0),function(c,d){"ok"===c&&a.ea.ic(b,f);mh(e,c,d)})}function qh(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(kb("onDisconnect().update() called with empty data.  Don't do anything."),mh(d,"ok")):He(a.S,b.toString(),c,function(e,f){if("ok"===e)for(var l in c){var m=J(c[l]);a.ea.ic(b.k(l),m)}mh(d,e,f)})}function Bc(a,b,c){c=".info"===G(b.path)?a.ud.Jb(b,c):a.M.Jb(b,c);Cc(a.Z,b.path,c)}h.tb=function(){this.S.tb()};h.kc=function(){this.S.kc()};
h.Me=function(a){if("undefined"!==typeof console){a?(this.Nd||(this.Nd=new Hd(this.Qa)),a=this.Nd.get()):a=this.Qa.get();var b=Ma(yd(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};h.Ne=function(a){Gd(this.Qa,a);this.ug.uf[a]=!0};h.f=function(a){kb("r:"+this.S.id+":",arguments)};function mh(a,b,c){a&&Fb(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function rh(a,b,c,d,e){function f(){}a.f("transaction on "+b);var g=new O(a,b);g.zb("value",f);c={path:b,update:c,H:d,status:null,lf:hb(),Qe:e,rf:0,Vd:function(){g.bc("value",f)},Yd:null,sa:null,fd:null,gd:null,hd:null};d=a.M.xa(b,void 0)||K;c.fd=d;d=c.update(d.N());if(n(d)){Tb("transaction failed: Data returned ",d);c.status=1;e=Gc(a.pc,b);var k=e.ta()||[];k.push(c);Hc(e,k);"object"===typeof d&&null!==d&&u(d,".priority")?(k=v(d,".priority"),x(Rb(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
k=(a.M.xa(b)||K).O().N();e=jh(a);d=J(d,k);e=If(d,e);c.gd=d;c.hd=e;c.sa=a.zd++;c=a.M.Fa(b,e,c.sa,c.Qe);Xe(a.Z,b,c);sh(a)}else c.Vd(),c.gd=null,c.hd=null,c.H&&(a=new C(c.fd,new O(a,c.path),L),c.H(null,!1,a))}function sh(a,b){var c=b||a.pc;b||th(a,c);if(null!==c.ta()){var d=uh(a,c);x(0<d.length,"Sending zero length transaction queue");Na(d,function(a){return 1===a.status})&&vh(a,c.path(),d)}else c.pd()&&c.ca(function(b){sh(a,b)})}
function vh(a,b,c){for(var d=La(c,function(a){return a.sa}),e=a.M.xa(b,d)||K,d=e,e=e.hash(),f=0;f<c.length;f++){var g=c[f];x(1===g.status,"tryToSendTransactionQueue_: items in queue should all be run.");g.status=2;g.rf++;var k=T(b,g.path),d=d.L(k,g.gd)}d=d.N(!0);a.S.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(a.M.Ea(c[f].sa));if(c[f].H){var g=c[f].hd,k=new O(a,c[f].path);d.push(q(c[f].H,
null,null,!0,new C(g,k,L)))}c[f].Vd()}th(a,Gc(a.pc,b));sh(a);Xe(a.Z,b,e);for(f=0;f<d.length;f++)Fb(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(z("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].Yd=d;kh(a,b)}},e)}function kh(a,b){var c=wh(a,b),d=c.path(),c=uh(a,c);xh(a,c,d);return d}
function xh(a,b,c){if(0!==b.length){for(var d=[],e=[],f=La(b,function(a){return a.sa}),g=0;g<b.length;g++){var k=b[g],l=T(c,k.path),m=!1,r;x(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)m=!0,r=k.Yd,e=e.concat(a.M.Ea(k.sa,!0));else if(1===k.status)if(25<=k.rf)m=!0,r="maxretry",e=e.concat(a.M.Ea(k.sa,!0));else{var s=a.M.xa(k.path,f)||K;k.fd=s;var y=b[g].update(s.N());n(y)?(Tb("transaction failed: Data returned ",y),l=J(y),"object"===typeof y&&null!=y&&u(y,
".priority")||(l=l.ib(s.O())),s=k.sa,y=jh(a),y=If(l,y),k.gd=l,k.hd=y,k.sa=a.zd++,Qa(f,s),e=e.concat(a.M.Fa(k.path,y,k.sa,k.Qe)),e=e.concat(a.M.Ea(s,!0))):(m=!0,r="nodata",e=e.concat(a.M.Ea(k.sa,!0)))}Xe(a.Z,c,e);e=[];m&&(b[g].status=3,setTimeout(b[g].Vd,Math.floor(0)),b[g].H&&("nodata"===r?(k=new O(a,b[g].path),d.push(q(b[g].H,null,null,!1,new C(b[g].fd,k,L)))):d.push(q(b[g].H,null,Error(r),!1,null))))}th(a,a.pc);for(g=0;g<d.length;g++)Fb(d[g]);sh(a)}}
function wh(a,b){for(var c,d=a.pc;null!==(c=G(b))&&null===d.ta();)d=Gc(d,c),b=R(b);return d}function uh(a,b){var c=[];yh(a,b,c);c.sort(function(a,b){return a.lf-b.lf});return c}function yh(a,b,c){var d=b.ta();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.ca(function(b){yh(a,b,c)})}function th(a,b){var c=b.ta();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Hc(b,0<c.length?c:null)}b.ca(function(b){th(a,b)})}
function nh(a,b){var c=wh(a,b).path(),d=Gc(a.pc,b);Kc(d,function(b){zh(a,b)});zh(a,d);Jc(d,function(b){zh(a,b)});return c}
function zh(a,b){var c=b.ta();if(null!==c){for(var d=[],e=[],f=-1,g=0;g<c.length;g++)4!==c[g].status&&(2===c[g].status?(x(f===g-1,"All SENT items should be at beginning of queue."),f=g,c[g].status=4,c[g].Yd="set"):(x(1===c[g].status,"Unexpected transaction status in abort"),c[g].Vd(),e=e.concat(a.M.Ea(c[g].sa,!0)),c[g].H&&d.push(q(c[g].H,null,Error("set"),!1,null))));-1===f?Hc(b,null):c.length=f+1;Xe(a.Z,b.path(),e);for(g=0;g<d.length;g++)Fb(d[g])}};function Ah(){this.jc={}}ca(Ah);Ah.prototype.tb=function(){for(var a in this.jc)this.jc[a].tb()};Ah.prototype.interrupt=Ah.prototype.tb;Ah.prototype.kc=function(){for(var a in this.jc)this.jc[a].kc()};Ah.prototype.resume=Ah.prototype.kc;function Bh(a){var b=this;this.tc=a;this.Qd="*";lf()?this.Hc=this.sd=cf():(this.Hc=window.opener,this.sd=window);if(!b.Hc)throw"Unable to find relay frame";df(this.sd,"message",q(this.cc,this));df(this.sd,"message",q(this.hf,this));try{Ch(this,{a:"ready"})}catch(c){df(this.Hc,"load",function(){Ch(b,{a:"ready"})})}df(window,"unload",q(this.eg,this))}function Ch(a,b){b=t(b);lf()?a.Hc.doPost(b,a.Qd):a.Hc.postMessage(b,a.Qd)}
Bh.prototype.cc=function(a){var b=this,c;try{c=ua(a.data)}catch(d){}c&&"request"===c.a&&(ef(window,"message",this.cc),this.Qd=a.origin,this.tc&&setTimeout(function(){b.tc(b.Qd,c.d,function(a,c){b.If=!c;b.tc=void 0;Ch(b,{a:"response",d:a,forceKeepWindowOpen:c})})},0))};Bh.prototype.eg=function(){try{ef(this.sd,"message",this.hf)}catch(a){}this.tc&&(Ch(this,{a:"error",d:"unknown closed window"}),this.tc=void 0);try{window.close()}catch(b){}};Bh.prototype.hf=function(a){if(this.If&&"die"===a.data)try{window.close()}catch(b){}};var Y={Rf:function(){Yd=Pd=!0}};Y.forceLongPolling=Y.Rf;Y.Sf=function(){Zd=!0};Y.forceWebSockets=Y.Sf;Y.rg=function(a,b){a.g.S.Ke=b};Y.setSecurityDebugCallback=Y.rg;Y.Me=function(a,b){a.g.Me(b)};Y.stats=Y.Me;Y.Ne=function(a,b){a.g.Ne(b)};Y.statsIncrementCounter=Y.Ne;Y.jd=function(a){return a.g.jd};Y.dataUpdateCount=Y.jd;Y.Vf=function(a,b){a.g.re=b};Y.interceptServerData=Y.Vf;Y.bg=function(a){new Bh(a)};Y.onPopupOpen=Y.bg;Y.pg=function(a){Ye=a};Y.setAuthenticationServer=Y.pg;function Z(a,b){this.Sc=a;this.Ca=b}Z.prototype.cancel=function(a){D("Firebase.onDisconnect().cancel",0,1,arguments.length);F("Firebase.onDisconnect().cancel",1,a,!0);this.Sc.Ce(this.Ca,a||null)};Z.prototype.cancel=Z.prototype.cancel;Z.prototype.remove=function(a){D("Firebase.onDisconnect().remove",0,1,arguments.length);$b("Firebase.onDisconnect().remove",this.Ca);F("Firebase.onDisconnect().remove",1,a,!0);oh(this.Sc,this.Ca,null,a)};Z.prototype.remove=Z.prototype.remove;
Z.prototype.set=function(a,b){D("Firebase.onDisconnect().set",1,2,arguments.length);$b("Firebase.onDisconnect().set",this.Ca);Sb("Firebase.onDisconnect().set",a,!1);F("Firebase.onDisconnect().set",2,b,!0);oh(this.Sc,this.Ca,a,b)};Z.prototype.set=Z.prototype.set;
Z.prototype.Db=function(a,b,c){D("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);$b("Firebase.onDisconnect().setWithPriority",this.Ca);Sb("Firebase.onDisconnect().setWithPriority",a,!1);Wb("Firebase.onDisconnect().setWithPriority",2,b);F("Firebase.onDisconnect().setWithPriority",3,c,!0);ph(this.Sc,this.Ca,a,b,c)};Z.prototype.setWithPriority=Z.prototype.Db;
Z.prototype.update=function(a,b){D("Firebase.onDisconnect().update",1,2,arguments.length);$b("Firebase.onDisconnect().update",this.Ca);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;z("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Vb("Firebase.onDisconnect().update",a);F("Firebase.onDisconnect().update",2,b,!0);qh(this.Sc,
this.Ca,a,b)};Z.prototype.update=Z.prototype.update;var $={};$.rc=xe;$.DataConnection=$.rc;xe.prototype.tg=function(a,b){this.wa("q",{p:a},b)};$.rc.prototype.simpleListen=$.rc.prototype.tg;xe.prototype.Nf=function(a,b){this.wa("echo",{d:a},b)};$.rc.prototype.echo=$.rc.prototype.Nf;xe.prototype.interrupt=xe.prototype.tb;$.zf=ie;$.RealTimeConnection=$.zf;ie.prototype.sendRequest=ie.prototype.wa;ie.prototype.close=ie.prototype.close;
$.Uf=function(a){var b=xe.prototype.put;xe.prototype.put=function(c,d,e,f){n(f)&&(f=a());b.call(this,c,d,e,f)};return function(){xe.prototype.put=b}};$.hijackHash=$.Uf;$.yf=Ca;$.ConnectionTarget=$.yf;$.Da=function(a){return a.Da()};$.queryIdentifier=$.Da;$.Wf=function(a){return a.g.S.ua};$.listens=$.Wf;var Dh=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);x(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);x(20===c.length,"NextPushId: Length should be 20.");
return c}}();function O(a,b){var c,d,e;if(a instanceof gh)c=a,d=b;else{D("new Firebase",1,2,arguments.length);d=ub(arguments[0]);c=d.vg;"firebase"===d.domain&&tb(d.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");c||tb("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d.Cb||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&z("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
c=new Ca(d.host,d.Cb,c,"ws"===d.scheme||"wss"===d.scheme);d=new P(d.Pc);e=d.toString();var f;!(f=!p(c.host)||0===c.host.length||!Qb(c.yb))&&(f=0!==e.length)&&(e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),f=!(p(e)&&0!==e.length&&!Pb.test(e)));if(f)throw Error(E("new Firebase",1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(b)if(b instanceof Ah)e=b;else if(p(b))e=Ah.Qb(),c.Gd=b;else throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
else e=Ah.Qb();f=c.toString();var g=v(e.jc,f);g||(g=new gh(c),e.jc[f]=g);c=g}M.call(this,c,d,oc,!1)}na(O,M);var Eh=O,Fh=["Firebase"],Gh=aa;Fh[0]in Gh||!Gh.execScript||Gh.execScript("var "+Fh[0]);for(var Hh;Fh.length&&(Hh=Fh.shift());)!Fh.length&&n(Eh)?Gh[Hh]=Eh:Gh=Gh[Hh]?Gh[Hh]:Gh[Hh]={};O.prototype.name=function(){z("Firebase.name() being deprecated. Please use Firebase.key() instead.");D("Firebase.name",0,0,arguments.length);return this.key()};O.prototype.name=O.prototype.name;
O.prototype.key=function(){D("Firebase.key",0,0,arguments.length);var a;this.path.e()?a=null:(a=this.path,a=a.aa<a.n.length?a.n[a.n.length-1]:null);return a};O.prototype.key=O.prototype.key;O.prototype.k=function(a){D("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof P))if(null===G(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Zb("Firebase.child",b)}else Zb("Firebase.child",a);return new O(this.g,this.path.k(a))};O.prototype.child=O.prototype.k;
O.prototype.parent=function(){D("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new O(this.g,a)};O.prototype.parent=O.prototype.parent;O.prototype.root=function(){D("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.parent();)a=a.parent();return a};O.prototype.root=O.prototype.root;
O.prototype.toString=function(){D("Firebase.toString",0,0,arguments.length);var a;if(null===this.parent())a=this.g.toString();else{a=this.parent().toString()+"/";var b=this.key();a+=encodeURIComponent(String(b))}return a};O.prototype.toString=O.prototype.toString;O.prototype.set=function(a,b){D("Firebase.set",1,2,arguments.length);$b("Firebase.set",this.path);Sb("Firebase.set",a,!1);F("Firebase.set",2,b,!0);this.g.Db(this.path,a,null,b||null)};O.prototype.set=O.prototype.set;
O.prototype.update=function(a,b){D("Firebase.update",1,2,arguments.length);$b("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;z("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Vb("Firebase.update",a);F("Firebase.update",2,b,!0);if(u(a,".priority"))throw Error("update() does not currently support updating .priority.");
this.g.update(this.path,a,b||null)};O.prototype.update=O.prototype.update;O.prototype.Db=function(a,b,c){D("Firebase.setWithPriority",2,3,arguments.length);$b("Firebase.setWithPriority",this.path);Sb("Firebase.setWithPriority",a,!1);Wb("Firebase.setWithPriority",2,b);F("Firebase.setWithPriority",3,c,!0);if(".length"===this.key()||".keys"===this.key())throw"Firebase.setWithPriority failed: "+this.key()+" is a read-only object.";this.g.Db(this.path,a,b,c||null)};O.prototype.setWithPriority=O.prototype.Db;
O.prototype.remove=function(a){D("Firebase.remove",0,1,arguments.length);$b("Firebase.remove",this.path);F("Firebase.remove",1,a,!0);this.set(null,a)};O.prototype.remove=O.prototype.remove;
O.prototype.transaction=function(a,b,c){D("Firebase.transaction",1,3,arguments.length);$b("Firebase.transaction",this.path);F("Firebase.transaction",1,a,!1);F("Firebase.transaction",2,b,!0);if(n(c)&&"boolean"!=typeof c)throw Error(E("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.key()||".keys"===this.key())throw"Firebase.transaction failed: "+this.key()+" is a read-only object.";"undefined"===typeof c&&(c=!0);rh(this.g,this.path,a,b||null,c)};O.prototype.transaction=O.prototype.transaction;
O.prototype.qg=function(a,b){D("Firebase.setPriority",1,2,arguments.length);$b("Firebase.setPriority",this.path);Wb("Firebase.setPriority",1,a);F("Firebase.setPriority",2,b,!0);this.g.Db(this.path.k(".priority"),a,null,b)};O.prototype.setPriority=O.prototype.qg;O.prototype.push=function(a,b){D("Firebase.push",0,2,arguments.length);$b("Firebase.push",this.path);Sb("Firebase.push",a,!0);F("Firebase.push",2,b,!0);var c=ih(this.g),c=Dh(c),c=this.k(c);"undefined"!==typeof a&&null!==a&&c.set(a,b);return c};
O.prototype.push=O.prototype.push;O.prototype.fb=function(){$b("Firebase.onDisconnect",this.path);return new Z(this.g,this.path)};O.prototype.onDisconnect=O.prototype.fb;O.prototype.T=function(a,b,c){z("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");D("Firebase.auth",1,3,arguments.length);ac("Firebase.auth",a);F("Firebase.auth",2,b,!0);F("Firebase.auth",3,b,!0);zf(this.g.T,a,{},{remember:"none"},b,c)};O.prototype.auth=O.prototype.T;
O.prototype.Pe=function(a){D("Firebase.unauth",0,1,arguments.length);F("Firebase.unauth",1,a,!0);Af(this.g.T,a)};O.prototype.unauth=O.prototype.Pe;O.prototype.ne=function(){D("Firebase.getAuth",0,0,arguments.length);return this.g.T.ne()};O.prototype.getAuth=O.prototype.ne;O.prototype.ag=function(a,b){D("Firebase.onAuth",1,2,arguments.length);F("Firebase.onAuth",1,a,!1);Nb("Firebase.onAuth",2,b);this.g.T.zb("auth_status",a,b)};O.prototype.onAuth=O.prototype.ag;
O.prototype.Zf=function(a,b){D("Firebase.offAuth",1,2,arguments.length);F("Firebase.offAuth",1,a,!1);Nb("Firebase.offAuth",2,b);this.g.T.bc("auth_status",a,b)};O.prototype.offAuth=O.prototype.Zf;O.prototype.Df=function(a,b,c){D("Firebase.authWithCustomToken",2,3,arguments.length);ac("Firebase.authWithCustomToken",a);F("Firebase.authWithCustomToken",2,b,!1);cc("Firebase.authWithCustomToken",3,c,!0);zf(this.g.T,a,{},c||{},b)};O.prototype.authWithCustomToken=O.prototype.Df;
O.prototype.Ef=function(a,b,c){D("Firebase.authWithOAuthPopup",2,3,arguments.length);bc("Firebase.authWithOAuthPopup",1,a);F("Firebase.authWithOAuthPopup",2,b,!1);cc("Firebase.authWithOAuthPopup",3,c,!0);Ef(this.g.T,a,c,b)};O.prototype.authWithOAuthPopup=O.prototype.Ef;
O.prototype.Ff=function(a,b,c){D("Firebase.authWithOAuthRedirect",2,3,arguments.length);bc("Firebase.authWithOAuthRedirect",1,a);F("Firebase.authWithOAuthRedirect",2,b,!1);cc("Firebase.authWithOAuthRedirect",3,c,!0);var d=this.g.T;Cf(d);var e=[sf],f=af(c);"anonymous"===a||"firebase"===a?B(b,V("TRANSPORT_UNAVAILABLE")):(Ba.set("redirect_client_options",f.ed),Df(d,e,"/auth/"+a,f,b))};O.prototype.authWithOAuthRedirect=O.prototype.Ff;
O.prototype.Gf=function(a,b,c,d){D("Firebase.authWithOAuthToken",3,4,arguments.length);bc("Firebase.authWithOAuthToken",1,a);F("Firebase.authWithOAuthToken",3,c,!1);cc("Firebase.authWithOAuthToken",4,d,!0);p(b)?(bc("Firebase.authWithOAuthToken",2,b),Bf(this.g.T,a+"/token",{access_token:b},d,c)):(cc("Firebase.authWithOAuthToken",2,b,!1),Bf(this.g.T,a+"/token",b,d,c))};O.prototype.authWithOAuthToken=O.prototype.Gf;
O.prototype.Cf=function(a,b){D("Firebase.authAnonymously",1,2,arguments.length);F("Firebase.authAnonymously",1,a,!1);cc("Firebase.authAnonymously",2,b,!0);Bf(this.g.T,"anonymous",{},b,a)};O.prototype.authAnonymously=O.prototype.Cf;
O.prototype.Hf=function(a,b,c){D("Firebase.authWithPassword",2,3,arguments.length);cc("Firebase.authWithPassword",1,a,!1);dc("Firebase.authWithPassword",a,"email");dc("Firebase.authWithPassword",a,"password");F("Firebase.authAnonymously",2,b,!1);cc("Firebase.authAnonymously",3,c,!0);Bf(this.g.T,"password",a,c,b)};O.prototype.authWithPassword=O.prototype.Hf;
O.prototype.je=function(a,b){D("Firebase.createUser",2,2,arguments.length);cc("Firebase.createUser",1,a,!1);dc("Firebase.createUser",a,"email");dc("Firebase.createUser",a,"password");F("Firebase.createUser",2,b,!1);this.g.T.je(a,b)};O.prototype.createUser=O.prototype.je;O.prototype.Ie=function(a,b){D("Firebase.removeUser",2,2,arguments.length);cc("Firebase.removeUser",1,a,!1);dc("Firebase.removeUser",a,"email");dc("Firebase.removeUser",a,"password");F("Firebase.removeUser",2,b,!1);this.g.T.Ie(a,b)};
O.prototype.removeUser=O.prototype.Ie;O.prototype.ee=function(a,b){D("Firebase.changePassword",2,2,arguments.length);cc("Firebase.changePassword",1,a,!1);dc("Firebase.changePassword",a,"email");dc("Firebase.changePassword",a,"oldPassword");dc("Firebase.changePassword",a,"newPassword");F("Firebase.changePassword",2,b,!1);this.g.T.ee(a,b)};O.prototype.changePassword=O.prototype.ee;
O.prototype.Je=function(a,b){D("Firebase.resetPassword",2,2,arguments.length);cc("Firebase.resetPassword",1,a,!1);dc("Firebase.resetPassword",a,"email");F("Firebase.resetPassword",2,b,!1);this.g.T.Je(a,b)};O.prototype.resetPassword=O.prototype.Je;O.goOffline=function(){D("Firebase.goOffline",0,0,arguments.length);Ah.Qb().tb()};O.goOnline=function(){D("Firebase.goOnline",0,0,arguments.length);Ah.Qb().kc()};
function qb(a,b){x(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?ob=q(console.log,console):"object"===typeof console.log&&(ob=function(a){console.log(a)})),b&&Ba.set("logging_enabled",!0)):a?ob=a:(ob=null,Ba.remove("logging_enabled"))}O.enableLogging=qb;O.ServerValue={TIMESTAMP:{".sv":"timestamp"}};O.SDK_VERSION="2.0.6";O.INTERNAL=Y;O.Context=Ah;O.TEST_ACCESS=$;})();
/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * as properties on a global Modernizr object, and as classes on the
 * <html> element. This information allows you to progressively enhance
 * your pages with a granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman
 */

window.Modernizr = (function( window, document, undefined ) {

    var version = '2.8.3',

    Modernizr = {},

    /*>>cssclasses*/
    // option for enabling the HTML classes to be added
    enableClasses = true,
    /*>>cssclasses*/

    docElement = document.documentElement,

    /**
     * Create our "modernizr" element that we do most feature tests on.
     */
    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    /**
     * Create the input element for various Web Forms feature tests.
     */
    inputElem /*>>inputelem*/ = document.createElement('input') /*>>inputelem*/ ,

    /*>>smile*/
    smile = ':)',
    /*>>smile*/

    toString = {}.toString,

    // TODO :: make the prefixes more granular
    /*>>prefixes*/
    // List of property values to set for css tests. See ticket #21
    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
    /*>>prefixes*/

    /*>>domprefixes*/
    // Following spec is to expose vendor-specific style properties as:
    //   elem.style.WebkitBorderRadius
    // and the following would be incorrect:
    //   elem.style.webkitBorderRadius

    // Webkit ghosts their properties in lowercase but Opera & Moz do not.
    // Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
    //   erik.eae.net/archives/2008/03/10/21.48.10/

    // More here: github.com/Modernizr/Modernizr/issues/issue/21
    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),
    /*>>domprefixes*/

    /*>>ns*/
    ns = {'svg': 'http://www.w3.org/2000/svg'},
    /*>>ns*/

    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, // used in testing loop


    /*>>teststyles*/
    // Inject element with style element and some CSS rules
    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
          // After page load injecting a fake body doesn't work so check if body exists
          body = document.body,
          // IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
          fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
          // In order not to give false positives we create a node for each test
          // This also allows the method to scale for unspecified uses
          while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

      // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
      // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
      // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
      // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
      // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
      style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
      // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
      // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
      (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
          //avoid crashing IE8, if background image is used
          fakeBody.style.background = '';
          //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
          fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
      // If this is done after page load we don't want to remove the body so check if body exists
      if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },
    /*>>teststyles*/

    /*>>mq*/
    // adapted from matchMedia polyfill
    // by Scott Jehl and Paul Irish
    // gist.github.com/786768
    testMediaQuery = function( mq ) {

      var matchMedia = window.matchMedia || window.msMatchMedia;
      if ( matchMedia ) {
        return matchMedia(mq) && matchMedia(mq).matches || false;
      }

      var bool;

      injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function( node ) {
        bool = (window.getComputedStyle ?
                  getComputedStyle(node, null) :
                  node.currentStyle)['position'] == 'absolute';
      });

      return bool;

     },
     /*>>mq*/


    /*>>hasevent*/
    //
    // isEventSupported determines if a given element supports the given event
    // kangax.github.com/iseventsupported/
    //
    // The following results are known incorrects:
    //   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
    //   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
    //   ...
    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input', 'change': 'input',
        'submit': 'form', 'reset': 'form',
        'error': 'img', 'load': 'img', 'abort': 'img'
      };

      function isEventSupported( eventName, element ) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

        // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those
        var isSupported = eventName in element;

        if ( !isSupported ) {
          // If it has no `setAttribute` (i.e. doesn't implement Node interface), try generic element
          if ( !element.setAttribute ) {
            element = document.createElement('div');
          }
          if ( element.setAttribute && element.removeAttribute ) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

            // If property was created, "remove it" (by setting value to `undefined`)
            if ( !is(element[eventName], 'undefined') ) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),
    /*>>hasevent*/

    // TODO :: Add flag for hasownprop ? didn't last time

    // hasOwnProperty shim by kangax needed for Safari 2.0 support
    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }

    // Adapted from ES5-shim https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js
    // es5.github.com/#x15.3.4.5

    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    /**
     * setCss applies given styles to the Modernizr DOM node.
     */
    function setCss( str ) {
        mStyle.cssText = str;
    }

    /**
     * setCssAll extrapolates all vendor-specific css strings.
     */
    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    /**
     * is returns a boolean for if typeof obj is exactly type.
     */
    function is( obj, type ) {
        return typeof obj === type;
    }

    /**
     * contains returns a boolean for if substr is found within str.
     */
    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    /*>>testprop*/

    // testProps is a generic CSS / DOM property test.

    // In testing support for a given CSS property, it's legit to test:
    //    `elem.style[styleName] !== undefined`
    // If the property is supported it will return an empty string,
    // if unsupported it will return undefined.

    // We'll take advantage of this quick test and skip setting a style
    // on our modernizr element, but instead just testing undefined vs
    // empty string.

    // Because the testing of the CSS property names (with "-", as
    // opposed to the camelCase DOM properties) is non-portable and
    // non-standard but works in WebKit and IE (but not Gecko or Opera),
    // we explicitly reject properties with dashes so that authors
    // developing in WebKit or IE first don't end up with
    // browser-specific content by accident.

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }
    /*>>testprop*/

    // TODO :: add testDOMProps
    /**
     * testDOMProps is a generic DOM property test; if a browser supports
     *   a certain property, it won't return undefined for it.
     */
    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                // return the property name as a string
                if (elem === false) return props[i];

                // let's bind a function
                if (is(item, 'function')){
                  // default to autobind unless override
                  return item.bind(elem || obj);
                }

                // return the unbound function or obj or value
                return item;
            }
        }
        return false;
    }

    /*>>testallprops*/
    /**
     * testPropsAll tests a list of DOM properties we want to check against.
     *   We specify literally ALL possible (known and/or likely) properties on
     *   the element including the non-vendor prefixed one, for forward-
     *   compatibility.
     */
    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

        // did they call .prefixed('boxSizing') or are we just testing a prop?
        if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

        // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
        } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }
    /*>>testallprops*/


    /**
     * Tests
     * -----
     */

    // The *new* flexbox
    // dev.w3.org/csswg/css3-flexbox

    tests['flexbox'] = function() {
      return testPropsAll('flexWrap');
    };

    // The *old* flexbox
    // www.w3.org/TR/2009/WD-css3-flexbox-20090723/

    tests['flexboxlegacy'] = function() {
        return testPropsAll('boxDirection');
    };

    // On the S60 and BB Storm, getContext exists, but always returns undefined
    // so we actually have to call getContext() to verify
    // github.com/Modernizr/Modernizr/issues/issue/97/

    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };

    // webk.it/70117 is tracking a legit WebGL feature detect proposal

    // We do a soft detect which may false positive in order to avoid
    // an expensive context creation: bugzil.la/732441

    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };

    /*
     * The Modernizr.touch test only indicates if the browser supports
     *    touch events, which does not necessarily reflect a touchscreen
     *    device, as evidenced by tablets running Windows 7 or, alas,
     *    the Palm Pre / WebOS (touch) phones.
     *
     * Additionally, Chrome (desktop) used to lie about its support on this,
     *    but that has since been rectified: crbug.com/36415
     *
     * We also test for Firefox 4 Multitouch Support.
     *
     * For more info, see: modernizr.github.com/Modernizr/touch.html
     */

    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };


    // geolocation is often considered a trivial feature detect...
    // Turns out, it's quite tricky to get right:
    //
    // Using !!navigator.geolocation does two things we don't want. It:
    //   1. Leaks memory in IE9: github.com/Modernizr/Modernizr/issues/513
    //   2. Disables page caching in WebKit: webk.it/43956
    //
    // Meanwhile, in Firefox < 8, an about:config setting could expose
    // a false positive that would throw an exception: bugzil.la/688158

    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function() {
      return !!window.postMessage;
    };


    // Chrome incognito mode used to throw an exception when using openDatabase
    // It doesn't anymore.
    tests['websqldatabase'] = function() {
      return !!window.openDatabase;
    };

    // Vendors had inconsistent prefixing with the experimental Indexed DB:
    // - Webkit's implementation is accessible through webkitIndexedDB
    // - Firefox shipped moz_indexedDB before FF4b9, but since then has been mozIndexedDB
    // For speed, we don't test the legacy (and beta-only) indexedDB
    tests['indexedDB'] = function() {
      return !!testPropsAll("indexedDB", window);
    };

    // documentMode logic from YUI to filter out IE8 Compat Mode
    //   which false positives.
    tests['hashchange'] = function() {
      return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    // Per 1.6:
    // This used to be Modernizr.historymanagement but the longer
    // name has been deprecated in favor of a shorter and property-matching one.
    // The old API is still available in 1.6, but as of 2.0 will throw a warning,
    // and in the first release thereafter disappear entirely.
    tests['history'] = function() {
      return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    // FF3.6 was EOL'ed on 4/24/12, but the ESR version of FF10
    // will be supported until FF19 (2/12/13), at which time, ESR becomes FF17.
    // FF10 still uses prefixes, so check for it until then.
    // for more ESR info, see: mozilla.org/en-US/firefox/organizations/faq/
    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    // css-tricks.com/rgba-browser-support/
    tests['rgba'] = function() {
        // Set an rgba() color and check the returned value

        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
        // Same as rgba(), in fact, browsers re-map hsla() to rgba() internally,
        //   except IE9 who retains it as hsla

        setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
        // Setting multiple images AND a color on the background shorthand property
        //  and then querying the style.background property value for the number of
        //  occurrences of "url(" is a reliable method for detecting ACTUAL support for this!

        setCss('background:url(https://),url(https://),red url(https://)');

        // If the UA supports multiple backgrounds, there should be three occurrences
        //   of the string "url(" in the return value for elemStyle.background

        return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };



    // this will false positive in Opera Mini
    //   github.com/Modernizr/Modernizr/issues/396

    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function() {
        return testPropsAll('borderImage');
    };


    // Super comprehensive table about all the unique implementations of
    // border-radius: muddledramblings.com/table-of-css3-border-radius-compliance

    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    // WebOS unfortunately false positives on this test.
    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    // FF3.0 will false positive on this test
    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function() {
        // Browsers that actually have CSS Opacity implemented have done so
        //  according to spec, which means their return values are within the
        //  range of [0.0,1.0] - including the leading zero.

        setCssAll('opacity:.55');

        // The non-literal . in this regex is intentional:
        //   German Chrome returns this value as 0,55
        // github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632
        return (/^0.55$/).test(mStyle.opacity);
    };


    // Note, Android < 4 will pass this test, but can only animate
    //   a single property at a time
    //   goo.gl/v3V4Gp
    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function() {
        /**
         * For CSS Gradients syntax, please see:
         * webkit.org/blog/175/introducing-css-gradients/
         * developer.mozilla.org/en/CSS/-moz-linear-gradient
         * developer.mozilla.org/en/CSS/-moz-radial-gradient
         * dev.w3.org/csswg/css3-images/#gradients-
         */

        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
             // legacy webkit syntax (FIXME: remove when syntax not in use anymore)
              (str1 + '-webkit- '.split(' ').join(str2 + str1) +
             // standard syntax             // trailing 'background-image:'
              prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

        // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
        //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
        //   some conditions. As a result, Webkit typically recognizes the syntax but
        //   will sometimes throw a false positive, thus we must do a more thorough check:
        if ( ret && 'webkitPerspective' in docElement.style ) {

          // Webkit allows this media query to succeed only if the feature is enabled.
          // `@media (transform-3d),(-webkit-transform-3d){ ... }`
          injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
        }
        return ret;
    };


    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };


    /*>>fontface*/
    // @font-face detection routine by Diego Perini
    // javascript.nwbox.com/CSSSupport/

    // false positives:
    //   WebOS github.com/Modernizr/Modernizr/issues/342
    //   WP7   github.com/Modernizr/Modernizr/issues/538
    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };
    /*>>fontface*/

    // CSS generated content detection
    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
          bool = node.offsetHeight >= 3;
        });

        return bool;
    };



    // These tests evaluate support of the video/audio elements, as well as
    // testing what types of content they support.
    //
    // We're using the Boolean constructor here, so that we can extend the value
    // e.g.  Modernizr.video     // true
    //       Modernizr.video.ogg // 'probably'
    //
    // Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845
    //                     thx to NielsLeenheer and zcorpan

    // Note: in some older browsers, "no" was a return value instead of empty string.
    //   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2
    //   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5

    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

        // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

                // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
                bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
            }

        } catch(e) { }

        return bool;
    };

    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');

                // Mimetypes accepted:
                //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
                //   bit.ly/iphoneoscodecs
                bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
                bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
                              elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
            }
        } catch(e) { }

        return bool;
    };


    // In FF4, if disabled, window.localStorage should === null.

    // Normally, we could not test that directly and need to do a
    //   `('localStorage' in window) && ` test first because otherwise Firefox will
    //   throw bugzil.la/365772 if cookies are disabled

    // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
    // will throw the exception:
    //   QUOTA_EXCEEDED_ERRROR DOM Exception 22.
    // Peculiarly, getItem and removeItem calls do not throw.

    // Because we are forced to try/catch this, we'll go aggressive.

    // Just FWIW: IE8 Compat mode supports these features completely:
    //   www.quirksmode.org/dom/html5.html
    // But IE8 doesn't support either with local files

    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };

    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };


    tests['webworkers'] = function() {
        return !!window.Worker;
    };


    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };


    // Thanks to Erik Dahlstrom
    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    // specifically for SVG inline in HTML, not within XHTML
    // test page: paulirish.com/demo/inline-svg
    tests['inlinesvg'] = function() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    // SVG SMIL animation
    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };

    // This test is only for clip paths in SVG proper, not clip paths on HTML content
    // demo: srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg

    // However read the comments to dig into applying SVG clippaths to HTML content here:
    //   github.com/Modernizr/Modernizr/issues/213#issuecomment-1149491
    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    /*>>webforms*/
    // input features and input types go directly onto the ret object, bypassing the tests loop.
    // Hold this guy to execute in a moment.
    function webforms() {
        /*>>input*/
        // Run through HTML5's new input attributes to see if the UA understands any.
        // We're using f which is the <input> element created early on
        // Mike Taylr has created a comprehensive resource for testing these attributes
        //   when applied to all input types:
        //   miketaylr.com/code/input-type-attr.html
        // spec: www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary

        // Only input placeholder is tested while textarea's placeholder is not.
        // Currently Safari 4 and Opera 11 have support only for the input placeholder
        // Both tests are available in feature-detects/forms-placeholder.js
        Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
              // safari false positive's on datalist: webk.it/74252
              // see also github.com/Modernizr/Modernizr/issues/146
              attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
        /*>>input*/

        /*>>inputtypes*/
        // Run through HTML5's new input types to see if the UA understands any.
        //   This is put behind the tests runloop because it doesn't return a
        //   true/false like all the other tests; instead, it returns an object
        //   containing each input type with its corresponding true/false value

        // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
        Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                // We first check to see if the type we give it sticks..
                // If the type does, we feed it a textual value, which shouldn't be valid.
                // If the value doesn't stick, we know there's input sanitization which infers a custom UI
                if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                      docElement.appendChild(inputElem);
                      defaultView = document.defaultView;

                      // Safari 2-4 allows the smiley as a value, despite making a slider
                      bool =  defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                              // Mobile android web browser has false positive, so must
                              // check the height to see if the widget is actually there.
                              (inputElem.offsetHeight !== 0);

                      docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                      // Spec doesn't define any special parsing or detectable UI
                      //   behaviors so we pass these through as true

                      // Interestingly, opera fails the earlier test, so it doesn't
                      //  even make it here.

                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                      // Real url and email support comes with prebaked validation.
                      bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                      // If the upgraded input compontent rejects the :) text, we got a winner
                      bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        /*>>inputtypes*/
    }
    /*>>webforms*/


    // End of test definitions
    // -----------------------



    // Run through all tests and detect their support in the current UA.
    // todo: hypothetically we could be doing an array of tests and use a basic loop here.
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
            // run the test, throw the return value into the Modernizr,
            //   then based on that boolean, define an appropriate className
            //   and push it into an array of classes we'll join later.
            featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    /*>>webforms*/
    // input tests need to run.
    Modernizr.input || webforms();
    /*>>webforms*/


    /**
     * addTest allows the user to define their own feature tests
     * the result will be added onto the Modernizr object,
     * as well as an appropriate className set on the html element
     *
     * @param feature - String naming the feature
     * @param test - Function returning true if feature is supported, false if not
     */
     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
           // we're going to quit if you're trying to overwrite an existing test
           // if we were to allow it, we'd do this:
           //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
           //   docElement.className = docElement.className.replace( re, '' );
           // but, no rly, stuff 'em.
           return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; // allow chaining.
     };


    // Reset modElem.cssText to nothing to reduce memory footprint.
    setCss('');
    modElem = inputElem = null;

    /*>>shiv*/
    /**
     * @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
     */
    ;(function(window, document) {
        /*jshint evil:true */
        /** version */
        var version = '3.7.0';

        /** Preset options */
        var options = window.html5 || {};

        /** Used to skip problem elements */
        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

        /** Not all elements can be cloned in IE **/
        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

        /** Detect whether the browser supports default html5 styles */
        var supportsHtml5Styles;

        /** Name of the expando, to work with multiple documents or to re-shiv one document */
        var expando = '_html5shiv';

        /** The id for the the documents expando */
        var expanID = 0;

        /** Cached data for each document */
        var expandoData = {};

        /** Detect whether the browser supports unknown elements */
        var supportsUnknownElements;

        (function() {
          try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
            //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
            supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
              // assign a false positive if unable to shiv
              (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
          } catch(e) {
            // assign a false positive if detection fails => unable to shiv
            supportsHtml5Styles = true;
            supportsUnknownElements = true;
          }

        }());

        /*--------------------------------------------------------------------------*/

        /**
         * Creates a style sheet with the given CSS text and adds it to the document.
         * @private
         * @param {Document} ownerDocument The document.
         * @param {String} cssText The CSS text.
         * @returns {StyleSheet} The style element.
         */
        function addStyleSheet(ownerDocument, cssText) {
          var p = ownerDocument.createElement('p'),
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

          p.innerHTML = 'x<style>' + cssText + '</style>';
          return parent.insertBefore(p.lastChild, parent.firstChild);
        }

        /**
         * Returns the value of `html5.elements` as an array.
         * @private
         * @returns {Array} An array of shived element node names.
         */
        function getElements() {
          var elements = html5.elements;
          return typeof elements == 'string' ? elements.split(' ') : elements;
        }

        /**
         * Returns the data associated to the given document
         * @private
         * @param {Document} ownerDocument The document.
         * @returns {Object} An object of data.
         */
        function getExpandoData(ownerDocument) {
          var data = expandoData[ownerDocument[expando]];
          if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
          }
          return data;
        }

        /**
         * returns a shived element for the given nodeName and document
         * @memberOf html5
         * @param {String} nodeName name of the element
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived element.
         */
        function createElement(nodeName, ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
          }
          if (!data) {
            data = getExpandoData(ownerDocument);
          }
          var node;

          if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
          } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
          } else {
            node = data.createElem(nodeName);
          }

          // Avoid adding some elements to fragments in IE < 9 because
          // * Attributes like `name` or `type` cannot be set/changed once an element
          //   is inserted into a document/fragment
          // * Link elements with `src` attributes that are inaccessible, as with
          //   a 403 response, will cause the tab/window to crash
          // * Script elements appended to fragments will execute when their `src`
          //   or `text` property is set
          return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
        }

        /**
         * returns a shived DocumentFragment for the given document
         * @memberOf html5
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived DocumentFragment.
         */
        function createDocumentFragment(ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
          }
          data = data || getExpandoData(ownerDocument);
          var clone = data.frag.cloneNode(),
          i = 0,
          elems = getElements(),
          l = elems.length;
          for(;i<l;i++){
            clone.createElement(elems[i]);
          }
          return clone;
        }

        /**
         * Shivs the `createElement` and `createDocumentFragment` methods of the document.
         * @private
         * @param {Document|DocumentFragment} ownerDocument The document.
         * @param {Object} data of the document.
         */
        function shivMethods(ownerDocument, data) {
          if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
          }


          ownerDocument.createElement = function(nodeName) {
            //abort shiv
            if (!html5.shivMethods) {
              return data.createElem(nodeName);
            }
            return createElement(nodeName, ownerDocument, data);
          };

          ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                                                          'var n=f.cloneNode(),c=n.createElement;' +
                                                          'h.shivMethods&&(' +
                                                          // unroll the `createElement` calls
                                                          getElements().join().replace(/[\w\-]+/g, function(nodeName) {
            data.createElem(nodeName);
            data.frag.createElement(nodeName);
            return 'c("' + nodeName + '")';
          }) +
            ');return n}'
                                                         )(html5, data.frag);
        }

        /*--------------------------------------------------------------------------*/

        /**
         * Shivs the given document.
         * @memberOf html5
         * @param {Document} ownerDocument The document to shiv.
         * @returns {Document} The shived document.
         */
        function shivDocument(ownerDocument) {
          if (!ownerDocument) {
            ownerDocument = document;
          }
          var data = getExpandoData(ownerDocument);

          if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
            data.hasCSS = !!addStyleSheet(ownerDocument,
                                          // corrects block display not defined in IE6/7/8/9
                                          'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                                            // adds styling not present in IE6/7/8/9
                                            'mark{background:#FF0;color:#000}' +
                                            // hides non-rendered elements
                                            'template{display:none}'
                                         );
          }
          if (!supportsUnknownElements) {
            shivMethods(ownerDocument, data);
          }
          return ownerDocument;
        }

        /*--------------------------------------------------------------------------*/

        /**
         * The `html5` object is exposed so that more elements can be shived and
         * existing shiving can be detected on iframes.
         * @type Object
         * @example
         *
         * // options can be changed before the script is included
         * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
         */
        var html5 = {

          /**
           * An array or space separated string of node names of the elements to shiv.
           * @memberOf html5
           * @type Array|String
           */
          'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

          /**
           * current version of html5shiv
           */
          'version': version,

          /**
           * A flag to indicate that the HTML5 style sheet should be inserted.
           * @memberOf html5
           * @type Boolean
           */
          'shivCSS': (options.shivCSS !== false),

          /**
           * Is equal to true if a browser supports creating unknown/HTML5 elements
           * @memberOf html5
           * @type boolean
           */
          'supportsUnknownElements': supportsUnknownElements,

          /**
           * A flag to indicate that the document's `createElement` and `createDocumentFragment`
           * methods should be overwritten.
           * @memberOf html5
           * @type Boolean
           */
          'shivMethods': (options.shivMethods !== false),

          /**
           * A string to describe the type of `html5` object ("default" or "default print").
           * @memberOf html5
           * @type String
           */
          'type': 'default',

          // shivs the document according to the specified `html5` object options
          'shivDocument': shivDocument,

          //creates a shived element
          createElement: createElement,

          //creates a shived documentFragment
          createDocumentFragment: createDocumentFragment
        };

        /*--------------------------------------------------------------------------*/

        // expose html5
        window.html5 = html5;

        // shiv the document
        shivDocument(document);

    }(this, document));
    /*>>shiv*/

    // Assign private properties to the return object with prefix
    Modernizr._version      = version;

    // expose these for the plugin API. Look in the source for how to join() them against your input
    /*>>prefixes*/
    Modernizr._prefixes     = prefixes;
    /*>>prefixes*/
    /*>>domprefixes*/
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;
    /*>>domprefixes*/

    /*>>mq*/
    // Modernizr.mq tests a given media query, live against the current state of the window
    // A few important notes:
    //   * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
    //   * A max-width or orientation query will be evaluated against the current state, which may change later.
    //   * You must specify values. Eg. If you are testing support for the min-width media query use:
    //       Modernizr.mq('(min-width:0)')
    // usage:
    // Modernizr.mq('only screen and (max-width:768)')
    Modernizr.mq            = testMediaQuery;
    /*>>mq*/

    /*>>hasevent*/
    // Modernizr.hasEvent() detects support for a given event, with an optional element to test on
    // Modernizr.hasEvent('gesturestart', elem)
    Modernizr.hasEvent      = isEventSupported;
    /*>>hasevent*/

    /*>>testprop*/
    // Modernizr.testProp() investigates whether a given style property is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testProp('pointerEvents')
    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };
    /*>>testprop*/

    /*>>testallprops*/
    // Modernizr.testAllProps() investigates whether a given style property,
    //   or any of its vendor-prefixed variants, is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testAllProps('boxSizing')
    Modernizr.testAllProps  = testPropsAll;
    /*>>testallprops*/


    /*>>teststyles*/
    // Modernizr.testStyles() allows you to add custom styles to the document and test an element afterwards
    // Modernizr.testStyles('#modernizr { position:absolute }', function(elem, rule){ ... })
    Modernizr.testStyles    = injectElementWithStyles;
    /*>>teststyles*/


    /*>>prefixed*/
    // Modernizr.prefixed() returns the prefixed or nonprefixed property name variant of your input
    // Modernizr.prefixed('boxSizing') // 'MozBoxSizing'

    // Properties must be passed as dom-style camelcase, rather than `box-sizing` hypentated style.
    // Return values will also be the camelCase variant, if you need to translate that to hypenated style use:
    //
    //     str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

    // If you're trying to ascertain which transition end event to bind to, you might do something like...
    //
    //     var transEndEventNames = {
    //       'WebkitTransition' : 'webkitTransitionEnd',
    //       'MozTransition'    : 'transitionend',
    //       'OTransition'      : 'oTransitionEnd',
    //       'msTransition'     : 'MSTransitionEnd',
    //       'transition'       : 'transitionend'
    //     },
    //     transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

    Modernizr.prefixed      = function(prop, obj, elem){
      if(!obj) {
        return testPropsAll(prop, 'pfx');
      } else {
        // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
        return testPropsAll(prop, obj, elem);
      }
    };
    /*>>prefixed*/


    /*>>cssclasses*/
    // Remove "no-js" class from <html> element, if it exists:
    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                            // Add the new classes to the <html> element.
                            (enableClasses ? ' js ' + classes.join(' ') : '');
    /*>>cssclasses*/

    return Modernizr;

})(this, this.document);
