// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-transform@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/time-tic@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/time-toc@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-trim@v0.0.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace@v0.0.2-esm/index.mjs";import{REGEXP as v}from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-eol@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-null@esm/index.mjs";import{isPrimitive as w}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-browser@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-node-writable-stream-like@esm/index.mjs";import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-pick@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-omit@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.13-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/string-from-code-point@esm/index.mjs";function E(e){var t=e.default;if("function"==typeof t){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}function T(){}function L(){L.init.call(this)}function O(e){return void 0===e._maxListeners?L.defaultMaxListeners:e._maxListeners}function C(e,t,r){if(t)e.call(r);else for(var n=e.length,i=I(e,n),o=0;o<n;++o)i[o].call(r)}function S(e,t,r,n){if(t)e.call(r,n);else for(var i=e.length,o=I(e,i),s=0;s<i;++s)o[s].call(r,n)}function M(e,t,r,n,i){if(t)e.call(r,n,i);else for(var o=e.length,s=I(e,o),a=0;a<o;++a)s[a].call(r,n,i)}function A(e,t,r,n,i,o){if(t)e.call(r,n,i,o);else for(var s=e.length,a=I(e,s),u=0;u<s;++u)a[u].call(r,n,i,o)}function P(e,t,r,n){if(t)e.apply(r,n);else for(var i=e.length,o=I(e,i),s=0;s<i;++s)o[s].apply(r,n)}function D(e,t,r,n){var i,o,s,a;if("function"!=typeof r)throw new TypeError('"listener" argument must be a function');if((o=e._events)?(o.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),o=e._events),s=o[t]):(o=e._events=new T,e._eventsCount=0),s){if("function"==typeof s?s=o[t]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),!s.warned&&(i=O(e))&&i>0&&s.length>i){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=s.length,a=u,"function"==typeof console.warn?console.warn(a):console.log(a)}}else s=o[t]=r,++e._eventsCount;return e}function N(e,t,r){var n=!1;function i(){e.removeListener(t,i),n||(n=!0,r.apply(e,arguments))}return i.listener=r,i}function q(e){var t=this._events;if(t){var r=t[e];if("function"==typeof r)return 1;if(r)return r.length}return 0}function I(e,t){for(var r=new Array(t);t--;)r[t]=e[t];return r}T.prototype=Object.create(null),L.EventEmitter=L,L.usingDomains=!1,L.prototype.domain=void 0,L.prototype._events=void 0,L.prototype._maxListeners=void 0,L.defaultMaxListeners=10,L.init=function(){this.domain=null,L.usingDomains&&undefined.active,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new T,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},L.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},L.prototype.getMaxListeners=function(){return O(this)},L.prototype.emit=function(e){var t,r,n,i,o,s,a,u="error"===e;if(s=this._events)u=u&&null==s.error;else if(!u)return!1;if(a=this.domain,u){if(t=arguments[1],!a){if(t instanceof Error)throw t;var l=new Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l}return t||(t=new Error('Uncaught, unspecified "error" event')),t.domainEmitter=this,t.domain=a,t.domainThrown=!1,a.emit("error",t),!1}if(!(r=s[e]))return!1;var c="function"==typeof r;switch(n=arguments.length){case 1:C(r,c,this);break;case 2:S(r,c,this,arguments[1]);break;case 3:M(r,c,this,arguments[1],arguments[2]);break;case 4:A(r,c,this,arguments[1],arguments[2],arguments[3]);break;default:for(i=new Array(n-1),o=1;o<n;o++)i[o-1]=arguments[o];P(r,c,this,i)}return!0},L.prototype.addListener=function(e,t){return D(this,e,t,!1)},L.prototype.on=L.prototype.addListener,L.prototype.prependListener=function(e,t){return D(this,e,t,!0)},L.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,N(this,e,t)),this},L.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,N(this,e,t)),this},L.prototype.removeListener=function(e,t){var r,n,i,o,s;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(n=this._events))return this;if(!(r=n[e]))return this;if(r===t||r.listener&&r.listener===t)0==--this._eventsCount?this._events=new T:(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(i=-1,o=r.length;o-- >0;)if(r[o]===t||r[o].listener&&r[o].listener===t){s=r[o].listener,i=o;break}if(i<0)return this;if(1===r.length){if(r[0]=void 0,0==--this._eventsCount)return this._events=new T,this;delete n[e]}else!function(e,t){for(var r=t,n=r+1,i=e.length;n<i;r+=1,n+=1)e[r]=e[n];e.pop()}(r,i);n.removeListener&&this.emit("removeListener",e,s||t)}return this},L.prototype.off=function(e,t){return this.removeListener(e,t)},L.prototype.removeAllListeners=function(e){var t,r;if(!(r=this._events))return this;if(!r.removeListener)return 0===arguments.length?(this._events=new T,this._eventsCount=0):r[e]&&(0==--this._eventsCount?this._events=new T:delete r[e]),this;if(0===arguments.length){for(var n,i=Object.keys(r),o=0;o<i.length;++o)"removeListener"!==(n=i[o])&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events=new T,this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(t)do{this.removeListener(e,t[t.length-1])}while(t[0]);return this},L.prototype.listeners=function(e){var t,r=this._events;return r&&(t=r[e])?"function"==typeof t?[t.listener||t]:function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(t):[]},L.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):q.call(e,t)},L.prototype.listenerCount=q,L.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};var z=E(Object.freeze({__proto__:null,default:L,EventEmitter:L})),K=setTimeout,R=clearTimeout;var U=/^#\s*/;function V(e){setTimeout(e,0)}var B=z.EventEmitter;function W(e,r,n){var i,o,s,a;return this instanceof W?(s=this,i=!1,o=!1,B.call(this),t(this,"_benchmark",n),t(this,"_skip",r.skip),f(this,"_ended",{configurable:!1,enumerable:!1,writable:!0,value:!1}),f(this,"_running",{configurable:!1,enumerable:!1,writable:!0,value:!1}),f(this,"_exited",{configurable:!1,enumerable:!1,writable:!0,value:!1}),f(this,"_count",{configurable:!1,enumerable:!1,writable:!0,value:0}),t(this,"name",e),t(this,"tic",(function(){i?s.fail(".tic() called more than once"):(s.emit("tic"),i=!0,a=h())})),t(this,"toc",(function(){var e,t,r,n;if(!1===i)return s.fail(".toc() called before .tic()");if(e=m(a),o)return s.fail(".toc() called more than once");o=!0,s.emit("toc"),t=e[0]+e[1]/1e9,r=s.iterations/t,n={ok:!0,operator:"result",iterations:s.iterations,elapsed:t,rate:r},s.emit("result",n)})),t(this,"iterations",r.iterations),t(this,"timeout",r.timeout),this):new W(e,r,n)}c(W,B),t(W.prototype,"run",(function(){var e,t;if(this._skip)return this.comment("SKIP "+this.name),this.end();if(!this._benchmark)return this.comment("TODO "+this.name),this.end();e=this,this._running=!0,t=K((function(){e.fail("benchmark timed out after "+e.timeout+"ms")}),this.timeout),this.once("end",(function(){R(t)})),this.emit("prerun"),this._benchmark(this),this.emit("run")})),t(W.prototype,"exit",(function(){this._exited||this._ended||(this._exited=!0,this.fail("benchmark exited without ending"),this._running||this.end())})),t(W.prototype,"ended",(function(){return this._ended})),t(W.prototype,"_assert",(function(e,t){var r;r={id:this._count,ok:e,skip:t.skip,todo:t.todo,name:t.message||"(unnamed assert)",operator:t.operator},u(t,"actual")&&(r.actual=t.actual),u(t,"expected")&&(r.expected=t.expected),e||(r.error=t.error||new Error(this.name),new Error(n("05d00"))),this._count+=1,this.emit("result",r)})),t(W.prototype,"comment",(function(e){var t,r;for(t=(e=p(e)).split(v),r=0;r<t.length;r++)e=p(t[r]),e=d(e,U,""),this.emit("result",e)})),t(W.prototype,"skip",(function(e,t){this._assert(!0,{message:t,operator:"skip",skip:!0})})),t(W.prototype,"todo",(function(e,t){this._assert(!!e,{message:t,operator:"todo",todo:!0})})),t(W.prototype,"fail",(function(e){this._assert(!1,{message:e,operator:"fail"})})),t(W.prototype,"pass",(function(e){this._assert(!0,{message:e,operator:"pass"})})),t(W.prototype,"ok",(function(e,t){this._assert(!!e,{message:t||"should be truthy",operator:"ok",expected:!0,actual:e})})),t(W.prototype,"notOk",(function(e,t){this._assert(!e,{message:t||"should be falsy",operator:"notOk",expected:!1,actual:e})})),t(W.prototype,"equal",(function(e,t,r){this._assert(e===t,{message:r||"should be equal",operator:"equal",expected:t,actual:e})})),t(W.prototype,"notEqual",(function(e,t,r){this._assert(e!==t,{message:r||"should not be equal",operator:"notEqual",expected:t,actual:e})})),t(W.prototype,"deepEqual",(function(e,t,r){this.comment("actual: "+e+". expected: "+t+". msg: "+r+".")})),t(W.prototype,"notDeepEqual",(function(e,t,r){this.comment("actual: "+e+". expected: "+t+". msg: "+r+".")})),t(W.prototype,"end",(function(){var e=this;this._ended?this.fail(".end() called more than once"):V((function(){e.emit("end")})),this._ended=!0,this._running=!1}));var X=/\s+/g;var Z=z.EventEmitter;function F(){return this instanceof F?(Z.call(this),f(this,"_benchmarks",{value:[],configurable:!1,writable:!1,enumerable:!1}),f(this,"_stream",{value:new e,configurable:!1,writable:!1,enumerable:!1}),f(this,"_closed",{value:!1,configurable:!1,writable:!0,enumerable:!1}),f(this,"_running",{value:!1,configurable:!1,writable:!0,enumerable:!1}),f(this,"total",{value:0,configurable:!1,writable:!0,enumerable:!0}),f(this,"fail",{value:0,configurable:!1,writable:!0,enumerable:!0}),f(this,"pass",{value:0,configurable:!1,writable:!0,enumerable:!0}),f(this,"skip",{value:0,configurable:!1,writable:!0,enumerable:!0}),f(this,"todo",{value:0,configurable:!1,writable:!0,enumerable:!0}),this):new F}c(F,Z),f(F.prototype,"push",{value:function(e){var t=this;this._benchmarks.push(e),e.once("prerun",(function(){t._stream.write("# "+e.name+"\n")})),e.on("result",(function(e){if(o(e))return t._stream.write("# "+e+"\n");if("result"===e.operator)return n="  ---\n",n+="  iterations: "+(r=e).iterations+"\n",n+="  elapsed: "+r.elapsed+"\n",n+="  rate: "+r.rate+"\n",e=n+"  ...\n",t._stream.write(e);var r,n;t.total+=1,e.ok?(e.skip?t.skip+=1:e.todo&&(t.todo+=1),t.pass+=1):e.todo?(t.pass+=1,t.todo+=1):t.fail+=1;e=function(e,t){var r,n,i,o,s,a,l,c;if(l="",e.ok||(l+="not "),l+="ok "+t,e.name&&(l+=" "+d(e.name.toString(),X," ")),e.skip?l+=" # SKIP":e.todo&&(l+=" # TODO"),l+="\n",e.ok)return l;if(l+="  ---\n",l+="  operator: "+e.operator+"\n",(u(e,"actual")||u(e,"expected"))&&(i=e.expected,(o=e.actual)!=o&&i!=i))throw new Error("unexpected error.");if(e.at&&(l+="  at: "+e.at+"\n"),e.actual&&(r=e.actual.stack),e.error&&(n=e.error.stack),s=r||n)for(a=s.toString().split(v),l+="  stack: |-\n",c=0;c<a.length;c++)l+="    "+a[c]+"\n";return l+"  ...\n"}(e,t.total),t._stream.write(e)})),this.emit("_push",e)},configurable:!1,writable:!1,enumerable:!1}),f(F.prototype,"createStream",{value:function(t){var r,n,i,s;return i=this,r=new e(n=arguments.length?t:{}),n.objectMode?(s=0,this.on("_push",c),this.on("done",f)):(r.write("TAP version 13\n"),this._stream.pipe(r)),this.on("_run",l),r;function a(){V(u)}function u(){var e=i._benchmarks.shift();if(e)return e.run(),e.ended()?a():e.once("end",a);i._running=!1,i.emit("done")}function l(){if(!i._running)return i._running=!0,a()}function c(e){var t=s;s+=1,e.once("prerun",(function(){var n={type:"benchmark",name:e.name,id:t};r.write(n)})),e.on("result",(function(e){o(e)?e={benchmark:t,type:"comment",name:e}:"result"===e.operator?(e.benchmark=t,e.type="result"):(e.benchmark=t,e.type="assert");r.write(e)})),e.on("end",(function(){r.write({benchmark:t,type:"end"})}))}function f(){r.destroy()}},configurable:!1,writable:!1,enumerable:!1}),f(F.prototype,"run",{value:function(){this.emit("_run")},configurable:!1,writable:!1,enumerable:!1}),f(F.prototype,"clear",{value:function(){this._benchmarks.length=0},configurable:!1,writable:!1,enumerable:!1}),f(F.prototype,"close",{value:function(){var e=this;this._closed||(this._closed=!0,this._benchmarks.length?(this.clear(),this._stream.write("# WARNING: harness closed before completion.\n")):(this._stream.write("#\n"),this._stream.write("1.."+this.total+"\n"),this._stream.write("# total "+this.total+"\n"),this._stream.write("# pass  "+this.pass+"\n"),this.fail&&this._stream.write("# fail  "+this.fail+"\n"),this.skip&&this._stream.write("# skip  "+this.skip+"\n"),this.todo&&this._stream.write("# todo  "+this.todo+"\n"),this.fail||this._stream.write("#\n# ok\n")),this._stream.once("close",(function(){e.emit("close")})),this._stream.destroy())},configurable:!1,writable:!1,enumerable:!1}),f(F.prototype,"exit",{value:function(){var e,t;for(t=0;t<this._benchmarks.length;t++)this._benchmarks[t].exit();e=this,this.clear(),this._stream.once("close",(function(){e.emit("close")})),this._stream.destroy()},configurable:!1,writable:!1,enumerable:!1});var G={skip:!1,iterations:null,repeats:3,timeout:3e5};function H(e,t){return a(t)?u(t,"skip")&&(e.skip=t.skip,!s(e.skip))?new TypeError(n("05d30","skip",e.skip)):!u(t,"iterations")||(e.iterations=t.iterations,w(e.iterations)||b(e.iterations))?u(t,"repeats")&&(e.repeats=t.repeats,!w(e.repeats))?new TypeError(n("05d3b","repeats",e.repeats)):u(t,"timeout")&&(e.timeout=t.timeout,!w(e.timeout))?new TypeError(n("05d3b","timeout",e.timeout)):null:new TypeError(n("05d8Z","iterations",e.iterations)):new TypeError(n("05d2h",t))}function Y(e,t,r,n){if(!r)return t.repeats=1,n(e,t,r);if(t.skip)return t.repeats=1,n(e,t,r);function i(i,o){return i?(t.repeats=1,t.iterations=1,n(e,t,r)):(t.iterations=o,n(e,t,r))}!function(e,t,r,n){var i,s,a,u,c;a=0,u=0,(s=l(t)).iterations=1,(c=new W(e,s,r)).on("result",(function(e){o(e)||e.ok||e.todo||(i=!0)})),c.on("tic",(function(){a+=1})),c.on("toc",(function(){u+=1})),c.once("end",(function(){var e;return i?e=new Error("unexpected error. Benchmark failed."):1===a&&1===u||(e=new Error("unexpected error. Invalid benchmark.")),e?n(e):n()})),c.run()}(e,t,r,(function(s){if(s)return t.repeats=1,t.iterations=1,n(e,t,r);if(t.iterations)return n(e,t,r);!function(e,t,r,n){var i,s;return s=0,(i=l(t)).iterations=10,a();function a(){var t=new W(e,i,r);t.on("result",u),t.once("end",c),t.run()}function u(e){o(e)||"result"!==e.operator||(s=e.elapsed)}function c(){if(s<.1&&i.iterations<1e10)return i.iterations*=10,a();n(null,i.iterations)}}(e,t,r,i)}))}function J(e,c){var f,h,m,p,d;if(p={},1===arguments.length)if(r(e))d=e;else{if(!a(e))throw new TypeError(n("invalid argument. Must provide either an options object or a function. Value: `%s`.",e));p=e}else if(arguments.length>1){if(!a(e))throw new TypeError(n("05d3X",e));if(u(e,"autoclose")&&(p.autoclose=e.autoclose,!s(p.autoclose)))throw new TypeError(n("05d30","autoclose",p.autoclose));if(!r(d=c))throw new TypeError(n("05d2S",d))}function v(e,t,i){var s,a,u;if(!o(e))throw new TypeError(n("05d3R",e));if(s=l(G),2===arguments.length){if(r(t))u=t;else if(a=H(s,t))throw a}else if(arguments.length>2){if(a=H(s,t))throw a;if(!r(u=i))throw new TypeError(n("05d3Z",u))}return m.push([e,s,u]),1===m.length&&V(b),v}function b(){var e=-1;return t();function t(){var t;if((e+=1)===m.length)return m.length=0,h.run();Y((t=m[e])[0],t[1],t[2],r)}function r(e,r,n){var i,o;for(o=0;o<r.repeats;o++)(i=new W(e,r,n)).on("result",w),h.push(i);return t()}}function w(e){o(e)||e.ok||e.todo||(f=1)}function g(e){return arguments.length?h.createStream(e):h.createStream()}function y(){h.close()}function _(){h.exit()}function j(){return f}return h=new F,p.autoclose&&h.once("done",y),d&&h.once("done",d),f=0,m=[],t(v,"createStream",g),t(v,"close",y),t(v,"exit",_),i(v,"exitCode",j),v}var Q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function $(){throw new Error("setTimeout has not been defined")}function ee(){throw new Error("clearTimeout has not been defined")}var te=$,re=ee;function ne(e){if(te===setTimeout)return setTimeout(e,0);if((te===$||!te)&&setTimeout)return te=setTimeout,setTimeout(e,0);try{return te(e,0)}catch(t){try{return te.call(null,e,0)}catch(t){return te.call(this,e,0)}}}"function"==typeof Q.setTimeout&&(te=setTimeout),"function"==typeof Q.clearTimeout&&(re=clearTimeout);var ie,oe=[],se=!1,ae=-1;function ue(){se&&ie&&(se=!1,ie.length?oe=ie.concat(oe):ae=-1,oe.length&&le())}function le(){if(!se){var e=ne(ue);se=!0;for(var t=oe.length;t;){for(ie=oe,oe=[];++ae<t;)ie&&ie[ae].run();ae=-1,t=oe.length}ie=null,se=!1,function(e){if(re===clearTimeout)return clearTimeout(e);if((re===ee||!re)&&clearTimeout)return re=clearTimeout,clearTimeout(e);try{re(e)}catch(t){try{return re.call(null,e)}catch(t){return re.call(this,e)}}}(e)}}function ce(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];oe.push(new fe(e,t)),1!==oe.length||se||ne(le)}function fe(e,t){this.fun=e,this.array=t}fe.prototype.run=function(){this.fun.apply(null,this.array)};var he={},me=[],pe={},de={},ve={};function be(){}var we=be,ge=be,ye=be,_e=be,je=be,ke=be,xe=be;function Ee(e){throw new Error("process.binding is not supported")}function Te(){return"/"}function Le(e){throw new Error("process.chdir is not supported")}function Oe(){return 0}var Ce=Q.performance||{},Se=Ce.now||Ce.mozNow||Ce.msNow||Ce.oNow||Ce.webkitNow||function(){return(new Date).getTime()};function Me(e){var t=.001*Se.call(Ce),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]}var Ae=new Date;function Pe(){return(new Date-Ae)/1e3}var De,Ne={nextTick:ce,title:"browser",browser:true,env:he,argv:me,version:"",versions:pe,on:we,addListener:ge,once:ye,off:_e,removeListener:je,removeAllListeners:ke,emit:xe,binding:Ee,cwd:Te,chdir:Le,umask:Oe,hrtime:Me,platform:"browser",release:de,config:ve,uptime:Pe},qe=E(Object.freeze({__proto__:null,addListener:ge,argv:me,binding:Ee,browser:true,chdir:Le,config:ve,cwd:Te,default:Ne,emit:xe,env:he,hrtime:Me,nextTick:ce,off:_e,on:we,once:ye,platform:"browser",release:de,removeAllListeners:ke,removeListener:je,title:"browser",umask:Oe,uptime:Pe,version:"",versions:pe})),Ie=qe&&"function"==typeof qe.exit,ze=!g&&Ie;function Ke(){var t,r;return t=new e({transform:function(e,t,i){var o,s;for(s=0;s<e.length;s++)"\n"===(o=x(e[s]))?n():r+=o;i()},flush:n}),r="",t;function n(e){try{n=r,console.log(n)}catch(e){t.emit("error",e)}var n;if(r="",e)return e()}}function Re(){var e,t,i,o,l,c,f;if(0===arguments.length)o={},f=k;else if(1===arguments.length)if(r(arguments[0]))o={},f=arguments[0];else{if(!a(arguments[0]))throw new TypeError(n("invalid argument. Must provide either an options object or a function. Value: `%s`.",arguments[0]));o=arguments[0],f=k}else{if(!a(o=arguments[0]))throw new TypeError(n("05d3X",o));if(!r(f=arguments[1]))throw new TypeError(n("05d2S",f))}if(c={},u(o,"autoclose")&&(c.autoclose=o.autoclose,!s(c.autoclose)))throw new TypeError(n("05d30","autoclose",c.autoclose));if(u(o,"stream")&&(c.stream=o.stream,!y(c.stream)))throw new TypeError(n("05d3Y","stream",c.stream));return e=0,l=_(c,["autoclose"]),i=J(l,h),l=j(o,["autoclose","stream"]),t=i.createStream(l).pipe(c.stream||Ke()),ze&&(t.on("error",m),qe.on("exit",p)),i;function h(){return f()}function m(){e=1}function p(t){0===t&&(i.close(),qe.exit(e||i.exitCode))}}function Ue(e,t){var r,n;return De||(arguments.length>1?(r=e,n=t):(r={},n=e),r.autoclose=!ze,De=Re(r,n),Ue.cached=!0,De)}var Ve=[];function Be(){var e,t;for(e=Ve.length,t=0;t<e;t++)Ve.shift()()}function We(e,t,r){var n=Ue(Be);return arguments.length<2?n(e):2===arguments.length?n(e,t):n(e,t,r),We}t(We,"createHarness",J),t(We,"createStream",(function(t){var r,n;return n=arguments.length?t:{},Ue.cached?Ue().createStream(n):(r=new e(n),n.stream=r,Ue(n,Be),r)})),t(We,"onFinish",(function(e){var t;if(!r(e))throw new TypeError(n("05d3V",e));for(t=0;t<Ve.length;t++)if(e===Ve[t])throw new Error(n("05d0B"));Ve.push(e)}));export{We as default};
//# sourceMappingURL=index.mjs.map
