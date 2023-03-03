(()=>{var q={358:A=>{var M=Object.prototype.toString,E=typeof Buffer<"u"&&typeof Buffer.alloc=="function"&&typeof Buffer.allocUnsafe=="function"&&typeof Buffer.from=="function";function b(_){return M.call(_).slice(8,-1)==="ArrayBuffer"}function s(_,l,o){l>>>=0;var a=_.byteLength-l;if(a<0)throw new RangeError("'offset' is out of bounds");if(o===void 0)o=a;else if(o>>>=0,o>a)throw new RangeError("'length' is out of bounds");return E?Buffer.from(_.slice(l,l+o)):new Buffer(new Uint8Array(_.slice(l,l+o)))}function g(_,l){if((typeof l!="string"||l==="")&&(l="utf8"),!Buffer.isEncoding(l))throw new TypeError('"encoding" must be a valid string encoding');return E?Buffer.from(_,l):new Buffer(_,l)}function C(_,l,o){if(typeof _=="number")throw new TypeError('"value" argument must not be a number');return b(_)?s(_,l,o):typeof _=="string"?g(_,l):E?Buffer.from(_):new Buffer(_)}A.exports=C},49:(A,M,E)=>{E(685).install()},685:(A,M,E)=>{A=E.nmd(A);var b=E(461).SourceMapConsumer,s=E(17),g;try{g=E(147),(!g.existsSync||!g.readFileSync)&&(g=null)}catch{}var C=E(358);function _(h,v){return h.require(v)}var l=!1,o=!1,a=!1,c="auto",n={},u={},t=/^data:application\/json[^,]+base64,/,f=[],i=[];function d(){return c==="browser"?!0:c==="node"?!1:typeof window<"u"&&typeof XMLHttpRequest=="function"&&!(window.require&&window.module&&window.process&&window.process.type==="renderer")}function S(){return typeof process=="object"&&process!==null&&typeof process.on=="function"}function m(){return typeof process=="object"&&process!==null?process.version:""}function w(){if(typeof process=="object"&&process!==null)return process.stderr}function r(h){if(typeof process=="object"&&process!==null&&typeof process.exit=="function")return process.exit(h)}function e(h){return function(v){for(var L=0;L<h.length;L++){var R=h[L](v);if(R)return R}return null}}var p=e(f);f.push(function(h){if(h=h.trim(),/^file:/.test(h)&&(h=h.replace(/file:\/\/\/(\w:)?/,function(R,I){return I?"":"/"})),h in n)return n[h];var v="";try{if(g)g.existsSync(h)&&(v=g.readFileSync(h,"utf8"));else{var L=new XMLHttpRequest;L.open("GET",h,!1),L.send(null),L.readyState===4&&L.status===200&&(v=L.responseText)}}catch{}return n[h]=v});function y(h,v){if(!h)return v;var L=s.dirname(h),R=/^\w+:\/\/[^\/]*/.exec(L),I=R?R[0]:"",O=L.slice(I.length);return I&&/^\/\w\:/.test(O)?(I+="/",I+s.resolve(L.slice(I.length),v).replace(/\\/g,"/")):I+s.resolve(L.slice(I.length),v)}function N(h){var v;if(d())try{var L=new XMLHttpRequest;L.open("GET",h,!1),L.send(null),v=L.readyState===4?L.responseText:null;var R=L.getResponseHeader("SourceMap")||L.getResponseHeader("X-SourceMap");if(R)return R}catch{}v=p(h);for(var I=/(?:\/\/[@#][\s]*sourceMappingURL=([^\s'"]+)[\s]*$)|(?:\/\*[@#][\s]*sourceMappingURL=([^\s*'"]+)[\s]*(?:\*\/)[\s]*$)/mg,O,T;T=I.exec(v);)O=T;return O?O[1]:null}var B=e(i);i.push(function(h){var v=N(h);if(!v)return null;var L;if(t.test(v)){var R=v.slice(v.indexOf(",")+1);L=C(R,"base64").toString(),v=h}else v=y(h,v),L=p(v);return L?{url:v,map:L}:null});function j(h){var v=u[h.source];if(!v){var L=B(h.source);L?(v=u[h.source]={url:L.url,map:new b(L.map)},v.map.sourcesContent&&v.map.sources.forEach(function(I,O){var T=v.map.sourcesContent[O];if(T){var P=y(v.url,I);n[P]=T}})):v=u[h.source]={url:null,map:null}}if(v&&v.map&&typeof v.map.originalPositionFor=="function"){var R=v.map.originalPositionFor(h);if(R.source!==null)return R.source=y(v.url,R.source),R}return h}function x(h){var v=/^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(h);if(v){var L=j({source:v[2],line:+v[3],column:v[4]-1});return"eval at "+v[1]+" ("+L.source+":"+L.line+":"+(L.column+1)+")"}return v=/^eval at ([^(]+) \((.+)\)$/.exec(h),v?"eval at "+v[1]+" ("+x(v[2])+")":h}function U(){var h,v="";if(this.isNative())v="native";else{h=this.getScriptNameOrSourceURL(),!h&&this.isEval()&&(v=this.getEvalOrigin(),v+=", "),h?v+=h:v+="<anonymous>";var L=this.getLineNumber();if(L!=null){v+=":"+L;var R=this.getColumnNumber();R&&(v+=":"+R)}}var I="",O=this.getFunctionName(),T=!0,P=this.isConstructor(),z=!(this.isToplevel()||P);if(z){var F=this.getTypeName();F==="[object Object]"&&(F="null");var Q=this.getMethodName();O?(F&&O.indexOf(F)!=0&&(I+=F+"."),I+=O,Q&&O.indexOf("."+Q)!=O.length-Q.length-1&&(I+=" [as "+Q+"]")):I+=F+"."+(Q||"<anonymous>")}else P?I+="new "+(O||"<anonymous>"):O?I+=O:(I+=v,T=!1);return T&&(I+=" ("+v+")"),I}function G(h){var v={};return Object.getOwnPropertyNames(Object.getPrototypeOf(h)).forEach(function(L){v[L]=/^(?:is|get)/.test(L)?function(){return h[L].call(h)}:h[L]}),v.toString=U,v}function D(h,v){if(v===void 0&&(v={nextPosition:null,curPosition:null}),h.isNative())return v.curPosition=null,h;var L=h.getFileName()||h.getScriptNameOrSourceURL();if(L){var R=h.getLineNumber(),I=h.getColumnNumber()-1,O=/^v(10\.1[6-9]|10\.[2-9][0-9]|10\.[0-9]{3,}|1[2-9]\d*|[2-9]\d|\d{3,}|11\.11)/,T=O.test(m())?0:62;R===1&&I>T&&!d()&&!h.isEval()&&(I-=T);var P=j({source:L,line:R,column:I});v.curPosition=P,h=G(h);var z=h.getFunctionName;return h.getFunctionName=function(){return v.nextPosition==null?z():v.nextPosition.name||z()},h.getFileName=function(){return P.source},h.getLineNumber=function(){return P.line},h.getColumnNumber=function(){return P.column+1},h.getScriptNameOrSourceURL=function(){return P.source},h}var F=h.isEval()&&h.getEvalOrigin();return F&&(F=x(F),h=G(h),h.getEvalOrigin=function(){return F}),h}function $(h,v){a&&(n={},u={});for(var L=h.name||"Error",R=h.message||"",I=L+": "+R,O={nextPosition:null,curPosition:null},T=[],P=v.length-1;P>=0;P--)T.push(`
    at `+D(v[P],O)),O.nextPosition=O.curPosition;return O.curPosition=O.nextPosition=null,I+T.reverse().join("")}function X(h){var v=/\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(h.stack);if(v){var L=v[1],R=+v[2],I=+v[3],O=n[L];if(!O&&g&&g.existsSync(L))try{O=g.readFileSync(L,"utf8")}catch{O=""}if(O){var T=O.split(/(?:\r\n|\r|\n)/)[R-1];if(T)return L+":"+R+`
`+T+`
`+new Array(I).join(" ")+"^"}}return null}function H(h){var v=X(h),L=w();L&&L._handle&&L._handle.setBlocking&&L._handle.setBlocking(!0),v&&(console.error(),console.error(v)),console.error(h.stack),r(1)}function Z(){var h=process.emit;process.emit=function(v){if(v==="uncaughtException"){var L=arguments[1]&&arguments[1].stack,R=this.listeners(v).length>0;if(L&&!R)return H(arguments[1])}return h.apply(this,arguments)}}var Y=f.slice(0),ee=i.slice(0);M.wrapCallSite=D,M.getErrorSource=X,M.mapSourcePosition=j,M.retrieveSourceMap=B,M.install=function(h){if(h=h||{},h.environment&&(c=h.environment,["node","browser","auto"].indexOf(c)===-1))throw new Error("environment "+c+" was unknown. Available options are {auto, browser, node}");if(h.retrieveFile&&(h.overrideRetrieveFile&&(f.length=0),f.unshift(h.retrieveFile)),h.retrieveSourceMap&&(h.overrideRetrieveSourceMap&&(i.length=0),i.unshift(h.retrieveSourceMap)),h.hookRequire&&!d()){var v=_(A,"module"),L=v.prototype._compile;L.__sourceMapSupport||(v.prototype._compile=function(O,T){return n[T]=O,u[T]=void 0,L.call(this,O,T)},v.prototype._compile.__sourceMapSupport=!0)}if(a||(a="emptyCacheBetweenOperations"in h?h.emptyCacheBetweenOperations:!1),l||(l=!0,Error.prepareStackTrace=$),!o){var R="handleUncaughtExceptions"in h?h.handleUncaughtExceptions:!0;try{var I=_(A,"worker_threads");I.isMainThread===!1&&(R=!1)}catch{}R&&S()&&(o=!0,Z())}},M.resetRetrieveHandlers=function(){f.length=0,i.length=0,f=Y.slice(0),i=ee.slice(0),B=e(i),p=e(f)}},668:(A,M,E)=>{var b=E(930),s=Object.prototype.hasOwnProperty,g=typeof Map<"u";function C(){this._array=[],this._set=g?new Map:Object.create(null)}C.fromArray=function(l,o){for(var a=new C,c=0,n=l.length;c<n;c++)a.add(l[c],o);return a},C.prototype.size=function(){return g?this._set.size:Object.getOwnPropertyNames(this._set).length},C.prototype.add=function(l,o){var a=g?l:b.toSetString(l),c=g?this.has(l):s.call(this._set,a),n=this._array.length;(!c||o)&&this._array.push(l),c||(g?this._set.set(l,n):this._set[a]=n)},C.prototype.has=function(l){if(g)return this._set.has(l);var o=b.toSetString(l);return s.call(this._set,o)},C.prototype.indexOf=function(l){if(g){var o=this._set.get(l);if(o>=0)return o}else{var a=b.toSetString(l);if(s.call(this._set,a))return this._set[a]}throw new Error('"'+l+'" is not in the set.')},C.prototype.at=function(l){if(l>=0&&l<this._array.length)return this._array[l];throw new Error("No element indexed by "+l)},C.prototype.toArray=function(){return this._array.slice()},M.I=C},158:(A,M,E)=>{var b=E(977),s=5,g=1<<s,C=g-1,_=g;function l(a){return a<0?(-a<<1)+1:(a<<1)+0}function o(a){var c=(a&1)===1,n=a>>1;return c?-n:n}M.encode=function(c){var n="",u,t=l(c);do u=t&C,t>>>=s,t>0&&(u|=_),n+=b.encode(u);while(t>0);return n},M.decode=function(c,n,u){var t=c.length,f=0,i=0,d,S;do{if(n>=t)throw new Error("Expected more digits in base 64 VLQ value.");if(S=b.decode(c.charCodeAt(n++)),S===-1)throw new Error("Invalid base64 digit: "+c.charAt(n-1));d=!!(S&_),S&=C,f=f+(S<<i),i+=s}while(d);u.value=o(f),u.rest=n}},977:(A,M)=>{var E="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");M.encode=function(b){if(0<=b&&b<E.length)return E[b];throw new TypeError("Must be between 0 and 63: "+b)},M.decode=function(b){var s=65,g=90,C=97,_=122,l=48,o=57,a=43,c=47,n=26,u=52;return s<=b&&b<=g?b-s:C<=b&&b<=_?b-C+n:l<=b&&b<=o?b-l+u:b==a?62:b==c?63:-1}},63:(A,M)=>{M.GREATEST_LOWER_BOUND=1,M.LEAST_UPPER_BOUND=2;function E(b,s,g,C,_,l){var o=Math.floor((s-b)/2)+b,a=_(g,C[o],!0);return a===0?o:a>0?s-o>1?E(o,s,g,C,_,l):l==M.LEAST_UPPER_BOUND?s<C.length?s:-1:o:o-b>1?E(b,o,g,C,_,l):l==M.LEAST_UPPER_BOUND?o:b<0?-1:b}M.search=function(s,g,C,_){if(g.length===0)return-1;var l=E(-1,g.length,s,g,C,_||M.GREATEST_LOWER_BOUND);if(l<0)return-1;for(;l-1>=0&&C(g[l],g[l-1],!0)===0;)--l;return l}},923:(A,M,E)=>{var b=E(930);function s(C,_){var l=C.generatedLine,o=_.generatedLine,a=C.generatedColumn,c=_.generatedColumn;return o>l||o==l&&c>=a||b.compareByGeneratedPositionsInflated(C,_)<=0}function g(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}g.prototype.unsortedForEach=function(_,l){this._array.forEach(_,l)},g.prototype.add=function(_){s(this._last,_)?(this._last=_,this._array.push(_)):(this._sorted=!1,this._array.push(_))},g.prototype.toArray=function(){return this._sorted||(this._array.sort(b.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},M.H=g},645:(A,M)=>{function E(g,C,_){var l=g[C];g[C]=g[_],g[_]=l}function b(g,C){return Math.round(g+Math.random()*(C-g))}function s(g,C,_,l){if(_<l){var o=b(_,l),a=_-1;E(g,o,l);for(var c=g[l],n=_;n<l;n++)C(g[n],c)<=0&&(a+=1,E(g,a,n));E(g,a+1,n);var u=a+1;s(g,C,_,u-1),s(g,C,u+1,l)}}M.U=function(g,C){s(g,C,0,g.length-1)}},94:(A,M,E)=>{var b,s=E(930),g=E(63),C=E(668).I,_=E(158),l=E(645).U;function o(u,t){var f=u;return typeof u=="string"&&(f=s.parseSourceMapInput(u)),f.sections!=null?new n(f,t):new a(f,t)}o.fromSourceMap=function(u,t){return a.fromSourceMap(u,t)},o.prototype._version=3,o.prototype.__generatedMappings=null,Object.defineProperty(o.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),o.prototype.__originalMappings=null,Object.defineProperty(o.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),o.prototype._charIsMappingSeparator=function(t,f){var i=t.charAt(f);return i===";"||i===","},o.prototype._parseMappings=function(t,f){throw new Error("Subclasses must implement _parseMappings")},o.GENERATED_ORDER=1,o.ORIGINAL_ORDER=2,o.GREATEST_LOWER_BOUND=1,o.LEAST_UPPER_BOUND=2,o.prototype.eachMapping=function(t,f,i){var d=f||null,S=i||o.GENERATED_ORDER,m;switch(S){case o.GENERATED_ORDER:m=this._generatedMappings;break;case o.ORIGINAL_ORDER:m=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var w=this.sourceRoot;m.map(function(r){var e=r.source===null?null:this._sources.at(r.source);return e=s.computeSourceURL(w,e,this._sourceMapURL),{source:e,generatedLine:r.generatedLine,generatedColumn:r.generatedColumn,originalLine:r.originalLine,originalColumn:r.originalColumn,name:r.name===null?null:this._names.at(r.name)}},this).forEach(t,d)},o.prototype.allGeneratedPositionsFor=function(t){var f=s.getArg(t,"line"),i={source:s.getArg(t,"source"),originalLine:f,originalColumn:s.getArg(t,"column",0)};if(i.source=this._findSourceIndex(i.source),i.source<0)return[];var d=[],S=this._findMapping(i,this._originalMappings,"originalLine","originalColumn",s.compareByOriginalPositions,g.LEAST_UPPER_BOUND);if(S>=0){var m=this._originalMappings[S];if(t.column===void 0)for(var w=m.originalLine;m&&m.originalLine===w;)d.push({line:s.getArg(m,"generatedLine",null),column:s.getArg(m,"generatedColumn",null),lastColumn:s.getArg(m,"lastGeneratedColumn",null)}),m=this._originalMappings[++S];else for(var r=m.originalColumn;m&&m.originalLine===f&&m.originalColumn==r;)d.push({line:s.getArg(m,"generatedLine",null),column:s.getArg(m,"generatedColumn",null),lastColumn:s.getArg(m,"lastGeneratedColumn",null)}),m=this._originalMappings[++S]}return d},M.SourceMapConsumer=o;function a(u,t){var f=u;typeof u=="string"&&(f=s.parseSourceMapInput(u));var i=s.getArg(f,"version"),d=s.getArg(f,"sources"),S=s.getArg(f,"names",[]),m=s.getArg(f,"sourceRoot",null),w=s.getArg(f,"sourcesContent",null),r=s.getArg(f,"mappings"),e=s.getArg(f,"file",null);if(i!=this._version)throw new Error("Unsupported version: "+i);m&&(m=s.normalize(m)),d=d.map(String).map(s.normalize).map(function(p){return m&&s.isAbsolute(m)&&s.isAbsolute(p)?s.relative(m,p):p}),this._names=C.fromArray(S.map(String),!0),this._sources=C.fromArray(d,!0),this._absoluteSources=this._sources.toArray().map(function(p){return s.computeSourceURL(m,p,t)}),this.sourceRoot=m,this.sourcesContent=w,this._mappings=r,this._sourceMapURL=t,this.file=e}a.prototype=Object.create(o.prototype),a.prototype.consumer=o,a.prototype._findSourceIndex=function(u){var t=u;if(this.sourceRoot!=null&&(t=s.relative(this.sourceRoot,t)),this._sources.has(t))return this._sources.indexOf(t);var f;for(f=0;f<this._absoluteSources.length;++f)if(this._absoluteSources[f]==u)return f;return-1},a.fromSourceMap=function(t,f){var i=Object.create(a.prototype),d=i._names=C.fromArray(t._names.toArray(),!0),S=i._sources=C.fromArray(t._sources.toArray(),!0);i.sourceRoot=t._sourceRoot,i.sourcesContent=t._generateSourcesContent(i._sources.toArray(),i.sourceRoot),i.file=t._file,i._sourceMapURL=f,i._absoluteSources=i._sources.toArray().map(function(B){return s.computeSourceURL(i.sourceRoot,B,f)});for(var m=t._mappings.toArray().slice(),w=i.__generatedMappings=[],r=i.__originalMappings=[],e=0,p=m.length;e<p;e++){var y=m[e],N=new c;N.generatedLine=y.generatedLine,N.generatedColumn=y.generatedColumn,y.source&&(N.source=S.indexOf(y.source),N.originalLine=y.originalLine,N.originalColumn=y.originalColumn,y.name&&(N.name=d.indexOf(y.name)),r.push(N)),w.push(N)}return l(i.__originalMappings,s.compareByOriginalPositions),i},a.prototype._version=3,Object.defineProperty(a.prototype,"sources",{get:function(){return this._absoluteSources.slice()}});function c(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}a.prototype._parseMappings=function(t,f){for(var i=1,d=0,S=0,m=0,w=0,r=0,e=t.length,p=0,y={},N={},B=[],j=[],x,U,G,D,$;p<e;)if(t.charAt(p)===";")i++,p++,d=0;else if(t.charAt(p)===",")p++;else{for(x=new c,x.generatedLine=i,D=p;D<e&&!this._charIsMappingSeparator(t,D);D++);if(U=t.slice(p,D),G=y[U],G)p+=U.length;else{for(G=[];p<D;)_.decode(t,p,N),$=N.value,p=N.rest,G.push($);if(G.length===2)throw new Error("Found a source, but no line and column");if(G.length===3)throw new Error("Found a source and line, but no column");y[U]=G}x.generatedColumn=d+G[0],d=x.generatedColumn,G.length>1&&(x.source=w+G[1],w+=G[1],x.originalLine=S+G[2],S=x.originalLine,x.originalLine+=1,x.originalColumn=m+G[3],m=x.originalColumn,G.length>4&&(x.name=r+G[4],r+=G[4])),j.push(x),typeof x.originalLine=="number"&&B.push(x)}l(j,s.compareByGeneratedPositionsDeflated),this.__generatedMappings=j,l(B,s.compareByOriginalPositions),this.__originalMappings=B},a.prototype._findMapping=function(t,f,i,d,S,m){if(t[i]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+t[i]);if(t[d]<0)throw new TypeError("Column must be greater than or equal to 0, got "+t[d]);return g.search(t,f,S,m)},a.prototype.computeColumnSpans=function(){for(var t=0;t<this._generatedMappings.length;++t){var f=this._generatedMappings[t];if(t+1<this._generatedMappings.length){var i=this._generatedMappings[t+1];if(f.generatedLine===i.generatedLine){f.lastGeneratedColumn=i.generatedColumn-1;continue}}f.lastGeneratedColumn=1/0}},a.prototype.originalPositionFor=function(t){var f={generatedLine:s.getArg(t,"line"),generatedColumn:s.getArg(t,"column")},i=this._findMapping(f,this._generatedMappings,"generatedLine","generatedColumn",s.compareByGeneratedPositionsDeflated,s.getArg(t,"bias",o.GREATEST_LOWER_BOUND));if(i>=0){var d=this._generatedMappings[i];if(d.generatedLine===f.generatedLine){var S=s.getArg(d,"source",null);S!==null&&(S=this._sources.at(S),S=s.computeSourceURL(this.sourceRoot,S,this._sourceMapURL));var m=s.getArg(d,"name",null);return m!==null&&(m=this._names.at(m)),{source:S,line:s.getArg(d,"originalLine",null),column:s.getArg(d,"originalColumn",null),name:m}}}return{source:null,line:null,column:null,name:null}},a.prototype.hasContentsOfAllSources=function(){return this.sourcesContent?this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(t){return t==null}):!1},a.prototype.sourceContentFor=function(t,f){if(!this.sourcesContent)return null;var i=this._findSourceIndex(t);if(i>=0)return this.sourcesContent[i];var d=t;this.sourceRoot!=null&&(d=s.relative(this.sourceRoot,d));var S;if(this.sourceRoot!=null&&(S=s.urlParse(this.sourceRoot))){var m=d.replace(/^file:\/\//,"");if(S.scheme=="file"&&this._sources.has(m))return this.sourcesContent[this._sources.indexOf(m)];if((!S.path||S.path=="/")&&this._sources.has("/"+d))return this.sourcesContent[this._sources.indexOf("/"+d)]}if(f)return null;throw new Error('"'+d+'" is not in the SourceMap.')},a.prototype.generatedPositionFor=function(t){var f=s.getArg(t,"source");if(f=this._findSourceIndex(f),f<0)return{line:null,column:null,lastColumn:null};var i={source:f,originalLine:s.getArg(t,"line"),originalColumn:s.getArg(t,"column")},d=this._findMapping(i,this._originalMappings,"originalLine","originalColumn",s.compareByOriginalPositions,s.getArg(t,"bias",o.GREATEST_LOWER_BOUND));if(d>=0){var S=this._originalMappings[d];if(S.source===i.source)return{line:s.getArg(S,"generatedLine",null),column:s.getArg(S,"generatedColumn",null),lastColumn:s.getArg(S,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},b=a;function n(u,t){var f=u;typeof u=="string"&&(f=s.parseSourceMapInput(u));var i=s.getArg(f,"version"),d=s.getArg(f,"sections");if(i!=this._version)throw new Error("Unsupported version: "+i);this._sources=new C,this._names=new C;var S={line:-1,column:0};this._sections=d.map(function(m){if(m.url)throw new Error("Support for url field in sections not implemented.");var w=s.getArg(m,"offset"),r=s.getArg(w,"line"),e=s.getArg(w,"column");if(r<S.line||r===S.line&&e<S.column)throw new Error("Section offsets must be ordered and non-overlapping.");return S=w,{generatedOffset:{generatedLine:r+1,generatedColumn:e+1},consumer:new o(s.getArg(m,"map"),t)}})}n.prototype=Object.create(o.prototype),n.prototype.constructor=o,n.prototype._version=3,Object.defineProperty(n.prototype,"sources",{get:function(){for(var u=[],t=0;t<this._sections.length;t++)for(var f=0;f<this._sections[t].consumer.sources.length;f++)u.push(this._sections[t].consumer.sources[f]);return u}}),n.prototype.originalPositionFor=function(t){var f={generatedLine:s.getArg(t,"line"),generatedColumn:s.getArg(t,"column")},i=g.search(f,this._sections,function(S,m){var w=S.generatedLine-m.generatedOffset.generatedLine;return w||S.generatedColumn-m.generatedOffset.generatedColumn}),d=this._sections[i];return d?d.consumer.originalPositionFor({line:f.generatedLine-(d.generatedOffset.generatedLine-1),column:f.generatedColumn-(d.generatedOffset.generatedLine===f.generatedLine?d.generatedOffset.generatedColumn-1:0),bias:t.bias}):{source:null,line:null,column:null,name:null}},n.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(t){return t.consumer.hasContentsOfAllSources()})},n.prototype.sourceContentFor=function(t,f){for(var i=0;i<this._sections.length;i++){var d=this._sections[i],S=d.consumer.sourceContentFor(t,!0);if(S)return S}if(f)return null;throw new Error('"'+t+'" is not in the SourceMap.')},n.prototype.generatedPositionFor=function(t){for(var f=0;f<this._sections.length;f++){var i=this._sections[f];if(i.consumer._findSourceIndex(s.getArg(t,"source"))!==-1){var d=i.consumer.generatedPositionFor(t);if(d){var S={line:d.line+(i.generatedOffset.generatedLine-1),column:d.column+(i.generatedOffset.generatedLine===d.line?i.generatedOffset.generatedColumn-1:0)};return S}}}return{line:null,column:null}},n.prototype._parseMappings=function(t,f){this.__generatedMappings=[],this.__originalMappings=[];for(var i=0;i<this._sections.length;i++)for(var d=this._sections[i],S=d.consumer._generatedMappings,m=0;m<S.length;m++){var w=S[m],r=d.consumer._sources.at(w.source);r=s.computeSourceURL(d.consumer.sourceRoot,r,this._sourceMapURL),this._sources.add(r),r=this._sources.indexOf(r);var e=null;w.name&&(e=d.consumer._names.at(w.name),this._names.add(e),e=this._names.indexOf(e));var p={source:r,generatedLine:w.generatedLine+(d.generatedOffset.generatedLine-1),generatedColumn:w.generatedColumn+(d.generatedOffset.generatedLine===w.generatedLine?d.generatedOffset.generatedColumn-1:0),originalLine:w.originalLine,originalColumn:w.originalColumn,name:e};this.__generatedMappings.push(p),typeof p.originalLine=="number"&&this.__originalMappings.push(p)}l(this.__generatedMappings,s.compareByGeneratedPositionsDeflated),l(this.__originalMappings,s.compareByOriginalPositions)},b=n},458:(A,M,E)=>{var b=E(158),s=E(930),g=E(668).I,C=E(923).H;function _(l){l||(l={}),this._file=s.getArg(l,"file",null),this._sourceRoot=s.getArg(l,"sourceRoot",null),this._skipValidation=s.getArg(l,"skipValidation",!1),this._sources=new g,this._names=new g,this._mappings=new C,this._sourcesContents=null}_.prototype._version=3,_.fromSourceMap=function(o){var a=o.sourceRoot,c=new _({file:o.file,sourceRoot:a});return o.eachMapping(function(n){var u={generated:{line:n.generatedLine,column:n.generatedColumn}};n.source!=null&&(u.source=n.source,a!=null&&(u.source=s.relative(a,u.source)),u.original={line:n.originalLine,column:n.originalColumn},n.name!=null&&(u.name=n.name)),c.addMapping(u)}),o.sources.forEach(function(n){var u=n;a!==null&&(u=s.relative(a,n)),c._sources.has(u)||c._sources.add(u);var t=o.sourceContentFor(n);t!=null&&c.setSourceContent(n,t)}),c},_.prototype.addMapping=function(o){var a=s.getArg(o,"generated"),c=s.getArg(o,"original",null),n=s.getArg(o,"source",null),u=s.getArg(o,"name",null);this._skipValidation||this._validateMapping(a,c,n,u),n!=null&&(n=String(n),this._sources.has(n)||this._sources.add(n)),u!=null&&(u=String(u),this._names.has(u)||this._names.add(u)),this._mappings.add({generatedLine:a.line,generatedColumn:a.column,originalLine:c!=null&&c.line,originalColumn:c!=null&&c.column,source:n,name:u})},_.prototype.setSourceContent=function(o,a){var c=o;this._sourceRoot!=null&&(c=s.relative(this._sourceRoot,c)),a!=null?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[s.toSetString(c)]=a):this._sourcesContents&&(delete this._sourcesContents[s.toSetString(c)],Object.keys(this._sourcesContents).length===0&&(this._sourcesContents=null))},_.prototype.applySourceMap=function(o,a,c){var n=a;if(a==null){if(o.file==null)throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);n=o.file}var u=this._sourceRoot;u!=null&&(n=s.relative(u,n));var t=new g,f=new g;this._mappings.unsortedForEach(function(i){if(i.source===n&&i.originalLine!=null){var d=o.originalPositionFor({line:i.originalLine,column:i.originalColumn});d.source!=null&&(i.source=d.source,c!=null&&(i.source=s.join(c,i.source)),u!=null&&(i.source=s.relative(u,i.source)),i.originalLine=d.line,i.originalColumn=d.column,d.name!=null&&(i.name=d.name))}var S=i.source;S!=null&&!t.has(S)&&t.add(S);var m=i.name;m!=null&&!f.has(m)&&f.add(m)},this),this._sources=t,this._names=f,o.sources.forEach(function(i){var d=o.sourceContentFor(i);d!=null&&(c!=null&&(i=s.join(c,i)),u!=null&&(i=s.relative(u,i)),this.setSourceContent(i,d))},this)},_.prototype._validateMapping=function(o,a,c,n){if(a&&typeof a.line!="number"&&typeof a.column!="number")throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if(!(o&&"line"in o&&"column"in o&&o.line>0&&o.column>=0&&!a&&!c&&!n)){if(o&&"line"in o&&"column"in o&&a&&"line"in a&&"column"in a&&o.line>0&&o.column>=0&&a.line>0&&a.column>=0&&c)return;throw new Error("Invalid mapping: "+JSON.stringify({generated:o,source:c,original:a,name:n}))}},_.prototype._serializeMappings=function(){for(var o=0,a=1,c=0,n=0,u=0,t=0,f="",i,d,S,m,w=this._mappings.toArray(),r=0,e=w.length;r<e;r++){if(d=w[r],i="",d.generatedLine!==a)for(o=0;d.generatedLine!==a;)i+=";",a++;else if(r>0){if(!s.compareByGeneratedPositionsInflated(d,w[r-1]))continue;i+=","}i+=b.encode(d.generatedColumn-o),o=d.generatedColumn,d.source!=null&&(m=this._sources.indexOf(d.source),i+=b.encode(m-t),t=m,i+=b.encode(d.originalLine-1-n),n=d.originalLine-1,i+=b.encode(d.originalColumn-c),c=d.originalColumn,d.name!=null&&(S=this._names.indexOf(d.name),i+=b.encode(S-u),u=S)),f+=i}return f},_.prototype._generateSourcesContent=function(o,a){return o.map(function(c){if(!this._sourcesContents)return null;a!=null&&(c=s.relative(a,c));var n=s.toSetString(c);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null},this)},_.prototype.toJSON=function(){var o={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return this._file!=null&&(o.file=this._file),this._sourceRoot!=null&&(o.sourceRoot=this._sourceRoot),this._sourcesContents&&(o.sourcesContent=this._generateSourcesContent(o.sources,o.sourceRoot)),o},_.prototype.toString=function(){return JSON.stringify(this.toJSON())},M.h=_},771:(A,M,E)=>{var b,s=E(458).h,g=E(930),C=/(\r?\n)/,_=10,l="$$$isSourceNode$$$";function o(a,c,n,u,t){this.children=[],this.sourceContents={},this.line=a??null,this.column=c??null,this.source=n??null,this.name=t??null,this[l]=!0,u!=null&&this.add(u)}o.fromStringWithSourceMap=function(c,n,u){var t=new o,f=c.split(C),i=0,d=function(){var e=y(),p=y()||"";return e+p;function y(){return i<f.length?f[i++]:void 0}},S=1,m=0,w=null;return n.eachMapping(function(e){if(w!==null)if(S<e.generatedLine)r(w,d()),S++,m=0;else{var p=f[i]||"",y=p.substr(0,e.generatedColumn-m);f[i]=p.substr(e.generatedColumn-m),m=e.generatedColumn,r(w,y),w=e;return}for(;S<e.generatedLine;)t.add(d()),S++;if(m<e.generatedColumn){var p=f[i]||"";t.add(p.substr(0,e.generatedColumn)),f[i]=p.substr(e.generatedColumn),m=e.generatedColumn}w=e},this),i<f.length&&(w&&r(w,d()),t.add(f.splice(i).join(""))),n.sources.forEach(function(e){var p=n.sourceContentFor(e);p!=null&&(u!=null&&(e=g.join(u,e)),t.setSourceContent(e,p))}),t;function r(e,p){if(e===null||e.source===void 0)t.add(p);else{var y=u?g.join(u,e.source):e.source;t.add(new o(e.originalLine,e.originalColumn,y,p,e.name))}}},o.prototype.add=function(c){if(Array.isArray(c))c.forEach(function(n){this.add(n)},this);else if(c[l]||typeof c=="string")c&&this.children.push(c);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+c);return this},o.prototype.prepend=function(c){if(Array.isArray(c))for(var n=c.length-1;n>=0;n--)this.prepend(c[n]);else if(c[l]||typeof c=="string")this.children.unshift(c);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+c);return this},o.prototype.walk=function(c){for(var n,u=0,t=this.children.length;u<t;u++)n=this.children[u],n[l]?n.walk(c):n!==""&&c(n,{source:this.source,line:this.line,column:this.column,name:this.name})},o.prototype.join=function(c){var n,u,t=this.children.length;if(t>0){for(n=[],u=0;u<t-1;u++)n.push(this.children[u]),n.push(c);n.push(this.children[u]),this.children=n}return this},o.prototype.replaceRight=function(c,n){var u=this.children[this.children.length-1];return u[l]?u.replaceRight(c,n):typeof u=="string"?this.children[this.children.length-1]=u.replace(c,n):this.children.push("".replace(c,n)),this},o.prototype.setSourceContent=function(c,n){this.sourceContents[g.toSetString(c)]=n},o.prototype.walkSourceContents=function(c){for(var n=0,u=this.children.length;n<u;n++)this.children[n][l]&&this.children[n].walkSourceContents(c);for(var t=Object.keys(this.sourceContents),n=0,u=t.length;n<u;n++)c(g.fromSetString(t[n]),this.sourceContents[t[n]])},o.prototype.toString=function(){var c="";return this.walk(function(n){c+=n}),c},o.prototype.toStringWithSourceMap=function(c){var n={code:"",line:1,column:0},u=new s(c),t=!1,f=null,i=null,d=null,S=null;return this.walk(function(m,w){n.code+=m,w.source!==null&&w.line!==null&&w.column!==null?((f!==w.source||i!==w.line||d!==w.column||S!==w.name)&&u.addMapping({source:w.source,original:{line:w.line,column:w.column},generated:{line:n.line,column:n.column},name:w.name}),f=w.source,i=w.line,d=w.column,S=w.name,t=!0):t&&(u.addMapping({generated:{line:n.line,column:n.column}}),f=null,t=!1);for(var r=0,e=m.length;r<e;r++)m.charCodeAt(r)===_?(n.line++,n.column=0,r+1===e?(f=null,t=!1):t&&u.addMapping({source:w.source,original:{line:w.line,column:w.column},generated:{line:n.line,column:n.column},name:w.name})):n.column++}),this.walkSourceContents(function(m,w){u.setSourceContent(m,w)}),{code:n.code,map:u}},b=o},930:(A,M)=>{function E(r,e,p){if(e in r)return r[e];if(arguments.length===3)return p;throw new Error('"'+e+'" is a required argument.')}M.getArg=E;var b=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,s=/^data:.+\,.+$/;function g(r){var e=r.match(b);return e?{scheme:e[1],auth:e[2],host:e[3],port:e[4],path:e[5]}:null}M.urlParse=g;function C(r){var e="";return r.scheme&&(e+=r.scheme+":"),e+="//",r.auth&&(e+=r.auth+"@"),r.host&&(e+=r.host),r.port&&(e+=":"+r.port),r.path&&(e+=r.path),e}M.urlGenerate=C;function _(r){var e=r,p=g(r);if(p){if(!p.path)return r;e=p.path}for(var y=M.isAbsolute(e),N=e.split(/\/+/),B,j=0,x=N.length-1;x>=0;x--)B=N[x],B==="."?N.splice(x,1):B===".."?j++:j>0&&(B===""?(N.splice(x+1,j),j=0):(N.splice(x,2),j--));return e=N.join("/"),e===""&&(e=y?"/":"."),p?(p.path=e,C(p)):e}M.normalize=_;function l(r,e){r===""&&(r="."),e===""&&(e=".");var p=g(e),y=g(r);if(y&&(r=y.path||"/"),p&&!p.scheme)return y&&(p.scheme=y.scheme),C(p);if(p||e.match(s))return e;if(y&&!y.host&&!y.path)return y.host=e,C(y);var N=e.charAt(0)==="/"?e:_(r.replace(/\/+$/,"")+"/"+e);return y?(y.path=N,C(y)):N}M.join=l,M.isAbsolute=function(r){return r.charAt(0)==="/"||b.test(r)};function o(r,e){r===""&&(r="."),r=r.replace(/\/$/,"");for(var p=0;e.indexOf(r+"/")!==0;){var y=r.lastIndexOf("/");if(y<0||(r=r.slice(0,y),r.match(/^([^\/]+:\/)?\/*$/)))return e;++p}return Array(p+1).join("../")+e.substr(r.length+1)}M.relative=o;var a=function(){var r=Object.create(null);return!("__proto__"in r)}();function c(r){return r}function n(r){return t(r)?"$"+r:r}M.toSetString=a?c:n;function u(r){return t(r)?r.slice(1):r}M.fromSetString=a?c:u;function t(r){if(!r)return!1;var e=r.length;if(e<9||r.charCodeAt(e-1)!==95||r.charCodeAt(e-2)!==95||r.charCodeAt(e-3)!==111||r.charCodeAt(e-4)!==116||r.charCodeAt(e-5)!==111||r.charCodeAt(e-6)!==114||r.charCodeAt(e-7)!==112||r.charCodeAt(e-8)!==95||r.charCodeAt(e-9)!==95)return!1;for(var p=e-10;p>=0;p--)if(r.charCodeAt(p)!==36)return!1;return!0}function f(r,e,p){var y=d(r.source,e.source);return y!==0||(y=r.originalLine-e.originalLine,y!==0)||(y=r.originalColumn-e.originalColumn,y!==0||p)||(y=r.generatedColumn-e.generatedColumn,y!==0)||(y=r.generatedLine-e.generatedLine,y!==0)?y:d(r.name,e.name)}M.compareByOriginalPositions=f;function i(r,e,p){var y=r.generatedLine-e.generatedLine;return y!==0||(y=r.generatedColumn-e.generatedColumn,y!==0||p)||(y=d(r.source,e.source),y!==0)||(y=r.originalLine-e.originalLine,y!==0)||(y=r.originalColumn-e.originalColumn,y!==0)?y:d(r.name,e.name)}M.compareByGeneratedPositionsDeflated=i;function d(r,e){return r===e?0:r===null?1:e===null?-1:r>e?1:-1}function S(r,e){var p=r.generatedLine-e.generatedLine;return p!==0||(p=r.generatedColumn-e.generatedColumn,p!==0)||(p=d(r.source,e.source),p!==0)||(p=r.originalLine-e.originalLine,p!==0)||(p=r.originalColumn-e.originalColumn,p!==0)?p:d(r.name,e.name)}M.compareByGeneratedPositionsInflated=S;function m(r){return JSON.parse(r.replace(/^\)]}'[^\n]*\n/,""))}M.parseSourceMapInput=m;function w(r,e,p){if(e=e||"",r&&(r[r.length-1]!=="/"&&e[0]!=="/"&&(r+="/"),e=r+e),p){var y=g(p);if(!y)throw new Error("sourceMapURL could not be parsed");if(y.path){var N=y.path.lastIndexOf("/");N>=0&&(y.path=y.path.substring(0,N+1))}e=l(C(y),e)}return _(e)}M.computeSourceURL=w},461:(A,M,E)=>{E(458).h,M.SourceMapConsumer=E(94).SourceMapConsumer,E(771)},147:A=>{"use strict";A.exports=require("fs")},17:A=>{"use strict";A.exports=require("path")}},W={};function k(A){var M=W[A];if(M!==void 0)return M.exports;var E=W[A]={id:A,loaded:!1,exports:{}};return q[A](E,E.exports,k),E.loaded=!0,E.exports}k.r=A=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},k.nmd=A=>(A.paths=[],A.children||(A.children=[]),A);var V={};(()=>{"use strict";k.r(V);var A=k(49);const M=require("aws-sdk"),E=new M.DynamoDB.DocumentClient;exports.handler=async b=>{try{const g=JSON.parse(b.body);if(g.search){const C={TableName:process.env.FAQ_TABLE,IndexName:"GSI3",KeyConditionExpression:"#companyId = :companyId",FilterExpression:"contains(#title, :title) OR contains(#subtitle, :subtitle) OR contains(#description, :description)",ExpressionAttributeNames:{"#title":"title","#subtitle":"subtitle","#description":"description","#companyId":"companyId"},ExpressionAttributeValues:{":title":g.search,":subtitle":g.search,":description":g.search,":companyId":g.companyId},Limit:g.limit};if(g.paginations){const o=g.paginations;C.ExclusiveStartKey={id:o,companyId:g.companyId}}const _=await E.query(C).promise();return{statusCode:200,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json","Access-Control-Allow-Headers":"*"},body:JSON.stringify(_)}}else{var s={TableName:process.env.FAQ_TABLE,Limit:g.limit,IndexName:"GSI3",KeyConditionExpression:"#companyId = :companyId",ExpressionAttributeNames:{"#companyId":"companyId"},ExpressionAttributeValues:{":companyId":g.companyId}};if(g.paginations){const l=g.paginations;s.ExclusiveStartKey={id:l,companyId:g.companyId}}const C=await E.query(s).promise();return{statusCode:200,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json","Access-Control-Allow-Headers":"*"},body:JSON.stringify(C)}}}catch(g){throw g}}})();var J=exports;for(var K in V)J[K]=V[K];V.__esModule&&Object.defineProperty(J,"__esModule",{value:!0})})();

//# sourceMappingURL=getPages.js.map