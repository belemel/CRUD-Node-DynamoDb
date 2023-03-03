(()=>{var Z={358:O=>{var b=Object.prototype.toString,M=typeof Buffer<"u"&&typeof Buffer.alloc=="function"&&typeof Buffer.allocUnsafe=="function"&&typeof Buffer.from=="function";function L(S){return b.call(S).slice(8,-1)==="ArrayBuffer"}function o(S,f,i){f>>>=0;var c=S.byteLength-f;if(c<0)throw new RangeError("'offset' is out of bounds");if(i===void 0)i=c;else if(i>>>=0,i>c)throw new RangeError("'length' is out of bounds");return M?Buffer.from(S.slice(f,f+i)):new Buffer(new Uint8Array(S.slice(f,f+i)))}function _(S,f){if((typeof f!="string"||f==="")&&(f="utf8"),!Buffer.isEncoding(f))throw new TypeError('"encoding" must be a valid string encoding');return M?Buffer.from(S,f):new Buffer(S,f)}function w(S,f,i){if(typeof S=="number")throw new TypeError('"value" argument must not be a number');return L(S)?o(S,f,i):typeof S=="string"?_(S,f):M?Buffer.from(S):new Buffer(S)}O.exports=w},49:(O,b,M)=>{M(685).install()},685:(O,b,M)=>{O=M.nmd(O);var L=M(461).SourceMapConsumer,o=M(17),_;try{_=M(147),(!_.existsSync||!_.readFileSync)&&(_=null)}catch{}var w=M(358);function S(v,m){return v.require(m)}var f=!1,i=!1,c=!1,a="auto",n={},s={},t=/^data:application\/json[^,]+base64,/,d=[],u=[];function h(){return a==="browser"?!0:a==="node"?!1:typeof window<"u"&&typeof XMLHttpRequest=="function"&&!(window.require&&window.module&&window.process&&window.process.type==="renderer")}function C(){return typeof process=="object"&&process!==null&&typeof process.on=="function"}function y(){return typeof process=="object"&&process!==null?process.version:""}function l(){if(typeof process=="object"&&process!==null)return process.stderr}function e(v){if(typeof process=="object"&&process!==null&&typeof process.exit=="function")return process.exit(v)}function r(v){return function(m){for(var E=0;E<v.length;E++){var N=v[E](m);if(N)return N}return null}}var g=r(d);d.push(function(v){if(v=v.trim(),/^file:/.test(v)&&(v=v.replace(/file:\/\/\/(\w:)?/,function(N,I){return I?"":"/"})),v in n)return n[v];var m="";try{if(_)_.existsSync(v)&&(m=_.readFileSync(v,"utf8"));else{var E=new XMLHttpRequest;E.open("GET",v,!1),E.send(null),E.readyState===4&&E.status===200&&(m=E.responseText)}}catch{}return n[v]=m});function p(v,m){if(!v)return m;var E=o.dirname(v),N=/^\w+:\/\/[^\/]*/.exec(E),I=N?N[0]:"",R=E.slice(I.length);return I&&/^\/\w\:/.test(R)?(I+="/",I+o.resolve(E.slice(I.length),m).replace(/\\/g,"/")):I+o.resolve(E.slice(I.length),m)}function A(v){var m;if(h())try{var E=new XMLHttpRequest;E.open("GET",v,!1),E.send(null),m=E.readyState===4?E.responseText:null;var N=E.getResponseHeader("SourceMap")||E.getResponseHeader("X-SourceMap");if(N)return N}catch{}m=g(v);for(var I=/(?:\/\/[@#][\s]*sourceMappingURL=([^\s'"]+)[\s]*$)|(?:\/\*[@#][\s]*sourceMappingURL=([^\s*'"]+)[\s]*(?:\*\/)[\s]*$)/mg,R,T;T=I.exec(m);)R=T;return R?R[1]:null}var G=r(u);u.push(function(v){var m=A(v);if(!m)return null;var E;if(t.test(m)){var N=m.slice(m.indexOf(",")+1);E=w(N,"base64").toString(),m=v}else m=p(v,m),E=g(m);return E?{url:m,map:E}:null});function P(v){var m=s[v.source];if(!m){var E=G(v.source);E?(m=s[v.source]={url:E.url,map:new L(E.map)},m.map.sourcesContent&&m.map.sources.forEach(function(I,R){var T=m.map.sourcesContent[R];if(T){var D=p(m.url,I);n[D]=T}})):m=s[v.source]={url:null,map:null}}if(m&&m.map&&typeof m.map.originalPositionFor=="function"){var N=m.map.originalPositionFor(v);if(N.source!==null)return N.source=p(m.url,N.source),N}return v}function x(v){var m=/^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(v);if(m){var E=P({source:m[2],line:+m[3],column:m[4]-1});return"eval at "+m[1]+" ("+E.source+":"+E.line+":"+(E.column+1)+")"}return m=/^eval at ([^(]+) \((.+)\)$/.exec(v),m?"eval at "+m[1]+" ("+x(m[2])+")":v}function F(){var v,m="";if(this.isNative())m="native";else{v=this.getScriptNameOrSourceURL(),!v&&this.isEval()&&(m=this.getEvalOrigin(),m+=", "),v?m+=v:m+="<anonymous>";var E=this.getLineNumber();if(E!=null){m+=":"+E;var N=this.getColumnNumber();N&&(m+=":"+N)}}var I="",R=this.getFunctionName(),T=!0,D=this.isConstructor(),z=!(this.isToplevel()||D);if(z){var j=this.getTypeName();j==="[object Object]"&&(j="null");var $=this.getMethodName();R?(j&&R.indexOf(j)!=0&&(I+=j+"."),I+=R,$&&R.indexOf("."+$)!=R.length-$.length-1&&(I+=" [as "+$+"]")):I+=j+"."+($||"<anonymous>")}else D?I+="new "+(R||"<anonymous>"):R?I+=R:(I+=m,T=!1);return T&&(I+=" ("+m+")"),I}function B(v){var m={};return Object.getOwnPropertyNames(Object.getPrototypeOf(v)).forEach(function(E){m[E]=/^(?:is|get)/.test(E)?function(){return v[E].call(v)}:v[E]}),m.toString=F,m}function U(v,m){if(m===void 0&&(m={nextPosition:null,curPosition:null}),v.isNative())return m.curPosition=null,v;var E=v.getFileName()||v.getScriptNameOrSourceURL();if(E){var N=v.getLineNumber(),I=v.getColumnNumber()-1,R=/^v(10\.1[6-9]|10\.[2-9][0-9]|10\.[0-9]{3,}|1[2-9]\d*|[2-9]\d|\d{3,}|11\.11)/,T=R.test(y())?0:62;N===1&&I>T&&!h()&&!v.isEval()&&(I-=T);var D=P({source:E,line:N,column:I});m.curPosition=D,v=B(v);var z=v.getFunctionName;return v.getFunctionName=function(){return m.nextPosition==null?z():m.nextPosition.name||z()},v.getFileName=function(){return D.source},v.getLineNumber=function(){return D.line},v.getColumnNumber=function(){return D.column+1},v.getScriptNameOrSourceURL=function(){return D.source},v}var j=v.isEval()&&v.getEvalOrigin();return j&&(j=x(j),v=B(v),v.getEvalOrigin=function(){return j}),v}function V(v,m){c&&(n={},s={});for(var E=v.name||"Error",N=v.message||"",I=E+": "+N,R={nextPosition:null,curPosition:null},T=[],D=m.length-1;D>=0;D--)T.push(`
    at `+U(m[D],R)),R.nextPosition=R.curPosition;return R.curPosition=R.nextPosition=null,I+T.reverse().join("")}function q(v){var m=/\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(v.stack);if(m){var E=m[1],N=+m[2],I=+m[3],R=n[E];if(!R&&_&&_.existsSync(E))try{R=_.readFileSync(E,"utf8")}catch{R=""}if(R){var T=R.split(/(?:\r\n|\r|\n)/)[N-1];if(T)return E+":"+N+`
`+T+`
`+new Array(I).join(" ")+"^"}}return null}function K(v){var m=q(v),E=l();E&&E._handle&&E._handle.setBlocking&&E._handle.setBlocking(!0),m&&(console.error(),console.error(m)),console.error(v.stack),e(1)}function H(){var v=process.emit;process.emit=function(m){if(m==="uncaughtException"){var E=arguments[1]&&arguments[1].stack,N=this.listeners(m).length>0;if(E&&!N)return K(arguments[1])}return v.apply(this,arguments)}}var Y=d.slice(0),ee=u.slice(0);b.wrapCallSite=U,b.getErrorSource=q,b.mapSourcePosition=P,b.retrieveSourceMap=G,b.install=function(v){if(v=v||{},v.environment&&(a=v.environment,["node","browser","auto"].indexOf(a)===-1))throw new Error("environment "+a+" was unknown. Available options are {auto, browser, node}");if(v.retrieveFile&&(v.overrideRetrieveFile&&(d.length=0),d.unshift(v.retrieveFile)),v.retrieveSourceMap&&(v.overrideRetrieveSourceMap&&(u.length=0),u.unshift(v.retrieveSourceMap)),v.hookRequire&&!h()){var m=S(O,"module"),E=m.prototype._compile;E.__sourceMapSupport||(m.prototype._compile=function(R,T){return n[T]=R,s[T]=void 0,E.call(this,R,T)},m.prototype._compile.__sourceMapSupport=!0)}if(c||(c="emptyCacheBetweenOperations"in v?v.emptyCacheBetweenOperations:!1),f||(f=!0,Error.prepareStackTrace=V),!i){var N="handleUncaughtExceptions"in v?v.handleUncaughtExceptions:!0;try{var I=S(O,"worker_threads");I.isMainThread===!1&&(N=!1)}catch{}N&&C()&&(i=!0,H())}},b.resetRetrieveHandlers=function(){d.length=0,u.length=0,d=Y.slice(0),u=ee.slice(0),G=r(u),g=r(d)}},668:(O,b,M)=>{var L=M(930),o=Object.prototype.hasOwnProperty,_=typeof Map<"u";function w(){this._array=[],this._set=_?new Map:Object.create(null)}w.fromArray=function(f,i){for(var c=new w,a=0,n=f.length;a<n;a++)c.add(f[a],i);return c},w.prototype.size=function(){return _?this._set.size:Object.getOwnPropertyNames(this._set).length},w.prototype.add=function(f,i){var c=_?f:L.toSetString(f),a=_?this.has(f):o.call(this._set,c),n=this._array.length;(!a||i)&&this._array.push(f),a||(_?this._set.set(f,n):this._set[c]=n)},w.prototype.has=function(f){if(_)return this._set.has(f);var i=L.toSetString(f);return o.call(this._set,i)},w.prototype.indexOf=function(f){if(_){var i=this._set.get(f);if(i>=0)return i}else{var c=L.toSetString(f);if(o.call(this._set,c))return this._set[c]}throw new Error('"'+f+'" is not in the set.')},w.prototype.at=function(f){if(f>=0&&f<this._array.length)return this._array[f];throw new Error("No element indexed by "+f)},w.prototype.toArray=function(){return this._array.slice()},b.I=w},158:(O,b,M)=>{var L=M(977),o=5,_=1<<o,w=_-1,S=_;function f(c){return c<0?(-c<<1)+1:(c<<1)+0}function i(c){var a=(c&1)===1,n=c>>1;return a?-n:n}b.encode=function(a){var n="",s,t=f(a);do s=t&w,t>>>=o,t>0&&(s|=S),n+=L.encode(s);while(t>0);return n},b.decode=function(a,n,s){var t=a.length,d=0,u=0,h,C;do{if(n>=t)throw new Error("Expected more digits in base 64 VLQ value.");if(C=L.decode(a.charCodeAt(n++)),C===-1)throw new Error("Invalid base64 digit: "+a.charAt(n-1));h=!!(C&S),C&=w,d=d+(C<<u),u+=o}while(h);s.value=i(d),s.rest=n}},977:(O,b)=>{var M="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");b.encode=function(L){if(0<=L&&L<M.length)return M[L];throw new TypeError("Must be between 0 and 63: "+L)},b.decode=function(L){var o=65,_=90,w=97,S=122,f=48,i=57,c=43,a=47,n=26,s=52;return o<=L&&L<=_?L-o:w<=L&&L<=S?L-w+n:f<=L&&L<=i?L-f+s:L==c?62:L==a?63:-1}},63:(O,b)=>{b.GREATEST_LOWER_BOUND=1,b.LEAST_UPPER_BOUND=2;function M(L,o,_,w,S,f){var i=Math.floor((o-L)/2)+L,c=S(_,w[i],!0);return c===0?i:c>0?o-i>1?M(i,o,_,w,S,f):f==b.LEAST_UPPER_BOUND?o<w.length?o:-1:i:i-L>1?M(L,i,_,w,S,f):f==b.LEAST_UPPER_BOUND?i:L<0?-1:L}b.search=function(o,_,w,S){if(_.length===0)return-1;var f=M(-1,_.length,o,_,w,S||b.GREATEST_LOWER_BOUND);if(f<0)return-1;for(;f-1>=0&&w(_[f],_[f-1],!0)===0;)--f;return f}},923:(O,b,M)=>{var L=M(930);function o(w,S){var f=w.generatedLine,i=S.generatedLine,c=w.generatedColumn,a=S.generatedColumn;return i>f||i==f&&a>=c||L.compareByGeneratedPositionsInflated(w,S)<=0}function _(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}_.prototype.unsortedForEach=function(S,f){this._array.forEach(S,f)},_.prototype.add=function(S){o(this._last,S)?(this._last=S,this._array.push(S)):(this._sorted=!1,this._array.push(S))},_.prototype.toArray=function(){return this._sorted||(this._array.sort(L.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},b.H=_},645:(O,b)=>{function M(_,w,S){var f=_[w];_[w]=_[S],_[S]=f}function L(_,w){return Math.round(_+Math.random()*(w-_))}function o(_,w,S,f){if(S<f){var i=L(S,f),c=S-1;M(_,i,f);for(var a=_[f],n=S;n<f;n++)w(_[n],a)<=0&&(c+=1,M(_,c,n));M(_,c+1,n);var s=c+1;o(_,w,S,s-1),o(_,w,s+1,f)}}b.U=function(_,w){o(_,w,0,_.length-1)}},94:(O,b,M)=>{var L,o=M(930),_=M(63),w=M(668).I,S=M(158),f=M(645).U;function i(s,t){var d=s;return typeof s=="string"&&(d=o.parseSourceMapInput(s)),d.sections!=null?new n(d,t):new c(d,t)}i.fromSourceMap=function(s,t){return c.fromSourceMap(s,t)},i.prototype._version=3,i.prototype.__generatedMappings=null,Object.defineProperty(i.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),i.prototype.__originalMappings=null,Object.defineProperty(i.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),i.prototype._charIsMappingSeparator=function(t,d){var u=t.charAt(d);return u===";"||u===","},i.prototype._parseMappings=function(t,d){throw new Error("Subclasses must implement _parseMappings")},i.GENERATED_ORDER=1,i.ORIGINAL_ORDER=2,i.GREATEST_LOWER_BOUND=1,i.LEAST_UPPER_BOUND=2,i.prototype.eachMapping=function(t,d,u){var h=d||null,C=u||i.GENERATED_ORDER,y;switch(C){case i.GENERATED_ORDER:y=this._generatedMappings;break;case i.ORIGINAL_ORDER:y=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var l=this.sourceRoot;y.map(function(e){var r=e.source===null?null:this._sources.at(e.source);return r=o.computeSourceURL(l,r,this._sourceMapURL),{source:r,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:e.name===null?null:this._names.at(e.name)}},this).forEach(t,h)},i.prototype.allGeneratedPositionsFor=function(t){var d=o.getArg(t,"line"),u={source:o.getArg(t,"source"),originalLine:d,originalColumn:o.getArg(t,"column",0)};if(u.source=this._findSourceIndex(u.source),u.source<0)return[];var h=[],C=this._findMapping(u,this._originalMappings,"originalLine","originalColumn",o.compareByOriginalPositions,_.LEAST_UPPER_BOUND);if(C>=0){var y=this._originalMappings[C];if(t.column===void 0)for(var l=y.originalLine;y&&y.originalLine===l;)h.push({line:o.getArg(y,"generatedLine",null),column:o.getArg(y,"generatedColumn",null),lastColumn:o.getArg(y,"lastGeneratedColumn",null)}),y=this._originalMappings[++C];else for(var e=y.originalColumn;y&&y.originalLine===d&&y.originalColumn==e;)h.push({line:o.getArg(y,"generatedLine",null),column:o.getArg(y,"generatedColumn",null),lastColumn:o.getArg(y,"lastGeneratedColumn",null)}),y=this._originalMappings[++C]}return h},b.SourceMapConsumer=i;function c(s,t){var d=s;typeof s=="string"&&(d=o.parseSourceMapInput(s));var u=o.getArg(d,"version"),h=o.getArg(d,"sources"),C=o.getArg(d,"names",[]),y=o.getArg(d,"sourceRoot",null),l=o.getArg(d,"sourcesContent",null),e=o.getArg(d,"mappings"),r=o.getArg(d,"file",null);if(u!=this._version)throw new Error("Unsupported version: "+u);y&&(y=o.normalize(y)),h=h.map(String).map(o.normalize).map(function(g){return y&&o.isAbsolute(y)&&o.isAbsolute(g)?o.relative(y,g):g}),this._names=w.fromArray(C.map(String),!0),this._sources=w.fromArray(h,!0),this._absoluteSources=this._sources.toArray().map(function(g){return o.computeSourceURL(y,g,t)}),this.sourceRoot=y,this.sourcesContent=l,this._mappings=e,this._sourceMapURL=t,this.file=r}c.prototype=Object.create(i.prototype),c.prototype.consumer=i,c.prototype._findSourceIndex=function(s){var t=s;if(this.sourceRoot!=null&&(t=o.relative(this.sourceRoot,t)),this._sources.has(t))return this._sources.indexOf(t);var d;for(d=0;d<this._absoluteSources.length;++d)if(this._absoluteSources[d]==s)return d;return-1},c.fromSourceMap=function(t,d){var u=Object.create(c.prototype),h=u._names=w.fromArray(t._names.toArray(),!0),C=u._sources=w.fromArray(t._sources.toArray(),!0);u.sourceRoot=t._sourceRoot,u.sourcesContent=t._generateSourcesContent(u._sources.toArray(),u.sourceRoot),u.file=t._file,u._sourceMapURL=d,u._absoluteSources=u._sources.toArray().map(function(G){return o.computeSourceURL(u.sourceRoot,G,d)});for(var y=t._mappings.toArray().slice(),l=u.__generatedMappings=[],e=u.__originalMappings=[],r=0,g=y.length;r<g;r++){var p=y[r],A=new a;A.generatedLine=p.generatedLine,A.generatedColumn=p.generatedColumn,p.source&&(A.source=C.indexOf(p.source),A.originalLine=p.originalLine,A.originalColumn=p.originalColumn,p.name&&(A.name=h.indexOf(p.name)),e.push(A)),l.push(A)}return f(u.__originalMappings,o.compareByOriginalPositions),u},c.prototype._version=3,Object.defineProperty(c.prototype,"sources",{get:function(){return this._absoluteSources.slice()}});function a(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}c.prototype._parseMappings=function(t,d){for(var u=1,h=0,C=0,y=0,l=0,e=0,r=t.length,g=0,p={},A={},G=[],P=[],x,F,B,U,V;g<r;)if(t.charAt(g)===";")u++,g++,h=0;else if(t.charAt(g)===",")g++;else{for(x=new a,x.generatedLine=u,U=g;U<r&&!this._charIsMappingSeparator(t,U);U++);if(F=t.slice(g,U),B=p[F],B)g+=F.length;else{for(B=[];g<U;)S.decode(t,g,A),V=A.value,g=A.rest,B.push(V);if(B.length===2)throw new Error("Found a source, but no line and column");if(B.length===3)throw new Error("Found a source and line, but no column");p[F]=B}x.generatedColumn=h+B[0],h=x.generatedColumn,B.length>1&&(x.source=l+B[1],l+=B[1],x.originalLine=C+B[2],C=x.originalLine,x.originalLine+=1,x.originalColumn=y+B[3],y=x.originalColumn,B.length>4&&(x.name=e+B[4],e+=B[4])),P.push(x),typeof x.originalLine=="number"&&G.push(x)}f(P,o.compareByGeneratedPositionsDeflated),this.__generatedMappings=P,f(G,o.compareByOriginalPositions),this.__originalMappings=G},c.prototype._findMapping=function(t,d,u,h,C,y){if(t[u]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+t[u]);if(t[h]<0)throw new TypeError("Column must be greater than or equal to 0, got "+t[h]);return _.search(t,d,C,y)},c.prototype.computeColumnSpans=function(){for(var t=0;t<this._generatedMappings.length;++t){var d=this._generatedMappings[t];if(t+1<this._generatedMappings.length){var u=this._generatedMappings[t+1];if(d.generatedLine===u.generatedLine){d.lastGeneratedColumn=u.generatedColumn-1;continue}}d.lastGeneratedColumn=1/0}},c.prototype.originalPositionFor=function(t){var d={generatedLine:o.getArg(t,"line"),generatedColumn:o.getArg(t,"column")},u=this._findMapping(d,this._generatedMappings,"generatedLine","generatedColumn",o.compareByGeneratedPositionsDeflated,o.getArg(t,"bias",i.GREATEST_LOWER_BOUND));if(u>=0){var h=this._generatedMappings[u];if(h.generatedLine===d.generatedLine){var C=o.getArg(h,"source",null);C!==null&&(C=this._sources.at(C),C=o.computeSourceURL(this.sourceRoot,C,this._sourceMapURL));var y=o.getArg(h,"name",null);return y!==null&&(y=this._names.at(y)),{source:C,line:o.getArg(h,"originalLine",null),column:o.getArg(h,"originalColumn",null),name:y}}}return{source:null,line:null,column:null,name:null}},c.prototype.hasContentsOfAllSources=function(){return this.sourcesContent?this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(t){return t==null}):!1},c.prototype.sourceContentFor=function(t,d){if(!this.sourcesContent)return null;var u=this._findSourceIndex(t);if(u>=0)return this.sourcesContent[u];var h=t;this.sourceRoot!=null&&(h=o.relative(this.sourceRoot,h));var C;if(this.sourceRoot!=null&&(C=o.urlParse(this.sourceRoot))){var y=h.replace(/^file:\/\//,"");if(C.scheme=="file"&&this._sources.has(y))return this.sourcesContent[this._sources.indexOf(y)];if((!C.path||C.path=="/")&&this._sources.has("/"+h))return this.sourcesContent[this._sources.indexOf("/"+h)]}if(d)return null;throw new Error('"'+h+'" is not in the SourceMap.')},c.prototype.generatedPositionFor=function(t){var d=o.getArg(t,"source");if(d=this._findSourceIndex(d),d<0)return{line:null,column:null,lastColumn:null};var u={source:d,originalLine:o.getArg(t,"line"),originalColumn:o.getArg(t,"column")},h=this._findMapping(u,this._originalMappings,"originalLine","originalColumn",o.compareByOriginalPositions,o.getArg(t,"bias",i.GREATEST_LOWER_BOUND));if(h>=0){var C=this._originalMappings[h];if(C.source===u.source)return{line:o.getArg(C,"generatedLine",null),column:o.getArg(C,"generatedColumn",null),lastColumn:o.getArg(C,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},L=c;function n(s,t){var d=s;typeof s=="string"&&(d=o.parseSourceMapInput(s));var u=o.getArg(d,"version"),h=o.getArg(d,"sections");if(u!=this._version)throw new Error("Unsupported version: "+u);this._sources=new w,this._names=new w;var C={line:-1,column:0};this._sections=h.map(function(y){if(y.url)throw new Error("Support for url field in sections not implemented.");var l=o.getArg(y,"offset"),e=o.getArg(l,"line"),r=o.getArg(l,"column");if(e<C.line||e===C.line&&r<C.column)throw new Error("Section offsets must be ordered and non-overlapping.");return C=l,{generatedOffset:{generatedLine:e+1,generatedColumn:r+1},consumer:new i(o.getArg(y,"map"),t)}})}n.prototype=Object.create(i.prototype),n.prototype.constructor=i,n.prototype._version=3,Object.defineProperty(n.prototype,"sources",{get:function(){for(var s=[],t=0;t<this._sections.length;t++)for(var d=0;d<this._sections[t].consumer.sources.length;d++)s.push(this._sections[t].consumer.sources[d]);return s}}),n.prototype.originalPositionFor=function(t){var d={generatedLine:o.getArg(t,"line"),generatedColumn:o.getArg(t,"column")},u=_.search(d,this._sections,function(C,y){var l=C.generatedLine-y.generatedOffset.generatedLine;return l||C.generatedColumn-y.generatedOffset.generatedColumn}),h=this._sections[u];return h?h.consumer.originalPositionFor({line:d.generatedLine-(h.generatedOffset.generatedLine-1),column:d.generatedColumn-(h.generatedOffset.generatedLine===d.generatedLine?h.generatedOffset.generatedColumn-1:0),bias:t.bias}):{source:null,line:null,column:null,name:null}},n.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(t){return t.consumer.hasContentsOfAllSources()})},n.prototype.sourceContentFor=function(t,d){for(var u=0;u<this._sections.length;u++){var h=this._sections[u],C=h.consumer.sourceContentFor(t,!0);if(C)return C}if(d)return null;throw new Error('"'+t+'" is not in the SourceMap.')},n.prototype.generatedPositionFor=function(t){for(var d=0;d<this._sections.length;d++){var u=this._sections[d];if(u.consumer._findSourceIndex(o.getArg(t,"source"))!==-1){var h=u.consumer.generatedPositionFor(t);if(h){var C={line:h.line+(u.generatedOffset.generatedLine-1),column:h.column+(u.generatedOffset.generatedLine===h.line?u.generatedOffset.generatedColumn-1:0)};return C}}}return{line:null,column:null}},n.prototype._parseMappings=function(t,d){this.__generatedMappings=[],this.__originalMappings=[];for(var u=0;u<this._sections.length;u++)for(var h=this._sections[u],C=h.consumer._generatedMappings,y=0;y<C.length;y++){var l=C[y],e=h.consumer._sources.at(l.source);e=o.computeSourceURL(h.consumer.sourceRoot,e,this._sourceMapURL),this._sources.add(e),e=this._sources.indexOf(e);var r=null;l.name&&(r=h.consumer._names.at(l.name),this._names.add(r),r=this._names.indexOf(r));var g={source:e,generatedLine:l.generatedLine+(h.generatedOffset.generatedLine-1),generatedColumn:l.generatedColumn+(h.generatedOffset.generatedLine===l.generatedLine?h.generatedOffset.generatedColumn-1:0),originalLine:l.originalLine,originalColumn:l.originalColumn,name:r};this.__generatedMappings.push(g),typeof g.originalLine=="number"&&this.__originalMappings.push(g)}f(this.__generatedMappings,o.compareByGeneratedPositionsDeflated),f(this.__originalMappings,o.compareByOriginalPositions)},L=n},458:(O,b,M)=>{var L=M(158),o=M(930),_=M(668).I,w=M(923).H;function S(f){f||(f={}),this._file=o.getArg(f,"file",null),this._sourceRoot=o.getArg(f,"sourceRoot",null),this._skipValidation=o.getArg(f,"skipValidation",!1),this._sources=new _,this._names=new _,this._mappings=new w,this._sourcesContents=null}S.prototype._version=3,S.fromSourceMap=function(i){var c=i.sourceRoot,a=new S({file:i.file,sourceRoot:c});return i.eachMapping(function(n){var s={generated:{line:n.generatedLine,column:n.generatedColumn}};n.source!=null&&(s.source=n.source,c!=null&&(s.source=o.relative(c,s.source)),s.original={line:n.originalLine,column:n.originalColumn},n.name!=null&&(s.name=n.name)),a.addMapping(s)}),i.sources.forEach(function(n){var s=n;c!==null&&(s=o.relative(c,n)),a._sources.has(s)||a._sources.add(s);var t=i.sourceContentFor(n);t!=null&&a.setSourceContent(n,t)}),a},S.prototype.addMapping=function(i){var c=o.getArg(i,"generated"),a=o.getArg(i,"original",null),n=o.getArg(i,"source",null),s=o.getArg(i,"name",null);this._skipValidation||this._validateMapping(c,a,n,s),n!=null&&(n=String(n),this._sources.has(n)||this._sources.add(n)),s!=null&&(s=String(s),this._names.has(s)||this._names.add(s)),this._mappings.add({generatedLine:c.line,generatedColumn:c.column,originalLine:a!=null&&a.line,originalColumn:a!=null&&a.column,source:n,name:s})},S.prototype.setSourceContent=function(i,c){var a=i;this._sourceRoot!=null&&(a=o.relative(this._sourceRoot,a)),c!=null?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[o.toSetString(a)]=c):this._sourcesContents&&(delete this._sourcesContents[o.toSetString(a)],Object.keys(this._sourcesContents).length===0&&(this._sourcesContents=null))},S.prototype.applySourceMap=function(i,c,a){var n=c;if(c==null){if(i.file==null)throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);n=i.file}var s=this._sourceRoot;s!=null&&(n=o.relative(s,n));var t=new _,d=new _;this._mappings.unsortedForEach(function(u){if(u.source===n&&u.originalLine!=null){var h=i.originalPositionFor({line:u.originalLine,column:u.originalColumn});h.source!=null&&(u.source=h.source,a!=null&&(u.source=o.join(a,u.source)),s!=null&&(u.source=o.relative(s,u.source)),u.originalLine=h.line,u.originalColumn=h.column,h.name!=null&&(u.name=h.name))}var C=u.source;C!=null&&!t.has(C)&&t.add(C);var y=u.name;y!=null&&!d.has(y)&&d.add(y)},this),this._sources=t,this._names=d,i.sources.forEach(function(u){var h=i.sourceContentFor(u);h!=null&&(a!=null&&(u=o.join(a,u)),s!=null&&(u=o.relative(s,u)),this.setSourceContent(u,h))},this)},S.prototype._validateMapping=function(i,c,a,n){if(c&&typeof c.line!="number"&&typeof c.column!="number")throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if(!(i&&"line"in i&&"column"in i&&i.line>0&&i.column>=0&&!c&&!a&&!n)){if(i&&"line"in i&&"column"in i&&c&&"line"in c&&"column"in c&&i.line>0&&i.column>=0&&c.line>0&&c.column>=0&&a)return;throw new Error("Invalid mapping: "+JSON.stringify({generated:i,source:a,original:c,name:n}))}},S.prototype._serializeMappings=function(){for(var i=0,c=1,a=0,n=0,s=0,t=0,d="",u,h,C,y,l=this._mappings.toArray(),e=0,r=l.length;e<r;e++){if(h=l[e],u="",h.generatedLine!==c)for(i=0;h.generatedLine!==c;)u+=";",c++;else if(e>0){if(!o.compareByGeneratedPositionsInflated(h,l[e-1]))continue;u+=","}u+=L.encode(h.generatedColumn-i),i=h.generatedColumn,h.source!=null&&(y=this._sources.indexOf(h.source),u+=L.encode(y-t),t=y,u+=L.encode(h.originalLine-1-n),n=h.originalLine-1,u+=L.encode(h.originalColumn-a),a=h.originalColumn,h.name!=null&&(C=this._names.indexOf(h.name),u+=L.encode(C-s),s=C)),d+=u}return d},S.prototype._generateSourcesContent=function(i,c){return i.map(function(a){if(!this._sourcesContents)return null;c!=null&&(a=o.relative(c,a));var n=o.toSetString(a);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null},this)},S.prototype.toJSON=function(){var i={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return this._file!=null&&(i.file=this._file),this._sourceRoot!=null&&(i.sourceRoot=this._sourceRoot),this._sourcesContents&&(i.sourcesContent=this._generateSourcesContent(i.sources,i.sourceRoot)),i},S.prototype.toString=function(){return JSON.stringify(this.toJSON())},b.h=S},771:(O,b,M)=>{var L,o=M(458).h,_=M(930),w=/(\r?\n)/,S=10,f="$$$isSourceNode$$$";function i(c,a,n,s,t){this.children=[],this.sourceContents={},this.line=c??null,this.column=a??null,this.source=n??null,this.name=t??null,this[f]=!0,s!=null&&this.add(s)}i.fromStringWithSourceMap=function(a,n,s){var t=new i,d=a.split(w),u=0,h=function(){var r=p(),g=p()||"";return r+g;function p(){return u<d.length?d[u++]:void 0}},C=1,y=0,l=null;return n.eachMapping(function(r){if(l!==null)if(C<r.generatedLine)e(l,h()),C++,y=0;else{var g=d[u]||"",p=g.substr(0,r.generatedColumn-y);d[u]=g.substr(r.generatedColumn-y),y=r.generatedColumn,e(l,p),l=r;return}for(;C<r.generatedLine;)t.add(h()),C++;if(y<r.generatedColumn){var g=d[u]||"";t.add(g.substr(0,r.generatedColumn)),d[u]=g.substr(r.generatedColumn),y=r.generatedColumn}l=r},this),u<d.length&&(l&&e(l,h()),t.add(d.splice(u).join(""))),n.sources.forEach(function(r){var g=n.sourceContentFor(r);g!=null&&(s!=null&&(r=_.join(s,r)),t.setSourceContent(r,g))}),t;function e(r,g){if(r===null||r.source===void 0)t.add(g);else{var p=s?_.join(s,r.source):r.source;t.add(new i(r.originalLine,r.originalColumn,p,g,r.name))}}},i.prototype.add=function(a){if(Array.isArray(a))a.forEach(function(n){this.add(n)},this);else if(a[f]||typeof a=="string")a&&this.children.push(a);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+a);return this},i.prototype.prepend=function(a){if(Array.isArray(a))for(var n=a.length-1;n>=0;n--)this.prepend(a[n]);else if(a[f]||typeof a=="string")this.children.unshift(a);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+a);return this},i.prototype.walk=function(a){for(var n,s=0,t=this.children.length;s<t;s++)n=this.children[s],n[f]?n.walk(a):n!==""&&a(n,{source:this.source,line:this.line,column:this.column,name:this.name})},i.prototype.join=function(a){var n,s,t=this.children.length;if(t>0){for(n=[],s=0;s<t-1;s++)n.push(this.children[s]),n.push(a);n.push(this.children[s]),this.children=n}return this},i.prototype.replaceRight=function(a,n){var s=this.children[this.children.length-1];return s[f]?s.replaceRight(a,n):typeof s=="string"?this.children[this.children.length-1]=s.replace(a,n):this.children.push("".replace(a,n)),this},i.prototype.setSourceContent=function(a,n){this.sourceContents[_.toSetString(a)]=n},i.prototype.walkSourceContents=function(a){for(var n=0,s=this.children.length;n<s;n++)this.children[n][f]&&this.children[n].walkSourceContents(a);for(var t=Object.keys(this.sourceContents),n=0,s=t.length;n<s;n++)a(_.fromSetString(t[n]),this.sourceContents[t[n]])},i.prototype.toString=function(){var a="";return this.walk(function(n){a+=n}),a},i.prototype.toStringWithSourceMap=function(a){var n={code:"",line:1,column:0},s=new o(a),t=!1,d=null,u=null,h=null,C=null;return this.walk(function(y,l){n.code+=y,l.source!==null&&l.line!==null&&l.column!==null?((d!==l.source||u!==l.line||h!==l.column||C!==l.name)&&s.addMapping({source:l.source,original:{line:l.line,column:l.column},generated:{line:n.line,column:n.column},name:l.name}),d=l.source,u=l.line,h=l.column,C=l.name,t=!0):t&&(s.addMapping({generated:{line:n.line,column:n.column}}),d=null,t=!1);for(var e=0,r=y.length;e<r;e++)y.charCodeAt(e)===S?(n.line++,n.column=0,e+1===r?(d=null,t=!1):t&&s.addMapping({source:l.source,original:{line:l.line,column:l.column},generated:{line:n.line,column:n.column},name:l.name})):n.column++}),this.walkSourceContents(function(y,l){s.setSourceContent(y,l)}),{code:n.code,map:s}},L=i},930:(O,b)=>{function M(e,r,g){if(r in e)return e[r];if(arguments.length===3)return g;throw new Error('"'+r+'" is a required argument.')}b.getArg=M;var L=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,o=/^data:.+\,.+$/;function _(e){var r=e.match(L);return r?{scheme:r[1],auth:r[2],host:r[3],port:r[4],path:r[5]}:null}b.urlParse=_;function w(e){var r="";return e.scheme&&(r+=e.scheme+":"),r+="//",e.auth&&(r+=e.auth+"@"),e.host&&(r+=e.host),e.port&&(r+=":"+e.port),e.path&&(r+=e.path),r}b.urlGenerate=w;function S(e){var r=e,g=_(e);if(g){if(!g.path)return e;r=g.path}for(var p=b.isAbsolute(r),A=r.split(/\/+/),G,P=0,x=A.length-1;x>=0;x--)G=A[x],G==="."?A.splice(x,1):G===".."?P++:P>0&&(G===""?(A.splice(x+1,P),P=0):(A.splice(x,2),P--));return r=A.join("/"),r===""&&(r=p?"/":"."),g?(g.path=r,w(g)):r}b.normalize=S;function f(e,r){e===""&&(e="."),r===""&&(r=".");var g=_(r),p=_(e);if(p&&(e=p.path||"/"),g&&!g.scheme)return p&&(g.scheme=p.scheme),w(g);if(g||r.match(o))return r;if(p&&!p.host&&!p.path)return p.host=r,w(p);var A=r.charAt(0)==="/"?r:S(e.replace(/\/+$/,"")+"/"+r);return p?(p.path=A,w(p)):A}b.join=f,b.isAbsolute=function(e){return e.charAt(0)==="/"||L.test(e)};function i(e,r){e===""&&(e="."),e=e.replace(/\/$/,"");for(var g=0;r.indexOf(e+"/")!==0;){var p=e.lastIndexOf("/");if(p<0||(e=e.slice(0,p),e.match(/^([^\/]+:\/)?\/*$/)))return r;++g}return Array(g+1).join("../")+r.substr(e.length+1)}b.relative=i;var c=function(){var e=Object.create(null);return!("__proto__"in e)}();function a(e){return e}function n(e){return t(e)?"$"+e:e}b.toSetString=c?a:n;function s(e){return t(e)?e.slice(1):e}b.fromSetString=c?a:s;function t(e){if(!e)return!1;var r=e.length;if(r<9||e.charCodeAt(r-1)!==95||e.charCodeAt(r-2)!==95||e.charCodeAt(r-3)!==111||e.charCodeAt(r-4)!==116||e.charCodeAt(r-5)!==111||e.charCodeAt(r-6)!==114||e.charCodeAt(r-7)!==112||e.charCodeAt(r-8)!==95||e.charCodeAt(r-9)!==95)return!1;for(var g=r-10;g>=0;g--)if(e.charCodeAt(g)!==36)return!1;return!0}function d(e,r,g){var p=h(e.source,r.source);return p!==0||(p=e.originalLine-r.originalLine,p!==0)||(p=e.originalColumn-r.originalColumn,p!==0||g)||(p=e.generatedColumn-r.generatedColumn,p!==0)||(p=e.generatedLine-r.generatedLine,p!==0)?p:h(e.name,r.name)}b.compareByOriginalPositions=d;function u(e,r,g){var p=e.generatedLine-r.generatedLine;return p!==0||(p=e.generatedColumn-r.generatedColumn,p!==0||g)||(p=h(e.source,r.source),p!==0)||(p=e.originalLine-r.originalLine,p!==0)||(p=e.originalColumn-r.originalColumn,p!==0)?p:h(e.name,r.name)}b.compareByGeneratedPositionsDeflated=u;function h(e,r){return e===r?0:e===null?1:r===null?-1:e>r?1:-1}function C(e,r){var g=e.generatedLine-r.generatedLine;return g!==0||(g=e.generatedColumn-r.generatedColumn,g!==0)||(g=h(e.source,r.source),g!==0)||(g=e.originalLine-r.originalLine,g!==0)||(g=e.originalColumn-r.originalColumn,g!==0)?g:h(e.name,r.name)}b.compareByGeneratedPositionsInflated=C;function y(e){return JSON.parse(e.replace(/^\)]}'[^\n]*\n/,""))}b.parseSourceMapInput=y;function l(e,r,g){if(r=r||"",e&&(e[e.length-1]!=="/"&&r[0]!=="/"&&(e+="/"),r=e+r),g){var p=_(g);if(!p)throw new Error("sourceMapURL could not be parsed");if(p.path){var A=p.path.lastIndexOf("/");A>=0&&(p.path=p.path.substring(0,A+1))}r=f(w(p),r)}return S(r)}b.computeSourceURL=l},461:(O,b,M)=>{M(458).h,b.SourceMapConsumer=M(94).SourceMapConsumer,M(771)},113:O=>{"use strict";O.exports=require("crypto")},147:O=>{"use strict";O.exports=require("fs")},17:O=>{"use strict";O.exports=require("path")}},W={};function k(O){var b=W[O];if(b!==void 0)return b.exports;var M=W[O]={id:O,loaded:!1,exports:{}};return Z[O](M,M.exports,k),M.loaded=!0,M.exports}k.r=O=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(O,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(O,"__esModule",{value:!0})},k.nmd=O=>(O.paths=[],O.children||(O.children=[]),O);var Q={};(()=>{"use strict";k.r(Q);var O=k(49);const b=require("aws-sdk");function M(l){var e=new Error(l);return e.source="ulid",e}var L="0123456789ABCDEFGHJKMNPQRSTVWXYZ",o=L.length,_=Math.pow(2,48)-1,w=10,S=16;function f(l,e,r){return e>l.length-1?l:l.substr(0,e)+r+l.substr(e+1)}function i(l){for(var e=void 0,r=l.length,g=void 0,p=void 0,A=o-1;!e&&r-->=0;){if(g=l[r],p=L.indexOf(g),p===-1)throw M("incorrectly encoded string");if(p===A){l=f(l,r,L[0]);continue}e=f(l,r,L[p+1])}if(typeof e=="string")return e;throw M("cannot increment this string")}function c(l){var e=Math.floor(l()*o);return e===o&&(e=o-1),L.charAt(e)}function a(l,e){if(isNaN(l))throw new Error(l+" must be a number");if(l>_)throw M("cannot encode time greater than "+_);if(l<0)throw M("time must be positive");if(Number.isInteger(l)===!1)throw M("time must be an integer");for(var r=void 0,g="";e>0;e--)r=l%o,g=L.charAt(r)+g,l=(l-r)/o;return g}function n(l,e){for(var r="";l>0;l--)r=c(e)+r;return r}function s(l){if(l.length!==w+S)throw M("malformed ulid");var e=l.substr(0,w).split("").reverse().reduce(function(r,g,p){var A=L.indexOf(g);if(A===-1)throw M("invalid character found: "+g);return r+=A*Math.pow(o,p)},0);if(e>_)throw M("malformed ulid, timestamp too large");return e}function t(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=arguments[1];e||(e=typeof window<"u"?window:null);var r=e&&(e.crypto||e.msCrypto);if(r)return function(){var p=new Uint8Array(1);return r.getRandomValues(p),p[0]/255};try{var g=k(113);return function(){return g.randomBytes(1).readUInt8()/255}}catch{}if(l){try{console.error("secure crypto unusable, falling back to insecure Math.random()!")}catch{}return function(){return Math.random()}}throw M("secure crypto unusable, insecure Math.random not allowed")}function d(l){return l||(l=t()),function(r){return isNaN(r)&&(r=Date.now()),a(r,w)+n(S,l)}}function u(l){l||(l=t());var e=0,r=void 0;return function(p){if(isNaN(p)&&(p=Date.now()),p<=e){var A=r=i(r);return a(e,w)+A}e=p;var G=r=n(S,l);return a(p,w)+G}}var h=d();const C=new b.DynamoDB.DocumentClient;function y(l,e){return{statusCode:l,body:JSON.stringify(e)}}exports.handler=async(l,e,r)=>{try{const g=JSON.parse(l.body),p=new Date,A=new Date(p.valueOf()-p.getTimezoneOffset()*6e4),G=A.toISOString().replace(/.\d{3}$/,""),P=A.toISOString().substring(0,10),x={id:h(),createdAt:G,updatedAt:G,date:P,title:g.title,subtitle:g.subtitle,description:g.description,companyId:g.companyId};await C.put({TableName:process.env.FAQ_TABLE,Item:x}).promise().then(()=>r(null,y(201,x))).catch(F=>r(null,y(F.statusCode,F)))}catch(g){throw g}}})();var J=exports;for(var X in Q)J[X]=Q[X];Q.__esModule&&Object.defineProperty(J,"__esModule",{value:!0})})();

//# sourceMappingURL=create.js.map