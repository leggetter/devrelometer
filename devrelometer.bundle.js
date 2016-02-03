!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {

!function(e){function n(e,n){for(var t=e.split(".");t.length;)n=n[t.shift()];return n}function t(n){if(Object.keys)Object.keys(e).forEach(n);else for(var t in e)f.call(e,t)&&n(t)}function r(n){t(function(t){if(-1==a.call(l,t)){try{var r=e[t]}catch(o){l.push(t)}n(t,r)}})}var o,i=$__System,f=Object.prototype.hasOwnProperty,a=Array.prototype.indexOf||function(e){for(var n=0,t=this.length;t>n;n++)if(this[n]===e)return n;return-1},l=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(t,i,f){var a=e.define;e.define=void 0,e.exports=void 0,e.module&&e.module.exports&&(e.module=void 0);var l;if(f){l={};for(var u in f)l[u]=e[u],e[u]=f[u]}return i||(o={},r(function(e,n){o[e]=n})),function(){var t;if(i)t=n(i,e);else{var f,u,s={};r(function(e,n){o[e]!==n&&"undefined"!=typeof n&&(s[e]=n,"undefined"!=typeof f?u||f===n||(u=!0):f=n)}),t=u?s:f}if(l)for(var c in l)e[c]=l[c];return e.define=a,t}}}))}("undefined"!=typeof self?self:global);
!function(){var t=$__System;if("undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var s=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");t.set("@@cjs-helpers",t.newModule({getPathVars:function(t){var n,o=t.lastIndexOf("!");n=-1!=o?t.substr(0,o):t;var e=n.split("/");return e.pop(),e=e.join("/"),"file:///"==n.substr(0,8)?(n=n.substr(7),e=e.substr(7),isWindows&&(n=n.substr(1),e=e.substr(1))):s&&n.substr(0,s.length)===s&&(n=n.substr(s.length),e=e.substr(s.length)),{filename:n,dirname:e}}}))}();
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(s),i=(r[1].split(",")[n]||"require").replace(p,""),t=c[i]||(c[i]=new RegExp(u+i+a,"g"));t.lastIndex=0;for(var o,f=[];o=t.exec(e);)f.push(o[2]||o[3]);return f}function r(e,n,i,t){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var f=o.get(e);return f.__useDefault?f["default"]:f}throw new TypeError("Invalid require")}for(var l=[],u=0;u<e.length;u++)l.push(o["import"](e[u],t));Promise.all(l).then(function(e){n&&n.apply(null,e)},i)}function i(i,t,l){"string"!=typeof i&&(l=t,t=i,i=null),t instanceof Array||(l=t,t=["require","exports","module"].splice(0,l.length)),"function"!=typeof l&&(l=function(e){return function(){return e}}(l)),void 0===t[t.length-1]&&t.pop();var u,a,s;-1!=(u=f.call(t,"require"))&&(t.splice(u,1),i||(t=t.concat(n(l.toString(),u)))),-1!=(a=f.call(t,"exports"))&&t.splice(a,1),-1!=(s=f.call(t,"module"))&&t.splice(s,1);var p={name:i,deps:t,execute:function(n,i,f){for(var p=[],c=0;c<t.length;c++)p.push(n(t[c]));f.uri=f.id,f.config=function(){},-1!=s&&p.splice(s,0,f),-1!=a&&p.splice(a,0,i),-1!=u&&p.splice(u,0,function(e,i,t){return"string"==typeof e&&"function"!=typeof i?n(e):r.call(o,e,i,t,f.id)});var d=l.apply(-1==a?e:i,p);return"undefined"==typeof d&&f&&(d=f.exports),"undefined"!=typeof d?d:void 0}};if(i)d.anonDefine||d.isBundle?(d.anonDefine&&d.anonDefine.name&&o.registerDynamic(d.anonDefine.name,d.anonDefine.deps,!1,d.anonDefine.execute),d.anonDefine=null):d.anonDefine=p,d.isBundle=!0,o.registerDynamic(i,p.deps,!1,p.execute);else{if(d.anonDefine)throw new TypeError("Multiple defines for anonymous module");d.anonDefine=p}}function t(n){d.anonDefine=null,d.isBundle=!1;var r=e.module,t=e.exports,o=e.define;return e.module=void 0,e.exports=void 0,e.define=i,function(){e.define=o,e.module=r,e.exports=t}}var o=$__System,f=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,u="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",a="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",s=/\(([^\)]*)\)/,p=/^\s+|\s+$/g,c={};i.amd={};var d={isBundle:!1,anonDefine:null};o.set("@@amd-helpers",o.newModule({createDefine:t,require:r,define:i,lastModule:d})),o.amdDefine=i,o.amdRequire=r}("undefined"!=typeof self?self:global);
$__System.registerDynamic("2", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3", ["2"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('2');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4", ["3"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('3'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5", ["4"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _Object$defineProperty = $__require('4')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7", ["6"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var defined = $__require('6');
  module.exports = function(it) {
    return Object(defined(it));
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("8", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("9", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a", ["9"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var aFunction = $__require('9');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b", ["8", "c", "a"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = $__require('8'),
      core = $__require('c'),
      ctx = $__require('a'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("d", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("e", ["b", "c", "d"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('b'),
      core = $__require('c'),
      fails = $__require('d');
  module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
      fn(1);
    }), 'Object', exp);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("f", ["7", "e"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toObject = $__require('7');
  $__require('e')('keys', function($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("c", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("10", ["f", "c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('f');
  module.exports = $__require('c').Object.keys;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("11", ["10"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('10'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
(function(global, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document ? factory(global, true) : function(w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return factory(w);
    };
  } else {
    factory(global);
  }
}(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
  var arr = [];
  var document = window.document;
  var slice = arr.slice;
  var concat = arr.concat;
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var support = {};
  var version = "2.2.0",
      jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
      },
      rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      rmsPrefix = /^-ms-/,
      rdashAlpha = /-([\da-z])/gi,
      fcamelCase = function(all, letter) {
        return letter.toUpperCase();
      };
  jQuery.fn = jQuery.prototype = {
    jquery: version,
    constructor: jQuery,
    selector: "",
    length: 0,
    toArray: function() {
      return slice.call(this);
    },
    get: function(num) {
      return num != null ? (num < 0 ? this[num + this.length] : this[num]) : slice.call(this);
    },
    pushStack: function(elems) {
      var ret = jQuery.merge(this.constructor(), elems);
      ret.prevObject = this;
      ret.context = this.context;
      return ret;
    },
    each: function(callback) {
      return jQuery.each(this, callback);
    },
    map: function(callback) {
      return this.pushStack(jQuery.map(this, function(elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function() {
      return this.pushStack(slice.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };
  jQuery.extend = jQuery.fn.extend = function() {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;
    if (typeof target === "boolean") {
      deep = target;
      target = arguments[i] || {};
      i++;
    }
    if (typeof target !== "object" && !jQuery.isFunction(target)) {
      target = {};
    }
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      if ((options = arguments[i]) != null) {
        for (name in options) {
          src = target[name];
          copy = options[name];
          if (target === copy) {
            continue;
          }
          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && jQuery.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            }
            target[name] = jQuery.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  };
  jQuery.extend({
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    isReady: true,
    error: function(msg) {
      throw new Error(msg);
    },
    noop: function() {},
    isFunction: function(obj) {
      return jQuery.type(obj) === "function";
    },
    isArray: Array.isArray,
    isWindow: function(obj) {
      return obj != null && obj === obj.window;
    },
    isNumeric: function(obj) {
      var realStringObj = obj && obj.toString();
      return !jQuery.isArray(obj) && (realStringObj - parseFloat(realStringObj) + 1) >= 0;
    },
    isPlainObject: function(obj) {
      if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
        return false;
      }
      if (obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
        return false;
      }
      return true;
    },
    isEmptyObject: function(obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },
    type: function(obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
    },
    globalEval: function(code) {
      var script,
          indirect = eval;
      code = jQuery.trim(code);
      if (code) {
        if (code.indexOf("use strict") === 1) {
          script = document.createElement("script");
          script.text = code;
          document.head.appendChild(script).parentNode.removeChild(script);
        } else {
          indirect(code);
        }
      }
    },
    camelCase: function(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    },
    nodeName: function(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },
    each: function(obj, callback) {
      var length,
          i = 0;
      if (isArrayLike(obj)) {
        length = obj.length;
        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }
      return obj;
    },
    trim: function(text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },
    makeArray: function(arr, results) {
      var ret = results || [];
      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }
      return ret;
    },
    inArray: function(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    merge: function(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;
      for (; j < len; j++) {
        first[i++] = second[j];
      }
      first.length = i;
      return first;
    },
    grep: function(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert;
      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);
        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }
      return matches;
    },
    map: function(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = [];
      if (isArrayLike(elems)) {
        length = elems.length;
        for (; i < length; i++) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      }
      return concat.apply([], ret);
    },
    guid: 1,
    proxy: function(fn, context) {
      var tmp,
          args,
          proxy;
      if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      }
      if (!jQuery.isFunction(fn)) {
        return undefined;
      }
      args = slice.call(arguments, 2);
      proxy = function() {
        return fn.apply(context || this, args.concat(slice.call(arguments)));
      };
      proxy.guid = fn.guid = fn.guid || jQuery.guid++;
      return proxy;
    },
    now: Date.now,
    support: support
  });
  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  }
  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });
  function isArrayLike(obj) {
    var length = !!obj && "length" in obj && obj.length,
        type = jQuery.type(obj);
    if (type === "function" || jQuery.isWindow(obj)) {
      return false;
    }
    return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
  }
  var Sizzle = (function(window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        },
        MAX_NEGATIVE = 1 << 31,
        hasOwn = ({}).hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,
        indexOf = function(list, elem) {
          var i = 0,
              len = list.length;
          for (; i < len; i++) {
            if (list[i] === elem) {
              return i;
            }
          }
          return -1;
        },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        whitespace = "[\\x20\\t\\r\\n\\f]",
        identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)",
        rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
          "ID": new RegExp("^#(" + identifier + ")"),
          "CLASS": new RegExp("^\\.(" + identifier + ")"),
          "TAG": new RegExp("^(" + identifier + "|[*])"),
          "ATTR": new RegExp("^" + attributes),
          "PSEUDO": new RegExp("^" + pseudos),
          "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
          "bool": new RegExp("^(?:" + booleans + ")$", "i"),
          "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        },
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        rescape = /'|\\/g,
        runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
        funescape = function(_, escaped, escapedWhitespace) {
          var high = "0x" + escaped - 0x10000;
          return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
        },
        unloadHandler = function() {
          setDocument();
        };
    try {
      push.apply((arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes);
      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {apply: arr.length ? function(target, els) {
          push_native.apply(target, slice.call(els));
        } : function(target, els) {
          var j = target.length,
              i = 0;
          while ((target[j++] = els[i++])) {}
          target.length = j - 1;
        }};
    }
    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          nidselect,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          nodeType = context ? context.nodeType : 9;
      results = results || [];
      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      }
      if (!seed) {
        if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
          setDocument(context);
        }
        context = context || document;
        if (documentIsHTML) {
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            if ((m = match[1])) {
              if (nodeType === 9) {
                if ((elem = context.getElementById(m))) {
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                }
              } else {
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              }
            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results;
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          }
          if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
            if (nodeType !== 1) {
              newContext = context;
              newSelector = selector;
            } else if (context.nodeName.toLowerCase() !== "object") {
              if ((nid = context.getAttribute("id"))) {
                nid = nid.replace(rescape, "\\$&");
              } else {
                context.setAttribute("id", (nid = expando));
              }
              groups = tokenize(selector);
              i = groups.length;
              nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
              while (i--) {
                groups[i] = nidselect + " " + toSelector(groups[i]);
              }
              newSelector = groups.join(",");
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
            }
            if (newSelector) {
              try {
                push.apply(results, newContext.querySelectorAll(newSelector));
                return results;
              } catch (qsaError) {} finally {
                if (nid === expando) {
                  context.removeAttribute("id");
                }
              }
            }
          }
        }
      }
      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    function createCache() {
      var keys = [];
      function cache(key, value) {
        if (keys.push(key + " ") > Expr.cacheLength) {
          delete cache[keys.shift()];
        }
        return (cache[key + " "] = value);
      }
      return cache;
    }
    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    function assert(fn) {
      var div = document.createElement("div");
      try {
        return !!fn(div);
      } catch (e) {
        return false;
      } finally {
        if (div.parentNode) {
          div.parentNode.removeChild(div);
        }
        div = null;
      }
    }
    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;
      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
      if (diff) {
        return diff;
      }
      if (cur) {
        while ((cur = cur.nextSibling)) {
          if (cur === b) {
            return -1;
          }
        }
      }
      return a ? 1 : -1;
    }
    function createInputPseudo(type) {
      return function(elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    function createButtonPseudo(type) {
      return function(elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    function createPositionalPseudo(fn) {
      return markFunction(function(argument) {
        argument = +argument;
        return markFunction(function(seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length;
          while (i--) {
            if (seed[(j = matchIndexes[i])]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    }
    support = Sizzle.support = {};
    isXML = Sizzle.isXML = function(elem) {
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;
      return documentElement ? documentElement.nodeName !== "HTML" : false;
    };
    setDocument = Sizzle.setDocument = function(node) {
      var hasCompare,
          parent,
          doc = node ? node.ownerDocument || node : preferredDoc;
      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      }
      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document);
      if ((parent = document.defaultView) && parent.top !== parent) {
        if (parent.addEventListener) {
          parent.addEventListener("unload", unloadHandler, false);
        } else if (parent.attachEvent) {
          parent.attachEvent("onunload", unloadHandler);
        }
      }
      support.attributes = assert(function(div) {
        div.className = "i";
        return !div.getAttribute("className");
      });
      support.getElementsByTagName = assert(function(div) {
        div.appendChild(document.createComment(""));
        return !div.getElementsByTagName("*").length;
      });
      support.getElementsByClassName = rnative.test(document.getElementsByClassName);
      support.getById = assert(function(div) {
        docElem.appendChild(div).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      });
      if (support.getById) {
        Expr.find["ID"] = function(id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var m = context.getElementById(id);
            return m ? [m] : [];
          }
        };
        Expr.filter["ID"] = function(id) {
          var attrId = id.replace(runescape, funescape);
          return function(elem) {
            return elem.getAttribute("id") === attrId;
          };
        };
      } else {
        delete Expr.find["ID"];
        Expr.filter["ID"] = function(id) {
          var attrId = id.replace(runescape, funescape);
          return function(elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        };
      }
      Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag);
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function(tag, context) {
        var elem,
            tmp = [],
            i = 0,
            results = context.getElementsByTagName(tag);
        if (tag === "*") {
          while ((elem = results[i++])) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }
          return tmp;
        }
        return results;
      };
      Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      rbuggyMatches = [];
      rbuggyQSA = [];
      if ((support.qsa = rnative.test(document.querySelectorAll))) {
        assert(function(div) {
          docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
          if (div.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          }
          if (!div.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          }
          if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          }
          if (!div.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          }
          if (!div.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
        });
        assert(function(div) {
          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          div.appendChild(input).setAttribute("name", "D");
          if (div.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          }
          if (!div.querySelectorAll(":enabled").length) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          div.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }
      if ((support.matchesSelector = rnative.test((matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)))) {
        assert(function(div) {
          support.disconnectedMatch = matches.call(div, "div");
          matches.call(div, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }
      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      hasCompare = rnative.test(docElem.compareDocumentPosition);
      contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function(a, b) {
        if (b) {
          while ((b = b.parentNode)) {
            if (b === a) {
              return true;
            }
          }
        }
        return false;
      };
      sortOrder = hasCompare ? function(a, b) {
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }
        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
        if (compare) {
          return compare;
        }
        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
        if (compare & 1 || (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
          if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
            return -1;
          }
          if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
            return 1;
          }
          return sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
        }
        return compare & 4 ? -1 : 1;
      } : function(a, b) {
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }
        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b];
        if (!aup || !bup) {
          return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
        } else if (aup === bup) {
          return siblingCheck(a, b);
        }
        cur = a;
        while ((cur = cur.parentNode)) {
          ap.unshift(cur);
        }
        cur = b;
        while ((cur = cur.parentNode)) {
          bp.unshift(cur);
        }
        while (ap[i] === bp[i]) {
          i++;
        }
        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      };
      return document;
    };
    Sizzle.matches = function(expr, elements) {
      return Sizzle(expr, null, null, elements);
    };
    Sizzle.matchesSelector = function(elem, expr) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      expr = expr.replace(rattributeQuotes, "='$1']");
      if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr);
          if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {}
      }
      return Sizzle(expr, document, null, [elem]).length > 0;
    };
    Sizzle.contains = function(context, elem) {
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }
      return contains(context, elem);
    };
    Sizzle.attr = function(elem, name) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      var fn = Expr.attrHandle[name.toLowerCase()],
          val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };
    Sizzle.error = function(msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    Sizzle.uniqueSort = function(results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0;
      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);
      if (hasDuplicate) {
        while ((elem = results[i++])) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }
        while (j--) {
          results.splice(duplicates[j], 1);
        }
      }
      sortInput = null;
      return results;
    };
    getText = Sizzle.getText = function(elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;
      if (!nodeType) {
        while ((node = elem[i++])) {
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      }
      return ret;
    };
    Expr = Sizzle.selectors = {
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {dir: "parentNode"},
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        "ATTR": function(match) {
          match[1] = match[1].replace(runescape, funescape);
          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }
          return match.slice(0, 4);
        },
        "CHILD": function(match) {
          match[1] = match[1].toLowerCase();
          if (match[1].slice(0, 3) === "nth") {
            if (!match[3]) {
              Sizzle.error(match[0]);
            }
            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +((match[7] + match[8]) || match[3] === "odd");
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }
          return match;
        },
        "PSEUDO": function(match) {
          var excess,
              unquoted = !match[6] && match[2];
          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          }
          if (match[3]) {
            match[2] = match[4] || match[5] || "";
          } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          }
          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function() {
            return true;
          } : function(elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function(name, operator, check) {
          return function(elem) {
            var result = Sizzle.attr(elem, name);
            if (result == null) {
              return operator === "!=";
            }
            if (!operator) {
              return true;
            }
            result += "";
            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          };
        },
        "CHILD": function(type, what, argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? function(elem) {
            return !!elem.parentNode;
          } : function(elem, context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;
            if (parent) {
              if (simple) {
                while (dir) {
                  node = elem;
                  while ((node = node[dir])) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  }
                  start = dir = type === "only" && !start && "nextSibling";
                }
                return true;
              }
              start = [forward ? parent.firstChild : parent.lastChild];
              if (forward && useCache) {
                node = parent;
                outerCache = node[expando] || (node[expando] = {});
                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                if (useCache) {
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {});
                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                }
                if (diff === false) {
                  while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }
                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              }
              diff -= last;
              return diff === first || (diff % first === 0 && diff / first >= 0);
            }
          };
        },
        "PSEUDO": function(pseudo, argument) {
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
          if (fn[expando]) {
            return fn(argument);
          }
          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;
              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function(elem) {
              return fn(elem, 0, args);
            };
          }
          return fn;
        }
      },
      pseudos: {
        "not": markFunction(function(selector) {
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length;
            while (i--) {
              if ((elem = unmatched[i])) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function(elem, context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results);
            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function(selector) {
          return function(elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function(text) {
          text = text.replace(runescape, funescape);
          return function(elem) {
            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
          };
        }),
        "lang": markFunction(function(lang) {
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }
          lang = lang.replace(runescape, funescape).toLowerCase();
          return function(elem) {
            var elemLang;
            do {
              if ((elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);
            return false;
          };
        }),
        "target": function(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function(elem) {
          return elem === docElem;
        },
        "focus": function(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        "enabled": function(elem) {
          return elem.disabled === false;
        },
        "disabled": function(elem) {
          return elem.disabled === true;
        },
        "checked": function(elem) {
          var nodeName = elem.nodeName.toLowerCase();
          return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
        },
        "selected": function(elem) {
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }
          return elem.selected === true;
        },
        "empty": function(elem) {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        "parent": function(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        "header": function(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        "first": createPositionalPseudo(function() {
          return [0];
        }),
        "last": createPositionalPseudo(function(matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function(matchIndexes, length) {
          var i = 0;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function(matchIndexes, length) {
          var i = 1;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; --i >= 0; ) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; ++i < length; ) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"];
    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }
    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    }
    function setFilters() {}
    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();
    tokenize = Sizzle.tokenize = function(selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;
      while (soFar) {
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push((tokens = []));
        }
        matched = false;
        if ((match = rcombinators.exec(soFar))) {
          matched = match.shift();
          tokens.push({
            value: matched,
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        }
        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }
      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
    };
    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";
      for (; i < len; i++) {
        selector += tokens[i].value;
      }
      return selector;
    }
    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          checkNonElements = base && dir === "parentNode",
          doneName = done++;
      return combinator.first ? function(elem, context, xml) {
        while ((elem = elem[dir])) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }
      } : function(elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName];
        if (xml) {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {});
              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
              if ((oldCache = uniqueCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                return (newCache[2] = oldCache[2]);
              } else {
                uniqueCache[dir] = newCache;
                if ((newCache[2] = matcher(elem, context, xml))) {
                  return true;
                }
              }
            }
          }
        }
      };
    }
    function elementMatcher(matchers) {
      return matchers.length > 1 ? function(elem, context, xml) {
        var i = matchers.length;
        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;
      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }
      return results;
    }
    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;
      for (; i < len; i++) {
        if ((elem = unmatched[i])) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);
            if (mapped) {
              map.push(i);
            }
          }
        }
      }
      return newUnmatched;
    }
    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }
      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }
      return markFunction(function(seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        }
        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml);
          i = temp.length;
          while (i--) {
            if ((elem = temp[i])) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }
        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              temp = [];
              i = matcherOut.length;
              while (i--) {
                if ((elem = matcherOut[i])) {
                  temp.push((matcherIn[i] = elem));
                }
              }
              postFinder(null, (matcherOut = []), temp, xml);
            }
            i = matcherOut.length;
            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          }
        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }
    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true),
          matchAnyContext = addCombinator(function(elem) {
            return indexOf(checkContext, elem) > -1;
          }, implicitRelative, true),
          matchers = [function(elem, context, xml) {
            var ret = (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
      for (; i < len; i++) {
        if ((matcher = Expr.relative[tokens[i].type])) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
          if (matcher[expando]) {
            j = ++i;
            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }
            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({value: tokens[i - 2].type === " " ? "*" : ""})).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens((tokens = tokens.slice(j))), j < len && toSelector(tokens));
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function(seed, context, xml, results, outermost) {
            var elem,
                j,
                matcher,
                matchedCount = 0,
                i = "0",
                unmatched = seed && [],
                setMatched = [],
                contextBackup = outermostContext,
                elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                len = elems.length;
            if (outermost) {
              outermostContext = context === document || context || outermost;
            }
            for (; i !== len && (elem = elems[i]) != null; i++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument !== document) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while ((matcher = elementMatchers[j++])) {
                  if (matcher(elem, context || document, xml)) {
                    results.push(elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if ((elem = !matcher && elem)) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i;
            if (bySet && i !== matchedCount) {
              j = 0;
              while ((matcher = setMatchers[j++])) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i--) {
                    if (!(unmatched[i] || setMatched[i])) {
                      setMatched[i] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && (matchedCount + setMatchers.length) > 1) {
                Sizzle.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    compile = Sizzle.compile = function(selector, match) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];
      if (!cached) {
        if (!match) {
          match = tokenize(selector);
        }
        i = match.length;
        while (i--) {
          cached = matcherFromTokens(match[i]);
          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }
        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
        cached.selector = selector;
      }
      return cached;
    };
    select = Sizzle.select = function(selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize((selector = compiled.selector || selector));
      results = results || [];
      if (match.length === 1) {
        tokens = match[0] = match[0].slice(0);
        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
          if (!context) {
            return results;
          } else if (compiled) {
            context = context.parentNode;
          }
          selector = selector.slice(tokens.shift().value.length);
        }
        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
        while (i--) {
          token = tokens[i];
          if (Expr.relative[(type = token.type)]) {
            break;
          }
          if ((find = Expr.find[type])) {
            if ((seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);
              if (!selector) {
                push.apply(results, seed);
                return results;
              }
              break;
            }
          }
        }
      }
      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    };
    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
    support.detectDuplicates = !!hasDuplicate;
    setDocument();
    support.sortDetached = assert(function(div1) {
      return div1.compareDocumentPosition(document.createElement("div")) & 1;
    });
    if (!assert(function(div) {
      div.innerHTML = "<a href='#'></a>";
      return div.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function(elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    }
    if (!support.attributes || !assert(function(div) {
      div.innerHTML = "<input/>";
      div.firstChild.setAttribute("value", "");
      return div.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function(elem, name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    }
    if (!assert(function(div) {
      return div.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function(elem, name, isXML) {
        var val;
        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }
    return Sizzle;
  })(window);
  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;
  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  var dir = function(elem, dir, until) {
    var matched = [],
        truncate = until !== undefined;
    while ((elem = elem[dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }
        matched.push(elem);
      }
    }
    return matched;
  };
  var siblings = function(n, elem) {
    var matched = [];
    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }
    return matched;
  };
  var rneedsContext = jQuery.expr.match.needsContext;
  var rsingleTag = (/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);
  var risSimple = /^.[^:#\[\.,]*$/;
  function winnow(elements, qualifier, not) {
    if (jQuery.isFunction(qualifier)) {
      return jQuery.grep(elements, function(elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    }
    if (qualifier.nodeType) {
      return jQuery.grep(elements, function(elem) {
        return (elem === qualifier) !== not;
      });
    }
    if (typeof qualifier === "string") {
      if (risSimple.test(qualifier)) {
        return jQuery.filter(qualifier, elements, not);
      }
      qualifier = jQuery.filter(qualifier, elements);
    }
    return jQuery.grep(elements, function(elem) {
      return (indexOf.call(qualifier, elem) > -1) !== not;
    });
  }
  jQuery.filter = function(expr, elems, not) {
    var elem = elems[0];
    if (not) {
      expr = ":not(" + expr + ")";
    }
    return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
      return elem.nodeType === 1;
    }));
  };
  jQuery.fn.extend({
    find: function(selector) {
      var i,
          len = this.length,
          ret = [],
          self = this;
      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function() {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }
      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }
      ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
      ret.selector = this.selector ? this.selector + " " + selector : selector;
      return ret;
    },
    filter: function(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function(selector) {
      return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  });
  var rootjQuery,
      rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      init = jQuery.fn.init = function(selector, context, root) {
        var match,
            elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery ? context[0] : context;
              jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
              if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                for (match in context) {
                  if (jQuery.isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document.getElementById(match[2]);
              if (elem && elem.parentNode) {
                this.length = 1;
                this[0] = elem;
              }
              this.context = document;
              this.selector = selector;
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this.context = this[0] = selector;
          this.length = 1;
          return this;
        } else if (jQuery.isFunction(selector)) {
          return root.ready !== undefined ? root.ready(selector) : selector(jQuery);
        }
        if (selector.selector !== undefined) {
          this.selector = selector.selector;
          this.context = selector.context;
        }
        return jQuery.makeArray(selector, this);
      };
  init.prototype = jQuery.fn;
  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
  jQuery.fn.extend({
    has: function(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function() {
        var i = 0;
        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
      for (; i < l; i++) {
        for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
          if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
            matched.push(cur);
            break;
          }
        }
      }
      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    index: function(elem) {
      if (!elem) {
        return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
      }
      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      }
      return indexOf.call(this, elem.jquery ? elem[0] : elem);
    },
    add: function(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}
    return cur;
  }
  jQuery.each({
    parent: function(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function(elem, i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function(elem, i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function(elem, i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function(elem) {
      return siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function(elem) {
      return siblings(elem.firstChild);
    },
    contents: function(elem) {
      return elem.contentDocument || jQuery.merge([], elem.childNodes);
    }
  }, function(name, fn) {
    jQuery.fn[name] = function(until, selector) {
      var matched = jQuery.map(this, fn, until);
      if (name.slice(-5) !== "Until") {
        selector = until;
      }
      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }
      if (this.length > 1) {
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        }
        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }
      return this.pushStack(matched);
    };
  });
  var rnotwhite = (/\S+/g);
  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
      object[flag] = true;
    });
    return object;
  }
  jQuery.Callbacks = function(options) {
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
    var firing,
        memory,
        fired,
        locked,
        list = [],
        queue = [],
        firingIndex = -1,
        fire = function() {
          locked = options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        },
        self = {
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery.each(args, function(_, arg) {
                  if (jQuery.isFunction(arg)) {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && jQuery.type(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire();
              }
            }
            return this;
          },
          remove: function() {
            jQuery.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          has: function(fn) {
            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
          },
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          lock: function() {
            locked = queue = [];
            if (!memory) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          fire: function() {
            self.fireWith(this, arguments);
            return this;
          },
          fired: function() {
            return !!fired;
          }
        };
    return self;
  };
  jQuery.extend({
    Deferred: function(func) {
      var tuples = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
          state = "pending",
          promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            then: function() {
              var fns = arguments;
              return jQuery.Deferred(function(newDefer) {
                jQuery.each(tuples, function(i, tuple) {
                  var fn = jQuery.isFunction(fns[i]) && fns[i];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && jQuery.isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            promise: function(obj) {
              return obj != null ? jQuery.extend(obj, promise) : promise;
            }
          },
          deferred = {};
      promise.pipe = promise.then;
      jQuery.each(tuples, function(i, tuple) {
        var list = tuple[2],
            stateString = tuple[3];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(function() {
            state = stateString;
          }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
        }
        deferred[tuple[0]] = function() {
          deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
          return this;
        };
        deferred[tuple[0] + "With"] = list.fireWith;
      });
      promise.promise(deferred);
      if (func) {
        func.call(deferred, deferred);
      }
      return deferred;
    },
    when: function(subordinate) {
      var i = 0,
          resolveValues = slice.call(arguments),
          length = resolveValues.length,
          remaining = length !== 1 || (subordinate && jQuery.isFunction(subordinate.promise)) ? length : 0,
          deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
          updateFunc = function(i, contexts, values) {
            return function(value) {
              contexts[i] = this;
              values[i] = arguments.length > 1 ? slice.call(arguments) : value;
              if (values === progressValues) {
                deferred.notifyWith(contexts, values);
              } else if (!(--remaining)) {
                deferred.resolveWith(contexts, values);
              }
            };
          },
          progressValues,
          progressContexts,
          resolveContexts;
      if (length > 1) {
        progressValues = new Array(length);
        progressContexts = new Array(length);
        resolveContexts = new Array(length);
        for (; i < length; i++) {
          if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
            resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject);
          } else {
            --remaining;
          }
        }
      }
      if (!remaining) {
        deferred.resolveWith(resolveContexts, resolveValues);
      }
      return deferred.promise();
    }
  });
  var readyList;
  jQuery.fn.ready = function(fn) {
    jQuery.ready.promise().done(fn);
    return this;
  };
  jQuery.extend({
    isReady: false,
    readyWait: 1,
    holdReady: function(hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    },
    ready: function(wait) {
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      }
      jQuery.isReady = true;
      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      }
      readyList.resolveWith(document, [jQuery]);
      if (jQuery.fn.triggerHandler) {
        jQuery(document).triggerHandler("ready");
        jQuery(document).off("ready");
      }
    }
  });
  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  }
  jQuery.ready.promise = function(obj) {
    if (!readyList) {
      readyList = jQuery.Deferred();
      if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
        window.setTimeout(jQuery.ready);
      } else {
        document.addEventListener("DOMContentLoaded", completed);
        window.addEventListener("load", completed);
      }
    }
    return readyList.promise(obj);
  };
  jQuery.ready.promise();
  var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null;
    if (jQuery.type(key) === "object") {
      chainable = true;
      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      }
    } else if (value !== undefined) {
      chainable = true;
      if (!jQuery.isFunction(value)) {
        raw = true;
      }
      if (bulk) {
        if (raw) {
          fn.call(elems, value);
          fn = null;
        } else {
          bulk = fn;
          fn = function(elem, key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }
      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }
    return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
  };
  var acceptData = function(owner) {
    return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
  };
  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }
  Data.uid = 1;
  Data.prototype = {
    register: function(owner, initial) {
      var value = initial || {};
      if (owner.nodeType) {
        owner[this.expando] = value;
      } else {
        Object.defineProperty(owner, this.expando, {
          value: value,
          writable: true,
          configurable: true
        });
      }
      return owner[this.expando];
    },
    cache: function(owner) {
      if (!acceptData(owner)) {
        return {};
      }
      var value = owner[this.expando];
      if (!value) {
        value = {};
        if (acceptData(owner)) {
          if (owner.nodeType) {
            owner[this.expando] = value;
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }
      return value;
    },
    set: function(owner, data, value) {
      var prop,
          cache = this.cache(owner);
      if (typeof data === "string") {
        cache[data] = value;
      } else {
        for (prop in data) {
          cache[prop] = data[prop];
        }
      }
      return cache;
    },
    get: function(owner, key) {
      return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][key];
    },
    access: function(owner, key, value) {
      var stored;
      if (key === undefined || ((key && typeof key === "string") && value === undefined)) {
        stored = this.get(owner, key);
        return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
      }
      this.set(owner, key, value);
      return value !== undefined ? value : key;
    },
    remove: function(owner, key) {
      var i,
          name,
          camel,
          cache = owner[this.expando];
      if (cache === undefined) {
        return;
      }
      if (key === undefined) {
        this.register(owner);
      } else {
        if (jQuery.isArray(key)) {
          name = key.concat(key.map(jQuery.camelCase));
        } else {
          camel = jQuery.camelCase(key);
          if (key in cache) {
            name = [key, camel];
          } else {
            name = camel;
            name = name in cache ? [name] : (name.match(rnotwhite) || []);
          }
        }
        i = name.length;
        while (i--) {
          delete cache[name[i]];
        }
      }
      if (key === undefined || jQuery.isEmptyObject(cache)) {
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data();
  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;
  function dataAttr(elem, key, data) {
    var name;
    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);
      if (typeof data === "string") {
        try {
          data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
        } catch (e) {}
        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }
    return data;
  }
  jQuery.extend({
    hasData: function(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function(elem, name, data) {
      return dataUser.access(elem, name, data);
    },
    removeData: function(elem, name) {
      dataUser.remove(elem, name);
    },
    _data: function(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes;
      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);
          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;
            while (i--) {
              if (attrs[i]) {
                name = attrs[i].name;
                if (name.indexOf("data-") === 0) {
                  name = jQuery.camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }
            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }
        return data;
      }
      if (typeof key === "object") {
        return this.each(function() {
          dataUser.set(this, key);
        });
      }
      return access(this, function(value) {
        var data,
            camelKey;
        if (elem && value === undefined) {
          data = dataUser.get(elem, key) || dataUser.get(elem, key.replace(rmultiDash, "-$&").toLowerCase());
          if (data !== undefined) {
            return data;
          }
          camelKey = jQuery.camelCase(key);
          data = dataUser.get(elem, camelKey);
          if (data !== undefined) {
            return data;
          }
          data = dataAttr(elem, camelKey, undefined);
          if (data !== undefined) {
            return data;
          }
          return;
        }
        camelKey = jQuery.camelCase(key);
        this.each(function() {
          var data = dataUser.get(this, camelKey);
          dataUser.set(this, camelKey, value);
          if (key.indexOf("-") > -1 && data !== undefined) {
            dataUser.set(this, key, value);
          }
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function(key) {
      return this.each(function() {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function(elem, type, data) {
      var queue;
      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type);
        if (data) {
          if (!queue || jQuery.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },
    dequeue: function(elem, type) {
      type = type || "fx";
      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function() {
            jQuery.dequeue(elem, type);
          };
      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }
      if (fn) {
        if (type === "fx") {
          queue.unshift("inprogress");
        }
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }
      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    _queueHooks: function(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {empty: jQuery.Callbacks("once memory").add(function() {
          dataPriv.remove(elem, [type + "queue", key]);
        })});
    }
  });
  jQuery.fn.extend({
    queue: function(type, data) {
      var setter = 2;
      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }
      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }
      return data === undefined ? this : this.each(function() {
        var queue = jQuery.queue(this, type, data);
        jQuery._queueHooks(this, type);
        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function(type) {
      return this.each(function() {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function(type) {
      return this.queue(type || "fx", []);
    },
    promise: function(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function() {
            if (!(--count)) {
              defer.resolveWith(elements, [elements]);
            }
          };
      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }
      type = type || "fx";
      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var isHidden = function(elem, el) {
    elem = el || elem;
    return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
  };
  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale = 1,
        maxIterations = 20,
        currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery.css(elem, prop, "");
        },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
    if (initialInUnit && initialInUnit[3] !== unit) {
      unit = unit || initialInUnit[3];
      valueParts = valueParts || [];
      initialInUnit = +initial || 1;
      do {
        scale = scale || ".5";
        initialInUnit = initialInUnit / scale;
        jQuery.style(elem, prop, initialInUnit + unit);
      } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
    }
    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0;
      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }
    return adjusted;
  }
  var rcheckableType = (/^(?:checkbox|radio)$/i);
  var rtagName = (/<([\w:-]+)/);
  var rscriptType = (/^$|\/(?:java|ecma)script/i);
  var wrapMap = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  function getAll(context, tag) {
    var ret = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : [];
    return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
  }
  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;
    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }
  var rhtml = /<|&#?\w+;/;
  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        contains,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;
    for (; i < l; i++) {
      elem = elems[i];
      if (elem || elem === 0) {
        if (jQuery.type(elem) === "object") {
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem));
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div"));
          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
          j = wrap[0];
          while (j--) {
            tmp = tmp.lastChild;
          }
          jQuery.merge(nodes, tmp.childNodes);
          tmp = fragment.firstChild;
          tmp.textContent = "";
        }
      }
    }
    fragment.textContent = "";
    i = 0;
    while ((elem = nodes[i++])) {
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }
        continue;
      }
      contains = jQuery.contains(elem.ownerDocument, elem);
      tmp = getAll(fragment.appendChild(elem), "script");
      if (contains) {
        setGlobalEval(tmp);
      }
      if (scripts) {
        j = 0;
        while ((elem = tmp[j++])) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }
    return fragment;
  }
  (function() {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input);
    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
  })();
  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }
  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }
  function on(elem, types, selector, data, fn, one) {
    var origFn,
        type;
    if (typeof types === "object") {
      if (typeof selector !== "string") {
        data = data || selector;
        selector = undefined;
      }
      for (type in types) {
        on(elem, type, selector, data, types[type], one);
      }
      return elem;
    }
    if (data == null && fn == null) {
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        fn = data;
        data = undefined;
      } else {
        fn = data;
        data = selector;
        selector = undefined;
      }
    }
    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return this;
    }
    if (one === 1) {
      origFn = fn;
      fn = function(event) {
        jQuery().off(event);
        return origFn.apply(this, arguments);
      };
      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }
    return elem.each(function() {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  jQuery.event = {
    global: {},
    add: function(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem);
      if (!elemData) {
        return;
      }
      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      }
      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      }
      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function(e) {
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      }
      types = (types || "").match(rnotwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        special = jQuery.event.special[type] || {};
        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn);
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;
          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }
        if (special.add) {
          special.add.call(elem, handleObj);
          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        }
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }
        jQuery.event.global[type] = true;
      }
    },
    remove: function(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
      if (!elemData || !(events = elemData.events)) {
        return;
      }
      types = (types || "").match(rnotwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
        origCount = j = handlers.length;
        while (j--) {
          handleObj = handlers[j];
          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);
            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }
          delete events[type];
        }
      }
      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function(event) {
      event = jQuery.event.fix(event);
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue = [],
          args = slice.call(arguments),
          handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {};
      args[0] = event;
      event.delegateTarget = this;
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }
      handlerQueue = jQuery.event.handlers.call(this, event, handlers);
      i = 0;
      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;
        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }
      return event.result;
    },
    handlers: function(event, handlers) {
      var i,
          matches,
          sel,
          handleObj,
          handlerQueue = [],
          delegateCount = handlers.delegateCount,
          cur = event.target;
      if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
            matches = [];
            for (i = 0; i < delegateCount; i++) {
              handleObj = handlers[i];
              sel = handleObj.selector + " ";
              if (matches[sel] === undefined) {
                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }
              if (matches[sel]) {
                matches.push(handleObj);
              }
            }
            if (matches.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matches
              });
            }
          }
        }
      }
      if (delegateCount < handlers.length) {
        handlerQueue.push({
          elem: this,
          handlers: handlers.slice(delegateCount)
        });
      }
      return handlerQueue;
    },
    props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " + "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(event, original) {
        if (event.which == null) {
          event.which = original.charCode != null ? original.charCode : original.keyCode;
        }
        return event;
      }
    },
    mouseHooks: {
      props: ("button buttons clientX clientY offsetX offsetY pageX pageY " + "screenX screenY toElement").split(" "),
      filter: function(event, original) {
        var eventDoc,
            doc,
            body,
            button = original.button;
        if (event.pageX == null && original.clientX != null) {
          eventDoc = event.target.ownerDocument || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;
          event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
          event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        }
        if (!event.which && button !== undefined) {
          event.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
        }
        return event;
      }
    },
    fix: function(event) {
      if (event[jQuery.expando]) {
        return event;
      }
      var i,
          prop,
          copy,
          type = event.type,
          originalEvent = event,
          fixHook = this.fixHooks[type];
      if (!fixHook) {
        this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
      }
      copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
      event = new jQuery.Event(originalEvent);
      i = copy.length;
      while (i--) {
        prop = copy[i];
        event[prop] = originalEvent[prop];
      }
      if (!event.target) {
        event.target = document;
      }
      if (event.target.nodeType === 3) {
        event.target = event.target.parentNode;
      }
      return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
    },
    special: {
      load: {noBubble: true},
      focus: {
        trigger: function() {
          if (this !== safeActiveElement() && this.focus) {
            this.focus();
            return false;
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === safeActiveElement() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
            this.click();
            return false;
          }
        },
        _default: function(event) {
          return jQuery.nodeName(event.target, "a");
        }
      },
      beforeunload: {postDispatch: function(event) {
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }}
    }
  };
  jQuery.removeEvent = function(elem, type, handle) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };
  jQuery.Event = function(src, props) {
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    }
    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;
      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
    } else {
      this.type = src;
    }
    if (props) {
      jQuery.extend(this, props);
    }
    this.timeStamp = src && src.timeStamp || jQuery.now();
    this[jQuery.expando] = true;
  };
  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;
      if (e) {
        e.preventDefault();
      }
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;
      if (e) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;
      if (e) {
        e.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj;
        if (!related || (related !== target && !jQuery.contains(target, related))) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }
        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function(types, selector, data, fn) {
      return on(this, types, selector, data, fn);
    },
    one: function(types, selector, data, fn) {
      return on(this, types, selector, data, fn, 1);
    },
    off: function(types, selector, fn) {
      var handleObj,
          type;
      if (types && types.preventDefault && types.handleObj) {
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }
      if (typeof types === "object") {
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === "function") {
        fn = selector;
        selector = undefined;
      }
      if (fn === false) {
        fn = returnFalse;
      }
      return this.each(function() {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      rnoInnerhtml = /<script|<style|<link/i,
      rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rscriptTypeMasked = /^true\/(.*)/,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function manipulationTarget(elem, content) {
    if (jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return elem.getElementsByTagName("tbody")[0] || elem;
    }
    return elem;
  }
  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }
  function restoreScript(elem) {
    var match = rscriptTypeMasked.exec(elem.type);
    if (match) {
      elem.type = match[1];
    } else {
      elem.removeAttribute("type");
    }
    return elem;
  }
  function cloneCopyEvent(src, dest) {
    var i,
        l,
        type,
        pdataOld,
        pdataCur,
        udataOld,
        udataCur,
        events;
    if (dest.nodeType !== 1) {
      return;
    }
    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.access(src);
      pdataCur = dataPriv.set(dest, pdataOld);
      events = pdataOld.events;
      if (events) {
        delete pdataCur.handle;
        pdataCur.events = {};
        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    }
    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  }
  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase();
    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked;
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }
  function domManip(collection, args, callback, ignored) {
    args = concat.apply([], args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        isFunction = jQuery.isFunction(value);
    if (isFunction || (l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value))) {
      return collection.each(function(index) {
        var self = collection.eq(index);
        if (isFunction) {
          args[0] = value.call(this, index, self.html());
        }
        domManip(self, args, callback, ignored);
      });
    }
    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;
      if (fragment.childNodes.length === 1) {
        fragment = first;
      }
      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length;
        for (; i < l; i++) {
          node = fragment;
          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true);
            if (hasScripts) {
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }
          callback.call(collection[i], node, i);
        }
        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument;
          jQuery.map(scripts, restoreScript);
          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];
            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src) {
                if (jQuery._evalUrl) {
                  jQuery._evalUrl(node.src);
                }
              } else {
                jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
              }
            }
          }
        }
      }
    }
    return collection;
  }
  function remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;
    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }
      if (node.parentNode) {
        if (keepData && jQuery.contains(node.ownerDocument, node)) {
          setGlobalEval(getAll(node, "script"));
        }
        node.parentNode.removeChild(node);
      }
    }
    return elem;
  }
  jQuery.extend({
    htmlPrefilter: function(html) {
      return html.replace(rxhtmlTag, "<$1></$2>");
    },
    clone: function(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = jQuery.contains(elem.ownerDocument, elem);
      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        destElements = getAll(clone);
        srcElements = getAll(elem);
        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      }
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);
          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }
      destElements = getAll(clone, "script");
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      }
      return clone;
    },
    cleanData: function(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;
      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if ((data = elem[dataPriv.expando])) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type);
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            }
            elem[dataPriv.expando] = undefined;
          }
          if (elem[dataUser.expando]) {
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    domManip: domManip,
    detach: function(selector) {
      return remove(this, selector, true);
    },
    remove: function(selector) {
      return remove(this, selector);
    },
    text: function(value) {
      return access(this, function(value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function() {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function() {
      return domManip(this, arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function() {
      return domManip(this, arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function() {
      var elem,
          i = 0;
      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem, false));
          elem.textContent = "";
        }
      }
      return this;
    },
    clone: function(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function() {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function(value) {
      return access(this, function(value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;
        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        }
        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);
          try {
            for (; i < l; i++) {
              elem = this[i] || {};
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }
            elem = 0;
          } catch (e) {}
        }
        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function() {
      var ignored = [];
      return domManip(this, arguments, function(elem) {
        var parent = this.parentNode;
        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));
          if (parent) {
            parent.replaceChild(elem, this);
          }
        }
      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(name, original) {
    jQuery.fn[name] = function(selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;
      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems);
        push.apply(ret, elems.get());
      }
      return this.pushStack(ret);
    };
  });
  var iframe,
      elemdisplay = {
        HTML: "block",
        BODY: "block"
      };
  function actualDisplay(name, doc) {
    var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
        display = jQuery.css(elem[0], "display");
    elem.detach();
    return display;
  }
  function defaultDisplay(nodeName) {
    var doc = document,
        display = elemdisplay[nodeName];
    if (!display) {
      display = actualDisplay(nodeName, doc);
      if (display === "none" || !display) {
        iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
        doc = iframe[0].contentDocument;
        doc.write();
        doc.close();
        display = actualDisplay(nodeName, doc);
        iframe.detach();
      }
      elemdisplay[nodeName] = display;
    }
    return display;
  }
  var rmargin = (/^margin/);
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
  var getStyles = function(elem) {
    var view = elem.ownerDocument.defaultView;
    if (!view.opener) {
      view = window;
    }
    return view.getComputedStyle(elem);
  };
  var swap = function(elem, options, callback, args) {
    var ret,
        name,
        old = {};
    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }
    ret = callback.apply(elem, args || []);
    for (name in options) {
      elem.style[name] = old[name];
    }
    return ret;
  };
  var documentElement = document.documentElement;
  (function() {
    var pixelPositionVal,
        boxSizingReliableVal,
        pixelMarginRightVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div");
    if (!div.style) {
      return;
    }
    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
    container.appendChild(div);
    function computeStyleTests() {
      div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
      div.innerHTML = "";
      documentElement.appendChild(container);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%";
      reliableMarginLeftVal = divStyle.marginLeft === "2px";
      boxSizingReliableVal = divStyle.width === "4px";
      div.style.marginRight = "50%";
      pixelMarginRightVal = divStyle.marginRight === "4px";
      documentElement.removeChild(container);
    }
    jQuery.extend(support, {
      pixelPosition: function() {
        computeStyleTests();
        return pixelPositionVal;
      },
      boxSizingReliable: function() {
        if (boxSizingReliableVal == null) {
          computeStyleTests();
        }
        return boxSizingReliableVal;
      },
      pixelMarginRight: function() {
        if (boxSizingReliableVal == null) {
          computeStyleTests();
        }
        return pixelMarginRightVal;
      },
      reliableMarginLeft: function() {
        if (boxSizingReliableVal == null) {
          computeStyleTests();
        }
        return reliableMarginLeftVal;
      },
      reliableMarginRight: function() {
        var ret,
            marginDiv = div.appendChild(document.createElement("div"));
        marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;" + "display:block;margin:0;border:0;padding:0";
        marginDiv.style.marginRight = marginDiv.style.width = "0";
        div.style.width = "1px";
        documentElement.appendChild(container);
        ret = !parseFloat(window.getComputedStyle(marginDiv).marginRight);
        documentElement.removeChild(container);
        div.removeChild(marginDiv);
        return ret;
      }
    });
  })();
  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        style = elem.style;
    computed = computed || getStyles(elem);
    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];
      if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
        ret = jQuery.style(elem, name);
      }
      if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth;
        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width;
        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }
    return ret !== undefined ? ret + "" : ret;
  }
  function addGetHookIf(conditionFn, hookFn) {
    return {get: function() {
        if (conditionFn()) {
          delete this.get;
          return;
        }
        return (this.get = hookFn).apply(this, arguments);
      }};
  }
  var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      cssPrefixes = ["Webkit", "O", "Moz", "ms"],
      emptyStyle = document.createElement("div").style;
  function vendorPropName(name) {
    if (name in emptyStyle) {
      return name;
    }
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;
    while (i--) {
      name = cssPrefixes[i] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  }
  function setPositiveNumber(elem, value, subtract) {
    var matches = rcssNum.exec(value);
    return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }
  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0,
        val = 0;
    for (; i < 4; i += 2) {
      if (extra === "margin") {
        val += jQuery.css(elem, extra + cssExpand[i], true, styles);
      }
      if (isBorderBox) {
        if (extra === "content") {
          val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        }
        if (extra !== "margin") {
          val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      } else {
        val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        if (extra !== "padding") {
          val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    }
    return val;
  }
  function getWidthOrHeight(elem, name, extra) {
    var valueIsBorderBox = true,
        val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
        styles = getStyles(elem),
        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
    if (document.msFullscreenElement && window.top !== window) {
      if (elem.getClientRects().length) {
        val = Math.round(elem.getBoundingClientRect()[name] * 100);
      }
    }
    if (val <= 0 || val == null) {
      val = curCSS(elem, name, styles);
      if (val < 0 || val == null) {
        val = elem.style[name];
      }
      if (rnumnonpx.test(val)) {
        return val;
      }
      valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
      val = parseFloat(val) || 0;
    }
    return (val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles)) + "px";
  }
  function showHide(elements, show) {
    var display,
        elem,
        hidden,
        values = [],
        index = 0,
        length = elements.length;
    for (; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      values[index] = dataPriv.get(elem, "olddisplay");
      display = elem.style.display;
      if (show) {
        if (!values[index] && display === "none") {
          elem.style.display = "";
        }
        if (elem.style.display === "" && isHidden(elem)) {
          values[index] = dataPriv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
        }
      } else {
        hidden = isHidden(elem);
        if (display !== "none" || !hidden) {
          dataPriv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
        }
      }
    }
    for (index = 0; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      if (!show || elem.style.display === "none" || elem.style.display === "") {
        elem.style.display = show ? values[index] || "" : "none";
      }
    }
    return elements;
  }
  jQuery.extend({
    cssHooks: {opacity: {get: function(elem, computed) {
          if (computed) {
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }}},
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    cssProps: {"float": "cssFloat"},
    style: function(elem, name, value, extra) {
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      }
      var ret,
          type,
          hooks,
          origName = jQuery.camelCase(name),
          style = elem.style;
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (value !== undefined) {
        type = typeof value;
        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret);
          type = "number";
        }
        if (value == null || value !== value) {
          return;
        }
        if (type === "number") {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        }
        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        }
        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          style[name] = value;
        }
      } else {
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        }
        return style[name];
      }
    },
    css: function(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = jQuery.camelCase(name);
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      }
      if (val === undefined) {
        val = curCSS(elem, name, styles);
      }
      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      }
      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }
      return val;
    }
  });
  jQuery.each(["height", "width"], function(i, name) {
    jQuery.cssHooks[name] = {
      get: function(elem, computed, extra) {
        if (computed) {
          return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? swap(elem, cssShow, function() {
            return getWidthOrHeight(elem, name, extra);
          }) : getWidthOrHeight(elem, name, extra);
        }
      },
      set: function(elem, value, extra) {
        var matches,
            styles = extra && getStyles(elem),
            subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);
        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[name] = value;
          value = jQuery.css(elem, name);
        }
        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {marginLeft: 0}, function() {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  });
  jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
    if (computed) {
      return swap(elem, {"display": "inline-block"}, curCSS, [elem, "marginRight"]);
    }
  });
  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {expand: function(value) {
        var i = 0,
            expanded = {},
            parts = typeof value === "string" ? value.split(" ") : [value];
        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }
        return expanded;
      }};
    if (!rmargin.test(prefix)) {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function(name, value) {
      return access(this, function(elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;
        if (jQuery.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;
          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }
          return map;
        }
        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    },
    show: function() {
      return showHide(this, true);
    },
    hide: function() {
      return showHide(this);
    },
    toggle: function(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }
      return this.each(function() {
        if (isHidden(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }
  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }
      this.now = (this.end - this.start) * eased + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }
      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {_default: {
      get: function(tween) {
        var result;
        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        }
        result = jQuery.css(tween.elem, tween.prop, "");
        return !result || result === "auto" ? 0 : result;
      },
      set: function(tween) {
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }};
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {set: function(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }};
  jQuery.easing = {
    linear: function(p) {
      return p;
    },
    swing: function(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init;
  jQuery.fx.step = {};
  var fxNow,
      timerId,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;
  function createFxNow() {
    window.setTimeout(function() {
      fxNow = undefined;
    });
    return (fxNow = jQuery.now());
  }
  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {height: type};
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }
    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }
    return attrs;
  }
  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;
    for (; index < length; index++) {
      if ((tween = collection[index].call(animation, prop, value))) {
        return tween;
      }
    }
  }
  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        tween,
        hooks,
        oldfire,
        display,
        checkDisplay,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHidden(elem),
        dataShow = dataPriv.get(elem, "fxshow");
    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");
      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;
        hooks.empty.fire = function() {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;
      anim.always(function() {
        anim.always(function() {
          hooks.unqueued--;
          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    }
    if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
      opts.overflow = [style.overflow, style.overflowX, style.overflowY];
      display = jQuery.css(elem, "display");
      checkDisplay = display === "none" ? dataPriv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
      if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
        style.display = "inline-block";
      }
    }
    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function() {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    }
    for (prop in props) {
      value = props[prop];
      if (rfxtypes.exec(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";
        if (value === (hidden ? "hide" : "show")) {
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true;
          } else {
            continue;
          }
        }
        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      } else {
        display = undefined;
      }
    }
    if (!jQuery.isEmptyObject(orig)) {
      if (dataShow) {
        if ("hidden" in dataShow) {
          hidden = dataShow.hidden;
        }
      } else {
        dataShow = dataPriv.access(elem, "fxshow", {});
      }
      if (toggle) {
        dataShow.hidden = !hidden;
      }
      if (hidden) {
        jQuery(elem).show();
      } else {
        anim.done(function() {
          jQuery(elem).hide();
        });
      }
      anim.done(function() {
        var prop;
        dataPriv.remove(elem, "fxshow");
        for (prop in orig) {
          jQuery.style(elem, prop, orig[prop]);
        }
      });
      for (prop in orig) {
        tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
        if (!(prop in dataShow)) {
          dataShow[prop] = tween.start;
          if (hidden) {
            tween.end = tween.start;
            tween.start = prop === "width" || prop === "height" ? 1 : 0;
          }
        }
      }
    } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
      style.display = display;
    }
  }
  function propFilter(props, specialEasing) {
    var index,
        name,
        easing,
        value,
        hooks;
    for (index in props) {
      name = jQuery.camelCase(index);
      easing = specialEasing[name];
      value = props[index];
      if (jQuery.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }
      if (index !== name) {
        props[name] = value;
        delete props[index];
      }
      hooks = jQuery.cssHooks[name];
      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name];
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }
  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function() {
          delete tick.elem;
        }),
        tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(),
              remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
              temp = remaining / animation.duration || 0,
              percent = 1 - temp,
              index = 0,
              length = animation.tweens.length;
          for (; index < length; index++) {
            animation.tweens[index].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length) {
            return remaining;
          } else {
            deferred.resolveWith(elem, [animation]);
            return false;
          }
        },
        animation = deferred.promise({
          elem: elem,
          props: jQuery.extend({}, properties),
          opts: jQuery.extend(true, {
            specialEasing: {},
            easing: jQuery.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index = 0,
                length = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index < length; index++) {
              animation.tweens[index].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }),
        props = animation.props;
    propFilter(props, animation.opts.specialEasing);
    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
      if (result) {
        if (jQuery.isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
        }
        return result;
      }
    }
    jQuery.map(props, createTween, animation);
    if (jQuery.isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    }
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
  }
  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {"*": [function(prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]},
    tweener: function(props, callback) {
      if (jQuery.isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnotwhite);
      }
      var prop,
          index = 0,
          length = props.length;
      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });
  jQuery.speed = function(speed, easing, fn) {
    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
    };
    opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    }
    opt.old = opt.complete;
    opt.complete = function() {
      if (jQuery.isFunction(opt.old)) {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };
    return opt;
  };
  jQuery.fn.extend({
    fadeTo: function(speed, to, easing, callback) {
      return this.filter(isHidden).css("opacity", 0).show().end().animate({opacity: to}, speed, easing, callback);
    },
    animate: function(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function() {
            var anim = Animation(this, jQuery.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function(type, clearQueue, gotoEnd) {
      var stopQueue = function(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };
      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }
      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }
      return this.each(function() {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);
        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }
        for (index = timers.length; index--; ) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        }
        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function(type) {
      if (type !== false) {
        type = type || "fx";
      }
      return this.each(function() {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0;
        data.finish = true;
        jQuery.queue(this, type, []);
        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }
        for (index = timers.length; index--; ) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }
        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }
        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function(i, name) {
    var cssFn = jQuery.fn[name];
    jQuery.fn[name] = function(speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  });
  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function(name, props) {
    jQuery.fn[name] = function(speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];
  jQuery.fx.tick = function() {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = jQuery.now();
    for (; i < timers.length; i++) {
      timer = timers[i];
      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }
    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = undefined;
  };
  jQuery.fx.timer = function(timer) {
    jQuery.timers.push(timer);
    if (timer()) {
      jQuery.fx.start();
    } else {
      jQuery.timers.pop();
    }
  };
  jQuery.fx.interval = 13;
  jQuery.fx.start = function() {
    if (!timerId) {
      timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
    }
  };
  jQuery.fx.stop = function() {
    window.clearInterval(timerId);
    timerId = null;
  };
  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  jQuery.fn.delay = function(time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function(next, hooks) {
      var timeout = window.setTimeout(next, time);
      hooks.stop = function() {
        window.clearTimeout(timeout);
      };
    });
  };
  (function() {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox";
    support.checkOn = input.value !== "";
    support.optSelected = opt.selected;
    select.disabled = true;
    support.optDisabled = !opt.disabled;
    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();
  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function(name) {
      return this.each(function() {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        name = name.toLowerCase();
        hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }
      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }
        elem.setAttribute(name, value + "");
        return value;
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      ret = jQuery.find.attr(elem, name);
      return ret == null ? undefined : ret;
    },
    attrHooks: {type: {set: function(elem, value) {
          if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);
            if (val) {
              elem.value = val;
            }
            return value;
          }
        }}},
    removeAttr: function(elem, value) {
      var name,
          propName,
          i = 0,
          attrNames = value && value.match(rnotwhite);
      if (attrNames && elem.nodeType === 1) {
        while ((name = attrNames[i++])) {
          propName = jQuery.propFix[name] || name;
          if (jQuery.expr.match.bool.test(name)) {
            elem[propName] = false;
          }
          elem.removeAttribute(name);
        }
      }
    }
  });
  boolHook = {set: function(elem, value, name) {
      if (value === false) {
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }
      return name;
    }};
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;
    attrHandle[name] = function(elem, name, isXML) {
      var ret,
          handle;
      if (!isXML) {
        handle = attrHandle[name];
        attrHandle[name] = ret;
        ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
        attrHandle[name] = handle;
      }
      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function(name) {
      return this.each(function() {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }
      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }
        return (elem[name] = value);
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      return elem[name];
    },
    propHooks: {tabIndex: {get: function(elem) {
          var tabindex = jQuery.find.attr(elem, "tabindex");
          return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
        }}},
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  });
  if (!support.optSelected) {
    jQuery.propHooks.selected = {get: function(elem) {
        var parent = elem.parentNode;
        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }
        return null;
      }};
  }
  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    jQuery.propFix[this.toLowerCase()] = this;
  });
  var rclass = /[\t\r\n\f]/g;
  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }
  jQuery.fn.extend({
    addClass: function(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;
      if (jQuery.isFunction(value)) {
        return this.each(function(j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }
      if (typeof value === "string" && value) {
        classes = value.match(rnotwhite) || [];
        while ((elem = this[i++])) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            }
            finalValue = jQuery.trim(cur);
            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }
      return this;
    },
    removeClass: function(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;
      if (jQuery.isFunction(value)) {
        return this.each(function(j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      if (typeof value === "string" && value) {
        classes = value.match(rnotwhite) || [];
        while ((elem = this[i++])) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            }
            finalValue = jQuery.trim(cur);
            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }
      return this;
    },
    toggleClass: function(value, stateVal) {
      var type = typeof value;
      if (typeof stateVal === "boolean" && type === "string") {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }
      if (jQuery.isFunction(value)) {
        return this.each(function(i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }
      return this.each(function() {
        var className,
            i,
            self,
            classNames;
        if (type === "string") {
          i = 0;
          self = jQuery(this);
          classNames = value.match(rnotwhite) || [];
          while ((className = classNames[i++])) {
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          }
        } else if (value === undefined || type === "boolean") {
          className = getClass(this);
          if (className) {
            dataPriv.set(this, "__className__", className);
          }
          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";
      while ((elem = this[i++])) {
        if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
          return true;
        }
      }
      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({val: function(value) {
      var hooks,
          ret,
          isFunction,
          elem = this[0];
      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }
          ret = elem.value;
          return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
        }
        return;
      }
      isFunction = jQuery.isFunction(value);
      return this.each(function(i) {
        var val;
        if (this.nodeType !== 1) {
          return;
        }
        if (isFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        }
        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (jQuery.isArray(val)) {
          val = jQuery.map(val, function(value) {
            return value == null ? "" : value + "";
          });
        }
        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }});
  jQuery.extend({valHooks: {
      option: {get: function(elem) {
          return jQuery.trim(elem.value);
        }},
      select: {
        get: function(elem) {
          var value,
              option,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one" || index < 0,
              values = one ? null : [],
              max = one ? index + 1 : options.length,
              i = index < 0 ? max : one ? index : 0;
          for (; i < max; i++) {
            option = options[i];
            if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
              value = jQuery(option).val();
              if (one) {
                return value;
              }
              values.push(value);
            }
          }
          return values;
        },
        set: function(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;
          while (i--) {
            option = options[i];
            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
          }
          if (!optionSet) {
            elem.selectedIndex = -1;
          }
          return values;
        }
      }
    }});
  jQuery.each(["radio", "checkbox"], function() {
    jQuery.valHooks[this] = {set: function(elem, value) {
        if (jQuery.isArray(value)) {
          return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
        }
      }};
    if (!support.checkOn) {
      jQuery.valHooks[this].get = function(elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  });
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
  jQuery.extend(jQuery.event, {
    trigger: function(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = tmp = elem = elem || document;
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }
      if (type.indexOf(".") > -1) {
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }
      ontype = type.indexOf(":") < 0 && "on" + type;
      event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
      event.result = undefined;
      if (!event.target) {
        event.target = elem;
      }
      data = data == null ? [event] : jQuery.makeArray(data, [event]);
      special = jQuery.event.special[type] || {};
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      }
      if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      }
      i = 0;
      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        event.type = i > 1 ? bubbleType : special.bindType || type;
        handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
        if (handle) {
          handle.apply(cur, data);
        }
        handle = ontype && cur[ontype];
        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);
          if (event.result === false) {
            event.preventDefault();
          }
        }
      }
      event.type = type;
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
            tmp = elem[ontype];
            if (tmp) {
              elem[ontype] = null;
            }
            jQuery.event.triggered = type;
            elem[type]();
            jQuery.event.triggered = undefined;
            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }
      return event.result;
    },
    simulate: function(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
      if (e.isDefaultPrevented()) {
        event.preventDefault();
      }
    }
  });
  jQuery.fn.extend({
    trigger: function(type, data) {
      return this.each(function() {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function(type, data) {
      var elem = this[0];
      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });
  jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
    jQuery.fn[name] = function(data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.fn.extend({hover: function(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }});
  support.focusin = "onfocusin" in window;
  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function(orig, fix) {
      var handler = function(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };
      jQuery.event.special[fix] = {
        setup: function() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix);
          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }
          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix) - 1;
          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }
  var location = window.location;
  var nonce = jQuery.now();
  var rquery = (/\?/);
  jQuery.parseJSON = function(data) {
    return JSON.parse(data + "");
  };
  jQuery.parseXML = function(data) {
    var xml;
    if (!data || typeof data !== "string") {
      return null;
    }
    try {
      xml = (new window.DOMParser()).parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }
    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }
    return xml;
  };
  var rhash = /#.*$/,
      rts = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,
      prefilters = {},
      transports = {},
      allTypes = "*/".concat("*"),
      originAnchor = document.createElement("a");
  originAnchor.href = location.href;
  function addToPrefiltersOrTransports(structure) {
    return function(dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }
      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
      if (jQuery.isFunction(func)) {
        while ((dataType = dataTypes[i++])) {
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func);
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  }
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = (structure === transports);
    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }
    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  }
  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};
    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
      }
    }
    if (deep) {
      jQuery.extend(true, target, deep);
    }
    return target;
  }
  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes;
    while (dataTypes[0] === "*") {
      dataTypes.shift();
      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    }
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          firstDataType = type;
        }
      }
      finalDataType = finalDataType || firstDataType;
    }
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }
      return responses[finalDataType];
    }
  }
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        dataTypes = s.dataTypes.slice();
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }
    current = dataTypes.shift();
    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      }
      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }
      prev = current;
      current = dataTypes.shift();
      if (current) {
        if (current === "*") {
          current = prev;
        } else if (prev !== "*" && prev !== current) {
          conv = converters[prev + " " + current] || converters["* " + current];
          if (!conv) {
            for (conv2 in converters) {
              tmp = conv2.split(" ");
              if (tmp[1] === current) {
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                if (conv) {
                  if (conv === true) {
                    conv = converters[conv2];
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }
                  break;
                }
              }
            }
          }
          if (conv !== true) {
            if (conv && s.throws) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }
    return {
      state: "success",
      data: response
    };
  }
  jQuery.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": true,
        "text json": jQuery.parseJSON,
        "text xml": jQuery.parseXML
      },
      flatOptions: {
        url: true,
        context: true
      }
    },
    ajaxSetup: function(target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    ajax: function(url, options) {
      if (typeof url === "object") {
        options = url;
        url = undefined;
      }
      options = options || {};
      var transport,
          cacheURL,
          responseHeadersString,
          responseHeaders,
          timeoutTimer,
          urlAnchor,
          fireGlobals,
          i,
          s = jQuery.ajaxSetup({}, options),
          callbackContext = s.context || s,
          globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          statusCode = s.statusCode || {},
          requestHeaders = {},
          requestHeadersNames = {},
          state = 0,
          strAbort = "canceled",
          jqXHR = {
            readyState: 0,
            getResponseHeader: function(key) {
              var match;
              if (state === 2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while ((match = rheaders.exec(responseHeadersString))) {
                    responseHeaders[match[1].toLowerCase()] = match[2];
                  }
                }
                match = responseHeaders[key.toLowerCase()];
              }
              return match == null ? null : match;
            },
            getAllResponseHeaders: function() {
              return state === 2 ? responseHeadersString : null;
            },
            setRequestHeader: function(name, value) {
              var lname = name.toLowerCase();
              if (!state) {
                name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            overrideMimeType: function(type) {
              if (!state) {
                s.mimeType = type;
              }
              return this;
            },
            statusCode: function(map) {
              var code;
              if (map) {
                if (state < 2) {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                } else {
                  jqXHR.always(map[jqXHR.status]);
                }
              }
              return this;
            },
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
      deferred.promise(jqXHR).complete = completeDeferred.add;
      jqXHR.success = jqXHR.done;
      jqXHR.error = jqXHR.fail;
      s.url = ((url || s.url || location.href) + "").replace(rhash, "").replace(rprotocol, location.protocol + "//");
      s.type = options.method || options.type || s.method || s.type;
      s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a");
        try {
          urlAnchor.href = s.url;
          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          s.crossDomain = true;
        }
      }
      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      }
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
      if (state === 2) {
        return jqXHR;
      }
      fireGlobals = jQuery.event && s.global;
      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      }
      s.type = s.type.toUpperCase();
      s.hasContent = !rnoContent.test(s.type);
      cacheURL = s.url;
      if (!s.hasContent) {
        if (s.data) {
          cacheURL = (s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data);
          delete s.data;
        }
        if (s.cache === false) {
          s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
        }
      }
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      }
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      }
      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }
      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
        return jqXHR.abort();
      }
      strAbort = "abort";
      for (i in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        jqXHR[i](s[i]);
      }
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1;
        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        }
        if (state === 2) {
          return jqXHR;
        }
        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function() {
            jqXHR.abort("timeout");
          }, s.timeout);
        }
        try {
          state = 1;
          transport.send(requestHeaders, done);
        } catch (e) {
          if (state < 2) {
            done(-1, e);
          } else {
            throw e;
          }
        }
      }
      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText;
        if (state === 2) {
          return;
        }
        state = 2;
        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        }
        transport = undefined;
        responseHeadersString = headers || "";
        jqXHR.readyState = status > 0 ? 4 : 0;
        isSuccess = status >= 200 && status < 300 || status === 304;
        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        }
        response = ajaxConvert(s, response, jqXHR, isSuccess);
        if (isSuccess) {
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");
            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }
            modified = jqXHR.getResponseHeader("etag");
            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          }
          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent";
          } else if (status === 304) {
            statusText = "notmodified";
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          error = statusText;
          if (status || !statusText) {
            statusText = "error";
            if (status < 0) {
              status = 0;
            }
          }
        }
        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + "";
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        }
        jqXHR.statusCode(statusCode);
        statusCode = undefined;
        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        }
        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
          if (!(--jQuery.active)) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }
      return jqXHR;
    },
    getJSON: function(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function(i, method) {
    jQuery[method] = function(url, data, callback, type) {
      if (jQuery.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      }
      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });
  jQuery._evalUrl = function(url) {
    return jQuery.ajax({
      url: url,
      type: "GET",
      dataType: "script",
      async: false,
      global: false,
      "throws": true
    });
  };
  jQuery.fn.extend({
    wrapAll: function(html) {
      var wrap;
      if (jQuery.isFunction(html)) {
        return this.each(function(i) {
          jQuery(this).wrapAll(html.call(this, i));
        });
      }
      if (this[0]) {
        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }
        wrap.map(function() {
          var elem = this;
          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }
          return elem;
        }).append(this);
      }
      return this;
    },
    wrapInner: function(html) {
      if (jQuery.isFunction(html)) {
        return this.each(function(i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }
      return this.each(function() {
        var self = jQuery(this),
            contents = self.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function(html) {
      var isFunction = jQuery.isFunction(html);
      return this.each(function(i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function() {
      return this.parent().each(function() {
        if (!jQuery.nodeName(this, "body")) {
          jQuery(this).replaceWith(this.childNodes);
        }
      }).end();
    }
  });
  jQuery.expr.filters.hidden = function(elem) {
    return !jQuery.expr.filters.visible(elem);
  };
  jQuery.expr.filters.visible = function(elem) {
    return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
  };
  var r20 = /%20/g,
      rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;
  function buildParams(prefix, obj, traditional, add) {
    var name;
    if (jQuery.isArray(obj)) {
      jQuery.each(obj, function(i, v) {
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && jQuery.type(obj) === "object") {
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
  jQuery.param = function(a, traditional) {
    var prefix,
        s = [],
        add = function(key, value) {
          value = jQuery.isFunction(value) ? value() : (value == null ? "" : value);
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
    if (traditional === undefined) {
      traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
    }
    if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
      jQuery.each(a, function() {
        add(this.name, this.value);
      });
    } else {
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    }
    return s.join("&").replace(r20, "+");
  };
  jQuery.fn.extend({
    serialize: function() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function() {
        var type = this.type;
        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function(i, elem) {
        var val = jQuery(this).val();
        return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
          return {
            name: elem.name,
            value: val.replace(rCRLF, "\r\n")
          };
        }) : {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  jQuery.ajaxSettings.xhr = function() {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };
  var xhrSuccessStatus = {
    0: 200,
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function(options) {
    var callback,
        errorCallback;
    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password);
          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          }
          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          }
          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          }
          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          }
          callback = function(type) {
            return function() {
              if (callback) {
                callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete(xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {binary: xhr.response} : {text: xhr.responseText}, xhr.getAllResponseHeaders());
                }
              }
            };
          };
          xhr.onload = callback();
          errorCallback = xhr.onerror = callback("error");
          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                window.setTimeout(function() {
                  if (callback) {
                    errorCallback();
                  }
                });
              }
            };
          }
          callback = callback("abort");
          try {
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            if (callback) {
              throw e;
            }
          }
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  jQuery.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"},
    contents: {script: /\b(?:java|ecma)script\b/},
    converters: {"text script": function(text) {
        jQuery.globalEval(text);
        return text;
      }}
  });
  jQuery.ajaxPrefilter("script", function(s) {
    if (s.cache === undefined) {
      s.cache = false;
    }
    if (s.crossDomain) {
      s.type = "GET";
    }
  });
  jQuery.ajaxTransport("script", function(s) {
    if (s.crossDomain) {
      var script,
          callback;
      return {
        send: function(_, complete) {
          script = jQuery("<script>").prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", callback = function(evt) {
            script.remove();
            callback = null;
            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          });
          document.head.appendChild(script[0]);
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/;
  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
      this[callback] = true;
      return callback;
    }
  });
  jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
    if (jsonProp || s.dataTypes[0] === "jsonp") {
      callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      }
      s.converters["script json"] = function() {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }
        return responseContainer[0];
      };
      s.dataTypes[0] = "json";
      overwritten = window[callbackName];
      window[callbackName] = function() {
        responseContainer = arguments;
      };
      jqXHR.always(function() {
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName);
        } else {
          window[callbackName] = overwritten;
        }
        if (s[callbackName]) {
          s.jsonpCallback = originalSettings.jsonpCallback;
          oldCallbacks.push(callbackName);
        }
        if (responseContainer && jQuery.isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }
        responseContainer = overwritten = undefined;
      });
      return "script";
    }
  });
  support.createHTMLDocument = (function() {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  })();
  jQuery.parseHTML = function(data, context, keepScripts) {
    if (!data || typeof data !== "string") {
      return null;
    }
    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }
    context = context || (support.createHTMLDocument ? document.implementation.createHTMLDocument("") : document);
    var parsed = rsingleTag.exec(data),
        scripts = !keepScripts && [];
    if (parsed) {
      return [context.createElement(parsed[1])];
    }
    parsed = buildFragment([data], context, scripts);
    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }
    return jQuery.merge([], parsed.childNodes);
  };
  var _load = jQuery.fn.load;
  jQuery.fn.load = function(url, params, callback) {
    if (typeof url !== "string" && _load) {
      return _load.apply(this, arguments);
    }
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");
    if (off > -1) {
      selector = jQuery.trim(url.slice(off));
      url = url.slice(0, off);
    }
    if (jQuery.isFunction(params)) {
      callback = params;
      params = undefined;
    } else if (params && typeof params === "object") {
      type = "POST";
    }
    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function(responseText) {
        response = arguments;
        self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
      }).always(callback && function(jqXHR, status) {
        self.each(function() {
          callback.apply(self, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }
    return this;
  };
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
    jQuery.fn[type] = function(fn) {
      return this.on(type, fn);
    };
  });
  jQuery.expr.filters.animated = function(elem) {
    return jQuery.grep(jQuery.timers, function(fn) {
      return elem === fn.elem;
    }).length;
  };
  function getWindow(elem) {
    return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
  }
  jQuery.offset = {setOffset: function(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {};
      if (position === "static") {
        elem.style.position = "relative";
      }
      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }
      if (jQuery.isFunction(options)) {
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }
      if (options.top != null) {
        props.top = (options.top - curOffset.top) + curTop;
      }
      if (options.left != null) {
        props.left = (options.left - curOffset.left) + curLeft;
      }
      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }};
  jQuery.fn.extend({
    offset: function(options) {
      if (arguments.length) {
        return options === undefined ? this : this.each(function(i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }
      var docElem,
          win,
          elem = this[0],
          box = {
            top: 0,
            left: 0
          },
          doc = elem && elem.ownerDocument;
      if (!doc) {
        return;
      }
      docElem = doc.documentElement;
      if (!jQuery.contains(docElem, elem)) {
        return box;
      }
      box = elem.getBoundingClientRect();
      win = getWindow(doc);
      return {
        top: box.top + win.pageYOffset - docElem.clientTop,
        left: box.left + win.pageXOffset - docElem.clientLeft
      };
    },
    position: function() {
      if (!this[0]) {
        return;
      }
      var offsetParent,
          offset,
          elem = this[0],
          parentOffset = {
            top: 0,
            left: 0
          };
      if (jQuery.css(elem, "position") === "fixed") {
        offset = elem.getBoundingClientRect();
      } else {
        offsetParent = this.offsetParent();
        offset = this.offset();
        if (!jQuery.nodeName(offsetParent[0], "html")) {
          parentOffset = offsetParent.offset();
        }
        parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true) - offsetParent.scrollTop();
        parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true) - offsetParent.scrollLeft();
      }
      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    offsetParent: function() {
      return this.map(function() {
        var offsetParent = this.offsetParent;
        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || documentElement;
      });
    }
  });
  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(method, prop) {
    var top = "pageYOffset" === prop;
    jQuery.fn[method] = function(val) {
      return access(this, function(elem, method, val) {
        var win = getWindow(elem);
        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }
        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  });
  jQuery.each(["top", "left"], function(i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop);
        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  });
  jQuery.each({
    Height: "height",
    Width: "width"
  }, function(name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function(defaultExtra, funcName) {
      jQuery.fn[funcName] = function(margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function(elem, type, value) {
          var doc;
          if (jQuery.isWindow(elem)) {
            return elem.document.documentElement["client" + name];
          }
          if (elem.nodeType === 9) {
            doc = elem.documentElement;
            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }
          return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable, null);
      };
    });
  });
  jQuery.fn.extend({
    bind: function(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function(selector, types, fn) {
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    },
    size: function() {
      return this.length;
    }
  });
  jQuery.fn.andSelf = jQuery.fn.addBack;
  if (typeof define === "function" && define.amd) {
    define("12", [], function() {
      return jQuery;
    });
  }
  var _jQuery = window.jQuery,
      _$ = window.$;
  jQuery.noConflict = function(deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }
    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }
    return jQuery;
  };
  if (!noGlobal) {
    window.jQuery = window.$ = jQuery;
  }
  return jQuery;
}));

_removeDefine();
})();
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("13", ["12"], function(main) {
  return main;
});

_removeDefine();
})();
$__System.registerDynamic("14", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal(__module.id, "d3", null);
  (function() {
    "format global";
    "exports d3";
    !function() {
      var d3 = {version: "3.5.14"};
      var d3_arraySlice = [].slice,
          d3_array = function(list) {
            return d3_arraySlice.call(list);
          };
      var d3_document = this.document;
      function d3_documentElement(node) {
        return node && (node.ownerDocument || node.document || node).documentElement;
      }
      function d3_window(node) {
        return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
      }
      if (d3_document) {
        try {
          d3_array(d3_document.documentElement.childNodes)[0].nodeType;
        } catch (e) {
          d3_array = function(list) {
            var i = list.length,
                array = new Array(i);
            while (i--)
              array[i] = list[i];
            return array;
          };
        }
      }
      if (!Date.now)
        Date.now = function() {
          return +new Date();
        };
      if (d3_document) {
        try {
          d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
        } catch (error) {
          var d3_element_prototype = this.Element.prototype,
              d3_element_setAttribute = d3_element_prototype.setAttribute,
              d3_element_setAttributeNS = d3_element_prototype.setAttributeNS,
              d3_style_prototype = this.CSSStyleDeclaration.prototype,
              d3_style_setProperty = d3_style_prototype.setProperty;
          d3_element_prototype.setAttribute = function(name, value) {
            d3_element_setAttribute.call(this, name, value + "");
          };
          d3_element_prototype.setAttributeNS = function(space, local, value) {
            d3_element_setAttributeNS.call(this, space, local, value + "");
          };
          d3_style_prototype.setProperty = function(name, value, priority) {
            d3_style_setProperty.call(this, name, value + "", priority);
          };
        }
      }
      d3.ascending = d3_ascending;
      function d3_ascending(a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
      }
      d3.descending = function(a, b) {
        return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
      };
      d3.min = function(array, f) {
        var i = -1,
            n = array.length,
            a,
            b;
        if (arguments.length === 1) {
          while (++i < n)
            if ((b = array[i]) != null && b >= b) {
              a = b;
              break;
            }
          while (++i < n)
            if ((b = array[i]) != null && a > b)
              a = b;
        } else {
          while (++i < n)
            if ((b = f.call(array, array[i], i)) != null && b >= b) {
              a = b;
              break;
            }
          while (++i < n)
            if ((b = f.call(array, array[i], i)) != null && a > b)
              a = b;
        }
        return a;
      };
      d3.max = function(array, f) {
        var i = -1,
            n = array.length,
            a,
            b;
        if (arguments.length === 1) {
          while (++i < n)
            if ((b = array[i]) != null && b >= b) {
              a = b;
              break;
            }
          while (++i < n)
            if ((b = array[i]) != null && b > a)
              a = b;
        } else {
          while (++i < n)
            if ((b = f.call(array, array[i], i)) != null && b >= b) {
              a = b;
              break;
            }
          while (++i < n)
            if ((b = f.call(array, array[i], i)) != null && b > a)
              a = b;
        }
        return a;
      };
      d3.extent = function(array, f) {
        var i = -1,
            n = array.length,
            a,
            b,
            c;
        if (arguments.length === 1) {
          while (++i < n)
            if ((b = array[i]) != null && b >= b) {
              a = c = b;
              break;
            }
          while (++i < n)
            if ((b = array[i]) != null) {
              if (a > b)
                a = b;
              if (c < b)
                c = b;
            }
        } else {
          while (++i < n)
            if ((b = f.call(array, array[i], i)) != null && b >= b) {
              a = c = b;
              break;
            }
          while (++i < n)
            if ((b = f.call(array, array[i], i)) != null) {
              if (a > b)
                a = b;
              if (c < b)
                c = b;
            }
        }
        return [a, c];
      };
      function d3_number(x) {
        return x === null ? NaN : +x;
      }
      function d3_numeric(x) {
        return !isNaN(x);
      }
      d3.sum = function(array, f) {
        var s = 0,
            n = array.length,
            a,
            i = -1;
        if (arguments.length === 1) {
          while (++i < n)
            if (d3_numeric(a = +array[i]))
              s += a;
        } else {
          while (++i < n)
            if (d3_numeric(a = +f.call(array, array[i], i)))
              s += a;
        }
        return s;
      };
      d3.mean = function(array, f) {
        var s = 0,
            n = array.length,
            a,
            i = -1,
            j = n;
        if (arguments.length === 1) {
          while (++i < n)
            if (d3_numeric(a = d3_number(array[i])))
              s += a;
            else
              --j;
        } else {
          while (++i < n)
            if (d3_numeric(a = d3_number(f.call(array, array[i], i))))
              s += a;
            else
              --j;
        }
        if (j)
          return s / j;
      };
      d3.quantile = function(values, p) {
        var H = (values.length - 1) * p + 1,
            h = Math.floor(H),
            v = +values[h - 1],
            e = H - h;
        return e ? v + e * (values[h] - v) : v;
      };
      d3.median = function(array, f) {
        var numbers = [],
            n = array.length,
            a,
            i = -1;
        if (arguments.length === 1) {
          while (++i < n)
            if (d3_numeric(a = d3_number(array[i])))
              numbers.push(a);
        } else {
          while (++i < n)
            if (d3_numeric(a = d3_number(f.call(array, array[i], i))))
              numbers.push(a);
        }
        if (numbers.length)
          return d3.quantile(numbers.sort(d3_ascending), .5);
      };
      d3.variance = function(array, f) {
        var n = array.length,
            m = 0,
            a,
            d,
            s = 0,
            i = -1,
            j = 0;
        if (arguments.length === 1) {
          while (++i < n) {
            if (d3_numeric(a = d3_number(array[i]))) {
              d = a - m;
              m += d / ++j;
              s += d * (a - m);
            }
          }
        } else {
          while (++i < n) {
            if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
              d = a - m;
              m += d / ++j;
              s += d * (a - m);
            }
          }
        }
        if (j > 1)
          return s / (j - 1);
      };
      d3.deviation = function() {
        var v = d3.variance.apply(this, arguments);
        return v ? Math.sqrt(v) : v;
      };
      function d3_bisector(compare) {
        return {
          left: function(a, x, lo, hi) {
            if (arguments.length < 3)
              lo = 0;
            if (arguments.length < 4)
              hi = a.length;
            while (lo < hi) {
              var mid = lo + hi >>> 1;
              if (compare(a[mid], x) < 0)
                lo = mid + 1;
              else
                hi = mid;
            }
            return lo;
          },
          right: function(a, x, lo, hi) {
            if (arguments.length < 3)
              lo = 0;
            if (arguments.length < 4)
              hi = a.length;
            while (lo < hi) {
              var mid = lo + hi >>> 1;
              if (compare(a[mid], x) > 0)
                hi = mid;
              else
                lo = mid + 1;
            }
            return lo;
          }
        };
      }
      var d3_bisect = d3_bisector(d3_ascending);
      d3.bisectLeft = d3_bisect.left;
      d3.bisect = d3.bisectRight = d3_bisect.right;
      d3.bisector = function(f) {
        return d3_bisector(f.length === 1 ? function(d, x) {
          return d3_ascending(f(d), x);
        } : f);
      };
      d3.shuffle = function(array, i0, i1) {
        if ((m = arguments.length) < 3) {
          i1 = array.length;
          if (m < 2)
            i0 = 0;
        }
        var m = i1 - i0,
            t,
            i;
        while (m) {
          i = Math.random() * m-- | 0;
          t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
        }
        return array;
      };
      d3.permute = function(array, indexes) {
        var i = indexes.length,
            permutes = new Array(i);
        while (i--)
          permutes[i] = array[indexes[i]];
        return permutes;
      };
      d3.pairs = function(array) {
        var i = 0,
            n = array.length - 1,
            p0,
            p1 = array[0],
            pairs = new Array(n < 0 ? 0 : n);
        while (i < n)
          pairs[i] = [p0 = p1, p1 = array[++i]];
        return pairs;
      };
      d3.zip = function() {
        if (!(n = arguments.length))
          return [];
        for (var i = -1,
            m = d3.min(arguments, d3_zipLength),
            zips = new Array(m); ++i < m; ) {
          for (var j = -1,
              n,
              zip = zips[i] = new Array(n); ++j < n; ) {
            zip[j] = arguments[j][i];
          }
        }
        return zips;
      };
      function d3_zipLength(d) {
        return d.length;
      }
      d3.transpose = function(matrix) {
        return d3.zip.apply(d3, matrix);
      };
      d3.keys = function(map) {
        var keys = [];
        for (var key in map)
          keys.push(key);
        return keys;
      };
      d3.values = function(map) {
        var values = [];
        for (var key in map)
          values.push(map[key]);
        return values;
      };
      d3.entries = function(map) {
        var entries = [];
        for (var key in map)
          entries.push({
            key: key,
            value: map[key]
          });
        return entries;
      };
      d3.merge = function(arrays) {
        var n = arrays.length,
            m,
            i = -1,
            j = 0,
            merged,
            array;
        while (++i < n)
          j += arrays[i].length;
        merged = new Array(j);
        while (--n >= 0) {
          array = arrays[n];
          m = array.length;
          while (--m >= 0) {
            merged[--j] = array[m];
          }
        }
        return merged;
      };
      var abs = Math.abs;
      d3.range = function(start, stop, step) {
        if (arguments.length < 3) {
          step = 1;
          if (arguments.length < 2) {
            stop = start;
            start = 0;
          }
        }
        if ((stop - start) / step === Infinity)
          throw new Error("infinite range");
        var range = [],
            k = d3_range_integerScale(abs(step)),
            i = -1,
            j;
        start *= k, stop *= k, step *= k;
        if (step < 0)
          while ((j = start + step * ++i) > stop)
            range.push(j / k);
        else
          while ((j = start + step * ++i) < stop)
            range.push(j / k);
        return range;
      };
      function d3_range_integerScale(x) {
        var k = 1;
        while (x * k % 1)
          k *= 10;
        return k;
      }
      function d3_class(ctor, properties) {
        for (var key in properties) {
          Object.defineProperty(ctor.prototype, key, {
            value: properties[key],
            enumerable: false
          });
        }
      }
      d3.map = function(object, f) {
        var map = new d3_Map();
        if (object instanceof d3_Map) {
          object.forEach(function(key, value) {
            map.set(key, value);
          });
        } else if (Array.isArray(object)) {
          var i = -1,
              n = object.length,
              o;
          if (arguments.length === 1)
            while (++i < n)
              map.set(i, object[i]);
          else
            while (++i < n)
              map.set(f.call(object, o = object[i], i), o);
        } else {
          for (var key in object)
            map.set(key, object[key]);
        }
        return map;
      };
      function d3_Map() {
        this._ = Object.create(null);
      }
      var d3_map_proto = "__proto__",
          d3_map_zero = "\x00";
      d3_class(d3_Map, {
        has: d3_map_has,
        get: function(key) {
          return this._[d3_map_escape(key)];
        },
        set: function(key, value) {
          return this._[d3_map_escape(key)] = value;
        },
        remove: d3_map_remove,
        keys: d3_map_keys,
        values: function() {
          var values = [];
          for (var key in this._)
            values.push(this._[key]);
          return values;
        },
        entries: function() {
          var entries = [];
          for (var key in this._)
            entries.push({
              key: d3_map_unescape(key),
              value: this._[key]
            });
          return entries;
        },
        size: d3_map_size,
        empty: d3_map_empty,
        forEach: function(f) {
          for (var key in this._)
            f.call(this, d3_map_unescape(key), this._[key]);
        }
      });
      function d3_map_escape(key) {
        return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
      }
      function d3_map_unescape(key) {
        return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
      }
      function d3_map_has(key) {
        return d3_map_escape(key) in this._;
      }
      function d3_map_remove(key) {
        return (key = d3_map_escape(key)) in this._ && delete this._[key];
      }
      function d3_map_keys() {
        var keys = [];
        for (var key in this._)
          keys.push(d3_map_unescape(key));
        return keys;
      }
      function d3_map_size() {
        var size = 0;
        for (var key in this._)
          ++size;
        return size;
      }
      function d3_map_empty() {
        for (var key in this._)
          return false;
        return true;
      }
      d3.nest = function() {
        var nest = {},
            keys = [],
            sortKeys = [],
            sortValues,
            rollup;
        function map(mapType, array, depth) {
          if (depth >= keys.length)
            return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
          var i = -1,
              n = array.length,
              key = keys[depth++],
              keyValue,
              object,
              setter,
              valuesByKey = new d3_Map(),
              values;
          while (++i < n) {
            if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
              values.push(object);
            } else {
              valuesByKey.set(keyValue, [object]);
            }
          }
          if (mapType) {
            object = mapType();
            setter = function(keyValue, values) {
              object.set(keyValue, map(mapType, values, depth));
            };
          } else {
            object = {};
            setter = function(keyValue, values) {
              object[keyValue] = map(mapType, values, depth);
            };
          }
          valuesByKey.forEach(setter);
          return object;
        }
        function entries(map, depth) {
          if (depth >= keys.length)
            return map;
          var array = [],
              sortKey = sortKeys[depth++];
          map.forEach(function(key, keyMap) {
            array.push({
              key: key,
              values: entries(keyMap, depth)
            });
          });
          return sortKey ? array.sort(function(a, b) {
            return sortKey(a.key, b.key);
          }) : array;
        }
        nest.map = function(array, mapType) {
          return map(mapType, array, 0);
        };
        nest.entries = function(array) {
          return entries(map(d3.map, array, 0), 0);
        };
        nest.key = function(d) {
          keys.push(d);
          return nest;
        };
        nest.sortKeys = function(order) {
          sortKeys[keys.length - 1] = order;
          return nest;
        };
        nest.sortValues = function(order) {
          sortValues = order;
          return nest;
        };
        nest.rollup = function(f) {
          rollup = f;
          return nest;
        };
        return nest;
      };
      d3.set = function(array) {
        var set = new d3_Set();
        if (array)
          for (var i = 0,
              n = array.length; i < n; ++i)
            set.add(array[i]);
        return set;
      };
      function d3_Set() {
        this._ = Object.create(null);
      }
      d3_class(d3_Set, {
        has: d3_map_has,
        add: function(key) {
          this._[d3_map_escape(key += "")] = true;
          return key;
        },
        remove: d3_map_remove,
        values: d3_map_keys,
        size: d3_map_size,
        empty: d3_map_empty,
        forEach: function(f) {
          for (var key in this._)
            f.call(this, d3_map_unescape(key));
        }
      });
      d3.behavior = {};
      function d3_identity(d) {
        return d;
      }
      d3.rebind = function(target, source) {
        var i = 1,
            n = arguments.length,
            method;
        while (++i < n)
          target[method = arguments[i]] = d3_rebind(target, source, source[method]);
        return target;
      };
      function d3_rebind(target, source, method) {
        return function() {
          var value = method.apply(source, arguments);
          return value === source ? target : value;
        };
      }
      function d3_vendorSymbol(object, name) {
        if (name in object)
          return name;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        for (var i = 0,
            n = d3_vendorPrefixes.length; i < n; ++i) {
          var prefixName = d3_vendorPrefixes[i] + name;
          if (prefixName in object)
            return prefixName;
        }
      }
      var d3_vendorPrefixes = ["webkit", "ms", "moz", "Moz", "o", "O"];
      function d3_noop() {}
      d3.dispatch = function() {
        var dispatch = new d3_dispatch(),
            i = -1,
            n = arguments.length;
        while (++i < n)
          dispatch[arguments[i]] = d3_dispatch_event(dispatch);
        return dispatch;
      };
      function d3_dispatch() {}
      d3_dispatch.prototype.on = function(type, listener) {
        var i = type.indexOf("."),
            name = "";
        if (i >= 0) {
          name = type.slice(i + 1);
          type = type.slice(0, i);
        }
        if (type)
          return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
        if (arguments.length === 2) {
          if (listener == null)
            for (type in this) {
              if (this.hasOwnProperty(type))
                this[type].on(name, null);
            }
          return this;
        }
      };
      function d3_dispatch_event(dispatch) {
        var listeners = [],
            listenerByName = new d3_Map();
        function event() {
          var z = listeners,
              i = -1,
              n = z.length,
              l;
          while (++i < n)
            if (l = z[i].on)
              l.apply(this, arguments);
          return dispatch;
        }
        event.on = function(name, listener) {
          var l = listenerByName.get(name),
              i;
          if (arguments.length < 2)
            return l && l.on;
          if (l) {
            l.on = null;
            listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
            listenerByName.remove(name);
          }
          if (listener)
            listeners.push(listenerByName.set(name, {on: listener}));
          return dispatch;
        };
        return event;
      }
      d3.event = null;
      function d3_eventPreventDefault() {
        d3.event.preventDefault();
      }
      function d3_eventSource() {
        var e = d3.event,
            s;
        while (s = e.sourceEvent)
          e = s;
        return e;
      }
      function d3_eventDispatch(target) {
        var dispatch = new d3_dispatch(),
            i = 0,
            n = arguments.length;
        while (++i < n)
          dispatch[arguments[i]] = d3_dispatch_event(dispatch);
        dispatch.of = function(thiz, argumentz) {
          return function(e1) {
            try {
              var e0 = e1.sourceEvent = d3.event;
              e1.target = target;
              d3.event = e1;
              dispatch[e1.type].apply(thiz, argumentz);
            } finally {
              d3.event = e0;
            }
          };
        };
        return dispatch;
      }
      d3.requote = function(s) {
        return s.replace(d3_requote_re, "\\$&");
      };
      var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
      var d3_subclass = {}.__proto__ ? function(object, prototype) {
        object.__proto__ = prototype;
      } : function(object, prototype) {
        for (var property in prototype)
          object[property] = prototype[property];
      };
      function d3_selection(groups) {
        d3_subclass(groups, d3_selectionPrototype);
        return groups;
      }
      var d3_select = function(s, n) {
        return n.querySelector(s);
      },
          d3_selectAll = function(s, n) {
            return n.querySelectorAll(s);
          },
          d3_selectMatches = function(n, s) {
            var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
            d3_selectMatches = function(n, s) {
              return d3_selectMatcher.call(n, s);
            };
            return d3_selectMatches(n, s);
          };
      if (typeof Sizzle === "function") {
        d3_select = function(s, n) {
          return Sizzle(s, n)[0] || null;
        };
        d3_selectAll = Sizzle;
        d3_selectMatches = Sizzle.matchesSelector;
      }
      d3.selection = function() {
        return d3.select(d3_document.documentElement);
      };
      var d3_selectionPrototype = d3.selection.prototype = [];
      d3_selectionPrototype.select = function(selector) {
        var subgroups = [],
            subgroup,
            subnode,
            group,
            node;
        selector = d3_selection_selector(selector);
        for (var j = -1,
            m = this.length; ++j < m; ) {
          subgroups.push(subgroup = []);
          subgroup.parentNode = (group = this[j]).parentNode;
          for (var i = -1,
              n = group.length; ++i < n; ) {
            if (node = group[i]) {
              subgroup.push(subnode = selector.call(node, node.__data__, i, j));
              if (subnode && "__data__" in node)
                subnode.__data__ = node.__data__;
            } else {
              subgroup.push(null);
            }
          }
        }
        return d3_selection(subgroups);
      };
      function d3_selection_selector(selector) {
        return typeof selector === "function" ? selector : function() {
          return d3_select(selector, this);
        };
      }
      d3_selectionPrototype.selectAll = function(selector) {
        var subgroups = [],
            subgroup,
            node;
        selector = d3_selection_selectorAll(selector);
        for (var j = -1,
            m = this.length; ++j < m; ) {
          for (var group = this[j],
              i = -1,
              n = group.length; ++i < n; ) {
            if (node = group[i]) {
              subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
              subgroup.parentNode = node;
            }
          }
        }
        return d3_selection(subgroups);
      };
      function d3_selection_selectorAll(selector) {
        return typeof selector === "function" ? selector : function() {
          return d3_selectAll(selector, this);
        };
      }
      var d3_nsPrefix = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
      };
      d3.ns = {
        prefix: d3_nsPrefix,
        qualify: function(name) {
          var i = name.indexOf(":"),
              prefix = name;
          if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
            name = name.slice(i + 1);
          return d3_nsPrefix.hasOwnProperty(prefix) ? {
            space: d3_nsPrefix[prefix],
            local: name
          } : name;
        }
      };
      d3_selectionPrototype.attr = function(name, value) {
        if (arguments.length < 2) {
          if (typeof name === "string") {
            var node = this.node();
            name = d3.ns.qualify(name);
            return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
          }
          for (value in name)
            this.each(d3_selection_attr(value, name[value]));
          return this;
        }
        return this.each(d3_selection_attr(name, value));
      };
      function d3_selection_attr(name, value) {
        name = d3.ns.qualify(name);
        function attrNull() {
          this.removeAttribute(name);
        }
        function attrNullNS() {
          this.removeAttributeNS(name.space, name.local);
        }
        function attrConstant() {
          this.setAttribute(name, value);
        }
        function attrConstantNS() {
          this.setAttributeNS(name.space, name.local, value);
        }
        function attrFunction() {
          var x = value.apply(this, arguments);
          if (x == null)
            this.removeAttribute(name);
          else
            this.setAttribute(name, x);
        }
        function attrFunctionNS() {
          var x = value.apply(this, arguments);
          if (x == null)
            this.removeAttributeNS(name.space, name.local);
          else
            this.setAttributeNS(name.space, name.local, x);
        }
        return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
      }
      function d3_collapse(s) {
        return s.trim().replace(/\s+/g, " ");
      }
      d3_selectionPrototype.classed = function(name, value) {
        if (arguments.length < 2) {
          if (typeof name === "string") {
            var node = this.node(),
                n = (name = d3_selection_classes(name)).length,
                i = -1;
            if (value = node.classList) {
              while (++i < n)
                if (!value.contains(name[i]))
                  return false;
            } else {
              value = node.getAttribute("class");
              while (++i < n)
                if (!d3_selection_classedRe(name[i]).test(value))
                  return false;
            }
            return true;
          }
          for (value in name)
            this.each(d3_selection_classed(value, name[value]));
          return this;
        }
        return this.each(d3_selection_classed(name, value));
      };
      function d3_selection_classedRe(name) {
        return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
      }
      function d3_selection_classes(name) {
        return (name + "").trim().split(/^|\s+/);
      }
      function d3_selection_classed(name, value) {
        name = d3_selection_classes(name).map(d3_selection_classedName);
        var n = name.length;
        function classedConstant() {
          var i = -1;
          while (++i < n)
            name[i](this, value);
        }
        function classedFunction() {
          var i = -1,
              x = value.apply(this, arguments);
          while (++i < n)
            name[i](this, x);
        }
        return typeof value === "function" ? classedFunction : classedConstant;
      }
      function d3_selection_classedName(name) {
        var re = d3_selection_classedRe(name);
        return function(node, value) {
          if (c = node.classList)
            return value ? c.add(name) : c.remove(name);
          var c = node.getAttribute("class") || "";
          if (value) {
            re.lastIndex = 0;
            if (!re.test(c))
              node.setAttribute("class", d3_collapse(c + " " + name));
          } else {
            node.setAttribute("class", d3_collapse(c.replace(re, " ")));
          }
        };
      }
      d3_selectionPrototype.style = function(name, value, priority) {
        var n = arguments.length;
        if (n < 3) {
          if (typeof name !== "string") {
            if (n < 2)
              value = "";
            for (priority in name)
              this.each(d3_selection_style(priority, name[priority], value));
            return this;
          }
          if (n < 2) {
            var node = this.node();
            return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
          }
          priority = "";
        }
        return this.each(d3_selection_style(name, value, priority));
      };
      function d3_selection_style(name, value, priority) {
        function styleNull() {
          this.style.removeProperty(name);
        }
        function styleConstant() {
          this.style.setProperty(name, value, priority);
        }
        function styleFunction() {
          var x = value.apply(this, arguments);
          if (x == null)
            this.style.removeProperty(name);
          else
            this.style.setProperty(name, x, priority);
        }
        return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
      }
      d3_selectionPrototype.property = function(name, value) {
        if (arguments.length < 2) {
          if (typeof name === "string")
            return this.node()[name];
          for (value in name)
            this.each(d3_selection_property(value, name[value]));
          return this;
        }
        return this.each(d3_selection_property(name, value));
      };
      function d3_selection_property(name, value) {
        function propertyNull() {
          delete this[name];
        }
        function propertyConstant() {
          this[name] = value;
        }
        function propertyFunction() {
          var x = value.apply(this, arguments);
          if (x == null)
            delete this[name];
          else
            this[name] = x;
        }
        return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
      }
      d3_selectionPrototype.text = function(value) {
        return arguments.length ? this.each(typeof value === "function" ? function() {
          var v = value.apply(this, arguments);
          this.textContent = v == null ? "" : v;
        } : value == null ? function() {
          this.textContent = "";
        } : function() {
          this.textContent = value;
        }) : this.node().textContent;
      };
      d3_selectionPrototype.html = function(value) {
        return arguments.length ? this.each(typeof value === "function" ? function() {
          var v = value.apply(this, arguments);
          this.innerHTML = v == null ? "" : v;
        } : value == null ? function() {
          this.innerHTML = "";
        } : function() {
          this.innerHTML = value;
        }) : this.node().innerHTML;
      };
      d3_selectionPrototype.append = function(name) {
        name = d3_selection_creator(name);
        return this.select(function() {
          return this.appendChild(name.apply(this, arguments));
        });
      };
      function d3_selection_creator(name) {
        function create() {
          var document = this.ownerDocument,
              namespace = this.namespaceURI;
          return namespace && namespace !== document.documentElement.namespaceURI ? document.createElementNS(namespace, name) : document.createElement(name);
        }
        function createNS() {
          return this.ownerDocument.createElementNS(name.space, name.local);
        }
        return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? createNS : create;
      }
      d3_selectionPrototype.insert = function(name, before) {
        name = d3_selection_creator(name);
        before = d3_selection_selector(before);
        return this.select(function() {
          return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
        });
      };
      d3_selectionPrototype.remove = function() {
        return this.each(d3_selectionRemove);
      };
      function d3_selectionRemove() {
        var parent = this.parentNode;
        if (parent)
          parent.removeChild(this);
      }
      d3_selectionPrototype.data = function(value, key) {
        var i = -1,
            n = this.length,
            group,
            node;
        if (!arguments.length) {
          value = new Array(n = (group = this[0]).length);
          while (++i < n) {
            if (node = group[i]) {
              value[i] = node.__data__;
            }
          }
          return value;
        }
        function bind(group, groupData) {
          var i,
              n = group.length,
              m = groupData.length,
              n0 = Math.min(n, m),
              updateNodes = new Array(m),
              enterNodes = new Array(m),
              exitNodes = new Array(n),
              node,
              nodeData;
          if (key) {
            var nodeByKeyValue = new d3_Map(),
                keyValues = new Array(n),
                keyValue;
            for (i = -1; ++i < n; ) {
              if (node = group[i]) {
                if (nodeByKeyValue.has(keyValue = key.call(node, node.__data__, i))) {
                  exitNodes[i] = node;
                } else {
                  nodeByKeyValue.set(keyValue, node);
                }
                keyValues[i] = keyValue;
              }
            }
            for (i = -1; ++i < m; ) {
              if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
                enterNodes[i] = d3_selection_dataNode(nodeData);
              } else if (node !== true) {
                updateNodes[i] = node;
                node.__data__ = nodeData;
              }
              nodeByKeyValue.set(keyValue, true);
            }
            for (i = -1; ++i < n; ) {
              if (i in keyValues && nodeByKeyValue.get(keyValues[i]) !== true) {
                exitNodes[i] = group[i];
              }
            }
          } else {
            for (i = -1; ++i < n0; ) {
              node = group[i];
              nodeData = groupData[i];
              if (node) {
                node.__data__ = nodeData;
                updateNodes[i] = node;
              } else {
                enterNodes[i] = d3_selection_dataNode(nodeData);
              }
            }
            for (; i < m; ++i) {
              enterNodes[i] = d3_selection_dataNode(groupData[i]);
            }
            for (; i < n; ++i) {
              exitNodes[i] = group[i];
            }
          }
          enterNodes.update = updateNodes;
          enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
          enter.push(enterNodes);
          update.push(updateNodes);
          exit.push(exitNodes);
        }
        var enter = d3_selection_enter([]),
            update = d3_selection([]),
            exit = d3_selection([]);
        if (typeof value === "function") {
          while (++i < n) {
            bind(group = this[i], value.call(group, group.parentNode.__data__, i));
          }
        } else {
          while (++i < n) {
            bind(group = this[i], value);
          }
        }
        update.enter = function() {
          return enter;
        };
        update.exit = function() {
          return exit;
        };
        return update;
      };
      function d3_selection_dataNode(data) {
        return {__data__: data};
      }
      d3_selectionPrototype.datum = function(value) {
        return arguments.length ? this.property("__data__", value) : this.property("__data__");
      };
      d3_selectionPrototype.filter = function(filter) {
        var subgroups = [],
            subgroup,
            group,
            node;
        if (typeof filter !== "function")
          filter = d3_selection_filter(filter);
        for (var j = 0,
            m = this.length; j < m; j++) {
          subgroups.push(subgroup = []);
          subgroup.parentNode = (group = this[j]).parentNode;
          for (var i = 0,
              n = group.length; i < n; i++) {
            if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
              subgroup.push(node);
            }
          }
        }
        return d3_selection(subgroups);
      };
      function d3_selection_filter(selector) {
        return function() {
          return d3_selectMatches(this, selector);
        };
      }
      d3_selectionPrototype.order = function() {
        for (var j = -1,
            m = this.length; ++j < m; ) {
          for (var group = this[j],
              i = group.length - 1,
              next = group[i],
              node; --i >= 0; ) {
            if (node = group[i]) {
              if (next && next !== node.nextSibling)
                next.parentNode.insertBefore(node, next);
              next = node;
            }
          }
        }
        return this;
      };
      d3_selectionPrototype.sort = function(comparator) {
        comparator = d3_selection_sortComparator.apply(this, arguments);
        for (var j = -1,
            m = this.length; ++j < m; )
          this[j].sort(comparator);
        return this.order();
      };
      function d3_selection_sortComparator(comparator) {
        if (!arguments.length)
          comparator = d3_ascending;
        return function(a, b) {
          return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
        };
      }
      d3_selectionPrototype.each = function(callback) {
        return d3_selection_each(this, function(node, i, j) {
          callback.call(node, node.__data__, i, j);
        });
      };
      function d3_selection_each(groups, callback) {
        for (var j = 0,
            m = groups.length; j < m; j++) {
          for (var group = groups[j],
              i = 0,
              n = group.length,
              node; i < n; i++) {
            if (node = group[i])
              callback(node, i, j);
          }
        }
        return groups;
      }
      d3_selectionPrototype.call = function(callback) {
        var args = d3_array(arguments);
        callback.apply(args[0] = this, args);
        return this;
      };
      d3_selectionPrototype.empty = function() {
        return !this.node();
      };
      d3_selectionPrototype.node = function() {
        for (var j = 0,
            m = this.length; j < m; j++) {
          for (var group = this[j],
              i = 0,
              n = group.length; i < n; i++) {
            var node = group[i];
            if (node)
              return node;
          }
        }
        return null;
      };
      d3_selectionPrototype.size = function() {
        var n = 0;
        d3_selection_each(this, function() {
          ++n;
        });
        return n;
      };
      function d3_selection_enter(selection) {
        d3_subclass(selection, d3_selection_enterPrototype);
        return selection;
      }
      var d3_selection_enterPrototype = [];
      d3.selection.enter = d3_selection_enter;
      d3.selection.enter.prototype = d3_selection_enterPrototype;
      d3_selection_enterPrototype.append = d3_selectionPrototype.append;
      d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
      d3_selection_enterPrototype.node = d3_selectionPrototype.node;
      d3_selection_enterPrototype.call = d3_selectionPrototype.call;
      d3_selection_enterPrototype.size = d3_selectionPrototype.size;
      d3_selection_enterPrototype.select = function(selector) {
        var subgroups = [],
            subgroup,
            subnode,
            upgroup,
            group,
            node;
        for (var j = -1,
            m = this.length; ++j < m; ) {
          upgroup = (group = this[j]).update;
          subgroups.push(subgroup = []);
          subgroup.parentNode = group.parentNode;
          for (var i = -1,
              n = group.length; ++i < n; ) {
            if (node = group[i]) {
              subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
              subnode.__data__ = node.__data__;
            } else {
              subgroup.push(null);
            }
          }
        }
        return d3_selection(subgroups);
      };
      d3_selection_enterPrototype.insert = function(name, before) {
        if (arguments.length < 2)
          before = d3_selection_enterInsertBefore(this);
        return d3_selectionPrototype.insert.call(this, name, before);
      };
      function d3_selection_enterInsertBefore(enter) {
        var i0,
            j0;
        return function(d, i, j) {
          var group = enter[j].update,
              n = group.length,
              node;
          if (j != j0)
            j0 = j, i0 = 0;
          if (i >= i0)
            i0 = i + 1;
          while (!(node = group[i0]) && ++i0 < n)
            ;
          return node;
        };
      }
      d3.select = function(node) {
        var group;
        if (typeof node === "string") {
          group = [d3_select(node, d3_document)];
          group.parentNode = d3_document.documentElement;
        } else {
          group = [node];
          group.parentNode = d3_documentElement(node);
        }
        return d3_selection([group]);
      };
      d3.selectAll = function(nodes) {
        var group;
        if (typeof nodes === "string") {
          group = d3_array(d3_selectAll(nodes, d3_document));
          group.parentNode = d3_document.documentElement;
        } else {
          group = d3_array(nodes);
          group.parentNode = null;
        }
        return d3_selection([group]);
      };
      d3_selectionPrototype.on = function(type, listener, capture) {
        var n = arguments.length;
        if (n < 3) {
          if (typeof type !== "string") {
            if (n < 2)
              listener = false;
            for (capture in type)
              this.each(d3_selection_on(capture, type[capture], listener));
            return this;
          }
          if (n < 2)
            return (n = this.node()["__on" + type]) && n._;
          capture = false;
        }
        return this.each(d3_selection_on(type, listener, capture));
      };
      function d3_selection_on(type, listener, capture) {
        var name = "__on" + type,
            i = type.indexOf("."),
            wrap = d3_selection_onListener;
        if (i > 0)
          type = type.slice(0, i);
        var filter = d3_selection_onFilters.get(type);
        if (filter)
          type = filter, wrap = d3_selection_onFilter;
        function onRemove() {
          var l = this[name];
          if (l) {
            this.removeEventListener(type, l, l.$);
            delete this[name];
          }
        }
        function onAdd() {
          var l = wrap(listener, d3_array(arguments));
          onRemove.call(this);
          this.addEventListener(type, this[name] = l, l.$ = capture);
          l._ = listener;
        }
        function removeAll() {
          var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"),
              match;
          for (var name in this) {
            if (match = name.match(re)) {
              var l = this[name];
              this.removeEventListener(match[1], l, l.$);
              delete this[name];
            }
          }
        }
        return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
      }
      var d3_selection_onFilters = d3.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      });
      if (d3_document) {
        d3_selection_onFilters.forEach(function(k) {
          if ("on" + k in d3_document)
            d3_selection_onFilters.remove(k);
        });
      }
      function d3_selection_onListener(listener, argumentz) {
        return function(e) {
          var o = d3.event;
          d3.event = e;
          argumentz[0] = this.__data__;
          try {
            listener.apply(this, argumentz);
          } finally {
            d3.event = o;
          }
        };
      }
      function d3_selection_onFilter(listener, argumentz) {
        var l = d3_selection_onListener(listener, argumentz);
        return function(e) {
          var target = this,
              related = e.relatedTarget;
          if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
            l.call(target, e);
          }
        };
      }
      var d3_event_dragSelect,
          d3_event_dragId = 0;
      function d3_event_dragSuppress(node) {
        var name = ".dragsuppress-" + ++d3_event_dragId,
            click = "click" + name,
            w = d3.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
        if (d3_event_dragSelect == null) {
          d3_event_dragSelect = "onselectstart" in node ? false : d3_vendorSymbol(node.style, "userSelect");
        }
        if (d3_event_dragSelect) {
          var style = d3_documentElement(node).style,
              select = style[d3_event_dragSelect];
          style[d3_event_dragSelect] = "none";
        }
        return function(suppressClick) {
          w.on(name, null);
          if (d3_event_dragSelect)
            style[d3_event_dragSelect] = select;
          if (suppressClick) {
            var off = function() {
              w.on(click, null);
            };
            w.on(click, function() {
              d3_eventPreventDefault();
              off();
            }, true);
            setTimeout(off, 0);
          }
        };
      }
      d3.mouse = function(container) {
        return d3_mousePoint(container, d3_eventSource());
      };
      var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
      function d3_mousePoint(container, e) {
        if (e.changedTouches)
          e = e.changedTouches[0];
        var svg = container.ownerSVGElement || container;
        if (svg.createSVGPoint) {
          var point = svg.createSVGPoint();
          if (d3_mouse_bug44083 < 0) {
            var window = d3_window(container);
            if (window.scrollX || window.scrollY) {
              svg = d3.select("body").append("svg").style({
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                padding: 0,
                border: "none"
              }, "important");
              var ctm = svg[0][0].getScreenCTM();
              d3_mouse_bug44083 = !(ctm.f || ctm.e);
              svg.remove();
            }
          }
          if (d3_mouse_bug44083)
            point.x = e.pageX, point.y = e.pageY;
          else
            point.x = e.clientX, point.y = e.clientY;
          point = point.matrixTransform(container.getScreenCTM().inverse());
          return [point.x, point.y];
        }
        var rect = container.getBoundingClientRect();
        return [e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop];
      }
      d3.touch = function(container, touches, identifier) {
        if (arguments.length < 3)
          identifier = touches, touches = d3_eventSource().changedTouches;
        if (touches)
          for (var i = 0,
              n = touches.length,
              touch; i < n; ++i) {
            if ((touch = touches[i]).identifier === identifier) {
              return d3_mousePoint(container, touch);
            }
          }
      };
      d3.behavior.drag = function() {
        var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"),
            origin = null,
            mousedown = dragstart(d3_noop, d3.mouse, d3_window, "mousemove", "mouseup"),
            touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_identity, "touchmove", "touchend");
        function drag() {
          this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
        }
        function dragstart(id, position, subject, move, end) {
          return function() {
            var that = this,
                target = d3.event.target,
                parent = that.parentNode,
                dispatch = event.of(that, arguments),
                dragged = 0,
                dragId = id(),
                dragName = ".drag" + (dragId == null ? "" : "-" + dragId),
                dragOffset,
                dragSubject = d3.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended),
                dragRestore = d3_event_dragSuppress(target),
                position0 = position(parent, dragId);
            if (origin) {
              dragOffset = origin.apply(that, arguments);
              dragOffset = [dragOffset.x - position0[0], dragOffset.y - position0[1]];
            } else {
              dragOffset = [0, 0];
            }
            dispatch({type: "dragstart"});
            function moved() {
              var position1 = position(parent, dragId),
                  dx,
                  dy;
              if (!position1)
                return;
              dx = position1[0] - position0[0];
              dy = position1[1] - position0[1];
              dragged |= dx | dy;
              position0 = position1;
              dispatch({
                type: "drag",
                x: position1[0] + dragOffset[0],
                y: position1[1] + dragOffset[1],
                dx: dx,
                dy: dy
              });
            }
            function ended() {
              if (!position(parent, dragId))
                return;
              dragSubject.on(move + dragName, null).on(end + dragName, null);
              dragRestore(dragged);
              dispatch({type: "dragend"});
            }
          };
        }
        drag.origin = function(x) {
          if (!arguments.length)
            return origin;
          origin = x;
          return drag;
        };
        return d3.rebind(drag, event, "on");
      };
      function d3_behavior_dragTouchId() {
        return d3.event.changedTouches[0].identifier;
      }
      d3.touches = function(container, touches) {
        if (arguments.length < 2)
          touches = d3_eventSource().touches;
        return touches ? d3_array(touches).map(function(touch) {
          var point = d3_mousePoint(container, touch);
          point.identifier = touch.identifier;
          return point;
        }) : [];
      };
      var ε = 1e-6,
          ε2 = ε * ε,
          π = Math.PI,
          τ = 2 * π,
          τε = τ - ε,
          halfπ = π / 2,
          d3_radians = π / 180,
          d3_degrees = 180 / π;
      function d3_sgn(x) {
        return x > 0 ? 1 : x < 0 ? -1 : 0;
      }
      function d3_cross2d(a, b, c) {
        return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
      }
      function d3_acos(x) {
        return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
      }
      function d3_asin(x) {
        return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
      }
      function d3_sinh(x) {
        return ((x = Math.exp(x)) - 1 / x) / 2;
      }
      function d3_cosh(x) {
        return ((x = Math.exp(x)) + 1 / x) / 2;
      }
      function d3_tanh(x) {
        return ((x = Math.exp(2 * x)) - 1) / (x + 1);
      }
      function d3_haversin(x) {
        return (x = Math.sin(x / 2)) * x;
      }
      var ρ = Math.SQRT2,
          ρ2 = 2,
          ρ4 = 4;
      d3.interpolateZoom = function(p0, p1) {
        var ux0 = p0[0],
            uy0 = p0[1],
            w0 = p0[2],
            ux1 = p1[0],
            uy1 = p1[1],
            w1 = p1[2],
            dx = ux1 - ux0,
            dy = uy1 - uy0,
            d2 = dx * dx + dy * dy,
            i,
            S;
        if (d2 < ε2) {
          S = Math.log(w1 / w0) / ρ;
          i = function(t) {
            return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * t * S)];
          };
        } else {
          var d1 = Math.sqrt(d2),
              b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1),
              b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1),
              r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
              r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
          S = (r1 - r0) / ρ;
          i = function(t) {
            var s = t * S,
                coshr0 = d3_cosh(r0),
                u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
            return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0)];
          };
        }
        i.duration = S * 1e3;
        return i;
      };
      d3.behavior.zoom = function() {
        var view = {
          x: 0,
          y: 0,
          k: 1
        },
            translate0,
            center0,
            center,
            size = [960, 500],
            scaleExtent = d3_behavior_zoomInfinity,
            duration = 250,
            zooming = 0,
            mousedown = "mousedown.zoom",
            mousemove = "mousemove.zoom",
            mouseup = "mouseup.zoom",
            mousewheelTimer,
            touchstart = "touchstart.zoom",
            touchtime,
            event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"),
            x0,
            x1,
            y0,
            y1;
        if (!d3_behavior_zoomWheel) {
          d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
            return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
          }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
            return d3.event.wheelDelta;
          }, "mousewheel") : (d3_behavior_zoomDelta = function() {
            return -d3.event.detail;
          }, "MozMousePixelScroll");
        }
        function zoom(g) {
          g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
        }
        zoom.event = function(g) {
          g.each(function() {
            var dispatch = event.of(this, arguments),
                view1 = view;
            if (d3_transitionInheritId) {
              d3.select(this).transition().each("start.zoom", function() {
                view = this.__chart__ || {
                  x: 0,
                  y: 0,
                  k: 1
                };
                zoomstarted(dispatch);
              }).tween("zoom:zoom", function() {
                var dx = size[0],
                    dy = size[1],
                    cx = center0 ? center0[0] : dx / 2,
                    cy = center0 ? center0[1] : dy / 2,
                    i = d3.interpolateZoom([(cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k], [(cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k]);
                return function(t) {
                  var l = i(t),
                      k = dx / l[2];
                  this.__chart__ = view = {
                    x: cx - l[0] * k,
                    y: cy - l[1] * k,
                    k: k
                  };
                  zoomed(dispatch);
                };
              }).each("interrupt.zoom", function() {
                zoomended(dispatch);
              }).each("end.zoom", function() {
                zoomended(dispatch);
              });
            } else {
              this.__chart__ = view;
              zoomstarted(dispatch);
              zoomed(dispatch);
              zoomended(dispatch);
            }
          });
        };
        zoom.translate = function(_) {
          if (!arguments.length)
            return [view.x, view.y];
          view = {
            x: +_[0],
            y: +_[1],
            k: view.k
          };
          rescale();
          return zoom;
        };
        zoom.scale = function(_) {
          if (!arguments.length)
            return view.k;
          view = {
            x: view.x,
            y: view.y,
            k: null
          };
          scaleTo(+_);
          rescale();
          return zoom;
        };
        zoom.scaleExtent = function(_) {
          if (!arguments.length)
            return scaleExtent;
          scaleExtent = _ == null ? d3_behavior_zoomInfinity : [+_[0], +_[1]];
          return zoom;
        };
        zoom.center = function(_) {
          if (!arguments.length)
            return center;
          center = _ && [+_[0], +_[1]];
          return zoom;
        };
        zoom.size = function(_) {
          if (!arguments.length)
            return size;
          size = _ && [+_[0], +_[1]];
          return zoom;
        };
        zoom.duration = function(_) {
          if (!arguments.length)
            return duration;
          duration = +_;
          return zoom;
        };
        zoom.x = function(z) {
          if (!arguments.length)
            return x1;
          x1 = z;
          x0 = z.copy();
          view = {
            x: 0,
            y: 0,
            k: 1
          };
          return zoom;
        };
        zoom.y = function(z) {
          if (!arguments.length)
            return y1;
          y1 = z;
          y0 = z.copy();
          view = {
            x: 0,
            y: 0,
            k: 1
          };
          return zoom;
        };
        function location(p) {
          return [(p[0] - view.x) / view.k, (p[1] - view.y) / view.k];
        }
        function point(l) {
          return [l[0] * view.k + view.x, l[1] * view.k + view.y];
        }
        function scaleTo(s) {
          view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
        }
        function translateTo(p, l) {
          l = point(l);
          view.x += p[0] - l[0];
          view.y += p[1] - l[1];
        }
        function zoomTo(that, p, l, k) {
          that.__chart__ = {
            x: view.x,
            y: view.y,
            k: view.k
          };
          scaleTo(Math.pow(2, k));
          translateTo(center0 = p, l);
          that = d3.select(that);
          if (duration > 0)
            that = that.transition().duration(duration);
          that.call(zoom.event);
        }
        function rescale() {
          if (x1)
            x1.domain(x0.range().map(function(x) {
              return (x - view.x) / view.k;
            }).map(x0.invert));
          if (y1)
            y1.domain(y0.range().map(function(y) {
              return (y - view.y) / view.k;
            }).map(y0.invert));
        }
        function zoomstarted(dispatch) {
          if (!zooming++)
            dispatch({type: "zoomstart"});
        }
        function zoomed(dispatch) {
          rescale();
          dispatch({
            type: "zoom",
            scale: view.k,
            translate: [view.x, view.y]
          });
        }
        function zoomended(dispatch) {
          if (!--zooming)
            dispatch({type: "zoomend"}), center0 = null;
        }
        function mousedowned() {
          var that = this,
              dispatch = event.of(that, arguments),
              dragged = 0,
              subject = d3.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended),
              location0 = location(d3.mouse(that)),
              dragRestore = d3_event_dragSuppress(that);
          d3_selection_interrupt.call(that);
          zoomstarted(dispatch);
          function moved() {
            dragged = 1;
            translateTo(d3.mouse(that), location0);
            zoomed(dispatch);
          }
          function ended() {
            subject.on(mousemove, null).on(mouseup, null);
            dragRestore(dragged);
            zoomended(dispatch);
          }
        }
        function touchstarted() {
          var that = this,
              dispatch = event.of(that, arguments),
              locations0 = {},
              distance0 = 0,
              scale0,
              zoomName = ".zoom-" + d3.event.changedTouches[0].identifier,
              touchmove = "touchmove" + zoomName,
              touchend = "touchend" + zoomName,
              targets = [],
              subject = d3.select(that),
              dragRestore = d3_event_dragSuppress(that);
          started();
          zoomstarted(dispatch);
          subject.on(mousedown, null).on(touchstart, started);
          function relocate() {
            var touches = d3.touches(that);
            scale0 = view.k;
            touches.forEach(function(t) {
              if (t.identifier in locations0)
                locations0[t.identifier] = location(t);
            });
            return touches;
          }
          function started() {
            var target = d3.event.target;
            d3.select(target).on(touchmove, moved).on(touchend, ended);
            targets.push(target);
            var changed = d3.event.changedTouches;
            for (var i = 0,
                n = changed.length; i < n; ++i) {
              locations0[changed[i].identifier] = null;
            }
            var touches = relocate(),
                now = Date.now();
            if (touches.length === 1) {
              if (now - touchtime < 500) {
                var p = touches[0];
                zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
                d3_eventPreventDefault();
              }
              touchtime = now;
            } else if (touches.length > 1) {
              var p = touches[0],
                  q = touches[1],
                  dx = p[0] - q[0],
                  dy = p[1] - q[1];
              distance0 = dx * dx + dy * dy;
            }
          }
          function moved() {
            var touches = d3.touches(that),
                p0,
                l0,
                p1,
                l1;
            d3_selection_interrupt.call(that);
            for (var i = 0,
                n = touches.length; i < n; ++i, l1 = null) {
              p1 = touches[i];
              if (l1 = locations0[p1.identifier]) {
                if (l0)
                  break;
                p0 = p1, l0 = l1;
              }
            }
            if (l1) {
              var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1,
                  scale1 = distance0 && Math.sqrt(distance1 / distance0);
              p0 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
              l0 = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
              scaleTo(scale1 * scale0);
            }
            touchtime = null;
            translateTo(p0, l0);
            zoomed(dispatch);
          }
          function ended() {
            if (d3.event.touches.length) {
              var changed = d3.event.changedTouches;
              for (var i = 0,
                  n = changed.length; i < n; ++i) {
                delete locations0[changed[i].identifier];
              }
              for (var identifier in locations0) {
                return void relocate();
              }
            }
            d3.selectAll(targets).on(zoomName, null);
            subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
            dragRestore();
            zoomended(dispatch);
          }
        }
        function mousewheeled() {
          var dispatch = event.of(this, arguments);
          if (mousewheelTimer)
            clearTimeout(mousewheelTimer);
          else
            d3_selection_interrupt.call(this), translate0 = location(center0 = center || d3.mouse(this)), zoomstarted(dispatch);
          mousewheelTimer = setTimeout(function() {
            mousewheelTimer = null;
            zoomended(dispatch);
          }, 50);
          d3_eventPreventDefault();
          scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
          translateTo(center0, translate0);
          zoomed(dispatch);
        }
        function dblclicked() {
          var p = d3.mouse(this),
              k = Math.log(view.k) / Math.LN2;
          zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
        }
        return d3.rebind(zoom, event, "on");
      };
      var d3_behavior_zoomInfinity = [0, Infinity],
          d3_behavior_zoomDelta,
          d3_behavior_zoomWheel;
      d3.color = d3_color;
      function d3_color() {}
      d3_color.prototype.toString = function() {
        return this.rgb() + "";
      };
      d3.hsl = d3_hsl;
      function d3_hsl(h, s, l) {
        return this instanceof d3_hsl ? void(this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
      }
      var d3_hslPrototype = d3_hsl.prototype = new d3_color();
      d3_hslPrototype.brighter = function(k) {
        k = Math.pow(.7, arguments.length ? k : 1);
        return new d3_hsl(this.h, this.s, this.l / k);
      };
      d3_hslPrototype.darker = function(k) {
        k = Math.pow(.7, arguments.length ? k : 1);
        return new d3_hsl(this.h, this.s, k * this.l);
      };
      d3_hslPrototype.rgb = function() {
        return d3_hsl_rgb(this.h, this.s, this.l);
      };
      function d3_hsl_rgb(h, s, l) {
        var m1,
            m2;
        h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
        s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
        l = l < 0 ? 0 : l > 1 ? 1 : l;
        m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
        m1 = 2 * l - m2;
        function v(h) {
          if (h > 360)
            h -= 360;
          else if (h < 0)
            h += 360;
          if (h < 60)
            return m1 + (m2 - m1) * h / 60;
          if (h < 180)
            return m2;
          if (h < 240)
            return m1 + (m2 - m1) * (240 - h) / 60;
          return m1;
        }
        function vv(h) {
          return Math.round(v(h) * 255);
        }
        return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
      }
      d3.hcl = d3_hcl;
      function d3_hcl(h, c, l) {
        return this instanceof d3_hcl ? void(this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
      }
      var d3_hclPrototype = d3_hcl.prototype = new d3_color();
      d3_hclPrototype.brighter = function(k) {
        return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
      };
      d3_hclPrototype.darker = function(k) {
        return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
      };
      d3_hclPrototype.rgb = function() {
        return d3_hcl_lab(this.h, this.c, this.l).rgb();
      };
      function d3_hcl_lab(h, c, l) {
        if (isNaN(h))
          h = 0;
        if (isNaN(c))
          c = 0;
        return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
      }
      d3.lab = d3_lab;
      function d3_lab(l, a, b) {
        return this instanceof d3_lab ? void(this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
      }
      var d3_lab_K = 18;
      var d3_lab_X = .95047,
          d3_lab_Y = 1,
          d3_lab_Z = 1.08883;
      var d3_labPrototype = d3_lab.prototype = new d3_color();
      d3_labPrototype.brighter = function(k) {
        return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
      };
      d3_labPrototype.darker = function(k) {
        return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
      };
      d3_labPrototype.rgb = function() {
        return d3_lab_rgb(this.l, this.a, this.b);
      };
      function d3_lab_rgb(l, a, b) {
        var y = (l + 16) / 116,
            x = y + a / 500,
            z = y - b / 200;
        x = d3_lab_xyz(x) * d3_lab_X;
        y = d3_lab_xyz(y) * d3_lab_Y;
        z = d3_lab_xyz(z) * d3_lab_Z;
        return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
      }
      function d3_lab_hcl(l, a, b) {
        return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
      }
      function d3_lab_xyz(x) {
        return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
      }
      function d3_xyz_lab(x) {
        return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
      }
      function d3_xyz_rgb(r) {
        return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
      }
      d3.rgb = d3_rgb;
      function d3_rgb(r, g, b) {
        return this instanceof d3_rgb ? void(this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
      }
      function d3_rgbNumber(value) {
        return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
      }
      function d3_rgbString(value) {
        return d3_rgbNumber(value) + "";
      }
      var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
      d3_rgbPrototype.brighter = function(k) {
        k = Math.pow(.7, arguments.length ? k : 1);
        var r = this.r,
            g = this.g,
            b = this.b,
            i = 30;
        if (!r && !g && !b)
          return new d3_rgb(i, i, i);
        if (r && r < i)
          r = i;
        if (g && g < i)
          g = i;
        if (b && b < i)
          b = i;
        return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
      };
      d3_rgbPrototype.darker = function(k) {
        k = Math.pow(.7, arguments.length ? k : 1);
        return new d3_rgb(k * this.r, k * this.g, k * this.b);
      };
      d3_rgbPrototype.hsl = function() {
        return d3_rgb_hsl(this.r, this.g, this.b);
      };
      d3_rgbPrototype.toString = function() {
        return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
      };
      function d3_rgb_hex(v) {
        return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
      }
      function d3_rgb_parse(format, rgb, hsl) {
        var r = 0,
            g = 0,
            b = 0,
            m1,
            m2,
            color;
        m1 = /([a-z]+)\((.*)\)/.exec(format = format.toLowerCase());
        if (m1) {
          m2 = m1[2].split(",");
          switch (m1[1]) {
            case "hsl":
              {
                return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
              }
            case "rgb":
              {
                return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
              }
          }
        }
        if (color = d3_rgb_names.get(format)) {
          return rgb(color.r, color.g, color.b);
        }
        if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
          if (format.length === 4) {
            r = (color & 3840) >> 4;
            r = r >> 4 | r;
            g = color & 240;
            g = g >> 4 | g;
            b = color & 15;
            b = b << 4 | b;
          } else if (format.length === 7) {
            r = (color & 16711680) >> 16;
            g = (color & 65280) >> 8;
            b = color & 255;
          }
        }
        return rgb(r, g, b);
      }
      function d3_rgb_hsl(r, g, b) {
        var min = Math.min(r /= 255, g /= 255, b /= 255),
            max = Math.max(r, g, b),
            d = max - min,
            h,
            s,
            l = (max + min) / 2;
        if (d) {
          s = l < .5 ? d / (max + min) : d / (2 - max - min);
          if (r == max)
            h = (g - b) / d + (g < b ? 6 : 0);
          else if (g == max)
            h = (b - r) / d + 2;
          else
            h = (r - g) / d + 4;
          h *= 60;
        } else {
          h = NaN;
          s = l > 0 && l < 1 ? 0 : h;
        }
        return new d3_hsl(h, s, l);
      }
      function d3_rgb_lab(r, g, b) {
        r = d3_rgb_xyz(r);
        g = d3_rgb_xyz(g);
        b = d3_rgb_xyz(b);
        var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X),
            y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y),
            z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
        return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
      }
      function d3_rgb_xyz(r) {
        return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
      }
      function d3_rgb_parseNumber(c) {
        var f = parseFloat(c);
        return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
      }
      var d3_rgb_names = d3.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
      });
      d3_rgb_names.forEach(function(key, value) {
        d3_rgb_names.set(key, d3_rgbNumber(value));
      });
      function d3_functor(v) {
        return typeof v === "function" ? v : function() {
          return v;
        };
      }
      d3.functor = d3_functor;
      d3.xhr = d3_xhrType(d3_identity);
      function d3_xhrType(response) {
        return function(url, mimeType, callback) {
          if (arguments.length === 2 && typeof mimeType === "function")
            callback = mimeType, mimeType = null;
          return d3_xhr(url, mimeType, response, callback);
        };
      }
      function d3_xhr(url, mimeType, response, callback) {
        var xhr = {},
            dispatch = d3.dispatch("beforesend", "progress", "load", "error"),
            headers = {},
            request = new XMLHttpRequest(),
            responseType = null;
        if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url))
          request = new XDomainRequest();
        "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
          request.readyState > 3 && respond();
        };
        function respond() {
          var status = request.status,
              result;
          if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
            try {
              result = response.call(xhr, request);
            } catch (e) {
              dispatch.error.call(xhr, e);
              return;
            }
            dispatch.load.call(xhr, result);
          } else {
            dispatch.error.call(xhr, request);
          }
        }
        request.onprogress = function(event) {
          var o = d3.event;
          d3.event = event;
          try {
            dispatch.progress.call(xhr, request);
          } finally {
            d3.event = o;
          }
        };
        xhr.header = function(name, value) {
          name = (name + "").toLowerCase();
          if (arguments.length < 2)
            return headers[name];
          if (value == null)
            delete headers[name];
          else
            headers[name] = value + "";
          return xhr;
        };
        xhr.mimeType = function(value) {
          if (!arguments.length)
            return mimeType;
          mimeType = value == null ? null : value + "";
          return xhr;
        };
        xhr.responseType = function(value) {
          if (!arguments.length)
            return responseType;
          responseType = value;
          return xhr;
        };
        xhr.response = function(value) {
          response = value;
          return xhr;
        };
        ["get", "post"].forEach(function(method) {
          xhr[method] = function() {
            return xhr.send.apply(xhr, [method].concat(d3_array(arguments)));
          };
        });
        xhr.send = function(method, data, callback) {
          if (arguments.length === 2 && typeof data === "function")
            callback = data, data = null;
          request.open(method, url, true);
          if (mimeType != null && !("accept" in headers))
            headers["accept"] = mimeType + ",*/*";
          if (request.setRequestHeader)
            for (var name in headers)
              request.setRequestHeader(name, headers[name]);
          if (mimeType != null && request.overrideMimeType)
            request.overrideMimeType(mimeType);
          if (responseType != null)
            request.responseType = responseType;
          if (callback != null)
            xhr.on("error", callback).on("load", function(request) {
              callback(null, request);
            });
          dispatch.beforesend.call(xhr, request);
          request.send(data == null ? null : data);
          return xhr;
        };
        xhr.abort = function() {
          request.abort();
          return xhr;
        };
        d3.rebind(xhr, dispatch, "on");
        return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
      }
      function d3_xhr_fixCallback(callback) {
        return callback.length === 1 ? function(error, request) {
          callback(error == null ? request : null);
        } : callback;
      }
      function d3_xhrHasResponse(request) {
        var type = request.responseType;
        return type && type !== "text" ? request.response : request.responseText;
      }
      d3.dsv = function(delimiter, mimeType) {
        var reFormat = new RegExp('["' + delimiter + "\n]"),
            delimiterCode = delimiter.charCodeAt(0);
        function dsv(url, row, callback) {
          if (arguments.length < 3)
            callback = row, row = null;
          var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
          xhr.row = function(_) {
            return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
          };
          return xhr;
        }
        function response(request) {
          return dsv.parse(request.responseText);
        }
        function typedResponse(f) {
          return function(request) {
            return dsv.parse(request.responseText, f);
          };
        }
        dsv.parse = function(text, f) {
          var o;
          return dsv.parseRows(text, function(row, i) {
            if (o)
              return o(row, i - 1);
            var a = new Function("d", "return {" + row.map(function(name, i) {
              return JSON.stringify(name) + ": d[" + i + "]";
            }).join(",") + "}");
            o = f ? function(row, i) {
              return f(a(row), i);
            } : a;
          });
        };
        dsv.parseRows = function(text, f) {
          var EOL = {},
              EOF = {},
              rows = [],
              N = text.length,
              I = 0,
              n = 0,
              t,
              eol;
          function token() {
            if (I >= N)
              return EOF;
            if (eol)
              return eol = false, EOL;
            var j = I;
            if (text.charCodeAt(j) === 34) {
              var i = j;
              while (i++ < N) {
                if (text.charCodeAt(i) === 34) {
                  if (text.charCodeAt(i + 1) !== 34)
                    break;
                  ++i;
                }
              }
              I = i + 2;
              var c = text.charCodeAt(i + 1);
              if (c === 13) {
                eol = true;
                if (text.charCodeAt(i + 2) === 10)
                  ++I;
              } else if (c === 10) {
                eol = true;
              }
              return text.slice(j + 1, i).replace(/""/g, '"');
            }
            while (I < N) {
              var c = text.charCodeAt(I++),
                  k = 1;
              if (c === 10)
                eol = true;
              else if (c === 13) {
                eol = true;
                if (text.charCodeAt(I) === 10)
                  ++I, ++k;
              } else if (c !== delimiterCode)
                continue;
              return text.slice(j, I - k);
            }
            return text.slice(j);
          }
          while ((t = token()) !== EOF) {
            var a = [];
            while (t !== EOL && t !== EOF) {
              a.push(t);
              t = token();
            }
            if (f && (a = f(a, n++)) == null)
              continue;
            rows.push(a);
          }
          return rows;
        };
        dsv.format = function(rows) {
          if (Array.isArray(rows[0]))
            return dsv.formatRows(rows);
          var fieldSet = new d3_Set(),
              fields = [];
          rows.forEach(function(row) {
            for (var field in row) {
              if (!fieldSet.has(field)) {
                fields.push(fieldSet.add(field));
              }
            }
          });
          return [fields.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
            return fields.map(function(field) {
              return formatValue(row[field]);
            }).join(delimiter);
          })).join("\n");
        };
        dsv.formatRows = function(rows) {
          return rows.map(formatRow).join("\n");
        };
        function formatRow(row) {
          return row.map(formatValue).join(delimiter);
        }
        function formatValue(text) {
          return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
        }
        return dsv;
      };
      d3.csv = d3.dsv(",", "text/csv");
      d3.tsv = d3.dsv("	", "text/tab-separated-values");
      var d3_timer_queueHead,
          d3_timer_queueTail,
          d3_timer_interval,
          d3_timer_timeout,
          d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function(callback) {
            setTimeout(callback, 17);
          };
      d3.timer = function() {
        d3_timer.apply(this, arguments);
      };
      function d3_timer(callback, delay, then) {
        var n = arguments.length;
        if (n < 2)
          delay = 0;
        if (n < 3)
          then = Date.now();
        var time = then + delay,
            timer = {
              c: callback,
              t: time,
              n: null
            };
        if (d3_timer_queueTail)
          d3_timer_queueTail.n = timer;
        else
          d3_timer_queueHead = timer;
        d3_timer_queueTail = timer;
        if (!d3_timer_interval) {
          d3_timer_timeout = clearTimeout(d3_timer_timeout);
          d3_timer_interval = 1;
          d3_timer_frame(d3_timer_step);
        }
        return timer;
      }
      function d3_timer_step() {
        var now = d3_timer_mark(),
            delay = d3_timer_sweep() - now;
        if (delay > 24) {
          if (isFinite(delay)) {
            clearTimeout(d3_timer_timeout);
            d3_timer_timeout = setTimeout(d3_timer_step, delay);
          }
          d3_timer_interval = 0;
        } else {
          d3_timer_interval = 1;
          d3_timer_frame(d3_timer_step);
        }
      }
      d3.timer.flush = function() {
        d3_timer_mark();
        d3_timer_sweep();
      };
      function d3_timer_mark() {
        var now = Date.now(),
            timer = d3_timer_queueHead;
        while (timer) {
          if (now >= timer.t && timer.c(now - timer.t))
            timer.c = null;
          timer = timer.n;
        }
        return now;
      }
      function d3_timer_sweep() {
        var t0,
            t1 = d3_timer_queueHead,
            time = Infinity;
        while (t1) {
          if (t1.c) {
            if (t1.t < time)
              time = t1.t;
            t1 = (t0 = t1).n;
          } else {
            t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
          }
        }
        d3_timer_queueTail = t0;
        return time;
      }
      function d3_format_precision(x, p) {
        return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
      }
      d3.round = function(x, n) {
        return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
      };
      var d3_formatPrefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(d3_formatPrefix);
      d3.formatPrefix = function(value, precision) {
        var i = 0;
        if (value = +value) {
          if (value < 0)
            value *= -1;
          if (precision)
            value = d3.round(value, d3_format_precision(value, precision));
          i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
          i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
        }
        return d3_formatPrefixes[8 + i / 3];
      };
      function d3_formatPrefix(d, i) {
        var k = Math.pow(10, abs(8 - i) * 3);
        return {
          scale: i > 8 ? function(d) {
            return d / k;
          } : function(d) {
            return d * k;
          },
          symbol: d
        };
      }
      function d3_locale_numberFormat(locale) {
        var locale_decimal = locale.decimal,
            locale_thousands = locale.thousands,
            locale_grouping = locale.grouping,
            locale_currency = locale.currency,
            formatGroup = locale_grouping && locale_thousands ? function(value, width) {
              var i = value.length,
                  t = [],
                  j = 0,
                  g = locale_grouping[0],
                  length = 0;
              while (i > 0 && g > 0) {
                if (length + g + 1 > width)
                  g = Math.max(1, width - length);
                t.push(value.substring(i -= g, i + g));
                if ((length += g + 1) > width)
                  break;
                g = locale_grouping[j = (j + 1) % locale_grouping.length];
              }
              return t.reverse().join(locale_thousands);
            } : d3_identity;
        return function(specifier) {
          var match = d3_format_re.exec(specifier),
              fill = match[1] || " ",
              align = match[2] || ">",
              sign = match[3] || "-",
              symbol = match[4] || "",
              zfill = match[5],
              width = +match[6],
              comma = match[7],
              precision = match[8],
              type = match[9],
              scale = 1,
              prefix = "",
              suffix = "",
              integer = false,
              exponent = true;
          if (precision)
            precision = +precision.substring(1);
          if (zfill || fill === "0" && align === "=") {
            zfill = fill = "0";
            align = "=";
          }
          switch (type) {
            case "n":
              comma = true;
              type = "g";
              break;
            case "%":
              scale = 100;
              suffix = "%";
              type = "f";
              break;
            case "p":
              scale = 100;
              suffix = "%";
              type = "r";
              break;
            case "b":
            case "o":
            case "x":
            case "X":
              if (symbol === "#")
                prefix = "0" + type.toLowerCase();
            case "c":
              exponent = false;
            case "d":
              integer = true;
              precision = 0;
              break;
            case "s":
              scale = -1;
              type = "r";
              break;
          }
          if (symbol === "$")
            prefix = locale_currency[0], suffix = locale_currency[1];
          if (type == "r" && !precision)
            type = "g";
          if (precision != null) {
            if (type == "g")
              precision = Math.max(1, Math.min(21, precision));
            else if (type == "e" || type == "f")
              precision = Math.max(0, Math.min(20, precision));
          }
          type = d3_format_types.get(type) || d3_format_typeDefault;
          var zcomma = zfill && comma;
          return function(value) {
            var fullSuffix = suffix;
            if (integer && value % 1)
              return "";
            var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;
            if (scale < 0) {
              var unit = d3.formatPrefix(value, precision);
              value = unit.scale(value);
              fullSuffix = unit.symbol + suffix;
            } else {
              value *= scale;
            }
            value = type(value, precision);
            var i = value.lastIndexOf("."),
                before,
                after;
            if (i < 0) {
              var j = exponent ? value.lastIndexOf("e") : -1;
              if (j < 0)
                before = value, after = "";
              else
                before = value.substring(0, j), after = value.substring(j);
            } else {
              before = value.substring(0, i);
              after = locale_decimal + value.substring(i + 1);
            }
            if (!zfill && comma)
              before = formatGroup(before, Infinity);
            var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length),
                padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
            if (zcomma)
              before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
            negative += prefix;
            value = before + after;
            return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
          };
        };
      }
      var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
      var d3_format_types = d3.map({
        b: function(x) {
          return x.toString(2);
        },
        c: function(x) {
          return String.fromCharCode(x);
        },
        o: function(x) {
          return x.toString(8);
        },
        x: function(x) {
          return x.toString(16);
        },
        X: function(x) {
          return x.toString(16).toUpperCase();
        },
        g: function(x, p) {
          return x.toPrecision(p);
        },
        e: function(x, p) {
          return x.toExponential(p);
        },
        f: function(x, p) {
          return x.toFixed(p);
        },
        r: function(x, p) {
          return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
        }
      });
      function d3_format_typeDefault(x) {
        return x + "";
      }
      var d3_time = d3.time = {},
          d3_date = Date;
      function d3_date_utc() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
      }
      d3_date_utc.prototype = {
        getDate: function() {
          return this._.getUTCDate();
        },
        getDay: function() {
          return this._.getUTCDay();
        },
        getFullYear: function() {
          return this._.getUTCFullYear();
        },
        getHours: function() {
          return this._.getUTCHours();
        },
        getMilliseconds: function() {
          return this._.getUTCMilliseconds();
        },
        getMinutes: function() {
          return this._.getUTCMinutes();
        },
        getMonth: function() {
          return this._.getUTCMonth();
        },
        getSeconds: function() {
          return this._.getUTCSeconds();
        },
        getTime: function() {
          return this._.getTime();
        },
        getTimezoneOffset: function() {
          return 0;
        },
        valueOf: function() {
          return this._.valueOf();
        },
        setDate: function() {
          d3_time_prototype.setUTCDate.apply(this._, arguments);
        },
        setDay: function() {
          d3_time_prototype.setUTCDay.apply(this._, arguments);
        },
        setFullYear: function() {
          d3_time_prototype.setUTCFullYear.apply(this._, arguments);
        },
        setHours: function() {
          d3_time_prototype.setUTCHours.apply(this._, arguments);
        },
        setMilliseconds: function() {
          d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
        },
        setMinutes: function() {
          d3_time_prototype.setUTCMinutes.apply(this._, arguments);
        },
        setMonth: function() {
          d3_time_prototype.setUTCMonth.apply(this._, arguments);
        },
        setSeconds: function() {
          d3_time_prototype.setUTCSeconds.apply(this._, arguments);
        },
        setTime: function() {
          d3_time_prototype.setTime.apply(this._, arguments);
        }
      };
      var d3_time_prototype = Date.prototype;
      function d3_time_interval(local, step, number) {
        function round(date) {
          var d0 = local(date),
              d1 = offset(d0, 1);
          return date - d0 < d1 - date ? d0 : d1;
        }
        function ceil(date) {
          step(date = local(new d3_date(date - 1)), 1);
          return date;
        }
        function offset(date, k) {
          step(date = new d3_date(+date), k);
          return date;
        }
        function range(t0, t1, dt) {
          var time = ceil(t0),
              times = [];
          if (dt > 1) {
            while (time < t1) {
              if (!(number(time) % dt))
                times.push(new Date(+time));
              step(time, 1);
            }
          } else {
            while (time < t1)
              times.push(new Date(+time)), step(time, 1);
          }
          return times;
        }
        function range_utc(t0, t1, dt) {
          try {
            d3_date = d3_date_utc;
            var utc = new d3_date_utc();
            utc._ = t0;
            return range(utc, t1, dt);
          } finally {
            d3_date = Date;
          }
        }
        local.floor = local;
        local.round = round;
        local.ceil = ceil;
        local.offset = offset;
        local.range = range;
        var utc = local.utc = d3_time_interval_utc(local);
        utc.floor = utc;
        utc.round = d3_time_interval_utc(round);
        utc.ceil = d3_time_interval_utc(ceil);
        utc.offset = d3_time_interval_utc(offset);
        utc.range = range_utc;
        return local;
      }
      function d3_time_interval_utc(method) {
        return function(date, k) {
          try {
            d3_date = d3_date_utc;
            var utc = new d3_date_utc();
            utc._ = date;
            return method(utc, k)._;
          } finally {
            d3_date = Date;
          }
        };
      }
      d3_time.year = d3_time_interval(function(date) {
        date = d3_time.day(date);
        date.setMonth(0, 1);
        return date;
      }, function(date, offset) {
        date.setFullYear(date.getFullYear() + offset);
      }, function(date) {
        return date.getFullYear();
      });
      d3_time.years = d3_time.year.range;
      d3_time.years.utc = d3_time.year.utc.range;
      d3_time.day = d3_time_interval(function(date) {
        var day = new d3_date(2e3, 0);
        day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
        return day;
      }, function(date, offset) {
        date.setDate(date.getDate() + offset);
      }, function(date) {
        return date.getDate() - 1;
      });
      d3_time.days = d3_time.day.range;
      d3_time.days.utc = d3_time.day.utc.range;
      d3_time.dayOfYear = function(date) {
        var year = d3_time.year(date);
        return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
      };
      ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(day, i) {
        i = 7 - i;
        var interval = d3_time[day] = d3_time_interval(function(date) {
          (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
          return date;
        }, function(date, offset) {
          date.setDate(date.getDate() + Math.floor(offset) * 7);
        }, function(date) {
          var day = d3_time.year(date).getDay();
          return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
        });
        d3_time[day + "s"] = interval.range;
        d3_time[day + "s"].utc = interval.utc.range;
        d3_time[day + "OfYear"] = function(date) {
          var day = d3_time.year(date).getDay();
          return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
        };
      });
      d3_time.week = d3_time.sunday;
      d3_time.weeks = d3_time.sunday.range;
      d3_time.weeks.utc = d3_time.sunday.utc.range;
      d3_time.weekOfYear = d3_time.sundayOfYear;
      function d3_locale_timeFormat(locale) {
        var locale_dateTime = locale.dateTime,
            locale_date = locale.date,
            locale_time = locale.time,
            locale_periods = locale.periods,
            locale_days = locale.days,
            locale_shortDays = locale.shortDays,
            locale_months = locale.months,
            locale_shortMonths = locale.shortMonths;
        function d3_time_format(template) {
          var n = template.length;
          function format(date) {
            var string = [],
                i = -1,
                j = 0,
                c,
                p,
                f;
            while (++i < n) {
              if (template.charCodeAt(i) === 37) {
                string.push(template.slice(j, i));
                if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null)
                  c = template.charAt(++i);
                if (f = d3_time_formats[c])
                  c = f(date, p == null ? c === "e" ? " " : "0" : p);
                string.push(c);
                j = i + 1;
              }
            }
            string.push(template.slice(j, i));
            return string.join("");
          }
          format.parse = function(string) {
            var d = {
              y: 1900,
              m: 0,
              d: 1,
              H: 0,
              M: 0,
              S: 0,
              L: 0,
              Z: null
            },
                i = d3_time_parse(d, template, string, 0);
            if (i != string.length)
              return null;
            if ("p" in d)
              d.H = d.H % 12 + d.p * 12;
            var localZ = d.Z != null && d3_date !== d3_date_utc,
                date = new (localZ ? d3_date_utc : d3_date)();
            if ("j" in d)
              date.setFullYear(d.y, 0, d.j);
            else if ("W" in d || "U" in d) {
              if (!("w" in d))
                d.w = "W" in d ? 1 : 0;
              date.setFullYear(d.y, 0, 1);
              date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
            } else
              date.setFullYear(d.y, d.m, d.d);
            date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
            return localZ ? date._ : date;
          };
          format.toString = function() {
            return template;
          };
          return format;
        }
        function d3_time_parse(date, template, string, j) {
          var c,
              p,
              t,
              i = 0,
              n = template.length,
              m = string.length;
          while (i < n) {
            if (j >= m)
              return -1;
            c = template.charCodeAt(i++);
            if (c === 37) {
              t = template.charAt(i++);
              p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
              if (!p || (j = p(date, string, j)) < 0)
                return -1;
            } else if (c != string.charCodeAt(j++)) {
              return -1;
            }
          }
          return j;
        }
        d3_time_format.utc = function(template) {
          var local = d3_time_format(template);
          function format(date) {
            try {
              d3_date = d3_date_utc;
              var utc = new d3_date();
              utc._ = date;
              return local(utc);
            } finally {
              d3_date = Date;
            }
          }
          format.parse = function(string) {
            try {
              d3_date = d3_date_utc;
              var date = local.parse(string);
              return date && date._;
            } finally {
              d3_date = Date;
            }
          };
          format.toString = local.toString;
          return format;
        };
        d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
        var d3_time_periodLookup = d3.map(),
            d3_time_dayRe = d3_time_formatRe(locale_days),
            d3_time_dayLookup = d3_time_formatLookup(locale_days),
            d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays),
            d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays),
            d3_time_monthRe = d3_time_formatRe(locale_months),
            d3_time_monthLookup = d3_time_formatLookup(locale_months),
            d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths),
            d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
        locale_periods.forEach(function(p, i) {
          d3_time_periodLookup.set(p.toLowerCase(), i);
        });
        var d3_time_formats = {
          a: function(d) {
            return locale_shortDays[d.getDay()];
          },
          A: function(d) {
            return locale_days[d.getDay()];
          },
          b: function(d) {
            return locale_shortMonths[d.getMonth()];
          },
          B: function(d) {
            return locale_months[d.getMonth()];
          },
          c: d3_time_format(locale_dateTime),
          d: function(d, p) {
            return d3_time_formatPad(d.getDate(), p, 2);
          },
          e: function(d, p) {
            return d3_time_formatPad(d.getDate(), p, 2);
          },
          H: function(d, p) {
            return d3_time_formatPad(d.getHours(), p, 2);
          },
          I: function(d, p) {
            return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
          },
          j: function(d, p) {
            return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
          },
          L: function(d, p) {
            return d3_time_formatPad(d.getMilliseconds(), p, 3);
          },
          m: function(d, p) {
            return d3_time_formatPad(d.getMonth() + 1, p, 2);
          },
          M: function(d, p) {
            return d3_time_formatPad(d.getMinutes(), p, 2);
          },
          p: function(d) {
            return locale_periods[+(d.getHours() >= 12)];
          },
          S: function(d, p) {
            return d3_time_formatPad(d.getSeconds(), p, 2);
          },
          U: function(d, p) {
            return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
          },
          w: function(d) {
            return d.getDay();
          },
          W: function(d, p) {
            return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
          },
          x: d3_time_format(locale_date),
          X: d3_time_format(locale_time),
          y: function(d, p) {
            return d3_time_formatPad(d.getFullYear() % 100, p, 2);
          },
          Y: function(d, p) {
            return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
          },
          Z: d3_time_zone,
          "%": function() {
            return "%";
          }
        };
        var d3_time_parsers = {
          a: d3_time_parseWeekdayAbbrev,
          A: d3_time_parseWeekday,
          b: d3_time_parseMonthAbbrev,
          B: d3_time_parseMonth,
          c: d3_time_parseLocaleFull,
          d: d3_time_parseDay,
          e: d3_time_parseDay,
          H: d3_time_parseHour24,
          I: d3_time_parseHour24,
          j: d3_time_parseDayOfYear,
          L: d3_time_parseMilliseconds,
          m: d3_time_parseMonthNumber,
          M: d3_time_parseMinutes,
          p: d3_time_parseAmPm,
          S: d3_time_parseSeconds,
          U: d3_time_parseWeekNumberSunday,
          w: d3_time_parseWeekdayNumber,
          W: d3_time_parseWeekNumberMonday,
          x: d3_time_parseLocaleDate,
          X: d3_time_parseLocaleTime,
          y: d3_time_parseYear,
          Y: d3_time_parseFullYear,
          Z: d3_time_parseZone,
          "%": d3_time_parseLiteralPercent
        };
        function d3_time_parseWeekdayAbbrev(date, string, i) {
          d3_time_dayAbbrevRe.lastIndex = 0;
          var n = d3_time_dayAbbrevRe.exec(string.slice(i));
          return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
        }
        function d3_time_parseWeekday(date, string, i) {
          d3_time_dayRe.lastIndex = 0;
          var n = d3_time_dayRe.exec(string.slice(i));
          return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
        }
        function d3_time_parseMonthAbbrev(date, string, i) {
          d3_time_monthAbbrevRe.lastIndex = 0;
          var n = d3_time_monthAbbrevRe.exec(string.slice(i));
          return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
        }
        function d3_time_parseMonth(date, string, i) {
          d3_time_monthRe.lastIndex = 0;
          var n = d3_time_monthRe.exec(string.slice(i));
          return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
        }
        function d3_time_parseLocaleFull(date, string, i) {
          return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
        }
        function d3_time_parseLocaleDate(date, string, i) {
          return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
        }
        function d3_time_parseLocaleTime(date, string, i) {
          return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
        }
        function d3_time_parseAmPm(date, string, i) {
          var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
          return n == null ? -1 : (date.p = n, i);
        }
        return d3_time_format;
      }
      var d3_time_formatPads = {
        "-": "",
        _: " ",
        "0": "0"
      },
          d3_time_numberRe = /^\s*\d+/,
          d3_time_percentRe = /^%/;
      function d3_time_formatPad(value, fill, width) {
        var sign = value < 0 ? "-" : "",
            string = (sign ? -value : value) + "",
            length = string.length;
        return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
      }
      function d3_time_formatRe(names) {
        return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
      }
      function d3_time_formatLookup(names) {
        var map = new d3_Map(),
            i = -1,
            n = names.length;
        while (++i < n)
          map.set(names[i].toLowerCase(), i);
        return map;
      }
      function d3_time_parseWeekdayNumber(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 1));
        return n ? (date.w = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseWeekNumberSunday(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i));
        return n ? (date.U = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseWeekNumberMonday(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i));
        return n ? (date.W = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseFullYear(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 4));
        return n ? (date.y = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseYear(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 2));
        return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
      }
      function d3_time_parseZone(date, string, i) {
        return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, i + 5) : -1;
      }
      function d3_time_expandYear(d) {
        return d + (d > 68 ? 1900 : 2e3);
      }
      function d3_time_parseMonthNumber(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 2));
        return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
      }
      function d3_time_parseDay(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 2));
        return n ? (date.d = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseDayOfYear(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 3));
        return n ? (date.j = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseHour24(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 2));
        return n ? (date.H = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseMinutes(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 2));
        return n ? (date.M = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseSeconds(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 2));
        return n ? (date.S = +n[0], i + n[0].length) : -1;
      }
      function d3_time_parseMilliseconds(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.slice(i, i + 3));
        return n ? (date.L = +n[0], i + n[0].length) : -1;
      }
      function d3_time_zone(d) {
        var z = d.getTimezoneOffset(),
            zs = z > 0 ? "-" : "+",
            zh = abs(z) / 60 | 0,
            zm = abs(z) % 60;
        return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
      }
      function d3_time_parseLiteralPercent(date, string, i) {
        d3_time_percentRe.lastIndex = 0;
        var n = d3_time_percentRe.exec(string.slice(i, i + 1));
        return n ? i + n[0].length : -1;
      }
      function d3_time_formatMulti(formats) {
        var n = formats.length,
            i = -1;
        while (++i < n)
          formats[i][0] = this(formats[i][0]);
        return function(date) {
          var i = 0,
              f = formats[i];
          while (!f[1](date))
            f = formats[++i];
          return f[0](date);
        };
      }
      d3.locale = function(locale) {
        return {
          numberFormat: d3_locale_numberFormat(locale),
          timeFormat: d3_locale_timeFormat(locale)
        };
      };
      var d3_locale_enUS = d3.locale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      });
      d3.format = d3_locale_enUS.numberFormat;
      d3.geo = {};
      function d3_adder() {}
      d3_adder.prototype = {
        s: 0,
        t: 0,
        add: function(y) {
          d3_adderSum(y, this.t, d3_adderTemp);
          d3_adderSum(d3_adderTemp.s, this.s, this);
          if (this.s)
            this.t += d3_adderTemp.t;
          else
            this.s = d3_adderTemp.t;
        },
        reset: function() {
          this.s = this.t = 0;
        },
        valueOf: function() {
          return this.s;
        }
      };
      var d3_adderTemp = new d3_adder();
      function d3_adderSum(a, b, o) {
        var x = o.s = a + b,
            bv = x - a,
            av = x - bv;
        o.t = a - av + (b - bv);
      }
      d3.geo.stream = function(object, listener) {
        if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
          d3_geo_streamObjectType[object.type](object, listener);
        } else {
          d3_geo_streamGeometry(object, listener);
        }
      };
      function d3_geo_streamGeometry(geometry, listener) {
        if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
          d3_geo_streamGeometryType[geometry.type](geometry, listener);
        }
      }
      var d3_geo_streamObjectType = {
        Feature: function(feature, listener) {
          d3_geo_streamGeometry(feature.geometry, listener);
        },
        FeatureCollection: function(object, listener) {
          var features = object.features,
              i = -1,
              n = features.length;
          while (++i < n)
            d3_geo_streamGeometry(features[i].geometry, listener);
        }
      };
      var d3_geo_streamGeometryType = {
        Sphere: function(object, listener) {
          listener.sphere();
        },
        Point: function(object, listener) {
          object = object.coordinates;
          listener.point(object[0], object[1], object[2]);
        },
        MultiPoint: function(object, listener) {
          var coordinates = object.coordinates,
              i = -1,
              n = coordinates.length;
          while (++i < n)
            object = coordinates[i], listener.point(object[0], object[1], object[2]);
        },
        LineString: function(object, listener) {
          d3_geo_streamLine(object.coordinates, listener, 0);
        },
        MultiLineString: function(object, listener) {
          var coordinates = object.coordinates,
              i = -1,
              n = coordinates.length;
          while (++i < n)
            d3_geo_streamLine(coordinates[i], listener, 0);
        },
        Polygon: function(object, listener) {
          d3_geo_streamPolygon(object.coordinates, listener);
        },
        MultiPolygon: function(object, listener) {
          var coordinates = object.coordinates,
              i = -1,
              n = coordinates.length;
          while (++i < n)
            d3_geo_streamPolygon(coordinates[i], listener);
        },
        GeometryCollection: function(object, listener) {
          var geometries = object.geometries,
              i = -1,
              n = geometries.length;
          while (++i < n)
            d3_geo_streamGeometry(geometries[i], listener);
        }
      };
      function d3_geo_streamLine(coordinates, listener, closed) {
        var i = -1,
            n = coordinates.length - closed,
            coordinate;
        listener.lineStart();
        while (++i < n)
          coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
        listener.lineEnd();
      }
      function d3_geo_streamPolygon(coordinates, listener) {
        var i = -1,
            n = coordinates.length;
        listener.polygonStart();
        while (++i < n)
          d3_geo_streamLine(coordinates[i], listener, 1);
        listener.polygonEnd();
      }
      d3.geo.area = function(object) {
        d3_geo_areaSum = 0;
        d3.geo.stream(object, d3_geo_area);
        return d3_geo_areaSum;
      };
      var d3_geo_areaSum,
          d3_geo_areaRingSum = new d3_adder();
      var d3_geo_area = {
        sphere: function() {
          d3_geo_areaSum += 4 * π;
        },
        point: d3_noop,
        lineStart: d3_noop,
        lineEnd: d3_noop,
        polygonStart: function() {
          d3_geo_areaRingSum.reset();
          d3_geo_area.lineStart = d3_geo_areaRingStart;
        },
        polygonEnd: function() {
          var area = 2 * d3_geo_areaRingSum;
          d3_geo_areaSum += area < 0 ? 4 * π + area : area;
          d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
        }
      };
      function d3_geo_areaRingStart() {
        var λ00,
            φ00,
            λ0,
            cosφ0,
            sinφ0;
        d3_geo_area.point = function(λ, φ) {
          d3_geo_area.point = nextPoint;
          λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), sinφ0 = Math.sin(φ);
        };
        function nextPoint(λ, φ) {
          λ *= d3_radians;
          φ = φ * d3_radians / 2 + π / 4;
          var dλ = λ - λ0,
              sdλ = dλ >= 0 ? 1 : -1,
              adλ = sdλ * dλ,
              cosφ = Math.cos(φ),
              sinφ = Math.sin(φ),
              k = sinφ0 * sinφ,
              u = cosφ0 * cosφ + k * Math.cos(adλ),
              v = k * sdλ * Math.sin(adλ);
          d3_geo_areaRingSum.add(Math.atan2(v, u));
          λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
        }
        d3_geo_area.lineEnd = function() {
          nextPoint(λ00, φ00);
        };
      }
      function d3_geo_cartesian(spherical) {
        var λ = spherical[0],
            φ = spherical[1],
            cosφ = Math.cos(φ);
        return [cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ)];
      }
      function d3_geo_cartesianDot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
      }
      function d3_geo_cartesianCross(a, b) {
        return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
      }
      function d3_geo_cartesianAdd(a, b) {
        a[0] += b[0];
        a[1] += b[1];
        a[2] += b[2];
      }
      function d3_geo_cartesianScale(vector, k) {
        return [vector[0] * k, vector[1] * k, vector[2] * k];
      }
      function d3_geo_cartesianNormalize(d) {
        var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
        d[0] /= l;
        d[1] /= l;
        d[2] /= l;
      }
      function d3_geo_spherical(cartesian) {
        return [Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2])];
      }
      function d3_geo_sphericalEqual(a, b) {
        return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
      }
      d3.geo.bounds = function() {
        var λ0,
            φ0,
            λ1,
            φ1,
            λ_,
            λ__,
            φ__,
            p0,
            dλSum,
            ranges,
            range;
        var bound = {
          point: point,
          lineStart: lineStart,
          lineEnd: lineEnd,
          polygonStart: function() {
            bound.point = ringPoint;
            bound.lineStart = ringStart;
            bound.lineEnd = ringEnd;
            dλSum = 0;
            d3_geo_area.polygonStart();
          },
          polygonEnd: function() {
            d3_geo_area.polygonEnd();
            bound.point = point;
            bound.lineStart = lineStart;
            bound.lineEnd = lineEnd;
            if (d3_geo_areaRingSum < 0)
              λ0 = -(λ1 = 180), φ0 = -(φ1 = 90);
            else if (dλSum > ε)
              φ1 = 90;
            else if (dλSum < -ε)
              φ0 = -90;
            range[0] = λ0, range[1] = λ1;
          }
        };
        function point(λ, φ) {
          ranges.push(range = [λ0 = λ, λ1 = λ]);
          if (φ < φ0)
            φ0 = φ;
          if (φ > φ1)
            φ1 = φ;
        }
        function linePoint(λ, φ) {
          var p = d3_geo_cartesian([λ * d3_radians, φ * d3_radians]);
          if (p0) {
            var normal = d3_geo_cartesianCross(p0, p),
                equatorial = [normal[1], -normal[0], 0],
                inflection = d3_geo_cartesianCross(equatorial, normal);
            d3_geo_cartesianNormalize(inflection);
            inflection = d3_geo_spherical(inflection);
            var dλ = λ - λ_,
                s = dλ > 0 ? 1 : -1,
                λi = inflection[0] * d3_degrees * s,
                antimeridian = abs(dλ) > 180;
            if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
              var φi = inflection[1] * d3_degrees;
              if (φi > φ1)
                φ1 = φi;
            } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
              var φi = -inflection[1] * d3_degrees;
              if (φi < φ0)
                φ0 = φi;
            } else {
              if (φ < φ0)
                φ0 = φ;
              if (φ > φ1)
                φ1 = φ;
            }
            if (antimeridian) {
              if (λ < λ_) {
                if (angle(λ0, λ) > angle(λ0, λ1))
                  λ1 = λ;
              } else {
                if (angle(λ, λ1) > angle(λ0, λ1))
                  λ0 = λ;
              }
            } else {
              if (λ1 >= λ0) {
                if (λ < λ0)
                  λ0 = λ;
                if (λ > λ1)
                  λ1 = λ;
              } else {
                if (λ > λ_) {
                  if (angle(λ0, λ) > angle(λ0, λ1))
                    λ1 = λ;
                } else {
                  if (angle(λ, λ1) > angle(λ0, λ1))
                    λ0 = λ;
                }
              }
            }
          } else {
            point(λ, φ);
          }
          p0 = p, λ_ = λ;
        }
        function lineStart() {
          bound.point = linePoint;
        }
        function lineEnd() {
          range[0] = λ0, range[1] = λ1;
          bound.point = point;
          p0 = null;
        }
        function ringPoint(λ, φ) {
          if (p0) {
            var dλ = λ - λ_;
            dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
          } else
            λ__ = λ, φ__ = φ;
          d3_geo_area.point(λ, φ);
          linePoint(λ, φ);
        }
        function ringStart() {
          d3_geo_area.lineStart();
        }
        function ringEnd() {
          ringPoint(λ__, φ__);
          d3_geo_area.lineEnd();
          if (abs(dλSum) > ε)
            λ0 = -(λ1 = 180);
          range[0] = λ0, range[1] = λ1;
          p0 = null;
        }
        function angle(λ0, λ1) {
          return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
        }
        function compareRanges(a, b) {
          return a[0] - b[0];
        }
        function withinRange(x, range) {
          return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
        }
        return function(feature) {
          φ1 = λ1 = -(λ0 = φ0 = Infinity);
          ranges = [];
          d3.geo.stream(feature, bound);
          var n = ranges.length;
          if (n) {
            ranges.sort(compareRanges);
            for (var i = 1,
                a = ranges[0],
                b,
                merged = [a]; i < n; ++i) {
              b = ranges[i];
              if (withinRange(b[0], a) || withinRange(b[1], a)) {
                if (angle(a[0], b[1]) > angle(a[0], a[1]))
                  a[1] = b[1];
                if (angle(b[0], a[1]) > angle(a[0], a[1]))
                  a[0] = b[0];
              } else {
                merged.push(a = b);
              }
            }
            var best = -Infinity,
                dλ;
            for (var n = merged.length - 1,
                i = 0,
                a = merged[n],
                b; i <= n; a = b, ++i) {
              b = merged[i];
              if ((dλ = angle(a[1], b[0])) > best)
                best = dλ, λ0 = b[0], λ1 = a[1];
            }
          }
          ranges = range = null;
          return λ0 === Infinity || φ0 === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[λ0, φ0], [λ1, φ1]];
        };
      }();
      d3.geo.centroid = function(object) {
        d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
        d3.geo.stream(object, d3_geo_centroid);
        var x = d3_geo_centroidX2,
            y = d3_geo_centroidY2,
            z = d3_geo_centroidZ2,
            m = x * x + y * y + z * z;
        if (m < ε2) {
          x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
          if (d3_geo_centroidW1 < ε)
            x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
          m = x * x + y * y + z * z;
          if (m < ε2)
            return [NaN, NaN];
        }
        return [Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees];
      };
      var d3_geo_centroidW0,
          d3_geo_centroidW1,
          d3_geo_centroidX0,
          d3_geo_centroidY0,
          d3_geo_centroidZ0,
          d3_geo_centroidX1,
          d3_geo_centroidY1,
          d3_geo_centroidZ1,
          d3_geo_centroidX2,
          d3_geo_centroidY2,
          d3_geo_centroidZ2;
      var d3_geo_centroid = {
        sphere: d3_noop,
        point: d3_geo_centroidPoint,
        lineStart: d3_geo_centroidLineStart,
        lineEnd: d3_geo_centroidLineEnd,
        polygonStart: function() {
          d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
        },
        polygonEnd: function() {
          d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
        }
      };
      function d3_geo_centroidPoint(λ, φ) {
        λ *= d3_radians;
        var cosφ = Math.cos(φ *= d3_radians);
        d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
      }
      function d3_geo_centroidPointXYZ(x, y, z) {
        ++d3_geo_centroidW0;
        d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
        d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
        d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
      }
      function d3_geo_centroidLineStart() {
        var x0,
            y0,
            z0;
        d3_geo_centroid.point = function(λ, φ) {
          λ *= d3_radians;
          var cosφ = Math.cos(φ *= d3_radians);
          x0 = cosφ * Math.cos(λ);
          y0 = cosφ * Math.sin(λ);
          z0 = Math.sin(φ);
          d3_geo_centroid.point = nextPoint;
          d3_geo_centroidPointXYZ(x0, y0, z0);
        };
        function nextPoint(λ, φ) {
          λ *= d3_radians;
          var cosφ = Math.cos(φ *= d3_radians),
              x = cosφ * Math.cos(λ),
              y = cosφ * Math.sin(λ),
              z = Math.sin(φ),
              w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
          d3_geo_centroidW1 += w;
          d3_geo_centroidX1 += w * (x0 + (x0 = x));
          d3_geo_centroidY1 += w * (y0 + (y0 = y));
          d3_geo_centroidZ1 += w * (z0 + (z0 = z));
          d3_geo_centroidPointXYZ(x0, y0, z0);
        }
      }
      function d3_geo_centroidLineEnd() {
        d3_geo_centroid.point = d3_geo_centroidPoint;
      }
      function d3_geo_centroidRingStart() {
        var λ00,
            φ00,
            x0,
            y0,
            z0;
        d3_geo_centroid.point = function(λ, φ) {
          λ00 = λ, φ00 = φ;
          d3_geo_centroid.point = nextPoint;
          λ *= d3_radians;
          var cosφ = Math.cos(φ *= d3_radians);
          x0 = cosφ * Math.cos(λ);
          y0 = cosφ * Math.sin(λ);
          z0 = Math.sin(φ);
          d3_geo_centroidPointXYZ(x0, y0, z0);
        };
        d3_geo_centroid.lineEnd = function() {
          nextPoint(λ00, φ00);
          d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
          d3_geo_centroid.point = d3_geo_centroidPoint;
        };
        function nextPoint(λ, φ) {
          λ *= d3_radians;
          var cosφ = Math.cos(φ *= d3_radians),
              x = cosφ * Math.cos(λ),
              y = cosφ * Math.sin(λ),
              z = Math.sin(φ),
              cx = y0 * z - z0 * y,
              cy = z0 * x - x0 * z,
              cz = x0 * y - y0 * x,
              m = Math.sqrt(cx * cx + cy * cy + cz * cz),
              u = x0 * x + y0 * y + z0 * z,
              v = m && -d3_acos(u) / m,
              w = Math.atan2(m, u);
          d3_geo_centroidX2 += v * cx;
          d3_geo_centroidY2 += v * cy;
          d3_geo_centroidZ2 += v * cz;
          d3_geo_centroidW1 += w;
          d3_geo_centroidX1 += w * (x0 + (x0 = x));
          d3_geo_centroidY1 += w * (y0 + (y0 = y));
          d3_geo_centroidZ1 += w * (z0 + (z0 = z));
          d3_geo_centroidPointXYZ(x0, y0, z0);
        }
      }
      function d3_geo_compose(a, b) {
        function compose(x, y) {
          return x = a(x, y), b(x[0], x[1]);
        }
        if (a.invert && b.invert)
          compose.invert = function(x, y) {
            return x = b.invert(x, y), x && a.invert(x[0], x[1]);
          };
        return compose;
      }
      function d3_true() {
        return true;
      }
      function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
        var subject = [],
            clip = [];
        segments.forEach(function(segment) {
          if ((n = segment.length - 1) <= 0)
            return;
          var n,
              p0 = segment[0],
              p1 = segment[n];
          if (d3_geo_sphericalEqual(p0, p1)) {
            listener.lineStart();
            for (var i = 0; i < n; ++i)
              listener.point((p0 = segment[i])[0], p0[1]);
            listener.lineEnd();
            return;
          }
          var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true),
              b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
          a.o = b;
          subject.push(a);
          clip.push(b);
          a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
          b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
          a.o = b;
          subject.push(a);
          clip.push(b);
        });
        clip.sort(compare);
        d3_geo_clipPolygonLinkCircular(subject);
        d3_geo_clipPolygonLinkCircular(clip);
        if (!subject.length)
          return;
        for (var i = 0,
            entry = clipStartInside,
            n = clip.length; i < n; ++i) {
          clip[i].e = entry = !entry;
        }
        var start = subject[0],
            points,
            point;
        while (1) {
          var current = start,
              isSubject = true;
          while (current.v)
            if ((current = current.n) === start)
              return;
          points = current.z;
          listener.lineStart();
          do {
            current.v = current.o.v = true;
            if (current.e) {
              if (isSubject) {
                for (var i = 0,
                    n = points.length; i < n; ++i)
                  listener.point((point = points[i])[0], point[1]);
              } else {
                interpolate(current.x, current.n.x, 1, listener);
              }
              current = current.n;
            } else {
              if (isSubject) {
                points = current.p.z;
                for (var i = points.length - 1; i >= 0; --i)
                  listener.point((point = points[i])[0], point[1]);
              } else {
                interpolate(current.x, current.p.x, -1, listener);
              }
              current = current.p;
            }
            current = current.o;
            points = current.z;
            isSubject = !isSubject;
          } while (!current.v);
          listener.lineEnd();
        }
      }
      function d3_geo_clipPolygonLinkCircular(array) {
        if (!(n = array.length))
          return;
        var n,
            i = 0,
            a = array[0],
            b;
        while (++i < n) {
          a.n = b = array[i];
          b.p = a;
          a = b;
        }
        a.n = b = array[0];
        b.p = a;
      }
      function d3_geo_clipPolygonIntersection(point, points, other, entry) {
        this.x = point;
        this.z = points;
        this.o = other;
        this.e = entry;
        this.v = false;
        this.n = this.p = null;
      }
      function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
        return function(rotate, listener) {
          var line = clipLine(listener),
              rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
          var clip = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
              clip.point = pointRing;
              clip.lineStart = ringStart;
              clip.lineEnd = ringEnd;
              segments = [];
              polygon = [];
            },
            polygonEnd: function() {
              clip.point = point;
              clip.lineStart = lineStart;
              clip.lineEnd = lineEnd;
              segments = d3.merge(segments);
              var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
              if (segments.length) {
                if (!polygonStarted)
                  listener.polygonStart(), polygonStarted = true;
                d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
              } else if (clipStartInside) {
                if (!polygonStarted)
                  listener.polygonStart(), polygonStarted = true;
                listener.lineStart();
                interpolate(null, null, 1, listener);
                listener.lineEnd();
              }
              if (polygonStarted)
                listener.polygonEnd(), polygonStarted = false;
              segments = polygon = null;
            },
            sphere: function() {
              listener.polygonStart();
              listener.lineStart();
              interpolate(null, null, 1, listener);
              listener.lineEnd();
              listener.polygonEnd();
            }
          };
          function point(λ, φ) {
            var point = rotate(λ, φ);
            if (pointVisible(λ = point[0], φ = point[1]))
              listener.point(λ, φ);
          }
          function pointLine(λ, φ) {
            var point = rotate(λ, φ);
            line.point(point[0], point[1]);
          }
          function lineStart() {
            clip.point = pointLine;
            line.lineStart();
          }
          function lineEnd() {
            clip.point = point;
            line.lineEnd();
          }
          var segments;
          var buffer = d3_geo_clipBufferListener(),
              ringListener = clipLine(buffer),
              polygonStarted = false,
              polygon,
              ring;
          function pointRing(λ, φ) {
            ring.push([λ, φ]);
            var point = rotate(λ, φ);
            ringListener.point(point[0], point[1]);
          }
          function ringStart() {
            ringListener.lineStart();
            ring = [];
          }
          function ringEnd() {
            pointRing(ring[0][0], ring[0][1]);
            ringListener.lineEnd();
            var clean = ringListener.clean(),
                ringSegments = buffer.buffer(),
                segment,
                n = ringSegments.length;
            ring.pop();
            polygon.push(ring);
            ring = null;
            if (!n)
              return;
            if (clean & 1) {
              segment = ringSegments[0];
              var n = segment.length - 1,
                  i = -1,
                  point;
              if (n > 0) {
                if (!polygonStarted)
                  listener.polygonStart(), polygonStarted = true;
                listener.lineStart();
                while (++i < n)
                  listener.point((point = segment[i])[0], point[1]);
                listener.lineEnd();
              }
              return;
            }
            if (n > 1 && clean & 2)
              ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
            segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
          }
          return clip;
        };
      }
      function d3_geo_clipSegmentLength1(segment) {
        return segment.length > 1;
      }
      function d3_geo_clipBufferListener() {
        var lines = [],
            line;
        return {
          lineStart: function() {
            lines.push(line = []);
          },
          point: function(λ, φ) {
            line.push([λ, φ]);
          },
          lineEnd: d3_noop,
          buffer: function() {
            var buffer = lines;
            lines = [];
            line = null;
            return buffer;
          },
          rejoin: function() {
            if (lines.length > 1)
              lines.push(lines.pop().concat(lines.shift()));
          }
        };
      }
      function d3_geo_clipSort(a, b) {
        return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
      }
      var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [-π, -π / 2]);
      function d3_geo_clipAntimeridianLine(listener) {
        var λ0 = NaN,
            φ0 = NaN,
            sλ0 = NaN,
            clean;
        return {
          lineStart: function() {
            listener.lineStart();
            clean = 1;
          },
          point: function(λ1, φ1) {
            var sλ1 = λ1 > 0 ? π : -π,
                dλ = abs(λ1 - λ0);
            if (abs(dλ - π) < ε) {
              listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
              listener.point(sλ0, φ0);
              listener.lineEnd();
              listener.lineStart();
              listener.point(sλ1, φ0);
              listener.point(λ1, φ0);
              clean = 0;
            } else if (sλ0 !== sλ1 && dλ >= π) {
              if (abs(λ0 - sλ0) < ε)
                λ0 -= sλ0 * ε;
              if (abs(λ1 - sλ1) < ε)
                λ1 -= sλ1 * ε;
              φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
              listener.point(sλ0, φ0);
              listener.lineEnd();
              listener.lineStart();
              listener.point(sλ1, φ0);
              clean = 0;
            }
            listener.point(λ0 = λ1, φ0 = φ1);
            sλ0 = sλ1;
          },
          lineEnd: function() {
            listener.lineEnd();
            λ0 = φ0 = NaN;
          },
          clean: function() {
            return 2 - clean;
          }
        };
      }
      function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
        var cosφ0,
            cosφ1,
            sinλ0_λ1 = Math.sin(λ0 - λ1);
        return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
      }
      function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
        var φ;
        if (from == null) {
          φ = direction * halfπ;
          listener.point(-π, φ);
          listener.point(0, φ);
          listener.point(π, φ);
          listener.point(π, 0);
          listener.point(π, -φ);
          listener.point(0, -φ);
          listener.point(-π, -φ);
          listener.point(-π, 0);
          listener.point(-π, φ);
        } else if (abs(from[0] - to[0]) > ε) {
          var s = from[0] < to[0] ? π : -π;
          φ = direction * s / 2;
          listener.point(-s, φ);
          listener.point(0, φ);
          listener.point(s, φ);
        } else {
          listener.point(to[0], to[1]);
        }
      }
      function d3_geo_pointInPolygon(point, polygon) {
        var meridian = point[0],
            parallel = point[1],
            meridianNormal = [Math.sin(meridian), -Math.cos(meridian), 0],
            polarAngle = 0,
            winding = 0;
        d3_geo_areaRingSum.reset();
        for (var i = 0,
            n = polygon.length; i < n; ++i) {
          var ring = polygon[i],
              m = ring.length;
          if (!m)
            continue;
          var point0 = ring[0],
              λ0 = point0[0],
              φ0 = point0[1] / 2 + π / 4,
              sinφ0 = Math.sin(φ0),
              cosφ0 = Math.cos(φ0),
              j = 1;
          while (true) {
            if (j === m)
              j = 0;
            point = ring[j];
            var λ = point[0],
                φ = point[1] / 2 + π / 4,
                sinφ = Math.sin(φ),
                cosφ = Math.cos(φ),
                dλ = λ - λ0,
                sdλ = dλ >= 0 ? 1 : -1,
                adλ = sdλ * dλ,
                antimeridian = adλ > π,
                k = sinφ0 * sinφ;
            d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
            polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
            if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
              var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
              d3_geo_cartesianNormalize(arc);
              var intersection = d3_geo_cartesianCross(meridianNormal, arc);
              d3_geo_cartesianNormalize(intersection);
              var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
              if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
                winding += antimeridian ^ dλ >= 0 ? 1 : -1;
              }
            }
            if (!j++)
              break;
            λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
          }
        }
        return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < 0) ^ winding & 1;
      }
      function d3_geo_clipCircle(radius) {
        var cr = Math.cos(radius),
            smallRadius = cr > 0,
            notHemisphere = abs(cr) > ε,
            interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
        return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-π, radius - π]);
        function visible(λ, φ) {
          return Math.cos(λ) * Math.cos(φ) > cr;
        }
        function clipLine(listener) {
          var point0,
              c0,
              v0,
              v00,
              clean;
          return {
            lineStart: function() {
              v00 = v0 = false;
              clean = 1;
            },
            point: function(λ, φ) {
              var point1 = [λ, φ],
                  point2,
                  v = visible(λ, φ),
                  c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
              if (!point0 && (v00 = v0 = v))
                listener.lineStart();
              if (v !== v0) {
                point2 = intersect(point0, point1);
                if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
                  point1[0] += ε;
                  point1[1] += ε;
                  v = visible(point1[0], point1[1]);
                }
              }
              if (v !== v0) {
                clean = 0;
                if (v) {
                  listener.lineStart();
                  point2 = intersect(point1, point0);
                  listener.point(point2[0], point2[1]);
                } else {
                  point2 = intersect(point0, point1);
                  listener.point(point2[0], point2[1]);
                  listener.lineEnd();
                }
                point0 = point2;
              } else if (notHemisphere && point0 && smallRadius ^ v) {
                var t;
                if (!(c & c0) && (t = intersect(point1, point0, true))) {
                  clean = 0;
                  if (smallRadius) {
                    listener.lineStart();
                    listener.point(t[0][0], t[0][1]);
                    listener.point(t[1][0], t[1][1]);
                    listener.lineEnd();
                  } else {
                    listener.point(t[1][0], t[1][1]);
                    listener.lineEnd();
                    listener.lineStart();
                    listener.point(t[0][0], t[0][1]);
                  }
                }
              }
              if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
                listener.point(point1[0], point1[1]);
              }
              point0 = point1, v0 = v, c0 = c;
            },
            lineEnd: function() {
              if (v0)
                listener.lineEnd();
              point0 = null;
            },
            clean: function() {
              return clean | (v00 && v0) << 1;
            }
          };
        }
        function intersect(a, b, two) {
          var pa = d3_geo_cartesian(a),
              pb = d3_geo_cartesian(b);
          var n1 = [1, 0, 0],
              n2 = d3_geo_cartesianCross(pa, pb),
              n2n2 = d3_geo_cartesianDot(n2, n2),
              n1n2 = n2[0],
              determinant = n2n2 - n1n2 * n1n2;
          if (!determinant)
            return !two && a;
          var c1 = cr * n2n2 / determinant,
              c2 = -cr * n1n2 / determinant,
              n1xn2 = d3_geo_cartesianCross(n1, n2),
              A = d3_geo_cartesianScale(n1, c1),
              B = d3_geo_cartesianScale(n2, c2);
          d3_geo_cartesianAdd(A, B);
          var u = n1xn2,
              w = d3_geo_cartesianDot(A, u),
              uu = d3_geo_cartesianDot(u, u),
              t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
          if (t2 < 0)
            return;
          var t = Math.sqrt(t2),
              q = d3_geo_cartesianScale(u, (-w - t) / uu);
          d3_geo_cartesianAdd(q, A);
          q = d3_geo_spherical(q);
          if (!two)
            return q;
          var λ0 = a[0],
              λ1 = b[0],
              φ0 = a[1],
              φ1 = b[1],
              z;
          if (λ1 < λ0)
            z = λ0, λ0 = λ1, λ1 = z;
          var δλ = λ1 - λ0,
              polar = abs(δλ - π) < ε,
              meridian = polar || δλ < ε;
          if (!polar && φ1 < φ0)
            z = φ0, φ0 = φ1, φ1 = z;
          if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
            var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
            d3_geo_cartesianAdd(q1, A);
            return [q, d3_geo_spherical(q1)];
          }
        }
        function code(λ, φ) {
          var r = smallRadius ? radius : π - radius,
              code = 0;
          if (λ < -r)
            code |= 1;
          else if (λ > r)
            code |= 2;
          if (φ < -r)
            code |= 4;
          else if (φ > r)
            code |= 8;
          return code;
        }
      }
      function d3_geom_clipLine(x0, y0, x1, y1) {
        return function(line) {
          var a = line.a,
              b = line.b,
              ax = a.x,
              ay = a.y,
              bx = b.x,
              by = b.y,
              t0 = 0,
              t1 = 1,
              dx = bx - ax,
              dy = by - ay,
              r;
          r = x0 - ax;
          if (!dx && r > 0)
            return;
          r /= dx;
          if (dx < 0) {
            if (r < t0)
              return;
            if (r < t1)
              t1 = r;
          } else if (dx > 0) {
            if (r > t1)
              return;
            if (r > t0)
              t0 = r;
          }
          r = x1 - ax;
          if (!dx && r < 0)
            return;
          r /= dx;
          if (dx < 0) {
            if (r > t1)
              return;
            if (r > t0)
              t0 = r;
          } else if (dx > 0) {
            if (r < t0)
              return;
            if (r < t1)
              t1 = r;
          }
          r = y0 - ay;
          if (!dy && r > 0)
            return;
          r /= dy;
          if (dy < 0) {
            if (r < t0)
              return;
            if (r < t1)
              t1 = r;
          } else if (dy > 0) {
            if (r > t1)
              return;
            if (r > t0)
              t0 = r;
          }
          r = y1 - ay;
          if (!dy && r < 0)
            return;
          r /= dy;
          if (dy < 0) {
            if (r > t1)
              return;
            if (r > t0)
              t0 = r;
          } else if (dy > 0) {
            if (r < t0)
              return;
            if (r < t1)
              t1 = r;
          }
          if (t0 > 0)
            line.a = {
              x: ax + t0 * dx,
              y: ay + t0 * dy
            };
          if (t1 < 1)
            line.b = {
              x: ax + t1 * dx,
              y: ay + t1 * dy
            };
          return line;
        };
      }
      var d3_geo_clipExtentMAX = 1e9;
      d3.geo.clipExtent = function() {
        var x0,
            y0,
            x1,
            y1,
            stream,
            clip,
            clipExtent = {
              stream: function(output) {
                if (stream)
                  stream.valid = false;
                stream = clip(output);
                stream.valid = true;
                return stream;
              },
              extent: function(_) {
                if (!arguments.length)
                  return [[x0, y0], [x1, y1]];
                clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
                if (stream)
                  stream.valid = false, stream = null;
                return clipExtent;
              }
            };
        return clipExtent.extent([[0, 0], [960, 500]]);
      };
      function d3_geo_clipExtent(x0, y0, x1, y1) {
        return function(listener) {
          var listener_ = listener,
              bufferListener = d3_geo_clipBufferListener(),
              clipLine = d3_geom_clipLine(x0, y0, x1, y1),
              segments,
              polygon,
              ring;
          var clip = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
              listener = bufferListener;
              segments = [];
              polygon = [];
              clean = true;
            },
            polygonEnd: function() {
              listener = listener_;
              segments = d3.merge(segments);
              var clipStartInside = insidePolygon([x0, y1]),
                  inside = clean && clipStartInside,
                  visible = segments.length;
              if (inside || visible) {
                listener.polygonStart();
                if (inside) {
                  listener.lineStart();
                  interpolate(null, null, 1, listener);
                  listener.lineEnd();
                }
                if (visible) {
                  d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
                }
                listener.polygonEnd();
              }
              segments = polygon = ring = null;
            }
          };
          function insidePolygon(p) {
            var wn = 0,
                n = polygon.length,
                y = p[1];
            for (var i = 0; i < n; ++i) {
              for (var j = 1,
                  v = polygon[i],
                  m = v.length,
                  a = v[0],
                  b; j < m; ++j) {
                b = v[j];
                if (a[1] <= y) {
                  if (b[1] > y && d3_cross2d(a, b, p) > 0)
                    ++wn;
                } else {
                  if (b[1] <= y && d3_cross2d(a, b, p) < 0)
                    --wn;
                }
                a = b;
              }
            }
            return wn !== 0;
          }
          function interpolate(from, to, direction, listener) {
            var a = 0,
                a1 = 0;
            if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
              do {
                listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
              } while ((a = (a + direction + 4) % 4) !== a1);
            } else {
              listener.point(to[0], to[1]);
            }
          }
          function pointVisible(x, y) {
            return x0 <= x && x <= x1 && y0 <= y && y <= y1;
          }
          function point(x, y) {
            if (pointVisible(x, y))
              listener.point(x, y);
          }
          var x__,
              y__,
              v__,
              x_,
              y_,
              v_,
              first,
              clean;
          function lineStart() {
            clip.point = linePoint;
            if (polygon)
              polygon.push(ring = []);
            first = true;
            v_ = false;
            x_ = y_ = NaN;
          }
          function lineEnd() {
            if (segments) {
              linePoint(x__, y__);
              if (v__ && v_)
                bufferListener.rejoin();
              segments.push(bufferListener.buffer());
            }
            clip.point = point;
            if (v_)
              listener.lineEnd();
          }
          function linePoint(x, y) {
            x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
            y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
            var v = pointVisible(x, y);
            if (polygon)
              ring.push([x, y]);
            if (first) {
              x__ = x, y__ = y, v__ = v;
              first = false;
              if (v) {
                listener.lineStart();
                listener.point(x, y);
              }
            } else {
              if (v && v_)
                listener.point(x, y);
              else {
                var l = {
                  a: {
                    x: x_,
                    y: y_
                  },
                  b: {
                    x: x,
                    y: y
                  }
                };
                if (clipLine(l)) {
                  if (!v_) {
                    listener.lineStart();
                    listener.point(l.a.x, l.a.y);
                  }
                  listener.point(l.b.x, l.b.y);
                  if (!v)
                    listener.lineEnd();
                  clean = false;
                } else if (v) {
                  listener.lineStart();
                  listener.point(x, y);
                  clean = false;
                }
              }
            }
            x_ = x, y_ = y, v_ = v;
          }
          return clip;
        };
        function corner(p, direction) {
          return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
        }
        function compare(a, b) {
          return comparePoints(a.x, b.x);
        }
        function comparePoints(a, b) {
          var ca = corner(a, 1),
              cb = corner(b, 1);
          return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
        }
      }
      function d3_geo_conic(projectAt) {
        var φ0 = 0,
            φ1 = π / 3,
            m = d3_geo_projectionMutator(projectAt),
            p = m(φ0, φ1);
        p.parallels = function(_) {
          if (!arguments.length)
            return [φ0 / π * 180, φ1 / π * 180];
          return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
        };
        return p;
      }
      function d3_geo_conicEqualArea(φ0, φ1) {
        var sinφ0 = Math.sin(φ0),
            n = (sinφ0 + Math.sin(φ1)) / 2,
            C = 1 + sinφ0 * (2 * n - sinφ0),
            ρ0 = Math.sqrt(C) / n;
        function forward(λ, φ) {
          var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
          return [ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ)];
        }
        forward.invert = function(x, y) {
          var ρ0_y = ρ0 - y;
          return [Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n))];
        };
        return forward;
      }
      (d3.geo.conicEqualArea = function() {
        return d3_geo_conic(d3_geo_conicEqualArea);
      }).raw = d3_geo_conicEqualArea;
      d3.geo.albers = function() {
        return d3.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070);
      };
      d3.geo.albersUsa = function() {
        var lower48 = d3.geo.albers();
        var alaska = d3.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]);
        var hawaii = d3.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]);
        var point,
            pointStream = {point: function(x, y) {
                point = [x, y];
              }},
            lower48Point,
            alaskaPoint,
            hawaiiPoint;
        function albersUsa(coordinates) {
          var x = coordinates[0],
              y = coordinates[1];
          point = null;
          (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
          return point;
        }
        albersUsa.invert = function(coordinates) {
          var k = lower48.scale(),
              t = lower48.translate(),
              x = (coordinates[0] - t[0]) / k,
              y = (coordinates[1] - t[1]) / k;
          return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
        };
        albersUsa.stream = function(stream) {
          var lower48Stream = lower48.stream(stream),
              alaskaStream = alaska.stream(stream),
              hawaiiStream = hawaii.stream(stream);
          return {
            point: function(x, y) {
              lower48Stream.point(x, y);
              alaskaStream.point(x, y);
              hawaiiStream.point(x, y);
            },
            sphere: function() {
              lower48Stream.sphere();
              alaskaStream.sphere();
              hawaiiStream.sphere();
            },
            lineStart: function() {
              lower48Stream.lineStart();
              alaskaStream.lineStart();
              hawaiiStream.lineStart();
            },
            lineEnd: function() {
              lower48Stream.lineEnd();
              alaskaStream.lineEnd();
              hawaiiStream.lineEnd();
            },
            polygonStart: function() {
              lower48Stream.polygonStart();
              alaskaStream.polygonStart();
              hawaiiStream.polygonStart();
            },
            polygonEnd: function() {
              lower48Stream.polygonEnd();
              alaskaStream.polygonEnd();
              hawaiiStream.polygonEnd();
            }
          };
        };
        albersUsa.precision = function(_) {
          if (!arguments.length)
            return lower48.precision();
          lower48.precision(_);
          alaska.precision(_);
          hawaii.precision(_);
          return albersUsa;
        };
        albersUsa.scale = function(_) {
          if (!arguments.length)
            return lower48.scale();
          lower48.scale(_);
          alaska.scale(_ * .35);
          hawaii.scale(_);
          return albersUsa.translate(lower48.translate());
        };
        albersUsa.translate = function(_) {
          if (!arguments.length)
            return lower48.translate();
          var k = lower48.scale(),
              x = +_[0],
              y = +_[1];
          lower48Point = lower48.translate(_).clipExtent([[x - .455 * k, y - .238 * k], [x + .455 * k, y + .238 * k]]).stream(pointStream).point;
          alaskaPoint = alaska.translate([x - .307 * k, y + .201 * k]).clipExtent([[x - .425 * k + ε, y + .12 * k + ε], [x - .214 * k - ε, y + .234 * k - ε]]).stream(pointStream).point;
          hawaiiPoint = hawaii.translate([x - .205 * k, y + .212 * k]).clipExtent([[x - .214 * k + ε, y + .166 * k + ε], [x - .115 * k - ε, y + .234 * k - ε]]).stream(pointStream).point;
          return albersUsa;
        };
        return albersUsa.scale(1070);
      };
      var d3_geo_pathAreaSum,
          d3_geo_pathAreaPolygon,
          d3_geo_pathArea = {
            point: d3_noop,
            lineStart: d3_noop,
            lineEnd: d3_noop,
            polygonStart: function() {
              d3_geo_pathAreaPolygon = 0;
              d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
            },
            polygonEnd: function() {
              d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
              d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
            }
          };
      function d3_geo_pathAreaRingStart() {
        var x00,
            y00,
            x0,
            y0;
        d3_geo_pathArea.point = function(x, y) {
          d3_geo_pathArea.point = nextPoint;
          x00 = x0 = x, y00 = y0 = y;
        };
        function nextPoint(x, y) {
          d3_geo_pathAreaPolygon += y0 * x - x0 * y;
          x0 = x, y0 = y;
        }
        d3_geo_pathArea.lineEnd = function() {
          nextPoint(x00, y00);
        };
      }
      var d3_geo_pathBoundsX0,
          d3_geo_pathBoundsY0,
          d3_geo_pathBoundsX1,
          d3_geo_pathBoundsY1;
      var d3_geo_pathBounds = {
        point: d3_geo_pathBoundsPoint,
        lineStart: d3_noop,
        lineEnd: d3_noop,
        polygonStart: d3_noop,
        polygonEnd: d3_noop
      };
      function d3_geo_pathBoundsPoint(x, y) {
        if (x < d3_geo_pathBoundsX0)
          d3_geo_pathBoundsX0 = x;
        if (x > d3_geo_pathBoundsX1)
          d3_geo_pathBoundsX1 = x;
        if (y < d3_geo_pathBoundsY0)
          d3_geo_pathBoundsY0 = y;
        if (y > d3_geo_pathBoundsY1)
          d3_geo_pathBoundsY1 = y;
      }
      function d3_geo_pathBuffer() {
        var pointCircle = d3_geo_pathBufferCircle(4.5),
            buffer = [];
        var stream = {
          point: point,
          lineStart: function() {
            stream.point = pointLineStart;
          },
          lineEnd: lineEnd,
          polygonStart: function() {
            stream.lineEnd = lineEndPolygon;
          },
          polygonEnd: function() {
            stream.lineEnd = lineEnd;
            stream.point = point;
          },
          pointRadius: function(_) {
            pointCircle = d3_geo_pathBufferCircle(_);
            return stream;
          },
          result: function() {
            if (buffer.length) {
              var result = buffer.join("");
              buffer = [];
              return result;
            }
          }
        };
        function point(x, y) {
          buffer.push("M", x, ",", y, pointCircle);
        }
        function pointLineStart(x, y) {
          buffer.push("M", x, ",", y);
          stream.point = pointLine;
        }
        function pointLine(x, y) {
          buffer.push("L", x, ",", y);
        }
        function lineEnd() {
          stream.point = point;
        }
        function lineEndPolygon() {
          buffer.push("Z");
        }
        return stream;
      }
      function d3_geo_pathBufferCircle(radius) {
        return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
      }
      var d3_geo_pathCentroid = {
        point: d3_geo_pathCentroidPoint,
        lineStart: d3_geo_pathCentroidLineStart,
        lineEnd: d3_geo_pathCentroidLineEnd,
        polygonStart: function() {
          d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
        },
        polygonEnd: function() {
          d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
          d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
          d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
        }
      };
      function d3_geo_pathCentroidPoint(x, y) {
        d3_geo_centroidX0 += x;
        d3_geo_centroidY0 += y;
        ++d3_geo_centroidZ0;
      }
      function d3_geo_pathCentroidLineStart() {
        var x0,
            y0;
        d3_geo_pathCentroid.point = function(x, y) {
          d3_geo_pathCentroid.point = nextPoint;
          d3_geo_pathCentroidPoint(x0 = x, y0 = y);
        };
        function nextPoint(x, y) {
          var dx = x - x0,
              dy = y - y0,
              z = Math.sqrt(dx * dx + dy * dy);
          d3_geo_centroidX1 += z * (x0 + x) / 2;
          d3_geo_centroidY1 += z * (y0 + y) / 2;
          d3_geo_centroidZ1 += z;
          d3_geo_pathCentroidPoint(x0 = x, y0 = y);
        }
      }
      function d3_geo_pathCentroidLineEnd() {
        d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
      }
      function d3_geo_pathCentroidRingStart() {
        var x00,
            y00,
            x0,
            y0;
        d3_geo_pathCentroid.point = function(x, y) {
          d3_geo_pathCentroid.point = nextPoint;
          d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
        };
        function nextPoint(x, y) {
          var dx = x - x0,
              dy = y - y0,
              z = Math.sqrt(dx * dx + dy * dy);
          d3_geo_centroidX1 += z * (x0 + x) / 2;
          d3_geo_centroidY1 += z * (y0 + y) / 2;
          d3_geo_centroidZ1 += z;
          z = y0 * x - x0 * y;
          d3_geo_centroidX2 += z * (x0 + x);
          d3_geo_centroidY2 += z * (y0 + y);
          d3_geo_centroidZ2 += z * 3;
          d3_geo_pathCentroidPoint(x0 = x, y0 = y);
        }
        d3_geo_pathCentroid.lineEnd = function() {
          nextPoint(x00, y00);
        };
      }
      function d3_geo_pathContext(context) {
        var pointRadius = 4.5;
        var stream = {
          point: point,
          lineStart: function() {
            stream.point = pointLineStart;
          },
          lineEnd: lineEnd,
          polygonStart: function() {
            stream.lineEnd = lineEndPolygon;
          },
          polygonEnd: function() {
            stream.lineEnd = lineEnd;
            stream.point = point;
          },
          pointRadius: function(_) {
            pointRadius = _;
            return stream;
          },
          result: d3_noop
        };
        function point(x, y) {
          context.moveTo(x + pointRadius, y);
          context.arc(x, y, pointRadius, 0, τ);
        }
        function pointLineStart(x, y) {
          context.moveTo(x, y);
          stream.point = pointLine;
        }
        function pointLine(x, y) {
          context.lineTo(x, y);
        }
        function lineEnd() {
          stream.point = point;
        }
        function lineEndPolygon() {
          context.closePath();
        }
        return stream;
      }
      function d3_geo_resample(project) {
        var δ2 = .5,
            cosMinDistance = Math.cos(30 * d3_radians),
            maxDepth = 16;
        function resample(stream) {
          return (maxDepth ? resampleRecursive : resampleNone)(stream);
        }
        function resampleNone(stream) {
          return d3_geo_transformPoint(stream, function(x, y) {
            x = project(x, y);
            stream.point(x[0], x[1]);
          });
        }
        function resampleRecursive(stream) {
          var λ00,
              φ00,
              x00,
              y00,
              a00,
              b00,
              c00,
              λ0,
              x0,
              y0,
              a0,
              b0,
              c0;
          var resample = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
              stream.polygonStart();
              resample.lineStart = ringStart;
            },
            polygonEnd: function() {
              stream.polygonEnd();
              resample.lineStart = lineStart;
            }
          };
          function point(x, y) {
            x = project(x, y);
            stream.point(x[0], x[1]);
          }
          function lineStart() {
            x0 = NaN;
            resample.point = linePoint;
            stream.lineStart();
          }
          function linePoint(λ, φ) {
            var c = d3_geo_cartesian([λ, φ]),
                p = project(λ, φ);
            resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
            stream.point(x0, y0);
          }
          function lineEnd() {
            resample.point = point;
            stream.lineEnd();
          }
          function ringStart() {
            lineStart();
            resample.point = ringPoint;
            resample.lineEnd = ringEnd;
          }
          function ringPoint(λ, φ) {
            linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
            resample.point = linePoint;
          }
          function ringEnd() {
            resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
            resample.lineEnd = lineEnd;
            lineEnd();
          }
          return resample;
        }
        function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
          var dx = x1 - x0,
              dy = y1 - y0,
              d2 = dx * dx + dy * dy;
          if (d2 > 4 * δ2 && depth--) {
            var a = a0 + a1,
                b = b0 + b1,
                c = c0 + c1,
                m = Math.sqrt(a * a + b * b + c * c),
                φ2 = Math.asin(c /= m),
                λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a),
                p = project(λ2, φ2),
                x2 = p[0],
                y2 = p[1],
                dx2 = x2 - x0,
                dy2 = y2 - y0,
                dz = dy * dx2 - dx * dy2;
            if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
              resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
              stream.point(x2, y2);
              resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
            }
          }
        }
        resample.precision = function(_) {
          if (!arguments.length)
            return Math.sqrt(δ2);
          maxDepth = (δ2 = _ * _) > 0 && 16;
          return resample;
        };
        return resample;
      }
      d3.geo.path = function() {
        var pointRadius = 4.5,
            projection,
            context,
            projectStream,
            contextStream,
            cacheStream;
        function path(object) {
          if (object) {
            if (typeof pointRadius === "function")
              contextStream.pointRadius(+pointRadius.apply(this, arguments));
            if (!cacheStream || !cacheStream.valid)
              cacheStream = projectStream(contextStream);
            d3.geo.stream(object, cacheStream);
          }
          return contextStream.result();
        }
        path.area = function(object) {
          d3_geo_pathAreaSum = 0;
          d3.geo.stream(object, projectStream(d3_geo_pathArea));
          return d3_geo_pathAreaSum;
        };
        path.centroid = function(object) {
          d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
          d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
          return d3_geo_centroidZ2 ? [d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2] : d3_geo_centroidZ1 ? [d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1] : d3_geo_centroidZ0 ? [d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0] : [NaN, NaN];
        };
        path.bounds = function(object) {
          d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
          d3.geo.stream(object, projectStream(d3_geo_pathBounds));
          return [[d3_geo_pathBoundsX0, d3_geo_pathBoundsY0], [d3_geo_pathBoundsX1, d3_geo_pathBoundsY1]];
        };
        path.projection = function(_) {
          if (!arguments.length)
            return projection;
          projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
          return reset();
        };
        path.context = function(_) {
          if (!arguments.length)
            return context;
          contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
          if (typeof pointRadius !== "function")
            contextStream.pointRadius(pointRadius);
          return reset();
        };
        path.pointRadius = function(_) {
          if (!arguments.length)
            return pointRadius;
          pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
          return path;
        };
        function reset() {
          cacheStream = null;
          return path;
        }
        return path.projection(d3.geo.albersUsa()).context(null);
      };
      function d3_geo_pathProjectStream(project) {
        var resample = d3_geo_resample(function(x, y) {
          return project([x * d3_degrees, y * d3_degrees]);
        });
        return function(stream) {
          return d3_geo_projectionRadians(resample(stream));
        };
      }
      d3.geo.transform = function(methods) {
        return {stream: function(stream) {
            var transform = new d3_geo_transform(stream);
            for (var k in methods)
              transform[k] = methods[k];
            return transform;
          }};
      };
      function d3_geo_transform(stream) {
        this.stream = stream;
      }
      d3_geo_transform.prototype = {
        point: function(x, y) {
          this.stream.point(x, y);
        },
        sphere: function() {
          this.stream.sphere();
        },
        lineStart: function() {
          this.stream.lineStart();
        },
        lineEnd: function() {
          this.stream.lineEnd();
        },
        polygonStart: function() {
          this.stream.polygonStart();
        },
        polygonEnd: function() {
          this.stream.polygonEnd();
        }
      };
      function d3_geo_transformPoint(stream, point) {
        return {
          point: point,
          sphere: function() {
            stream.sphere();
          },
          lineStart: function() {
            stream.lineStart();
          },
          lineEnd: function() {
            stream.lineEnd();
          },
          polygonStart: function() {
            stream.polygonStart();
          },
          polygonEnd: function() {
            stream.polygonEnd();
          }
        };
      }
      d3.geo.projection = d3_geo_projection;
      d3.geo.projectionMutator = d3_geo_projectionMutator;
      function d3_geo_projection(project) {
        return d3_geo_projectionMutator(function() {
          return project;
        })();
      }
      function d3_geo_projectionMutator(projectAt) {
        var project,
            rotate,
            projectRotate,
            projectResample = d3_geo_resample(function(x, y) {
              x = project(x, y);
              return [x[0] * k + δx, δy - x[1] * k];
            }),
            k = 150,
            x = 480,
            y = 250,
            λ = 0,
            φ = 0,
            δλ = 0,
            δφ = 0,
            δγ = 0,
            δx,
            δy,
            preclip = d3_geo_clipAntimeridian,
            postclip = d3_identity,
            clipAngle = null,
            clipExtent = null,
            stream;
        function projection(point) {
          point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
          return [point[0] * k + δx, δy - point[1] * k];
        }
        function invert(point) {
          point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
          return point && [point[0] * d3_degrees, point[1] * d3_degrees];
        }
        projection.stream = function(output) {
          if (stream)
            stream.valid = false;
          stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
          stream.valid = true;
          return stream;
        };
        projection.clipAngle = function(_) {
          if (!arguments.length)
            return clipAngle;
          preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
          return invalidate();
        };
        projection.clipExtent = function(_) {
          if (!arguments.length)
            return clipExtent;
          clipExtent = _;
          postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
          return invalidate();
        };
        projection.scale = function(_) {
          if (!arguments.length)
            return k;
          k = +_;
          return reset();
        };
        projection.translate = function(_) {
          if (!arguments.length)
            return [x, y];
          x = +_[0];
          y = +_[1];
          return reset();
        };
        projection.center = function(_) {
          if (!arguments.length)
            return [λ * d3_degrees, φ * d3_degrees];
          λ = _[0] % 360 * d3_radians;
          φ = _[1] % 360 * d3_radians;
          return reset();
        };
        projection.rotate = function(_) {
          if (!arguments.length)
            return [δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees];
          δλ = _[0] % 360 * d3_radians;
          δφ = _[1] % 360 * d3_radians;
          δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
          return reset();
        };
        d3.rebind(projection, projectResample, "precision");
        function reset() {
          projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
          var center = project(λ, φ);
          δx = x - center[0] * k;
          δy = y + center[1] * k;
          return invalidate();
        }
        function invalidate() {
          if (stream)
            stream.valid = false, stream = null;
          return projection;
        }
        return function() {
          project = projectAt.apply(this, arguments);
          projection.invert = project.invert && invert;
          return reset();
        };
      }
      function d3_geo_projectionRadians(stream) {
        return d3_geo_transformPoint(stream, function(x, y) {
          stream.point(x * d3_radians, y * d3_radians);
        });
      }
      function d3_geo_equirectangular(λ, φ) {
        return [λ, φ];
      }
      (d3.geo.equirectangular = function() {
        return d3_geo_projection(d3_geo_equirectangular);
      }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
      d3.geo.rotation = function(rotate) {
        rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
        function forward(coordinates) {
          coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
          return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
        }
        forward.invert = function(coordinates) {
          coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
          return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
        };
        return forward;
      };
      function d3_geo_identityRotation(λ, φ) {
        return [λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ];
      }
      d3_geo_identityRotation.invert = d3_geo_equirectangular;
      function d3_geo_rotation(δλ, δφ, δγ) {
        return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
      }
      function d3_geo_forwardRotationλ(δλ) {
        return function(λ, φ) {
          return λ += δλ, [λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ];
        };
      }
      function d3_geo_rotationλ(δλ) {
        var rotation = d3_geo_forwardRotationλ(δλ);
        rotation.invert = d3_geo_forwardRotationλ(-δλ);
        return rotation;
      }
      function d3_geo_rotationφγ(δφ, δγ) {
        var cosδφ = Math.cos(δφ),
            sinδφ = Math.sin(δφ),
            cosδγ = Math.cos(δγ),
            sinδγ = Math.sin(δγ);
        function rotation(λ, φ) {
          var cosφ = Math.cos(φ),
              x = Math.cos(λ) * cosφ,
              y = Math.sin(λ) * cosφ,
              z = Math.sin(φ),
              k = z * cosδφ + x * sinδφ;
          return [Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ)];
        }
        rotation.invert = function(λ, φ) {
          var cosφ = Math.cos(φ),
              x = Math.cos(λ) * cosφ,
              y = Math.sin(λ) * cosφ,
              z = Math.sin(φ),
              k = z * cosδγ - y * sinδγ;
          return [Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ)];
        };
        return rotation;
      }
      d3.geo.circle = function() {
        var origin = [0, 0],
            angle,
            precision = 6,
            interpolate;
        function circle() {
          var center = typeof origin === "function" ? origin.apply(this, arguments) : origin,
              rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert,
              ring = [];
          interpolate(null, null, 1, {point: function(x, y) {
              ring.push(x = rotate(x, y));
              x[0] *= d3_degrees, x[1] *= d3_degrees;
            }});
          return {
            type: "Polygon",
            coordinates: [ring]
          };
        }
        circle.origin = function(x) {
          if (!arguments.length)
            return origin;
          origin = x;
          return circle;
        };
        circle.angle = function(x) {
          if (!arguments.length)
            return angle;
          interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
          return circle;
        };
        circle.precision = function(_) {
          if (!arguments.length)
            return precision;
          interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
          return circle;
        };
        return circle.angle(90);
      };
      function d3_geo_circleInterpolate(radius, precision) {
        var cr = Math.cos(radius),
            sr = Math.sin(radius);
        return function(from, to, direction, listener) {
          var step = direction * precision;
          if (from != null) {
            from = d3_geo_circleAngle(cr, from);
            to = d3_geo_circleAngle(cr, to);
            if (direction > 0 ? from < to : from > to)
              from += direction * τ;
          } else {
            from = radius + direction * τ;
            to = radius - .5 * step;
          }
          for (var point,
              t = from; direction > 0 ? t > to : t < to; t -= step) {
            listener.point((point = d3_geo_spherical([cr, -sr * Math.cos(t), -sr * Math.sin(t)]))[0], point[1]);
          }
        };
      }
      function d3_geo_circleAngle(cr, point) {
        var a = d3_geo_cartesian(point);
        a[0] -= cr;
        d3_geo_cartesianNormalize(a);
        var angle = d3_acos(-a[1]);
        return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
      }
      d3.geo.distance = function(a, b) {
        var Δλ = (b[0] - a[0]) * d3_radians,
            φ0 = a[1] * d3_radians,
            φ1 = b[1] * d3_radians,
            sinΔλ = Math.sin(Δλ),
            cosΔλ = Math.cos(Δλ),
            sinφ0 = Math.sin(φ0),
            cosφ0 = Math.cos(φ0),
            sinφ1 = Math.sin(φ1),
            cosφ1 = Math.cos(φ1),
            t;
        return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
      };
      d3.geo.graticule = function() {
        var x1,
            x0,
            X1,
            X0,
            y1,
            y0,
            Y1,
            Y0,
            dx = 10,
            dy = dx,
            DX = 90,
            DY = 360,
            x,
            y,
            X,
            Y,
            precision = 2.5;
        function graticule() {
          return {
            type: "MultiLineString",
            coordinates: lines()
          };
        }
        function lines() {
          return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
            return abs(x % DX) > ε;
          }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
            return abs(y % DY) > ε;
          }).map(y));
        }
        graticule.lines = function() {
          return lines().map(function(coordinates) {
            return {
              type: "LineString",
              coordinates: coordinates
            };
          });
        };
        graticule.outline = function() {
          return {
            type: "Polygon",
            coordinates: [X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1))]
          };
        };
        graticule.extent = function(_) {
          if (!arguments.length)
            return graticule.minorExtent();
          return graticule.majorExtent(_).minorExtent(_);
        };
        graticule.majorExtent = function(_) {
          if (!arguments.length)
            return [[X0, Y0], [X1, Y1]];
          X0 = +_[0][0], X1 = +_[1][0];
          Y0 = +_[0][1], Y1 = +_[1][1];
          if (X0 > X1)
            _ = X0, X0 = X1, X1 = _;
          if (Y0 > Y1)
            _ = Y0, Y0 = Y1, Y1 = _;
          return graticule.precision(precision);
        };
        graticule.minorExtent = function(_) {
          if (!arguments.length)
            return [[x0, y0], [x1, y1]];
          x0 = +_[0][0], x1 = +_[1][0];
          y0 = +_[0][1], y1 = +_[1][1];
          if (x0 > x1)
            _ = x0, x0 = x1, x1 = _;
          if (y0 > y1)
            _ = y0, y0 = y1, y1 = _;
          return graticule.precision(precision);
        };
        graticule.step = function(_) {
          if (!arguments.length)
            return graticule.minorStep();
          return graticule.majorStep(_).minorStep(_);
        };
        graticule.majorStep = function(_) {
          if (!arguments.length)
            return [DX, DY];
          DX = +_[0], DY = +_[1];
          return graticule;
        };
        graticule.minorStep = function(_) {
          if (!arguments.length)
            return [dx, dy];
          dx = +_[0], dy = +_[1];
          return graticule;
        };
        graticule.precision = function(_) {
          if (!arguments.length)
            return precision;
          precision = +_;
          x = d3_geo_graticuleX(y0, y1, 90);
          y = d3_geo_graticuleY(x0, x1, precision);
          X = d3_geo_graticuleX(Y0, Y1, 90);
          Y = d3_geo_graticuleY(X0, X1, precision);
          return graticule;
        };
        return graticule.majorExtent([[-180, -90 + ε], [180, 90 - ε]]).minorExtent([[-180, -80 - ε], [180, 80 + ε]]);
      };
      function d3_geo_graticuleX(y0, y1, dy) {
        var y = d3.range(y0, y1 - ε, dy).concat(y1);
        return function(x) {
          return y.map(function(y) {
            return [x, y];
          });
        };
      }
      function d3_geo_graticuleY(x0, x1, dx) {
        var x = d3.range(x0, x1 - ε, dx).concat(x1);
        return function(y) {
          return x.map(function(x) {
            return [x, y];
          });
        };
      }
      function d3_source(d) {
        return d.source;
      }
      function d3_target(d) {
        return d.target;
      }
      d3.geo.greatArc = function() {
        var source = d3_source,
            source_,
            target = d3_target,
            target_;
        function greatArc() {
          return {
            type: "LineString",
            coordinates: [source_ || source.apply(this, arguments), target_ || target.apply(this, arguments)]
          };
        }
        greatArc.distance = function() {
          return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
        };
        greatArc.source = function(_) {
          if (!arguments.length)
            return source;
          source = _, source_ = typeof _ === "function" ? null : _;
          return greatArc;
        };
        greatArc.target = function(_) {
          if (!arguments.length)
            return target;
          target = _, target_ = typeof _ === "function" ? null : _;
          return greatArc;
        };
        greatArc.precision = function() {
          return arguments.length ? greatArc : 0;
        };
        return greatArc;
      };
      d3.geo.interpolate = function(source, target) {
        return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
      };
      function d3_geo_interpolate(x0, y0, x1, y1) {
        var cy0 = Math.cos(y0),
            sy0 = Math.sin(y0),
            cy1 = Math.cos(y1),
            sy1 = Math.sin(y1),
            kx0 = cy0 * Math.cos(x0),
            ky0 = cy0 * Math.sin(x0),
            kx1 = cy1 * Math.cos(x1),
            ky1 = cy1 * Math.sin(x1),
            d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))),
            k = 1 / Math.sin(d);
        var interpolate = d ? function(t) {
          var B = Math.sin(t *= d) * k,
              A = Math.sin(d - t) * k,
              x = A * kx0 + B * kx1,
              y = A * ky0 + B * ky1,
              z = A * sy0 + B * sy1;
          return [Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees];
        } : function() {
          return [x0 * d3_degrees, y0 * d3_degrees];
        };
        interpolate.distance = d;
        return interpolate;
      }
      d3.geo.length = function(object) {
        d3_geo_lengthSum = 0;
        d3.geo.stream(object, d3_geo_length);
        return d3_geo_lengthSum;
      };
      var d3_geo_lengthSum;
      var d3_geo_length = {
        sphere: d3_noop,
        point: d3_noop,
        lineStart: d3_geo_lengthLineStart,
        lineEnd: d3_noop,
        polygonStart: d3_noop,
        polygonEnd: d3_noop
      };
      function d3_geo_lengthLineStart() {
        var λ0,
            sinφ0,
            cosφ0;
        d3_geo_length.point = function(λ, φ) {
          λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
          d3_geo_length.point = nextPoint;
        };
        d3_geo_length.lineEnd = function() {
          d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
        };
        function nextPoint(λ, φ) {
          var sinφ = Math.sin(φ *= d3_radians),
              cosφ = Math.cos(φ),
              t = abs((λ *= d3_radians) - λ0),
              cosΔλ = Math.cos(t);
          d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
          λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
        }
      }
      function d3_geo_azimuthal(scale, angle) {
        function azimuthal(λ, φ) {
          var cosλ = Math.cos(λ),
              cosφ = Math.cos(φ),
              k = scale(cosλ * cosφ);
          return [k * cosφ * Math.sin(λ), k * Math.sin(φ)];
        }
        azimuthal.invert = function(x, y) {
          var ρ = Math.sqrt(x * x + y * y),
              c = angle(ρ),
              sinc = Math.sin(c),
              cosc = Math.cos(c);
          return [Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ)];
        };
        return azimuthal;
      }
      var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
        return Math.sqrt(2 / (1 + cosλcosφ));
      }, function(ρ) {
        return 2 * Math.asin(ρ / 2);
      });
      (d3.geo.azimuthalEqualArea = function() {
        return d3_geo_projection(d3_geo_azimuthalEqualArea);
      }).raw = d3_geo_azimuthalEqualArea;
      var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
        var c = Math.acos(cosλcosφ);
        return c && c / Math.sin(c);
      }, d3_identity);
      (d3.geo.azimuthalEquidistant = function() {
        return d3_geo_projection(d3_geo_azimuthalEquidistant);
      }).raw = d3_geo_azimuthalEquidistant;
      function d3_geo_conicConformal(φ0, φ1) {
        var cosφ0 = Math.cos(φ0),
            t = function(φ) {
              return Math.tan(π / 4 + φ / 2);
            },
            n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)),
            F = cosφ0 * Math.pow(t(φ0), n) / n;
        if (!n)
          return d3_geo_mercator;
        function forward(λ, φ) {
          if (F > 0) {
            if (φ < -halfπ + ε)
              φ = -halfπ + ε;
          } else {
            if (φ > halfπ - ε)
              φ = halfπ - ε;
          }
          var ρ = F / Math.pow(t(φ), n);
          return [ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ)];
        }
        forward.invert = function(x, y) {
          var ρ0_y = F - y,
              ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
          return [Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ];
        };
        return forward;
      }
      (d3.geo.conicConformal = function() {
        return d3_geo_conic(d3_geo_conicConformal);
      }).raw = d3_geo_conicConformal;
      function d3_geo_conicEquidistant(φ0, φ1) {
        var cosφ0 = Math.cos(φ0),
            n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0),
            G = cosφ0 / n + φ0;
        if (abs(n) < ε)
          return d3_geo_equirectangular;
        function forward(λ, φ) {
          var ρ = G - φ;
          return [ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ)];
        }
        forward.invert = function(x, y) {
          var ρ0_y = G - y;
          return [Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y)];
        };
        return forward;
      }
      (d3.geo.conicEquidistant = function() {
        return d3_geo_conic(d3_geo_conicEquidistant);
      }).raw = d3_geo_conicEquidistant;
      var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
        return 1 / cosλcosφ;
      }, Math.atan);
      (d3.geo.gnomonic = function() {
        return d3_geo_projection(d3_geo_gnomonic);
      }).raw = d3_geo_gnomonic;
      function d3_geo_mercator(λ, φ) {
        return [λ, Math.log(Math.tan(π / 4 + φ / 2))];
      }
      d3_geo_mercator.invert = function(x, y) {
        return [x, 2 * Math.atan(Math.exp(y)) - halfπ];
      };
      function d3_geo_mercatorProjection(project) {
        var m = d3_geo_projection(project),
            scale = m.scale,
            translate = m.translate,
            clipExtent = m.clipExtent,
            clipAuto;
        m.scale = function() {
          var v = scale.apply(m, arguments);
          return v === m ? clipAuto ? m.clipExtent(null) : m : v;
        };
        m.translate = function() {
          var v = translate.apply(m, arguments);
          return v === m ? clipAuto ? m.clipExtent(null) : m : v;
        };
        m.clipExtent = function(_) {
          var v = clipExtent.apply(m, arguments);
          if (v === m) {
            if (clipAuto = _ == null) {
              var k = π * scale(),
                  t = translate();
              clipExtent([[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]]);
            }
          } else if (clipAuto) {
            v = null;
          }
          return v;
        };
        return m.clipExtent(null);
      }
      (d3.geo.mercator = function() {
        return d3_geo_mercatorProjection(d3_geo_mercator);
      }).raw = d3_geo_mercator;
      var d3_geo_orthographic = d3_geo_azimuthal(function() {
        return 1;
      }, Math.asin);
      (d3.geo.orthographic = function() {
        return d3_geo_projection(d3_geo_orthographic);
      }).raw = d3_geo_orthographic;
      var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
        return 1 / (1 + cosλcosφ);
      }, function(ρ) {
        return 2 * Math.atan(ρ);
      });
      (d3.geo.stereographic = function() {
        return d3_geo_projection(d3_geo_stereographic);
      }).raw = d3_geo_stereographic;
      function d3_geo_transverseMercator(λ, φ) {
        return [Math.log(Math.tan(π / 4 + φ / 2)), -λ];
      }
      d3_geo_transverseMercator.invert = function(x, y) {
        return [-y, 2 * Math.atan(Math.exp(x)) - halfπ];
      };
      (d3.geo.transverseMercator = function() {
        var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator),
            center = projection.center,
            rotate = projection.rotate;
        projection.center = function(_) {
          return _ ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
        };
        projection.rotate = function(_) {
          return _ ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
        };
        return rotate([0, 0, 90]);
      }).raw = d3_geo_transverseMercator;
      d3.geom = {};
      function d3_geom_pointX(d) {
        return d[0];
      }
      function d3_geom_pointY(d) {
        return d[1];
      }
      d3.geom.hull = function(vertices) {
        var x = d3_geom_pointX,
            y = d3_geom_pointY;
        if (arguments.length)
          return hull(vertices);
        function hull(data) {
          if (data.length < 3)
            return [];
          var fx = d3_functor(x),
              fy = d3_functor(y),
              i,
              n = data.length,
              points = [],
              flippedPoints = [];
          for (i = 0; i < n; i++) {
            points.push([+fx.call(this, data[i], i), +fy.call(this, data[i], i), i]);
          }
          points.sort(d3_geom_hullOrder);
          for (i = 0; i < n; i++)
            flippedPoints.push([points[i][0], -points[i][1]]);
          var upper = d3_geom_hullUpper(points),
              lower = d3_geom_hullUpper(flippedPoints);
          var skipLeft = lower[0] === upper[0],
              skipRight = lower[lower.length - 1] === upper[upper.length - 1],
              polygon = [];
          for (i = upper.length - 1; i >= 0; --i)
            polygon.push(data[points[upper[i]][2]]);
          for (i = +skipLeft; i < lower.length - skipRight; ++i)
            polygon.push(data[points[lower[i]][2]]);
          return polygon;
        }
        hull.x = function(_) {
          return arguments.length ? (x = _, hull) : x;
        };
        hull.y = function(_) {
          return arguments.length ? (y = _, hull) : y;
        };
        return hull;
      };
      function d3_geom_hullUpper(points) {
        var n = points.length,
            hull = [0, 1],
            hs = 2;
        for (var i = 2; i < n; i++) {
          while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0)
            --hs;
          hull[hs++] = i;
        }
        return hull.slice(0, hs);
      }
      function d3_geom_hullOrder(a, b) {
        return a[0] - b[0] || a[1] - b[1];
      }
      d3.geom.polygon = function(coordinates) {
        d3_subclass(coordinates, d3_geom_polygonPrototype);
        return coordinates;
      };
      var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
      d3_geom_polygonPrototype.area = function() {
        var i = -1,
            n = this.length,
            a,
            b = this[n - 1],
            area = 0;
        while (++i < n) {
          a = b;
          b = this[i];
          area += a[1] * b[0] - a[0] * b[1];
        }
        return area * .5;
      };
      d3_geom_polygonPrototype.centroid = function(k) {
        var i = -1,
            n = this.length,
            x = 0,
            y = 0,
            a,
            b = this[n - 1],
            c;
        if (!arguments.length)
          k = -1 / (6 * this.area());
        while (++i < n) {
          a = b;
          b = this[i];
          c = a[0] * b[1] - b[0] * a[1];
          x += (a[0] + b[0]) * c;
          y += (a[1] + b[1]) * c;
        }
        return [x * k, y * k];
      };
      d3_geom_polygonPrototype.clip = function(subject) {
        var input,
            closed = d3_geom_polygonClosed(subject),
            i = -1,
            n = this.length - d3_geom_polygonClosed(this),
            j,
            m,
            a = this[n - 1],
            b,
            c,
            d;
        while (++i < n) {
          input = subject.slice();
          subject.length = 0;
          b = this[i];
          c = input[(m = input.length - closed) - 1];
          j = -1;
          while (++j < m) {
            d = input[j];
            if (d3_geom_polygonInside(d, a, b)) {
              if (!d3_geom_polygonInside(c, a, b)) {
                subject.push(d3_geom_polygonIntersect(c, d, a, b));
              }
              subject.push(d);
            } else if (d3_geom_polygonInside(c, a, b)) {
              subject.push(d3_geom_polygonIntersect(c, d, a, b));
            }
            c = d;
          }
          if (closed)
            subject.push(subject[0]);
          a = b;
        }
        return subject;
      };
      function d3_geom_polygonInside(p, a, b) {
        return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
      }
      function d3_geom_polygonIntersect(c, d, a, b) {
        var x1 = c[0],
            x3 = a[0],
            x21 = d[0] - x1,
            x43 = b[0] - x3,
            y1 = c[1],
            y3 = a[1],
            y21 = d[1] - y1,
            y43 = b[1] - y3,
            ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
        return [x1 + ua * x21, y1 + ua * y21];
      }
      function d3_geom_polygonClosed(coordinates) {
        var a = coordinates[0],
            b = coordinates[coordinates.length - 1];
        return !(a[0] - b[0] || a[1] - b[1]);
      }
      var d3_geom_voronoiEdges,
          d3_geom_voronoiCells,
          d3_geom_voronoiBeaches,
          d3_geom_voronoiBeachPool = [],
          d3_geom_voronoiFirstCircle,
          d3_geom_voronoiCircles,
          d3_geom_voronoiCirclePool = [];
      function d3_geom_voronoiBeach() {
        d3_geom_voronoiRedBlackNode(this);
        this.edge = this.site = this.circle = null;
      }
      function d3_geom_voronoiCreateBeach(site) {
        var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
        beach.site = site;
        return beach;
      }
      function d3_geom_voronoiDetachBeach(beach) {
        d3_geom_voronoiDetachCircle(beach);
        d3_geom_voronoiBeaches.remove(beach);
        d3_geom_voronoiBeachPool.push(beach);
        d3_geom_voronoiRedBlackNode(beach);
      }
      function d3_geom_voronoiRemoveBeach(beach) {
        var circle = beach.circle,
            x = circle.x,
            y = circle.cy,
            vertex = {
              x: x,
              y: y
            },
            previous = beach.P,
            next = beach.N,
            disappearing = [beach];
        d3_geom_voronoiDetachBeach(beach);
        var lArc = previous;
        while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
          previous = lArc.P;
          disappearing.unshift(lArc);
          d3_geom_voronoiDetachBeach(lArc);
          lArc = previous;
        }
        disappearing.unshift(lArc);
        d3_geom_voronoiDetachCircle(lArc);
        var rArc = next;
        while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
          next = rArc.N;
          disappearing.push(rArc);
          d3_geom_voronoiDetachBeach(rArc);
          rArc = next;
        }
        disappearing.push(rArc);
        d3_geom_voronoiDetachCircle(rArc);
        var nArcs = disappearing.length,
            iArc;
        for (iArc = 1; iArc < nArcs; ++iArc) {
          rArc = disappearing[iArc];
          lArc = disappearing[iArc - 1];
          d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
        }
        lArc = disappearing[0];
        rArc = disappearing[nArcs - 1];
        rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
        d3_geom_voronoiAttachCircle(lArc);
        d3_geom_voronoiAttachCircle(rArc);
      }
      function d3_geom_voronoiAddBeach(site) {
        var x = site.x,
            directrix = site.y,
            lArc,
            rArc,
            dxl,
            dxr,
            node = d3_geom_voronoiBeaches._;
        while (node) {
          dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
          if (dxl > ε)
            node = node.L;
          else {
            dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
            if (dxr > ε) {
              if (!node.R) {
                lArc = node;
                break;
              }
              node = node.R;
            } else {
              if (dxl > -ε) {
                lArc = node.P;
                rArc = node;
              } else if (dxr > -ε) {
                lArc = node;
                rArc = node.N;
              } else {
                lArc = rArc = node;
              }
              break;
            }
          }
        }
        var newArc = d3_geom_voronoiCreateBeach(site);
        d3_geom_voronoiBeaches.insert(lArc, newArc);
        if (!lArc && !rArc)
          return;
        if (lArc === rArc) {
          d3_geom_voronoiDetachCircle(lArc);
          rArc = d3_geom_voronoiCreateBeach(lArc.site);
          d3_geom_voronoiBeaches.insert(newArc, rArc);
          newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
          d3_geom_voronoiAttachCircle(lArc);
          d3_geom_voronoiAttachCircle(rArc);
          return;
        }
        if (!rArc) {
          newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
          return;
        }
        d3_geom_voronoiDetachCircle(lArc);
        d3_geom_voronoiDetachCircle(rArc);
        var lSite = lArc.site,
            ax = lSite.x,
            ay = lSite.y,
            bx = site.x - ax,
            by = site.y - ay,
            rSite = rArc.site,
            cx = rSite.x - ax,
            cy = rSite.y - ay,
            d = 2 * (bx * cy - by * cx),
            hb = bx * bx + by * by,
            hc = cx * cx + cy * cy,
            vertex = {
              x: (cy * hb - by * hc) / d + ax,
              y: (bx * hc - cx * hb) / d + ay
            };
        d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
        newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
        rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
        d3_geom_voronoiAttachCircle(lArc);
        d3_geom_voronoiAttachCircle(rArc);
      }
      function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
        var site = arc.site,
            rfocx = site.x,
            rfocy = site.y,
            pby2 = rfocy - directrix;
        if (!pby2)
          return rfocx;
        var lArc = arc.P;
        if (!lArc)
          return -Infinity;
        site = lArc.site;
        var lfocx = site.x,
            lfocy = site.y,
            plby2 = lfocy - directrix;
        if (!plby2)
          return lfocx;
        var hl = lfocx - rfocx,
            aby2 = 1 / pby2 - 1 / plby2,
            b = hl / plby2;
        if (aby2)
          return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
        return (rfocx + lfocx) / 2;
      }
      function d3_geom_voronoiRightBreakPoint(arc, directrix) {
        var rArc = arc.N;
        if (rArc)
          return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
        var site = arc.site;
        return site.y === directrix ? site.x : Infinity;
      }
      function d3_geom_voronoiCell(site) {
        this.site = site;
        this.edges = [];
      }
      d3_geom_voronoiCell.prototype.prepare = function() {
        var halfEdges = this.edges,
            iHalfEdge = halfEdges.length,
            edge;
        while (iHalfEdge--) {
          edge = halfEdges[iHalfEdge].edge;
          if (!edge.b || !edge.a)
            halfEdges.splice(iHalfEdge, 1);
        }
        halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
        return halfEdges.length;
      };
      function d3_geom_voronoiCloseCells(extent) {
        var x0 = extent[0][0],
            x1 = extent[1][0],
            y0 = extent[0][1],
            y1 = extent[1][1],
            x2,
            y2,
            x3,
            y3,
            cells = d3_geom_voronoiCells,
            iCell = cells.length,
            cell,
            iHalfEdge,
            halfEdges,
            nHalfEdges,
            start,
            end;
        while (iCell--) {
          cell = cells[iCell];
          if (!cell || !cell.prepare())
            continue;
          halfEdges = cell.edges;
          nHalfEdges = halfEdges.length;
          iHalfEdge = 0;
          while (iHalfEdge < nHalfEdges) {
            end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
            start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
            if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
              halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
                x: x0,
                y: abs(x2 - x0) < ε ? y2 : y1
              } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
                x: abs(y2 - y1) < ε ? x2 : x1,
                y: y1
              } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
                x: x1,
                y: abs(x2 - x1) < ε ? y2 : y0
              } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
                x: abs(y2 - y0) < ε ? x2 : x0,
                y: y0
              } : null), cell.site, null));
              ++nHalfEdges;
            }
          }
        }
      }
      function d3_geom_voronoiHalfEdgeOrder(a, b) {
        return b.angle - a.angle;
      }
      function d3_geom_voronoiCircle() {
        d3_geom_voronoiRedBlackNode(this);
        this.x = this.y = this.arc = this.site = this.cy = null;
      }
      function d3_geom_voronoiAttachCircle(arc) {
        var lArc = arc.P,
            rArc = arc.N;
        if (!lArc || !rArc)
          return;
        var lSite = lArc.site,
            cSite = arc.site,
            rSite = rArc.site;
        if (lSite === rSite)
          return;
        var bx = cSite.x,
            by = cSite.y,
            ax = lSite.x - bx,
            ay = lSite.y - by,
            cx = rSite.x - bx,
            cy = rSite.y - by;
        var d = 2 * (ax * cy - ay * cx);
        if (d >= -ε2)
          return;
        var ha = ax * ax + ay * ay,
            hc = cx * cx + cy * cy,
            x = (cy * ha - ay * hc) / d,
            y = (ax * hc - cx * ha) / d,
            cy = y + by;
        var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
        circle.arc = arc;
        circle.site = cSite;
        circle.x = x + bx;
        circle.y = cy + Math.sqrt(x * x + y * y);
        circle.cy = cy;
        arc.circle = circle;
        var before = null,
            node = d3_geom_voronoiCircles._;
        while (node) {
          if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
            if (node.L)
              node = node.L;
            else {
              before = node.P;
              break;
            }
          } else {
            if (node.R)
              node = node.R;
            else {
              before = node;
              break;
            }
          }
        }
        d3_geom_voronoiCircles.insert(before, circle);
        if (!before)
          d3_geom_voronoiFirstCircle = circle;
      }
      function d3_geom_voronoiDetachCircle(arc) {
        var circle = arc.circle;
        if (circle) {
          if (!circle.P)
            d3_geom_voronoiFirstCircle = circle.N;
          d3_geom_voronoiCircles.remove(circle);
          d3_geom_voronoiCirclePool.push(circle);
          d3_geom_voronoiRedBlackNode(circle);
          arc.circle = null;
        }
      }
      function d3_geom_voronoiClipEdges(extent) {
        var edges = d3_geom_voronoiEdges,
            clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]),
            i = edges.length,
            e;
        while (i--) {
          e = edges[i];
          if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
            e.a = e.b = null;
            edges.splice(i, 1);
          }
        }
      }
      function d3_geom_voronoiConnectEdge(edge, extent) {
        var vb = edge.b;
        if (vb)
          return true;
        var va = edge.a,
            x0 = extent[0][0],
            x1 = extent[1][0],
            y0 = extent[0][1],
            y1 = extent[1][1],
            lSite = edge.l,
            rSite = edge.r,
            lx = lSite.x,
            ly = lSite.y,
            rx = rSite.x,
            ry = rSite.y,
            fx = (lx + rx) / 2,
            fy = (ly + ry) / 2,
            fm,
            fb;
        if (ry === ly) {
          if (fx < x0 || fx >= x1)
            return;
          if (lx > rx) {
            if (!va)
              va = {
                x: fx,
                y: y0
              };
            else if (va.y >= y1)
              return;
            vb = {
              x: fx,
              y: y1
            };
          } else {
            if (!va)
              va = {
                x: fx,
                y: y1
              };
            else if (va.y < y0)
              return;
            vb = {
              x: fx,
              y: y0
            };
          }
        } else {
          fm = (lx - rx) / (ry - ly);
          fb = fy - fm * fx;
          if (fm < -1 || fm > 1) {
            if (lx > rx) {
              if (!va)
                va = {
                  x: (y0 - fb) / fm,
                  y: y0
                };
              else if (va.y >= y1)
                return;
              vb = {
                x: (y1 - fb) / fm,
                y: y1
              };
            } else {
              if (!va)
                va = {
                  x: (y1 - fb) / fm,
                  y: y1
                };
              else if (va.y < y0)
                return;
              vb = {
                x: (y0 - fb) / fm,
                y: y0
              };
            }
          } else {
            if (ly < ry) {
              if (!va)
                va = {
                  x: x0,
                  y: fm * x0 + fb
                };
              else if (va.x >= x1)
                return;
              vb = {
                x: x1,
                y: fm * x1 + fb
              };
            } else {
              if (!va)
                va = {
                  x: x1,
                  y: fm * x1 + fb
                };
              else if (va.x < x0)
                return;
              vb = {
                x: x0,
                y: fm * x0 + fb
              };
            }
          }
        }
        edge.a = va;
        edge.b = vb;
        return true;
      }
      function d3_geom_voronoiEdge(lSite, rSite) {
        this.l = lSite;
        this.r = rSite;
        this.a = this.b = null;
      }
      function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
        var edge = new d3_geom_voronoiEdge(lSite, rSite);
        d3_geom_voronoiEdges.push(edge);
        if (va)
          d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
        if (vb)
          d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
        d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
        d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
        return edge;
      }
      function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
        var edge = new d3_geom_voronoiEdge(lSite, null);
        edge.a = va;
        edge.b = vb;
        d3_geom_voronoiEdges.push(edge);
        return edge;
      }
      function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
        if (!edge.a && !edge.b) {
          edge.a = vertex;
          edge.l = lSite;
          edge.r = rSite;
        } else if (edge.l === rSite) {
          edge.b = vertex;
        } else {
          edge.a = vertex;
        }
      }
      function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
        var va = edge.a,
            vb = edge.b;
        this.edge = edge;
        this.site = lSite;
        this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
      }
      d3_geom_voronoiHalfEdge.prototype = {
        start: function() {
          return this.edge.l === this.site ? this.edge.a : this.edge.b;
        },
        end: function() {
          return this.edge.l === this.site ? this.edge.b : this.edge.a;
        }
      };
      function d3_geom_voronoiRedBlackTree() {
        this._ = null;
      }
      function d3_geom_voronoiRedBlackNode(node) {
        node.U = node.C = node.L = node.R = node.P = node.N = null;
      }
      d3_geom_voronoiRedBlackTree.prototype = {
        insert: function(after, node) {
          var parent,
              grandpa,
              uncle;
          if (after) {
            node.P = after;
            node.N = after.N;
            if (after.N)
              after.N.P = node;
            after.N = node;
            if (after.R) {
              after = after.R;
              while (after.L)
                after = after.L;
              after.L = node;
            } else {
              after.R = node;
            }
            parent = after;
          } else if (this._) {
            after = d3_geom_voronoiRedBlackFirst(this._);
            node.P = null;
            node.N = after;
            after.P = after.L = node;
            parent = after;
          } else {
            node.P = node.N = null;
            this._ = node;
            parent = null;
          }
          node.L = node.R = null;
          node.U = parent;
          node.C = true;
          after = node;
          while (parent && parent.C) {
            grandpa = parent.U;
            if (parent === grandpa.L) {
              uncle = grandpa.R;
              if (uncle && uncle.C) {
                parent.C = uncle.C = false;
                grandpa.C = true;
                after = grandpa;
              } else {
                if (after === parent.R) {
                  d3_geom_voronoiRedBlackRotateLeft(this, parent);
                  after = parent;
                  parent = after.U;
                }
                parent.C = false;
                grandpa.C = true;
                d3_geom_voronoiRedBlackRotateRight(this, grandpa);
              }
            } else {
              uncle = grandpa.L;
              if (uncle && uncle.C) {
                parent.C = uncle.C = false;
                grandpa.C = true;
                after = grandpa;
              } else {
                if (after === parent.L) {
                  d3_geom_voronoiRedBlackRotateRight(this, parent);
                  after = parent;
                  parent = after.U;
                }
                parent.C = false;
                grandpa.C = true;
                d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
              }
            }
            parent = after.U;
          }
          this._.C = false;
        },
        remove: function(node) {
          if (node.N)
            node.N.P = node.P;
          if (node.P)
            node.P.N = node.N;
          node.N = node.P = null;
          var parent = node.U,
              sibling,
              left = node.L,
              right = node.R,
              next,
              red;
          if (!left)
            next = right;
          else if (!right)
            next = left;
          else
            next = d3_geom_voronoiRedBlackFirst(right);
          if (parent) {
            if (parent.L === node)
              parent.L = next;
            else
              parent.R = next;
          } else {
            this._ = next;
          }
          if (left && right) {
            red = next.C;
            next.C = node.C;
            next.L = left;
            left.U = next;
            if (next !== right) {
              parent = next.U;
              next.U = node.U;
              node = next.R;
              parent.L = node;
              next.R = right;
              right.U = next;
            } else {
              next.U = parent;
              parent = next;
              node = next.R;
            }
          } else {
            red = node.C;
            node = next;
          }
          if (node)
            node.U = parent;
          if (red)
            return;
          if (node && node.C) {
            node.C = false;
            return;
          }
          do {
            if (node === this._)
              break;
            if (node === parent.L) {
              sibling = parent.R;
              if (sibling.C) {
                sibling.C = false;
                parent.C = true;
                d3_geom_voronoiRedBlackRotateLeft(this, parent);
                sibling = parent.R;
              }
              if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                if (!sibling.R || !sibling.R.C) {
                  sibling.L.C = false;
                  sibling.C = true;
                  d3_geom_voronoiRedBlackRotateRight(this, sibling);
                  sibling = parent.R;
                }
                sibling.C = parent.C;
                parent.C = sibling.R.C = false;
                d3_geom_voronoiRedBlackRotateLeft(this, parent);
                node = this._;
                break;
              }
            } else {
              sibling = parent.L;
              if (sibling.C) {
                sibling.C = false;
                parent.C = true;
                d3_geom_voronoiRedBlackRotateRight(this, parent);
                sibling = parent.L;
              }
              if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                if (!sibling.L || !sibling.L.C) {
                  sibling.R.C = false;
                  sibling.C = true;
                  d3_geom_voronoiRedBlackRotateLeft(this, sibling);
                  sibling = parent.L;
                }
                sibling.C = parent.C;
                parent.C = sibling.L.C = false;
                d3_geom_voronoiRedBlackRotateRight(this, parent);
                node = this._;
                break;
              }
            }
            sibling.C = true;
            node = parent;
            parent = parent.U;
          } while (!node.C);
          if (node)
            node.C = false;
        }
      };
      function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
        var p = node,
            q = node.R,
            parent = p.U;
        if (parent) {
          if (parent.L === p)
            parent.L = q;
          else
            parent.R = q;
        } else {
          tree._ = q;
        }
        q.U = parent;
        p.U = q;
        p.R = q.L;
        if (p.R)
          p.R.U = p;
        q.L = p;
      }
      function d3_geom_voronoiRedBlackRotateRight(tree, node) {
        var p = node,
            q = node.L,
            parent = p.U;
        if (parent) {
          if (parent.L === p)
            parent.L = q;
          else
            parent.R = q;
        } else {
          tree._ = q;
        }
        q.U = parent;
        p.U = q;
        p.L = q.R;
        if (p.L)
          p.L.U = p;
        q.R = p;
      }
      function d3_geom_voronoiRedBlackFirst(node) {
        while (node.L)
          node = node.L;
        return node;
      }
      function d3_geom_voronoi(sites, bbox) {
        var site = sites.sort(d3_geom_voronoiVertexOrder).pop(),
            x0,
            y0,
            circle;
        d3_geom_voronoiEdges = [];
        d3_geom_voronoiCells = new Array(sites.length);
        d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
        d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
        while (true) {
          circle = d3_geom_voronoiFirstCircle;
          if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
            if (site.x !== x0 || site.y !== y0) {
              d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
              d3_geom_voronoiAddBeach(site);
              x0 = site.x, y0 = site.y;
            }
            site = sites.pop();
          } else if (circle) {
            d3_geom_voronoiRemoveBeach(circle.arc);
          } else {
            break;
          }
        }
        if (bbox)
          d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
        var diagram = {
          cells: d3_geom_voronoiCells,
          edges: d3_geom_voronoiEdges
        };
        d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
        return diagram;
      }
      function d3_geom_voronoiVertexOrder(a, b) {
        return b.y - a.y || b.x - a.x;
      }
      d3.geom.voronoi = function(points) {
        var x = d3_geom_pointX,
            y = d3_geom_pointY,
            fx = x,
            fy = y,
            clipExtent = d3_geom_voronoiClipExtent;
        if (points)
          return voronoi(points);
        function voronoi(data) {
          var polygons = new Array(data.length),
              x0 = clipExtent[0][0],
              y0 = clipExtent[0][1],
              x1 = clipExtent[1][0],
              y1 = clipExtent[1][1];
          d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
            var edges = cell.edges,
                site = cell.site,
                polygon = polygons[i] = edges.length ? edges.map(function(e) {
                  var s = e.start();
                  return [s.x, s.y];
                }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [[x0, y1], [x1, y1], [x1, y0], [x0, y0]] : [];
            polygon.point = data[i];
          });
          return polygons;
        }
        function sites(data) {
          return data.map(function(d, i) {
            return {
              x: Math.round(fx(d, i) / ε) * ε,
              y: Math.round(fy(d, i) / ε) * ε,
              i: i
            };
          });
        }
        voronoi.links = function(data) {
          return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
            return edge.l && edge.r;
          }).map(function(edge) {
            return {
              source: data[edge.l.i],
              target: data[edge.r.i]
            };
          });
        };
        voronoi.triangles = function(data) {
          var triangles = [];
          d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
            var site = cell.site,
                edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder),
                j = -1,
                m = edges.length,
                e0,
                s0,
                e1 = edges[m - 1].edge,
                s1 = e1.l === site ? e1.r : e1.l;
            while (++j < m) {
              e0 = e1;
              s0 = s1;
              e1 = edges[j].edge;
              s1 = e1.l === site ? e1.r : e1.l;
              if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
                triangles.push([data[i], data[s0.i], data[s1.i]]);
              }
            }
          });
          return triangles;
        };
        voronoi.x = function(_) {
          return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
        };
        voronoi.y = function(_) {
          return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
        };
        voronoi.clipExtent = function(_) {
          if (!arguments.length)
            return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
          clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
          return voronoi;
        };
        voronoi.size = function(_) {
          if (!arguments.length)
            return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
          return voronoi.clipExtent(_ && [[0, 0], _]);
        };
        return voronoi;
      };
      var d3_geom_voronoiClipExtent = [[-1e6, -1e6], [1e6, 1e6]];
      function d3_geom_voronoiTriangleArea(a, b, c) {
        return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
      }
      d3.geom.delaunay = function(vertices) {
        return d3.geom.voronoi().triangles(vertices);
      };
      d3.geom.quadtree = function(points, x1, y1, x2, y2) {
        var x = d3_geom_pointX,
            y = d3_geom_pointY,
            compat;
        if (compat = arguments.length) {
          x = d3_geom_quadtreeCompatX;
          y = d3_geom_quadtreeCompatY;
          if (compat === 3) {
            y2 = y1;
            x2 = x1;
            y1 = x1 = 0;
          }
          return quadtree(points);
        }
        function quadtree(data) {
          var d,
              fx = d3_functor(x),
              fy = d3_functor(y),
              xs,
              ys,
              i,
              n,
              x1_,
              y1_,
              x2_,
              y2_;
          if (x1 != null) {
            x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
          } else {
            x2_ = y2_ = -(x1_ = y1_ = Infinity);
            xs = [], ys = [];
            n = data.length;
            if (compat)
              for (i = 0; i < n; ++i) {
                d = data[i];
                if (d.x < x1_)
                  x1_ = d.x;
                if (d.y < y1_)
                  y1_ = d.y;
                if (d.x > x2_)
                  x2_ = d.x;
                if (d.y > y2_)
                  y2_ = d.y;
                xs.push(d.x);
                ys.push(d.y);
              }
            else
              for (i = 0; i < n; ++i) {
                var x_ = +fx(d = data[i], i),
                    y_ = +fy(d, i);
                if (x_ < x1_)
                  x1_ = x_;
                if (y_ < y1_)
                  y1_ = y_;
                if (x_ > x2_)
                  x2_ = x_;
                if (y_ > y2_)
                  y2_ = y_;
                xs.push(x_);
                ys.push(y_);
              }
          }
          var dx = x2_ - x1_,
              dy = y2_ - y1_;
          if (dx > dy)
            y2_ = y1_ + dx;
          else
            x2_ = x1_ + dy;
          function insert(n, d, x, y, x1, y1, x2, y2) {
            if (isNaN(x) || isNaN(y))
              return;
            if (n.leaf) {
              var nx = n.x,
                  ny = n.y;
              if (nx != null) {
                if (abs(nx - x) + abs(ny - y) < .01) {
                  insertChild(n, d, x, y, x1, y1, x2, y2);
                } else {
                  var nPoint = n.point;
                  n.x = n.y = n.point = null;
                  insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
                  insertChild(n, d, x, y, x1, y1, x2, y2);
                }
              } else {
                n.x = x, n.y = y, n.point = d;
              }
            } else {
              insertChild(n, d, x, y, x1, y1, x2, y2);
            }
          }
          function insertChild(n, d, x, y, x1, y1, x2, y2) {
            var xm = (x1 + x2) * .5,
                ym = (y1 + y2) * .5,
                right = x >= xm,
                below = y >= ym,
                i = below << 1 | right;
            n.leaf = false;
            n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
            if (right)
              x1 = xm;
            else
              x2 = xm;
            if (below)
              y1 = ym;
            else
              y2 = ym;
            insert(n, d, x, y, x1, y1, x2, y2);
          }
          var root = d3_geom_quadtreeNode();
          root.add = function(d) {
            insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
          };
          root.visit = function(f) {
            d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
          };
          root.find = function(point) {
            return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
          };
          i = -1;
          if (x1 == null) {
            while (++i < n) {
              insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
            }
            --i;
          } else
            data.forEach(root.add);
          xs = ys = data = d = null;
          return root;
        }
        quadtree.x = function(_) {
          return arguments.length ? (x = _, quadtree) : x;
        };
        quadtree.y = function(_) {
          return arguments.length ? (y = _, quadtree) : y;
        };
        quadtree.extent = function(_) {
          if (!arguments.length)
            return x1 == null ? null : [[x1, y1], [x2, y2]];
          if (_ == null)
            x1 = y1 = x2 = y2 = null;
          else
            x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], y2 = +_[1][1];
          return quadtree;
        };
        quadtree.size = function(_) {
          if (!arguments.length)
            return x1 == null ? null : [x2 - x1, y2 - y1];
          if (_ == null)
            x1 = y1 = x2 = y2 = null;
          else
            x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
          return quadtree;
        };
        return quadtree;
      };
      function d3_geom_quadtreeCompatX(d) {
        return d.x;
      }
      function d3_geom_quadtreeCompatY(d) {
        return d.y;
      }
      function d3_geom_quadtreeNode() {
        return {
          leaf: true,
          nodes: [],
          point: null,
          x: null,
          y: null
        };
      }
      function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
        if (!f(node, x1, y1, x2, y2)) {
          var sx = (x1 + x2) * .5,
              sy = (y1 + y2) * .5,
              children = node.nodes;
          if (children[0])
            d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
          if (children[1])
            d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
          if (children[2])
            d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
          if (children[3])
            d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
        }
      }
      function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
        var minDistance2 = Infinity,
            closestPoint;
        (function find(node, x1, y1, x2, y2) {
          if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0)
            return;
          if (point = node.point) {
            var point,
                dx = x - node.x,
                dy = y - node.y,
                distance2 = dx * dx + dy * dy;
            if (distance2 < minDistance2) {
              var distance = Math.sqrt(minDistance2 = distance2);
              x0 = x - distance, y0 = y - distance;
              x3 = x + distance, y3 = y + distance;
              closestPoint = point;
            }
          }
          var children = node.nodes,
              xm = (x1 + x2) * .5,
              ym = (y1 + y2) * .5,
              right = x >= xm,
              below = y >= ym;
          for (var i = below << 1 | right,
              j = i + 4; i < j; ++i) {
            if (node = children[i & 3])
              switch (i & 3) {
                case 0:
                  find(node, x1, y1, xm, ym);
                  break;
                case 1:
                  find(node, xm, y1, x2, ym);
                  break;
                case 2:
                  find(node, x1, ym, xm, y2);
                  break;
                case 3:
                  find(node, xm, ym, x2, y2);
                  break;
              }
          }
        })(root, x0, y0, x3, y3);
        return closestPoint;
      }
      d3.interpolateRgb = d3_interpolateRgb;
      function d3_interpolateRgb(a, b) {
        a = d3.rgb(a);
        b = d3.rgb(b);
        var ar = a.r,
            ag = a.g,
            ab = a.b,
            br = b.r - ar,
            bg = b.g - ag,
            bb = b.b - ab;
        return function(t) {
          return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
        };
      }
      d3.interpolateObject = d3_interpolateObject;
      function d3_interpolateObject(a, b) {
        var i = {},
            c = {},
            k;
        for (k in a) {
          if (k in b) {
            i[k] = d3_interpolate(a[k], b[k]);
          } else {
            c[k] = a[k];
          }
        }
        for (k in b) {
          if (!(k in a)) {
            c[k] = b[k];
          }
        }
        return function(t) {
          for (k in i)
            c[k] = i[k](t);
          return c;
        };
      }
      d3.interpolateNumber = d3_interpolateNumber;
      function d3_interpolateNumber(a, b) {
        a = +a, b = +b;
        return function(t) {
          return a * (1 - t) + b * t;
        };
      }
      d3.interpolateString = d3_interpolateString;
      function d3_interpolateString(a, b) {
        var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0,
            am,
            bm,
            bs,
            i = -1,
            s = [],
            q = [];
        a = a + "", b = b + "";
        while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
          if ((bs = bm.index) > bi) {
            bs = b.slice(bi, bs);
            if (s[i])
              s[i] += bs;
            else
              s[++i] = bs;
          }
          if ((am = am[0]) === (bm = bm[0])) {
            if (s[i])
              s[i] += bm;
            else
              s[++i] = bm;
          } else {
            s[++i] = null;
            q.push({
              i: i,
              x: d3_interpolateNumber(am, bm)
            });
          }
          bi = d3_interpolate_numberB.lastIndex;
        }
        if (bi < b.length) {
          bs = b.slice(bi);
          if (s[i])
            s[i] += bs;
          else
            s[++i] = bs;
        }
        return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
          return b(t) + "";
        }) : function() {
          return b;
        } : (b = q.length, function(t) {
          for (var i = 0,
              o; i < b; ++i)
            s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
      }
      var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
      d3.interpolate = d3_interpolate;
      function d3_interpolate(a, b) {
        var i = d3.interpolators.length,
            f;
        while (--i >= 0 && !(f = d3.interpolators[i](a, b)))
          ;
        return f;
      }
      d3.interpolators = [function(a, b) {
        var t = typeof b;
        return (t === "string" ? d3_rgb_names.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
      }];
      d3.interpolateArray = d3_interpolateArray;
      function d3_interpolateArray(a, b) {
        var x = [],
            c = [],
            na = a.length,
            nb = b.length,
            n0 = Math.min(a.length, b.length),
            i;
        for (i = 0; i < n0; ++i)
          x.push(d3_interpolate(a[i], b[i]));
        for (; i < na; ++i)
          c[i] = a[i];
        for (; i < nb; ++i)
          c[i] = b[i];
        return function(t) {
          for (i = 0; i < n0; ++i)
            c[i] = x[i](t);
          return c;
        };
      }
      var d3_ease_default = function() {
        return d3_identity;
      };
      var d3_ease = d3.map({
        linear: d3_ease_default,
        poly: d3_ease_poly,
        quad: function() {
          return d3_ease_quad;
        },
        cubic: function() {
          return d3_ease_cubic;
        },
        sin: function() {
          return d3_ease_sin;
        },
        exp: function() {
          return d3_ease_exp;
        },
        circle: function() {
          return d3_ease_circle;
        },
        elastic: d3_ease_elastic,
        back: d3_ease_back,
        bounce: function() {
          return d3_ease_bounce;
        }
      });
      var d3_ease_mode = d3.map({
        "in": d3_identity,
        out: d3_ease_reverse,
        "in-out": d3_ease_reflect,
        "out-in": function(f) {
          return d3_ease_reflect(d3_ease_reverse(f));
        }
      });
      d3.ease = function(name) {
        var i = name.indexOf("-"),
            t = i >= 0 ? name.slice(0, i) : name,
            m = i >= 0 ? name.slice(i + 1) : "in";
        t = d3_ease.get(t) || d3_ease_default;
        m = d3_ease_mode.get(m) || d3_identity;
        return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
      };
      function d3_ease_clamp(f) {
        return function(t) {
          return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
        };
      }
      function d3_ease_reverse(f) {
        return function(t) {
          return 1 - f(1 - t);
        };
      }
      function d3_ease_reflect(f) {
        return function(t) {
          return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
        };
      }
      function d3_ease_quad(t) {
        return t * t;
      }
      function d3_ease_cubic(t) {
        return t * t * t;
      }
      function d3_ease_cubicInOut(t) {
        if (t <= 0)
          return 0;
        if (t >= 1)
          return 1;
        var t2 = t * t,
            t3 = t2 * t;
        return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
      }
      function d3_ease_poly(e) {
        return function(t) {
          return Math.pow(t, e);
        };
      }
      function d3_ease_sin(t) {
        return 1 - Math.cos(t * halfπ);
      }
      function d3_ease_exp(t) {
        return Math.pow(2, 10 * (t - 1));
      }
      function d3_ease_circle(t) {
        return 1 - Math.sqrt(1 - t * t);
      }
      function d3_ease_elastic(a, p) {
        var s;
        if (arguments.length < 2)
          p = .45;
        if (arguments.length)
          s = p / τ * Math.asin(1 / a);
        else
          a = 1, s = p / 4;
        return function(t) {
          return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
        };
      }
      function d3_ease_back(s) {
        if (!s)
          s = 1.70158;
        return function(t) {
          return t * t * ((s + 1) * t - s);
        };
      }
      function d3_ease_bounce(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
      }
      d3.interpolateHcl = d3_interpolateHcl;
      function d3_interpolateHcl(a, b) {
        a = d3.hcl(a);
        b = d3.hcl(b);
        var ah = a.h,
            ac = a.c,
            al = a.l,
            bh = b.h - ah,
            bc = b.c - ac,
            bl = b.l - al;
        if (isNaN(bc))
          bc = 0, ac = isNaN(ac) ? b.c : ac;
        if (isNaN(bh))
          bh = 0, ah = isNaN(ah) ? b.h : ah;
        else if (bh > 180)
          bh -= 360;
        else if (bh < -180)
          bh += 360;
        return function(t) {
          return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
        };
      }
      d3.interpolateHsl = d3_interpolateHsl;
      function d3_interpolateHsl(a, b) {
        a = d3.hsl(a);
        b = d3.hsl(b);
        var ah = a.h,
            as = a.s,
            al = a.l,
            bh = b.h - ah,
            bs = b.s - as,
            bl = b.l - al;
        if (isNaN(bs))
          bs = 0, as = isNaN(as) ? b.s : as;
        if (isNaN(bh))
          bh = 0, ah = isNaN(ah) ? b.h : ah;
        else if (bh > 180)
          bh -= 360;
        else if (bh < -180)
          bh += 360;
        return function(t) {
          return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
        };
      }
      d3.interpolateLab = d3_interpolateLab;
      function d3_interpolateLab(a, b) {
        a = d3.lab(a);
        b = d3.lab(b);
        var al = a.l,
            aa = a.a,
            ab = a.b,
            bl = b.l - al,
            ba = b.a - aa,
            bb = b.b - ab;
        return function(t) {
          return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
        };
      }
      d3.interpolateRound = d3_interpolateRound;
      function d3_interpolateRound(a, b) {
        b -= a;
        return function(t) {
          return Math.round(a + b * t);
        };
      }
      d3.transform = function(string) {
        var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
        return (d3.transform = function(string) {
          if (string != null) {
            g.setAttribute("transform", string);
            var t = g.transform.baseVal.consolidate();
          }
          return new d3_transform(t ? t.matrix : d3_transformIdentity);
        })(string);
      };
      function d3_transform(m) {
        var r0 = [m.a, m.b],
            r1 = [m.c, m.d],
            kx = d3_transformNormalize(r0),
            kz = d3_transformDot(r0, r1),
            ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
        if (r0[0] * r1[1] < r1[0] * r0[1]) {
          r0[0] *= -1;
          r0[1] *= -1;
          kx *= -1;
          kz *= -1;
        }
        this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
        this.translate = [m.e, m.f];
        this.scale = [kx, ky];
        this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
      }
      d3_transform.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
      };
      function d3_transformDot(a, b) {
        return a[0] * b[0] + a[1] * b[1];
      }
      function d3_transformNormalize(a) {
        var k = Math.sqrt(d3_transformDot(a, a));
        if (k) {
          a[0] /= k;
          a[1] /= k;
        }
        return k;
      }
      function d3_transformCombine(a, b, k) {
        a[0] += k * b[0];
        a[1] += k * b[1];
        return a;
      }
      var d3_transformIdentity = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
      };
      d3.interpolateTransform = d3_interpolateTransform;
      function d3_interpolateTransformPop(s) {
        return s.length ? s.pop() + "," : "";
      }
      function d3_interpolateTranslate(ta, tb, s, q) {
        if (ta[0] !== tb[0] || ta[1] !== tb[1]) {
          var i = s.push("translate(", null, ",", null, ")");
          q.push({
            i: i - 4,
            x: d3_interpolateNumber(ta[0], tb[0])
          }, {
            i: i - 2,
            x: d3_interpolateNumber(ta[1], tb[1])
          });
        } else if (tb[0] || tb[1]) {
          s.push("translate(" + tb + ")");
        }
      }
      function d3_interpolateRotate(ra, rb, s, q) {
        if (ra !== rb) {
          if (ra - rb > 180)
            rb += 360;
          else if (rb - ra > 180)
            ra += 360;
          q.push({
            i: s.push(d3_interpolateTransformPop(s) + "rotate(", null, ")") - 2,
            x: d3_interpolateNumber(ra, rb)
          });
        } else if (rb) {
          s.push(d3_interpolateTransformPop(s) + "rotate(" + rb + ")");
        }
      }
      function d3_interpolateSkew(wa, wb, s, q) {
        if (wa !== wb) {
          q.push({
            i: s.push(d3_interpolateTransformPop(s) + "skewX(", null, ")") - 2,
            x: d3_interpolateNumber(wa, wb)
          });
        } else if (wb) {
          s.push(d3_interpolateTransformPop(s) + "skewX(" + wb + ")");
        }
      }
      function d3_interpolateScale(ka, kb, s, q) {
        if (ka[0] !== kb[0] || ka[1] !== kb[1]) {
          var i = s.push(d3_interpolateTransformPop(s) + "scale(", null, ",", null, ")");
          q.push({
            i: i - 4,
            x: d3_interpolateNumber(ka[0], kb[0])
          }, {
            i: i - 2,
            x: d3_interpolateNumber(ka[1], kb[1])
          });
        } else if (kb[0] !== 1 || kb[1] !== 1) {
          s.push(d3_interpolateTransformPop(s) + "scale(" + kb + ")");
        }
      }
      function d3_interpolateTransform(a, b) {
        var s = [],
            q = [];
        a = d3.transform(a), b = d3.transform(b);
        d3_interpolateTranslate(a.translate, b.translate, s, q);
        d3_interpolateRotate(a.rotate, b.rotate, s, q);
        d3_interpolateSkew(a.skew, b.skew, s, q);
        d3_interpolateScale(a.scale, b.scale, s, q);
        a = b = null;
        return function(t) {
          var i = -1,
              n = q.length,
              o;
          while (++i < n)
            s[(o = q[i]).i] = o.x(t);
          return s.join("");
        };
      }
      function d3_uninterpolateNumber(a, b) {
        b = (b -= a = +a) || 1 / b;
        return function(x) {
          return (x - a) / b;
        };
      }
      function d3_uninterpolateClamp(a, b) {
        b = (b -= a = +a) || 1 / b;
        return function(x) {
          return Math.max(0, Math.min(1, (x - a) / b));
        };
      }
      d3.layout = {};
      d3.layout.bundle = function() {
        return function(links) {
          var paths = [],
              i = -1,
              n = links.length;
          while (++i < n)
            paths.push(d3_layout_bundlePath(links[i]));
          return paths;
        };
      };
      function d3_layout_bundlePath(link) {
        var start = link.source,
            end = link.target,
            lca = d3_layout_bundleLeastCommonAncestor(start, end),
            points = [start];
        while (start !== lca) {
          start = start.parent;
          points.push(start);
        }
        var k = points.length;
        while (end !== lca) {
          points.splice(k, 0, end);
          end = end.parent;
        }
        return points;
      }
      function d3_layout_bundleAncestors(node) {
        var ancestors = [],
            parent = node.parent;
        while (parent != null) {
          ancestors.push(node);
          node = parent;
          parent = parent.parent;
        }
        ancestors.push(node);
        return ancestors;
      }
      function d3_layout_bundleLeastCommonAncestor(a, b) {
        if (a === b)
          return a;
        var aNodes = d3_layout_bundleAncestors(a),
            bNodes = d3_layout_bundleAncestors(b),
            aNode = aNodes.pop(),
            bNode = bNodes.pop(),
            sharedNode = null;
        while (aNode === bNode) {
          sharedNode = aNode;
          aNode = aNodes.pop();
          bNode = bNodes.pop();
        }
        return sharedNode;
      }
      d3.layout.chord = function() {
        var chord = {},
            chords,
            groups,
            matrix,
            n,
            padding = 0,
            sortGroups,
            sortSubgroups,
            sortChords;
        function relayout() {
          var subgroups = {},
              groupSums = [],
              groupIndex = d3.range(n),
              subgroupIndex = [],
              k,
              x,
              x0,
              i,
              j;
          chords = [];
          groups = [];
          k = 0, i = -1;
          while (++i < n) {
            x = 0, j = -1;
            while (++j < n) {
              x += matrix[i][j];
            }
            groupSums.push(x);
            subgroupIndex.push(d3.range(n));
            k += x;
          }
          if (sortGroups) {
            groupIndex.sort(function(a, b) {
              return sortGroups(groupSums[a], groupSums[b]);
            });
          }
          if (sortSubgroups) {
            subgroupIndex.forEach(function(d, i) {
              d.sort(function(a, b) {
                return sortSubgroups(matrix[i][a], matrix[i][b]);
              });
            });
          }
          k = (τ - padding * n) / k;
          x = 0, i = -1;
          while (++i < n) {
            x0 = x, j = -1;
            while (++j < n) {
              var di = groupIndex[i],
                  dj = subgroupIndex[di][j],
                  v = matrix[di][dj],
                  a0 = x,
                  a1 = x += v * k;
              subgroups[di + "-" + dj] = {
                index: di,
                subindex: dj,
                startAngle: a0,
                endAngle: a1,
                value: v
              };
            }
            groups[di] = {
              index: di,
              startAngle: x0,
              endAngle: x,
              value: groupSums[di]
            };
            x += padding;
          }
          i = -1;
          while (++i < n) {
            j = i - 1;
            while (++j < n) {
              var source = subgroups[i + "-" + j],
                  target = subgroups[j + "-" + i];
              if (source.value || target.value) {
                chords.push(source.value < target.value ? {
                  source: target,
                  target: source
                } : {
                  source: source,
                  target: target
                });
              }
            }
          }
          if (sortChords)
            resort();
        }
        function resort() {
          chords.sort(function(a, b) {
            return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
          });
        }
        chord.matrix = function(x) {
          if (!arguments.length)
            return matrix;
          n = (matrix = x) && matrix.length;
          chords = groups = null;
          return chord;
        };
        chord.padding = function(x) {
          if (!arguments.length)
            return padding;
          padding = x;
          chords = groups = null;
          return chord;
        };
        chord.sortGroups = function(x) {
          if (!arguments.length)
            return sortGroups;
          sortGroups = x;
          chords = groups = null;
          return chord;
        };
        chord.sortSubgroups = function(x) {
          if (!arguments.length)
            return sortSubgroups;
          sortSubgroups = x;
          chords = null;
          return chord;
        };
        chord.sortChords = function(x) {
          if (!arguments.length)
            return sortChords;
          sortChords = x;
          if (chords)
            resort();
          return chord;
        };
        chord.chords = function() {
          if (!chords)
            relayout();
          return chords;
        };
        chord.groups = function() {
          if (!groups)
            relayout();
          return groups;
        };
        return chord;
      };
      d3.layout.force = function() {
        var force = {},
            event = d3.dispatch("start", "tick", "end"),
            timer,
            size = [1, 1],
            drag,
            alpha,
            friction = .9,
            linkDistance = d3_layout_forceLinkDistance,
            linkStrength = d3_layout_forceLinkStrength,
            charge = -30,
            chargeDistance2 = d3_layout_forceChargeDistance2,
            gravity = .1,
            theta2 = .64,
            nodes = [],
            links = [],
            distances,
            strengths,
            charges;
        function repulse(node) {
          return function(quad, x1, _, x2) {
            if (quad.point !== node) {
              var dx = quad.cx - node.x,
                  dy = quad.cy - node.y,
                  dw = x2 - x1,
                  dn = dx * dx + dy * dy;
              if (dw * dw / theta2 < dn) {
                if (dn < chargeDistance2) {
                  var k = quad.charge / dn;
                  node.px -= dx * k;
                  node.py -= dy * k;
                }
                return true;
              }
              if (quad.point && dn && dn < chargeDistance2) {
                var k = quad.pointCharge / dn;
                node.px -= dx * k;
                node.py -= dy * k;
              }
            }
            return !quad.charge;
          };
        }
        force.tick = function() {
          if ((alpha *= .99) < .005) {
            timer = null;
            event.end({
              type: "end",
              alpha: alpha = 0
            });
            return true;
          }
          var n = nodes.length,
              m = links.length,
              q,
              i,
              o,
              s,
              t,
              l,
              k,
              x,
              y;
          for (i = 0; i < m; ++i) {
            o = links[i];
            s = o.source;
            t = o.target;
            x = t.x - s.x;
            y = t.y - s.y;
            if (l = x * x + y * y) {
              l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
              x *= l;
              y *= l;
              t.x -= x * (k = s.weight + t.weight ? s.weight / (s.weight + t.weight) : .5);
              t.y -= y * k;
              s.x += x * (k = 1 - k);
              s.y += y * k;
            }
          }
          if (k = alpha * gravity) {
            x = size[0] / 2;
            y = size[1] / 2;
            i = -1;
            if (k)
              while (++i < n) {
                o = nodes[i];
                o.x += (x - o.x) * k;
                o.y += (y - o.y) * k;
              }
          }
          if (charge) {
            d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
            i = -1;
            while (++i < n) {
              if (!(o = nodes[i]).fixed) {
                q.visit(repulse(o));
              }
            }
          }
          i = -1;
          while (++i < n) {
            o = nodes[i];
            if (o.fixed) {
              o.x = o.px;
              o.y = o.py;
            } else {
              o.x -= (o.px - (o.px = o.x)) * friction;
              o.y -= (o.py - (o.py = o.y)) * friction;
            }
          }
          event.tick({
            type: "tick",
            alpha: alpha
          });
        };
        force.nodes = function(x) {
          if (!arguments.length)
            return nodes;
          nodes = x;
          return force;
        };
        force.links = function(x) {
          if (!arguments.length)
            return links;
          links = x;
          return force;
        };
        force.size = function(x) {
          if (!arguments.length)
            return size;
          size = x;
          return force;
        };
        force.linkDistance = function(x) {
          if (!arguments.length)
            return linkDistance;
          linkDistance = typeof x === "function" ? x : +x;
          return force;
        };
        force.distance = force.linkDistance;
        force.linkStrength = function(x) {
          if (!arguments.length)
            return linkStrength;
          linkStrength = typeof x === "function" ? x : +x;
          return force;
        };
        force.friction = function(x) {
          if (!arguments.length)
            return friction;
          friction = +x;
          return force;
        };
        force.charge = function(x) {
          if (!arguments.length)
            return charge;
          charge = typeof x === "function" ? x : +x;
          return force;
        };
        force.chargeDistance = function(x) {
          if (!arguments.length)
            return Math.sqrt(chargeDistance2);
          chargeDistance2 = x * x;
          return force;
        };
        force.gravity = function(x) {
          if (!arguments.length)
            return gravity;
          gravity = +x;
          return force;
        };
        force.theta = function(x) {
          if (!arguments.length)
            return Math.sqrt(theta2);
          theta2 = x * x;
          return force;
        };
        force.alpha = function(x) {
          if (!arguments.length)
            return alpha;
          x = +x;
          if (alpha) {
            if (x > 0) {
              alpha = x;
            } else {
              timer.c = null, timer.t = NaN, timer = null;
              event.end({
                type: "end",
                alpha: alpha = 0
              });
            }
          } else if (x > 0) {
            event.start({
              type: "start",
              alpha: alpha = x
            });
            timer = d3_timer(force.tick);
          }
          return force;
        };
        force.start = function() {
          var i,
              n = nodes.length,
              m = links.length,
              w = size[0],
              h = size[1],
              neighbors,
              o;
          for (i = 0; i < n; ++i) {
            (o = nodes[i]).index = i;
            o.weight = 0;
          }
          for (i = 0; i < m; ++i) {
            o = links[i];
            if (typeof o.source == "number")
              o.source = nodes[o.source];
            if (typeof o.target == "number")
              o.target = nodes[o.target];
            ++o.source.weight;
            ++o.target.weight;
          }
          for (i = 0; i < n; ++i) {
            o = nodes[i];
            if (isNaN(o.x))
              o.x = position("x", w);
            if (isNaN(o.y))
              o.y = position("y", h);
            if (isNaN(o.px))
              o.px = o.x;
            if (isNaN(o.py))
              o.py = o.y;
          }
          distances = [];
          if (typeof linkDistance === "function")
            for (i = 0; i < m; ++i)
              distances[i] = +linkDistance.call(this, links[i], i);
          else
            for (i = 0; i < m; ++i)
              distances[i] = linkDistance;
          strengths = [];
          if (typeof linkStrength === "function")
            for (i = 0; i < m; ++i)
              strengths[i] = +linkStrength.call(this, links[i], i);
          else
            for (i = 0; i < m; ++i)
              strengths[i] = linkStrength;
          charges = [];
          if (typeof charge === "function")
            for (i = 0; i < n; ++i)
              charges[i] = +charge.call(this, nodes[i], i);
          else
            for (i = 0; i < n; ++i)
              charges[i] = charge;
          function position(dimension, size) {
            if (!neighbors) {
              neighbors = new Array(n);
              for (j = 0; j < n; ++j) {
                neighbors[j] = [];
              }
              for (j = 0; j < m; ++j) {
                var o = links[j];
                neighbors[o.source.index].push(o.target);
                neighbors[o.target.index].push(o.source);
              }
            }
            var candidates = neighbors[i],
                j = -1,
                l = candidates.length,
                x;
            while (++j < l)
              if (!isNaN(x = candidates[j][dimension]))
                return x;
            return Math.random() * size;
          }
          return force.resume();
        };
        force.resume = function() {
          return force.alpha(.1);
        };
        force.stop = function() {
          return force.alpha(0);
        };
        force.drag = function() {
          if (!drag)
            drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
          if (!arguments.length)
            return drag;
          this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
        };
        function dragmove(d) {
          d.px = d3.event.x, d.py = d3.event.y;
          force.resume();
        }
        return d3.rebind(force, event, "on");
      };
      function d3_layout_forceDragstart(d) {
        d.fixed |= 2;
      }
      function d3_layout_forceDragend(d) {
        d.fixed &= ~6;
      }
      function d3_layout_forceMouseover(d) {
        d.fixed |= 4;
        d.px = d.x, d.py = d.y;
      }
      function d3_layout_forceMouseout(d) {
        d.fixed &= ~4;
      }
      function d3_layout_forceAccumulate(quad, alpha, charges) {
        var cx = 0,
            cy = 0;
        quad.charge = 0;
        if (!quad.leaf) {
          var nodes = quad.nodes,
              n = nodes.length,
              i = -1,
              c;
          while (++i < n) {
            c = nodes[i];
            if (c == null)
              continue;
            d3_layout_forceAccumulate(c, alpha, charges);
            quad.charge += c.charge;
            cx += c.charge * c.cx;
            cy += c.charge * c.cy;
          }
        }
        if (quad.point) {
          if (!quad.leaf) {
            quad.point.x += Math.random() - .5;
            quad.point.y += Math.random() - .5;
          }
          var k = alpha * charges[quad.point.index];
          quad.charge += quad.pointCharge = k;
          cx += k * quad.point.x;
          cy += k * quad.point.y;
        }
        quad.cx = cx / quad.charge;
        quad.cy = cy / quad.charge;
      }
      var d3_layout_forceLinkDistance = 20,
          d3_layout_forceLinkStrength = 1,
          d3_layout_forceChargeDistance2 = Infinity;
      d3.layout.hierarchy = function() {
        var sort = d3_layout_hierarchySort,
            children = d3_layout_hierarchyChildren,
            value = d3_layout_hierarchyValue;
        function hierarchy(root) {
          var stack = [root],
              nodes = [],
              node;
          root.depth = 0;
          while ((node = stack.pop()) != null) {
            nodes.push(node);
            if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
              var n,
                  childs,
                  child;
              while (--n >= 0) {
                stack.push(child = childs[n]);
                child.parent = node;
                child.depth = node.depth + 1;
              }
              if (value)
                node.value = 0;
              node.children = childs;
            } else {
              if (value)
                node.value = +value.call(hierarchy, node, node.depth) || 0;
              delete node.children;
            }
          }
          d3_layout_hierarchyVisitAfter(root, function(node) {
            var childs,
                parent;
            if (sort && (childs = node.children))
              childs.sort(sort);
            if (value && (parent = node.parent))
              parent.value += node.value;
          });
          return nodes;
        }
        hierarchy.sort = function(x) {
          if (!arguments.length)
            return sort;
          sort = x;
          return hierarchy;
        };
        hierarchy.children = function(x) {
          if (!arguments.length)
            return children;
          children = x;
          return hierarchy;
        };
        hierarchy.value = function(x) {
          if (!arguments.length)
            return value;
          value = x;
          return hierarchy;
        };
        hierarchy.revalue = function(root) {
          if (value) {
            d3_layout_hierarchyVisitBefore(root, function(node) {
              if (node.children)
                node.value = 0;
            });
            d3_layout_hierarchyVisitAfter(root, function(node) {
              var parent;
              if (!node.children)
                node.value = +value.call(hierarchy, node, node.depth) || 0;
              if (parent = node.parent)
                parent.value += node.value;
            });
          }
          return root;
        };
        return hierarchy;
      };
      function d3_layout_hierarchyRebind(object, hierarchy) {
        d3.rebind(object, hierarchy, "sort", "children", "value");
        object.nodes = object;
        object.links = d3_layout_hierarchyLinks;
        return object;
      }
      function d3_layout_hierarchyVisitBefore(node, callback) {
        var nodes = [node];
        while ((node = nodes.pop()) != null) {
          callback(node);
          if ((children = node.children) && (n = children.length)) {
            var n,
                children;
            while (--n >= 0)
              nodes.push(children[n]);
          }
        }
      }
      function d3_layout_hierarchyVisitAfter(node, callback) {
        var nodes = [node],
            nodes2 = [];
        while ((node = nodes.pop()) != null) {
          nodes2.push(node);
          if ((children = node.children) && (n = children.length)) {
            var i = -1,
                n,
                children;
            while (++i < n)
              nodes.push(children[i]);
          }
        }
        while ((node = nodes2.pop()) != null) {
          callback(node);
        }
      }
      function d3_layout_hierarchyChildren(d) {
        return d.children;
      }
      function d3_layout_hierarchyValue(d) {
        return d.value;
      }
      function d3_layout_hierarchySort(a, b) {
        return b.value - a.value;
      }
      function d3_layout_hierarchyLinks(nodes) {
        return d3.merge(nodes.map(function(parent) {
          return (parent.children || []).map(function(child) {
            return {
              source: parent,
              target: child
            };
          });
        }));
      }
      d3.layout.partition = function() {
        var hierarchy = d3.layout.hierarchy(),
            size = [1, 1];
        function position(node, x, dx, dy) {
          var children = node.children;
          node.x = x;
          node.y = node.depth * dy;
          node.dx = dx;
          node.dy = dy;
          if (children && (n = children.length)) {
            var i = -1,
                n,
                c,
                d;
            dx = node.value ? dx / node.value : 0;
            while (++i < n) {
              position(c = children[i], x, d = c.value * dx, dy);
              x += d;
            }
          }
        }
        function depth(node) {
          var children = node.children,
              d = 0;
          if (children && (n = children.length)) {
            var i = -1,
                n;
            while (++i < n)
              d = Math.max(d, depth(children[i]));
          }
          return 1 + d;
        }
        function partition(d, i) {
          var nodes = hierarchy.call(this, d, i);
          position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
          return nodes;
        }
        partition.size = function(x) {
          if (!arguments.length)
            return size;
          size = x;
          return partition;
        };
        return d3_layout_hierarchyRebind(partition, hierarchy);
      };
      d3.layout.pie = function() {
        var value = Number,
            sort = d3_layout_pieSortByValue,
            startAngle = 0,
            endAngle = τ,
            padAngle = 0;
        function pie(data) {
          var n = data.length,
              values = data.map(function(d, i) {
                return +value.call(pie, d, i);
              }),
              a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle),
              da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a,
              p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)),
              pa = p * (da < 0 ? -1 : 1),
              sum = d3.sum(values),
              k = sum ? (da - n * pa) / sum : 0,
              index = d3.range(n),
              arcs = [],
              v;
          if (sort != null)
            index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
              return values[j] - values[i];
            } : function(i, j) {
              return sort(data[i], data[j]);
            });
          index.forEach(function(i) {
            arcs[i] = {
              data: data[i],
              value: v = values[i],
              startAngle: a,
              endAngle: a += v * k + pa,
              padAngle: p
            };
          });
          return arcs;
        }
        pie.value = function(_) {
          if (!arguments.length)
            return value;
          value = _;
          return pie;
        };
        pie.sort = function(_) {
          if (!arguments.length)
            return sort;
          sort = _;
          return pie;
        };
        pie.startAngle = function(_) {
          if (!arguments.length)
            return startAngle;
          startAngle = _;
          return pie;
        };
        pie.endAngle = function(_) {
          if (!arguments.length)
            return endAngle;
          endAngle = _;
          return pie;
        };
        pie.padAngle = function(_) {
          if (!arguments.length)
            return padAngle;
          padAngle = _;
          return pie;
        };
        return pie;
      };
      var d3_layout_pieSortByValue = {};
      d3.layout.stack = function() {
        var values = d3_identity,
            order = d3_layout_stackOrderDefault,
            offset = d3_layout_stackOffsetZero,
            out = d3_layout_stackOut,
            x = d3_layout_stackX,
            y = d3_layout_stackY;
        function stack(data, index) {
          if (!(n = data.length))
            return data;
          var series = data.map(function(d, i) {
            return values.call(stack, d, i);
          });
          var points = series.map(function(d) {
            return d.map(function(v, i) {
              return [x.call(stack, v, i), y.call(stack, v, i)];
            });
          });
          var orders = order.call(stack, points, index);
          series = d3.permute(series, orders);
          points = d3.permute(points, orders);
          var offsets = offset.call(stack, points, index);
          var m = series[0].length,
              n,
              i,
              j,
              o;
          for (j = 0; j < m; ++j) {
            out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
            for (i = 1; i < n; ++i) {
              out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
            }
          }
          return data;
        }
        stack.values = function(x) {
          if (!arguments.length)
            return values;
          values = x;
          return stack;
        };
        stack.order = function(x) {
          if (!arguments.length)
            return order;
          order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
          return stack;
        };
        stack.offset = function(x) {
          if (!arguments.length)
            return offset;
          offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
          return stack;
        };
        stack.x = function(z) {
          if (!arguments.length)
            return x;
          x = z;
          return stack;
        };
        stack.y = function(z) {
          if (!arguments.length)
            return y;
          y = z;
          return stack;
        };
        stack.out = function(z) {
          if (!arguments.length)
            return out;
          out = z;
          return stack;
        };
        return stack;
      };
      function d3_layout_stackX(d) {
        return d.x;
      }
      function d3_layout_stackY(d) {
        return d.y;
      }
      function d3_layout_stackOut(d, y0, y) {
        d.y0 = y0;
        d.y = y;
      }
      var d3_layout_stackOrders = d3.map({
        "inside-out": function(data) {
          var n = data.length,
              i,
              j,
              max = data.map(d3_layout_stackMaxIndex),
              sums = data.map(d3_layout_stackReduceSum),
              index = d3.range(n).sort(function(a, b) {
                return max[a] - max[b];
              }),
              top = 0,
              bottom = 0,
              tops = [],
              bottoms = [];
          for (i = 0; i < n; ++i) {
            j = index[i];
            if (top < bottom) {
              top += sums[j];
              tops.push(j);
            } else {
              bottom += sums[j];
              bottoms.push(j);
            }
          }
          return bottoms.reverse().concat(tops);
        },
        reverse: function(data) {
          return d3.range(data.length).reverse();
        },
        "default": d3_layout_stackOrderDefault
      });
      var d3_layout_stackOffsets = d3.map({
        silhouette: function(data) {
          var n = data.length,
              m = data[0].length,
              sums = [],
              max = 0,
              i,
              j,
              o,
              y0 = [];
          for (j = 0; j < m; ++j) {
            for (i = 0, o = 0; i < n; i++)
              o += data[i][j][1];
            if (o > max)
              max = o;
            sums.push(o);
          }
          for (j = 0; j < m; ++j) {
            y0[j] = (max - sums[j]) / 2;
          }
          return y0;
        },
        wiggle: function(data) {
          var n = data.length,
              x = data[0],
              m = x.length,
              i,
              j,
              k,
              s1,
              s2,
              s3,
              dx,
              o,
              o0,
              y0 = [];
          y0[0] = o = o0 = 0;
          for (j = 1; j < m; ++j) {
            for (i = 0, s1 = 0; i < n; ++i)
              s1 += data[i][j][1];
            for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
              for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
                s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
              }
              s2 += s3 * data[i][j][1];
            }
            y0[j] = o -= s1 ? s2 / s1 * dx : 0;
            if (o < o0)
              o0 = o;
          }
          for (j = 0; j < m; ++j)
            y0[j] -= o0;
          return y0;
        },
        expand: function(data) {
          var n = data.length,
              m = data[0].length,
              k = 1 / n,
              i,
              j,
              o,
              y0 = [];
          for (j = 0; j < m; ++j) {
            for (i = 0, o = 0; i < n; i++)
              o += data[i][j][1];
            if (o)
              for (i = 0; i < n; i++)
                data[i][j][1] /= o;
            else
              for (i = 0; i < n; i++)
                data[i][j][1] = k;
          }
          for (j = 0; j < m; ++j)
            y0[j] = 0;
          return y0;
        },
        zero: d3_layout_stackOffsetZero
      });
      function d3_layout_stackOrderDefault(data) {
        return d3.range(data.length);
      }
      function d3_layout_stackOffsetZero(data) {
        var j = -1,
            m = data[0].length,
            y0 = [];
        while (++j < m)
          y0[j] = 0;
        return y0;
      }
      function d3_layout_stackMaxIndex(array) {
        var i = 1,
            j = 0,
            v = array[0][1],
            k,
            n = array.length;
        for (; i < n; ++i) {
          if ((k = array[i][1]) > v) {
            j = i;
            v = k;
          }
        }
        return j;
      }
      function d3_layout_stackReduceSum(d) {
        return d.reduce(d3_layout_stackSum, 0);
      }
      function d3_layout_stackSum(p, d) {
        return p + d[1];
      }
      d3.layout.histogram = function() {
        var frequency = true,
            valuer = Number,
            ranger = d3_layout_histogramRange,
            binner = d3_layout_histogramBinSturges;
        function histogram(data, i) {
          var bins = [],
              values = data.map(valuer, this),
              range = ranger.call(this, values, i),
              thresholds = binner.call(this, range, values, i),
              bin,
              i = -1,
              n = values.length,
              m = thresholds.length - 1,
              k = frequency ? 1 : 1 / n,
              x;
          while (++i < m) {
            bin = bins[i] = [];
            bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
            bin.y = 0;
          }
          if (m > 0) {
            i = -1;
            while (++i < n) {
              x = values[i];
              if (x >= range[0] && x <= range[1]) {
                bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
                bin.y += k;
                bin.push(data[i]);
              }
            }
          }
          return bins;
        }
        histogram.value = function(x) {
          if (!arguments.length)
            return valuer;
          valuer = x;
          return histogram;
        };
        histogram.range = function(x) {
          if (!arguments.length)
            return ranger;
          ranger = d3_functor(x);
          return histogram;
        };
        histogram.bins = function(x) {
          if (!arguments.length)
            return binner;
          binner = typeof x === "number" ? function(range) {
            return d3_layout_histogramBinFixed(range, x);
          } : d3_functor(x);
          return histogram;
        };
        histogram.frequency = function(x) {
          if (!arguments.length)
            return frequency;
          frequency = !!x;
          return histogram;
        };
        return histogram;
      };
      function d3_layout_histogramBinSturges(range, values) {
        return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
      }
      function d3_layout_histogramBinFixed(range, n) {
        var x = -1,
            b = +range[0],
            m = (range[1] - b) / n,
            f = [];
        while (++x <= n)
          f[x] = m * x + b;
        return f;
      }
      function d3_layout_histogramRange(values) {
        return [d3.min(values), d3.max(values)];
      }
      d3.layout.pack = function() {
        var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort),
            padding = 0,
            size = [1, 1],
            radius;
        function pack(d, i) {
          var nodes = hierarchy.call(this, d, i),
              root = nodes[0],
              w = size[0],
              h = size[1],
              r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
                return radius;
              };
          root.x = root.y = 0;
          d3_layout_hierarchyVisitAfter(root, function(d) {
            d.r = +r(d.value);
          });
          d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
          if (padding) {
            var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
            d3_layout_hierarchyVisitAfter(root, function(d) {
              d.r += dr;
            });
            d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
            d3_layout_hierarchyVisitAfter(root, function(d) {
              d.r -= dr;
            });
          }
          d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
          return nodes;
        }
        pack.size = function(_) {
          if (!arguments.length)
            return size;
          size = _;
          return pack;
        };
        pack.radius = function(_) {
          if (!arguments.length)
            return radius;
          radius = _ == null || typeof _ === "function" ? _ : +_;
          return pack;
        };
        pack.padding = function(_) {
          if (!arguments.length)
            return padding;
          padding = +_;
          return pack;
        };
        return d3_layout_hierarchyRebind(pack, hierarchy);
      };
      function d3_layout_packSort(a, b) {
        return a.value - b.value;
      }
      function d3_layout_packInsert(a, b) {
        var c = a._pack_next;
        a._pack_next = b;
        b._pack_prev = a;
        b._pack_next = c;
        c._pack_prev = b;
      }
      function d3_layout_packSplice(a, b) {
        a._pack_next = b;
        b._pack_prev = a;
      }
      function d3_layout_packIntersects(a, b) {
        var dx = b.x - a.x,
            dy = b.y - a.y,
            dr = a.r + b.r;
        return .999 * dr * dr > dx * dx + dy * dy;
      }
      function d3_layout_packSiblings(node) {
        if (!(nodes = node.children) || !(n = nodes.length))
          return;
        var nodes,
            xMin = Infinity,
            xMax = -Infinity,
            yMin = Infinity,
            yMax = -Infinity,
            a,
            b,
            c,
            i,
            j,
            k,
            n;
        function bound(node) {
          xMin = Math.min(node.x - node.r, xMin);
          xMax = Math.max(node.x + node.r, xMax);
          yMin = Math.min(node.y - node.r, yMin);
          yMax = Math.max(node.y + node.r, yMax);
        }
        nodes.forEach(d3_layout_packLink);
        a = nodes[0];
        a.x = -a.r;
        a.y = 0;
        bound(a);
        if (n > 1) {
          b = nodes[1];
          b.x = b.r;
          b.y = 0;
          bound(b);
          if (n > 2) {
            c = nodes[2];
            d3_layout_packPlace(a, b, c);
            bound(c);
            d3_layout_packInsert(a, c);
            a._pack_prev = c;
            d3_layout_packInsert(c, b);
            b = a._pack_next;
            for (i = 3; i < n; i++) {
              d3_layout_packPlace(a, b, c = nodes[i]);
              var isect = 0,
                  s1 = 1,
                  s2 = 1;
              for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
                if (d3_layout_packIntersects(j, c)) {
                  isect = 1;
                  break;
                }
              }
              if (isect == 1) {
                for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
                  if (d3_layout_packIntersects(k, c)) {
                    break;
                  }
                }
              }
              if (isect) {
                if (s1 < s2 || s1 == s2 && b.r < a.r)
                  d3_layout_packSplice(a, b = j);
                else
                  d3_layout_packSplice(a = k, b);
                i--;
              } else {
                d3_layout_packInsert(a, c);
                b = c;
                bound(c);
              }
            }
          }
        }
        var cx = (xMin + xMax) / 2,
            cy = (yMin + yMax) / 2,
            cr = 0;
        for (i = 0; i < n; i++) {
          c = nodes[i];
          c.x -= cx;
          c.y -= cy;
          cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
        }
        node.r = cr;
        nodes.forEach(d3_layout_packUnlink);
      }
      function d3_layout_packLink(node) {
        node._pack_next = node._pack_prev = node;
      }
      function d3_layout_packUnlink(node) {
        delete node._pack_next;
        delete node._pack_prev;
      }
      function d3_layout_packTransform(node, x, y, k) {
        var children = node.children;
        node.x = x += k * node.x;
        node.y = y += k * node.y;
        node.r *= k;
        if (children) {
          var i = -1,
              n = children.length;
          while (++i < n)
            d3_layout_packTransform(children[i], x, y, k);
        }
      }
      function d3_layout_packPlace(a, b, c) {
        var db = a.r + c.r,
            dx = b.x - a.x,
            dy = b.y - a.y;
        if (db && (dx || dy)) {
          var da = b.r + c.r,
              dc = dx * dx + dy * dy;
          da *= da;
          db *= db;
          var x = .5 + (db - da) / (2 * dc),
              y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
          c.x = a.x + x * dx + y * dy;
          c.y = a.y + x * dy - y * dx;
        } else {
          c.x = a.x + db;
          c.y = a.y;
        }
      }
      d3.layout.tree = function() {
        var hierarchy = d3.layout.hierarchy().sort(null).value(null),
            separation = d3_layout_treeSeparation,
            size = [1, 1],
            nodeSize = null;
        function tree(d, i) {
          var nodes = hierarchy.call(this, d, i),
              root0 = nodes[0],
              root1 = wrapTree(root0);
          d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
          d3_layout_hierarchyVisitBefore(root1, secondWalk);
          if (nodeSize)
            d3_layout_hierarchyVisitBefore(root0, sizeNode);
          else {
            var left = root0,
                right = root0,
                bottom = root0;
            d3_layout_hierarchyVisitBefore(root0, function(node) {
              if (node.x < left.x)
                left = node;
              if (node.x > right.x)
                right = node;
              if (node.depth > bottom.depth)
                bottom = node;
            });
            var tx = separation(left, right) / 2 - left.x,
                kx = size[0] / (right.x + separation(right, left) / 2 + tx),
                ky = size[1] / (bottom.depth || 1);
            d3_layout_hierarchyVisitBefore(root0, function(node) {
              node.x = (node.x + tx) * kx;
              node.y = node.depth * ky;
            });
          }
          return nodes;
        }
        function wrapTree(root0) {
          var root1 = {
            A: null,
            children: [root0]
          },
              queue = [root1],
              node1;
          while ((node1 = queue.pop()) != null) {
            for (var children = node1.children,
                child,
                i = 0,
                n = children.length; i < n; ++i) {
              queue.push((children[i] = child = {
                _: children[i],
                parent: node1,
                children: (child = children[i].children) && child.slice() || [],
                A: null,
                a: null,
                z: 0,
                m: 0,
                c: 0,
                s: 0,
                t: null,
                i: i
              }).a = child);
            }
          }
          return root1.children[0];
        }
        function firstWalk(v) {
          var children = v.children,
              siblings = v.parent.children,
              w = v.i ? siblings[v.i - 1] : null;
          if (children.length) {
            d3_layout_treeShift(v);
            var midpoint = (children[0].z + children[children.length - 1].z) / 2;
            if (w) {
              v.z = w.z + separation(v._, w._);
              v.m = v.z - midpoint;
            } else {
              v.z = midpoint;
            }
          } else if (w) {
            v.z = w.z + separation(v._, w._);
          }
          v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
        }
        function secondWalk(v) {
          v._.x = v.z + v.parent.m;
          v.m += v.parent.m;
        }
        function apportion(v, w, ancestor) {
          if (w) {
            var vip = v,
                vop = v,
                vim = w,
                vom = vip.parent.children[0],
                sip = vip.m,
                sop = vop.m,
                sim = vim.m,
                som = vom.m,
                shift;
            while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
              vom = d3_layout_treeLeft(vom);
              vop = d3_layout_treeRight(vop);
              vop.a = v;
              shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
              if (shift > 0) {
                d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
                sip += shift;
                sop += shift;
              }
              sim += vim.m;
              sip += vip.m;
              som += vom.m;
              sop += vop.m;
            }
            if (vim && !d3_layout_treeRight(vop)) {
              vop.t = vim;
              vop.m += sim - sop;
            }
            if (vip && !d3_layout_treeLeft(vom)) {
              vom.t = vip;
              vom.m += sip - som;
              ancestor = v;
            }
          }
          return ancestor;
        }
        function sizeNode(node) {
          node.x *= size[0];
          node.y = node.depth * size[1];
        }
        tree.separation = function(x) {
          if (!arguments.length)
            return separation;
          separation = x;
          return tree;
        };
        tree.size = function(x) {
          if (!arguments.length)
            return nodeSize ? null : size;
          nodeSize = (size = x) == null ? sizeNode : null;
          return tree;
        };
        tree.nodeSize = function(x) {
          if (!arguments.length)
            return nodeSize ? size : null;
          nodeSize = (size = x) == null ? null : sizeNode;
          return tree;
        };
        return d3_layout_hierarchyRebind(tree, hierarchy);
      };
      function d3_layout_treeSeparation(a, b) {
        return a.parent == b.parent ? 1 : 2;
      }
      function d3_layout_treeLeft(v) {
        var children = v.children;
        return children.length ? children[0] : v.t;
      }
      function d3_layout_treeRight(v) {
        var children = v.children,
            n;
        return (n = children.length) ? children[n - 1] : v.t;
      }
      function d3_layout_treeMove(wm, wp, shift) {
        var change = shift / (wp.i - wm.i);
        wp.c -= change;
        wp.s += shift;
        wm.c += change;
        wp.z += shift;
        wp.m += shift;
      }
      function d3_layout_treeShift(v) {
        var shift = 0,
            change = 0,
            children = v.children,
            i = children.length,
            w;
        while (--i >= 0) {
          w = children[i];
          w.z += shift;
          w.m += shift;
          shift += w.s + (change += w.c);
        }
      }
      function d3_layout_treeAncestor(vim, v, ancestor) {
        return vim.a.parent === v.parent ? vim.a : ancestor;
      }
      d3.layout.cluster = function() {
        var hierarchy = d3.layout.hierarchy().sort(null).value(null),
            separation = d3_layout_treeSeparation,
            size = [1, 1],
            nodeSize = false;
        function cluster(d, i) {
          var nodes = hierarchy.call(this, d, i),
              root = nodes[0],
              previousNode,
              x = 0;
          d3_layout_hierarchyVisitAfter(root, function(node) {
            var children = node.children;
            if (children && children.length) {
              node.x = d3_layout_clusterX(children);
              node.y = d3_layout_clusterY(children);
            } else {
              node.x = previousNode ? x += separation(node, previousNode) : 0;
              node.y = 0;
              previousNode = node;
            }
          });
          var left = d3_layout_clusterLeft(root),
              right = d3_layout_clusterRight(root),
              x0 = left.x - separation(left, right) / 2,
              x1 = right.x + separation(right, left) / 2;
          d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
            node.x = (node.x - root.x) * size[0];
            node.y = (root.y - node.y) * size[1];
          } : function(node) {
            node.x = (node.x - x0) / (x1 - x0) * size[0];
            node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
          });
          return nodes;
        }
        cluster.separation = function(x) {
          if (!arguments.length)
            return separation;
          separation = x;
          return cluster;
        };
        cluster.size = function(x) {
          if (!arguments.length)
            return nodeSize ? null : size;
          nodeSize = (size = x) == null;
          return cluster;
        };
        cluster.nodeSize = function(x) {
          if (!arguments.length)
            return nodeSize ? size : null;
          nodeSize = (size = x) != null;
          return cluster;
        };
        return d3_layout_hierarchyRebind(cluster, hierarchy);
      };
      function d3_layout_clusterY(children) {
        return 1 + d3.max(children, function(child) {
          return child.y;
        });
      }
      function d3_layout_clusterX(children) {
        return children.reduce(function(x, child) {
          return x + child.x;
        }, 0) / children.length;
      }
      function d3_layout_clusterLeft(node) {
        var children = node.children;
        return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
      }
      function d3_layout_clusterRight(node) {
        var children = node.children,
            n;
        return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
      }
      d3.layout.treemap = function() {
        var hierarchy = d3.layout.hierarchy(),
            round = Math.round,
            size = [1, 1],
            padding = null,
            pad = d3_layout_treemapPadNull,
            sticky = false,
            stickies,
            mode = "squarify",
            ratio = .5 * (1 + Math.sqrt(5));
        function scale(children, k) {
          var i = -1,
              n = children.length,
              child,
              area;
          while (++i < n) {
            area = (child = children[i]).value * (k < 0 ? 0 : k);
            child.area = isNaN(area) || area <= 0 ? 0 : area;
          }
        }
        function squarify(node) {
          var children = node.children;
          if (children && children.length) {
            var rect = pad(node),
                row = [],
                remaining = children.slice(),
                child,
                best = Infinity,
                score,
                u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy),
                n;
            scale(remaining, rect.dx * rect.dy / node.value);
            row.area = 0;
            while ((n = remaining.length) > 0) {
              row.push(child = remaining[n - 1]);
              row.area += child.area;
              if (mode !== "squarify" || (score = worst(row, u)) <= best) {
                remaining.pop();
                best = score;
              } else {
                row.area -= row.pop().area;
                position(row, u, rect, false);
                u = Math.min(rect.dx, rect.dy);
                row.length = row.area = 0;
                best = Infinity;
              }
            }
            if (row.length) {
              position(row, u, rect, true);
              row.length = row.area = 0;
            }
            children.forEach(squarify);
          }
        }
        function stickify(node) {
          var children = node.children;
          if (children && children.length) {
            var rect = pad(node),
                remaining = children.slice(),
                child,
                row = [];
            scale(remaining, rect.dx * rect.dy / node.value);
            row.area = 0;
            while (child = remaining.pop()) {
              row.push(child);
              row.area += child.area;
              if (child.z != null) {
                position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
                row.length = row.area = 0;
              }
            }
            children.forEach(stickify);
          }
        }
        function worst(row, u) {
          var s = row.area,
              r,
              rmax = 0,
              rmin = Infinity,
              i = -1,
              n = row.length;
          while (++i < n) {
            if (!(r = row[i].area))
              continue;
            if (r < rmin)
              rmin = r;
            if (r > rmax)
              rmax = r;
          }
          s *= s;
          u *= u;
          return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
        }
        function position(row, u, rect, flush) {
          var i = -1,
              n = row.length,
              x = rect.x,
              y = rect.y,
              v = u ? round(row.area / u) : 0,
              o;
          if (u == rect.dx) {
            if (flush || v > rect.dy)
              v = rect.dy;
            while (++i < n) {
              o = row[i];
              o.x = x;
              o.y = y;
              o.dy = v;
              x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
            }
            o.z = true;
            o.dx += rect.x + rect.dx - x;
            rect.y += v;
            rect.dy -= v;
          } else {
            if (flush || v > rect.dx)
              v = rect.dx;
            while (++i < n) {
              o = row[i];
              o.x = x;
              o.y = y;
              o.dx = v;
              y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
            }
            o.z = false;
            o.dy += rect.y + rect.dy - y;
            rect.x += v;
            rect.dx -= v;
          }
        }
        function treemap(d) {
          var nodes = stickies || hierarchy(d),
              root = nodes[0];
          root.x = root.y = 0;
          if (root.value)
            root.dx = size[0], root.dy = size[1];
          else
            root.dx = root.dy = 0;
          if (stickies)
            hierarchy.revalue(root);
          scale([root], root.dx * root.dy / root.value);
          (stickies ? stickify : squarify)(root);
          if (sticky)
            stickies = nodes;
          return nodes;
        }
        treemap.size = function(x) {
          if (!arguments.length)
            return size;
          size = x;
          return treemap;
        };
        treemap.padding = function(x) {
          if (!arguments.length)
            return padding;
          function padFunction(node) {
            var p = x.call(treemap, node, node.depth);
            return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [p, p, p, p] : p);
          }
          function padConstant(node) {
            return d3_layout_treemapPad(node, x);
          }
          var type;
          pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [x, x, x, x], padConstant) : padConstant;
          return treemap;
        };
        treemap.round = function(x) {
          if (!arguments.length)
            return round != Number;
          round = x ? Math.round : Number;
          return treemap;
        };
        treemap.sticky = function(x) {
          if (!arguments.length)
            return sticky;
          sticky = x;
          stickies = null;
          return treemap;
        };
        treemap.ratio = function(x) {
          if (!arguments.length)
            return ratio;
          ratio = x;
          return treemap;
        };
        treemap.mode = function(x) {
          if (!arguments.length)
            return mode;
          mode = x + "";
          return treemap;
        };
        return d3_layout_hierarchyRebind(treemap, hierarchy);
      };
      function d3_layout_treemapPadNull(node) {
        return {
          x: node.x,
          y: node.y,
          dx: node.dx,
          dy: node.dy
        };
      }
      function d3_layout_treemapPad(node, padding) {
        var x = node.x + padding[3],
            y = node.y + padding[0],
            dx = node.dx - padding[1] - padding[3],
            dy = node.dy - padding[0] - padding[2];
        if (dx < 0) {
          x += dx / 2;
          dx = 0;
        }
        if (dy < 0) {
          y += dy / 2;
          dy = 0;
        }
        return {
          x: x,
          y: y,
          dx: dx,
          dy: dy
        };
      }
      d3.random = {
        normal: function(µ, σ) {
          var n = arguments.length;
          if (n < 2)
            σ = 1;
          if (n < 1)
            µ = 0;
          return function() {
            var x,
                y,
                r;
            do {
              x = Math.random() * 2 - 1;
              y = Math.random() * 2 - 1;
              r = x * x + y * y;
            } while (!r || r > 1);
            return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
          };
        },
        logNormal: function() {
          var random = d3.random.normal.apply(d3, arguments);
          return function() {
            return Math.exp(random());
          };
        },
        bates: function(m) {
          var random = d3.random.irwinHall(m);
          return function() {
            return random() / m;
          };
        },
        irwinHall: function(m) {
          return function() {
            for (var s = 0,
                j = 0; j < m; j++)
              s += Math.random();
            return s;
          };
        }
      };
      d3.scale = {};
      function d3_scaleExtent(domain) {
        var start = domain[0],
            stop = domain[domain.length - 1];
        return start < stop ? [start, stop] : [stop, start];
      }
      function d3_scaleRange(scale) {
        return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
      }
      function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
        var u = uninterpolate(domain[0], domain[1]),
            i = interpolate(range[0], range[1]);
        return function(x) {
          return i(u(x));
        };
      }
      function d3_scale_nice(domain, nice) {
        var i0 = 0,
            i1 = domain.length - 1,
            x0 = domain[i0],
            x1 = domain[i1],
            dx;
        if (x1 < x0) {
          dx = i0, i0 = i1, i1 = dx;
          dx = x0, x0 = x1, x1 = dx;
        }
        domain[i0] = nice.floor(x0);
        domain[i1] = nice.ceil(x1);
        return domain;
      }
      function d3_scale_niceStep(step) {
        return step ? {
          floor: function(x) {
            return Math.floor(x / step) * step;
          },
          ceil: function(x) {
            return Math.ceil(x / step) * step;
          }
        } : d3_scale_niceIdentity;
      }
      var d3_scale_niceIdentity = {
        floor: d3_identity,
        ceil: d3_identity
      };
      function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
        var u = [],
            i = [],
            j = 0,
            k = Math.min(domain.length, range.length) - 1;
        if (domain[k] < domain[0]) {
          domain = domain.slice().reverse();
          range = range.slice().reverse();
        }
        while (++j <= k) {
          u.push(uninterpolate(domain[j - 1], domain[j]));
          i.push(interpolate(range[j - 1], range[j]));
        }
        return function(x) {
          var j = d3.bisect(domain, x, 1, k) - 1;
          return i[j](u[j](x));
        };
      }
      d3.scale.linear = function() {
        return d3_scale_linear([0, 1], [0, 1], d3_interpolate, false);
      };
      function d3_scale_linear(domain, range, interpolate, clamp) {
        var output,
            input;
        function rescale() {
          var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear,
              uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
          output = linear(domain, range, uninterpolate, interpolate);
          input = linear(range, domain, uninterpolate, d3_interpolate);
          return scale;
        }
        function scale(x) {
          return output(x);
        }
        scale.invert = function(y) {
          return input(y);
        };
        scale.domain = function(x) {
          if (!arguments.length)
            return domain;
          domain = x.map(Number);
          return rescale();
        };
        scale.range = function(x) {
          if (!arguments.length)
            return range;
          range = x;
          return rescale();
        };
        scale.rangeRound = function(x) {
          return scale.range(x).interpolate(d3_interpolateRound);
        };
        scale.clamp = function(x) {
          if (!arguments.length)
            return clamp;
          clamp = x;
          return rescale();
        };
        scale.interpolate = function(x) {
          if (!arguments.length)
            return interpolate;
          interpolate = x;
          return rescale();
        };
        scale.ticks = function(m) {
          return d3_scale_linearTicks(domain, m);
        };
        scale.tickFormat = function(m, format) {
          return d3_scale_linearTickFormat(domain, m, format);
        };
        scale.nice = function(m) {
          d3_scale_linearNice(domain, m);
          return rescale();
        };
        scale.copy = function() {
          return d3_scale_linear(domain, range, interpolate, clamp);
        };
        return rescale();
      }
      function d3_scale_linearRebind(scale, linear) {
        return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
      }
      function d3_scale_linearNice(domain, m) {
        d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
        d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
        return domain;
      }
      function d3_scale_linearTickRange(domain, m) {
        if (m == null)
          m = 10;
        var extent = d3_scaleExtent(domain),
            span = extent[1] - extent[0],
            step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)),
            err = m / span * step;
        if (err <= .15)
          step *= 10;
        else if (err <= .35)
          step *= 5;
        else if (err <= .75)
          step *= 2;
        extent[0] = Math.ceil(extent[0] / step) * step;
        extent[1] = Math.floor(extent[1] / step) * step + step * .5;
        extent[2] = step;
        return extent;
      }
      function d3_scale_linearTicks(domain, m) {
        return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
      }
      function d3_scale_linearTickFormat(domain, m, format) {
        var range = d3_scale_linearTickRange(domain, m);
        if (format) {
          var match = d3_format_re.exec(format);
          match.shift();
          if (match[8] === "s") {
            var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
            if (!match[7])
              match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
            match[8] = "f";
            format = d3.format(match.join(""));
            return function(d) {
              return format(prefix.scale(d)) + prefix.symbol;
            };
          }
          if (!match[7])
            match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
          format = match.join("");
        } else {
          format = ",." + d3_scale_linearPrecision(range[2]) + "f";
        }
        return d3.format(format);
      }
      var d3_scale_linearFormatSignificant = {
        s: 1,
        g: 1,
        p: 1,
        r: 1,
        e: 1
      };
      function d3_scale_linearPrecision(value) {
        return -Math.floor(Math.log(value) / Math.LN10 + .01);
      }
      function d3_scale_linearFormatPrecision(type, range) {
        var p = d3_scale_linearPrecision(range[2]);
        return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
      }
      d3.scale.log = function() {
        return d3_scale_log(d3.scale.linear().domain([0, 1]), 10, true, [1, 10]);
      };
      function d3_scale_log(linear, base, positive, domain) {
        function log(x) {
          return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
        }
        function pow(x) {
          return positive ? Math.pow(base, x) : -Math.pow(base, -x);
        }
        function scale(x) {
          return linear(log(x));
        }
        scale.invert = function(x) {
          return pow(linear.invert(x));
        };
        scale.domain = function(x) {
          if (!arguments.length)
            return domain;
          positive = x[0] >= 0;
          linear.domain((domain = x.map(Number)).map(log));
          return scale;
        };
        scale.base = function(_) {
          if (!arguments.length)
            return base;
          base = +_;
          linear.domain(domain.map(log));
          return scale;
        };
        scale.nice = function() {
          var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
          linear.domain(niced);
          domain = niced.map(pow);
          return scale;
        };
        scale.ticks = function() {
          var extent = d3_scaleExtent(domain),
              ticks = [],
              u = extent[0],
              v = extent[1],
              i = Math.floor(log(u)),
              j = Math.ceil(log(v)),
              n = base % 1 ? 2 : base;
          if (isFinite(j - i)) {
            if (positive) {
              for (; i < j; i++)
                for (var k = 1; k < n; k++)
                  ticks.push(pow(i) * k);
              ticks.push(pow(i));
            } else {
              ticks.push(pow(i));
              for (; i++ < j; )
                for (var k = n - 1; k > 0; k--)
                  ticks.push(pow(i) * k);
            }
            for (i = 0; ticks[i] < u; i++) {}
            for (j = ticks.length; ticks[j - 1] > v; j--) {}
            ticks = ticks.slice(i, j);
          }
          return ticks;
        };
        scale.tickFormat = function(n, format) {
          if (!arguments.length)
            return d3_scale_logFormat;
          if (arguments.length < 2)
            format = d3_scale_logFormat;
          else if (typeof format !== "function")
            format = d3.format(format);
          var k = Math.max(1, base * n / scale.ticks().length);
          return function(d) {
            var i = d / pow(Math.round(log(d)));
            if (i * base < base - .5)
              i *= base;
            return i <= k ? format(d) : "";
          };
        };
        scale.copy = function() {
          return d3_scale_log(linear.copy(), base, positive, domain);
        };
        return d3_scale_linearRebind(scale, linear);
      }
      var d3_scale_logFormat = d3.format(".0e"),
          d3_scale_logNiceNegative = {
            floor: function(x) {
              return -Math.ceil(-x);
            },
            ceil: function(x) {
              return -Math.floor(-x);
            }
          };
      d3.scale.pow = function() {
        return d3_scale_pow(d3.scale.linear(), 1, [0, 1]);
      };
      function d3_scale_pow(linear, exponent, domain) {
        var powp = d3_scale_powPow(exponent),
            powb = d3_scale_powPow(1 / exponent);
        function scale(x) {
          return linear(powp(x));
        }
        scale.invert = function(x) {
          return powb(linear.invert(x));
        };
        scale.domain = function(x) {
          if (!arguments.length)
            return domain;
          linear.domain((domain = x.map(Number)).map(powp));
          return scale;
        };
        scale.ticks = function(m) {
          return d3_scale_linearTicks(domain, m);
        };
        scale.tickFormat = function(m, format) {
          return d3_scale_linearTickFormat(domain, m, format);
        };
        scale.nice = function(m) {
          return scale.domain(d3_scale_linearNice(domain, m));
        };
        scale.exponent = function(x) {
          if (!arguments.length)
            return exponent;
          powp = d3_scale_powPow(exponent = x);
          powb = d3_scale_powPow(1 / exponent);
          linear.domain(domain.map(powp));
          return scale;
        };
        scale.copy = function() {
          return d3_scale_pow(linear.copy(), exponent, domain);
        };
        return d3_scale_linearRebind(scale, linear);
      }
      function d3_scale_powPow(e) {
        return function(x) {
          return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
        };
      }
      d3.scale.sqrt = function() {
        return d3.scale.pow().exponent(.5);
      };
      d3.scale.ordinal = function() {
        return d3_scale_ordinal([], {
          t: "range",
          a: [[]]
        });
      };
      function d3_scale_ordinal(domain, ranger) {
        var index,
            range,
            rangeBand;
        function scale(x) {
          return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
        }
        function steps(start, step) {
          return d3.range(domain.length).map(function(i) {
            return start + step * i;
          });
        }
        scale.domain = function(x) {
          if (!arguments.length)
            return domain;
          domain = [];
          index = new d3_Map();
          var i = -1,
              n = x.length,
              xi;
          while (++i < n)
            if (!index.has(xi = x[i]))
              index.set(xi, domain.push(xi));
          return scale[ranger.t].apply(scale, ranger.a);
        };
        scale.range = function(x) {
          if (!arguments.length)
            return range;
          range = x;
          rangeBand = 0;
          ranger = {
            t: "range",
            a: arguments
          };
          return scale;
        };
        scale.rangePoints = function(x, padding) {
          if (arguments.length < 2)
            padding = 0;
          var start = x[0],
              stop = x[1],
              step = domain.length < 2 ? (start = (start + stop) / 2, 0) : (stop - start) / (domain.length - 1 + padding);
          range = steps(start + step * padding / 2, step);
          rangeBand = 0;
          ranger = {
            t: "rangePoints",
            a: arguments
          };
          return scale;
        };
        scale.rangeRoundPoints = function(x, padding) {
          if (arguments.length < 2)
            padding = 0;
          var start = x[0],
              stop = x[1],
              step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 0) : (stop - start) / (domain.length - 1 + padding) | 0;
          range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
          rangeBand = 0;
          ranger = {
            t: "rangeRoundPoints",
            a: arguments
          };
          return scale;
        };
        scale.rangeBands = function(x, padding, outerPadding) {
          if (arguments.length < 2)
            padding = 0;
          if (arguments.length < 3)
            outerPadding = padding;
          var reverse = x[1] < x[0],
              start = x[reverse - 0],
              stop = x[1 - reverse],
              step = (stop - start) / (domain.length - padding + 2 * outerPadding);
          range = steps(start + step * outerPadding, step);
          if (reverse)
            range.reverse();
          rangeBand = step * (1 - padding);
          ranger = {
            t: "rangeBands",
            a: arguments
          };
          return scale;
        };
        scale.rangeRoundBands = function(x, padding, outerPadding) {
          if (arguments.length < 2)
            padding = 0;
          if (arguments.length < 3)
            outerPadding = padding;
          var reverse = x[1] < x[0],
              start = x[reverse - 0],
              stop = x[1 - reverse],
              step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
          range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
          if (reverse)
            range.reverse();
          rangeBand = Math.round(step * (1 - padding));
          ranger = {
            t: "rangeRoundBands",
            a: arguments
          };
          return scale;
        };
        scale.rangeBand = function() {
          return rangeBand;
        };
        scale.rangeExtent = function() {
          return d3_scaleExtent(ranger.a[0]);
        };
        scale.copy = function() {
          return d3_scale_ordinal(domain, ranger);
        };
        return scale.domain(domain);
      }
      d3.scale.category10 = function() {
        return d3.scale.ordinal().range(d3_category10);
      };
      d3.scale.category20 = function() {
        return d3.scale.ordinal().range(d3_category20);
      };
      d3.scale.category20b = function() {
        return d3.scale.ordinal().range(d3_category20b);
      };
      d3.scale.category20c = function() {
        return d3.scale.ordinal().range(d3_category20c);
      };
      var d3_category10 = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(d3_rgbString);
      var d3_category20 = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(d3_rgbString);
      var d3_category20b = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(d3_rgbString);
      var d3_category20c = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(d3_rgbString);
      d3.scale.quantile = function() {
        return d3_scale_quantile([], []);
      };
      function d3_scale_quantile(domain, range) {
        var thresholds;
        function rescale() {
          var k = 0,
              q = range.length;
          thresholds = [];
          while (++k < q)
            thresholds[k - 1] = d3.quantile(domain, k / q);
          return scale;
        }
        function scale(x) {
          if (!isNaN(x = +x))
            return range[d3.bisect(thresholds, x)];
        }
        scale.domain = function(x) {
          if (!arguments.length)
            return domain;
          domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
          return rescale();
        };
        scale.range = function(x) {
          if (!arguments.length)
            return range;
          range = x;
          return rescale();
        };
        scale.quantiles = function() {
          return thresholds;
        };
        scale.invertExtent = function(y) {
          y = range.indexOf(y);
          return y < 0 ? [NaN, NaN] : [y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1]];
        };
        scale.copy = function() {
          return d3_scale_quantile(domain, range);
        };
        return rescale();
      }
      d3.scale.quantize = function() {
        return d3_scale_quantize(0, 1, [0, 1]);
      };
      function d3_scale_quantize(x0, x1, range) {
        var kx,
            i;
        function scale(x) {
          return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
        }
        function rescale() {
          kx = range.length / (x1 - x0);
          i = range.length - 1;
          return scale;
        }
        scale.domain = function(x) {
          if (!arguments.length)
            return [x0, x1];
          x0 = +x[0];
          x1 = +x[x.length - 1];
          return rescale();
        };
        scale.range = function(x) {
          if (!arguments.length)
            return range;
          range = x;
          return rescale();
        };
        scale.invertExtent = function(y) {
          y = range.indexOf(y);
          y = y < 0 ? NaN : y / kx + x0;
          return [y, y + 1 / kx];
        };
        scale.copy = function() {
          return d3_scale_quantize(x0, x1, range);
        };
        return rescale();
      }
      d3.scale.threshold = function() {
        return d3_scale_threshold([.5], [0, 1]);
      };
      function d3_scale_threshold(domain, range) {
        function scale(x) {
          if (x <= x)
            return range[d3.bisect(domain, x)];
        }
        scale.domain = function(_) {
          if (!arguments.length)
            return domain;
          domain = _;
          return scale;
        };
        scale.range = function(_) {
          if (!arguments.length)
            return range;
          range = _;
          return scale;
        };
        scale.invertExtent = function(y) {
          y = range.indexOf(y);
          return [domain[y - 1], domain[y]];
        };
        scale.copy = function() {
          return d3_scale_threshold(domain, range);
        };
        return scale;
      }
      d3.scale.identity = function() {
        return d3_scale_identity([0, 1]);
      };
      function d3_scale_identity(domain) {
        function identity(x) {
          return +x;
        }
        identity.invert = identity;
        identity.domain = identity.range = function(x) {
          if (!arguments.length)
            return domain;
          domain = x.map(identity);
          return identity;
        };
        identity.ticks = function(m) {
          return d3_scale_linearTicks(domain, m);
        };
        identity.tickFormat = function(m, format) {
          return d3_scale_linearTickFormat(domain, m, format);
        };
        identity.copy = function() {
          return d3_scale_identity(domain);
        };
        return identity;
      }
      d3.svg = {};
      function d3_zero() {
        return 0;
      }
      d3.svg.arc = function() {
        var innerRadius = d3_svg_arcInnerRadius,
            outerRadius = d3_svg_arcOuterRadius,
            cornerRadius = d3_zero,
            padRadius = d3_svg_arcAuto,
            startAngle = d3_svg_arcStartAngle,
            endAngle = d3_svg_arcEndAngle,
            padAngle = d3_svg_arcPadAngle;
        function arc() {
          var r0 = Math.max(0, +innerRadius.apply(this, arguments)),
              r1 = Math.max(0, +outerRadius.apply(this, arguments)),
              a0 = startAngle.apply(this, arguments) - halfπ,
              a1 = endAngle.apply(this, arguments) - halfπ,
              da = Math.abs(a1 - a0),
              cw = a0 > a1 ? 0 : 1;
          if (r1 < r0)
            rc = r1, r1 = r0, r0 = rc;
          if (da >= τε)
            return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
          var rc,
              cr,
              rp,
              ap,
              p0 = 0,
              p1 = 0,
              x0,
              y0,
              x1,
              y1,
              x2,
              y2,
              x3,
              y3,
              path = [];
          if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
            rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
            if (!cw)
              p1 *= -1;
            if (r1)
              p1 = d3_asin(rp / r1 * Math.sin(ap));
            if (r0)
              p0 = d3_asin(rp / r0 * Math.sin(ap));
          }
          if (r1) {
            x0 = r1 * Math.cos(a0 + p1);
            y0 = r1 * Math.sin(a0 + p1);
            x1 = r1 * Math.cos(a1 - p1);
            y1 = r1 * Math.sin(a1 - p1);
            var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
            if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
              var h1 = (a0 + a1) / 2;
              x0 = r1 * Math.cos(h1);
              y0 = r1 * Math.sin(h1);
              x1 = y1 = null;
            }
          } else {
            x0 = y0 = 0;
          }
          if (r0) {
            x2 = r0 * Math.cos(a1 - p0);
            y2 = r0 * Math.sin(a1 - p0);
            x3 = r0 * Math.cos(a0 + p0);
            y3 = r0 * Math.sin(a0 + p0);
            var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
            if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
              var h0 = (a0 + a1) / 2;
              x2 = r0 * Math.cos(h0);
              y2 = r0 * Math.sin(h0);
              x3 = y3 = null;
            }
          } else {
            x2 = y2 = 0;
          }
          if (da > ε && (rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
            cr = r0 < r1 ^ cw ? 0 : 1;
            var rc1 = rc,
                rc0 = rc;
            if (da < π) {
              var oc = x3 == null ? [x2, y2] : x1 == null ? [x0, y0] : d3_geom_polygonIntersect([x0, y0], [x3, y3], [x1, y1], [x2, y2]),
                  ax = x0 - oc[0],
                  ay = y0 - oc[1],
                  bx = x1 - oc[0],
                  by = y1 - oc[1],
                  kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2),
                  lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
              rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
              rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
            }
            if (x1 != null) {
              var t30 = d3_svg_arcCornerTangents(x3 == null ? [x2, y2] : [x3, y3], [x0, y0], r1, rc1, cw),
                  t12 = d3_svg_arcCornerTangents([x1, y1], [x2, y2], r1, rc1, cw);
              if (rc === rc1) {
                path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
              } else {
                path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
              }
            } else {
              path.push("M", x0, ",", y0);
            }
            if (x3 != null) {
              var t03 = d3_svg_arcCornerTangents([x0, y0], [x3, y3], r0, -rc0, cw),
                  t21 = d3_svg_arcCornerTangents([x2, y2], x1 == null ? [x0, y0] : [x1, y1], r0, -rc0, cw);
              if (rc === rc0) {
                path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
              } else {
                path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
              }
            } else {
              path.push("L", x2, ",", y2);
            }
          } else {
            path.push("M", x0, ",", y0);
            if (x1 != null)
              path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
            path.push("L", x2, ",", y2);
            if (x3 != null)
              path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
          }
          path.push("Z");
          return path.join("");
        }
        function circleSegment(r1, cw) {
          return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
        }
        arc.innerRadius = function(v) {
          if (!arguments.length)
            return innerRadius;
          innerRadius = d3_functor(v);
          return arc;
        };
        arc.outerRadius = function(v) {
          if (!arguments.length)
            return outerRadius;
          outerRadius = d3_functor(v);
          return arc;
        };
        arc.cornerRadius = function(v) {
          if (!arguments.length)
            return cornerRadius;
          cornerRadius = d3_functor(v);
          return arc;
        };
        arc.padRadius = function(v) {
          if (!arguments.length)
            return padRadius;
          padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
          return arc;
        };
        arc.startAngle = function(v) {
          if (!arguments.length)
            return startAngle;
          startAngle = d3_functor(v);
          return arc;
        };
        arc.endAngle = function(v) {
          if (!arguments.length)
            return endAngle;
          endAngle = d3_functor(v);
          return arc;
        };
        arc.padAngle = function(v) {
          if (!arguments.length)
            return padAngle;
          padAngle = d3_functor(v);
          return arc;
        };
        arc.centroid = function() {
          var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
              a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
          return [Math.cos(a) * r, Math.sin(a) * r];
        };
        return arc;
      };
      var d3_svg_arcAuto = "auto";
      function d3_svg_arcInnerRadius(d) {
        return d.innerRadius;
      }
      function d3_svg_arcOuterRadius(d) {
        return d.outerRadius;
      }
      function d3_svg_arcStartAngle(d) {
        return d.startAngle;
      }
      function d3_svg_arcEndAngle(d) {
        return d.endAngle;
      }
      function d3_svg_arcPadAngle(d) {
        return d && d.padAngle;
      }
      function d3_svg_arcSweep(x0, y0, x1, y1) {
        return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
      }
      function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
        var x01 = p0[0] - p1[0],
            y01 = p0[1] - p1[1],
            lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01),
            ox = lo * y01,
            oy = -lo * x01,
            x1 = p0[0] + ox,
            y1 = p0[1] + oy,
            x2 = p1[0] + ox,
            y2 = p1[1] + oy,
            x3 = (x1 + x2) / 2,
            y3 = (y1 + y2) / 2,
            dx = x2 - x1,
            dy = y2 - y1,
            d2 = dx * dx + dy * dy,
            r = r1 - rc,
            D = x1 * y2 - x2 * y1,
            d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)),
            cx0 = (D * dy - dx * d) / d2,
            cy0 = (-D * dx - dy * d) / d2,
            cx1 = (D * dy + dx * d) / d2,
            cy1 = (-D * dx + dy * d) / d2,
            dx0 = cx0 - x3,
            dy0 = cy0 - y3,
            dx1 = cx1 - x3,
            dy1 = cy1 - y3;
        if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1)
          cx0 = cx1, cy0 = cy1;
        return [[cx0 - ox, cy0 - oy], [cx0 * r1 / r, cy0 * r1 / r]];
      }
      function d3_svg_line(projection) {
        var x = d3_geom_pointX,
            y = d3_geom_pointY,
            defined = d3_true,
            interpolate = d3_svg_lineLinear,
            interpolateKey = interpolate.key,
            tension = .7;
        function line(data) {
          var segments = [],
              points = [],
              i = -1,
              n = data.length,
              d,
              fx = d3_functor(x),
              fy = d3_functor(y);
          function segment() {
            segments.push("M", interpolate(projection(points), tension));
          }
          while (++i < n) {
            if (defined.call(this, d = data[i], i)) {
              points.push([+fx.call(this, d, i), +fy.call(this, d, i)]);
            } else if (points.length) {
              segment();
              points = [];
            }
          }
          if (points.length)
            segment();
          return segments.length ? segments.join("") : null;
        }
        line.x = function(_) {
          if (!arguments.length)
            return x;
          x = _;
          return line;
        };
        line.y = function(_) {
          if (!arguments.length)
            return y;
          y = _;
          return line;
        };
        line.defined = function(_) {
          if (!arguments.length)
            return defined;
          defined = _;
          return line;
        };
        line.interpolate = function(_) {
          if (!arguments.length)
            return interpolateKey;
          if (typeof _ === "function")
            interpolateKey = interpolate = _;
          else
            interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
          return line;
        };
        line.tension = function(_) {
          if (!arguments.length)
            return tension;
          tension = _;
          return line;
        };
        return line;
      }
      d3.svg.line = function() {
        return d3_svg_line(d3_identity);
      };
      var d3_svg_lineInterpolators = d3.map({
        linear: d3_svg_lineLinear,
        "linear-closed": d3_svg_lineLinearClosed,
        step: d3_svg_lineStep,
        "step-before": d3_svg_lineStepBefore,
        "step-after": d3_svg_lineStepAfter,
        basis: d3_svg_lineBasis,
        "basis-open": d3_svg_lineBasisOpen,
        "basis-closed": d3_svg_lineBasisClosed,
        bundle: d3_svg_lineBundle,
        cardinal: d3_svg_lineCardinal,
        "cardinal-open": d3_svg_lineCardinalOpen,
        "cardinal-closed": d3_svg_lineCardinalClosed,
        monotone: d3_svg_lineMonotone
      });
      d3_svg_lineInterpolators.forEach(function(key, value) {
        value.key = key;
        value.closed = /-closed$/.test(key);
      });
      function d3_svg_lineLinear(points) {
        return points.length > 1 ? points.join("L") : points + "Z";
      }
      function d3_svg_lineLinearClosed(points) {
        return points.join("L") + "Z";
      }
      function d3_svg_lineStep(points) {
        var i = 0,
            n = points.length,
            p = points[0],
            path = [p[0], ",", p[1]];
        while (++i < n)
          path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
        if (n > 1)
          path.push("H", p[0]);
        return path.join("");
      }
      function d3_svg_lineStepBefore(points) {
        var i = 0,
            n = points.length,
            p = points[0],
            path = [p[0], ",", p[1]];
        while (++i < n)
          path.push("V", (p = points[i])[1], "H", p[0]);
        return path.join("");
      }
      function d3_svg_lineStepAfter(points) {
        var i = 0,
            n = points.length,
            p = points[0],
            path = [p[0], ",", p[1]];
        while (++i < n)
          path.push("H", (p = points[i])[0], "V", p[1]);
        return path.join("");
      }
      function d3_svg_lineCardinalOpen(points, tension) {
        return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
      }
      function d3_svg_lineCardinalClosed(points, tension) {
        return points.length < 3 ? d3_svg_lineLinearClosed(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), points), d3_svg_lineCardinalTangents([points[points.length - 2]].concat(points, [points[1]]), tension));
      }
      function d3_svg_lineCardinal(points, tension) {
        return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
      }
      function d3_svg_lineHermite(points, tangents) {
        if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
          return d3_svg_lineLinear(points);
        }
        var quad = points.length != tangents.length,
            path = "",
            p0 = points[0],
            p = points[1],
            t0 = tangents[0],
            t = t0,
            pi = 1;
        if (quad) {
          path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
          p0 = points[1];
          pi = 2;
        }
        if (tangents.length > 1) {
          t = tangents[1];
          p = points[pi];
          pi++;
          path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
          for (var i = 2; i < tangents.length; i++, pi++) {
            p = points[pi];
            t = tangents[i];
            path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
          }
        }
        if (quad) {
          var lp = points[pi];
          path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
        }
        return path;
      }
      function d3_svg_lineCardinalTangents(points, tension) {
        var tangents = [],
            a = (1 - tension) / 2,
            p0,
            p1 = points[0],
            p2 = points[1],
            i = 1,
            n = points.length;
        while (++i < n) {
          p0 = p1;
          p1 = p2;
          p2 = points[i];
          tangents.push([a * (p2[0] - p0[0]), a * (p2[1] - p0[1])]);
        }
        return tangents;
      }
      function d3_svg_lineBasis(points) {
        if (points.length < 3)
          return d3_svg_lineLinear(points);
        var i = 1,
            n = points.length,
            pi = points[0],
            x0 = pi[0],
            y0 = pi[1],
            px = [x0, x0, x0, (pi = points[1])[0]],
            py = [y0, y0, y0, pi[1]],
            path = [x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py)];
        points.push(points[n - 1]);
        while (++i <= n) {
          pi = points[i];
          px.shift();
          px.push(pi[0]);
          py.shift();
          py.push(pi[1]);
          d3_svg_lineBasisBezier(path, px, py);
        }
        points.pop();
        path.push("L", pi);
        return path.join("");
      }
      function d3_svg_lineBasisOpen(points) {
        if (points.length < 4)
          return d3_svg_lineLinear(points);
        var path = [],
            i = -1,
            n = points.length,
            pi,
            px = [0],
            py = [0];
        while (++i < 3) {
          pi = points[i];
          px.push(pi[0]);
          py.push(pi[1]);
        }
        path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
        --i;
        while (++i < n) {
          pi = points[i];
          px.shift();
          px.push(pi[0]);
          py.shift();
          py.push(pi[1]);
          d3_svg_lineBasisBezier(path, px, py);
        }
        return path.join("");
      }
      function d3_svg_lineBasisClosed(points) {
        var path,
            i = -1,
            n = points.length,
            m = n + 4,
            pi,
            px = [],
            py = [];
        while (++i < 4) {
          pi = points[i % n];
          px.push(pi[0]);
          py.push(pi[1]);
        }
        path = [d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py)];
        --i;
        while (++i < m) {
          pi = points[i % n];
          px.shift();
          px.push(pi[0]);
          py.shift();
          py.push(pi[1]);
          d3_svg_lineBasisBezier(path, px, py);
        }
        return path.join("");
      }
      function d3_svg_lineBundle(points, tension) {
        var n = points.length - 1;
        if (n) {
          var x0 = points[0][0],
              y0 = points[0][1],
              dx = points[n][0] - x0,
              dy = points[n][1] - y0,
              i = -1,
              p,
              t;
          while (++i <= n) {
            p = points[i];
            t = i / n;
            p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
            p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
          }
        }
        return d3_svg_lineBasis(points);
      }
      function d3_svg_lineDot4(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
      }
      var d3_svg_lineBasisBezier1 = [0, 2 / 3, 1 / 3, 0],
          d3_svg_lineBasisBezier2 = [0, 1 / 3, 2 / 3, 0],
          d3_svg_lineBasisBezier3 = [0, 1 / 6, 2 / 3, 1 / 6];
      function d3_svg_lineBasisBezier(path, x, y) {
        path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
      }
      function d3_svg_lineSlope(p0, p1) {
        return (p1[1] - p0[1]) / (p1[0] - p0[0]);
      }
      function d3_svg_lineFiniteDifferences(points) {
        var i = 0,
            j = points.length - 1,
            m = [],
            p0 = points[0],
            p1 = points[1],
            d = m[0] = d3_svg_lineSlope(p0, p1);
        while (++i < j) {
          m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
        }
        m[i] = d;
        return m;
      }
      function d3_svg_lineMonotoneTangents(points) {
        var tangents = [],
            d,
            a,
            b,
            s,
            m = d3_svg_lineFiniteDifferences(points),
            i = -1,
            j = points.length - 1;
        while (++i < j) {
          d = d3_svg_lineSlope(points[i], points[i + 1]);
          if (abs(d) < ε) {
            m[i] = m[i + 1] = 0;
          } else {
            a = m[i] / d;
            b = m[i + 1] / d;
            s = a * a + b * b;
            if (s > 9) {
              s = d * 3 / Math.sqrt(s);
              m[i] = s * a;
              m[i + 1] = s * b;
            }
          }
        }
        i = -1;
        while (++i <= j) {
          s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
          tangents.push([s || 0, m[i] * s || 0]);
        }
        return tangents;
      }
      function d3_svg_lineMonotone(points) {
        return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
      }
      d3.svg.line.radial = function() {
        var line = d3_svg_line(d3_svg_lineRadial);
        line.radius = line.x, delete line.x;
        line.angle = line.y, delete line.y;
        return line;
      };
      function d3_svg_lineRadial(points) {
        var point,
            i = -1,
            n = points.length,
            r,
            a;
        while (++i < n) {
          point = points[i];
          r = point[0];
          a = point[1] - halfπ;
          point[0] = r * Math.cos(a);
          point[1] = r * Math.sin(a);
        }
        return points;
      }
      function d3_svg_area(projection) {
        var x0 = d3_geom_pointX,
            x1 = d3_geom_pointX,
            y0 = 0,
            y1 = d3_geom_pointY,
            defined = d3_true,
            interpolate = d3_svg_lineLinear,
            interpolateKey = interpolate.key,
            interpolateReverse = interpolate,
            L = "L",
            tension = .7;
        function area(data) {
          var segments = [],
              points0 = [],
              points1 = [],
              i = -1,
              n = data.length,
              d,
              fx0 = d3_functor(x0),
              fy0 = d3_functor(y0),
              fx1 = x0 === x1 ? function() {
                return x;
              } : d3_functor(x1),
              fy1 = y0 === y1 ? function() {
                return y;
              } : d3_functor(y1),
              x,
              y;
          function segment() {
            segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
          }
          while (++i < n) {
            if (defined.call(this, d = data[i], i)) {
              points0.push([x = +fx0.call(this, d, i), y = +fy0.call(this, d, i)]);
              points1.push([+fx1.call(this, d, i), +fy1.call(this, d, i)]);
            } else if (points0.length) {
              segment();
              points0 = [];
              points1 = [];
            }
          }
          if (points0.length)
            segment();
          return segments.length ? segments.join("") : null;
        }
        area.x = function(_) {
          if (!arguments.length)
            return x1;
          x0 = x1 = _;
          return area;
        };
        area.x0 = function(_) {
          if (!arguments.length)
            return x0;
          x0 = _;
          return area;
        };
        area.x1 = function(_) {
          if (!arguments.length)
            return x1;
          x1 = _;
          return area;
        };
        area.y = function(_) {
          if (!arguments.length)
            return y1;
          y0 = y1 = _;
          return area;
        };
        area.y0 = function(_) {
          if (!arguments.length)
            return y0;
          y0 = _;
          return area;
        };
        area.y1 = function(_) {
          if (!arguments.length)
            return y1;
          y1 = _;
          return area;
        };
        area.defined = function(_) {
          if (!arguments.length)
            return defined;
          defined = _;
          return area;
        };
        area.interpolate = function(_) {
          if (!arguments.length)
            return interpolateKey;
          if (typeof _ === "function")
            interpolateKey = interpolate = _;
          else
            interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
          interpolateReverse = interpolate.reverse || interpolate;
          L = interpolate.closed ? "M" : "L";
          return area;
        };
        area.tension = function(_) {
          if (!arguments.length)
            return tension;
          tension = _;
          return area;
        };
        return area;
      }
      d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
      d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
      d3.svg.area = function() {
        return d3_svg_area(d3_identity);
      };
      d3.svg.area.radial = function() {
        var area = d3_svg_area(d3_svg_lineRadial);
        area.radius = area.x, delete area.x;
        area.innerRadius = area.x0, delete area.x0;
        area.outerRadius = area.x1, delete area.x1;
        area.angle = area.y, delete area.y;
        area.startAngle = area.y0, delete area.y0;
        area.endAngle = area.y1, delete area.y1;
        return area;
      };
      d3.svg.chord = function() {
        var source = d3_source,
            target = d3_target,
            radius = d3_svg_chordRadius,
            startAngle = d3_svg_arcStartAngle,
            endAngle = d3_svg_arcEndAngle;
        function chord(d, i) {
          var s = subgroup(this, source, d, i),
              t = subgroup(this, target, d, i);
          return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
        }
        function subgroup(self, f, d, i) {
          var subgroup = f.call(self, d, i),
              r = radius.call(self, subgroup, i),
              a0 = startAngle.call(self, subgroup, i) - halfπ,
              a1 = endAngle.call(self, subgroup, i) - halfπ;
          return {
            r: r,
            a0: a0,
            a1: a1,
            p0: [r * Math.cos(a0), r * Math.sin(a0)],
            p1: [r * Math.cos(a1), r * Math.sin(a1)]
          };
        }
        function equals(a, b) {
          return a.a0 == b.a0 && a.a1 == b.a1;
        }
        function arc(r, p, a) {
          return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
        }
        function curve(r0, p0, r1, p1) {
          return "Q 0,0 " + p1;
        }
        chord.radius = function(v) {
          if (!arguments.length)
            return radius;
          radius = d3_functor(v);
          return chord;
        };
        chord.source = function(v) {
          if (!arguments.length)
            return source;
          source = d3_functor(v);
          return chord;
        };
        chord.target = function(v) {
          if (!arguments.length)
            return target;
          target = d3_functor(v);
          return chord;
        };
        chord.startAngle = function(v) {
          if (!arguments.length)
            return startAngle;
          startAngle = d3_functor(v);
          return chord;
        };
        chord.endAngle = function(v) {
          if (!arguments.length)
            return endAngle;
          endAngle = d3_functor(v);
          return chord;
        };
        return chord;
      };
      function d3_svg_chordRadius(d) {
        return d.radius;
      }
      d3.svg.diagonal = function() {
        var source = d3_source,
            target = d3_target,
            projection = d3_svg_diagonalProjection;
        function diagonal(d, i) {
          var p0 = source.call(this, d, i),
              p3 = target.call(this, d, i),
              m = (p0.y + p3.y) / 2,
              p = [p0, {
                x: p0.x,
                y: m
              }, {
                x: p3.x,
                y: m
              }, p3];
          p = p.map(projection);
          return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
        }
        diagonal.source = function(x) {
          if (!arguments.length)
            return source;
          source = d3_functor(x);
          return diagonal;
        };
        diagonal.target = function(x) {
          if (!arguments.length)
            return target;
          target = d3_functor(x);
          return diagonal;
        };
        diagonal.projection = function(x) {
          if (!arguments.length)
            return projection;
          projection = x;
          return diagonal;
        };
        return diagonal;
      };
      function d3_svg_diagonalProjection(d) {
        return [d.x, d.y];
      }
      d3.svg.diagonal.radial = function() {
        var diagonal = d3.svg.diagonal(),
            projection = d3_svg_diagonalProjection,
            projection_ = diagonal.projection;
        diagonal.projection = function(x) {
          return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
        };
        return diagonal;
      };
      function d3_svg_diagonalRadialProjection(projection) {
        return function() {
          var d = projection.apply(this, arguments),
              r = d[0],
              a = d[1] - halfπ;
          return [r * Math.cos(a), r * Math.sin(a)];
        };
      }
      d3.svg.symbol = function() {
        var type = d3_svg_symbolType,
            size = d3_svg_symbolSize;
        function symbol(d, i) {
          return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
        }
        symbol.type = function(x) {
          if (!arguments.length)
            return type;
          type = d3_functor(x);
          return symbol;
        };
        symbol.size = function(x) {
          if (!arguments.length)
            return size;
          size = d3_functor(x);
          return symbol;
        };
        return symbol;
      };
      function d3_svg_symbolSize() {
        return 64;
      }
      function d3_svg_symbolType() {
        return "circle";
      }
      function d3_svg_symbolCircle(size) {
        var r = Math.sqrt(size / π);
        return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
      }
      var d3_svg_symbols = d3.map({
        circle: d3_svg_symbolCircle,
        cross: function(size) {
          var r = Math.sqrt(size / 5) / 2;
          return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
        },
        diamond: function(size) {
          var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)),
              rx = ry * d3_svg_symbolTan30;
          return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
        },
        square: function(size) {
          var r = Math.sqrt(size) / 2;
          return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
        },
        "triangle-down": function(size) {
          var rx = Math.sqrt(size / d3_svg_symbolSqrt3),
              ry = rx * d3_svg_symbolSqrt3 / 2;
          return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
        },
        "triangle-up": function(size) {
          var rx = Math.sqrt(size / d3_svg_symbolSqrt3),
              ry = rx * d3_svg_symbolSqrt3 / 2;
          return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
        }
      });
      d3.svg.symbolTypes = d3_svg_symbols.keys();
      var d3_svg_symbolSqrt3 = Math.sqrt(3),
          d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
      d3_selectionPrototype.transition = function(name) {
        var id = d3_transitionInheritId || ++d3_transitionId,
            ns = d3_transitionNamespace(name),
            subgroups = [],
            subgroup,
            node,
            transition = d3_transitionInherit || {
              time: Date.now(),
              ease: d3_ease_cubicInOut,
              delay: 0,
              duration: 250
            };
        for (var j = -1,
            m = this.length; ++j < m; ) {
          subgroups.push(subgroup = []);
          for (var group = this[j],
              i = -1,
              n = group.length; ++i < n; ) {
            if (node = group[i])
              d3_transitionNode(node, i, ns, id, transition);
            subgroup.push(node);
          }
        }
        return d3_transition(subgroups, ns, id);
      };
      d3_selectionPrototype.interrupt = function(name) {
        return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
      };
      var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
      function d3_selection_interruptNS(ns) {
        return function() {
          var lock,
              activeId,
              active;
          if ((lock = this[ns]) && (active = lock[activeId = lock.active])) {
            active.timer.c = null;
            active.timer.t = NaN;
            if (--lock.count)
              delete lock[activeId];
            else
              delete this[ns];
            lock.active += .5;
            active.event && active.event.interrupt.call(this, this.__data__, active.index);
          }
        };
      }
      function d3_transition(groups, ns, id) {
        d3_subclass(groups, d3_transitionPrototype);
        groups.namespace = ns;
        groups.id = id;
        return groups;
      }
      var d3_transitionPrototype = [],
          d3_transitionId = 0,
          d3_transitionInheritId,
          d3_transitionInherit;
      d3_transitionPrototype.call = d3_selectionPrototype.call;
      d3_transitionPrototype.empty = d3_selectionPrototype.empty;
      d3_transitionPrototype.node = d3_selectionPrototype.node;
      d3_transitionPrototype.size = d3_selectionPrototype.size;
      d3.transition = function(selection, name) {
        return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d3.selection().transition(selection);
      };
      d3.transition.prototype = d3_transitionPrototype;
      d3_transitionPrototype.select = function(selector) {
        var id = this.id,
            ns = this.namespace,
            subgroups = [],
            subgroup,
            subnode,
            node;
        selector = d3_selection_selector(selector);
        for (var j = -1,
            m = this.length; ++j < m; ) {
          subgroups.push(subgroup = []);
          for (var group = this[j],
              i = -1,
              n = group.length; ++i < n; ) {
            if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
              if ("__data__" in node)
                subnode.__data__ = node.__data__;
              d3_transitionNode(subnode, i, ns, id, node[ns][id]);
              subgroup.push(subnode);
            } else {
              subgroup.push(null);
            }
          }
        }
        return d3_transition(subgroups, ns, id);
      };
      d3_transitionPrototype.selectAll = function(selector) {
        var id = this.id,
            ns = this.namespace,
            subgroups = [],
            subgroup,
            subnodes,
            node,
            subnode,
            transition;
        selector = d3_selection_selectorAll(selector);
        for (var j = -1,
            m = this.length; ++j < m; ) {
          for (var group = this[j],
              i = -1,
              n = group.length; ++i < n; ) {
            if (node = group[i]) {
              transition = node[ns][id];
              subnodes = selector.call(node, node.__data__, i, j);
              subgroups.push(subgroup = []);
              for (var k = -1,
                  o = subnodes.length; ++k < o; ) {
                if (subnode = subnodes[k])
                  d3_transitionNode(subnode, k, ns, id, transition);
                subgroup.push(subnode);
              }
            }
          }
        }
        return d3_transition(subgroups, ns, id);
      };
      d3_transitionPrototype.filter = function(filter) {
        var subgroups = [],
            subgroup,
            group,
            node;
        if (typeof filter !== "function")
          filter = d3_selection_filter(filter);
        for (var j = 0,
            m = this.length; j < m; j++) {
          subgroups.push(subgroup = []);
          for (var group = this[j],
              i = 0,
              n = group.length; i < n; i++) {
            if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
              subgroup.push(node);
            }
          }
        }
        return d3_transition(subgroups, this.namespace, this.id);
      };
      d3_transitionPrototype.tween = function(name, tween) {
        var id = this.id,
            ns = this.namespace;
        if (arguments.length < 2)
          return this.node()[ns][id].tween.get(name);
        return d3_selection_each(this, tween == null ? function(node) {
          node[ns][id].tween.remove(name);
        } : function(node) {
          node[ns][id].tween.set(name, tween);
        });
      };
      function d3_transition_tween(groups, name, value, tween) {
        var id = groups.id,
            ns = groups.namespace;
        return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
          node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
        } : (value = tween(value), function(node) {
          node[ns][id].tween.set(name, value);
        }));
      }
      d3_transitionPrototype.attr = function(nameNS, value) {
        if (arguments.length < 2) {
          for (value in nameNS)
            this.attr(value, nameNS[value]);
          return this;
        }
        var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate,
            name = d3.ns.qualify(nameNS);
        function attrNull() {
          this.removeAttribute(name);
        }
        function attrNullNS() {
          this.removeAttributeNS(name.space, name.local);
        }
        function attrTween(b) {
          return b == null ? attrNull : (b += "", function() {
            var a = this.getAttribute(name),
                i;
            return a !== b && (i = interpolate(a, b), function(t) {
              this.setAttribute(name, i(t));
            });
          });
        }
        function attrTweenNS(b) {
          return b == null ? attrNullNS : (b += "", function() {
            var a = this.getAttributeNS(name.space, name.local),
                i;
            return a !== b && (i = interpolate(a, b), function(t) {
              this.setAttributeNS(name.space, name.local, i(t));
            });
          });
        }
        return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
      };
      d3_transitionPrototype.attrTween = function(nameNS, tween) {
        var name = d3.ns.qualify(nameNS);
        function attrTween(d, i) {
          var f = tween.call(this, d, i, this.getAttribute(name));
          return f && function(t) {
            this.setAttribute(name, f(t));
          };
        }
        function attrTweenNS(d, i) {
          var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
          return f && function(t) {
            this.setAttributeNS(name.space, name.local, f(t));
          };
        }
        return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
      };
      d3_transitionPrototype.style = function(name, value, priority) {
        var n = arguments.length;
        if (n < 3) {
          if (typeof name !== "string") {
            if (n < 2)
              value = "";
            for (priority in name)
              this.style(priority, name[priority], value);
            return this;
          }
          priority = "";
        }
        function styleNull() {
          this.style.removeProperty(name);
        }
        function styleString(b) {
          return b == null ? styleNull : (b += "", function() {
            var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name),
                i;
            return a !== b && (i = d3_interpolate(a, b), function(t) {
              this.style.setProperty(name, i(t), priority);
            });
          });
        }
        return d3_transition_tween(this, "style." + name, value, styleString);
      };
      d3_transitionPrototype.styleTween = function(name, tween, priority) {
        if (arguments.length < 3)
          priority = "";
        function styleTween(d, i) {
          var f = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
          return f && function(t) {
            this.style.setProperty(name, f(t), priority);
          };
        }
        return this.tween("style." + name, styleTween);
      };
      d3_transitionPrototype.text = function(value) {
        return d3_transition_tween(this, "text", value, d3_transition_text);
      };
      function d3_transition_text(b) {
        if (b == null)
          b = "";
        return function() {
          this.textContent = b;
        };
      }
      d3_transitionPrototype.remove = function() {
        var ns = this.namespace;
        return this.each("end.transition", function() {
          var p;
          if (this[ns].count < 2 && (p = this.parentNode))
            p.removeChild(this);
        });
      };
      d3_transitionPrototype.ease = function(value) {
        var id = this.id,
            ns = this.namespace;
        if (arguments.length < 1)
          return this.node()[ns][id].ease;
        if (typeof value !== "function")
          value = d3.ease.apply(d3, arguments);
        return d3_selection_each(this, function(node) {
          node[ns][id].ease = value;
        });
      };
      d3_transitionPrototype.delay = function(value) {
        var id = this.id,
            ns = this.namespace;
        if (arguments.length < 1)
          return this.node()[ns][id].delay;
        return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
          node[ns][id].delay = +value.call(node, node.__data__, i, j);
        } : (value = +value, function(node) {
          node[ns][id].delay = value;
        }));
      };
      d3_transitionPrototype.duration = function(value) {
        var id = this.id,
            ns = this.namespace;
        if (arguments.length < 1)
          return this.node()[ns][id].duration;
        return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
          node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
        } : (value = Math.max(1, value), function(node) {
          node[ns][id].duration = value;
        }));
      };
      d3_transitionPrototype.each = function(type, listener) {
        var id = this.id,
            ns = this.namespace;
        if (arguments.length < 2) {
          var inherit = d3_transitionInherit,
              inheritId = d3_transitionInheritId;
          try {
            d3_transitionInheritId = id;
            d3_selection_each(this, function(node, i, j) {
              d3_transitionInherit = node[ns][id];
              type.call(node, node.__data__, i, j);
            });
          } finally {
            d3_transitionInherit = inherit;
            d3_transitionInheritId = inheritId;
          }
        } else {
          d3_selection_each(this, function(node) {
            var transition = node[ns][id];
            (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener);
          });
        }
        return this;
      };
      d3_transitionPrototype.transition = function() {
        var id0 = this.id,
            id1 = ++d3_transitionId,
            ns = this.namespace,
            subgroups = [],
            subgroup,
            group,
            node,
            transition;
        for (var j = 0,
            m = this.length; j < m; j++) {
          subgroups.push(subgroup = []);
          for (var group = this[j],
              i = 0,
              n = group.length; i < n; i++) {
            if (node = group[i]) {
              transition = node[ns][id0];
              d3_transitionNode(node, i, ns, id1, {
                time: transition.time,
                ease: transition.ease,
                delay: transition.delay + transition.duration,
                duration: transition.duration
              });
            }
            subgroup.push(node);
          }
        }
        return d3_transition(subgroups, ns, id1);
      };
      function d3_transitionNamespace(name) {
        return name == null ? "__transition__" : "__transition_" + name + "__";
      }
      function d3_transitionNode(node, i, ns, id, inherit) {
        var lock = node[ns] || (node[ns] = {
          active: 0,
          count: 0
        }),
            transition = lock[id],
            time,
            timer,
            duration,
            ease,
            tweens;
        function schedule(elapsed) {
          var delay = transition.delay;
          timer.t = delay + time;
          if (delay <= elapsed)
            return start(elapsed - delay);
          timer.c = start;
        }
        function start(elapsed) {
          var activeId = lock.active,
              active = lock[activeId];
          if (active) {
            active.timer.c = null;
            active.timer.t = NaN;
            --lock.count;
            delete lock[activeId];
            active.event && active.event.interrupt.call(node, node.__data__, active.index);
          }
          for (var cancelId in lock) {
            if (+cancelId < id) {
              var cancel = lock[cancelId];
              cancel.timer.c = null;
              cancel.timer.t = NaN;
              --lock.count;
              delete lock[cancelId];
            }
          }
          timer.c = tick;
          d3_timer(function() {
            if (timer.c && tick(elapsed || 1)) {
              timer.c = null;
              timer.t = NaN;
            }
            return 1;
          }, 0, time);
          lock.active = id;
          transition.event && transition.event.start.call(node, node.__data__, i);
          tweens = [];
          transition.tween.forEach(function(key, value) {
            if (value = value.call(node, node.__data__, i)) {
              tweens.push(value);
            }
          });
          ease = transition.ease;
          duration = transition.duration;
        }
        function tick(elapsed) {
          var t = elapsed / duration,
              e = ease(t),
              n = tweens.length;
          while (n > 0) {
            tweens[--n].call(node, e);
          }
          if (t >= 1) {
            transition.event && transition.event.end.call(node, node.__data__, i);
            if (--lock.count)
              delete lock[id];
            else
              delete node[ns];
            return 1;
          }
        }
        if (!transition) {
          time = inherit.time;
          timer = d3_timer(schedule, 0, time);
          transition = lock[id] = {
            tween: new d3_Map(),
            time: time,
            timer: timer,
            delay: inherit.delay,
            duration: inherit.duration,
            ease: inherit.ease,
            index: i
          };
          inherit = null;
          ++lock.count;
        }
      }
      d3.svg.axis = function() {
        var scale = d3.scale.linear(),
            orient = d3_svg_axisDefaultOrient,
            innerTickSize = 6,
            outerTickSize = 6,
            tickPadding = 3,
            tickArguments_ = [10],
            tickValues = null,
            tickFormat_;
        function axis(g) {
          g.each(function() {
            var g = d3.select(this);
            var scale0 = this.__chart__ || scale,
                scale1 = this.__chart__ = scale.copy();
            var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues,
                tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_,
                tick = g.selectAll(".tick").data(ticks, scale1),
                tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε),
                tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(),
                tickUpdate = d3.transition(tick.order()).style("opacity", 1),
                tickSpacing = Math.max(innerTickSize, 0) + tickPadding,
                tickTransform;
            var range = d3_scaleRange(scale1),
                path = g.selectAll(".domain").data([0]),
                pathUpdate = (path.enter().append("path").attr("class", "domain"), d3.transition(path));
            tickEnter.append("line");
            tickEnter.append("text");
            var lineEnter = tickEnter.select("line"),
                lineUpdate = tickUpdate.select("line"),
                text = tick.select("text").text(tickFormat),
                textEnter = tickEnter.select("text"),
                textUpdate = tickUpdate.select("text"),
                sign = orient === "top" || orient === "left" ? -1 : 1,
                x1,
                x2,
                y1,
                y2;
            if (orient === "bottom" || orient === "top") {
              tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
              text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
              pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
            } else {
              tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
              text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
              pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
            }
            lineEnter.attr(y2, sign * innerTickSize);
            textEnter.attr(y1, sign * tickSpacing);
            lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
            textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
            if (scale1.rangeBand) {
              var x = scale1,
                  dx = x.rangeBand() / 2;
              scale0 = scale1 = function(d) {
                return x(d) + dx;
              };
            } else if (scale0.rangeBand) {
              scale0 = scale1;
            } else {
              tickExit.call(tickTransform, scale1, scale0);
            }
            tickEnter.call(tickTransform, scale0, scale1);
            tickUpdate.call(tickTransform, scale1, scale1);
          });
        }
        axis.scale = function(x) {
          if (!arguments.length)
            return scale;
          scale = x;
          return axis;
        };
        axis.orient = function(x) {
          if (!arguments.length)
            return orient;
          orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
          return axis;
        };
        axis.ticks = function() {
          if (!arguments.length)
            return tickArguments_;
          tickArguments_ = d3_array(arguments);
          return axis;
        };
        axis.tickValues = function(x) {
          if (!arguments.length)
            return tickValues;
          tickValues = x;
          return axis;
        };
        axis.tickFormat = function(x) {
          if (!arguments.length)
            return tickFormat_;
          tickFormat_ = x;
          return axis;
        };
        axis.tickSize = function(x) {
          var n = arguments.length;
          if (!n)
            return innerTickSize;
          innerTickSize = +x;
          outerTickSize = +arguments[n - 1];
          return axis;
        };
        axis.innerTickSize = function(x) {
          if (!arguments.length)
            return innerTickSize;
          innerTickSize = +x;
          return axis;
        };
        axis.outerTickSize = function(x) {
          if (!arguments.length)
            return outerTickSize;
          outerTickSize = +x;
          return axis;
        };
        axis.tickPadding = function(x) {
          if (!arguments.length)
            return tickPadding;
          tickPadding = +x;
          return axis;
        };
        axis.tickSubdivide = function() {
          return arguments.length && axis;
        };
        return axis;
      };
      var d3_svg_axisDefaultOrient = "bottom",
          d3_svg_axisOrients = {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
          };
      function d3_svg_axisX(selection, x0, x1) {
        selection.attr("transform", function(d) {
          var v0 = x0(d);
          return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
        });
      }
      function d3_svg_axisY(selection, y0, y1) {
        selection.attr("transform", function(d) {
          var v0 = y0(d);
          return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
        });
      }
      d3.svg.brush = function() {
        var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"),
            x = null,
            y = null,
            xExtent = [0, 0],
            yExtent = [0, 0],
            xExtentDomain,
            yExtentDomain,
            xClamp = true,
            yClamp = true,
            resizes = d3_svg_brushResizes[0];
        function brush(g) {
          g.each(function() {
            var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
            var background = g.selectAll(".background").data([0]);
            background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
            g.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
            var resize = g.selectAll(".resize").data(resizes, d3_identity);
            resize.exit().remove();
            resize.enter().append("g").attr("class", function(d) {
              return "resize " + d;
            }).style("cursor", function(d) {
              return d3_svg_brushCursor[d];
            }).append("rect").attr("x", function(d) {
              return /[ew]$/.test(d) ? -3 : null;
            }).attr("y", function(d) {
              return /^[ns]/.test(d) ? -3 : null;
            }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
            resize.style("display", brush.empty() ? "none" : null);
            var gUpdate = d3.transition(g),
                backgroundUpdate = d3.transition(background),
                range;
            if (x) {
              range = d3_scaleRange(x);
              backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
              redrawX(gUpdate);
            }
            if (y) {
              range = d3_scaleRange(y);
              backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
              redrawY(gUpdate);
            }
            redraw(gUpdate);
          });
        }
        brush.event = function(g) {
          g.each(function() {
            var event_ = event.of(this, arguments),
                extent1 = {
                  x: xExtent,
                  y: yExtent,
                  i: xExtentDomain,
                  j: yExtentDomain
                },
                extent0 = this.__chart__ || extent1;
            this.__chart__ = extent1;
            if (d3_transitionInheritId) {
              d3.select(this).transition().each("start.brush", function() {
                xExtentDomain = extent0.i;
                yExtentDomain = extent0.j;
                xExtent = extent0.x;
                yExtent = extent0.y;
                event_({type: "brushstart"});
              }).tween("brush:brush", function() {
                var xi = d3_interpolateArray(xExtent, extent1.x),
                    yi = d3_interpolateArray(yExtent, extent1.y);
                xExtentDomain = yExtentDomain = null;
                return function(t) {
                  xExtent = extent1.x = xi(t);
                  yExtent = extent1.y = yi(t);
                  event_({
                    type: "brush",
                    mode: "resize"
                  });
                };
              }).each("end.brush", function() {
                xExtentDomain = extent1.i;
                yExtentDomain = extent1.j;
                event_({
                  type: "brush",
                  mode: "resize"
                });
                event_({type: "brushend"});
              });
            } else {
              event_({type: "brushstart"});
              event_({
                type: "brush",
                mode: "resize"
              });
              event_({type: "brushend"});
            }
          });
        };
        function redraw(g) {
          g.selectAll(".resize").attr("transform", function(d) {
            return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
          });
        }
        function redrawX(g) {
          g.select(".extent").attr("x", xExtent[0]);
          g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
        }
        function redrawY(g) {
          g.select(".extent").attr("y", yExtent[0]);
          g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
        }
        function brushstart() {
          var target = this,
              eventTarget = d3.select(d3.event.target),
              event_ = event.of(target, arguments),
              g = d3.select(target),
              resizing = eventTarget.datum(),
              resizingX = !/^(n|s)$/.test(resizing) && x,
              resizingY = !/^(e|w)$/.test(resizing) && y,
              dragging = eventTarget.classed("extent"),
              dragRestore = d3_event_dragSuppress(target),
              center,
              origin = d3.mouse(target),
              offset;
          var w = d3.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);
          if (d3.event.changedTouches) {
            w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
          } else {
            w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
          }
          g.interrupt().selectAll("*").interrupt();
          if (dragging) {
            origin[0] = xExtent[0] - origin[0];
            origin[1] = yExtent[0] - origin[1];
          } else if (resizing) {
            var ex = +/w$/.test(resizing),
                ey = +/^n/.test(resizing);
            offset = [xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1]];
            origin[0] = xExtent[ex];
            origin[1] = yExtent[ey];
          } else if (d3.event.altKey)
            center = origin.slice();
          g.style("pointer-events", "none").selectAll(".resize").style("display", null);
          d3.select("body").style("cursor", eventTarget.style("cursor"));
          event_({type: "brushstart"});
          brushmove();
          function keydown() {
            if (d3.event.keyCode == 32) {
              if (!dragging) {
                center = null;
                origin[0] -= xExtent[1];
                origin[1] -= yExtent[1];
                dragging = 2;
              }
              d3_eventPreventDefault();
            }
          }
          function keyup() {
            if (d3.event.keyCode == 32 && dragging == 2) {
              origin[0] += xExtent[1];
              origin[1] += yExtent[1];
              dragging = 0;
              d3_eventPreventDefault();
            }
          }
          function brushmove() {
            var point = d3.mouse(target),
                moved = false;
            if (offset) {
              point[0] += offset[0];
              point[1] += offset[1];
            }
            if (!dragging) {
              if (d3.event.altKey) {
                if (!center)
                  center = [(xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2];
                origin[0] = xExtent[+(point[0] < center[0])];
                origin[1] = yExtent[+(point[1] < center[1])];
              } else
                center = null;
            }
            if (resizingX && move1(point, x, 0)) {
              redrawX(g);
              moved = true;
            }
            if (resizingY && move1(point, y, 1)) {
              redrawY(g);
              moved = true;
            }
            if (moved) {
              redraw(g);
              event_({
                type: "brush",
                mode: dragging ? "move" : "resize"
              });
            }
          }
          function move1(point, scale, i) {
            var range = d3_scaleRange(scale),
                r0 = range[0],
                r1 = range[1],
                position = origin[i],
                extent = i ? yExtent : xExtent,
                size = extent[1] - extent[0],
                min,
                max;
            if (dragging) {
              r0 -= position;
              r1 -= size + position;
            }
            min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
            if (dragging) {
              max = (min += position) + size;
            } else {
              if (center)
                position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
              if (position < min) {
                max = min;
                min = position;
              } else {
                max = position;
              }
            }
            if (extent[0] != min || extent[1] != max) {
              if (i)
                yExtentDomain = null;
              else
                xExtentDomain = null;
              extent[0] = min;
              extent[1] = max;
              return true;
            }
          }
          function brushend() {
            brushmove();
            g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
            d3.select("body").style("cursor", null);
            w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
            dragRestore();
            event_({type: "brushend"});
          }
        }
        brush.x = function(z) {
          if (!arguments.length)
            return x;
          x = z;
          resizes = d3_svg_brushResizes[!x << 1 | !y];
          return brush;
        };
        brush.y = function(z) {
          if (!arguments.length)
            return y;
          y = z;
          resizes = d3_svg_brushResizes[!x << 1 | !y];
          return brush;
        };
        brush.clamp = function(z) {
          if (!arguments.length)
            return x && y ? [xClamp, yClamp] : x ? xClamp : y ? yClamp : null;
          if (x && y)
            xClamp = !!z[0], yClamp = !!z[1];
          else if (x)
            xClamp = !!z;
          else if (y)
            yClamp = !!z;
          return brush;
        };
        brush.extent = function(z) {
          var x0,
              x1,
              y0,
              y1,
              t;
          if (!arguments.length) {
            if (x) {
              if (xExtentDomain) {
                x0 = xExtentDomain[0], x1 = xExtentDomain[1];
              } else {
                x0 = xExtent[0], x1 = xExtent[1];
                if (x.invert)
                  x0 = x.invert(x0), x1 = x.invert(x1);
                if (x1 < x0)
                  t = x0, x0 = x1, x1 = t;
              }
            }
            if (y) {
              if (yExtentDomain) {
                y0 = yExtentDomain[0], y1 = yExtentDomain[1];
              } else {
                y0 = yExtent[0], y1 = yExtent[1];
                if (y.invert)
                  y0 = y.invert(y0), y1 = y.invert(y1);
                if (y1 < y0)
                  t = y0, y0 = y1, y1 = t;
              }
            }
            return x && y ? [[x0, y0], [x1, y1]] : x ? [x0, x1] : y && [y0, y1];
          }
          if (x) {
            x0 = z[0], x1 = z[1];
            if (y)
              x0 = x0[0], x1 = x1[0];
            xExtentDomain = [x0, x1];
            if (x.invert)
              x0 = x(x0), x1 = x(x1);
            if (x1 < x0)
              t = x0, x0 = x1, x1 = t;
            if (x0 != xExtent[0] || x1 != xExtent[1])
              xExtent = [x0, x1];
          }
          if (y) {
            y0 = z[0], y1 = z[1];
            if (x)
              y0 = y0[1], y1 = y1[1];
            yExtentDomain = [y0, y1];
            if (y.invert)
              y0 = y(y0), y1 = y(y1);
            if (y1 < y0)
              t = y0, y0 = y1, y1 = t;
            if (y0 != yExtent[0] || y1 != yExtent[1])
              yExtent = [y0, y1];
          }
          return brush;
        };
        brush.clear = function() {
          if (!brush.empty()) {
            xExtent = [0, 0], yExtent = [0, 0];
            xExtentDomain = yExtentDomain = null;
          }
          return brush;
        };
        brush.empty = function() {
          return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
        };
        return d3.rebind(brush, event, "on");
      };
      var d3_svg_brushCursor = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
      };
      var d3_svg_brushResizes = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []];
      var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
      var d3_time_formatUtc = d3_time_format.utc;
      var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
      d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
      function d3_time_formatIsoNative(date) {
        return date.toISOString();
      }
      d3_time_formatIsoNative.parse = function(string) {
        var date = new Date(string);
        return isNaN(date) ? null : date;
      };
      d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
      d3_time.second = d3_time_interval(function(date) {
        return new d3_date(Math.floor(date / 1e3) * 1e3);
      }, function(date, offset) {
        date.setTime(date.getTime() + Math.floor(offset) * 1e3);
      }, function(date) {
        return date.getSeconds();
      });
      d3_time.seconds = d3_time.second.range;
      d3_time.seconds.utc = d3_time.second.utc.range;
      d3_time.minute = d3_time_interval(function(date) {
        return new d3_date(Math.floor(date / 6e4) * 6e4);
      }, function(date, offset) {
        date.setTime(date.getTime() + Math.floor(offset) * 6e4);
      }, function(date) {
        return date.getMinutes();
      });
      d3_time.minutes = d3_time.minute.range;
      d3_time.minutes.utc = d3_time.minute.utc.range;
      d3_time.hour = d3_time_interval(function(date) {
        var timezone = date.getTimezoneOffset() / 60;
        return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
      }, function(date, offset) {
        date.setTime(date.getTime() + Math.floor(offset) * 36e5);
      }, function(date) {
        return date.getHours();
      });
      d3_time.hours = d3_time.hour.range;
      d3_time.hours.utc = d3_time.hour.utc.range;
      d3_time.month = d3_time_interval(function(date) {
        date = d3_time.day(date);
        date.setDate(1);
        return date;
      }, function(date, offset) {
        date.setMonth(date.getMonth() + offset);
      }, function(date) {
        return date.getMonth();
      });
      d3_time.months = d3_time.month.range;
      d3_time.months.utc = d3_time.month.utc.range;
      function d3_time_scale(linear, methods, format) {
        function scale(x) {
          return linear(x);
        }
        scale.invert = function(x) {
          return d3_time_scaleDate(linear.invert(x));
        };
        scale.domain = function(x) {
          if (!arguments.length)
            return linear.domain().map(d3_time_scaleDate);
          linear.domain(x);
          return scale;
        };
        function tickMethod(extent, count) {
          var span = extent[1] - extent[0],
              target = span / count,
              i = d3.bisect(d3_time_scaleSteps, target);
          return i == d3_time_scaleSteps.length ? [methods.year, d3_scale_linearTickRange(extent.map(function(d) {
            return d / 31536e6;
          }), count)[2]] : !i ? [d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2]] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
        }
        scale.nice = function(interval, skip) {
          var domain = scale.domain(),
              extent = d3_scaleExtent(domain),
              method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
          if (method)
            interval = method[0], skip = method[1];
          function skipped(date) {
            return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
          }
          return scale.domain(d3_scale_nice(domain, skip > 1 ? {
            floor: function(date) {
              while (skipped(date = interval.floor(date)))
                date = d3_time_scaleDate(date - 1);
              return date;
            },
            ceil: function(date) {
              while (skipped(date = interval.ceil(date)))
                date = d3_time_scaleDate(+date + 1);
              return date;
            }
          } : interval));
        };
        scale.ticks = function(interval, skip) {
          var extent = d3_scaleExtent(scale.domain()),
              method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [{range: interval}, skip];
          if (method)
            interval = method[0], skip = method[1];
          return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
        };
        scale.tickFormat = function() {
          return format;
        };
        scale.copy = function() {
          return d3_time_scale(linear.copy(), methods, format);
        };
        return d3_scale_linearRebind(scale, linear);
      }
      function d3_time_scaleDate(t) {
        return new Date(t);
      }
      var d3_time_scaleSteps = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6];
      var d3_time_scaleLocalMethods = [[d3_time.second, 1], [d3_time.second, 5], [d3_time.second, 15], [d3_time.second, 30], [d3_time.minute, 1], [d3_time.minute, 5], [d3_time.minute, 15], [d3_time.minute, 30], [d3_time.hour, 1], [d3_time.hour, 3], [d3_time.hour, 6], [d3_time.hour, 12], [d3_time.day, 1], [d3_time.day, 2], [d3_time.week, 1], [d3_time.month, 1], [d3_time.month, 3], [d3_time.year, 1]];
      var d3_time_scaleLocalFormat = d3_time_format.multi([[".%L", function(d) {
        return d.getMilliseconds();
      }], [":%S", function(d) {
        return d.getSeconds();
      }], ["%I:%M", function(d) {
        return d.getMinutes();
      }], ["%I %p", function(d) {
        return d.getHours();
      }], ["%a %d", function(d) {
        return d.getDay() && d.getDate() != 1;
      }], ["%b %d", function(d) {
        return d.getDate() != 1;
      }], ["%B", function(d) {
        return d.getMonth();
      }], ["%Y", d3_true]]);
      var d3_time_scaleMilliseconds = {
        range: function(start, stop, step) {
          return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
        },
        floor: d3_identity,
        ceil: d3_identity
      };
      d3_time_scaleLocalMethods.year = d3_time.year;
      d3_time.scale = function() {
        return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
      };
      var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
        return [m[0].utc, m[1]];
      });
      var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([[".%L", function(d) {
        return d.getUTCMilliseconds();
      }], [":%S", function(d) {
        return d.getUTCSeconds();
      }], ["%I:%M", function(d) {
        return d.getUTCMinutes();
      }], ["%I %p", function(d) {
        return d.getUTCHours();
      }], ["%a %d", function(d) {
        return d.getUTCDay() && d.getUTCDate() != 1;
      }], ["%b %d", function(d) {
        return d.getUTCDate() != 1;
      }], ["%B", function(d) {
        return d.getUTCMonth();
      }], ["%Y", d3_true]]);
      d3_time_scaleUtcMethods.year = d3_time.year.utc;
      d3_time.scale.utc = function() {
        return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
      };
      d3.text = d3_xhrType(function(request) {
        return request.responseText;
      });
      d3.json = function(url, callback) {
        return d3_xhr(url, "application/json", d3_json, callback);
      };
      function d3_json(request) {
        return JSON.parse(request.responseText);
      }
      d3.html = function(url, callback) {
        return d3_xhr(url, "text/html", d3_html, callback);
      };
      function d3_html(request) {
        var range = d3_document.createRange();
        range.selectNode(d3_document.body);
        return range.createContextualFragment(request.responseText);
      }
      d3.xml = d3_xhrType(function(request) {
        return request.responseXML;
      });
      if (typeof define === "function" && define.amd)
        this.d3 = d3, define(d3);
      else if (typeof module === "object" && module.exports)
        module.exports = d3;
      else
        this.d3 = d3;
    }();
  })();
  return _retrieveGlobal();
});

$__System.registerDynamic("15", ["14"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('14');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("16", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  var base,
      base1,
      base2,
      base3;
  if (window.Epoch == null) {
    window.Epoch = {};
  }
  if ((base = window.Epoch).Chart == null) {
    base.Chart = {};
  }
  if ((base1 = window.Epoch).Time == null) {
    base1.Time = {};
  }
  if ((base2 = window.Epoch).Util == null) {
    base2.Util = {};
  }
  if ((base3 = window.Epoch).Formats == null) {
    base3.Formats = {};
  }
  Epoch.warn = function(msg) {
    return (console.warn || console.log)("Epoch Warning: " + msg);
  };
  Epoch.exception = function(msg) {
    throw "Epoch Error: " + msg;
  };
  Epoch.TestContext = (function() {
    var VOID_METHODS;
    VOID_METHODS = ['arc', 'arcTo', 'beginPath', 'bezierCurveTo', 'clearRect', 'clip', 'closePath', 'drawImage', 'fill', 'fillRect', 'fillText', 'moveTo', 'quadraticCurveTo', 'rect', 'restore', 'rotate', 'save', 'scale', 'scrollPathIntoView', 'setLineDash', 'setTransform', 'stroke', 'strokeRect', 'strokeText', 'transform', 'translate', 'lineTo'];
    function TestContext() {
      var i,
          len,
          method;
      this._log = [];
      for (i = 0, len = VOID_METHODS.length; i < len; i++) {
        method = VOID_METHODS[i];
        this._makeFauxMethod(method);
      }
    }
    TestContext.prototype._makeFauxMethod = function(name) {
      return this[name] = function() {
        var arg;
        return this._log.push(name + "(" + (((function() {
          var i,
              len,
              results;
          results = [];
          for (i = 0, len = arguments.length; i < len; i++) {
            arg = arguments[i];
            results.push(arg.toString());
          }
          return results;
        }).apply(this, arguments)).join(',')) + ")");
      };
    };
    TestContext.prototype.getImageData = function() {
      var arg;
      this._log.push("getImageData(" + (((function() {
        var i,
            len,
            results;
        results = [];
        for (i = 0, len = arguments.length; i < len; i++) {
          arg = arguments[i];
          results.push(arg.toString());
        }
        return results;
      }).apply(this, arguments)).join(',')) + ")");
      return {
        width: 0,
        height: 0,
        resolution: 1.0,
        data: []
      };
    };
    return TestContext;
  })();
  var ref,
      typeFunction,
      hasProp = {}.hasOwnProperty;
  typeFunction = function(objectName) {
    return function(v) {
      return Object.prototype.toString.call(v) === ("[object " + objectName + "]");
    };
  };
  Epoch.isArray = (ref = Array.isArray) != null ? ref : typeFunction('Array');
  Epoch.isObject = typeFunction('Object');
  Epoch.isString = typeFunction('String');
  Epoch.isFunction = typeFunction('Function');
  Epoch.isNumber = typeFunction('Number');
  Epoch.isElement = function(v) {
    if (typeof HTMLElement !== "undefined" && HTMLElement !== null) {
      return v instanceof HTMLElement;
    } else {
      return (v != null) && Epoch.isObject(v) && v.nodeType === 1 && Epoch.isString(v.nodeName);
    }
  };
  Epoch.isNonEmptyArray = function(v) {
    return Epoch.isArray(v) && v.length > 0;
  };
  Epoch.Util.copy = function(original) {
    var copy,
        k,
        v;
    if (original == null) {
      return null;
    }
    copy = {};
    for (k in original) {
      if (!hasProp.call(original, k))
        continue;
      v = original[k];
      copy[k] = v;
    }
    return copy;
  };
  Epoch.Util.defaults = function(options, defaults) {
    var bothAreObjects,
        def,
        k,
        opt,
        result,
        v;
    result = Epoch.Util.copy(options);
    for (k in defaults) {
      if (!hasProp.call(defaults, k))
        continue;
      v = defaults[k];
      opt = options[k];
      def = defaults[k];
      bothAreObjects = Epoch.isObject(opt) && Epoch.isObject(def);
      if ((opt != null) && (def != null)) {
        if (bothAreObjects && !Epoch.isArray(opt)) {
          result[k] = Epoch.Util.defaults(opt, def);
        } else {
          result[k] = opt;
        }
      } else if (opt != null) {
        result[k] = opt;
      } else {
        result[k] = def;
      }
    }
    return result;
  };
  Epoch.Util.formatSI = function(v, fixed, fixIntegers) {
    var base,
        i,
        label,
        q,
        ref1;
    if (fixed == null) {
      fixed = 1;
    }
    if (fixIntegers == null) {
      fixIntegers = false;
    }
    if (v < 1000) {
      q = v;
      if (!((q | 0) === q && !fixIntegers)) {
        q = q.toFixed(fixed);
      }
      return q;
    }
    ref1 = ['K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
    for (i in ref1) {
      if (!hasProp.call(ref1, i))
        continue;
      label = ref1[i];
      base = Math.pow(10, ((i | 0) + 1) * 3);
      if (v >= base && v < Math.pow(10, ((i | 0) + 2) * 3)) {
        q = v / base;
        if (!((q % 1) === 0 && !fixIntegers)) {
          q = q.toFixed(fixed);
        }
        return q + " " + label;
      }
    }
  };
  Epoch.Util.formatBytes = function(v, fixed, fix_integers) {
    var base,
        i,
        label,
        q,
        ref1;
    if (fixed == null) {
      fixed = 1;
    }
    if (fix_integers == null) {
      fix_integers = false;
    }
    if (v < 1024) {
      q = v;
      if (!((q % 1) === 0 && !fix_integers)) {
        q = q.toFixed(fixed);
      }
      return q + " B";
    }
    ref1 = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    for (i in ref1) {
      if (!hasProp.call(ref1, i))
        continue;
      label = ref1[i];
      base = Math.pow(1024, (i | 0) + 1);
      if (v >= base && v < Math.pow(1024, (i | 0) + 2)) {
        q = v / base;
        if (!((q % 1) === 0 && !fix_integers)) {
          q = q.toFixed(fixed);
        }
        return q + " " + label;
      }
    }
  };
  Epoch.Util.dasherize = function(str) {
    return Epoch.Util.trim(str).replace("\n", '').replace(/\s+/g, '-').toLowerCase();
  };
  Epoch.Util.domain = function(layers, key) {
    var domain,
        entry,
        j,
        l,
        layer,
        len,
        len1,
        ref1,
        set;
    if (key == null) {
      key = 'x';
    }
    set = {};
    domain = [];
    for (j = 0, len = layers.length; j < len; j++) {
      layer = layers[j];
      ref1 = layer.values;
      for (l = 0, len1 = ref1.length; l < len1; l++) {
        entry = ref1[l];
        if (set[entry[key]] != null) {
          continue;
        }
        domain.push(entry[key]);
        set[entry[key]] = true;
      }
    }
    return domain;
  };
  Epoch.Util.trim = function(string) {
    if (!Epoch.isString(string)) {
      return null;
    }
    return string.replace(/^\s+/g, '').replace(/\s+$/g, '');
  };
  Epoch.Util.getComputedStyle = function(element, pseudoElement) {
    if (Epoch.isFunction(window.getComputedStyle)) {
      return window.getComputedStyle(element, pseudoElement);
    } else if (element.currentStyle != null) {
      return element.currentStyle;
    }
  };
  Epoch.Util.toRGBA = function(color, opacity) {
    var all,
        b,
        g,
        parts,
        r,
        result,
        v;
    if ((parts = color.match(/^rgba\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*[0-9\.]+\)/))) {
      all = parts[0], r = parts[1], g = parts[2], b = parts[3];
      result = "rgba(" + r + "," + g + "," + b + "," + opacity + ")";
    } else if ((v = d3.rgb(color))) {
      result = "rgba(" + v.r + "," + v.g + "," + v.b + "," + opacity + ")";
    }
    return result;
  };
  Epoch.Util.getContext = function(node, type) {
    if (type == null) {
      type = '2d';
    }
    return node.getContext(type);
  };
  Epoch.Events = (function() {
    function Events() {
      this._events = {};
    }
    Events.prototype.on = function(name, callback) {
      var base1;
      if (callback == null) {
        return;
      }
      if ((base1 = this._events)[name] == null) {
        base1[name] = [];
      }
      return this._events[name].push(callback);
    };
    Events.prototype.onAll = function(map) {
      var callback,
          name,
          results;
      if (!Epoch.isObject(map)) {
        return;
      }
      results = [];
      for (name in map) {
        if (!hasProp.call(map, name))
          continue;
        callback = map[name];
        results.push(this.on(name, callback));
      }
      return results;
    };
    Events.prototype.off = function(name, callback) {
      var i,
          results;
      if (!Epoch.isArray(this._events[name])) {
        return;
      }
      if (callback == null) {
        return delete this._events[name];
      }
      results = [];
      while ((i = this._events[name].indexOf(callback)) >= 0) {
        results.push(this._events[name].splice(i, 1));
      }
      return results;
    };
    Events.prototype.offAll = function(mapOrList) {
      var callback,
          j,
          len,
          name,
          results,
          results1;
      if (Epoch.isArray(mapOrList)) {
        results = [];
        for (j = 0, len = mapOrList.length; j < len; j++) {
          name = mapOrList[j];
          results.push(this.off(name));
        }
        return results;
      } else if (Epoch.isObject(mapOrList)) {
        results1 = [];
        for (name in mapOrList) {
          if (!hasProp.call(mapOrList, name))
            continue;
          callback = mapOrList[name];
          results1.push(this.off(name, callback));
        }
        return results1;
      }
    };
    Events.prototype.trigger = function(name) {
      var args,
          callback,
          fn,
          i,
          j,
          len,
          ref1,
          results;
      if (this._events[name] == null) {
        return;
      }
      args = (function() {
        var j,
            ref1,
            results;
        results = [];
        for (i = j = 1, ref1 = arguments.length; 1 <= ref1 ? j < ref1 : j > ref1; i = 1 <= ref1 ? ++j : --j) {
          results.push(arguments[i]);
        }
        return results;
      }).apply(this, arguments);
      ref1 = this._events[name];
      results = [];
      for (j = 0, len = ref1.length; j < len; j++) {
        callback = ref1[j];
        fn = null;
        if (Epoch.isString(callback)) {
          fn = this[callback];
        } else if (Epoch.isFunction(callback)) {
          fn = callback;
        }
        if (fn == null) {
          Epoch.exception("Callback for event '" + name + "' is not a function or reference to a method.");
        }
        results.push(fn.apply(this, args));
      }
      return results;
    };
    return Events;
  })();
  Epoch.Util.flatten = function(multiarray) {
    var array,
        item,
        j,
        l,
        len,
        len1,
        result;
    if (!Array.isArray(multiarray)) {
      throw new Error('Epoch.Util.flatten only accepts arrays');
    }
    result = [];
    for (j = 0, len = multiarray.length; j < len; j++) {
      array = multiarray[j];
      if (Array.isArray(array)) {
        for (l = 0, len1 = array.length; l < len1; l++) {
          item = array[l];
          result.push(item);
        }
      } else {
        result.push(array);
      }
    }
    return result;
  };
  d3.selection.prototype.width = function(value) {
    if ((value != null) && Epoch.isString(value)) {
      return this.style('width', value);
    } else if ((value != null) && Epoch.isNumber(value)) {
      return this.style('width', value + "px");
    } else {
      return +Epoch.Util.getComputedStyle(this.node(), null).width.replace('px', '');
    }
  };
  d3.selection.prototype.height = function(value) {
    if ((value != null) && Epoch.isString(value)) {
      return this.style('height', value);
    } else if ((value != null) && Epoch.isNumber(value)) {
      return this.style('height', value + "px");
    } else {
      return +Epoch.Util.getComputedStyle(this.node(), null).height.replace('px', '');
    }
  };
  var d3Seconds;
  Epoch.Formats.regular = function(d) {
    return d;
  };
  Epoch.Formats.si = function(d) {
    return Epoch.Util.formatSI(d);
  };
  Epoch.Formats.percent = function(d) {
    return (d * 100).toFixed(1) + "%";
  };
  Epoch.Formats.seconds = function(t) {
    return d3Seconds(new Date(t * 1000));
  };
  d3Seconds = d3.time.format('%I:%M:%S %p');
  Epoch.Formats.bytes = function(d) {
    return Epoch.Util.formatBytes(d);
  };
  var extend = function(child, parent) {
    for (var key in parent) {
      if (hasProp.call(parent, key))
        child[key] = parent[key];
    }
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  },
      hasProp = {}.hasOwnProperty;
  Epoch.Chart.Base = (function(superClass) {
    var defaults,
        optionListeners;
    extend(Base, superClass);
    defaults = {
      width: 320,
      height: 240,
      dataFormat: null
    };
    optionListeners = {
      'option:width': 'dimensionsChanged',
      'option:height': 'dimensionsChanged',
      'layer:shown': 'layerChanged',
      'layer:hidden': 'layerChanged'
    };
    function Base(options1) {
      this.options = options1 != null ? options1 : {};
      Base.__super__.constructor.call(this);
      if (this.options.model) {
        if (this.options.model.hasData() != null) {
          this.setData(this.options.model.getData(this.options.type, this.options.dataFormat));
        } else {
          this.setData(this.options.data || []);
        }
        this.options.model.on('data:updated', (function(_this) {
          return function() {
            return _this.setDataFromModel();
          };
        })(this));
      } else {
        this.setData(this.options.data || []);
      }
      if (this.options.el != null) {
        this.el = d3.select(this.options.el);
      }
      this.width = this.options.width;
      this.height = this.options.height;
      if (this.el != null) {
        if (this.width == null) {
          this.width = this.el.width();
        }
        if (this.height == null) {
          this.height = this.el.height();
        }
      } else {
        if (this.width == null) {
          this.width = defaults.width;
        }
        if (this.height == null) {
          this.height = defaults.height;
        }
        this.el = d3.select(document.createElement('DIV')).attr('width', this.width).attr('height', this.height);
      }
      this.onAll(optionListeners);
    }
    Base.prototype._getAllOptions = function() {
      return Epoch.Util.defaults({}, this.options);
    };
    Base.prototype._getOption = function(key) {
      var parts,
          scope,
          subkey;
      parts = key.split('.');
      scope = this.options;
      while (parts.length && (scope != null)) {
        subkey = parts.shift();
        scope = scope[subkey];
      }
      return scope;
    };
    Base.prototype._setOption = function(key, value) {
      var parts,
          scope,
          subkey;
      parts = key.split('.');
      scope = this.options;
      while (parts.length) {
        subkey = parts.shift();
        if (parts.length === 0) {
          scope[subkey] = arguments[1];
          this.trigger("option:" + arguments[0]);
          return;
        }
        if (scope[subkey] == null) {
          scope[subkey] = {};
        }
        scope = scope[subkey];
      }
    };
    Base.prototype._setManyOptions = function(options, prefix) {
      var key,
          results,
          value;
      if (prefix == null) {
        prefix = '';
      }
      results = [];
      for (key in options) {
        if (!hasProp.call(options, key))
          continue;
        value = options[key];
        if (Epoch.isObject(value)) {
          results.push(this._setManyOptions(value, (prefix + key) + "."));
        } else {
          results.push(this._setOption(prefix + key, value));
        }
      }
      return results;
    };
    Base.prototype.option = function() {
      if (arguments.length === 0) {
        return this._getAllOptions();
      } else if (arguments.length === 1 && Epoch.isString(arguments[0])) {
        return this._getOption(arguments[0]);
      } else if (arguments.length === 2 && Epoch.isString(arguments[0])) {
        return this._setOption(arguments[0], arguments[1]);
      } else if (arguments.length === 1 && Epoch.isObject(arguments[0])) {
        return this._setManyOptions(arguments[0]);
      }
    };
    Base.prototype.setDataFromModel = function() {
      var prepared;
      prepared = this._prepareData(this.options.model.getData(this.options.type, this.options.dataFormat));
      this.data = this._annotateLayers(prepared);
      return this.draw();
    };
    Base.prototype.setData = function(data, options) {
      var prepared;
      if (options == null) {
        options = {};
      }
      prepared = this._prepareData((this.rawData = this._formatData(data)));
      return this.data = this._annotateLayers(prepared);
    };
    Base.prototype._prepareData = function(data) {
      return data;
    };
    Base.prototype._formatData = function(data) {
      return Epoch.Data.formatData(data, this.options.type, this.options.dataFormat);
    };
    Base.prototype._annotateLayers = function(data) {
      var category,
          classes,
          i,
          layer,
          len;
      category = 1;
      for (i = 0, len = data.length; i < len; i++) {
        layer = data[i];
        classes = ['layer'];
        classes.push("category" + category);
        layer.category = category;
        layer.visible = true;
        if (layer.label != null) {
          classes.push(Epoch.Util.dasherize(layer.label));
        }
        layer.className = classes.join(' ');
        category++;
      }
      return data;
    };
    Base.prototype._findLayer = function(labelOrIndex) {
      var i,
          index,
          l,
          layer,
          len,
          ref;
      layer = null;
      if (Epoch.isString(labelOrIndex)) {
        ref = this.data;
        for (i = 0, len = ref.length; i < len; i++) {
          l = ref[i];
          if (l.label === labelOrIndex) {
            layer = l;
            break;
          }
        }
      } else if (Epoch.isNumber(labelOrIndex)) {
        index = parseInt(labelOrIndex);
        if (!(index < 0 || index >= this.data.length)) {
          layer = this.data[index];
        }
      }
      return layer;
    };
    Base.prototype.showLayer = function(labelOrIndex) {
      var layer;
      if (!(layer = this._findLayer(labelOrIndex))) {
        return;
      }
      if (layer.visible) {
        return;
      }
      layer.visible = true;
      return this.trigger('layer:shown');
    };
    Base.prototype.hideLayer = function(labelOrIndex) {
      var layer;
      if (!(layer = this._findLayer(labelOrIndex))) {
        return;
      }
      if (!layer.visible) {
        return;
      }
      layer.visible = false;
      return this.trigger('layer:hidden');
    };
    Base.prototype.toggleLayer = function(labelOrIndex) {
      var layer;
      if (!(layer = this._findLayer(labelOrIndex))) {
        return;
      }
      layer.visible = !layer.visible;
      if (layer.visible) {
        return this.trigger('layer:shown');
      } else {
        return this.trigger('layer:hidden');
      }
    };
    Base.prototype.isLayerVisible = function(labelOrIndex) {
      var layer;
      if (!(layer = this._findLayer(labelOrIndex))) {
        return null;
      }
      return layer.visible;
    };
    Base.prototype.getVisibleLayers = function() {
      return this.data.filter(function(layer) {
        return layer.visible;
      });
    };
    Base.prototype.update = function(data, draw) {
      if (draw == null) {
        draw = true;
      }
      this.setData(data);
      if (draw) {
        return this.draw();
      }
    };
    Base.prototype.draw = function() {
      return this.trigger('draw');
    };
    Base.prototype._getScaleDomain = function(givenDomain) {
      var layers,
          maxFn,
          minFn,
          values;
      if (Array.isArray(givenDomain)) {
        return givenDomain;
      }
      if (Epoch.isString(givenDomain)) {
        layers = this.getVisibleLayers().filter(function(l) {
          return l.range === givenDomain;
        }).map(function(l) {
          return l.values;
        });
        if ((layers != null) && layers.length) {
          values = Epoch.Util.flatten(layers).map(function(d) {
            return d.y;
          });
          minFn = function(memo, curr) {
            if (curr < memo) {
              return curr;
            } else {
              return memo;
            }
          };
          maxFn = function(memo, curr) {
            if (curr > memo) {
              return curr;
            } else {
              return memo;
            }
          };
          return [values.reduce(minFn, values[0]), values.reduce(maxFn, values[0])];
        }
      }
      if (Array.isArray(this.options.range)) {
        return this.options.range;
      } else if (this.options.range && Array.isArray(this.options.range.left)) {
        return this.options.range.left;
      } else if (this.options.range && Array.isArray(this.options.range.right)) {
        return this.options.range.right;
      } else {
        return this.extent(function(d) {
          return d.y;
        });
      }
    };
    Base.prototype.extent = function(cmp) {
      return [d3.min(this.getVisibleLayers(), function(layer) {
        return d3.min(layer.values, cmp);
      }), d3.max(this.getVisibleLayers(), function(layer) {
        return d3.max(layer.values, cmp);
      })];
    };
    Base.prototype.dimensionsChanged = function() {
      this.width = this.option('width') || this.width;
      this.height = this.option('height') || this.height;
      this.el.width(this.width);
      return this.el.height(this.height);
    };
    Base.prototype.layerChanged = function() {
      return this.draw();
    };
    return Base;
  })(Epoch.Events);
  Epoch.Chart.SVG = (function(superClass) {
    extend(SVG, superClass);
    function SVG(options1) {
      this.options = options1 != null ? options1 : {};
      SVG.__super__.constructor.call(this, this.options);
      if (this.el != null) {
        this.svg = this.el.append('svg');
      } else {
        this.svg = d3.select(document.createElement('svg'));
      }
      this.svg.attr({
        xmlns: 'http://www.w3.org/2000/svg',
        width: this.width,
        height: this.height
      });
    }
    SVG.prototype.dimensionsChanged = function() {
      SVG.__super__.dimensionsChanged.call(this);
      return this.svg.attr('width', this.width).attr('height', this.height);
    };
    return SVG;
  })(Epoch.Chart.Base);
  Epoch.Chart.Canvas = (function(superClass) {
    extend(Canvas, superClass);
    function Canvas(options1) {
      this.options = options1 != null ? options1 : {};
      Canvas.__super__.constructor.call(this, this.options);
      if (this.options.pixelRatio != null) {
        this.pixelRatio = this.options.pixelRatio;
      } else if (window.devicePixelRatio != null) {
        this.pixelRatio = window.devicePixelRatio;
      } else {
        this.pixelRatio = 1;
      }
      this.canvas = d3.select(document.createElement('CANVAS'));
      this.canvas.style({
        'width': this.width + "px",
        'height': this.height + "px"
      });
      this.canvas.attr({
        width: this.getWidth(),
        height: this.getHeight()
      });
      if (this.el != null) {
        this.el.node().appendChild(this.canvas.node());
      }
      this.ctx = Epoch.Util.getContext(this.canvas.node());
    }
    Canvas.prototype.getWidth = function() {
      return this.width * this.pixelRatio;
    };
    Canvas.prototype.getHeight = function() {
      return this.height * this.pixelRatio;
    };
    Canvas.prototype.clear = function() {
      return this.ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    };
    Canvas.prototype.getStyles = function(selector) {
      return Epoch.QueryCSS.getStyles(selector, this.el);
    };
    Canvas.prototype.dimensionsChanged = function() {
      Canvas.__super__.dimensionsChanged.call(this);
      this.canvas.style({
        'width': this.width + "px",
        'height': this.height + "px"
      });
      return this.canvas.attr({
        width: this.getWidth(),
        height: this.getHeight()
      });
    };
    Canvas.prototype.redraw = function() {
      Epoch.QueryCSS.purge();
      return this.draw();
    };
    return Canvas;
  })(Epoch.Chart.Base);
  var QueryCSS;
  QueryCSS = (function() {
    var CONTAINER_HASH_ATTR,
        PUT_EXPR,
        REFERENCE_CONTAINER_ID,
        containerCount,
        logging,
        nextContainerId,
        put;
    function QueryCSS() {}
    REFERENCE_CONTAINER_ID = '_canvas_css_reference';
    CONTAINER_HASH_ATTR = 'data-epoch-container-id';
    containerCount = 0;
    nextContainerId = function() {
      return "epoch-container-" + (containerCount++);
    };
    PUT_EXPR = /^([^#. ]+)?(#[^. ]+)?(\.[^# ]+)?$/;
    logging = false;
    put = function(selector) {
      var classNames,
          element,
          id,
          match,
          tag,
          whole;
      match = selector.match(PUT_EXPR);
      if (match == null) {
        return Epoch.error('Query CSS cannot match given selector: ' + selector);
      }
      whole = match[0], tag = match[1], id = match[2], classNames = match[3];
      tag = (tag != null ? tag : 'div').toUpperCase();
      element = document.createElement(tag);
      if (id != null) {
        element.id = id.substr(1);
      }
      if (classNames != null) {
        element.className = classNames.substr(1).replace(/\./g, ' ');
      }
      return element;
    };
    QueryCSS.log = function(b) {
      return logging = b;
    };
    QueryCSS.cache = {};
    QueryCSS.styleList = ['fill', 'stroke', 'stroke-width'];
    QueryCSS.container = null;
    QueryCSS.purge = function() {
      return QueryCSS.cache = {};
    };
    QueryCSS.getContainer = function() {
      var container;
      if (QueryCSS.container != null) {
        return QueryCSS.container;
      }
      container = document.createElement('DIV');
      container.id = REFERENCE_CONTAINER_ID;
      document.body.appendChild(container);
      return QueryCSS.container = d3.select(container);
    };
    QueryCSS.hash = function(selector, container) {
      var containerId;
      containerId = container.attr(CONTAINER_HASH_ATTR);
      if (containerId == null) {
        containerId = nextContainerId();
        container.attr(CONTAINER_HASH_ATTR, containerId);
      }
      return containerId + "__" + selector;
    };
    QueryCSS.getStyles = function(selector, container) {
      var cache,
          cacheKey,
          el,
          element,
          i,
          j,
          k,
          len,
          len1,
          len2,
          name,
          parent,
          parentNode,
          parents,
          ref,
          ref1,
          ref2,
          root,
          sel,
          selectorList,
          styles,
          subSelector;
      cacheKey = QueryCSS.hash(selector, container);
      cache = QueryCSS.cache[cacheKey];
      if (cache != null) {
        return cache;
      }
      parents = [];
      parentNode = container.node().parentNode;
      while ((parentNode != null) && parentNode.nodeName.toLowerCase() !== 'body') {
        parents.unshift(parentNode);
        parentNode = parentNode.parentNode;
      }
      parents.push(container.node());
      selectorList = [];
      for (i = 0, len = parents.length; i < len; i++) {
        element = parents[i];
        sel = element.nodeName.toLowerCase();
        if ((element.id != null) && element.id.length > 0) {
          sel += '#' + element.id;
        }
        if ((element.className != null) && element.className.length > 0) {
          sel += '.' + Epoch.Util.trim(element.className).replace(/\s+/g, '.');
        }
        selectorList.push(sel);
      }
      selectorList.push('svg');
      ref1 = Epoch.Util.trim(selector).split(/\s+/);
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        subSelector = ref1[j];
        selectorList.push(subSelector);
      }
      if (logging) {
        console.log(selectorList);
      }
      parent = root = put(selectorList.shift());
      while (selectorList.length) {
        el = put(selectorList.shift());
        parent.appendChild(el);
        parent = el;
      }
      if (logging) {
        console.log(root);
      }
      QueryCSS.getContainer().node().appendChild(root);
      ref = d3.select('#' + REFERENCE_CONTAINER_ID + ' ' + selector);
      styles = {};
      ref2 = QueryCSS.styleList;
      for (k = 0, len2 = ref2.length; k < len2; k++) {
        name = ref2[k];
        styles[name] = ref.style(name);
      }
      QueryCSS.cache[cacheKey] = styles;
      QueryCSS.getContainer().html('');
      return styles;
    };
    return QueryCSS;
  })();
  Epoch.QueryCSS = QueryCSS;
  var applyLayerLabel,
      base,
      hasProp = {}.hasOwnProperty,
      slice = [].slice;
  if (Epoch.Data == null) {
    Epoch.Data = {};
  }
  if ((base = Epoch.Data).Format == null) {
    base.Format = {};
  }
  applyLayerLabel = function(layer, options, i, keys) {
    var autoLabels,
        keyLabels,
        label,
        labels,
        ref;
    if (keys == null) {
      keys = [];
    }
    ref = [options.labels, options.autoLabels, options.keyLabels], labels = ref[0], autoLabels = ref[1], keyLabels = ref[2];
    if ((labels != null) && Epoch.isArray(labels) && labels.length > i) {
      layer.label = labels[i];
    } else if (keyLabels && keys.length > i) {
      layer.label = keys[i];
    } else if (autoLabels) {
      label = [];
      while (i >= 0) {
        label.push(String.fromCharCode(65 + (i % 26)));
        i -= 26;
      }
      layer.label = label.join('');
    }
    return layer;
  };
  Epoch.Data.Format.array = (function() {
    var buildLayers,
        defaultOptions,
        format,
        formatBasicPlot,
        formatHeatmap,
        formatPie,
        formatTimePlot;
    defaultOptions = {
      x: function(d, i) {
        return i;
      },
      y: function(d, i) {
        return d;
      },
      time: function(d, i, startTime) {
        return parseInt(startTime) + parseInt(i);
      },
      type: 'area',
      autoLabels: false,
      labels: [],
      startTime: parseInt(new Date().getTime() / 1000)
    };
    buildLayers = function(data, options, mapFn) {
      var i,
          result,
          series;
      result = [];
      if (Epoch.isArray(data[0])) {
        for (i in data) {
          if (!hasProp.call(data, i))
            continue;
          series = data[i];
          result.push(applyLayerLabel({values: series.map(mapFn)}, options, parseInt(i)));
        }
      } else {
        result.push(applyLayerLabel({values: data.map(mapFn)}, options, 0));
      }
      return result;
    };
    formatBasicPlot = function(data, options) {
      return buildLayers(data, options, function(d, i) {
        return {
          x: options.x(d, i),
          y: options.y(d, i)
        };
      });
    };
    formatTimePlot = function(data, options) {
      return buildLayers(data, options, function(d, i) {
        return {
          time: options.time(d, i, options.startTime),
          y: options.y(d, i)
        };
      });
    };
    formatHeatmap = function(data, options) {
      return buildLayers(data, options, function(d, i) {
        return {
          time: options.time(d, i, options.startTime),
          histogram: d
        };
      });
    };
    formatPie = function(data, options) {
      var i,
          result,
          v;
      result = [];
      for (i in data) {
        if (!hasProp.call(data, i))
          continue;
        v = data[i];
        if (!Epoch.isNumber(data[0])) {
          return [];
        }
        result.push(applyLayerLabel({value: v}, options, i));
      }
      return result;
    };
    format = function(data, options) {
      var opt;
      if (data == null) {
        data = [];
      }
      if (options == null) {
        options = {};
      }
      if (!Epoch.isNonEmptyArray(data)) {
        return [];
      }
      opt = Epoch.Util.defaults(options, defaultOptions);
      if (opt.type === 'time.heatmap') {
        return formatHeatmap(data, opt);
      } else if (opt.type.match(/^time\./)) {
        return formatTimePlot(data, opt);
      } else if (opt.type === 'pie') {
        return formatPie(data, opt);
      } else {
        return formatBasicPlot(data, opt);
      }
    };
    format.entry = function(datum, options) {
      var d,
          data,
          k,
          layer,
          len,
          opt,
          ref,
          results;
      if (options == null) {
        options = {};
      }
      if (options.type === 'time.gauge') {
        if (datum == null) {
          return 0;
        }
        opt = Epoch.Util.defaults(options, defaultOptions);
        d = Epoch.isArray(datum) ? datum[0] : datum;
        return opt.y(d, 0);
      }
      if (datum == null) {
        return [];
      }
      if (options.startTime == null) {
        options.startTime = parseInt(new Date().getTime() / 1000);
      }
      if (Epoch.isArray(datum)) {
        data = datum.map(function(d) {
          return [d];
        });
      } else {
        data = [datum];
      }
      ref = format(data, options);
      results = [];
      for (k = 0, len = ref.length; k < len; k++) {
        layer = ref[k];
        results.push(layer.values[0]);
      }
      return results;
    };
    return format;
  })();
  Epoch.Data.Format.tuple = (function() {
    var buildLayers,
        defaultOptions,
        format;
    defaultOptions = {
      x: function(d, i) {
        return d;
      },
      y: function(d, i) {
        return d;
      },
      time: function(d, i) {
        return d;
      },
      type: 'area',
      autoLabels: false,
      labels: []
    };
    buildLayers = function(data, options, mapFn) {
      var i,
          result,
          series;
      if (!Epoch.isArray(data[0])) {
        return [];
      }
      result = [];
      if (Epoch.isArray(data[0][0])) {
        for (i in data) {
          if (!hasProp.call(data, i))
            continue;
          series = data[i];
          result.push(applyLayerLabel({values: series.map(mapFn)}, options, parseInt(i)));
        }
      } else {
        result.push(applyLayerLabel({values: data.map(mapFn)}, options, 0));
      }
      return result;
    };
    format = function(data, options) {
      var opt;
      if (data == null) {
        data = [];
      }
      if (options == null) {
        options = {};
      }
      if (!Epoch.isNonEmptyArray(data)) {
        return [];
      }
      opt = Epoch.Util.defaults(options, defaultOptions);
      if (opt.type === 'pie' || opt.type === 'time.heatmap' || opt.type === 'time.gauge') {
        return [];
      } else if (opt.type.match(/^time\./)) {
        return buildLayers(data, opt, function(d, i) {
          return {
            time: opt.time(d[0], parseInt(i)),
            y: opt.y(d[1], parseInt(i))
          };
        });
      } else {
        return buildLayers(data, opt, function(d, i) {
          return {
            x: opt.x(d[0], parseInt(i)),
            y: opt.y(d[1], parseInt(i))
          };
        });
      }
    };
    format.entry = function(datum, options) {
      var data,
          k,
          layer,
          len,
          ref,
          results;
      if (options == null) {
        options = {};
      }
      if (datum == null) {
        return [];
      }
      if (options.startTime == null) {
        options.startTime = parseInt(new Date().getTime() / 1000);
      }
      if (Epoch.isArray(datum) && Epoch.isArray(datum[0])) {
        data = datum.map(function(d) {
          return [d];
        });
      } else {
        data = [datum];
      }
      ref = format(data, options);
      results = [];
      for (k = 0, len = ref.length; k < len; k++) {
        layer = ref[k];
        results.push(layer.values[0]);
      }
      return results;
    };
    return format;
  })();
  Epoch.Data.Format.keyvalue = (function() {
    var buildLayers,
        defaultOptions,
        format,
        formatBasicPlot,
        formatTimePlot;
    defaultOptions = {
      type: 'area',
      x: function(d, i) {
        return parseInt(i);
      },
      y: function(d, i) {
        return d;
      },
      time: function(d, i, startTime) {
        return parseInt(startTime) + parseInt(i);
      },
      labels: [],
      autoLabels: false,
      keyLabels: true,
      startTime: parseInt(new Date().getTime() / 1000)
    };
    buildLayers = function(data, keys, options, mapFn) {
      var d,
          i,
          j,
          key,
          result,
          values;
      result = [];
      for (j in keys) {
        if (!hasProp.call(keys, j))
          continue;
        key = keys[j];
        values = [];
        for (i in data) {
          if (!hasProp.call(data, i))
            continue;
          d = data[i];
          values.push(mapFn(d, key, parseInt(i)));
        }
        result.push(applyLayerLabel({values: values}, options, parseInt(j), keys));
      }
      return result;
    };
    formatBasicPlot = function(data, keys, options) {
      return buildLayers(data, keys, options, function(d, key, i) {
        var x;
        if (Epoch.isString(options.x)) {
          x = d[options.x];
        } else {
          x = options.x(d, parseInt(i));
        }
        return {
          x: x,
          y: options.y(d[key], parseInt(i))
        };
      });
    };
    formatTimePlot = function(data, keys, options, rangeName) {
      if (rangeName == null) {
        rangeName = 'y';
      }
      return buildLayers(data, keys, options, function(d, key, i) {
        var value;
        if (Epoch.isString(options.time)) {
          value = {time: d[options.time]};
        } else {
          value = {time: options.time(d, parseInt(i), options.startTime)};
        }
        value[rangeName] = options.y(d[key], parseInt(i));
        return value;
      });
    };
    format = function(data, keys, options) {
      var opt;
      if (data == null) {
        data = [];
      }
      if (keys == null) {
        keys = [];
      }
      if (options == null) {
        options = {};
      }
      if (!(Epoch.isNonEmptyArray(data) && Epoch.isNonEmptyArray(keys))) {
        return [];
      }
      opt = Epoch.Util.defaults(options, defaultOptions);
      if (opt.type === 'pie' || opt.type === 'time.gauge') {
        return [];
      } else if (opt.type === 'time.heatmap') {
        return formatTimePlot(data, keys, opt, 'histogram');
      } else if (opt.type.match(/^time\./)) {
        return formatTimePlot(data, keys, opt);
      } else {
        return formatBasicPlot(data, keys, opt);
      }
    };
    format.entry = function(datum, keys, options) {
      var k,
          layer,
          len,
          ref,
          results;
      if (keys == null) {
        keys = [];
      }
      if (options == null) {
        options = {};
      }
      if (!((datum != null) && Epoch.isNonEmptyArray(keys))) {
        return [];
      }
      if (options.startTime == null) {
        options.startTime = parseInt(new Date().getTime() / 1000);
      }
      ref = format([datum], keys, options);
      results = [];
      for (k = 0, len = ref.length; k < len; k++) {
        layer = ref[k];
        results.push(layer.values[0]);
      }
      return results;
    };
    return format;
  })();
  Epoch.data = function() {
    var args,
        formatFn,
        formatter;
    formatter = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    if ((formatFn = Epoch.Data.Format[formatter]) == null) {
      return [];
    }
    return formatFn.apply(formatFn, args);
  };
  Epoch.Data.formatData = function(data, type, dataFormat) {
    var a,
        args,
        k,
        len,
        opts,
        ref;
    if (data == null) {
      data = [];
    }
    if (!Epoch.isNonEmptyArray(data)) {
      return data;
    }
    if (Epoch.isString(dataFormat)) {
      opts = {type: type};
      return Epoch.data(dataFormat, data, opts);
    }
    if (!Epoch.isObject(dataFormat)) {
      return data;
    }
    if (!((dataFormat.name != null) && Epoch.isString(dataFormat.name))) {
      return data;
    }
    if (Epoch.Data.Format[dataFormat.name] == null) {
      return data;
    }
    args = [dataFormat.name, data];
    if ((dataFormat["arguments"] != null) && Epoch.isArray(dataFormat["arguments"])) {
      ref = dataFormat["arguments"];
      for (k = 0, len = ref.length; k < len; k++) {
        a = ref[k];
        args.push(a);
      }
    }
    if (dataFormat.options != null) {
      opts = dataFormat.options;
      if (type != null) {
        if (opts.type == null) {
          opts.type = type;
        }
      }
      args.push(opts);
    } else if (type != null) {
      args.push({type: type});
    }
    return Epoch.data.apply(Epoch.data, args);
  };
  Epoch.Data.formatEntry = function(datum, type, format) {
    var a,
        args,
        dataFormat,
        entry,
        k,
        len,
        opts,
        ref;
    if (format == null) {
      return datum;
    }
    if (Epoch.isString(format)) {
      opts = {type: type};
      return Epoch.Data.Format[format].entry(datum, opts);
    }
    if (!Epoch.isObject(format)) {
      return datum;
    }
    if (!((format.name != null) && Epoch.isString(format.name))) {
      return datum;
    }
    if (Epoch.Data.Format[format.name] == null) {
      return datum;
    }
    dataFormat = Epoch.Util.defaults(format, {});
    args = [datum];
    if ((dataFormat["arguments"] != null) && Epoch.isArray(dataFormat["arguments"])) {
      ref = dataFormat["arguments"];
      for (k = 0, len = ref.length; k < len; k++) {
        a = ref[k];
        args.push(a);
      }
    }
    if (dataFormat.options != null) {
      opts = dataFormat.options;
      opts.type = type;
      args.push(opts);
    } else if (type != null) {
      args.push({type: type});
    }
    entry = Epoch.Data.Format[dataFormat.name].entry;
    return entry.apply(entry, args);
  };
  var extend = function(child, parent) {
    for (var key in parent) {
      if (hasProp.call(parent, key))
        child[key] = parent[key];
    }
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  },
      hasProp = {}.hasOwnProperty;
  Epoch.Model = (function(superClass) {
    var defaults;
    extend(Model, superClass);
    defaults = {dataFormat: null};
    function Model(options) {
      if (options == null) {
        options = {};
      }
      Model.__super__.constructor.call(this);
      options = Epoch.Util.defaults(options, defaults);
      this.dataFormat = options.dataFormat;
      this.data = options.data;
      this.loading = false;
    }
    Model.prototype.setData = function(data) {
      this.data = data;
      return this.trigger('data:updated');
    };
    Model.prototype.push = function(entry) {
      this.entry = entry;
      return this.trigger('data:push');
    };
    Model.prototype.hasData = function() {
      return this.data != null;
    };
    Model.prototype.getData = function(type, dataFormat) {
      if (dataFormat == null) {
        dataFormat = this.dataFormat;
      }
      return Epoch.Data.formatData(this.data, type, dataFormat);
    };
    Model.prototype.getNext = function(type, dataFormat) {
      if (dataFormat == null) {
        dataFormat = this.dataFormat;
      }
      return Epoch.Data.formatEntry(this.entry, type, dataFormat);
    };
    return Model;
  })(Epoch.Events);
  var extend = function(child, parent) {
    for (var key in parent) {
      if (hasProp.call(parent, key))
        child[key] = parent[key];
    }
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  },
      hasProp = {}.hasOwnProperty;
  Epoch.Chart.Plot = (function(superClass) {
    var defaultAxisMargins,
        defaults,
        optionListeners;
    extend(Plot, superClass);
    defaults = {
      domain: null,
      range: null,
      axes: ['left', 'bottom'],
      ticks: {
        top: 14,
        bottom: 14,
        left: 5,
        right: 5
      },
      tickFormats: {
        top: Epoch.Formats.regular,
        bottom: Epoch.Formats.regular,
        left: Epoch.Formats.si,
        right: Epoch.Formats.si
      }
    };
    defaultAxisMargins = {
      top: 25,
      right: 50,
      bottom: 25,
      left: 50
    };
    optionListeners = {
      'option:margins.top': 'marginsChanged',
      'option:margins.right': 'marginsChanged',
      'option:margins.bottom': 'marginsChanged',
      'option:margins.left': 'marginsChanged',
      'option:axes': 'axesChanged',
      'option:ticks.top': 'ticksChanged',
      'option:ticks.right': 'ticksChanged',
      'option:ticks.bottom': 'ticksChanged',
      'option:ticks.left': 'ticksChanged',
      'option:tickFormats.top': 'tickFormatsChanged',
      'option:tickFormats.right': 'tickFormatsChanged',
      'option:tickFormats.bottom': 'tickFormatsChanged',
      'option:tickFormats.left': 'tickFormatsChanged',
      'option:domain': 'domainChanged',
      'option:range': 'rangeChanged'
    };
    function Plot(options) {
      var givenMargins,
          i,
          len,
          pos,
          ref;
      this.options = options != null ? options : {};
      givenMargins = Epoch.Util.copy(this.options.margins) || {};
      Plot.__super__.constructor.call(this, this.options = Epoch.Util.defaults(this.options, defaults));
      this.margins = {};
      ref = ['top', 'right', 'bottom', 'left'];
      for (i = 0, len = ref.length; i < len; i++) {
        pos = ref[i];
        this.margins[pos] = (this.options.margins != null) && (this.options.margins[pos] != null) ? this.options.margins[pos] : this.hasAxis(pos) ? defaultAxisMargins[pos] : 6;
      }
      this.g = this.svg.append("g").attr("transform", "translate(" + this.margins.left + ", " + this.margins.top + ")");
      this.onAll(optionListeners);
    }
    Plot.prototype.setTickFormat = function(axis, fn) {
      return this.options.tickFormats[axis] = fn;
    };
    Plot.prototype.hasAxis = function(axis) {
      return this.options.axes.indexOf(axis) > -1;
    };
    Plot.prototype.innerWidth = function() {
      return this.width - (this.margins.left + this.margins.right);
    };
    Plot.prototype.innerHeight = function() {
      return this.height - (this.margins.top + this.margins.bottom);
    };
    Plot.prototype.x = function() {
      var domain,
          ref;
      domain = (ref = this.options.domain) != null ? ref : this.extent(function(d) {
        return d.x;
      });
      return d3.scale.linear().domain(domain).range([0, this.innerWidth()]);
    };
    Plot.prototype.y = function(givenDomain) {
      return d3.scale.linear().domain(this._getScaleDomain(givenDomain)).range([this.innerHeight(), 0]);
    };
    Plot.prototype.bottomAxis = function() {
      return d3.svg.axis().scale(this.x()).orient('bottom').ticks(this.options.ticks.bottom).tickFormat(this.options.tickFormats.bottom);
    };
    Plot.prototype.topAxis = function() {
      return d3.svg.axis().scale(this.x()).orient('top').ticks(this.options.ticks.top).tickFormat(this.options.tickFormats.top);
    };
    Plot.prototype.leftAxis = function() {
      var range;
      range = this.options.range ? this.options.range.left : null;
      return d3.svg.axis().scale(this.y(range)).orient('left').ticks(this.options.ticks.left).tickFormat(this.options.tickFormats.left);
    };
    Plot.prototype.rightAxis = function() {
      var range;
      range = this.options.range ? this.options.range.right : null;
      return d3.svg.axis().scale(this.y(range)).orient('right').ticks(this.options.ticks.right).tickFormat(this.options.tickFormats.right);
    };
    Plot.prototype.draw = function() {
      if (this._axesDrawn) {
        this._redrawAxes();
      } else {
        this._drawAxes();
      }
      return Plot.__super__.draw.call(this);
    };
    Plot.prototype._redrawAxes = function() {
      if (this.hasAxis('bottom')) {
        this.g.selectAll('.x.axis.bottom').transition().duration(500).ease('linear').call(this.bottomAxis());
      }
      if (this.hasAxis('top')) {
        this.g.selectAll('.x.axis.top').transition().duration(500).ease('linear').call(this.topAxis());
      }
      if (this.hasAxis('left')) {
        this.g.selectAll('.y.axis.left').transition().duration(500).ease('linear').call(this.leftAxis());
      }
      if (this.hasAxis('right')) {
        return this.g.selectAll('.y.axis.right').transition().duration(500).ease('linear').call(this.rightAxis());
      }
    };
    Plot.prototype._drawAxes = function() {
      if (this.hasAxis('bottom')) {
        this.g.append("g").attr("class", "x axis bottom").attr("transform", "translate(0, " + (this.innerHeight()) + ")").call(this.bottomAxis());
      }
      if (this.hasAxis('top')) {
        this.g.append("g").attr('class', 'x axis top').call(this.topAxis());
      }
      if (this.hasAxis('left')) {
        this.g.append("g").attr("class", "y axis left").call(this.leftAxis());
      }
      if (this.hasAxis('right')) {
        this.g.append('g').attr('class', 'y axis right').attr('transform', "translate(" + (this.innerWidth()) + ", 0)").call(this.rightAxis());
      }
      return this._axesDrawn = true;
    };
    Plot.prototype.dimensionsChanged = function() {
      Plot.__super__.dimensionsChanged.call(this);
      this.g.selectAll('.axis').remove();
      this._axesDrawn = false;
      return this.draw();
    };
    Plot.prototype.marginsChanged = function() {
      var pos,
          ref,
          size;
      if (this.options.margins == null) {
        return;
      }
      ref = this.options.margins;
      for (pos in ref) {
        if (!hasProp.call(ref, pos))
          continue;
        size = ref[pos];
        if (size == null) {
          this.margins[pos] = 6;
        } else {
          this.margins[pos] = size;
        }
      }
      this.g.transition().duration(750).attr("transform", "translate(" + this.margins.left + ", " + this.margins.top + ")");
      return this.draw();
    };
    Plot.prototype.axesChanged = function() {
      var i,
          len,
          pos,
          ref;
      ref = ['top', 'right', 'bottom', 'left'];
      for (i = 0, len = ref.length; i < len; i++) {
        pos = ref[i];
        if ((this.options.margins != null) && (this.options.margins[pos] != null)) {
          continue;
        }
        if (this.hasAxis(pos)) {
          this.margins[pos] = defaultAxisMargins[pos];
        } else {
          this.margins[pos] = 6;
        }
      }
      this.g.transition().duration(750).attr("transform", "translate(" + this.margins.left + ", " + this.margins.top + ")");
      this.g.selectAll('.axis').remove();
      this._axesDrawn = false;
      return this.draw();
    };
    Plot.prototype.ticksChanged = function() {
      return this.draw();
    };
    Plot.prototype.tickFormatsChanged = function() {
      return this.draw();
    };
    Plot.prototype.domainChanged = function() {
      return this.draw();
    };
    Plot.prototype.rangeChanged = function() {
      return this.draw();
    };
    return Plot;
  })(Epoch.Chart.SVG);
  var extend = function(child, parent) {
    for (var key in parent) {
      if (hasProp.call(parent, key))
        child[key] = parent[key];
    }
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  },
      hasProp = {}.hasOwnProperty;
  Epoch.Chart.Area = (function(superClass) {
    extend(Area, superClass);
    function Area(options) {
      var base;
      this.options = options != null ? options : {};
      if ((base = this.options).type == null) {
        base.type = 'area';
      }
      Area.__super__.constructor.call(this, this.options);
      this.draw();
    }
    Area.prototype.y = function() {
      var a,
          i,
          k,
          layer,
          len,
          ref,
          ref1,
          ref2,
          v;
      a = [];
      ref = this.getVisibleLayers();
      for (i = 0, len = ref.length; i < len; i++) {
        layer = ref[i];
        ref1 = layer.values;
        for (k in ref1) {
          if (!hasProp.call(ref1, k))
            continue;
          v = ref1[k];
          if (a[k] != null) {
            a[k] += v.y;
          }
          if (a[k] == null) {
            a[k] = v.y;
          }
        }
      }
      return d3.scale.linear().domain((ref2 = this.options.range) != null ? ref2 : [0, d3.max(a)]).range([this.height - this.margins.top - this.margins.bottom, 0]);
    };
    Area.prototype.draw = function() {
      var area,
          data,
          layer,
          layers,
          ref,
          stack,
          x,
          y;
      ref = [this.x(), this.y(), this.getVisibleLayers()], x = ref[0], y = ref[1], layers = ref[2];
      this.g.selectAll('.layer').remove();
      if (layers.length === 0) {
        return;
      }
      area = d3.svg.area().x(function(d) {
        return x(d.x);
      }).y0(function(d) {
        return y(d.y0);
      }).y1(function(d) {
        return y(d.y0 + d.y);
      });
      stack = d3.layout.stack().values(function(d) {
        return d.values;
      });
      data = stack(layers);
      layer = this.g.selectAll('.layer').data(layers, function(d) {
        return d.category;
      });
      layer.select('.area').attr('d', function(d) {
        return area(d.values);
      });
      layer.enter().append('g').attr('class', function(d) {
        return d.className;
      });
      layer.append('path').attr('class', 'area').attr('d', function(d) {
        return area(d.values);
      });
      return Area.__super__.draw.call(this);
    };
    return Area;
  })(Epoch.Chart.Plot);
  var extend = function(child, parent) {
    for (var key in parent) {
      if (hasProp.call(parent, key))
        child[key] = parent[key];
    }
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  },
      hasProp = {}.hasOwnProperty;
  Epoch.Chart.Bar = (function(superClass) {
    var defaults,
        horizontal_defaults,
        horizontal_specific,
        optionListeners;
    extend(Bar, superClass);
    defaults = {
      type: 'bar',
      style: 'grouped',
      orientation: 'vertical',
      padding: {
        bar: 0.08,
        group: 0.1
      },
      outerPadding: {
        bar: 0.08,
        group: 0.1
      }
    };
    horizontal_specific = {tickFormats: {
        top: Epoch.Formats.si,
        bottom: Epoch.Formats.si,
        left: Epoch.Formats.regular,
        right: Epoch.Formats.regular
      }};
    horizontal_defaults = Epoch.Util.defaults(horizontal_specific, defaults);
    optionListeners = {
      'option:orientation': 'orientationChanged',
      'option:padding': 'paddingChanged',
      'option:outerPadding': 'paddingChanged',
      'option:padding:bar': 'paddingChanged',
      'option:padding:group': 'paddingChanged',
      'option:outerPadding:bar': 'paddingChanged',
      'option:outerPadding:group': 'paddingChanged'
    };
    function Bar(options) {
      this.options = options != null ? options : {};
      if (this._isHorizontal()) {
        this.options = Epoch.Util.defaults(this.options, horizontal_defaults);
      } else {
        this.options = Epoch.Util.defaults(this.options, defaults);
      }
      Bar.__super__.constructor.call(this, this.options);
      this.onAll(optionListeners);
      this.draw();
    }
    Bar.prototype._isVertical = function() {
      return this.options.orientation === 'vertical';
    };
    Bar.prototype._isHorizontal = function() {
      return this.options.orientation === 'horizontal';
    };
    Bar.prototype.x = function() {
      var extent;
      if (this._isVertical()) {
        return d3.scale.ordinal().domain(Epoch.Util.domain(this.getVisibleLayers())).rangeRoundBands([0, this.innerWidth()], this.options.padding.group, this.options.outerPadding.group);
      } else {
        extent = this.extent(function(d) {
          return d.y;
        });
        extent[0] = Math.min(0, extent[0]);
        return d3.scale.linear().domain(extent).range([0, this.width - this.margins.left - this.margins.right]);
      }
    };
    Bar.prototype.x1 = function(x0) {
      var layer;
      return d3.scale.ordinal().domain((function() {
        var j,
            len,
            ref,
            results;
        ref = this.getVisibleLayers();
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          layer = ref[j];
          results.push(layer.category);
        }
        return results;
      }).call(this)).rangeRoundBands([0, x0.rangeBand()], this.options.padding.bar, this.options.outerPadding.bar);
    };
    Bar.prototype.y = function() {
      var extent;
      if (this._isVertical()) {
        extent = this.extent(function(d) {
          return d.y;
        });
        extent[0] = Math.min(0, extent[0]);
        return d3.scale.linear().domain(extent).range([this.height - this.margins.top - this.margins.bottom, 0]);
      } else {
        return d3.scale.ordinal().domain(Epoch.Util.domain(this.getVisibleLayers())).rangeRoundBands([0, this.innerHeight()], this.options.padding.group, this.options.outerPadding.group);
      }
    };
    Bar.prototype.y1 = function(y0) {
      var layer;
      return d3.scale.ordinal().domain((function() {
        var j,
            len,
            ref,
            results;
        ref = this.getVisibleLayers();
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          layer = ref[j];
          results.push(layer.category);
        }
        return results;
      }).call(this)).rangeRoundBands([0, y0.rangeBand()], this.options.padding.bar, this.options.outerPadding.bar);
    };
    Bar.prototype._remapData = function() {
      var className,
          entry,
          j,
          k,
          l,
          layer,
          len,
          len1,
          map,
          name,
          ref,
          ref1,
          results,
          v;
      map = {};
      ref = this.getVisibleLayers();
      for (j = 0, len = ref.length; j < len; j++) {
        layer = ref[j];
        className = 'bar ' + layer.className.replace(/\s*layer\s*/, '');
        ref1 = layer.values;
        for (l = 0, len1 = ref1.length; l < len1; l++) {
          entry = ref1[l];
          if (map[name = entry.x] == null) {
            map[name] = [];
          }
          map[entry.x].push({
            label: layer.category,
            y: entry.y,
            className: className
          });
        }
      }
      results = [];
      for (k in map) {
        if (!hasProp.call(map, k))
          continue;
        v = map[k];
        results.push({
          group: k,
          values: v
        });
      }
      return results;
    };
    Bar.prototype.draw = function() {
      if (this._isVertical()) {
        this._drawVertical();
      } else {
        this._drawHorizontal();
      }
      return Bar.__super__.draw.call(this);
    };
    Bar.prototype._drawVertical = function() {
      var data,
          height,
          layer,
          rects,
          ref,
          x0,
          x1,
          y;
      ref = [this.x(), this.y()], x0 = ref[0], y = ref[1];
      x1 = this.x1(x0);
      height = this.height - this.margins.top - this.margins.bottom;
      data = this._remapData();
      layer = this.g.selectAll(".layer").data(data, function(d) {
        return d.group;
      });
      layer.transition().duration(750).attr("transform", function(d) {
        return "translate(" + (x0(d.group)) + ", 0)";
      });
      layer.enter().append("g").attr('class', 'layer').attr("transform", function(d) {
        return "translate(" + (x0(d.group)) + ", 0)";
      });
      rects = layer.selectAll('rect').data(function(group) {
        return group.values;
      });
      rects.attr('class', function(d) {
        return d.className;
      });
      rects.transition().duration(600).attr('x', function(d) {
        return x1(d.label);
      }).attr('y', function(d) {
        return y(d.y);
      }).attr('width', x1.rangeBand()).attr('height', function(d) {
        return height - y(d.y);
      });
      rects.enter().append('rect').attr('class', function(d) {
        return d.className;
      }).attr('x', function(d) {
        return x1(d.label);
      }).attr('y', function(d) {
        return y(d.y);
      }).attr('width', x1.rangeBand()).attr('height', function(d) {
        return height - y(d.y);
      });
      rects.exit().transition().duration(150).style('opacity', '0').remove();
      return layer.exit().transition().duration(750).style('opacity', '0').remove();
    };
    Bar.prototype._drawHorizontal = function() {
      var data,
          layer,
          rects,
          ref,
          width,
          x,
          y0,
          y1;
      ref = [this.x(), this.y()], x = ref[0], y0 = ref[1];
      y1 = this.y1(y0);
      width = this.width - this.margins.left - this.margins.right;
      data = this._remapData();
      layer = this.g.selectAll(".layer").data(data, function(d) {
        return d.group;
      });
      layer.transition().duration(750).attr("transform", function(d) {
        return "translate(0, " + (y0(d.group)) + ")";
      });
      layer.enter().append("g").attr('class', 'layer').attr("transform", function(d) {
        return "translate(0, " + (y0(d.group)) + ")";
      });
      rects = layer.selectAll('rect').data(function(group) {
        return group.values;
      });
      rects.attr('class', function(d) {
        return d.className;
      });
      rects.transition().duration(600).attr('x', function(d) {
        return 0;
      }).attr('y', function(d) {
        return y1(d.label);
      }).attr('height', y1.rangeBand()).attr('width', function(d) {
        return x(d.y);
      });
      rects.enter().append('rect').attr('class', function(d) {
        return d.className;
      }).attr('x', function(d) {
        return 0;
      }).attr('y', function(d) {
        return y1(d.label);
      }).attr('height', y1.rangeBand()).attr('width', function(d) {
        return x(d.y);
      });
      rects.exit().transition().duration(150).style('opacity', '0').remove();
      return layer.exit().transition().duration(750).style('opacity', '0').remove();
    };
    Bar.prototype._getTickValues = function(numTicks, dataKey) {
      var i,
          step,
          tickValues,
          total;
      if (dataKey == null) {
        dataKey = 'x';
      }
      if (this.data[0] == null) {
        return [];
      }
      total = this.data[0].values.length;
      step = Math.ceil(total / numTicks) | 0;
      return tickValues = (function() {
        var j,
            ref,
            ref1,
            results;
        results = [];
        for (i = j = 0, ref = total, ref1 = step; ref1 > 0 ? j < ref : j > ref; i = j += ref1) {
          results.push(this.data[0].values[i].x);
        }
        return results;
      }).call(this);
    };
    Bar.prototype.bottomAxis = function() {
      var axis;
      axis = d3.svg.axis().scale(this.x()).orient('bottom').ticks(this.options.ticks.bottom).tickFormat(this.options.tickFormats.bottom);
      if (this._isVertical() && (this.options.ticks.bottom != null)) {
        axis.tickValues(this._getTickValues(this.options.ticks.bottom));
      }
      return axis;
    };
    Bar.prototype.topAxis = function() {
      var axis;
      axis = d3.svg.axis().scale(this.x()).orient('top').ticks(this.options.ticks.top).tickFormat(this.options.tickFormats.top);
      if (this._isVertical() && (this.options.ticks.top != null)) {
        axis.tickValues(this._getTickValues(this.options.ticks.top));
      }
      return axis;
    };
    Bar.prototype.leftAxis = function() {
      var axis;
      axis = d3.svg.axis().scale(this.y()).orient('left').ticks(this.options.ticks.left).tickFormat(this.options.tickFormats.left);
      if (this._isHorizontal() && (this.options.ticks.left != null)) {
        axis.tickValues(this._getTickValues(this.options.ticks.left));
      }
      return axis;
    };
    Bar.prototype.rightAxis = function() {
      var axis;
      axis = d3.svg.axis().scale(this.y()).orient('right').ticks(this.options.ticks.right).tickFormat(this.options.tickFormats.right);
      if (this._isHorizontal() && (this.options.ticks.right != null)) {
        axis.tickValues(this._getTickValues(this.options.ticks.right));
      }
      return axis;
    };
    Bar.prototype.orientationChanged = function() {
      var bottom,
          left,
          right,
          top;
      top = this.options.tickFormats.top;
      bottom = this.options.tickFormats.bottom;
      left = this.options.tickFormats.left;
      right = this.options.tickFormats.right;
      this.options.tickFormats.left = top;
      this.options.tickFormats.right = bottom;
      this.options.tickFormats.top = left;
      this.options.tickFormats.bottom = right;
      return this.draw();
    };
    Bar.prototype.paddingChanged = function() {
      return this.draw();
    };
    return Bar;
  })(Epoch.Chart.Plot);
  var extend = function(child, parent) {
    for (var key in parent) {
      if (hasProp.call(parent, key))
        child[key] = parent[key];
    }
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  },
      hasProp = {}.hasOwnProperty;
  Epoch.Chart.Histogram = (function(superClass) {
    var defaults,
        optionListeners;
    extend(Histogram, superClass);
    defaults = {
      type: 'histogram',
      domain: [0, 100],
      bucketRange: [0, 100],
      buckets: 10,
      cutOutliers: false
    };
    optionListeners = {
      'option:bucketRange': 'bucketRangeChanged',
      'option:buckets': 'bucketsChanged',
      'option:cutOutliers': 'cutOutliersChanged'
    };
    function Histogram(options) {
      this.options = options != null ? options : {};
      Histogram.__super__.constructor.call(this, this.options = Epoch.Util.defaults(this.options, defaults));
      this.onAll(optionListeners);
      this.draw();
    }
    Histogram.prototype._prepareData = function(data) {
      var bucketSize,
          buckets,
          i,
          index,
          j,
          k,
          l,
          layer,
          len,
          len1,
          point,
          prepared,
          preparedLayer,
          ref,
          v;
      bucketSize = (this.options.bucketRange[1] - this.options.bucketRange[0]) / this.options.buckets;
      prepared = [];
      for (j = 0, len = data.length; j < len; j++) {
        layer = data[j];
        buckets = (function() {
          var l,
              ref,
              results;
          results = [];
          for (i = l = 0, ref = this.options.buckets; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
            results.push(0);
          }
          return results;
        }).call(this);
        ref = layer.values;
        for (l = 0, len1 = ref.length; l < len1; l++) {
          point = ref[l];
          index = parseInt((point.x - this.options.bucketRange[0]) / bucketSize);
          if (this.options.cutOutliers && ((index < 0) || (index >= this.options.buckets))) {
            continue;
          }
          if (index < 0) {
            index = 0;
          } else if (index >= this.options.buckets) {
            index = this.options.buckets - 1;
          }
          buckets[index] += parseInt(point.y);
        }
        preparedLayer = {values: buckets.map(function(d, i) {
            return {
              x: parseInt(i) * bucketSize,
              y: d
            };
          })};
        for (k in layer) {
          if (!hasProp.call(layer, k))
            continue;
          v = layer[k];
          if (k !== 'values') {
            preparedLayer[k] = v;
          }
        }
        prepared.push(preparedLayer);
      }
      return prepared;
    };
    Histogram.prototype.resetData = function() {
      this.setData(this.rawData);
      return this.draw();
    };
    Histogram.prototype.bucketRangeChanged = function() {
      return this.resetData();
    };
    Histogram.prototype.bucketsChanged = function() {
      return this.resetData();
    };
    Histogram.prototype.cutOutliersChanged = function() {
      return this.resetData();
    };
    return Histogram;
  })(Epoch.Chart.Bar);
  var extend = function(child, parent) {
    for (var key in parent) {
      if (hasProp.call(parent, key))
        child[key] = parent[key];
    }
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  },
      hasProp = {}.hasOwnProperty;
  Epoch.Chart.Line = (function(superClass) {
    extend(Line, superClass);
    function Line(options) {
      var base;
      this.options = options != null ? options : {};
      if ((base = this.options).type == null) {
        base.type = 'line';
      }
      Line.__super__.constructor.call(this, this.options);
      this.draw();
    }
    Line.prototype.line = function(layer) {
      var ref,
          x,
          y;
      ref = [this.x(), this.y(layer.range)], x = ref[0], y = ref[1];
      return d3.svg.line().x(function(d) {
        return x(d.x);
      }).y(function(d) {
        return y(d.y);
      });
    };
    Line.prototype.draw = function() {
      var layer,
          layers,
          ref,
          x,
          y;
      ref = [this.x(), this.y(), this.getVisibleLayers()], x = ref[0], y = ref[1], layers = ref[2];
      if (layers.length === 0) {
        return this.g.selectAll('.layer').remove();
      }
      layer = this.g.selectAll('.layer').data(layers, function(d) {
        return d.category;
      });
      layer.select('.line').transition().duration(500).attr('d', (function(_this) {
        return function(l) {
          return _this.line(l)(l.values);
        };
      })(this));
      layer.enter().append('g').attr('class', function(l) {
        return l.className;
      }).append('path').attr('class', 'line').attr('d', (function(_this) {
        return function(l) {
          return _this.line(l)(l.values);
        };
      })(this));
      layer.exit().transition().duration(750).style('opacity', '0').remove();
      return Line.__super__.draw.call(this);
    };
    return Line;
  })(Epoch.Chart.Plot);
  var extend = function(child, parent) {
    for (var key in parent) {
      if (hasProp.call(parent, key))
        child[key] = parent[key];
    }
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  },
      hasProp = {}.hasOwnProperty;
  Epoch.Chart.Pie = (function(superClass) {
    var defaults;
    extend(Pie, superClass);
    defaults = {
      type: 'pie',
      margin: 10,
      inner: 0
    };
    function Pie(options) {
      this.options = options != null ? options : {};
      Pie.__super__.constructor.call(this, this.options = Epoch.Util.defaults(this.options, defaults));
      this.pie = d3.layout.pie().sort(null).value(function(d) {
        return d.value;
      });
      this.arc = d3.svg.arc().outerRadius((function(_this) {
        return function() {
          return (Math.max(_this.width, _this.height) / 2) - _this.options.margin;
        };
      })(this)).innerRadius((function(_this) {
        return function() {
          return _this.options.inner;
        };
      })(this));
      this.g = this.svg.append('g').attr("transform", "translate(" + (this.width / 2) + ", " + (this.height / 2) + ")");
      this.on('option:margin', 'marginChanged');
      this.on('option:inner', 'innerChanged');
      this.draw();
    }
    Pie.prototype.draw = function() {
      var arcs,
          path,
          text;
      this.g.selectAll('.arc').remove();
      arcs = this.g.selectAll(".arc").data(this.pie(this.getVisibleLayers()), function(d) {
        return d.data.category;
      });
      arcs.enter().append('g').attr('class', function(d) {
        return "arc pie " + d.data.className;
      });
      arcs.select('path').attr('d', this.arc);
      arcs.select('text').attr("transform", (function(_this) {
        return function(d) {
          return "translate(" + (_this.arc.centroid(d)) + ")";
        };
      })(this)).text(function(d) {
        return d.data.label || d.data.category;
      });
      path = arcs.append("path").attr("d", this.arc).each(function(d) {
        return this._current = d;
      });
      text = arcs.append("text").attr("transform", (function(_this) {
        return function(d) {
          return "translate(" + (_this.arc.centroid(d)) + ")";
        };
      })(this)).attr("dy", ".35em").style("text-anchor", "middle").text(function(d) {
        return d.data.label || d.data.category;
      });
      return Pie.__super__.draw.call(this);
    };
    Pie.prototype.marginChanged = function() {
      return this.draw();
    };
    Pie.prototype.innerChanged = function() {
      return this.draw();
    };
    return Pie;
  })(Epoch.Chart.SVG);
  var extend = function(child, parent) {
    for (var key in parent) {
      if (hasProp.call(parent, key))
        child[key] = parent[key];
    }
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  },
      hasProp = {}.hasOwnProperty;
  Epoch.Chart.Scatter = (function(superClass) {
    var defaults;
    extend(Scatter, superClass);
    defaults = {
      type: 'scatter',
      radius: 3.5,
      axes: ['top', 'bottom', 'left', 'right']
    };
    function Scatter(options) {
      this.options = options != null ? options : {};
      Scatter.__super__.constructor.call(this, this.options = Epoch.Util.defaults(this.options, defaults));
      this.on('option:radius', 'radiusChanged');
      this.draw();
    }
    Scatter.prototype.draw = function() {
      var dots,
          layer,
          layers,
          radius,
          ref,
          x,
          y;
      ref = [this.x(), this.y(), this.getVisibleLayers()], x = ref[0], y = ref[1], layers = ref[2];
      radius = this.options.radius;
      if (layers.length === 0) {
        return this.g.selectAll('.layer').remove();
      }
      layer = this.g.selectAll('.layer').data(layers, function(d) {
        return d.category;
      });
      layer.enter().append('g').attr('class', function(d) {
        return d.className;
      });
      dots = layer.selectAll('.dot').data(function(l) {
        return l.values;
      });
      dots.transition().duration(500).attr("r", function(d) {
        var ref1;
        return (ref1 = d.r) != null ? ref1 : radius;
      }).attr("cx", function(d) {
        return x(d.x);
      }).attr("cy", function(d) {
        return y(d.y);
      });
      dots.enter().append('circle').attr('class', 'dot').attr("r", function(d) {
        var ref1;
        return (ref1 = d.r) != null ? ref1 : radius;
      }).attr("cx", function(d) {
        return x(d.x);
      }).attr("cy", function(d) {
        return y(d.y);
      });
      dots.exit().transition().duration(750).style('opacity', 0).remove();
      layer.exit().transition().duration(750).style('opacity', 0).remove();
      return Scatter.__super__.draw.call(this);
    };
    Scatter.prototype.radiusChanged = function() {
      return this.draw();
    };
    return Scatter;
  })(Epoch.Chart.Plot);
  var extend = function(child, parent) {
    for (var key in parent) {
      if (hasProp.call(parent, key))
        child[key] = parent[key];
    }
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  },
      hasProp = {}.hasOwnProperty;
  Epoch.Time.Plot = (function(superClass) {
    var defaultAxisMargins,
        defaults,
        optionListeners;
    extend(Plot, superClass);
    defaults = {
      range: null,
      fps: 24,
      historySize: 120,
      windowSize: 40,
      queueSize: 10,
      axes: ['bottom'],
      ticks: {
        time: 15,
        left: 5,
        right: 5
      },
      tickFormats: {
        top: Epoch.Formats.seconds,
        bottom: Epoch.Formats.seconds,
        left: Epoch.Formats.si,
        right: Epoch.Formats.si
      }
    };
    defaultAxisMargins = {
      top: 25,
      right: 50,
      bottom: 25,
      left: 50
    };
    optionListeners = {
      'option:margins': 'marginsChanged',
      'option:margins.top': 'marginsChanged',
      'option:margins.right': 'marginsChanged',
      'option:margins.bottom': 'marginsChanged',
      'option:margins.left': 'marginsChanged',
      'option:axes': 'axesChanged',
      'option:ticks': 'ticksChanged',
      'option:ticks.top': 'ticksChanged',
      'option:ticks.right': 'ticksChanged',
      'option:ticks.bottom': 'ticksChanged',
      'option:ticks.left': 'ticksChanged',
      'option:tickFormats': 'tickFormatsChanged',
      'option:tickFormats.top': 'tickFormatsChanged',
      'option:tickFormats.right': 'tickFormatsChanged',
      'option:tickFormats.bottom': 'tickFormatsChanged',
      'option:tickFormats.left': 'tickFormatsChanged'
    };
    function Plot(options) {
      var givenMargins,
          l,
          len,
          pos,
          ref;
      this.options = options;
      givenMargins = Epoch.Util.copy(this.options.margins) || {};
      Plot.__super__.constructor.call(this, this.options = Epoch.Util.defaults(this.options, defaults));
      if (this.options.model) {
        this.options.model.on('data:push', (function(_this) {
          return function() {
            return _this.pushFromModel();
          };
        })(this));
      }
      this._queue = [];
      this.margins = {};
      ref = ['top', 'right', 'bottom', 'left'];
      for (l = 0, len = ref.length; l < len; l++) {
        pos = ref[l];
        this.margins[pos] = (this.options.margins != null) && (this.options.margins[pos] != null) ? this.options.margins[pos] : this.hasAxis(pos) ? defaultAxisMargins[pos] : 6;
      }
      this.svg = this.el.insert('svg', ':first-child').attr('width', this.width).attr('height', this.height).style('z-index', '1000');
      if (this.el.style('position') !== 'absolute' && this.el.style('position') !== 'relative') {
        this.el.style('position', 'relative');
      }
      this.canvas.style({
        position: 'absolute',
        'z-index': '999'
      });
      this._sizeCanvas();
      this.animation = {
        interval: null,
        active: false,
        delta: (function(_this) {
          return function() {
            return -(_this.w() / _this.options.fps);
          };
        })(this),
        tickDelta: (function(_this) {
          return function() {
            return -((_this.w() / _this.pixelRatio) / _this.options.fps);
          };
        })(this),
        frame: 0,
        duration: this.options.fps
      };
      this._buildAxes();
      this.animationCallback = (function(_this) {
        return function() {
          return _this._animate();
        };
      })(this);
      this.onAll(optionListeners);
    }
    Plot.prototype._sizeCanvas = function() {
      this.canvas.attr({
        width: this.innerWidth(),
        height: this.innerHeight()
      });
      return this.canvas.style({
        width: (this.innerWidth() / this.pixelRatio) + "px",
        height: (this.innerHeight() / this.pixelRatio) + "px",
        top: this.margins.top + "px",
        left: this.margins.left + "px"
      });
    };
    Plot.prototype._buildAxes = function() {
      this.svg.selectAll('.axis').remove();
      this._prepareTimeAxes();
      return this._prepareRangeAxes();
    };
    Plot.prototype._annotateLayers = function(prepared) {
      var classes,
          copy,
          data,
          i,
          layer,
          start;
      data = [];
      for (i in prepared) {
        if (!hasProp.call(prepared, i))
          continue;
        layer = prepared[i];
        copy = Epoch.Util.copy(layer);
        start = Math.max(0, layer.values.length - this.options.historySize);
        copy.values = layer.values.slice(start);
        classes = ['layer'];
        classes.push("category" + ((i | 0) + 1));
        if (layer.label != null) {
          classes.push(Epoch.Util.dasherize(layer.label));
        }
        copy.className = classes.join(' ');
        copy.visible = true;
        data.push(copy);
      }
      return data;
    };
    Plot.prototype._offsetX = function() {
      return 0;
    };
    Plot.prototype._prepareTimeAxes = function() {
      var axis;
      if (this.hasAxis('bottom')) {
        axis = this.bottomAxis = this.svg.append('g').attr('class', "x axis bottom canvas").attr('transform', "translate(" + (this.margins.left - 1) + ", " + (this.innerHeight() / this.pixelRatio + this.margins.top) + ")");
        axis.append('path').attr('class', 'domain').attr('d', "M0,0H" + (this.innerWidth() / this.pixelRatio + 1));
      }
      if (this.hasAxis('top')) {
        axis = this.topAxis = this.svg.append('g').attr('class', "x axis top canvas").attr('transform', "translate(" + (this.margins.left - 1) + ", " + this.margins.top + ")");
        axis.append('path').attr('class', 'domain').attr('d', "M0,0H" + (this.innerWidth() / this.pixelRatio + 1));
      }
      return this._resetInitialTimeTicks();
    };
    Plot.prototype._resetInitialTimeTicks = function() {
      var i,
          k,
          l,
          layer,
          len,
          ref,
          ref1,
          results,
          tickInterval;
      tickInterval = this.options.ticks.time;
      this._ticks = [];
      this._tickTimer = tickInterval;
      if (this.bottomAxis != null) {
        this.bottomAxis.selectAll('.tick').remove();
      }
      if (this.topAxis != null) {
        this.topAxis.selectAll('.tick').remove();
      }
      ref = this.data;
      results = [];
      for (l = 0, len = ref.length; l < len; l++) {
        layer = ref[l];
        if (!Epoch.isNonEmptyArray(layer.values)) {
          continue;
        }
        ref1 = [this.options.windowSize - 1, layer.values.length - 1], i = ref1[0], k = ref1[1];
        while (i >= 0 && k >= 0) {
          this._pushTick(i, layer.values[k].time, false, true);
          i -= tickInterval;
          k -= tickInterval;
        }
        break;
      }
      return results;
    };
    Plot.prototype._prepareRangeAxes = function() {
      if (this.hasAxis('left')) {
        this.svg.append("g").attr("class", "y axis left").attr('transform', "translate(" + (this.margins.left - 1) + ", " + this.margins.top + ")").call(this.leftAxis());
      }
      if (this.hasAxis('right')) {
        return this.svg.append('g').attr('class', 'y axis right').attr('transform', "translate(" + (this.width - this.margins.right) + ", " + this.margins.top + ")").call(this.rightAxis());
      }
    };
    Plot.prototype.leftAxis = function() {
      var axis,
          ticks;
      ticks = this.options.ticks.left;
      axis = d3.svg.axis().scale(this.ySvgLeft()).orient('left').tickFormat(this.options.tickFormats.left);
      if (ticks === 2) {
        return axis.tickValues(this.extent(function(d) {
          return d.y;
        }));
      } else {
        return axis.ticks(ticks);
      }
    };
    Plot.prototype.rightAxis = function() {
      var axis,
          extent,
          ticks;
      extent = this.extent(function(d) {
        return d.y;
      });
      ticks = this.options.ticks.right;
      axis = d3.svg.axis().scale(this.ySvgRight()).orient('right').tickFormat(this.options.tickFormats.right);
      if (ticks === 2) {
        return axis.tickValues(this.extent(function(d) {
          return d.y;
        }));
      } else {
        return axis.ticks(ticks);
      }
    };
    Plot.prototype.hasAxis = function(name) {
      return this.options.axes.indexOf(name) > -1;
    };
    Plot.prototype.innerWidth = function() {
      return (this.width - (this.margins.left + this.margins.right)) * this.pixelRatio;
    };
    Plot.prototype.innerHeight = function() {
      return (this.height - (this.margins.top + this.margins.bottom)) * this.pixelRatio;
    };
    Plot.prototype._prepareEntry = function(entry) {
      return entry;
    };
    Plot.prototype._prepareLayers = function(layers) {
      return layers;
    };
    Plot.prototype._startTransition = function() {
      if (this.animation.active === true || this._queue.length === 0) {
        return;
      }
      this.trigger('transition:start');
      this._shift();
      this.animation.active = true;
      return this.animation.interval = setInterval(this.animationCallback, 1000 / this.options.fps);
    };
    Plot.prototype._stopTransition = function() {
      var firstTick,
          l,
          lastTick,
          layer,
          len,
          ref,
          ref1;
      if (!this.inTransition()) {
        return;
      }
      ref = this.data;
      for (l = 0, len = ref.length; l < len; l++) {
        layer = ref[l];
        if (!(layer.values.length > this.options.windowSize + 1)) {
          continue;
        }
        layer.values.shift();
      }
      ref1 = [this._ticks[0], this._ticks[this._ticks.length - 1]], firstTick = ref1[0], lastTick = ref1[1];
      if ((lastTick != null) && lastTick.enter) {
        lastTick.enter = false;
        lastTick.opacity = 1;
      }
      if ((firstTick != null) && firstTick.exit) {
        this._shiftTick();
      }
      this.animation.frame = 0;
      this.trigger('transition:end');
      if (this._queue.length > 0) {
        return this._shift();
      } else {
        this.animation.active = false;
        return clearInterval(this.animation.interval);
      }
    };
    Plot.prototype.inTransition = function() {
      return this.animation.active;
    };
    Plot.prototype.push = function(layers) {
      layers = this._prepareLayers(layers);
      if (this._queue.length > this.options.queueSize) {
        this._queue.splice(this.options.queueSize, this._queue.length - this.options.queueSize);
      }
      if (this._queue.length === this.options.queueSize) {
        return false;
      }
      this._queue.push(layers.map((function(_this) {
        return function(entry) {
          return _this._prepareEntry(entry);
        };
      })(this)));
      this.trigger('push');
      if (!this.inTransition()) {
        return this._startTransition();
      }
    };
    Plot.prototype.pushFromModel = function() {
      return this.push(this.options.model.getNext(this.options.type, this.options.dataFormat));
    };
    Plot.prototype._shift = function() {
      var entry,
          i,
          layer,
          ref;
      this.trigger('before:shift');
      entry = this._queue.shift();
      ref = this.data;
      for (i in ref) {
        if (!hasProp.call(ref, i))
          continue;
        layer = ref[i];
        layer.values.push(entry[i]);
      }
      this._updateTicks(entry[0].time);
      this._transitionRangeAxes();
      return this.trigger('after:shift');
    };
    Plot.prototype._transitionRangeAxes = function() {
      if (this.hasAxis('left')) {
        this.svg.selectAll('.y.axis.left').transition().duration(500).ease('linear').call(this.leftAxis());
      }
      if (this.hasAxis('right')) {
        return this.svg.selectAll('.y.axis.right').transition().duration(500).ease('linear').call(this.rightAxis());
      }
    };
    Plot.prototype._animate = function() {
      if (!this.inTransition()) {
        return;
      }
      if (++this.animation.frame === this.animation.duration) {
        this._stopTransition();
      }
      this.draw(this.animation.frame * this.animation.delta());
      return this._updateTimeAxes();
    };
    Plot.prototype.y = function(givenDomain) {
      return d3.scale.linear().domain(this._getScaleDomain(givenDomain)).range([this.innerHeight(), 0]);
    };
    Plot.prototype.ySvg = function(givenDomain) {
      return d3.scale.linear().domain(this._getScaleDomain(givenDomain)).range([this.innerHeight() / this.pixelRatio, 0]);
    };
    Plot.prototype.ySvgLeft = function() {
      if (this.options.range != null) {
        return this.ySvg(this.options.range.left);
      } else {
        return this.ySvg();
      }
    };
    Plot.prototype.ySvgRight = function() {
      if (this.options.range != null) {
        return this.ySvg(this.options.range.right);
      } else {
        return this.ySvg();
      }
    };
    Plot.prototype.w = function() {
      return this.innerWidth() / this.options.windowSize;
    };
    Plot.prototype._updateTicks = function(newTime) {
      if (!(this.hasAxis('top') || this.hasAxis('bottom'))) {
        return;
      }
      if (!((++this._tickTimer) % this.options.ticks.time)) {
        this._pushTick(this.options.windowSize, newTime, true);
      }
      if (!(this._ticks.length > 0)) {
        return;
      }
      if (!(this._ticks[0].x - (this.w() / this.pixelRatio) >= 0)) {
        return this._ticks[0].exit = true;
      }
    };
    Plot.prototype._pushTick = function(bucket, time, enter, reverse) {
      var g,
          tick;
      if (enter == null) {
        enter = false;
      }
      if (reverse == null) {
        reverse = false;
      }
      if (!(this.hasAxis('top') || this.hasAxis('bottom'))) {
        return;
      }
      tick = {
        time: time,
        x: bucket * (this.w() / this.pixelRatio) + this._offsetX(),
        opacity: enter ? 0 : 1,
        enter: enter ? true : false,
        exit: false
      };
      if (this.hasAxis('bottom')) {
        g = this.bottomAxis.append('g').attr('class', 'tick major').attr('transform', "translate(" + (tick.x + 1) + ",0)").style('opacity', tick.opacity);
        g.append('line').attr('y2', 6);
        g.append('text').attr('text-anchor', 'middle').attr('dy', 19).text(this.options.tickFormats.bottom(tick.time));
        tick.bottomEl = g;
      }
      if (this.hasAxis('top')) {
        g = this.topAxis.append('g').attr('class', 'tick major').attr('transform', "translate(" + (tick.x + 1) + ",0)").style('opacity', tick.opacity);
        g.append('line').attr('y2', -6);
        g.append('text').attr('text-anchor', 'middle').attr('dy', -10).text(this.options.tickFormats.top(tick.time));
        tick.topEl = g;
      }
      if (reverse) {
        this._ticks.unshift(tick);
      } else {
        this._ticks.push(tick);
      }
      return tick;
    };
    Plot.prototype._shiftTick = function() {
      var tick;
      if (!(this._ticks.length > 0)) {
        return;
      }
      tick = this._ticks.shift();
      if (tick.topEl != null) {
        tick.topEl.remove();
      }
      if (tick.bottomEl != null) {
        return tick.bottomEl.remove();
      }
    };
    Plot.prototype._updateTimeAxes = function() {
      var dop,
          dx,
          l,
          len,
          ref,
          ref1,
          results,
          tick;
      if (!(this.hasAxis('top') || this.hasAxis('bottom'))) {
        return;
      }
      ref = [this.animation.tickDelta(), 1 / this.options.fps], dx = ref[0], dop = ref[1];
      ref1 = this._ticks;
      results = [];
      for (l = 0, len = ref1.length; l < len; l++) {
        tick = ref1[l];
        tick.x += dx;
        if (this.hasAxis('bottom')) {
          tick.bottomEl.attr('transform', "translate(" + (tick.x + 1) + ",0)");
        }
        if (this.hasAxis('top')) {
          tick.topEl.attr('transform', "translate(" + (tick.x + 1) + ",0)");
        }
        if (tick.enter) {
          tick.opacity += dop;
        } else if (tick.exit) {
          tick.opacity -= dop;
        }
        if (tick.enter || tick.exit) {
          if (this.hasAxis('bottom')) {
            tick.bottomEl.style('opacity', tick.opacity);
          }
          if (this.hasAxis('top')) {
            results.push(tick.topEl.style('opacity', tick.opacity));
          } else {
            results.push(void 0);
          }
        } else {
          results.push(void 0);
        }
      }
      return results;
    };
    Plot.prototype.draw = function(delta) {
      if (delta == null) {
        delta = 0;
      }
      return Plot.__super__.draw.call(this);
    };
    Plot.prototype.dimensionsChanged = function() {
      Plot.__super__.dimensionsChanged.call(this);
      this.svg.attr('width', this.width).attr('height', this.height);
      this._sizeCanvas();
      this._buildAxes();
      return this.draw(this.animation.frame * this.animation.delta());
    };
    Plot.prototype.axesChanged = function() {
      var l,
          len,
          pos,
          ref;
      ref = ['top', 'right', 'bottom', 'left'];
      for (l = 0, len = ref.length; l < len; l++) {
        pos = ref[l];
        if ((this.options.margins != null) && (this.options.margins[pos] != null)) {
          continue;
        }
        if (this.hasAxis(pos)) {
          this.margins[pos] = defaultAxisMargins[pos];
        } else {
          this.margins[pos] = 6;
        }
      }
      this._sizeCanvas();
      this._buildAxes();
      return this.draw(this.animation.frame * this.animation.delta());
    };
    Plot.prototype.ticksChanged = function() {
      this._resetInitialTimeTicks();
      this._transitionRangeAxes();
      return this.draw(this.animation.frame * this.animation.delta());
    };
    Plot.prototype.tickFormatsChanged = function() {
      this._resetInitialTimeTicks();
      this._transitionRangeAxes();
      return this.draw(this.animation.frame * this.animation.delta());
    };
    Plot.prototype.marginsChanged = function() {
      var pos,
          ref,
          size;
      if (this.options.margins == null) {
        return;
      }
      ref = this.options.margins;
      for (pos in ref) {
        if (!hasProp.call(ref, pos))
          continue;
        size = ref[pos];
        if (size == null) {
          this.margins[pos] = 6;
        } else {
          this.margins[pos] = size;
        }
      }
      this._sizeCanvas();
      return this.draw(this.animation.frame * this.animation.delta());
    };
    Plot.prototype.layerChanged = function() {
      this._transitionRangeAxes();
      return Plot.__super__.layerChanged.call(this);
    };
    return Plot;
  })(Epoch.Chart.Canvas);
  Epoch.Time.Stack = (function(superClass) {
    extend(Stack, superClass);
    function Stack() {
      return Stack.__super__.constructor.apply(this, arguments);
    }
    Stack.prototype._stackLayers = function() {
      var i,
          l,
          layer,
          layers,
          ref,
          results,
          y0;
      if (!((layers = this.getVisibleLayers()).length > 0)) {
        return;
      }
      results = [];
      for (i = l = 0, ref = layers[0].values.length; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
        y0 = 0;
        results.push((function() {
          var len,
              m,
              results1;
          results1 = [];
          for (m = 0, len = layers.length; m < len; m++) {
            layer = layers[m];
            layer.values[i].y0 = y0;
            results1.push(y0 += layer.values[i].y);
          }
          return results1;
        })());
      }
      return results;
    };
    Stack.prototype._prepareLayers = function(layers) {
      var d,
          i,
          y0;
      y0 = 0;
      for (i in layers) {
        if (!hasProp.call(layers, i))
          continue;
        d = layers[i];
        if (!this.data[i].visible) {
          continue;
        }
        d.y0 = y0;
        y0 += d.y;
      }
      return layers;
    };
    Stack.prototype.setData = function(data) {
      Stack.__super__.setData.call(this, data);
      return this._stackLayers();
    };
    Stack.prototype.extent = function() {
      var i,
          j,
          l,
          layers,
          m,
          max,
          ref,
          ref1,
          ref2,
          sum;
      ref = [0, this.getVisibleLayers()], max = ref[0], layers = ref[1];
      if (!layers.length) {
        return [0, 0];
      }
      for (i = l = 0, ref1 = layers[0].values.length; 0 <= ref1 ? l < ref1 : l > ref1; i = 0 <= ref1 ? ++l : --l) {
        sum = 0;
        for (j = m = 0, ref2 = layers.length; 0 <= ref2 ? m < ref2 : m > ref2; j = 0 <= ref2 ? ++m : --m) {
          sum += layers[j].values[i].y;
        }
        if (sum > max) {
          max = sum;
        }
      }
      return [0, max];
    };
    Stack.prototype.layerChanged = function() {
      var l,
          layers,
          len,
          ref;
      this._stackLayers();
      ref = this._queue;
      for (l = 0, len = ref.length; l < len; l++) {
        layers = ref[l];
        this._prepareLayers(layers);
      }
      return Stack.__super__.layerChanged.call(this);
    };
    return Stack;
  })(Epoch.Time.Plot);
  var extend = function(child, parent) {
    for (var key in parent) {
      if (hasProp.call(parent, key))
        child[key] = parent[key];
    }
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  },
      hasProp = {}.hasOwnProperty;
  Epoch.Time.Area = (function(superClass) {
    extend(Area, superClass);
    function Area(options) {
      var base;
      this.options = options != null ? options : {};
      if ((base = this.options).type == null) {
        base.type = 'time.area';
      }
      Area.__super__.constructor.call(this, this.options);
      this.draw();
    }
    Area.prototype.setStyles = function(layer) {
      var styles;
      if ((layer != null) && (layer.className != null)) {
        styles = this.getStyles("g." + (layer.className.replace(/\s/g, '.')) + " path.area");
      } else {
        styles = this.getStyles("g path.area");
      }
      this.ctx.fillStyle = styles.fill;
      if (styles.stroke != null) {
        this.ctx.strokeStyle = styles.stroke;
      }
      if (styles['stroke-width'] != null) {
        return this.ctx.lineWidth = styles['stroke-width'].replace('px', '');
      }
    };
    Area.prototype._drawAreas = function(delta) {
      var args,
          borderX,
          entry,
          firstX,
          i,
          j,
          k,
          l,
          layer,
          layers,
          ref,
          ref1,
          ref2,
          results,
          trans,
          w,
          y;
      if (delta == null) {
        delta = 0;
      }
      ref = [this.y(), this.w(), this.getVisibleLayers()], y = ref[0], w = ref[1], layers = ref[2];
      results = [];
      for (i = l = ref1 = layers.length - 1; ref1 <= 0 ? l <= 0 : l >= 0; i = ref1 <= 0 ? ++l : --l) {
        if (!(layer = layers[i])) {
          continue;
        }
        this.setStyles(layer);
        this.ctx.beginPath();
        ref2 = [this.options.windowSize, layer.values.length, this.inTransition()], j = ref2[0], k = ref2[1], trans = ref2[2];
        firstX = null;
        while ((--j >= -2) && (--k >= 0)) {
          entry = layer.values[k];
          args = [(j + 1) * w + delta, y(entry.y + entry.y0)];
          if (trans) {
            args[0] += w;
          }
          if (i === this.options.windowSize - 1) {
            this.ctx.moveTo.apply(this.ctx, args);
          } else {
            this.ctx.lineTo.apply(this.ctx, args);
          }
        }
        if (trans) {
          borderX = (j + 3) * w + delta;
        } else {
          borderX = (j + 2) * w + delta;
        }
        this.ctx.lineTo(borderX, this.innerHeight());
        this.ctx.lineTo(this.width * this.pixelRatio + w + delta, this.innerHeight());
        this.ctx.closePath();
        results.push(this.ctx.fill());
      }
      return results;
    };
    Area.prototype._drawStrokes = function(delta) {
      var args,
          entry,
          firstX,
          i,
          k,
          l,
          layer,
          layers,
          ref,
          ref1,
          ref2,
          results,
          trans,
          w,
          y;
      if (delta == null) {
        delta = 0;
      }
      ref = [this.y(), this.w(), this.getVisibleLayers()], y = ref[0], w = ref[1], layers = ref[2];
      results = [];
      for (i = l = ref1 = layers.length - 1; ref1 <= 0 ? l <= 0 : l >= 0; i = ref1 <= 0 ? ++l : --l) {
        if (!(layer = layers[i])) {
          continue;
        }
        this.setStyles(layer);
        this.ctx.beginPath();
        ref2 = [this.options.windowSize, layer.values.length, this.inTransition()], i = ref2[0], k = ref2[1], trans = ref2[2];
        firstX = null;
        while ((--i >= -2) && (--k >= 0)) {
          entry = layer.values[k];
          args = [(i + 1) * w + delta, y(entry.y + entry.y0)];
          if (trans) {
            args[0] += w;
          }
          if (i === this.options.windowSize - 1) {
            this.ctx.moveTo.apply(this.ctx, args);
          } else {
            this.ctx.lineTo.apply(this.ctx, args);
          }
        }
        results.push(this.ctx.stroke());
      }
      return results;
    };
    Area.prototype.draw = function(delta) {
      if (delta == null) {
        delta = 0;
      }
      this.clear();
      this._drawAreas(delta);
      this._drawStrokes(delta);
      return Area.__super__.draw.call(this);
    };
    return Area;
  })(Epoch.Time.Stack);
  var extend = function(child, parent) {
    for (var key in parent) {
      if (hasProp.call(parent, key))
        child[key] = parent[key];
    }
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  },
      hasProp = {}.hasOwnProperty;
  Epoch.Time.Bar = (function(superClass) {
    extend(Bar, superClass);
    function Bar(options) {
      var base;
      this.options = options != null ? options : {};
      if ((base = this.options).type == null) {
        base.type = 'time.bar';
      }
      Bar.__super__.constructor.call(this, this.options);
      this.draw();
    }
    Bar.prototype._offsetX = function() {
      return 0.5 * this.w() / this.pixelRatio;
    };
    Bar.prototype.setStyles = function(className) {
      var styles;
      styles = this.getStyles("rect.bar." + (className.replace(/\s/g, '.')));
      this.ctx.fillStyle = styles.fill;
      if ((styles.stroke == null) || styles.stroke === 'none') {
        this.ctx.strokeStyle = 'transparent';
      } else {
        this.ctx.strokeStyle = styles.stroke;
      }
      if (styles['stroke-width'] != null) {
        return this.ctx.lineWidth = styles['stroke-width'].replace('px', '');
      }
    };
    Bar.prototype.draw = function(delta) {
      var args,
          entry,
          ex,
          ey,
          ey0,
          i,
          iBoundry,
          j,
          k,
          layer,
          len,
          ref,
          ref1,
          ref2,
          ref3,
          trans,
          w,
          y;
      if (delta == null) {
        delta = 0;
      }
      this.clear();
      ref = [this.y(), this.w()], y = ref[0], w = ref[1];
      ref1 = this.getVisibleLayers();
      for (j = 0, len = ref1.length; j < len; j++) {
        layer = ref1[j];
        if (!Epoch.isNonEmptyArray(layer.values)) {
          continue;
        }
        this.setStyles(layer.className);
        ref2 = [this.options.windowSize, layer.values.length, this.inTransition()], i = ref2[0], k = ref2[1], trans = ref2[2];
        iBoundry = trans ? -1 : 0;
        while ((--i >= iBoundry) && (--k >= 0)) {
          entry = layer.values[k];
          ref3 = [i * w + delta, entry.y, entry.y0], ex = ref3[0], ey = ref3[1], ey0 = ref3[2];
          if (trans) {
            ex += w;
          }
          args = [ex + 1, y(ey + ey0), w - 2, this.innerHeight() - y(ey) + 0.5 * this.pixelRatio];
          this.ctx.fillRect.apply(this.ctx, args);
          this.ctx.strokeRect.apply(this.ctx, args);
        }
      }
      return Bar.__super__.draw.call(this);
    };
    return Bar;
  })(Epoch.Time.Stack);
  var extend = function(child, parent) {
    for (var key in parent) {
      if (hasProp.call(parent, key))
        child[key] = parent[key];
    }
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  },
      hasProp = {}.hasOwnProperty;
  Epoch.Time.Gauge = (function(superClass) {
    var defaults,
        optionListeners;
    extend(Gauge, superClass);
    defaults = {
      type: 'time.gauge',
      domain: [0, 1],
      ticks: 10,
      tickSize: 5,
      tickOffset: 5,
      fps: 34,
      format: Epoch.Formats.percent
    };
    optionListeners = {
      'option:domain': 'domainChanged',
      'option:ticks': 'ticksChanged',
      'option:tickSize': 'tickSizeChanged',
      'option:tickOffset': 'tickOffsetChanged',
      'option:format': 'formatChanged'
    };
    function Gauge(options) {
      this.options = options != null ? options : {};
      Gauge.__super__.constructor.call(this, this.options = Epoch.Util.defaults(this.options, defaults));
      this.value = this.options.value || 0;
      if (this.options.model) {
        this.options.model.on('data:push', (function(_this) {
          return function() {
            return _this.pushFromModel();
          };
        })(this));
      }
      if (this.el.style('position') !== 'absolute' && this.el.style('position') !== 'relative') {
        this.el.style('position', 'relative');
      }
      this.svg = this.el.insert('svg', ':first-child').attr('width', this.width).attr('height', this.height).attr('class', 'gauge-labels');
      this.svg.style({
        'position': 'absolute',
        'z-index': '1'
      });
      this.svg.append('g').attr('transform', "translate(" + (this.textX()) + ", " + (this.textY()) + ")").append('text').attr('class', 'value').text(this.options.format(this.value));
      this.animation = {
        interval: null,
        active: false,
        delta: 0,
        target: 0
      };
      this._animate = (function(_this) {
        return function() {
          if (Math.abs(_this.animation.target - _this.value) < Math.abs(_this.animation.delta)) {
            _this.value = _this.animation.target;
            clearInterval(_this.animation.interval);
            _this.animation.active = false;
          } else {
            _this.value += _this.animation.delta;
          }
          _this.svg.select('text.value').text(_this.options.format(_this.value));
          return _this.draw();
        };
      })(this);
      this.onAll(optionListeners);
      this.draw();
    }
    Gauge.prototype.update = function(value) {
      this.animation.target = value;
      this.animation.delta = (value - this.value) / this.options.fps;
      if (!this.animation.active) {
        this.animation.interval = setInterval(this._animate, 1000 / this.options.fps);
        return this.animation.active = true;
      }
    };
    Gauge.prototype.push = function(value) {
      return this.update(value);
    };
    Gauge.prototype.pushFromModel = function() {
      var next;
      next = this.options.model.getNext(this.options.type, this.options.dataFormat);
      return this.update(next);
    };
    Gauge.prototype.radius = function() {
      return this.getHeight() / 1.58;
    };
    Gauge.prototype.centerX = function() {
      return this.getWidth() / 2;
    };
    Gauge.prototype.centerY = function() {
      return 0.68 * this.getHeight();
    };
    Gauge.prototype.textX = function() {
      return this.width / 2;
    };
    Gauge.prototype.textY = function() {
      return 0.48 * this.height;
    };
    Gauge.prototype.getAngle = function(value) {
      var a,
          b,
          ref;
      ref = this.options.domain, a = ref[0], b = ref[1];
      return ((value - a) / (b - a)) * (Math.PI + 2 * Math.PI / 8) - Math.PI / 2 - Math.PI / 8;
    };
    Gauge.prototype.setStyles = function(selector) {
      var styles;
      styles = this.getStyles(selector);
      this.ctx.fillStyle = styles.fill;
      this.ctx.strokeStyle = styles.stroke;
      if (styles['stroke-width'] != null) {
        return this.ctx.lineWidth = styles['stroke-width'].replace('px', '');
      }
    };
    Gauge.prototype.draw = function() {
      var a,
          c,
          cx,
          cy,
          i,
          j,
          r,
          ref,
          ref1,
          ref2,
          ref3,
          s,
          t,
          tickOffset,
          tickSize,
          x1,
          x2,
          y1,
          y2;
      ref = [this.centerX(), this.centerY(), this.radius()], cx = ref[0], cy = ref[1], r = ref[2];
      ref1 = [this.options.tickOffset, this.options.tickSize], tickOffset = ref1[0], tickSize = ref1[1];
      this.clear();
      t = d3.scale.linear().domain([0, this.options.ticks]).range([-(9 / 8) * Math.PI, Math.PI / 8]);
      this.setStyles('.epoch .gauge .tick');
      this.ctx.beginPath();
      for (i = j = 0, ref2 = this.options.ticks; 0 <= ref2 ? j <= ref2 : j >= ref2; i = 0 <= ref2 ? ++j : --j) {
        a = t(i);
        ref3 = [Math.cos(a), Math.sin(a)], c = ref3[0], s = ref3[1];
        x1 = c * (r - tickOffset) + cx;
        y1 = s * (r - tickOffset) + cy;
        x2 = c * (r - tickOffset - tickSize) + cx;
        y2 = s * (r - tickOffset - tickSize) + cy;
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
      }
      this.ctx.stroke();
      this.setStyles('.epoch .gauge .arc.outer');
      this.ctx.beginPath();
      this.ctx.arc(cx, cy, r, -(9 / 8) * Math.PI, (1 / 8) * Math.PI, false);
      this.ctx.stroke();
      this.setStyles('.epoch .gauge .arc.inner');
      this.ctx.beginPath();
      this.ctx.arc(cx, cy, r - 10, -(9 / 8) * Math.PI, (1 / 8) * Math.PI, false);
      this.ctx.stroke();
      this.drawNeedle();
      return Gauge.__super__.draw.call(this);
    };
    Gauge.prototype.drawNeedle = function() {
      var cx,
          cy,
          r,
          ratio,
          ref;
      ref = [this.centerX(), this.centerY(), this.radius()], cx = ref[0], cy = ref[1], r = ref[2];
      ratio = this.value / this.options.domain[1];
      this.setStyles('.epoch .gauge .needle');
      this.ctx.beginPath();
      this.ctx.save();
      this.ctx.translate(cx, cy);
      this.ctx.rotate(this.getAngle(this.value));
      this.ctx.moveTo(4 * this.pixelRatio, 0);
      this.ctx.lineTo(-4 * this.pixelRatio, 0);
      this.ctx.lineTo(-1 * this.pixelRatio, 19 - r);
      this.ctx.lineTo(1, 19 - r);
      this.ctx.fill();
      this.setStyles('.epoch .gauge .needle-base');
      this.ctx.beginPath();
      this.ctx.arc(0, 0, this.getWidth() / 25, 0, 2 * Math.PI);
      this.ctx.fill();
      return this.ctx.restore();
    };
    Gauge.prototype.domainChanged = function() {
      return this.draw();
    };
    Gauge.prototype.ticksChanged = function() {
      return this.draw();
    };
    Gauge.prototype.tickSizeChanged = function() {
      return this.draw();
    };
    Gauge.prototype.tickOffsetChanged = function() {
      return this.draw();
    };
    Gauge.prototype.formatChanged = function() {
      return this.svg.select('text.value').text(this.options.format(this.value));
    };
    return Gauge;
  })(Epoch.Chart.Canvas);
  var extend = function(child, parent) {
    for (var key in parent) {
      if (hasProp.call(parent, key))
        child[key] = parent[key];
    }
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  },
      hasProp = {}.hasOwnProperty;
  Epoch.Time.Heatmap = (function(superClass) {
    var colorFunctions,
        defaults,
        optionListeners;
    extend(Heatmap, superClass);
    defaults = {
      type: 'time.heatmap',
      buckets: 10,
      bucketRange: [0, 100],
      opacity: 'linear',
      bucketPadding: 2,
      paintZeroValues: false,
      cutOutliers: false
    };
    colorFunctions = {
      root: function(value, max) {
        return Math.pow(value / max, 0.5);
      },
      linear: function(value, max) {
        return value / max;
      },
      quadratic: function(value, max) {
        return Math.pow(value / max, 2);
      },
      cubic: function(value, max) {
        return Math.pow(value / max, 3);
      },
      quartic: function(value, max) {
        return Math.pow(value / max, 4);
      },
      quintic: function(value, max) {
        return Math.pow(value / max, 5);
      }
    };
    optionListeners = {
      'option:buckets': 'bucketsChanged',
      'option:bucketRange': 'bucketRangeChanged',
      'option:opacity': 'opacityChanged',
      'option:bucketPadding': 'bucketPaddingChanged',
      'option:paintZeroValues': 'paintZeroValuesChanged',
      'option:cutOutliers': 'cutOutliersChanged'
    };
    function Heatmap(options) {
      this.options = options != null ? options : {};
      Heatmap.__super__.constructor.call(this, this.options = Epoch.Util.defaults(this.options, defaults));
      this._setOpacityFunction();
      this._setupPaintCanvas();
      this.onAll(optionListeners);
      this.draw();
    }
    Heatmap.prototype._setOpacityFunction = function() {
      if (Epoch.isString(this.options.opacity)) {
        this._opacityFn = colorFunctions[this.options.opacity];
        if (this._opacityFn == null) {
          return Epoch.exception("Unknown coloring function provided '" + this.options.opacity + "'");
        }
      } else if (Epoch.isFunction(this.options.opacity)) {
        return this._opacityFn = this.options.opacity;
      } else {
        return Epoch.exception("Unknown type for provided coloring function.");
      }
    };
    Heatmap.prototype.setData = function(data) {
      var k,
          layer,
          len,
          ref,
          results;
      Heatmap.__super__.setData.call(this, data);
      ref = this.data;
      results = [];
      for (k = 0, len = ref.length; k < len; k++) {
        layer = ref[k];
        results.push(layer.values = layer.values.map((function(_this) {
          return function(entry) {
            return _this._prepareEntry(entry);
          };
        })(this)));
      }
      return results;
    };
    Heatmap.prototype._getBuckets = function(entry) {
      var bucketSize,
          count,
          i,
          index,
          k,
          prepared,
          ref,
          ref1,
          value;
      prepared = {
        time: entry.time,
        max: 0,
        buckets: (function() {
          var k,
              ref,
              results;
          results = [];
          for (i = k = 0, ref = this.options.buckets; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
            results.push(0);
          }
          return results;
        }).call(this)
      };
      bucketSize = (this.options.bucketRange[1] - this.options.bucketRange[0]) / this.options.buckets;
      ref = entry.histogram;
      for (value in ref) {
        if (!hasProp.call(ref, value))
          continue;
        count = ref[value];
        index = parseInt((value - this.options.bucketRange[0]) / bucketSize);
        if (this.options.cutOutliers && ((index < 0) || (index >= this.options.buckets))) {
          continue;
        }
        if (index < 0) {
          index = 0;
        } else if (index >= this.options.buckets) {
          index = this.options.buckets - 1;
        }
        prepared.buckets[index] += parseInt(count);
      }
      for (i = k = 0, ref1 = prepared.buckets.length; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
        prepared.max = Math.max(prepared.max, prepared.buckets[i]);
      }
      return prepared;
    };
    Heatmap.prototype.y = function() {
      return d3.scale.linear().domain(this.options.bucketRange).range([this.innerHeight(), 0]);
    };
    Heatmap.prototype.ySvg = function() {
      return d3.scale.linear().domain(this.options.bucketRange).range([this.innerHeight() / this.pixelRatio, 0]);
    };
    Heatmap.prototype.h = function() {
      return this.innerHeight() / this.options.buckets;
    };
    Heatmap.prototype._offsetX = function() {
      return 0.5 * this.w() / this.pixelRatio;
    };
    Heatmap.prototype._setupPaintCanvas = function() {
      this.paintWidth = (this.options.windowSize + 1) * this.w();
      this.paintHeight = this.height * this.pixelRatio;
      this.paint = document.createElement('CANVAS');
      this.paint.width = this.paintWidth;
      this.paint.height = this.paintHeight;
      this.p = Epoch.Util.getContext(this.paint);
      this.redraw();
      this.on('after:shift', '_paintEntry');
      this.on('transition:end', '_shiftPaintCanvas');
      return this.on('transition:end', (function(_this) {
        return function() {
          return _this.draw(_this.animation.frame * _this.animation.delta());
        };
      })(this));
    };
    Heatmap.prototype.redraw = function() {
      var drawColumn,
          entryIndex;
      if (!(Epoch.isNonEmptyArray(this.data) && Epoch.isNonEmptyArray(this.data[0].values))) {
        return;
      }
      entryIndex = this.data[0].values.length;
      drawColumn = this.options.windowSize;
      if (this.inTransition()) {
        drawColumn++;
      }
      while ((--entryIndex >= 0) && (--drawColumn >= 0)) {
        this._paintEntry(entryIndex, drawColumn);
      }
      return this.draw(this.animation.frame * this.animation.delta());
    };
    Heatmap.prototype._computeColor = function(value, max, color) {
      return Epoch.Util.toRGBA(color, this._opacityFn(value, max));
    };
    Heatmap.prototype._paintEntry = function(entryIndex, drawColumn) {
      var bucket,
          bucketTotals,
          color,
          count,
          entries,
          entry,
          h,
          i,
          j,
          k,
          layer,
          len,
          len1,
          m,
          max,
          maxTotal,
          ref,
          ref1,
          ref2,
          results,
          styles,
          sum,
          w,
          xPos;
      if (entryIndex == null) {
        entryIndex = null;
      }
      if (drawColumn == null) {
        drawColumn = null;
      }
      ref = [this.w(), this.h()], w = ref[0], h = ref[1];
      if (entryIndex == null) {
        entryIndex = this.data[0].values.length - 1;
      }
      if (drawColumn == null) {
        drawColumn = this.options.windowSize;
      }
      entries = [];
      bucketTotals = (function() {
        var k,
            ref1,
            results;
        results = [];
        for (i = k = 0, ref1 = this.options.buckets; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
          results.push(0);
        }
        return results;
      }).call(this);
      maxTotal = 0;
      ref1 = this.getVisibleLayers();
      for (k = 0, len = ref1.length; k < len; k++) {
        layer = ref1[k];
        entry = this._getBuckets(layer.values[entryIndex]);
        ref2 = entry.buckets;
        for (bucket in ref2) {
          if (!hasProp.call(ref2, bucket))
            continue;
          count = ref2[bucket];
          bucketTotals[bucket] += count;
        }
        maxTotal += entry.max;
        styles = this.getStyles("." + (layer.className.split(' ').join('.')) + " rect.bucket");
        entry.color = styles.fill;
        entries.push(entry);
      }
      xPos = drawColumn * w;
      this.p.clearRect(xPos, 0, w, this.paintHeight);
      j = this.options.buckets;
      results = [];
      for (bucket in bucketTotals) {
        if (!hasProp.call(bucketTotals, bucket))
          continue;
        sum = bucketTotals[bucket];
        color = this._avgLab(entries, bucket);
        max = 0;
        for (m = 0, len1 = entries.length; m < len1; m++) {
          entry = entries[m];
          max += (entry.buckets[bucket] / sum) * maxTotal;
        }
        if (sum > 0 || this.options.paintZeroValues) {
          this.p.fillStyle = this._computeColor(sum, max, color);
          this.p.fillRect(xPos, (j - 1) * h, w - this.options.bucketPadding, h - this.options.bucketPadding);
        }
        results.push(j--);
      }
      return results;
    };
    Heatmap.prototype._shiftPaintCanvas = function() {
      var data;
      data = this.p.getImageData(this.w(), 0, this.paintWidth - this.w(), this.paintHeight);
      return this.p.putImageData(data, 0, 0);
    };
    Heatmap.prototype._avgLab = function(entries, bucket) {
      var a,
          b,
          color,
          entry,
          i,
          k,
          l,
          len,
          ratio,
          ref,
          total,
          value;
      ref = [0, 0, 0, 0], l = ref[0], a = ref[1], b = ref[2], total = ref[3];
      for (k = 0, len = entries.length; k < len; k++) {
        entry = entries[k];
        if (entry.buckets[bucket] == null) {
          continue;
        }
        total += entry.buckets[bucket];
      }
      for (i in entries) {
        if (!hasProp.call(entries, i))
          continue;
        entry = entries[i];
        if (entry.buckets[bucket] != null) {
          value = entry.buckets[bucket] | 0;
        } else {
          value = 0;
        }
        ratio = value / total;
        color = d3.lab(entry.color);
        l += ratio * color.l;
        a += ratio * color.a;
        b += ratio * color.b;
      }
      return d3.lab(l, a, b).toString();
    };
    Heatmap.prototype.draw = function(delta) {
      if (delta == null) {
        delta = 0;
      }
      this.clear();
      this.ctx.drawImage(this.paint, delta, 0);
      return Heatmap.__super__.draw.call(this);
    };
    Heatmap.prototype.bucketsChanged = function() {
      return this.redraw();
    };
    Heatmap.prototype.bucketRangeChanged = function() {
      this._transitionRangeAxes();
      return this.redraw();
    };
    Heatmap.prototype.opacityChanged = function() {
      this._setOpacityFunction();
      return this.redraw();
    };
    Heatmap.prototype.bucketPaddingChanged = function() {
      return this.redraw();
    };
    Heatmap.prototype.paintZeroValuesChanged = function() {
      return this.redraw();
    };
    Heatmap.prototype.cutOutliersChanged = function() {
      return this.redraw();
    };
    Heatmap.prototype.layerChanged = function() {
      return this.redraw();
    };
    return Heatmap;
  })(Epoch.Time.Plot);
  var extend = function(child, parent) {
    for (var key in parent) {
      if (hasProp.call(parent, key))
        child[key] = parent[key];
    }
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  },
      hasProp = {}.hasOwnProperty;
  Epoch.Time.Line = (function(superClass) {
    extend(Line, superClass);
    function Line(options) {
      var base;
      this.options = options != null ? options : {};
      if ((base = this.options).type == null) {
        base.type = 'time.line';
      }
      Line.__super__.constructor.call(this, this.options);
      this.draw();
    }
    Line.prototype.setStyles = function(className) {
      var styles;
      styles = this.getStyles("g." + (className.replace(/\s/g, '.')) + " path.line");
      this.ctx.fillStyle = styles.fill;
      this.ctx.strokeStyle = styles.stroke;
      return this.ctx.lineWidth = this.pixelRatio * styles['stroke-width'].replace('px', '');
    };
    Line.prototype.draw = function(delta) {
      var args,
          entry,
          i,
          j,
          k,
          layer,
          len,
          ref,
          ref1,
          trans,
          w,
          y;
      if (delta == null) {
        delta = 0;
      }
      this.clear();
      w = this.w();
      ref = this.getVisibleLayers();
      for (j = 0, len = ref.length; j < len; j++) {
        layer = ref[j];
        if (!Epoch.isNonEmptyArray(layer.values)) {
          continue;
        }
        this.setStyles(layer.className);
        this.ctx.beginPath();
        y = this.y(layer.range);
        ref1 = [this.options.windowSize, layer.values.length, this.inTransition()], i = ref1[0], k = ref1[1], trans = ref1[2];
        while ((--i >= -2) && (--k >= 0)) {
          entry = layer.values[k];
          args = [(i + 1) * w + delta, y(entry.y)];
          if (trans) {
            args[0] += w;
          }
          if (i === this.options.windowSize - 1) {
            this.ctx.moveTo.apply(this.ctx, args);
          } else {
            this.ctx.lineTo.apply(this.ctx, args);
          }
        }
        this.ctx.stroke();
      }
      return Line.__super__.draw.call(this);
    };
    return Line;
  })(Epoch.Time.Plot);
  Epoch._typeMap = {
    'area': Epoch.Chart.Area,
    'bar': Epoch.Chart.Bar,
    'line': Epoch.Chart.Line,
    'pie': Epoch.Chart.Pie,
    'scatter': Epoch.Chart.Scatter,
    'histogram': Epoch.Chart.Histogram,
    'time.area': Epoch.Time.Area,
    'time.bar': Epoch.Time.Bar,
    'time.line': Epoch.Time.Line,
    'time.gauge': Epoch.Time.Gauge,
    'time.heatmap': Epoch.Time.Heatmap
  };
  var jQueryModule;
  jQueryModule = function($) {
    var DATA_NAME;
    DATA_NAME = 'epoch-chart';
    return $.fn.epoch = function(options) {
      var chart,
          klass;
      options.el = this.get(0);
      if ((chart = this.data(DATA_NAME)) == null) {
        klass = Epoch._typeMap[options.type];
        if (klass == null) {
          Epoch.exception("Unknown chart type '" + options.type + "'");
        }
        this.data(DATA_NAME, (chart = new klass(options)));
      }
      return chart;
    };
  };
  if (window.jQuery != null) {
    jQueryModule(jQuery);
  }
  var MooToolsModule;
  MooToolsModule = function() {
    var DATA_NAME;
    DATA_NAME = 'epoch-chart';
    return Element.implement('epoch', function(options) {
      var chart,
          klass,
          self;
      self = $$(this);
      if ((chart = self.retrieve(DATA_NAME)[0]) == null) {
        options.el = this;
        klass = Epoch._typeMap[options.type];
        if (klass == null) {
          Epoch.exception("Unknown chart type '" + options.type + "'");
        }
        self.store(DATA_NAME, (chart = new klass(options)));
      }
      return chart;
    });
  };
  if (window.MooTools != null) {
    MooToolsModule();
  }
  var zeptoModule;
  zeptoModule = function($) {
    var DATA_NAME,
        chartId,
        chartMap,
        next_cid;
    DATA_NAME = 'epoch-chart';
    chartMap = {};
    chartId = 0;
    next_cid = function() {
      return DATA_NAME + "-" + (++chartId);
    };
    return $.extend($.fn, {epoch: function(options) {
        var chart,
            cid,
            klass;
        if ((cid = this.data(DATA_NAME)) != null) {
          return chartMap[cid];
        }
        options.el = this.get(0);
        klass = Epoch._typeMap[options.type];
        if (klass == null) {
          Epoch.exception("Unknown chart type '" + options.type + "'");
        }
        this.data(DATA_NAME, (cid = next_cid()));
        chart = new klass(options);
        chartMap[cid] = chart;
        return chart;
      }});
  };
  if (window.Zepto != null) {
    zeptoModule(Zepto);
  }
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("17", ["16"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('16');
  global.define = __define;
  return module.exports;
});

$__System.register("18", [], function() { return { setters: [], execute: function() {} } });

$__System.register("19", [], function() { return { setters: [], execute: function() {} } });

$__System.registerDynamic("1a", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.register("1b", ["1a"], function (_export) {
  var _classCallCheck, Activity;

  return {
    setters: [function (_a) {
      _classCallCheck = _a["default"];
    }],
    execute: function () {
      "use strict";

      Activity = function Activity(name, aaarrrps) {
        _classCallCheck(this, Activity);

        this.name = name;
        this.aaarrrps = aaarrrps;
      };

      _export("default", Activity);
    }
  };
});

$__System.register('1c', ['1b'], function (_export) {
  'use strict';

  var Activity, Activities;
  return {
    setters: [function (_b) {
      Activity = _b['default'];
    }],
    execute: function () {
      Activities = [new Activity('Writing docs', ['acquisition', 'activation', 'product']), new Activity('Library dev', ['activation', 'product']), new Activity('Quick start apps', ['activation', 'product']), new Activity('Blog posts', ['awareness', 'acquisition', 'activation', 'retention']), new Activity('Webinars', ['awareness', 'acquisition', 'activation', 'retention']), new Activity('Sponsor events', ['awareness', 'acquisition']), new Activity('Give talks', ['awareness', 'acquisition']), new Activity('Answer support queries', ['activation', 'retention', 'product']), new Activity('Support pre-sales', ['acquisition', 'activation']), new Activity('Dedicated forum', ['activation', 'retention']), new Activity('Alpha/Beta programme', ['retention', 'product']), new Activity('Office hours', ['activation', 'retention']), new Activity('Capture developer feedback', ['retention', 'product']), new Activity('Help with recruitment', ['awareness'])];

      _export('default', Activities);
    }
  };
});

$__System.register('1d', ['5', '11', '13', '15', '17', '18', '19', '1a', '1c'], function (_export) {
  var _createClass, _Object$keys, $, d3, epoch, _classCallCheck, Activities, DevRelOMeter;

  return {
    setters: [function (_) {
      _createClass = _['default'];
    }, function (_2) {
      _Object$keys = _2['default'];
    }, function (_3) {
      $ = _3['default'];
    }, function (_4) {
      d3 = _4['default'];
    }, function (_5) {
      epoch = _5['default'];
    }, function (_6) {}, function (_7) {}, function (_a) {
      _classCallCheck = _a['default'];
    }, function (_c) {
      Activities = _c['default'];
    }],
    execute: function () {

      /**
       * Developer Relations Meter
       *
       * Determine if the activities that are being undertaken,
       * or that are planned to be undertaken, suggest the
       * practition of Evangelism or Advocacy.
       */
      'use strict';

      DevRelOMeter = (function () {
        function DevRelOMeter() {
          _classCallCheck(this, DevRelOMeter);

          this.createActivities();

          this._gauge = this.createGaugeChart();
          this._pie = this.createPieChart();

          $('input[type=checkbox]').change(this.handleCheckStateChange.bind(this));
        }

        /**
         * Add the activity checkboxes to the UI.
         */

        _createClass(DevRelOMeter, [{
          key: 'createActivities',
          value: function createActivities() {
            var activities = $('#activities');
            Activities.forEach(function (activity) {
              activities.append('<li><label><input type="checkbox" data-label="' + activity.name + '" /> ' + activity.name + '</label></li>');
            });
          }

          /**
           * Create Epoch Gauge chart.
           */
        }, {
          key: 'createGaugeChart',
          value: function createGaugeChart() {
            return $('#gaugeChart').epoch({
              type: 'time.gauge',
              value: 0,
              format: function format(v) {
                var label = 'None';
                if (v >= 0.5) {
                  label = "Advocacy";
                } else if (v > 0) {
                  label = 'Evangelism';
                }

                return label;
              }
            });
          }

          /**
           * Create the Epoch Pie chart.
           */
        }, {
          key: 'createPieChart',
          value: function createPieChart() {
            return $('#pie').epoch({
              type: 'pie',
              data: [{
                label: '?',
                value: 1
              }]
            });
          }

          /**
           * Handle an activity checkbox check state change
           * and update the charts.
           */
        }, {
          key: 'handleCheckStateChange',
          value: function handleCheckStateChange() {
            var checked = $('input[type=checkbox]:checked');
            var checkedCount = checked.length;

            var aaarrrs = this.calcAaarrrpCount(checked);
            var pieData = [];
            _Object$keys(aaarrrs).forEach(function (name) {
              pieData.push({ label: name + ' (' + aaarrrs[name] + ')', value: aaarrrs[name] });
            });

            // console.log(pieData);
            this._pie.update(pieData);

            // if awareness and acquisition is a priority it's Evangelism
            // if - in addition - product, activation and retention are hight it's Advocacy
            var percentEvangelism = this.getPercentFor(aaarrrs, ['awareness', 'acquisition']);
            var percentAdvocacy = this.getPercentFor(aaarrrs, ['product', 'activation', 'retention']);

            // console.log('Evangelism:', percentEvangelism);
            // console.log('Advocacy:', percentAdvocacy);

            // Create a fake percentage to move the Gauge needle.
            // TODO: consider a better UI representation
            var fakeGaugePercent = 0.75; // hope for advocacy
            if (percentEvangelism > percentAdvocacy) {
              fakeGaugePercent = 0.25;
            }

            if (fakeGaugePercent !== this._gauge.value) {
              this._gauge.update(fakeGaugePercent);
            }
          }

          /** 
           * Work AAARRRP indicators count based on the activities
           * that have been selected.
           *
           * @param {object} checked jQuery list of checkboxes
           *
           * @example
           * // returns {activation: 2, product: 2, acquisition: 1}
           * calcAaarrrpCount(["library dev", "Writing Docs"])
           */
        }, {
          key: 'calcAaarrrpCount',
          value: function calcAaarrrpCount(checked) {
            var aaarrrs = {};

            checked.each(function (index, input) {
              var name = input.getAttribute('data-label');
              var activity = Activities.find(function (a) {
                return a.name === name;
              });

              activity.aaarrrps.forEach(function (ar) {
                if (!aaarrrs[ar]) {
                  aaarrrs[ar] = 0;
                }
                ++aaarrrs[ar];
              });
            });

            return aaarrrs;
          }

          /**
           * Based on all the AAARRRPs calculate the percentage of
           * the total which are within the `checkedFor` array.
           *
           * @example
           * // returns 0.66
           * getPercentFor({awareness: 2, activation: 1}, ['awareness'])
           */
        }, {
          key: 'getPercentFor',
          value: function getPercentFor(aaarrrs, checkFor) {
            var total = 0;
            _Object$keys(aaarrrs).forEach(function (ar) {
              total += aaarrrs[ar];
            });

            var checkedTotal = 0;
            checkFor.forEach(function (toCheck) {
              if (aaarrrs[toCheck]) {
                checkedTotal += aaarrrs[toCheck];
              }
            });
            return parseFloat((checkedTotal / total).toFixed(2));
          }
        }]);

        return DevRelOMeter;
      })();

      _export('default', DevRelOMeter);
    }
  };
});

$__System.register('1', ['1d'], function (_export) {
  'use strict';

  var DevRelOMeter;
  return {
    setters: [function (_d) {
      DevRelOMeter = _d['default'];
    }],
    execute: function () {

      new DevRelOMeter();
    }
  };
});

$__System.register('npm:epoch-charting@0.8.4/dist/css/epoch.min.css!github:systemjs/plugin-css@0.1.20.js', [], false, function() {});
$__System.register('assets/css/styles.css!github:systemjs/plugin-css@0.1.20.js', [], false, function() {});
(function(c){if (typeof document == 'undefined') return; var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
(".epoch .axis line,.epoch .axis path{shape-rendering:crispEdges}.epoch .axis.canvas .tick line{shape-rendering:geometricPrecision}div#_canvas_css_reference{width:0;height:0;position:absolute;top:-1000px;left:-1000px}div#_canvas_css_reference svg{position:absolute;width:0;height:0;top:-1000px;left:-1000px}.epoch{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:12pt}.epoch .axis line,.epoch .axis path{fill:transparent;stroke:#000}.epoch .axis .tick text{font-size:9pt}.epoch .line{fill:transparent;stroke-width:2px}.epoch.sparklines .line{stroke-width:1px}.epoch .area{stroke:transparent}.epoch .arc.pie{stroke:#fff;stroke-width:1.5px}.epoch .arc.pie text{stroke:transparent;fill:#fff;font-size:9pt}.epoch .gauge-labels .value{text-anchor:middle;font-size:140%;fill:#666}.epoch.gauge-tiny{width:120px;height:90px}.epoch.gauge-tiny .gauge-labels .value{font-size:80%}.epoch.gauge-tiny .gauge .arc.outer{stroke-width:2px}.epoch.gauge-small{width:180px;height:135px}.epoch.gauge-small .gauge-labels .value{font-size:120%}.epoch.gauge-small .gauge .arc.outer{stroke-width:3px}.epoch.gauge-medium{width:240px;height:180px}.epoch.gauge-medium .gauge .arc.outer{stroke-width:3px}.epoch.gauge-large{width:320px;height:240px}.epoch.gauge-large .gauge-labels .value{font-size:180%}.epoch .gauge .arc.outer{stroke-width:4px;stroke:#666}.epoch .gauge .arc.inner{stroke-width:1px;stroke:#555}.epoch .gauge .tick{stroke-width:1px;stroke:#555}.epoch .gauge .needle{fill:orange}.epoch .gauge .needle-base{fill:#666}.epoch div.ref.category1,.epoch.category10 div.ref.category1{background-color:#1f77b4}.epoch .category1 .line,.epoch.category10 .category1 .line{stroke:#1f77b4}.epoch .category1 .area,.epoch .category1 .dot,.epoch.category10 .category1 .area,.epoch.category10 .category1 .dot{fill:#1f77b4;stroke:transparent}.epoch .arc.category1 path,.epoch.category10 .arc.category1 path{fill:#1f77b4}.epoch .bar.category1,.epoch.category10 .bar.category1{fill:#1f77b4}.epoch div.ref.category2,.epoch.category10 div.ref.category2{background-color:#ff7f0e}.epoch .category2 .line,.epoch.category10 .category2 .line{stroke:#ff7f0e}.epoch .category2 .area,.epoch .category2 .dot,.epoch.category10 .category2 .area,.epoch.category10 .category2 .dot{fill:#ff7f0e;stroke:transparent}.epoch .arc.category2 path,.epoch.category10 .arc.category2 path{fill:#ff7f0e}.epoch .bar.category2,.epoch.category10 .bar.category2{fill:#ff7f0e}.epoch div.ref.category3,.epoch.category10 div.ref.category3{background-color:#2ca02c}.epoch .category3 .line,.epoch.category10 .category3 .line{stroke:#2ca02c}.epoch .category3 .area,.epoch .category3 .dot,.epoch.category10 .category3 .area,.epoch.category10 .category3 .dot{fill:#2ca02c;stroke:transparent}.epoch .arc.category3 path,.epoch.category10 .arc.category3 path{fill:#2ca02c}.epoch .bar.category3,.epoch.category10 .bar.category3{fill:#2ca02c}.epoch div.ref.category4,.epoch.category10 div.ref.category4{background-color:#d62728}.epoch .category4 .line,.epoch.category10 .category4 .line{stroke:#d62728}.epoch .category4 .area,.epoch .category4 .dot,.epoch.category10 .category4 .area,.epoch.category10 .category4 .dot{fill:#d62728;stroke:transparent}.epoch .arc.category4 path,.epoch.category10 .arc.category4 path{fill:#d62728}.epoch .bar.category4,.epoch.category10 .bar.category4{fill:#d62728}.epoch div.ref.category5,.epoch.category10 div.ref.category5{background-color:#9467bd}.epoch .category5 .line,.epoch.category10 .category5 .line{stroke:#9467bd}.epoch .category5 .area,.epoch .category5 .dot,.epoch.category10 .category5 .area,.epoch.category10 .category5 .dot{fill:#9467bd;stroke:transparent}.epoch .arc.category5 path,.epoch.category10 .arc.category5 path{fill:#9467bd}.epoch .bar.category5,.epoch.category10 .bar.category5{fill:#9467bd}.epoch div.ref.category6,.epoch.category10 div.ref.category6{background-color:#8c564b}.epoch .category6 .line,.epoch.category10 .category6 .line{stroke:#8c564b}.epoch .category6 .area,.epoch .category6 .dot,.epoch.category10 .category6 .area,.epoch.category10 .category6 .dot{fill:#8c564b;stroke:transparent}.epoch .arc.category6 path,.epoch.category10 .arc.category6 path{fill:#8c564b}.epoch .bar.category6,.epoch.category10 .bar.category6{fill:#8c564b}.epoch div.ref.category7,.epoch.category10 div.ref.category7{background-color:#e377c2}.epoch .category7 .line,.epoch.category10 .category7 .line{stroke:#e377c2}.epoch .category7 .area,.epoch .category7 .dot,.epoch.category10 .category7 .area,.epoch.category10 .category7 .dot{fill:#e377c2;stroke:transparent}.epoch .arc.category7 path,.epoch.category10 .arc.category7 path{fill:#e377c2}.epoch .bar.category7,.epoch.category10 .bar.category7{fill:#e377c2}.epoch div.ref.category8,.epoch.category10 div.ref.category8{background-color:#7f7f7f}.epoch .category8 .line,.epoch.category10 .category8 .line{stroke:#7f7f7f}.epoch .category8 .area,.epoch .category8 .dot,.epoch.category10 .category8 .area,.epoch.category10 .category8 .dot{fill:#7f7f7f;stroke:transparent}.epoch .arc.category8 path,.epoch.category10 .arc.category8 path{fill:#7f7f7f}.epoch .bar.category8,.epoch.category10 .bar.category8{fill:#7f7f7f}.epoch div.ref.category9,.epoch.category10 div.ref.category9{background-color:#bcbd22}.epoch .category9 .line,.epoch.category10 .category9 .line{stroke:#bcbd22}.epoch .category9 .area,.epoch .category9 .dot,.epoch.category10 .category9 .area,.epoch.category10 .category9 .dot{fill:#bcbd22;stroke:transparent}.epoch .arc.category9 path,.epoch.category10 .arc.category9 path{fill:#bcbd22}.epoch .bar.category9,.epoch.category10 .bar.category9{fill:#bcbd22}.epoch div.ref.category10,.epoch.category10 div.ref.category10{background-color:#17becf}.epoch .category10 .line,.epoch.category10 .category10 .line{stroke:#17becf}.epoch .category10 .area,.epoch .category10 .dot,.epoch.category10 .category10 .area,.epoch.category10 .category10 .dot{fill:#17becf;stroke:transparent}.epoch .arc.category10 path,.epoch.category10 .arc.category10 path{fill:#17becf}.epoch .bar.category10,.epoch.category10 .bar.category10{fill:#17becf}.epoch.category20 div.ref.category1{background-color:#1f77b4}.epoch.category20 .category1 .line{stroke:#1f77b4}.epoch.category20 .category1 .area,.epoch.category20 .category1 .dot{fill:#1f77b4;stroke:transparent}.epoch.category20 .arc.category1 path{fill:#1f77b4}.epoch.category20 .bar.category1{fill:#1f77b4}.epoch.category20 div.ref.category2{background-color:#aec7e8}.epoch.category20 .category2 .line{stroke:#aec7e8}.epoch.category20 .category2 .area,.epoch.category20 .category2 .dot{fill:#aec7e8;stroke:transparent}.epoch.category20 .arc.category2 path{fill:#aec7e8}.epoch.category20 .bar.category2{fill:#aec7e8}.epoch.category20 div.ref.category3{background-color:#ff7f0e}.epoch.category20 .category3 .line{stroke:#ff7f0e}.epoch.category20 .category3 .area,.epoch.category20 .category3 .dot{fill:#ff7f0e;stroke:transparent}.epoch.category20 .arc.category3 path{fill:#ff7f0e}.epoch.category20 .bar.category3{fill:#ff7f0e}.epoch.category20 div.ref.category4{background-color:#ffbb78}.epoch.category20 .category4 .line{stroke:#ffbb78}.epoch.category20 .category4 .area,.epoch.category20 .category4 .dot{fill:#ffbb78;stroke:transparent}.epoch.category20 .arc.category4 path{fill:#ffbb78}.epoch.category20 .bar.category4{fill:#ffbb78}.epoch.category20 div.ref.category5{background-color:#2ca02c}.epoch.category20 .category5 .line{stroke:#2ca02c}.epoch.category20 .category5 .area,.epoch.category20 .category5 .dot{fill:#2ca02c;stroke:transparent}.epoch.category20 .arc.category5 path{fill:#2ca02c}.epoch.category20 .bar.category5{fill:#2ca02c}.epoch.category20 div.ref.category6{background-color:#98df8a}.epoch.category20 .category6 .line{stroke:#98df8a}.epoch.category20 .category6 .area,.epoch.category20 .category6 .dot{fill:#98df8a;stroke:transparent}.epoch.category20 .arc.category6 path{fill:#98df8a}.epoch.category20 .bar.category6{fill:#98df8a}.epoch.category20 div.ref.category7{background-color:#d62728}.epoch.category20 .category7 .line{stroke:#d62728}.epoch.category20 .category7 .area,.epoch.category20 .category7 .dot{fill:#d62728;stroke:transparent}.epoch.category20 .arc.category7 path{fill:#d62728}.epoch.category20 .bar.category7{fill:#d62728}.epoch.category20 div.ref.category8{background-color:#ff9896}.epoch.category20 .category8 .line{stroke:#ff9896}.epoch.category20 .category8 .area,.epoch.category20 .category8 .dot{fill:#ff9896;stroke:transparent}.epoch.category20 .arc.category8 path{fill:#ff9896}.epoch.category20 .bar.category8{fill:#ff9896}.epoch.category20 div.ref.category9{background-color:#9467bd}.epoch.category20 .category9 .line{stroke:#9467bd}.epoch.category20 .category9 .area,.epoch.category20 .category9 .dot{fill:#9467bd;stroke:transparent}.epoch.category20 .arc.category9 path{fill:#9467bd}.epoch.category20 .bar.category9{fill:#9467bd}.epoch.category20 div.ref.category10{background-color:#c5b0d5}.epoch.category20 .category10 .line{stroke:#c5b0d5}.epoch.category20 .category10 .area,.epoch.category20 .category10 .dot{fill:#c5b0d5;stroke:transparent}.epoch.category20 .arc.category10 path{fill:#c5b0d5}.epoch.category20 .bar.category10{fill:#c5b0d5}.epoch.category20 div.ref.category11{background-color:#8c564b}.epoch.category20 .category11 .line{stroke:#8c564b}.epoch.category20 .category11 .area,.epoch.category20 .category11 .dot{fill:#8c564b;stroke:transparent}.epoch.category20 .arc.category11 path{fill:#8c564b}.epoch.category20 .bar.category11{fill:#8c564b}.epoch.category20 div.ref.category12{background-color:#c49c94}.epoch.category20 .category12 .line{stroke:#c49c94}.epoch.category20 .category12 .area,.epoch.category20 .category12 .dot{fill:#c49c94;stroke:transparent}.epoch.category20 .arc.category12 path{fill:#c49c94}.epoch.category20 .bar.category12{fill:#c49c94}.epoch.category20 div.ref.category13{background-color:#e377c2}.epoch.category20 .category13 .line{stroke:#e377c2}.epoch.category20 .category13 .area,.epoch.category20 .category13 .dot{fill:#e377c2;stroke:transparent}.epoch.category20 .arc.category13 path{fill:#e377c2}.epoch.category20 .bar.category13{fill:#e377c2}.epoch.category20 div.ref.category14{background-color:#f7b6d2}.epoch.category20 .category14 .line{stroke:#f7b6d2}.epoch.category20 .category14 .area,.epoch.category20 .category14 .dot{fill:#f7b6d2;stroke:transparent}.epoch.category20 .arc.category14 path{fill:#f7b6d2}.epoch.category20 .bar.category14{fill:#f7b6d2}.epoch.category20 div.ref.category15{background-color:#7f7f7f}.epoch.category20 .category15 .line{stroke:#7f7f7f}.epoch.category20 .category15 .area,.epoch.category20 .category15 .dot{fill:#7f7f7f;stroke:transparent}.epoch.category20 .arc.category15 path{fill:#7f7f7f}.epoch.category20 .bar.category15{fill:#7f7f7f}.epoch.category20 div.ref.category16{background-color:#c7c7c7}.epoch.category20 .category16 .line{stroke:#c7c7c7}.epoch.category20 .category16 .area,.epoch.category20 .category16 .dot{fill:#c7c7c7;stroke:transparent}.epoch.category20 .arc.category16 path{fill:#c7c7c7}.epoch.category20 .bar.category16{fill:#c7c7c7}.epoch.category20 div.ref.category17{background-color:#bcbd22}.epoch.category20 .category17 .line{stroke:#bcbd22}.epoch.category20 .category17 .area,.epoch.category20 .category17 .dot{fill:#bcbd22;stroke:transparent}.epoch.category20 .arc.category17 path{fill:#bcbd22}.epoch.category20 .bar.category17{fill:#bcbd22}.epoch.category20 div.ref.category18{background-color:#dbdb8d}.epoch.category20 .category18 .line{stroke:#dbdb8d}.epoch.category20 .category18 .area,.epoch.category20 .category18 .dot{fill:#dbdb8d;stroke:transparent}.epoch.category20 .arc.category18 path{fill:#dbdb8d}.epoch.category20 .bar.category18{fill:#dbdb8d}.epoch.category20 div.ref.category19{background-color:#17becf}.epoch.category20 .category19 .line{stroke:#17becf}.epoch.category20 .category19 .area,.epoch.category20 .category19 .dot{fill:#17becf;stroke:transparent}.epoch.category20 .arc.category19 path{fill:#17becf}.epoch.category20 .bar.category19{fill:#17becf}.epoch.category20 div.ref.category20{background-color:#9edae5}.epoch.category20 .category20 .line{stroke:#9edae5}.epoch.category20 .category20 .area,.epoch.category20 .category20 .dot{fill:#9edae5;stroke:transparent}.epoch.category20 .arc.category20 path{fill:#9edae5}.epoch.category20 .bar.category20{fill:#9edae5}.epoch.category20b div.ref.category1{background-color:#393b79}.epoch.category20b .category1 .line{stroke:#393b79}.epoch.category20b .category1 .area,.epoch.category20b .category1 .dot{fill:#393b79;stroke:transparent}.epoch.category20b .arc.category1 path{fill:#393b79}.epoch.category20b .bar.category1{fill:#393b79}.epoch.category20b div.ref.category2{background-color:#5254a3}.epoch.category20b .category2 .line{stroke:#5254a3}.epoch.category20b .category2 .area,.epoch.category20b .category2 .dot{fill:#5254a3;stroke:transparent}.epoch.category20b .arc.category2 path{fill:#5254a3}.epoch.category20b .bar.category2{fill:#5254a3}.epoch.category20b div.ref.category3{background-color:#6b6ecf}.epoch.category20b .category3 .line{stroke:#6b6ecf}.epoch.category20b .category3 .area,.epoch.category20b .category3 .dot{fill:#6b6ecf;stroke:transparent}.epoch.category20b .arc.category3 path{fill:#6b6ecf}.epoch.category20b .bar.category3{fill:#6b6ecf}.epoch.category20b div.ref.category4{background-color:#9c9ede}.epoch.category20b .category4 .line{stroke:#9c9ede}.epoch.category20b .category4 .area,.epoch.category20b .category4 .dot{fill:#9c9ede;stroke:transparent}.epoch.category20b .arc.category4 path{fill:#9c9ede}.epoch.category20b .bar.category4{fill:#9c9ede}.epoch.category20b div.ref.category5{background-color:#637939}.epoch.category20b .category5 .line{stroke:#637939}.epoch.category20b .category5 .area,.epoch.category20b .category5 .dot{fill:#637939;stroke:transparent}.epoch.category20b .arc.category5 path{fill:#637939}.epoch.category20b .bar.category5{fill:#637939}.epoch.category20b div.ref.category6{background-color:#8ca252}.epoch.category20b .category6 .line{stroke:#8ca252}.epoch.category20b .category6 .area,.epoch.category20b .category6 .dot{fill:#8ca252;stroke:transparent}.epoch.category20b .arc.category6 path{fill:#8ca252}.epoch.category20b .bar.category6{fill:#8ca252}.epoch.category20b div.ref.category7{background-color:#b5cf6b}.epoch.category20b .category7 .line{stroke:#b5cf6b}.epoch.category20b .category7 .area,.epoch.category20b .category7 .dot{fill:#b5cf6b;stroke:transparent}.epoch.category20b .arc.category7 path{fill:#b5cf6b}.epoch.category20b .bar.category7{fill:#b5cf6b}.epoch.category20b div.ref.category8{background-color:#cedb9c}.epoch.category20b .category8 .line{stroke:#cedb9c}.epoch.category20b .category8 .area,.epoch.category20b .category8 .dot{fill:#cedb9c;stroke:transparent}.epoch.category20b .arc.category8 path{fill:#cedb9c}.epoch.category20b .bar.category8{fill:#cedb9c}.epoch.category20b div.ref.category9{background-color:#8c6d31}.epoch.category20b .category9 .line{stroke:#8c6d31}.epoch.category20b .category9 .area,.epoch.category20b .category9 .dot{fill:#8c6d31;stroke:transparent}.epoch.category20b .arc.category9 path{fill:#8c6d31}.epoch.category20b .bar.category9{fill:#8c6d31}.epoch.category20b div.ref.category10{background-color:#bd9e39}.epoch.category20b .category10 .line{stroke:#bd9e39}.epoch.category20b .category10 .area,.epoch.category20b .category10 .dot{fill:#bd9e39;stroke:transparent}.epoch.category20b .arc.category10 path{fill:#bd9e39}.epoch.category20b .bar.category10{fill:#bd9e39}.epoch.category20b div.ref.category11{background-color:#e7ba52}.epoch.category20b .category11 .line{stroke:#e7ba52}.epoch.category20b .category11 .area,.epoch.category20b .category11 .dot{fill:#e7ba52;stroke:transparent}.epoch.category20b .arc.category11 path{fill:#e7ba52}.epoch.category20b .bar.category11{fill:#e7ba52}.epoch.category20b div.ref.category12{background-color:#e7cb94}.epoch.category20b .category12 .line{stroke:#e7cb94}.epoch.category20b .category12 .area,.epoch.category20b .category12 .dot{fill:#e7cb94;stroke:transparent}.epoch.category20b .arc.category12 path{fill:#e7cb94}.epoch.category20b .bar.category12{fill:#e7cb94}.epoch.category20b div.ref.category13{background-color:#843c39}.epoch.category20b .category13 .line{stroke:#843c39}.epoch.category20b .category13 .area,.epoch.category20b .category13 .dot{fill:#843c39;stroke:transparent}.epoch.category20b .arc.category13 path{fill:#843c39}.epoch.category20b .bar.category13{fill:#843c39}.epoch.category20b div.ref.category14{background-color:#ad494a}.epoch.category20b .category14 .line{stroke:#ad494a}.epoch.category20b .category14 .area,.epoch.category20b .category14 .dot{fill:#ad494a;stroke:transparent}.epoch.category20b .arc.category14 path{fill:#ad494a}.epoch.category20b .bar.category14{fill:#ad494a}.epoch.category20b div.ref.category15{background-color:#d6616b}.epoch.category20b .category15 .line{stroke:#d6616b}.epoch.category20b .category15 .area,.epoch.category20b .category15 .dot{fill:#d6616b;stroke:transparent}.epoch.category20b .arc.category15 path{fill:#d6616b}.epoch.category20b .bar.category15{fill:#d6616b}.epoch.category20b div.ref.category16{background-color:#e7969c}.epoch.category20b .category16 .line{stroke:#e7969c}.epoch.category20b .category16 .area,.epoch.category20b .category16 .dot{fill:#e7969c;stroke:transparent}.epoch.category20b .arc.category16 path{fill:#e7969c}.epoch.category20b .bar.category16{fill:#e7969c}.epoch.category20b div.ref.category17{background-color:#7b4173}.epoch.category20b .category17 .line{stroke:#7b4173}.epoch.category20b .category17 .area,.epoch.category20b .category17 .dot{fill:#7b4173;stroke:transparent}.epoch.category20b .arc.category17 path{fill:#7b4173}.epoch.category20b .bar.category17{fill:#7b4173}.epoch.category20b div.ref.category18{background-color:#a55194}.epoch.category20b .category18 .line{stroke:#a55194}.epoch.category20b .category18 .area,.epoch.category20b .category18 .dot{fill:#a55194;stroke:transparent}.epoch.category20b .arc.category18 path{fill:#a55194}.epoch.category20b .bar.category18{fill:#a55194}.epoch.category20b div.ref.category19{background-color:#ce6dbd}.epoch.category20b .category19 .line{stroke:#ce6dbd}.epoch.category20b .category19 .area,.epoch.category20b .category19 .dot{fill:#ce6dbd;stroke:transparent}.epoch.category20b .arc.category19 path{fill:#ce6dbd}.epoch.category20b .bar.category19{fill:#ce6dbd}.epoch.category20b div.ref.category20{background-color:#de9ed6}.epoch.category20b .category20 .line{stroke:#de9ed6}.epoch.category20b .category20 .area,.epoch.category20b .category20 .dot{fill:#de9ed6;stroke:transparent}.epoch.category20b .arc.category20 path{fill:#de9ed6}.epoch.category20b .bar.category20{fill:#de9ed6}.epoch.category20c div.ref.category1{background-color:#3182bd}.epoch.category20c .category1 .line{stroke:#3182bd}.epoch.category20c .category1 .area,.epoch.category20c .category1 .dot{fill:#3182bd;stroke:transparent}.epoch.category20c .arc.category1 path{fill:#3182bd}.epoch.category20c .bar.category1{fill:#3182bd}.epoch.category20c div.ref.category2{background-color:#6baed6}.epoch.category20c .category2 .line{stroke:#6baed6}.epoch.category20c .category2 .area,.epoch.category20c .category2 .dot{fill:#6baed6;stroke:transparent}.epoch.category20c .arc.category2 path{fill:#6baed6}.epoch.category20c .bar.category2{fill:#6baed6}.epoch.category20c div.ref.category3{background-color:#9ecae1}.epoch.category20c .category3 .line{stroke:#9ecae1}.epoch.category20c .category3 .area,.epoch.category20c .category3 .dot{fill:#9ecae1;stroke:transparent}.epoch.category20c .arc.category3 path{fill:#9ecae1}.epoch.category20c .bar.category3{fill:#9ecae1}.epoch.category20c div.ref.category4{background-color:#c6dbef}.epoch.category20c .category4 .line{stroke:#c6dbef}.epoch.category20c .category4 .area,.epoch.category20c .category4 .dot{fill:#c6dbef;stroke:transparent}.epoch.category20c .arc.category4 path{fill:#c6dbef}.epoch.category20c .bar.category4{fill:#c6dbef}.epoch.category20c div.ref.category5{background-color:#e6550d}.epoch.category20c .category5 .line{stroke:#e6550d}.epoch.category20c .category5 .area,.epoch.category20c .category5 .dot{fill:#e6550d;stroke:transparent}.epoch.category20c .arc.category5 path{fill:#e6550d}.epoch.category20c .bar.category5{fill:#e6550d}.epoch.category20c div.ref.category6{background-color:#fd8d3c}.epoch.category20c .category6 .line{stroke:#fd8d3c}.epoch.category20c .category6 .area,.epoch.category20c .category6 .dot{fill:#fd8d3c;stroke:transparent}.epoch.category20c .arc.category6 path{fill:#fd8d3c}.epoch.category20c .bar.category6{fill:#fd8d3c}.epoch.category20c div.ref.category7{background-color:#fdae6b}.epoch.category20c .category7 .line{stroke:#fdae6b}.epoch.category20c .category7 .area,.epoch.category20c .category7 .dot{fill:#fdae6b;stroke:transparent}.epoch.category20c .arc.category7 path{fill:#fdae6b}.epoch.category20c .bar.category7{fill:#fdae6b}.epoch.category20c div.ref.category8{background-color:#fdd0a2}.epoch.category20c .category8 .line{stroke:#fdd0a2}.epoch.category20c .category8 .area,.epoch.category20c .category8 .dot{fill:#fdd0a2;stroke:transparent}.epoch.category20c .arc.category8 path{fill:#fdd0a2}.epoch.category20c .bar.category8{fill:#fdd0a2}.epoch.category20c div.ref.category9{background-color:#31a354}.epoch.category20c .category9 .line{stroke:#31a354}.epoch.category20c .category9 .area,.epoch.category20c .category9 .dot{fill:#31a354;stroke:transparent}.epoch.category20c .arc.category9 path{fill:#31a354}.epoch.category20c .bar.category9{fill:#31a354}.epoch.category20c div.ref.category10{background-color:#74c476}.epoch.category20c .category10 .line{stroke:#74c476}.epoch.category20c .category10 .area,.epoch.category20c .category10 .dot{fill:#74c476;stroke:transparent}.epoch.category20c .arc.category10 path{fill:#74c476}.epoch.category20c .bar.category10{fill:#74c476}.epoch.category20c div.ref.category11{background-color:#a1d99b}.epoch.category20c .category11 .line{stroke:#a1d99b}.epoch.category20c .category11 .area,.epoch.category20c .category11 .dot{fill:#a1d99b;stroke:transparent}.epoch.category20c .arc.category11 path{fill:#a1d99b}.epoch.category20c .bar.category11{fill:#a1d99b}.epoch.category20c div.ref.category12{background-color:#c7e9c0}.epoch.category20c .category12 .line{stroke:#c7e9c0}.epoch.category20c .category12 .area,.epoch.category20c .category12 .dot{fill:#c7e9c0;stroke:transparent}.epoch.category20c .arc.category12 path{fill:#c7e9c0}.epoch.category20c .bar.category12{fill:#c7e9c0}.epoch.category20c div.ref.category13{background-color:#756bb1}.epoch.category20c .category13 .line{stroke:#756bb1}.epoch.category20c .category13 .area,.epoch.category20c .category13 .dot{fill:#756bb1;stroke:transparent}.epoch.category20c .arc.category13 path{fill:#756bb1}.epoch.category20c .bar.category13{fill:#756bb1}.epoch.category20c div.ref.category14{background-color:#9e9ac8}.epoch.category20c .category14 .line{stroke:#9e9ac8}.epoch.category20c .category14 .area,.epoch.category20c .category14 .dot{fill:#9e9ac8;stroke:transparent}.epoch.category20c .arc.category14 path{fill:#9e9ac8}.epoch.category20c .bar.category14{fill:#9e9ac8}.epoch.category20c div.ref.category15{background-color:#bcbddc}.epoch.category20c .category15 .line{stroke:#bcbddc}.epoch.category20c .category15 .area,.epoch.category20c .category15 .dot{fill:#bcbddc;stroke:transparent}.epoch.category20c .arc.category15 path{fill:#bcbddc}.epoch.category20c .bar.category15{fill:#bcbddc}.epoch.category20c div.ref.category16{background-color:#dadaeb}.epoch.category20c .category16 .line{stroke:#dadaeb}.epoch.category20c .category16 .area,.epoch.category20c .category16 .dot{fill:#dadaeb;stroke:transparent}.epoch.category20c .arc.category16 path{fill:#dadaeb}.epoch.category20c .bar.category16{fill:#dadaeb}.epoch.category20c div.ref.category17{background-color:#636363}.epoch.category20c .category17 .line{stroke:#636363}.epoch.category20c .category17 .area,.epoch.category20c .category17 .dot{fill:#636363;stroke:transparent}.epoch.category20c .arc.category17 path{fill:#636363}.epoch.category20c .bar.category17{fill:#636363}.epoch.category20c div.ref.category18{background-color:#969696}.epoch.category20c .category18 .line{stroke:#969696}.epoch.category20c .category18 .area,.epoch.category20c .category18 .dot{fill:#969696;stroke:transparent}.epoch.category20c .arc.category18 path{fill:#969696}.epoch.category20c .bar.category18{fill:#969696}.epoch.category20c div.ref.category19{background-color:#bdbdbd}.epoch.category20c .category19 .line{stroke:#bdbdbd}.epoch.category20c .category19 .area,.epoch.category20c .category19 .dot{fill:#bdbdbd;stroke:transparent}.epoch.category20c .arc.category19 path{fill:#bdbdbd}.epoch.category20c .bar.category19{fill:#bdbdbd}.epoch.category20c div.ref.category20{background-color:#d9d9d9}.epoch.category20c .category20 .line{stroke:#d9d9d9}.epoch.category20c .category20 .area,.epoch.category20c .category20 .dot{fill:#d9d9d9;stroke:transparent}.epoch.category20c .arc.category20 path{fill:#d9d9d9}.epoch.category20c .bar.category20{fill:#d9d9d9}.epoch .category1 .bucket,.epoch.heatmap5 .category1 .bucket{fill:#1f77b4}.epoch .category2 .bucket,.epoch.heatmap5 .category2 .bucket{fill:#2ca02c}.epoch .category3 .bucket,.epoch.heatmap5 .category3 .bucket{fill:#d62728}.epoch .category4 .bucket,.epoch.heatmap5 .category4 .bucket{fill:#8c564b}.epoch .category5 .bucket,.epoch.heatmap5 .category5 .bucket{fill:#7f7f7f}.epoch-theme-dark .epoch .axis line,.epoch-theme-dark .epoch .axis path{stroke:#d0d0d0}.epoch-theme-dark .epoch .axis .tick text{fill:#d0d0d0}.epoch-theme-dark .arc.pie{stroke:#333}.epoch-theme-dark .arc.pie text{fill:#333}.epoch-theme-dark .epoch .gauge-labels .value{fill:#BBB}.epoch-theme-dark .epoch .gauge .arc.outer{stroke:#999}.epoch-theme-dark .epoch .gauge .arc.inner{stroke:#AAA}.epoch-theme-dark .epoch .gauge .tick{stroke:#AAA}.epoch-theme-dark .epoch .gauge .needle{fill:#F3DE88}.epoch-theme-dark .epoch .gauge .needle-base{fill:#999}.epoch-theme-dark .epoch div.ref.category1,.epoch-theme-dark .epoch.category10 div.ref.category1{background-color:#909CFF}.epoch-theme-dark .epoch .category1 .line,.epoch-theme-dark .epoch.category10 .category1 .line{stroke:#909CFF}.epoch-theme-dark .epoch .category1 .area,.epoch-theme-dark .epoch .category1 .dot,.epoch-theme-dark .epoch.category10 .category1 .area,.epoch-theme-dark .epoch.category10 .category1 .dot{fill:#909CFF;stroke:transparent}.epoch-theme-dark .epoch .arc.category1 path,.epoch-theme-dark .epoch.category10 .arc.category1 path{fill:#909CFF}.epoch-theme-dark .epoch .bar.category1,.epoch-theme-dark .epoch.category10 .bar.category1{fill:#909CFF}.epoch-theme-dark .epoch div.ref.category2,.epoch-theme-dark .epoch.category10 div.ref.category2{background-color:#FFAC89}.epoch-theme-dark .epoch .category2 .line,.epoch-theme-dark .epoch.category10 .category2 .line{stroke:#FFAC89}.epoch-theme-dark .epoch .category2 .area,.epoch-theme-dark .epoch .category2 .dot,.epoch-theme-dark .epoch.category10 .category2 .area,.epoch-theme-dark .epoch.category10 .category2 .dot{fill:#FFAC89;stroke:transparent}.epoch-theme-dark .epoch .arc.category2 path,.epoch-theme-dark .epoch.category10 .arc.category2 path{fill:#FFAC89}.epoch-theme-dark .epoch .bar.category2,.epoch-theme-dark .epoch.category10 .bar.category2{fill:#FFAC89}.epoch-theme-dark .epoch div.ref.category3,.epoch-theme-dark .epoch.category10 div.ref.category3{background-color:#E889E8}.epoch-theme-dark .epoch .category3 .line,.epoch-theme-dark .epoch.category10 .category3 .line{stroke:#E889E8}.epoch-theme-dark .epoch .category3 .area,.epoch-theme-dark .epoch .category3 .dot,.epoch-theme-dark .epoch.category10 .category3 .area,.epoch-theme-dark .epoch.category10 .category3 .dot{fill:#E889E8;stroke:transparent}.epoch-theme-dark .epoch .arc.category3 path,.epoch-theme-dark .epoch.category10 .arc.category3 path{fill:#E889E8}.epoch-theme-dark .epoch .bar.category3,.epoch-theme-dark .epoch.category10 .bar.category3{fill:#E889E8}.epoch-theme-dark .epoch div.ref.category4,.epoch-theme-dark .epoch.category10 div.ref.category4{background-color:#78E8D3}.epoch-theme-dark .epoch .category4 .line,.epoch-theme-dark .epoch.category10 .category4 .line{stroke:#78E8D3}.epoch-theme-dark .epoch .category4 .area,.epoch-theme-dark .epoch .category4 .dot,.epoch-theme-dark .epoch.category10 .category4 .area,.epoch-theme-dark .epoch.category10 .category4 .dot{fill:#78E8D3;stroke:transparent}.epoch-theme-dark .epoch .arc.category4 path,.epoch-theme-dark .epoch.category10 .arc.category4 path{fill:#78E8D3}.epoch-theme-dark .epoch .bar.category4,.epoch-theme-dark .epoch.category10 .bar.category4{fill:#78E8D3}.epoch-theme-dark .epoch div.ref.category5,.epoch-theme-dark .epoch.category10 div.ref.category5{background-color:#C2FF97}.epoch-theme-dark .epoch .category5 .line,.epoch-theme-dark .epoch.category10 .category5 .line{stroke:#C2FF97}.epoch-theme-dark .epoch .category5 .area,.epoch-theme-dark .epoch .category5 .dot,.epoch-theme-dark .epoch.category10 .category5 .area,.epoch-theme-dark .epoch.category10 .category5 .dot{fill:#C2FF97;stroke:transparent}.epoch-theme-dark .epoch .arc.category5 path,.epoch-theme-dark .epoch.category10 .arc.category5 path{fill:#C2FF97}.epoch-theme-dark .epoch .bar.category5,.epoch-theme-dark .epoch.category10 .bar.category5{fill:#C2FF97}.epoch-theme-dark .epoch div.ref.category6,.epoch-theme-dark .epoch.category10 div.ref.category6{background-color:#B7BCD1}.epoch-theme-dark .epoch .category6 .line,.epoch-theme-dark .epoch.category10 .category6 .line{stroke:#B7BCD1}.epoch-theme-dark .epoch .category6 .area,.epoch-theme-dark .epoch .category6 .dot,.epoch-theme-dark .epoch.category10 .category6 .area,.epoch-theme-dark .epoch.category10 .category6 .dot{fill:#B7BCD1;stroke:transparent}.epoch-theme-dark .epoch .arc.category6 path,.epoch-theme-dark .epoch.category10 .arc.category6 path{fill:#B7BCD1}.epoch-theme-dark .epoch .bar.category6,.epoch-theme-dark .epoch.category10 .bar.category6{fill:#B7BCD1}.epoch-theme-dark .epoch div.ref.category7,.epoch-theme-dark .epoch.category10 div.ref.category7{background-color:#FF857F}.epoch-theme-dark .epoch .category7 .line,.epoch-theme-dark .epoch.category10 .category7 .line{stroke:#FF857F}.epoch-theme-dark .epoch .category7 .area,.epoch-theme-dark .epoch .category7 .dot,.epoch-theme-dark .epoch.category10 .category7 .area,.epoch-theme-dark .epoch.category10 .category7 .dot{fill:#FF857F;stroke:transparent}.epoch-theme-dark .epoch .arc.category7 path,.epoch-theme-dark .epoch.category10 .arc.category7 path{fill:#FF857F}.epoch-theme-dark .epoch .bar.category7,.epoch-theme-dark .epoch.category10 .bar.category7{fill:#FF857F}.epoch-theme-dark .epoch div.ref.category8,.epoch-theme-dark .epoch.category10 div.ref.category8{background-color:#F3DE88}.epoch-theme-dark .epoch .category8 .line,.epoch-theme-dark .epoch.category10 .category8 .line{stroke:#F3DE88}.epoch-theme-dark .epoch .category8 .area,.epoch-theme-dark .epoch .category8 .dot,.epoch-theme-dark .epoch.category10 .category8 .area,.epoch-theme-dark .epoch.category10 .category8 .dot{fill:#F3DE88;stroke:transparent}.epoch-theme-dark .epoch .arc.category8 path,.epoch-theme-dark .epoch.category10 .arc.category8 path{fill:#F3DE88}.epoch-theme-dark .epoch .bar.category8,.epoch-theme-dark .epoch.category10 .bar.category8{fill:#F3DE88}.epoch-theme-dark .epoch div.ref.category9,.epoch-theme-dark .epoch.category10 div.ref.category9{background-color:#C9935E}.epoch-theme-dark .epoch .category9 .line,.epoch-theme-dark .epoch.category10 .category9 .line{stroke:#C9935E}.epoch-theme-dark .epoch .category9 .area,.epoch-theme-dark .epoch .category9 .dot,.epoch-theme-dark .epoch.category10 .category9 .area,.epoch-theme-dark .epoch.category10 .category9 .dot{fill:#C9935E;stroke:transparent}.epoch-theme-dark .epoch .arc.category9 path,.epoch-theme-dark .epoch.category10 .arc.category9 path{fill:#C9935E}.epoch-theme-dark .epoch .bar.category9,.epoch-theme-dark .epoch.category10 .bar.category9{fill:#C9935E}.epoch-theme-dark .epoch div.ref.category10,.epoch-theme-dark .epoch.category10 div.ref.category10{background-color:#A488FF}.epoch-theme-dark .epoch .category10 .line,.epoch-theme-dark .epoch.category10 .category10 .line{stroke:#A488FF}.epoch-theme-dark .epoch .category10 .area,.epoch-theme-dark .epoch .category10 .dot,.epoch-theme-dark .epoch.category10 .category10 .area,.epoch-theme-dark .epoch.category10 .category10 .dot{fill:#A488FF;stroke:transparent}.epoch-theme-dark .epoch .arc.category10 path,.epoch-theme-dark .epoch.category10 .arc.category10 path{fill:#A488FF}.epoch-theme-dark .epoch .bar.category10,.epoch-theme-dark .epoch.category10 .bar.category10{fill:#A488FF}.epoch-theme-dark .epoch.category20 div.ref.category1{background-color:#909CFF}.epoch-theme-dark .epoch.category20 .category1 .line{stroke:#909CFF}.epoch-theme-dark .epoch.category20 .category1 .area,.epoch-theme-dark .epoch.category20 .category1 .dot{fill:#909CFF;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category1 path{fill:#909CFF}.epoch-theme-dark .epoch.category20 .bar.category1{fill:#909CFF}.epoch-theme-dark .epoch.category20 div.ref.category2{background-color:#626AAD}.epoch-theme-dark .epoch.category20 .category2 .line{stroke:#626AAD}.epoch-theme-dark .epoch.category20 .category2 .area,.epoch-theme-dark .epoch.category20 .category2 .dot{fill:#626AAD;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category2 path{fill:#626AAD}.epoch-theme-dark .epoch.category20 .bar.category2{fill:#626AAD}.epoch-theme-dark .epoch.category20 div.ref.category3{background-color:#FFAC89}.epoch-theme-dark .epoch.category20 .category3 .line{stroke:#FFAC89}.epoch-theme-dark .epoch.category20 .category3 .area,.epoch-theme-dark .epoch.category20 .category3 .dot{fill:#FFAC89;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category3 path{fill:#FFAC89}.epoch-theme-dark .epoch.category20 .bar.category3{fill:#FFAC89}.epoch-theme-dark .epoch.category20 div.ref.category4{background-color:#BD7F66}.epoch-theme-dark .epoch.category20 .category4 .line{stroke:#BD7F66}.epoch-theme-dark .epoch.category20 .category4 .area,.epoch-theme-dark .epoch.category20 .category4 .dot{fill:#BD7F66;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category4 path{fill:#BD7F66}.epoch-theme-dark .epoch.category20 .bar.category4{fill:#BD7F66}.epoch-theme-dark .epoch.category20 div.ref.category5{background-color:#E889E8}.epoch-theme-dark .epoch.category20 .category5 .line{stroke:#E889E8}.epoch-theme-dark .epoch.category20 .category5 .area,.epoch-theme-dark .epoch.category20 .category5 .dot{fill:#E889E8;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category5 path{fill:#E889E8}.epoch-theme-dark .epoch.category20 .bar.category5{fill:#E889E8}.epoch-theme-dark .epoch.category20 div.ref.category6{background-color:#995A99}.epoch-theme-dark .epoch.category20 .category6 .line{stroke:#995A99}.epoch-theme-dark .epoch.category20 .category6 .area,.epoch-theme-dark .epoch.category20 .category6 .dot{fill:#995A99;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category6 path{fill:#995A99}.epoch-theme-dark .epoch.category20 .bar.category6{fill:#995A99}.epoch-theme-dark .epoch.category20 div.ref.category7{background-color:#78E8D3}.epoch-theme-dark .epoch.category20 .category7 .line{stroke:#78E8D3}.epoch-theme-dark .epoch.category20 .category7 .area,.epoch-theme-dark .epoch.category20 .category7 .dot{fill:#78E8D3;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category7 path{fill:#78E8D3}.epoch-theme-dark .epoch.category20 .bar.category7{fill:#78E8D3}.epoch-theme-dark .epoch.category20 div.ref.category8{background-color:#4F998C}.epoch-theme-dark .epoch.category20 .category8 .line{stroke:#4F998C}.epoch-theme-dark .epoch.category20 .category8 .area,.epoch-theme-dark .epoch.category20 .category8 .dot{fill:#4F998C;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category8 path{fill:#4F998C}.epoch-theme-dark .epoch.category20 .bar.category8{fill:#4F998C}.epoch-theme-dark .epoch.category20 div.ref.category9{background-color:#C2FF97}.epoch-theme-dark .epoch.category20 .category9 .line{stroke:#C2FF97}.epoch-theme-dark .epoch.category20 .category9 .area,.epoch-theme-dark .epoch.category20 .category9 .dot{fill:#C2FF97;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category9 path{fill:#C2FF97}.epoch-theme-dark .epoch.category20 .bar.category9{fill:#C2FF97}.epoch-theme-dark .epoch.category20 div.ref.category10{background-color:#789E5E}.epoch-theme-dark .epoch.category20 .category10 .line{stroke:#789E5E}.epoch-theme-dark .epoch.category20 .category10 .area,.epoch-theme-dark .epoch.category20 .category10 .dot{fill:#789E5E;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category10 path{fill:#789E5E}.epoch-theme-dark .epoch.category20 .bar.category10{fill:#789E5E}.epoch-theme-dark .epoch.category20 div.ref.category11{background-color:#B7BCD1}.epoch-theme-dark .epoch.category20 .category11 .line{stroke:#B7BCD1}.epoch-theme-dark .epoch.category20 .category11 .area,.epoch-theme-dark .epoch.category20 .category11 .dot{fill:#B7BCD1;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category11 path{fill:#B7BCD1}.epoch-theme-dark .epoch.category20 .bar.category11{fill:#B7BCD1}.epoch-theme-dark .epoch.category20 div.ref.category12{background-color:#7F8391}.epoch-theme-dark .epoch.category20 .category12 .line{stroke:#7F8391}.epoch-theme-dark .epoch.category20 .category12 .area,.epoch-theme-dark .epoch.category20 .category12 .dot{fill:#7F8391;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category12 path{fill:#7F8391}.epoch-theme-dark .epoch.category20 .bar.category12{fill:#7F8391}.epoch-theme-dark .epoch.category20 div.ref.category13{background-color:#CCB889}.epoch-theme-dark .epoch.category20 .category13 .line{stroke:#CCB889}.epoch-theme-dark .epoch.category20 .category13 .area,.epoch-theme-dark .epoch.category20 .category13 .dot{fill:#CCB889;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category13 path{fill:#CCB889}.epoch-theme-dark .epoch.category20 .bar.category13{fill:#CCB889}.epoch-theme-dark .epoch.category20 div.ref.category14{background-color:#A1906B}.epoch-theme-dark .epoch.category20 .category14 .line{stroke:#A1906B}.epoch-theme-dark .epoch.category20 .category14 .area,.epoch-theme-dark .epoch.category20 .category14 .dot{fill:#A1906B;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category14 path{fill:#A1906B}.epoch-theme-dark .epoch.category20 .bar.category14{fill:#A1906B}.epoch-theme-dark .epoch.category20 div.ref.category15{background-color:#F3DE88}.epoch-theme-dark .epoch.category20 .category15 .line{stroke:#F3DE88}.epoch-theme-dark .epoch.category20 .category15 .area,.epoch-theme-dark .epoch.category20 .category15 .dot{fill:#F3DE88;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category15 path{fill:#F3DE88}.epoch-theme-dark .epoch.category20 .bar.category15{fill:#F3DE88}.epoch-theme-dark .epoch.category20 div.ref.category16{background-color:#A89A5E}.epoch-theme-dark .epoch.category20 .category16 .line{stroke:#A89A5E}.epoch-theme-dark .epoch.category20 .category16 .area,.epoch-theme-dark .epoch.category20 .category16 .dot{fill:#A89A5E;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category16 path{fill:#A89A5E}.epoch-theme-dark .epoch.category20 .bar.category16{fill:#A89A5E}.epoch-theme-dark .epoch.category20 div.ref.category17{background-color:#FF857F}.epoch-theme-dark .epoch.category20 .category17 .line{stroke:#FF857F}.epoch-theme-dark .epoch.category20 .category17 .area,.epoch-theme-dark .epoch.category20 .category17 .dot{fill:#FF857F;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category17 path{fill:#FF857F}.epoch-theme-dark .epoch.category20 .bar.category17{fill:#FF857F}.epoch-theme-dark .epoch.category20 div.ref.category18{background-color:#BA615D}.epoch-theme-dark .epoch.category20 .category18 .line{stroke:#BA615D}.epoch-theme-dark .epoch.category20 .category18 .area,.epoch-theme-dark .epoch.category20 .category18 .dot{fill:#BA615D;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category18 path{fill:#BA615D}.epoch-theme-dark .epoch.category20 .bar.category18{fill:#BA615D}.epoch-theme-dark .epoch.category20 div.ref.category19{background-color:#A488FF}.epoch-theme-dark .epoch.category20 .category19 .line{stroke:#A488FF}.epoch-theme-dark .epoch.category20 .category19 .area,.epoch-theme-dark .epoch.category20 .category19 .dot{fill:#A488FF;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category19 path{fill:#A488FF}.epoch-theme-dark .epoch.category20 .bar.category19{fill:#A488FF}.epoch-theme-dark .epoch.category20 div.ref.category20{background-color:#7662B8}.epoch-theme-dark .epoch.category20 .category20 .line{stroke:#7662B8}.epoch-theme-dark .epoch.category20 .category20 .area,.epoch-theme-dark .epoch.category20 .category20 .dot{fill:#7662B8;stroke:transparent}.epoch-theme-dark .epoch.category20 .arc.category20 path{fill:#7662B8}.epoch-theme-dark .epoch.category20 .bar.category20{fill:#7662B8}.epoch-theme-dark .epoch.category20b div.ref.category1{background-color:#909CFF}.epoch-theme-dark .epoch.category20b .category1 .line{stroke:#909CFF}.epoch-theme-dark .epoch.category20b .category1 .area,.epoch-theme-dark .epoch.category20b .category1 .dot{fill:#909CFF;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category1 path{fill:#909CFF}.epoch-theme-dark .epoch.category20b .bar.category1{fill:#909CFF}.epoch-theme-dark .epoch.category20b div.ref.category2{background-color:#7680D1}.epoch-theme-dark .epoch.category20b .category2 .line{stroke:#7680D1}.epoch-theme-dark .epoch.category20b .category2 .area,.epoch-theme-dark .epoch.category20b .category2 .dot{fill:#7680D1;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category2 path{fill:#7680D1}.epoch-theme-dark .epoch.category20b .bar.category2{fill:#7680D1}.epoch-theme-dark .epoch.category20b div.ref.category3{background-color:#656DB2}.epoch-theme-dark .epoch.category20b .category3 .line{stroke:#656DB2}.epoch-theme-dark .epoch.category20b .category3 .area,.epoch-theme-dark .epoch.category20b .category3 .dot{fill:#656DB2;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category3 path{fill:#656DB2}.epoch-theme-dark .epoch.category20b .bar.category3{fill:#656DB2}.epoch-theme-dark .epoch.category20b div.ref.category4{background-color:#525992}.epoch-theme-dark .epoch.category20b .category4 .line{stroke:#525992}.epoch-theme-dark .epoch.category20b .category4 .area,.epoch-theme-dark .epoch.category20b .category4 .dot{fill:#525992;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category4 path{fill:#525992}.epoch-theme-dark .epoch.category20b .bar.category4{fill:#525992}.epoch-theme-dark .epoch.category20b div.ref.category5{background-color:#FFAC89}.epoch-theme-dark .epoch.category20b .category5 .line{stroke:#FFAC89}.epoch-theme-dark .epoch.category20b .category5 .area,.epoch-theme-dark .epoch.category20b .category5 .dot{fill:#FFAC89;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category5 path{fill:#FFAC89}.epoch-theme-dark .epoch.category20b .bar.category5{fill:#FFAC89}.epoch-theme-dark .epoch.category20b div.ref.category6{background-color:#D18D71}.epoch-theme-dark .epoch.category20b .category6 .line{stroke:#D18D71}.epoch-theme-dark .epoch.category20b .category6 .area,.epoch-theme-dark .epoch.category20b .category6 .dot{fill:#D18D71;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category6 path{fill:#D18D71}.epoch-theme-dark .epoch.category20b .bar.category6{fill:#D18D71}.epoch-theme-dark .epoch.category20b div.ref.category7{background-color:#AB735C}.epoch-theme-dark .epoch.category20b .category7 .line{stroke:#AB735C}.epoch-theme-dark .epoch.category20b .category7 .area,.epoch-theme-dark .epoch.category20b .category7 .dot{fill:#AB735C;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category7 path{fill:#AB735C}.epoch-theme-dark .epoch.category20b .bar.category7{fill:#AB735C}.epoch-theme-dark .epoch.category20b div.ref.category8{background-color:#92624E}.epoch-theme-dark .epoch.category20b .category8 .line{stroke:#92624E}.epoch-theme-dark .epoch.category20b .category8 .area,.epoch-theme-dark .epoch.category20b .category8 .dot{fill:#92624E;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category8 path{fill:#92624E}.epoch-theme-dark .epoch.category20b .bar.category8{fill:#92624E}.epoch-theme-dark .epoch.category20b div.ref.category9{background-color:#E889E8}.epoch-theme-dark .epoch.category20b .category9 .line{stroke:#E889E8}.epoch-theme-dark .epoch.category20b .category9 .area,.epoch-theme-dark .epoch.category20b .category9 .dot{fill:#E889E8;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category9 path{fill:#E889E8}.epoch-theme-dark .epoch.category20b .bar.category9{fill:#E889E8}.epoch-theme-dark .epoch.category20b div.ref.category10{background-color:#BA6EBA}.epoch-theme-dark .epoch.category20b .category10 .line{stroke:#BA6EBA}.epoch-theme-dark .epoch.category20b .category10 .area,.epoch-theme-dark .epoch.category20b .category10 .dot{fill:#BA6EBA;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category10 path{fill:#BA6EBA}.epoch-theme-dark .epoch.category20b .bar.category10{fill:#BA6EBA}.epoch-theme-dark .epoch.category20b div.ref.category11{background-color:#9B5C9B}.epoch-theme-dark .epoch.category20b .category11 .line{stroke:#9B5C9B}.epoch-theme-dark .epoch.category20b .category11 .area,.epoch-theme-dark .epoch.category20b .category11 .dot{fill:#9B5C9B;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category11 path{fill:#9B5C9B}.epoch-theme-dark .epoch.category20b .bar.category11{fill:#9B5C9B}.epoch-theme-dark .epoch.category20b div.ref.category12{background-color:#7B487B}.epoch-theme-dark .epoch.category20b .category12 .line{stroke:#7B487B}.epoch-theme-dark .epoch.category20b .category12 .area,.epoch-theme-dark .epoch.category20b .category12 .dot{fill:#7B487B;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category12 path{fill:#7B487B}.epoch-theme-dark .epoch.category20b .bar.category12{fill:#7B487B}.epoch-theme-dark .epoch.category20b div.ref.category13{background-color:#78E8D3}.epoch-theme-dark .epoch.category20b .category13 .line{stroke:#78E8D3}.epoch-theme-dark .epoch.category20b .category13 .area,.epoch-theme-dark .epoch.category20b .category13 .dot{fill:#78E8D3;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category13 path{fill:#78E8D3}.epoch-theme-dark .epoch.category20b .bar.category13{fill:#78E8D3}.epoch-theme-dark .epoch.category20b div.ref.category14{background-color:#60BAAA}.epoch-theme-dark .epoch.category20b .category14 .line{stroke:#60BAAA}.epoch-theme-dark .epoch.category20b .category14 .area,.epoch-theme-dark .epoch.category20b .category14 .dot{fill:#60BAAA;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category14 path{fill:#60BAAA}.epoch-theme-dark .epoch.category20b .bar.category14{fill:#60BAAA}.epoch-theme-dark .epoch.category20b div.ref.category15{background-color:#509B8D}.epoch-theme-dark .epoch.category20b .category15 .line{stroke:#509B8D}.epoch-theme-dark .epoch.category20b .category15 .area,.epoch-theme-dark .epoch.category20b .category15 .dot{fill:#509B8D;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category15 path{fill:#509B8D}.epoch-theme-dark .epoch.category20b .bar.category15{fill:#509B8D}.epoch-theme-dark .epoch.category20b div.ref.category16{background-color:#3F7B70}.epoch-theme-dark .epoch.category20b .category16 .line{stroke:#3F7B70}.epoch-theme-dark .epoch.category20b .category16 .area,.epoch-theme-dark .epoch.category20b .category16 .dot{fill:#3F7B70;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category16 path{fill:#3F7B70}.epoch-theme-dark .epoch.category20b .bar.category16{fill:#3F7B70}.epoch-theme-dark .epoch.category20b div.ref.category17{background-color:#C2FF97}.epoch-theme-dark .epoch.category20b .category17 .line{stroke:#C2FF97}.epoch-theme-dark .epoch.category20b .category17 .area,.epoch-theme-dark .epoch.category20b .category17 .dot{fill:#C2FF97;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category17 path{fill:#C2FF97}.epoch-theme-dark .epoch.category20b .bar.category17{fill:#C2FF97}.epoch-theme-dark .epoch.category20b div.ref.category18{background-color:#9FD17C}.epoch-theme-dark .epoch.category20b .category18 .line{stroke:#9FD17C}.epoch-theme-dark .epoch.category20b .category18 .area,.epoch-theme-dark .epoch.category20b .category18 .dot{fill:#9FD17C;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category18 path{fill:#9FD17C}.epoch-theme-dark .epoch.category20b .bar.category18{fill:#9FD17C}.epoch-theme-dark .epoch.category20b div.ref.category19{background-color:#7DA361}.epoch-theme-dark .epoch.category20b .category19 .line{stroke:#7DA361}.epoch-theme-dark .epoch.category20b .category19 .area,.epoch-theme-dark .epoch.category20b .category19 .dot{fill:#7DA361;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category19 path{fill:#7DA361}.epoch-theme-dark .epoch.category20b .bar.category19{fill:#7DA361}.epoch-theme-dark .epoch.category20b div.ref.category20{background-color:#65854E}.epoch-theme-dark .epoch.category20b .category20 .line{stroke:#65854E}.epoch-theme-dark .epoch.category20b .category20 .area,.epoch-theme-dark .epoch.category20b .category20 .dot{fill:#65854E;stroke:transparent}.epoch-theme-dark .epoch.category20b .arc.category20 path{fill:#65854E}.epoch-theme-dark .epoch.category20b .bar.category20{fill:#65854E}.epoch-theme-dark .epoch.category20c div.ref.category1{background-color:#B7BCD1}.epoch-theme-dark .epoch.category20c .category1 .line{stroke:#B7BCD1}.epoch-theme-dark .epoch.category20c .category1 .area,.epoch-theme-dark .epoch.category20c .category1 .dot{fill:#B7BCD1;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category1 path{fill:#B7BCD1}.epoch-theme-dark .epoch.category20c .bar.category1{fill:#B7BCD1}.epoch-theme-dark .epoch.category20c div.ref.category2{background-color:#979DAD}.epoch-theme-dark .epoch.category20c .category2 .line{stroke:#979DAD}.epoch-theme-dark .epoch.category20c .category2 .area,.epoch-theme-dark .epoch.category20c .category2 .dot{fill:#979DAD;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category2 path{fill:#979DAD}.epoch-theme-dark .epoch.category20c .bar.category2{fill:#979DAD}.epoch-theme-dark .epoch.category20c div.ref.category3{background-color:#6E717D}.epoch-theme-dark .epoch.category20c .category3 .line{stroke:#6E717D}.epoch-theme-dark .epoch.category20c .category3 .area,.epoch-theme-dark .epoch.category20c .category3 .dot{fill:#6E717D;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category3 path{fill:#6E717D}.epoch-theme-dark .epoch.category20c .bar.category3{fill:#6E717D}.epoch-theme-dark .epoch.category20c div.ref.category4{background-color:#595C66}.epoch-theme-dark .epoch.category20c .category4 .line{stroke:#595C66}.epoch-theme-dark .epoch.category20c .category4 .area,.epoch-theme-dark .epoch.category20c .category4 .dot{fill:#595C66;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category4 path{fill:#595C66}.epoch-theme-dark .epoch.category20c .bar.category4{fill:#595C66}.epoch-theme-dark .epoch.category20c div.ref.category5{background-color:#FF857F}.epoch-theme-dark .epoch.category20c .category5 .line{stroke:#FF857F}.epoch-theme-dark .epoch.category20c .category5 .area,.epoch-theme-dark .epoch.category20c .category5 .dot{fill:#FF857F;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category5 path{fill:#FF857F}.epoch-theme-dark .epoch.category20c .bar.category5{fill:#FF857F}.epoch-theme-dark .epoch.category20c div.ref.category6{background-color:#DE746E}.epoch-theme-dark .epoch.category20c .category6 .line{stroke:#DE746E}.epoch-theme-dark .epoch.category20c .category6 .area,.epoch-theme-dark .epoch.category20c .category6 .dot{fill:#DE746E;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category6 path{fill:#DE746E}.epoch-theme-dark .epoch.category20c .bar.category6{fill:#DE746E}.epoch-theme-dark .epoch.category20c div.ref.category7{background-color:#B55F5A}.epoch-theme-dark .epoch.category20c .category7 .line{stroke:#B55F5A}.epoch-theme-dark .epoch.category20c .category7 .area,.epoch-theme-dark .epoch.category20c .category7 .dot{fill:#B55F5A;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category7 path{fill:#B55F5A}.epoch-theme-dark .epoch.category20c .bar.category7{fill:#B55F5A}.epoch-theme-dark .epoch.category20c div.ref.category8{background-color:#964E4B}.epoch-theme-dark .epoch.category20c .category8 .line{stroke:#964E4B}.epoch-theme-dark .epoch.category20c .category8 .area,.epoch-theme-dark .epoch.category20c .category8 .dot{fill:#964E4B;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category8 path{fill:#964E4B}.epoch-theme-dark .epoch.category20c .bar.category8{fill:#964E4B}.epoch-theme-dark .epoch.category20c div.ref.category9{background-color:#F3DE88}.epoch-theme-dark .epoch.category20c .category9 .line{stroke:#F3DE88}.epoch-theme-dark .epoch.category20c .category9 .area,.epoch-theme-dark .epoch.category20c .category9 .dot{fill:#F3DE88;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category9 path{fill:#F3DE88}.epoch-theme-dark .epoch.category20c .bar.category9{fill:#F3DE88}.epoch-theme-dark .epoch.category20c div.ref.category10{background-color:#DBC87B}.epoch-theme-dark .epoch.category20c .category10 .line{stroke:#DBC87B}.epoch-theme-dark .epoch.category20c .category10 .area,.epoch-theme-dark .epoch.category20c .category10 .dot{fill:#DBC87B;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category10 path{fill:#DBC87B}.epoch-theme-dark .epoch.category20c .bar.category10{fill:#DBC87B}.epoch-theme-dark .epoch.category20c div.ref.category11{background-color:#BAAA68}.epoch-theme-dark .epoch.category20c .category11 .line{stroke:#BAAA68}.epoch-theme-dark .epoch.category20c .category11 .area,.epoch-theme-dark .epoch.category20c .category11 .dot{fill:#BAAA68;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category11 path{fill:#BAAA68}.epoch-theme-dark .epoch.category20c .bar.category11{fill:#BAAA68}.epoch-theme-dark .epoch.category20c div.ref.category12{background-color:#918551}.epoch-theme-dark .epoch.category20c .category12 .line{stroke:#918551}.epoch-theme-dark .epoch.category20c .category12 .area,.epoch-theme-dark .epoch.category20c .category12 .dot{fill:#918551;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category12 path{fill:#918551}.epoch-theme-dark .epoch.category20c .bar.category12{fill:#918551}.epoch-theme-dark .epoch.category20c div.ref.category13{background-color:#C9935E}.epoch-theme-dark .epoch.category20c .category13 .line{stroke:#C9935E}.epoch-theme-dark .epoch.category20c .category13 .area,.epoch-theme-dark .epoch.category20c .category13 .dot{fill:#C9935E;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category13 path{fill:#C9935E}.epoch-theme-dark .epoch.category20c .bar.category13{fill:#C9935E}.epoch-theme-dark .epoch.category20c div.ref.category14{background-color:#B58455}.epoch-theme-dark .epoch.category20c .category14 .line{stroke:#B58455}.epoch-theme-dark .epoch.category20c .category14 .area,.epoch-theme-dark .epoch.category20c .category14 .dot{fill:#B58455;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category14 path{fill:#B58455}.epoch-theme-dark .epoch.category20c .bar.category14{fill:#B58455}.epoch-theme-dark .epoch.category20c div.ref.category15{background-color:#997048}.epoch-theme-dark .epoch.category20c .category15 .line{stroke:#997048}.epoch-theme-dark .epoch.category20c .category15 .area,.epoch-theme-dark .epoch.category20c .category15 .dot{fill:#997048;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category15 path{fill:#997048}.epoch-theme-dark .epoch.category20c .bar.category15{fill:#997048}.epoch-theme-dark .epoch.category20c div.ref.category16{background-color:#735436}.epoch-theme-dark .epoch.category20c .category16 .line{stroke:#735436}.epoch-theme-dark .epoch.category20c .category16 .area,.epoch-theme-dark .epoch.category20c .category16 .dot{fill:#735436;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category16 path{fill:#735436}.epoch-theme-dark .epoch.category20c .bar.category16{fill:#735436}.epoch-theme-dark .epoch.category20c div.ref.category17{background-color:#A488FF}.epoch-theme-dark .epoch.category20c .category17 .line{stroke:#A488FF}.epoch-theme-dark .epoch.category20c .category17 .area,.epoch-theme-dark .epoch.category20c .category17 .dot{fill:#A488FF;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category17 path{fill:#A488FF}.epoch-theme-dark .epoch.category20c .bar.category17{fill:#A488FF}.epoch-theme-dark .epoch.category20c div.ref.category18{background-color:#8670D1}.epoch-theme-dark .epoch.category20c .category18 .line{stroke:#8670D1}.epoch-theme-dark .epoch.category20c .category18 .area,.epoch-theme-dark .epoch.category20c .category18 .dot{fill:#8670D1;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category18 path{fill:#8670D1}.epoch-theme-dark .epoch.category20c .bar.category18{fill:#8670D1}.epoch-theme-dark .epoch.category20c div.ref.category19{background-color:#705CAD}.epoch-theme-dark .epoch.category20c .category19 .line{stroke:#705CAD}.epoch-theme-dark .epoch.category20c .category19 .area,.epoch-theme-dark .epoch.category20c .category19 .dot{fill:#705CAD;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category19 path{fill:#705CAD}.epoch-theme-dark .epoch.category20c .bar.category19{fill:#705CAD}.epoch-theme-dark .epoch.category20c div.ref.category20{background-color:#52447F}.epoch-theme-dark .epoch.category20c .category20 .line{stroke:#52447F}.epoch-theme-dark .epoch.category20c .category20 .area,.epoch-theme-dark .epoch.category20c .category20 .dot{fill:#52447F;stroke:transparent}.epoch-theme-dark .epoch.category20c .arc.category20 path{fill:#52447F}.epoch-theme-dark .epoch.category20c .bar.category20{fill:#52447F}body{font-family:Roboto,sans-serif;text-align:center}.activities{text-align:center;overflow:auto}#activities{display:inline-block;margin:auto;text-align:left;list-style:none;max-width:800px;margin:0}#activities li{float:left;width:400px}#pie{width:300px;height:300px;margin:auto}#gaugeChart{margin:auto}.half{float:left;display:inline-block;width:50%;text-align:center}");
})
(function(factory) {
  factory();
});