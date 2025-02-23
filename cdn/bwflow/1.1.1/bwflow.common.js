module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "014b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("e53d");
var has = __webpack_require__("07e3");
var DESCRIPTORS = __webpack_require__("8e60");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var META = __webpack_require__("ebfd").KEY;
var $fails = __webpack_require__("294c");
var shared = __webpack_require__("dbdb");
var setToStringTag = __webpack_require__("45f2");
var uid = __webpack_require__("62a0");
var wks = __webpack_require__("5168");
var wksExt = __webpack_require__("ccb9");
var wksDefine = __webpack_require__("6718");
var enumKeys = __webpack_require__("47ee");
var isArray = __webpack_require__("9003");
var anObject = __webpack_require__("e4ae");
var isObject = __webpack_require__("f772");
var toObject = __webpack_require__("241e");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var createDesc = __webpack_require__("aebd");
var _create = __webpack_require__("a159");
var gOPNExt = __webpack_require__("0395");
var $GOPD = __webpack_require__("bf0b");
var $GOPS = __webpack_require__("9aa9");
var $DP = __webpack_require__("d9f6");
var $keys = __webpack_require__("c3a1");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("6abf").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("355d").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("b8e3")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("35e8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0395":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("36c3");
var gOPN = __webpack_require__("6abf").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0a49":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("9b43");
var IObject = __webpack_require__("626a");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var asc = __webpack_require__("cd1c");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1062":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bWflowViewer_vue_vue_type_style_index_0_id_7cdb0dd0_prod_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9252");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bWflowViewer_vue_vue_type_style_index_0_id_7cdb0dd0_prod_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bWflowViewer_vue_vue_type_style_index_0_id_7cdb0dd0_prod_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1169":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1c01":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("9e1e"), 'Object', { defineProperty: __webpack_require__("86cc").f });


/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23b6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2f21":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("79e5");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "30f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var $iterCreate = __webpack_require__("8f60");
var setToStringTag = __webpack_require__("45f2");
var getPrototypeOf = __webpack_require__("53e2");
var ITERATOR = __webpack_require__("5168")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__("4bf8");
var toAbsoluteIndex = __webpack_require__("77f1");
var toLength = __webpack_require__("9def");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "3fb5":
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "454f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("46a7");
var $Object = __webpack_require__("584a").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d9f6").f;
var has = __webpack_require__("07e3");
var TAG = __webpack_require__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "46a7":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("8e60"), 'Object', { defineProperty: __webpack_require__("d9f6").f });


/***/ }),

/***/ "47ee":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4f37":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__("aa77")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ "504c":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("9e1e");
var getKeys = __webpack_require__("0d58");
var toIObject = __webpack_require__("6821");
var isEnum = __webpack_require__("52a7").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5168":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("dbdb")('wks');
var uid = __webpack_require__("62a0");
var Symbol = __webpack_require__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("07e3");
var toObject = __webpack_require__("241e");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "57e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("5ca1");
var $indexOf = __webpack_require__("c366")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__("2f21")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "58b2":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__("9e1e"), 'Object', { defineProperties: __webpack_require__("1495") });


/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5d58":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d8d6");

/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "668d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Collection = __webpack_require__("7d7d");

function hasOwnProperty(e, property) {
  return Object.prototype.hasOwnProperty.call(e, property.name || property);
}

function defineCollectionProperty(ref, property, target) {

  var collection = Collection.extend(target[property.name] || [], ref, property, target);

  Object.defineProperty(target, property.name, {
    enumerable: property.enumerable,
    value: collection
  });

  if (collection.length) {

    collection.forEach(function(o) {
      ref.set(o, property.inverse, target);
    });
  }
}


function defineProperty(ref, property, target) {

  var inverseProperty = property.inverse;

  var _value = target[property.name];

  Object.defineProperty(target, property.name, {
    configurable: property.configurable,
    enumerable: property.enumerable,

    get: function() {
      return _value;
    },

    set: function(value) {

      // return if we already performed all changes
      if (value === _value) {
        return;
      }

      var old = _value;

      // temporary set null
      _value = null;

      if (old) {
        ref.unset(old, inverseProperty, target);
      }

      // set new value
      _value = value;

      // set inverse value
      ref.set(_value, inverseProperty, target);
    }
  });

}

/**
 * Creates a new references object defining two inversly related
 * attribute descriptors a and b.
 *
 * <p>
 *   When bound to an object using {@link Refs#bind} the references
 *   get activated and ensure that add and remove operations are applied
 *   reversely, too.
 * </p>
 *
 * <p>
 *   For attributes represented as collections {@link Refs} provides the
 *   {@link RefsCollection#add}, {@link RefsCollection#remove} and {@link RefsCollection#contains} extensions
 *   that must be used to properly hook into the inverse change mechanism.
 * </p>
 *
 * @class Refs
 *
 * @classdesc A bi-directional reference between two attributes.
 *
 * @param {Refs.AttributeDescriptor} a property descriptor
 * @param {Refs.AttributeDescriptor} b property descriptor
 *
 * @example
 *
 * var refs = Refs({ name: 'wheels', collection: true, enumerable: true }, { name: 'car' });
 *
 * var car = { name: 'toyota' };
 * var wheels = [{ pos: 'front-left' }, { pos: 'front-right' }];
 *
 * refs.bind(car, 'wheels');
 *
 * car.wheels // []
 * car.wheels.add(wheels[0]);
 * car.wheels.add(wheels[1]);
 *
 * car.wheels // [{ pos: 'front-left' }, { pos: 'front-right' }]
 *
 * wheels[0].car // { name: 'toyota' };
 * car.wheels.remove(wheels[0]);
 *
 * wheels[0].car // undefined
 */
function Refs(a, b) {

  if (!(this instanceof Refs)) {
    return new Refs(a, b);
  }

  // link
  a.inverse = b;
  b.inverse = a;

  this.props = {};
  this.props[a.name] = a;
  this.props[b.name] = b;
}

/**
 * Binds one side of a bi-directional reference to a
 * target object.
 *
 * @memberOf Refs
 *
 * @param  {Object} target
 * @param  {String} property
 */
Refs.prototype.bind = function(target, property) {
  if (typeof property === 'string') {
    if (!this.props[property]) {
      throw new Error('no property <' + property + '> in ref');
    }
    property = this.props[property];
  }

  if (property.collection) {
    defineCollectionProperty(this, property, target);
  } else {
    defineProperty(this, property, target);
  }
};

Refs.prototype.ensureRefsCollection = function(target, property) {

  var collection = target[property.name];

  if (!Collection.isExtended(collection)) {
    defineCollectionProperty(this, property, target);
  }

  return collection;
};

Refs.prototype.ensureBound = function(target, property) {
  if (!hasOwnProperty(target, property)) {
    this.bind(target, property);
  }
};

Refs.prototype.unset = function(target, property, value) {

  if (target) {
    this.ensureBound(target, property);

    if (property.collection) {
      this.ensureRefsCollection(target, property).remove(value);
    } else {
      target[property.name] = undefined;
    }
  }
};

Refs.prototype.set = function(target, property, value) {

  if (target) {
    this.ensureBound(target, property);

    if (property.collection) {
      this.ensureRefsCollection(target, property).add(value);
    } else {
      target[property.name] = value;
    }
  }
};

module.exports = Refs;


/**
 * An attribute descriptor to be used specify an attribute in a {@link Refs} instance
 *
 * @typedef {Object} Refs.AttributeDescriptor
 * @property {String} name
 * @property {boolean} [collection=false]
 * @property {boolean} [enumerable=false]
 */

/***/ }),

/***/ "6718":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var LIBRARY = __webpack_require__("b8e3");
var wksExt = __webpack_require__("ccb9");
var defineProperty = __webpack_require__("d9f6").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "67bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f921");

/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "69d3":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('asyncIterator');


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6abf":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("e6f3");
var hiddenKeys = __webpack_require__("1691").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c367");
var global = __webpack_require__("e53d");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "6c7b":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__("5ca1");

$export($export.P, 'Array', { fill: __webpack_require__("36bd") });

__webpack_require__("9c6c")('fill');


/***/ }),

/***/ "6d67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("5ca1");
var $map = __webpack_require__("0a49")(1);

$export($export.P + $export.F * !__webpack_require__("2f21")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var defined = __webpack_require__("25eb");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "71df":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bWflow_vue_vue_type_style_index_0_id_6ce1dcb1_prod_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("23b6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bWflow_vue_vue_type_style_index_0_id_6ce1dcb1_prod_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bWflow_vue_vue_type_style_index_0_id_6ce1dcb1_prod_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7514":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "765d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('observable');


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7d7d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * An empty collection stub. Use {@link RefsCollection.extend} to extend a
 * collection with ref semantics.
 *
 * @class RefsCollection
 */

/**
 * Extends a collection with {@link Refs} aware methods
 *
 * @memberof RefsCollection
 * @static
 *
 * @param  {Array<Object>} collection
 * @param  {Refs} refs instance
 * @param  {Object} property represented by the collection
 * @param  {Object} target object the collection is attached to
 *
 * @return {RefsCollection<Object>} the extended array
 */
function extend(collection, refs, property, target) {

  var inverseProperty = property.inverse;

  /**
   * Removes the given element from the array and returns it.
   *
   * @method RefsCollection#remove
   *
   * @param {Object} element the element to remove
   */
  Object.defineProperty(collection, 'remove', {
    value: function(element) {
      var idx = this.indexOf(element);
      if (idx !== -1) {
        this.splice(idx, 1);

        // unset inverse
        refs.unset(element, inverseProperty, target);
      }

      return element;
    }
  });

  /**
   * Returns true if the collection contains the given element
   *
   * @method RefsCollection#contains
   *
   * @param {Object} element the element to check for
   */
  Object.defineProperty(collection, 'contains', {
    value: function(element) {
      return this.indexOf(element) !== -1;
    }
  });

  /**
   * Adds an element to the array, unless it exists already (set semantics).
   *
   * @method RefsCollection#add
   *
   * @param {Object} element the element to add
   * @param {Number} optional index to add element to
   *                 (possibly moving other elements around)
   */
  Object.defineProperty(collection, 'add', {
    value: function(element, idx) {

      var currentIdx = this.indexOf(element);

      if (typeof idx === 'undefined') {

        if (currentIdx !== -1) {
          // element already in collection (!)
          return;
        }

        // add to end of array, as no idx is specified
        idx = this.length;
      }

      // handle already in collection
      if (currentIdx !== -1) {

        // remove element from currentIdx
        this.splice(currentIdx, 1);
      }

      // add element at idx
      this.splice(idx, 0, element);

      if (currentIdx === -1) {
        // set inverse, unless element was
        // in collection already
        refs.set(element, inverseProperty, target);
      }
    }
  });

  // a simple marker, identifying this element
  // as being a refs collection
  Object.defineProperty(collection, '__refs_collection', {
    value: true
  });

  return collection;
}


function isExtended(collection) {
  return collection.__refs_collection === true;
}

module.exports.extend = extend;

module.exports.isExtended = isExtended;

/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var anObject = __webpack_require__("e4ae");
var getKeys = __webpack_require__("c3a1");

module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("454f");

/***/ }),

/***/ "8615":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("5ca1");
var $values = __webpack_require__("504c")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8e6e":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__("5ca1");
var ownKeys = __webpack_require__("990b");
var toIObject = __webpack_require__("6821");
var gOPD = __webpack_require__("11e9");
var createProperty = __webpack_require__("f1ae");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a159");
var descriptor = __webpack_require__("aebd");
var setToStringTag = __webpack_require__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "8fcf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("668d");

module.exports.Collection = __webpack_require__("7d7d");

/***/ }),

/***/ "9003":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9138":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("35e8");


/***/ }),

/***/ "9252":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "990b":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__("9093");
var gOPS = __webpack_require__("2621");
var anObject = __webpack_require__("cb7c");
var Reflect = __webpack_require__("7726").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a159":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e4ae");
var dPs = __webpack_require__("7e90");
var enumBugKeys = __webpack_require__("1691");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "bd00":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "bf0b":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("355d");
var createDesc = __webpack_require__("aebd");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var has = __webpack_require__("07e3");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("8e60") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "c207":
/***/ (function(module, exports) {



/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("8436");
var step = __webpack_require__("50ed");
var Iterators = __webpack_require__("481b");
var toIObject = __webpack_require__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ccb9":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("5168");


/***/ }),

/***/ "cd1c":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("e853");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d25f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("5ca1");
var $filter = __webpack_require__("0a49")(2);

$export($export.P + $export.F * !__webpack_require__("2f21")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d8d6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("6c1c");
module.exports = __webpack_require__("ccb9").f('iterator');


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e5ab":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This file contains source code adapted from Snap.svg (licensed Apache-2.0).
 *
 * @see https://github.com/adobe-webplatform/Snap.svg/blob/master/src/path.js
 */

/* eslint no-fallthrough: "off" */

var p2s = /,?([a-z]),?/gi,
    toFloat = parseFloat,
    math = Math,
    PI = math.PI,
    mmin = math.min,
    mmax = math.max,
    pow = math.pow,
    abs = math.abs,
    pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?[\s]*,?[\s]*)+)/ig,
    pathValues = /(-?\d*\.?\d*(?:e[-+]?\\d+)?)[\s]*,?[\s]*/ig;

var isArray = Array.isArray || function(o) { return o instanceof Array; };

function hasProperty(obj, property) {
  return Object.prototype.hasOwnProperty.call(obj, property);
}

function clone(obj) {

  if (typeof obj == 'function' || Object(obj) !== obj) {
    return obj;
  }

  var res = new obj.constructor;

  for (var key in obj) {
    if (hasProperty(obj, key)) {
      res[key] = clone(obj[key]);
    }
  }

  return res;
}

function repush(array, item) {
  for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
    return array.push(array.splice(i, 1)[0]);
  }
}

function cacher(f) {

  function newf() {

    var arg = Array.prototype.slice.call(arguments, 0),
        args = arg.join('\u2400'),
        cache = newf.cache = newf.cache || {},
        count = newf.count = newf.count || [];

    if (hasProperty(cache, args)) {
      repush(count, args);
      return cache[args];
    }

    count.length >= 1e3 && delete cache[count.shift()];
    count.push(args);
    cache[args] = f.apply(0, arg);

    return cache[args];
  }
  return newf;
}

function parsePathString(pathString) {

  if (!pathString) {
    return null;
  }

  var pth = paths(pathString);

  if (pth.arr) {
    return clone(pth.arr);
  }

  var paramCounts = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 },
      data = [];

  if (isArray(pathString) && isArray(pathString[0])) { // rough assumption
    data = clone(pathString);
  }

  if (!data.length) {

    String(pathString).replace(pathCommand, function(a, b, c) {
      var params = [],
          name = b.toLowerCase();

      c.replace(pathValues, function(a, b) {
        b && params.push(+b);
      });

      if (name == 'm' && params.length > 2) {
        data.push([b].concat(params.splice(0, 2)));
        name = 'l';
        b = b == 'm' ? 'l' : 'L';
      }

      while (params.length >= paramCounts[name]) {
        data.push([b].concat(params.splice(0, paramCounts[name])));
        if (!paramCounts[name]) {
          break;
        }
      }
    });
  }

  data.toString = paths.toString;
  pth.arr = clone(data);

  return data;
}

function paths(ps) {
  var p = paths.ps = paths.ps || {};

  if (p[ps]) {
    p[ps].sleep = 100;
  } else {
    p[ps] = {
      sleep: 100
    };
  }

  setTimeout(function() {
    for (var key in p) {
      if (hasProperty(p, key) && key != ps) {
        p[key].sleep--;
        !p[key].sleep && delete p[key];
      }
    }
  });

  return p[ps];
}

function rectBBox(x, y, width, height) {

  if (arguments.length === 1) {
    y = x.y;
    width = x.width;
    height = x.height;
    x = x.x;
  }

  return {
    x: x,
    y: y,
    width: width,
    height: height,
    x2: x + width,
    y2: y + height
  };
}

function pathToString() {
  return this.join(',').replace(p2s, '$1');
}

function pathClone(pathArray) {
  var res = clone(pathArray);
  res.toString = pathToString;
  return res;
}

function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
  var t1 = 1 - t,
      t13 = pow(t1, 3),
      t12 = pow(t1, 2),
      t2 = t * t,
      t3 = t2 * t,
      x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
      y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y;

  return {
    x: fixError(x),
    y: fixError(y)
  };
}

function bezierBBox(points) {

  var bbox = curveBBox.apply(null, points);

  return rectBBox(
    bbox.x0,
    bbox.y0,
    bbox.x1 - bbox.x0,
    bbox.y1 - bbox.y0
  );
}

function isPointInsideBBox(bbox, x, y) {
  return x >= bbox.x &&
    x <= bbox.x + bbox.width &&
    y >= bbox.y &&
    y <= bbox.y + bbox.height;
}

function isBBoxIntersect(bbox1, bbox2) {
  bbox1 = rectBBox(bbox1);
  bbox2 = rectBBox(bbox2);
  return isPointInsideBBox(bbox2, bbox1.x, bbox1.y)
    || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y)
    || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2)
    || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2)
    || isPointInsideBBox(bbox1, bbox2.x, bbox2.y)
    || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y)
    || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2)
    || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2)
    || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x
        || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x)
    && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y
        || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
}

function base3(t, p1, p2, p3, p4) {
  var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
      t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
  return t * t2 - 3 * p1 + 3 * p2;
}

function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {

  if (z == null) {
    z = 1;
  }

  z = z > 1 ? 1 : z < 0 ? 0 : z;

  var z2 = z / 2,
      n = 12,
      Tvalues = [-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],
      Cvalues = [0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],
      sum = 0;

  for (var i = 0; i < n; i++) {
    var ct = z2 * Tvalues[i] + z2,
        xbase = base3(ct, x1, x2, x3, x4),
        ybase = base3(ct, y1, y2, y3, y4),
        comb = xbase * xbase + ybase * ybase;

    sum += Cvalues[i] * math.sqrt(comb);
  }

  return z2 * sum;
}


function intersectLines(x1, y1, x2, y2, x3, y3, x4, y4) {

  if (
    mmax(x1, x2) < mmin(x3, x4) ||
      mmin(x1, x2) > mmax(x3, x4) ||
      mmax(y1, y2) < mmin(y3, y4) ||
      mmin(y1, y2) > mmax(y3, y4)
  ) {
    return;
  }

  var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
      ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
      denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

  if (!denominator) {
    return;
  }

  var px = fixError(nx / denominator),
      py = fixError(ny / denominator),
      px2 = +px.toFixed(2),
      py2 = +py.toFixed(2);

  if (
    px2 < +mmin(x1, x2).toFixed(2) ||
      px2 > +mmax(x1, x2).toFixed(2) ||
      px2 < +mmin(x3, x4).toFixed(2) ||
      px2 > +mmax(x3, x4).toFixed(2) ||
      py2 < +mmin(y1, y2).toFixed(2) ||
      py2 > +mmax(y1, y2).toFixed(2) ||
      py2 < +mmin(y3, y4).toFixed(2) ||
      py2 > +mmax(y3, y4).toFixed(2)
  ) {
    return;
  }

  return { x: px, y: py };
}

function fixError(number) {
  return Math.round(number * 100000000000) / 100000000000;
}

function findBezierIntersections(bez1, bez2, justCount) {
  var bbox1 = bezierBBox(bez1),
      bbox2 = bezierBBox(bez2);

  if (!isBBoxIntersect(bbox1, bbox2)) {
    return justCount ? 0 : [];
  }

  // As an optimization, lines will have only 1 segment

  var l1 = bezlen.apply(0, bez1),
      l2 = bezlen.apply(0, bez2),
      n1 = isLine(bez1) ? 1 : ~~(l1 / 5) || 1,
      n2 = isLine(bez2) ? 1 : ~~(l2 / 5) || 1,
      dots1 = [],
      dots2 = [],
      xy = {},
      res = justCount ? 0 : [];

  for (var i = 0; i < n1 + 1; i++) {
    var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
    dots1.push({ x: p.x, y: p.y, t: i / n1 });
  }

  for (i = 0; i < n2 + 1; i++) {
    p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
    dots2.push({ x: p.x, y: p.y, t: i / n2 });
  }

  for (i = 0; i < n1; i++) {

    for (var j = 0; j < n2; j++) {
      var di = dots1[i],
          di1 = dots1[i + 1],
          dj = dots2[j],
          dj1 = dots2[j + 1],
          ci = abs(di1.x - di.x) < .01 ? 'y' : 'x',
          cj = abs(dj1.x - dj.x) < .01 ? 'y' : 'x',
          is = intersectLines(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y),
          key;

      if (is) {
        key = is.x.toFixed(9) + '#' + is.y.toFixed(9);

        if (xy[key]) {
          continue;
        }

        xy[key] = true;

        var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
            t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);

        if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {

          if (justCount) {
            res++;
          } else {
            res.push({
              x: is.x,
              y: is.y,
              t1: t1,
              t2: t2
            });
          }
        }
      }
    }
  }

  return res;
}


/**
 * Find or counts the intersections between two SVG paths.
 *
 * Returns a number in counting mode and a list of intersections otherwise.
 *
 * A single intersection entry contains the intersection coordinates (x, y)
 * as well as additional information regarding the intersecting segments
 * on each path (segment1, segment2) and the relative location of the
 * intersection on these segments (t1, t2).
 *
 * The path may be an SVG path string or a list of path components
 * such as `[ [ 'M', 0, 10 ], [ 'L', 20, 0 ] ]`.
 *
 * @example
 *
 * var intersections = findPathIntersections(
 *   'M0,0L100,100',
 *   [ [ 'M', 0, 100 ], [ 'L', 100, 0 ] ]
 * );
 *
 * // intersections = [
 * //   { x: 50, y: 50, segment1: 1, segment2: 1, t1: 0.5, t2: 0.5 }
 * // ]
 *
 * @param {String|Array<PathDef>} path1
 * @param {String|Array<PathDef>} path2
 * @param {Boolean} [justCount=false]
 *
 * @return {Array<Intersection>|Number}
 */
function findPathIntersections(path1, path2, justCount) {
  path1 = pathToCurve(path1);
  path2 = pathToCurve(path2);

  var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2,
      res = justCount ? 0 : [];

  for (var i = 0, ii = path1.length; i < ii; i++) {
    var pi = path1[i];

    if (pi[0] == 'M') {
      x1 = x1m = pi[1];
      y1 = y1m = pi[2];
    } else {

      if (pi[0] == 'C') {
        bez1 = [x1, y1].concat(pi.slice(1));
        x1 = bez1[6];
        y1 = bez1[7];
      } else {
        bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
        x1 = x1m;
        y1 = y1m;
      }

      for (var j = 0, jj = path2.length; j < jj; j++) {
        var pj = path2[j];

        if (pj[0] == 'M') {
          x2 = x2m = pj[1];
          y2 = y2m = pj[2];
        } else {

          if (pj[0] == 'C') {
            bez2 = [x2, y2].concat(pj.slice(1));
            x2 = bez2[6];
            y2 = bez2[7];
          } else {
            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
            x2 = x2m;
            y2 = y2m;
          }

          var intr = findBezierIntersections(bez1, bez2, justCount);

          if (justCount) {
            res += intr;
          } else {

            for (var k = 0, kk = intr.length; k < kk; k++) {
              intr[k].segment1 = i;
              intr[k].segment2 = j;
              intr[k].bez1 = bez1;
              intr[k].bez2 = bez2;
            }

            res = res.concat(intr);
          }
        }
      }
    }
  }

  return res;
}


function pathToAbsolute(pathArray) {
  var pth = paths(pathArray);

  if (pth.abs) {
    return pathClone(pth.abs);
  }

  if (!isArray(pathArray) || !isArray(pathArray && pathArray[0])) { // rough assumption
    pathArray = parsePathString(pathArray);
  }

  if (!pathArray || !pathArray.length) {
    return [['M', 0, 0]];
  }

  var res = [],
      x = 0,
      y = 0,
      mx = 0,
      my = 0,
      start = 0,
      pa0;

  if (pathArray[0][0] == 'M') {
    x = +pathArray[0][1];
    y = +pathArray[0][2];
    mx = x;
    my = y;
    start++;
    res[0] = ['M', x, y];
  }

  for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
    res.push(r = []);
    pa = pathArray[i];
    pa0 = pa[0];

    if (pa0 != pa0.toUpperCase()) {
      r[0] = pa0.toUpperCase();

      switch (r[0]) {
      case 'A':
        r[1] = pa[1];
        r[2] = pa[2];
        r[3] = pa[3];
        r[4] = pa[4];
        r[5] = pa[5];
        r[6] = +pa[6] + x;
        r[7] = +pa[7] + y;
        break;
      case 'V':
        r[1] = +pa[1] + y;
        break;
      case 'H':
        r[1] = +pa[1] + x;
        break;
      case 'M':
        mx = +pa[1] + x;
        my = +pa[2] + y;
      default:
        for (var j = 1, jj = pa.length; j < jj; j++) {
          r[j] = +pa[j] + ((j % 2) ? x : y);
        }
      }
    } else {
      for (var k = 0, kk = pa.length; k < kk; k++) {
        r[k] = pa[k];
      }
    }
    pa0 = pa0.toUpperCase();

    switch (r[0]) {
    case 'Z':
      x = +mx;
      y = +my;
      break;
    case 'H':
      x = r[1];
      break;
    case 'V':
      y = r[1];
      break;
    case 'M':
      mx = r[r.length - 2];
      my = r[r.length - 1];
    default:
      x = r[r.length - 2];
      y = r[r.length - 1];
    }
  }

  res.toString = pathToString;
  pth.abs = pathClone(res);

  return res;
}

function isLine(bez) {
  return (
    bez[0] === bez[2] &&
    bez[1] === bez[3] &&
    bez[4] === bez[6] &&
    bez[5] === bez[7]
  );
}

function lineToCurve(x1, y1, x2, y2) {
  return [
    x1, y1, x2,
    y2, x2, y2
  ];
}

function qubicToCurve(x1, y1, ax, ay, x2, y2) {
  var _13 = 1 / 3,
      _23 = 2 / 3;

  return [
    _13 * x1 + _23 * ax,
    _13 * y1 + _23 * ay,
    _13 * x2 + _23 * ax,
    _13 * y2 + _23 * ay,
    x2,
    y2
  ];
}

function arcToCurve(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {

  // for more information of where this math came from visit:
  // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
  var _120 = PI * 120 / 180,
      rad = PI / 180 * (+angle || 0),
      res = [],
      xy,
      rotate = cacher(function(x, y, rad) {
        var X = x * math.cos(rad) - y * math.sin(rad),
            Y = x * math.sin(rad) + y * math.cos(rad);

        return { x: X, y: Y };
      });

  if (!recursive) {
    xy = rotate(x1, y1, -rad);
    x1 = xy.x;
    y1 = xy.y;
    xy = rotate(x2, y2, -rad);
    x2 = xy.x;
    y2 = xy.y;

    var x = (x1 - x2) / 2,
        y = (y1 - y2) / 2;

    var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);

    if (h > 1) {
      h = math.sqrt(h);
      rx = h * rx;
      ry = h * ry;
    }

    var rx2 = rx * rx,
        ry2 = ry * ry,
        k = (large_arc_flag == sweep_flag ? -1 : 1) *
            math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
        cx = k * rx * y / ry + (x1 + x2) / 2,
        cy = k * -ry * x / rx + (y1 + y2) / 2,
        f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
        f2 = math.asin(((y2 - cy) / ry).toFixed(9));

    f1 = x1 < cx ? PI - f1 : f1;
    f2 = x2 < cx ? PI - f2 : f2;
    f1 < 0 && (f1 = PI * 2 + f1);
    f2 < 0 && (f2 = PI * 2 + f2);

    if (sweep_flag && f1 > f2) {
      f1 = f1 - PI * 2;
    }
    if (!sweep_flag && f2 > f1) {
      f2 = f2 - PI * 2;
    }
  } else {
    f1 = recursive[0];
    f2 = recursive[1];
    cx = recursive[2];
    cy = recursive[3];
  }

  var df = f2 - f1;

  if (abs(df) > _120) {
    var f2old = f2,
        x2old = x2,
        y2old = y2;

    f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
    x2 = cx + rx * math.cos(f2);
    y2 = cy + ry * math.sin(f2);
    res = arcToCurve(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
  }

  df = f2 - f1;

  var c1 = math.cos(f1),
      s1 = math.sin(f1),
      c2 = math.cos(f2),
      s2 = math.sin(f2),
      t = math.tan(df / 4),
      hx = 4 / 3 * rx * t,
      hy = 4 / 3 * ry * t,
      m1 = [x1, y1],
      m2 = [x1 + hx * s1, y1 - hy * c1],
      m3 = [x2 + hx * s2, y2 - hy * c2],
      m4 = [x2, y2];

  m2[0] = 2 * m1[0] - m2[0];
  m2[1] = 2 * m1[1] - m2[1];

  if (recursive) {
    return [m2, m3, m4].concat(res);
  } else {
    res = [m2, m3, m4].concat(res).join().split(',');
    var newres = [];

    for (var i = 0, ii = res.length; i < ii; i++) {
      newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
    }

    return newres;
  }
}

// Returns bounding box of cubic bezier curve.
// Source: http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
// Original version: NISHIO Hirokazu
// Modifications: https://github.com/timo22345
function curveBBox(x0, y0, x1, y1, x2, y2, x3, y3) {
  var tvalues = [],
      bounds = [[], []],
      a, b, c, t, t1, t2, b2ac, sqrtb2ac;

  for (var i = 0; i < 2; ++i) {

    if (i == 0) {
      b = 6 * x0 - 12 * x1 + 6 * x2;
      a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
      c = 3 * x1 - 3 * x0;
    } else {
      b = 6 * y0 - 12 * y1 + 6 * y2;
      a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
      c = 3 * y1 - 3 * y0;
    }

    if (abs(a) < 1e-12) {

      if (abs(b) < 1e-12) {
        continue;
      }

      t = -c / b;

      if (0 < t && t < 1) {
        tvalues.push(t);
      }

      continue;
    }

    b2ac = b * b - 4 * c * a;
    sqrtb2ac = math.sqrt(b2ac);

    if (b2ac < 0) {
      continue;
    }

    t1 = (-b + sqrtb2ac) / (2 * a);

    if (0 < t1 && t1 < 1) {
      tvalues.push(t1);
    }

    t2 = (-b - sqrtb2ac) / (2 * a);

    if (0 < t2 && t2 < 1) {
      tvalues.push(t2);
    }
  }

  var j = tvalues.length,
      jlen = j,
      mt;

  while (j--) {
    t = tvalues[j];
    mt = 1 - t;
    bounds[0][j] = (mt * mt * mt * x0) + (3 * mt * mt * t * x1) + (3 * mt * t * t * x2) + (t * t * t * x3);
    bounds[1][j] = (mt * mt * mt * y0) + (3 * mt * mt * t * y1) + (3 * mt * t * t * y2) + (t * t * t * y3);
  }

  bounds[0][jlen] = x0;
  bounds[1][jlen] = y0;
  bounds[0][jlen + 1] = x3;
  bounds[1][jlen + 1] = y3;
  bounds[0].length = bounds[1].length = jlen + 2;

  return {
    x0: mmin.apply(0, bounds[0]),
    y0: mmin.apply(0, bounds[1]),
    x1: mmax.apply(0, bounds[0]),
    y1: mmax.apply(0, bounds[1])
  };
}

function pathToCurve(path) {

  var pth = paths(path);

  // return cached curve, if existing
  if (pth.curve) {
    return pathClone(pth.curve);
  }

  var curvedPath = pathToAbsolute(path),
      attrs = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
      processPath = function(path, d, pathCommand) {
        var nx, ny;

        if (!path) {
          return ['C', d.x, d.y, d.x, d.y, d.x, d.y];
        }

        !(path[0] in { T: 1, Q: 1 }) && (d.qx = d.qy = null);

        switch (path[0]) {
        case 'M':
          d.X = path[1];
          d.Y = path[2];
          break;
        case 'A':
          path = ['C'].concat(arcToCurve.apply(0, [d.x, d.y].concat(path.slice(1))));
          break;
        case 'S':
          if (pathCommand == 'C' || pathCommand == 'S') {
            // In 'S' case we have to take into account, if the previous command is C/S.
            nx = d.x * 2 - d.bx;
            // And reflect the previous
            ny = d.y * 2 - d.by;
            // command's control point relative to the current point.
          }
          else {
            // or some else or nothing
            nx = d.x;
            ny = d.y;
          }
          path = ['C', nx, ny].concat(path.slice(1));
          break;
        case 'T':
          if (pathCommand == 'Q' || pathCommand == 'T') {
            // In 'T' case we have to take into account, if the previous command is Q/T.
            d.qx = d.x * 2 - d.qx;
            // And make a reflection similar
            d.qy = d.y * 2 - d.qy;
            // to case 'S'.
          }
          else {
            // or something else or nothing
            d.qx = d.x;
            d.qy = d.y;
          }
          path = ['C'].concat(qubicToCurve(d.x, d.y, d.qx, d.qy, path[1], path[2]));
          break;
        case 'Q':
          d.qx = path[1];
          d.qy = path[2];
          path = ['C'].concat(qubicToCurve(d.x, d.y, path[1], path[2], path[3], path[4]));
          break;
        case 'L':
          path = ['C'].concat(lineToCurve(d.x, d.y, path[1], path[2]));
          break;
        case 'H':
          path = ['C'].concat(lineToCurve(d.x, d.y, path[1], d.y));
          break;
        case 'V':
          path = ['C'].concat(lineToCurve(d.x, d.y, d.x, path[1]));
          break;
        case 'Z':
          path = ['C'].concat(lineToCurve(d.x, d.y, d.X, d.Y));
          break;
        }

        return path;
      },

      fixArc = function(pp, i) {

        if (pp[i].length > 7) {
          pp[i].shift();
          var pi = pp[i];

          while (pi.length) {
            pathCommands[i] = 'A'; // if created multiple C:s, their original seg is saved
            pp.splice(i++, 0, ['C'].concat(pi.splice(0, 6)));
          }

          pp.splice(i, 1);
          ii = curvedPath.length;
        }
      },

      pathCommands = [], // path commands of original path p
      pfirst = '', // temporary holder for original path command
      pathCommand = ''; // holder for previous path command of original path

  for (var i = 0, ii = curvedPath.length; i < ii; i++) {
    curvedPath[i] && (pfirst = curvedPath[i][0]); // save current path command

    if (pfirst != 'C') // C is not saved yet, because it may be result of conversion
    {
      pathCommands[i] = pfirst; // Save current path command
      i && (pathCommand = pathCommands[i - 1]); // Get previous path command pathCommand
    }
    curvedPath[i] = processPath(curvedPath[i], attrs, pathCommand); // Previous path command is inputted to processPath

    if (pathCommands[i] != 'A' && pfirst == 'C') pathCommands[i] = 'C'; // A is the only command
    // which may produce multiple C:s
    // so we have to make sure that C is also C in original path

    fixArc(curvedPath, i); // fixArc adds also the right amount of A:s to pathCommands

    var seg = curvedPath[i],
        seglen = seg.length;

    attrs.x = seg[seglen - 2];
    attrs.y = seg[seglen - 1];
    attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
    attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
  }

  // cache curve
  pth.curve = pathClone(curvedPath);

  return curvedPath;
}

module.exports = findPathIntersections;


/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "e7a5":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
;(function(root, factory) {
	// https://github.com/umdjs/umd/blob/master/returnExports.js
	if (true) {
		// For Node.js.
		module.exports = factory(root);
	} else {}
}(typeof global != 'undefined' ? global : this, function(root) {

	if (root.CSS && root.CSS.escape) {
		return root.CSS.escape;
	}

	// https://drafts.csswg.org/cssom/#serialize-an-identifier
	var cssEscape = function(value) {
		if (arguments.length == 0) {
			throw new TypeError('`CSS.escape` requires an argument.');
		}
		var string = String(value);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
			// (U+FFFD).
			if (codeUnit == 0x0000) {
				result += '\uFFFD';
				continue;
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index == 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit == 0x002D
				)
			) {
				// https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			if (
				// If the character is the first character and is a `-` (U+002D), and
				// there is no second character, […]
				index == 0 &&
				length == 1 &&
				codeUnit == 0x002D
			) {
				result += '\\' + string.charAt(index);
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit == 0x002D ||
				codeUnit == 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// https://drafts.csswg.org/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}
		return result;
	};

	if (!root.CSS) {
		root.CSS = {};
	}

	root.CSS.escape = cssEscape;
	return cssEscape;

}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "e853":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var isArray = __webpack_require__("1169");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "ebfd":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("62a0")('meta');
var isObject = __webpack_require__("f772");
var has = __webpack_require__("07e3");
var setDesc = __webpack_require__("d9f6").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("294c")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "edc5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f1ae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "f3e2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("5ca1");
var $forEach = __webpack_require__("0a49")(0);
var STRICT = __webpack_require__("2f21")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f921":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("014b");
__webpack_require__("c207");
__webpack_require__("69d3");
__webpack_require__("765d");
module.exports = __webpack_require__("584a").Symbol;


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "components", function() { return /* reexport */ lib_components; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__("1c01");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.define-properties.js
var es6_object_define_properties = __webpack_require__("58b2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("8e6e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__("d25f");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("85f2");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("f3e2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__("8615");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__("6d67");

// EXTERNAL MODULE: ./lib/styles/index.less
var lib_styles = __webpack_require__("bd00");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6860365a-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/bWflow/_src/bWflow.vue?vue&type=template&id=6ce1dcb1&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    ref: "container",
    staticClass: "b-flow"
  });
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./lib/bWflow/_src/bWflow.vue?vue&type=template&id=6ce1dcb1&

// EXTERNAL MODULE: ./node_modules/diagram-js/assets/diagram-js.css
var diagram_js = __webpack_require__("edc5");

// CONCATENATED MODULE: ./node_modules/didi/dist/index.esm.js
var CLASS_PATTERN = /^class /;

function isClass(fn) {
  return CLASS_PATTERN.test(fn.toString());
}

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

function annotate() {
  var args = Array.prototype.slice.call(arguments);

  if (args.length === 1 && isArray(args[0])) {
    args = args[0];
  }

  var fn = args.pop();

  fn.$inject = args;

  return fn;
}

// Current limitations:
// - can't put into "function arg" comments
// function /* (no parenthesis like this) */ (){}
// function abc( /* xx (no parenthesis like this) */ a, b) {}
//
// Just put the comment before function or inside:
// /* (((this is fine))) */ function(a, b) {}
// function abc(a) { /* (((this is fine))) */}
//
// - can't reliably auto-annotate constructor; we'll match the
// first constructor(...) pattern found which may be the one
// of a nested class, too.

var CONSTRUCTOR_ARGS = /constructor\s*[^(]*\(\s*([^)]*)\)/m;
var FN_ARGS = /^function\s*[^(]*\(\s*([^)]*)\)/m;
var FN_ARG = /\/\*([^*]*)\*\//m;

function parse(fn) {

  if (typeof fn !== 'function') {
    throw new Error('Cannot annotate "' + fn + '". Expected a function!');
  }

  var match = fn.toString().match(isClass(fn) ? CONSTRUCTOR_ARGS : FN_ARGS);

  // may parse class without constructor
  if (!match) {
    return [];
  }

  return match[1] && match[1].split(',').map(function (arg) {
    match = arg.match(FN_ARG);
    return match ? match[1].trim() : arg.trim();
  }) || [];
}

function Module() {
  var providers = [];

  this.factory = function (name, factory) {
    providers.push([name, 'factory', factory]);
    return this;
  };

  this.value = function (name, value) {
    providers.push([name, 'value', value]);
    return this;
  };

  this.type = function (name, type) {
    providers.push([name, 'type', type]);
    return this;
  };

  this.forEach = function (iterator) {
    providers.forEach(iterator);
  };
}

var index_esm_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function Injector(modules, parent) {
  parent = parent || {
    get: function get(name, strict) {
      currentlyResolving.push(name);

      if (strict === false) {
        return null;
      } else {
        throw error('No provider for "' + name + '"!');
      }
    }
  };

  var currentlyResolving = [];
  var providers = this._providers = Object.create(parent._providers || null);
  var instances = this._instances = Object.create(null);

  var self = instances.injector = this;

  var error = function error(msg) {
    var stack = currentlyResolving.join(' -> ');
    currentlyResolving.length = 0;
    return new Error(stack ? msg + ' (Resolving: ' + stack + ')' : msg);
  };

  /**
   * Return a named service.
   *
   * @param {String} name
   * @param {Boolean} [strict=true] if false, resolve missing services to null
   *
   * @return {Object}
   */
  var get = function get(name, strict) {
    if (!providers[name] && name.indexOf('.') !== -1) {
      var parts = name.split('.');
      var pivot = get(parts.shift());

      while (parts.length) {
        pivot = pivot[parts.shift()];
      }

      return pivot;
    }

    if (hasProp(instances, name)) {
      return instances[name];
    }

    if (hasProp(providers, name)) {
      if (currentlyResolving.indexOf(name) !== -1) {
        currentlyResolving.push(name);
        throw error('Cannot resolve circular dependency!');
      }

      currentlyResolving.push(name);
      instances[name] = providers[name][0](providers[name][1]);
      currentlyResolving.pop();

      return instances[name];
    }

    return parent.get(name, strict);
  };

  var fnDef = function fnDef(fn) {
    var locals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof fn !== 'function') {
      if (isArray(fn)) {
        fn = annotate(fn.slice());
      } else {
        throw new Error('Cannot invoke "' + fn + '". Expected a function!');
      }
    }

    var inject = fn.$inject || parse(fn);
    var dependencies = inject.map(function (dep) {
      if (hasProp(locals, dep)) {
        return locals[dep];
      } else {
        return get(dep);
      }
    });

    return {
      fn: fn,
      dependencies: dependencies
    };
  };

  var instantiate = function instantiate(Type) {
    var _fnDef = fnDef(Type),
        dependencies = _fnDef.dependencies,
        fn = _fnDef.fn;

    return new (Function.prototype.bind.apply(fn, [null].concat(_toConsumableArray(dependencies))))();
  };

  var invoke = function invoke(func, context, locals) {
    var _fnDef2 = fnDef(func, locals),
        dependencies = _fnDef2.dependencies,
        fn = _fnDef2.fn;

    return fn.call.apply(fn, [context].concat(_toConsumableArray(dependencies)));
  };

  var createPrivateInjectorFactory = function createPrivateInjectorFactory(privateChildInjector) {
    return annotate(function (key) {
      return privateChildInjector.get(key);
    });
  };

  var createChild = function createChild(modules, forceNewInstances) {
    if (forceNewInstances && forceNewInstances.length) {
      var fromParentModule = Object.create(null);
      var matchedScopes = Object.create(null);

      var privateInjectorsCache = [];
      var privateChildInjectors = [];
      var privateChildFactories = [];

      var provider;
      var cacheIdx;
      var privateChildInjector;
      var privateChildInjectorFactory;
      for (var name in providers) {
        provider = providers[name];

        if (forceNewInstances.indexOf(name) !== -1) {
          if (provider[2] === 'private') {
            cacheIdx = privateInjectorsCache.indexOf(provider[3]);
            if (cacheIdx === -1) {
              privateChildInjector = provider[3].createChild([], forceNewInstances);
              privateChildInjectorFactory = createPrivateInjectorFactory(privateChildInjector);
              privateInjectorsCache.push(provider[3]);
              privateChildInjectors.push(privateChildInjector);
              privateChildFactories.push(privateChildInjectorFactory);
              fromParentModule[name] = [privateChildInjectorFactory, name, 'private', privateChildInjector];
            } else {
              fromParentModule[name] = [privateChildFactories[cacheIdx], name, 'private', privateChildInjectors[cacheIdx]];
            }
          } else {
            fromParentModule[name] = [provider[2], provider[1]];
          }
          matchedScopes[name] = true;
        }

        if ((provider[2] === 'factory' || provider[2] === 'type') && provider[1].$scope) {
          /* jshint -W083 */
          forceNewInstances.forEach(function (scope) {
            if (provider[1].$scope.indexOf(scope) !== -1) {
              fromParentModule[name] = [provider[2], provider[1]];
              matchedScopes[scope] = true;
            }
          });
        }
      }

      forceNewInstances.forEach(function (scope) {
        if (!matchedScopes[scope]) {
          throw new Error('No provider for "' + scope + '". Cannot use provider from the parent!');
        }
      });

      modules.unshift(fromParentModule);
    }

    return new Injector(modules, self);
  };

  var factoryMap = {
    factory: invoke,
    type: instantiate,
    value: function value(_value) {
      return _value;
    }
  };

  modules.forEach(function (module) {

    function arrayUnwrap(type, value) {
      if (type !== 'value' && isArray(value)) {
        value = annotate(value.slice());
      }

      return value;
    }

    // TODO(vojta): handle wrong inputs (modules)
    if (module instanceof Module) {
      module.forEach(function (provider) {
        var name = provider[0];
        var type = provider[1];
        var value = provider[2];

        providers[name] = [factoryMap[type], arrayUnwrap(type, value), type];
      });
    } else if ((typeof module === 'undefined' ? 'undefined' : index_esm_typeof(module)) === 'object') {
      if (module.__exports__) {
        var clonedModule = Object.keys(module).reduce(function (m, key) {
          if (key.substring(0, 2) !== '__') {
            m[key] = module[key];
          }
          return m;
        }, Object.create(null));

        var privateInjector = new Injector((module.__modules__ || []).concat([clonedModule]), self);
        var getFromPrivateInjector = annotate(function (key) {
          return privateInjector.get(key);
        });
        module.__exports__.forEach(function (key) {
          providers[key] = [getFromPrivateInjector, key, 'private', privateInjector];
        });
      } else {
        Object.keys(module).forEach(function (name) {
          if (module[name][2] === 'private') {
            providers[name] = module[name];
            return;
          }

          var type = module[name][0];
          var value = module[name][1];

          providers[name] = [factoryMap[type], arrayUnwrap(type, value), type];
        });
      }
    }
  });

  // public API
  this.get = get;
  this.invoke = invoke;
  this.instantiate = instantiate;
  this.createChild = createChild;
}

// helpers /////////////////

function hasProp(obj, prop) {
  return Object.hasOwnProperty.call(obj, prop);
}



// EXTERNAL MODULE: ./node_modules/inherits/inherits_browser.js
var inherits_browser = __webpack_require__("3fb5");
var inherits_browser_default = /*#__PURE__*/__webpack_require__.n(inherits_browser);

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/draw/BaseRenderer.js
var DEFAULT_RENDER_PRIORITY = 1000;

/**
 * The base implementation of shape and connection renderers.
 *
 * @param {EventBus} eventBus
 * @param {number} [renderPriority=1000]
 */
function BaseRenderer(eventBus, renderPriority) {
  var self = this;

  renderPriority = renderPriority || DEFAULT_RENDER_PRIORITY;

  eventBus.on([ 'render.shape', 'render.connection' ], renderPriority, function(evt, context) {
    var type = evt.type,
        element = context.element,
        visuals = context.gfx;

    if (self.canRender(element)) {
      if (type === 'render.shape') {
        return self.drawShape(visuals, element);
      } else {
        return self.drawConnection(visuals, element);
      }
    }
  });

  eventBus.on([ 'render.getShapePath', 'render.getConnectionPath'], renderPriority, function(evt, element) {
    if (self.canRender(element)) {
      if (evt.type === 'render.getShapePath') {
        return self.getShapePath(element);
      } else {
        return self.getConnectionPath(element);
      }
    }
  });
}

/**
 * Should check whether *this* renderer can render
 * the element/connection.
 *
 * @param {element} element
 *
 * @returns {boolean}
 */
BaseRenderer.prototype.canRender = function() {};

/**
 * Provides the shape's snap svg element to be drawn on the `canvas`.
 *
 * @param {djs.Graphics} visuals
 * @param {Shape} shape
 *
 * @returns {Snap.svg} [returns a Snap.svg paper element ]
 */
BaseRenderer.prototype.drawShape = function() {};

/**
 * Provides the shape's snap svg element to be drawn on the `canvas`.
 *
 * @param {djs.Graphics} visuals
 * @param {Connection} connection
 *
 * @returns {Snap.svg} [returns a Snap.svg paper element ]
 */
BaseRenderer.prototype.drawConnection = function() {};

/**
 * Gets the SVG path of a shape that represents it's visual bounds.
 *
 * @param {Shape} shape
 *
 * @return {string} svg path
 */
BaseRenderer.prototype.getShapePath = function() {};

/**
 * Gets the SVG path of a connection that represents it's visual bounds.
 *
 * @param {Connection} connection
 *
 * @return {string} svg path
 */
BaseRenderer.prototype.getConnectionPath = function() {};

// CONCATENATED MODULE: ./node_modules/tiny-svg/dist/index.esm.js
function ensureImported(element, target) {

  if (element.ownerDocument !== target.ownerDocument) {
    try {
      // may fail on webkit
      return target.ownerDocument.importNode(element, true);
    } catch (e) {
      // ignore
    }
  }

  return element;
}

/**
 * appendTo utility
 */

/**
 * Append a node to a target element and return the appended node.
 *
 * @param  {SVGElement} element
 * @param  {SVGElement} target
 *
 * @return {SVGElement} the appended node
 */
function appendTo(element, target) {
  return target.appendChild(ensureImported(element, target));
}

/**
 * append utility
 */

/**
 * Append a node to an element
 *
 * @param  {SVGElement} element
 * @param  {SVGElement} node
 *
 * @return {SVGElement} the element
 */
function index_esm_append(target, node) {
  appendTo(node, target);
  return target;
}

/**
 * attribute accessor utility
 */

var LENGTH_ATTR = 2;

var CSS_PROPERTIES = {
  'alignment-baseline': 1,
  'baseline-shift': 1,
  'clip': 1,
  'clip-path': 1,
  'clip-rule': 1,
  'color': 1,
  'color-interpolation': 1,
  'color-interpolation-filters': 1,
  'color-profile': 1,
  'color-rendering': 1,
  'cursor': 1,
  'direction': 1,
  'display': 1,
  'dominant-baseline': 1,
  'enable-background': 1,
  'fill': 1,
  'fill-opacity': 1,
  'fill-rule': 1,
  'filter': 1,
  'flood-color': 1,
  'flood-opacity': 1,
  'font': 1,
  'font-family': 1,
  'font-size': LENGTH_ATTR,
  'font-size-adjust': 1,
  'font-stretch': 1,
  'font-style': 1,
  'font-variant': 1,
  'font-weight': 1,
  'glyph-orientation-horizontal': 1,
  'glyph-orientation-vertical': 1,
  'image-rendering': 1,
  'kerning': 1,
  'letter-spacing': 1,
  'lighting-color': 1,
  'marker': 1,
  'marker-end': 1,
  'marker-mid': 1,
  'marker-start': 1,
  'mask': 1,
  'opacity': 1,
  'overflow': 1,
  'pointer-events': 1,
  'shape-rendering': 1,
  'stop-color': 1,
  'stop-opacity': 1,
  'stroke': 1,
  'stroke-dasharray': 1,
  'stroke-dashoffset': 1,
  'stroke-linecap': 1,
  'stroke-linejoin': 1,
  'stroke-miterlimit': 1,
  'stroke-opacity': 1,
  'stroke-width': LENGTH_ATTR,
  'text-anchor': 1,
  'text-decoration': 1,
  'text-rendering': 1,
  'unicode-bidi': 1,
  'visibility': 1,
  'word-spacing': 1,
  'writing-mode': 1
};


function getAttribute(node, name) {
  if (CSS_PROPERTIES[name]) {
    return node.style[name];
  } else {
    return node.getAttributeNS(null, name);
  }
}

function setAttribute(node, name, value) {
  var hyphenated = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

  var type = CSS_PROPERTIES[hyphenated];

  if (type) {
    // append pixel unit, unless present
    if (type === LENGTH_ATTR && typeof value === 'number') {
      value = String(value) + 'px';
    }

    node.style[hyphenated] = value;
  } else {
    node.setAttributeNS(null, name, value);
  }
}

function setAttributes(node, attrs) {

  var names = Object.keys(attrs), i, name;

  for (i = 0, name; (name = names[i]); i++) {
    setAttribute(node, name, attrs[name]);
  }
}

/**
 * Gets or sets raw attributes on a node.
 *
 * @param  {SVGElement} node
 * @param  {Object} [attrs]
 * @param  {String} [name]
 * @param  {String} [value]
 *
 * @return {String}
 */
function index_esm_attr(node, name, value) {
  if (typeof name === 'string') {
    if (value !== undefined) {
      setAttribute(node, name, value);
    } else {
      return getAttribute(node, name);
    }
  } else {
    setAttributes(node, name);
  }

  return node;
}

/**
 * Clear utility
 */
function index_esm_index(arr, obj) {
  if (arr.indexOf) {
    return arr.indexOf(obj);
  }


  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) {
      return i;
    }
  }

  return -1;
}

var re = /\s+/;

var index_esm_toString = Object.prototype.toString;

function defined(o) {
  return typeof o !== 'undefined';
}

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

function index_esm_classes(el) {
  return new ClassList(el);
}

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name) {

  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index_esm_index(arr, name);
  if (!~i) {
    arr.push(name);
  }

  if (defined(this.el.className.baseVal)) {
    this.el.className.baseVal = arr.join(' ');
  } else {
    this.el.className = arr.join(' ');
  }

  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name) {
  if ('[object RegExp]' === index_esm_toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index_esm_index(arr, name);
  if (~i) {
    arr.splice(i, 1);
  }
  this.el.className.baseVal = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re) {
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force) {
  // classList
  if (this.list) {
    if (defined(force)) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if (defined(force)) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function() {
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) {
    arr.shift();
  }
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name) {
  return (
    this.list ?
      this.list.contains(name) :
      !! ~index_esm_index(this.array(), name)
  );
};

function remove(element) {
  var parent = element.parentNode;

  if (parent) {
    parent.removeChild(element);
  }

  return element;
}

/**
 * Clear utility
 */

/**
 * Removes all children from the given element
 *
 * @param  {DOMElement} element
 * @return {DOMElement} the element (for chaining)
 */
function clear(element) {
  var child;

  while ((child = element.firstChild)) {
    remove(child);
  }

  return element;
}

function clone(element) {
  return element.cloneNode(true);
}

var ns = {
  svg: 'http://www.w3.org/2000/svg'
};

/**
 * DOM parsing utility
 */

var SVG_START = '<svg xmlns="' + ns.svg + '"';

function index_esm_parse(svg) {

  var unwrap = false;

  // ensure we import a valid svg document
  if (svg.substring(0, 4) === '<svg') {
    if (svg.indexOf(ns.svg) === -1) {
      svg = SVG_START + svg.substring(4);
    }
  } else {
    // namespace svg
    svg = SVG_START + '>' + svg + '</svg>';
    unwrap = true;
  }

  var parsed = parseDocument(svg);

  if (!unwrap) {
    return parsed;
  }

  var fragment = document.createDocumentFragment();

  var parent = parsed.firstChild;

  while (parent.firstChild) {
    fragment.appendChild(parent.firstChild);
  }

  return fragment;
}

function parseDocument(svg) {

  var parser;

  // parse
  parser = new DOMParser();
  parser.async = false;

  return parser.parseFromString(svg, 'text/xml');
}

/**
 * Create utility for SVG elements
 */


/**
 * Create a specific type from name or SVG markup.
 *
 * @param {String} name the name or markup of the element
 * @param {Object} [attrs] attributes to set on the element
 *
 * @returns {SVGElement}
 */
function index_esm_create(name, attrs) {
  var element;

  if (name.charAt(0) === '<') {
    element = index_esm_parse(name).firstChild;
    element = document.importNode(element, true);
  } else {
    element = document.createElementNS(ns.svg, name);
  }

  if (attrs) {
    index_esm_attr(element, attrs);
  }

  return element;
}

/**
 * Events handling utility
 */

function on(node, event, listener, useCapture) {
  node.addEventListener(event, listener, useCapture);
}

function off(node, event, listener, useCapture) {
  node.removeEventListener(event, listener, useCapture);
}

/**
 * Geometry helpers
 */

// fake node used to instantiate svg geometry elements
var index_esm_node = index_esm_create('svg');

function extend(object, props) {
  var i, k, keys = Object.keys(props);

  for (i = 0; (k = keys[i]); i++) {
    object[k] = props[k];
  }

  return object;
}


function createPoint(x, y) {
  var point = index_esm_node.createSVGPoint();

  switch (arguments.length) {
  case 0:
    return point;
  case 2:
    x = {
      x: x,
      y: y
    };
    break;
  }

  return extend(point, x);
}

/**
 * Create matrix via args.
 *
 * @example
 *
 * createMatrix({ a: 1, b: 1 });
 * createMatrix();
 * createMatrix(1, 2, 0, 0, 30, 20);
 *
 * @return {SVGMatrix}
 */
function createMatrix(a, b, c, d, e, f) {
  var matrix = index_esm_node.createSVGMatrix();

  switch (arguments.length) {
  case 0:
    return matrix;
  case 1:
    return extend(matrix, a);
  case 6:
    return extend(matrix, {
      a: a,
      b: b,
      c: c,
      d: d,
      e: e,
      f: f
    });
  }
}

function createTransform(matrix) {
  if (matrix) {
    return index_esm_node.createSVGTransformFromMatrix(matrix);
  } else {
    return index_esm_node.createSVGTransform();
  }
}

/**
 * Serialization util
 */

var TEXT_ENTITIES = /([&<>]{1})/g;
var ATTR_ENTITIES = /([\n\r"]{1})/g;

var ENTITY_REPLACEMENT = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '\''
};

function index_esm_escape(str, pattern) {

  function replaceFn(match, entity) {
    return ENTITY_REPLACEMENT[entity] || entity;
  }

  return str.replace(pattern, replaceFn);
}

function serialize(node, output) {

  var i, len, attrMap, attrNode, childNodes;

  switch (node.nodeType) {
  // TEXT
  case 3:
    // replace special XML characters
    output.push(index_esm_escape(node.textContent, TEXT_ENTITIES));
    break;

  // ELEMENT
  case 1:
    output.push('<', node.tagName);

    if (node.hasAttributes()) {
      attrMap = node.attributes;
      for (i = 0, len = attrMap.length; i < len; ++i) {
        attrNode = attrMap.item(i);
        output.push(' ', attrNode.name, '="', index_esm_escape(attrNode.value, ATTR_ENTITIES), '"');
      }
    }

    if (node.hasChildNodes()) {
      output.push('>');
      childNodes = node.childNodes;
      for (i = 0, len = childNodes.length; i < len; ++i) {
        serialize(childNodes.item(i), output);
      }
      output.push('</', node.tagName, '>');
    } else {
      output.push('/>');
    }
    break;

  // COMMENT
  case 8:
    output.push('<!--', index_esm_escape(node.nodeValue, TEXT_ENTITIES), '-->');
    break;

  // CDATA
  case 4:
    output.push('<![CDATA[', node.nodeValue, ']]>');
    break;

  default:
    throw new Error('unable to handle node ' + node.nodeType);
  }

  return output;
}

/**
 * innerHTML like functionality for SVG elements.
 * based on innerSVG (https://code.google.com/p/innersvg)
 */


function set(element, svg) {

  var parsed = index_esm_parse(svg);

  // clear element contents
  clear(element);

  if (!svg) {
    return;
  }

  if (!isFragment(parsed)) {
    // extract <svg> from parsed document
    parsed = parsed.documentElement;
  }

  var nodes = slice(parsed.childNodes);

  // import + append each node
  for (var i = 0; i < nodes.length; i++) {
    appendTo(nodes[i], element);
  }

}

function get(element) {
  var child = element.firstChild,
      output = [];

  while (child) {
    serialize(child, output);
    child = child.nextSibling;
  }

  return output.join('');
}

function isFragment(node) {
  return node.nodeName === '#document-fragment';
}

function innerSVG(element, svg) {

  if (svg !== undefined) {

    try {
      set(element, svg);
    } catch (e) {
      throw new Error('error parsing SVG: ' + e.message);
    }

    return element;
  } else {
    return get(element);
  }
}


function slice(arr) {
  return Array.prototype.slice.call(arr);
}

/**
 * Selection utilities
 */

function index_esm_select(node, selector) {
  return node.querySelector(selector);
}

function selectAll(node, selector) {
  var nodes = node.querySelectorAll(selector);

  return [].map.call(nodes, function(element) {
    return element;
  });
}

/**
 * prependTo utility
 */

/**
 * Prepend a node to a target element and return the prepended node.
 *
 * @param  {SVGElement} node
 * @param  {SVGElement} target
 *
 * @return {SVGElement} the prepended node
 */
function prependTo(node, target) {
  return target.insertBefore(ensureImported(node, target), target.firstChild || null);
}

/**
 * prepend utility
 */

/**
 * Prepend a node to a target element
 *
 * @param  {SVGElement} target
 * @param  {SVGElement} node
 *
 * @return {SVGElement} the target element
 */
function prepend(target, node) {
  prependTo(node, target);
  return target;
}

/**
 * Replace utility
 */

function replace(element, replacement) {
  element.parentNode.replaceChild(ensureImported(replacement, element), element);
  return replacement;
}

/**
 * transform accessor utility
 */

function wrapMatrix(transformList, transform) {
  if (transform instanceof SVGMatrix) {
    return transformList.createSVGTransformFromMatrix(transform);
  }

  return transform;
}


function setTransforms(transformList, transforms) {
  var i, t;

  transformList.clear();

  for (i = 0; (t = transforms[i]); i++) {
    transformList.appendItem(wrapMatrix(transformList, t));
  }
}

/**
 * Get or set the transforms on the given node.
 *
 * @param {SVGElement} node
 * @param  {SVGTransform|SVGMatrix|Array<SVGTransform|SVGMatrix>} [transforms]
 *
 * @return {SVGTransform} the consolidated transform
 */
function index_esm_transform(node, transforms) {
  var transformList = node.transform.baseVal;

  if (transforms) {

    if (!Array.isArray(transforms)) {
      transforms = [ transforms ];
    }

    setTransforms(transformList, transforms);
  }

  return transformList.consolidate();
}



// CONCATENATED MODULE: ./node_modules/diagram-js/lib/util/RenderUtil.js



function componentsToPath(elements) {
  return elements.join(',').replace(/,?([A-z]),?/g, '$1');
}

function toSVGPoints(points) {
  var result = '';

  for (var i = 0, p; (p = points[i]); i++) {
    result += p.x + ',' + p.y + ' ';
  }

  return result;
}

function createLine(points, attrs) {

  var line = index_esm_create('polyline');
  index_esm_attr(line, { points: toSVGPoints(points) });

  if (attrs) {
    index_esm_attr(line, attrs);
  }

  return line;
}

function updateLine(gfx, points) {
  index_esm_attr(gfx, { points: toSVGPoints(points) });

  return gfx;
}

// CONCATENATED MODULE: ./node_modules/min-dash/dist/index.esm.js
/**
 * Flatten array, one level deep.
 *
 * @param {Array<?>} arr
 *
 * @return {Array<?>}
 */
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

var nativeToString = Object.prototype.toString;
var nativeHasOwnProperty = Object.prototype.hasOwnProperty;
function isUndefined(obj) {
  return obj === undefined;
}
function isDefined(obj) {
  return obj !== undefined;
}
function isNil(obj) {
  return obj == null;
}
function index_esm_isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}
function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}
function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}
function isFunction(obj) {
  var tag = nativeToString.call(obj);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object AsyncGeneratorFunction]' || tag === '[object Proxy]';
}
function isString(obj) {
  return nativeToString.call(obj) === '[object String]';
}
/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */

function ensureArray(obj) {
  if (index_esm_isArray(obj)) {
    return;
  }

  throw new Error('must supply array');
}
/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */

function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}

/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function|Object} matcher
 *
 * @return {Object}
 */

function find(collection, matcher) {
  matcher = toMatcher(matcher);
  var match;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      match = val;
      return false;
    }
  });
  return match;
}
/**
 * Find element index in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Object}
 */

function findIndex(collection, matcher) {
  matcher = toMatcher(matcher);
  var idx = index_esm_isArray(collection) ? -1 : undefined;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      idx = key;
      return false;
    }
  });
  return idx;
}
/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Array} result
 */

function index_esm_filter(collection, matcher) {
  var result = [];
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      result.push(val);
    }
  });
  return result;
}
/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @param  {Array|Object} collection
 * @param  {Function} iterator
 *
 * @return {Object} return result that stopped the iteration
 */

function forEach(collection, iterator) {
  var val, result;

  if (isUndefined(collection)) {
    return;
  }

  var convertKey = index_esm_isArray(collection) ? toNum : identity;

  for (var key in collection) {
    if (has(collection, key)) {
      val = collection[key];
      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}
/**
 * Return collection without element.
 *
 * @param  {Array} arr
 * @param  {Function} matcher
 *
 * @return {Array}
 */

function without(arr, matcher) {
  if (isUndefined(arr)) {
    return [];
  }

  ensureArray(arr);
  matcher = toMatcher(matcher);
  return arr.filter(function (el, idx) {
    return !matcher(el, idx);
  });
}
/**
 * Reduce collection, returning a single result.
 *
 * @param  {Object|Array} collection
 * @param  {Function} iterator
 * @param  {Any} result
 *
 * @return {Any} result returned from last iterator
 */

function reduce(collection, iterator, result) {
  forEach(collection, function (value, idx) {
    result = iterator(result, value, idx);
  });
  return result;
}
/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function every(collection, matcher) {
  return !!reduce(collection, function (matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}
/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function some(collection, matcher) {
  return !!find(collection, matcher);
}
/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */

function map(collection, fn) {
  var result = [];
  forEach(collection, function (val, key) {
    result.push(fn(val, key));
  });
  return result;
}
/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function index_esm_keys(collection) {
  return collection && Object.keys(collection) || [];
}
/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */

function index_esm_size(collection) {
  return index_esm_keys(collection).length;
}
/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function index_esm_values(collection) {
  return map(collection, function (val) {
    return val;
  });
}
/**
 * Group collection members by attribute.
 *
 * @param  {Object|Array} collection
 * @param  {Function} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */

function groupBy(collection, extractor) {
  var grouped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  extractor = toExtractor(extractor);
  forEach(collection, function (val) {
    var discriminator = extractor(val) || '_';
    var group = grouped[discriminator];

    if (!group) {
      group = grouped[discriminator] = [];
    }

    group.push(val);
  });
  return grouped;
}
function uniqueBy(extractor) {
  extractor = toExtractor(extractor);
  var grouped = {};

  for (var _len = arguments.length, collections = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    collections[_key - 1] = arguments[_key];
  }

  forEach(collections, function (c) {
    return groupBy(c, extractor, grouped);
  });
  var result = map(grouped, function (val, key) {
    return val[0];
  });
  return result;
}
var unionBy = uniqueBy;
/**
 * Sort collection by criteria.
 *
 * @param  {Object|Array} collection
 * @param  {String|Function} extractor
 *
 * @return {Array}
 */

function sortBy(collection, extractor) {
  extractor = toExtractor(extractor);
  var sorted = [];
  forEach(collection, function (value, key) {
    var disc = extractor(value, key);
    var entry = {
      d: disc,
      v: value
    };

    for (var idx = 0; idx < sorted.length; idx++) {
      var d = sorted[idx].d;

      if (disc < d) {
        sorted.splice(idx, 0, entry);
        return;
      }
    } // not inserted, append (!)


    sorted.push(entry);
  });
  return map(sorted, function (e) {
    return e.v;
  });
}
/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * const matcher = matchPattern({ id: 1 });
 *
 * var element = find(elements, matcher);
 *
 * @param  {Object} pattern
 *
 * @return {Function} matcherFn
 */

function matchPattern(pattern) {
  return function (el) {
    return every(pattern, function (val, key) {
      return el[key] === val;
    });
  };
}

function toExtractor(extractor) {
  return isFunction(extractor) ? extractor : function (e) {
    return e[extractor];
  };
}

function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : function (e) {
    return e === matcher;
  };
}

function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/**
 * Debounce fn, calling it only once if
 * the given time elapsed between calls.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {Function} debounced function
 */
function debounce(fn, timeout) {
  var timer;
  var lastArgs;
  var lastThis;
  var lastNow;

  function fire() {
    var now = Date.now();
    var scheduledDiff = lastNow + timeout - now;

    if (scheduledDiff > 0) {
      return schedule(scheduledDiff);
    }

    fn.apply(lastThis, lastArgs);
    timer = lastNow = lastArgs = lastThis = undefined;
  }

  function schedule(timeout) {
    timer = setTimeout(fire, timeout);
  }

  return function () {
    lastNow = Date.now();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;
    lastThis = this; // ensure an execution is scheduled

    if (!timer) {
      schedule(timeout);
    }
  };
}
/**
 * Throttle fn, calling at most once
 * in the given interval.
 *
 * @param  {Function} fn
 * @param  {Number} interval
 *
 * @return {Function} throttled function
 */

function throttle(fn, interval) {
  var throttling = false;
  return function () {
    if (throttling) {
      return;
    }

    fn.apply(void 0, arguments);
    throttling = true;
    setTimeout(function () {
      throttling = false;
    }, interval);
  };
}
/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */

function bind(fn, target) {
  return fn.bind(target);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */

function index_esm_assign(target) {
  for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    others[_key - 1] = arguments[_key];
  }

  return _extends.apply(void 0, [target].concat(others));
}
/**
 * Pick given properties from the target object.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function pick(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(properties, function (prop) {
    if (prop in obj) {
      result[prop] = target[prop];
    }
  });
  return result;
}
/**
 * Pick all target properties, excluding the given ones.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function omit(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(obj, function (prop, key) {
    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });
  return result;
}
/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */

function merge(target) {
  for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }

  if (!sources.length) {
    return target;
  }

  forEach(sources, function (source) {
    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    forEach(source, function (sourceVal, key) {
      if (key === '__proto__') {
        return;
      }

      var targetVal = target[key];

      if (isObject(sourceVal)) {
        if (!isObject(targetVal)) {
          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }
    });
  });
  return target;
}



// CONCATENATED MODULE: ./node_modules/diagram-js/lib/util/Elements.js



/**
 * Get parent elements.
 *
 * @param {Array<djs.model.base>} elements
 *
 * @returns {Array<djs.model.Base>}
 */
function getParents(elements) {

  // find elements that are not children of any other elements
  return index_esm_filter(elements, function(element) {
    return !find(elements, function(e) {
      return e !== element && getParent(element, e);
    });
  });
}


function getParent(element, parent) {
  if (!parent) {
    return;
  }

  if (element === parent) {
    return parent;
  }

  if (!element.parent) {
    return;
  }

  return getParent(element.parent, parent);
}


/**
 * Adds an element to a collection and returns true if the
 * element was added.
 *
 * @param {Array<Object>} elements
 * @param {Object} e
 * @param {boolean} unique
 */
function Elements_add(elements, e, unique) {
  var canAdd = !unique || elements.indexOf(e) === -1;

  if (canAdd) {
    elements.push(e);
  }

  return canAdd;
}


/**
 * Iterate over each element in a collection, calling the iterator function `fn`
 * with (element, index, recursionDepth).
 *
 * Recurse into all elements that are returned by `fn`.
 *
 * @param  {Object|Array<Object>} elements
 * @param  {Function} fn iterator function called with (element, index, recursionDepth)
 * @param  {number} [depth] maximum recursion depth
 */
function eachElement(elements, fn, depth) {

  depth = depth || 0;

  if (!index_esm_isArray(elements)) {
    elements = [ elements ];
  }

  forEach(elements, function(s, i) {
    var filter = fn(s, i, depth);

    if (index_esm_isArray(filter) && filter.length) {
      eachElement(filter, fn, depth + 1);
    }
  });
}


/**
 * Collects self + child elements up to a given depth from a list of elements.
 *
 * @param  {djs.model.Base|Array<djs.model.Base>} elements the elements to select the children from
 * @param  {boolean} unique whether to return a unique result set (no duplicates)
 * @param  {number} maxDepth the depth to search through or -1 for infinite
 *
 * @return {Array<djs.model.Base>} found elements
 */
function selfAndChildren(elements, unique, maxDepth) {
  var result = [],
      processedChildren = [];

  eachElement(elements, function(element, i, depth) {
    Elements_add(result, element, unique);

    var children = element.children;

    // max traversal depth not reached yet
    if (maxDepth === -1 || depth < maxDepth) {

      // children exist && children not yet processed
      if (children && Elements_add(processedChildren, children, unique)) {
        return children;
      }
    }
  });

  return result;
}

/**
 * Return self + direct children for a number of elements
 *
 * @param  {Array<djs.model.Base>} elements to query
 * @param  {boolean} allowDuplicates to allow duplicates in the result set
 *
 * @return {Array<djs.model.Base>} the collected elements
 */
function selfAndDirectChildren(elements, allowDuplicates) {
  return selfAndChildren(elements, !allowDuplicates, 1);
}


/**
 * Return self + ALL children for a number of elements
 *
 * @param  {Array<djs.model.Base>} elements to query
 * @param  {boolean} allowDuplicates to allow duplicates in the result set
 *
 * @return {Array<djs.model.Base>} the collected elements
 */
function selfAndAllChildren(elements, allowDuplicates) {
  return selfAndChildren(elements, !allowDuplicates, -1);
}


/**
 * Gets the the closure for all selected elements,
 * their enclosed children and connections.
 *
 * @param {Array<djs.model.Base>} elements
 * @param {boolean} [isTopLevel=true]
 * @param {Object} [existingClosure]
 *
 * @return {Object} newClosure
 */
function getClosure(elements, isTopLevel, closure) {

  if (isUndefined(isTopLevel)) {
    isTopLevel = true;
  }

  if (isObject(isTopLevel)) {
    closure = isTopLevel;
    isTopLevel = true;
  }


  closure = closure || {};

  var allShapes = copyObject(closure.allShapes),
      allConnections = copyObject(closure.allConnections),
      enclosedElements = copyObject(closure.enclosedElements),
      enclosedConnections = copyObject(closure.enclosedConnections);

  var topLevel = copyObject(
    closure.topLevel,
    isTopLevel && groupBy(elements, function(e) { return e.id; })
  );


  function handleConnection(c) {
    if (topLevel[c.source.id] && topLevel[c.target.id]) {
      topLevel[c.id] = [ c ];
    }

    // not enclosed as a child, but maybe logically
    // (connecting two moved elements?)
    if (allShapes[c.source.id] && allShapes[c.target.id]) {
      enclosedConnections[c.id] = enclosedElements[c.id] = c;
    }

    allConnections[c.id] = c;
  }

  function handleElement(element) {

    enclosedElements[element.id] = element;

    if (element.waypoints) {

      // remember connection
      enclosedConnections[element.id] = allConnections[element.id] = element;
    } else {

      // remember shape
      allShapes[element.id] = element;

      // remember all connections
      forEach(element.incoming, handleConnection);

      forEach(element.outgoing, handleConnection);

      // recurse into children
      return element.children;
    }
  }

  eachElement(elements, handleElement);

  return {
    allShapes: allShapes,
    allConnections: allConnections,
    topLevel: topLevel,
    enclosedConnections: enclosedConnections,
    enclosedElements: enclosedElements
  };
}

/**
 * Returns the surrounding bbox for all elements in
 * the array or the element primitive.
 *
 * @param {Array<djs.model.Shape>|djs.model.Shape} elements
 * @param {boolean} stopRecursion
 */
function getBBox(elements, stopRecursion) {

  stopRecursion = !!stopRecursion;
  if (!index_esm_isArray(elements)) {
    elements = [elements];
  }

  var minX,
      minY,
      maxX,
      maxY;

  forEach(elements, function(element) {

    // If element is a connection the bbox must be computed first
    var bbox = element;
    if (element.waypoints && !stopRecursion) {
      bbox = getBBox(element.waypoints, true);
    }

    var x = bbox.x,
        y = bbox.y,
        height = bbox.height || 0,
        width = bbox.width || 0;

    if (x < minX || minX === undefined) {
      minX = x;
    }
    if (y < minY || minY === undefined) {
      minY = y;
    }

    if ((x + width) > maxX || maxX === undefined) {
      maxX = x + width;
    }
    if ((y + height) > maxY || maxY === undefined) {
      maxY = y + height;
    }
  });

  return {
    x: minX,
    y: minY,
    height: maxY - minY,
    width: maxX - minX
  };
}


/**
 * Returns all elements that are enclosed from the bounding box.
 *
 *   * If bbox.(width|height) is not specified the method returns
 *     all elements with element.x/y > bbox.x/y
 *   * If only bbox.x or bbox.y is specified, method return all elements with
 *     e.x > bbox.x or e.y > bbox.y
 *
 * @param {Array<djs.model.Shape>} elements List of Elements to search through
 * @param {djs.model.Shape} bbox the enclosing bbox.
 *
 * @return {Array<djs.model.Shape>} enclosed elements
 */
function getEnclosedElements(elements, bbox) {

  var filteredElements = {};

  forEach(elements, function(element) {

    var e = element;

    if (e.waypoints) {
      e = getBBox(e);
    }

    if (!isNumber(bbox.y) && (e.x > bbox.x)) {
      filteredElements[element.id] = element;
    }
    if (!isNumber(bbox.x) && (e.y > bbox.y)) {
      filteredElements[element.id] = element;
    }
    if (e.x > bbox.x && e.y > bbox.y) {
      if (isNumber(bbox.width) && isNumber(bbox.height) &&
          e.width + e.x < bbox.width + bbox.x &&
          e.height + e.y < bbox.height + bbox.y) {

        filteredElements[element.id] = element;
      } else if (!isNumber(bbox.width) || !isNumber(bbox.height)) {
        filteredElements[element.id] = element;
      }
    }
  });

  return filteredElements;
}


function getType(element) {

  if ('waypoints' in element) {
    return 'connection';
  }

  if ('x' in element) {
    return 'shape';
  }

  return 'root';
}

function isFrameElement(element) {

  return !!(element && element.isFrame);
}

// helpers ///////////////////////////////

function copyObject(src1, src2) {
  return index_esm_assign({}, src1 || {}, src2 || {});
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/draw/DefaultRenderer.js










// apply default renderer with lowest possible priority
// so that it only kicks in if noone else could render
var DefaultRenderer_DEFAULT_RENDER_PRIORITY = 1;

/**
 * The default renderer used for shapes and connections.
 *
 * @param {EventBus} eventBus
 * @param {Styles} styles
 */
function DefaultRenderer(eventBus, styles) {

  //
  BaseRenderer.call(this, eventBus, DefaultRenderer_DEFAULT_RENDER_PRIORITY);

  this.CONNECTION_STYLE = styles.style([ 'no-fill' ], { strokeWidth: 5, stroke: 'fuchsia' });
  this.SHAPE_STYLE = styles.style({ fill: 'white', stroke: 'fuchsia', strokeWidth: 2 });
  this.FRAME_STYLE = styles.style([ 'no-fill' ], { stroke: 'fuchsia', strokeDasharray: 4, strokeWidth: 2 });
}

inherits_browser_default()(DefaultRenderer, BaseRenderer);


DefaultRenderer.prototype.canRender = function() {
  return true;
};

DefaultRenderer.prototype.drawShape = function drawShape(visuals, element) {
  var rect = index_esm_create('rect');

  index_esm_attr(rect, {
    x: 0,
    y: 0,
    width: element.width || 0,
    height: element.height || 0
  });

  if (isFrameElement(element)) {
    index_esm_attr(rect, this.FRAME_STYLE);
  } else {
    index_esm_attr(rect, this.SHAPE_STYLE);
  }

  index_esm_append(visuals, rect);

  return rect;
};

DefaultRenderer.prototype.drawConnection = function drawConnection(visuals, connection) {

  var line = createLine(connection.waypoints, this.CONNECTION_STYLE);
  index_esm_append(visuals, line);

  return line;
};

DefaultRenderer.prototype.getShapePath = function getShapePath(shape) {

  var x = shape.x,
      y = shape.y,
      width = shape.width,
      height = shape.height;

  var shapePath = [
    ['M', x, y],
    ['l', width, 0],
    ['l', 0, height],
    ['l', -width, 0],
    ['z']
  ];

  return componentsToPath(shapePath);
};

DefaultRenderer.prototype.getConnectionPath = function getConnectionPath(connection) {
  var waypoints = connection.waypoints;

  var idx, point, connectionPath = [];

  for (idx = 0; (point = waypoints[idx]); idx++) {

    // take invisible docking into account
    // when creating the path
    point = point.original || point;

    connectionPath.push([ idx === 0 ? 'M' : 'L', point.x, point.y ]);
  }

  return componentsToPath(connectionPath);
};


DefaultRenderer.$inject = [ 'eventBus', 'styles' ];

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/draw/Styles.js



/**
 * A component that manages shape styles
 */
function Styles() {

  var defaultTraits = {

    'no-fill': {
      fill: 'none'
    },
    'no-border': {
      strokeOpacity: 0.0
    },
    'no-events': {
      pointerEvents: 'none'
    }
  };

  var self = this;

  /**
   * Builds a style definition from a className, a list of traits and an object of additional attributes.
   *
   * @param  {string} className
   * @param  {Array<string>} traits
   * @param  {Object} additionalAttrs
   *
   * @return {Object} the style defintion
   */
  this.cls = function(className, traits, additionalAttrs) {
    var attrs = this.style(traits, additionalAttrs);

    return index_esm_assign(attrs, { 'class': className });
  };

  /**
   * Builds a style definition from a list of traits and an object of additional attributes.
   *
   * @param  {Array<string>} traits
   * @param  {Object} additionalAttrs
   *
   * @return {Object} the style defintion
   */
  this.style = function(traits, additionalAttrs) {

    if (!index_esm_isArray(traits) && !additionalAttrs) {
      additionalAttrs = traits;
      traits = [];
    }

    var attrs = reduce(traits, function(attrs, t) {
      return index_esm_assign(attrs, defaultTraits[t] || {});
    }, {});

    return additionalAttrs ? index_esm_assign(attrs, additionalAttrs) : attrs;
  };

  this.computeStyle = function(custom, traits, defaultStyles) {
    if (!index_esm_isArray(traits)) {
      defaultStyles = traits;
      traits = [];
    }

    return self.style(traits || [], index_esm_assign({}, defaultStyles, custom || {}));
  };
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/draw/index.js



/* harmony default export */ var draw = ({
  __init__: [ 'defaultRenderer' ],
  defaultRenderer: [ 'type', DefaultRenderer ],
  styles: [ 'type', Styles ]
});

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/util/Collections.js
/**
 * Failsafe remove an element from a collection
 *
 * @param  {Array<Object>} [collection]
 * @param  {Object} [element]
 *
 * @return {number} the previous index of the element
 */
function Collections_remove(collection, element) {

  if (!collection || !element) {
    return -1;
  }

  var idx = collection.indexOf(element);

  if (idx !== -1) {
    collection.splice(idx, 1);
  }

  return idx;
}

/**
 * Fail save add an element to the given connection, ensuring
 * it does not yet exist.
 *
 * @param {Array<Object>} collection
 * @param {Object} element
 * @param {number} idx
 */
function Collections_add(collection, element, idx) {

  if (!collection || !element) {
    return;
  }

  if (typeof idx !== 'number') {
    idx = -1;
  }

  var currentIdx = collection.indexOf(element);

  if (currentIdx !== -1) {

    if (currentIdx === idx) {

      // nothing to do, position has not changed
      return;
    } else {

      if (idx !== -1) {

        // remove from current position
        collection.splice(currentIdx, 1);
      } else {

        // already exists in collection
        return;
      }
    }
  }

  if (idx !== -1) {

    // insert at specified position
    collection.splice(idx, 0, element);
  } else {

    // push to end
    collection.push(element);
  }
}


/**
 * Fail save get the index of an element in a collection.
 *
 * @param {Array<Object>} collection
 * @param {Object} element
 *
 * @return {number} the index or -1 if collection or element do
 *                  not exist or the element is not contained.
 */
function indexOf(collection, element) {

  if (!collection || !element) {
    return -1;
  }

  return collection.indexOf(element);
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/core/Canvas.js











function round(number, resolution) {
  return Math.round(number * resolution) / resolution;
}

function ensurePx(number) {
  return isNumber(number) ? number + 'px' : number;
}

/**
 * Creates a HTML container element for a SVG element with
 * the given configuration
 *
 * @param  {Object} options
 * @return {HTMLElement} the container element
 */
function createContainer(options) {

  options = index_esm_assign({}, { width: '100%', height: '100%' }, options);

  var container = options.container || document.body;

  // create a <div> around the svg element with the respective size
  // this way we can always get the correct container size
  // (this is impossible for <svg> elements at the moment)
  var parent = document.createElement('div');
  parent.setAttribute('class', 'djs-container');

  index_esm_assign(parent.style, {
    position: 'relative',
    overflow: 'hidden',
    width: ensurePx(options.width),
    height: ensurePx(options.height)
  });

  container.appendChild(parent);

  return parent;
}

function createGroup(parent, cls, childIndex) {
  var group = index_esm_create('g');
  index_esm_classes(group).add(cls);

  var index = childIndex !== undefined ? childIndex : parent.childNodes.length - 1;

  // must ensure second argument is node or _null_
  // cf. https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
  parent.insertBefore(group, parent.childNodes[index] || null);

  return group;
}

var BASE_LAYER = 'base';


var REQUIRED_MODEL_ATTRS = {
  shape: [ 'x', 'y', 'width', 'height' ],
  connection: [ 'waypoints' ]
};

/**
 * The main drawing canvas.
 *
 * @class
 * @constructor
 *
 * @emits Canvas#canvas.init
 *
 * @param {Object} config
 * @param {EventBus} eventBus
 * @param {GraphicsFactory} graphicsFactory
 * @param {ElementRegistry} elementRegistry
 */
function Canvas(config, eventBus, graphicsFactory, elementRegistry) {

  this._eventBus = eventBus;
  this._elementRegistry = elementRegistry;
  this._graphicsFactory = graphicsFactory;

  this._init(config || {});
}

Canvas.$inject = [
  'config.canvas',
  'eventBus',
  'graphicsFactory',
  'elementRegistry'
];


Canvas.prototype._init = function(config) {

  var eventBus = this._eventBus;

  // Creates a <svg> element that is wrapped into a <div>.
  // This way we are always able to correctly figure out the size of the svg element
  // by querying the parent node.
  //
  // (It is not possible to get the size of a svg element cross browser @ 2014-04-01)
  //
  // <div class="djs-container" style="width: {desired-width}, height: {desired-height}">
  //   <svg width="100%" height="100%">
  //    ...
  //   </svg>
  // </div>

  // html container
  var container = this._container = createContainer(config);

  var svg = this._svg = index_esm_create('svg');
  index_esm_attr(svg, { width: '100%', height: '100%' });

  index_esm_append(container, svg);

  var viewport = this._viewport = createGroup(svg, 'viewport');

  this._layers = {};

  // debounce canvas.viewbox.changed events
  // for smoother diagram interaction
  if (config.deferUpdate !== false) {
    this._viewboxChanged = debounce(bind(this._viewboxChanged, this), 300);
  }

  eventBus.on('diagram.init', function() {

    /**
     * An event indicating that the canvas is ready to be drawn on.
     *
     * @memberOf Canvas
     *
     * @event canvas.init
     *
     * @type {Object}
     * @property {SVGElement} svg the created svg element
     * @property {SVGElement} viewport the direct parent of diagram elements and shapes
     */
    eventBus.fire('canvas.init', {
      svg: svg,
      viewport: viewport
    });

  }, this);

  // reset viewbox on shape changes to
  // recompute the viewbox
  eventBus.on([
    'shape.added',
    'connection.added',
    'shape.removed',
    'connection.removed',
    'elements.changed'
  ], function() {
    delete this._cachedViewbox;
  }, this);

  eventBus.on('diagram.destroy', 500, this._destroy, this);
  eventBus.on('diagram.clear', 500, this._clear, this);
};

Canvas.prototype._destroy = function(emit) {
  this._eventBus.fire('canvas.destroy', {
    svg: this._svg,
    viewport: this._viewport
  });

  var parent = this._container.parentNode;

  if (parent) {
    parent.removeChild(this._container);
  }

  delete this._svg;
  delete this._container;
  delete this._layers;
  delete this._rootElement;
  delete this._viewport;
};

Canvas.prototype._clear = function() {

  var self = this;

  var allElements = this._elementRegistry.getAll();

  // remove all elements
  allElements.forEach(function(element) {
    var type = getType(element);

    if (type === 'root') {
      self.setRootElement(null, true);
    } else {
      self._removeElement(element, type);
    }
  });

  // force recomputation of view box
  delete this._cachedViewbox;
};

/**
 * Returns the default layer on which
 * all elements are drawn.
 *
 * @returns {SVGElement}
 */
Canvas.prototype.getDefaultLayer = function() {
  return this.getLayer(BASE_LAYER, 0);
};

/**
 * Returns a layer that is used to draw elements
 * or annotations on it.
 *
 * Non-existing layers retrieved through this method
 * will be created. During creation, the optional index
 * may be used to create layers below or above existing layers.
 * A layer with a certain index is always created above all
 * existing layers with the same index.
 *
 * @param {string} name
 * @param {number} index
 *
 * @returns {SVGElement}
 */
Canvas.prototype.getLayer = function(name, index) {

  if (!name) {
    throw new Error('must specify a name');
  }

  var layer = this._layers[name];

  if (!layer) {
    layer = this._layers[name] = this._createLayer(name, index);
  }

  // throw an error if layer creation / retrival is
  // requested on different index
  if (typeof index !== 'undefined' && layer.index !== index) {
    throw new Error('layer <' + name + '> already created at index <' + index + '>');
  }

  return layer.group;
};

/**
 * Creates a given layer and returns it.
 *
 * @param {string} name
 * @param {number} [index=0]
 *
 * @return {Object} layer descriptor with { index, group: SVGGroup }
 */
Canvas.prototype._createLayer = function(name, index) {

  if (!index) {
    index = 0;
  }

  var childIndex = reduce(this._layers, function(childIndex, layer) {
    if (index >= layer.index) {
      childIndex++;
    }

    return childIndex;
  }, 0);

  return {
    group: createGroup(this._viewport, 'layer-' + name, childIndex),
    index: index
  };

};

/**
 * Returns the html element that encloses the
 * drawing canvas.
 *
 * @return {DOMNode}
 */
Canvas.prototype.getContainer = function() {
  return this._container;
};


// markers //////////////////////

Canvas.prototype._updateMarker = function(element, marker, add) {
  var container;

  if (!element.id) {
    element = this._elementRegistry.get(element);
  }

  // we need to access all
  container = this._elementRegistry._elements[element.id];

  if (!container) {
    return;
  }

  forEach([ container.gfx, container.secondaryGfx ], function(gfx) {
    if (gfx) {

      // invoke either addClass or removeClass based on mode
      if (add) {
        index_esm_classes(gfx).add(marker);
      } else {
        index_esm_classes(gfx).remove(marker);
      }
    }
  });

  /**
   * An event indicating that a marker has been updated for an element
   *
   * @event element.marker.update
   * @type {Object}
   * @property {djs.model.Element} element the shape
   * @property {Object} gfx the graphical representation of the shape
   * @property {string} marker
   * @property {boolean} add true if the marker was added, false if it got removed
   */
  this._eventBus.fire('element.marker.update', { element: element, gfx: container.gfx, marker: marker, add: !!add });
};


/**
 * Adds a marker to an element (basically a css class).
 *
 * Fires the element.marker.update event, making it possible to
 * integrate extension into the marker life-cycle, too.
 *
 * @example
 * canvas.addMarker('foo', 'some-marker');
 *
 * var fooGfx = canvas.getGraphics('foo');
 *
 * fooGfx; // <g class="... some-marker"> ... </g>
 *
 * @param {string|djs.model.Base} element
 * @param {string} marker
 */
Canvas.prototype.addMarker = function(element, marker) {
  this._updateMarker(element, marker, true);
};


/**
 * Remove a marker from an element.
 *
 * Fires the element.marker.update event, making it possible to
 * integrate extension into the marker life-cycle, too.
 *
 * @param  {string|djs.model.Base} element
 * @param  {string} marker
 */
Canvas.prototype.removeMarker = function(element, marker) {
  this._updateMarker(element, marker, false);
};

/**
 * Check the existence of a marker on element.
 *
 * @param  {string|djs.model.Base} element
 * @param  {string} marker
 */
Canvas.prototype.hasMarker = function(element, marker) {
  if (!element.id) {
    element = this._elementRegistry.get(element);
  }

  var gfx = this.getGraphics(element);

  return index_esm_classes(gfx).has(marker);
};

/**
 * Toggles a marker on an element.
 *
 * Fires the element.marker.update event, making it possible to
 * integrate extension into the marker life-cycle, too.
 *
 * @param  {string|djs.model.Base} element
 * @param  {string} marker
 */
Canvas.prototype.toggleMarker = function(element, marker) {
  if (this.hasMarker(element, marker)) {
    this.removeMarker(element, marker);
  } else {
    this.addMarker(element, marker);
  }
};

Canvas.prototype.getRootElement = function() {
  if (!this._rootElement) {
    this.setRootElement({ id: '__implicitroot', children: [] });
  }

  return this._rootElement;
};



// root element handling //////////////////////

/**
 * Sets a given element as the new root element for the canvas
 * and returns the new root element.
 *
 * @param {Object|djs.model.Root} element
 * @param {boolean} [override] whether to override the current root element, if any
 *
 * @return {Object|djs.model.Root} new root element
 */
Canvas.prototype.setRootElement = function(element, override) {

  if (element) {
    this._ensureValid('root', element);
  }

  var currentRoot = this._rootElement,
      elementRegistry = this._elementRegistry,
      eventBus = this._eventBus;

  if (currentRoot) {
    if (!override) {
      throw new Error('rootElement already set, need to specify override');
    }

    // simulate element remove event sequence
    eventBus.fire('root.remove', { element: currentRoot });
    eventBus.fire('root.removed', { element: currentRoot });

    elementRegistry.remove(currentRoot);
  }

  if (element) {
    var gfx = this.getDefaultLayer();

    // resemble element add event sequence
    eventBus.fire('root.add', { element: element });

    elementRegistry.add(element, gfx, this._svg);

    eventBus.fire('root.added', { element: element, gfx: gfx });
  }

  this._rootElement = element;

  return element;
};



// add functionality //////////////////////

Canvas.prototype._ensureValid = function(type, element) {
  if (!element.id) {
    throw new Error('element must have an id');
  }

  if (this._elementRegistry.get(element.id)) {
    throw new Error('element with id ' + element.id + ' already exists');
  }

  var requiredAttrs = REQUIRED_MODEL_ATTRS[type];

  var valid = every(requiredAttrs, function(attr) {
    return typeof element[attr] !== 'undefined';
  });

  if (!valid) {
    throw new Error(
      'must supply { ' + requiredAttrs.join(', ') + ' } with ' + type);
  }
};

Canvas.prototype._setParent = function(element, parent, parentIndex) {
  Collections_add(parent.children, element, parentIndex);
  element.parent = parent;
};

/**
 * Adds an element to the canvas.
 *
 * This wires the parent <-> child relationship between the element and
 * a explicitly specified parent or an implicit root element.
 *
 * During add it emits the events
 *
 *  * <{type}.add> (element, parent)
 *  * <{type}.added> (element, gfx)
 *
 * Extensions may hook into these events to perform their magic.
 *
 * @param {string} type
 * @param {Object|djs.model.Base} element
 * @param {Object|djs.model.Base} [parent]
 * @param {number} [parentIndex]
 *
 * @return {Object|djs.model.Base} the added element
 */
Canvas.prototype._addElement = function(type, element, parent, parentIndex) {

  parent = parent || this.getRootElement();

  var eventBus = this._eventBus,
      graphicsFactory = this._graphicsFactory;

  this._ensureValid(type, element);

  eventBus.fire(type + '.add', { element: element, parent: parent });

  this._setParent(element, parent, parentIndex);

  // create graphics
  var gfx = graphicsFactory.create(type, element, parentIndex);

  this._elementRegistry.add(element, gfx);

  // update its visual
  graphicsFactory.update(type, element, gfx);

  eventBus.fire(type + '.added', { element: element, gfx: gfx });

  return element;
};

/**
 * Adds a shape to the canvas
 *
 * @param {Object|djs.model.Shape} shape to add to the diagram
 * @param {djs.model.Base} [parent]
 * @param {number} [parentIndex]
 *
 * @return {djs.model.Shape} the added shape
 */
Canvas.prototype.addShape = function(shape, parent, parentIndex) {
  return this._addElement('shape', shape, parent, parentIndex);
};

/**
 * Adds a connection to the canvas
 *
 * @param {Object|djs.model.Connection} connection to add to the diagram
 * @param {djs.model.Base} [parent]
 * @param {number} [parentIndex]
 *
 * @return {djs.model.Connection} the added connection
 */
Canvas.prototype.addConnection = function(connection, parent, parentIndex) {
  return this._addElement('connection', connection, parent, parentIndex);
};


/**
 * Internal remove element
 */
Canvas.prototype._removeElement = function(element, type) {

  var elementRegistry = this._elementRegistry,
      graphicsFactory = this._graphicsFactory,
      eventBus = this._eventBus;

  element = elementRegistry.get(element.id || element);

  if (!element) {

    // element was removed already
    return;
  }

  eventBus.fire(type + '.remove', { element: element });

  graphicsFactory.remove(element);

  // unset parent <-> child relationship
  Collections_remove(element.parent && element.parent.children, element);
  element.parent = null;

  eventBus.fire(type + '.removed', { element: element });

  elementRegistry.remove(element);

  return element;
};


/**
 * Removes a shape from the canvas
 *
 * @param {string|djs.model.Shape} shape or shape id to be removed
 *
 * @return {djs.model.Shape} the removed shape
 */
Canvas.prototype.removeShape = function(shape) {

  /**
   * An event indicating that a shape is about to be removed from the canvas.
   *
   * @memberOf Canvas
   *
   * @event shape.remove
   * @type {Object}
   * @property {djs.model.Shape} element the shape descriptor
   * @property {Object} gfx the graphical representation of the shape
   */

  /**
   * An event indicating that a shape has been removed from the canvas.
   *
   * @memberOf Canvas
   *
   * @event shape.removed
   * @type {Object}
   * @property {djs.model.Shape} element the shape descriptor
   * @property {Object} gfx the graphical representation of the shape
   */
  return this._removeElement(shape, 'shape');
};


/**
 * Removes a connection from the canvas
 *
 * @param {string|djs.model.Connection} connection or connection id to be removed
 *
 * @return {djs.model.Connection} the removed connection
 */
Canvas.prototype.removeConnection = function(connection) {

  /**
   * An event indicating that a connection is about to be removed from the canvas.
   *
   * @memberOf Canvas
   *
   * @event connection.remove
   * @type {Object}
   * @property {djs.model.Connection} element the connection descriptor
   * @property {Object} gfx the graphical representation of the connection
   */

  /**
   * An event indicating that a connection has been removed from the canvas.
   *
   * @memberOf Canvas
   *
   * @event connection.removed
   * @type {Object}
   * @property {djs.model.Connection} element the connection descriptor
   * @property {Object} gfx the graphical representation of the connection
   */
  return this._removeElement(connection, 'connection');
};


/**
 * Return the graphical object underlaying a certain diagram element
 *
 * @param {string|djs.model.Base} element descriptor of the element
 * @param {boolean} [secondary=false] whether to return the secondary connected element
 *
 * @return {SVGElement}
 */
Canvas.prototype.getGraphics = function(element, secondary) {
  return this._elementRegistry.getGraphics(element, secondary);
};


/**
 * Perform a viewbox update via a given change function.
 *
 * @param {Function} changeFn
 */
Canvas.prototype._changeViewbox = function(changeFn) {

  // notify others of the upcoming viewbox change
  this._eventBus.fire('canvas.viewbox.changing');

  // perform actual change
  changeFn.apply(this);

  // reset the cached viewbox so that
  // a new get operation on viewbox or zoom
  // triggers a viewbox re-computation
  this._cachedViewbox = null;

  // notify others of the change; this step
  // may or may not be debounced
  this._viewboxChanged();
};

Canvas.prototype._viewboxChanged = function() {
  this._eventBus.fire('canvas.viewbox.changed', { viewbox: this.viewbox() });
};


/**
 * Gets or sets the view box of the canvas, i.e. the
 * area that is currently displayed.
 *
 * The getter may return a cached viewbox (if it is currently
 * changing). To force a recomputation, pass `false` as the first argument.
 *
 * @example
 *
 * canvas.viewbox({ x: 100, y: 100, width: 500, height: 500 })
 *
 * // sets the visible area of the diagram to (100|100) -> (600|100)
 * // and and scales it according to the diagram width
 *
 * var viewbox = canvas.viewbox(); // pass `false` to force recomputing the box.
 *
 * console.log(viewbox);
 * // {
 * //   inner: Dimensions,
 * //   outer: Dimensions,
 * //   scale,
 * //   x, y,
 * //   width, height
 * // }
 *
 * // if the current diagram is zoomed and scrolled, you may reset it to the
 * // default zoom via this method, too:
 *
 * var zoomedAndScrolledViewbox = canvas.viewbox();
 *
 * canvas.viewbox({
 *   x: 0,
 *   y: 0,
 *   width: zoomedAndScrolledViewbox.outer.width,
 *   height: zoomedAndScrolledViewbox.outer.height
 * });
 *
 * @param  {Object} [box] the new view box to set
 * @param  {number} box.x the top left X coordinate of the canvas visible in view box
 * @param  {number} box.y the top left Y coordinate of the canvas visible in view box
 * @param  {number} box.width the visible width
 * @param  {number} box.height
 *
 * @return {Object} the current view box
 */
Canvas.prototype.viewbox = function(box) {

  if (box === undefined && this._cachedViewbox) {
    return this._cachedViewbox;
  }

  var viewport = this._viewport,
      innerBox,
      outerBox = this.getSize(),
      matrix,
      transform,
      scale,
      x, y;

  if (!box) {

    // compute the inner box based on the
    // diagrams default layer. This allows us to exclude
    // external components, such as overlays
    innerBox = this.getDefaultLayer().getBBox();

    transform = index_esm_transform(viewport);
    matrix = transform ? transform.matrix : createMatrix();
    scale = round(matrix.a, 1000);

    x = round(-matrix.e || 0, 1000);
    y = round(-matrix.f || 0, 1000);

    box = this._cachedViewbox = {
      x: x ? x / scale : 0,
      y: y ? y / scale : 0,
      width: outerBox.width / scale,
      height: outerBox.height / scale,
      scale: scale,
      inner: {
        width: innerBox.width,
        height: innerBox.height,
        x: innerBox.x,
        y: innerBox.y
      },
      outer: outerBox
    };

    return box;
  } else {

    this._changeViewbox(function() {
      scale = Math.min(outerBox.width / box.width, outerBox.height / box.height);

      var matrix = this._svg.createSVGMatrix()
        .scale(scale)
        .translate(-box.x, -box.y);

      index_esm_transform(viewport, matrix);
    });
  }

  return box;
};


/**
 * Gets or sets the scroll of the canvas.
 *
 * @param {Object} [delta] the new scroll to apply.
 *
 * @param {number} [delta.dx]
 * @param {number} [delta.dy]
 */
Canvas.prototype.scroll = function(delta) {

  var node = this._viewport;
  var matrix = node.getCTM();

  if (delta) {
    this._changeViewbox(function() {
      delta = index_esm_assign({ dx: 0, dy: 0 }, delta || {});

      matrix = this._svg.createSVGMatrix().translate(delta.dx, delta.dy).multiply(matrix);

      setCTM(node, matrix);
    });
  }

  return { x: matrix.e, y: matrix.f };
};


/**
 * Gets or sets the current zoom of the canvas, optionally zooming
 * to the specified position.
 *
 * The getter may return a cached zoom level. Call it with `false` as
 * the first argument to force recomputation of the current level.
 *
 * @param {string|number} [newScale] the new zoom level, either a number, i.e. 0.9,
 *                                   or `fit-viewport` to adjust the size to fit the current viewport
 * @param {string|Point} [center] the reference point { x: .., y: ..} to zoom to, 'auto' to zoom into mid or null
 *
 * @return {number} the current scale
 */
Canvas.prototype.zoom = function(newScale, center) {

  if (!newScale) {
    return this.viewbox(newScale).scale;
  }

  if (newScale === 'fit-viewport') {
    return this._fitViewport(center);
  }

  var outer,
      matrix;

  this._changeViewbox(function() {

    if (typeof center !== 'object') {
      outer = this.viewbox().outer;

      center = {
        x: outer.width / 2,
        y: outer.height / 2
      };
    }

    matrix = this._setZoom(newScale, center);
  });

  return round(matrix.a, 1000);
};

function setCTM(node, m) {
  var mstr = 'matrix(' + m.a + ',' + m.b + ',' + m.c + ',' + m.d + ',' + m.e + ',' + m.f + ')';
  node.setAttribute('transform', mstr);
}

Canvas.prototype._fitViewport = function(center) {

  var vbox = this.viewbox(),
      outer = vbox.outer,
      inner = vbox.inner,
      newScale,
      newViewbox;

  // display the complete diagram without zooming in.
  // instead of relying on internal zoom, we perform a
  // hard reset on the canvas viewbox to realize this
  //
  // if diagram does not need to be zoomed in, we focus it around
  // the diagram origin instead

  if (inner.x >= 0 &&
      inner.y >= 0 &&
      inner.x + inner.width <= outer.width &&
      inner.y + inner.height <= outer.height &&
      !center) {

    newViewbox = {
      x: 0,
      y: 0,
      width: Math.max(inner.width + inner.x, outer.width),
      height: Math.max(inner.height + inner.y, outer.height)
    };
  } else {

    newScale = Math.min(1, outer.width / inner.width, outer.height / inner.height);
    newViewbox = {
      x: inner.x + (center ? inner.width / 2 - outer.width / newScale / 2 : 0),
      y: inner.y + (center ? inner.height / 2 - outer.height / newScale / 2 : 0),
      width: outer.width / newScale,
      height: outer.height / newScale
    };
  }

  this.viewbox(newViewbox);

  return this.viewbox(false).scale;
};


Canvas.prototype._setZoom = function(scale, center) {

  var svg = this._svg,
      viewport = this._viewport;

  var matrix = svg.createSVGMatrix();
  var point = svg.createSVGPoint();

  var centerPoint,
      originalPoint,
      currentMatrix,
      scaleMatrix,
      newMatrix;

  currentMatrix = viewport.getCTM();

  var currentScale = currentMatrix.a;

  if (center) {
    centerPoint = index_esm_assign(point, center);

    // revert applied viewport transformations
    originalPoint = centerPoint.matrixTransform(currentMatrix.inverse());

    // create scale matrix
    scaleMatrix = matrix
      .translate(originalPoint.x, originalPoint.y)
      .scale(1 / currentScale * scale)
      .translate(-originalPoint.x, -originalPoint.y);

    newMatrix = currentMatrix.multiply(scaleMatrix);
  } else {
    newMatrix = matrix.scale(scale);
  }

  setCTM(this._viewport, newMatrix);

  return newMatrix;
};


/**
 * Returns the size of the canvas
 *
 * @return {Dimensions}
 */
Canvas.prototype.getSize = function() {
  return {
    width: this._container.clientWidth,
    height: this._container.clientHeight
  };
};


/**
 * Return the absolute bounding box for the given element
 *
 * The absolute bounding box may be used to display overlays in the
 * callers (browser) coordinate system rather than the zoomed in/out
 * canvas coordinates.
 *
 * @param  {ElementDescriptor} element
 * @return {Bounds} the absolute bounding box
 */
Canvas.prototype.getAbsoluteBBox = function(element) {
  var vbox = this.viewbox();
  var bbox;

  // connection
  // use svg bbox
  if (element.waypoints) {
    var gfx = this.getGraphics(element);

    bbox = gfx.getBBox();
  }

  // shapes
  // use data
  else {
    bbox = element;
  }

  var x = bbox.x * vbox.scale - vbox.x * vbox.scale;
  var y = bbox.y * vbox.scale - vbox.y * vbox.scale;

  var width = bbox.width * vbox.scale;
  var height = bbox.height * vbox.scale;

  return {
    x: x,
    y: y,
    width: width,
    height: height
  };
};

/**
 * Fires an event in order other modules can react to the
 * canvas resizing
 */
Canvas.prototype.resized = function() {

  // force recomputation of view box
  delete this._cachedViewbox;

  this._eventBus.fire('canvas.resized');
};

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/core/ElementRegistry.js
var ELEMENT_ID = 'data-element-id';




/**
 * @class
 *
 * A registry that keeps track of all shapes in the diagram.
 */
function ElementRegistry(eventBus) {
  this._elements = {};

  this._eventBus = eventBus;
}

ElementRegistry.$inject = [ 'eventBus' ];

/**
 * Register a pair of (element, gfx, (secondaryGfx)).
 *
 * @param {djs.model.Base} element
 * @param {SVGElement} gfx
 * @param {SVGElement} [secondaryGfx] optional other element to register, too
 */
ElementRegistry.prototype.add = function(element, gfx, secondaryGfx) {

  var id = element.id;

  this._validateId(id);

  // associate dom node with element
  index_esm_attr(gfx, ELEMENT_ID, id);

  if (secondaryGfx) {
    index_esm_attr(secondaryGfx, ELEMENT_ID, id);
  }

  this._elements[id] = { element: element, gfx: gfx, secondaryGfx: secondaryGfx };
};

/**
 * Removes an element from the registry.
 *
 * @param {djs.model.Base} element
 */
ElementRegistry.prototype.remove = function(element) {
  var elements = this._elements,
      id = element.id || element,
      container = id && elements[id];

  if (container) {

    // unset element id on gfx
    index_esm_attr(container.gfx, ELEMENT_ID, '');

    if (container.secondaryGfx) {
      index_esm_attr(container.secondaryGfx, ELEMENT_ID, '');
    }

    delete elements[id];
  }
};

/**
 * Update the id of an element
 *
 * @param {djs.model.Base} element
 * @param {string} newId
 */
ElementRegistry.prototype.updateId = function(element, newId) {

  this._validateId(newId);

  if (typeof element === 'string') {
    element = this.get(element);
  }

  this._eventBus.fire('element.updateId', {
    element: element,
    newId: newId
  });

  var gfx = this.getGraphics(element),
      secondaryGfx = this.getGraphics(element, true);

  this.remove(element);

  element.id = newId;

  this.add(element, gfx, secondaryGfx);
};

/**
 * Return the model element for a given id or graphics.
 *
 * @example
 *
 * elementRegistry.get('SomeElementId_1');
 * elementRegistry.get(gfx);
 *
 *
 * @param {string|SVGElement} filter for selecting the element
 *
 * @return {djs.model.Base}
 */
ElementRegistry.prototype.get = function(filter) {
  var id;

  if (typeof filter === 'string') {
    id = filter;
  } else {
    id = filter && index_esm_attr(filter, ELEMENT_ID);
  }

  var container = this._elements[id];
  return container && container.element;
};

/**
 * Return all elements that match a given filter function.
 *
 * @param {Function} fn
 *
 * @return {Array<djs.model.Base>}
 */
ElementRegistry.prototype.filter = function(fn) {

  var filtered = [];

  this.forEach(function(element, gfx) {
    if (fn(element, gfx)) {
      filtered.push(element);
    }
  });

  return filtered;
};

/**
 * Return the first element that satisfies the provided testing function.
 *
 * @param {Function} fn
 *
 * @return {djs.model.Base}
 */
ElementRegistry.prototype.find = function(fn) {
  var map = this._elements,
      keys = Object.keys(map);

  for (var i = 0; i < keys.length; i++) {
    var id = keys[i],
        container = map[id],
        element = container.element,
        gfx = container.gfx;

    if (fn(element, gfx)) {
      return element;
    }
  }
};

/**
 * Return all rendered model elements.
 *
 * @return {Array<djs.model.Base>}
 */
ElementRegistry.prototype.getAll = function() {
  return this.filter(function(e) { return e; });
};

/**
 * Iterate over all diagram elements.
 *
 * @param {Function} fn
 */
ElementRegistry.prototype.forEach = function(fn) {

  var map = this._elements;

  Object.keys(map).forEach(function(id) {
    var container = map[id],
        element = container.element,
        gfx = container.gfx;

    return fn(element, gfx);
  });
};

/**
 * Return the graphical representation of an element or its id.
 *
 * @example
 * elementRegistry.getGraphics('SomeElementId_1');
 * elementRegistry.getGraphics(rootElement); // <g ...>
 *
 * elementRegistry.getGraphics(rootElement, true); // <svg ...>
 *
 *
 * @param {string|djs.model.Base} filter
 * @param {boolean} [secondary=false] whether to return the secondary connected element
 *
 * @return {SVGElement}
 */
ElementRegistry.prototype.getGraphics = function(filter, secondary) {
  var id = filter.id || filter;

  var container = this._elements[id];
  return container && (secondary ? container.secondaryGfx : container.gfx);
};

/**
 * Validate the suitability of the given id and signals a problem
 * with an exception.
 *
 * @param {string} id
 *
 * @throws {Error} if id is empty or already assigned
 */
ElementRegistry.prototype._validateId = function(id) {
  if (!id) {
    throw new Error('element must have an id');
  }

  if (this._elements[id]) {
    throw new Error('element with id ' + id + ' already added');
  }
};

// EXTERNAL MODULE: ./node_modules/object-refs/index.js
var object_refs = __webpack_require__("8fcf");
var object_refs_default = /*#__PURE__*/__webpack_require__.n(object_refs);

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/model/index.js





var parentRefs = new object_refs_default.a({ name: 'children', enumerable: true, collection: true }, { name: 'parent' }),
    labelRefs = new object_refs_default.a({ name: 'labels', enumerable: true, collection: true }, { name: 'labelTarget' }),
    attacherRefs = new object_refs_default.a({ name: 'attachers', collection: true }, { name: 'host' }),
    outgoingRefs = new object_refs_default.a({ name: 'outgoing', collection: true }, { name: 'source' }),
    incomingRefs = new object_refs_default.a({ name: 'incoming', collection: true }, { name: 'target' });

/**
 * @namespace djs.model
 */

/**
 * @memberOf djs.model
 */

/**
 * The basic graphical representation
 *
 * @class
 *
 * @abstract
 */
function Base() {

  /**
   * The object that backs up the shape
   *
   * @name Base#businessObject
   * @type Object
   */
  Object.defineProperty(this, 'businessObject', {
    writable: true
  });


  /**
   * Single label support, will mapped to multi label array
   *
   * @name Base#label
   * @type Object
   */
  Object.defineProperty(this, 'label', {
    get: function() {
      return this.labels[0];
    },
    set: function(newLabel) {

      var label = this.label,
          labels = this.labels;

      if (!newLabel && label) {
        labels.remove(label);
      } else {
        labels.add(newLabel, 0);
      }
    }
  });

  /**
   * The parent shape
   *
   * @name Base#parent
   * @type Shape
   */
  parentRefs.bind(this, 'parent');

  /**
   * The list of labels
   *
   * @name Base#labels
   * @type Label
   */
  labelRefs.bind(this, 'labels');

  /**
   * The list of outgoing connections
   *
   * @name Base#outgoing
   * @type Array<Connection>
   */
  outgoingRefs.bind(this, 'outgoing');

  /**
   * The list of incoming connections
   *
   * @name Base#incoming
   * @type Array<Connection>
   */
  incomingRefs.bind(this, 'incoming');
}


/**
 * A graphical object
 *
 * @class
 * @constructor
 *
 * @extends Base
 */
function Shape() {
  Base.call(this);

  /**
   * Indicates frame shapes
   *
   * @name Shape#isFrame
   * @type boolean
   */

  /**
   * The list of children
   *
   * @name Shape#children
   * @type Array<Base>
   */
  parentRefs.bind(this, 'children');

  /**
   * @name Shape#host
   * @type Shape
   */
  attacherRefs.bind(this, 'host');

  /**
   * @name Shape#attachers
   * @type Shape
   */
  attacherRefs.bind(this, 'attachers');
}

inherits_browser_default()(Shape, Base);


/**
 * A root graphical object
 *
 * @class
 * @constructor
 *
 * @extends Shape
 */
function Root() {
  Shape.call(this);
}

inherits_browser_default()(Root, Shape);


/**
 * A label for an element
 *
 * @class
 * @constructor
 *
 * @extends Shape
 */
function Label() {
  Shape.call(this);

  /**
   * The labeled element
   *
   * @name Label#labelTarget
   * @type Base
   */
  labelRefs.bind(this, 'labelTarget');
}

inherits_browser_default()(Label, Shape);


/**
 * A connection between two elements
 *
 * @class
 * @constructor
 *
 * @extends Base
 */
function Connection() {
  Base.call(this);

  /**
   * The element this connection originates from
   *
   * @name Connection#source
   * @type Base
   */
  outgoingRefs.bind(this, 'source');

  /**
   * The element this connection points to
   *
   * @name Connection#target
   * @type Base
   */
  incomingRefs.bind(this, 'target');
}

inherits_browser_default()(Connection, Base);


var model_types = {
  connection: Connection,
  shape: Shape,
  label: Label,
  root: Root
};

/**
 * Creates a new model element of the specified type
 *
 * @method create
 *
 * @example
 *
 * var shape1 = Model.create('shape', { x: 10, y: 10, width: 100, height: 100 });
 * var shape2 = Model.create('shape', { x: 210, y: 210, width: 100, height: 100 });
 *
 * var connection = Model.create('connection', { waypoints: [ { x: 110, y: 55 }, {x: 210, y: 55 } ] });
 *
 * @param  {string} type lower-cased model name
 * @param  {Object} attrs attributes to initialize the new model instance with
 *
 * @return {Base} the new model instance
 */
function model_create(type, attrs) {
  var Type = model_types[type];
  if (!Type) {
    throw new Error('unknown type: <' + type + '>');
  }
  return index_esm_assign(new Type(), attrs);
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/core/ElementFactory.js




/**
 * A factory for diagram-js shapes
 */
function ElementFactory() {
  this._uid = 12;
}


ElementFactory.prototype.createRoot = function(attrs) {
  return this.create('root', attrs);
};

ElementFactory.prototype.createLabel = function(attrs) {
  return this.create('label', attrs);
};

ElementFactory.prototype.createShape = function(attrs) {
  return this.create('shape', attrs);
};

ElementFactory.prototype.createConnection = function(attrs) {
  return this.create('connection', attrs);
};

/**
 * Create a model element with the given type and
 * a number of pre-set attributes.
 *
 * @param  {string} type
 * @param  {Object} attrs
 * @return {djs.model.Base} the newly created model instance
 */
ElementFactory.prototype.create = function(type, attrs) {

  attrs = index_esm_assign({}, attrs || {});

  if (!attrs.id) {
    attrs.id = type + '_' + (this._uid++);
  }

  return model_create(type, attrs);
};
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/core/EventBus.js


var FN_REF = '__fn';

var DEFAULT_PRIORITY = 1000;

var EventBus_slice = Array.prototype.slice;

/**
 * A general purpose event bus.
 *
 * This component is used to communicate across a diagram instance.
 * Other parts of a diagram can use it to listen to and broadcast events.
 *
 *
 * ## Registering for Events
 *
 * The event bus provides the {@link EventBus#on} and {@link EventBus#once}
 * methods to register for events. {@link EventBus#off} can be used to
 * remove event registrations. Listeners receive an instance of {@link Event}
 * as the first argument. It allows them to hook into the event execution.
 *
 * ```javascript
 *
 * // listen for event
 * eventBus.on('foo', function(event) {
 *
 *   // access event type
 *   event.type; // 'foo'
 *
 *   // stop propagation to other listeners
 *   event.stopPropagation();
 *
 *   // prevent event default
 *   event.preventDefault();
 * });
 *
 * // listen for event with custom payload
 * eventBus.on('bar', function(event, payload) {
 *   console.log(payload);
 * });
 *
 * // listen for event returning value
 * eventBus.on('foobar', function(event) {
 *
 *   // stop event propagation + prevent default
 *   return false;
 *
 *   // stop event propagation + return custom result
 *   return {
 *     complex: 'listening result'
 *   };
 * });
 *
 *
 * // listen with custom priority (default=1000, higher is better)
 * eventBus.on('priorityfoo', 1500, function(event) {
 *   console.log('invoked first!');
 * });
 *
 *
 * // listen for event and pass the context (`this`)
 * eventBus.on('foobar', function(event) {
 *   this.foo();
 * }, this);
 * ```
 *
 *
 * ## Emitting Events
 *
 * Events can be emitted via the event bus using {@link EventBus#fire}.
 *
 * ```javascript
 *
 * // false indicates that the default action
 * // was prevented by listeners
 * if (eventBus.fire('foo') === false) {
 *   console.log('default has been prevented!');
 * };
 *
 *
 * // custom args + return value listener
 * eventBus.on('sum', function(event, a, b) {
 *   return a + b;
 * });
 *
 * // you can pass custom arguments + retrieve result values.
 * var sum = eventBus.fire('sum', 1, 2);
 * console.log(sum); // 3
 * ```
 */
function EventBus() {
  this._listeners = {};

  // cleanup on destroy on lowest priority to allow
  // message passing until the bitter end
  this.on('diagram.destroy', 1, this._destroy, this);
}


/**
 * Register an event listener for events with the given name.
 *
 * The callback will be invoked with `event, ...additionalArguments`
 * that have been passed to {@link EventBus#fire}.
 *
 * Returning false from a listener will prevent the events default action
 * (if any is specified). To stop an event from being processed further in
 * other listeners execute {@link Event#stopPropagation}.
 *
 * Returning anything but `undefined` from a listener will stop the listener propagation.
 *
 * @param {string|Array<string>} events
 * @param {number} [priority=1000] the priority in which this listener is called, larger is higher
 * @param {Function} callback
 * @param {Object} [that] Pass context (`this`) to the callback
 */
EventBus.prototype.on = function(events, priority, callback, that) {

  events = index_esm_isArray(events) ? events : [ events ];

  if (isFunction(priority)) {
    that = callback;
    callback = priority;
    priority = DEFAULT_PRIORITY;
  }

  if (!isNumber(priority)) {
    throw new Error('priority must be a number');
  }

  var actualCallback = callback;

  if (that) {
    actualCallback = bind(callback, that);

    // make sure we remember and are able to remove
    // bound callbacks via {@link #off} using the original
    // callback
    actualCallback[FN_REF] = callback[FN_REF] || callback;
  }

  var self = this;

  events.forEach(function(e) {
    self._addListener(e, {
      priority: priority,
      callback: actualCallback,
      next: null
    });
  });
};


/**
 * Register an event listener that is executed only once.
 *
 * @param {string} event the event name to register for
 * @param {number} [priority=1000] the priority in which this listener is called, larger is higher
 * @param {Function} callback the callback to execute
 * @param {Object} [that] Pass context (`this`) to the callback
 */
EventBus.prototype.once = function(event, priority, callback, that) {
  var self = this;

  if (isFunction(priority)) {
    that = callback;
    callback = priority;
    priority = DEFAULT_PRIORITY;
  }

  if (!isNumber(priority)) {
    throw new Error('priority must be a number');
  }

  function wrappedCallback() {
    var result = callback.apply(that, arguments);

    self.off(event, wrappedCallback);

    return result;
  }

  // make sure we remember and are able to remove
  // bound callbacks via {@link #off} using the original
  // callback
  wrappedCallback[FN_REF] = callback;

  this.on(event, priority, wrappedCallback);
};


/**
 * Removes event listeners by event and callback.
 *
 * If no callback is given, all listeners for a given event name are being removed.
 *
 * @param {string|Array<string>} events
 * @param {Function} [callback]
 */
EventBus.prototype.off = function(events, callback) {

  events = index_esm_isArray(events) ? events : [ events ];

  var self = this;

  events.forEach(function(event) {
    self._removeListener(event, callback);
  });

};


/**
 * Create an EventBus event.
 *
 * @param {Object} data
 *
 * @return {Object} event, recognized by the eventBus
 */
EventBus.prototype.createEvent = function(data) {
  var event = new InternalEvent();

  event.init(data);

  return event;
};


/**
 * Fires a named event.
 *
 * @example
 *
 * // fire event by name
 * events.fire('foo');
 *
 * // fire event object with nested type
 * var event = { type: 'foo' };
 * events.fire(event);
 *
 * // fire event with explicit type
 * var event = { x: 10, y: 20 };
 * events.fire('element.moved', event);
 *
 * // pass additional arguments to the event
 * events.on('foo', function(event, bar) {
 *   alert(bar);
 * });
 *
 * events.fire({ type: 'foo' }, 'I am bar!');
 *
 * @param {string} [name] the optional event name
 * @param {Object} [event] the event object
 * @param {...Object} additional arguments to be passed to the callback functions
 *
 * @return {boolean} the events return value, if specified or false if the
 *                   default action was prevented by listeners
 */
EventBus.prototype.fire = function(type, data) {
  var event,
      firstListener,
      returnValue,
      args;

  args = EventBus_slice.call(arguments);

  if (typeof type === 'object') {
    data = type;
    type = data.type;
  }

  if (!type) {
    throw new Error('no event type specified');
  }

  firstListener = this._listeners[type];

  if (!firstListener) {
    return;
  }

  // we make sure we fire instances of our home made
  // events here. We wrap them only once, though
  if (data instanceof InternalEvent) {

    // we are fine, we alread have an event
    event = data;
  } else {
    event = this.createEvent(data);
  }

  // ensure we pass the event as the first parameter
  args[0] = event;

  // original event type (in case we delegate)
  var originalType = event.type;

  // update event type before delegation
  if (type !== originalType) {
    event.type = type;
  }

  try {
    returnValue = this._invokeListeners(event, args, firstListener);
  } finally {

    // reset event type after delegation
    if (type !== originalType) {
      event.type = originalType;
    }
  }

  // set the return value to false if the event default
  // got prevented and no other return value exists
  if (returnValue === undefined && event.defaultPrevented) {
    returnValue = false;
  }

  return returnValue;
};


EventBus.prototype.handleError = function(error) {
  return this.fire('error', { error: error }) === false;
};


EventBus.prototype._destroy = function() {
  this._listeners = {};
};

EventBus.prototype._invokeListeners = function(event, args, listener) {

  var returnValue;

  while (listener) {

    // handle stopped propagation
    if (event.cancelBubble) {
      break;
    }

    returnValue = this._invokeListener(event, args, listener);

    listener = listener.next;
  }

  return returnValue;
};

EventBus.prototype._invokeListener = function(event, args, listener) {

  var returnValue;

  try {

    // returning false prevents the default action
    returnValue = invokeFunction(listener.callback, args);

    // stop propagation on return value
    if (returnValue !== undefined) {
      event.returnValue = returnValue;
      event.stopPropagation();
    }

    // prevent default on return false
    if (returnValue === false) {
      event.preventDefault();
    }
  } catch (e) {
    if (!this.handleError(e)) {
      console.error('unhandled error in event listener');
      console.error(e.stack);

      throw e;
    }
  }

  return returnValue;
};

/*
 * Add new listener with a certain priority to the list
 * of listeners (for the given event).
 *
 * The semantics of listener registration / listener execution are
 * first register, first serve: New listeners will always be inserted
 * after existing listeners with the same priority.
 *
 * Example: Inserting two listeners with priority 1000 and 1300
 *
 *    * before: [ 1500, 1500, 1000, 1000 ]
 *    * after: [ 1500, 1500, (new=1300), 1000, 1000, (new=1000) ]
 *
 * @param {string} event
 * @param {Object} listener { priority, callback }
 */
EventBus.prototype._addListener = function(event, newListener) {

  var listener = this._getListeners(event),
      previousListener;

  // no prior listeners
  if (!listener) {
    this._setListeners(event, newListener);

    return;
  }

  // ensure we order listeners by priority from
  // 0 (high) to n > 0 (low)
  while (listener) {

    if (listener.priority < newListener.priority) {

      newListener.next = listener;

      if (previousListener) {
        previousListener.next = newListener;
      } else {
        this._setListeners(event, newListener);
      }

      return;
    }

    previousListener = listener;
    listener = listener.next;
  }

  // add new listener to back
  previousListener.next = newListener;
};


EventBus.prototype._getListeners = function(name) {
  return this._listeners[name];
};

EventBus.prototype._setListeners = function(name, listener) {
  this._listeners[name] = listener;
};

EventBus.prototype._removeListener = function(event, callback) {

  var listener = this._getListeners(event),
      nextListener,
      previousListener,
      listenerCallback;

  if (!callback) {

    // clear listeners
    this._setListeners(event, null);

    return;
  }

  while (listener) {

    nextListener = listener.next;

    listenerCallback = listener.callback;

    if (listenerCallback === callback || listenerCallback[FN_REF] === callback) {
      if (previousListener) {
        previousListener.next = nextListener;
      } else {

        // new first listener
        this._setListeners(event, nextListener);
      }
    }

    previousListener = listener;
    listener = nextListener;
  }
};

/**
 * A event that is emitted via the event bus.
 */
function InternalEvent() { }

InternalEvent.prototype.stopPropagation = function() {
  this.cancelBubble = true;
};

InternalEvent.prototype.preventDefault = function() {
  this.defaultPrevented = true;
};

InternalEvent.prototype.init = function(data) {
  index_esm_assign(this, data || {});
};


/**
 * Invoke function. Be fast...
 *
 * @param {Function} fn
 * @param {Array<Object>} args
 *
 * @return {Any}
 */
function invokeFunction(fn, args) {
  return fn.apply(null, args);
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/util/GraphicsUtil.js
/**
 * SVGs for elements are generated by the {@link GraphicsFactory}.
 *
 * This utility gives quick access to the important semantic
 * parts of an element.
 */

/**
 * Returns the visual part of a diagram element
 *
 * @param {Snap<SVGElement>} gfx
 *
 * @return {Snap<SVGElement>}
 */
function getVisual(gfx) {
  return gfx.childNodes[0];
}

/**
 * Returns the children for a given diagram element.
 *
 * @param {Snap<SVGElement>} gfx
 * @return {Snap<SVGElement>}
 */
function getChildren(gfx) {
  return gfx.parentNode.childNodes[1];
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/util/SvgTransformUtil.js



/**
 * @param {<SVGElement>} element
 * @param {number} x
 * @param {number} y
 * @param {number} angle
 * @param {number} amount
 */
function SvgTransformUtil_transform(gfx, x, y, angle, amount) {
  var translate = createTransform();
  translate.setTranslate(x, y);

  var rotate = createTransform();
  rotate.setRotate(angle || 0, 0, 0);

  var scale = createTransform();
  scale.setScale(amount || 1, amount || 1);

  index_esm_transform(gfx, [ translate, rotate, scale ]);
}


/**
 * @param {SVGElement} element
 * @param {number} x
 * @param {number} y
 */
function SvgTransformUtil_translate(gfx, x, y) {
  var translate = createTransform();
  translate.setTranslate(x, y);

  index_esm_transform(gfx, translate);
}


/**
 * @param {SVGElement} element
 * @param {number} angle
 */
function SvgTransformUtil_rotate(gfx, angle) {
  var rotate = createTransform();
  rotate.setRotate(angle, 0, 0);

  index_esm_transform(gfx, rotate);
}


/**
 * @param {SVGElement} element
 * @param {number} amount
 */
function SvgTransformUtil_scale(gfx, amount) {
  var scale = createTransform();
  scale.setScale(amount, amount);

  index_esm_transform(gfx, scale);
}
// CONCATENATED MODULE: ./node_modules/min-dom/dist/index.esm.js
/**
 * Set attribute `name` to `val`, or get attr `name`.
 *
 * @param {Element} el
 * @param {String} name
 * @param {String} [val]
 * @api public
 */
function dist_index_esm_attr(el, name, val) {
  // get
  if (arguments.length == 2) {
    return el.getAttribute(name);
  }

  // remove
  if (val === null) {
    return el.removeAttribute(name);
  }

  // set
  el.setAttribute(name, val);

  return el;
}

var index_esm_indexOf = [].indexOf;

var indexof = function(arr, obj){
  if (index_esm_indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/**
 * Taken from https://github.com/component/classes
 *
 * Without the component bits.
 */

/**
 * Whitespace regexp.
 */

var index_esm_re = /\s+/;

/**
 * toString reference.
 */

var dist_index_esm_toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

function dist_index_esm_classes(el) {
  return new index_esm_ClassList(el);
}

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function index_esm_ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

index_esm_ClassList.prototype.add = function (name) {
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = indexof(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

index_esm_ClassList.prototype.remove = function (name) {
  if ('[object RegExp]' == dist_index_esm_toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = indexof(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

index_esm_ClassList.prototype.removeMatching = function (re) {
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

index_esm_ClassList.prototype.toggle = function (name, force) {
  // classList
  if (this.list) {
    if ('undefined' !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ('undefined' !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

index_esm_ClassList.prototype.array = function () {
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(index_esm_re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

index_esm_ClassList.prototype.has = index_esm_ClassList.prototype.contains = function (name) {
  return this.list ? this.list.contains(name) : !!~indexof(this.array(), name);
};

/**
 * Remove all children from the given element.
 */
function index_esm_clear(el) {

  var c;

  while (el.childNodes.length) {
    c = el.childNodes[0];
    el.removeChild(c);
  }

  return el;
}

var proto = typeof Element !== 'undefined' ? Element.prototype : {};
var vendor = proto.matches
  || proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

var matchesSelector = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (!el || el.nodeType !== 1) return false;
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] == el) return true;
  }
  return false;
}

/**
 * Closest
 *
 * @param {Element} el
 * @param {String} selector
 * @param {Boolean} checkYourSelf (optional)
 */
function closest (element, selector, checkYourSelf) {
  var currentElem = checkYourSelf ? element : element.parentNode;

  while (currentElem && currentElem.nodeType !== document.DOCUMENT_NODE && currentElem.nodeType !== document.DOCUMENT_FRAGMENT_NODE) {

    if (matchesSelector(currentElem, selector)) {
      return currentElem;
    }

    currentElem = currentElem.parentNode;
  }

  return matchesSelector(currentElem, selector) ? currentElem : null;
}

var index_esm_bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
    index_esm_prefix = index_esm_bind !== 'addEventListener' ? 'on' : '';

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

var bind_1 = function(el, type, fn, capture){
  el[index_esm_bind](index_esm_prefix + type, fn, capture || false);
  return fn;
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

var unbind_1 = function(el, type, fn, capture){
  el[unbind](index_esm_prefix + type, fn, capture || false);
  return fn;
};

var componentEvent = {
	bind: bind_1,
	unbind: unbind_1
};

/**
 * Module dependencies.
 */

/**
 * Delegate event `type` to `selector`
 * and invoke `fn(e)`. A callback function
 * is returned which may be passed to `.unbind()`.
 *
 * @param {Element} el
 * @param {String} selector
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

// Some events don't bubble, so we want to bind to the capture phase instead
// when delegating.
var forceCaptureEvents = ['focus', 'blur'];

function bind$1(el, selector, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }

  return componentEvent.bind(el, type, function (e) {
    var target = e.target || e.srcElement;
    e.delegateTarget = closest(target, selector, true, el);
    if (e.delegateTarget) {
      fn.call(el, e);
    }
  }, capture);
}

/**
 * Unbind event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */
function unbind$1(el, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }

  return componentEvent.unbind(el, type, fn, capture);
}

var delegate = {
  bind: bind$1,
  unbind: unbind$1
};

/**
 * Expose `parse`.
 */

var domify = dist_index_esm_parse;

/**
 * Tests for browser support.
 */

var innerHTMLBug = false;
var bugTestDiv;
if (typeof document !== 'undefined') {
  bugTestDiv = document.createElement('div');
  // Setup
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  // Make sure that link elements get serialized correctly by innerHTML
  // This requires a wrapper element in IE
  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
  bugTestDiv = undefined;
}

/**
 * Wrap map from jquery.
 */

var index_esm_map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
};

index_esm_map.td =
index_esm_map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

index_esm_map.option =
index_esm_map.optgroup = [1, '<select multiple="multiple">', '</select>'];

index_esm_map.thead =
index_esm_map.tbody =
index_esm_map.colgroup =
index_esm_map.caption =
index_esm_map.tfoot = [1, '<table>', '</table>'];

index_esm_map.polyline =
index_esm_map.ellipse =
index_esm_map.polygon =
index_esm_map.circle =
index_esm_map.text =
index_esm_map.line =
index_esm_map.path =
index_esm_map.rect =
index_esm_map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function dist_index_esm_parse(html, doc) {
  if ('string' != typeof html) throw new TypeError('String expected');

  // default to the global `document` object
  if (!doc) doc = document;

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = index_esm_map[tag] || index_esm_map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}

function query(selector, el) {
  el = el || document;

  return el.querySelector(selector);
}

function index_esm_all(selector, el) {
  el = el || document;

  return el.querySelectorAll(selector);
}

function index_esm_remove(el) {
  el.parentNode && el.parentNode.removeChild(el);
}



// CONCATENATED MODULE: ./node_modules/diagram-js/lib/core/GraphicsFactory.js












/**
 * A factory that creates graphical elements
 *
 * @param {EventBus} eventBus
 * @param {ElementRegistry} elementRegistry
 */
function GraphicsFactory(eventBus, elementRegistry) {
  this._eventBus = eventBus;
  this._elementRegistry = elementRegistry;
}

GraphicsFactory.$inject = [ 'eventBus' , 'elementRegistry' ];


GraphicsFactory.prototype._getChildrenContainer = function(element) {

  var gfx = this._elementRegistry.getGraphics(element);

  var childrenGfx;

  // root element
  if (!element.parent) {
    childrenGfx = gfx;
  } else {
    childrenGfx = getChildren(gfx);
    if (!childrenGfx) {
      childrenGfx = index_esm_create('g');
      index_esm_classes(childrenGfx).add('djs-children');

      index_esm_append(gfx.parentNode, childrenGfx);
    }
  }

  return childrenGfx;
};

/**
 * Clears the graphical representation of the element and returns the
 * cleared visual (the <g class="djs-visual" /> element).
 */
GraphicsFactory.prototype._clear = function(gfx) {
  var visual = getVisual(gfx);

  index_esm_clear(visual);

  return visual;
};

/**
 * Creates a gfx container for shapes and connections
 *
 * The layout is as follows:
 *
 * <g class="djs-group">
 *
 *   <!-- the gfx -->
 *   <g class="djs-element djs-(shape|connection|frame)">
 *     <g class="djs-visual">
 *       <!-- the renderer draws in here -->
 *     </g>
 *
 *     <!-- extensions (overlays, click box, ...) goes here
 *   </g>
 *
 *   <!-- the gfx child nodes -->
 *   <g class="djs-children"></g>
 * </g>
 *
 * @param {string} type the type of the element, i.e. shape | connection
 * @param {SVGElement} [childrenGfx]
 * @param {number} [parentIndex] position to create container in parent
 * @param {boolean} [isFrame] is frame element
 *
 * @return {SVGElement}
 */
GraphicsFactory.prototype._createContainer = function(
    type, childrenGfx, parentIndex, isFrame
) {
  var outerGfx = index_esm_create('g');
  index_esm_classes(outerGfx).add('djs-group');

  // insert node at position
  if (typeof parentIndex !== 'undefined') {
    GraphicsFactory_prependTo(outerGfx, childrenGfx, childrenGfx.childNodes[parentIndex]);
  } else {
    index_esm_append(childrenGfx, outerGfx);
  }

  var gfx = index_esm_create('g');
  index_esm_classes(gfx).add('djs-element');
  index_esm_classes(gfx).add('djs-' + type);

  if (isFrame) {
    index_esm_classes(gfx).add('djs-frame');
  }

  index_esm_append(outerGfx, gfx);

  // create visual
  var visual = index_esm_create('g');
  index_esm_classes(visual).add('djs-visual');

  index_esm_append(gfx, visual);

  return gfx;
};

GraphicsFactory.prototype.create = function(type, element, parentIndex) {
  var childrenGfx = this._getChildrenContainer(element.parent);
  return this._createContainer(type, childrenGfx, parentIndex, isFrameElement(element));
};

GraphicsFactory.prototype.updateContainments = function(elements) {

  var self = this,
      elementRegistry = this._elementRegistry,
      parents;

  parents = reduce(elements, function(map, e) {

    if (e.parent) {
      map[e.parent.id] = e.parent;
    }

    return map;
  }, {});

  // update all parents of changed and reorganized their children
  // in the correct order (as indicated in our model)
  forEach(parents, function(parent) {

    var children = parent.children;

    if (!children) {
      return;
    }

    var childrenGfx = self._getChildrenContainer(parent);

    forEach(children.slice().reverse(), function(child) {
      var childGfx = elementRegistry.getGraphics(child);

      GraphicsFactory_prependTo(childGfx.parentNode, childrenGfx);
    });
  });
};

GraphicsFactory.prototype.drawShape = function(visual, element) {
  var eventBus = this._eventBus;

  return eventBus.fire('render.shape', { gfx: visual, element: element });
};

GraphicsFactory.prototype.getShapePath = function(element) {
  var eventBus = this._eventBus;

  return eventBus.fire('render.getShapePath', element);
};

GraphicsFactory.prototype.drawConnection = function(visual, element) {
  var eventBus = this._eventBus;

  return eventBus.fire('render.connection', { gfx: visual, element: element });
};

GraphicsFactory.prototype.getConnectionPath = function(waypoints) {
  var eventBus = this._eventBus;

  return eventBus.fire('render.getConnectionPath', waypoints);
};

GraphicsFactory.prototype.update = function(type, element, gfx) {

  // do NOT update root element
  if (!element.parent) {
    return;
  }

  var visual = this._clear(gfx);

  // redraw
  if (type === 'shape') {
    this.drawShape(visual, element);

    // update positioning
    SvgTransformUtil_translate(gfx, element.x, element.y);
  } else
  if (type === 'connection') {
    this.drawConnection(visual, element);
  } else {
    throw new Error('unknown type: ' + type);
  }

  if (element.hidden) {
    index_esm_attr(gfx, 'display', 'none');
  } else {
    index_esm_attr(gfx, 'display', 'block');
  }
};

GraphicsFactory.prototype.remove = function(element) {
  var gfx = this._elementRegistry.getGraphics(element);

  // remove
  remove(gfx.parentNode);
};


// helpers //////////

function GraphicsFactory_prependTo(newNode, parentNode, siblingNode) {
  var node = siblingNode || parentNode.firstChild;

  // do not prepend node to itself to prevent IE from crashing
  // https://github.com/bpmn-io/bpmn-js/issues/746
  if (newNode === node) {
    return;
  }

  parentNode.insertBefore(newNode, node);
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/core/index.js








/* harmony default export */ var core = ({
  __depends__: [ draw ],
  __init__: [ 'canvas' ],
  canvas: [ 'type', Canvas ],
  elementRegistry: [ 'type', ElementRegistry ],
  elementFactory: [ 'type', ElementFactory ],
  eventBus: [ 'type', EventBus ],
  graphicsFactory: [ 'type', GraphicsFactory ]
});
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/Diagram.js





/**
 * Bootstrap an injector from a list of modules, instantiating a number of default components
 *
 * @ignore
 * @param {Array<didi.Module>} bootstrapModules
 *
 * @return {didi.Injector} a injector to use to access the components
 */
function bootstrap(bootstrapModules) {

  var modules = [],
      components = [];

  function hasModule(m) {
    return modules.indexOf(m) >= 0;
  }

  function addModule(m) {
    modules.push(m);
  }

  function visit(m) {
    if (hasModule(m)) {
      return;
    }

    (m.__depends__ || []).forEach(visit);

    if (hasModule(m)) {
      return;
    }

    addModule(m);

    (m.__init__ || []).forEach(function(c) {
      components.push(c);
    });
  }

  bootstrapModules.forEach(visit);

  var injector = new Injector(modules);

  components.forEach(function(c) {

    try {

      // eagerly resolve component (fn or string)
      injector[typeof c === 'string' ? 'get' : 'invoke'](c);
    } catch (e) {
      console.error('Failed to instantiate component');
      console.error(e.stack);

      throw e;
    }
  });

  return injector;
}

/**
 * Creates an injector from passed options.
 *
 * @ignore
 * @param  {Object} options
 * @return {didi.Injector}
 */
function createInjector(options) {

  options = options || {};

  var configModule = {
    'config': ['value', options]
  };

  var modules = [ configModule, core ].concat(options.modules || []);

  return bootstrap(modules);
}


/**
 * The main diagram-js entry point that bootstraps the diagram with the given
 * configuration.
 *
 * To register extensions with the diagram, pass them as Array<didi.Module> to the constructor.
 *
 * @class djs.Diagram
 * @memberOf djs
 * @constructor
 *
 * @example
 *
 * <caption>Creating a plug-in that logs whenever a shape is added to the canvas.</caption>
 *
 * // plug-in implemenentation
 * function MyLoggingPlugin(eventBus) {
 *   eventBus.on('shape.added', function(event) {
 *     console.log('shape ', event.shape, ' was added to the diagram');
 *   });
 * }
 *
 * // export as module
 * export default {
 *   __init__: [ 'myLoggingPlugin' ],
 *     myLoggingPlugin: [ 'type', MyLoggingPlugin ]
 * };
 *
 *
 * // instantiate the diagram with the new plug-in
 *
 * import MyLoggingModule from 'path-to-my-logging-plugin';
 *
 * var diagram = new Diagram({
 *   modules: [
 *     MyLoggingModule
 *   ]
 * });
 *
 * diagram.invoke([ 'canvas', function(canvas) {
 *   // add shape to drawing canvas
 *   canvas.addShape({ x: 10, y: 10 });
 * });
 *
 * // 'shape ... was added to the diagram' logged to console
 *
 * @param {Object} options
 * @param {Array<didi.Module>} [options.modules] external modules to instantiate with the diagram
 * @param {didi.Injector} [injector] an (optional) injector to bootstrap the diagram with
 */
function Diagram(options, injector) {

  // create injector unless explicitly specified
  this.injector = injector = injector || createInjector(options);

  // API

  /**
   * Resolves a diagram service
   *
   * @method Diagram#get
   *
   * @param {string} name the name of the diagram service to be retrieved
   * @param {boolean} [strict=true] if false, resolve missing services to null
   */
  this.get = injector.get;

  /**
   * Executes a function into which diagram services are injected
   *
   * @method Diagram#invoke
   *
   * @param {Function|Object[]} fn the function to resolve
   * @param {Object} locals a number of locals to use to resolve certain dependencies
   */
  this.invoke = injector.invoke;

  // init

  // indicate via event


  /**
   * An event indicating that all plug-ins are loaded.
   *
   * Use this event to fire other events to interested plug-ins
   *
   * @memberOf Diagram
   *
   * @event diagram.init
   *
   * @example
   *
   * eventBus.on('diagram.init', function() {
   *   eventBus.fire('my-custom-event', { foo: 'BAR' });
   * });
   *
   * @type {Object}
   */
  this.get('eventBus').fire('diagram.init');
}


/**
 * Destroys the diagram
 *
 * @method  Diagram#destroy
 */
Diagram.prototype.destroy = function() {
  this.get('eventBus').fire('diagram.destroy');
};

/**
 * Clear the diagram, removing all contents.
 */
Diagram.prototype.clear = function() {
  this.get('eventBus').fire('diagram.clear');
};

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/align-elements/AlignElements.js


function last(arr) {
  return arr && arr[arr.length - 1];
}

function sortTopOrMiddle(element) {
  return element.y;
}

function sortLeftOrCenter(element) {
  return element.x;
}

/**
 * Sorting functions for different types of alignment
 *
 * @type {Object}
 *
 * @return {Function}
 */
var ALIGNMENT_SORTING = {
  left: sortLeftOrCenter,
  center: sortLeftOrCenter,
  right: function(element) {
    return element.x + element.width;
  },
  top: sortTopOrMiddle,
  middle: sortTopOrMiddle,
  bottom: function(element) {
    return element.y + element.height;
  }
};


function AlignElements(modeling) {
  this._modeling = modeling;
}

AlignElements.$inject = [ 'modeling' ];


/**
 * Get the relevant "axis" and "dimension" related to the current type of alignment
 *
 * @param  {string} type left|right|center|top|bottom|middle
 *
 * @return {Object} { axis, dimension }
 */
AlignElements.prototype._getOrientationDetails = function(type) {
  var vertical = [ 'top', 'bottom', 'middle' ],
      axis = 'x',
      dimension = 'width';

  if (vertical.indexOf(type) !== -1) {
    axis = 'y';
    dimension = 'height';
  }

  return {
    axis: axis,
    dimension: dimension
  };
};

AlignElements.prototype._isType = function(type, types) {
  return types.indexOf(type) !== -1;
};

/**
 * Get a point on the relevant axis where elements should align to
 *
 * @param  {string} type left|right|center|top|bottom|middle
 * @param  {Array} sortedElements
 *
 * @return {Object}
 */
AlignElements.prototype._alignmentPosition = function(type, sortedElements) {
  var orientation = this._getOrientationDetails(type),
      axis = orientation.axis,
      dimension = orientation.dimension,
      alignment = {},
      centers = {},
      hasSharedCenters = false,
      centeredElements,
      firstElement,
      lastElement;

  function getMiddleOrTop(first, last) {
    return Math.round((first[axis] + last[axis] + last[dimension]) / 2);
  }

  if (this._isType(type, [ 'left', 'top' ])) {
    alignment[type] = sortedElements[0][axis];

  } else if (this._isType(type, [ 'right', 'bottom' ])) {
    lastElement = last(sortedElements);

    alignment[type] = lastElement[axis] + lastElement[dimension];

  } else if (this._isType(type, [ 'center', 'middle' ])) {

    // check if there is a center shared by more than one shape
    // if not, just take the middle of the range
    forEach(sortedElements, function(element) {
      var center = element[axis] + Math.round(element[dimension] / 2);

      if (centers[center]) {
        centers[center].elements.push(element);
      } else {
        centers[center] = {
          elements: [ element ],
          center: center
        };
      }
    });

    centeredElements = sortBy(centers, function(center) {
      if (center.elements.length > 1) {
        hasSharedCenters = true;
      }

      return center.elements.length;
    });

    if (hasSharedCenters) {
      alignment[type] = last(centeredElements).center;

      return alignment;
    }

    firstElement = sortedElements[0];

    sortedElements = sortBy(sortedElements, function(element) {
      return element[axis] + element[dimension];
    });

    lastElement = last(sortedElements);

    alignment[type] = getMiddleOrTop(firstElement, lastElement);
  }

  return alignment;
};

/**
 * Executes the alignment of a selection of elements
 *
 * @param  {Array} elements [description]
 * @param  {string} type left|right|center|top|bottom|middle
 */
AlignElements.prototype.trigger = function(elements, type) {
  var modeling = this._modeling;

  var filteredElements = index_esm_filter(elements, function(element) {
    return !(element.waypoints || element.host || element.labelTarget);
  });

  var sortFn = ALIGNMENT_SORTING[type];

  var sortedElements = sortBy(filteredElements, sortFn);

  var alignment = this._alignmentPosition(type, sortedElements);

  modeling.alignElements(sortedElements, alignment);
};

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/align-elements/index.js


/* harmony default export */ var align_elements = ({
  __init__: [ 'alignElements' ],
  alignElements: [ 'type', AlignElements ]
});

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/util/Event.js
function __stopPropagation(event) {
  if (!event || typeof event.stopPropagation !== 'function') {
    return;
  }

  event.stopPropagation();
}


function getOriginal(event) {
  return event.originalEvent || event.srcEvent;
}


function stopPropagation(event, immediate) {
  __stopPropagation(event, immediate);
  __stopPropagation(getOriginal(event), immediate);
}


function toPoint(event) {

  if (event.pointers && event.pointers.length) {
    event = event.pointers[0];
  }

  if (event.touches && event.touches.length) {
    event = event.touches[0];
  }

  return event ? {
    x: event.clientX,
    y: event.clientY
  } : null;
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/hover-fix/HoverFix.js




var HIGH_PRIORITY = 1500;


/**
 * Browsers may swallow certain events (hover, out ...) if users are to
 * fast with the mouse.
 *
 * @see http://stackoverflow.com/questions/7448468/why-cant-i-reliably-capture-a-mouseout-event
 *
 * The fix implemented in this component ensure that we
 *
 * 1) have a hover state after a successful drag.move event
 * 2) have an out event when dragging leaves an element
 *
 * @param {ElementRegistry} elementRegistry
 * @param {EventBus} eventBus
 * @param {Injector} injector
 */
function HoverFix(elementRegistry, eventBus, injector) {

  var self = this;

  var dragging = injector.get('dragging', false);

  /**
   * Make sure we are god damn hovering!
   *
   * @param {Event} dragging event
   */
  function ensureHover(event) {

    if (event.hover) {
      return;
    }

    var originalEvent = event.originalEvent;

    var gfx = self._findTargetGfx(originalEvent);

    var element = gfx && elementRegistry.get(gfx);

    if (gfx && element) {

      // 1) cancel current mousemove
      event.stopPropagation();

      // 2) emit fake hover for new target
      dragging.hover({ element: element, gfx: gfx });

      // 3) re-trigger move event
      dragging.move(originalEvent);
    }
  }


  if (dragging) {

    /**
     * We wait for a specific sequence of events before
     * emitting a fake drag.hover event.
     *
     * Event Sequence:
     *
     * drag.start
     * drag.move >> ensure we are hovering
     */
    eventBus.on('drag.start', function(event) {

      eventBus.once('drag.move', HIGH_PRIORITY, function(event) {

        ensureHover(event);

      });

    });
  }


  /**
   * We make sure that element.out is always fired, even if the
   * browser swallows an element.out event.
   *
   * Event sequence:
   *
   * element.hover
   * (element.out >> sometimes swallowed)
   * element.hover >> ensure we fired element.out
   */
  (function() {
    var hoverGfx;
    var hover;

    eventBus.on('element.hover', function(event) {

      // (1) remember current hover element
      hoverGfx = event.gfx;
      hover = event.element;
    });

    eventBus.on('element.hover', HIGH_PRIORITY, function(event) {

      // (3) am I on an element still?
      if (hover) {

        // (4) that is a problem, gotta "simulate the out"
        eventBus.fire('element.out', {
          element: hover,
          gfx: hoverGfx
        });
      }

    });

    eventBus.on('element.out', function() {

      // (2) unset hover state if we correctly outed us *GG*
      hoverGfx = null;
      hover = null;
    });

  })();

  this._findTargetGfx = function(event) {
    var position,
        target;

    if (!(event instanceof MouseEvent)) {
      return;
    }

    position = toPoint(event);

    // damn expensive operation, ouch!
    target = document.elementFromPoint(position.x, position.y);

    return getGfx(target);
  };

}

HoverFix.$inject = [
  'elementRegistry',
  'eventBus',
  'injector'
];


// helpers /////////////////////

function getGfx(target) {
  return closest(target, 'svg, .djs-element', true);
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/hover-fix/index.js


/* harmony default export */ var hover_fix = ({
  __init__: [
    'hoverFix'
  ],
  hoverFix: [ 'type', HoverFix ],
});
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/util/Platform.js
function isMac() {
  return (/mac/i).test(navigator.platform);
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/util/Mouse.js







function isPrimaryButton(event) {

  // button === 0 -> left áka primary mouse button
  return !(getOriginal(event) || event).button;
}

function hasPrimaryModifier(event) {
  var originalEvent = getOriginal(event) || event;

  if (!isPrimaryButton(event)) {
    return false;
  }

  // Use alt as primary modifier key for mac OS
  if (isMac()) {
    return originalEvent.metaKey;
  } else {
    return originalEvent.ctrlKey;
  }
}


function hasSecondaryModifier(event) {
  var originalEvent = getOriginal(event) || event;

  return isPrimaryButton(event) && originalEvent.shiftKey;
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/interaction-events/InteractionEvents.js










function allowAll(e) { return true; }

var LOW_PRIORITY = 500;


/**
 * A plugin that provides interaction events for diagram elements.
 *
 * It emits the following events:
 *
 *   * element.click
 *   * element.contextmenu
 *   * element.dblclick
 *   * element.hover
 *   * element.mousedown
 *   * element.mousemove
 *   * element.mouseup
 *   * element.out
 *
 * Each event is a tuple { element, gfx, originalEvent }.
 *
 * Canceling the event via Event#preventDefault()
 * prevents the original DOM operation.
 *
 * @param {EventBus} eventBus
 */
function InteractionEvents(eventBus, elementRegistry, styles) {

  var self = this;

  /**
   * Fire an interaction event.
   *
   * @param {string} type local event name, e.g. element.click.
   * @param {DOMEvent} event native event
   * @param {djs.model.Base} [element] the diagram element to emit the event on;
   *                                   defaults to the event target
   */
  function fire(type, event, element) {

    if (isIgnored(type, event)) {
      return;
    }

    var target, gfx, returnValue;

    if (!element) {
      target = event.delegateTarget || event.target;

      if (target) {
        gfx = target;
        element = elementRegistry.get(gfx);
      }
    } else {
      gfx = elementRegistry.getGraphics(element);
    }

    if (!gfx || !element) {
      return;
    }

    returnValue = eventBus.fire(type, {
      element: element,
      gfx: gfx,
      originalEvent: event
    });

    if (returnValue === false) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  // TODO(nikku): document this
  var handlers = {};

  function mouseHandler(localEventName) {
    return handlers[localEventName];
  }

  function isIgnored(localEventName, event) {

    var filter = ignoredFilters[localEventName] || isPrimaryButton;

    // only react on left mouse button interactions
    // except for interaction events that are enabled
    // for secundary mouse button
    return !filter(event);
  }

  var bindings = {
    click: 'element.click',
    contextmenu: 'element.contextmenu',
    dblclick: 'element.dblclick',
    mousedown: 'element.mousedown',
    mousemove: 'element.mousemove',
    mouseover: 'element.hover',
    mouseout: 'element.out',
    mouseup: 'element.mouseup',
  };

  var ignoredFilters = {
    'element.contextmenu': allowAll
  };


  // manual event trigger //////////

  /**
   * Trigger an interaction event (based on a native dom event)
   * on the target shape or connection.
   *
   * @param {string} eventName the name of the triggered DOM event
   * @param {MouseEvent} event
   * @param {djs.model.Base} targetElement
   */
  function triggerMouseEvent(eventName, event, targetElement) {

    // i.e. element.mousedown...
    var localEventName = bindings[eventName];

    if (!localEventName) {
      throw new Error('unmapped DOM event name <' + eventName + '>');
    }

    return fire(localEventName, event, targetElement);
  }


  var ELEMENT_SELECTOR = 'svg, .djs-element';

  // event handling ///////

  function registerEvent(node, event, localEvent, ignoredFilter) {

    var handler = handlers[localEvent] = function(event) {
      fire(localEvent, event);
    };

    if (ignoredFilter) {
      ignoredFilters[localEvent] = ignoredFilter;
    }

    handler.$delegate = delegate.bind(node, ELEMENT_SELECTOR, event, handler);
  }

  function unregisterEvent(node, event, localEvent) {

    var handler = mouseHandler(localEvent);

    if (!handler) {
      return;
    }

    delegate.unbind(node, event, handler.$delegate);
  }

  function registerEvents(svg) {
    forEach(bindings, function(val, key) {
      registerEvent(svg, key, val);
    });
  }

  function unregisterEvents(svg) {
    forEach(bindings, function(val, key) {
      unregisterEvent(svg, key, val);
    });
  }

  eventBus.on('canvas.destroy', function(event) {
    unregisterEvents(event.svg);
  });

  eventBus.on('canvas.init', function(event) {
    registerEvents(event.svg);
  });


  // hit box updating ////////////////

  eventBus.on([ 'shape.added', 'connection.added' ], function(event) {
    var element = event.element,
        gfx = event.gfx;

    eventBus.fire('interactionEvents.createHit', { element: element, gfx: gfx });
  });

  // Update djs-hit on change.
  // A low priortity is necessary, because djs-hit of labels has to be updated
  // after the label bounds have been updated in the renderer.
  eventBus.on([
    'shape.changed',
    'connection.changed'
  ], LOW_PRIORITY, function(event) {

    var element = event.element,
        gfx = event.gfx;

    eventBus.fire('interactionEvents.updateHit', { element: element, gfx: gfx });
  });

  eventBus.on('interactionEvents.createHit', LOW_PRIORITY, function(event) {
    var element = event.element,
        gfx = event.gfx;

    self.createDefaultHit(element, gfx);
  });

  eventBus.on('interactionEvents.updateHit', function(event) {
    var element = event.element,
        gfx = event.gfx;

    self.updateDefaultHit(element, gfx);
  });


  // hit styles ////////////

  var STROKE_HIT_STYLE = createHitStyle('djs-hit djs-hit-stroke');

  var CLICK_STROKE_HIT_STYLE = createHitStyle('djs-hit djs-hit-click-stroke');

  var ALL_HIT_STYLE = createHitStyle('djs-hit djs-hit-all');

  var HIT_TYPES = {
    'all': ALL_HIT_STYLE,
    'click-stroke': CLICK_STROKE_HIT_STYLE,
    'stroke': STROKE_HIT_STYLE
  };

  function createHitStyle(classNames, attrs) {

    attrs = index_esm_assign({
      stroke: 'white',
      strokeWidth: 15
    }, attrs || {});

    return styles.cls(classNames, [ 'no-fill', 'no-border' ], attrs);
  }


  // style helpers ///////////////

  function applyStyle(hit, type) {

    var attrs = HIT_TYPES[type];

    if (!attrs) {
      throw new Error('invalid hit type <' + type + '>');
    }

    index_esm_attr(hit, attrs);

    return hit;
  }

  function appendHit(gfx, hit) {
    index_esm_append(gfx, hit);
  }


  // API

  /**
   * Remove hints on the given graphics.
   *
   * @param {SVGElement} gfx
   */
  this.removeHits = function(gfx) {
    var hits = index_esm_all('.djs-hit', gfx);

    forEach(hits, remove);
  };

  /**
   * Create default hit for the given element.
   *
   * @param {djs.model.Base} element
   * @param {SVGElement} gfx
   *
   * @return {SVGElement} created hit
   */
  this.createDefaultHit = function(element, gfx) {
    var waypoints = element.waypoints,
        isFrame = element.isFrame,
        boxType;

    if (waypoints) {
      return this.createWaypointsHit(gfx, waypoints);
    } else {

      boxType = isFrame ? 'stroke' : 'all';

      return this.createBoxHit(gfx, boxType, {
        width: element.width,
        height: element.height
      });
    }
  };

  /**
   * Create hits for the given waypoints.
   *
   * @param {SVGElement} gfx
   * @param {Array<Point>} waypoints
   *
   * @return {SVGElement}
   */
  this.createWaypointsHit = function(gfx, waypoints) {

    var hit = createLine(waypoints);

    applyStyle(hit, 'stroke');

    appendHit(gfx, hit);

    return hit;
  };

  /**
   * Create hits for a box.
   *
   * @param {SVGElement} gfx
   * @param {string} hitType
   * @param {Object} attrs
   *
   * @return {SVGElement}
   */
  this.createBoxHit = function(gfx, type, attrs) {

    attrs = index_esm_assign({
      x: 0,
      y: 0
    }, attrs);

    var hit = index_esm_create('rect');

    applyStyle(hit, type);

    index_esm_attr(hit, attrs);

    appendHit(gfx, hit);

    return hit;
  };

  /**
   * Update default hit of the element.
   *
   * @param  {djs.model.Base} element
   * @param  {SVGElement} gfx
   *
   * @return {SVGElement} updated hit
   */
  this.updateDefaultHit = function(element, gfx) {

    var hit = query('.djs-hit', gfx);

    if (!hit) {
      return;
    }

    if (element.waypoints) {
      updateLine(hit, element.waypoints);
    } else {
      index_esm_attr(hit, {
        width: element.width,
        height: element.height
      });
    }

    return hit;
  };

  this.fire = fire;

  this.triggerMouseEvent = triggerMouseEvent;

  this.mouseHandler = mouseHandler;

  this.registerEvent = registerEvent;
  this.unregisterEvent = unregisterEvent;
}


InteractionEvents.$inject = [
  'eventBus',
  'elementRegistry',
  'styles'
];


/**
 * An event indicating that the mouse hovered over an element
 *
 * @event element.hover
 *
 * @type {Object}
 * @property {djs.model.Base} element
 * @property {SVGElement} gfx
 * @property {Event} originalEvent
 */

/**
 * An event indicating that the mouse has left an element
 *
 * @event element.out
 *
 * @type {Object}
 * @property {djs.model.Base} element
 * @property {SVGElement} gfx
 * @property {Event} originalEvent
 */

/**
 * An event indicating that the mouse has clicked an element
 *
 * @event element.click
 *
 * @type {Object}
 * @property {djs.model.Base} element
 * @property {SVGElement} gfx
 * @property {Event} originalEvent
 */

/**
 * An event indicating that the mouse has double clicked an element
 *
 * @event element.dblclick
 *
 * @type {Object}
 * @property {djs.model.Base} element
 * @property {SVGElement} gfx
 * @property {Event} originalEvent
 */

/**
 * An event indicating that the mouse has gone down on an element.
 *
 * @event element.mousedown
 *
 * @type {Object}
 * @property {djs.model.Base} element
 * @property {SVGElement} gfx
 * @property {Event} originalEvent
 */

/**
 * An event indicating that the mouse has gone up on an element.
 *
 * @event element.mouseup
 *
 * @type {Object}
 * @property {djs.model.Base} element
 * @property {SVGElement} gfx
 * @property {Event} originalEvent
 */

/**
 * An event indicating that the context menu action is triggered
 * via mouse or touch controls.
 *
 * @event element.contextmenu
 *
 * @type {Object}
 * @property {djs.model.Base} element
 * @property {SVGElement} gfx
 * @property {Event} originalEvent
 */
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/interaction-events/index.js


/* harmony default export */ var interaction_events = ({
  __init__: [ 'interactionEvents' ],
  interactionEvents: [ 'type', InteractionEvents ]
});
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/outline/Outline.js


var Outline_LOW_PRIORITY = 500;








/**
 * @class
 *
 * A plugin that adds an outline to shapes and connections that may be activated and styled
 * via CSS classes.
 *
 * @param {EventBus} eventBus
 * @param {Styles} styles
 * @param {ElementRegistry} elementRegistry
 */
function Outline(eventBus, styles, elementRegistry) {

  this.offset = 6;

  var OUTLINE_STYLE = styles.cls('djs-outline', [ 'no-fill' ]);

  var self = this;

  function createOutline(gfx, bounds) {
    var outline = index_esm_create('rect');

    index_esm_attr(outline, index_esm_assign({
      x: 10,
      y: 10,
      width: 100,
      height: 100
    }, OUTLINE_STYLE));

    index_esm_append(gfx, outline);

    return outline;
  }

  // A low priortity is necessary, because outlines of labels have to be updated
  // after the label bounds have been updated in the renderer.
  eventBus.on([ 'shape.added', 'shape.changed' ], Outline_LOW_PRIORITY, function(event) {
    var element = event.element,
        gfx = event.gfx;

    var outline = query('.djs-outline', gfx);

    if (!outline) {
      outline = createOutline(gfx, element);
    }

    self.updateShapeOutline(outline, element);
  });

  eventBus.on([ 'connection.added', 'connection.changed' ], function(event) {
    var element = event.element,
        gfx = event.gfx;

    var outline = query('.djs-outline', gfx);

    if (!outline) {
      outline = createOutline(gfx, element);
    }

    self.updateConnectionOutline(outline, element);
  });
}


/**
 * Updates the outline of a shape respecting the dimension of the
 * element and an outline offset.
 *
 * @param  {SVGElement} outline
 * @param  {djs.model.Base} element
 */
Outline.prototype.updateShapeOutline = function(outline, element) {

  index_esm_attr(outline, {
    x: -this.offset,
    y: -this.offset,
    width: element.width + this.offset * 2,
    height: element.height + this.offset * 2
  });

};


/**
 * Updates the outline of a connection respecting the bounding box of
 * the connection and an outline offset.
 *
 * @param  {SVGElement} outline
 * @param  {djs.model.Base} element
 */
Outline.prototype.updateConnectionOutline = function(outline, connection) {

  var bbox = getBBox(connection);

  index_esm_attr(outline, {
    x: bbox.x - this.offset,
    y: bbox.y - this.offset,
    width: bbox.width + this.offset * 2,
    height: bbox.height + this.offset * 2
  });

};


Outline.$inject = ['eventBus', 'styles', 'elementRegistry'];
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/outline/index.js


/* harmony default export */ var features_outline = ({
  __init__: [ 'outline' ],
  outline: [ 'type', Outline ]
});
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/selection/Selection.js



/**
 * A service that offers the current selection in a diagram.
 * Offers the api to control the selection, too.
 *
 * @class
 *
 * @param {EventBus} eventBus the event bus
 */
function Selection(eventBus) {

  this._eventBus = eventBus;

  this._selectedElements = [];

  var self = this;

  eventBus.on([ 'shape.remove', 'connection.remove' ], function(e) {
    var element = e.element;
    self.deselect(element);
  });

  eventBus.on([ 'diagram.clear' ], function(e) {
    self.select(null);
  });
}

Selection.$inject = [ 'eventBus' ];


Selection.prototype.deselect = function(element) {
  var selectedElements = this._selectedElements;

  var idx = selectedElements.indexOf(element);

  if (idx !== -1) {
    var oldSelection = selectedElements.slice();

    selectedElements.splice(idx, 1);

    this._eventBus.fire('selection.changed', { oldSelection: oldSelection, newSelection: selectedElements });
  }
};


Selection.prototype.get = function() {
  return this._selectedElements;
};

Selection.prototype.isSelected = function(element) {
  return this._selectedElements.indexOf(element) !== -1;
};


/**
 * This method selects one or more elements on the diagram.
 *
 * By passing an additional add parameter you can decide whether or not the element(s)
 * should be added to the already existing selection or not.
 *
 * @method Selection#select
 *
 * @param  {Object|Object[]} elements element or array of elements to be selected
 * @param  {boolean} [add] whether the element(s) should be appended to the current selection, defaults to false
 */
Selection.prototype.select = function(elements, add) {
  var selectedElements = this._selectedElements,
      oldSelection = selectedElements.slice();

  if (!index_esm_isArray(elements)) {
    elements = elements ? [ elements ] : [];
  }

  // selection may be cleared by passing an empty array or null
  // to the method
  if (add) {
    forEach(elements, function(element) {
      if (selectedElements.indexOf(element) !== -1) {

        // already selected
        return;
      } else {
        selectedElements.push(element);
      }
    });
  } else {
    this._selectedElements = selectedElements = elements.slice();
  }

  this._eventBus.fire('selection.changed', { oldSelection: oldSelection, newSelection: selectedElements });
};

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/selection/SelectionVisuals.js


var MARKER_HOVER = 'hover',
    MARKER_SELECTED = 'selected';


/**
 * A plugin that adds a visible selection UI to shapes and connections
 * by appending the <code>hover</code> and <code>selected</code> classes to them.
 *
 * @class
 *
 * Makes elements selectable, too.
 *
 * @param {EventBus} events
 * @param {SelectionService} selection
 * @param {Canvas} canvas
 */
function SelectionVisuals(events, canvas, selection, styles) {

  this._multiSelectionBox = null;

  function addMarker(e, cls) {
    canvas.addMarker(e, cls);
  }

  function removeMarker(e, cls) {
    canvas.removeMarker(e, cls);
  }

  events.on('element.hover', function(event) {
    addMarker(event.element, MARKER_HOVER);
  });

  events.on('element.out', function(event) {
    removeMarker(event.element, MARKER_HOVER);
  });

  events.on('selection.changed', function(event) {

    function deselect(s) {
      removeMarker(s, MARKER_SELECTED);
    }

    function select(s) {
      addMarker(s, MARKER_SELECTED);
    }

    var oldSelection = event.oldSelection,
        newSelection = event.newSelection;

    forEach(oldSelection, function(e) {
      if (newSelection.indexOf(e) === -1) {
        deselect(e);
      }
    });

    forEach(newSelection, function(e) {
      if (oldSelection.indexOf(e) === -1) {
        select(e);
      }
    });
  });
}

SelectionVisuals.$inject = [
  'eventBus',
  'canvas',
  'selection',
  'styles'
];
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/selection/SelectionBehavior.js





function SelectionBehavior(eventBus, selection, canvas, elementRegistry) {

  // Select elements on create
  eventBus.on('create.end', 500, function(event) {
    var context = event.context,
        canExecute = context.canExecute,
        elements = context.elements,
        hints = context.hints || {},
        autoSelect = hints.autoSelect;

    if (canExecute) {
      if (autoSelect === false) {

        // Select no elements
        return;
      }

      if (index_esm_isArray(autoSelect)) {
        selection.select(autoSelect);
      } else {

        // Select all elements by default
        selection.select(elements.filter(isShown));
      }
    }
  });

  // Select connection targets on connect
  eventBus.on('connect.end', 500, function(event) {
    var context = event.context,
        canExecute = context.canExecute,
        hover = context.hover;

    if (canExecute && hover) {
      selection.select(hover);
    }
  });

  // Select shapes on move
  eventBus.on('shape.move.end', 500, function(event) {
    var previousSelection = event.previousSelection || [];

    var shape = elementRegistry.get(event.context.shape.id);

    // Always select main shape on move
    var isSelected = find(previousSelection, function(selectedShape) {
      return shape.id === selectedShape.id;
    });

    if (!isSelected) {
      selection.select(shape);
    }
  });

  // Select elements on click
  eventBus.on('element.click', function(event) {
    var element = event.element;

    if (element === canvas.getRootElement()) {
      element = null;
    }

    var isSelected = selection.isSelected(element),
        isMultiSelect = selection.get().length > 1;

    // Add to selection if CTRL or SHIFT pressed
    var add = hasPrimaryModifier(event) || hasSecondaryModifier(event);

    if (isSelected && isMultiSelect) {
      if (add) {

        // Deselect element
        return selection.deselect(element);
      } else {

        // Select element only
        return selection.select(element);
      }
    } else if (!isSelected) {

      // Select element
      selection.select(element, add);
    } else {

      // Deselect element
      selection.deselect(element);
    }
  });
}

SelectionBehavior.$inject = [
  'eventBus',
  'selection',
  'canvas',
  'elementRegistry'
];


function isShown(element) {
  return !element.hidden;
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/selection/index.js








/* harmony default export */ var features_selection = ({
  __init__: [ 'selectionVisuals', 'selectionBehavior' ],
  __depends__: [
    interaction_events,
    features_outline
  ],
  selection: [ 'type', Selection ],
  selectionVisuals: [ 'type', SelectionVisuals ],
  selectionBehavior: [ 'type', SelectionBehavior ]
});

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/util/Cursor.js


var CURSOR_CLS_PATTERN = /^djs-cursor-.*$/;


function Cursor_set(mode) {
  var classes = dist_index_esm_classes(document.body);

  classes.removeMatching(CURSOR_CLS_PATTERN);

  if (mode) {
    classes.add('djs-cursor-' + mode);
  }
}

function unset() {
  Cursor_set(null);
}

function Cursor_has(mode) {
  var classes = dist_index_esm_classes(document.body);

  return classes.has('djs-cursor-' + mode);
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/util/ClickTrap.js
var TRAP_PRIORITY = 5000;

/**
 * Installs a click trap that prevents a ghost click following a dragging operation.
 *
 * @return {Function} a function to immediately remove the installed trap.
 */
function install(eventBus, eventName) {

  eventName = eventName || 'element.click';

  function trap() {
    return false;
  }

  eventBus.once(eventName, TRAP_PRIORITY, trap);

  return function() {
    eventBus.off(eventName, trap);
  };
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/util/PositionUtil.js
function PositionUtil_center(bounds) {
  return {
    x: bounds.x + (bounds.width / 2),
    y: bounds.y + (bounds.height / 2)
  };
}


function PositionUtil_delta(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/dragging/Dragging.js
/* global TouchEvent */

var Dragging_round = Math.round;













var DRAG_ACTIVE_CLS = 'djs-drag-active';


function preventDefault(event) {
  event.preventDefault();
}

function isTouchEvent(event) {

  // check for TouchEvent being available first
  // (i.e. not available on desktop Firefox)
  return typeof TouchEvent !== 'undefined' && event instanceof TouchEvent;
}

function getLength(point) {
  return Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2));
}

/**
 * A helper that fires canvas localized drag events and realizes
 * the general "drag-and-drop" look and feel.
 *
 * Calling {@link Dragging#activate} activates dragging on a canvas.
 *
 * It provides the following:
 *
 *   * emits life cycle events, namespaced with a prefix assigned
 *     during dragging activation
 *   * sets and restores the cursor
 *   * sets and restores the selection if elements still exist
 *   * ensures there can be only one drag operation active at a time
 *
 * Dragging may be canceled manually by calling {@link Dragging#cancel}
 * or by pressing ESC.
 *
 *
 * ## Life-cycle events
 *
 * Dragging can be in three different states, off, initialized
 * and active.
 *
 * (1) off: no dragging operation is in progress
 * (2) initialized: a new drag operation got initialized but not yet
 *                  started (i.e. because of no initial move)
 * (3) started: dragging is in progress
 *
 * Eventually dragging will be off again after a drag operation has
 * been ended or canceled via user click or ESC key press.
 *
 * To indicate transitions between these states dragging emits generic
 * life-cycle events with the `drag.` prefix _and_ events namespaced
 * to a prefix choosen by a user during drag initialization.
 *
 * The following events are emitted (appropriately prefixed) via
 * the {@link EventBus}.
 *
 * * `init`
 * * `start`
 * * `move`
 * * `end`
 * * `ended` (dragging already in off state)
 * * `cancel` (only if previously started)
 * * `canceled` (dragging already in off state, only if previously started)
 * * `cleanup`
 *
 *
 * @example
 *
 * function MyDragComponent(eventBus, dragging) {
 *
 *   eventBus.on('mydrag.start', function(event) {
 *     console.log('yes, we start dragging');
 *   });
 *
 *   eventBus.on('mydrag.move', function(event) {
 *     console.log('canvas local coordinates', event.x, event.y, event.dx, event.dy);
 *
 *     // local drag data is passed with the event
 *     event.context.foo; // "BAR"
 *
 *     // the original mouse event, too
 *     event.originalEvent; // MouseEvent(...)
 *   });
 *
 *   eventBus.on('element.click', function(event) {
 *     dragging.init(event, 'mydrag', {
 *       cursor: 'grabbing',
 *       data: {
 *         context: {
 *           foo: "BAR"
 *         }
 *       }
 *     });
 *   });
 * }
 */
function Dragging(eventBus, canvas, selection, elementRegistry) {

  var defaultOptions = {
    threshold: 5,
    trapClick: true
  };

  // the currently active drag operation
  // dragging is active as soon as this context exists.
  //
  // it is visually _active_ only when a context.active flag is set to true.
  var context;

  /* convert a global event into local coordinates */
  function toLocalPoint(globalPosition) {

    var viewbox = canvas.viewbox();

    var clientRect = canvas._container.getBoundingClientRect();

    return {
      x: viewbox.x + (globalPosition.x - clientRect.left) / viewbox.scale,
      y: viewbox.y + (globalPosition.y - clientRect.top) / viewbox.scale
    };
  }

  // helpers

  function fire(type, dragContext) {
    dragContext = dragContext || context;

    var event = eventBus.createEvent(
      index_esm_assign(
        {},
        dragContext.payload,
        dragContext.data,
        { isTouch: dragContext.isTouch }
      )
    );

    // default integration
    if (eventBus.fire('drag.' + type, event) === false) {
      return false;
    }

    return eventBus.fire(dragContext.prefix + '.' + type, event);
  }

  function restoreSelection(previousSelection) {
    var existingSelection = previousSelection.filter(function(element) {
      return elementRegistry.get(element.id);
    });

    existingSelection.length && selection.select(existingSelection);
  }

  // event listeners

  function move(event, activate) {
    var payload = context.payload,
        displacement = context.displacement;

    var globalStart = context.globalStart,
        globalCurrent = toPoint(event),
        globalDelta = PositionUtil_delta(globalCurrent, globalStart);

    var localStart = context.localStart,
        localCurrent = toLocalPoint(globalCurrent),
        localDelta = PositionUtil_delta(localCurrent, localStart);


    // activate context explicitly or once threshold is reached
    if (!context.active && (activate || getLength(globalDelta) > context.threshold)) {

      // fire start event with original
      // starting coordinates

      index_esm_assign(payload, {
        x: Dragging_round(localStart.x + displacement.x),
        y: Dragging_round(localStart.y + displacement.y),
        dx: 0,
        dy: 0
      }, { originalEvent: event });

      if (false === fire('start')) {
        return cancel();
      }

      context.active = true;

      // unset selection and remember old selection
      // the previous (old) selection will always passed
      // with the event via the event.previousSelection property
      if (!context.keepSelection) {
        payload.previousSelection = selection.get();
        selection.select(null);
      }

      // allow custom cursor
      if (context.cursor) {
        Cursor_set(context.cursor);
      }

      // indicate dragging via marker on root element
      canvas.addMarker(canvas.getRootElement(), DRAG_ACTIVE_CLS);
    }

    stopPropagation(event);

    if (context.active) {

      // update payload with actual coordinates
      index_esm_assign(payload, {
        x: Dragging_round(localCurrent.x + displacement.x),
        y: Dragging_round(localCurrent.y + displacement.y),
        dx: Dragging_round(localDelta.x),
        dy: Dragging_round(localDelta.y)
      }, { originalEvent: event });

      // emit move event
      fire('move');
    }
  }

  function end(event) {
    var previousContext,
        returnValue = true;

    if (context.active) {

      if (event) {
        context.payload.originalEvent = event;

        // suppress original event (click, ...)
        // because we just ended a drag operation
        stopPropagation(event);
      }

      // implementations may stop restoring the
      // original state (selections, ...) by preventing the
      // end events default action
      returnValue = fire('end');
    }

    if (returnValue === false) {
      fire('rejected');
    }

    previousContext = cleanup(returnValue !== true);

    // last event to be fired when all drag operations are done
    // at this point in time no drag operation is in progress anymore
    fire('ended', previousContext);
  }


  // cancel active drag operation if the user presses
  // the ESC key on the keyboard

  function checkCancel(event) {

    if (event.which === 27) {
      preventDefault(event);

      cancel();
    }
  }


  // prevent ghost click that might occur after a finished
  // drag and drop session

  function trapClickAndEnd(event) {

    var untrap;

    // trap the click in case we are part of an active
    // drag operation. This will effectively prevent
    // the ghost click that cannot be canceled otherwise.
    if (context.active) {

      untrap = install(eventBus);

      // remove trap after minimal delay
      setTimeout(untrap, 400);

      // prevent default action (click)
      preventDefault(event);
    }

    end(event);
  }

  function trapTouch(event) {
    move(event);
  }

  // update the drag events hover (djs.model.Base) and hoverGfx (Snap<SVGElement>)
  // properties during hover and out and fire {prefix}.hover and {prefix}.out properties
  // respectively

  function hover(event) {
    var payload = context.payload;

    payload.hoverGfx = event.gfx;
    payload.hover = event.element;

    fire('hover');
  }

  function out(event) {
    fire('out');

    var payload = context.payload;

    payload.hoverGfx = null;
    payload.hover = null;
  }


  // life-cycle methods

  function cancel(restore) {
    var previousContext;

    if (!context) {
      return;
    }

    var wasActive = context.active;

    if (wasActive) {
      fire('cancel');
    }

    previousContext = cleanup(restore);

    if (wasActive) {

      // last event to be fired when all drag operations are done
      // at this point in time no drag operation is in progress anymore
      fire('canceled', previousContext);
    }
  }

  function cleanup(restore) {
    var previousContext,
        endDrag;

    fire('cleanup');

    // reset cursor
    unset();

    if (context.trapClick) {
      endDrag = trapClickAndEnd;
    } else {
      endDrag = end;
    }

    // reset dom listeners
    componentEvent.unbind(document, 'mousemove', move);

    componentEvent.unbind(document, 'dragstart', preventDefault);
    componentEvent.unbind(document, 'selectstart', preventDefault);

    componentEvent.unbind(document, 'mousedown', endDrag, true);
    componentEvent.unbind(document, 'mouseup', endDrag, true);

    componentEvent.unbind(document, 'keyup', checkCancel);

    componentEvent.unbind(document, 'touchstart', trapTouch, true);
    componentEvent.unbind(document, 'touchcancel', cancel, true);
    componentEvent.unbind(document, 'touchmove', move, true);
    componentEvent.unbind(document, 'touchend', end, true);

    eventBus.off('element.hover', hover);
    eventBus.off('element.out', out);

    // remove drag marker on root element
    canvas.removeMarker(canvas.getRootElement(), DRAG_ACTIVE_CLS);

    // restore selection, unless it has changed
    var previousSelection = context.payload.previousSelection;

    if (restore !== false && previousSelection && !selection.get().length) {
      restoreSelection(previousSelection);
    }

    previousContext = context;

    context = null;

    return previousContext;
  }

  /**
   * Initialize a drag operation.
   *
   * If `localPosition` is given, drag events will be emitted
   * relative to it.
   *
   * @param {MouseEvent|TouchEvent} [event]
   * @param {Point} [localPosition] actual diagram local position this drag operation should start at
   * @param {string} prefix
   * @param {Object} [options]
   */
  function init(event, relativeTo, prefix, options) {

    // only one drag operation may be active, at a time
    if (context) {
      cancel(false);
    }

    if (typeof relativeTo === 'string') {
      options = prefix;
      prefix = relativeTo;
      relativeTo = null;
    }

    options = index_esm_assign({}, defaultOptions, options || {});

    var data = options.data || {},
        originalEvent,
        globalStart,
        localStart,
        endDrag,
        isTouch;

    if (options.trapClick) {
      endDrag = trapClickAndEnd;
    } else {
      endDrag = end;
    }

    if (event) {
      originalEvent = getOriginal(event) || event;
      globalStart = toPoint(event);

      stopPropagation(event);

      // prevent default browser dragging behavior
      if (originalEvent.type === 'dragstart') {
        preventDefault(originalEvent);
      }
    } else {
      originalEvent = null;
      globalStart = { x: 0, y: 0 };
    }

    localStart = toLocalPoint(globalStart);

    if (!relativeTo) {
      relativeTo = localStart;
    }

    isTouch = isTouchEvent(originalEvent);

    context = index_esm_assign({
      prefix: prefix,
      data: data,
      payload: {},
      globalStart: globalStart,
      displacement: PositionUtil_delta(relativeTo, localStart),
      localStart: localStart,
      isTouch: isTouch
    }, options);

    // skip dom registration if trigger
    // is set to manual (during testing)
    if (!options.manual) {

      // add dom listeners

      if (isTouch) {
        componentEvent.bind(document, 'touchstart', trapTouch, true);
        componentEvent.bind(document, 'touchcancel', cancel, true);
        componentEvent.bind(document, 'touchmove', move, true);
        componentEvent.bind(document, 'touchend', end, true);
      } else {

        // assume we use the mouse to interact per default
        componentEvent.bind(document, 'mousemove', move);

        // prevent default browser drag and text selection behavior
        componentEvent.bind(document, 'dragstart', preventDefault);
        componentEvent.bind(document, 'selectstart', preventDefault);

        componentEvent.bind(document, 'mousedown', endDrag, true);
        componentEvent.bind(document, 'mouseup', endDrag, true);
      }

      componentEvent.bind(document, 'keyup', checkCancel);

      eventBus.on('element.hover', hover);
      eventBus.on('element.out', out);
    }

    fire('init');

    if (options.autoActivate) {
      move(event, true);
    }
  }

  // cancel on diagram destruction
  eventBus.on('diagram.destroy', cancel);


  // API

  this.init = init;
  this.move = move;
  this.hover = hover;
  this.out = out;
  this.end = end;

  this.cancel = cancel;

  // for introspection

  this.context = function() {
    return context;
  };

  this.setOptions = function(options) {
    index_esm_assign(defaultOptions, options);
  };
}

Dragging.$inject = [
  'eventBus',
  'canvas',
  'selection',
  'elementRegistry'
];

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/dragging/index.js






/* harmony default export */ var features_dragging = ({
  __depends__: [
    hover_fix,
    features_selection,
  ],
  dragging: [ 'type', Dragging ],
});
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/rules/Rules.js
/**
 * A service that provides rules for certain diagram actions.
 *
 * The default implementation will hook into the {@link CommandStack}
 * to perform the actual rule evaluation. Make sure to provide the
 * `commandStack` service with this module if you plan to use it.
 *
 * Together with this implementation you may use the {@link RuleProvider}
 * to implement your own rule checkers.
 *
 * This module is ment to be easily replaced, thus the tiny foot print.
 *
 * @param {Injector} injector
 */
function Rules(injector) {
  this._commandStack = injector.get('commandStack', false);
}

Rules.$inject = [ 'injector' ];


/**
 * Returns whether or not a given modeling action can be executed
 * in the specified context.
 *
 * This implementation will respond with allow unless anyone
 * objects.
 *
 * @param {string} action the action to be checked
 * @param {Object} [context] the context to check the action in
 *
 * @return {boolean} returns true, false or null depending on whether the
 *                   operation is allowed, not allowed or should be ignored.
 */
Rules.prototype.allowed = function(action, context) {
  var allowed = true;

  var commandStack = this._commandStack;

  if (commandStack) {
    allowed = commandStack.canExecute(action, context);
  }

  // map undefined to true, i.e. no rules
  return allowed === undefined ? true : allowed;
};
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/rules/index.js


/* harmony default export */ var features_rules = ({
  __init__: [ 'rules' ],
  rules: [ 'type', Rules ]
});

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/util/Geometry.js


/**
 * Computes the distance between two points
 *
 * @param  {Point}  p
 * @param  {Point}  q
 *
 * @return {number}  distance
 */
function pointDistance(a, b) {
  if (!a || !b) {
    return -1;
  }

  return Math.sqrt(
    Math.pow(a.x - b.x, 2) +
    Math.pow(a.y - b.y, 2)
  );
}


/**
 * Returns true if the point r is on the line between p and q
 *
 * @param  {Point}  p
 * @param  {Point}  q
 * @param  {Point}  r
 * @param  {number} [accuracy=5] accuracy for points on line check (lower is better)
 *
 * @return {boolean}
 */
function pointsOnLine(p, q, r, accuracy) {

  if (typeof accuracy === 'undefined') {
    accuracy = 5;
  }

  if (!p || !q || !r) {
    return false;
  }

  var val = (q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x),
      dist = pointDistance(p, q);

  // @see http://stackoverflow.com/a/907491/412190
  return Math.abs(val / dist) <= accuracy;
}


var ALIGNED_THRESHOLD = 2;

/**
 * Check whether two points are horizontally or vertically aligned.
 *
 * @param {Array<Point>|Point}
 * @param {Point}
 *
 * @return {string|boolean}
 */
function pointsAligned(a, b) {
  var points;

  if (index_esm_isArray(a)) {
    points = a;
  } else {
    points = [ a, b ];
  }

  if (pointsAlignedHorizontally(points)) {
    return 'h';
  }

  if (pointsAlignedVertically(points)) {
    return 'v';
  }

  return false;
}

function pointsAlignedHorizontally(a, b) {
  var points;

  if (index_esm_isArray(a)) {
    points = a;
  } else {
    points = [ a, b ];
  }

  var firstPoint = points.slice().shift();

  return every(points, function(point) {
    return Math.abs(firstPoint.y - point.y) <= ALIGNED_THRESHOLD;
  });
}

function pointsAlignedVertically(a, b) {
  var points;

  if (index_esm_isArray(a)) {
    points = a;
  } else {
    points = [ a, b ];
  }

  var firstPoint = points.slice().shift();

  return every(points, function(point) {
    return Math.abs(firstPoint.x - point.x) <= ALIGNED_THRESHOLD;
  });
}



/**
 * Returns true if the point p is inside the rectangle rect
 *
 * @param  {Point}  p
 * @param  {Rect} rect
 * @param  {number} tolerance
 *
 * @return {boolean}
 */
function pointInRect(p, rect, tolerance) {
  tolerance = tolerance || 0;

  return p.x > rect.x - tolerance &&
         p.y > rect.y - tolerance &&
         p.x < rect.x + rect.width + tolerance &&
         p.y < rect.y + rect.height + tolerance;
}

/**
 * Returns a point in the middle of points p and q
 *
 * @param  {Point}  p
 * @param  {Point}  q
 *
 * @return {Point} middle point
 */
function getMidPoint(p, q) {
  return {
    x: Math.round(p.x + ((q.x - p.x) / 2.0)),
    y: Math.round(p.y + ((q.y - p.y) / 2.0))
  };
}

// EXTERNAL MODULE: ./node_modules/path-intersection/intersect.js
var intersect = __webpack_require__("e5ab");
var intersect_default = /*#__PURE__*/__webpack_require__.n(intersect);

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/util/LineIntersection.js




var LineIntersection_round = Math.round,
    max = Math.max;


function LineIntersection_circlePath(center, r) {
  var x = center.x,
      y = center.y;

  return [
    ['M', x, y],
    ['m', 0, -r],
    ['a', r, r, 0, 1, 1, 0, 2 * r],
    ['a', r, r, 0, 1, 1, 0, -2 * r],
    ['z']
  ];
}

function LineIntersection_linePath(points) {
  var segments = [];

  points.forEach(function(p, idx) {
    segments.push([ idx === 0 ? 'M' : 'L', p.x, p.y ]);
  });

  return segments;
}


var INTERSECTION_THRESHOLD = 10;

function getBendpointIntersection(waypoints, reference) {

  var i, w;

  for (i = 0; (w = waypoints[i]); i++) {

    if (pointDistance(w, reference) <= INTERSECTION_THRESHOLD) {
      return {
        point: waypoints[i],
        bendpoint: true,
        index: i
      };
    }
  }

  return null;
}

function getPathIntersection(waypoints, reference) {

  var intersections = intersect_default()(LineIntersection_circlePath(reference, INTERSECTION_THRESHOLD), LineIntersection_linePath(waypoints));

  var a = intersections[0],
      b = intersections[intersections.length - 1],
      idx;

  if (!a) {

    // no intersection
    return null;
  }

  if (a !== b) {

    if (a.segment2 !== b.segment2) {

      // we use the bendpoint in between both segments
      // as the intersection point

      idx = max(a.segment2, b.segment2) - 1;

      return {
        point: waypoints[idx],
        bendpoint: true,
        index: idx
      };
    }

    return {
      point: {
        x: (LineIntersection_round(a.x + b.x) / 2),
        y: (LineIntersection_round(a.y + b.y) / 2)
      },
      index: a.segment2
    };
  }

  return {
    point: {
      x: LineIntersection_round(a.x),
      y: LineIntersection_round(a.y)
    },
    index: a.segment2
  };
}

/**
 * Returns the closest point on the connection towards a given reference point.
 *
 * @param  {Array<Point>} waypoints
 * @param  {Point} reference
 *
 * @return {Object} intersection data (segment, point)
 */
function getApproxIntersection(waypoints, reference) {
  return getBendpointIntersection(waypoints, reference) || getPathIntersection(waypoints, reference);
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/bendpoints/BendpointUtil.js










var BENDPOINT_CLS = 'djs-bendpoint';
var SEGMENT_DRAGGER_CLS = 'djs-segment-dragger';

function toCanvasCoordinates(canvas, event) {

  var position = toPoint(event),
      clientRect = canvas._container.getBoundingClientRect(),
      offset;

  // canvas relative position

  offset = {
    x: clientRect.left,
    y: clientRect.top
  };

  // update actual event payload with canvas relative measures

  var viewbox = canvas.viewbox();

  return {
    x: viewbox.x + (position.x - offset.x) / viewbox.scale,
    y: viewbox.y + (position.y - offset.y) / viewbox.scale
  };
}

function getConnectionIntersection(canvas, waypoints, event) {
  var localPosition = toCanvasCoordinates(canvas, event),
      intersection = getApproxIntersection(waypoints, localPosition);

  return intersection;
}

function addBendpoint(parentGfx, cls) {
  var groupGfx = index_esm_create('g');
  index_esm_classes(groupGfx).add(BENDPOINT_CLS);

  index_esm_append(parentGfx, groupGfx);

  var visual = index_esm_create('circle');
  index_esm_attr(visual, {
    cx: 0,
    cy: 0,
    r: 4
  });
  index_esm_classes(visual).add('djs-visual');

  index_esm_append(groupGfx, visual);

  var hit = index_esm_create('circle');
  index_esm_attr(hit, {
    cx: 0,
    cy: 0,
    r: 10
  });
  index_esm_classes(hit).add('djs-hit');

  index_esm_append(groupGfx, hit);

  if (cls) {
    index_esm_classes(groupGfx).add(cls);
  }

  return groupGfx;
}

function createParallelDragger(parentGfx, segmentStart, segmentEnd, alignment) {
  var draggerGfx = index_esm_create('g');

  index_esm_append(parentGfx, draggerGfx);

  var width = 14,
      height = 3,
      padding = 11,
      hitWidth = calculateHitWidth(segmentStart, segmentEnd, alignment),
      hitHeight = height + padding;

  var visual = index_esm_create('rect');
  index_esm_attr(visual, {
    x: -width / 2,
    y: -height / 2,
    width: width,
    height: height
  });
  index_esm_classes(visual).add('djs-visual');

  index_esm_append(draggerGfx, visual);

  var hit = index_esm_create('rect');
  index_esm_attr(hit, {
    x: -hitWidth / 2,
    y: -hitHeight / 2,
    width: hitWidth,
    height: hitHeight
  });
  index_esm_classes(hit).add('djs-hit');

  index_esm_append(draggerGfx, hit);

  SvgTransformUtil_rotate(draggerGfx, alignment === 'v' ? 90 : 0, 0, 0);

  return draggerGfx;
}


function addSegmentDragger(parentGfx, segmentStart, segmentEnd) {

  var groupGfx = index_esm_create('g'),
      mid = getMidPoint(segmentStart, segmentEnd),
      alignment = pointsAligned(segmentStart, segmentEnd);

  index_esm_append(parentGfx, groupGfx);

  createParallelDragger(groupGfx, segmentStart, segmentEnd, alignment);

  index_esm_classes(groupGfx).add(SEGMENT_DRAGGER_CLS);
  index_esm_classes(groupGfx).add(alignment === 'h' ? 'horizontal' : 'vertical');

  SvgTransformUtil_translate(groupGfx, mid.x, mid.y);

  return groupGfx;
}

/**
 * Calculates region for segment move which is 2/3 of the full segment length
 * @param {number} segmentLength
 *
 * @return {number}
 */
function calculateSegmentMoveRegion(segmentLength) {
  return Math.abs(Math.round(segmentLength * 2 / 3));
}

// helper //////////

function calculateHitWidth(segmentStart, segmentEnd, alignment) {
  var segmentLengthXAxis = segmentEnd.x - segmentStart.x,
      segmentLengthYAxis = segmentEnd.y - segmentStart.y;

  return alignment === 'h' ?
    calculateSegmentMoveRegion(segmentLengthXAxis) :
    calculateSegmentMoveRegion(segmentLengthYAxis);
}

// EXTERNAL MODULE: ./node_modules/css.escape/css.escape.js
var css_escape = __webpack_require__("e7a5");
var css_escape_default = /*#__PURE__*/__webpack_require__.n(css_escape);

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/bendpoints/Bendpoints.js















/**
 * A service that adds editable bendpoints to connections.
 */
function Bendpoints(
    eventBus, canvas, interactionEvents,
    bendpointMove, connectionSegmentMove) {

  /**
   * Returns true if intersection point is inside middle region of segment, adjusted by
   * optional threshold
   */
  function isIntersectionMiddle(intersection, waypoints, treshold) {
    var idx = intersection.index,
        p = intersection.point,
        p0, p1, mid, aligned, xDelta, yDelta;

    if (idx <= 0 || intersection.bendpoint) {
      return false;
    }

    p0 = waypoints[idx - 1];
    p1 = waypoints[idx];
    mid = getMidPoint(p0, p1),
    aligned = pointsAligned(p0, p1);
    xDelta = Math.abs(p.x - mid.x);
    yDelta = Math.abs(p.y - mid.y);

    return aligned && xDelta <= treshold && yDelta <= treshold;
  }

  /**
   * Calculates the threshold from a connection's middle which fits the two-third-region
   */
  function calculateIntersectionThreshold(connection, intersection) {
    var waypoints = connection.waypoints,
        relevantSegment, alignment, segmentLength, threshold;

    if (intersection.index <= 0 || intersection.bendpoint) {
      return null;
    }

    // segment relative to connection intersection
    relevantSegment = {
      start: waypoints[intersection.index - 1],
      end: waypoints[intersection.index]
    };

    alignment = pointsAligned(relevantSegment.start, relevantSegment.end);

    if (!alignment) {
      return null;
    }

    if (alignment === 'h') {
      segmentLength = relevantSegment.end.x - relevantSegment.start.x;
    } else {
      segmentLength = relevantSegment.end.y - relevantSegment.start.y;
    }

    // calculate threshold relative to 2/3 of segment length
    threshold = calculateSegmentMoveRegion(segmentLength) / 2;

    return threshold;
  }

  function activateBendpointMove(event, connection) {
    var waypoints = connection.waypoints,
        intersection = getConnectionIntersection(canvas, waypoints, event),
        threshold;

    if (!intersection) {
      return;
    }

    threshold = calculateIntersectionThreshold(connection, intersection);

    if (isIntersectionMiddle(intersection, waypoints, threshold)) {
      connectionSegmentMove.start(event, connection, intersection.index);
    } else {
      bendpointMove.start(event, connection, intersection.index, !intersection.bendpoint);
    }

    // we've handled the event
    return true;
  }

  function bindInteractionEvents(node, eventName, element) {

    componentEvent.bind(node, eventName, function(event) {
      interactionEvents.triggerMouseEvent(eventName, event, element);
      event.stopPropagation();
    });
  }

  function getBendpointsContainer(element, create) {

    var layer = canvas.getLayer('overlays'),
        gfx = query('.djs-bendpoints[data-element-id="' + css_escape_default()(element.id) + '"]', layer);

    if (!gfx && create) {
      gfx = index_esm_create('g');
      index_esm_attr(gfx, { 'data-element-id': element.id });
      index_esm_classes(gfx).add('djs-bendpoints');

      index_esm_append(layer, gfx);

      bindInteractionEvents(gfx, 'mousedown', element);
      bindInteractionEvents(gfx, 'click', element);
      bindInteractionEvents(gfx, 'dblclick', element);
    }

    return gfx;
  }

  function getSegmentDragger(idx, parentGfx) {
    return query(
      '.djs-segment-dragger[data-segment-idx="' + idx + '"]',
      parentGfx
    );
  }

  function createBendpoints(gfx, connection) {
    connection.waypoints.forEach(function(p, idx) {
      var bendpoint = addBendpoint(gfx);

      index_esm_append(gfx, bendpoint);

      SvgTransformUtil_translate(bendpoint, p.x, p.y);
    });

    // add floating bendpoint
    addBendpoint(gfx, 'floating');
  }

  function createSegmentDraggers(gfx, connection) {

    var waypoints = connection.waypoints;

    var segmentStart,
        segmentEnd,
        segmentDraggerGfx;

    for (var i = 1; i < waypoints.length; i++) {

      segmentStart = waypoints[i - 1];
      segmentEnd = waypoints[i];

      if (pointsAligned(segmentStart, segmentEnd)) {
        segmentDraggerGfx = addSegmentDragger(gfx, segmentStart, segmentEnd);

        index_esm_attr(segmentDraggerGfx, { 'data-segment-idx': i });

        bindInteractionEvents(segmentDraggerGfx, 'mousemove', connection);
      }
    }
  }

  function clearBendpoints(gfx) {
    forEach(index_esm_all('.' + BENDPOINT_CLS, gfx), function(node) {
      remove(node);
    });
  }

  function clearSegmentDraggers(gfx) {
    forEach(index_esm_all('.' + SEGMENT_DRAGGER_CLS, gfx), function(node) {
      remove(node);
    });
  }

  function addHandles(connection) {

    var gfx = getBendpointsContainer(connection);

    if (!gfx) {
      gfx = getBendpointsContainer(connection, true);

      createBendpoints(gfx, connection);
      createSegmentDraggers(gfx, connection);
    }

    return gfx;
  }

  function updateHandles(connection) {

    var gfx = getBendpointsContainer(connection);

    if (gfx) {
      clearSegmentDraggers(gfx);
      clearBendpoints(gfx);
      createSegmentDraggers(gfx, connection);
      createBendpoints(gfx, connection);
    }
  }

  function updateFloatingBendpointPosition(parentGfx, intersection) {
    var floating = query('.floating', parentGfx),
        point = intersection.point;

    if (!floating) {
      return;
    }

    SvgTransformUtil_translate(floating, point.x, point.y);

  }

  function updateSegmentDraggerPosition(parentGfx, intersection, waypoints) {

    var draggerGfx = getSegmentDragger(intersection.index, parentGfx),
        segmentStart = waypoints[intersection.index - 1],
        segmentEnd = waypoints[intersection.index],
        point = intersection.point,
        mid = getMidPoint(segmentStart, segmentEnd),
        alignment = pointsAligned(segmentStart, segmentEnd),
        draggerVisual, relativePosition;

    if (!draggerGfx) {
      return;
    }

    draggerVisual = getDraggerVisual(draggerGfx);

    relativePosition = {
      x: point.x - mid.x,
      y: point.y - mid.y
    };

    if (alignment === 'v') {

      // rotate position
      relativePosition = {
        x: relativePosition.y,
        y: relativePosition.x
      };
    }

    SvgTransformUtil_translate(draggerVisual, relativePosition.x, relativePosition.y);
  }

  eventBus.on('connection.changed', function(event) {
    updateHandles(event.element);
  });

  eventBus.on('connection.remove', function(event) {
    var gfx = getBendpointsContainer(event.element);

    if (gfx) {
      remove(gfx);
    }
  });

  eventBus.on('element.marker.update', function(event) {

    var element = event.element,
        bendpointsGfx;

    if (!element.waypoints) {
      return;
    }

    bendpointsGfx = addHandles(element);

    if (event.add) {
      index_esm_classes(bendpointsGfx).add(event.marker);
    } else {
      index_esm_classes(bendpointsGfx).remove(event.marker);
    }
  });

  eventBus.on('element.mousemove', function(event) {

    var element = event.element,
        waypoints = element.waypoints,
        bendpointsGfx,
        intersection;

    if (waypoints) {
      bendpointsGfx = getBendpointsContainer(element, true);

      intersection = getConnectionIntersection(canvas, waypoints, event.originalEvent);

      if (!intersection) {
        return;
      }

      updateFloatingBendpointPosition(bendpointsGfx, intersection);

      if (!intersection.bendpoint) {
        updateSegmentDraggerPosition(bendpointsGfx, intersection, waypoints);
      }

    }
  });

  eventBus.on('element.mousedown', function(event) {

    var originalEvent = event.originalEvent,
        element = event.element;

    if (!element.waypoints) {
      return;
    }

    return activateBendpointMove(originalEvent, element);
  });

  eventBus.on('selection.changed', function(event) {
    var newSelection = event.newSelection,
        primary = newSelection[0];

    if (primary && primary.waypoints) {
      addHandles(primary);
    }
  });

  eventBus.on('element.hover', function(event) {
    var element = event.element;

    if (element.waypoints) {
      addHandles(element);
      interactionEvents.registerEvent(event.gfx, 'mousemove', 'element.mousemove');
    }
  });

  eventBus.on('element.out', function(event) {
    interactionEvents.unregisterEvent(event.gfx, 'mousemove', 'element.mousemove');
  });

  // update bendpoint container data attribute on element ID change
  eventBus.on('element.updateId', function(context) {
    var element = context.element,
        newId = context.newId;

    if (element.waypoints) {
      var bendpointContainer = getBendpointsContainer(element);

      if (bendpointContainer) {
        index_esm_attr(bendpointContainer, { 'data-element-id': newId });
      }
    }
  });

  // API

  this.addHandles = addHandles;
  this.updateHandles = updateHandles;
  this.getBendpointsContainer = getBendpointsContainer;
  this.getSegmentDragger = getSegmentDragger;
}

Bendpoints.$inject = [
  'eventBus',
  'canvas',
  'interactionEvents',
  'bendpointMove',
  'connectionSegmentMove'
];



// helper /////////////

function getDraggerVisual(draggerGfx) {
  return query('.djs-visual', draggerGfx);
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/layout/LayoutUtil.js







function roundBounds(bounds) {
  return {
    x: Math.round(bounds.x),
    y: Math.round(bounds.y),
    width: Math.round(bounds.width),
    height: Math.round(bounds.height)
  };
}


function roundPoint(point) {

  return {
    x: Math.round(point.x),
    y: Math.round(point.y)
  };
}


/**
 * Convert the given bounds to a { top, left, bottom, right } descriptor.
 *
 * @param {Bounds|Point} bounds
 *
 * @return {Object}
 */
function asTRBL(bounds) {
  return {
    top: bounds.y,
    right: bounds.x + (bounds.width || 0),
    bottom: bounds.y + (bounds.height || 0),
    left: bounds.x
  };
}


/**
 * Convert a { top, left, bottom, right } to an objects bounds.
 *
 * @param {Object} trbl
 *
 * @return {Bounds}
 */
function asBounds(trbl) {
  return {
    x: trbl.left,
    y: trbl.top,
    width: trbl.right - trbl.left,
    height: trbl.bottom - trbl.top
  };
}


/**
 * Get the mid of the given bounds or point.
 *
 * @param {Bounds|Point} bounds
 *
 * @return {Point}
 */
function getMid(bounds) {
  return roundPoint({
    x: bounds.x + (bounds.width || 0) / 2,
    y: bounds.y + (bounds.height || 0) / 2
  });
}


// orientation utils //////////////////////

/**
 * Get orientation of the given rectangle with respect to
 * the reference rectangle.
 *
 * A padding (positive or negative) may be passed to influence
 * horizontal / vertical orientation and intersection.
 *
 * @param {Bounds} rect
 * @param {Bounds} reference
 * @param {Point|number} padding
 *
 * @return {string} the orientation; one of top, top-left, left, ..., bottom, right or intersect.
 */
function getOrientation(rect, reference, padding) {

  padding = padding || 0;

  // make sure we can use an object, too
  // for individual { x, y } padding
  if (!isObject(padding)) {
    padding = { x: padding, y: padding };
  }


  var rectOrientation = asTRBL(rect),
      referenceOrientation = asTRBL(reference);

  var top = rectOrientation.bottom + padding.y <= referenceOrientation.top,
      right = rectOrientation.left - padding.x >= referenceOrientation.right,
      bottom = rectOrientation.top - padding.y >= referenceOrientation.bottom,
      left = rectOrientation.right + padding.x <= referenceOrientation.left;

  var vertical = top ? 'top' : (bottom ? 'bottom' : null),
      horizontal = left ? 'left' : (right ? 'right' : null);

  if (horizontal && vertical) {
    return vertical + '-' + horizontal;
  } else {
    return horizontal || vertical || 'intersect';
  }
}


// intersection utils //////////////////////

/**
 * Get intersection between an element and a line path.
 *
 * @param {PathDef} elementPath
 * @param {PathDef} linePath
 * @param {boolean} cropStart crop from start or end
 *
 * @return {Point}
 */
function getElementLineIntersection(elementPath, linePath, cropStart) {

  var intersections = getIntersections(elementPath, linePath);

  // recognize intersections
  // only one -> choose
  // two close together -> choose first
  // two or more distinct -> pull out appropriate one
  // none -> ok (fallback to point itself)
  if (intersections.length === 1) {
    return roundPoint(intersections[0]);
  } else if (intersections.length === 2 && pointDistance(intersections[0], intersections[1]) < 1) {
    return roundPoint(intersections[0]);
  } else if (intersections.length > 1) {

    // sort by intersections based on connection segment +
    // distance from start
    intersections = sortBy(intersections, function(i) {
      var distance = Math.floor(i.t2 * 100) || 1;

      distance = 100 - distance;

      distance = (distance < 10 ? '0' : '') + distance;

      // create a sort string that makes sure we sort
      // line segment ASC + line segment position DESC (for cropStart)
      // line segment ASC + line segment position ASC (for cropEnd)
      return i.segment2 + '#' + distance;
    });

    return roundPoint(intersections[cropStart ? 0 : intersections.length - 1]);
  }

  return null;
}


function getIntersections(a, b) {
  return intersect_default()(a, b);
}


function LayoutUtil_filterRedundantWaypoints(waypoints) {

  // alter copy of waypoints, not original
  waypoints = waypoints.slice();

  var idx = 0,
      point,
      previousPoint,
      nextPoint;

  while (waypoints[idx]) {
    point = waypoints[idx];
    previousPoint = waypoints[idx - 1];
    nextPoint = waypoints[idx + 1];

    if (pointDistance(point, nextPoint) === 0 ||
        pointsOnLine(previousPoint, nextPoint, point)) {

      // remove point, if overlapping with {nextPoint}
      // or on line with {previousPoint} -> {point} -> {nextPoint}
      waypoints.splice(idx, 1);
    } else {
      idx++;
    }
  }

  return waypoints;
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/bendpoints/BendpointMove.js


var BendpointMove_round = Math.round;

var RECONNECT_START = 'reconnectStart',
    RECONNECT_END = 'reconnectEnd',
    UPDATE_WAYPOINTS = 'updateWaypoints';


/**
 * Move bendpoints through drag and drop to add/remove bendpoints or reconnect connection.
 */
function BendpointMove(injector, eventBus, canvas, dragging, rules, modeling) {
  this._injector = injector;

  this.start = function(event, connection, bendpointIndex, insert) {
    var gfx = canvas.getGraphics(connection),
        source = connection.source,
        target = connection.target,
        waypoints = connection.waypoints,
        type;

    if (!insert && bendpointIndex === 0) {
      type = RECONNECT_START;
    } else
    if (!insert && bendpointIndex === waypoints.length - 1) {
      type = RECONNECT_END;
    } else {
      type = UPDATE_WAYPOINTS;
    }

    var command = type === UPDATE_WAYPOINTS ? 'connection.updateWaypoints' : 'connection.reconnect';

    var allowed = rules.allowed(command, {
      connection: connection,
      source: source,
      target: target
    });

    if (allowed === false) {
      allowed = rules.allowed(command, {
        connection: connection,
        source: target,
        target: source
      });
    }

    if (allowed === false) {
      return;
    }

    dragging.init(event, 'bendpoint.move', {
      data: {
        connection: connection,
        connectionGfx: gfx,
        context: {
          allowed: allowed,
          bendpointIndex: bendpointIndex,
          connection: connection,
          source: source,
          target: target,
          insert: insert,
          type: type
        }
      }
    });
  };

  eventBus.on('bendpoint.move.hover', function(event) {
    var context = event.context,
        connection = context.connection,
        source = connection.source,
        target = connection.target,
        hover = event.hover,
        type = context.type;

    // cache hover state
    context.hover = hover;

    var allowed;

    if (!hover) {
      return;
    }

    var command = type === UPDATE_WAYPOINTS ? 'connection.updateWaypoints' : 'connection.reconnect';

    allowed = context.allowed = rules.allowed(command, {
      connection: connection,
      source: type === RECONNECT_START ? hover : source,
      target: type === RECONNECT_END ? hover : target
    });

    if (allowed) {
      context.source = type === RECONNECT_START ? hover : source;
      context.target = type === RECONNECT_END ? hover : target;

      return;
    }

    if (allowed === false) {
      allowed = context.allowed = rules.allowed(command, {
        connection: connection,
        source: type === RECONNECT_END ? hover : target,
        target: type === RECONNECT_START ? hover : source
      });
    }

    if (allowed) {
      context.source = type === RECONNECT_END ? hover : target;
      context.target = type === RECONNECT_START ? hover : source;
    }
  });

  eventBus.on([ 'bendpoint.move.out', 'bendpoint.move.cleanup' ], function(event) {
    var context = event.context;

    context.hover = null;
    context.source = null;
    context.target = null;

    context.allowed = false;
  });

  eventBus.on('bendpoint.move.end', function(event) {
    var context = event.context,
        allowed = context.allowed,
        bendpointIndex = context.bendpointIndex,
        connection = context.connection,
        insert = context.insert,
        newWaypoints = connection.waypoints.slice(),
        source = context.source,
        target = context.target,
        type = context.type,
        hints = context.hints || {};

    // ensure integer values (important if zoom level was > 1 during move)
    var docking = {
      x: BendpointMove_round(event.x),
      y: BendpointMove_round(event.y)
    };

    if (!allowed) {
      return false;
    }

    if (type === UPDATE_WAYPOINTS) {
      if (insert) {

        // insert new bendpoint
        newWaypoints.splice(bendpointIndex, 0, docking);
      } else {

        // swap previous waypoint with moved one
        newWaypoints[bendpointIndex] = docking;
      }

      // pass hints about actual moved bendpoint
      // useful for connection/label layout
      hints.bendpointMove = {
        insert: insert,
        bendpointIndex: bendpointIndex
      };

      newWaypoints = this.cropWaypoints(connection, newWaypoints);

      modeling.updateWaypoints(connection, LayoutUtil_filterRedundantWaypoints(newWaypoints), hints);
    } else {
      if (type === RECONNECT_START) {
        hints.docking = 'source';

        if (isReverse(context)) {
          hints.docking = 'target';

          hints.newWaypoints = newWaypoints.reverse();
        }
      } else if (type === RECONNECT_END) {
        hints.docking = 'target';

        if (isReverse(context)) {
          hints.docking = 'source';

          hints.newWaypoints = newWaypoints.reverse();
        }
      }

      modeling.reconnect(connection, source, target, docking, hints);
    }
  }, this);
}

BendpointMove.$inject = [
  'injector',
  'eventBus',
  'canvas',
  'dragging',
  'rules',
  'modeling'
];

BendpointMove.prototype.cropWaypoints = function(connection, newWaypoints) {
  var connectionDocking = this._injector.get('connectionDocking', false);

  if (!connectionDocking) {
    return newWaypoints;
  }

  var waypoints = connection.waypoints;

  connection.waypoints = newWaypoints;

  connection.waypoints = connectionDocking.getCroppedWaypoints(connection);

  newWaypoints = connection.waypoints;

  connection.waypoints = waypoints;

  return newWaypoints;
};


// helpers //////////

function isReverse(context) {
  var hover = context.hover,
      source = context.source,
      target = context.target,
      type = context.type;

  if (type === RECONNECT_START) {
    return hover && target && hover === target && source !== target;
  }

  if (type === RECONNECT_END) {
    return hover && source && hover === source && source !== target;
  }
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/bendpoints/BendpointMovePreview.js








var BendpointMovePreview_RECONNECT_START = 'reconnectStart',
    BendpointMovePreview_RECONNECT_END = 'reconnectEnd',
    BendpointMovePreview_UPDATE_WAYPOINTS = 'updateWaypoints';

var MARKER_OK = 'connect-ok',
    MARKER_NOT_OK = 'connect-not-ok',
    MARKER_CONNECT_HOVER = 'connect-hover',
    MARKER_CONNECT_UPDATING = 'djs-updating',
    MARKER_ELEMENT_HIDDEN = 'djs-element-hidden';

var BendpointMovePreview_HIGH_PRIORITY = 1100;

/**
 * Preview connection while moving bendpoints.
 */
function BendpointMovePreview(bendpointMove, injector, eventBus, canvas) {
  this._injector = injector;

  var connectionPreview = injector.get('connectionPreview', false);

  eventBus.on('bendpoint.move.start', function(event) {
    var context = event.context,
        bendpointIndex = context.bendpointIndex,
        connection = context.connection,
        insert = context.insert,
        waypoints = connection.waypoints,
        newWaypoints = waypoints.slice();

    context.waypoints = waypoints;

    if (insert) {

      // insert placeholder for new bendpoint
      newWaypoints.splice(bendpointIndex, 0, { x: event.x, y: event.y });
    }

    connection.waypoints = newWaypoints;

    // add dragger gfx
    var draggerGfx = context.draggerGfx = addBendpoint(canvas.getLayer('overlays'));

    index_esm_classes(draggerGfx).add('djs-dragging');

    canvas.addMarker(connection, MARKER_ELEMENT_HIDDEN);
    canvas.addMarker(connection, MARKER_CONNECT_UPDATING);
  });

  eventBus.on('bendpoint.move.hover', function(event) {
    var context = event.context,
        allowed = context.allowed,
        hover = context.hover,
        type = context.type;

    if (hover) {
      canvas.addMarker(hover, MARKER_CONNECT_HOVER);

      if (type === BendpointMovePreview_UPDATE_WAYPOINTS) {
        return;
      }

      if (allowed) {
        canvas.removeMarker(hover, MARKER_NOT_OK);
        canvas.addMarker(hover, MARKER_OK);
      } else if (allowed === false) {
        canvas.removeMarker(hover, MARKER_OK);
        canvas.addMarker(hover, MARKER_NOT_OK);
      }
    }
  });

  eventBus.on([
    'bendpoint.move.out',
    'bendpoint.move.cleanup'
  ], BendpointMovePreview_HIGH_PRIORITY, function(event) {
    var context = event.context,
        hover = context.hover,
        target = context.target;

    if (hover) {
      canvas.removeMarker(hover, MARKER_CONNECT_HOVER);
      canvas.removeMarker(hover, target ? MARKER_OK : MARKER_NOT_OK);
    }
  });

  eventBus.on('bendpoint.move.move', function(event) {
    var context = event.context,
        allowed = context.allowed,
        bendpointIndex = context.bendpointIndex,
        draggerGfx = context.draggerGfx,
        hover = context.hover,
        type = context.type,
        connection = context.connection,
        source = connection.source,
        target = connection.target,
        newWaypoints = connection.waypoints.slice(),
        bendpoint = { x: event.x, y: event.y },
        hints = context.hints || {},
        drawPreviewHints = {};

    if (connectionPreview) {
      if (hints.connectionStart) {
        drawPreviewHints.connectionStart = hints.connectionStart;
      }

      if (hints.connectionEnd) {
        drawPreviewHints.connectionEnd = hints.connectionEnd;
      }


      if (type === BendpointMovePreview_RECONNECT_START) {
        if (isReverse(context)) {
          drawPreviewHints.connectionEnd = drawPreviewHints.connectionEnd || bendpoint;

          drawPreviewHints.source = target;
          drawPreviewHints.target = hover || source;

          newWaypoints = newWaypoints.reverse();
        } else {
          drawPreviewHints.connectionStart = drawPreviewHints.connectionStart || bendpoint;

          drawPreviewHints.source = hover || source;
          drawPreviewHints.target = target;
        }
      } else if (type === BendpointMovePreview_RECONNECT_END) {
        if (isReverse(context)) {
          drawPreviewHints.connectionStart = drawPreviewHints.connectionStart || bendpoint;

          drawPreviewHints.source = hover || target;
          drawPreviewHints.target = source;

          newWaypoints = newWaypoints.reverse();
        } else {
          drawPreviewHints.connectionEnd = drawPreviewHints.connectionEnd || bendpoint;

          drawPreviewHints.source = source;
          drawPreviewHints.target = hover || target;
        }

      } else {
        drawPreviewHints.noCropping = true;
        drawPreviewHints.noLayout = true;
        newWaypoints[ bendpointIndex ] = bendpoint;
      }

      if (type === BendpointMovePreview_UPDATE_WAYPOINTS) {
        newWaypoints = bendpointMove.cropWaypoints(connection, newWaypoints);
      }

      drawPreviewHints.waypoints = newWaypoints;

      connectionPreview.drawPreview(context, allowed, drawPreviewHints);
    }

    SvgTransformUtil_translate(draggerGfx, event.x, event.y);
  }, this);

  eventBus.on([
    'bendpoint.move.end',
    'bendpoint.move.cancel'
  ], BendpointMovePreview_HIGH_PRIORITY, function(event) {
    var context = event.context,
        connection = context.connection,
        draggerGfx = context.draggerGfx,
        hover = context.hover,
        target = context.target,
        waypoints = context.waypoints;

    connection.waypoints = waypoints;

    // remove dragger gfx
    remove(draggerGfx);

    canvas.removeMarker(connection, MARKER_CONNECT_UPDATING);
    canvas.removeMarker(connection, MARKER_ELEMENT_HIDDEN);

    if (hover) {
      canvas.removeMarker(hover, MARKER_OK);
      canvas.removeMarker(hover, target ? MARKER_OK : MARKER_NOT_OK);
    }

    if (connectionPreview) {
      connectionPreview.cleanUp(context);
    }
  });
}

BendpointMovePreview.$inject = [
  'bendpointMove',
  'injector',
  'eventBus',
  'canvas'
];
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/bendpoints/ConnectionSegmentMove.js






var ConnectionSegmentMove_MARKER_CONNECT_HOVER = 'connect-hover',
    ConnectionSegmentMove_MARKER_CONNECT_UPDATING = 'djs-updating';






function axisAdd(point, axis, delta) {
  return axisSet(point, axis, point[axis] + delta);
}

function axisSet(point, axis, value) {
  return {
    x: (axis === 'x' ? value : point.x),
    y: (axis === 'y' ? value : point.y)
  };
}

function axisFenced(position, segmentStart, segmentEnd, axis) {

  var maxValue = Math.max(segmentStart[axis], segmentEnd[axis]),
      minValue = Math.min(segmentStart[axis], segmentEnd[axis]);

  var padding = 20;

  var fencedValue = Math.min(Math.max(minValue + padding, position[axis]), maxValue - padding);

  return axisSet(segmentStart, axis, fencedValue);
}

function flipAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/**
 * Get the docking point on the given element.
 *
 * Compute a reasonable docking, if non exists.
 *
 * @param  {Point} point
 * @param  {djs.model.Shape} referenceElement
 * @param  {string} moveAxis (x|y)
 *
 * @return {Point}
 */
function getDocking(point, referenceElement, moveAxis) {

  var referenceMid,
      inverseAxis;

  if (point.original) {
    return point.original;
  } else {
    referenceMid = getMid(referenceElement);
    inverseAxis = flipAxis(moveAxis);

    return axisSet(point, inverseAxis, referenceMid[inverseAxis]);
  }
}

/**
 * A component that implements moving of bendpoints
 */
function ConnectionSegmentMove(
    injector, eventBus, canvas,
    dragging, graphicsFactory, modeling) {

  // optional connection docking integration
  var connectionDocking = injector.get('connectionDocking', false);


  // API

  this.start = function(event, connection, idx) {

    var context,
        gfx = canvas.getGraphics(connection),
        segmentStartIndex = idx - 1,
        segmentEndIndex = idx,
        waypoints = connection.waypoints,
        segmentStart = waypoints[segmentStartIndex],
        segmentEnd = waypoints[segmentEndIndex],
        intersection = getConnectionIntersection(canvas, waypoints, event),
        direction, axis, dragPosition;

    direction = pointsAligned(segmentStart, segmentEnd);

    // do not move diagonal connection
    if (!direction) {
      return;
    }

    // the axis where we are going to move things
    axis = direction === 'v' ? 'x' : 'y';

    if (segmentStartIndex === 0) {
      segmentStart = getDocking(segmentStart, connection.source, axis);
    }

    if (segmentEndIndex === waypoints.length - 1) {
      segmentEnd = getDocking(segmentEnd, connection.target, axis);
    }

    if (intersection) {
      dragPosition = intersection.point;
    } else {

      // set to segment center as default
      dragPosition = {
        x: (segmentStart.x + segmentEnd.x) / 2,
        y: (segmentStart.y + segmentEnd.y) / 2
      };
    }

    context = {
      connection: connection,
      segmentStartIndex: segmentStartIndex,
      segmentEndIndex: segmentEndIndex,
      segmentStart: segmentStart,
      segmentEnd: segmentEnd,
      axis: axis,
      dragPosition: dragPosition
    };

    dragging.init(event, dragPosition, 'connectionSegment.move', {
      cursor: axis === 'x' ? 'resize-ew' : 'resize-ns',
      data: {
        connection: connection,
        connectionGfx: gfx,
        context: context
      }
    });
  };

  /**
   * Crop connection if connection cropping is provided.
   *
   * @param {Connection} connection
   * @param {Array<Point>} newWaypoints
   *
   * @return {Array<Point>} cropped connection waypoints
   */
  function cropConnection(connection, newWaypoints) {

    // crop connection, if docking service is provided only
    if (!connectionDocking) {
      return newWaypoints;
    }

    var oldWaypoints = connection.waypoints,
        croppedWaypoints;

    // temporary set new waypoints
    connection.waypoints = newWaypoints;

    croppedWaypoints = connectionDocking.getCroppedWaypoints(connection);

    // restore old waypoints
    connection.waypoints = oldWaypoints;

    return croppedWaypoints;
  }

  // DRAGGING IMPLEMENTATION

  function redrawConnection(data) {
    graphicsFactory.update('connection', data.connection, data.connectionGfx);
  }

  function updateDragger(context, segmentOffset, event) {

    var newWaypoints = context.newWaypoints,
        segmentStartIndex = context.segmentStartIndex + segmentOffset,
        segmentStart = newWaypoints[segmentStartIndex],
        segmentEndIndex = context.segmentEndIndex + segmentOffset,
        segmentEnd = newWaypoints[segmentEndIndex],
        axis = flipAxis(context.axis);

    // make sure the dragger does not move
    // outside the connection
    var draggerPosition = axisFenced(event, segmentStart, segmentEnd, axis);

    // update dragger
    SvgTransformUtil_translate(context.draggerGfx, draggerPosition.x, draggerPosition.y);
  }

  /**
   * Filter waypoints for redundant ones (i.e. on the same axis).
   * Returns the filtered waypoints and the offset related to the segment move.
   *
   * @param {Array<Point>} waypoints
   * @param {Integer} segmentStartIndex of moved segment start
   *
   * @return {Object} { filteredWaypoints, segmentOffset }
   */
  function filterRedundantWaypoints(waypoints, segmentStartIndex) {

    var segmentOffset = 0;

    var filteredWaypoints = waypoints.filter(function(r, idx) {
      if (pointsOnLine(waypoints[idx - 1], waypoints[idx + 1], r)) {

        // remove point and increment offset
        segmentOffset = idx <= segmentStartIndex ? segmentOffset - 1 : segmentOffset;
        return false;
      }

      // dont remove point
      return true;
    });

    return {
      waypoints: filteredWaypoints,
      segmentOffset: segmentOffset
    };
  }

  eventBus.on('connectionSegment.move.start', function(event) {

    var context = event.context,
        connection = event.connection,
        layer = canvas.getLayer('overlays');

    context.originalWaypoints = connection.waypoints.slice();

    // add dragger gfx
    context.draggerGfx = addSegmentDragger(layer, context.segmentStart, context.segmentEnd);
    index_esm_classes(context.draggerGfx).add('djs-dragging');

    canvas.addMarker(connection, ConnectionSegmentMove_MARKER_CONNECT_UPDATING);
  });

  eventBus.on('connectionSegment.move.move', function(event) {

    var context = event.context,
        connection = context.connection,
        segmentStartIndex = context.segmentStartIndex,
        segmentEndIndex = context.segmentEndIndex,
        segmentStart = context.segmentStart,
        segmentEnd = context.segmentEnd,
        axis = context.axis;

    var newWaypoints = context.originalWaypoints.slice(),
        newSegmentStart = axisAdd(segmentStart, axis, event['d' + axis]),
        newSegmentEnd = axisAdd(segmentEnd, axis, event['d' + axis]);

    // original waypoint count and added / removed
    // from start waypoint delta. We use the later
    // to retrieve the updated segmentStartIndex / segmentEndIndex
    var waypointCount = newWaypoints.length,
        segmentOffset = 0;

    // move segment start / end by axis delta
    newWaypoints[segmentStartIndex] = newSegmentStart;
    newWaypoints[segmentEndIndex] = newSegmentEnd;

    var sourceToSegmentOrientation,
        targetToSegmentOrientation;

    // handle first segment
    if (segmentStartIndex < 2) {
      sourceToSegmentOrientation = getOrientation(connection.source, newSegmentStart);

      // first bendpoint, remove first segment if intersecting
      if (segmentStartIndex === 1) {

        if (sourceToSegmentOrientation === 'intersect') {
          newWaypoints.shift();
          newWaypoints[0] = newSegmentStart;
          segmentOffset--;
        }
      }

      // docking point, add segment if not intersecting anymore
      else {
        if (sourceToSegmentOrientation !== 'intersect') {
          newWaypoints.unshift(segmentStart);
          segmentOffset++;
        }
      }
    }

    // handle last segment
    if (segmentEndIndex > waypointCount - 3) {
      targetToSegmentOrientation = getOrientation(connection.target, newSegmentEnd);

      // last bendpoint, remove last segment if intersecting
      if (segmentEndIndex === waypointCount - 2) {

        if (targetToSegmentOrientation === 'intersect') {
          newWaypoints.pop();
          newWaypoints[newWaypoints.length - 1] = newSegmentEnd;
        }
      }

      // last bendpoint, remove last segment if intersecting
      else {
        if (targetToSegmentOrientation !== 'intersect') {
          newWaypoints.push(segmentEnd);
        }
      }
    }

    // update connection waypoints
    context.newWaypoints = connection.waypoints = cropConnection(connection, newWaypoints);

    // update dragger position
    updateDragger(context, segmentOffset, event);

    // save segmentOffset in context
    context.newSegmentStartIndex = segmentStartIndex + segmentOffset;

    // redraw connection
    redrawConnection(event);
  });

  eventBus.on('connectionSegment.move.hover', function(event) {

    event.context.hover = event.hover;
    canvas.addMarker(event.hover, ConnectionSegmentMove_MARKER_CONNECT_HOVER);
  });

  eventBus.on([
    'connectionSegment.move.out',
    'connectionSegment.move.cleanup'
  ], function(event) {

    // remove connect marker
    // if it was added
    var hover = event.context.hover;

    if (hover) {
      canvas.removeMarker(hover, ConnectionSegmentMove_MARKER_CONNECT_HOVER);
    }
  });

  eventBus.on('connectionSegment.move.cleanup', function(event) {

    var context = event.context,
        connection = context.connection;

    // remove dragger gfx
    if (context.draggerGfx) {
      remove(context.draggerGfx);
    }

    canvas.removeMarker(connection, ConnectionSegmentMove_MARKER_CONNECT_UPDATING);
  });

  eventBus.on([
    'connectionSegment.move.cancel',
    'connectionSegment.move.end'
  ], function(event) {
    var context = event.context,
        connection = context.connection;

    connection.waypoints = context.originalWaypoints;

    redrawConnection(event);
  });

  eventBus.on('connectionSegment.move.end', function(event) {

    var context = event.context,
        connection = context.connection,
        newWaypoints = context.newWaypoints,
        newSegmentStartIndex = context.newSegmentStartIndex;

    // ensure we have actual pixel values bendpoint
    // coordinates (important when zoom level was > 1 during move)
    newWaypoints = newWaypoints.map(function(p) {
      return {
        original: p.original,
        x: Math.round(p.x),
        y: Math.round(p.y)
      };
    });

    // apply filter redunant waypoints
    var filtered = filterRedundantWaypoints(newWaypoints, newSegmentStartIndex);

    // get filtered waypoints
    var filteredWaypoints = filtered.waypoints,
        croppedWaypoints = cropConnection(connection, filteredWaypoints),
        segmentOffset = filtered.segmentOffset;

    var hints = {
      segmentMove: {
        segmentStartIndex: context.segmentStartIndex,
        newSegmentStartIndex: newSegmentStartIndex + segmentOffset
      }
    };

    modeling.updateWaypoints(connection, croppedWaypoints, hints);
  });
}

ConnectionSegmentMove.$inject = [
  'injector',
  'eventBus',
  'canvas',
  'dragging',
  'graphicsFactory',
  'modeling'
];

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/snapping/SnapUtil.js
var abs = Math.abs,
    SnapUtil_round = Math.round;


/**
 * Snap value to a collection of reference values.
 *
 * @param  {number} value
 * @param  {Array<number>} values
 * @param  {number} [tolerance=10]
 *
 * @return {number} the value we snapped to or null, if none snapped
 */
function SnapUtil_snapTo(value, values, tolerance) {
  tolerance = tolerance === undefined ? 10 : tolerance;

  var idx, snapValue;

  for (idx = 0; idx < values.length; idx++) {
    snapValue = values[idx];

    if (abs(snapValue - value) <= tolerance) {
      return snapValue;
    }
  }
}


function topLeft(bounds) {
  return {
    x: bounds.x,
    y: bounds.y
  };
}

function topRight(bounds) {
  return {
    x: bounds.x + bounds.width,
    y: bounds.y
  };
}

function bottomLeft(bounds) {
  return {
    x: bounds.x,
    y: bounds.y + bounds.height
  };
}

function bottomRight(bounds) {
  return {
    x: bounds.x + bounds.width,
    y: bounds.y + bounds.height
  };
}

function SnapUtil_mid(bounds, defaultValue) {

  if (!bounds || isNaN(bounds.x) || isNaN(bounds.y)) {
    return defaultValue;
  }

  return {
    x: SnapUtil_round(bounds.x + bounds.width / 2),
    y: SnapUtil_round(bounds.y + bounds.height / 2)
  };
}


/**
 * Retrieve the snap state of the given event.
 *
 * @param  {Event} event
 * @param  {string} axis
 *
 * @return {boolean} the snapped state
 *
 */
function isSnapped(event, axis) {
  var snapped = event.snapped;

  if (!snapped) {
    return false;
  }

  if (typeof axis === 'string') {
    return snapped[axis];
  }

  return snapped.x && snapped.y;
}


/**
 * Set the given event as snapped.
 *
 * This method may change the x and/or y position of the shape
 * from the given event!
 *
 * @param {Event} event
 * @param {string} axis
 * @param {number|boolean} value
 *
 * @return {number} old value
 */
function setSnapped(event, axis, value) {
  if (typeof axis !== 'string') {
    throw new Error('axis must be in [x, y]');
  }

  if (typeof value !== 'number' && value !== false) {
    throw new Error('value must be Number or false');
  }

  var delta,
      previousValue = event[axis];

  var snapped = event.snapped = (event.snapped || {});


  if (value === false) {
    snapped[axis] = false;
  } else {
    snapped[axis] = true;

    delta = value - previousValue;

    event[axis] += delta;
    event['d' + axis] += delta;
  }

  return previousValue;
}

/**
 * Get children of a shape.
 *
 * @param {djs.model.Shape} parent
 *
 * @returns {Array<djs.model.Shape|djs.model.Connection>}
 */
function SnapUtil_getChildren(parent) {
  return parent.children || [];
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/bendpoints/BendpointSnapping.js




var BendpointSnapping_abs= Math.abs,
    BendpointSnapping_round = Math.round;

var TOLERANCE = 10;


function BendpointSnapping(eventBus) {

  function snapTo(values, value) {

    if (index_esm_isArray(values)) {
      var i = values.length;

      while (i--) if (BendpointSnapping_abs(values[i] - value) <= TOLERANCE) {
        return values[i];
      }
    } else {
      values = +values;
      var rem = value % values;

      if (rem < TOLERANCE) {
        return value - rem;
      }

      if (rem > values - TOLERANCE) {
        return value - rem + values;
      }
    }

    return value;
  }

  function mid(element) {
    if (element.width) {
      return {
        x: BendpointSnapping_round(element.width / 2 + element.x),
        y: BendpointSnapping_round(element.height / 2 + element.y)
      };
    }
  }

  // connection segment snapping //////////////////////

  function getConnectionSegmentSnaps(context) {

    var snapPoints = context.snapPoints,
        connection = context.connection,
        waypoints = connection.waypoints,
        segmentStart = context.segmentStart,
        segmentStartIndex = context.segmentStartIndex,
        segmentEnd = context.segmentEnd,
        segmentEndIndex = context.segmentEndIndex,
        axis = context.axis;

    if (snapPoints) {
      return snapPoints;
    }

    var referenceWaypoints = [
      waypoints[segmentStartIndex - 1],
      segmentStart,
      segmentEnd,
      waypoints[segmentEndIndex + 1]
    ];

    if (segmentStartIndex < 2) {
      referenceWaypoints.unshift(mid(connection.source));
    }

    if (segmentEndIndex > waypoints.length - 3) {
      referenceWaypoints.unshift(mid(connection.target));
    }

    context.snapPoints = snapPoints = { horizontal: [] , vertical: [] };

    forEach(referenceWaypoints, function(p) {

      // we snap on existing bendpoints only,
      // not placeholders that are inserted during add
      if (p) {
        p = p.original || p;

        if (axis === 'y') {
          snapPoints.horizontal.push(p.y);
        }

        if (axis === 'x') {
          snapPoints.vertical.push(p.x);
        }
      }
    });

    return snapPoints;
  }

  eventBus.on('connectionSegment.move.move', 1500, function(event) {
    var context = event.context,
        snapPoints = getConnectionSegmentSnaps(context),
        x = event.x,
        y = event.y,
        sx, sy;

    if (!snapPoints) {
      return;
    }

    // snap
    sx = snapTo(snapPoints.vertical, x);
    sy = snapTo(snapPoints.horizontal, y);


    // correction x/y
    var cx = (x - sx),
        cy = (y - sy);

    // update delta
    index_esm_assign(event, {
      dx: event.dx - cx,
      dy: event.dy - cy,
      x: sx,
      y: sy
    });

    // only set snapped if actually snapped
    if (cx || snapPoints.vertical.indexOf(x) !== -1) {
      setSnapped(event, 'x', sx);
    }

    if (cy || snapPoints.horizontal.indexOf(y) !== -1) {
      setSnapped(event, 'y', sy);
    }
  });


  // bendpoint snapping //////////////////////

  function getBendpointSnaps(context) {

    var snapPoints = context.snapPoints,
        waypoints = context.connection.waypoints,
        bendpointIndex = context.bendpointIndex;

    if (snapPoints) {
      return snapPoints;
    }

    var referenceWaypoints = [ waypoints[bendpointIndex - 1], waypoints[bendpointIndex + 1] ];

    context.snapPoints = snapPoints = { horizontal: [] , vertical: [] };

    forEach(referenceWaypoints, function(p) {

      // we snap on existing bendpoints only,
      // not placeholders that are inserted during add
      if (p) {
        p = p.original || p;

        snapPoints.horizontal.push(p.y);
        snapPoints.vertical.push(p.x);
      }
    });

    return snapPoints;
  }


  eventBus.on([ 'bendpoint.move.move', 'bendpoint.move.end' ], 1500, function(event) {

    var context = event.context,
        snapPoints = getBendpointSnaps(context),
        hover = context.hover,
        hoverMid = hover && mid(hover),
        x = event.x,
        y = event.y,
        sx, sy;

    if (!snapPoints) {
      return;
    }

    // snap to hover mid
    sx = snapTo(hoverMid ? snapPoints.vertical.concat([ hoverMid.x ]) : snapPoints.vertical, x);
    sy = snapTo(hoverMid ? snapPoints.horizontal.concat([ hoverMid.y ]) : snapPoints.horizontal, y);

    // correction x/y
    var cx = (x - sx),
        cy = (y - sy);

    // update delta
    index_esm_assign(event, {
      dx: event.dx - cx,
      dy: event.dy - cy,
      x: event.x - cx,
      y: event.y - cy
    });

    // only set snapped if actually snapped
    if (cx || snapPoints.vertical.indexOf(x) !== -1) {
      setSnapped(event, 'x', sx);
    }

    if (cy || snapPoints.horizontal.indexOf(y) !== -1) {
      setSnapped(event, 'y', sy);
    }
  });
}


BendpointSnapping.$inject = [ 'eventBus' ];
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/bendpoints/index.js










/* harmony default export */ var bendpoints = ({
  __depends__: [
    features_dragging,
    features_rules
  ],
  __init__: [ 'bendpoints', 'bendpointSnapping', 'bendpointMovePreview' ],
  bendpoints: [ 'type', Bendpoints ],
  bendpointMove: [ 'type', BendpointMove ],
  bendpointMovePreview: [ 'type', BendpointMovePreview ],
  connectionSegmentMove: [ 'type', ConnectionSegmentMove ],
  bendpointSnapping: [ 'type', BendpointSnapping ]
});

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/connect/Connect.js





function Connect(eventBus, dragging, modeling, rules) {

  // rules

  function canConnect(source, target) {
    return rules.allowed('connection.create', {
      source: source,
      target: target
    });
  }

  function canConnectReverse(source, target) {
    return canConnect(target, source);
  }


  // event handlers

  eventBus.on('connect.hover', function(event) {
    var context = event.context,
        start = context.start,
        hover = event.hover,
        canExecute;

    // cache hover state
    context.hover = hover;

    canExecute = context.canExecute = canConnect(start, hover);

    // ignore hover
    if (isNil(canExecute)) {
      return;
    }

    if (canExecute !== false) {
      context.source = start;
      context.target = hover;

      return;
    }

    canExecute = context.canExecute = canConnectReverse(start, hover);

    // ignore hover
    if (isNil(canExecute)) {
      return;
    }

    if (canExecute !== false) {
      context.source = hover;
      context.target = start;
    }
  });

  eventBus.on([ 'connect.out', 'connect.cleanup' ], function(event) {
    var context = event.context;

    context.hover = null;
    context.source = null;
    context.target = null;

    context.canExecute = false;
  });

  eventBus.on('connect.end', function(event) {
    var context = event.context,
        canExecute = context.canExecute,
        connectionStart = context.connectionStart,
        connectionEnd = {
          x: event.x,
          y: event.y
        },
        source = context.source,
        target = context.target;

    if (!canExecute) {
      return false;
    }

    var attrs = null,
        hints = {
          connectionStart: Connect_isReverse(context) ? connectionEnd : connectionStart,
          connectionEnd: Connect_isReverse(context) ? connectionStart : connectionEnd
        };

    if (isObject(canExecute)) {
      attrs = canExecute;
    }

    modeling.connect(source, target, attrs, hints);
  });


  // API

  /**
   * Start connect operation.
   *
   * @param {DOMEvent} event
   * @param {djs.model.Base} start
   * @param {Point} [connectionStart]
   * @param {boolean} [autoActivate=false]
   */
  this.start = function(event, start, connectionStart, autoActivate) {
    if (!isObject(connectionStart)) {
      autoActivate = connectionStart;
      connectionStart = getMid(start);
    }

    dragging.init(event, 'connect', {
      autoActivate: autoActivate,
      data: {
        shape: start,
        context: {
          start: start,
          connectionStart: connectionStart
        }
      }
    });
  };
}

Connect.$inject = [
  'eventBus',
  'dragging',
  'modeling',
  'rules'
];


// helpers //////////

function Connect_isReverse(context) {
  var hover = context.hover,
      source = context.source,
      target = context.target;

  return hover && source && hover === source && source !== target;
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/connect/ConnectPreview.js


var ConnectPreview_HIGH_PRIORITY = 1100,
    ConnectPreview_LOW_PRIORITY = 900;

var ConnectPreview_MARKER_OK = 'connect-ok',
    ConnectPreview_MARKER_NOT_OK = 'connect-not-ok';

/**
 * Shows connection preview during connect.
 *
 * @param {didi.Injector} injector
 * @param {EventBus} eventBus
 * @param {Canvas} canvas
 */
function ConnectPreview(injector, eventBus, canvas) {
  var connectionPreview = injector.get('connectionPreview', false);

  connectionPreview && eventBus.on('connect.move', function(event) {
    var context = event.context,
        canConnect = context.canExecute,
        hover = context.hover,
        source = context.source,
        start = context.start,
        startPosition = context.startPosition,
        connectionStart = context.connectionStart,
        connectionEnd = context.connectionEnd,
        target = context.target;

    if (!connectionStart) {
      connectionStart = Connect_isReverse(context) ? {
        x: event.x,
        y: event.y
      } : startPosition;
    }

    if (!connectionEnd) {
      connectionEnd = Connect_isReverse(context) ? startPosition : {
        x: event.x,
        y: event.y
      };
    }

    connectionPreview.drawPreview(context, canConnect, {
      source: source || start,
      target: target || hover,
      connectionStart: connectionStart,
      connectionEnd: connectionEnd
    });
  });

  eventBus.on('connect.hover', ConnectPreview_LOW_PRIORITY, function(event) {
    var context = event.context,
        hover = event.hover,
        canExecute = context.canExecute;

    // ignore hover
    if (canExecute === null) {
      return;
    }

    canvas.addMarker(hover, canExecute ? ConnectPreview_MARKER_OK : ConnectPreview_MARKER_NOT_OK);
  });

  eventBus.on([
    'connect.out',
    'connect.cleanup'
  ], ConnectPreview_HIGH_PRIORITY, function(event) {
    var hover = event.hover;

    if (hover) {
      canvas.removeMarker(hover, ConnectPreview_MARKER_OK);
      canvas.removeMarker(hover, ConnectPreview_MARKER_NOT_OK);
    }
  });

  connectionPreview && eventBus.on('connect.cleanup', function(event) {
    connectionPreview.cleanUp(event.context);
  });
}

ConnectPreview.$inject = [
  'injector',
  'eventBus',
  'canvas'
];

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/connect/index.js







/* harmony default export */ var features_connect = ({
  __depends__: [
    features_selection,
    features_rules,
    features_dragging
  ],
  __init__: [
    'connectPreview'
  ],
  connect: [ 'type', Connect ],
  connectPreview: [ 'type', ConnectPreview ]
});

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/connection-preview/ConnectionPreview.js







var MARKER_CONNECTION_PREVIEW = 'djs-connection-preview';

/**
 * Draws connection preview. Optionally, this can use layouter and connection docking to draw
 * better looking previews.
 *
 * @param {didi.Injector} injector
 * @param {Canvas} canvas
 * @param {GraphicsFactory} graphicsFactory
 * @param {ElementFactory} elementFactory
 */
function ConnectionPreview(
    injector,
    canvas,
    graphicsFactory,
    elementFactory
) {
  this._canvas = canvas;
  this._graphicsFactory = graphicsFactory;
  this._elementFactory = elementFactory;

  // optional components
  this._connectionDocking = injector.get('connectionDocking', false);
  this._layouter = injector.get('layouter', false);
}

ConnectionPreview.$inject = [
  'injector',
  'canvas',
  'graphicsFactory',
  'elementFactory'
];

/**
 * Draw connection preview.
 *
 * Provide at least one of <source, connectionStart> and <target, connectionEnd> to create a preview.
 * In the clean up stage, call `connectionPreview#cleanUp` with the context to remove preview.
 *
 * @param {Object} context
 * @param {Object|boolean} canConnect
 * @param {Object} hints
 * @param {djs.model.shape} [hints.source] source element
 * @param {djs.model.shape} [hints.target] target element
 * @param {Point} [hints.connectionStart] connection preview start
 * @param {Point} [hints.connectionEnd] connection preview end
 * @param {Array<Point>} [hints.waypoints] provided waypoints for preview
 * @param {boolean} [hints.noLayout] true if preview should not be laid out
 * @param {boolean} [hints.noCropping] true if preview should not be cropped
 * @param {boolean} [hints.noNoop] true if simple connection should not be drawn
 */
ConnectionPreview.prototype.drawPreview = function(context, canConnect, hints) {

  hints = hints || {};

  var connectionPreviewGfx = context.connectionPreviewGfx,
      getConnection = context.getConnection,
      source = hints.source,
      target = hints.target,
      waypoints = hints.waypoints,
      connectionStart = hints.connectionStart,
      connectionEnd = hints.connectionEnd,
      noLayout = hints.noLayout,
      noCropping = hints.noCropping,
      noNoop = hints.noNoop,
      connection;

  var self = this;

  if (!connectionPreviewGfx) {
    connectionPreviewGfx = context.connectionPreviewGfx = this.createConnectionPreviewGfx();
  }

  clear(connectionPreviewGfx);

  if (!getConnection) {
    getConnection = context.getConnection = cacheReturnValues(function(canConnect, source, target) {
      return self.getConnection(canConnect, source, target);
    });
  }

  if (canConnect) {
    connection = getConnection(canConnect, source, target);
  }

  if (!connection) {
    !noNoop && this.drawNoopPreview(connectionPreviewGfx, hints);
    return;
  }

  connection.waypoints = waypoints || [];

  // optional layout
  if (this._layouter && !noLayout) {
    connection.waypoints = this._layouter.layoutConnection(connection, {
      source: source,
      target: target,
      connectionStart: connectionStart,
      connectionEnd: connectionEnd,
      waypoints: hints.waypoints || connection.waypoints
    });
  }

  // fallback if no waypoints were provided nor created with layouter
  if (!connection.waypoints || !connection.waypoints.length) {
    connection.waypoints = [
      source ? getMid(source) : connectionStart,
      target ? getMid(target) : connectionEnd
    ];
  }

  // optional cropping
  if (this._connectionDocking && (source || target) && !noCropping) {
    connection.waypoints = this._connectionDocking.getCroppedWaypoints(connection, source, target);
  }

  this._graphicsFactory.drawConnection(connectionPreviewGfx, connection);
};

/**
 * Draw simple connection between source and target or provided points.
 *
 * @param {SVGElement} connectionPreviewGfx container for the connection
 * @param {Object} hints
 * @param {djs.model.shape} [hints.source] source element
 * @param {djs.model.shape} [hints.target] target element
 * @param {Point} [hints.connectionStart] required if source is not provided
 * @param {Point} [hints.connectionEnd] required if target is not provided
 */
ConnectionPreview.prototype.drawNoopPreview = function(connectionPreviewGfx, hints) {
  var source = hints.source,
      target = hints.target,
      start = hints.connectionStart || getMid(source),
      end = hints.connectionEnd || getMid(target);

  var waypoints = this.cropWaypoints(start, end, source, target);

  var connection = this.createNoopConnection(waypoints[0], waypoints[1]);

  index_esm_append(connectionPreviewGfx, connection);
};

/**
 * Return cropped waypoints.
 *
 * @param {Point} start
 * @param {Point} end
 * @param {djs.model.shape} source
 * @param {djs.model.shape} target
 *
 * @returns {Array}
 */
ConnectionPreview.prototype.cropWaypoints = function(start, end, source, target) {
  var graphicsFactory = this._graphicsFactory,
      sourcePath = source && graphicsFactory.getShapePath(source),
      targetPath = target && graphicsFactory.getShapePath(target),
      connectionPath = graphicsFactory.getConnectionPath({ waypoints: [ start, end ] });

  start = (source && getElementLineIntersection(sourcePath, connectionPath, true)) || start;
  end = (target && getElementLineIntersection(targetPath, connectionPath, false)) || end;

  return [ start, end ];
};

/**
 * Remove connection preview container if it exists.
 *
 * @param {Object} [context]
 * @param {SVGElement} [context.connectionPreviewGfx] preview container
 */
ConnectionPreview.prototype.cleanUp = function(context) {
  if (context && context.connectionPreviewGfx) {
    remove(context.connectionPreviewGfx);
  }
};

/**
 * Get connection that connects source and target.
 *
 * @param {Object|boolean} canConnect
 *
 * @returns {djs.model.connection}
 */
ConnectionPreview.prototype.getConnection = function(canConnect) {
  var attrs = ensureConnectionAttrs(canConnect);

  return this._elementFactory.createConnection(attrs);
};


/**
 * Add and return preview graphics.
 *
 * @returns {SVGElement}
 */
ConnectionPreview.prototype.createConnectionPreviewGfx = function() {
  var gfx = index_esm_create('g');

  index_esm_attr(gfx, {
    pointerEvents: 'none'
  });

  index_esm_classes(gfx).add(MARKER_CONNECTION_PREVIEW);

  index_esm_append(this._canvas.getDefaultLayer(), gfx);

  return gfx;
};

/**
 * Create and return simple connection.
 *
 * @param {Point} start
 * @param {Point} end
 *
 * @returns {SVGElement}
 */
ConnectionPreview.prototype.createNoopConnection = function(start, end) {
  var connection = index_esm_create('polyline');

  index_esm_attr(connection, {
    'stroke': '#333',
    'strokeDasharray': [ 1 ],
    'strokeWidth': 2,
    'pointer-events': 'none'
  });

  index_esm_attr(connection, { 'points': [ start.x, start.y, end.x, end.y ] });

  return connection;
};

// helpers //////////

/**
 * Returns function that returns cached return values referenced by stringified first argument.
 *
 * @param {Function} fn
 *
 * @return {Function}
 */
function cacheReturnValues(fn) {
  var returnValues = {};

  /**
   * Return cached return value referenced by stringified first argument.
   *
   * @returns {*}
   */
  return function(firstArgument) {
    var key = JSON.stringify(firstArgument);

    var returnValue = returnValues[key];

    if (!returnValue) {
      returnValue = returnValues[key] = fn.apply(null, arguments);
    }

    return returnValue;
  };
}

/**
 * Ensure connection attributes is object.
 *
 * @param {Object|boolean} canConnect
 *
 * @returns {Object}
 */
function ensureConnectionAttrs(canConnect) {
  if (isObject(canConnect)) {
    return canConnect;
  } else {
    return {};
  }
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/connection-preview/index.js


/* harmony default export */ var connection_preview = ({
  __init__: [ 'connectionPreview' ],
  connectionPreview: [ 'type', ConnectionPreview ]
});

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/util/IdGenerator.js
/**
 * Util that provides unique IDs.
 *
 * @class djs.util.IdGenerator
 * @constructor
 * @memberOf djs.util
 *
 * The ids can be customized via a given prefix and contain a random value to avoid collisions.
 *
 * @param {string} prefix a prefix to prepend to generated ids (for better readability)
 */
function IdGenerator(prefix) {

  this._counter = 0;
  this._prefix = (prefix ? prefix + '-' : '') + Math.floor(Math.random() * 1000000000) + '-';
}

/**
 * Returns a next unique ID.
 *
 * @method djs.util.IdGenerator#next
 *
 * @returns {string} the id
 */
IdGenerator.prototype.next = function() {
  return this._prefix + (++this._counter);
};

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/overlays/Overlays.js








// document wide unique overlay ids
var Overlays_ids = new IdGenerator('ov');

var Overlays_LOW_PRIORITY = 500;


/**
 * A service that allows users to attach overlays to diagram elements.
 *
 * The overlay service will take care of overlay positioning during updates.
 *
 * @example
 *
 * // add a pink badge on the top left of the shape
 * overlays.add(someShape, {
 *   position: {
 *     top: -5,
 *     left: -5
 *   },
 *   html: '<div style="width: 10px; background: fuchsia; color: white;">0</div>'
 * });
 *
 * // or add via shape id
 *
 * overlays.add('some-element-id', {
 *   position: {
 *     top: -5,
 *     left: -5
 *   }
 *   html: '<div style="width: 10px; background: fuchsia; color: white;">0</div>'
 * });
 *
 * // or add with optional type
 *
 * overlays.add(someShape, 'badge', {
 *   position: {
 *     top: -5,
 *     left: -5
 *   }
 *   html: '<div style="width: 10px; background: fuchsia; color: white;">0</div>'
 * });
 *
 *
 * // remove an overlay
 *
 * var id = overlays.add(...);
 * overlays.remove(id);
 *
 *
 * You may configure overlay defaults during tool by providing a `config` module
 * with `overlays.defaults` as an entry:
 *
 * {
 *   overlays: {
 *     defaults: {
 *       show: {
 *         minZoom: 0.7,
 *         maxZoom: 5.0
 *       },
 *       scale: {
 *         min: 1
 *       }
 *     }
 * }
 *
 * @param {Object} config
 * @param {EventBus} eventBus
 * @param {Canvas} canvas
 * @param {ElementRegistry} elementRegistry
 */
function Overlays(config, eventBus, canvas, elementRegistry) {

  this._eventBus = eventBus;
  this._canvas = canvas;
  this._elementRegistry = elementRegistry;

  this._ids = Overlays_ids;

  this._overlayDefaults = index_esm_assign({

    // no show constraints
    show: null,

    // always scale
    scale: true
  }, config && config.defaults);

  /**
   * Mapping overlayId -> overlay
   */
  this._overlays = {};

  /**
   * Mapping elementId -> overlay container
   */
  this._overlayContainers = [];

  // root html element for all overlays
  this._overlayRoot = createRoot(canvas.getContainer());

  this._init();
}


Overlays.$inject = [
  'config.overlays',
  'eventBus',
  'canvas',
  'elementRegistry'
];


/**
 * Returns the overlay with the specified id or a list of overlays
 * for an element with a given type.
 *
 * @example
 *
 * // return the single overlay with the given id
 * overlays.get('some-id');
 *
 * // return all overlays for the shape
 * overlays.get({ element: someShape });
 *
 * // return all overlays on shape with type 'badge'
 * overlays.get({ element: someShape, type: 'badge' });
 *
 * // shape can also be specified as id
 * overlays.get({ element: 'element-id', type: 'badge' });
 *
 *
 * @param {Object} search
 * @param {string} [search.id]
 * @param {string|djs.model.Base} [search.element]
 * @param {string} [search.type]
 *
 * @return {Object|Array<Object>} the overlay(s)
 */
Overlays.prototype.get = function(search) {

  if (isString(search)) {
    search = { id: search };
  }

  if (isString(search.element)) {
    search.element = this._elementRegistry.get(search.element);
  }

  if (search.element) {
    var container = this._getOverlayContainer(search.element, true);

    // return a list of overlays when searching by element (+type)
    if (container) {
      return search.type ? index_esm_filter(container.overlays, matchPattern({ type: search.type })) : container.overlays.slice();
    } else {
      return [];
    }
  } else
  if (search.type) {
    return index_esm_filter(this._overlays, matchPattern({ type: search.type }));
  } else {

    // return single element when searching by id
    return search.id ? this._overlays[search.id] : null;
  }
};

/**
 * Adds a HTML overlay to an element.
 *
 * @param {string|djs.model.Base}   element   attach overlay to this shape
 * @param {string}                  [type]    optional type to assign to the overlay
 * @param {Object}                  overlay   the overlay configuration
 *
 * @param {string|DOMElement}       overlay.html                 html element to use as an overlay
 * @param {Object}                  [overlay.show]               show configuration
 * @param {number}                  [overlay.show.minZoom]       minimal zoom level to show the overlay
 * @param {number}                  [overlay.show.maxZoom]       maximum zoom level to show the overlay
 * @param {Object}                  overlay.position             where to attach the overlay
 * @param {number}                  [overlay.position.left]      relative to element bbox left attachment
 * @param {number}                  [overlay.position.top]       relative to element bbox top attachment
 * @param {number}                  [overlay.position.bottom]    relative to element bbox bottom attachment
 * @param {number}                  [overlay.position.right]     relative to element bbox right attachment
 * @param {boolean|Object}          [overlay.scale=true]         false to preserve the same size regardless of
 *                                                               diagram zoom
 * @param {number}                  [overlay.scale.min]
 * @param {number}                  [overlay.scale.max]
 *
 * @return {string}                 id that may be used to reference the overlay for update or removal
 */
Overlays.prototype.add = function(element, type, overlay) {

  if (isObject(type)) {
    overlay = type;
    type = null;
  }

  if (!element.id) {
    element = this._elementRegistry.get(element);
  }

  if (!overlay.position) {
    throw new Error('must specifiy overlay position');
  }

  if (!overlay.html) {
    throw new Error('must specifiy overlay html');
  }

  if (!element) {
    throw new Error('invalid element specified');
  }

  var id = this._ids.next();

  overlay = index_esm_assign({}, this._overlayDefaults, overlay, {
    id: id,
    type: type,
    element: element,
    html: overlay.html
  });

  this._addOverlay(overlay);

  return id;
};


/**
 * Remove an overlay with the given id or all overlays matching the given filter.
 *
 * @see Overlays#get for filter options.
 *
 * @param {string} [id]
 * @param {Object} [filter]
 */
Overlays.prototype.remove = function(filter) {

  var overlays = this.get(filter) || [];

  if (!index_esm_isArray(overlays)) {
    overlays = [ overlays ];
  }

  var self = this;

  forEach(overlays, function(overlay) {

    var container = self._getOverlayContainer(overlay.element, true);

    if (overlay) {
      index_esm_remove(overlay.html);
      index_esm_remove(overlay.htmlContainer);

      delete overlay.htmlContainer;
      delete overlay.element;

      delete self._overlays[overlay.id];
    }

    if (container) {
      var idx = container.overlays.indexOf(overlay);
      if (idx !== -1) {
        container.overlays.splice(idx, 1);
      }
    }
  });

};


Overlays.prototype.show = function() {
  setVisible(this._overlayRoot);
};


Overlays.prototype.hide = function() {
  setVisible(this._overlayRoot, false);
};

Overlays.prototype.clear = function() {
  this._overlays = {};

  this._overlayContainers = [];

  index_esm_clear(this._overlayRoot);
};

Overlays.prototype._updateOverlayContainer = function(container) {
  var element = container.element,
      html = container.html;

  // update container left,top according to the elements x,y coordinates
  // this ensures we can attach child elements relative to this container

  var x = element.x,
      y = element.y;

  if (element.waypoints) {
    var bbox = getBBox(element);
    x = bbox.x;
    y = bbox.y;
  }

  setPosition(html, x, y);

  dist_index_esm_attr(container.html, 'data-container-id', element.id);
};


Overlays.prototype._updateOverlay = function(overlay) {

  var position = overlay.position,
      htmlContainer = overlay.htmlContainer,
      element = overlay.element;

  // update overlay html relative to shape because
  // it is already positioned on the element

  // update relative
  var left = position.left,
      top = position.top;

  if (position.right !== undefined) {

    var width;

    if (element.waypoints) {
      width = getBBox(element).width;
    } else {
      width = element.width;
    }

    left = position.right * -1 + width;
  }

  if (position.bottom !== undefined) {

    var height;

    if (element.waypoints) {
      height = getBBox(element).height;
    } else {
      height = element.height;
    }

    top = position.bottom * -1 + height;
  }

  setPosition(htmlContainer, left || 0, top || 0);
};


Overlays.prototype._createOverlayContainer = function(element) {
  var html = domify('<div class="djs-overlays" style="position: absolute" />');

  this._overlayRoot.appendChild(html);

  var container = {
    html: html,
    element: element,
    overlays: []
  };

  this._updateOverlayContainer(container);

  this._overlayContainers.push(container);

  return container;
};


Overlays.prototype._updateRoot = function(viewbox) {
  var scale = viewbox.scale || 1;

  var matrix = 'matrix(' +
  [
    scale,
    0,
    0,
    scale,
    -1 * viewbox.x * scale,
    -1 * viewbox.y * scale
  ].join(',') +
  ')';

  setTransform(this._overlayRoot, matrix);
};


Overlays.prototype._getOverlayContainer = function(element, raw) {
  var container = find(this._overlayContainers, function(c) {
    return c.element === element;
  });


  if (!container && !raw) {
    return this._createOverlayContainer(element);
  }

  return container;
};


Overlays.prototype._addOverlay = function(overlay) {

  var id = overlay.id,
      element = overlay.element,
      html = overlay.html,
      htmlContainer,
      overlayContainer;

  // unwrap jquery (for those who need it)
  if (html.get && html.constructor.prototype.jquery) {
    html = html.get(0);
  }

  // create proper html elements from
  // overlay HTML strings
  if (isString(html)) {
    html = domify(html);
  }

  overlayContainer = this._getOverlayContainer(element);

  htmlContainer = domify('<div class="djs-overlay" data-overlay-id="' + id + '" style="position: absolute">');

  htmlContainer.appendChild(html);

  if (overlay.type) {
    dist_index_esm_classes(htmlContainer).add('djs-overlay-' + overlay.type);
  }

  overlay.htmlContainer = htmlContainer;

  overlayContainer.overlays.push(overlay);
  overlayContainer.html.appendChild(htmlContainer);

  this._overlays[id] = overlay;

  this._updateOverlay(overlay);
  this._updateOverlayVisibilty(overlay, this._canvas.viewbox());
};


Overlays.prototype._updateOverlayVisibilty = function(overlay, viewbox) {
  var show = overlay.show,
      minZoom = show && show.minZoom,
      maxZoom = show && show.maxZoom,
      htmlContainer = overlay.htmlContainer,
      visible = true;

  if (show) {
    if (
      (isDefined(minZoom) && minZoom > viewbox.scale) ||
      (isDefined(maxZoom) && maxZoom < viewbox.scale)
    ) {
      visible = false;
    }

    setVisible(htmlContainer, visible);
  }

  this._updateOverlayScale(overlay, viewbox);
};


Overlays.prototype._updateOverlayScale = function(overlay, viewbox) {
  var shouldScale = overlay.scale,
      minScale,
      maxScale,
      htmlContainer = overlay.htmlContainer;

  var scale, transform = '';

  if (shouldScale !== true) {

    if (shouldScale === false) {
      minScale = 1;
      maxScale = 1;
    } else {
      minScale = shouldScale.min;
      maxScale = shouldScale.max;
    }

    if (isDefined(minScale) && viewbox.scale < minScale) {
      scale = (1 / viewbox.scale || 1) * minScale;
    }

    if (isDefined(maxScale) && viewbox.scale > maxScale) {
      scale = (1 / viewbox.scale || 1) * maxScale;
    }
  }

  if (isDefined(scale)) {
    transform = 'scale(' + scale + ',' + scale + ')';
  }

  setTransform(htmlContainer, transform);
};


Overlays.prototype._updateOverlaysVisibilty = function(viewbox) {

  var self = this;

  forEach(this._overlays, function(overlay) {
    self._updateOverlayVisibilty(overlay, viewbox);
  });
};


Overlays.prototype._init = function() {

  var eventBus = this._eventBus;

  var self = this;


  // scroll/zoom integration

  function updateViewbox(viewbox) {
    self._updateRoot(viewbox);
    self._updateOverlaysVisibilty(viewbox);

    self.show();
  }

  eventBus.on('canvas.viewbox.changing', function(event) {
    self.hide();
  });

  eventBus.on('canvas.viewbox.changed', function(event) {
    updateViewbox(event.viewbox);
  });


  // remove integration

  eventBus.on([ 'shape.remove', 'connection.remove' ], function(e) {
    var element = e.element;
    var overlays = self.get({ element: element });

    forEach(overlays, function(o) {
      self.remove(o.id);
    });

    var container = self._getOverlayContainer(element);

    if (container) {
      index_esm_remove(container.html);
      var i = self._overlayContainers.indexOf(container);
      if (i !== -1) {
        self._overlayContainers.splice(i, 1);
      }
    }
  });


  // move integration

  eventBus.on('element.changed', Overlays_LOW_PRIORITY, function(e) {
    var element = e.element;

    var container = self._getOverlayContainer(element, true);

    if (container) {
      forEach(container.overlays, function(overlay) {
        self._updateOverlay(overlay);
      });

      self._updateOverlayContainer(container);
    }
  });


  // marker integration, simply add them on the overlays as classes, too.

  eventBus.on('element.marker.update', function(e) {
    var container = self._getOverlayContainer(e.element, true);
    if (container) {
      dist_index_esm_classes(container.html)[e.add ? 'add' : 'remove'](e.marker);
    }
  });


  // clear overlays with diagram

  eventBus.on('diagram.clear', this.clear, this);
};



// helpers /////////////////////////////

function createRoot(parentNode) {
  var root = domify(
    '<div class="djs-overlay-container" style="position: absolute; width: 0; height: 0;" />'
  );

  parentNode.insertBefore(root, parentNode.firstChild);

  return root;
}

function setPosition(el, x, y) {
  index_esm_assign(el.style, { left: x + 'px', top: y + 'px' });
}

function setVisible(el, visible) {
  el.style.display = visible === false ? 'none' : '';
}

function setTransform(el, transform) {

  el.style['transform-origin'] = 'top left';

  [ '', '-ms-', '-webkit-' ].forEach(function(prefix) {
    el.style[prefix + 'transform'] = transform;
  });
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/overlays/index.js


/* harmony default export */ var features_overlays = ({
  __init__: [ 'overlays' ],
  overlays: [ 'type', Overlays ]
});
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/context-pad/ContextPad.js




var entrySelector = '.entry';

var ContextPad_DEFAULT_PRIORITY = 1000;


/**
 * A context pad that displays element specific, contextual actions next
 * to a diagram element.
 *
 * @param {Object} config
 * @param {boolean|Object} [config.scale={ min: 1.0, max: 1.5 }]
 * @param {number} [config.scale.min]
 * @param {number} [config.scale.max]
 * @param {EventBus} eventBus
 * @param {Overlays} overlays
 */
function ContextPad(config, eventBus, overlays) {

  this._eventBus = eventBus;
  this._overlays = overlays;

  var scale = isDefined(config && config.scale) ? config.scale : {
    min: 1,
    max: 1.5
  };

  this._overlaysConfig = {
    position: {
      right: -9,
      top: -6
    },
    scale: scale
  };

  this._current = null;

  this._init();
}

ContextPad.$inject = [
  'config.contextPad',
  'eventBus',
  'overlays'
];


/**
 * Registers events needed for interaction with other components
 */
ContextPad.prototype._init = function() {

  var eventBus = this._eventBus;

  var self = this;

  eventBus.on('selection.changed', function(e) {

    var selection = e.newSelection;

    if (selection.length === 1) {
      self.open(selection[0]);
    } else {
      self.close();
    }
  });

  eventBus.on('elements.delete', function(event) {
    var elements = event.elements;

    forEach(elements, function(e) {
      if (self.isOpen(e)) {
        self.close();
      }
    });
  });

  eventBus.on('element.changed', function(event) {
    var element = event.element,
        current = self._current;

    // force reopen if element for which we are currently opened changed
    if (current && current.element === element) {
      self.open(element, true);
    }
  });
};


/**
 * Register a provider with the context pad
 *
 * @param  {number} [priority=1000]
 * @param  {ContextPadProvider} provider
 *
 * @example
 * const contextPadProvider = {
  *   getContextPadEntries: function(element) {
  *     return function(entries) {
  *       return {
  *         ...entries,
  *         'entry-1': {
  *           label: 'My Entry',
  *           action: function() { alert("I have been clicked!"); }
  *         }
  *       };
  *     }
  *   }
  * };
  *
 * contextPad.registerProvider(800, contextPadProvider);
 */
ContextPad.prototype.registerProvider = function(priority, provider) {
  if (!provider) {
    provider = priority;
    priority = ContextPad_DEFAULT_PRIORITY;
  }

  this._eventBus.on('contextPad.getProviders', priority, function(event) {
    event.providers.push(provider);
  });
};


/**
 * Returns the context pad entries for a given element
 *
 * @param {djs.element.Base} element
 *
 * @return {Array<ContextPadEntryDescriptor>} list of entries
 */
ContextPad.prototype.getEntries = function(element) {
  var providers = this._getProviders();

  var entries = {};

  // loop through all providers and their entries.
  // group entries by id so that overriding an entry is possible
  forEach(providers, function(provider) {
    var entriesOrUpdater = provider.getContextPadEntries(element);

    if (isFunction(entriesOrUpdater)) {
      entries = entriesOrUpdater(entries);
    } else {
      forEach(entriesOrUpdater, function(entry, id) {
        entries[id] = entry;
      });
    }
  });

  return entries;
};


/**
 * Trigger an action available on the opened context pad
 *
 * @param  {string} action
 * @param  {Event} event
 * @param  {boolean} [autoActivate=false]
 */
ContextPad.prototype.trigger = function(action, event, autoActivate) {

  var element = this._current.element,
      entries = this._current.entries,
      entry,
      handler,
      originalEvent,
      button = event.delegateTarget || event.target;

  if (!button) {
    return event.preventDefault();
  }

  entry = entries[dist_index_esm_attr(button, 'data-action')];
  handler = entry.action;

  originalEvent = event.originalEvent || event;

  // simple action (via callback function)
  if (isFunction(handler)) {
    if (action === 'click') {
      return handler(originalEvent, element, autoActivate);
    }
  } else {
    if (handler[action]) {
      return handler[action](originalEvent, element, autoActivate);
    }
  }

  // silence other actions
  event.preventDefault();
};


/**
 * Open the context pad for the given element
 *
 * @param {djs.model.Base} element
 * @param {boolean} force if true, force reopening the context pad
 */
ContextPad.prototype.open = function(element, force) {
  if (!force && this.isOpen(element)) {
    return;
  }

  this.close();
  this._updateAndOpen(element);
};

ContextPad.prototype._getProviders = function(id) {

  var event = this._eventBus.createEvent({
    type: 'contextPad.getProviders',
    providers: []
  });

  this._eventBus.fire(event);

  return event.providers;
};

ContextPad.prototype._updateAndOpen = function(element) {

  var entries = this.getEntries(element),
      pad = this.getPad(element),
      html = pad.html;

  forEach(entries, function(entry, id) {
    var grouping = entry.group || 'default',
        control = domify(entry.html || '<div class="entry" draggable="true"></div>'),
        container;

    dist_index_esm_attr(control, 'data-action', id);

    container = query('[data-group=' + grouping + ']', html);
    if (!container) {
      container = domify('<div class="group" data-group="' + grouping + '"></div>');
      html.appendChild(container);
    }

    container.appendChild(control);

    if (entry.className) {
      addClasses(control, entry.className);
    }

    if (entry.title) {
      dist_index_esm_attr(control, 'title', entry.title);
    }

    if (entry.imageUrl) {
      control.appendChild(domify('<img src="' + entry.imageUrl + '">'));
    }
  });

  dist_index_esm_classes(html).add('open');

  this._current = {
    element: element,
    pad: pad,
    entries: entries
  };

  this._eventBus.fire('contextPad.open', { current: this._current });
};


ContextPad.prototype.getPad = function(element) {
  if (this.isOpen()) {
    return this._current.pad;
  }

  var self = this;

  var overlays = this._overlays;

  var html = domify('<div class="djs-context-pad"></div>');

  var overlaysConfig = index_esm_assign({
    html: html
  }, this._overlaysConfig);

  delegate.bind(html, entrySelector, 'click', function(event) {
    self.trigger('click', event);
  });

  delegate.bind(html, entrySelector, 'dragstart', function(event) {
    self.trigger('dragstart', event);
  });

  // stop propagation of mouse events
  componentEvent.bind(html, 'mousedown', function(event) {
    event.stopPropagation();
  });

  this._overlayId = overlays.add(element, 'context-pad', overlaysConfig);

  var pad = overlays.get(this._overlayId);

  this._eventBus.fire('contextPad.create', { element: element, pad: pad });

  return pad;
};


/**
 * Close the context pad
 */
ContextPad.prototype.close = function() {
  if (!this.isOpen()) {
    return;
  }

  this._overlays.remove(this._overlayId);

  this._overlayId = null;

  this._eventBus.fire('contextPad.close', { current: this._current });

  this._current = null;
};

/**
 * Check if pad is open. If element is given, will check
 * if pad is opened with given element.
 *
 * @param {Element} element
 * @return {boolean}
 */
ContextPad.prototype.isOpen = function(element) {
  return !!this._current && (!element ? true : this._current.element === element);
};




// helpers //////////////////////

function addClasses(element, classNames) {

  var classes = dist_index_esm_classes(element);

  var actualClassNames = index_esm_isArray(classNames) ? classNames : classNames.split(/\s+/g);
  actualClassNames.forEach(function(cls) {
    classes.add(cls);
  });
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/context-pad/index.js






/* harmony default export */ var context_pad = ({
  __depends__: [
    interaction_events,
    features_overlays
  ],
  contextPad: [ 'type', ContextPad ]
});
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/preview-support/PreviewSupport.js








var MARKER_TYPES = [
  'marker-start',
  'marker-mid',
  'marker-end'
];

var NODES_CAN_HAVE_MARKER = [
  'circle',
  'ellipse',
  'line',
  'path',
  'polygon',
  'polyline',
  'rect'
];


/**
 * Adds support for previews of moving/resizing elements.
 */
function PreviewSupport(elementRegistry, eventBus, canvas, styles) {
  this._elementRegistry = elementRegistry;
  this._canvas = canvas;
  this._styles = styles;

  this._clonedMarkers = {};

  var self = this;

  eventBus.on('drag.cleanup', function() {
    forEach(self._clonedMarkers, function(clonedMarker) {
      remove(clonedMarker);
    });

    self._clonedMarkers = {};
  });
}

PreviewSupport.$inject = [
  'elementRegistry',
  'eventBus',
  'canvas',
  'styles'
];


/**
 * Returns graphics of an element.
 *
 * @param {djs.model.Base} element
 *
 * @return {SVGElement}
 */
PreviewSupport.prototype.getGfx = function(element) {
  return this._elementRegistry.getGraphics(element);
};

/**
 * Adds a move preview of a given shape to a given svg group.
 *
 * @param {djs.model.Base} element
 * @param {SVGElement} group
 * @param {SVGElement} [gfx]
 *
 * @return {SVGElement} dragger
 */
PreviewSupport.prototype.addDragger = function(element, group, gfx) {
  gfx = gfx || this.getGfx(element);

  var dragger = clone(gfx);
  var bbox = gfx.getBoundingClientRect();

  this._cloneMarkers(getVisual(dragger));

  index_esm_attr(dragger, this._styles.cls('djs-dragger', [], {
    x: bbox.top,
    y: bbox.left
  }));

  index_esm_append(group, dragger);

  return dragger;
};

/**
 * Adds a resize preview of a given shape to a given svg group.
 *
 * @param {djs.model.Base} element
 * @param {SVGElement} group
 *
 * @return {SVGElement} frame
 */
PreviewSupport.prototype.addFrame = function(shape, group) {

  var frame = index_esm_create('rect', {
    class: 'djs-resize-overlay',
    width:  shape.width,
    height: shape.height,
    x: shape.x,
    y: shape.y
  });

  index_esm_append(group, frame);

  return frame;
};

/**
 * Clone all markers referenced by a node and its child nodes.
 *
 * @param {SVGElement} gfx
 */
PreviewSupport.prototype._cloneMarkers = function(gfx) {
  var self = this;

  if (gfx.childNodes) {

    // TODO: use forEach once we drop PhantomJS
    for (var i = 0; i < gfx.childNodes.length; i++) {

      // recursively clone markers of child nodes
      self._cloneMarkers(gfx.childNodes[ i ]);
    }
  }

  if (!canHaveMarker(gfx)) {
    return;
  }

  MARKER_TYPES.forEach(function(markerType) {
    if (index_esm_attr(gfx, markerType)) {
      var marker = getMarker(gfx, markerType, self._canvas.getContainer());

      self._cloneMarker(gfx, marker, markerType);
    }
  });
};

/**
 * Clone marker referenced by an element.
 *
 * @param {SVGElement} gfx
 * @param {SVGElement} marker
 * @param {string} markerType
 */
PreviewSupport.prototype._cloneMarker = function(gfx, marker, markerType) {
  var markerId = marker.id;

  var clonedMarker = this._clonedMarkers[ markerId ];

  if (!clonedMarker) {
    clonedMarker = clone(marker);

    var clonedMarkerId = markerId + '-clone';

    clonedMarker.id = clonedMarkerId;

    index_esm_classes(clonedMarker)
      .add('djs-dragger')
      .add('djs-dragger-marker');

    this._clonedMarkers[ markerId ] = clonedMarker;

    var defs = query('defs', this._canvas._svg);

    if (!defs) {
      defs = index_esm_create('defs');

      index_esm_append(this._canvas._svg, defs);
    }

    index_esm_append(defs, clonedMarker);
  }

  var reference = idToReference(this._clonedMarkers[ markerId ].id);

  index_esm_attr(gfx, markerType, reference);
};

// helpers //////////

/**
 * Get marker of given type referenced by node.
 *
 * @param {Node} node
 * @param {string} markerType
 * @param {Node} [parentNode]
 *
 * @param {Node}
 */
function getMarker(node, markerType, parentNode) {
  var id = referenceToId(index_esm_attr(node, markerType));

  return query('marker#' + id, parentNode || document);
}

/**
 * Get ID of fragment within current document from its functional IRI reference.
 * References may use single or double quotes.
 *
 * @param {string} reference
 *
 * @returns {string}
 */
function referenceToId(reference) {
  return reference.match(/url\(['"]?#([^'"]*)['"]?\)/)[1];
}

/**
 * Get functional IRI reference for given ID of fragment within current document.
 *
 * @param {string} id
 *
 * @returns {string}
 */
function idToReference(id) {
  return 'url(#' + id + ')';
}

/**
 * Check wether node type can have marker attributes.
 *
 * @param {Node} node
 *
 * @returns {boolean}
 */
function canHaveMarker(node) {
  return NODES_CAN_HAVE_MARKER.indexOf(node.nodeName) !== -1;
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/preview-support/index.js


/* harmony default export */ var preview_support = ({
  __init__: [ 'previewSupport' ],
  previewSupport: [ 'type', PreviewSupport ]
});

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/create/Create.js
var Create_MARKER_OK = 'drop-ok',
    Create_MARKER_NOT_OK = 'drop-not-ok',
    MARKER_ATTACH = 'attach-ok',
    MARKER_NEW_PARENT = 'new-parent';





var PREFIX = 'create';

var Create_HIGH_PRIORITY = 2000;


/**
 * Create new elements through drag and drop.
 *
 * @param {Canvas} canvas
 * @param {Dragging} dragging
 * @param {EventBus} eventBus
 * @param {Modeling} modeling
 * @param {Rules} rules
 */
function Create(
    canvas,
    dragging,
    eventBus,
    modeling,
    rules
) {

  // rules //////////

  /**
   * Check wether elements can be created.
   *
   * @param {Array<djs.model.Base>} elements
   * @param {djs.model.Base} target
   * @param {Point} position
   * @param {djs.model.Base} [source]
   *
   * @returns {boolean|null|Object}
   */
  function canCreate(elements, target, position, source, hints) {
    if (!target) {
      return false;
    }

    // ignore child elements and external labels
    elements = index_esm_filter(elements, function(element) {
      var labelTarget = element.labelTarget;

      return !element.parent && !(isLabel(element) && elements.indexOf(labelTarget) !== -1);
    });

    var shape = find(elements, function(element) {
      return !isConnection(element);
    });

    var attach = false,
        connect = false,
        create = false;

    // (1) attaching single shapes
    if (isSingleShape(elements)) {
      attach = rules.allowed('shape.attach', {
        position: position,
        shape: shape,
        target: target
      });
    }

    if (!attach) {

      // (2) creating elements
      if (isSingleShape(elements)) {
        create = rules.allowed('shape.create', {
          position: position,
          shape: shape,
          source: source,
          target: target
        });
      } else {
        create = rules.allowed('elements.create', {
          elements: elements,
          position: position,
          target: target
        });
      }

    }

    var connectionTarget = hints.connectionTarget;

    // (3) appending single shapes
    if (create || attach) {
      if (shape && source) {
        connect = rules.allowed('connection.create', {
          source: connectionTarget === source ? shape : source,
          target: connectionTarget === source ? source : shape,
          hints: {
            targetParent: target,
            targetAttach: attach
          }
        });
      }

      return {
        attach: attach,
        connect: connect
      };
    }

    // ignore wether or not elements can be created
    if (create === null || attach === null) {
      return null;
    }

    return false;
  }

  function setMarker(element, marker) {
    [ MARKER_ATTACH, Create_MARKER_OK, Create_MARKER_NOT_OK, MARKER_NEW_PARENT ].forEach(function(m) {

      if (m === marker) {
        canvas.addMarker(element, m);
      } else {
        canvas.removeMarker(element, m);
      }
    });
  }

  // event handling //////////

  eventBus.on([ 'create.move', 'create.hover' ], function(event) {
    var context = event.context,
        elements = context.elements,
        hover = event.hover,
        source = context.source,
        hints = context.hints || {};

    if (!hover) {
      context.canExecute = false;
      context.target = null;

      return;
    }

    ensureConstraints(event);

    var position = {
      x: event.x,
      y: event.y
    };

    var canExecute = context.canExecute = hover && canCreate(elements, hover, position, source, hints);

    if (hover && canExecute !== null) {
      context.target = hover;

      if (canExecute && canExecute.attach) {
        setMarker(hover, MARKER_ATTACH);
      } else {
        setMarker(hover, canExecute ? MARKER_NEW_PARENT : Create_MARKER_NOT_OK);
      }
    }
  });

  eventBus.on([ 'create.end', 'create.out', 'create.cleanup' ], function(event) {
    var hover = event.hover;

    if (hover) {
      setMarker(hover, null);
    }
  });

  eventBus.on('create.end', function(event) {
    var context = event.context,
        source = context.source,
        shape = context.shape,
        elements = context.elements,
        target = context.target,
        canExecute = context.canExecute,
        attach = canExecute && canExecute.attach,
        connect = canExecute && canExecute.connect,
        hints = context.hints || {};

    if (canExecute === false || !target) {
      return false;
    }

    ensureConstraints(event);

    var position = {
      x: event.x,
      y: event.y
    };

    if (connect) {
      shape = modeling.appendShape(source, shape, position, target, {
        attach: attach,
        connection: connect === true ? {} : connect,
        connectionTarget: hints.connectionTarget
      });
    } else {
      elements = modeling.createElements(elements, position, target, index_esm_assign({}, hints, {
        attach: attach
      }));

      // update shape
      shape = find(elements, function(element) {
        return !isConnection(element);
      });
    }

    // update elements and shape
    index_esm_assign(context, {
      elements: elements,
      shape: shape
    });

    index_esm_assign(event, {
      elements: elements,
      shape: shape
    });
  });

  function cancel() {
    var context = dragging.context();

    if (context && context.prefix === PREFIX) {
      dragging.cancel();
    }
  }

  // cancel on <elements.changed> that is not result of <drag.end>
  eventBus.on('create.init', function() {
    eventBus.on('elements.changed', cancel);

    eventBus.once([ 'create.cancel', 'create.end' ], Create_HIGH_PRIORITY, function() {
      eventBus.off('elements.changed', cancel);
    });
  });

  // API //////////

  this.start = function(event, elements, context) {
    if (!index_esm_isArray(elements)) {
      elements = [ elements ];
    }

    var shape = find(elements, function(element) {
      return !isConnection(element);
    });

    if (!shape) {

      // at least one shape is required
      return;
    }

    context = index_esm_assign({
      elements: elements,
      hints: {},
      shape: shape
    }, context || {});

    // make sure each element has x and y
    forEach(elements, function(element) {
      if (!isNumber(element.x)) {
        element.x = 0;
      }

      if (!isNumber(element.y)) {
        element.y = 0;
      }
    });

    var bbox = getBBox(elements);

    // center elements around cursor
    forEach(elements, function(element) {
      if (isConnection(element)) {
        element.waypoints = map(element.waypoints, function(waypoint) {
          return {
            x: waypoint.x - bbox.x - bbox.width / 2,
            y: waypoint.y - bbox.y - bbox.height / 2
          };
        });
      }

      index_esm_assign(element, {
        x: element.x - bbox.x - bbox.width / 2,
        y: element.y - bbox.y - bbox.height / 2
      });
    });

    dragging.init(event, PREFIX, {
      cursor: 'grabbing',
      autoActivate: true,
      data: {
        shape: shape,
        elements: elements,
        context: context
      }
    });
  };
}

Create.$inject = [
  'canvas',
  'dragging',
  'eventBus',
  'modeling',
  'rules'
];

// helpers //////////

function ensureConstraints(event) {
  var context = event.context,
      createConstraints = context.createConstraints;

  if (!createConstraints) {
    return;
  }

  if (createConstraints.left) {
    event.x = Math.max(event.x, createConstraints.left);
  }

  if (createConstraints.right) {
    event.x = Math.min(event.x, createConstraints.right);
  }

  if (createConstraints.top) {
    event.y = Math.max(event.y, createConstraints.top);
  }

  if (createConstraints.bottom) {
    event.y = Math.min(event.y, createConstraints.bottom);
  }
}

function isConnection(element) {
  return !!element.waypoints;
}

function isSingleShape(elements) {
  return elements && elements.length === 1 && !isConnection(elements[0]);
}

function isLabel(element) {
  return !!element.labelTarget;
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/create/CreatePreview.js






var CreatePreview_LOW_PRIORITY = 750;


function CreatePreview(
    canvas,
    eventBus,
    graphicsFactory,
    previewSupport,
    styles
) {
  function createDragGroup(elements) {
    var dragGroup = index_esm_create('g');

    index_esm_attr(dragGroup, styles.cls('djs-drag-group', [ 'no-events' ]));

    var childrenGfx = index_esm_create('g');

    elements.forEach(function(element) {

      // create graphics
      var gfx;

      if (element.hidden) {
        return;
      }

      if (element.waypoints) {
        gfx = graphicsFactory._createContainer('connection', childrenGfx);

        graphicsFactory.drawConnection(getVisual(gfx), element);
      } else {
        gfx = graphicsFactory._createContainer('shape', childrenGfx);

        graphicsFactory.drawShape(getVisual(gfx), element);

        SvgTransformUtil_translate(gfx, element.x, element.y);
      }

      // add preview
      previewSupport.addDragger(element, dragGroup, gfx);
    });

    return dragGroup;
  }

  eventBus.on('create.move', CreatePreview_LOW_PRIORITY, function(event) {

    var hover = event.hover,
        context = event.context,
        elements = context.elements,
        dragGroup = context.dragGroup;

    // lazily create previews
    if (!dragGroup) {
      dragGroup = context.dragGroup = createDragGroup(elements);
    }

    var defaultLayer;

    if (hover) {
      if (!dragGroup.parentNode) {
        defaultLayer = canvas.getDefaultLayer();

        index_esm_append(defaultLayer, dragGroup);
      }

      SvgTransformUtil_translate(dragGroup, event.x, event.y);
    } else {
      remove(dragGroup);
    }
  });

  eventBus.on('create.cleanup', function(event) {
    var context = event.context,
        dragGroup = context.dragGroup;

    if (dragGroup) {
      remove(dragGroup);
    }
  });
}

CreatePreview.$inject = [
  'canvas',
  'eventBus',
  'graphicsFactory',
  'previewSupport',
  'styles'
];

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/create/index.js









/* harmony default export */ var features_create = ({
  __depends__: [
    features_dragging,
    preview_support,
    features_rules,
    features_selection
  ],
  __init__: [
    'create',
    'createPreview'
  ],
  create: [ 'type', Create ],
  createPreview: [ 'type', CreatePreview ]
});

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/tool-manager/ToolManager.js




var ToolManager_LOW_PRIORITY = 250;

/**
 * The tool manager acts as middle-man between the available tool's and the Palette,
 * it takes care of making sure that the correct active state is set.
 *
 * @param  {Object}    eventBus
 * @param  {Object}    dragging
 */
function ToolManager(eventBus, dragging) {
  this._eventBus = eventBus;
  this._dragging = dragging;

  this._tools = [];
  this._active = null;
}

ToolManager.$inject = [ 'eventBus', 'dragging' ];

ToolManager.prototype.registerTool = function(name, events) {
  var tools = this._tools;

  if (!events) {
    throw new Error('A tool has to be registered with it\'s "events"');
  }

  tools.push(name);

  this.bindEvents(name, events);
};

ToolManager.prototype.isActive = function(tool) {
  return tool && this._active === tool;
};

ToolManager.prototype.length = function(tool) {
  return this._tools.length;
};

ToolManager.prototype.setActive = function(tool) {
  var eventBus = this._eventBus;

  if (this._active !== tool) {
    this._active = tool;

    eventBus.fire('tool-manager.update', { tool: tool });
  }
};

ToolManager.prototype.bindEvents = function(name, events) {
  var eventBus = this._eventBus,
      dragging = this._dragging;

  var eventsToRegister = [];

  eventBus.on(events.tool + '.init', function(event) {
    var context = event.context;

    // Active tools that want to reactivate themselves must do this explicitly
    if (!context.reactivate && this.isActive(name)) {
      this.setActive(null);

      dragging.cancel();
      return;
    }

    this.setActive(name);

  }, this);

  // Todo[ricardo]: add test cases
  forEach(events, function(event) {
    eventsToRegister.push(event + '.ended');
    eventsToRegister.push(event + '.canceled');
  });

  eventBus.on(eventsToRegister, ToolManager_LOW_PRIORITY, function(event) {
    var originalEvent = event.originalEvent;

    // We defer the de-activation of the tool to the .activate phase,
    // so we're able to check if we want to toggle off the current
    // active tool or switch to a new one
    if (!this._active) {
      return;
    }

    if (originalEvent && closest(originalEvent.target, '.group[data-group="tools"]')) {
      return;
    }

    this.setActive(null);
  }, this);
};

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/tool-manager/index.js




/* harmony default export */ var tool_manager = ({
  __depends__: [
    features_dragging
  ],
  __init__: [ 'toolManager' ],
  toolManager: [ 'type', ToolManager ]
});

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/keyboard/KeyboardUtil.js


/**
 * Returns true if event was triggered with any modifier
 * @param {KeyboardEvent} event
 */
function hasModifier(event) {
  return (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey);
}

/**
 * @param {KeyboardEvent} event
 */
function isCmd(event) {

  // ensure we don't react to AltGr
  // (mapped to CTRL + ALT)
  if (event.altKey) {
    return false;
  }

  return event.ctrlKey || event.metaKey;
}

/**
 * Checks if key pressed is one of provided keys.
 *
 * @param {string|Array<string>} keys
 * @param {KeyboardEvent} event
 */
function isKey(keys, event) {
  keys = index_esm_isArray(keys) ? keys : [ keys ];

  return keys.indexOf(event.key) !== -1 || keys.indexOf(event.keyCode) !== -1;
}

/**
 * @param {KeyboardEvent} event
 */
function isShift(event) {
  return event.shiftKey;
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/hand-tool/HandTool.js




var HandTool_HIGH_PRIORITY = 1500;
var HAND_CURSOR = 'grab';


function HandTool(eventBus, canvas, dragging, injector, toolManager) {
  this._dragging = dragging;

  var self = this,
      keyboard = injector.get('keyboard', false);

  toolManager.registerTool('hand', {
    tool: 'hand',
    dragging: 'hand.move'
  });

  eventBus.on('element.mousedown', HandTool_HIGH_PRIORITY, function(event) {
    if (hasPrimaryModifier(event)) {
      this.activateMove(event.originalEvent);

      return false;
    }
  }, this);

  keyboard && keyboard.addListener(HandTool_HIGH_PRIORITY, function(e) {
    if (!isSpace(e.keyEvent)) {
      return;
    }

    if (self.isActive()) {
      return;
    }

    function activateMove(event) {
      self.activateMove(event);

      window.removeEventListener('mousemove', activateMove);
    }

    window.addEventListener('mousemove', activateMove);

    function deactivateMove(e) {
      if (!isSpace(e.keyEvent)) {
        return;
      }

      window.removeEventListener('mousemove', activateMove);

      keyboard.removeListener(deactivateMove, 'keyboard.keyup');

      dragging.cancel();
    }

    keyboard.addListener(HandTool_HIGH_PRIORITY, deactivateMove, 'keyboard.keyup');
  }, 'keyboard.keydown');

  eventBus.on('hand.end', function(event) {
    var target = event.originalEvent.target;

    // only reactive on diagram click
    // on some occasions, event.hover is not set and we have to check if the target is an svg
    if (!event.hover && !(target instanceof SVGElement)) {
      return false;
    }

    eventBus.once('hand.ended', function() {
      this.activateMove(event.originalEvent, { reactivate: true });
    }, this);

  }, this);


  eventBus.on('hand.move.move', function(event) {
    var scale = canvas.viewbox().scale;

    canvas.scroll({
      dx: event.dx * scale,
      dy: event.dy * scale
    });
  });

  eventBus.on('hand.move.end', function(event) {
    var context = event.context,
        reactivate = context.reactivate;

    // Don't reactivate if the user is using the keyboard keybinding
    if (!hasPrimaryModifier(event) && reactivate) {

      eventBus.once('hand.move.ended', function(event) {
        this.activateHand(event.originalEvent, true, true);
      }, this);

    }

    return false;
  }, this);

}

HandTool.$inject = [
  'eventBus',
  'canvas',
  'dragging',
  'injector',
  'toolManager'
];


HandTool.prototype.activateMove = function(event, autoActivate, context) {
  if (typeof autoActivate === 'object') {
    context = autoActivate;
    autoActivate = false;
  }

  this._dragging.init(event, 'hand.move', {
    autoActivate: autoActivate,
    cursor: HAND_CURSOR,
    data: {
      context: context || {}
    }
  });
};

HandTool.prototype.activateHand = function(event, autoActivate, reactivate) {
  this._dragging.init(event, 'hand', {
    trapClick: false,
    autoActivate: autoActivate,
    cursor: HAND_CURSOR,
    data: {
      context: {
        reactivate: reactivate
      }
    }
  });
};

HandTool.prototype.toggle = function() {
  if (this.isActive()) {
    this._dragging.cancel();
  } else {
    this.activateHand();
  }
};

HandTool.prototype.isActive = function() {
  var context = this._dragging.context();

  if (context) {
    return /^(hand|hand\.move)$/.test(context.prefix);
  }

  return false;
};

// helpers //////////

function isSpace(keyEvent) {
  return isKey(' ', keyEvent);
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/hand-tool/index.js




/* harmony default export */ var hand_tool = ({
  __depends__: [
    tool_manager
  ],
  __init__: [ 'handTool' ],
  handTool: [ 'type', HandTool ]
});

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/lasso-tool/LassoTool.js








var LASSO_TOOL_CURSOR = 'crosshair';


function LassoTool(
    eventBus, canvas, dragging,
    elementRegistry, selection, toolManager) {

  this._selection = selection;
  this._dragging = dragging;

  var self = this;

  // lasso visuals implementation

  /**
  * A helper that realizes the selection box visual
  */
  var visuals = {

    create: function(context) {
      var container = canvas.getDefaultLayer(),
          frame;

      frame = context.frame = index_esm_create('rect');
      index_esm_attr(frame, {
        class: 'djs-lasso-overlay',
        width:  1,
        height: 1,
        x: 0,
        y: 0
      });

      index_esm_append(container, frame);
    },

    update: function(context) {
      var frame = context.frame,
          bbox = context.bbox;

      index_esm_attr(frame, {
        x: bbox.x,
        y: bbox.y,
        width: bbox.width,
        height: bbox.height
      });
    },

    remove: function(context) {

      if (context.frame) {
        remove(context.frame);
      }
    }
  };

  toolManager.registerTool('lasso', {
    tool: 'lasso.selection',
    dragging: 'lasso'
  });

  eventBus.on('lasso.selection.end', function(event) {
    var target = event.originalEvent.target;

    // only reactive on diagram click
    // on some occasions, event.hover is not set and we have to check if the target is an svg
    if (!event.hover && !(target instanceof SVGElement)) {
      return;
    }

    eventBus.once('lasso.selection.ended', function() {
      self.activateLasso(event.originalEvent, true);
    });
  });

  // lasso interaction implementation

  eventBus.on('lasso.end', function(event) {

    var bbox = toBBox(event);

    var elements = elementRegistry.filter(function(element) {
      return element;
    });

    self.select(elements, bbox);
  });

  eventBus.on('lasso.start', function(event) {

    var context = event.context;

    context.bbox = toBBox(event);
    visuals.create(context);
  });

  eventBus.on('lasso.move', function(event) {

    var context = event.context;

    context.bbox = toBBox(event);
    visuals.update(context);
  });

  eventBus.on('lasso.cleanup', function(event) {

    var context = event.context;

    visuals.remove(context);
  });


  // event integration

  eventBus.on('element.mousedown', 1500, function(event) {

    if (hasSecondaryModifier(event)) {
      self.activateLasso(event.originalEvent);

      // we've handled the event
      return true;
    }
  });
}

LassoTool.$inject = [
  'eventBus',
  'canvas',
  'dragging',
  'elementRegistry',
  'selection',
  'toolManager'
];


LassoTool.prototype.activateLasso = function(event, autoActivate) {

  this._dragging.init(event, 'lasso', {
    autoActivate: autoActivate,
    cursor: LASSO_TOOL_CURSOR,
    data: {
      context: {}
    }
  });
};

LassoTool.prototype.activateSelection = function(event) {

  this._dragging.init(event, 'lasso.selection', {
    trapClick: false,
    cursor: LASSO_TOOL_CURSOR,
    data: {
      context: {}
    }
  });
};

LassoTool.prototype.select = function(elements, bbox) {
  var selectedElements = getEnclosedElements(elements, bbox);

  this._selection.select(index_esm_values(selectedElements));
};

LassoTool.prototype.toggle = function() {
  if (this.isActive()) {
    this._dragging.cancel();
  } else {
    this.activateSelection();
  }
};

LassoTool.prototype.isActive = function() {
  var context = this._dragging.context();

  return context && /^lasso/.test(context.prefix);
};



function toBBox(event) {

  var start = {

    x: event.x - event.dx,
    y: event.y - event.dy
  };

  var end = {
    x: event.x,
    y: event.y
  };

  var bbox;

  if ((start.x <= end.x && start.y < end.y) ||
      (start.x < end.x && start.y <= end.y)) {

    bbox = {
      x: start.x,
      y: start.y,
      width:  end.x - start.x,
      height: end.y - start.y
    };
  } else if ((start.x >= end.x && start.y < end.y) ||
             (start.x > end.x && start.y <= end.y)) {

    bbox = {
      x: end.x,
      y: start.y,
      width:  start.x - end.x,
      height: end.y - start.y
    };
  } else if ((start.x <= end.x && start.y > end.y) ||
             (start.x < end.x && start.y >= end.y)) {

    bbox = {
      x: start.x,
      y: end.y,
      width:  end.x - start.x,
      height: start.y - end.y
    };
  } else if ((start.x >= end.x && start.y > end.y) ||
             (start.x > end.x && start.y >= end.y)) {

    bbox = {
      x: end.x,
      y: end.y,
      width:  start.x - end.x,
      height: start.y - end.y
    };
  } else {

    bbox = {
      x: end.x,
      y: end.y,
      width:  0,
      height: 0
    };
  }
  return bbox;
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/lasso-tool/index.js




/* harmony default export */ var lasso_tool = ({
  __depends__: [
    tool_manager
  ],
  __init__: [ 'lassoTool' ],
  lassoTool: [ 'type', LassoTool ]
});

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/global-connect/GlobalConnect.js
var GlobalConnect_MARKER_OK = 'connect-ok',
    GlobalConnect_MARKER_NOT_OK = 'connect-not-ok';

/**
 * @class
 * @constructor
 *
 * @param {EventBus} eventBus
 * @param {Dragging} dragging
 * @param {Connect} connect
 * @param {Canvas} canvas
 * @param {ToolManager} toolManager
 * @param {Rules} rules
 */
function GlobalConnect(
    eventBus, dragging, connect,
    canvas, toolManager, rules) {

  var self = this;

  this._dragging = dragging;
  this._rules = rules;

  toolManager.registerTool('global-connect', {
    tool: 'global-connect',
    dragging: 'global-connect.drag'
  });

  eventBus.on('global-connect.hover', function(event) {
    var context = event.context,
        startTarget = event.hover;

    var canStartConnect = context.canStartConnect = self.canStartConnect(startTarget);

    // simply ignore hover
    if (canStartConnect === null) {
      return;
    }

    context.startTarget = startTarget;

    canvas.addMarker(startTarget, canStartConnect ? GlobalConnect_MARKER_OK : GlobalConnect_MARKER_NOT_OK);
  });


  eventBus.on([ 'global-connect.out', 'global-connect.cleanup' ], function(event) {
    var startTarget = event.context.startTarget,
        canStartConnect = event.context.canStartConnect;

    if (startTarget) {
      canvas.removeMarker(startTarget, canStartConnect ? GlobalConnect_MARKER_OK : GlobalConnect_MARKER_NOT_OK);
    }
  });


  eventBus.on([ 'global-connect.ended' ], function(event) {
    var context = event.context,
        startTarget = context.startTarget,
        startPosition = {
          x: event.x,
          y: event.y
        };

    var canStartConnect = self.canStartConnect(startTarget);

    if (!canStartConnect) {
      return;
    }

    eventBus.once('element.out', function() {
      eventBus.once([ 'connect.ended', 'connect.canceled' ], function() {
        eventBus.fire('global-connect.drag.ended');
      });

      connect.start(null, startTarget, startPosition);
    });

    return false;
  });
}

GlobalConnect.$inject = [
  'eventBus',
  'dragging',
  'connect',
  'canvas',
  'toolManager',
  'rules'
];

/**
 * Initiates tool activity.
 */
GlobalConnect.prototype.start = function(event) {
  this._dragging.init(event, 'global-connect', {
    trapClick: false,
    data: {
      context: {}
    }
  });
};

GlobalConnect.prototype.toggle = function() {
  if (this.isActive()) {
    this._dragging.cancel();
  } else {
    this.start();
  }
};

GlobalConnect.prototype.isActive = function() {
  var context = this._dragging.context();

  return context && /^global-connect/.test(context.prefix);
};

/**
 * Check if source shape can initiate connection.
 *
 * @param  {Shape} startTarget
 * @return {boolean}
 */
GlobalConnect.prototype.canStartConnect = function(startTarget) {
  return this._rules.allowed('connection.start', { source: startTarget });
};

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/global-connect/index.js







/* harmony default export */ var global_connect = ({
  __depends__: [
    features_connect,
    features_rules,
    features_dragging,
    tool_manager
  ],
  globalConnect: [ 'type', GlobalConnect ]
});

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/navigation/movecanvas/MoveCanvas.js











var THRESHOLD = 15;


/**
 * Move the canvas via mouse.
 *
 * @param {EventBus} eventBus
 * @param {Canvas} canvas
 */
function MoveCanvas(eventBus, canvas) {

  var context;


  // listen for move on element mouse down;
  // allow others to hook into the event before us though
  // (dragging / element moving will do this)
  eventBus.on('element.mousedown', 500, function(e) {
    return handleStart(e.originalEvent);
  });


  function handleMove(event) {

    var start = context.start,
        position = toPoint(event),
        delta = PositionUtil_delta(position, start);

    if (!context.dragging && MoveCanvas_length(delta) > THRESHOLD) {
      context.dragging = true;

      install(eventBus);

      Cursor_set('grab');
    }

    if (context.dragging) {

      var lastPosition = context.last || context.start;

      delta = PositionUtil_delta(position, lastPosition);

      canvas.scroll({
        dx: delta.x,
        dy: delta.y
      });

      context.last = position;
    }

    // prevent select
    event.preventDefault();
  }


  function handleEnd(event) {
    componentEvent.unbind(document, 'mousemove', handleMove);
    componentEvent.unbind(document, 'mouseup', handleEnd);

    context = null;

    unset();
  }

  function handleStart(event) {

    // event is already handled by '.djs-draggable'
    if (closest(event.target, '.djs-draggable')) {
      return;
    }


    // reject non-left left mouse button or modifier key
    if (event.button || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    context = {
      start: toPoint(event)
    };

    componentEvent.bind(document, 'mousemove', handleMove);
    componentEvent.bind(document, 'mouseup', handleEnd);

    // we've handled the event
    return true;
  }
}


MoveCanvas.$inject = [
  'eventBus',
  'canvas'
];



// helpers ///////

function MoveCanvas_length(point) {
  return Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2));
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/navigation/movecanvas/index.js


/* harmony default export */ var movecanvas = ({
  __init__: [ 'moveCanvas' ],
  moveCanvas: [ 'type', MoveCanvas ]
});
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/move/Move.js


var Move_LOW_PRIORITY = 500,
    MEDIUM_PRIORITY = 1250,
    Move_HIGH_PRIORITY = 1500;



var Move_round = Math.round;

function Move_mid(element) {
  return {
    x: element.x + Move_round(element.width / 2),
    y: element.y + Move_round(element.height / 2)
  };
}

/**
 * A plugin that makes shapes draggable / droppable.
 *
 * @param {EventBus} eventBus
 * @param {Dragging} dragging
 * @param {Modeling} modeling
 * @param {Selection} selection
 * @param {Rules} rules
 */
function MoveEvents(
    eventBus, dragging, modeling,
    selection, rules) {

  // rules

  function canMove(shapes, delta, position, target) {

    return rules.allowed('elements.move', {
      shapes: shapes,
      delta: delta,
      position: position,
      target: target
    });
  }


  // move events

  // assign a high priority to this handler to setup the environment
  // others may hook up later, e.g. at default priority and modify
  // the move environment.
  //
  // This sets up the context with
  //
  // * shape: the primary shape being moved
  // * shapes: a list of shapes to be moved
  // * validatedShapes: a list of shapes that are being checked
  //                    against the rules before and during move
  //
  eventBus.on('shape.move.start', Move_HIGH_PRIORITY, function(event) {

    var context = event.context,
        shape = event.shape,
        shapes = selection.get().slice();

    // move only single shape if the dragged element
    // is not part of the current selection
    if (shapes.indexOf(shape) === -1) {
      shapes = [ shape ];
    }

    // ensure we remove nested elements in the collection
    // and add attachers for a proper dragger
    shapes = removeNested(shapes);

    // attach shapes to drag context
    index_esm_assign(context, {
      shapes: shapes,
      validatedShapes: shapes,
      shape: shape
    });
  });


  // assign a high priority to this handler to setup the environment
  // others may hook up later, e.g. at default priority and modify
  // the move environment
  //
  eventBus.on('shape.move.start', MEDIUM_PRIORITY, function(event) {

    var context = event.context,
        validatedShapes = context.validatedShapes,
        canExecute;

    canExecute = context.canExecute = canMove(validatedShapes);

    // check if we can move the elements
    if (!canExecute) {
      return false;
    }
  });

  // assign a low priority to this handler
  // to let others modify the move event before we update
  // the context
  //
  eventBus.on('shape.move.move', Move_LOW_PRIORITY, function(event) {

    var context = event.context,
        validatedShapes = context.validatedShapes,
        hover = event.hover,
        delta = { x: event.dx, y: event.dy },
        position = { x: event.x, y: event.y },
        canExecute;

    // check if we can move the elements
    canExecute = canMove(validatedShapes, delta, position, hover);

    context.delta = delta;
    context.canExecute = canExecute;

    // simply ignore move over
    if (canExecute === null) {
      context.target = null;

      return;
    }

    context.target = hover;
  });

  eventBus.on('shape.move.end', function(event) {

    var context = event.context;

    var delta = context.delta,
        canExecute = context.canExecute,
        isAttach = canExecute === 'attach',
        shapes = context.shapes;

    if (canExecute === false) {
      return false;
    }

    // ensure we have actual pixel values deltas
    // (important when zoom level was > 1 during move)
    delta.x = Move_round(delta.x);
    delta.y = Move_round(delta.y);

    if (delta.x === 0 && delta.y === 0) {

      // didn't move
      return;
    }

    modeling.moveElements(shapes, delta, context.target, {
      primaryShape: context.shape,
      attach: isAttach
    });
  });


  // move activation

  eventBus.on('element.mousedown', function(event) {

    var originalEvent = getOriginal(event);

    if (!originalEvent) {
      throw new Error('must supply DOM mousedown event');
    }

    return start(originalEvent, event.element);
  });

  /**
   * Start move.
   *
   * @param {MouseEvent} event
   * @param {djs.model.Shape} shape
   * @param {boolean} [activate]
   * @param {Object} [context]
   */
  function start(event, element, activate, context) {
    if (isObject(activate)) {
      context = activate;
      activate = false;
    }

    // do not move connections or the root element
    if (element.waypoints || !element.parent) {
      return;
    }

    var referencePoint = Move_mid(element);

    dragging.init(event, referencePoint, 'shape.move', {
      cursor: 'grabbing',
      autoActivate: activate,
      data: {
        shape: element,
        context: context || {}
      }
    });

    // we've handled the event
    return true;
  }

  // API

  this.start = start;
}

MoveEvents.$inject = [
  'eventBus',
  'dragging',
  'modeling',
  'selection',
  'rules'
];


/**
 * Return a filtered list of elements that do not contain
 * those nested into others.
 *
 * @param  {Array<djs.model.Base>} elements
 *
 * @return {Array<djs.model.Base>} filtered
 */
function removeNested(elements) {

  var ids = groupBy(elements, 'id');

  return index_esm_filter(elements, function(element) {
    while ((element = element.parent)) {

      // parent in selection
      if (ids[element.id]) {
        return false;
      }
    }

    return true;
  });
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/move/MovePreview.js








var MovePreview_LOW_PRIORITY = 499;

var MARKER_DRAGGING = 'djs-dragging',
    MovePreview_MARKER_OK = 'drop-ok',
    MovePreview_MARKER_NOT_OK = 'drop-not-ok',
    MovePreview_MARKER_NEW_PARENT = 'new-parent',
    MovePreview_MARKER_ATTACH = 'attach-ok';


/**
 * Provides previews for moving shapes when moving.
 *
 * @param {EventBus} eventBus
 * @param {ElementRegistry} elementRegistry
 * @param {Canvas} canvas
 * @param {Styles} styles
 */
function MovePreview(
    eventBus, canvas, styles, previewSupport) {

  function getVisualDragShapes(shapes) {
    var elements = getAllDraggedElements(shapes);

    var filteredElements = removeEdges(elements);

    return filteredElements;
  }

  function getAllDraggedElements(shapes) {
    var allShapes = selfAndAllChildren(shapes, true);

    var allConnections = map(allShapes, function(shape) {
      return (shape.incoming || []).concat(shape.outgoing || []);
    });

    return flatten(allShapes.concat(allConnections));
  }

  /**
   * Sets drop marker on an element.
   */
  function setMarker(element, marker) {

    [ MovePreview_MARKER_ATTACH, MovePreview_MARKER_OK, MovePreview_MARKER_NOT_OK, MovePreview_MARKER_NEW_PARENT ].forEach(function(m) {

      if (m === marker) {
        canvas.addMarker(element, m);
      } else {
        canvas.removeMarker(element, m);
      }
    });
  }

  /**
   * Make an element draggable.
   *
   * @param {Object} context
   * @param {djs.model.Base} element
   * @param {boolean} addMarker
   */
  function makeDraggable(context, element, addMarker) {

    previewSupport.addDragger(element, context.dragGroup);

    if (addMarker) {
      canvas.addMarker(element, MARKER_DRAGGING);
    }

    if (context.allDraggedElements) {
      context.allDraggedElements.push(element);
    } else {
      context.allDraggedElements = [ element ];
    }
  }

  // assign a low priority to this handler
  // to let others modify the move context before
  // we draw things
  eventBus.on('shape.move.start', MovePreview_LOW_PRIORITY, function(event) {
    var context = event.context,
        dragShapes = context.shapes,
        allDraggedElements = context.allDraggedElements;

    var visuallyDraggedShapes = getVisualDragShapes(dragShapes);

    if (!context.dragGroup) {
      var dragGroup = index_esm_create('g');

      index_esm_attr(dragGroup, styles.cls('djs-drag-group', [ 'no-events' ]));

      var defaultLayer = canvas.getDefaultLayer();

      index_esm_append(defaultLayer, dragGroup);

      context.dragGroup = dragGroup;
    }

    // add previews
    visuallyDraggedShapes.forEach(function(shape) {
      previewSupport.addDragger(shape, context.dragGroup);
    });

    // cache all dragged elements / gfx
    // so that we can quickly undo their state changes later
    if (!allDraggedElements) {
      allDraggedElements = getAllDraggedElements(dragShapes);
    } else {
      allDraggedElements = flatten([
        allDraggedElements,
        getAllDraggedElements(dragShapes)
      ]);
    }

    // add dragging marker
    forEach(allDraggedElements, function(e) {
      canvas.addMarker(e, MARKER_DRAGGING);
    });

    context.allDraggedElements = allDraggedElements;

    // determine, if any of the dragged elements have different parents
    context.differentParents = haveDifferentParents(dragShapes);
  });

  // update previews
  eventBus.on('shape.move.move', MovePreview_LOW_PRIORITY, function(event) {

    var context = event.context,
        dragGroup = context.dragGroup,
        target = context.target,
        parent = context.shape.parent,
        canExecute = context.canExecute;

    if (target) {
      if (canExecute === 'attach') {
        setMarker(target, MovePreview_MARKER_ATTACH);
      } else if (context.canExecute && target && target.id !== parent.id) {
        setMarker(target, MovePreview_MARKER_NEW_PARENT);
      } else {
        setMarker(target, context.canExecute ? MovePreview_MARKER_OK : MovePreview_MARKER_NOT_OK);
      }
    }

    SvgTransformUtil_translate(dragGroup, event.dx, event.dy);
  });

  eventBus.on([ 'shape.move.out', 'shape.move.cleanup' ], function(event) {
    var context = event.context,
        target = context.target;

    if (target) {
      setMarker(target, null);
    }
  });

  // remove previews
  eventBus.on('shape.move.cleanup', function(event) {

    var context = event.context,
        allDraggedElements = context.allDraggedElements,
        dragGroup = context.dragGroup;


    // remove dragging marker
    forEach(allDraggedElements, function(e) {
      canvas.removeMarker(e, MARKER_DRAGGING);
    });

    if (dragGroup) {
      remove(dragGroup);
    }
  });


  // API //////////////////////

  /**
   * Make an element draggable.
   *
   * @param {Object} context
   * @param {djs.model.Base} element
   * @param {boolean} addMarker
   */
  this.makeDraggable = makeDraggable;
}

MovePreview.$inject = [
  'eventBus',
  'canvas',
  'styles',
  'previewSupport'
];


// helpers //////////////////////

/**
 * returns elements minus all connections
 * where source or target is not elements
 */
function removeEdges(elements) {

  var filteredElements = index_esm_filter(elements, function(element) {

    if (!MovePreview_isConnection(element)) {
      return true;
    } else {

      return (
        find(elements, matchPattern({ id: element.source.id })) &&
        find(elements, matchPattern({ id: element.target.id }))
      );
    }
  });

  return filteredElements;
}

function haveDifferentParents(elements) {
  return index_esm_size(groupBy(elements, function(e) { return e.parent && e.parent.id; })) !== 1;
}

/**
 * Checks if an element is a connection.
 */
function MovePreview_isConnection(element) {
  return element.waypoints;
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/move/index.js










/* harmony default export */ var features_move = ({
  __depends__: [
    interaction_events,
    features_selection,
    features_outline,
    features_rules,
    features_dragging,
    preview_support
  ],
  __init__: [
    'move',
    'movePreview'
  ],
  move: [ 'type', MoveEvents ],
  movePreview: [ 'type', MovePreview ]
});

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/palette/Palette.js





var TOGGLE_SELECTOR = '.djs-palette-toggle',
    ENTRY_SELECTOR = '.entry',
    Palette_ELEMENT_SELECTOR = TOGGLE_SELECTOR + ', ' + ENTRY_SELECTOR;

var PALETTE_OPEN_CLS = 'open',
    PALETTE_TWO_COLUMN_CLS = 'two-column';

var Palette_DEFAULT_PRIORITY = 1000;


/**
 * A palette containing modeling elements.
 */
function Palette(eventBus, canvas) {

  this._eventBus = eventBus;
  this._canvas = canvas;

  var self = this;

  eventBus.on('tool-manager.update', function(event) {
    var tool = event.tool;

    self.updateToolHighlight(tool);
  });

  eventBus.on('i18n.changed', function() {
    self._update();
  });

  eventBus.on('diagram.init', function() {

    self._diagramInitialized = true;

    self._rebuild();
  });
}

Palette.$inject = [ 'eventBus', 'canvas' ];


/**
 * Register a provider with the palette
 *
 * @param  {number} [priority=1000]
 * @param  {PaletteProvider} provider
 *
 * @example
 * const paletteProvider = {
 *   getPaletteEntries: function() {
 *     return function(entries) {
 *       return {
 *         ...entries,
 *         'entry-1': {
 *           label: 'My Entry',
 *           action: function() { alert("I have been clicked!"); }
 *         }
 *       };
 *     }
 *   }
 * };
 *
 * palette.registerProvider(800, paletteProvider);
 */
Palette.prototype.registerProvider = function(priority, provider) {
  if (!provider) {
    provider = priority;
    priority = Palette_DEFAULT_PRIORITY;
  }

  this._eventBus.on('palette.getProviders', priority, function(event) {
    event.providers.push(provider);
  });

  this._rebuild();
};


/**
 * Returns the palette entries
 *
 * @return {Object<string, PaletteEntryDescriptor>} map of entries
 */
Palette.prototype.getEntries = function() {
  var providers = this._getProviders();

  return providers.reduce(addPaletteEntries, {});
};

Palette.prototype._rebuild = function() {

  if (!this._diagramInitialized) {
    return;
  }

  var providers = this._getProviders();

  if (!providers.length) {
    return;
  }

  if (!this._container) {
    this._init();
  }

  this._update();
};

/**
 * Initialize
 */
Palette.prototype._init = function() {

  var self = this;

  var eventBus = this._eventBus;

  var parentContainer = this._getParentContainer();

  var container = this._container = domify(Palette.HTML_MARKUP);

  parentContainer.appendChild(container);

  delegate.bind(container, Palette_ELEMENT_SELECTOR, 'click', function(event) {

    var target = event.delegateTarget;

    if (matchesSelector(target, TOGGLE_SELECTOR)) {
      return self.toggle();
    }

    self.trigger('click', event);
  });

  // prevent drag propagation
  componentEvent.bind(container, 'mousedown', function(event) {
    event.stopPropagation();
  });

  // prevent drag propagation
  delegate.bind(container, ENTRY_SELECTOR, 'dragstart', function(event) {
    self.trigger('dragstart', event);
  });

  eventBus.on('canvas.resized', this._layoutChanged, this);

  eventBus.fire('palette.create', {
    container: container
  });
};

Palette.prototype._getProviders = function(id) {

  var event = this._eventBus.createEvent({
    type: 'palette.getProviders',
    providers: []
  });

  this._eventBus.fire(event);

  return event.providers;
};

/**
 * Update palette state.
 *
 * @param  {Object} [state] { open, twoColumn }
 */
Palette.prototype._toggleState = function(state) {

  state = state || {};

  var parent = this._getParentContainer(),
      container = this._container;

  var eventBus = this._eventBus;

  var twoColumn;

  var cls = dist_index_esm_classes(container);

  if ('twoColumn' in state) {
    twoColumn = state.twoColumn;
  } else {
    twoColumn = this._needsCollapse(parent.clientHeight, this._entries || {});
  }

  // always update two column
  cls.toggle(PALETTE_TWO_COLUMN_CLS, twoColumn);

  if ('open' in state) {
    cls.toggle(PALETTE_OPEN_CLS, state.open);
  }

  eventBus.fire('palette.changed', {
    twoColumn: twoColumn,
    open: this.isOpen()
  });
};

Palette.prototype._update = function() {

  var entriesContainer = query('.djs-palette-entries', this._container),
      entries = this._entries = this.getEntries();

  index_esm_clear(entriesContainer);

  forEach(entries, function(entry, id) {

    var grouping = entry.group || 'default';

    var container = query('[data-group=' + grouping + ']', entriesContainer);
    if (!container) {
      container = domify('<div class="group" data-group="' + grouping + '"></div>');
      entriesContainer.appendChild(container);
    }

    var html = entry.html || (
      entry.separator ?
        '<hr class="separator" />' :
        '<div class="entry" draggable="true"></div>');


    var control = domify(html);
    container.appendChild(control);

    if (!entry.separator) {
      dist_index_esm_attr(control, 'data-action', id);

      if (entry.title) {
        dist_index_esm_attr(control, 'title', entry.title);
      }

      if (entry.className) {
        Palette_addClasses(control, entry.className);
      }

      if (entry.imageUrl) {
        control.appendChild(domify('<img src="' + entry.imageUrl + '">'));
      }
    }
  });

  // open after update
  this.open();
};


/**
 * Trigger an action available on the palette
 *
 * @param  {string} action
 * @param  {Event} event
 */
Palette.prototype.trigger = function(action, event, autoActivate) {
  var entries = this._entries,
      entry,
      handler,
      originalEvent,
      button = event.delegateTarget || event.target;

  if (!button) {
    return event.preventDefault();
  }

  entry = entries[dist_index_esm_attr(button, 'data-action')];

  // when user clicks on the palette and not on an action
  if (!entry) {
    return;
  }

  handler = entry.action;

  originalEvent = event.originalEvent || event;

  // simple action (via callback function)
  if (isFunction(handler)) {
    if (action === 'click') {
      handler(originalEvent, autoActivate);
    }
  } else {
    if (handler[action]) {
      handler[action](originalEvent, autoActivate);
    }
  }

  // silence other actions
  event.preventDefault();
};

Palette.prototype._layoutChanged = function() {
  this._toggleState({});
};

/**
 * Do we need to collapse to two columns?
 *
 * @param {number} availableHeight
 * @param {Object} entries
 *
 * @return {boolean}
 */
Palette.prototype._needsCollapse = function(availableHeight, entries) {

  // top margin + bottom toggle + bottom margin
  // implementors must override this method if they
  // change the palette styles
  var margin = 20 + 10 + 20;

  var entriesHeight = Object.keys(entries).length * 46;

  return availableHeight < entriesHeight + margin;
};

/**
 * Close the palette
 */
Palette.prototype.close = function() {

  this._toggleState({
    open: false,
    twoColumn: false
  });
};


/**
 * Open the palette
 */
Palette.prototype.open = function() {
  this._toggleState({ open: true });
};


Palette.prototype.toggle = function(open) {
  if (this.isOpen()) {
    this.close();
  } else {
    this.open();
  }
};

Palette.prototype.isActiveTool = function(tool) {
  return tool && this._activeTool === tool;
};

Palette.prototype.updateToolHighlight = function(name) {
  var entriesContainer,
      toolsContainer;

  if (!this._toolsContainer) {
    entriesContainer = query('.djs-palette-entries', this._container);

    this._toolsContainer = query('[data-group=tools]', entriesContainer);
  }

  toolsContainer = this._toolsContainer;

  forEach(toolsContainer.children, function(tool) {
    var actionName = tool.getAttribute('data-action');

    if (!actionName) {
      return;
    }

    var toolClasses = dist_index_esm_classes(tool);

    actionName = actionName.replace('-tool', '');

    if (toolClasses.contains('entry') && actionName === name) {
      toolClasses.add('highlighted-entry');
    } else {
      toolClasses.remove('highlighted-entry');
    }
  });
};


/**
 * Return true if the palette is opened.
 *
 * @example
 *
 * palette.open();
 *
 * if (palette.isOpen()) {
 *   // yes, we are open
 * }
 *
 * @return {boolean} true if palette is opened
 */
Palette.prototype.isOpen = function() {
  return dist_index_esm_classes(this._container).has(PALETTE_OPEN_CLS);
};

/**
 * Get container the palette lives in.
 *
 * @return {Element}
 */
Palette.prototype._getParentContainer = function() {
  return this._canvas.getContainer();
};


/* markup definition */

Palette.HTML_MARKUP =
  '<div class="djs-palette">' +
    '<div class="djs-palette-entries"></div>' +
    '<div class="djs-palette-toggle"></div>' +
  '</div>';


// helpers //////////////////////

function Palette_addClasses(element, classNames) {

  var classes = dist_index_esm_classes(element);

  var actualClassNames = index_esm_isArray(classNames) ? classNames : classNames.split(/\s+/g);
  actualClassNames.forEach(function(cls) {
    classes.add(cls);
  });
}

function addPaletteEntries(entries, provider) {

  var entriesOrUpdater = provider.getPaletteEntries();

  if (isFunction(entriesOrUpdater)) {
    return entriesOrUpdater(entries);
  }

  forEach(entriesOrUpdater, function(entry, id) {
    entries[id] = entry;
  });

  return entries;
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/palette/index.js


/* harmony default export */ var palette = ({
  __init__: [ 'palette' ],
  palette: [ 'type', Palette ]
});

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/util/Math.js
/**
 * Get the logarithm of x with base 10
 * @param  {Integer} value
 */
function log10(x) {
  return Math.log(x) / Math.log(10);
}



// CONCATENATED MODULE: ./node_modules/diagram-js/lib/navigation/zoomscroll/ZoomUtil.js


/**
 * Get step size for given range and number of steps.
 *
 * @param {Object} range
 * @param {number} range.min
 * @param {number} range.max
 */
function getStepSize(range, steps) {

  var minLinearRange = log10(range.min),
      maxLinearRange = log10(range.max);

  var absoluteLinearRange = Math.abs(minLinearRange) + Math.abs(maxLinearRange);

  return absoluteLinearRange / steps;
}

function cap(range, scale) {
  return Math.max(range.min, Math.min(range.max, scale));
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/navigation/zoomscroll/ZoomScroll.js








var sign = Math.sign || function(n) {
  return n >= 0 ? 1 : -1;
};

var RANGE = { min: 0.2, max: 4 },
    NUM_STEPS = 10;

var DELTA_THRESHOLD = 0.1;

var DEFAULT_SCALE = 0.75;

/**
 * An implementation of zooming and scrolling within the
 * {@link Canvas} via the mouse wheel.
 *
 * Mouse wheel zooming / scrolling may be disabled using
 * the {@link toggle(enabled)} method.
 *
 * @param {Object} [config]
 * @param {boolean} [config.enabled=true] default enabled state
 * @param {number} [config.scale=.75] scroll sensivity
 * @param {EventBus} eventBus
 * @param {Canvas} canvas
 */
function ZoomScroll(config, eventBus, canvas) {

  config = config || {};

  this._enabled = false;

  this._canvas = canvas;
  this._container = canvas._container;

  this._handleWheel = bind(this._handleWheel, this);

  this._totalDelta = 0;
  this._scale = config.scale || DEFAULT_SCALE;

  var self = this;

  eventBus.on('canvas.init', function(e) {
    self._init(config.enabled !== false);
  });
}

ZoomScroll.$inject = [
  'config.zoomScroll',
  'eventBus',
  'canvas'
];

ZoomScroll.prototype.scroll = function scroll(delta) {
  this._canvas.scroll(delta);
};


ZoomScroll.prototype.reset = function reset() {
  this._canvas.zoom('fit-viewport');
};

/**
 * Zoom depending on delta.
 *
 * @param {number} delta
 * @param {Object} position
 */
ZoomScroll.prototype.zoom = function zoom(delta, position) {

  // zoom with half the step size of stepZoom
  var stepSize = getStepSize(RANGE, NUM_STEPS * 2);

  // add until threshold reached
  this._totalDelta += delta;

  if (Math.abs(this._totalDelta) > DELTA_THRESHOLD) {
    this._zoom(delta, position, stepSize);

    // reset
    this._totalDelta = 0;
  }
};


ZoomScroll.prototype._handleWheel = function handleWheel(event) {

  // event is already handled by '.djs-scrollable'
  if (closest(event.target, '.djs-scrollable', true)) {
    return;
  }

  var element = this._container;

  event.preventDefault();

  // pinch to zoom is mapped to wheel + ctrlKey = true
  // in modern browsers (!)

  var isZoom = event.ctrlKey;

  var isHorizontalScroll = event.shiftKey;

  var factor = -1 * this._scale,
      delta;

  if (isZoom) {
    factor *= event.deltaMode === 0 ? 0.020 : 0.32;
  } else {
    factor *= event.deltaMode === 0 ? 1.0 : 16.0;
  }

  if (isZoom) {
    var elementRect = element.getBoundingClientRect();

    var offset = {
      x: event.clientX - elementRect.left,
      y: event.clientY - elementRect.top
    };

    delta = (
      Math.sqrt(
        Math.pow(event.deltaY, 2) +
        Math.pow(event.deltaX, 2)
      ) * sign(event.deltaY) * factor
    );

    // zoom in relative to diagram {x,y} coordinates
    this.zoom(delta, offset);
  } else {

    if (isHorizontalScroll) {
      delta = {
        dx: factor * event.deltaY,
        dy: 0
      };
    } else {
      delta = {
        dx: factor * event.deltaX,
        dy: factor * event.deltaY
      };
    }

    this.scroll(delta);
  }
};

/**
 * Zoom with fixed step size.
 *
 * @param {number} delta - Zoom delta (1 for zooming in, -1 for out).
 * @param {Object} position
 */
ZoomScroll.prototype.stepZoom = function stepZoom(delta, position) {

  var stepSize = getStepSize(RANGE, NUM_STEPS);

  this._zoom(delta, position, stepSize);
};


/**
 * Zoom in/out given a step size.
 *
 * @param {number} delta
 * @param {Object} position
 * @param {number} stepSize
 */
ZoomScroll.prototype._zoom = function(delta, position, stepSize) {
  var canvas = this._canvas;

  var direction = delta > 0 ? 1 : -1;

  var currentLinearZoomLevel = log10(canvas.zoom());

  // snap to a proximate zoom step
  var newLinearZoomLevel = Math.round(currentLinearZoomLevel / stepSize) * stepSize;

  // increase or decrease one zoom step in the given direction
  newLinearZoomLevel += stepSize * direction;

  // calculate the absolute logarithmic zoom level based on the linear zoom level
  // (e.g. 2 for an absolute x2 zoom)
  var newLogZoomLevel = Math.pow(10, newLinearZoomLevel);

  canvas.zoom(cap(RANGE, newLogZoomLevel), position);
};


/**
 * Toggle the zoom scroll ability via mouse wheel.
 *
 * @param  {boolean} [newEnabled] new enabled state
 */
ZoomScroll.prototype.toggle = function toggle(newEnabled) {

  var element = this._container;
  var handleWheel = this._handleWheel;

  var oldEnabled = this._enabled;

  if (typeof newEnabled === 'undefined') {
    newEnabled = !oldEnabled;
  }

  // only react on actual changes
  if (oldEnabled !== newEnabled) {

    // add or remove wheel listener based on
    // changed enabled state
    componentEvent[newEnabled ? 'bind' : 'unbind'](element, 'wheel', handleWheel, false);
  }

  this._enabled = newEnabled;

  return newEnabled;
};


ZoomScroll.prototype._init = function(newEnabled) {
  this.toggle(newEnabled);
};

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/navigation/zoomscroll/index.js


/* harmony default export */ var zoomscroll = ({
  __init__: [ 'zoomScroll' ],
  zoomScroll: [ 'type', ZoomScroll ]
});
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/command/CommandStack.js



/**
 * A service that offers un- and redoable execution of commands.
 *
 * The command stack is responsible for executing modeling actions
 * in a un- and redoable manner. To do this it delegates the actual
 * command execution to {@link CommandHandler}s.
 *
 * Command handlers provide {@link CommandHandler#execute(ctx)} and
 * {@link CommandHandler#revert(ctx)} methods to un- and redo a command
 * identified by a command context.
 *
 *
 * ## Life-Cycle events
 *
 * In the process the command stack fires a number of life-cycle events
 * that other components to participate in the command execution.
 *
 *    * preExecute
 *    * preExecuted
 *    * execute
 *    * executed
 *    * postExecute
 *    * postExecuted
 *    * revert
 *    * reverted
 *
 * A special event is used for validating, whether a command can be
 * performed prior to its execution.
 *
 *    * canExecute
 *
 * Each of the events is fired as `commandStack.{eventName}` and
 * `commandStack.{commandName}.{eventName}`, respectively. This gives
 * components fine grained control on where to hook into.
 *
 * The event object fired transports `command`, the name of the
 * command and `context`, the command context.
 *
 *
 * ## Creating Command Handlers
 *
 * Command handlers should provide the {@link CommandHandler#execute(ctx)}
 * and {@link CommandHandler#revert(ctx)} methods to implement
 * redoing and undoing of a command.
 *
 * A command handler _must_ ensure undo is performed properly in order
 * not to break the undo chain. It must also return the shapes that
 * got changed during the `execute` and `revert` operations.
 *
 * Command handlers may execute other modeling operations (and thus
 * commands) in their `preExecute` and `postExecute` phases. The command
 * stack will properly group all commands together into a logical unit
 * that may be re- and undone atomically.
 *
 * Command handlers must not execute other commands from within their
 * core implementation (`execute`, `revert`).
 *
 *
 * ## Change Tracking
 *
 * During the execution of the CommandStack it will keep track of all
 * elements that have been touched during the command's execution.
 *
 * At the end of the CommandStack execution it will notify interested
 * components via an 'elements.changed' event with all the dirty
 * elements.
 *
 * The event can be picked up by components that are interested in the fact
 * that elements have been changed. One use case for this is updating
 * their graphical representation after moving / resizing or deletion.
 *
 * @see CommandHandler
 *
 * @param {EventBus} eventBus
 * @param {Injector} injector
 */
function CommandStack(eventBus, injector) {

  /**
   * A map of all registered command handlers.
   *
   * @type {Object}
   */
  this._handlerMap = {};

  /**
   * A stack containing all re/undoable actions on the diagram
   *
   * @type {Array<Object>}
   */
  this._stack = [];

  /**
   * The current index on the stack
   *
   * @type {number}
   */
  this._stackIdx = -1;

  /**
   * Current active commandStack execution
   *
   * @type {Object}
   */
  this._currentExecution = {
    actions: [],
    dirty: []
  };


  this._injector = injector;
  this._eventBus = eventBus;

  this._uid = 1;

  eventBus.on([
    'diagram.destroy',
    'diagram.clear'
  ], function() {
    this.clear(false);
  }, this);
}

CommandStack.$inject = [ 'eventBus', 'injector' ];


/**
 * Execute a command
 *
 * @param {string} command the command to execute
 * @param {Object} context the environment to execute the command in
 */
CommandStack.prototype.execute = function(command, context) {
  if (!command) {
    throw new Error('command required');
  }

  var action = { command: command, context: context };

  this._pushAction(action);
  this._internalExecute(action);
  this._popAction(action);
};


/**
 * Ask whether a given command can be executed.
 *
 * Implementors may hook into the mechanism on two ways:
 *
 *   * in event listeners:
 *
 *     Users may prevent the execution via an event listener.
 *     It must prevent the default action for `commandStack.(<command>.)canExecute` events.
 *
 *   * in command handlers:
 *
 *     If the method {@link CommandHandler#canExecute} is implemented in a handler
 *     it will be called to figure out whether the execution is allowed.
 *
 * @param  {string} command the command to execute
 * @param  {Object} context the environment to execute the command in
 *
 * @return {boolean} true if the command can be executed
 */
CommandStack.prototype.canExecute = function(command, context) {

  var action = { command: command, context: context };

  var handler = this._getHandler(command);

  var result = this._fire(command, 'canExecute', action);

  // handler#canExecute will only be called if no listener
  // decided on a result already
  if (result === undefined) {
    if (!handler) {
      return false;
    }

    if (handler.canExecute) {
      result = handler.canExecute(context);
    }
  }

  return result;
};


/**
 * Clear the command stack, erasing all undo / redo history
 */
CommandStack.prototype.clear = function(emit) {
  this._stack.length = 0;
  this._stackIdx = -1;

  if (emit !== false) {
    this._fire('changed');
  }
};


/**
 * Undo last command(s)
 */
CommandStack.prototype.undo = function() {
  var action = this._getUndoAction(),
      next;

  if (action) {
    this._pushAction(action);

    while (action) {
      this._internalUndo(action);
      next = this._getUndoAction();

      if (!next || next.id !== action.id) {
        break;
      }

      action = next;
    }

    this._popAction();
  }
};


/**
 * Redo last command(s)
 */
CommandStack.prototype.redo = function() {
  var action = this._getRedoAction(),
      next;

  if (action) {
    this._pushAction(action);

    while (action) {
      this._internalExecute(action, true);
      next = this._getRedoAction();

      if (!next || next.id !== action.id) {
        break;
      }

      action = next;
    }

    this._popAction();
  }
};


/**
 * Register a handler instance with the command stack
 *
 * @param {string} command
 * @param {CommandHandler} handler
 */
CommandStack.prototype.register = function(command, handler) {
  this._setHandler(command, handler);
};


/**
 * Register a handler type with the command stack
 * by instantiating it and injecting its dependencies.
 *
 * @param {string} command
 * @param {Function} a constructor for a {@link CommandHandler}
 */
CommandStack.prototype.registerHandler = function(command, handlerCls) {

  if (!command || !handlerCls) {
    throw new Error('command and handlerCls must be defined');
  }

  var handler = this._injector.instantiate(handlerCls);
  this.register(command, handler);
};

CommandStack.prototype.canUndo = function() {
  return !!this._getUndoAction();
};

CommandStack.prototype.canRedo = function() {
  return !!this._getRedoAction();
};

// stack access  //////////////////////

CommandStack.prototype._getRedoAction = function() {
  return this._stack[this._stackIdx + 1];
};


CommandStack.prototype._getUndoAction = function() {
  return this._stack[this._stackIdx];
};


// internal functionality //////////////////////

CommandStack.prototype._internalUndo = function(action) {
  var self = this;

  var command = action.command,
      context = action.context;

  var handler = this._getHandler(command);

  // guard against illegal nested command stack invocations
  this._atomicDo(function() {
    self._fire(command, 'revert', action);

    if (handler.revert) {
      self._markDirty(handler.revert(context));
    }

    self._revertedAction(action);

    self._fire(command, 'reverted', action);
  });
};


CommandStack.prototype._fire = function(command, qualifier, event) {
  if (arguments.length < 3) {
    event = qualifier;
    qualifier = null;
  }

  var names = qualifier ? [ command + '.' + qualifier, qualifier ] : [ command ],
      i, name, result;

  event = this._eventBus.createEvent(event);

  for (i = 0; (name = names[i]); i++) {
    result = this._eventBus.fire('commandStack.' + name, event);

    if (event.cancelBubble) {
      break;
    }
  }

  return result;
};

CommandStack.prototype._createId = function() {
  return this._uid++;
};

CommandStack.prototype._atomicDo = function(fn) {

  var execution = this._currentExecution;

  execution.atomic = true;

  try {
    fn();
  } finally {
    execution.atomic = false;
  }
};

CommandStack.prototype._internalExecute = function(action, redo) {
  var self = this;

  var command = action.command,
      context = action.context;

  var handler = this._getHandler(command);

  if (!handler) {
    throw new Error('no command handler registered for <' + command + '>');
  }

  this._pushAction(action);

  if (!redo) {
    this._fire(command, 'preExecute', action);

    if (handler.preExecute) {
      handler.preExecute(context);
    }

    this._fire(command, 'preExecuted', action);
  }

  // guard against illegal nested command stack invocations
  this._atomicDo(function() {

    self._fire(command, 'execute', action);

    if (handler.execute) {

      // actual execute + mark return results as dirty
      self._markDirty(handler.execute(context));
    }

    // log to stack
    self._executedAction(action, redo);

    self._fire(command, 'executed', action);
  });

  if (!redo) {
    this._fire(command, 'postExecute', action);

    if (handler.postExecute) {
      handler.postExecute(context);
    }

    this._fire(command, 'postExecuted', action);
  }

  this._popAction(action);
};


CommandStack.prototype._pushAction = function(action) {

  var execution = this._currentExecution,
      actions = execution.actions;

  var baseAction = actions[0];

  if (execution.atomic) {
    throw new Error('illegal invocation in <execute> or <revert> phase (action: ' + action.command + ')');
  }

  if (!action.id) {
    action.id = (baseAction && baseAction.id) || this._createId();
  }

  actions.push(action);
};


CommandStack.prototype._popAction = function() {
  var execution = this._currentExecution,
      actions = execution.actions,
      dirty = execution.dirty;

  actions.pop();

  if (!actions.length) {
    this._eventBus.fire('elements.changed', { elements: uniqueBy('id', dirty.reverse()) });

    dirty.length = 0;

    this._fire('changed');
  }
};


CommandStack.prototype._markDirty = function(elements) {
  var execution = this._currentExecution;

  if (!elements) {
    return;
  }

  elements = index_esm_isArray(elements) ? elements : [ elements ];

  execution.dirty = execution.dirty.concat(elements);
};


CommandStack.prototype._executedAction = function(action, redo) {
  var stackIdx = ++this._stackIdx;

  if (!redo) {
    this._stack.splice(stackIdx, this._stack.length, action);
  }
};


CommandStack.prototype._revertedAction = function(action) {
  this._stackIdx--;
};


CommandStack.prototype._getHandler = function(command) {
  return this._handlerMap[command];
};

CommandStack.prototype._setHandler = function(command, handler) {
  if (!command || !handler) {
    throw new Error('command and handler required');
  }

  if (this._handlerMap[command]) {
    throw new Error('overriding handler for command <' + command + '>');
  }

  this._handlerMap[command] = handler;
};

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/command/index.js


/* harmony default export */ var command = ({
  commandStack: [ 'type', CommandStack ]
});

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/util/Removal.js
/**
 * Remove from the beginning of a collection until it is empty.
 *
 * This is a null-safe operation that ensures elements
 * are being removed from the given collection until the
 * collection is empty.
 *
 * The implementation deals with the fact that a remove operation
 * may touch, i.e. remove multiple elements in the collection
 * at a time.
 *
 * @param {Array<Object>} [collection]
 * @param {Function} removeFn
 *
 * @return {Array<Object>} the cleared collection
 */
function saveClear(collection, removeFn) {

  if (typeof removeFn !== 'function') {
    throw new Error('removeFn iterator must be a function');
  }

  if (!collection) {
    return;
  }

  var e;

  while ((e = collection[0])) {
    removeFn(e);
  }

  return collection;
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/command/CommandInterceptor.js



var CommandInterceptor_DEFAULT_PRIORITY = 1000;

/**
 * A utility that can be used to plug-in into the command execution for
 * extension and/or validation.
 *
 * @param {EventBus} eventBus
 *
 * @example
 *
 * import inherits from 'inherits';
 *
 * import CommandInterceptor from 'diagram-js/lib/command/CommandInterceptor';
 *
 * function CommandLogger(eventBus) {
 *   CommandInterceptor.call(this, eventBus);
 *
 *   this.preExecute(function(event) {
 *     console.log('command pre-execute', event);
 *   });
 * }
 *
 * inherits(CommandLogger, CommandInterceptor);
 *
 */
function CommandInterceptor(eventBus) {
  this._eventBus = eventBus;
}

CommandInterceptor.$inject = [ 'eventBus' ];

function unwrapEvent(fn, that) {
  return function(event) {
    return fn.call(that || null, event.context, event.command, event);
  };
}

/**
 * Register an interceptor for a command execution
 *
 * @param {string|Array<string>} [events] list of commands to register on
 * @param {string} [hook] command hook, i.e. preExecute, executed to listen on
 * @param {number} [priority] the priority on which to hook into the execution
 * @param {Function} handlerFn interceptor to be invoked with (event)
 * @param {boolean} unwrap if true, unwrap the event and pass (context, command, event) to the
 *                          listener instead
 * @param {Object} [that] Pass context (`this`) to the handler function
 */
CommandInterceptor.prototype.on = function(events, hook, priority, handlerFn, unwrap, that) {

  if (isFunction(hook) || isNumber(hook)) {
    that = unwrap;
    unwrap = handlerFn;
    handlerFn = priority;
    priority = hook;
    hook = null;
  }

  if (isFunction(priority)) {
    that = unwrap;
    unwrap = handlerFn;
    handlerFn = priority;
    priority = CommandInterceptor_DEFAULT_PRIORITY;
  }

  if (isObject(unwrap)) {
    that = unwrap;
    unwrap = false;
  }

  if (!isFunction(handlerFn)) {
    throw new Error('handlerFn must be a function');
  }

  if (!index_esm_isArray(events)) {
    events = [ events ];
  }

  var eventBus = this._eventBus;

  forEach(events, function(event) {

    // concat commandStack(.event)?(.hook)?
    var fullEvent = [ 'commandStack', event, hook ].filter(function(e) { return e; }).join('.');

    eventBus.on(fullEvent, priority, unwrap ? unwrapEvent(handlerFn, that) : handlerFn, that);
  });
};


var hooks = [
  'canExecute',
  'preExecute',
  'preExecuted',
  'execute',
  'executed',
  'postExecute',
  'postExecuted',
  'revert',
  'reverted'
];

/*
 * Install hook shortcuts
 *
 * This will generate the CommandInterceptor#(preExecute|...|reverted) methods
 * which will in term forward to CommandInterceptor#on.
 */
forEach(hooks, function(hook) {

  /**
   * {canExecute|preExecute|preExecuted|execute|executed|postExecute|postExecuted|revert|reverted}
   *
   * A named hook for plugging into the command execution
   *
   * @param {string|Array<string>} [events] list of commands to register on
   * @param {number} [priority] the priority on which to hook into the execution
   * @param {Function} handlerFn interceptor to be invoked with (event)
   * @param {boolean} [unwrap=false] if true, unwrap the event and pass (context, command, event) to the
   *                          listener instead
   * @param {Object} [that] Pass context (`this`) to the handler function
   */
  CommandInterceptor.prototype[hook] = function(events, priority, handlerFn, unwrap, that) {

    if (isFunction(events) || isNumber(events)) {
      that = unwrap;
      unwrap = handlerFn;
      handlerFn = priority;
      priority = events;
      events = null;
    }

    this.on(events, hook, priority, handlerFn, unwrap, that);
  };
});

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/label-support/LabelSupport.js




var LabelSupport_LOW_PRIORITY = 250,
    LabelSupport_HIGH_PRIORITY = 1400;








/**
 * A handler that makes sure labels are properly moved with
 * their label targets.
 *
 * @param {didi.Injector} injector
 * @param {EventBus} eventBus
 * @param {Modeling} modeling
 */
function LabelSupport(injector, eventBus, modeling) {

  CommandInterceptor.call(this, eventBus);

  var movePreview = injector.get('movePreview', false);

  // remove labels from the collection that are being
  // moved with other elements anyway
  eventBus.on('shape.move.start', LabelSupport_HIGH_PRIORITY, function(e) {

    var context = e.context,
        shapes = context.shapes,
        validatedShapes = context.validatedShapes;

    context.shapes = removeLabels(shapes);
    context.validatedShapes = removeLabels(validatedShapes);
  });

  // add labels to visual's group
  movePreview && eventBus.on('shape.move.start', LabelSupport_LOW_PRIORITY, function(e) {

    var context = e.context,
        shapes = context.shapes;

    var labels = [];

    forEach(shapes, function(element) {

      forEach(element.labels, function(label) {

        if (!label.hidden && context.shapes.indexOf(label) === -1) {
          labels.push(label);
        }

        if (element.labelTarget) {
          labels.push(element);
        }
      });
    });

    forEach(labels, function(label) {
      movePreview.makeDraggable(context, label, true);
    });

  });

  // add all labels to move closure
  this.preExecuted('elements.move', LabelSupport_HIGH_PRIORITY, function(e) {
    var context = e.context,
        closure = context.closure,
        enclosedElements = closure.enclosedElements;

    var enclosedLabels = [];

    // find labels that are not part of
    // move closure yet and add them
    forEach(enclosedElements, function(element) {
      forEach(element.labels, function(label) {

        if (!enclosedElements[label.id]) {
          enclosedLabels.push(label);
        }
      });
    });

    closure.addAll(enclosedLabels);
  });


  this.preExecute([
    'connection.delete',
    'shape.delete'
  ], function(e) {

    var context = e.context,
        element = context.connection || context.shape;

    saveClear(element.labels, function(label) {
      modeling.removeShape(label, { nested: true });
    });
  });


  this.execute('shape.delete', function(e) {

    var context = e.context,
        shape = context.shape,
        labelTarget = shape.labelTarget;

    // unset labelTarget
    if (labelTarget) {
      context.labelTargetIndex = indexOf(labelTarget.labels, shape);
      context.labelTarget = labelTarget;

      shape.labelTarget = null;
    }
  });

  this.revert('shape.delete', function(e) {

    var context = e.context,
        shape = context.shape,
        labelTarget = context.labelTarget,
        labelTargetIndex = context.labelTargetIndex;

    // restore labelTarget
    if (labelTarget) {
      Collections_add(labelTarget.labels, shape, labelTargetIndex);

      shape.labelTarget = labelTarget;
    }
  });

}

inherits_browser_default()(LabelSupport, CommandInterceptor);

LabelSupport.$inject = [
  'injector',
  'eventBus',
  'modeling'
];


/**
 * Return a filtered list of elements that do not
 * contain attached elements with hosts being part
 * of the selection.
 *
 * @param  {Array<djs.model.Base>} elements
 *
 * @return {Array<djs.model.Base>} filtered
 */
function removeLabels(elements) {

  return index_esm_filter(elements, function(element) {

    // filter out labels that are move together
    // with their label targets
    return elements.indexOf(element.labelTarget) === -1;
  });
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/label-support/index.js


/* harmony default export */ var label_support = ({
  __init__: [ 'labelSupport'],
  labelSupport: [ 'type', LabelSupport ]
});

// CONCATENATED MODULE: ./lib/_util/translate.js
/**多语言翻译方法 提供统一的方法，方便后续升级支持*/
var translate_translate = function translate(text) {
  return text;
};
// CONCATENATED MODULE: ./lib/_util/util.js

/**
 * 生成一个uuid
 */

var uuid = function uuid() {
  var s = [];
  var hexDigits = "0123456789abcdef";

  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }

  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010

  s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01

  s[8] = s[13] = s[18] = s[23] = "-";
  var uuid = s.join("");
  return uuid;
};
var is = function is(obj, type) {
  if (obj.type == type) {
    return true;
  } else {
    return false;
  }
};
function isAny(element, types) {
  return some(types, function (t) {
    return is(element, t);
  });
}
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/component/label.js
var DEFAULT_LABEL_SIZE = {
  width: 90,
  height: 20
};
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/modeling/elementFactory.js
/**
 * 重载diagram-js 的ElementFactory 方法
 */






function elementFactory_ElementFactory() {
  //
  ElementFactory.call(this);
  this._translate = translate_translate;
}
inherits_browser_default()(elementFactory_ElementFactory, ElementFactory);
elementFactory_ElementFactory.$inject = [];
elementFactory_ElementFactory.prototype.baseCreate = ElementFactory.prototype.create;

elementFactory_ElementFactory.prototype.create = function (elementType, attrs) {
  if (elementType === 'label') {
    return this.baseCreate(elementType, index_esm_assign({
      type: 'label'
    }, DEFAULT_LABEL_SIZE, attrs));
  }

  return this.createFlowElement(elementType, attrs);
};

elementFactory_ElementFactory.prototype.createFlowElement = function (elementType, attrs) {
  if (attrs == null || attrs == undefined || attrs == '') {
    return this.baseCreate(elementType, attrs);
  } //console.log(attrs,'attrs');


  attrs.businessObject = attrs.businessObject || {
    id: uuid()
  };

  if (elementType === 'connection') {
    attrs.type = 'myline';
  }

  var businessObject = attrs.businessObject;
  businessObject.type = attrs.type;

  var size = this._getDefaultSize(businessObject.type);

  attrs = index_esm_assign({
    businessObject: businessObject,
    id: businessObject.id
  }, size, attrs);
  return this.baseCreate(elementType, attrs);
};

elementFactory_ElementFactory.prototype._getDefaultSize = function (type) {
  var size = {
    width: 100,
    height: 80
  };

  switch (type) {
    case 'startEvent':
    case 'endEvent':
      size = {
        width: 36,
        height: 36
      };
      break;

    case 'gatewayAnd':
    case 'gatewayXor':
    case 'gatewayInclusive':
      size = {
        width: 50,
        height: 50
      };
      break;

    case 'subprocess':
    case 'userTask':
    case 'scriptTask':
      size = {
        width: 100,
        height: 80
      };
      break;
  }

  return size;
};
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/AlignElementsHandler.js


/**
 * A handler that align elements in a certain way.
 *
 */
function AlignElementsHandler_AlignElements(modeling, canvas) {
  this._modeling = modeling;
  this._canvas = canvas;
}

AlignElementsHandler_AlignElements.$inject = [ 'modeling', 'canvas' ];


AlignElementsHandler_AlignElements.prototype.preExecute = function(context) {
  var modeling = this._modeling;

  var elements = context.elements,
      alignment = context.alignment;


  forEach(elements, function(element) {
    var delta = {
      x: 0,
      y: 0
    };

    if (alignment.left) {
      delta.x = alignment.left - element.x;

    } else if (alignment.right) {
      delta.x = (alignment.right - element.width) - element.x;

    } else if (alignment.center) {
      delta.x = (alignment.center - Math.round(element.width / 2)) - element.x;

    } else if (alignment.top) {
      delta.y = alignment.top - element.y;

    } else if (alignment.bottom) {
      delta.y = (alignment.bottom - element.height) - element.y;

    } else if (alignment.middle) {
      delta.y = (alignment.middle - Math.round(element.height / 2)) - element.y;
    }

    modeling.moveElements([ element ], delta, element.parent);
  });
};

AlignElementsHandler_AlignElements.prototype.postExecute = function(context) {

};

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/AppendShapeHandler.js



/**
 * A handler that implements reversible appending of shapes
 * to a source shape.
 *
 * @param {canvas} Canvas
 * @param {elementFactory} ElementFactory
 * @param {modeling} Modeling
 */
function AppendShapeHandler(modeling) {
  this._modeling = modeling;
}

AppendShapeHandler.$inject = [ 'modeling' ];


// api //////////////////////


/**
 * Creates a new shape
 *
 * @param {Object} context
 * @param {ElementDescriptor} context.shape the new shape
 * @param {ElementDescriptor} context.source the source object
 * @param {ElementDescriptor} context.parent the parent object
 * @param {Point} context.position position of the new element
 */
AppendShapeHandler.prototype.preExecute = function(context) {

  var source = context.source;

  if (!source) {
    throw new Error('source required');
  }

  var target = context.target || source.parent,
      shape = context.shape,
      hints = context.hints || {};

  shape = context.shape =
    this._modeling.createShape(
      shape,
      context.position,
      target, { attach: hints.attach });

  context.shape = shape;
};

AppendShapeHandler.prototype.postExecute = function(context) {
  var hints = context.hints || {};

  if (!existsConnection(context.source, context.shape)) {

    // create connection
    if (hints.connectionTarget === context.source) {
      this._modeling.connect(context.shape, context.source, context.connection);
    } else {
      this._modeling.connect(context.source, context.shape, context.connection);
    }
  }
};


function existsConnection(source, target) {
  return some(source.outgoing, function(c) {
    return c.target === target;
  });
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/CreateConnectionHandler.js
function CreateConnectionHandler(canvas, layouter) {
  this._canvas = canvas;
  this._layouter = layouter;
}

CreateConnectionHandler.$inject = [ 'canvas', 'layouter' ];


// api //////////////////////


/**
 * Appends a shape to a target shape
 *
 * @param {Object} context
 * @param {djs.element.Base} context.source the source object
 * @param {djs.element.Base} context.target the parent object
 * @param {Point} context.position position of the new element
 */
CreateConnectionHandler.prototype.execute = function(context) {

  var connection = context.connection,
      source = context.source,
      target = context.target,
      parent = context.parent,
      parentIndex = context.parentIndex,
      hints = context.hints;

  if (!source || !target) {
    throw new Error('source and target required');
  }

  if (!parent) {
    throw new Error('parent required');
  }

  connection.source = source;
  connection.target = target;

  if (!connection.waypoints) {
    connection.waypoints = this._layouter.layoutConnection(connection, hints);
  }

  // add connection
  this._canvas.addConnection(connection, parent, parentIndex);

  return connection;
};

CreateConnectionHandler.prototype.revert = function(context) {
  var connection = context.connection;

  this._canvas.removeConnection(connection);

  connection.source = null;
  connection.target = null;

  return connection;
};
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/CreateElementsHandler.js




var CreateElementsHandler_round = Math.round;

function CreateElementsHandler(modeling) {
  this._modeling = modeling;
}

CreateElementsHandler.$inject = [
  'modeling'
];

CreateElementsHandler.prototype.preExecute = function(context) {
  var elements = context.elements,
      parent = context.parent,
      parentIndex = context.parentIndex,
      position = context.position,
      hints = context.hints;

  var modeling = this._modeling;

  // make sure each element has x and y
  forEach(elements, function(element) {
    if (!isNumber(element.x)) {
      element.x = 0;
    }

    if (!isNumber(element.y)) {
      element.y = 0;
    }
  });

  var bbox = getBBox(elements);

  // center elements around position
  forEach(elements, function(element) {
    if (CreateElementsHandler_isConnection(element)) {
      element.waypoints = map(element.waypoints, function(waypoint) {
        return {
          x: CreateElementsHandler_round(waypoint.x - bbox.x - bbox.width / 2 + position.x),
          y: CreateElementsHandler_round(waypoint.y - bbox.y - bbox.height / 2 + position.y)
        };
      });
    }

    index_esm_assign(element, {
      x: CreateElementsHandler_round(element.x - bbox.x - bbox.width / 2 + position.x),
      y: CreateElementsHandler_round(element.y - bbox.y - bbox.height / 2 + position.y)
    });
  });

  var parents = getParents(elements);

  var cache = {};

  forEach(elements, function(element) {
    if (CreateElementsHandler_isConnection(element)) {
      cache[ element.id ] = isNumber(parentIndex) ?
        modeling.createConnection(
          cache[ element.source.id ],
          cache[ element.target.id ],
          parentIndex,
          element,
          element.parent || parent,
          hints
        ) :
        modeling.createConnection(
          cache[ element.source.id ],
          cache[ element.target.id ],
          element,
          element.parent || parent,
          hints
        );

      return;
    }

    var createShapeHints = index_esm_assign({}, hints);

    if (parents.indexOf(element) === -1) {
      createShapeHints.autoResize = false;
    }

    cache[ element.id ] = isNumber(parentIndex) ?
      modeling.createShape(
        element,
        pick(element, [ 'x', 'y', 'width', 'height' ]),
        element.parent || parent,
        parentIndex,
        createShapeHints
      ) :
      modeling.createShape(
        element,
        pick(element, [ 'x', 'y', 'width', 'height' ]),
        element.parent || parent,
        createShapeHints
      );
  });

  context.elements = index_esm_values(cache);
};

// helpers //////////

function CreateElementsHandler_isConnection(element) {
  return !!element.waypoints;
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/CreateShapeHandler.js


var CreateShapeHandler_round = Math.round;


/**
 * A handler that implements reversible addition of shapes.
 *
 * @param {canvas} Canvas
 */
function CreateShapeHandler(canvas) {
  this._canvas = canvas;
}

CreateShapeHandler.$inject = [ 'canvas' ];


// api //////////////////////


/**
 * Appends a shape to a target shape
 *
 * @param {Object} context
 * @param {djs.model.Base} context.parent the parent object
 * @param {Point} context.position position of the new element
 */
CreateShapeHandler.prototype.execute = function(context) {

  var shape = context.shape,
      positionOrBounds = context.position,
      parent = context.parent,
      parentIndex = context.parentIndex;

  if (!parent) {
    throw new Error('parent required');
  }

  if (!positionOrBounds) {
    throw new Error('position required');
  }

  // (1) add at event center position _or_ at given bounds
  if (positionOrBounds.width !== undefined) {
    index_esm_assign(shape, positionOrBounds);
  } else {
    index_esm_assign(shape, {
      x: positionOrBounds.x - CreateShapeHandler_round(shape.width / 2),
      y: positionOrBounds.y - CreateShapeHandler_round(shape.height / 2)
    });
  }

  // (2) add to canvas
  this._canvas.addShape(shape, parent, parentIndex);

  return shape;
};


/**
 * Undo append by removing the shape
 */
CreateShapeHandler.prototype.revert = function(context) {

  var shape = context.shape;

  // (3) remove form canvas
  this._canvas.removeShape(shape);

  return shape;
};
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/CreateLabelHandler.js





/**
 * A handler that attaches a label to a given target shape.
 *
 * @param {Canvas} canvas
 */
function CreateLabelHandler(canvas) {
  CreateShapeHandler.call(this, canvas);
}

inherits_browser_default()(CreateLabelHandler, CreateShapeHandler);

CreateLabelHandler.$inject = [ 'canvas' ];


// api //////////////////////


var originalExecute = CreateShapeHandler.prototype.execute;

/**
 * Appends a label to a target shape.
 *
 * @method CreateLabelHandler#execute
 *
 * @param {Object} context
 * @param {ElementDescriptor} context.target the element the label is attached to
 * @param {ElementDescriptor} context.parent the parent object
 * @param {Point} context.position position of the new element
 */
CreateLabelHandler.prototype.execute = function(context) {

  var label = context.shape;

  ensureValidDimensions(label);

  label.labelTarget = context.labelTarget;

  return originalExecute.call(this, context);
};

var originalRevert = CreateShapeHandler.prototype.revert;

/**
 * Undo append by removing the shape
 */
CreateLabelHandler.prototype.revert = function(context) {
  context.shape.labelTarget = null;

  return originalRevert.call(this, context);
};


// helpers //////////////////////

function ensureValidDimensions(label) {

  // make sure a label has valid { width, height } dimensions
  [ 'width', 'height' ].forEach(function(prop) {
    if (typeof label[prop] === 'undefined') {
      label[prop] = 0;
    }
  });
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/DeleteConnectionHandler.js



/**
 * A handler that implements reversible deletion of Connections.
 */
function DeleteConnectionHandler(canvas, modeling) {
  this._canvas = canvas;
  this._modeling = modeling;
}

DeleteConnectionHandler.$inject = [
  'canvas',
  'modeling'
];


DeleteConnectionHandler.prototype.execute = function(context) {

  var connection = context.connection,
      parent = connection.parent;

  context.parent = parent;

  // remember containment
  context.parentIndex = indexOf(parent.children, connection);

  context.source = connection.source;
  context.target = connection.target;

  this._canvas.removeConnection(connection);

  connection.source = null;
  connection.target = null;

  return connection;
};

/**
 * Command revert implementation.
 */
DeleteConnectionHandler.prototype.revert = function(context) {

  var connection = context.connection,
      parent = context.parent,
      parentIndex = context.parentIndex;

  connection.source = context.source;
  connection.target = context.target;

  // restore containment
  Collections_add(parent.children, connection, parentIndex);

  this._canvas.addConnection(connection, parent);

  return connection;
};

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/DeleteElementsHandler.js



function DeleteElementsHandler(modeling, elementRegistry) {
  this._modeling = modeling;
  this._elementRegistry = elementRegistry;
}

DeleteElementsHandler.$inject = [
  'modeling',
  'elementRegistry'
];


DeleteElementsHandler.prototype.postExecute = function(context) {

  var modeling = this._modeling,
      elementRegistry = this._elementRegistry,
      elements = context.elements;

  forEach(elements, function(element) {

    // element may have been removed with previous
    // remove operations already (e.g. in case of nesting)
    if (!elementRegistry.get(element.id)) {
      return;
    }

    if (element.waypoints) {
      modeling.removeConnection(element);
    } else {
      modeling.removeShape(element);
    }
  });
};
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/DeleteShapeHandler.js





/**
 * A handler that implements reversible deletion of shapes.
 *
 */
function DeleteShapeHandler(canvas, modeling) {
  this._canvas = canvas;
  this._modeling = modeling;
}

DeleteShapeHandler.$inject = [ 'canvas', 'modeling' ];


/**
 * - Remove connections
 * - Remove all direct children
 */
DeleteShapeHandler.prototype.preExecute = function(context) {

  var modeling = this._modeling;

  var shape = context.shape;

  // remove connections
  saveClear(shape.incoming, function(connection) {

    // To make sure that the connection isn't removed twice
    // For example if a container is removed
    modeling.removeConnection(connection, { nested: true });
  });

  saveClear(shape.outgoing, function(connection) {
    modeling.removeConnection(connection, { nested: true });
  });

  // remove child shapes and connections
  saveClear(shape.children, function(child) {
    if (DeleteShapeHandler_isConnection(child)) {
      modeling.removeConnection(child, { nested: true });
    } else {
      modeling.removeShape(child, { nested: true });
    }
  });
};

/**
 * Remove shape and remember the parent
 */
DeleteShapeHandler.prototype.execute = function(context) {
  var canvas = this._canvas;

  var shape = context.shape,
      oldParent = shape.parent;

  context.oldParent = oldParent;

  // remove containment
  context.oldParentIndex = indexOf(oldParent.children, shape);

  // remove shape
  canvas.removeShape(shape);

  return shape;
};


/**
 * Command revert implementation
 */
DeleteShapeHandler.prototype.revert = function(context) {

  var canvas = this._canvas;

  var shape = context.shape,
      oldParent = context.oldParent,
      oldParentIndex = context.oldParentIndex;

  // restore containment
  Collections_add(oldParent.children, shape, oldParentIndex);

  canvas.addShape(shape, oldParent);

  return shape;
};

function DeleteShapeHandler_isConnection(element) {
  return element.waypoints;
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/DistributeElementsHandler.js



/**
 * A handler that distributes elements evenly.
 */
function DistributeElements(modeling) {
  this._modeling = modeling;
}

DistributeElements.$inject = [ 'modeling' ];

var OFF_AXIS = {
  x: 'y',
  y: 'x'
};

DistributeElements.prototype.preExecute = function(context) {
  var modeling = this._modeling;

  var groups = context.groups,
      axis = context.axis,
      dimension = context.dimension;

  function updateRange(group, element) {
    group.range.min = Math.min(element[axis], group.range.min);
    group.range.max = Math.max(element[axis] + element[dimension], group.range.max);
  }

  function center(element) {
    return element[axis] + element[dimension] / 2;
  }

  function lastIdx(arr) {
    return arr.length - 1;
  }

  function rangeDiff(range) {
    return range.max - range.min;
  }

  function centerElement(refCenter, element) {
    var delta = { y: 0 };

    delta[axis] = refCenter - center(element);

    if (delta[axis]) {

      delta[OFF_AXIS[axis]] = 0;

      modeling.moveElements([ element ], delta, element.parent);
    }
  }

  var firstGroup = groups[0],
      lastGroupIdx = lastIdx(groups),
      lastGroup = groups[ lastGroupIdx ];

  var margin,
      spaceInBetween,
      groupsSize = 0; // the size of each range

  forEach(groups, function(group, idx) {
    var sortedElements,
        refElem,
        refCenter;

    if (group.elements.length < 2) {
      if (idx && idx !== groups.length - 1) {
        updateRange(group, group.elements[0]);

        groupsSize += rangeDiff(group.range);
      }
      return;
    }

    sortedElements = sortBy(group.elements, axis);

    refElem = sortedElements[0];

    if (idx === lastGroupIdx) {
      refElem = sortedElements[lastIdx(sortedElements)];
    }

    refCenter = center(refElem);

    // wanna update the ranges after the shapes have been centered
    group.range = null;

    forEach(sortedElements, function(element) {

      centerElement(refCenter, element);

      if (group.range === null) {
        group.range = {
          min: element[axis],
          max: element[axis] + element[dimension]
        };

        return;
      }

      // update group's range after centering the range elements
      updateRange(group, element);
    });

    if (idx && idx !== groups.length - 1) {
      groupsSize += rangeDiff(group.range);
    }
  });

  spaceInBetween = Math.abs(lastGroup.range.min - firstGroup.range.max);

  margin = Math.round((spaceInBetween - groupsSize) / (groups.length - 1));

  if (margin < groups.length - 1) {
    return;
  }

  forEach(groups, function(group, groupIdx) {
    var delta = {},
        prevGroup;

    if (group === firstGroup || group === lastGroup) {
      return;
    }

    prevGroup = groups[groupIdx - 1];

    group.range.max = 0;

    forEach(group.elements, function(element, idx) {
      delta[OFF_AXIS[axis]] = 0;
      delta[axis] = (prevGroup.range.max - element[axis]) + margin;

      if (group.range.min !== element[axis]) {
        delta[axis] += element[axis] - group.range.min;
      }

      if (delta[axis]) {
        modeling.moveElements([ element ], delta, element.parent);
      }

      group.range.max = Math.max(element[axis] + element[dimension], idx ? group.range.max : 0);
    });
  });
};

DistributeElements.prototype.postExecute = function(context) {

};

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/LayoutConnectionHandler.js



/**
 * A handler that implements reversible moving of shapes.
 */
function LayoutConnectionHandler(layouter, canvas) {
  this._layouter = layouter;
  this._canvas = canvas;
}

LayoutConnectionHandler.$inject = [ 'layouter', 'canvas' ];

LayoutConnectionHandler.prototype.execute = function(context) {

  var connection = context.connection;

  var oldWaypoints = connection.waypoints;

  index_esm_assign(context, {
    oldWaypoints: oldWaypoints
  });

  connection.waypoints = this._layouter.layoutConnection(connection, context.hints);

  return connection;
};

LayoutConnectionHandler.prototype.revert = function(context) {

  var connection = context.connection;

  connection.waypoints = context.oldWaypoints;

  return connection;
};

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/MoveConnectionHandler.js






/**
 * A handler that implements reversible moving of connections.
 *
 * The handler differs from the layout connection handler in a sense
 * that it preserves the connection layout.
 */
function MoveConnectionHandler() { }


MoveConnectionHandler.prototype.execute = function(context) {

  var connection = context.connection,
      delta = context.delta;

  var newParent = context.newParent || connection.parent,
      newParentIndex = context.newParentIndex,
      oldParent = connection.parent;

  // save old parent in context
  context.oldParent = oldParent;
  context.oldParentIndex = Collections_remove(oldParent.children, connection);

  // add to new parent at position
  Collections_add(newParent.children, connection, newParentIndex);

  // update parent
  connection.parent = newParent;

  // update waypoint positions
  forEach(connection.waypoints, function(p) {
    p.x += delta.x;
    p.y += delta.y;

    if (p.original) {
      p.original.x += delta.x;
      p.original.y += delta.y;
    }
  });

  return connection;
};

MoveConnectionHandler.prototype.revert = function(context) {

  var connection = context.connection,
      newParent = connection.parent,
      oldParent = context.oldParent,
      oldParentIndex = context.oldParentIndex,
      delta = context.delta;

  // remove from newParent
  Collections_remove(newParent.children, connection);

  // restore previous location in old parent
  Collections_add(oldParent.children, connection, oldParentIndex);

  // restore parent
  connection.parent = oldParent;

  // revert to old waypoint positions
  forEach(connection.waypoints, function(p) {
    p.x -= delta.x;
    p.y -= delta.y;

    if (p.original) {
      p.original.x -= delta.x;
      p.original.y -= delta.y;
    }
  });

  return connection;
};
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/util/AttachUtil.js





/**
 * Calculates the absolute point relative to the new element's position
 *
 * @param {point} point [absolute]
 * @param {bounds} oldBounds
 * @param {bounds} newBounds
 *
 * @return {point} point [absolute]
 */
function getNewAttachPoint(point, oldBounds, newBounds) {
  var oldCenter = PositionUtil_center(oldBounds),
      newCenter = PositionUtil_center(newBounds),
      oldDelta = PositionUtil_delta(point, oldCenter);

  var newDelta = {
    x: oldDelta.x * (newBounds.width / oldBounds.width),
    y: oldDelta.y * (newBounds.height / oldBounds.height)
  };

  return roundPoint({
    x: newCenter.x + newDelta.x,
    y: newCenter.y + newDelta.y
  });
}


/**
 * Calculates the shape's delta relative to a new position
 * of a certain element's bounds
 *
 * @param {djs.model.Shape} point [absolute]
 * @param {bounds} oldBounds
 * @param {bounds} newBounds
 *
 * @return {delta} delta
 */
function getNewAttachShapeDelta(shape, oldBounds, newBounds) {
  var shapeCenter = PositionUtil_center(shape),
      oldCenter = PositionUtil_center(oldBounds),
      newCenter = PositionUtil_center(newBounds),
      shapeDelta = PositionUtil_delta(shape, shapeCenter),
      oldCenterDelta = PositionUtil_delta(shapeCenter, oldCenter),
      stickyPositionDelta = getStickyPositionDelta(shapeCenter, oldBounds, newBounds);

  if (stickyPositionDelta) {
    return stickyPositionDelta;
  }

  var newCenterDelta = {
    x: oldCenterDelta.x * (newBounds.width / oldBounds.width),
    y: oldCenterDelta.y * (newBounds.height / oldBounds.height)
  };

  var newShapeCenter = {
    x: newCenter.x + newCenterDelta.x,
    y: newCenter.y + newCenterDelta.y
  };

  return roundPoint({
    x: newShapeCenter.x + shapeDelta.x - shape.x,
    y: newShapeCenter.y + shapeDelta.y - shape.y
  });
}

function getStickyPositionDelta(oldShapeCenter, oldBounds, newBounds) {
  var oldTRBL = asTRBL(oldBounds),
      newTRBL = asTRBL(newBounds);

  if (isMoved(oldTRBL, newTRBL)) {
    return null;
  }

  var oldOrientation = getOrientation(oldBounds, oldShapeCenter),
      stickyPositionDelta,
      newShapeCenter,
      newOrientation;

  if (oldOrientation === 'top') {
    stickyPositionDelta = {
      x: 0,
      y: newTRBL.bottom - oldTRBL.bottom
    };
  } else if (oldOrientation === 'bottom') {
    stickyPositionDelta = {
      x: 0,
      y: newTRBL.top - oldTRBL.top
    };
  } else if (oldOrientation === 'right') {
    stickyPositionDelta = {
      x: newTRBL.left - oldTRBL.left,
      y: 0
    };
  } else if (oldOrientation === 'left') {
    stickyPositionDelta = {
      x: newTRBL.right - oldTRBL.right,
      y: 0
    };
  } else {

    // fallback to proportional movement for corner-placed attachments
    return null;
  }

  newShapeCenter = {
    x: oldShapeCenter.x + stickyPositionDelta.x,
    y: oldShapeCenter.y + stickyPositionDelta.y
  };

  newOrientation = getOrientation(newBounds, newShapeCenter);

  if (newOrientation !== oldOrientation) {

    // fallback to proportional movement if orientation would otherwise change
    return null;
  }

  return stickyPositionDelta;
}

function isMoved(oldTRBL, newTRBL) {
  return isHorizontallyMoved(oldTRBL, newTRBL) || isVerticallyMoved(oldTRBL, newTRBL);
}

function isHorizontallyMoved(oldTRBL, newTRBL) {
  return oldTRBL.right !== newTRBL.right && oldTRBL.left !== newTRBL.left;
}

function isVerticallyMoved(oldTRBL, newTRBL) {
  return oldTRBL.top !== newTRBL.top && oldTRBL.bottom !== newTRBL.bottom;
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/helper/AnchorsHelper.js







function getResizedSourceAnchor(connection, shape, oldBounds) {

  var waypoints = safeGetWaypoints(connection),
      waypointsInsideNewBounds = getWaypointsInsideBounds(waypoints, shape),
      oldAnchor = waypoints[0];

  // new anchor is the last waypoint enclosed be resized source
  if (waypointsInsideNewBounds.length) {
    return waypointsInsideNewBounds[ waypointsInsideNewBounds.length - 1 ];
  }

  return getNewAttachPoint(oldAnchor.original || oldAnchor, oldBounds, shape);
}


function getResizedTargetAnchor(connection, shape, oldBounds) {

  var waypoints = safeGetWaypoints(connection),
      waypointsInsideNewBounds = getWaypointsInsideBounds(waypoints, shape),
      oldAnchor = waypoints[waypoints.length - 1];

  // new anchor is the first waypoint enclosed be resized target
  if (waypointsInsideNewBounds.length) {
    return waypointsInsideNewBounds[ 0 ];
  }

  return getNewAttachPoint(oldAnchor.original || oldAnchor, oldBounds, shape);
}


function getMovedSourceAnchor(connection, source, moveDelta) {

  var waypoints = safeGetWaypoints(connection),
      oldBounds = subtract(source, moveDelta),
      oldAnchor = waypoints[ 0 ];

  return getNewAttachPoint(oldAnchor.original || oldAnchor, oldBounds, source);
}


function getMovedTargetAnchor(connection, target, moveDelta) {

  var waypoints = safeGetWaypoints(connection),
      oldBounds = subtract(target, moveDelta),
      oldAnchor = waypoints[ waypoints.length - 1 ];

  return getNewAttachPoint(oldAnchor.original || oldAnchor, oldBounds, target);
}


// helpers //////////////////////

function subtract(bounds, delta) {
  return {
    x: bounds.x - delta.x,
    y: bounds.y - delta.y,
    width: bounds.width,
    height: bounds.height
  };
}


/**
 * Return waypoints of given connection; throw if non exists (should not happen!!).
 *
 * @param {Connection} connection
 *
 * @return {Array<Point>}
 */
function safeGetWaypoints(connection) {

  var waypoints = connection.waypoints;

  if (!waypoints.length) {
    throw new Error('connection#' + connection.id + ': no waypoints');
  }

  return waypoints;
}

function getWaypointsInsideBounds(waypoints, bounds) {
  var originalWaypoints = map(waypoints, AnchorsHelper_getOriginal);

  return index_esm_filter(originalWaypoints, function(waypoint) {
    return isInsideBounds(waypoint, bounds);
  });
}

/**
 * Checks if point is inside bounds, incl. edges.
 *
 * @param {Point} point
 * @param {Bounds} bounds
 */
function isInsideBounds(point, bounds) {
  return getOrientation(bounds, point, 1) === 'intersect';
}

function AnchorsHelper_getOriginal(point) {
  return point.original || point;
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/helper/MoveClosure.js





function MoveClosure() {

  this.allShapes = {};
  this.allConnections = {};

  this.enclosedElements = {};
  this.enclosedConnections = {};

  this.topLevel = {};
}


MoveClosure.prototype.add = function(element, isTopLevel) {
  return this.addAll([ element ], isTopLevel);
};


MoveClosure.prototype.addAll = function(elements, isTopLevel) {

  var newClosure = getClosure(elements, !!isTopLevel, this);

  index_esm_assign(this, newClosure);

  return this;
};
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/helper/MoveHelper.js







/**
 * A helper that is able to carry out serialized move
 * operations on multiple elements.
 *
 * @param {Modeling} modeling
 */
function MoveHelper(modeling) {
  this._modeling = modeling;
}

/**
 * Move the specified elements and all children by the given delta.
 *
 * This moves all enclosed connections, too and layouts all affected
 * external connections.
 *
 * @param  {Array<djs.model.Base>} elements
 * @param  {Point} delta
 * @param  {djs.model.Base} newParent applied to the first level of shapes
 *
 * @return {Array<djs.model.Base>} list of touched elements
 */
MoveHelper.prototype.moveRecursive = function(elements, delta, newParent) {
  if (!elements) {
    return [];
  } else {
    return this.moveClosure(this.getClosure(elements), delta, newParent);
  }
};

/**
 * Move the given closure of elmements.
 *
 * @param {Object} closure
 * @param {Point} delta
 * @param {djs.model.Base} [newParent]
 * @param {djs.model.Base} [newHost]
 */
MoveHelper.prototype.moveClosure = function(closure, delta, newParent, newHost, primaryShape) {
  var modeling = this._modeling;

  var allShapes = closure.allShapes,
      allConnections = closure.allConnections,
      enclosedConnections = closure.enclosedConnections,
      topLevel = closure.topLevel,
      keepParent = false;

  if (primaryShape && primaryShape.parent === newParent) {
    keepParent = true;
  }

  // move all shapes
  forEach(allShapes, function(shape) {

    // move the element according to the given delta
    modeling.moveShape(shape, delta, topLevel[shape.id] && !keepParent && newParent, {
      recurse: false,
      layout: false
    });
  });

  // move all child connections / layout external connections
  forEach(allConnections, function(c) {

    var sourceMoved = !!allShapes[c.source.id],
        targetMoved = !!allShapes[c.target.id];

    if (enclosedConnections[c.id] && sourceMoved && targetMoved) {
      modeling.moveConnection(c, delta, topLevel[c.id] && !keepParent && newParent);
    } else {
      modeling.layoutConnection(c, {
        connectionStart: sourceMoved && getMovedSourceAnchor(c, c.source, delta),
        connectionEnd: targetMoved && getMovedTargetAnchor(c, c.target, delta)
      });
    }
  });
};

/**
 * Returns the closure for the selected elements
 *
 * @param  {Array<djs.model.Base>} elements
 * @return {MoveClosure} closure
 */
MoveHelper.prototype.getClosure = function(elements) {
  return new MoveClosure().addAll(elements, true);
};
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/MoveElementsHandler.js



/**
 * A handler that implements reversible moving of shapes.
 */
function MoveElementsHandler(modeling) {
  this._helper = new MoveHelper(modeling);
}

MoveElementsHandler.$inject = [ 'modeling' ];

MoveElementsHandler.prototype.preExecute = function(context) {
  context.closure = this._helper.getClosure(context.shapes);
};

MoveElementsHandler.prototype.postExecute = function(context) {

  var hints = context.hints,
      primaryShape;

  if (hints && hints.primaryShape) {
    primaryShape = hints.primaryShape;
    hints.oldParent = primaryShape.parent;
  }

  this._helper.moveClosure(
    context.closure,
    context.delta,
    context.newParent,
    context.newHost,
    primaryShape
  );
};
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/MoveShapeHandler.js









/**
 * A handler that implements reversible moving of shapes.
 */
function MoveShapeHandler(modeling) {
  this._modeling = modeling;

  this._helper = new MoveHelper(modeling);
}

MoveShapeHandler.$inject = [ 'modeling' ];


MoveShapeHandler.prototype.execute = function(context) {

  var shape = context.shape,
      delta = context.delta,
      newParent = context.newParent || shape.parent,
      newParentIndex = context.newParentIndex,
      oldParent = shape.parent;

  context.oldBounds = pick(shape, [ 'x', 'y', 'width', 'height']);

  // save old parent in context
  context.oldParent = oldParent;
  context.oldParentIndex = Collections_remove(oldParent.children, shape);

  // add to new parent at position
  Collections_add(newParent.children, shape, newParentIndex);

  // update shape parent + position
  index_esm_assign(shape, {
    parent: newParent,
    x: shape.x + delta.x,
    y: shape.y + delta.y
  });

  return shape;
};

MoveShapeHandler.prototype.postExecute = function(context) {

  var shape = context.shape,
      delta = context.delta,
      hints = context.hints;

  var modeling = this._modeling;

  if (hints.layout !== false) {

    forEach(shape.incoming, function(c) {
      modeling.layoutConnection(c, {
        connectionEnd: getMovedTargetAnchor(c, shape, delta)
      });
    });

    forEach(shape.outgoing, function(c) {
      modeling.layoutConnection(c, {
        connectionStart: getMovedSourceAnchor(c, shape, delta)
      });
    });
  }

  if (hints.recurse !== false) {
    this.moveChildren(context);
  }
};

MoveShapeHandler.prototype.revert = function(context) {

  var shape = context.shape,
      oldParent = context.oldParent,
      oldParentIndex = context.oldParentIndex,
      delta = context.delta;

  // restore previous location in old parent
  Collections_add(oldParent.children, shape, oldParentIndex);

  // revert to old position and parent
  index_esm_assign(shape, {
    parent: oldParent,
    x: shape.x - delta.x,
    y: shape.y - delta.y
  });

  return shape;
};

MoveShapeHandler.prototype.moveChildren = function(context) {

  var delta = context.delta,
      shape = context.shape;

  this._helper.moveRecursive(shape.children, delta, null);
};

MoveShapeHandler.prototype.getNewParent = function(context) {
  return context.newParent || context.shape.parent;
};

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/ReconnectConnectionHandler.js



/**
 * Reconnect connection handler
 */
function ReconnectConnectionHandler(modeling) {
  this._modeling = modeling;
}

ReconnectConnectionHandler.$inject = [ 'modeling' ];

ReconnectConnectionHandler.prototype.execute = function(context) {
  var newSource = context.newSource,
      newTarget = context.newTarget,
      connection = context.connection,
      dockingOrPoints = context.dockingOrPoints;

  if (!newSource && !newTarget) {
    throw new Error('newSource or newTarget required');
  }

  if (index_esm_isArray(dockingOrPoints)) {
    context.oldWaypoints = connection.waypoints;
    connection.waypoints = dockingOrPoints;
  }

  if (newSource) {
    context.oldSource = connection.source;
    connection.source = newSource;
  }

  if (newTarget) {
    context.oldTarget = connection.target;
    connection.target = newTarget;
  }

  return connection;
};

ReconnectConnectionHandler.prototype.postExecute = function(context) {
  var connection = context.connection,
      newSource = context.newSource,
      newTarget = context.newTarget,
      dockingOrPoints = context.dockingOrPoints,
      hints = context.hints || {};

  var layoutConnectionHints = {};

  if (hints.connectionStart) {
    layoutConnectionHints.connectionStart = hints.connectionStart;
  }

  if (hints.connectionEnd) {
    layoutConnectionHints.connectionEnd = hints.connectionEnd;
  }

  if (hints.layoutConnection === false) {
    return;
  }

  if (newSource && (!newTarget || hints.docking === 'source')) {
    layoutConnectionHints.connectionStart = layoutConnectionHints.connectionStart
      || ReconnectConnectionHandler_getDocking(index_esm_isArray(dockingOrPoints) ? dockingOrPoints[ 0 ] : dockingOrPoints);
  }

  if (newTarget && (!newSource || hints.docking === 'target')) {
    layoutConnectionHints.connectionEnd = layoutConnectionHints.connectionEnd
      || ReconnectConnectionHandler_getDocking(index_esm_isArray(dockingOrPoints) ? dockingOrPoints[ dockingOrPoints.length - 1 ] : dockingOrPoints);
  }

  if (hints.newWaypoints) {
    layoutConnectionHints.waypoints = hints.newWaypoints;
  }

  this._modeling.layoutConnection(connection, layoutConnectionHints);
};

ReconnectConnectionHandler.prototype.revert = function(context) {
  var oldSource = context.oldSource,
      oldTarget = context.oldTarget,
      oldWaypoints = context.oldWaypoints,
      connection = context.connection;

  if (oldSource) {
    connection.source = oldSource;
  }

  if (oldTarget) {
    connection.target = oldTarget;
  }

  if (oldWaypoints) {
    connection.waypoints = oldWaypoints;
  }

  return connection;
};



// helpers //////////

function ReconnectConnectionHandler_getDocking(point) {
  return point.original || point;
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/ReplaceShapeHandler.js




/**
 * Replace shape by adding new shape and removing old shape. Incoming and outgoing connections will
 * be kept if possible.
 *
 * @class
 * @constructor
 *
 * @param {Modeling} modeling
 * @param {Rules} rules
 */
function ReplaceShapeHandler(modeling, rules) {
  this._modeling = modeling;
  this._rules = rules;
}

ReplaceShapeHandler.$inject = [ 'modeling', 'rules' ];


/**
 * Add new shape.
 *
 * @param {Object} context
 * @param {djs.model.Shape} context.oldShape
 * @param {Object} context.newData
 * @param {string} context.newData.type
 * @param {number} context.newData.x
 * @param {number} context.newData.y
 * @param {Object} [hints]
 */
ReplaceShapeHandler.prototype.preExecute = function(context) {
  var self = this,
      modeling = this._modeling,
      rules = this._rules;

  var oldShape = context.oldShape,
      newData = context.newData,
      hints = context.hints || {},
      newShape;

  function canReconnect(source, target, connection) {
    return rules.allowed('connection.reconnect', {
      connection: connection,
      source: source,
      target: target
    });
  }

  // (1) add new shape at given position
  var position = {
    x: newData.x,
    y: newData.y
  };

  var oldBounds = {
    x: oldShape.x,
    y: oldShape.y,
    width: oldShape.width,
    height: oldShape.height
  };

  newShape = context.newShape =
    context.newShape ||
    self.createShape(newData, position, oldShape.parent, hints);

  // (2) update host
  if (oldShape.host) {
    modeling.updateAttachment(newShape, oldShape.host);
  }

  // (3) adopt all children from old shape
  var children;

  if (hints.moveChildren !== false) {
    children = oldShape.children.slice();

    modeling.moveElements(children, { x: 0, y: 0 }, newShape, hints);
  }

  // (4) reconnect connections to new shape if possible
  var incoming = oldShape.incoming.slice(),
      outgoing = oldShape.outgoing.slice();

  forEach(incoming, function(connection) {
    var source = connection.source,
        allowed = canReconnect(source, newShape, connection);

    if (allowed) {
      self.reconnectEnd(
        connection, newShape,
        getResizedTargetAnchor(connection, newShape, oldBounds),
        hints
      );
    }
  });

  forEach(outgoing, function(connection) {
    var target = connection.target,
        allowed = canReconnect(newShape, target, connection);

    if (allowed) {
      self.reconnectStart(
        connection, newShape,
        getResizedSourceAnchor(connection, newShape, oldBounds),
        hints
      );
    }
  });
};


/**
 * Remove old shape.
 */
ReplaceShapeHandler.prototype.postExecute = function(context) {
  var oldShape = context.oldShape;

  this._modeling.removeShape(oldShape);
};


ReplaceShapeHandler.prototype.execute = function(context) {};


ReplaceShapeHandler.prototype.revert = function(context) {};


ReplaceShapeHandler.prototype.createShape = function(shape, position, target, hints) {
  return this._modeling.createShape(shape, position, target, hints);
};


ReplaceShapeHandler.prototype.reconnectStart = function(connection, newSource, dockingPoint, hints) {
  this._modeling.reconnectStart(connection, newSource, dockingPoint, hints);
};


ReplaceShapeHandler.prototype.reconnectEnd = function(connection, newTarget, dockingPoint, hints) {
  this._modeling.reconnectEnd(connection, newTarget, dockingPoint, hints);
};

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/ResizeShapeHandler.js





/**
 * A handler that implements reversible resizing of shapes.
 *
 * @param {Modeling} modeling
 */
function ResizeShapeHandler(modeling) {
  this._modeling = modeling;
}

ResizeShapeHandler.$inject = [ 'modeling' ];

/**
 * {
 *   shape: {....}
 *   newBounds: {
 *     width:  20,
 *     height: 40,
 *     x:       5,
 *     y:      10
 *   }
 *
 * }
 */
ResizeShapeHandler.prototype.execute = function(context) {
  var shape = context.shape,
      newBounds = context.newBounds,
      minBounds = context.minBounds;

  if (newBounds.x === undefined || newBounds.y === undefined ||
      newBounds.width === undefined || newBounds.height === undefined) {
    throw new Error('newBounds must have {x, y, width, height} properties');
  }

  if (minBounds && (newBounds.width < minBounds.width
    || newBounds.height < minBounds.height)) {
    throw new Error('width and height cannot be less than minimum height and width');
  } else if (!minBounds
    && newBounds.width < 10 || newBounds.height < 10) {
    throw new Error('width and height cannot be less than 10px');
  }

  // save old bbox in context
  context.oldBounds = {
    width:  shape.width,
    height: shape.height,
    x:      shape.x,
    y:      shape.y
  };

  // update shape
  index_esm_assign(shape, {
    width:  newBounds.width,
    height: newBounds.height,
    x:      newBounds.x,
    y:      newBounds.y
  });

  return shape;
};

ResizeShapeHandler.prototype.postExecute = function(context) {
  var modeling = this._modeling;

  var shape = context.shape,
      oldBounds = context.oldBounds,
      hints = context.hints || {};

  if (hints.layout === false) {
    return;
  }

  forEach(shape.incoming, function(c) {
    modeling.layoutConnection(c, {
      connectionEnd: getResizedTargetAnchor(c, shape, oldBounds)
    });
  });

  forEach(shape.outgoing, function(c) {
    modeling.layoutConnection(c, {
      connectionStart: getResizedSourceAnchor(c, shape, oldBounds)
    });
  });

};

ResizeShapeHandler.prototype.revert = function(context) {

  var shape = context.shape,
      oldBounds = context.oldBounds;

  // restore previous bbox
  index_esm_assign(shape, {
    width:  oldBounds.width,
    height: oldBounds.height,
    x:      oldBounds.x,
    y:      oldBounds.y
  });

  return shape;
};

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/space-tool/SpaceUtil.js


/**
 * Return direction given axis and delta.
 *
 * @param {string} axis
 * @param {number} delta
 *
 * @return {string}
 */
function getDirection(axis, delta) {

  if (axis === 'x') {
    if (delta > 0) {
      return 'e';
    }

    if (delta < 0) {
      return 'w';
    }
  }

  if (axis === 'y') {
    if (delta > 0) {
      return 's';
    }

    if (delta < 0) {
      return 'n';
    }
  }

  return null;
}

/**
 * Returns connections whose waypoints are to be updated. Waypoints are to be updated if start
 * or end is to be moved or resized.
 *
 * @param {Array<djs.model.Shape} movingShapes
 * @param {Array<djs.model.Shape} resizingShapes
 *
 * @returns {Array<djs.model.Connection>}
 */
function getWaypointsUpdatingConnections(movingShapes, resizingShapes) {
  var waypointsUpdatingConnections = [];

  forEach(movingShapes.concat(resizingShapes), function(shape) {
    var incoming = shape.incoming,
        outgoing = shape.outgoing;

    forEach(incoming.concat(outgoing), function(connection) {
      var source = connection.source,
          target = connection.target;

      if (includes(movingShapes, source) ||
        includes(movingShapes, target) ||
        includes(resizingShapes, source) ||
        includes(resizingShapes, target)) {

        if (!includes(waypointsUpdatingConnections, connection)) {
          waypointsUpdatingConnections.push(connection);
        }
      }
    });
  });

  return waypointsUpdatingConnections;
}

function includes(array, item) {
  return array.indexOf(item) !== -1;
}

/**
 * Resize bounds.
 *
 * @param {Object} bounds
 * @param {number} bounds.x
 * @param {number} bounds.y
 * @param {number} bounds.width
 * @param {number} bounds.height
 * @param {string} direction
 * @param {Object} delta
 * @param {number} delta.x
 * @param {number} delta.y
 *
 * @return {Object}
 */
function resizeBounds(bounds, direction, delta) {
  var x = bounds.x,
      y = bounds.y,
      width = bounds.width,
      height = bounds.height,
      dx = delta.x,
      dy = delta.y;

  switch (direction) {
  case 'n':
    return {
      x: x,
      y: y + dy,
      width: width,
      height: height - dy
    };
  case 's':
    return {
      x: x,
      y: y,
      width: width,
      height: height + dy
    };
  case 'w':
    return {
      x: x + dx,
      y: y,
      width: width - dx,
      height: height
    };
  case 'e':
    return {
      x: x,
      y: y,
      width: width + dx,
      height: height
    };
  default:
    throw new Error('unknown direction: ' + direction);
  }
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/SpaceToolHandler.js







/**
 * Add or remove space by moving and resizing shapes and updating connection waypoints.
 */
function SpaceToolHandler(modeling) {
  this._modeling = modeling;
}

SpaceToolHandler.$inject = [ 'modeling' ];

SpaceToolHandler.prototype.preExecute = function(context) {
  var delta = context.delta,
      direction = context.direction,
      movingShapes = context.movingShapes,
      resizingShapes = context.resizingShapes,
      start = context.start,
      oldBounds = {};

  // (1) move shapes
  this.moveShapes(movingShapes, delta);

  // (2a) save old bounds of resized shapes
  forEach(resizingShapes, function(shape) {
    oldBounds[shape.id] = getBounds(shape);
  });

  // (2b) resize shapes
  this.resizeShapes(resizingShapes, delta, direction);

  // (3) update connection waypoints
  this.updateConnectionWaypoints(
    getWaypointsUpdatingConnections(movingShapes, resizingShapes),
    delta,
    direction,
    start,
    movingShapes,
    resizingShapes,
    oldBounds
  );
};

SpaceToolHandler.prototype.execute = function() {};
SpaceToolHandler.prototype.revert = function() {};

SpaceToolHandler.prototype.moveShapes = function(shapes, delta) {
  var self = this;

  forEach(shapes, function(element) {
    self._modeling.moveShape(element, delta, null, {
      autoResize: false,
      layout: false,
      recurse: false
    });
  });
};

SpaceToolHandler.prototype.resizeShapes = function(shapes, delta, direction) {
  var self = this;

  forEach(shapes, function(shape) {
    var newBounds = resizeBounds(shape, direction, delta);

    self._modeling.resizeShape(shape, newBounds, null, {
      attachSupport: false,
      autoResize: false,
      layout: false
    });
  });
};

/**
 * Update connections waypoints according to the rules:
 *   1. Both source and target are moved/resized => move waypoints by the delta
 *   2. Only one of source and target is moved/resized => re-layout connection with moved start/end
 */
SpaceToolHandler.prototype.updateConnectionWaypoints = function(
    connections,
    delta,
    direction,
    start,
    movingShapes,
    resizingShapes,
    oldBounds
) {
  var self = this,
      affectedShapes = movingShapes.concat(resizingShapes);

  forEach(connections, function(connection) {
    var source = connection.source,
        target = connection.target,
        waypoints = copyWaypoints(connection),
        axis = getAxisFromDirection(direction),
        layoutHints = {
          labelBehavior: false
        };

    if (SpaceToolHandler_includes(affectedShapes, source) && SpaceToolHandler_includes(affectedShapes, target)) {

      // move waypoints
      waypoints = map(waypoints, function(waypoint) {
        if (shouldMoveWaypoint(waypoint, start, direction)) {

          // move waypoint
          waypoint[ axis ] = waypoint[ axis ] + delta[ axis ];
        }

        if (waypoint.original && shouldMoveWaypoint(waypoint.original, start, direction)) {

          // move waypoint original
          waypoint.original[ axis ] = waypoint.original[ axis ] + delta[ axis ];
        }

        return waypoint;
      });

      self._modeling.updateWaypoints(connection, waypoints, {
        labelBehavior: false
      });
    } else if (SpaceToolHandler_includes(affectedShapes, source) || SpaceToolHandler_includes(affectedShapes, target)) {

      // re-layout connection with moved start/end
      if (SpaceToolHandler_includes(movingShapes, source)) {
        layoutHints.connectionStart = getMovedSourceAnchor(connection, source, delta);
      } else if (SpaceToolHandler_includes(movingShapes, target)) {
        layoutHints.connectionEnd = getMovedTargetAnchor(connection, target, delta);
      } else if (SpaceToolHandler_includes(resizingShapes, source)) {
        layoutHints.connectionStart = getResizedSourceAnchor(
          connection, source, oldBounds[source.id]
        );
      } else if (SpaceToolHandler_includes(resizingShapes, target)) {
        layoutHints.connectionEnd = getResizedTargetAnchor(
          connection, target, oldBounds[target.id]
        );
      }

      self._modeling.layoutConnection(connection, layoutHints);
    }
  });
};


// helpers //////////

function copyWaypoint(waypoint) {
  return index_esm_assign({}, waypoint);
}

function copyWaypoints(connection) {
  return map(connection.waypoints, function(waypoint) {

    waypoint = copyWaypoint(waypoint);

    if (waypoint.original) {
      waypoint.original = copyWaypoint(waypoint.original);
    }

    return waypoint;
  });
}

function getAxisFromDirection(direction) {
  switch (direction) {
  case 'n':
    return 'y';
  case 'w':
    return 'x';
  case 's':
    return 'y';
  case 'e':
    return 'x';
  }
}

function shouldMoveWaypoint(waypoint, start, direction) {
  var relevantAxis = getAxisFromDirection(direction);

  if (/e|s/.test(direction)) {
    return waypoint[ relevantAxis ] > start;
  } else if (/n|w/.test(direction)) {
    return waypoint[ relevantAxis ] < start;
  }
}

function SpaceToolHandler_includes(array, item) {
  return array.indexOf(item) !== -1;
}

function getBounds(shape) {
  return {
    x: shape.x,
    y: shape.y,
    height: shape.height,
    width: shape.width
  };
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/ToggleShapeCollapseHandler.js


/**
 * A handler that toggles the collapsed state of an element
 * and the visibility of all its children.
 *
 * @param {Modeling} modeling
 */
function ToggleShapeCollapseHandler(modeling) {
  this._modeling = modeling;
}

ToggleShapeCollapseHandler.$inject = [ 'modeling' ];


ToggleShapeCollapseHandler.prototype.execute = function(context) {

  var shape = context.shape,
      children = shape.children;

  // recursively remember previous visibility of children
  context.oldChildrenVisibility = getElementsVisibilityRecursive(children);

  // toggle state
  shape.collapsed = !shape.collapsed;

  // recursively hide/show children
  var result = setHiddenRecursive(children, shape.collapsed);

  return [shape].concat(result);
};


ToggleShapeCollapseHandler.prototype.revert = function(context) {

  var shape = context.shape,
      oldChildrenVisibility = context.oldChildrenVisibility;

  var children = shape.children;

  // recursively set old visability of children
  var result = restoreVisibilityRecursive(children, oldChildrenVisibility);

  // retoggle state
  shape.collapsed = !shape.collapsed;

  return [shape].concat(result);
};


// helpers //////////////////////

/**
 * Return a map { elementId -> hiddenState}.
 *
 * @param {Array<djs.model.Shape>} elements
 *
 * @return {Object}
 */
function getElementsVisibilityRecursive(elements) {

  var result = {};

  forEach(elements, function(element) {
    result[element.id] = element.hidden;

    if (element.children) {
      result = index_esm_assign({}, result, getElementsVisibilityRecursive(element.children));
    }
  });

  return result;
}


function setHiddenRecursive(elements, newHidden) {
  var result = [];
  forEach(elements, function(element) {
    element.hidden = newHidden;

    result = result.concat(element);

    if (element.children) {
      result = result.concat(setHiddenRecursive(element.children, element.collapsed || newHidden));
    }
  });

  return result;
}

function restoreVisibilityRecursive(elements, lastState) {
  var result = [];
  forEach(elements, function(element) {
    element.hidden = lastState[element.id];

    result = result.concat(element);

    if (element.children) {
      result = result.concat(restoreVisibilityRecursive(element.children, lastState));
    }
  });

  return result;
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/UpdateAttachmentHandler.js


/**
 * A handler that implements reversible attaching/detaching of shapes.
 */
function UpdateAttachmentHandler(modeling) {
  this._modeling = modeling;
}

UpdateAttachmentHandler.$inject = [ 'modeling' ];


UpdateAttachmentHandler.prototype.execute = function(context) {
  var shape = context.shape,
      newHost = context.newHost,
      oldHost = shape.host;

  // (0) detach from old host
  context.oldHost = oldHost;
  context.attacherIdx = removeAttacher(oldHost, shape);

  // (1) attach to new host
  addAttacher(newHost, shape);

  // (2) update host
  shape.host = newHost;

  return shape;
};

UpdateAttachmentHandler.prototype.revert = function(context) {
  var shape = context.shape,
      newHost = context.newHost,
      oldHost = context.oldHost,
      attacherIdx = context.attacherIdx;

  // (2) update host
  shape.host = oldHost;

  // (1) attach to new host
  removeAttacher(newHost, shape);

  // (0) detach from old host
  addAttacher(oldHost, shape, attacherIdx);

  return shape;
};


function removeAttacher(host, attacher) {

  // remove attacher from host
  return Collections_remove(host && host.attachers, attacher);
}

function addAttacher(host, attacher, idx) {

  if (!host) {
    return;
  }

  var attachers = host.attachers;

  if (!attachers) {
    host.attachers = attachers = [];
  }

  Collections_add(attachers, attacher, idx);
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/cmd/UpdateWaypointsHandler.js
function UpdateWaypointsHandler() { }

UpdateWaypointsHandler.prototype.execute = function(context) {

  var connection = context.connection,
      newWaypoints = context.newWaypoints;

  context.oldWaypoints = connection.waypoints;

  connection.waypoints = newWaypoints;

  return connection;
};

UpdateWaypointsHandler.prototype.revert = function(context) {

  var connection = context.connection,
      oldWaypoints = context.oldWaypoints;

  connection.waypoints = oldWaypoints;

  return connection;
};
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/modeling/Modeling.js



























/**
 * The basic modeling entry point.
 *
 * @param {EventBus} eventBus
 * @param {ElementFactory} elementFactory
 * @param {CommandStack} commandStack
 */
function Modeling(eventBus, elementFactory, commandStack) {
  this._eventBus = eventBus;
  this._elementFactory = elementFactory;
  this._commandStack = commandStack;

  var self = this;

  eventBus.on('diagram.init', function() {

    // register modeling handlers
    self.registerHandlers(commandStack);
  });
}

Modeling.$inject = [ 'eventBus', 'elementFactory', 'commandStack' ];


Modeling.prototype.getHandlers = function() {
  return {
    'shape.append': AppendShapeHandler,
    'shape.create': CreateShapeHandler,
    'shape.delete': DeleteShapeHandler,
    'shape.move': MoveShapeHandler,
    'shape.resize': ResizeShapeHandler,
    'shape.replace': ReplaceShapeHandler,
    'shape.toggleCollapse': ToggleShapeCollapseHandler,

    'spaceTool': SpaceToolHandler,

    'label.create': CreateLabelHandler,

    'connection.create': CreateConnectionHandler,
    'connection.delete': DeleteConnectionHandler,
    'connection.move': MoveConnectionHandler,
    'connection.layout': LayoutConnectionHandler,

    'connection.updateWaypoints': UpdateWaypointsHandler,

    'connection.reconnect': ReconnectConnectionHandler,

    'elements.create': CreateElementsHandler,
    'elements.move': MoveElementsHandler,
    'elements.delete': DeleteElementsHandler,

    'elements.distribute': DistributeElements,
    'elements.align': AlignElementsHandler_AlignElements,

    'element.updateAttachment': UpdateAttachmentHandler
  };
};

/**
 * Register handlers with the command stack
 *
 * @param {CommandStack} commandStack
 */
Modeling.prototype.registerHandlers = function(commandStack) {
  forEach(this.getHandlers(), function(handler, id) {
    commandStack.registerHandler(id, handler);
  });
};


// modeling helpers //////////////////////

Modeling.prototype.moveShape = function(shape, delta, newParent, newParentIndex, hints) {

  if (typeof newParentIndex === 'object') {
    hints = newParentIndex;
    newParentIndex = null;
  }

  var context = {
    shape: shape,
    delta:  delta,
    newParent: newParent,
    newParentIndex: newParentIndex,
    hints: hints || {}
  };

  this._commandStack.execute('shape.move', context);
};


/**
 * Update the attachment of the given shape.
 *
 * @param {djs.mode.Base} shape
 * @param {djs.model.Base} [newHost]
 */
Modeling.prototype.updateAttachment = function(shape, newHost) {
  var context = {
    shape: shape,
    newHost: newHost
  };

  this._commandStack.execute('element.updateAttachment', context);
};


/**
 * Move a number of shapes to a new target, either setting it as
 * the new parent or attaching it.
 *
 * @param {Array<djs.mode.Base>} shapes
 * @param {Point} delta
 * @param {djs.model.Base} [target]
 * @param {Object} [hints]
 * @param {boolean} [hints.attach=false]
 */
Modeling.prototype.moveElements = function(shapes, delta, target, hints) {

  hints = hints || {};

  var attach = hints.attach;

  var newParent = target,
      newHost;

  if (attach === true) {
    newHost = target;
    newParent = target.parent;
  } else

  if (attach === false) {
    newHost = null;
  }

  var context = {
    shapes: shapes,
    delta: delta,
    newParent: newParent,
    newHost: newHost,
    hints: hints
  };

  this._commandStack.execute('elements.move', context);
};


Modeling.prototype.moveConnection = function(connection, delta, newParent, newParentIndex, hints) {

  if (typeof newParentIndex === 'object') {
    hints = newParentIndex;
    newParentIndex = undefined;
  }

  var context = {
    connection: connection,
    delta: delta,
    newParent: newParent,
    newParentIndex: newParentIndex,
    hints: hints || {}
  };

  this._commandStack.execute('connection.move', context);
};


Modeling.prototype.layoutConnection = function(connection, hints) {
  var context = {
    connection: connection,
    hints: hints || {}
  };

  this._commandStack.execute('connection.layout', context);
};


/**
 * Create connection.
 *
 * @param {djs.model.Base} source
 * @param {djs.model.Base} target
 * @param {number} [parentIndex]
 * @param {Object|djs.model.Connection} connection
 * @param {djs.model.Base} parent
 * @param {Object} hints
 *
 * @return {djs.model.Connection} the created connection.
 */
Modeling.prototype.createConnection = function(source, target, parentIndex, connection, parent, hints) {

  if (typeof parentIndex === 'object') {
    hints = parent;
    parent = connection;
    connection = parentIndex;
    parentIndex = undefined;
  }

  connection = this._create('connection', connection);

  var context = {
    source: source,
    target: target,
    parent: parent,
    parentIndex: parentIndex,
    connection: connection,
    hints: hints
  };

  this._commandStack.execute('connection.create', context);

  return context.connection;
};


/**
 * Create a shape at the specified position.
 *
 * @param {djs.model.Shape|Object} shape
 * @param {Point} position
 * @param {djs.model.Shape|djs.model.Root} target
 * @param {number} [parentIndex] position in parents children list
 * @param {Object} [hints]
 * @param {boolean} [hints.attach] whether to attach to target or become a child
 *
 * @return {djs.model.Shape} the created shape
 */
Modeling.prototype.createShape = function(shape, position, target, parentIndex, hints) {

  if (typeof parentIndex !== 'number') {
    hints = parentIndex;
    parentIndex = undefined;
  }

  hints = hints || {};

  var attach = hints.attach,
      parent,
      host;

  shape = this._create('shape', shape);

  if (attach) {
    parent = target.parent;
    host = target;
  } else {
    parent = target;
  }

  var context = {
    position: position,
    shape: shape,
    parent: parent,
    parentIndex: parentIndex,
    host: host,
    hints: hints
  };

  this._commandStack.execute('shape.create', context);

  return context.shape;
};


Modeling.prototype.createElements = function(elements, position, parent, parentIndex, hints) {
  if (!index_esm_isArray(elements)) {
    elements = [ elements ];
  }

  if (typeof parentIndex !== 'number') {
    hints = parentIndex;
    parentIndex = undefined;
  }

  hints = hints || {};

  var context = {
    position: position,
    elements: elements,
    parent: parent,
    parentIndex: parentIndex,
    hints: hints
  };

  this._commandStack.execute('elements.create', context);

  return context.elements;
};


Modeling.prototype.createLabel = function(labelTarget, position, label, parent) {

  label = this._create('label', label);

  var context = {
    labelTarget: labelTarget,
    position: position,
    parent: parent || labelTarget.parent,
    shape: label
  };

  this._commandStack.execute('label.create', context);

  return context.shape;
};


/**
 * Append shape to given source, drawing a connection
 * between source and the newly created shape.
 *
 * @param {djs.model.Shape} source
 * @param {djs.model.Shape|Object} shape
 * @param {Point} position
 * @param {djs.model.Shape} target
 * @param {Object} [hints]
 * @param {boolean} [hints.attach]
 * @param {djs.model.Connection|Object} [hints.connection]
 * @param {djs.model.Base} [hints.connectionParent]
 *
 * @return {djs.model.Shape} the newly created shape
 */
Modeling.prototype.appendShape = function(source, shape, position, target, hints) {

  hints = hints || {};

  shape = this._create('shape', shape);

  var context = {
    source: source,
    position: position,
    target: target,
    shape: shape,
    connection: hints.connection,
    connectionParent: hints.connectionParent,
    hints: hints
  };

  this._commandStack.execute('shape.append', context);

  return context.shape;
};


Modeling.prototype.removeElements = function(elements) {
  var context = {
    elements: elements
  };

  this._commandStack.execute('elements.delete', context);
};


Modeling.prototype.distributeElements = function(groups, axis, dimension) {
  var context = {
    groups: groups,
    axis: axis,
    dimension: dimension
  };

  this._commandStack.execute('elements.distribute', context);
};


Modeling.prototype.removeShape = function(shape, hints) {
  var context = {
    shape: shape,
    hints: hints || {}
  };

  this._commandStack.execute('shape.delete', context);
};


Modeling.prototype.removeConnection = function(connection, hints) {
  var context = {
    connection: connection,
    hints: hints || {}
  };

  this._commandStack.execute('connection.delete', context);
};

Modeling.prototype.replaceShape = function(oldShape, newShape, hints) {
  var context = {
    oldShape: oldShape,
    newData: newShape,
    hints: hints || {}
  };

  this._commandStack.execute('shape.replace', context);

  return context.newShape;
};

Modeling.prototype.alignElements = function(elements, alignment) {
  var context = {
    elements: elements,
    alignment: alignment
  };

  this._commandStack.execute('elements.align', context);
};

Modeling.prototype.resizeShape = function(shape, newBounds, minBounds, hints) {
  var context = {
    shape: shape,
    newBounds: newBounds,
    minBounds: minBounds,
    hints: hints
  };

  this._commandStack.execute('shape.resize', context);
};

Modeling.prototype.createSpace = function(movingShapes, resizingShapes, delta, direction, start) {
  var context = {
    delta: delta,
    direction: direction,
    movingShapes: movingShapes,
    resizingShapes: resizingShapes,
    start: start
  };

  this._commandStack.execute('spaceTool', context);
};

Modeling.prototype.updateWaypoints = function(connection, newWaypoints, hints) {
  var context = {
    connection: connection,
    newWaypoints: newWaypoints,
    hints: hints || {}
  };

  this._commandStack.execute('connection.updateWaypoints', context);
};

Modeling.prototype.reconnect = function(connection, source, target, dockingOrPoints, hints) {
  var context = {
    connection: connection,
    newSource: source,
    newTarget: target,
    dockingOrPoints: dockingOrPoints,
    hints: hints || {}
  };

  this._commandStack.execute('connection.reconnect', context);
};

Modeling.prototype.reconnectStart = function(connection, newSource, dockingOrPoints, hints) {
  if (!hints) {
    hints = {};
  }

  this.reconnect(connection, newSource, connection.target, dockingOrPoints, index_esm_assign(hints, {
    docking: 'source'
  }));
};

Modeling.prototype.reconnectEnd = function(connection, newTarget, dockingOrPoints, hints) {
  if (!hints) {
    hints = {};
  }

  this.reconnect(connection, connection.source, newTarget, dockingOrPoints, index_esm_assign(hints, {
    docking: 'target'
  }));
};

Modeling.prototype.connect = function(source, target, attrs, hints) {
  return this.createConnection(source, target, attrs || {}, source.parent, hints);
};

Modeling.prototype._create = function(type, attrs) {
  if (attrs instanceof Base) {
    return attrs;
  } else {
    return this._elementFactory.create(type, attrs);
  }
};

Modeling.prototype.toggleCollapse = function(shape, hints) {
  var context = {
    shape: shape,
    hints: hints || {}
  };

  this._commandStack.execute('shape.toggleCollapse', context);
};

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.trim.js
var es6_string_trim = __webpack_require__("4f37");

// CONCATENATED MODULE: ./lib/bWflow/_src/modules/labelEditing/labelUtil.js



function getLabel(element) {
  var semantic = element.businessObject;

  if (!semantic) {
    return undefined;
  }

  return semantic.name || '';
}
function setLabel(element, text) {
  var semantic = element.businessObject;
  semantic.name = text;
  return element;
}
var labelUtil_DEFAULT_LABEL_SIZE = {
  width: 90,
  height: 20
};
var FLOW_LABEL_INDENT = 15;
/**
 * Returns true if the given semantic has an external label
 *
 * @param {BpmnElement} semantic
 * @return {boolean} true if has label
 */

function isLabelExternal(semantic) {
  return is(semantic, 'startEvent') || is(semantic, 'endEvent') || is(semantic, 'gatewayAnd') || is(semantic, 'gatewayXor') || is(semantic, 'gatewayInclusive') || is(semantic, 'myline');
}
/**
 * Returns true if the given element has an external label
 *
 * @param {djs.model.shape} element
 * @return {boolean} true if has label
 */

function hasExternalLabel(element) {
  return labelUtil_isLabel(element.label);
}
/**
 * Get the position for sequence flow labels
 *
 * @param  {Array<Point>} waypoints
 * @return {Point} the label position
 */

function getFlowLabelPosition(waypoints) {
  // get the waypoints mid
  var mid = waypoints.length / 2 - 1;
  var first = waypoints[Math.floor(mid)];
  var second = waypoints[Math.ceil(mid + 0.01)]; // get position

  var position = getWaypointsMid(waypoints); // calculate angle

  var angle = Math.atan((second.y - first.y) / (second.x - first.x));
  var x = position.x,
      y = position.y;

  if (Math.abs(angle) < Math.PI / 2) {
    y -= FLOW_LABEL_INDENT;
  } else {
    x += FLOW_LABEL_INDENT;
  }

  return {
    x: x,
    y: y
  };
}
/**
 * Get the middle of a number of waypoints
 *
 * @param  {Array<Point>} waypoints
 * @return {Point} the mid point
 */

function getWaypointsMid(waypoints) {
  var mid = waypoints.length / 2 - 1;
  var first = waypoints[Math.floor(mid)];
  var second = waypoints[Math.ceil(mid + 0.01)];
  return {
    x: first.x + (second.x - first.x) / 2,
    y: first.y + (second.y - first.y) / 2
  };
}
function getExternalLabelMid(element) {
  if (element.waypoints) {
    return getFlowLabelPosition(element.waypoints);
  } else {
    return {
      x: element.x + element.width / 2,
      y: element.y + element.height + labelUtil_DEFAULT_LABEL_SIZE.height / 2
    };
  }
}
/**
 * Returns the bounds of an elements label, parsed from the elements DI or
 * generated from its bounds.
 *
 * @param {BpmnElement} semantic
 * @param {djs.model.Base} element
 */

function getExternalLabelBounds(semantic, element) {
  var mid,
      size,
      bounds,
      di = semantic.di,
      label = di.label;

  if (label && label.bounds) {
    bounds = label.bounds;
    size = {
      width: Math.max(labelUtil_DEFAULT_LABEL_SIZE.width, bounds.width),
      height: bounds.height
    };
    mid = {
      x: bounds.x + bounds.width / 2,
      y: bounds.y + bounds.height / 2
    };
  } else {
    mid = getExternalLabelMid(element);
    size = labelUtil_DEFAULT_LABEL_SIZE;
  }

  return index_esm_assign({
    x: mid.x - size.width / 2,
    y: mid.y - size.height / 2
  }, size);
}
function labelUtil_isLabel(element) {
  return element && !!element.labelTarget;
}
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/labelEditing/updateLabelHandler.js


var NULL_DIMENSIONS = {
  width: 0,
  height: 0
};
/**
 * A handler that updates the text of a BPMN element.
 */

function UpdateLabelHandler(modeling, textRenderer) {
  /**
   * Set the label and return the changed elements.
   *
   * Element parameter can be label itself or connection (i.e. sequence flow).
   *
   * @param {djs.model.Base} element
   * @param {string} text
   */
  function setText(element, text) {
    // external label if present
    var label = element.label || element;
    var labelTarget = element.labelTarget || element;
    setLabel(label, text, labelTarget !== label);
    return [label, labelTarget];
  }

  function preExecute(ctx) {
    var element = ctx.element,
        businessObject = element.businessObject,
        newLabel = ctx.newLabel;

    if (!labelUtil_isLabel(element) && isLabelExternal(element) && !hasExternalLabel(element) && !isEmptyText(newLabel)) {
      // create label
      var paddingTop = 7;
      var labelCenter = getExternalLabelMid(element);
      labelCenter = {
        x: labelCenter.x,
        y: labelCenter.y + paddingTop
      };
      modeling.createLabel(element, labelCenter, {
        id: businessObject.id + '_label',
        businessObject: businessObject
      });
    }
  }

  function execute(ctx) {
    ctx.oldLabel = getLabel(ctx.element);
    return setText(ctx.element, ctx.newLabel);
  }

  function revert(ctx) {
    return setText(ctx.element, ctx.oldLabel);
  }

  function postExecute(ctx) {
    var element = ctx.element,
        label = element.label || element,
        newLabel = ctx.newLabel,
        newBounds = ctx.newBounds,
        hints = ctx.hints || {}; // ignore internal labels for elements except text annotations

    if (!labelUtil_isLabel(label)) {
      return;
    }

    if (labelUtil_isLabel(label) && isEmptyText(newLabel)) {
      if (hints.removeShape !== false) {
        modeling.removeShape(label, {
          unsetLabel: false
        });
      }

      return;
    }

    var text = getLabel(label); // resize element based on label _or_ pre-defined bounds

    if (typeof newBounds === 'undefined') {
      newBounds = textRenderer.getExternalLabelBounds(label, text);
    } // setting newBounds to false or _null_ will
    // disable the postExecute resize operation


    if (newBounds) {
      modeling.resizeShape(label, newBounds, NULL_DIMENSIONS);
    }
  } // API


  this.preExecute = preExecute;
  this.execute = execute;
  this.revert = revert;
  this.postExecute = postExecute;
}
UpdateLabelHandler.$inject = ['modeling', 'textRenderer']; // helpers ///////////////////////

function isEmptyText(label) {
  return !label || !label.trim();
}
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/modeling/modeling.js



function modeling_Modeling(eventBus, elementFactory, commandStack) {
  Modeling.call(this, eventBus, elementFactory, commandStack);
}
inherits_browser_default()(modeling_Modeling, Modeling);
modeling_Modeling.$inject = ['eventBus', 'elementFactory', 'commandStack'];

modeling_Modeling.prototype.getHandlers = function () {
  var handlers = Modeling.prototype.getHandlers.call(this);
  handlers['element.updateLabel'] = UpdateLabelHandler;
  return handlers;
};

modeling_Modeling.prototype.updateLabel = function (element, newLabel, newBounds, hints) {
  this._commandStack.execute('element.updateLabel', {
    element: element,
    newLabel: newLabel,
    newBounds: newBounds,
    hints: hints || {}
  });
};
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/modeling/elementUpdater.js


/**
 * A handler responsible for updating the underlying BPMN 2.0 XML + DI
 * once changes on the diagram happen
 */

function BpmnUpdater(eventBus, connectionDocking) {
  CommandInterceptor.call(this, eventBus); // connection cropping //////////////////////
  // crop connection ends during create/update

  function cropConnection(e) {
    var context = e.context,
        hints = context.hints || {},
        connection;

    if (!context.cropped && hints.createElementsBehavior !== false) {
      connection = context.connection;
      connection.waypoints = connectionDocking.getCroppedWaypoints(connection);
      context.cropped = true;
    }
  }

  this.executed(['connection.layout', 'connection.create'], cropConnection);
}
inherits_browser_default()(BpmnUpdater, CommandInterceptor);
BpmnUpdater.$inject = ['eventBus', 'connectionDocking'];
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/layout/BaseLayouter.js



/**
 * A base connection layouter implementation
 * that layouts the connection by directly connecting
 * mid(source) + mid(target).
 */
function BaseLayouter() {}


/**
 * Return the new layouted waypoints for the given connection.
 *
 * The connection passed is still unchanged; you may figure out about
 * the new connection start / end via the layout hints provided.
 *
 * @param {djs.model.Connection} connection
 * @param {Object} [hints]
 * @param {Point} [hints.connectionStart]
 * @param {Point} [hints.connectionEnd]
 * @param {Point} [hints.source]
 * @param {Point} [hints.target]
 *
 * @return {Array<Point>} the layouted connection waypoints
 */
BaseLayouter.prototype.layoutConnection = function(connection, hints) {

  hints = hints || {};

  return [
    hints.connectionStart || getMid(hints.source || connection.source),
    hints.connectionEnd || getMid(hints.target || connection.target)
  ];
};

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/layout/ManhattanLayout.js






var MIN_SEGMENT_LENGTH = 20,
    POINT_ORIENTATION_PADDING = 5;

var ManhattanLayout_round = Math.round;

var ManhattanLayout_INTERSECTION_THRESHOLD = 20,
    ORIENTATION_THRESHOLD = {
      'h:h': 20,
      'v:v': 20,
      'h:v': -10,
      'v:h': -10
    };

function needsTurn(orientation, startDirection) {
  return !{
    t: /top/,
    r: /right/,
    b: /bottom/,
    l: /left/,
    h: /./,
    v: /./
  }[startDirection].test(orientation);
}

function canLayoutStraight(direction, targetOrientation) {
  return {
    t: /top/,
    r: /right/,
    b: /bottom/,
    l: /left/,
    h: /left|right/,
    v: /top|bottom/
  }[direction].test(targetOrientation);
}

function getSegmentBendpoints(a, b, directions) {
  var orientation = getOrientation(b, a, POINT_ORIENTATION_PADDING);

  var startDirection = directions.split(':')[0];

  var xmid = ManhattanLayout_round((b.x - a.x) / 2 + a.x),
      ymid = ManhattanLayout_round((b.y - a.y) / 2 + a.y);

  var segmentEnd, segmentDirections;

  var layoutStraight = canLayoutStraight(startDirection, orientation),
      layoutHorizontal = /h|r|l/.test(startDirection),
      layoutTurn = false;

  var turnNextDirections = false;

  if (layoutStraight) {
    segmentEnd = layoutHorizontal ? { x: xmid, y: a.y } : { x: a.x, y: ymid };

    segmentDirections = layoutHorizontal ? 'h:h' : 'v:v';
  } else {
    layoutTurn = needsTurn(orientation, startDirection);

    segmentDirections = layoutHorizontal ? 'h:v' : 'v:h';

    if (layoutTurn) {

      if (layoutHorizontal) {
        turnNextDirections = ymid === a.y;

        segmentEnd = {
          x: a.x + MIN_SEGMENT_LENGTH * (/l/.test(startDirection) ? -1 : 1),
          y: turnNextDirections ? ymid + MIN_SEGMENT_LENGTH : ymid
        };
      } else {
        turnNextDirections = xmid === a.x;

        segmentEnd = {
          x: turnNextDirections ? xmid + MIN_SEGMENT_LENGTH : xmid,
          y: a.y + MIN_SEGMENT_LENGTH * (/t/.test(startDirection) ? -1 : 1)
        };
      }

    } else {
      segmentEnd = {
        x: xmid,
        y: ymid
      };
    }
  }

  return {
    waypoints: getBendpoints(a, segmentEnd, segmentDirections).concat(segmentEnd),
    directions:  segmentDirections,
    turnNextDirections: turnNextDirections
  };
}

function getStartSegment(a, b, directions) {
  return getSegmentBendpoints(a, b, directions);
}

function getEndSegment(a, b, directions) {
  var invertedSegment = getSegmentBendpoints(b, a, invertDirections(directions));

  return {
    waypoints: invertedSegment.waypoints.slice().reverse(),
    directions: invertDirections(invertedSegment.directions),
    turnNextDirections: invertedSegment.turnNextDirections
  };
}

function getMidSegment(startSegment, endSegment) {

  var startDirection = startSegment.directions.split(':')[1],
      endDirection = endSegment.directions.split(':')[0];

  if (startSegment.turnNextDirections) {
    startDirection = startDirection == 'h' ? 'v' : 'h';
  }

  if (endSegment.turnNextDirections) {
    endDirection = endDirection == 'h' ? 'v' : 'h';
  }

  var directions = startDirection + ':' + endDirection;

  var bendpoints = getBendpoints(
    startSegment.waypoints[startSegment.waypoints.length - 1],
    endSegment.waypoints[0],
    directions
  );

  return {
    waypoints: bendpoints,
    directions: directions
  };
}

function invertDirections(directions) {
  return directions.split(':').reverse().join(':');
}

/**
 * Handle simple layouts with maximum two bendpoints.
 */
function getSimpleBendpoints(a, b, directions) {

  var xmid = ManhattanLayout_round((b.x - a.x) / 2 + a.x),
      ymid = ManhattanLayout_round((b.y - a.y) / 2 + a.y);

  // one point, right or left from a
  if (directions === 'h:v') {
    return [ { x: b.x, y: a.y } ];
  }

  // one point, above or below a
  if (directions === 'v:h') {
    return [ { x: a.x, y: b.y } ];
  }

  // vertical segment between a and b
  if (directions === 'h:h') {
    return [
      { x: xmid, y: a.y },
      { x: xmid, y: b.y }
    ];
  }

  // horizontal segment between a and b
  if (directions === 'v:v') {
    return [
      { x: a.x, y: ymid },
      { x: b.x, y: ymid }
    ];
  }

  throw new Error('invalid directions: can only handle varians of [hv]:[hv]');
}


/**
 * Returns the mid points for a manhattan connection between two points.
 *
 * @example h:h (horizontal:horizontal)
 *
 * [a]----[x]
 *         |
 *        [x]----[b]
 *
 * @example h:v (horizontal:vertical)
 *
 * [a]----[x]
 *         |
 *        [b]
 *
 * @example h:r (horizontal:right)
 *
 * [a]----[x]
 *         |
 *    [b]-[x]
 *
 * @param  {Point} a
 * @param  {Point} b
 * @param  {string} directions
 *
 * @return {Array<Point>}
 */
function getBendpoints(a, b, directions) {
  directions = directions || 'h:h';

  if (!isValidDirections(directions)) {
    throw new Error(
      'unknown directions: <' + directions + '>: ' +
      'must be specified as <start>:<end> ' +
      'with start/end in { h,v,t,r,b,l }'
    );
  }

  // compute explicit directions, involving trbl dockings
  // using a three segmented layouting algorithm
  if (isExplicitDirections(directions)) {
    var startSegment = getStartSegment(a, b, directions),
        endSegment = getEndSegment(a, b, directions),
        midSegment = getMidSegment(startSegment, endSegment);

    return [].concat(
      startSegment.waypoints,
      midSegment.waypoints,
      endSegment.waypoints
    );
  }

  // handle simple [hv]:[hv] cases that can be easily computed
  return getSimpleBendpoints(a, b, directions);
}

/**
 * Create a connection between the two points according
 * to the manhattan layout (only horizontal and vertical) edges.
 *
 * @param {Point} a
 * @param {Point} b
 *
 * @param {string} [directions='h:h'] specifies manhattan directions for each point as {adirection}:{bdirection}.
                   A directionfor a point is either `h` (horizontal) or `v` (vertical)
 *
 * @return {Array<Point>}
 */
function connectPoints(a, b, directions) {

  var points = getBendpoints(a, b, directions);

  points.unshift(a);
  points.push(b);

  return withoutRedundantPoints(points);
}


/**
 * Connect two rectangles using a manhattan layouted connection.
 *
 * @param {Bounds} source source rectangle
 * @param {Bounds} target target rectangle
 * @param {Point} [start] source docking
 * @param {Point} [end] target docking
 *
 * @param {Object} [hints]
 * @param {string} [hints.preserveDocking=source] preserve docking on selected side
 * @param {Array<string>} [hints.preferredLayouts]
 * @param {Point|boolean} [hints.connectionStart] whether the start changed
 * @param {Point|boolean} [hints.connectionEnd] whether the end changed
 *
 * @return {Array<Point>} connection points
 */
function connectRectangles(source, target, start, end, hints) {

  var preferredLayouts = hints && hints.preferredLayouts || [];

  var preferredLayout = without(preferredLayouts, 'straight')[0] || 'h:h';

  var threshold = ORIENTATION_THRESHOLD[preferredLayout] || 0;

  var orientation = getOrientation(source, target, threshold);

  var directions = getDirections(orientation, preferredLayout);

  start = start || getMid(source);
  end = end || getMid(target);

  var directionSplit = directions.split(':');

  // compute actual docking points for start / end
  // this ensures we properly layout only parts of the
  // connection that lies in between the two rectangles
  var startDocking = getDockingPoint(start, source, directionSplit[0], invertOrientation(orientation)),
      endDocking = getDockingPoint(end, target, directionSplit[1], orientation);

  return connectPoints(startDocking, endDocking, directions);
}


/**
 * Repair the connection between two rectangles, of which one has been updated.
 *
 * @param {Bounds} source
 * @param {Bounds} target
 * @param {Point} [start]
 * @param {Point} [end]
 * @param {Array<Point>} [waypoints]
 * @param {Object} [hints]
 * @param {Array<string>} [hints.preferredLayouts] list of preferred layouts
 * @param {boolean} [hints.connectionStart]
 * @param {boolean} [hints.connectionEnd]
 *
 * @return {Array<Point>} repaired waypoints
 */
function repairConnection(source, target, start, end, waypoints, hints) {

  if (index_esm_isArray(start)) {
    waypoints = start;
    hints = end;

    start = getMid(source);
    end = getMid(target);
  }

  hints = index_esm_assign({ preferredLayouts: [] }, hints);
  waypoints = waypoints || [];

  var preferredLayouts = hints.preferredLayouts,
      preferStraight = preferredLayouts.indexOf('straight') !== -1,
      repairedWaypoints;

  // just layout non-existing or simple connections
  // attempt to render straight lines, if required

  // attempt to layout a straight line
  repairedWaypoints = preferStraight && tryLayoutStraight(source, target, start, end, hints);

  if (repairedWaypoints) {
    return repairedWaypoints;
  }

  // try to layout from end
  repairedWaypoints = hints.connectionEnd && tryRepairConnectionEnd(target, source, end, waypoints);

  if (repairedWaypoints) {
    return repairedWaypoints;
  }

  // try to layout from start
  repairedWaypoints = hints.connectionStart && tryRepairConnectionStart(source, target, start, waypoints);

  if (repairedWaypoints) {
    return repairedWaypoints;
  }

  // or whether nothing seems to have changed
  if (!hints.connectionStart && !hints.connectionEnd && waypoints && waypoints.length) {
    return waypoints;
  }

  // simply reconnect if nothing else worked
  return connectRectangles(source, target, start, end, hints);
}


function inRange(a, start, end) {
  return a >= start && a <= end;
}

function isInRange(axis, a, b) {
  var size = {
    x: 'width',
    y: 'height'
  };

  return inRange(a[axis], b[axis], b[axis] + b[size[axis]]);
}

/**
 * Layout a straight connection
 *
 * @param {Bounds} source
 * @param {Bounds} target
 * @param {Point} start
 * @param {Point} end
 * @param {Object} [hints]
 *
 * @return {Array<Point>|null} waypoints if straight layout worked
 */
function tryLayoutStraight(source, target, start, end, hints) {
  var axis = {},
      primaryAxis,
      orientation;

  orientation = getOrientation(source, target);

  // only layout a straight connection if shapes are
  // horizontally or vertically aligned
  if (!/^(top|bottom|left|right)$/.test(orientation)) {
    return null;
  }

  if (/top|bottom/.test(orientation)) {
    primaryAxis = 'x';
  }

  if (/left|right/.test(orientation)) {
    primaryAxis = 'y';
  }

  if (hints.preserveDocking === 'target') {

    if (!isInRange(primaryAxis, end, source)) {
      return null;
    }

    axis[primaryAxis] = end[primaryAxis];

    return [
      {
        x: axis.x !== undefined ? axis.x : start.x,
        y: axis.y !== undefined ? axis.y : start.y,
        original: {
          x: axis.x !== undefined ? axis.x : start.x,
          y: axis.y !== undefined ? axis.y : start.y
        }
      },
      {
        x: end.x,
        y: end.y
      }
    ];

  } else {

    if (!isInRange(primaryAxis, start, target)) {
      return null;
    }

    axis[primaryAxis] = start[primaryAxis];

    return [
      {
        x: start.x,
        y: start.y
      },
      {
        x: axis.x !== undefined ? axis.x : end.x,
        y: axis.y !== undefined ? axis.y : end.y,
        original: {
          x: axis.x !== undefined ? axis.x : end.x,
          y: axis.y !== undefined ? axis.y : end.y
        }
      }
    ];
  }

}

/**
 * Repair a connection from start.
 *
 * @param {Bounds} moved
 * @param {Bounds} other
 * @param {Point} newDocking
 * @param {Array<Point>} points originalPoints from moved to other
 *
 * @return {Array<Point>|null} the repaired points between the two rectangles
 */
function tryRepairConnectionStart(moved, other, newDocking, points) {
  return _tryRepairConnectionSide(moved, other, newDocking, points);
}

/**
 * Repair a connection from end.
 *
 * @param {Bounds} moved
 * @param {Bounds} other
 * @param {Point} newDocking
 * @param {Array<Point>} points originalPoints from moved to other
 *
 * @return {Array<Point>|null} the repaired points between the two rectangles
 */
function tryRepairConnectionEnd(moved, other, newDocking, points) {
  var waypoints = points.slice().reverse();

  waypoints = _tryRepairConnectionSide(moved, other, newDocking, waypoints);

  return waypoints ? waypoints.reverse() : null;
}

/**
 * Repair a connection from one side that moved.
 *
 * @param {Bounds} moved
 * @param {Bounds} other
 * @param {Point} newDocking
 * @param {Array<Point>} points originalPoints from moved to other
 *
 * @return {Array<Point>} the repaired points between the two rectangles
 */
function _tryRepairConnectionSide(moved, other, newDocking, points) {

  function needsRelayout(points) {
    if (points.length < 3) {
      return true;
    }

    if (points.length > 4) {
      return false;
    }

    // relayout if two points overlap
    // this is most likely due to
    return !!find(points, function(p, idx) {
      var q = points[idx - 1];

      return q && pointDistance(p, q) < 3;
    });
  }

  function repairBendpoint(candidate, oldPeer, newPeer) {

    var alignment = pointsAligned(oldPeer, candidate);

    switch (alignment) {
    case 'v':

      // repair horizontal alignment
      return { x: newPeer.x, y: candidate.y };
    case 'h':

      // repair vertical alignment
      return { x: candidate.x, y: newPeer.y };
    }

    return { x: candidate.x, y: candidate. y };
  }

  function removeOverlapping(points, a, b) {
    var i;

    for (i = points.length - 2; i !== 0; i--) {

      // intersects (?) break, remove all bendpoints up to this one and relayout
      if (pointInRect(points[i], a, ManhattanLayout_INTERSECTION_THRESHOLD) ||
          pointInRect(points[i], b, ManhattanLayout_INTERSECTION_THRESHOLD)) {

        // return sliced old connection
        return points.slice(i);
      }
    }

    return points;
  }

  // (0) only repair what has layoutable bendpoints

  // (1) if only one bendpoint and on shape moved onto other shapes axis
  //     (horizontally / vertically), relayout

  if (needsRelayout(points)) {
    return null;
  }

  var oldDocking = points[0],
      newPoints = points.slice(),
      slicedPoints;

  // (2) repair only last line segment and only if it was layouted before

  newPoints[0] = newDocking;
  newPoints[1] = repairBendpoint(newPoints[1], oldDocking, newDocking);


  // (3) if shape intersects with any bendpoint after repair,
  //     remove all segments up to this bendpoint and repair from there
  slicedPoints = removeOverlapping(newPoints, moved, other);

  if (slicedPoints !== newPoints) {
    newPoints = _tryRepairConnectionSide(moved, other, newDocking, slicedPoints);
  }

  // (4) do NOT repair if repaired bendpoints are aligned
  if (newPoints && pointsAligned(newPoints)) {
    return null;
  }

  return newPoints;
}


/**
 * Returns the manhattan directions connecting two rectangles
 * with the given orientation.
 *
 * Will always return the default layout, if it is specific
 * regarding sides already (trbl).
 *
 * @example
 *
 * getDirections('top'); // -> 'v:v'
 * getDirections('intersect'); // -> 't:t'
 *
 * getDirections('top-right', 'v:h'); // -> 'v:h'
 * getDirections('top-right', 'h:h'); // -> 'h:h'
 *
 *
 * @param {string} orientation
 * @param {string} defaultLayout
 *
 * @return {string}
 */
function getDirections(orientation, defaultLayout) {

  // don't override specific trbl directions
  if (isExplicitDirections(defaultLayout)) {
    return defaultLayout;
  }

  switch (orientation) {
  case 'intersect':
    return 't:t';

  case 'top':
  case 'bottom':
    return 'v:v';

  case 'left':
  case 'right':
    return 'h:h';

  // 'top-left'
  // 'top-right'
  // 'bottom-left'
  // 'bottom-right'
  default:
    return defaultLayout;
  }
}

function isValidDirections(directions) {
  return directions && /^h|v|t|r|b|l:h|v|t|r|b|l$/.test(directions);
}

function isExplicitDirections(directions) {
  return directions && /t|r|b|l/.test(directions);
}

function invertOrientation(orientation) {
  return {
    'top': 'bottom',
    'bottom': 'top',
    'left': 'right',
    'right': 'left',
    'top-left': 'bottom-right',
    'bottom-right': 'top-left',
    'top-right': 'bottom-left',
    'bottom-left': 'top-right',
  }[orientation];
}

function getDockingPoint(point, rectangle, dockingDirection, targetOrientation) {

  // ensure we end up with a specific docking direction
  // based on the targetOrientation, if <h|v> is being passed

  if (dockingDirection === 'h') {
    dockingDirection = /left/.test(targetOrientation) ? 'l' : 'r';
  }

  if (dockingDirection === 'v') {
    dockingDirection = /top/.test(targetOrientation) ? 't' : 'b';
  }

  if (dockingDirection === 't') {
    return { original: point, x: point.x, y: rectangle.y };
  }

  if (dockingDirection === 'r') {
    return { original: point, x: rectangle.x + rectangle.width, y: point.y };
  }

  if (dockingDirection === 'b') {
    return { original: point, x: point.x, y: rectangle.y + rectangle.height };
  }

  if (dockingDirection === 'l') {
    return { original: point, x: rectangle.x, y: point.y };
  }

  throw new Error('unexpected dockingDirection: <' + dockingDirection + '>');
}


/**
 * Return list of waypoints with redundant ones filtered out.
 *
 * @example
 *
 * Original points:
 *
 *   [x] ----- [x] ------ [x]
 *                         |
 *                        [x] ----- [x] - [x]
 *
 * Filtered:
 *
 *   [x] ---------------- [x]
 *                         |
 *                        [x] ----------- [x]
 *
 * @param  {Array<Point>} waypoints
 *
 * @return {Array<Point>}
 */
function withoutRedundantPoints(waypoints) {
  return waypoints.reduce(function(points, p, idx) {

    var previous = points[points.length - 1],
        next = waypoints[idx + 1];

    if (!pointsOnLine(previous, next, p, 0)) {
      points.push(p);
    }

    return points;
  }, []);
}

// CONCATENATED MODULE: ./lib/bWflow/_src/modules/modeling/elementLayouter.js






function elementLayouter() {}
inherits_browser_default()(elementLayouter, BaseLayouter);

elementLayouter.prototype.layoutConnection = function (connection, hints) {
  if (!hints) {
    hints = {};
  }

  var source = hints.source || connection.source,
      target = hints.target || connection.target,
      waypoints = hints.waypoints || connection.waypoints,
      connectionStart = hints.connectionStart,
      connectionEnd = hints.connectionEnd;
  var manhattanOptions, updatedWaypoints;

  if (connectionEnd == undefined) {
    connectionStart = getConnectionDocking(waypoints && waypoints[0], source);
    connectionEnd = getConnectionDocking(waypoints && waypoints[waypoints.length - 1], target);
  }

  if (!connectionStart) {
    connectionStart = getConnectionDocking(waypoints && waypoints[0], source);
  }

  if (!connectionEnd) {
    connectionEnd = getConnectionDocking(waypoints && waypoints[waypoints.length - 1], target);
  }

  if (is(connection, 'myline')) {
    if (source === target) {
      manhattanOptions = {
        preferredLayouts: getLoopPreferredLayout(source, connection)
      };
    } else if (is(source, 'gatewayAnd') || is(source, 'gatewayXor') || is(source, 'gatewayInclusive')) {
      manhattanOptions = {
        preferredLayouts: ['v:h']
      };
    } else if (is(target, 'gatewayAnd') || is(target, 'gatewayXor') || is(target, 'gatewayInclusive')) {
      manhattanOptions = {
        preferredLayouts: ['h:v']
      };
    } else {
      manhattanOptions = {
        preferredLayouts: ['h:h']
      };
    }
  }

  if (manhattanOptions) {
    manhattanOptions = index_esm_assign(manhattanOptions, hints);
    updatedWaypoints = withoutRedundantPoints(repairConnection(source, target, connectionStart, connectionEnd, waypoints, manhattanOptions));
  }

  return updatedWaypoints || [connectionStart, connectionEnd];
};

function getConnectionDocking(point, shape) {
  return point ? point.original || point : getMid(shape);
}

function getLoopPreferredLayout(source, connection) {
  var waypoints = connection.waypoints;
  var orientation = waypoints && waypoints.length && getOrientation(waypoints[0], source);

  if (orientation === 'top') {
    return ['t:r'];
  } else if (orientation === 'right') {
    return ['r:b'];
  } else if (orientation === 'left') {
    return ['l:t'];
  }

  return ['b:l'];
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/layout/CroppingConnectionDocking.js





function dockingToPoint(docking) {

  // use the dockings actual point and
  // retain the original docking
  return index_esm_assign({ original: docking.point.original || docking.point }, docking.actual);
}


/**
 * A {@link ConnectionDocking} that crops connection waypoints based on
 * the path(s) of the connection source and target.
 *
 * @param {djs.core.ElementRegistry} elementRegistry
 */
function CroppingConnectionDocking(elementRegistry, graphicsFactory) {
  this._elementRegistry = elementRegistry;
  this._graphicsFactory = graphicsFactory;
}

CroppingConnectionDocking.$inject = [ 'elementRegistry', 'graphicsFactory' ];


/**
 * @inheritDoc ConnectionDocking#getCroppedWaypoints
 */
CroppingConnectionDocking.prototype.getCroppedWaypoints = function(connection, source, target) {

  source = source || connection.source;
  target = target || connection.target;

  var sourceDocking = this.getDockingPoint(connection, source, true),
      targetDocking = this.getDockingPoint(connection, target);

  var croppedWaypoints = connection.waypoints.slice(sourceDocking.idx + 1, targetDocking.idx);

  croppedWaypoints.unshift(dockingToPoint(sourceDocking));
  croppedWaypoints.push(dockingToPoint(targetDocking));

  return croppedWaypoints;
};

/**
 * Return the connection docking point on the specified shape
 *
 * @inheritDoc ConnectionDocking#getDockingPoint
 */
CroppingConnectionDocking.prototype.getDockingPoint = function(connection, shape, dockStart) {

  var waypoints = connection.waypoints,
      dockingIdx,
      dockingPoint,
      croppedPoint;

  dockingIdx = dockStart ? 0 : waypoints.length - 1;
  dockingPoint = waypoints[dockingIdx];

  croppedPoint = this._getIntersection(shape, connection, dockStart);

  return {
    point: dockingPoint,
    actual: croppedPoint || dockingPoint,
    idx: dockingIdx
  };
};


// helpers //////////////////////

CroppingConnectionDocking.prototype._getIntersection = function(shape, connection, takeFirst) {

  var shapePath = this._getShapePath(shape),
      connectionPath = this._getConnectionPath(connection);

  return getElementLineIntersection(shapePath, connectionPath, takeFirst);
};

CroppingConnectionDocking.prototype._getConnectionPath = function(connection) {
  return this._graphicsFactory.getConnectionPath(connection);
};

CroppingConnectionDocking.prototype._getShapePath = function(shape) {
  return this._graphicsFactory.getShapePath(shape);
};

CroppingConnectionDocking.prototype._getGfx = function(element) {
  return this._elementRegistry.getGraphics(element);
};

// CONCATENATED MODULE: ./lib/bWflow/_src/modules/modeling/index.js








/* harmony default export */ var modules_modeling = ({
  __depends__: [command, label_support, features_selection],
  __init__: ['modeling', 'elementUpdater'],
  modeling: ['type', modeling_Modeling],
  layouter: ['type', elementLayouter],
  elementUpdater: ['type', BpmnUpdater],
  elementFactory: ['type', elementFactory_ElementFactory],
  connectionDocking: ['type', CroppingConnectionDocking]
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__("57e7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.fill.js
var es6_array_fill = __webpack_require__("6c7b");

// CONCATENATED MODULE: ./lib/bWflow/_src/modules/draw/renderUtil.js
 // element utils //////////////////////

function getSemantic(element) {
  return element.businessObject;
} // width /////////////////////////////

function getStrokeWidth(element, defaultWidth) {
  //element, defaultColor
  return element.businessObject.strokeWidth || defaultWidth || 1;
} // color access //////////////////////

function getFillColor(element, defaultColor) {
  //element, defaultColor
  return element.businessObject.fillColor || defaultColor || 'white';
}
function getStrokeColor(element, defaultColor) {
  //element, defaultColor
  return element.businessObject.strokeColor || defaultColor || 'black';
} // cropping path customizations //////////////////////

function getCirclePath(shape) {
  var cx = shape.x + shape.width / 2,
      cy = shape.y + shape.height / 2,
      radius = shape.width / 2;
  var circlePath = [['M', cx, cy], ['m', 0, -radius], ['a', radius, radius, 0, 1, 1, 0, 2 * radius], ['a', radius, radius, 0, 1, 1, 0, -2 * radius], ['z']];
  return componentsToPath(circlePath);
}
function getRoundRectPath(shape, borderRadius) {
  var x = shape.x,
      y = shape.y,
      width = shape.width,
      height = shape.height;
  var roundRectPath = [['M', x + borderRadius, y], ['l', width - borderRadius * 2, 0], ['a', borderRadius, borderRadius, 0, 0, 1, borderRadius, borderRadius], ['l', 0, height - borderRadius * 2], ['a', borderRadius, borderRadius, 0, 0, 1, -borderRadius, borderRadius], ['l', borderRadius * 2 - width, 0], ['a', borderRadius, borderRadius, 0, 0, 1, -borderRadius, -borderRadius], ['l', 0, borderRadius * 2 - height], ['a', borderRadius, borderRadius, 0, 0, 1, borderRadius, -borderRadius], ['z']];
  return componentsToPath(roundRectPath);
}
function getDiamondPath(shape) {
  var width = shape.width,
      height = shape.height,
      x = shape.x,
      y = shape.y,
      halfWidth = width / 2,
      halfHeight = height / 2;
  var diamondPath = [['M', x + halfWidth, y], ['l', halfWidth, halfHeight], ['l', -halfWidth, halfHeight], ['l', -halfWidth, -halfHeight], ['z']];
  return componentsToPath(diamondPath);
}
function getRectPath(shape) {
  var x = shape.x,
      y = shape.y,
      width = shape.width,
      height = shape.height;
  var rectPath = [['M', x, y], ['l', width, 0], ['l', 0, height], ['l', -width, 0], ['z']];
  return componentsToPath(rectPath);
}
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/draw/myRenderer.js








/** diagram-js*/







var TASK_BORDER_RADIUS = 10;
var DEFAULT_FILL_OPACITY = .95;

function myRenderer_is(element, type) {
  if (element.type == type) {
    return true;
  } else {
    return false;
  }
}

function myRenderer(eventBus, styles, pathMap, canvas, textRenderer, myOptions, priority) {
  BaseRenderer.call(this, eventBus, priority);
  var defaultFillColor = 'white',
      defaultStrokeColor = 'black';
  var computeStyle = styles.computeStyle;
  var markers = {};

  function renderer(type) {
    return handlers[type];
  }

  function drawCircle(parentGfx, width, height, offset, attrs) {
    if (isObject(offset)) {
      attrs = offset;
      offset = 0;
    }

    offset = offset || 0;
    attrs = computeStyle(attrs, {
      stroke: 'black',
      strokeWidth: 2,
      fill: 'white'
    });

    if (attrs.fill === 'none') {
      delete attrs.fillOpacity;
    }

    var cx = width / 2,
        cy = height / 2;
    var circle = index_esm_create('circle');
    index_esm_attr(circle, {
      cx: cx,
      cy: cy,
      r: Math.round((width + height) / 4 - offset)
    });
    index_esm_attr(circle, attrs);
    index_esm_append(parentGfx, circle);
    return circle;
  }

  function drawRect(parentGfx, width, height, r, offset, attrs) {
    if (isObject(offset)) {
      attrs = offset;
      offset = 0;
    }

    offset = offset || 0;
    attrs = computeStyle(attrs, {
      stroke: 'black',
      strokeWidth: 2,
      fill: 'white'
    });
    var rect = index_esm_create('rect');
    index_esm_attr(rect, {
      x: offset,
      y: offset,
      width: width - offset * 2,
      height: height - offset * 2,
      rx: r,
      ry: r
    });
    index_esm_attr(rect, attrs);
    index_esm_append(parentGfx, rect);
    return rect;
  }

  function drawPath(parentGfx, d, attrs) {
    attrs = computeStyle(attrs, ['no-fill'], {
      strokeWidth: 2,
      stroke: 'black'
    });
    var path = index_esm_create('path');
    index_esm_attr(path, {
      d: d
    });
    index_esm_attr(path, attrs);
    index_esm_append(parentGfx, path);
    return path;
  }

  function drawDiamond(parentGfx, width, height, attrs) {
    var x_2 = width / 2;
    var y_2 = height / 2;
    var points = [{
      x: x_2,
      y: 0
    }, {
      x: width,
      y: y_2
    }, {
      x: x_2,
      y: height
    }, {
      x: 0,
      y: y_2
    }];
    var pointsString = points.map(function (point) {
      return point.x + ',' + point.y;
    }).join(' ');
    attrs = computeStyle(attrs, {
      stroke: 'black',
      strokeWidth: 2,
      fill: 'white'
    });
    var polygon = index_esm_create('polygon');
    index_esm_attr(polygon, {
      points: pointsString
    });
    index_esm_attr(polygon, attrs);
    index_esm_append(parentGfx, polygon);
    return polygon;
  }

  function drawMarker(type, parentGfx, path, attrs) {
    return drawPath(parentGfx, path, index_esm_assign({
      'data-marker': type
    }, attrs));
  }

  function renderLabel(parentGfx, label, options) {
    options = index_esm_assign({
      size: {
        width: 100
      }
    }, options);
    var text = textRenderer.createText(label || '', options);
    index_esm_classes(text).add('djs-label');
    index_esm_append(parentGfx, text);
    return text;
  }

  function renderEmbeddedLabel(parentGfx, element, align) {
    var semantic = getSemantic(element);
    return renderLabel(parentGfx, semantic.name, {
      box: element,
      align: align,
      padding: 5,
      style: {
        fill: getStrokeColor(element, defaultStrokeColor)
      }
    });
  }

  function renderExternalLabel(parentGfx, element) {
    var box = {
      width: 90,
      height: 30,
      x: element.width / 2 + element.x,
      y: element.height / 2 + element.y
    };
    return renderLabel(parentGfx, getLabel(element), {
      box: box,
      fitBox: true,
      style: index_esm_assign({}, textRenderer.getExternalStyle(), {
        fill: getStrokeColor(element, defaultStrokeColor)
      })
    });
  }

  function attachTaskMarkers(parentGfx, element, taskMarkers) {
    var subprocess = taskMarkers && taskMarkers.indexOf('SubProcessMarker') !== -1;
    var position;

    if (subprocess) {
      position = {
        seq: -21,
        parallel: -22,
        compensation: -42,
        loop: -18,
        adhoc: 10
      };
    } else {
      position = {
        seq: -3,
        parallel: -6,
        compensation: -27,
        loop: 0,
        adhoc: 10
      };
    }

    forEach(taskMarkers, function (marker) {
      renderer(marker)(parentGfx, element, position);
    });
  }

  function createPathFromConnection(connection) {
    var waypoints = connection.waypoints;
    var pathData = 'm  ' + waypoints[0].x + ',' + waypoints[0].y;

    for (var i = 1; i < waypoints.length; i++) {
      pathData += 'L' + waypoints[i].x + ',' + waypoints[i].y + ' ';
    }

    return pathData;
  }

  function colorEscape(str) {
    // only allow characters and numbers
    return str.replace(/[^0-9a-zA-z]+/g, '_');
  }

  function addMarker(id, options) {
    var attrs = index_esm_assign({
      fill: 'black',
      strokeWidth: 1,
      strokeLinecap: 'round',
      strokeDasharray: 'none'
    }, options.attrs);
    var ref = options.ref || {
      x: 0,
      y: 0
    };
    var scale = options.scale || 1; // fix for safari / chrome / firefox bug not correctly
    // resetting stroke dash array

    if (attrs.strokeDasharray === 'none') {
      attrs.strokeDasharray = [10000, 1];
    }

    var marker = index_esm_create('marker');
    index_esm_attr(options.element, attrs);
    index_esm_append(marker, options.element);
    index_esm_attr(marker, {
      id: id,
      viewBox: '0 0 20 20',
      refX: ref.x,
      refY: ref.y,
      markerWidth: 20 * scale,
      markerHeight: 20 * scale,
      orient: 'auto'
    });
    var defs = query('defs', canvas._svg);

    if (!defs) {
      defs = index_esm_create('defs');
      index_esm_append(canvas._svg, defs);
    }

    index_esm_append(defs, marker);
    markers[id] = marker;
  }

  function marker(type, fill, stroke) {
    var id = type + '-' + colorEscape(fill) + '-' + colorEscape(stroke) + '-' + uuid();

    if (!markers[id]) {
      createMarker(id, type, fill, stroke);
    }

    return 'url(#' + id + ')';
  }

  function createMarker(id, type, fill, stroke) {
    if (type === 'sequenceflow-end') {
      var sequenceflowEnd = index_esm_create('path');
      index_esm_attr(sequenceflowEnd, {
        d: 'M 1 5 L 11 10 L 1 15 Z'
      });
      addMarker(id, {
        element: sequenceflowEnd,
        ref: {
          x: 11,
          y: 10
        },
        scale: 0.5,
        attrs: {
          fill: stroke,
          stroke: stroke
        }
      });
    }

    if (type === 'messageflow-start') {
      var messageflowStart = index_esm_create('circle');
      index_esm_attr(messageflowStart, {
        cx: 6,
        cy: 6,
        r: 3.5
      });
      addMarker(id, {
        element: messageflowStart,
        attrs: {
          fill: fill,
          stroke: stroke
        },
        ref: {
          x: 6,
          y: 6
        }
      });
    }

    if (type === 'messageflow-end') {
      var messageflowEnd = index_esm_create('path');
      index_esm_attr(messageflowEnd, {
        d: 'm 1 5 l 0 -3 l 7 3 l -7 3 z'
      });
      addMarker(id, {
        element: messageflowEnd,
        attrs: {
          fill: fill,
          stroke: stroke,
          strokeLinecap: 'butt'
        },
        ref: {
          x: 8.5,
          y: 5
        }
      });
    }

    if (type === 'association-start') {
      var associationStart = index_esm_create('path');
      index_esm_attr(associationStart, {
        d: 'M 11 5 L 1 10 L 11 15'
      });
      addMarker(id, {
        element: associationStart,
        attrs: {
          fill: 'none',
          stroke: stroke,
          strokeWidth: 1.5
        },
        ref: {
          x: 1,
          y: 10
        },
        scale: 0.5
      });
    }

    if (type === 'association-end') {
      var associationEnd = index_esm_create('path');
      index_esm_attr(associationEnd, {
        d: 'M 1 5 L 11 10 L 1 15'
      });
      addMarker(id, {
        element: associationEnd,
        attrs: {
          fill: 'none',
          stroke: stroke,
          strokeWidth: 1.5
        },
        ref: {
          x: 12,
          y: 10
        },
        scale: 0.5
      });
    }

    if (type === 'conditional-flow-marker') {
      var conditionalflowMarker = index_esm_create('path');
      index_esm_attr(conditionalflowMarker, {
        d: 'M 0 10 L 8 6 L 16 10 L 8 14 Z'
      });
      addMarker(id, {
        element: conditionalflowMarker,
        attrs: {
          fill: fill,
          stroke: stroke
        },
        ref: {
          x: -1,
          y: 10
        },
        scale: 0.5
      });
    }

    if (type === 'conditional-default-flow-marker') {
      var conditionaldefaultflowMarker = index_esm_create('path');
      index_esm_attr(conditionaldefaultflowMarker, {
        d: 'M 6 4 L 10 16'
      });
      addMarker(id, {
        element: conditionaldefaultflowMarker,
        attrs: {
          stroke: stroke
        },
        ref: {
          x: 0,
          y: 10
        },
        scale: 0.5
      });
    }
  }

  function drawIcon(parentGfx, element, x, y) {
    if (element.icon) {
      var pathData = pathMap.getScaledPath(element.icon, {
        abspos: {
          x: x,
          y: y
        }
      });
      /* parallel path */

      drawPath(parentGfx, pathData, {
        strokeWidth: 0,
        fill: getStrokeColor(element, element.iconFill)
      });
    }
  }

  var handlers = this.handlers = {
    'event': function event(parentGfx, element, attrs) {
      if (!('fillOpacity' in attrs)) {
        attrs.fillOpacity = DEFAULT_FILL_OPACITY;
      }

      return drawCircle(parentGfx, element.width, element.height, attrs);
    },
    'startEvent': function startEvent(parentGfx, element) {
      var attrs = {
        fill: getFillColor(element, element.fill),
        stroke: getStrokeColor(element, element.stroke),
        strokeWidth: getStrokeWidth(element, element.strokeWidth)
      };
      var circle = renderer('event')(parentGfx, element, attrs);
      drawIcon(parentGfx, element, 18, 18);
      return circle;
    },
    'endEvent': function endEvent(parentGfx, element) {
      var circle = renderer('event')(parentGfx, element, {
        strokeWidth: getStrokeWidth(element, element.strokeWidth || 4),
        fill: getFillColor(element, element.fill),
        stroke: getStrokeColor(element, element.stroke)
      });
      drawIcon(parentGfx, element, 18, 18);
      return circle;
    },
    'gateway': function gateway(parentGfx, element) {
      var attrs = {
        fillOpacity: DEFAULT_FILL_OPACITY,
        strokeWidth: getStrokeWidth(element, element.strokeWidth || 4),
        fill: getFillColor(element, element.fill),
        stroke: getStrokeColor(element, element.stroke)
      };
      return drawDiamond(parentGfx, element.width, element.height, attrs);
    },
    'gatewayAnd': function gatewayAnd(parentGfx, element) {
      var diamond = renderer('gateway')(parentGfx, element);
      var pathData = pathMap.getScaledPath('GATEWAY_PARALLEL', {
        xScaleFactor: 0.4,
        yScaleFactor: 0.4,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.47,
          my: 0.29
        }
      });
      /* parallel path */

      drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: getStrokeColor(element, element.iconFill),
        stroke: getStrokeColor(element, element.iconFill)
      });
      return diamond;
    },
    'gatewayXor': function gatewayXor(parentGfx, element) {
      var diamond = renderer('gateway')(parentGfx, element);
      var pathData = pathMap.getScaledPath('GATEWAY_EXCLUSIVE', {
        xScaleFactor: 0.4,
        yScaleFactor: 0.4,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.32,
          my: 0.3
        }
      });
      drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: getStrokeColor(element, element.iconFill),
        stroke: getStrokeColor(element, element.iconFill)
      });
      return diamond;
    },
    'gatewayInclusive': function gatewayInclusive(parentGfx, element) {
      var diamond = renderer('gateway')(parentGfx, element);
      /* circle path */

      drawCircle(parentGfx, element.width, element.height, element.height * 0.24, {
        strokeWidth: 2.5,
        fill: getStrokeColor(element, element.iconFill),
        stroke: getStrokeColor(element, element.iconFill)
      });
      return diamond;
    },
    'activity': function activity(parentGfx, element, attrs) {
      attrs = attrs || {};

      if (!('fillOpacity' in attrs)) {
        attrs.fillOpacity = DEFAULT_FILL_OPACITY;
      }

      return drawRect(parentGfx, element.width, element.height, TASK_BORDER_RADIUS, attrs);
    },
    'task': function task(parentGfx, element) {
      var attrs = {
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      };
      var rect = renderer('activity')(parentGfx, element, attrs);
      renderEmbeddedLabel(parentGfx, element, 'center-middle');
      attachTaskMarkers(parentGfx, element);
      return rect;
    },
    'userTask': function userTask(parentGfx, element) {
      var task = renderer('task')(parentGfx, element);
      var x = 15;
      var y = 12;
      var pathData = pathMap.getScaledPath('TASK_TYPE_USER_1', {
        abspos: {
          x: x,
          y: y
        }
      });
      /* user path */

      drawPath(parentGfx, pathData, {
        strokeWidth: 0.5,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      var pathData2 = pathMap.getScaledPath('TASK_TYPE_USER_2', {
        abspos: {
          x: x,
          y: y
        }
      });
      /* user2 path */

      drawPath(parentGfx, pathData2, {
        strokeWidth: 0.5,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      var pathData3 = pathMap.getScaledPath('TASK_TYPE_USER_3', {
        abspos: {
          x: x,
          y: y
        }
      });
      /* user3 path */

      drawPath(parentGfx, pathData3, {
        strokeWidth: 0.5,
        fill: getStrokeColor(element, defaultStrokeColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      return task;
    },
    'scriptTask': function scriptTask(parentGfx, element) {
      var task = renderer('task')(parentGfx, element);
      var pathData = pathMap.getScaledPath('TASK_TYPE_SCRIPT', {
        abspos: {
          x: 15,
          y: 20
        }
      });
      /* script path */

      drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      return task;
    },
    'SubProcessMarker': function SubProcessMarker(parentGfx, element) {
      var markerRect = drawRect(parentGfx, 14, 14, 0, {
        strokeWidth: 1,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      }); // Process marker is placed in the middle of the box
      // therefore fixed values can be used here

      SvgTransformUtil_translate(markerRect, element.width / 2 - 7.5, element.height - 20);
      var markerPath = pathMap.getScaledPath('MARKER_SUB_PROCESS', {
        xScaleFactor: 1.5,
        yScaleFactor: 1.5,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: (element.width / 2 - 7.5) / element.width,
          my: (element.height - 20) / element.height
        }
      });
      drawMarker('sub-process', parentGfx, markerPath, {
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
    },
    'subprocess': function subprocess(parentGfx, element, attrs) {
      attrs = index_esm_assign({
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      }, attrs);
      var rect = renderer('activity')(parentGfx, element, attrs);
      renderEmbeddedLabel(parentGfx, element, 'center-middle'); //center-top

      attachTaskMarkers(parentGfx, element, ['SubProcessMarker']);
      return rect;
    },
    'label': function label(parentGfx, element) {
      return renderExternalLabel(parentGfx, element);
    },
    'myline': function myline(parentGfx, element) {
      var pathData = createPathFromConnection(element);
      var fill = getFillColor(element, myOptions.lineStroke || defaultFillColor),
          stroke = getStrokeColor(element, myOptions.lineStroke || defaultStrokeColor);
      var attrs = {
        strokeLinejoin: 'round',
        markerEnd: marker('sequenceflow-end', fill, stroke),
        strokeWidth: 2,
        stroke: getStrokeColor(element, myOptions.lineStroke || defaultStrokeColor)
      };
      var path = drawPath(parentGfx, pathData, attrs);
      return path;
    },
    'default': function _default(parentGfx, element) {
      var attrs = {
        strokeWidth: getStrokeWidth(element, element.strokeWidth || 1),
        fill: getFillColor(element, element.fill),
        stroke: getStrokeColor(element, element.stroke)
      };
      var rect = drawRect(parentGfx, element.width, element.height, element.radius || TASK_BORDER_RADIUS, attrs);
      renderEmbeddedLabel(parentGfx, element, 'center-middle');
      attachTaskMarkers(parentGfx, element);
      drawIcon(parentGfx, element, element.iconX, element.iconY);
      return rect;
    }
  }; // extension API, use at your own risk

  this._drawPath = drawPath;
}
inherits_browser_default()(myRenderer, BaseRenderer);
myRenderer.$inject = ['eventBus', 'styles', 'pathMap', 'canvas', 'textRenderer', 'myOptions'];

myRenderer.prototype.canRender = function () {
  //var h = this.handlers[element.type || 'default'];
  return true; //h != undefined;
};

myRenderer.prototype.drawShape = function (parentGfx, element) {
  var type = element.type;
  var h = this.handlers[type] || this.handlers.default; //console.log('drawShape',type,parentGfx, element);

  /* jshint -W040 */

  return h(parentGfx, element);
};

myRenderer.prototype.drawConnection = function (parentGfx, element) {
  var type = element.type;
  var h = this.handlers[type];
  /* jshint -W040 */

  return h(parentGfx, element);
};

myRenderer.prototype.getShapePath = function (element) {
  if (myRenderer_is(element, 'startEvent') || myRenderer_is(element, 'endEvent')) {
    return getCirclePath(element);
  }

  if (myRenderer_is(element, 'userTask') || myRenderer_is(element, 'scriptTask') || myRenderer_is(element, 'subprocess')) {
    return getRoundRectPath(element, TASK_BORDER_RADIUS);
  }

  if (myRenderer_is(element, 'gatewayAnd') || myRenderer_is(element, 'gatewayXor') || myRenderer_is(element, 'gatewayInclusive')) {
    return getDiamondPath(element);
  }

  return getRectPath(element);
};
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/util/Text.js




var DEFAULT_BOX_PADDING = 0;

var Text_DEFAULT_LABEL_SIZE = {
  width: 150,
  height: 50
};


function parseAlign(align) {

  var parts = align.split('-');

  return {
    horizontal: parts[0] || 'center',
    vertical: parts[1] || 'top'
  };
}

function parsePadding(padding) {

  if (isObject(padding)) {
    return index_esm_assign({ top: 0, left: 0, right: 0, bottom: 0 }, padding);
  } else {
    return {
      top: padding,
      left: padding,
      right: padding,
      bottom: padding
    };
  }
}

function getTextBBox(text, fakeText) {

  fakeText.textContent = text;

  var textBBox;

  try {
    var bbox,
        emptyLine = text === '';

    // add dummy text, when line is empty to
    // determine correct height
    fakeText.textContent = emptyLine ? 'dummy' : text;

    textBBox = fakeText.getBBox();

    // take text rendering related horizontal
    // padding into account
    bbox = {
      width: textBBox.width + textBBox.x * 2,
      height: textBBox.height
    };

    if (emptyLine) {

      // correct width
      bbox.width = 0;
    }

    return bbox;
  } catch (e) {
    return { width: 0, height: 0 };
  }
}


/**
 * Layout the next line and return the layouted element.
 *
 * Alters the lines passed.
 *
 * @param  {Array<string>} lines
 * @return {Object} the line descriptor, an object { width, height, text }
 */
function layoutNext(lines, maxWidth, fakeText) {

  var originalLine = lines.shift(),
      fitLine = originalLine;

  var textBBox;

  for (;;) {
    textBBox = getTextBBox(fitLine, fakeText);

    textBBox.width = fitLine ? textBBox.width : 0;

    // try to fit
    if (fitLine === ' ' || fitLine === '' || textBBox.width < Math.round(maxWidth) || fitLine.length < 2) {
      return fit(lines, fitLine, originalLine, textBBox);
    }

    fitLine = shortenLine(fitLine, textBBox.width, maxWidth);
  }
}

function fit(lines, fitLine, originalLine, textBBox) {
  if (fitLine.length < originalLine.length) {
    var remainder = originalLine.slice(fitLine.length).trim();

    lines.unshift(remainder);
  }

  return {
    width: textBBox.width,
    height: textBBox.height,
    text: fitLine
  };
}


/**
 * Shortens a line based on spacing and hyphens.
 * Returns the shortened result on success.
 *
 * @param  {string} line
 * @param  {number} maxLength the maximum characters of the string
 * @return {string} the shortened string
 */
function semanticShorten(line, maxLength) {
  var parts = line.split(/(\s|-)/g),
      part,
      shortenedParts = [],
      length = 0;

  // try to shorten via spaces + hyphens
  if (parts.length > 1) {
    while ((part = parts.shift())) {
      if (part.length + length < maxLength) {
        shortenedParts.push(part);
        length += part.length;
      } else {

        // remove previous part, too if hyphen does not fit anymore
        if (part === '-') {
          shortenedParts.pop();
        }

        break;
      }
    }
  }

  return shortenedParts.join('');
}


function shortenLine(line, width, maxWidth) {
  var length = Math.max(line.length * (maxWidth / width), 1);

  // try to shorten semantically (i.e. based on spaces and hyphens)
  var shortenedLine = semanticShorten(line, length);

  if (!shortenedLine) {

    // force shorten by cutting the long word
    shortenedLine = line.slice(0, Math.max(Math.round(length - 1), 1));
  }

  return shortenedLine;
}


function getHelperSvg() {
  var helperSvg = document.getElementById('helper-svg');

  if (!helperSvg) {
    helperSvg = index_esm_create('svg');

    index_esm_attr(helperSvg, {
      id: 'helper-svg',
      width: 0,
      height: 0,
      style: 'visibility: hidden; position: fixed'
    });

    document.body.appendChild(helperSvg);
  }

  return helperSvg;
}


/**
 * Creates a new label utility
 *
 * @param {Object} config
 * @param {Dimensions} config.size
 * @param {number} config.padding
 * @param {Object} config.style
 * @param {string} config.align
 */
function Text(config) {

  this._config = index_esm_assign({}, {
    size: Text_DEFAULT_LABEL_SIZE,
    padding: DEFAULT_BOX_PADDING,
    style: {},
    align: 'center-top'
  }, config || {});
}

/**
 * Returns the layouted text as an SVG element.
 *
 * @param {string} text
 * @param {Object} options
 *
 * @return {SVGElement}
 */
Text.prototype.createText = function(text, options) {
  return this.layoutText(text, options).element;
};

/**
 * Returns a labels layouted dimensions.
 *
 * @param {string} text to layout
 * @param {Object} options
 *
 * @return {Dimensions}
 */
Text.prototype.getDimensions = function(text, options) {
  return this.layoutText(text, options).dimensions;
};

/**
 * Creates and returns a label and its bounding box.
 *
 * @method Text#createText
 *
 * @param {string} text the text to render on the label
 * @param {Object} options
 * @param {string} options.align how to align in the bounding box.
 *                               Any of { 'center-middle', 'center-top' },
 *                               defaults to 'center-top'.
 * @param {string} options.style style to be applied to the text
 * @param {boolean} options.fitBox indicates if box will be recalculated to
 *                                 fit text
 *
 * @return {Object} { element, dimensions }
 */
Text.prototype.layoutText = function(text, options) {
  var box = index_esm_assign({}, this._config.size, options.box),
      style = index_esm_assign({}, this._config.style, options.style),
      align = parseAlign(options.align || this._config.align),
      padding = parsePadding(options.padding !== undefined ? options.padding : this._config.padding),
      fitBox = options.fitBox || false;

  var lineHeight = getLineHeight(style);

  var lines = text.split(/\r?\n/g),
      layouted = [];

  var maxWidth = box.width - padding.left - padding.right;

  // ensure correct rendering by attaching helper text node to invisible SVG
  var helperText = index_esm_create('text');
  index_esm_attr(helperText, { x: 0, y: 0 });
  index_esm_attr(helperText, style);

  var helperSvg = getHelperSvg();

  index_esm_append(helperSvg, helperText);

  while (lines.length) {
    layouted.push(layoutNext(lines, maxWidth, helperText));
  }

  if (align.vertical === 'middle') {
    padding.top = padding.bottom = 0;
  }

  var totalHeight = reduce(layouted, function(sum, line, idx) {
    return sum + (lineHeight || line.height);
  }, 0) + padding.top + padding.bottom;

  var maxLineWidth = reduce(layouted, function(sum, line, idx) {
    return line.width > sum ? line.width : sum;
  }, 0);

  // the y position of the next line
  var y = padding.top;

  if (align.vertical === 'middle') {
    y += (box.height - totalHeight) / 2;
  }

  // magic number initial offset
  y -= (lineHeight || layouted[0].height) / 4;


  var textElement = index_esm_create('text');

  index_esm_attr(textElement, style);

  // layout each line taking into account that parent
  // shape might resize to fit text size
  forEach(layouted, function(line) {

    var x;

    y += (lineHeight || line.height);

    switch (align.horizontal) {
    case 'left':
      x = padding.left;
      break;

    case 'right':
      x = ((fitBox ? maxLineWidth : maxWidth)
        - padding.right - line.width);
      break;

    default:

      // aka center
      x = Math.max((((fitBox ? maxLineWidth : maxWidth)
        - line.width) / 2 + padding.left), 0);
    }

    var tspan = index_esm_create('tspan');
    index_esm_attr(tspan, { x: x, y: y });

    tspan.textContent = line.text;

    index_esm_append(textElement, tspan);
  });

  remove(helperText);

  var dimensions = {
    width: maxLineWidth,
    height: totalHeight
  };

  return {
    dimensions: dimensions,
    element: textElement
  };
};


function getLineHeight(style) {
  if ('fontSize' in style && 'lineHeight' in style) {
    return style.lineHeight * parseInt(style.fontSize, 10);
  }
}
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/draw/textRenderer.js


var DEFAULT_FONT_SIZE = 12;
var LINE_HEIGHT_RATIO = 1.2;
var MIN_TEXT_ANNOTATION_HEIGHT = 30;
function textRenderer_textRenderer(config) {
  var defaultStyle = index_esm_assign({
    fontFamily: 'Arial, sans-serif',
    fontSize: DEFAULT_FONT_SIZE,
    fontWeight: 'normal',
    lineHeight: LINE_HEIGHT_RATIO
  }, config && config.defaultStyle || {});
  var fontSize = parseInt(defaultStyle.fontSize, 10) - 1;
  var externalStyle = index_esm_assign({}, defaultStyle, {
    fontSize: fontSize
  }, config && config.externalStyle || {});
  var textUtil = new Text({
    style: defaultStyle
  });
  /**
   * Get the new bounds of an externally rendered,
   * layouted label.
   *
   * @param  {Bounds} bounds
   * @param  {string} text
   *
   * @return {Bounds}
   */

  this.getExternalLabelBounds = function (bounds, text) {
    var layoutedDimensions = textUtil.getDimensions(text, {
      box: {
        width: 90,
        height: 30,
        x: bounds.width / 2 + bounds.x,
        y: bounds.height / 2 + bounds.y
      },
      style: externalStyle
    }); // resize label shape to fit label text

    return {
      x: Math.round(bounds.x + bounds.width / 2 - layoutedDimensions.width / 2),
      y: Math.round(bounds.y),
      width: Math.ceil(layoutedDimensions.width),
      height: Math.ceil(layoutedDimensions.height)
    };
  };
  /**
   * Get the new bounds of text annotation.
   *
   * @param  {Bounds} bounds
   * @param  {string} text
   *
   * @return {Bounds}
   */


  this.getTextAnnotationBounds = function (bounds, text) {
    var layoutedDimensions = textUtil.getDimensions(text, {
      box: bounds,
      style: defaultStyle,
      align: 'left-top',
      padding: 5
    });
    return {
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: Math.max(MIN_TEXT_ANNOTATION_HEIGHT, Math.round(layoutedDimensions.height))
    };
  };
  /**
   * Create a layouted text element.
   *
   * @param {string} text
   * @param {Object} [options]
   *
   * @return {SVGElement} rendered text
   */


  this.createText = function (text, options) {
    return textUtil.createText(text, options || {});
  };
  /**
   * Get default text style.
   */


  this.getDefaultStyle = function () {
    return defaultStyle;
  };
  /**
   * Get the external text style.
   */


  this.getExternalStyle = function () {
    return externalStyle;
  };
}
textRenderer_textRenderer.$inject = ['config.textRenderer'];
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("5d58");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("67bb");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js


function typeof_typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj;
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/draw/pathMap.js




function PathMap() {
  /**
   * Contains a map of path elements
   *
   * <h1>Path definition</h1>
   * A parameterized path is defined like this:
   * <pre>
   * 'GATEWAY_PARALLEL': {
   *   d: 'm {mx},{my} {e.x0},0 0,{e.x1} {e.x1},0 0,{e.y0} -{e.x1},0 0,{e.y1} ' +
          '-{e.x0},0 0,-{e.y1} -{e.x1},0 0,-{e.y0} {e.x1},0 z',
   *   height: 17.5,
   *   width:  17.5,
   *   heightElements: [2.5, 7.5],
   *   widthElements: [2.5, 7.5]
   * }
   * </pre>
   * <p>It's important to specify a correct <b>height and width</b> for the path as the scaling
   * is based on the ratio between the specified height and width in this object and the
   * height and width that is set as scale target (Note x,y coordinates will be scaled with
   * individual ratios).</p>
   * <p>The '<b>heightElements</b>' and '<b>widthElements</b>' array must contain the values that will be scaled.
   * The scaling is based on the computed ratios.
   * Coordinates on the y axis should be in the <b>heightElement</b>'s array, they will be scaled using
   * the computed ratio coefficient.
   * In the parameterized path the scaled values can be accessed through the 'e' object in {} brackets.
   *   <ul>
   *    <li>The values for the y axis can be accessed in the path string using {e.y0}, {e.y1}, ....</li>
   *    <li>The values for the x axis can be accessed in the path string using {e.x0}, {e.x1}, ....</li>
   *   </ul>
   *   The numbers x0, x1 respectively y0, y1, ... map to the corresponding array index.
   * </p>
   */
  this.pathMap = {
    'GATEWAY_EXCLUSIVE': {
      d: 'm {mx},{my} {e.x0},{e.y0} {e.x1},{e.y0} {e.x2},0 {e.x4},{e.y2} ' + '{e.x4},{e.y1} {e.x2},0 {e.x1},{e.y3} {e.x0},{e.y3} ' + '{e.x3},0 {e.x5},{e.y1} {e.x5},{e.y2} {e.x3},0 z',
      height: 17.5,
      width: 17.5,
      heightElements: [8.5, 6.5312, -6.5312, -8.5],
      widthElements: [6.5, -6.5, 3, -3, 5, -5]
    },
    'GATEWAY_PARALLEL': {
      d: 'm {mx},{my} 0,{e.y1} -{e.x1},0 0,{e.y0} {e.x1},0 0,{e.y1} {e.x0},0 ' + '0,-{e.y1} {e.x1},0 0,-{e.y0} -{e.x1},0 0,-{e.y1} -{e.x0},0 z',
      height: 30,
      width: 30,
      heightElements: [5, 12.5],
      widthElements: [5, 12.5]
    },
    'TEXT_ANNOTATION': {
      d: 'm {mx}, {my} m 10,0 l -10,0 l 0,{e.y0} l 10,0',
      height: 30,
      width: 10,
      heightElements: [30],
      widthElements: [10]
    },
    'MARKER_SUB_PROCESS': {
      d: 'm{mx},{my} m 7,2 l 0,10 m -5,-5 l 10,0',
      height: 10,
      width: 10,
      heightElements: [],
      widthElements: []
    },
    'TASK_TYPE_SCRIPT': {
      d: 'm {mx},{my} c 9.966553,-6.27276 -8.000926,-7.91932 2.968968,-14.938 l -8.802728,0 ' + 'c -10.969894,7.01868 6.997585,8.66524 -2.968967,14.938 z ' + 'm -7,-12 l 5,0 ' + 'm -4.5,3 l 4.5,0 ' + 'm -3,3 l 5,0' + 'm -4,3 l 5,0',
      height: 15,
      width: 12.6,
      heightElements: [6, 14],
      widthElements: [10.5, 21]
    },
    'TASK_TYPE_USER_1': {
      d: 'm {mx},{my} c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 ' + '-4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 ' + '0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 ' + 'h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 z' + 'm -8,6 l 0,5.5 m 11,0 l 0,-5'
    },
    'TASK_TYPE_USER_2': {
      d: 'm {mx},{my} m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 ' + '-2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 '
    },
    'TASK_TYPE_USER_3': {
      d: 'm {mx},{my} m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 ' + '4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 ' + '-4.20799998,3.36699999 -4.20699998,4.34799999 z'
    }
  };

  this.getRawPath = function getRawPath(pathId) {
    return this.pathMap[pathId].d;
  };
  /**
   * Scales the path to the given height and width.
   * <h1>Use case</h1>
   * <p>Use case is to scale the content of elements (event, gateways) based
   * on the element bounding box's size.
   * </p>
   * <h1>Why not transform</h1>
   * <p>Scaling a path with transform() will also scale the stroke and IE does not support
   * the option 'non-scaling-stroke' to prevent this.
   * Also there are use cases where only some parts of a path should be
   * scaled.</p>
   *
   * @param {string} pathId The ID of the path.
   * @param {Object} param <p>
   *   Example param object scales the path to 60% size of the container (data.width, data.height).
   *   <pre>
   *   {
   *     xScaleFactor: 0.6,
   *     yScaleFactor:0.6,
   *     containerWidth: data.width,
   *     containerHeight: data.height,
   *     position: {
   *       mx: 0.46,
   *       my: 0.2,
   *     }
   *   }
   *   </pre>
   *   <ul>
   *    <li>targetpathwidth = xScaleFactor * containerWidth</li>
   *    <li>targetpathheight = yScaleFactor * containerHeight</li>
   *    <li>Position is used to set the starting coordinate of the path. M is computed:
    *    <ul>
    *      <li>position.x * containerWidth</li>
    *      <li>position.y * containerHeight</li>
    *    </ul>
    *    Center of the container <pre> position: {
   *       mx: 0.5,
   *       my: 0.5,
   *     }</pre>
   *     Upper left corner of the container
   *     <pre> position: {
   *       mx: 0.0,
   *       my: 0.0,
   *     }</pre>
   *    </li>
   *   </ul>
   * </p>
   *
   */


  this.getScaledPath = function getScaledPath(pathId, param) {
    var mx, my;

    if (param.abspos) {
      mx = param.abspos.x;
      my = param.abspos.y;
    } else {
      mx = param.containerWidth * param.position.mx;
      my = param.containerHeight * param.position.my;
    }

    var rawPath = {};

    if (typeof_typeof(pathId) == 'object') {
      rawPath = pathId;

      if (rawPath.d.indexOf('{mx},{my}') == -1) {
        rawPath.d = "m {mx},{my}" + rawPath.d;
      }

      if (rawPath.width) {
        mx = mx - rawPath.width / 2;
      }

      if (rawPath.height) {
        my = my - rawPath.height / 2;
      }
    } else {
      rawPath = this.pathMap[pathId];
    } // positioning
    // compute the start point of the path


    var coordinates = {}; // map for the scaled coordinates

    if (param.position) {
      // path
      var heightRatio = param.containerHeight / rawPath.height * param.yScaleFactor;
      var widthRatio = param.containerWidth / rawPath.width * param.xScaleFactor; // Apply height ratio

      for (var heightIndex = 0; heightIndex < rawPath.heightElements.length; heightIndex++) {
        coordinates['y' + heightIndex] = rawPath.heightElements[heightIndex] * heightRatio;
      } // Apply width ratio


      for (var widthIndex = 0; widthIndex < rawPath.widthElements.length; widthIndex++) {
        coordinates['x' + widthIndex] = rawPath.widthElements[widthIndex] * widthRatio;
      }
    } // Apply value to raw path


    var path = format(rawPath.d, {
      mx: mx,
      my: my,
      e: coordinates
    });
    return path;
  };
} // helpers //////////////////////
// copied from https://github.com/adobe-webplatform/Snap.svg/blob/master/src/svg.js

var tokenRegex = /\{([^}]+)\}/g,
    objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g; // matches .xxxxx or ["xxxxx"] to run over object properties

function replacer(all, key, obj) {
  var res = obj;
  key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
    name = name || quotedName;

    if (res) {
      if (name in res) {
        res = res[name];
      }

      typeof res == 'function' && isFunc && (res = res());
    }
  });
  res = (res == null || res == obj ? all : res) + '';
  return res;
}

function format(str, obj) {
  return String(str).replace(tokenRegex, function (all, key) {
    return replacer(all, key, obj);
  });
}
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/draw/index.js



/* harmony default export */ var modules_draw = ({
  __init__: ['myRenderer'],
  myRenderer: ['type', myRenderer],
  textRenderer: ['type', textRenderer_textRenderer],
  pathMap: ['type', PathMap]
});
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/change-support/ChangeSupport.js


/**
 * Adds change support to the diagram, including
 *
 * <ul>
 *   <li>redrawing shapes and connections on change</li>
 * </ul>
 *
 * @param {EventBus} eventBus
 * @param {Canvas} canvas
 * @param {ElementRegistry} elementRegistry
 * @param {GraphicsFactory} graphicsFactory
 */
function ChangeSupport(
    eventBus, canvas, elementRegistry,
    graphicsFactory) {


  // redraw shapes / connections on change

  eventBus.on('element.changed', function(event) {

    var element = event.element;

    // element might have been deleted and replaced by new element with same ID
    // thus check for parent of element except for root element
    if (element.parent || element === canvas.getRootElement()) {
      event.gfx = elementRegistry.getGraphics(element);
    }

    // shape + gfx may have been deleted
    if (!event.gfx) {
      return;
    }

    eventBus.fire(getType(element) + '.changed', event);
  });

  eventBus.on('elements.changed', function(event) {

    var elements = event.elements;

    elements.forEach(function(e) {
      eventBus.fire('element.changed', { element: e });
    });

    graphicsFactory.updateContainments(elements);
  });

  eventBus.on('shape.changed', function(event) {
    graphicsFactory.update('shape', event.element, event.gfx);
  });

  eventBus.on('connection.changed', function(event) {
    graphicsFactory.update('connection', event.element, event.gfx);
  });
}

ChangeSupport.$inject = [
  'eventBus',
  'canvas',
  'elementRegistry',
  'graphicsFactory'
];
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/change-support/index.js


/* harmony default export */ var change_support = ({
  __init__: [ 'changeSupport'],
  changeSupport: [ 'type', ChangeSupport ]
});
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/resize/ResizeUtil.js


var ResizeUtil_max = Math.max,
    min = Math.min;

var DEFAULT_CHILD_BOX_PADDING = 20;






/**
 * Substract a TRBL from another
 *
 * @param  {TRBL} trblA
 * @param  {TRBL} trblB
 *
 * @return {TRBL}
 */
function substractTRBL(trblA, trblB) {
  return {
    top: trblA.top - trblB.top,
    right: trblA.right - trblB.right,
    bottom: trblA.bottom - trblB.bottom,
    left: trblA.left - trblB.left
  };
}

/**
 * Resize the given bounds by the specified delta from a given anchor point.
 *
 * @param {Bounds} bounds the bounding box that should be resized
 * @param {string} direction in which the element is resized (nw, ne, se, sw)
 * @param {Point} delta of the resize operation
 *
 * @return {Bounds} resized bounding box
 */
function ResizeUtil_resizeBounds(bounds, direction, delta) {
  var dx = delta.x,
      dy = delta.y;

  var newBounds = {
    x: bounds.x,
    y: bounds.y,
    width: bounds.width,
    height: bounds.height
  };

  if (direction.indexOf('n') !== -1) {
    newBounds.y = bounds.y + dy;
    newBounds.height = bounds.height - dy;
  } else if (direction.indexOf('s') !== -1) {
    newBounds.height = bounds.height + dy;
  }

  if (direction.indexOf('e') !== -1) {
    newBounds.width = bounds.width + dx;
  } else if (direction.indexOf('w') !== -1) {
    newBounds.x = bounds.x + dx;
    newBounds.width = bounds.width - dx;
  }

  return newBounds;
}


/**
 * Resize the given bounds by applying the passed
 * { top, right, bottom, left } delta.
 *
 * @param {Bounds} bounds
 * @param {TRBL} trblResize
 *
 * @return {Bounds}
 */
function resizeTRBL(bounds, resize) {
  return {
    x: bounds.x + (resize.left || 0),
    y: bounds.y + (resize.top || 0),
    width: bounds.width - (resize.left || 0) + (resize.right || 0),
    height: bounds.height - (resize.top || 0) + (resize.bottom || 0)
  };
}


function reattachPoint(bounds, newBounds, point) {

  var sx = bounds.width / newBounds.width,
      sy = bounds.height / newBounds.height;

  return {
    x: Math.round((newBounds.x + newBounds.width / 2)) - Math.floor(((bounds.x + bounds.width / 2) - point.x) / sx),
    y: Math.round((newBounds.y + newBounds.height / 2)) - Math.floor(((bounds.y + bounds.height / 2) - point.y) / sy)
  };
}


function applyConstraints(attr, trbl, resizeConstraints) {

  var value = trbl[attr],
      minValue = resizeConstraints.min && resizeConstraints.min[attr],
      maxValue = resizeConstraints.max && resizeConstraints.max[attr];

  if (isNumber(minValue)) {
    value = (/top|left/.test(attr) ? min : ResizeUtil_max)(value, minValue);
  }

  if (isNumber(maxValue)) {
    value = (/top|left/.test(attr) ? ResizeUtil_max : min)(value, maxValue);
  }

  return value;
}

function ResizeUtil_ensureConstraints(currentBounds, resizeConstraints) {

  if (!resizeConstraints) {
    return currentBounds;
  }

  var currentTrbl = asTRBL(currentBounds);

  return asBounds({
    top: applyConstraints('top', currentTrbl, resizeConstraints),
    right: applyConstraints('right', currentTrbl, resizeConstraints),
    bottom: applyConstraints('bottom', currentTrbl, resizeConstraints),
    left: applyConstraints('left', currentTrbl, resizeConstraints)
  });
}


function getMinResizeBounds(direction, currentBounds, minDimensions, childrenBounds) {

  var currentBox = asTRBL(currentBounds);

  var minBox = {
    top: /n/.test(direction) ? currentBox.bottom - minDimensions.height : currentBox.top,
    left: /w/.test(direction) ? currentBox.right - minDimensions.width : currentBox.left,
    bottom: /s/.test(direction) ? currentBox.top + minDimensions.height : currentBox.bottom,
    right: /e/.test(direction) ? currentBox.left + minDimensions.width : currentBox.right
  };

  var childrenBox = childrenBounds ? asTRBL(childrenBounds) : minBox;

  var combinedBox = {
    top: min(minBox.top, childrenBox.top),
    left: min(minBox.left, childrenBox.left),
    bottom: ResizeUtil_max(minBox.bottom, childrenBox.bottom),
    right: ResizeUtil_max(minBox.right, childrenBox.right)
  };

  return asBounds(combinedBox);
}

function asPadding(mayBePadding, defaultValue) {
  if (typeof mayBePadding !== 'undefined') {
    return mayBePadding;
  } else {
    return DEFAULT_CHILD_BOX_PADDING;
  }
}

function addPadding(bbox, padding) {
  var left, right, top, bottom;

  if (typeof padding === 'object') {
    left = asPadding(padding.left);
    right = asPadding(padding.right);
    top = asPadding(padding.top);
    bottom = asPadding(padding.bottom);
  } else {
    left = right = top = bottom = asPadding(padding);
  }

  return {
    x: bbox.x - left,
    y: bbox.y - top,
    width: bbox.width + left + right,
    height: bbox.height + top + bottom
  };
}


/**
 * Is the given element part of the resize
 * targets min boundary box?
 *
 * This is the default implementation which excludes
 * connections and labels.
 *
 * @param {djs.model.Base} element
 */
function isBBoxChild(element) {

  // exclude connections
  if (element.waypoints) {
    return false;
  }

  // exclude labels
  if (element.type === 'label') {
    return false;
  }

  return true;
}

/**
 * Return children bounding computed from a shapes children
 * or a list of prefiltered children.
 *
 * @param  {djs.model.Shape|Array<djs.model.Shape>} shapeOrChildren
 * @param  {number|Object} padding
 *
 * @return {Bounds}
 */
function computeChildrenBBox(shapeOrChildren, padding) {

  var elements;

  // compute based on shape
  if (shapeOrChildren.length === undefined) {

    // grab all the children that are part of the
    // parents children box
    elements = index_esm_filter(shapeOrChildren.children, isBBoxChild);

  } else {
    elements = shapeOrChildren;
  }

  if (elements.length) {
    return addPadding(getBBox(elements), padding);
  }
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/resize/Resize.js






var DEFAULT_MIN_WIDTH = 10;


/**
 * A component that provides resizing of shapes on the canvas.
 *
 * The following components are part of shape resize:
 *
 *  * adding resize handles,
 *  * creating a visual during resize
 *  * checking resize rules
 *  * committing a change once finished
 *
 *
 * ## Customizing
 *
 * It's possible to customize the resizing behaviour by intercepting 'resize.start'
 * and providing the following parameters through the 'context':
 *
 *   * minDimensions ({ width, height }): minimum shape dimensions
 *
 *   * childrenBoxPadding ({ left, top, bottom, right } || number):
 *     gap between the minimum bounding box and the container
 *
 * f.ex:
 *
 * ```javascript
 * eventBus.on('resize.start', 1500, function(event) {
 *   var context = event.context,
 *
 *  context.minDimensions = { width: 140, height: 120 };
 *
 *  // Passing general padding
 *  context.childrenBoxPadding = 30;
 *
 *  // Passing padding to a specific side
 *  context.childrenBoxPadding.left = 20;
 * });
 * ```
 */
function Resize(eventBus, rules, modeling, dragging) {

  this._dragging = dragging;
  this._rules = rules;

  var self = this;


  /**
   * Handle resize move by specified delta.
   *
   * @param {Object} context
   * @param {Point} delta
   */
  function handleMove(context, delta) {

    var shape = context.shape,
        direction = context.direction,
        resizeConstraints = context.resizeConstraints,
        newBounds;

    context.delta = delta;

    newBounds = ResizeUtil_resizeBounds(shape, direction, delta);

    // ensure constraints during resize
    context.newBounds = ResizeUtil_ensureConstraints(newBounds, resizeConstraints);

    // update + cache executable state
    context.canExecute = self.canResize(context);
  }

  /**
   * Handle resize start.
   *
   * @param  {Object} context
   */
  function handleStart(context) {

    var resizeConstraints = context.resizeConstraints,

        // evaluate minBounds for backwards compatibility
        minBounds = context.minBounds;

    if (resizeConstraints !== undefined) {
      return;
    }

    if (minBounds === undefined) {
      minBounds = self.computeMinResizeBox(context);
    }

    context.resizeConstraints = {
      min: asTRBL(minBounds)
    };
  }

  /**
   * Handle resize end.
   *
   * @param  {Object} context
   */
  function handleEnd(context) {
    var shape = context.shape,
        canExecute = context.canExecute,
        newBounds = context.newBounds;

    if (canExecute) {

      // ensure we have actual pixel values for new bounds
      // (important when zoom level was > 1 during move)
      newBounds = roundBounds(newBounds);

      if (!boundsChanged(shape, newBounds)) {

        // no resize necessary
        return;
      }

      // perform the actual resize
      modeling.resizeShape(shape, newBounds);
    }
  }


  eventBus.on('resize.start', function(event) {
    handleStart(event.context);
  });

  eventBus.on('resize.move', function(event) {
    var delta = {
      x: event.dx,
      y: event.dy
    };

    handleMove(event.context, delta);
  });

  eventBus.on('resize.end', function(event) {
    handleEnd(event.context);
  });

}


Resize.prototype.canResize = function(context) {
  var rules = this._rules;

  var ctx = pick(context, [ 'newBounds', 'shape', 'delta', 'direction' ]);

  return rules.allowed('shape.resize', ctx);
};

/**
 * Activate a resize operation.
 *
 * You may specify additional contextual information and must specify a
 * resize direction during activation of the resize event.
 *
 * @param {MouseEvent} event
 * @param {djs.model.Shape} shape
 * @param {Object|string} contextOrDirection
 */
Resize.prototype.activate = function(event, shape, contextOrDirection) {
  var dragging = this._dragging,
      context,
      direction;

  if (typeof contextOrDirection === 'string') {
    contextOrDirection = {
      direction: contextOrDirection
    };
  }

  context = index_esm_assign({ shape: shape }, contextOrDirection);

  direction = context.direction;

  if (!direction) {
    throw new Error('must provide a direction (n|w|s|e|nw|se|ne|sw)');
  }

  dragging.init(event, getReferencePoint(shape, direction), 'resize', {
    autoActivate: true,
    cursor: getCursor(direction),
    data: {
      shape: shape,
      context: context
    }
  });
};

Resize.prototype.computeMinResizeBox = function(context) {
  var shape = context.shape,
      direction = context.direction,
      minDimensions,
      childrenBounds;

  minDimensions = context.minDimensions || {
    width: DEFAULT_MIN_WIDTH,
    height: DEFAULT_MIN_WIDTH
  };

  // get children bounds
  childrenBounds = computeChildrenBBox(shape, context.childrenBoxPadding);

  // get correct minimum bounds from given resize direction
  // basically ensures that the minBounds is max(childrenBounds, minDimensions)
  return getMinResizeBounds(direction, shape, minDimensions, childrenBounds);
};


Resize.$inject = [
  'eventBus',
  'rules',
  'modeling',
  'dragging'
];

// helpers //////////

function boundsChanged(shape, newBounds) {
  return shape.x !== newBounds.x ||
    shape.y !== newBounds.y ||
    shape.width !== newBounds.width ||
    shape.height !== newBounds.height;
}

function getReferencePoint(shape, direction) {
  var mid = getMid(shape),
      trbl = asTRBL(shape);

  var referencePoint = {
    x: mid.x,
    y: mid.y
  };

  if (direction.indexOf('n') !== -1) {
    referencePoint.y = trbl.top;
  } else if (direction.indexOf('s') !== -1) {
    referencePoint.y = trbl.bottom;
  }

  if (direction.indexOf('e') !== -1) {
    referencePoint.x = trbl.right;
  } else if (direction.indexOf('w') !== -1) {
    referencePoint.x = trbl.left;
  }

  return referencePoint;
}

function getCursor(direction) {
  var prefix = 'resize-';

  if (direction === 'n' || direction === 's') {
    return prefix + 'ns';
  } else if (direction === 'e' || direction === 'w') {
    return prefix + 'ew';
  } else if (direction === 'nw' || direction === 'se') {
    return prefix + 'nwse';
  } else {
    return prefix + 'nesw';
  }
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/resize/ResizePreview.js
var MARKER_RESIZING = 'djs-resizing',
    MARKER_RESIZE_NOT_OK = 'resize-not-ok';

var ResizePreview_LOW_PRIORITY = 500;




/**
 * Provides previews for resizing shapes when resizing.
 *
 * @param {EventBus} eventBus
 * @param {Canvas} canvas
 * @param {PreviewSupport} previewSupport
 */
function ResizePreview(eventBus, canvas, previewSupport) {

  /**
   * Update resizer frame.
   *
   * @param {Object} context
   */
  function updateFrame(context) {

    var shape = context.shape,
        bounds = context.newBounds,
        frame = context.frame;

    if (!frame) {
      frame = context.frame = previewSupport.addFrame(shape, canvas.getDefaultLayer());

      canvas.addMarker(shape, MARKER_RESIZING);
    }

    if (bounds.width > 5) {
      index_esm_attr(frame, { x: bounds.x, width: bounds.width });
    }

    if (bounds.height > 5) {
      index_esm_attr(frame, { y: bounds.y, height: bounds.height });
    }

    if (context.canExecute) {
      index_esm_classes(frame).remove(MARKER_RESIZE_NOT_OK);
    } else {
      index_esm_classes(frame).add(MARKER_RESIZE_NOT_OK);
    }
  }

  /**
   * Remove resizer frame.
   *
   * @param {Object} context
   */
  function removeFrame(context) {
    var shape = context.shape,
        frame = context.frame;

    if (frame) {
      remove(context.frame);
    }

    canvas.removeMarker(shape, MARKER_RESIZING);
  }

  // add and update previews
  eventBus.on('resize.move', ResizePreview_LOW_PRIORITY, function(event) {
    updateFrame(event.context);
  });

  // remove previews
  eventBus.on('resize.cleanup', function(event) {
    removeFrame(event.context);
  });

}

ResizePreview.$inject = [
  'eventBus',
  'canvas',
  'previewSupport'
];
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/resize/ResizeHandles.js












var HANDLE_OFFSET = -6,
    HANDLE_SIZE = 4,
    HANDLE_HIT_SIZE = 20;

var CLS_RESIZER = 'djs-resizer';

var ResizeHandles_directions = [ 'n', 'w', 's', 'e', 'nw', 'ne', 'se', 'sw' ];


/**
 * This component is responsible for adding resize handles.
 *
 * @param {EventBus} eventBus
 * @param {Canvas} canvas
 * @param {Selection} selection
 * @param {Resize} resize
 */
function ResizeHandles(eventBus, canvas, selection, resize) {

  this._resize = resize;
  this._canvas = canvas;

  var self = this;

  eventBus.on('selection.changed', function(e) {
    var newSelection = e.newSelection;

    // remove old selection markers
    self.removeResizers();

    // add new selection markers ONLY if single selection
    if (newSelection.length === 1) {
      forEach(newSelection, bind(self.addResizer, self));
    }
  });

  eventBus.on('shape.changed', function(e) {
    var shape = e.element;

    if (selection.isSelected(shape)) {
      self.removeResizers();

      self.addResizer(shape);
    }
  });
}


ResizeHandles.prototype.makeDraggable = function(element, gfx, direction) {
  var resize = this._resize;

  function startResize(event) {

    // only trigger on left mouse button
    if (isPrimaryButton(event)) {
      resize.activate(event, element, direction);
    }
  }

  componentEvent.bind(gfx, 'mousedown', startResize);
  componentEvent.bind(gfx, 'touchstart', startResize);
};


ResizeHandles.prototype._createResizer = function(element, x, y, direction) {
  var resizersParent = this._getResizersParent();

  var offset = getHandleOffset(direction);

  var group = index_esm_create('g');

  index_esm_classes(group).add(CLS_RESIZER);
  index_esm_classes(group).add(CLS_RESIZER + '-' + element.id);
  index_esm_classes(group).add(CLS_RESIZER + '-' + direction);

  index_esm_append(resizersParent, group);

  var visual = index_esm_create('rect');

  index_esm_attr(visual, {
    x: -HANDLE_SIZE / 2 + offset.x,
    y: -HANDLE_SIZE / 2 + offset.y,
    width: HANDLE_SIZE,
    height: HANDLE_SIZE
  });

  index_esm_classes(visual).add(CLS_RESIZER + '-visual');

  index_esm_append(group, visual);

  var hit = index_esm_create('rect');

  index_esm_attr(hit, {
    x: -HANDLE_HIT_SIZE / 2 + offset.x,
    y: -HANDLE_HIT_SIZE / 2 + offset.y,
    width: HANDLE_HIT_SIZE,
    height: HANDLE_HIT_SIZE
  });

  index_esm_classes(hit).add(CLS_RESIZER + '-hit');

  index_esm_append(group, hit);

  SvgTransformUtil_transform(group, x, y);

  return group;
};

ResizeHandles.prototype.createResizer = function(element, direction) {
  var point = getReferencePoint(element, direction);

  var resizer = this._createResizer(element, point.x, point.y, direction);

  this.makeDraggable(element, resizer, direction);
};

// resize handles implementation ///////////////////////////////

/**
 * Add resizers for a given element.
 *
 * @param {djs.model.Shape} shape
 */
ResizeHandles.prototype.addResizer = function(shape) {
  var self = this;

  var resize = this._resize;

  if (!resize.canResize({ shape: shape })) {
    return;
  }

  forEach(ResizeHandles_directions, function(direction) {
    self.createResizer(shape, direction);
  });
};

/**
 * Remove all resizers
 */
ResizeHandles.prototype.removeResizers = function() {
  var resizersParent = this._getResizersParent();

  clear(resizersParent);
};

ResizeHandles.prototype._getResizersParent = function() {
  return this._canvas.getLayer('resizers');
};

ResizeHandles.$inject = [
  'eventBus',
  'canvas',
  'selection',
  'resize'
];

// helpers //////////

function getHandleOffset(direction) {
  var offset = {
    x: 0,
    y: 0
  };

  if (direction.indexOf('e') !== -1) {
    offset.x = -HANDLE_OFFSET;
  } else if (direction.indexOf('w') !== -1) {
    offset.x = HANDLE_OFFSET;
  }

  if (direction.indexOf('s') !== -1) {
    offset.y = -HANDLE_OFFSET;
  } else if (direction.indexOf('n') !== -1) {
    offset.y = HANDLE_OFFSET;
  }

  return offset;
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/resize/index.js








/* harmony default export */ var features_resize = ({
  __depends__: [
    features_rules,
    features_dragging,
    preview_support
  ],
  __init__: [
    'resize',
    'resizePreview',
    'resizeHandles'
  ],
  resize: [ 'type', Resize ],
  resizePreview: [ 'type', ResizePreview ],
  resizeHandles: [ 'type', ResizeHandles ]
});

// CONCATENATED MODULE: ./node_modules/diagram-js-direct-editing/lib/TextBox.js




var TextBox_min = Math.min,
    TextBox_max = Math.max;

function TextBox_preventDefault(e) {
  e.preventDefault();
}

function TextBox_stopPropagation(e) {
  e.stopPropagation();
}

function isTextNode(node) {
  return node.nodeType === Node.TEXT_NODE;
}

function toArray(nodeList) {
  return [].slice.call(nodeList);
}

/**
 * Initializes a container for a content editable div.
 *
 * Structure:
 *
 * container
 *   parent
 *     content
 *     resize-handle
 *
 * @param {object} options
 * @param {DOMElement} options.container The DOM element to append the contentContainer to
 * @param {Function} options.keyHandler Handler for key events
 * @param {Function} options.resizeHandler Handler for resize events
 */
function TextBox(options) {
  this.container = options.container;

  this.parent = domify(
    '<div class="djs-direct-editing-parent">' +
      '<div class="djs-direct-editing-content" contenteditable="true"></div>' +
    '</div>'
  );

  this.content = query('[contenteditable]', this.parent);

  this.keyHandler = options.keyHandler || function() {};
  this.resizeHandler = options.resizeHandler || function() {};

  this.autoResize = bind(this.autoResize, this);
  this.handlePaste = bind(this.handlePaste, this);
}


/**
 * Create a text box with the given position, size, style and text content
 *
 * @param {Object} bounds
 * @param {Number} bounds.x absolute x position
 * @param {Number} bounds.y absolute y position
 * @param {Number} [bounds.width] fixed width value
 * @param {Number} [bounds.height] fixed height value
 * @param {Number} [bounds.maxWidth] maximum width value
 * @param {Number} [bounds.maxHeight] maximum height value
 * @param {Number} [bounds.minWidth] minimum width value
 * @param {Number} [bounds.minHeight] minimum height value
 * @param {Object} [style]
 * @param {String} value text content
 *
 * @return {DOMElement} The created content DOM element
 */
TextBox.prototype.create = function(bounds, style, value, options) {
  var self = this;

  var parent = this.parent,
      content = this.content,
      container = this.container;

  options = this.options = options || {};

  style = this.style = style || {};

  var parentStyle = pick(style, [
    'width',
    'height',
    'maxWidth',
    'maxHeight',
    'minWidth',
    'minHeight',
    'left',
    'top',
    'backgroundColor',
    'position',
    'overflow',
    'border',
    'wordWrap',
    'textAlign',
    'outline',
    'transform'
  ]);

  index_esm_assign(parent.style, {
    width: bounds.width + 'px',
    height: bounds.height + 'px',
    maxWidth: bounds.maxWidth + 'px',
    maxHeight: bounds.maxHeight + 'px',
    minWidth: bounds.minWidth + 'px',
    minHeight: bounds.minHeight + 'px',
    left: bounds.x + 'px',
    top: bounds.y + 'px',
    backgroundColor: '#ffffff',
    position: 'absolute',
    overflow: 'visible',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    wordWrap: 'normal',
    textAlign: 'center',
    outline: 'none'
  }, parentStyle);

  var contentStyle = pick(style, [
    'fontFamily',
    'fontSize',
    'fontWeight',
    'lineHeight',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft'
  ]);

  index_esm_assign(content.style, {
    boxSizing: 'border-box',
    width: '100%',
    outline: 'none',
    wordWrap: 'break-word'
  }, contentStyle);

  if (options.centerVertically) {
    index_esm_assign(content.style, {
      position: 'absolute',
      top: '50%',
      transform: 'translate(0, -50%)'
    }, contentStyle);
  }

  content.innerText = value;

  componentEvent.bind(content, 'keydown', this.keyHandler);
  componentEvent.bind(content, 'mousedown', TextBox_stopPropagation);
  componentEvent.bind(content, 'paste', self.handlePaste);

  if (options.autoResize) {
    componentEvent.bind(content, 'input', this.autoResize);
  }

  if (options.resizable) {
    this.resizable(style);
  }

  container.appendChild(parent);

  // set selection to end of text
  this.setSelection(content.lastChild, content.lastChild && content.lastChild.length);

  return parent;
};

/**
 * Intercept paste events to remove formatting from pasted text.
 */
TextBox.prototype.handlePaste = function(e) {
  var options = this.options,
      style = this.style;

  e.preventDefault();

  var text;

  if (e.clipboardData) {

    // Chrome, Firefox, Safari
    text = e.clipboardData.getData('text/plain');
  } else {

    // Internet Explorer
    text = window.clipboardData.getData('Text');
  }

  this.insertText(text);

  if (options.autoResize) {
    var hasResized = this.autoResize(style);

    if (hasResized) {
      this.resizeHandler(hasResized);
    }
  }
};

TextBox.prototype.insertText = function(text) {

  // insertText command not supported by Internet Explorer
  var success = document.execCommand('insertText', false, text);

  if (success) {
    return;
  }

  this._insertTextIE(text);
};

TextBox.prototype._insertTextIE = function(text) {

  // Internet Explorer
  var range = this.getSelection(),
      startContainer = range.startContainer,
      endContainer = range.endContainer,
      startOffset = range.startOffset,
      endOffset = range.endOffset,
      commonAncestorContainer = range.commonAncestorContainer;

  var childNodesArray = toArray(commonAncestorContainer.childNodes);

  var container,
      offset;

  if (isTextNode(commonAncestorContainer)) {
    var containerTextContent = startContainer.textContent;

    startContainer.textContent =
      containerTextContent.substring(0, startOffset)
      + text
      + containerTextContent.substring(endOffset);

    container = startContainer;
    offset = startOffset + text.length;

  } else if (startContainer === this.content && endContainer === this.content) {
    var textNode = document.createTextNode(text);

    this.content.insertBefore(textNode, childNodesArray[startOffset]);

    container = textNode;
    offset = textNode.textContent.length;
  } else {
    var startContainerChildIndex = childNodesArray.indexOf(startContainer),
        endContainerChildIndex = childNodesArray.indexOf(endContainer);

    childNodesArray.forEach(function(childNode, index) {

      if (index === startContainerChildIndex) {
        childNode.textContent =
          startContainer.textContent.substring(0, startOffset) +
          text +
          endContainer.textContent.substring(endOffset);
      } else if (index > startContainerChildIndex && index <= endContainerChildIndex) {
        index_esm_remove(childNode);
      }
    });

    container = startContainer;
    offset = startOffset + text.length;
  }

  if (container && offset !== undefined) {

    // is necessary in Internet Explorer
    setTimeout(function() {
      self.setSelection(container, offset);
    });
  }
};

/**
 * Automatically resize element vertically to fit its content.
 */
TextBox.prototype.autoResize = function() {
  var parent = this.parent,
      content = this.content;

  var fontSize = parseInt(this.style.fontSize) || 12;

  if (content.scrollHeight > parent.offsetHeight ||
      content.scrollHeight < parent.offsetHeight - fontSize) {
    var bounds = parent.getBoundingClientRect();

    var height = content.scrollHeight;
    parent.style.height = height + 'px';

    this.resizeHandler({
      width: bounds.width,
      height: bounds.height,
      dx: 0,
      dy: height - bounds.height
    });
  }
};

/**
 * Make an element resizable by adding a resize handle.
 */
TextBox.prototype.resizable = function() {
  var self = this;

  var parent = this.parent,
      resizeHandle = this.resizeHandle;

  var minWidth = parseInt(this.style.minWidth) || 0,
      minHeight = parseInt(this.style.minHeight) || 0,
      maxWidth = parseInt(this.style.maxWidth) || Infinity,
      maxHeight = parseInt(this.style.maxHeight) || Infinity;

  if (!resizeHandle) {
    resizeHandle = this.resizeHandle = domify(
      '<div class="djs-direct-editing-resize-handle"></div>'
    );

    var startX, startY, startWidth, startHeight;

    var onMouseDown = function(e) {
      TextBox_preventDefault(e);
      TextBox_stopPropagation(e);

      startX = e.clientX;
      startY = e.clientY;

      var bounds = parent.getBoundingClientRect();

      startWidth = bounds.width;
      startHeight = bounds.height;

      componentEvent.bind(document, 'mousemove', onMouseMove);
      componentEvent.bind(document, 'mouseup', onMouseUp);
    };

    var onMouseMove = function(e) {
      TextBox_preventDefault(e);
      TextBox_stopPropagation(e);

      var newWidth = TextBox_min(TextBox_max(startWidth + e.clientX - startX, minWidth), maxWidth);
      var newHeight = TextBox_min(TextBox_max(startHeight + e.clientY - startY, minHeight), maxHeight);

      parent.style.width = newWidth + 'px';
      parent.style.height = newHeight + 'px';

      self.resizeHandler({
        width: startWidth,
        height: startHeight,
        dx: e.clientX - startX,
        dy: e.clientY - startY
      });
    };

    var onMouseUp = function(e) {
      TextBox_preventDefault(e);
      TextBox_stopPropagation(e);

      componentEvent.unbind(document,'mousemove', onMouseMove, false);
      componentEvent.unbind(document, 'mouseup', onMouseUp, false);
    };

    componentEvent.bind(resizeHandle, 'mousedown', onMouseDown);
  }

  index_esm_assign(resizeHandle.style, {
    position: 'absolute',
    bottom: '0px',
    right: '0px',
    cursor: 'nwse-resize',
    width: '0',
    height: '0',
    borderTop: (parseInt(this.style.fontSize) / 4 || 3) + 'px solid transparent',
    borderRight: (parseInt(this.style.fontSize) / 4 || 3) + 'px solid #ccc',
    borderBottom: (parseInt(this.style.fontSize) / 4 || 3) + 'px solid #ccc',
    borderLeft: (parseInt(this.style.fontSize) / 4 || 3) + 'px solid transparent'
  });

  parent.appendChild(resizeHandle);
};


/**
 * Clear content and style of the textbox, unbind listeners and
 * reset CSS style.
 */
TextBox.prototype.destroy = function() {
  var parent = this.parent,
      content = this.content,
      resizeHandle = this.resizeHandle;

  // clear content
  content.innerText = '';

  // clear styles
  parent.removeAttribute('style');
  content.removeAttribute('style');

  componentEvent.unbind(content, 'keydown', this.keyHandler);
  componentEvent.unbind(content, 'mousedown', TextBox_stopPropagation);
  componentEvent.unbind(content, 'input', this.autoResize);
  componentEvent.unbind(content, 'paste', this.handlePaste);

  if (resizeHandle) {
    resizeHandle.removeAttribute('style');

    index_esm_remove(resizeHandle);
  }

  index_esm_remove(parent);
};


TextBox.prototype.getValue = function() {
  return this.content.innerText.trim();
};


TextBox.prototype.getSelection = function() {
  var selection = window.getSelection(),
      range = selection.getRangeAt(0);

  return range;
};


TextBox.prototype.setSelection = function(container, offset) {
  var range = document.createRange();

  if (container === null) {
    range.selectNodeContents(this.content);
  } else {
    range.setStart(container, offset);
    range.setEnd(container, offset);
  }

  var selection = window.getSelection();

  selection.removeAllRanges();
  selection.addRange(range);
};

// CONCATENATED MODULE: ./node_modules/diagram-js-direct-editing/lib/DirectEditing.js





/**
 * A direct editing component that allows users
 * to edit an elements text directly in the diagram
 *
 * @param {EventBus} eventBus the event bus
 */
function DirectEditing(eventBus, canvas) {

  this._eventBus = eventBus;

  this._providers = [];
  this._textbox = new TextBox({
    container: canvas.getContainer(),
    keyHandler: bind(this._handleKey, this),
    resizeHandler: bind(this._handleResize, this)
  });
}

DirectEditing.$inject = [ 'eventBus', 'canvas' ];


/**
 * Register a direct editing provider

 * @param {Object} provider the provider, must expose an #activate(element) method that returns
 *                          an activation context ({ bounds: {x, y, width, height }, text }) if
 *                          direct editing is available for the given element.
 *                          Additionally the provider must expose a #update(element, value) method
 *                          to receive direct editing updates.
 */
DirectEditing.prototype.registerProvider = function(provider) {
  this._providers.push(provider);
};


/**
 * Returns true if direct editing is currently active
 *
 * @return {Boolean}
 */
DirectEditing.prototype.isActive = function() {
  return !!this._active;
};


/**
 * Cancel direct editing, if it is currently active
 */
DirectEditing.prototype.cancel = function() {
  if (!this._active) {
    return;
  }

  this._fire('cancel');
  this.close();
};


DirectEditing.prototype._fire = function(event, context) {
  this._eventBus.fire('directEditing.' + event, context || { active: this._active });
};

DirectEditing.prototype.close = function() {
  this._textbox.destroy();

  this._fire('deactivate');

  this._active = null;

  this.resizable = undefined;
};


DirectEditing.prototype.complete = function() {

  var active = this._active;

  if (!active) {
    return;
  }

  var containerBounds,
      previousBounds = active.context.bounds,
      newBounds = this.$textbox.getBoundingClientRect(),
      newText = this.getValue(),
      previousText = active.context.text;

  if (
    newText !== previousText ||
    newBounds.height !== previousBounds.height ||
    newBounds.width !== previousBounds.width
  ) {
    containerBounds = this._textbox.container.getBoundingClientRect();

    active.provider.update(active.element, newText, active.context.text, {
      x: newBounds.left - containerBounds.left,
      y: newBounds.top - containerBounds.top,
      width: newBounds.width,
      height: newBounds.height
    });
  }

  this._fire('complete');

  this.close();
};


DirectEditing.prototype.getValue = function() {
  return this._textbox.getValue();
};


DirectEditing.prototype._handleKey = function(e) {

  // stop bubble
  e.stopPropagation();

  var key = e.keyCode || e.charCode;

  // ESC
  if (key === 27) {
    e.preventDefault();
    return this.cancel();
  }

  // Enter
  if (key === 13 && !e.shiftKey) {
    e.preventDefault();
    return this.complete();
  }
};


DirectEditing.prototype._handleResize = function(event) {
  this._fire('resize', event);
};


/**
 * Activate direct editing on the given element
 *
 * @param {Object} ElementDescriptor the descriptor for a shape or connection
 * @return {Boolean} true if the activation was possible
 */
DirectEditing.prototype.activate = function(element) {
  if (this.isActive()) {
    this.cancel();
  }

  // the direct editing context
  var context;

  var provider = find(this._providers, function(p) {
    return (context = p.activate(element)) ? p : null;
  });

  // check if activation took place
  if (context) {
    this.$textbox = this._textbox.create(
      context.bounds,
      context.style,
      context.text,
      context.options
    );

    this._active = {
      element: element,
      context: context,
      provider: provider
    };

    if (context.options && context.options.resizable) {
      this.resizable = true;
    }

    this._fire('activate');
  }

  return !!context;
};

// CONCATENATED MODULE: ./node_modules/diagram-js-direct-editing/index.js




/* harmony default export */ var diagram_js_direct_editing = ({
  __depends__: [
    interaction_events
  ],
  __init__: [ 'directEditing' ],
  directEditing: [ 'type', DirectEditing ]
});
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/labelEditing/labelEditingProvider.js




function LabelEditingProvider(eventBus, canvas, directEditing, modeling, resizeHandles, textRenderer) {
  this._canvas = canvas;
  this._modeling = modeling;
  this._textRenderer = textRenderer;
  directEditing.registerProvider(this); // listen to dblclick on non-root elements

  eventBus.on('element.dblclick', function (event) {
    activateDirectEdit(event.element, true);
  }); // complete on followup canvas operation

  eventBus.on(['autoPlace.start', 'canvas.viewbox.changing', 'drag.init', 'element.mousedown', 'popupMenu.open'], function () {
    if (directEditing.isActive()) {
      directEditing.complete();
    }
  }); // cancel on command stack changes

  eventBus.on(['commandStack.changed'], function () {
    if (directEditing.isActive()) {
      directEditing.cancel();
    }
  });
  eventBus.on('directEditing.activate', function () {
    resizeHandles.removeResizers();
  });
  eventBus.on('create.end', 500, function (event) {
    var context = event.context,
        element = context.shape,
        canExecute = event.context.canExecute,
        isTouch = event.isTouch; // TODO(nikku): we need to find a way to support the
    // direct editing on mobile devices; right now this will
    // break for desworkflowediting on mobile devices
    // as it breaks the user interaction workflow
    // TODO(nre): we should temporarily focus the edited element
    // here and release the focused viewport after the direct edit
    // operation is finished

    if (isTouch) {
      return;
    }

    if (!canExecute) {
      return;
    }

    if (context.hints && context.hints.createElementsBehavior === false) {
      return;
    }

    activateDirectEdit(element);
  });
  eventBus.on('autoPlace.end', 500, function (event) {
    activateDirectEdit(event.shape);
  });

  function activateDirectEdit(element, force) {
    if (force || isAny(element, ['userTask', 'scriptTask', 'subprocess']) || element.isDirectEdit) {
      directEditing.activate(element);
    }
  }
}
LabelEditingProvider.$inject = ['eventBus', 'canvas', 'directEditing', 'modeling', 'resizeHandles', 'textRenderer'];
/**
 * Activate direct editing for activities and text annotations.
 *
 * @param  {djs.model.Base} element
 *
 * @return {Object} an object with properties bounds (position and size), text and options
 */

LabelEditingProvider.prototype.activate = function (element) {
  // text
  var text = getLabel(element);

  if (text === undefined) {
    return;
  }

  var context = {
    text: text
  }; // bounds

  var bounds = this.getEditingBBox(element);
  index_esm_assign(context, bounds);
  var options = {}; // tasks

  if (isAny(element, ['userTask', 'scriptTask', 'subprocess']) || element.isDirectEdit) {
    index_esm_assign(options, {
      centerVertically: true
    });
  } // external labels


  if (isLabelExternal(element)) {
    index_esm_assign(options, {
      autoResize: true
    });
  }

  index_esm_assign(context, {
    options: options
  });
  return context;
};
/**
 * Get the editing bounding box based on the element's size and position
 *
 * @param  {djs.model.Base} element
 *
 * @return {Object} an object containing information about position
 *                  and size (fixed or minimum and/or maximum)
 */


LabelEditingProvider.prototype.getEditingBBox = function (element) {
  var canvas = this._canvas;
  var target = element.label || element;
  var bbox = canvas.getAbsoluteBBox(target);
  var mid = {
    x: bbox.x + bbox.width / 2,
    y: bbox.y + bbox.height / 2
  }; // default position

  var bounds = {
    x: bbox.x,
    y: bbox.y
  };
  var zoom = canvas.zoom();

  var defaultStyle = this._textRenderer.getDefaultStyle(),
      externalStyle = this._textRenderer.getExternalStyle(); // take zoom into account


  var externalFontSize = externalStyle.fontSize * zoom,
      externalLineHeight = externalStyle.lineHeight,
      defaultFontSize = defaultStyle.fontSize * zoom,
      defaultLineHeight = defaultStyle.lineHeight;
  var style = {
    fontFamily: this._textRenderer.getDefaultStyle().fontFamily,
    fontWeight: this._textRenderer.getDefaultStyle().fontWeight
  };

  if (isAny(element, ['userTask', 'scriptTask', 'subprocess']) || element.isDirectEdit) {
    index_esm_assign(bounds, {
      width: bbox.width,
      height: bbox.height
    });
    index_esm_assign(style, {
      fontSize: defaultFontSize + 'px',
      lineHeight: defaultLineHeight,
      paddingTop: 7 * zoom + 'px',
      paddingBottom: 7 * zoom + 'px',
      paddingLeft: 5 * zoom + 'px',
      paddingRight: 5 * zoom + 'px'
    });
  }

  var width = 90 * zoom,
      paddingTop = 7 * zoom,
      paddingBottom = 4 * zoom; // external labels for events, data elements, gateways, groups and connections

  if (target.labelTarget) {
    index_esm_assign(bounds, {
      width: width,
      height: bbox.height + paddingTop + paddingBottom,
      x: mid.x - width / 2,
      y: bbox.y - paddingTop
    });
    index_esm_assign(style, {
      fontSize: externalFontSize + 'px',
      lineHeight: externalLineHeight,
      paddingTop: paddingTop + 'px',
      paddingBottom: paddingBottom + 'px'
    });
  } // external label not yet created


  if (isLabelExternal(target) && !hasExternalLabel(target) && !labelUtil_isLabel(target)) {
    var externalLabelMid = getExternalLabelMid(element);
    var absoluteBBox = canvas.getAbsoluteBBox({
      x: externalLabelMid.x,
      y: externalLabelMid.y,
      width: 0,
      height: 0
    });
    var height = externalFontSize + paddingTop + paddingBottom;
    index_esm_assign(bounds, {
      width: width,
      height: height,
      x: absoluteBBox.x - width / 2,
      y: absoluteBBox.y - height / 2
    });
    index_esm_assign(style, {
      fontSize: externalFontSize + 'px',
      lineHeight: externalLineHeight,
      paddingTop: paddingTop + 'px',
      paddingBottom: paddingBottom + 'px'
    });
  }

  return {
    bounds: bounds,
    style: style
  };
};

LabelEditingProvider.prototype.update = function (element, newLabel) {
  var newBounds;

  if (labelEditingProvider_isEmptyText(newLabel)) {
    newLabel = null;
  }

  this._modeling.updateLabel(element, newLabel, newBounds);
}; // helpers //////////////////////


function labelEditingProvider_isEmptyText(label) {
  return !label || !label.trim();
}
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/labelEditing/index.js




/* harmony default export */ var labelEditing = ({
  __depends__: [change_support, features_resize, diagram_js_direct_editing],
  __init__: ['labelEditingProvider'],
  labelEditingProvider: ['type', LabelEditingProvider]
});
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/snapping/SnapContext.js





/**
 * A snap context, containing the (possibly incomplete)
 * mappings of drop targets (to identify the snapping)
 * to computed snap points.
 */
function SnapContext() {

  /**
   * Map<String, SnapPoints> mapping drop targets to
   * a list of possible snappings.
   *
   * @type {Object}
   */
  this._targets = {};

  /**
   * Map<String, Point> initial positioning of element
   * regarding various snap directions.
   *
   * @type {Object}
   */
  this._snapOrigins = {};

  /**
   * List of snap locations
   *
   * @type {Array<string>}
   */
  this._snapLocations = [];

  /**
   * Map<String, Array<Point>> of default snapping locations
   *
   * @type {Object}
   */
  this._defaultSnaps = {};
}


SnapContext.prototype.getSnapOrigin = function(snapLocation) {
  return this._snapOrigins[snapLocation];
};


SnapContext.prototype.setSnapOrigin = function(snapLocation, initialValue) {
  this._snapOrigins[snapLocation] = initialValue;

  if (this._snapLocations.indexOf(snapLocation) === -1) {
    this._snapLocations.push(snapLocation);
  }
};


SnapContext.prototype.addDefaultSnap = function(type, point) {

  var snapValues = this._defaultSnaps[type];

  if (!snapValues) {
    snapValues = this._defaultSnaps[type] = [];
  }

  snapValues.push(point);
};

/**
 * Return a number of initialized snaps, i.e. snap locations such as
 * top-left, mid, bottom-right and so forth.
 *
 * @return {Array<string>} snapLocations
 */
SnapContext.prototype.getSnapLocations = function() {
  return this._snapLocations;
};

/**
 * Set the snap locations for this context.
 *
 * The order of locations determines precedence.
 *
 * @param {Array<string>} snapLocations
 */
SnapContext.prototype.setSnapLocations = function(snapLocations) {
  this._snapLocations = snapLocations;
};

/**
 * Get snap points for a given target
 *
 * @param {Element|string} target
 */
SnapContext.prototype.pointsForTarget = function(target) {

  var targetId = target.id || target;

  var snapPoints = this._targets[targetId];

  if (!snapPoints) {
    snapPoints = this._targets[targetId] = new SnapPoints();
    snapPoints.initDefaults(this._defaultSnaps);
  }

  return snapPoints;
};


/**
 * Creates the snap points and initializes them with the
 * given default values.
 *
 * @param {Object<string, Array<Point>>} [defaultPoints]
 */
function SnapPoints(defaultSnaps) {

  /**
   * Map<String, Map<(x|y), Array<number>>> mapping snap locations,
   * i.e. top-left, bottom-right, center to actual snap values.
   *
   * @type {Object}
   */
  this._snapValues = {};
}

SnapPoints.prototype.add = function(snapLocation, point) {

  var snapValues = this._snapValues[snapLocation];

  if (!snapValues) {
    snapValues = this._snapValues[snapLocation] = { x: [], y: [] };
  }

  if (snapValues.x.indexOf(point.x) === -1) {
    snapValues.x.push(point.x);
  }

  if (snapValues.y.indexOf(point.y) === -1) {
    snapValues.y.push(point.y);
  }
};


SnapPoints.prototype.snap = function(point, snapLocation, axis, tolerance) {
  var snappingValues = this._snapValues[snapLocation];

  return snappingValues && SnapUtil_snapTo(point[axis], snappingValues[axis], tolerance);
};

/**
 * Initialize a number of default snapping points.
 *
 * @param  {Object} defaultSnaps
 */
SnapPoints.prototype.initDefaults = function(defaultSnaps) {

  var self = this;

  forEach(defaultSnaps || {}, function(snapPoints, snapLocation) {
    forEach(snapPoints, function(point) {
      self.add(snapLocation, point);
    });
  });
};
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/snapping/CreateMoveSnapping.js








var HIGHER_PRIORITY = 1250;


/**
 * Snap during create and move.
 *
 * @param {EventBus} elementRegistry
 * @param {EventBus} eventBus
 * @param {Snapping} snapping
 */
function CreateMoveSnapping(elementRegistry, eventBus, snapping) {
  var self = this;

  this._elementRegistry = elementRegistry;

  eventBus.on([
    'create.start',
    'shape.move.start'
  ], function(event) {
    self.initSnap(event);
  });

  eventBus.on([
    'create.move',
    'create.end',
    'shape.move.move',
    'shape.move.end'
  ], HIGHER_PRIORITY, function(event) {
    var context = event.context,
        shape = context.shape,
        snapContext = context.snapContext,
        target = context.target;

    if (event.originalEvent && isCmd(event.originalEvent)) {
      return;
    }

    if (isSnapped(event) || !target) {
      return;
    }

    var snapPoints = snapContext.pointsForTarget(target);

    if (!snapPoints.initialized) {
      snapPoints = self.addSnapTargetPoints(snapPoints, shape, target);

      snapPoints.initialized = true;
    }

    snapping.snap(event, snapPoints);
  });

  eventBus.on([
    'create.cleanup',
    'shape.move.cleanup'
  ], function() {
    snapping.hide();
  });
}

CreateMoveSnapping.$inject = [
  'elementRegistry',
  'eventBus',
  'snapping'
];

CreateMoveSnapping.prototype.initSnap = function(event) {
  var elementRegistry = this._elementRegistry;

  var context = event.context,
      shape = context.shape,
      snapContext = context.snapContext;

  if (!snapContext) {
    snapContext = context.snapContext = new SnapContext();
  }

  var shapeMid;

  if (elementRegistry.get(shape.id)) {

    // move
    shapeMid = SnapUtil_mid(shape, event);
  } else {

    // create
    shapeMid = {
      x: event.x + SnapUtil_mid(shape).x,
      y: event.y + SnapUtil_mid(shape).y
    };
  }

  var shapeTopLeft = {
        x: shapeMid.x - shape.width / 2,
        y: shapeMid.y - shape.height / 2
      },
      shapeBottomRight = {
        x: shapeMid.x + shape.width / 2,
        y: shapeMid.y + shape.height / 2
      };

  snapContext.setSnapOrigin('mid', {
    x: shapeMid.x - event.x,
    y: shapeMid.y - event.y
  });

  // snap labels to mid only
  if (CreateMoveSnapping_isLabel(shape)) {
    return snapContext;
  }

  snapContext.setSnapOrigin('top-left', {
    x: shapeTopLeft.x - event.x,
    y: shapeTopLeft.y - event.y
  });

  snapContext.setSnapOrigin('bottom-right', {
    x: shapeBottomRight.x - event.x,
    y: shapeBottomRight.y - event.y
  });

  return snapContext;
};

CreateMoveSnapping.prototype.addSnapTargetPoints = function(snapPoints, shape, target) {
  var snapTargets = this.getSnapTargets(shape, target);

  forEach(snapTargets, function(snapTarget) {

    // handle labels
    if (CreateMoveSnapping_isLabel(snapTarget)) {

      if (CreateMoveSnapping_isLabel(shape)) {
        snapPoints.add('mid', SnapUtil_mid(snapTarget));
      }

      return;
    }

    // handle connections
    if (CreateMoveSnapping_isConnection(snapTarget)) {

      // ignore single segment connections
      if (snapTarget.waypoints.length < 3) {
        return;
      }

      // ignore first and last waypoint
      var waypoints = snapTarget.waypoints.slice(1, -1);

      forEach(waypoints, function(waypoint) {
        snapPoints.add('mid', waypoint);
      });

      return;
    }

    // handle shapes
    snapPoints.add('mid', SnapUtil_mid(snapTarget));
  });

  if (!isNumber(shape.x) || !isNumber(shape.y)) {
    return snapPoints;
  }

  // snap to original position when moving
  if (this._elementRegistry.get(shape.id)) {
    snapPoints.add('mid', SnapUtil_mid(shape));
  }

  return snapPoints;
};

CreateMoveSnapping.prototype.getSnapTargets = function(shape, target) {
  return SnapUtil_getChildren(target).filter(function(child) {
    return !isHidden(child);
  });
};

// helpers //////////

function CreateMoveSnapping_isConnection(element) {
  return !!element.waypoints;
}

function isHidden(element) {
  return !!element.hidden;
}

function CreateMoveSnapping_isLabel(element) {
  return !!element.labelTarget;
}
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/snapping/myCreateMoveSnapping.js


/**
 * Snap during create and move.
 *
 * @param {EventBus} eventBus
 * @param {Injector} injector
 */

function MyCreateMoveSnapping(injector) {
  injector.invoke(CreateMoveSnapping, this);
}
inherits_browser_default()(MyCreateMoveSnapping, CreateMoveSnapping);
MyCreateMoveSnapping.$inject = ['injector'];

MyCreateMoveSnapping.prototype.initSnap = function (event) {
  return CreateMoveSnapping.prototype.initSnap.call(this, event);
};

MyCreateMoveSnapping.prototype.addSnapTargetPoints = function (snapPoints, shape, target) {
  return CreateMoveSnapping.prototype.addSnapTargetPoints.call(this, snapPoints, shape, target);
};

MyCreateMoveSnapping.prototype.getSnapTargets = function (shape, target) {
  return CreateMoveSnapping.prototype.getSnapTargets.call(this, shape, target);
};
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/snapping/ResizeSnapping.js










var ResizeSnapping_HIGHER_PRIORITY = 1250;


/**
 * Snap during resize.
 *
 * @param {EventBus} eventBus
 * @param {Snapping} snapping
 */
function ResizeSnapping(eventBus, snapping) {
  var self = this;

  eventBus.on([ 'resize.start' ], function(event) {
    self.initSnap(event);
  });

  eventBus.on([
    'resize.move',
    'resize.end',
  ], ResizeSnapping_HIGHER_PRIORITY, function(event) {
    var context = event.context,
        shape = context.shape,
        parent = shape.parent,
        direction = context.direction,
        snapContext = context.snapContext;

    if (event.originalEvent && isCmd(event.originalEvent)) {
      return;
    }

    if (isSnapped(event)) {
      return;
    }

    var snapPoints = snapContext.pointsForTarget(parent);

    if (!snapPoints.initialized) {
      snapPoints = self.addSnapTargetPoints(snapPoints, shape, parent, direction);

      snapPoints.initialized = true;
    }

    if (isHorizontal(direction)) {
      setSnapped(event, 'x', event.x);
    }

    if (isVertical(direction)) {
      setSnapped(event, 'y', event.y);
    }

    snapping.snap(event, snapPoints);
  });

  eventBus.on([ 'resize.cleanup' ], function() {
    snapping.hide();
  });
}

ResizeSnapping.prototype.initSnap = function(event) {
  var context = event.context,
      shape = context.shape,
      direction = context.direction,
      snapContext = context.snapContext;

  if (!snapContext) {
    snapContext = context.snapContext = new SnapContext();
  }

  var snapOrigin = getSnapOrigin(shape, direction);

  snapContext.setSnapOrigin('corner', {
    x: snapOrigin.x - event.x,
    y: snapOrigin.y - event.y
  });

  return snapContext;
};

ResizeSnapping.prototype.addSnapTargetPoints = function(snapPoints, shape, target, direction) {
  var snapTargets = this.getSnapTargets(shape, target);

  forEach(snapTargets, function(snapTarget) {
    snapPoints.add('corner', bottomRight(snapTarget));
    snapPoints.add('corner', topLeft(snapTarget));
  });

  snapPoints.add('corner', getSnapOrigin(shape, direction));

  return snapPoints;
};

ResizeSnapping.$inject = [
  'eventBus',
  'snapping'
];

ResizeSnapping.prototype.getSnapTargets = function(shape, target) {
  return SnapUtil_getChildren(target).filter(function(child) {
    return !isAttached(child, shape)
      && !ResizeSnapping_isConnection(child)
      && !ResizeSnapping_isHidden(child)
      && !ResizeSnapping_isLabel(child);
  });
};

// helpers //////////

function getSnapOrigin(shape, direction) {
  var mid = getMid(shape),
      trbl = asTRBL(shape);

  var snapOrigin = {
    x: mid.x,
    y: mid.y
  };

  if (direction.indexOf('n') !== -1) {
    snapOrigin.y = trbl.top;
  } else if (direction.indexOf('s') !== -1) {
    snapOrigin.y = trbl.bottom;
  }

  if (direction.indexOf('e') !== -1) {
    snapOrigin.x = trbl.right;
  } else if (direction.indexOf('w') !== -1) {
    snapOrigin.x = trbl.left;
  }

  return snapOrigin;
}

function isAttached(element, host) {
  return element.host === host;
}

function ResizeSnapping_isConnection(element) {
  return !!element.waypoints;
}

function ResizeSnapping_isHidden(element) {
  return !!element.hidden;
}

function ResizeSnapping_isLabel(element) {
  return !!element.labelTarget;
}

function isHorizontal(direction) {
  return direction === 'n' || direction === 's';
}

function isVertical(direction) {
  return direction === 'e' || direction === 'w';
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/snapping/Snapping.js






var SNAP_TOLERANCE = 7;

var SNAP_LINE_HIDE_DELAY = 1000;


/**
 * Generic snapping feature.
 *
 * @param {EventBus} eventBus
 * @param {Canvas} canvas
 */
function Snapping(canvas) {
  this._canvas = canvas;

  // delay hide by 1000 seconds since last snap
  this._asyncHide = debounce(bind(this.hide, this), SNAP_LINE_HIDE_DELAY);
}

Snapping.$inject = [ 'canvas' ];

/**
 * Snap an event to given snap points.
 *
 * @param {Event} event
 * @param {SnapPoints} snapPoints
 */
Snapping.prototype.snap = function(event, snapPoints) {
  var context = event.context,
      snapContext = context.snapContext,
      snapLocations = snapContext.getSnapLocations();

  var snapping = {
    x: isSnapped(event, 'x'),
    y: isSnapped(event, 'y')
  };

  forEach(snapLocations, function(location) {
    var snapOrigin = snapContext.getSnapOrigin(location);

    var snapCurrent = {
      x: event.x + snapOrigin.x,
      y: event.y + snapOrigin.y
    };

    // snap both axis if not snapped already
    forEach([ 'x', 'y' ], function(axis) {
      var locationSnapping;

      if (!snapping[axis]) {
        locationSnapping = snapPoints.snap(snapCurrent, location, axis, SNAP_TOLERANCE);

        if (locationSnapping !== undefined) {
          snapping[axis] = {
            value: locationSnapping,
            originValue: locationSnapping - snapOrigin[axis]
          };
        }
      }
    });

    // no need to continue snapping
    if (snapping.x && snapping.y) {
      return false;
    }
  });

  // show snap lines
  this.showSnapLine('vertical', snapping.x && snapping.x.value);
  this.showSnapLine('horizontal', snapping.y && snapping.y.value);

  // snap event
  forEach([ 'x', 'y' ], function(axis) {
    var axisSnapping = snapping[axis];

    if (isObject(axisSnapping)) {
      setSnapped(event, axis, axisSnapping.originValue);
    }
  });
};

Snapping.prototype._createLine = function(orientation) {
  var root = this._canvas.getLayer('snap');

  var line = index_esm_create('path');

  index_esm_attr(line, { d: 'M0,0 L0,0' });

  index_esm_classes(line).add('djs-snap-line');

  index_esm_append(root, line);

  return {
    update: function(position) {

      if (!isNumber(position)) {
        index_esm_attr(line, { display: 'none' });
      } else {
        if (orientation === 'horizontal') {
          index_esm_attr(line, {
            d: 'M-100000,' + position + ' L+100000,' + position,
            display: ''
          });
        } else {
          index_esm_attr(line, {
            d: 'M ' + position + ',-100000 L ' + position + ', +100000',
            display: ''
          });
        }
      }
    }
  };
};

Snapping.prototype._createSnapLines = function() {
  this._snapLines = {
    horizontal: this._createLine('horizontal'),
    vertical: this._createLine('vertical')
  };
};

Snapping.prototype.showSnapLine = function(orientation, position) {

  var line = this.getSnapLine(orientation);

  if (line) {
    line.update(position);
  }

  this._asyncHide();
};

Snapping.prototype.getSnapLine = function(orientation) {
  if (!this._snapLines) {
    this._createSnapLines();
  }

  return this._snapLines[orientation];
};

Snapping.prototype.hide = function() {
  forEach(this._snapLines, function(snapLine) {
    snapLine.update();
  });
};

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/snapping/index.js




/* harmony default export */ var features_snapping = ({
  __init__: [
    'createMoveSnapping',
    'resizeSnapping',
    'snapping'
  ],
  createMoveSnapping: [ 'type', CreateMoveSnapping ],
  resizeSnapping: [ 'type', ResizeSnapping ],
  snapping: [ 'type', Snapping ]
});
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/snapping/index.js


/* harmony default export */ var modules_snapping = ({
  __depends__: [features_snapping],
  __init__: ['createMoveSnapping'],
  createMoveSnapping: ['type', MyCreateMoveSnapping]
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/rules/RuleProvider.js




/**
 * A basic provider that may be extended to implement modeling rules.
 *
 * Extensions should implement the init method to actually add their custom
 * modeling checks. Checks may be added via the #addRule(action, fn) method.
 *
 * @param {EventBus} eventBus
 */
function RuleProvider(eventBus) {
  CommandInterceptor.call(this, eventBus);

  this.init();
}

RuleProvider.$inject = [ 'eventBus' ];

inherits_browser_default()(RuleProvider, CommandInterceptor);


/**
 * Adds a modeling rule for the given action, implemented through
 * a callback function.
 *
 * The function will receive the modeling specific action context
 * to perform its check. It must return `false` to disallow the
 * action from happening or `true` to allow the action.
 *
 * A rule provider may pass over the evaluation to lower priority
 * rules by returning return nothing (or <code>undefined</code>).
 *
 * @example
 *
 * ResizableRules.prototype.init = function() {
 *
 *   \/**
 *    * Return `true`, `false` or nothing to denote
 *    * _allowed_, _not allowed_ and _continue evaluating_.
 *    *\/
 *   this.addRule('shape.resize', function(context) {
 *
 *     var shape = context.shape;
 *
 *     if (!context.newBounds) {
 *       // check general resizability
 *       if (!shape.resizable) {
 *         return false;
 *       }
 *
 *       // not returning anything (read: undefined)
 *       // will continue the evaluation of other rules
 *       // (with lower priority)
 *       return;
 *     } else {
 *       // element must have minimum size of 10*10 points
 *       return context.newBounds.width > 10 && context.newBounds.height > 10;
 *     }
 *   });
 * };
 *
 * @param {string|Array<string>} actions the identifier for the modeling action to check
 * @param {number} [priority] the priority at which this rule is being applied
 * @param {Function} fn the callback function that performs the actual check
 */
RuleProvider.prototype.addRule = function(actions, priority, fn) {

  var self = this;

  if (typeof actions === 'string') {
    actions = [ actions ];
  }

  actions.forEach(function(action) {

    self.canExecute(action, priority, function(context, action, event) {
      return fn(context);
    }, true);
  });
};

/**
 * Implement this method to add new rules during provider initialization.
 */
RuleProvider.prototype.init = function() {};
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/rules/myRuleProvider.js


/* eslint-disable */



function myRuleProvider(eventBus) {
  RuleProvider.call(this, eventBus);
}
myRuleProvider.$inject = ['eventBus'];
inherits_browser_default()(myRuleProvider, RuleProvider);

myRuleProvider.prototype.init = function () {
  this.addRule('connection.start', function (context) {
    var source = context.source;

    if (source && source.type != '' && source.type != undefined && source.type != null) {
      return true;
    }

    return false;
  });
  this.addRule('connection.create', function (context) {
    var source = context.source,
        target = context.target,
        hints = context.hints || {},
        targetParent = hints.targetParent,
        targetAttach = hints.targetAttach; // don't allow incoming connections on
    // newly created boundary events
    // to boundary events

    if (targetAttach) {
      return false;
    } // temporarily set target parent for scoping
    // checks to work


    if (targetParent) {
      target.parent = targetParent;
    }

    try {
      return myRuleProvider_canConnect(source, target);
    } finally {
      // unset temporary target parent
      if (targetParent) {
        target.parent = null;
      }
    }
  });
  this.addRule('connection.reconnect', function (context) {
    var connection = context.connection,
        source = context.source,
        target = context.target;
    return myRuleProvider_canConnect(source, target, connection);
  });
  this.addRule('connection.updateWaypoints', function (context) {
    return {
      type: context.connection.type
    };
  });
  this.addRule('shape.create', function (context) {
    var target = context.target,
        shape = context.shape;

    if (target.parent) {
      target = parent;
    }

    if (shape.type == 'startEvent' && (!target.children || target.children.find(function (t) {
      return t.type == shape.type;
    }) != null)) {
      return false;
    }

    return true;
  });
  this.addRule('shape.resize', function (context) {
    var shape = context.shape;
    return isFrameElement(shape);
  });
};

myRuleProvider.prototype.canConnect = myRuleProvider_canConnect;

function myRuleProvider_canConnect(source, target, connection) {
  /*if(['startEvent','endEvent','gatewayAnd','gatewayXor','gatewayInclusive','gatewayInclusive','userTask','scriptTask','subprocess','setp'].includes(target.type)
    && ['startEvent','gatewayAnd','gatewayXor','gatewayInclusive','gatewayInclusive','userTask','scriptTask','subprocess','setp'].includes(source.type)
  ){*/
  //console.log(target,target.type,'canConnect')
  if (target.type && source.type && 'endEvent' != source.type) {
    if (source.id == target.id) {
      return false;
    }

    return {
      type: 'myline'
    };
  }

  return false;
}
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/rules/index.js

/* harmony default export */ var modules_rules = ({
  __init__: ['myRuleProvider'],
  myRuleProvider: ['type', myRuleProvider]
});
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/palette/paletteProvider.js

function ExamplePaletteProvider(create, elementFactory, handTool, lassoTool, globalConnect, palette, myOptions) {
  this._create = create;
  this._elementFactory = elementFactory;
  this._handTool = handTool;
  this._lassoTool = lassoTool;
  this._globalConnect = globalConnect;
  this._palette = palette;
  this._myOptions = myOptions;
  palette.registerProvider(this);
}
ExamplePaletteProvider.$inject = ['create', 'elementFactory', 'handTool', 'lassoTool', 'globalConnect', 'palette', 'myOptions'];

ExamplePaletteProvider.prototype.getPaletteEntries = function () {
  var create = this._create,
      elementFactory = this._elementFactory,
      handTool = this._handTool,
      lassoTool = this._lassoTool,
      globalConnect = this._globalConnect,
      myOptions = this._myOptions;

  function createAction(type, group, className, title, options) {
    function createListener(event) {
      var shape = elementFactory.createShape(index_esm_assign({
        type: type
      }, options));
      create.start(event, shape);
    }

    return {
      group: group,
      className: className,
      title: title,
      action: {
        dragstart: createListener,
        click: createListener
      }
    };
  }

  console.log(myOptions);
  var tools = {
    'hand-tool': {
      group: 'tools',
      className: 'icon-hand-tool',
      title: '激活手动工具',
      action: {
        click: function click(event) {
          handTool.activateHand(event);
        }
      }
    },
    'lasso-tool': {
      group: 'tools',
      className: 'icon-lasso-tool',
      title: '激活套索工具',
      action: {
        click: function click(event) {
          lassoTool.activateSelection(event);
        }
      }
    },
    'global-connect-tool': {
      group: 'tools',
      className: 'icon-line-tool',
      title: '激活连线工具',
      action: {
        click: function click(event) {
          globalConnect.toggle(event);
        }
      }
    },
    'tool-separator': {
      group: 'tools',
      separator: true
    }
  };

  for (var key in myOptions.palette) {
    var item = myOptions.palette[key];
    tools[key] = createAction(item.type, item.group, item.className, item.title, item.options);
  } //console.log(tools,'tools');


  return tools;
};
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/palette/index.js

/* harmony default export */ var modules_palette = ({
  __init__: ['paletteProvider'],
  paletteProvider: ['type', ExamplePaletteProvider]
});
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/auto-place/AutoPlaceUtil.js




// padding to detect element placement
var PLACEMENT_DETECTION_PAD = 10;

var DEFAULT_DISTANCE = 50;

var DEFAULT_MAX_DISTANCE = 250;


/**
 * Get free position starting from given position.
 *
 * @param {djs.model.Shape} source
 * @param {djs.model.Shape} element
 * @param {Point} position
 * @param {Function} getNextPosition
 *
 * @return {Point}
 */
function findFreePosition(source, element, position, getNextPosition) {
  var connectedAtPosition;

  while ((connectedAtPosition = getConnectedAtPosition(source, position, element))) {
    position = getNextPosition(element, position, connectedAtPosition);
  }

  return position;
}

/**
 * Returns function that returns next position.
 *
 * @param {Object} nextPositionDirection
 * @param {Object} [nextPositionDirection.x]
 * @param {Object} [nextPositionDirection.y]
 *
 * @returns {Function}
 */
function generateGetNextPosition(nextPositionDirection) {
  return function(element, previousPosition, connectedAtPosition) {
    var nextPosition = {
      x: previousPosition.x,
      y: previousPosition.y
    };

    [ 'x', 'y' ].forEach(function(axis) {

      var nextPositionDirectionForAxis = nextPositionDirection[ axis ];

      if (!nextPositionDirectionForAxis) {
        return;
      }

      var dimension = axis === 'x' ? 'width' : 'height';

      var margin = nextPositionDirectionForAxis.margin,
          minDistance = nextPositionDirectionForAxis.minDistance;

      if (margin < 0) {
        nextPosition[ axis ] = Math.min(
          connectedAtPosition[ axis ] + margin - element[ dimension ] / 2,
          previousPosition[ axis ] - minDistance + margin
        );
      } else {
        nextPosition[ axis ] = Math.max(
          connectedAtPosition[ axis ] + connectedAtPosition[ dimension ] + margin + element[ dimension ] / 2,
          previousPosition[ axis ] + minDistance + margin
        );
      }
    });

    return nextPosition;
  };
}

/**
 * Return target at given position, if defined.
 *
 * This takes connected elements from host and attachers
 * into account, too.
 */
function getConnectedAtPosition(source, position, element) {

  var bounds = {
    x: position.x - (element.width / 2),
    y: position.y - (element.height / 2),
    width: element.width,
    height: element.height
  };

  var closure = getAutoPlaceClosure(source, element);

  return find(closure, function(target) {

    if (target === element) {
      return false;
    }

    var orientation = getOrientation(target, bounds, PLACEMENT_DETECTION_PAD);

    return orientation === 'intersect';
  });
}

/**
* Compute optimal distance between source and target based on existing connections to and from source.
* Assumes left-to-right and top-to-down modeling.
*
* @param {djs.model.Shape} source
* @param {Object} [hints]
* @param {number} [hints.defaultDistance]
* @param {string} [hints.direction]
* @param {Function} [hints.filter]
* @param {Function} [hints.getWeight]
* @param {number} [hints.maxDistance]
* @param {string} [hints.reference]
*
* @return {number}
*/
function getConnectedDistance(source, hints) {
  if (!hints) {
    hints = {};
  }

  // targets > sources by default
  function getDefaultWeight(connection) {
    return connection.source === source ? 1 : -1;
  }

  var defaultDistance = hints.defaultDistance || DEFAULT_DISTANCE,
      direction = hints.direction || 'e',
      filter = hints.filter,
      getWeight = hints.getWeight || getDefaultWeight,
      maxDistance = hints.maxDistance || DEFAULT_MAX_DISTANCE,
      reference = hints.reference || 'start';

  if (!filter) {
    filter = noneFilter;
  }

  function getDistance(a, b) {
    if (direction === 'n') {
      if (reference === 'start') {
        return asTRBL(a).top - asTRBL(b).bottom;
      } else if (reference === 'center') {
        return asTRBL(a).top - getMid(b).y;
      } else {
        return asTRBL(a).top - asTRBL(b).top;
      }
    } else if (direction === 'w') {
      if (reference === 'start') {
        return asTRBL(a).left - asTRBL(b).right;
      } else if (reference === 'center') {
        return asTRBL(a).left - getMid(b).x;
      } else {
        return asTRBL(a).left - asTRBL(b).left;
      }
    } else if (direction === 's') {
      if (reference === 'start') {
        return asTRBL(b).top - asTRBL(a).bottom;
      } else if (reference === 'center') {
        return getMid(b).y - asTRBL(a).bottom;
      } else {
        return asTRBL(b).bottom - asTRBL(a).bottom;
      }
    } else {
      if (reference === 'start') {
        return asTRBL(b).left - asTRBL(a).right;
      } else if (reference === 'center') {
        return getMid(b).x - asTRBL(a).right;
      } else {
        return asTRBL(b).right - asTRBL(a).right;
      }
    }
  }

  var sourcesDistances = source.incoming
    .filter(filter)
    .map(function(connection) {
      var weight = getWeight(connection);

      var distance = weight < 0
        ? getDistance(connection.source, source)
        : getDistance(source, connection.source);

      return {
        id: connection.source.id,
        distance: distance,
        weight: weight
      };
    });

  var targetsDistances = source.outgoing
    .filter(filter)
    .map(function(connection) {
      var weight = getWeight(connection);

      var distance = weight > 0
        ? getDistance(source, connection.target)
        : getDistance(connection.target, source);

      return {
        id: connection.target.id,
        distance: distance,
        weight: weight
      };
    });

  var distances = sourcesDistances.concat(targetsDistances).reduce(function(accumulator, currentValue) {
    accumulator[ currentValue.id + '__weight_' + currentValue.weight ] = currentValue;

    return accumulator;
  }, {});

  var distancesGrouped = reduce(distances, function(accumulator, currentValue) {
    var distance = currentValue.distance,
        weight = currentValue.weight;

    if (distance < 0 || distance > maxDistance) {
      return accumulator;
    }

    if (!accumulator[ String(distance) ]) {
      accumulator[ String(distance) ] = 0;
    }

    accumulator[ String(distance) ] += 1 * weight;

    if (!accumulator.distance || accumulator[ accumulator.distance ] < accumulator[ String(distance) ]) {
      accumulator.distance = distance;
    }

    return accumulator;
  }, {});

  return distancesGrouped.distance || defaultDistance;
}

/**
 * Returns all connected elements around the given source.
 *
 * This includes:
 *
 *   - connected elements
 *   - host connected elements
 *   - attachers connected elements
 *
 * @param  {djs.model.Shape} source
 *
 * @return {Array<djs.model.Shape>}
 */
function getAutoPlaceClosure(source) {

  var allConnected = getConnected(source);

  if (source.host) {
    allConnected = allConnected.concat(getConnected(source.host));
  }

  if (source.attachers) {
    allConnected = allConnected.concat(source.attachers.reduce(function(shapes, attacher) {
      return shapes.concat(getConnected(attacher));
    }, []));
  }

  return allConnected;
}

function getConnected(element) {
  return getTargets(element).concat(getSources(element));
}

function getSources(shape) {
  return shape.incoming.map(function(connection) {
    return connection.source;
  });
}

function getTargets(shape) {
  return shape.outgoing.map(function(connection) {
    return connection.target;
  });
}

function noneFilter() {
  return true;
}

// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/auto-place/AutoPlace.js




var AutoPlace_LOW_PRIORITY = 100;


/**
 * A service that places elements connected to existing ones
 * to an appropriate position in an _automated_ fashion.
 *
 * @param {EventBus} eventBus
 * @param {Modeling} modeling
 */
function AutoPlace(eventBus, modeling) {

  eventBus.on('autoPlace', AutoPlace_LOW_PRIORITY, function(context) {
    var shape = context.shape,
        source = context.source;

    return getNewShapePosition(source, shape);
  });

  /**
   * Append shape to source at appropriate position.
   *
   * @param {djs.model.Shape} source
   * @param {djs.model.Shape} shape
   *
   * @return {djs.model.Shape} appended shape
   */
  this.append = function(source, shape, hints) {

    eventBus.fire('autoPlace.start', {
      source: source,
      shape: shape
    });

    // allow others to provide the position
    var position = eventBus.fire('autoPlace', {
      source: source,
      shape: shape
    });

    var newShape = modeling.appendShape(source, shape, position, source.parent, hints);

    eventBus.fire('autoPlace.end', {
      source: source,
      shape: newShape
    });

    return newShape;
  };

}

AutoPlace.$inject = [
  'eventBus',
  'modeling'
];

// helpers //////////

/**
 * Find the new position for the target element to
 * connect to source.
 *
 * @param  {djs.model.Shape} source
 * @param  {djs.model.Shape} element
 * @param  {Object} [hints]
 * @param  {Object} [hints.defaultDistance]
 *
 * @returns {Point}
 */
function getNewShapePosition(source, element, hints) {
  if (!hints) {
    hints = {};
  }

  var distance = hints.defaultDistance || DEFAULT_DISTANCE;

  var sourceMid = getMid(source),
      sourceTrbl = asTRBL(source);

  // simply put element right next to source
  return {
    x: sourceTrbl.right + distance + element.width / 2,
    y: sourceMid.y
  };
}
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/auto-place/AutoPlaceSelectionBehavior.js
/**
 * Select element after auto placement.
 *
 * @param {EventBus} eventBus
 * @param {Selection} selection
 */
function AutoPlaceSelectionBehavior(eventBus, selection) {

  eventBus.on('autoPlace.end', 500, function(e) {
    selection.select(e.shape);
  });

}

AutoPlaceSelectionBehavior.$inject = [
  'eventBus',
  'selection'
];
// CONCATENATED MODULE: ./node_modules/diagram-js/lib/features/auto-place/index.js



/* harmony default export */ var auto_place = ({
  __init__: [ 'autoPlaceSelectionBehavior' ],
  autoPlace: [ 'type', AutoPlace ],
  autoPlaceSelectionBehavior: [ 'type', AutoPlaceSelectionBehavior ]
});
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/autoPlace/myAutoPlaceUtil.js




function myAutoPlaceUtil_getNewShapePosition(source, element) {
  return getFlowNodePosition(source, element);
}
function getFlowNodePosition(source, element) {
  var sourceTrbl = asTRBL(source);
  var sourceMid = getMid(source);
  var horizontalDistance = getConnectedDistance(source, {
    filter: function filter(connection) {
      return is(connection, 'myline');
    }
  });
  var margin = 30,
      minDistance = 80,
      orientation = 'left';
  var position = {
    x: sourceTrbl.right + horizontalDistance + element.width / 2,
    y: sourceMid.y + getVerticalDistance(orientation, minDistance)
  };
  var nextPositionDirection = {
    y: {
      margin: margin,
      minDistance: minDistance
    }
  };
  return findFreePosition(source, element, position, generateGetNextPosition(nextPositionDirection));
}

function getVerticalDistance(orientation, minDistance) {
  if (orientation.indexOf('top') != -1) {
    return -1 * minDistance;
  } else if (orientation.indexOf('bottom') != -1) {
    return minDistance;
  } else {
    return 0;
  }
}
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/autoPlace/myAutoPlace.js

function MyAutoPlace(eventBus) {
  eventBus.on('autoPlace', function (context) {
    var shape = context.shape,
        source = context.source;
    return myAutoPlaceUtil_getNewShapePosition(source, shape);
  });
}
MyAutoPlace.$inject = ['eventBus'];
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/autoPlace/index.js


/* harmony default export */ var modules_autoPlace = ({
  __depends__: [auto_place],
  __init__: ['myAutoPlace'],
  myAutoPlace: ['type', MyAutoPlace]
});
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/contextPad/contextPadProvider.js

function contextPadProvider(connect, contextPad, modeling, elementFactory, autoPlace, create, myOptions) {
  this._connect = connect;
  this._modeling = modeling;
  this._elementFactory = elementFactory;
  this._autoPlace = autoPlace;
  this._create = create;
  this._myOptions = myOptions;
  contextPad.registerProvider(this);
}
contextPadProvider.$inject = ['connect', 'contextPad', 'modeling', 'elementFactory', 'autoPlace', 'create', 'myOptions'];

contextPadProvider.prototype.getContextPadEntries = function (element) {
  var connect = this._connect,
      modeling = this._modeling,
      elementFactory = this._elementFactory,
      autoPlace = this._autoPlace,
      create = this._create,
      myOptions = this._myOptions;

  function removeElement() {
    modeling.removeElements([element]);
  }

  function startConnect(event, element, autoActivate) {
    connect.start(event, element, autoActivate);
  }

  function appendAction(type, className, title, options) {
    if (typeof title !== 'string') {
      options = title; //title = title;
    }

    function appendStart(event, element) {
      var shape = elementFactory.createShape(index_esm_assign({
        type: type
      }, options));
      create.start(event, shape, {
        source: element
      });
    }

    function append(event, element) {
      var shape = elementFactory.createShape(index_esm_assign({
        type: type
      }, options));
      autoPlace.append(element, shape);
    }

    return {
      group: 'model',
      className: className,
      title: title,
      action: {
        dragstart: appendStart,
        click: append
      }
    };
  }

  if (element.type == 'label') {
    return false;
  }

  if (element.type == 'myline' || element.type == 'endEvent') {
    return {
      'delete': {
        group: 'edit',
        className: 'icon-delete',
        title: '删除',
        action: {
          click: removeElement,
          dragstart: removeElement
        }
      }
    };
  }

  var tools = {};

  for (var key in myOptions.palette) {
    if (key != 'create.start-event') {
      var item = myOptions.palette[key];
      tools[key] = appendAction(item.type, item.className, item.title, item.options);
    }
  }

  tools['connect'] = {
    group: 'edit',
    className: 'icon-line-tool',
    title: '连线',
    action: {
      click: startConnect,
      dragstart: startConnect
    }
  };
  tools['delete'] = {
    group: 'edit',
    className: 'icon-delete',
    title: '删除',
    action: {
      click: removeElement,
      dragstart: removeElement
    }
  };
  return tools;
};
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/contextPad/index.js

/* harmony default export */ var contextPad = ({
  __init__: ['ContextPadProvider'],
  ContextPadProvider: ['type', contextPadProvider]
});
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/import/myImporter.js






function elementData(semantic, attrs) {
  return index_esm_assign({
    id: semantic.id,
    type: semantic.type,
    businessObject: semantic
  }, attrs);
}

function getWaypoints(node, source, target) {
  var waypoints = node.waypoint;

  if (!waypoints || waypoints.length < 2) {
    return [getMid(source), getMid(target)];
  }

  return waypoints.map(function (p) {
    return {
      x: p.x,
      y: p.y
    };
  });
}

function MyImporter(eventBus, canvas, elementFactory, elementRegistry, textRenderer) {
  this._eventBus = eventBus;
  this._canvas = canvas;
  this._elementFactory = elementFactory;
  this._elementRegistry = elementRegistry;
  this._translate = translate_translate;
  this._textRenderer = textRenderer;
}
MyImporter.$inject = ['eventBus', 'canvas', 'elementFactory', 'elementRegistry', 'textRenderer'];

MyImporter.prototype.add = function (node) {
  //let translate = this._translate;
  var element;
  var label = node.label;

  if (label) {
    label.id = node.id;
    label.name = node.name;
    delete node.label;
  } // 添加线条


  if (node.type == 'myline') {
    var source = this._getSource(node),
        target = this._getTarget(node);

    element = this._elementFactory.createConnection(elementData(node, {
      source: source,
      target: target,
      waypoints: getWaypoints(node, source, target)
    }));

    this._canvas.addConnection(element);
  } // 添加节点
  else {
      var wh = this._elementFactory._getDefaultSize(node.type);

      element = this._elementFactory.createShape(elementData(node, {
        x: Math.round(node.x),
        y: Math.round(node.y),
        width: wh.width,
        height: wh.height,
        isFrame: false
      }));

      this._canvas.addShape(element);
    }

  if (label && element) {
    // 需要额外绘制文字
    this.addLabel(label, element);
  }

  return element;
};

MyImporter.prototype.addLabel = function (semantic, element) {
  var label = this._elementFactory.createLabel({
    id: semantic.id + '_label',
    labelTarget: element,
    type: 'label',
    x: Math.round(semantic.x),
    y: Math.round(semantic.y),
    width: Math.round(semantic.width),
    height: Math.round(semantic.height),
    businessObject: semantic
  });

  return this._canvas.addShape(label, element.parent);
};

MyImporter.prototype.update = function (id, data) {
  var element = this._elementRegistry.get(id);

  element.businessObject = index_esm_assign(element.businessObject, data);

  if (data.type == 'myline') {
    this._canvas.removeConnection(element);

    this._canvas.addConnection(element, element.parent);
  } else {
    this._canvas.removeShape(element);

    this._canvas.addShape(element, element.parent);
  }

  var label = this._elementRegistry.get(id + '_label');

  if (label) {
    label.businessObject = element.businessObject;

    this._canvas.removeShape(label);

    this._canvas.addShape(label, element.parent);
  }
};

MyImporter.prototype._getSource = function (semantic) {
  return this._getElement(semantic.from);
};

MyImporter.prototype._getTarget = function (semantic) {
  return this._getElement(semantic.to);
};

MyImporter.prototype._getElement = function (id) {
  return this._elementRegistry.get(id);
};
// CONCATENATED MODULE: ./lib/bWflow/_src/modules/import/index.js

/* harmony default export */ var modules_import = ({
  myImporter: ['type', MyImporter]
});
// CONCATENATED MODULE: ./lib/bWflow/_src/myflow.js






// 导出数据
var nodeToJson = function nodeToJson(nodes) {
  var res = [];
  nodes.forEach(function (node) {
    if (node.type != undefined) {
      var point = node.businessObject;

      if (node.type == 'myline') {
        if (node.source && node.target) {
          point.from = node.source.id;
          point.to = node.target.id;
          point.waypoint = node.waypoints.map(function (p) {
            return {
              x: p.x,
              y: p.y
            };
          });
          res.push(point);
        }
      } else if (node.type != 'label') {
        point.x = node.x;
        point.y = node.y;
        res.push(point);
      } else {
        var mynode = res.find(function (t) {
          return t.id == point.id;
        });
        mynode.name = point.name || '';
        mynode.label = {
          x: node.x,
          y: node.y,
          height: node.height,
          width: node.width
        };
      }
    }
  });
  return res;
}; // 导入数据

var importData = function importData(data, diagram) {
  var myImporter = diagram.get('myImporter');
  var nodes = data.filter(function (t) {
    return t.type != 'myline';
  });
  var lines = data.filter(function (t) {
    return t.type == 'myline';
  });
  nodes.forEach(function (item) {
    myImporter.add(item);
  });
  lines.forEach(function (item) {
    myImporter.add(item);
  });
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/bWflow/_src/bWflow.vue?vue&type=script&lang=js&
/* eslint-disable */
















/**自定义模块部分 */











/* harmony default export */ var bWflowvue_type_script_lang_js_ = ({
  name: "b-wflow",
  props: {
    paletteOptions: Object,
    lineStroke: String
  },
  data: function data() {
    return {
      scale: 1,
      diagram: null,
      palette: {
        "create.start-event": {
          className: "icon-start-event",
          type: 'startEvent',
          group: "event",
          title: '创建开始事件'
        },
        "create.end-event": {
          className: "icon-end-event",
          type: 'endEvent',
          group: "event",
          title: '创建结束事件'
        },
        "create.and-gateway": {
          className: "icon-gateway1",
          type: 'gatewayAnd',
          group: "gateway",
          title: '并行网关'
        },
        "create.xor-gateway": {
          className: "icon-gateway2",
          type: 'gatewayXor',
          group: "gateway",
          title: '互排网关'
        },
        "create.inclusive-gateway": {
          className: "icon-gateway3",
          type: 'gatewayInclusive',
          group: "gateway",
          title: '包含网关'
        },
        "create.task": {
          className: "icon-gateway4",
          type: 'userTask',
          group: 'activity',
          title: '创建任务'
        },
        "create.script": {
          className: "icon-gateway5",
          type: 'scriptTask',
          group: "activity",
          title: '创建脚本'
        },
        "create.subprocess": {
          className: "icon-subprocess",
          type: 'subprocess',
          group: "activity",
          title: '创建子流程'
        }
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.init();
    });
  },
  computed: {},
  methods: {
    init: function init() {
      var _this2 = this;

      var myOptions = {
        __init__: ["myOptions"],
        myOptions: ["type", function () {
          return {
            palette: _this2.paletteOptions || _this2.palette,
            lineStroke: _this2.lineStroke
          };
        }]
      };
      var container = this.$refs.container;
      this.diagram = new Diagram({
        canvas: {
          container: container
        },
        modules: [bendpoints, features_connect, connection_preview, context_pad, features_create, align_elements, hand_tool, lasso_tool, global_connect, modules_modeling, movecanvas, features_move, features_outline, palette, zoomscroll, myOptions, modules_autoPlace, modules_draw, labelEditing, contextPad, modules_palette, modules_rules, modules_snapping, modules_import]
      });
      var canvas = this.diagram.get("canvas"),
          elementFactory = this.diagram.get("elementFactory"); // add root

      this.reset();
      var root = elementFactory.createRoot();
      canvas.setRootElement(root);
      this.initEvent();
    },
    // 绑定事件
    initEvent: function initEvent() {
      var _this3 = this;

      var eventBus = this.diagram.get("eventBus"); // 双击事件

      eventBus.on("element.dblclick", function (e) {
        _this3.$emit("elementDblclick", e.element.businessObject);
      }); // 点击事件

      eventBus.on("element.click", function (e) {
        _this3.$emit("elementClick", e.element.businessObject);
      });
      eventBus.on("create.end", function (e) {
        _this3.$emit("elementCreate", e.elements[0].businessObject);
      });
      eventBus.on("autoPlace.end", function (e) {
        _this3.$emit("elementCreate", e.shape.businessObject);
      });
    },
    reset: function reset() {
      this.scale = 1;
      this.diagram.get("canvas").zoom("fit-viewport");
    },
    handlerZoom: function handlerZoom(radio) {
      var newScale = !radio ? 1.0 : this.scale + radio;
      this.diagram.get("canvas").zoom(newScale);
      this.scale = newScale;
    },
    handlerRedo: function handlerRedo() {
      // 恢复
      this.diagram.get("commandStack").redo();
    },
    handlerUndo: function handlerUndo() {
      // 撤销
      this.diagram.get("commandStack").undo();
    },
    getData: function getData() {
      this.diagram.get("canvas").zoom(1);
      var all = this.diagram.get("elementRegistry").getAll();
      var res = nodeToJson(all);
      return res;
    },
    setData: function setData(data) {
      this.diagram.clear();
      this.reset();
      importData(data, this.diagram);
    },
    updateElemet: function updateElemet(data) {
      var myImporter = this.diagram.get("myImporter");
      myImporter.update(data.id, data);
    }
  }
});
// CONCATENATED MODULE: ./lib/bWflow/_src/bWflow.vue?vue&type=script&lang=js&
 /* harmony default export */ var _src_bWflowvue_type_script_lang_js_ = (bWflowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./lib/bWflow/_src/bWflow.vue?vue&type=style&index=0&id=6ce1dcb1&prod&lang=less&
var bWflowvue_type_style_index_0_id_6ce1dcb1_prod_lang_less_ = __webpack_require__("71df");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./lib/bWflow/_src/bWflow.vue






/* normalize component */

var component = normalizeComponent(
  _src_bWflowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var bWflow = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6860365a-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/bWflow/_src/bWflowViewer.vue?vue&type=template&id=7cdb0dd0&
var bWflowViewervue_type_template_id_7cdb0dd0_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    ref: "container",
    staticClass: "b-flow",
    style: {
      height: _vm.height
    }
  });
};

var bWflowViewervue_type_template_id_7cdb0dd0_staticRenderFns = [];

// CONCATENATED MODULE: ./lib/bWflow/_src/bWflowViewer.vue?vue&type=template&id=7cdb0dd0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/bWflow/_src/bWflowViewer.vue?vue&type=script&lang=js&



/* eslint-disable */






/**自定义模块部分 */





/* harmony default export */ var bWflowViewervue_type_script_lang_js_ = ({
  name: "b-wflow-viewer",
  props: {
    isSimple: Boolean,
    isAutoHeight: {
      type: Boolean,
      default: true
    },
    paletteOptions: Object,
    lineStroke: String
  },
  data: function data() {
    return {
      scale: 1,
      diagram: null,
      viewHeight: 100,
      nodeMap: {},
      minX: 1000,
      minY: 1000,
      palette: {
        "create.start-event": {
          className: "icon-start-event",
          type: 'startEvent',
          group: "event",
          title: '创建开始事件'
        },
        "create.end-event": {
          className: "icon-end-event",
          type: 'endEvent',
          group: "event",
          title: '创建结束事件'
        },
        "create.and-gateway": {
          className: "icon-gateway1",
          type: 'gatewayAnd',
          group: "gateway",
          title: '并行网关'
        },
        "create.xor-gateway": {
          className: "icon-gateway2",
          type: 'gatewayXor',
          group: "gateway",
          title: '互排网关'
        },
        "create.inclusive-gateway": {
          className: "icon-gateway3",
          type: 'gatewayInclusive',
          group: "gateway",
          title: '包含网关'
        },
        "create.task": {
          className: "icon-gateway4",
          type: 'userTask',
          group: 'activity',
          title: '创建任务'
        },
        "create.script": {
          className: "icon-gateway5",
          type: 'scriptTask',
          group: "activity",
          title: '创建脚本'
        },
        "create.subprocess": {
          className: "icon-subprocess",
          type: 'subprocess',
          group: "activity",
          title: '创建子流程'
        }
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.init();
    });
  },
  computed: {
    height: function height() {
      if (this.isAutoHeight) {
        return "100%";
      } else {
        return "".concat(this.viewHeight, "px");
      }
    }
  },
  methods: {
    init: function init() {
      var _this2 = this;

      var container = this.$refs.container;
      var myOptions = {
        __init__: ["myOptions"],
        myOptions: ["type", function () {
          return {
            palette: _this2.paletteOptions || _this2.palette,
            lineStroke: _this2.lineStroke
          };
        }]
      };
      this.diagram = new Diagram({
        canvas: {
          container: container
        },
        modules: [features_connect, features_create, modules_modeling, movecanvas, zoomscroll, myOptions, modules_draw, modules_import]
      });
      var canvas = this.diagram.get("canvas"),
          elementFactory = this.diagram.get("elementFactory"); // add root

      this.reset();
      var root = elementFactory.createRoot();
      canvas.setRootElement(root);
      this.initEvent();
      this.$emit("init");
    },
    // 绑定事件
    initEvent: function initEvent() {
      var _this3 = this;

      var eventBus = this.diagram.get("eventBus"); // 双击事件

      eventBus.on("element.dblclick", function (e) {
        _this3.$emit("elementDblclick", e.element.businessObject);
      }); // 点击事件

      eventBus.on("element.click", function (e) {
        _this3.$emit("elementClick", e.element.businessObject);
      });
    },
    reset: function reset() {
      this.scale = 1;
      this.diagram.get("canvas").zoom("fit-viewport");
    },
    handlerZoom: function handlerZoom(radio) {
      var newScale = !radio ? 1.0 : this.scale + radio;
      this.diagram.get("canvas").zoom(newScale);
      this.scale = newScale;
    },
    getData: function getData() {
      var all = this.diagram.get("elementRegistry").getAll();
      var res = nodeToJson(all);
      return res;
    },
    setData: function setData(data, radio) {
      var _this4 = this;

      // 遍历节点获取边界坐标
      this.nodeMap = {};
      data.forEach(function (node) {
        _this4.nodeMap[node.id] = node;

        if (node.type != "myline") {
          if (_this4.minX > node.x) {
            _this4.minX = node.x;
          }

          if (_this4.minY > node.y) {
            _this4.minY = node.y;
          }
        } else {
          node.waypoint.forEach(function (line) {
            if (_this4.minX > line.x) {
              _this4.minX = line.x;
            }

            if (_this4.minY > line.y) {
              _this4.minY = line.y;
            }
          });

          if (node.label) {
            if (_this4.minX > node.label.x) {
              _this4.minX = node.label.x;
            }

            if (_this4.minY > node.label.y) {
              _this4.minY = node.label.y;
            }
          }
        }
      });

      if (this.isSimple) {
        data = this.makeSimple(data, radio);
      }

      if (!this.isAutoHeight) {
        this.setVeiwHeight(data, radio);
      }

      this.$nextTick(function () {
        _this4.diagram.clear();

        _this4.reset();

        importData(data, _this4.diagram);
        setTimeout(function () {
          if (radio != undefined) {
            _this4.handlerZoom(radio);
          }
        }, 100);
      });
    },
    updateElemet: function updateElemet(data) {
      var myImporter = this.diagram.get("myImporter");
      myImporter.update(data.id, data);
    },
    setVeiwHeight: function setVeiwHeight(data, radio) {
      var maxY = 0;
      data.forEach(function (node) {
        var y = 0;

        switch (node.type) {
          case "userTask":
          case "subprocess":
          case "scriptTask":
            y = node.y + 77 * (1 + radio);
            break;

          case "myline":
            y = node.y;
            break;

          default:
            y = node.y + 77 * (1 + radio);
            break;
        }

        if (maxY < y) {
          maxY = y;
        }
      });
      this.viewHeight = maxY + 16;
    },
    // 流程图显示做简化处理
    makeSimple: function makeSimple(data, radio) {
      var _this5 = this;

      var wfData = []; // 坐标偏差值

      radio = radio || 0;
      var dX = this.minX - 16 - 51.8 * 10 * radio / (1 + radio);
      var dY = this.minY - 16 + (3 - 3 * 10 * radio) / (1 + radio);
      console.log(data);
      data.forEach(function (node) {
        if (node.label) {
          node.label.x = node.label.x - dX;
          node.label.y = node.label.y - dY;
        }

        if (node.type != "myline") {
          if (node.type != "scriptTask") {
            node.x = node.x - dX;
            node.y = node.y - dY;
            wfData.push(node);
          }
        } else {
          node.waypoint.forEach(function (line) {
            line.x = line.x - dX;
            line.y = line.y - dY;
          });

          if (_this5.nodeMap[node.from].type != "scriptTask" && _this5.nodeMap[node.to].type != "scriptTask") {
            wfData.push(node);
          }
        }
      });
      return wfData;
    }
  }
});
// CONCATENATED MODULE: ./lib/bWflow/_src/bWflowViewer.vue?vue&type=script&lang=js&
 /* harmony default export */ var _src_bWflowViewervue_type_script_lang_js_ = (bWflowViewervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./lib/bWflow/_src/bWflowViewer.vue?vue&type=style&index=0&id=7cdb0dd0&prod&lang=less&
var bWflowViewervue_type_style_index_0_id_7cdb0dd0_prod_lang_less_ = __webpack_require__("1062");

// CONCATENATED MODULE: ./lib/bWflow/_src/bWflowViewer.vue






/* normalize component */

var bWflowViewer_component = normalizeComponent(
  _src_bWflowViewervue_type_script_lang_js_,
  bWflowViewervue_type_template_id_7cdb0dd0_render,
  bWflowViewervue_type_template_id_7cdb0dd0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var bWflowViewer = (bWflowViewer_component.exports);
// CONCATENATED MODULE: ./lib/bWflow/index.js




bWflow.install = function (Vue) {
  Vue.component(bWflow.name, bWflow);
  Vue.component(bWflowViewer.name, bWflowViewer);
};

/* harmony default export */ var lib_bWflow = (bWflow);
// CONCATENATED MODULE: ./lib/index.js












function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var prototypes = {};
var lib_components = {
  bWflow: lib_bWflow
};

var lib_install = function install(Vue) {
  if (install.installed) {
    return;
  }

  Object.values(lib_components).map(function (component) {
    Vue.use(component);
  });
  Object.keys(prototypes).forEach(function (key) {
    Vue.prototype['$' + key] = prototypes[key];
  });
}; //  全局引用可自动安装


if (typeof window !== 'undefined' && window.Vue) {
  lib_install(window.Vue);
}

/* harmony default export */ var lib = (_objectSpread({
  install: lib_install
}, lib_components));

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (lib);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ });
//# sourceMappingURL=bwflow.common.js.map