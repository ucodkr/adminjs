var AdminJS = (function (React$1, require$$3, reactRouterDom, styled, DesignSystem, reactRouter, require$$1, require$$2) {
	'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		}
		n["default"] = e;
		return Object.freeze(n);
	}

	var React__default$1 = /*#__PURE__*/_interopDefaultLegacy(React$1);
	var require$$3__default = /*#__PURE__*/_interopDefaultLegacy(require$$3);
	var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
	var DesignSystem__namespace = /*#__PURE__*/_interopNamespace(DesignSystem);
	var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
	var require$$2__default = /*#__PURE__*/_interopDefaultLegacy(require$$2);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var regeneratorRuntime$1 = {exports: {}};

	var _typeof$1 = {exports: {}};

	(function (module) {
		function _typeof(obj) {
		  "@babel/helpers - typeof";

		  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
		    return typeof obj;
		  } : function (obj) {
		    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
		  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
		}

		module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (_typeof$1));

	(function (module) {
		var _typeof = _typeof$1.exports["default"];

		function _regeneratorRuntime() {
		  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

		  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
		    return exports;
		  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
		  var exports = {},
		      Op = Object.prototype,
		      hasOwn = Op.hasOwnProperty,
		      $Symbol = "function" == typeof Symbol ? Symbol : {},
		      iteratorSymbol = $Symbol.iterator || "@@iterator",
		      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
		      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

		  function define(obj, key, value) {
		    return Object.defineProperty(obj, key, {
		      value: value,
		      enumerable: !0,
		      configurable: !0,
		      writable: !0
		    }), obj[key];
		  }

		  try {
		    define({}, "");
		  } catch (err) {
		    define = function define(obj, key, value) {
		      return obj[key] = value;
		    };
		  }

		  function wrap(innerFn, outerFn, self, tryLocsList) {
		    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
		        generator = Object.create(protoGenerator.prototype),
		        context = new Context(tryLocsList || []);
		    return generator._invoke = function (innerFn, self, context) {
		      var state = "suspendedStart";
		      return function (method, arg) {
		        if ("executing" === state) throw new Error("Generator is already running");

		        if ("completed" === state) {
		          if ("throw" === method) throw arg;
		          return doneResult();
		        }

		        for (context.method = method, context.arg = arg;;) {
		          var delegate = context.delegate;

		          if (delegate) {
		            var delegateResult = maybeInvokeDelegate(delegate, context);

		            if (delegateResult) {
		              if (delegateResult === ContinueSentinel) continue;
		              return delegateResult;
		            }
		          }

		          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
		            if ("suspendedStart" === state) throw state = "completed", context.arg;
		            context.dispatchException(context.arg);
		          } else "return" === context.method && context.abrupt("return", context.arg);
		          state = "executing";
		          var record = tryCatch(innerFn, self, context);

		          if ("normal" === record.type) {
		            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
		            return {
		              value: record.arg,
		              done: context.done
		            };
		          }

		          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
		        }
		      };
		    }(innerFn, self, context), generator;
		  }

		  function tryCatch(fn, obj, arg) {
		    try {
		      return {
		        type: "normal",
		        arg: fn.call(obj, arg)
		      };
		    } catch (err) {
		      return {
		        type: "throw",
		        arg: err
		      };
		    }
		  }

		  exports.wrap = wrap;
		  var ContinueSentinel = {};

		  function Generator() {}

		  function GeneratorFunction() {}

		  function GeneratorFunctionPrototype() {}

		  var IteratorPrototype = {};
		  define(IteratorPrototype, iteratorSymbol, function () {
		    return this;
		  });
		  var getProto = Object.getPrototypeOf,
		      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
		  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
		  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

		  function defineIteratorMethods(prototype) {
		    ["next", "throw", "return"].forEach(function (method) {
		      define(prototype, method, function (arg) {
		        return this._invoke(method, arg);
		      });
		    });
		  }

		  function AsyncIterator(generator, PromiseImpl) {
		    function invoke(method, arg, resolve, reject) {
		      var record = tryCatch(generator[method], generator, arg);

		      if ("throw" !== record.type) {
		        var result = record.arg,
		            value = result.value;
		        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
		          invoke("next", value, resolve, reject);
		        }, function (err) {
		          invoke("throw", err, resolve, reject);
		        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
		          result.value = unwrapped, resolve(result);
		        }, function (error) {
		          return invoke("throw", error, resolve, reject);
		        });
		      }

		      reject(record.arg);
		    }

		    var previousPromise;

		    this._invoke = function (method, arg) {
		      function callInvokeWithMethodAndArg() {
		        return new PromiseImpl(function (resolve, reject) {
		          invoke(method, arg, resolve, reject);
		        });
		      }

		      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
		    };
		  }

		  function maybeInvokeDelegate(delegate, context) {
		    var method = delegate.iterator[context.method];

		    if (undefined === method) {
		      if (context.delegate = null, "throw" === context.method) {
		        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
		        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
		      }

		      return ContinueSentinel;
		    }

		    var record = tryCatch(method, delegate.iterator, context.arg);
		    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
		    var info = record.arg;
		    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
		  }

		  function pushTryEntry(locs) {
		    var entry = {
		      tryLoc: locs[0]
		    };
		    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
		  }

		  function resetTryEntry(entry) {
		    var record = entry.completion || {};
		    record.type = "normal", delete record.arg, entry.completion = record;
		  }

		  function Context(tryLocsList) {
		    this.tryEntries = [{
		      tryLoc: "root"
		    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
		  }

		  function values(iterable) {
		    if (iterable) {
		      var iteratorMethod = iterable[iteratorSymbol];
		      if (iteratorMethod) return iteratorMethod.call(iterable);
		      if ("function" == typeof iterable.next) return iterable;

		      if (!isNaN(iterable.length)) {
		        var i = -1,
		            next = function next() {
		          for (; ++i < iterable.length;) {
		            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
		          }

		          return next.value = undefined, next.done = !0, next;
		        };

		        return next.next = next;
		      }
		    }

		    return {
		      next: doneResult
		    };
		  }

		  function doneResult() {
		    return {
		      value: undefined,
		      done: !0
		    };
		  }

		  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
		    var ctor = "function" == typeof genFun && genFun.constructor;
		    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
		  }, exports.mark = function (genFun) {
		    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
		  }, exports.awrap = function (arg) {
		    return {
		      __await: arg
		    };
		  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
		    return this;
		  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
		    void 0 === PromiseImpl && (PromiseImpl = Promise);
		    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
		    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
		      return result.done ? result.value : iter.next();
		    });
		  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
		    return this;
		  }), define(Gp, "toString", function () {
		    return "[object Generator]";
		  }), exports.keys = function (object) {
		    var keys = [];

		    for (var key in object) {
		      keys.push(key);
		    }

		    return keys.reverse(), function next() {
		      for (; keys.length;) {
		        var key = keys.pop();
		        if (key in object) return next.value = key, next.done = !1, next;
		      }

		      return next.done = !0, next;
		    };
		  }, exports.values = values, Context.prototype = {
		    constructor: Context,
		    reset: function reset(skipTempReset) {
		      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
		        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
		      }
		    },
		    stop: function stop() {
		      this.done = !0;
		      var rootRecord = this.tryEntries[0].completion;
		      if ("throw" === rootRecord.type) throw rootRecord.arg;
		      return this.rval;
		    },
		    dispatchException: function dispatchException(exception) {
		      if (this.done) throw exception;
		      var context = this;

		      function handle(loc, caught) {
		        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
		      }

		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i],
		            record = entry.completion;
		        if ("root" === entry.tryLoc) return handle("end");

		        if (entry.tryLoc <= this.prev) {
		          var hasCatch = hasOwn.call(entry, "catchLoc"),
		              hasFinally = hasOwn.call(entry, "finallyLoc");

		          if (hasCatch && hasFinally) {
		            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
		            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
		          } else if (hasCatch) {
		            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
		          } else {
		            if (!hasFinally) throw new Error("try statement without catch or finally");
		            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
		          }
		        }
		      }
		    },
		    abrupt: function abrupt(type, arg) {
		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];

		        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
		          var finallyEntry = entry;
		          break;
		        }
		      }

		      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
		      var record = finallyEntry ? finallyEntry.completion : {};
		      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
		    },
		    complete: function complete(record, afterLoc) {
		      if ("throw" === record.type) throw record.arg;
		      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
		    },
		    finish: function finish(finallyLoc) {
		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];
		        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
		      }
		    },
		    "catch": function _catch(tryLoc) {
		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];

		        if (entry.tryLoc === tryLoc) {
		          var record = entry.completion;

		          if ("throw" === record.type) {
		            var thrown = record.arg;
		            resetTryEntry(entry);
		          }

		          return thrown;
		        }
		      }

		      throw new Error("illegal catch attempt");
		    },
		    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
		      return this.delegate = {
		        iterator: values(iterable),
		        resultName: resultName,
		        nextLoc: nextLoc
		      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
		    }
		  }, exports;
		}

		module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (regeneratorRuntime$1));

	// TODO(Babel 8): Remove this file.

	var runtime = regeneratorRuntime$1.exports();
	var regenerator = runtime;

	// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  if (typeof globalThis === "object") {
	    globalThis.regeneratorRuntime = runtime;
	  } else {
	    Function("r", "regeneratorRuntime = r")(runtime);
	  }
	}

	var commonjs = {};

	var Trans$1 = {};

	var interopRequireDefault = {exports: {}};

	(function (module) {
		function _interopRequireDefault(obj) {
		  return obj && obj.__esModule ? obj : {
		    "default": obj
		  };
		}

		module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (interopRequireDefault));

	var objectWithoutProperties = {exports: {}};

	var objectWithoutPropertiesLoose = {exports: {}};

	var hasRequiredObjectWithoutPropertiesLoose;

	function requireObjectWithoutPropertiesLoose () {
		if (hasRequiredObjectWithoutPropertiesLoose) return objectWithoutPropertiesLoose.exports;
		hasRequiredObjectWithoutPropertiesLoose = 1;
		(function (module) {
			function _objectWithoutPropertiesLoose(source, excluded) {
			  if (source == null) return {};
			  var target = {};
			  var sourceKeys = Object.keys(source);
			  var key, i;

			  for (i = 0; i < sourceKeys.length; i++) {
			    key = sourceKeys[i];
			    if (excluded.indexOf(key) >= 0) continue;
			    target[key] = source[key];
			  }

			  return target;
			}

			module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (objectWithoutPropertiesLoose));
		return objectWithoutPropertiesLoose.exports;
	}

	var hasRequiredObjectWithoutProperties;

	function requireObjectWithoutProperties () {
		if (hasRequiredObjectWithoutProperties) return objectWithoutProperties.exports;
		hasRequiredObjectWithoutProperties = 1;
		(function (module) {
			var objectWithoutPropertiesLoose = requireObjectWithoutPropertiesLoose();

			function _objectWithoutProperties(source, excluded) {
			  if (source == null) return {};
			  var target = objectWithoutPropertiesLoose(source, excluded);
			  var key, i;

			  if (Object.getOwnPropertySymbols) {
			    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

			    for (i = 0; i < sourceSymbolKeys.length; i++) {
			      key = sourceSymbolKeys[i];
			      if (excluded.indexOf(key) >= 0) continue;
			      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
			      target[key] = source[key];
			    }
			  }

			  return target;
			}

			module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (objectWithoutProperties));
		return objectWithoutProperties.exports;
	}

	var defineProperty = {exports: {}};

	var hasRequiredDefineProperty;

	function requireDefineProperty () {
		if (hasRequiredDefineProperty) return defineProperty.exports;
		hasRequiredDefineProperty = 1;
		(function (module) {
			function _defineProperty(obj, key, value) {
			  if (key in obj) {
			    Object.defineProperty(obj, key, {
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

			module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (defineProperty));
		return defineProperty.exports;
	}

	/**
	 * This file automatically generated from `pre-publish.js`.
	 * Do not manually edit.
	 */

	var voidElements;
	var hasRequiredVoidElements;

	function requireVoidElements () {
		if (hasRequiredVoidElements) return voidElements;
		hasRequiredVoidElements = 1;
		voidElements = {
		  "area": true,
		  "base": true,
		  "br": true,
		  "col": true,
		  "embed": true,
		  "hr": true,
		  "img": true,
		  "input": true,
		  "link": true,
		  "meta": true,
		  "param": true,
		  "source": true,
		  "track": true,
		  "wbr": true
		};
		return voidElements;
	}

	var htmlParseStringify;
	var hasRequiredHtmlParseStringify;

	function requireHtmlParseStringify () {
		if (hasRequiredHtmlParseStringify) return htmlParseStringify;
		hasRequiredHtmlParseStringify = 1;
		var e,t=(e=requireVoidElements())&&"object"==typeof e&&"default"in e?e.default:e,n=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function r(e){var r={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},i=e.match(/<\/?([^\s]+?)[/\s>]/);if(i&&(r.name=i[1],(t[i[1]]||"/"===e.charAt(e.length-2))&&(r.voidElement=!0),r.name.startsWith("!--"))){var s=e.indexOf("--\x3e");return {type:"comment",comment:-1!==s?e.slice(4,s):""}}for(var c=new RegExp(n),a=null;null!==(a=c.exec(e));)if(a[0].trim())if(a[1]){var o=a[1].trim(),u=[o,""];o.indexOf("=")>-1&&(u=o.split("=")),r.attrs[u[0]]=u[1],c.lastIndex--;}else a[2]&&(r.attrs[a[2]]=a[3].trim().substring(1,a[3].length-1));return r}var i=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,s=/^\s*$/,c=Object.create(null);function a(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(a,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}htmlParseStringify={parse:function(e,t){t||(t={}),t.components||(t.components=c);var n,a=[],o=[],u=-1,l=!1;if(0!==e.indexOf("<")){var m=e.indexOf("<");a.push({type:"text",content:-1===m?e:e.substring(0,m)});}return e.replace(i,function(i,c){if(l){if(i!=="</"+n.name+">")return;l=!1;}var m,d="/"!==i.charAt(1),f=i.startsWith("\x3c!--"),h=c+i.length,p=e.charAt(h);if(f){var v=r(i);return u<0?(a.push(v),a):((m=o[u]).children.push(v),a)}if(d&&(u++,"tag"===(n=r(i)).type&&t.components[n.name]&&(n.type="component",l=!0),n.voidElement||l||!p||"<"===p||n.children.push({type:"text",content:e.slice(h,e.indexOf("<",h))}),0===u&&a.push(n),(m=o[u-1])&&m.children.push(n),o[u]=n),(!d||n.voidElement)&&(u>-1&&(n.voidElement||n.name===i.slice(2,-1))&&(u--,n=-1===u?a:o[u]),!l&&"<"!==p&&p)){m=-1===u?a:o[u].children;var x=e.indexOf("<",h),g=e.slice(h,-1===x?void 0:x);s.test(g)&&(g=" "),(x>-1&&u+m.length>=0||" "!==g)&&m.push({type:"text",content:g});}}),a},stringify:function(e){return e.reduce(function(e,t){return e+a("",t)},"")}};
		
		return htmlParseStringify;
	}

	var context = {};

	var classCallCheck = {exports: {}};

	var hasRequiredClassCallCheck;

	function requireClassCallCheck () {
		if (hasRequiredClassCallCheck) return classCallCheck.exports;
		hasRequiredClassCallCheck = 1;
		(function (module) {
			function _classCallCheck(instance, Constructor) {
			  if (!(instance instanceof Constructor)) {
			    throw new TypeError("Cannot call a class as a function");
			  }
			}

			module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (classCallCheck));
		return classCallCheck.exports;
	}

	var createClass = {exports: {}};

	var hasRequiredCreateClass;

	function requireCreateClass () {
		if (hasRequiredCreateClass) return createClass.exports;
		hasRequiredCreateClass = 1;
		(function (module) {
			function _defineProperties(target, props) {
			  for (var i = 0; i < props.length; i++) {
			    var descriptor = props[i];
			    descriptor.enumerable = descriptor.enumerable || false;
			    descriptor.configurable = true;
			    if ("value" in descriptor) descriptor.writable = true;
			    Object.defineProperty(target, descriptor.key, descriptor);
			  }
			}

			function _createClass(Constructor, protoProps, staticProps) {
			  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
			  if (staticProps) _defineProperties(Constructor, staticProps);
			  Object.defineProperty(Constructor, "prototype", {
			    writable: false
			  });
			  return Constructor;
			}

			module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (createClass));
		return createClass.exports;
	}

	var _unescape$1 = {};

	var hasRequired_unescape;

	function require_unescape () {
		if (hasRequired_unescape) return _unescape$1;
		hasRequired_unescape = 1;

		Object.defineProperty(_unescape$1, "__esModule", {
		  value: true
		});
		_unescape$1.unescape = void 0;
		var matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
		var htmlEntities = {
		  '&amp;': '&',
		  '&#38;': '&',
		  '&lt;': '<',
		  '&#60;': '<',
		  '&gt;': '>',
		  '&#62;': '>',
		  '&apos;': "'",
		  '&#39;': "'",
		  '&quot;': '"',
		  '&#34;': '"',
		  '&nbsp;': ' ',
		  '&#160;': ' ',
		  '&copy;': '©',
		  '&#169;': '©',
		  '&reg;': '®',
		  '&#174;': '®',
		  '&hellip;': '…',
		  '&#8230;': '…',
		  '&#x2F;': '/',
		  '&#47;': '/'
		};

		var unescapeHtmlEntity = function unescapeHtmlEntity(m) {
		  return htmlEntities[m];
		};

		var unescape = function unescape(text) {
		  return text.replace(matchHtmlEntity, unescapeHtmlEntity);
		};

		_unescape$1.unescape = unescape;
		return _unescape$1;
	}

	var _interopRequireDefault$5 = interopRequireDefault.exports;

	Object.defineProperty(context, "__esModule", {
	  value: true
	});
	context.setDefaults = setDefaults;
	context.getDefaults = getDefaults;
	context.setI18n = setI18n;
	context.getI18n = getI18n;
	context.composeInitialProps = composeInitialProps;
	context.getInitialProps = getInitialProps;
	context.initReactI18next = context.ReportNamespaces = context.I18nContext = void 0;

	var _classCallCheck2 = _interopRequireDefault$5(requireClassCallCheck());

	var _createClass2 = _interopRequireDefault$5(requireCreateClass());

	var _defineProperty2$4 = _interopRequireDefault$5(requireDefineProperty());

	var _react$6 = React__default$1["default"];

	var _unescape = require_unescape();

	function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$b(Object(source), true).forEach(function (key) { (0, _defineProperty2$4["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	var defaultOptions = {
	  bindI18n: 'languageChanged',
	  bindI18nStore: '',
	  transEmptyNodeValue: '',
	  transSupportBasicHtmlNodes: true,
	  transWrapTextNodes: '',
	  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
	  useSuspense: true,
	  unescape: _unescape.unescape
	};
	var i18nInstance;
	var I18nContext = (0, _react$6.createContext)();
	context.I18nContext = I18nContext;

	function setDefaults() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  defaultOptions = _objectSpread$b(_objectSpread$b({}, defaultOptions), options);
	}

	function getDefaults() {
	  return defaultOptions;
	}

	var ReportNamespaces = function () {
	  function ReportNamespaces() {
	    (0, _classCallCheck2["default"])(this, ReportNamespaces);
	    this.usedNamespaces = {};
	  }

	  (0, _createClass2["default"])(ReportNamespaces, [{
	    key: "addUsedNamespaces",
	    value: function addUsedNamespaces(namespaces) {
	      var _this = this;

	      namespaces.forEach(function (ns) {
	        if (!_this.usedNamespaces[ns]) _this.usedNamespaces[ns] = true;
	      });
	    }
	  }, {
	    key: "getUsedNamespaces",
	    value: function getUsedNamespaces() {
	      return Object.keys(this.usedNamespaces);
	    }
	  }]);
	  return ReportNamespaces;
	}();

	context.ReportNamespaces = ReportNamespaces;

	function setI18n(instance) {
	  i18nInstance = instance;
	}

	function getI18n() {
	  return i18nInstance;
	}

	var initReactI18next = {
	  type: '3rdParty',
	  init: function init(instance) {
	    setDefaults(instance.options.react);
	    setI18n(instance);
	  }
	};
	context.initReactI18next = initReactI18next;

	function composeInitialProps(ForComponent) {
	  return function (ctx) {
	    return new Promise(function (resolve) {
	      var i18nInitialProps = getInitialProps();

	      if (ForComponent.getInitialProps) {
	        ForComponent.getInitialProps(ctx).then(function (componentsInitialProps) {
	          resolve(_objectSpread$b(_objectSpread$b({}, componentsInitialProps), i18nInitialProps));
	        });
	      } else {
	        resolve(i18nInitialProps);
	      }
	    });
	  };
	}

	function getInitialProps() {
	  var i18n = getI18n();
	  var namespaces = i18n.reportNamespaces ? i18n.reportNamespaces.getUsedNamespaces() : [];
	  var ret = {};
	  var initialI18nStore = {};
	  i18n.languages.forEach(function (l) {
	    initialI18nStore[l] = {};
	    namespaces.forEach(function (ns) {
	      initialI18nStore[l][ns] = i18n.getResourceBundle(l, ns) || {};
	    });
	  });
	  ret.initialI18nStore = initialI18nStore;
	  ret.initialLanguage = i18n.language;
	  return ret;
	}

	var utils$a = {};

	var hasRequiredUtils;

	function requireUtils () {
		if (hasRequiredUtils) return utils$a;
		hasRequiredUtils = 1;

		Object.defineProperty(utils$a, "__esModule", {
		  value: true
		});
		utils$a.warn = warn;
		utils$a.warnOnce = warnOnce;
		utils$a.loadNamespaces = loadNamespaces;
		utils$a.hasLoadedNamespace = hasLoadedNamespace;
		utils$a.getDisplayName = getDisplayName;

		function warn() {
		  if (console && console.warn) {
		    var _console;

		    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    if (typeof args[0] === 'string') args[0] = "react-i18next:: ".concat(args[0]);

		    (_console = console).warn.apply(_console, args);
		  }
		}

		var alreadyWarned = {};

		function warnOnce() {
		  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		    args[_key2] = arguments[_key2];
		  }

		  if (typeof args[0] === 'string' && alreadyWarned[args[0]]) return;
		  if (typeof args[0] === 'string') alreadyWarned[args[0]] = new Date();
		  warn.apply(void 0, args);
		}

		function loadNamespaces(i18n, ns, cb) {
		  i18n.loadNamespaces(ns, function () {
		    if (i18n.isInitialized) {
		      cb();
		    } else {
		      var initialized = function initialized() {
		        setTimeout(function () {
		          i18n.off('initialized', initialized);
		        }, 0);
		        cb();
		      };

		      i18n.on('initialized', initialized);
		    }
		  });
		}

		function oldI18nextHasLoadedNamespace(ns, i18n) {
		  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
		  var lng = i18n.languages[0];
		  var fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
		  var lastLng = i18n.languages[i18n.languages.length - 1];
		  if (lng.toLowerCase() === 'cimode') return true;

		  var loadNotPending = function loadNotPending(l, n) {
		    var loadState = i18n.services.backendConnector.state["".concat(l, "|").concat(n)];
		    return loadState === -1 || loadState === 2;
		  };

		  if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns)) return false;
		  if (i18n.hasResourceBundle(lng, ns)) return true;
		  if (!i18n.services.backendConnector.backend || i18n.options.resources && !i18n.options.partialBundledLanguages) return true;
		  if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
		  return false;
		}

		function hasLoadedNamespace(ns, i18n) {
		  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		  if (!i18n.languages || !i18n.languages.length) {
		    warnOnce('i18n.languages were undefined or empty', i18n.languages);
		    return true;
		  }

		  var isNewerI18next = i18n.options.ignoreJSONStructure !== undefined;

		  if (!isNewerI18next) {
		    return oldI18nextHasLoadedNamespace(ns, i18n, options);
		  }

		  return i18n.hasLoadedNamespace(ns, {
		    precheck: function precheck(i18nInstance, loadNotPending) {
		      if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
		    }
		  });
		}

		function getDisplayName(Component) {
		  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
		}
		return utils$a;
	}

	var _interopRequireDefault$4 = interopRequireDefault.exports;

	Object.defineProperty(Trans$1, "__esModule", {
	  value: true
	});
	Trans$1.nodesToString = nodesToString;
	Trans$1.Trans = Trans;

	var _objectWithoutProperties2$3 = _interopRequireDefault$4(requireObjectWithoutProperties());

	var _typeof2 = _interopRequireDefault$4(_typeof$1.exports);

	var _defineProperty2$3 = _interopRequireDefault$4(requireDefineProperty());

	var _react$5 = React__default$1["default"];

	var _htmlParseStringify = _interopRequireDefault$4(requireHtmlParseStringify());

	var _context$4 = context;

	var _utils$3 = requireUtils();

	var _excluded$3 = ["format"],
	    _excluded2 = ["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"];

	function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(Object(source), true).forEach(function (key) { (0, _defineProperty2$3["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function hasChildren(node, checkLength) {
	  if (!node) return false;
	  var base = node.props ? node.props.children : node.children;
	  if (checkLength) return base.length > 0;
	  return !!base;
	}

	function getChildren(node) {
	  if (!node) return [];
	  return node.props ? node.props.children : node.children;
	}

	function hasValidReactChildren(children) {
	  if (Object.prototype.toString.call(children) !== '[object Array]') return false;
	  return children.every(function (child) {
	    return (0, _react$5.isValidElement)(child);
	  });
	}

	function getAsArray(data) {
	  return Array.isArray(data) ? data : [data];
	}

	function mergeProps(source, target) {
	  var newTarget = _objectSpread$a({}, target);

	  newTarget.props = Object.assign(source.props, target.props);
	  return newTarget;
	}

	function nodesToString(children, i18nOptions) {
	  if (!children) return '';
	  var stringNode = '';
	  var childrenArray = getAsArray(children);
	  var keepArray = i18nOptions.transSupportBasicHtmlNodes && i18nOptions.transKeepBasicHtmlNodesFor ? i18nOptions.transKeepBasicHtmlNodesFor : [];
	  childrenArray.forEach(function (child, childIndex) {
	    if (typeof child === 'string') {
	      stringNode += "".concat(child);
	    } else if ((0, _react$5.isValidElement)(child)) {
	      var childPropsCount = Object.keys(child.props).length;
	      var shouldKeepChild = keepArray.indexOf(child.type) > -1;
	      var childChildren = child.props.children;

	      if (!childChildren && shouldKeepChild && childPropsCount === 0) {
	        stringNode += "<".concat(child.type, "/>");
	      } else if (!childChildren && (!shouldKeepChild || childPropsCount !== 0)) {
	        stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
	      } else if (child.props.i18nIsDynamicList) {
	        stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
	      } else if (shouldKeepChild && childPropsCount === 1 && typeof childChildren === 'string') {
	        stringNode += "<".concat(child.type, ">").concat(childChildren, "</").concat(child.type, ">");
	      } else {
	        var content = nodesToString(childChildren, i18nOptions);
	        stringNode += "<".concat(childIndex, ">").concat(content, "</").concat(childIndex, ">");
	      }
	    } else if (child === null) {
	      (0, _utils$3.warn)("Trans: the passed in value is invalid - seems you passed in a null child.");
	    } else if ((0, _typeof2["default"])(child) === 'object') {
	      var format = child.format,
	          clone = (0, _objectWithoutProperties2$3["default"])(child, _excluded$3);
	      var keys = Object.keys(clone);

	      if (keys.length === 1) {
	        var value = format ? "".concat(keys[0], ", ").concat(format) : keys[0];
	        stringNode += "{{".concat(value, "}}");
	      } else {
	        (0, _utils$3.warn)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", child);
	      }
	    } else {
	      (0, _utils$3.warn)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", child);
	    }
	  });
	  return stringNode;
	}

	function renderNodes(children, targetString, i18n, i18nOptions, combinedTOpts, shouldUnescape) {
	  if (targetString === '') return [];
	  var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
	  var emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.join('|')).test(targetString);
	  if (!children && !emptyChildrenButNeedsHandling) return [targetString];
	  var data = {};

	  function getData(childs) {
	    var childrenArray = getAsArray(childs);
	    childrenArray.forEach(function (child) {
	      if (typeof child === 'string') return;
	      if (hasChildren(child)) getData(getChildren(child));else if ((0, _typeof2["default"])(child) === 'object' && !(0, _react$5.isValidElement)(child)) Object.assign(data, child);
	    });
	  }

	  getData(children);

	  var ast = _htmlParseStringify["default"].parse("<0>".concat(targetString, "</0>"));

	  var opts = _objectSpread$a(_objectSpread$a({}, data), combinedTOpts);

	  function renderInner(child, node, rootReactNode) {
	    var childs = getChildren(child);
	    var mappedChildren = mapAST(childs, node.children, rootReactNode);
	    return hasValidReactChildren(childs) && mappedChildren.length === 0 ? childs : mappedChildren;
	  }

	  function pushTranslatedJSX(child, inner, mem, i, isVoid) {
	    if (child.dummy) child.children = inner;
	    mem.push((0, _react$5.cloneElement)(child, _objectSpread$a(_objectSpread$a({}, child.props), {}, {
	      key: i
	    }), isVoid ? undefined : inner));
	  }

	  function mapAST(reactNode, astNode, rootReactNode) {
	    var reactNodes = getAsArray(reactNode);
	    var astNodes = getAsArray(astNode);
	    return astNodes.reduce(function (mem, node, i) {
	      var translationContent = node.children && node.children[0] && node.children[0].content && i18n.services.interpolator.interpolate(node.children[0].content, opts, i18n.language);

	      if (node.type === 'tag') {
	        var tmp = reactNodes[parseInt(node.name, 10)];
	        if (!tmp && rootReactNode.length === 1 && rootReactNode[0][node.name]) tmp = rootReactNode[0][node.name];
	        if (!tmp) tmp = {};
	        var child = Object.keys(node.attrs).length !== 0 ? mergeProps({
	          props: node.attrs
	        }, tmp) : tmp;
	        var isElement = (0, _react$5.isValidElement)(child);
	        var isValidTranslationWithChildren = isElement && hasChildren(node, true) && !node.voidElement;
	        var isEmptyTransWithHTML = emptyChildrenButNeedsHandling && (0, _typeof2["default"])(child) === 'object' && child.dummy && !isElement;
	        var isKnownComponent = (0, _typeof2["default"])(children) === 'object' && children !== null && Object.hasOwnProperty.call(children, node.name);

	        if (typeof child === 'string') {
	          var value = i18n.services.interpolator.interpolate(child, opts, i18n.language);
	          mem.push(value);
	        } else if (hasChildren(child) || isValidTranslationWithChildren) {
	            var inner = renderInner(child, node, rootReactNode);
	            pushTranslatedJSX(child, inner, mem, i);
	          } else if (isEmptyTransWithHTML) {
	          var _inner = mapAST(reactNodes, node.children, rootReactNode);

	          mem.push((0, _react$5.cloneElement)(child, _objectSpread$a(_objectSpread$a({}, child.props), {}, {
	            key: i
	          }), _inner));
	        } else if (Number.isNaN(parseFloat(node.name))) {
	          if (isKnownComponent) {
	            var _inner2 = renderInner(child, node, rootReactNode);

	            pushTranslatedJSX(child, _inner2, mem, i, node.voidElement);
	          } else if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) {
	            if (node.voidElement) {
	              mem.push((0, _react$5.createElement)(node.name, {
	                key: "".concat(node.name, "-").concat(i)
	              }));
	            } else {
	              var _inner3 = mapAST(reactNodes, node.children, rootReactNode);

	              mem.push((0, _react$5.createElement)(node.name, {
	                key: "".concat(node.name, "-").concat(i)
	              }, _inner3));
	            }
	          } else if (node.voidElement) {
	            mem.push("<".concat(node.name, " />"));
	          } else {
	            var _inner4 = mapAST(reactNodes, node.children, rootReactNode);

	            mem.push("<".concat(node.name, ">").concat(_inner4, "</").concat(node.name, ">"));
	          }
	        } else if ((0, _typeof2["default"])(child) === 'object' && !isElement) {
	          var content = node.children[0] ? translationContent : null;
	          if (content) mem.push(content);
	        } else if (node.children.length === 1 && translationContent) {
	          mem.push((0, _react$5.cloneElement)(child, _objectSpread$a(_objectSpread$a({}, child.props), {}, {
	            key: i
	          }), translationContent));
	        } else {
	          mem.push((0, _react$5.cloneElement)(child, _objectSpread$a(_objectSpread$a({}, child.props), {}, {
	            key: i
	          })));
	        }
	      } else if (node.type === 'text') {
	        var wrapTextNodes = i18nOptions.transWrapTextNodes;

	        var _content = shouldUnescape ? i18nOptions.unescape(i18n.services.interpolator.interpolate(node.content, opts, i18n.language)) : i18n.services.interpolator.interpolate(node.content, opts, i18n.language);

	        if (wrapTextNodes) {
	          mem.push((0, _react$5.createElement)(wrapTextNodes, {
	            key: "".concat(node.name, "-").concat(i)
	          }, _content));
	        } else {
	          mem.push(_content);
	        }
	      }

	      return mem;
	    }, []);
	  }

	  var result = mapAST([{
	    dummy: true,
	    children: children || []
	  }], ast, getAsArray(children || []));
	  return getChildren(result[0]);
	}

	function Trans(_ref) {
	  var children = _ref.children,
	      count = _ref.count,
	      parent = _ref.parent,
	      i18nKey = _ref.i18nKey,
	      context = _ref.context,
	      _ref$tOptions = _ref.tOptions,
	      tOptions = _ref$tOptions === void 0 ? {} : _ref$tOptions,
	      values = _ref.values,
	      defaults = _ref.defaults,
	      components = _ref.components,
	      ns = _ref.ns,
	      i18nFromProps = _ref.i18n,
	      tFromProps = _ref.t,
	      shouldUnescape = _ref.shouldUnescape,
	      additionalProps = (0, _objectWithoutProperties2$3["default"])(_ref, _excluded2);

	  var _ref2 = (0, _react$5.useContext)(_context$4.I18nContext) || {},
	      i18nFromContext = _ref2.i18n,
	      defaultNSFromContext = _ref2.defaultNS;

	  var i18n = i18nFromProps || i18nFromContext || (0, _context$4.getI18n)();

	  if (!i18n) {
	    (0, _utils$3.warnOnce)('You will need to pass in an i18next instance by using i18nextReactModule');
	    return children;
	  }

	  var t = tFromProps || i18n.t.bind(i18n) || function (k) {
	    return k;
	  };

	  if (context) tOptions.context = context;

	  var reactI18nextOptions = _objectSpread$a(_objectSpread$a({}, (0, _context$4.getDefaults)()), i18n.options && i18n.options.react);

	  var namespaces = ns || t.ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
	  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
	  var defaultValue = defaults || nodesToString(children, reactI18nextOptions) || reactI18nextOptions.transEmptyNodeValue || i18nKey;
	  var hashTransKey = reactI18nextOptions.hashTransKey;
	  var key = i18nKey || (hashTransKey ? hashTransKey(defaultValue) : defaultValue);
	  var interpolationOverride = values ? tOptions.interpolation : {
	    interpolation: _objectSpread$a(_objectSpread$a({}, tOptions.interpolation), {}, {
	      prefix: '#$?',
	      suffix: '?$#'
	    })
	  };

	  var combinedTOpts = _objectSpread$a(_objectSpread$a(_objectSpread$a(_objectSpread$a({}, tOptions), {}, {
	    count: count
	  }, values), interpolationOverride), {}, {
	    defaultValue: defaultValue,
	    ns: namespaces
	  });

	  var translation = key ? t(key, combinedTOpts) : defaultValue;
	  var content = renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts, shouldUnescape);
	  var useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent;
	  return useAsParent ? (0, _react$5.createElement)(useAsParent, additionalProps, content) : content;
	}

	var useTranslation$2 = {};

	var slicedToArray = {exports: {}};

	var arrayWithHoles = {exports: {}};

	var hasRequiredArrayWithHoles;

	function requireArrayWithHoles () {
		if (hasRequiredArrayWithHoles) return arrayWithHoles.exports;
		hasRequiredArrayWithHoles = 1;
		(function (module) {
			function _arrayWithHoles(arr) {
			  if (Array.isArray(arr)) return arr;
			}

			module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (arrayWithHoles));
		return arrayWithHoles.exports;
	}

	var iterableToArrayLimit = {exports: {}};

	var hasRequiredIterableToArrayLimit;

	function requireIterableToArrayLimit () {
		if (hasRequiredIterableToArrayLimit) return iterableToArrayLimit.exports;
		hasRequiredIterableToArrayLimit = 1;
		(function (module) {
			function _iterableToArrayLimit(arr, i) {
			  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

			  if (_i == null) return;
			  var _arr = [];
			  var _n = true;
			  var _d = false;

			  var _s, _e;

			  try {
			    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
			      _arr.push(_s.value);

			      if (i && _arr.length === i) break;
			    }
			  } catch (err) {
			    _d = true;
			    _e = err;
			  } finally {
			    try {
			      if (!_n && _i["return"] != null) _i["return"]();
			    } finally {
			      if (_d) throw _e;
			    }
			  }

			  return _arr;
			}

			module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (iterableToArrayLimit));
		return iterableToArrayLimit.exports;
	}

	var unsupportedIterableToArray = {exports: {}};

	var arrayLikeToArray = {exports: {}};

	var hasRequiredArrayLikeToArray;

	function requireArrayLikeToArray () {
		if (hasRequiredArrayLikeToArray) return arrayLikeToArray.exports;
		hasRequiredArrayLikeToArray = 1;
		(function (module) {
			function _arrayLikeToArray(arr, len) {
			  if (len == null || len > arr.length) len = arr.length;

			  for (var i = 0, arr2 = new Array(len); i < len; i++) {
			    arr2[i] = arr[i];
			  }

			  return arr2;
			}

			module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (arrayLikeToArray));
		return arrayLikeToArray.exports;
	}

	var hasRequiredUnsupportedIterableToArray;

	function requireUnsupportedIterableToArray () {
		if (hasRequiredUnsupportedIterableToArray) return unsupportedIterableToArray.exports;
		hasRequiredUnsupportedIterableToArray = 1;
		(function (module) {
			var arrayLikeToArray = requireArrayLikeToArray();

			function _unsupportedIterableToArray(o, minLen) {
			  if (!o) return;
			  if (typeof o === "string") return arrayLikeToArray(o, minLen);
			  var n = Object.prototype.toString.call(o).slice(8, -1);
			  if (n === "Object" && o.constructor) n = o.constructor.name;
			  if (n === "Map" || n === "Set") return Array.from(o);
			  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
			}

			module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (unsupportedIterableToArray));
		return unsupportedIterableToArray.exports;
	}

	var nonIterableRest = {exports: {}};

	var hasRequiredNonIterableRest;

	function requireNonIterableRest () {
		if (hasRequiredNonIterableRest) return nonIterableRest.exports;
		hasRequiredNonIterableRest = 1;
		(function (module) {
			function _nonIterableRest() {
			  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
			}

			module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (nonIterableRest));
		return nonIterableRest.exports;
	}

	var hasRequiredSlicedToArray;

	function requireSlicedToArray () {
		if (hasRequiredSlicedToArray) return slicedToArray.exports;
		hasRequiredSlicedToArray = 1;
		(function (module) {
			var arrayWithHoles = requireArrayWithHoles();

			var iterableToArrayLimit = requireIterableToArrayLimit();

			var unsupportedIterableToArray = requireUnsupportedIterableToArray();

			var nonIterableRest = requireNonIterableRest();

			function _slicedToArray(arr, i) {
			  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
			}

			module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (slicedToArray));
		return slicedToArray.exports;
	}

	var _interopRequireDefault$3 = interopRequireDefault.exports;

	Object.defineProperty(useTranslation$2, "__esModule", {
	  value: true
	});
	useTranslation$2.useTranslation = useTranslation$1;

	var _slicedToArray2$2 = _interopRequireDefault$3(requireSlicedToArray());

	var _defineProperty2$2 = _interopRequireDefault$3(requireDefineProperty());

	var _react$4 = React__default$1["default"];

	var _context$3 = context;

	var _utils$2 = requireUtils();

	function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { (0, _defineProperty2$2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	var usePrevious$1 = function usePrevious(value, ignore) {
	  var ref = (0, _react$4.useRef)();
	  (0, _react$4.useEffect)(function () {
	    ref.current = ignore ? ref.current : value;
	  }, [value, ignore]);
	  return ref.current;
	};

	function useTranslation$1(ns) {
	  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var i18nFromProps = props.i18n;

	  var _ref = (0, _react$4.useContext)(_context$3.I18nContext) || {},
	      i18nFromContext = _ref.i18n,
	      defaultNSFromContext = _ref.defaultNS;

	  var i18n = i18nFromProps || i18nFromContext || (0, _context$3.getI18n)();
	  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new _context$3.ReportNamespaces();

	  if (!i18n) {
	    (0, _utils$2.warnOnce)('You will need to pass in an i18next instance by using initReactI18next');

	    var notReadyT = function notReadyT(k) {
	      return Array.isArray(k) ? k[k.length - 1] : k;
	    };

	    var retNotReady = [notReadyT, {}, false];
	    retNotReady.t = notReadyT;
	    retNotReady.i18n = {};
	    retNotReady.ready = false;
	    return retNotReady;
	  }

	  if (i18n.options.react && i18n.options.react.wait !== undefined) (0, _utils$2.warnOnce)('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');

	  var i18nOptions = _objectSpread$9(_objectSpread$9(_objectSpread$9({}, (0, _context$3.getDefaults)()), i18n.options.react), props);

	  var useSuspense = i18nOptions.useSuspense,
	      keyPrefix = i18nOptions.keyPrefix;
	  var namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
	  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
	  if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces);
	  var ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(function (n) {
	    return (0, _utils$2.hasLoadedNamespace)(n, i18n, i18nOptions);
	  });

	  function getT() {
	    return i18n.getFixedT(null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
	  }

	  var _useState = (0, _react$4.useState)(getT),
	      _useState2 = (0, _slicedToArray2$2["default"])(_useState, 2),
	      t = _useState2[0],
	      setT = _useState2[1];

	  var joinedNS = namespaces.join();
	  var previousJoinedNS = usePrevious$1(joinedNS);
	  var isMounted = (0, _react$4.useRef)(true);
	  (0, _react$4.useEffect)(function () {
	    var bindI18n = i18nOptions.bindI18n,
	        bindI18nStore = i18nOptions.bindI18nStore;
	    isMounted.current = true;

	    if (!ready && !useSuspense) {
	      (0, _utils$2.loadNamespaces)(i18n, namespaces, function () {
	        if (isMounted.current) setT(getT);
	      });
	    }

	    if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
	      setT(getT);
	    }

	    function boundReset() {
	      if (isMounted.current) setT(getT);
	    }

	    if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
	    if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset);
	    return function () {
	      isMounted.current = false;
	      if (bindI18n && i18n) bindI18n.split(' ').forEach(function (e) {
	        return i18n.off(e, boundReset);
	      });
	      if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(function (e) {
	        return i18n.store.off(e, boundReset);
	      });
	    };
	  }, [i18n, joinedNS]);
	  var isInitial = (0, _react$4.useRef)(true);
	  (0, _react$4.useEffect)(function () {
	    if (isMounted.current && !isInitial.current) {
	      setT(getT);
	    }

	    isInitial.current = false;
	  }, [i18n, keyPrefix]);
	  var ret = [t, i18n, ready];
	  ret.t = t;
	  ret.i18n = i18n;
	  ret.ready = ready;
	  if (ready) return ret;
	  if (!ready && !useSuspense) return ret;
	  throw new Promise(function (resolve) {
	    (0, _utils$2.loadNamespaces)(i18n, namespaces, function () {
	      resolve();
	    });
	  });
	}

	var withTranslation$1 = {};

	var _interopRequireDefault$2 = interopRequireDefault.exports;

	Object.defineProperty(withTranslation$1, "__esModule", {
	  value: true
	});
	withTranslation$1.withTranslation = withTranslation;

	var _defineProperty2$1 = _interopRequireDefault$2(requireDefineProperty());

	var _slicedToArray2$1 = _interopRequireDefault$2(requireSlicedToArray());

	var _objectWithoutProperties2$2 = _interopRequireDefault$2(requireObjectWithoutProperties());

	var _react$3 = React__default$1["default"];

	var _useTranslation3$1 = useTranslation$2;

	var _utils$1 = requireUtils();

	var _excluded$2 = ["forwardedRef"];

	function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { (0, _defineProperty2$1["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function withTranslation(ns) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  return function Extend(WrappedComponent) {
	    function I18nextWithTranslation(_ref) {
	      var forwardedRef = _ref.forwardedRef,
	          rest = (0, _objectWithoutProperties2$2["default"])(_ref, _excluded$2);

	      var _useTranslation = (0, _useTranslation3$1.useTranslation)(ns, _objectSpread$8(_objectSpread$8({}, rest), {}, {
	        keyPrefix: options.keyPrefix
	      })),
	          _useTranslation2 = (0, _slicedToArray2$1["default"])(_useTranslation, 3),
	          t = _useTranslation2[0],
	          i18n = _useTranslation2[1],
	          ready = _useTranslation2[2];

	      var passDownProps = _objectSpread$8(_objectSpread$8({}, rest), {}, {
	        t: t,
	        i18n: i18n,
	        tReady: ready
	      });

	      if (options.withRef && forwardedRef) {
	        passDownProps.ref = forwardedRef;
	      } else if (!options.withRef && forwardedRef) {
	        passDownProps.forwardedRef = forwardedRef;
	      }

	      return (0, _react$3.createElement)(WrappedComponent, passDownProps);
	    }

	    I18nextWithTranslation.displayName = "withI18nextTranslation(".concat((0, _utils$1.getDisplayName)(WrappedComponent), ")");
	    I18nextWithTranslation.WrappedComponent = WrappedComponent;

	    var forwardRef = function forwardRef(props, ref) {
	      return (0, _react$3.createElement)(I18nextWithTranslation, Object.assign({}, props, {
	        forwardedRef: ref
	      }));
	    };

	    return options.withRef ? (0, _react$3.forwardRef)(forwardRef) : I18nextWithTranslation;
	  };
	}

	var Translation$1 = {};

	var _interopRequireDefault$1 = interopRequireDefault.exports;

	Object.defineProperty(Translation$1, "__esModule", {
	  value: true
	});
	Translation$1.Translation = Translation;

	var _slicedToArray2 = _interopRequireDefault$1(requireSlicedToArray());

	var _objectWithoutProperties2$1 = _interopRequireDefault$1(requireObjectWithoutProperties());

	var _useTranslation3 = useTranslation$2;

	var _excluded$1 = ["ns", "children"];

	function Translation(props) {
	  var ns = props.ns,
	      children = props.children,
	      options = (0, _objectWithoutProperties2$1["default"])(props, _excluded$1);

	  var _useTranslation = (0, _useTranslation3.useTranslation)(ns, options),
	      _useTranslation2 = (0, _slicedToArray2["default"])(_useTranslation, 3),
	      t = _useTranslation2[0],
	      i18n = _useTranslation2[1],
	      ready = _useTranslation2[2];

	  return children(t, {
	    i18n: i18n,
	    lng: i18n.language
	  }, ready);
	}

	var I18nextProvider$1 = {};

	Object.defineProperty(I18nextProvider$1, "__esModule", {
	  value: true
	});
	I18nextProvider$1.I18nextProvider = I18nextProvider;

	var _react$2 = React__default$1["default"];

	var _context$2 = context;

	function I18nextProvider(_ref) {
	  var i18n = _ref.i18n,
	      defaultNS = _ref.defaultNS,
	      children = _ref.children;
	  var value = (0, _react$2.useMemo)(function () {
	    return {
	      i18n: i18n,
	      defaultNS: defaultNS
	    };
	  }, [i18n, defaultNS]);
	  return (0, _react$2.createElement)(_context$2.I18nContext.Provider, {
	    value: value
	  }, children);
	}

	var withSSR$1 = {};

	var useSSR$1 = {};

	Object.defineProperty(useSSR$1, "__esModule", {
	  value: true
	});
	useSSR$1.useSSR = useSSR;

	var _react$1 = React__default$1["default"];

	var _context$1 = context;

	function useSSR(initialI18nStore, initialLanguage) {
	  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var i18nFromProps = props.i18n;

	  var _ref = (0, _react$1.useContext)(_context$1.I18nContext) || {},
	      i18nFromContext = _ref.i18n;

	  var i18n = i18nFromProps || i18nFromContext || (0, _context$1.getI18n)();
	  if (i18n.options && i18n.options.isClone) return;

	  if (initialI18nStore && !i18n.initializedStoreOnce) {
	    i18n.services.resourceStore.data = initialI18nStore;
	    i18n.options.ns = Object.values(initialI18nStore).reduce(function (mem, lngResources) {
	      Object.keys(lngResources).forEach(function (ns) {
	        if (mem.indexOf(ns) < 0) mem.push(ns);
	      });
	      return mem;
	    }, i18n.options.ns);
	    i18n.initializedStoreOnce = true;
	    i18n.isInitialized = true;
	  }

	  if (initialLanguage && !i18n.initializedLanguageOnce) {
	    i18n.changeLanguage(initialLanguage);
	    i18n.initializedLanguageOnce = true;
	  }
	}

	var _interopRequireDefault = interopRequireDefault.exports;

	Object.defineProperty(withSSR$1, "__esModule", {
	  value: true
	});
	withSSR$1.withSSR = withSSR;

	var _defineProperty2 = _interopRequireDefault(requireDefineProperty());

	var _objectWithoutProperties2 = _interopRequireDefault(requireObjectWithoutProperties());

	var _react = React__default$1["default"];

	var _useSSR = useSSR$1;

	var _context = context;

	var _utils = requireUtils();

	var _excluded = ["initialI18nStore", "initialLanguage"];

	function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function withSSR() {
	  return function Extend(WrappedComponent) {
	    function I18nextWithSSR(_ref) {
	      var initialI18nStore = _ref.initialI18nStore,
	          initialLanguage = _ref.initialLanguage,
	          rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
	      (0, _useSSR.useSSR)(initialI18nStore, initialLanguage);
	      return (0, _react.createElement)(WrappedComponent, _objectSpread$7({}, rest));
	    }

	    I18nextWithSSR.getInitialProps = (0, _context.composeInitialProps)(WrappedComponent);
	    I18nextWithSSR.displayName = "withI18nextSSR(".concat((0, _utils.getDisplayName)(WrappedComponent), ")");
	    I18nextWithSSR.WrappedComponent = WrappedComponent;
	    return I18nextWithSSR;
	  };
	}

	(function (exports) {

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		Object.defineProperty(exports, "Trans", {
		  enumerable: true,
		  get: function get() {
		    return _Trans.Trans;
		  }
		});
		Object.defineProperty(exports, "useTranslation", {
		  enumerable: true,
		  get: function get() {
		    return _useTranslation.useTranslation;
		  }
		});
		Object.defineProperty(exports, "withTranslation", {
		  enumerable: true,
		  get: function get() {
		    return _withTranslation.withTranslation;
		  }
		});
		Object.defineProperty(exports, "Translation", {
		  enumerable: true,
		  get: function get() {
		    return _Translation.Translation;
		  }
		});
		Object.defineProperty(exports, "I18nextProvider", {
		  enumerable: true,
		  get: function get() {
		    return _I18nextProvider.I18nextProvider;
		  }
		});
		Object.defineProperty(exports, "withSSR", {
		  enumerable: true,
		  get: function get() {
		    return _withSSR.withSSR;
		  }
		});
		Object.defineProperty(exports, "useSSR", {
		  enumerable: true,
		  get: function get() {
		    return _useSSR.useSSR;
		  }
		});
		Object.defineProperty(exports, "I18nContext", {
		  enumerable: true,
		  get: function get() {
		    return _context.I18nContext;
		  }
		});
		Object.defineProperty(exports, "initReactI18next", {
		  enumerable: true,
		  get: function get() {
		    return _context.initReactI18next;
		  }
		});
		Object.defineProperty(exports, "setDefaults", {
		  enumerable: true,
		  get: function get() {
		    return _context.setDefaults;
		  }
		});
		Object.defineProperty(exports, "getDefaults", {
		  enumerable: true,
		  get: function get() {
		    return _context.getDefaults;
		  }
		});
		Object.defineProperty(exports, "setI18n", {
		  enumerable: true,
		  get: function get() {
		    return _context.setI18n;
		  }
		});
		Object.defineProperty(exports, "getI18n", {
		  enumerable: true,
		  get: function get() {
		    return _context.getI18n;
		  }
		});
		Object.defineProperty(exports, "composeInitialProps", {
		  enumerable: true,
		  get: function get() {
		    return _context.composeInitialProps;
		  }
		});
		Object.defineProperty(exports, "getInitialProps", {
		  enumerable: true,
		  get: function get() {
		    return _context.getInitialProps;
		  }
		});
		exports.selectOrdinal = exports.plural = exports.select = exports.number = exports.time = exports.date = void 0;

		var _Trans = Trans$1;

		var _useTranslation = useTranslation$2;

		var _withTranslation = withTranslation$1;

		var _Translation = Translation$1;

		var _I18nextProvider = I18nextProvider$1;

		var _withSSR = withSSR$1;

		var _useSSR = useSSR$1;

		var _context = context;

		var date = function date() {
		  return '';
		};

		exports.date = date;

		var time = function time() {
		  return '';
		};

		exports.time = time;

		var number = function number() {
		  return '';
		};

		exports.number = number;

		var select = function select() {
		  return '';
		};

		exports.select = select;

		var plural = function plural() {
		  return '';
		};

		exports.plural = plural;

		var selectOrdinal = function selectOrdinal() {
		  return '';
		};

		exports.selectOrdinal = selectOrdinal;
	} (commonjs));

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof(obj);
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };
	  return _setPrototypeOf(o, p);
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  Object.defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof(call) === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }

	  return _assertThisInitialized(self);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
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

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArray(iter) {
	  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	}

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _toArray(arr) {
	  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
	}

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	var consoleLogger = {
	  type: 'logger',
	  log: function log(args) {
	    this.output('log', args);
	  },
	  warn: function warn(args) {
	    this.output('warn', args);
	  },
	  error: function error(args) {
	    this.output('error', args);
	  },
	  output: function output(type, args) {
	    if (console && console[type]) console[type].apply(console, args);
	  }
	};

	var Logger = function () {
	  function Logger(concreteLogger) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, Logger);

	    this.init(concreteLogger, options);
	  }

	  _createClass(Logger, [{
	    key: "init",
	    value: function init(concreteLogger) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      this.prefix = options.prefix || 'i18next:';
	      this.logger = concreteLogger || consoleLogger;
	      this.options = options;
	      this.debug = options.debug;
	    }
	  }, {
	    key: "setDebug",
	    value: function setDebug(bool) {
	      this.debug = bool;
	    }
	  }, {
	    key: "log",
	    value: function log() {
	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return this.forward(args, 'log', '', true);
	    }
	  }, {
	    key: "warn",
	    value: function warn() {
	      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      return this.forward(args, 'warn', '', true);
	    }
	  }, {
	    key: "error",
	    value: function error() {
	      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }

	      return this.forward(args, 'error', '');
	    }
	  }, {
	    key: "deprecate",
	    value: function deprecate() {
	      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }

	      return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
	    }
	  }, {
	    key: "forward",
	    value: function forward(args, lvl, prefix, debugOnly) {
	      if (debugOnly && !this.debug) return null;
	      if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
	      return this.logger[lvl](args);
	    }
	  }, {
	    key: "create",
	    value: function create(moduleName) {
	      return new Logger(this.logger, _objectSpread(_objectSpread({}, {
	        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
	      }), this.options));
	    }
	  }, {
	    key: "clone",
	    value: function clone(options) {
	      options = options || this.options;
	      options.prefix = options.prefix || this.prefix;
	      return new Logger(this.logger, options);
	    }
	  }]);

	  return Logger;
	}();

	var baseLogger = new Logger();

	var EventEmitter = function () {
	  function EventEmitter() {
	    _classCallCheck(this, EventEmitter);

	    this.observers = {};
	  }

	  _createClass(EventEmitter, [{
	    key: "on",
	    value: function on(events, listener) {
	      var _this = this;

	      events.split(' ').forEach(function (event) {
	        _this.observers[event] = _this.observers[event] || [];

	        _this.observers[event].push(listener);
	      });
	      return this;
	    }
	  }, {
	    key: "off",
	    value: function off(event, listener) {
	      if (!this.observers[event]) return;

	      if (!listener) {
	        delete this.observers[event];
	        return;
	      }

	      this.observers[event] = this.observers[event].filter(function (l) {
	        return l !== listener;
	      });
	    }
	  }, {
	    key: "emit",
	    value: function emit(event) {
	      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      if (this.observers[event]) {
	        var cloned = [].concat(this.observers[event]);
	        cloned.forEach(function (observer) {
	          observer.apply(void 0, args);
	        });
	      }

	      if (this.observers['*']) {
	        var _cloned = [].concat(this.observers['*']);

	        _cloned.forEach(function (observer) {
	          observer.apply(observer, [event].concat(args));
	        });
	      }
	    }
	  }]);

	  return EventEmitter;
	}();

	function defer() {
	  var res;
	  var rej;
	  var promise = new Promise(function (resolve, reject) {
	    res = resolve;
	    rej = reject;
	  });
	  promise.resolve = res;
	  promise.reject = rej;
	  return promise;
	}
	function makeString(object) {
	  if (object == null) return '';
	  return '' + object;
	}
	function copy(a, s, t) {
	  a.forEach(function (m) {
	    if (s[m]) t[m] = s[m];
	  });
	}

	function getLastOfPath(object, path, Empty) {
	  function cleanKey(key) {
	    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
	  }

	  function canNotTraverseDeeper() {
	    return !object || typeof object === 'string';
	  }

	  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');

	  while (stack.length > 1) {
	    if (canNotTraverseDeeper()) return {};
	    var key = cleanKey(stack.shift());
	    if (!object[key] && Empty) object[key] = new Empty();

	    if (Object.prototype.hasOwnProperty.call(object, key)) {
	      object = object[key];
	    } else {
	      object = {};
	    }
	  }

	  if (canNotTraverseDeeper()) return {};
	  return {
	    obj: object,
	    k: cleanKey(stack.shift())
	  };
	}

	function setPath(object, path, newValue) {
	  var _getLastOfPath = getLastOfPath(object, path, Object),
	      obj = _getLastOfPath.obj,
	      k = _getLastOfPath.k;

	  obj[k] = newValue;
	}
	function pushPath(object, path, newValue, concat) {
	  var _getLastOfPath2 = getLastOfPath(object, path, Object),
	      obj = _getLastOfPath2.obj,
	      k = _getLastOfPath2.k;

	  obj[k] = obj[k] || [];
	  if (concat) obj[k] = obj[k].concat(newValue);
	  if (!concat) obj[k].push(newValue);
	}
	function getPath(object, path) {
	  var _getLastOfPath3 = getLastOfPath(object, path),
	      obj = _getLastOfPath3.obj,
	      k = _getLastOfPath3.k;

	  if (!obj) return undefined;
	  return obj[k];
	}
	function getPathWithDefaults(data, defaultData, key) {
	  var value = getPath(data, key);

	  if (value !== undefined) {
	    return value;
	  }

	  return getPath(defaultData, key);
	}
	function deepExtend(target, source, overwrite) {
	  for (var prop in source) {
	    if (prop !== '__proto__' && prop !== 'constructor') {
	      if (prop in target) {
	        if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
	          if (overwrite) target[prop] = source[prop];
	        } else {
	          deepExtend(target[prop], source[prop], overwrite);
	        }
	      } else {
	        target[prop] = source[prop];
	      }
	    }
	  }

	  return target;
	}
	function regexEscape(str) {
	  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
	}
	var _entityMap = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#39;',
	  '/': '&#x2F;'
	};
	function escape$1(data) {
	  if (typeof data === 'string') {
	    return data.replace(/[&<>"'\/]/g, function (s) {
	      return _entityMap[s];
	    });
	  }

	  return data;
	}
	var isIE10 = typeof window !== 'undefined' && window.navigator && typeof window.navigator.userAgentData === 'undefined' && window.navigator.userAgent && window.navigator.userAgent.indexOf('MSIE') > -1;
	var chars = [' ', ',', '?', '!', ';'];
	function looksLikeObjectPath(key, nsSeparator, keySeparator) {
	  nsSeparator = nsSeparator || '';
	  keySeparator = keySeparator || '';
	  var possibleChars = chars.filter(function (c) {
	    return nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0;
	  });
	  if (possibleChars.length === 0) return true;
	  var r = new RegExp("(".concat(possibleChars.map(function (c) {
	    return c === '?' ? '\\?' : c;
	  }).join('|'), ")"));
	  var matched = !r.test(key);

	  if (!matched) {
	    var ki = key.indexOf(keySeparator);

	    if (ki > 0 && !r.test(key.substring(0, ki))) {
	      matched = true;
	    }
	  }

	  return matched;
	}

	function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function deepFind(obj, path) {
	  var keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
	  if (!obj) return undefined;
	  if (obj[path]) return obj[path];
	  var paths = path.split(keySeparator);
	  var current = obj;

	  for (var i = 0; i < paths.length; ++i) {
	    if (!current) return undefined;

	    if (typeof current[paths[i]] === 'string' && i + 1 < paths.length) {
	      return undefined;
	    }

	    if (current[paths[i]] === undefined) {
	      var j = 2;
	      var p = paths.slice(i, i + j).join(keySeparator);
	      var mix = current[p];

	      while (mix === undefined && paths.length > i + j) {
	        j++;
	        p = paths.slice(i, i + j).join(keySeparator);
	        mix = current[p];
	      }

	      if (mix === undefined) return undefined;
	      if (mix === null) return null;

	      if (path.endsWith(p)) {
	        if (typeof mix === 'string') return mix;
	        if (p && typeof mix[p] === 'string') return mix[p];
	      }

	      var joinedPath = paths.slice(i + j).join(keySeparator);
	      if (joinedPath) return deepFind(mix, joinedPath, keySeparator);
	      return undefined;
	    }

	    current = current[paths[i]];
	  }

	  return current;
	}

	var ResourceStore = function (_EventEmitter) {
	  _inherits(ResourceStore, _EventEmitter);

	  var _super = _createSuper(ResourceStore);

	  function ResourceStore(data) {
	    var _this;

	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	      ns: ['translation'],
	      defaultNS: 'translation'
	    };

	    _classCallCheck(this, ResourceStore);

	    _this = _super.call(this);

	    if (isIE10) {
	      EventEmitter.call(_assertThisInitialized(_this));
	    }

	    _this.data = data || {};
	    _this.options = options;

	    if (_this.options.keySeparator === undefined) {
	      _this.options.keySeparator = '.';
	    }

	    if (_this.options.ignoreJSONStructure === undefined) {
	      _this.options.ignoreJSONStructure = true;
	    }

	    return _this;
	  }

	  _createClass(ResourceStore, [{
	    key: "addNamespaces",
	    value: function addNamespaces(ns) {
	      if (this.options.ns.indexOf(ns) < 0) {
	        this.options.ns.push(ns);
	      }
	    }
	  }, {
	    key: "removeNamespaces",
	    value: function removeNamespaces(ns) {
	      var index = this.options.ns.indexOf(ns);

	      if (index > -1) {
	        this.options.ns.splice(index, 1);
	      }
	    }
	  }, {
	    key: "getResource",
	    value: function getResource(lng, ns, key) {
	      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
	      var ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
	      var path = [lng, ns];
	      if (key && typeof key !== 'string') path = path.concat(key);
	      if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

	      if (lng.indexOf('.') > -1) {
	        path = lng.split('.');
	      }

	      var result = getPath(this.data, path);
	      if (result || !ignoreJSONStructure || typeof key !== 'string') return result;
	      return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
	    }
	  }, {
	    key: "addResource",
	    value: function addResource(lng, ns, key, value) {
	      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
	        silent: false
	      };
	      var keySeparator = this.options.keySeparator;
	      if (keySeparator === undefined) keySeparator = '.';
	      var path = [lng, ns];
	      if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

	      if (lng.indexOf('.') > -1) {
	        path = lng.split('.');
	        value = ns;
	        ns = path[1];
	      }

	      this.addNamespaces(ns);
	      setPath(this.data, path, value);
	      if (!options.silent) this.emit('added', lng, ns, key, value);
	    }
	  }, {
	    key: "addResources",
	    value: function addResources(lng, ns, resources) {
	      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
	        silent: false
	      };

	      for (var m in resources) {
	        if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
	          silent: true
	        });
	      }

	      if (!options.silent) this.emit('added', lng, ns, resources);
	    }
	  }, {
	    key: "addResourceBundle",
	    value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
	      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
	        silent: false
	      };
	      var path = [lng, ns];

	      if (lng.indexOf('.') > -1) {
	        path = lng.split('.');
	        deep = resources;
	        resources = ns;
	        ns = path[1];
	      }

	      this.addNamespaces(ns);
	      var pack = getPath(this.data, path) || {};

	      if (deep) {
	        deepExtend(pack, resources, overwrite);
	      } else {
	        pack = _objectSpread$1(_objectSpread$1({}, pack), resources);
	      }

	      setPath(this.data, path, pack);
	      if (!options.silent) this.emit('added', lng, ns, resources);
	    }
	  }, {
	    key: "removeResourceBundle",
	    value: function removeResourceBundle(lng, ns) {
	      if (this.hasResourceBundle(lng, ns)) {
	        delete this.data[lng][ns];
	      }

	      this.removeNamespaces(ns);
	      this.emit('removed', lng, ns);
	    }
	  }, {
	    key: "hasResourceBundle",
	    value: function hasResourceBundle(lng, ns) {
	      return this.getResource(lng, ns) !== undefined;
	    }
	  }, {
	    key: "getResourceBundle",
	    value: function getResourceBundle(lng, ns) {
	      if (!ns) ns = this.options.defaultNS;
	      if (this.options.compatibilityAPI === 'v1') return _objectSpread$1(_objectSpread$1({}, {}), this.getResource(lng, ns));
	      return this.getResource(lng, ns);
	    }
	  }, {
	    key: "getDataByLanguage",
	    value: function getDataByLanguage(lng) {
	      return this.data[lng];
	    }
	  }, {
	    key: "hasLanguageSomeTranslations",
	    value: function hasLanguageSomeTranslations(lng) {
	      var data = this.getDataByLanguage(lng);
	      var n = data && Object.keys(data) || [];
	      return !!n.find(function (v) {
	        return data[v] && Object.keys(data[v]).length > 0;
	      });
	    }
	  }, {
	    key: "toJSON",
	    value: function toJSON() {
	      return this.data;
	    }
	  }]);

	  return ResourceStore;
	}(EventEmitter);

	var postProcessor = {
	  processors: {},
	  addPostProcessor: function addPostProcessor(module) {
	    this.processors[module.name] = module;
	  },
	  handle: function handle(processors, value, key, options, translator) {
	    var _this = this;

	    processors.forEach(function (processor) {
	      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
	    });
	    return value;
	  }
	};

	function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var checkedLoadedFor = {};

	var Translator = function (_EventEmitter) {
	  _inherits(Translator, _EventEmitter);

	  var _super = _createSuper$1(Translator);

	  function Translator(services) {
	    var _this;

	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, Translator);

	    _this = _super.call(this);

	    if (isIE10) {
	      EventEmitter.call(_assertThisInitialized(_this));
	    }

	    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, _assertThisInitialized(_this));
	    _this.options = options;

	    if (_this.options.keySeparator === undefined) {
	      _this.options.keySeparator = '.';
	    }

	    _this.logger = baseLogger.create('translator');
	    return _this;
	  }

	  _createClass(Translator, [{
	    key: "changeLanguage",
	    value: function changeLanguage(lng) {
	      if (lng) this.language = lng;
	    }
	  }, {
	    key: "exists",
	    value: function exists(key) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	        interpolation: {}
	      };

	      if (key === undefined || key === null) {
	        return false;
	      }

	      var resolved = this.resolve(key, options);
	      return resolved && resolved.res !== undefined;
	    }
	  }, {
	    key: "extractFromKey",
	    value: function extractFromKey(key, options) {
	      var nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
	      if (nsSeparator === undefined) nsSeparator = ':';
	      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
	      var namespaces = options.ns || this.options.defaultNS || [];
	      var wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
	      var seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);

	      if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
	        var m = key.match(this.interpolator.nestingRegexp);

	        if (m && m.length > 0) {
	          return {
	            key: key,
	            namespaces: namespaces
	          };
	        }

	        var parts = key.split(nsSeparator);
	        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
	        key = parts.join(keySeparator);
	      }

	      if (typeof namespaces === 'string') namespaces = [namespaces];
	      return {
	        key: key,
	        namespaces: namespaces
	      };
	    }
	  }, {
	    key: "translate",
	    value: function translate(keys, options, lastKey) {
	      var _this2 = this;

	      if (_typeof(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
	        options = this.options.overloadTranslationOptionHandler(arguments);
	      }

	      if (!options) options = {};
	      if (keys === undefined || keys === null) return '';
	      if (!Array.isArray(keys)) keys = [String(keys)];
	      var returnDetails = options.returnDetails !== undefined ? options.returnDetails : this.options.returnDetails;
	      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;

	      var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
	          key = _this$extractFromKey.key,
	          namespaces = _this$extractFromKey.namespaces;

	      var namespace = namespaces[namespaces.length - 1];
	      var lng = options.lng || this.language;
	      var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;

	      if (lng && lng.toLowerCase() === 'cimode') {
	        if (appendNamespaceToCIMode) {
	          var nsSeparator = options.nsSeparator || this.options.nsSeparator;

	          if (returnDetails) {
	            resolved.res = "".concat(namespace).concat(nsSeparator).concat(key);
	            return resolved;
	          }

	          return "".concat(namespace).concat(nsSeparator).concat(key);
	        }

	        if (returnDetails) {
	          resolved.res = key;
	          return resolved;
	        }

	        return key;
	      }

	      var resolved = this.resolve(keys, options);
	      var res = resolved && resolved.res;
	      var resUsedKey = resolved && resolved.usedKey || key;
	      var resExactUsedKey = resolved && resolved.exactUsedKey || key;
	      var resType = Object.prototype.toString.apply(res);
	      var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
	      var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
	      var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
	      var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';

	      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
	        if (!options.returnObjects && !this.options.returnObjects) {
	          if (!this.options.returnedObjectHandler) {
	            this.logger.warn('accessing an object - but returnObjects options is not enabled!');
	          }

	          var r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, _objectSpread$2(_objectSpread$2({}, options), {}, {
	            ns: namespaces
	          })) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");

	          if (returnDetails) {
	            resolved.res = r;
	            return resolved;
	          }

	          return r;
	        }

	        if (keySeparator) {
	          var resTypeIsArray = resType === '[object Array]';
	          var copy = resTypeIsArray ? [] : {};
	          var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;

	          for (var m in res) {
	            if (Object.prototype.hasOwnProperty.call(res, m)) {
	              var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
	              copy[m] = this.translate(deepKey, _objectSpread$2(_objectSpread$2({}, options), {
	                joinArrays: false,
	                ns: namespaces
	              }));
	              if (copy[m] === deepKey) copy[m] = res[m];
	            }
	          }

	          res = copy;
	        }
	      } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
	        res = res.join(joinArrays);
	        if (res) res = this.extendTranslation(res, keys, options, lastKey);
	      } else {
	        var usedDefault = false;
	        var usedKey = false;
	        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
	        var hasDefaultValue = Translator.hasDefaultValue(options);
	        var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : '';
	        var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;

	        if (!this.isValidLookup(res) && hasDefaultValue) {
	          usedDefault = true;
	          res = defaultValue;
	        }

	        if (!this.isValidLookup(res)) {
	          usedKey = true;
	          res = key;
	        }

	        var missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
	        var resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
	        var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;

	        if (usedKey || usedDefault || updateMissing) {
	          this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);

	          if (keySeparator) {
	            var fk = this.resolve(key, _objectSpread$2(_objectSpread$2({}, options), {}, {
	              keySeparator: false
	            }));
	            if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
	          }

	          var lngs = [];
	          var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);

	          if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
	            for (var i = 0; i < fallbackLngs.length; i++) {
	              lngs.push(fallbackLngs[i]);
	            }
	          } else if (this.options.saveMissingTo === 'all') {
	            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
	          } else {
	            lngs.push(options.lng || this.language);
	          }

	          var send = function send(l, k, specificDefaultValue) {
	            var defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;

	            if (_this2.options.missingKeyHandler) {
	              _this2.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
	            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
	              _this2.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
	            }

	            _this2.emit('missingKey', l, namespace, k, res);
	          };

	          if (this.options.saveMissing) {
	            if (this.options.saveMissingPlurals && needsPluralHandling) {
	              lngs.forEach(function (language) {
	                _this2.pluralResolver.getSuffixes(language, options).forEach(function (suffix) {
	                  send([language], key + suffix, options["defaultValue".concat(suffix)] || defaultValue);
	                });
	              });
	            } else {
	              send(lngs, key, defaultValue);
	            }
	          }
	        }

	        res = this.extendTranslation(res, keys, options, resolved, lastKey);
	        if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key);

	        if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
	          if (this.options.compatibilityAPI !== 'v1') {
	            res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(namespace, ":").concat(key) : key, usedDefault ? res : undefined);
	          } else {
	            res = this.options.parseMissingKeyHandler(res);
	          }
	        }
	      }

	      if (returnDetails) {
	        resolved.res = res;
	        return resolved;
	      }

	      return res;
	    }
	  }, {
	    key: "extendTranslation",
	    value: function extendTranslation(res, key, options, resolved, lastKey) {
	      var _this3 = this;

	      if (this.i18nFormat && this.i18nFormat.parse) {
	        res = this.i18nFormat.parse(res, _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), options), resolved.usedLng, resolved.usedNS, resolved.usedKey, {
	          resolved: resolved
	        });
	      } else if (!options.skipInterpolation) {
	        if (options.interpolation) this.interpolator.init(_objectSpread$2(_objectSpread$2({}, options), {
	          interpolation: _objectSpread$2(_objectSpread$2({}, this.options.interpolation), options.interpolation)
	        }));
	        var skipOnVariables = typeof res === 'string' && (options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
	        var nestBef;

	        if (skipOnVariables) {
	          var nb = res.match(this.interpolator.nestingRegexp);
	          nestBef = nb && nb.length;
	        }

	        var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
	        if (this.options.interpolation.defaultVariables) data = _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), data);
	        res = this.interpolator.interpolate(res, data, options.lng || this.language, options);

	        if (skipOnVariables) {
	          var na = res.match(this.interpolator.nestingRegexp);
	          var nestAft = na && na.length;
	          if (nestBef < nestAft) options.nest = false;
	        }

	        if (options.nest !== false) res = this.interpolator.nest(res, function () {
	          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }

	          if (lastKey && lastKey[0] === args[0] && !options.context) {
	            _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));

	            return null;
	          }

	          return _this3.translate.apply(_this3, args.concat([key]));
	        }, options);
	        if (options.interpolation) this.interpolator.reset();
	      }

	      var postProcess = options.postProcess || this.options.postProcess;
	      var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

	      if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
	        res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread$2({
	          i18nResolved: resolved
	        }, options) : options, this);
	      }

	      return res;
	    }
	  }, {
	    key: "resolve",
	    value: function resolve(keys) {
	      var _this4 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var found;
	      var usedKey;
	      var exactUsedKey;
	      var usedLng;
	      var usedNS;
	      if (typeof keys === 'string') keys = [keys];
	      keys.forEach(function (k) {
	        if (_this4.isValidLookup(found)) return;

	        var extracted = _this4.extractFromKey(k, options);

	        var key = extracted.key;
	        usedKey = key;
	        var namespaces = extracted.namespaces;
	        if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
	        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';

	        var needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && _this4.pluralResolver.shouldUseIntlApi();

	        var needsContextHandling = options.context !== undefined && (typeof options.context === 'string' || typeof options.context === 'number') && options.context !== '';
	        var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
	        namespaces.forEach(function (ns) {
	          if (_this4.isValidLookup(found)) return;
	          usedNS = ns;

	          if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
	            checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;

	            _this4.logger.warn("key \"".concat(usedKey, "\" for languages \"").concat(codes.join(', '), "\" won't get resolved as namespace \"").concat(usedNS, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
	          }

	          codes.forEach(function (code) {
	            if (_this4.isValidLookup(found)) return;
	            usedLng = code;
	            var finalKeys = [key];

	            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
	              _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
	            } else {
	              var pluralSuffix;
	              if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count, options);
	              var zeroSuffix = "".concat(_this4.options.pluralSeparator, "zero");

	              if (needsPluralHandling) {
	                finalKeys.push(key + pluralSuffix);

	                if (needsZeroSuffixLookup) {
	                  finalKeys.push(key + zeroSuffix);
	                }
	              }

	              if (needsContextHandling) {
	                var contextKey = "".concat(key).concat(_this4.options.contextSeparator).concat(options.context);
	                finalKeys.push(contextKey);

	                if (needsPluralHandling) {
	                  finalKeys.push(contextKey + pluralSuffix);

	                  if (needsZeroSuffixLookup) {
	                    finalKeys.push(contextKey + zeroSuffix);
	                  }
	                }
	              }
	            }

	            var possibleKey;

	            while (possibleKey = finalKeys.pop()) {
	              if (!_this4.isValidLookup(found)) {
	                exactUsedKey = possibleKey;
	                found = _this4.getResource(code, ns, possibleKey, options);
	              }
	            }
	          });
	        });
	      });
	      return {
	        res: found,
	        usedKey: usedKey,
	        exactUsedKey: exactUsedKey,
	        usedLng: usedLng,
	        usedNS: usedNS
	      };
	    }
	  }, {
	    key: "isValidLookup",
	    value: function isValidLookup(res) {
	      return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
	    }
	  }, {
	    key: "getResource",
	    value: function getResource(code, ns, key) {
	      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	      if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
	      return this.resourceStore.getResource(code, ns, key, options);
	    }
	  }], [{
	    key: "hasDefaultValue",
	    value: function hasDefaultValue(options) {
	      var prefix = 'defaultValue';

	      for (var option in options) {
	        if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
	          return true;
	        }
	      }

	      return false;
	    }
	  }]);

	  return Translator;
	}(EventEmitter);

	function capitalize(string) {
	  return string.charAt(0).toUpperCase() + string.slice(1);
	}

	var LanguageUtil = function () {
	  function LanguageUtil(options) {
	    _classCallCheck(this, LanguageUtil);

	    this.options = options;
	    this.supportedLngs = this.options.supportedLngs || false;
	    this.logger = baseLogger.create('languageUtils');
	  }

	  _createClass(LanguageUtil, [{
	    key: "getScriptPartFromCode",
	    value: function getScriptPartFromCode(code) {
	      if (!code || code.indexOf('-') < 0) return null;
	      var p = code.split('-');
	      if (p.length === 2) return null;
	      p.pop();
	      if (p[p.length - 1].toLowerCase() === 'x') return null;
	      return this.formatLanguageCode(p.join('-'));
	    }
	  }, {
	    key: "getLanguagePartFromCode",
	    value: function getLanguagePartFromCode(code) {
	      if (!code || code.indexOf('-') < 0) return code;
	      var p = code.split('-');
	      return this.formatLanguageCode(p[0]);
	    }
	  }, {
	    key: "formatLanguageCode",
	    value: function formatLanguageCode(code) {
	      if (typeof code === 'string' && code.indexOf('-') > -1) {
	        var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
	        var p = code.split('-');

	        if (this.options.lowerCaseLng) {
	          p = p.map(function (part) {
	            return part.toLowerCase();
	          });
	        } else if (p.length === 2) {
	          p[0] = p[0].toLowerCase();
	          p[1] = p[1].toUpperCase();
	          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
	        } else if (p.length === 3) {
	          p[0] = p[0].toLowerCase();
	          if (p[1].length === 2) p[1] = p[1].toUpperCase();
	          if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
	          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
	          if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
	        }

	        return p.join('-');
	      }

	      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
	    }
	  }, {
	    key: "isSupportedCode",
	    value: function isSupportedCode(code) {
	      if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
	        code = this.getLanguagePartFromCode(code);
	      }

	      return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
	    }
	  }, {
	    key: "getBestMatchFromCodes",
	    value: function getBestMatchFromCodes(codes) {
	      var _this = this;

	      if (!codes) return null;
	      var found;
	      codes.forEach(function (code) {
	        if (found) return;

	        var cleanedLng = _this.formatLanguageCode(code);

	        if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng)) found = cleanedLng;
	      });

	      if (!found && this.options.supportedLngs) {
	        codes.forEach(function (code) {
	          if (found) return;

	          var lngOnly = _this.getLanguagePartFromCode(code);

	          if (_this.isSupportedCode(lngOnly)) return found = lngOnly;
	          found = _this.options.supportedLngs.find(function (supportedLng) {
	            if (supportedLng.indexOf(lngOnly) === 0) return supportedLng;
	          });
	        });
	      }

	      if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
	      return found;
	    }
	  }, {
	    key: "getFallbackCodes",
	    value: function getFallbackCodes(fallbacks, code) {
	      if (!fallbacks) return [];
	      if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
	      if (typeof fallbacks === 'string') fallbacks = [fallbacks];
	      if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
	      if (!code) return fallbacks["default"] || [];
	      var found = fallbacks[code];
	      if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
	      if (!found) found = fallbacks[this.formatLanguageCode(code)];
	      if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
	      if (!found) found = fallbacks["default"];
	      return found || [];
	    }
	  }, {
	    key: "toResolveHierarchy",
	    value: function toResolveHierarchy(code, fallbackCode) {
	      var _this2 = this;

	      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
	      var codes = [];

	      var addCode = function addCode(c) {
	        if (!c) return;

	        if (_this2.isSupportedCode(c)) {
	          codes.push(c);
	        } else {
	          _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
	        }
	      };

	      if (typeof code === 'string' && code.indexOf('-') > -1) {
	        if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
	        if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
	        if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
	      } else if (typeof code === 'string') {
	        addCode(this.formatLanguageCode(code));
	      }

	      fallbackCodes.forEach(function (fc) {
	        if (codes.indexOf(fc) < 0) addCode(_this2.formatLanguageCode(fc));
	      });
	      return codes;
	    }
	  }]);

	  return LanguageUtil;
	}();

	var sets = [{
	  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'tl', 'ti', 'tr', 'uz', 'wa'],
	  nr: [1, 2],
	  fc: 1
	}, {
	  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kk', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
	  nr: [1, 2],
	  fc: 2
	}, {
	  lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
	  nr: [1],
	  fc: 3
	}, {
	  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
	  nr: [1, 2, 5],
	  fc: 4
	}, {
	  lngs: ['ar'],
	  nr: [0, 1, 2, 3, 11, 100],
	  fc: 5
	}, {
	  lngs: ['cs', 'sk'],
	  nr: [1, 2, 5],
	  fc: 6
	}, {
	  lngs: ['csb', 'pl'],
	  nr: [1, 2, 5],
	  fc: 7
	}, {
	  lngs: ['cy'],
	  nr: [1, 2, 3, 8],
	  fc: 8
	}, {
	  lngs: ['fr'],
	  nr: [1, 2],
	  fc: 9
	}, {
	  lngs: ['ga'],
	  nr: [1, 2, 3, 7, 11],
	  fc: 10
	}, {
	  lngs: ['gd'],
	  nr: [1, 2, 3, 20],
	  fc: 11
	}, {
	  lngs: ['is'],
	  nr: [1, 2],
	  fc: 12
	}, {
	  lngs: ['jv'],
	  nr: [0, 1],
	  fc: 13
	}, {
	  lngs: ['kw'],
	  nr: [1, 2, 3, 4],
	  fc: 14
	}, {
	  lngs: ['lt'],
	  nr: [1, 2, 10],
	  fc: 15
	}, {
	  lngs: ['lv'],
	  nr: [1, 2, 0],
	  fc: 16
	}, {
	  lngs: ['mk'],
	  nr: [1, 2],
	  fc: 17
	}, {
	  lngs: ['mnk'],
	  nr: [0, 1, 2],
	  fc: 18
	}, {
	  lngs: ['mt'],
	  nr: [1, 2, 11, 20],
	  fc: 19
	}, {
	  lngs: ['or'],
	  nr: [2, 1],
	  fc: 2
	}, {
	  lngs: ['ro'],
	  nr: [1, 2, 20],
	  fc: 20
	}, {
	  lngs: ['sl'],
	  nr: [5, 1, 2, 3],
	  fc: 21
	}, {
	  lngs: ['he', 'iw'],
	  nr: [1, 2, 20, 21],
	  fc: 22
	}];
	var _rulesPluralsTypes = {
	  1: function _(n) {
	    return Number(n > 1);
	  },
	  2: function _(n) {
	    return Number(n != 1);
	  },
	  3: function _(n) {
	    return 0;
	  },
	  4: function _(n) {
	    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
	  },
	  5: function _(n) {
	    return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
	  },
	  6: function _(n) {
	    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
	  },
	  7: function _(n) {
	    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
	  },
	  8: function _(n) {
	    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
	  },
	  9: function _(n) {
	    return Number(n >= 2);
	  },
	  10: function _(n) {
	    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
	  },
	  11: function _(n) {
	    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
	  },
	  12: function _(n) {
	    return Number(n % 10 != 1 || n % 100 == 11);
	  },
	  13: function _(n) {
	    return Number(n !== 0);
	  },
	  14: function _(n) {
	    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
	  },
	  15: function _(n) {
	    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
	  },
	  16: function _(n) {
	    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
	  },
	  17: function _(n) {
	    return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
	  },
	  18: function _(n) {
	    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
	  },
	  19: function _(n) {
	    return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
	  },
	  20: function _(n) {
	    return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
	  },
	  21: function _(n) {
	    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
	  },
	  22: function _(n) {
	    return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
	  }
	};
	var deprecatedJsonVersions = ['v1', 'v2', 'v3'];
	var suffixesOrder = {
	  zero: 0,
	  one: 1,
	  two: 2,
	  few: 3,
	  many: 4,
	  other: 5
	};

	function createRules() {
	  var rules = {};
	  sets.forEach(function (set) {
	    set.lngs.forEach(function (l) {
	      rules[l] = {
	        numbers: set.nr,
	        plurals: _rulesPluralsTypes[set.fc]
	      };
	    });
	  });
	  return rules;
	}

	var PluralResolver = function () {
	  function PluralResolver(languageUtils) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, PluralResolver);

	    this.languageUtils = languageUtils;
	    this.options = options;
	    this.logger = baseLogger.create('pluralResolver');

	    if ((!this.options.compatibilityJSON || this.options.compatibilityJSON === 'v4') && (typeof Intl === 'undefined' || !Intl.PluralRules)) {
	      this.options.compatibilityJSON = 'v3';
	      this.logger.error('Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.');
	    }

	    this.rules = createRules();
	  }

	  _createClass(PluralResolver, [{
	    key: "addRule",
	    value: function addRule(lng, obj) {
	      this.rules[lng] = obj;
	    }
	  }, {
	    key: "getRule",
	    value: function getRule(code) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      if (this.shouldUseIntlApi()) {
	        try {
	          return new Intl.PluralRules(code, {
	            type: options.ordinal ? 'ordinal' : 'cardinal'
	          });
	        } catch (_unused) {
	          return;
	        }
	      }

	      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
	    }
	  }, {
	    key: "needsPlural",
	    value: function needsPlural(code) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var rule = this.getRule(code, options);

	      if (this.shouldUseIntlApi()) {
	        return rule && rule.resolvedOptions().pluralCategories.length > 1;
	      }

	      return rule && rule.numbers.length > 1;
	    }
	  }, {
	    key: "getPluralFormsOfKey",
	    value: function getPluralFormsOfKey(code, key) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      return this.getSuffixes(code, options).map(function (suffix) {
	        return "".concat(key).concat(suffix);
	      });
	    }
	  }, {
	    key: "getSuffixes",
	    value: function getSuffixes(code) {
	      var _this = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var rule = this.getRule(code, options);

	      if (!rule) {
	        return [];
	      }

	      if (this.shouldUseIntlApi()) {
	        return rule.resolvedOptions().pluralCategories.sort(function (pluralCategory1, pluralCategory2) {
	          return suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2];
	        }).map(function (pluralCategory) {
	          return "".concat(_this.options.prepend).concat(pluralCategory);
	        });
	      }

	      return rule.numbers.map(function (number) {
	        return _this.getSuffix(code, number, options);
	      });
	    }
	  }, {
	    key: "getSuffix",
	    value: function getSuffix(code, count) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      var rule = this.getRule(code, options);

	      if (rule) {
	        if (this.shouldUseIntlApi()) {
	          return "".concat(this.options.prepend).concat(rule.select(count));
	        }

	        return this.getSuffixRetroCompatible(rule, count);
	      }

	      this.logger.warn("no plural rule found for: ".concat(code));
	      return '';
	    }
	  }, {
	    key: "getSuffixRetroCompatible",
	    value: function getSuffixRetroCompatible(rule, count) {
	      var _this2 = this;

	      var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
	      var suffix = rule.numbers[idx];

	      if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
	        if (suffix === 2) {
	          suffix = 'plural';
	        } else if (suffix === 1) {
	          suffix = '';
	        }
	      }

	      var returnSuffix = function returnSuffix() {
	        return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
	      };

	      if (this.options.compatibilityJSON === 'v1') {
	        if (suffix === 1) return '';
	        if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
	        return returnSuffix();
	      } else if (this.options.compatibilityJSON === 'v2') {
	        return returnSuffix();
	      } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
	        return returnSuffix();
	      }

	      return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
	    }
	  }, {
	    key: "shouldUseIntlApi",
	    value: function shouldUseIntlApi() {
	      return !deprecatedJsonVersions.includes(this.options.compatibilityJSON);
	    }
	  }]);

	  return PluralResolver;
	}();

	function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	var Interpolator = function () {
	  function Interpolator() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, Interpolator);

	    this.logger = baseLogger.create('interpolator');
	    this.options = options;

	    this.format = options.interpolation && options.interpolation.format || function (value) {
	      return value;
	    };

	    this.init(options);
	  }

	  _createClass(Interpolator, [{
	    key: "init",
	    value: function init() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      if (!options.interpolation) options.interpolation = {
	        escapeValue: true
	      };
	      var iOpts = options.interpolation;
	      this.escape = iOpts.escape !== undefined ? iOpts.escape : escape$1;
	      this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
	      this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
	      this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
	      this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
	      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
	      this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
	      this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
	      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
	      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
	      this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ',';
	      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
	      this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
	      this.resetRegExp();
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      if (this.options) this.init(this.options);
	    }
	  }, {
	    key: "resetRegExp",
	    value: function resetRegExp() {
	      var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
	      this.regexp = new RegExp(regexpStr, 'g');
	      var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
	      this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
	      var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
	      this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
	    }
	  }, {
	    key: "interpolate",
	    value: function interpolate(str, data, lng, options) {
	      var _this = this;

	      var match;
	      var value;
	      var replaces;
	      var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

	      function regexSafe(val) {
	        return val.replace(/\$/g, '$$$$');
	      }

	      var handleFormat = function handleFormat(key) {
	        if (key.indexOf(_this.formatSeparator) < 0) {
	          var path = getPathWithDefaults(data, defaultData, key);
	          return _this.alwaysFormat ? _this.format(path, undefined, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
	            interpolationkey: key
	          })) : path;
	        }

	        var p = key.split(_this.formatSeparator);
	        var k = p.shift().trim();
	        var f = p.join(_this.formatSeparator).trim();
	        return _this.format(getPathWithDefaults(data, defaultData, k), f, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
	          interpolationkey: k
	        }));
	      };

	      this.resetRegExp();
	      var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
	      var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
	      var todos = [{
	        regex: this.regexpUnescape,
	        safeValue: function safeValue(val) {
	          return regexSafe(val);
	        }
	      }, {
	        regex: this.regexp,
	        safeValue: function safeValue(val) {
	          return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
	        }
	      }];
	      todos.forEach(function (todo) {
	        replaces = 0;

	        while (match = todo.regex.exec(str)) {
	          var matchedVar = match[1].trim();
	          value = handleFormat(matchedVar);

	          if (value === undefined) {
	            if (typeof missingInterpolationHandler === 'function') {
	              var temp = missingInterpolationHandler(str, match, options);
	              value = typeof temp === 'string' ? temp : '';
	            } else if (options && options.hasOwnProperty(matchedVar)) {
	              value = '';
	            } else if (skipOnVariables) {
	              value = match[0];
	              continue;
	            } else {
	              _this.logger.warn("missed to pass in variable ".concat(matchedVar, " for interpolating ").concat(str));

	              value = '';
	            }
	          } else if (typeof value !== 'string' && !_this.useRawValueToEscape) {
	            value = makeString(value);
	          }

	          var safeValue = todo.safeValue(value);
	          str = str.replace(match[0], safeValue);

	          if (skipOnVariables) {
	            todo.regex.lastIndex += value.length;
	            todo.regex.lastIndex -= match[0].length;
	          } else {
	            todo.regex.lastIndex = 0;
	          }

	          replaces++;

	          if (replaces >= _this.maxReplaces) {
	            break;
	          }
	        }
	      });
	      return str;
	    }
	  }, {
	    key: "nest",
	    value: function nest(str, fc) {
	      var _this2 = this;

	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      var match;
	      var value;

	      var clonedOptions = _objectSpread$3({}, options);

	      clonedOptions.applyPostProcessor = false;
	      delete clonedOptions.defaultValue;

	      function handleHasOptions(key, inheritedOptions) {
	        var sep = this.nestingOptionsSeparator;
	        if (key.indexOf(sep) < 0) return key;
	        var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
	        var optionsString = "{".concat(c[1]);
	        key = c[0];
	        optionsString = this.interpolate(optionsString, clonedOptions);
	        var matchedSingleQuotes = optionsString.match(/'/g);
	        var matchedDoubleQuotes = optionsString.match(/"/g);

	        if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
	          optionsString = optionsString.replace(/'/g, '"');
	        }

	        try {
	          clonedOptions = JSON.parse(optionsString);
	          if (inheritedOptions) clonedOptions = _objectSpread$3(_objectSpread$3({}, inheritedOptions), clonedOptions);
	        } catch (e) {
	          this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
	          return "".concat(key).concat(sep).concat(optionsString);
	        }

	        delete clonedOptions.defaultValue;
	        return key;
	      }

	      while (match = this.nestingRegexp.exec(str)) {
	        var formatters = [];
	        var doReduce = false;

	        if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
	          var r = match[1].split(this.formatSeparator).map(function (elem) {
	            return elem.trim();
	          });
	          match[1] = r.shift();
	          formatters = r;
	          doReduce = true;
	        }

	        value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
	        if (value && match[0] === str && typeof value !== 'string') return value;
	        if (typeof value !== 'string') value = makeString(value);

	        if (!value) {
	          this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
	          value = '';
	        }

	        if (doReduce) {
	          value = formatters.reduce(function (v, f) {
	            return _this2.format(v, f, options.lng, _objectSpread$3(_objectSpread$3({}, options), {}, {
	              interpolationkey: match[1].trim()
	            }));
	          }, value.trim());
	        }

	        str = str.replace(match[0], value);
	        this.regexp.lastIndex = 0;
	      }

	      return str;
	    }
	  }]);

	  return Interpolator;
	}();

	function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function parseFormatStr(formatStr) {
	  var formatName = formatStr.toLowerCase().trim();
	  var formatOptions = {};

	  if (formatStr.indexOf('(') > -1) {
	    var p = formatStr.split('(');
	    formatName = p[0].toLowerCase().trim();
	    var optStr = p[1].substring(0, p[1].length - 1);

	    if (formatName === 'currency' && optStr.indexOf(':') < 0) {
	      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
	    } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
	      if (!formatOptions.range) formatOptions.range = optStr.trim();
	    } else {
	      var opts = optStr.split(';');
	      opts.forEach(function (opt) {
	        if (!opt) return;

	        var _opt$split = opt.split(':'),
	            _opt$split2 = _toArray(_opt$split),
	            key = _opt$split2[0],
	            rest = _opt$split2.slice(1);

	        var val = rest.join(':').trim().replace(/^'+|'+$/g, '');
	        if (!formatOptions[key.trim()]) formatOptions[key.trim()] = val;
	        if (val === 'false') formatOptions[key.trim()] = false;
	        if (val === 'true') formatOptions[key.trim()] = true;
	        if (!isNaN(val)) formatOptions[key.trim()] = parseInt(val, 10);
	      });
	    }
	  }

	  return {
	    formatName: formatName,
	    formatOptions: formatOptions
	  };
	}

	var Formatter = function () {
	  function Formatter() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, Formatter);

	    this.logger = baseLogger.create('formatter');
	    this.options = options;
	    this.formats = {
	      number: function number(val, lng, options) {
	        return new Intl.NumberFormat(lng, options).format(val);
	      },
	      currency: function currency(val, lng, options) {
	        return new Intl.NumberFormat(lng, _objectSpread$4(_objectSpread$4({}, options), {}, {
	          style: 'currency'
	        })).format(val);
	      },
	      datetime: function datetime(val, lng, options) {
	        return new Intl.DateTimeFormat(lng, _objectSpread$4({}, options)).format(val);
	      },
	      relativetime: function relativetime(val, lng, options) {
	        return new Intl.RelativeTimeFormat(lng, _objectSpread$4({}, options)).format(val, options.range || 'day');
	      },
	      list: function list(val, lng, options) {
	        return new Intl.ListFormat(lng, _objectSpread$4({}, options)).format(val);
	      }
	    };
	    this.init(options);
	  }

	  _createClass(Formatter, [{
	    key: "init",
	    value: function init(services) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	        interpolation: {}
	      };
	      var iOpts = options.interpolation;
	      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
	    }
	  }, {
	    key: "add",
	    value: function add(name, fc) {
	      this.formats[name.toLowerCase().trim()] = fc;
	    }
	  }, {
	    key: "format",
	    value: function format(value, _format, lng, options) {
	      var _this = this;

	      var formats = _format.split(this.formatSeparator);

	      var result = formats.reduce(function (mem, f) {
	        var _parseFormatStr = parseFormatStr(f),
	            formatName = _parseFormatStr.formatName,
	            formatOptions = _parseFormatStr.formatOptions;

	        if (_this.formats[formatName]) {
	          var formatted = mem;

	          try {
	            var valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
	            var l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
	            formatted = _this.formats[formatName](mem, l, _objectSpread$4(_objectSpread$4(_objectSpread$4({}, formatOptions), options), valOptions));
	          } catch (error) {
	            _this.logger.warn(error);
	          }

	          return formatted;
	        } else {
	          _this.logger.warn("there was no format function for ".concat(formatName));
	        }

	        return mem;
	      }, value);
	      return result;
	    }
	  }]);

	  return Formatter;
	}();

	function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function removePending(q, name) {
	  if (q.pending[name] !== undefined) {
	    delete q.pending[name];
	    q.pendingCount--;
	  }
	}

	var Connector = function (_EventEmitter) {
	  _inherits(Connector, _EventEmitter);

	  var _super = _createSuper$2(Connector);

	  function Connector(backend, store, services) {
	    var _this;

	    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	    _classCallCheck(this, Connector);

	    _this = _super.call(this);

	    if (isIE10) {
	      EventEmitter.call(_assertThisInitialized(_this));
	    }

	    _this.backend = backend;
	    _this.store = store;
	    _this.services = services;
	    _this.languageUtils = services.languageUtils;
	    _this.options = options;
	    _this.logger = baseLogger.create('backendConnector');
	    _this.waitingReads = [];
	    _this.maxParallelReads = options.maxParallelReads || 10;
	    _this.readingCalls = 0;
	    _this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
	    _this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
	    _this.state = {};
	    _this.queue = [];

	    if (_this.backend && _this.backend.init) {
	      _this.backend.init(services, options.backend, options);
	    }

	    return _this;
	  }

	  _createClass(Connector, [{
	    key: "queueLoad",
	    value: function queueLoad(languages, namespaces, options, callback) {
	      var _this2 = this;

	      var toLoad = {};
	      var pending = {};
	      var toLoadLanguages = {};
	      var toLoadNamespaces = {};
	      languages.forEach(function (lng) {
	        var hasAllNamespaces = true;
	        namespaces.forEach(function (ns) {
	          var name = "".concat(lng, "|").concat(ns);

	          if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
	            _this2.state[name] = 2;
	          } else if (_this2.state[name] < 0) ; else if (_this2.state[name] === 1) {
	            if (pending[name] === undefined) pending[name] = true;
	          } else {
	            _this2.state[name] = 1;
	            hasAllNamespaces = false;
	            if (pending[name] === undefined) pending[name] = true;
	            if (toLoad[name] === undefined) toLoad[name] = true;
	            if (toLoadNamespaces[ns] === undefined) toLoadNamespaces[ns] = true;
	          }
	        });
	        if (!hasAllNamespaces) toLoadLanguages[lng] = true;
	      });

	      if (Object.keys(toLoad).length || Object.keys(pending).length) {
	        this.queue.push({
	          pending: pending,
	          pendingCount: Object.keys(pending).length,
	          loaded: {},
	          errors: [],
	          callback: callback
	        });
	      }

	      return {
	        toLoad: Object.keys(toLoad),
	        pending: Object.keys(pending),
	        toLoadLanguages: Object.keys(toLoadLanguages),
	        toLoadNamespaces: Object.keys(toLoadNamespaces)
	      };
	    }
	  }, {
	    key: "loaded",
	    value: function loaded(name, err, data) {
	      var s = name.split('|');
	      var lng = s[0];
	      var ns = s[1];
	      if (err) this.emit('failedLoading', lng, ns, err);

	      if (data) {
	        this.store.addResourceBundle(lng, ns, data);
	      }

	      this.state[name] = err ? -1 : 2;
	      var loaded = {};
	      this.queue.forEach(function (q) {
	        pushPath(q.loaded, [lng], ns);
	        removePending(q, name);
	        if (err) q.errors.push(err);

	        if (q.pendingCount === 0 && !q.done) {
	          Object.keys(q.loaded).forEach(function (l) {
	            if (!loaded[l]) loaded[l] = {};
	            var loadedKeys = q.loaded[l];

	            if (loadedKeys.length) {
	              loadedKeys.forEach(function (ns) {
	                if (loaded[l][ns] === undefined) loaded[l][ns] = true;
	              });
	            }
	          });
	          q.done = true;

	          if (q.errors.length) {
	            q.callback(q.errors);
	          } else {
	            q.callback();
	          }
	        }
	      });
	      this.emit('loaded', loaded);
	      this.queue = this.queue.filter(function (q) {
	        return !q.done;
	      });
	    }
	  }, {
	    key: "read",
	    value: function read(lng, ns, fcName) {
	      var _this3 = this;

	      var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	      var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.retryTimeout;
	      var callback = arguments.length > 5 ? arguments[5] : undefined;
	      if (!lng.length) return callback(null, {});

	      if (this.readingCalls >= this.maxParallelReads) {
	        this.waitingReads.push({
	          lng: lng,
	          ns: ns,
	          fcName: fcName,
	          tried: tried,
	          wait: wait,
	          callback: callback
	        });
	        return;
	      }

	      this.readingCalls++;
	      return this.backend[fcName](lng, ns, function (err, data) {
	        _this3.readingCalls--;

	        if (_this3.waitingReads.length > 0) {
	          var next = _this3.waitingReads.shift();

	          _this3.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
	        }

	        if (err && data && tried < _this3.maxRetries) {
	          setTimeout(function () {
	            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
	          }, wait);
	          return;
	        }

	        callback(err, data);
	      });
	    }
	  }, {
	    key: "prepareLoading",
	    value: function prepareLoading(languages, namespaces) {
	      var _this4 = this;

	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      var callback = arguments.length > 3 ? arguments[3] : undefined;

	      if (!this.backend) {
	        this.logger.warn('No backend was added via i18next.use. Will not load resources.');
	        return callback && callback();
	      }

	      if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
	      if (typeof namespaces === 'string') namespaces = [namespaces];
	      var toLoad = this.queueLoad(languages, namespaces, options, callback);

	      if (!toLoad.toLoad.length) {
	        if (!toLoad.pending.length) callback();
	        return null;
	      }

	      toLoad.toLoad.forEach(function (name) {
	        _this4.loadOne(name);
	      });
	    }
	  }, {
	    key: "load",
	    value: function load(languages, namespaces, callback) {
	      this.prepareLoading(languages, namespaces, {}, callback);
	    }
	  }, {
	    key: "reload",
	    value: function reload(languages, namespaces, callback) {
	      this.prepareLoading(languages, namespaces, {
	        reload: true
	      }, callback);
	    }
	  }, {
	    key: "loadOne",
	    value: function loadOne(name) {
	      var _this5 = this;

	      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	      var s = name.split('|');
	      var lng = s[0];
	      var ns = s[1];
	      this.read(lng, ns, 'read', undefined, undefined, function (err, data) {
	        if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
	        if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);

	        _this5.loaded(name, err, data);
	      });
	    }
	  }, {
	    key: "saveMissing",
	    value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
	      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

	      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
	        this.logger.warn("did not save key \"".concat(key, "\" as the namespace \"").concat(namespace, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
	        return;
	      }

	      if (key === undefined || key === null || key === '') return;

	      if (this.backend && this.backend.create) {
	        this.backend.create(languages, namespace, key, fallbackValue, null, _objectSpread$5(_objectSpread$5({}, options), {}, {
	          isUpdate: isUpdate
	        }));
	      }

	      if (!languages || !languages[0]) return;
	      this.store.addResource(languages[0], namespace, key, fallbackValue);
	    }
	  }]);

	  return Connector;
	}(EventEmitter);

	function get$1() {
	  return {
	    debug: false,
	    initImmediate: true,
	    ns: ['translation'],
	    defaultNS: ['translation'],
	    fallbackLng: ['dev'],
	    fallbackNS: false,
	    supportedLngs: false,
	    nonExplicitSupportedLngs: false,
	    load: 'all',
	    preload: false,
	    simplifyPluralSuffix: true,
	    keySeparator: '.',
	    nsSeparator: ':',
	    pluralSeparator: '_',
	    contextSeparator: '_',
	    partialBundledLanguages: false,
	    saveMissing: false,
	    updateMissing: false,
	    saveMissingTo: 'fallback',
	    saveMissingPlurals: true,
	    missingKeyHandler: false,
	    missingInterpolationHandler: false,
	    postProcess: false,
	    postProcessPassResolved: false,
	    returnNull: true,
	    returnEmptyString: true,
	    returnObjects: false,
	    joinArrays: false,
	    returnedObjectHandler: false,
	    parseMissingKeyHandler: false,
	    appendNamespaceToMissingKey: false,
	    appendNamespaceToCIMode: false,
	    overloadTranslationOptionHandler: function handle(args) {
	      var ret = {};
	      if (_typeof(args[1]) === 'object') ret = args[1];
	      if (typeof args[1] === 'string') ret.defaultValue = args[1];
	      if (typeof args[2] === 'string') ret.tDescription = args[2];

	      if (_typeof(args[2]) === 'object' || _typeof(args[3]) === 'object') {
	        var options = args[3] || args[2];
	        Object.keys(options).forEach(function (key) {
	          ret[key] = options[key];
	        });
	      }

	      return ret;
	    },
	    interpolation: {
	      escapeValue: true,
	      format: function format(value, _format, lng, options) {
	        return value;
	      },
	      prefix: '{{',
	      suffix: '}}',
	      formatSeparator: ',',
	      unescapePrefix: '-',
	      nestingPrefix: '$t(',
	      nestingSuffix: ')',
	      nestingOptionsSeparator: ',',
	      maxReplaces: 1000,
	      skipOnVariables: true
	    }
	  };
	}
	function transformOptions(options) {
	  if (typeof options.ns === 'string') options.ns = [options.ns];
	  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
	  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];

	  if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
	    options.supportedLngs = options.supportedLngs.concat(['cimode']);
	  }

	  return options;
	}

	function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function noop$3() {}

	function bindMemberFunctions(inst) {
	  var mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
	  mems.forEach(function (mem) {
	    if (typeof inst[mem] === 'function') {
	      inst[mem] = inst[mem].bind(inst);
	    }
	  });
	}

	var I18n = function (_EventEmitter) {
	  _inherits(I18n, _EventEmitter);

	  var _super = _createSuper$3(I18n);

	  function I18n() {
	    var _this;

	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var callback = arguments.length > 1 ? arguments[1] : undefined;

	    _classCallCheck(this, I18n);

	    _this = _super.call(this);

	    if (isIE10) {
	      EventEmitter.call(_assertThisInitialized(_this));
	    }

	    _this.options = transformOptions(options);
	    _this.services = {};
	    _this.logger = baseLogger;
	    _this.modules = {
	      external: []
	    };
	    bindMemberFunctions(_assertThisInitialized(_this));

	    if (callback && !_this.isInitialized && !options.isClone) {
	      if (!_this.options.initImmediate) {
	        _this.init(options, callback);

	        return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
	      }

	      setTimeout(function () {
	        _this.init(options, callback);
	      }, 0);
	    }

	    return _this;
	  }

	  _createClass(I18n, [{
	    key: "init",
	    value: function init() {
	      var _this2 = this;

	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      var callback = arguments.length > 1 ? arguments[1] : undefined;

	      if (typeof options === 'function') {
	        callback = options;
	        options = {};
	      }

	      if (!options.defaultNS && options.defaultNS !== false && options.ns) {
	        if (typeof options.ns === 'string') {
	          options.defaultNS = options.ns;
	        } else if (options.ns.indexOf('translation') < 0) {
	          options.defaultNS = options.ns[0];
	        }
	      }

	      var defOpts = get$1();
	      this.options = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, defOpts), this.options), transformOptions(options));

	      if (this.options.compatibilityAPI !== 'v1') {
	        this.options.interpolation = _objectSpread$6(_objectSpread$6({}, defOpts.interpolation), this.options.interpolation);
	      }

	      if (options.keySeparator !== undefined) {
	        this.options.userDefinedKeySeparator = options.keySeparator;
	      }

	      if (options.nsSeparator !== undefined) {
	        this.options.userDefinedNsSeparator = options.nsSeparator;
	      }

	      function createClassOnDemand(ClassOrObject) {
	        if (!ClassOrObject) return null;
	        if (typeof ClassOrObject === 'function') return new ClassOrObject();
	        return ClassOrObject;
	      }

	      if (!this.options.isClone) {
	        if (this.modules.logger) {
	          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
	        } else {
	          baseLogger.init(null, this.options);
	        }

	        var formatter;

	        if (this.modules.formatter) {
	          formatter = this.modules.formatter;
	        } else if (typeof Intl !== 'undefined') {
	          formatter = Formatter;
	        }

	        var lu = new LanguageUtil(this.options);
	        this.store = new ResourceStore(this.options.resources, this.options);
	        var s = this.services;
	        s.logger = baseLogger;
	        s.resourceStore = this.store;
	        s.languageUtils = lu;
	        s.pluralResolver = new PluralResolver(lu, {
	          prepend: this.options.pluralSeparator,
	          compatibilityJSON: this.options.compatibilityJSON,
	          simplifyPluralSuffix: this.options.simplifyPluralSuffix
	        });

	        if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
	          s.formatter = createClassOnDemand(formatter);
	          s.formatter.init(s, this.options);
	          this.options.interpolation.format = s.formatter.format.bind(s.formatter);
	        }

	        s.interpolator = new Interpolator(this.options);
	        s.utils = {
	          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
	        };
	        s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
	        s.backendConnector.on('*', function (event) {
	          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	          }

	          _this2.emit.apply(_this2, [event].concat(args));
	        });

	        if (this.modules.languageDetector) {
	          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
	          s.languageDetector.init(s, this.options.detection, this.options);
	        }

	        if (this.modules.i18nFormat) {
	          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
	          if (s.i18nFormat.init) s.i18nFormat.init(this);
	        }

	        this.translator = new Translator(this.services, this.options);
	        this.translator.on('*', function (event) {
	          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	            args[_key2 - 1] = arguments[_key2];
	          }

	          _this2.emit.apply(_this2, [event].concat(args));
	        });
	        this.modules.external.forEach(function (m) {
	          if (m.init) m.init(_this2);
	        });
	      }

	      this.format = this.options.interpolation.format;
	      if (!callback) callback = noop$3;

	      if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
	        var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
	        if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
	      }

	      if (!this.services.languageDetector && !this.options.lng) {
	        this.logger.warn('init: no languageDetector is used and no lng is defined');
	      }

	      var storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
	      storeApi.forEach(function (fcName) {
	        _this2[fcName] = function () {
	          var _this2$store;

	          return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
	        };
	      });
	      var storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
	      storeApiChained.forEach(function (fcName) {
	        _this2[fcName] = function () {
	          var _this2$store2;

	          (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);

	          return _this2;
	        };
	      });
	      var deferred = defer();

	      var load = function load() {
	        var finish = function finish(err, t) {
	          if (_this2.isInitialized && !_this2.initializedStoreOnce) _this2.logger.warn('init: i18next is already initialized. You should call init just once!');
	          _this2.isInitialized = true;
	          if (!_this2.options.isClone) _this2.logger.log('initialized', _this2.options);

	          _this2.emit('initialized', _this2.options);

	          deferred.resolve(t);
	          callback(err, t);
	        };

	        if (_this2.languages && _this2.options.compatibilityAPI !== 'v1' && !_this2.isInitialized) return finish(null, _this2.t.bind(_this2));

	        _this2.changeLanguage(_this2.options.lng, finish);
	      };

	      if (this.options.resources || !this.options.initImmediate) {
	        load();
	      } else {
	        setTimeout(load, 0);
	      }

	      return deferred;
	    }
	  }, {
	    key: "loadResources",
	    value: function loadResources(language) {
	      var _this3 = this;

	      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop$3;
	      var usedCallback = callback;
	      var usedLng = typeof language === 'string' ? language : this.language;
	      if (typeof language === 'function') usedCallback = language;

	      if (!this.options.resources || this.options.partialBundledLanguages) {
	        if (usedLng && usedLng.toLowerCase() === 'cimode') return usedCallback();
	        var toLoad = [];

	        var append = function append(lng) {
	          if (!lng) return;

	          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);

	          lngs.forEach(function (l) {
	            if (toLoad.indexOf(l) < 0) toLoad.push(l);
	          });
	        };

	        if (!usedLng) {
	          var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
	          fallbacks.forEach(function (l) {
	            return append(l);
	          });
	        } else {
	          append(usedLng);
	        }

	        if (this.options.preload) {
	          this.options.preload.forEach(function (l) {
	            return append(l);
	          });
	        }

	        this.services.backendConnector.load(toLoad, this.options.ns, function (e) {
	          if (!e && !_this3.resolvedLanguage && _this3.language) _this3.setResolvedLanguage(_this3.language);
	          usedCallback(e);
	        });
	      } else {
	        usedCallback(null);
	      }
	    }
	  }, {
	    key: "reloadResources",
	    value: function reloadResources(lngs, ns, callback) {
	      var deferred = defer();
	      if (!lngs) lngs = this.languages;
	      if (!ns) ns = this.options.ns;
	      if (!callback) callback = noop$3;
	      this.services.backendConnector.reload(lngs, ns, function (err) {
	        deferred.resolve();
	        callback(err);
	      });
	      return deferred;
	    }
	  }, {
	    key: "use",
	    value: function use(module) {
	      if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
	      if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');

	      if (module.type === 'backend') {
	        this.modules.backend = module;
	      }

	      if (module.type === 'logger' || module.log && module.warn && module.error) {
	        this.modules.logger = module;
	      }

	      if (module.type === 'languageDetector') {
	        this.modules.languageDetector = module;
	      }

	      if (module.type === 'i18nFormat') {
	        this.modules.i18nFormat = module;
	      }

	      if (module.type === 'postProcessor') {
	        postProcessor.addPostProcessor(module);
	      }

	      if (module.type === 'formatter') {
	        this.modules.formatter = module;
	      }

	      if (module.type === '3rdParty') {
	        this.modules.external.push(module);
	      }

	      return this;
	    }
	  }, {
	    key: "setResolvedLanguage",
	    value: function setResolvedLanguage(l) {
	      if (!l || !this.languages) return;
	      if (['cimode', 'dev'].indexOf(l) > -1) return;

	      for (var li = 0; li < this.languages.length; li++) {
	        var lngInLngs = this.languages[li];
	        if (['cimode', 'dev'].indexOf(lngInLngs) > -1) continue;

	        if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
	          this.resolvedLanguage = lngInLngs;
	          break;
	        }
	      }
	    }
	  }, {
	    key: "changeLanguage",
	    value: function changeLanguage(lng, callback) {
	      var _this4 = this;

	      this.isLanguageChangingTo = lng;
	      var deferred = defer();
	      this.emit('languageChanging', lng);

	      var setLngProps = function setLngProps(l) {
	        _this4.language = l;
	        _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
	        _this4.resolvedLanguage = undefined;

	        _this4.setResolvedLanguage(l);
	      };

	      var done = function done(err, l) {
	        if (l) {
	          setLngProps(l);

	          _this4.translator.changeLanguage(l);

	          _this4.isLanguageChangingTo = undefined;

	          _this4.emit('languageChanged', l);

	          _this4.logger.log('languageChanged', l);
	        } else {
	          _this4.isLanguageChangingTo = undefined;
	        }

	        deferred.resolve(function () {
	          return _this4.t.apply(_this4, arguments);
	        });
	        if (callback) callback(err, function () {
	          return _this4.t.apply(_this4, arguments);
	        });
	      };

	      var setLng = function setLng(lngs) {
	        if (!lng && !lngs && _this4.services.languageDetector) lngs = [];
	        var l = typeof lngs === 'string' ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);

	        if (l) {
	          if (!_this4.language) {
	            setLngProps(l);
	          }

	          if (!_this4.translator.language) _this4.translator.changeLanguage(l);
	          if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
	        }

	        _this4.loadResources(l, function (err) {
	          done(err, l);
	        });
	      };

	      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
	        setLng(this.services.languageDetector.detect());
	      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
	        this.services.languageDetector.detect(setLng);
	      } else {
	        setLng(lng);
	      }

	      return deferred;
	    }
	  }, {
	    key: "getFixedT",
	    value: function getFixedT(lng, ns, keyPrefix) {
	      var _this5 = this;

	      var fixedT = function fixedT(key, opts) {
	        var options;

	        if (_typeof(opts) !== 'object') {
	          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
	            rest[_key3 - 2] = arguments[_key3];
	          }

	          options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
	        } else {
	          options = _objectSpread$6({}, opts);
	        }

	        options.lng = options.lng || fixedT.lng;
	        options.lngs = options.lngs || fixedT.lngs;
	        options.ns = options.ns || fixedT.ns;
	        options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
	        var keySeparator = _this5.options.keySeparator || '.';
	        var resultKey = options.keyPrefix ? "".concat(options.keyPrefix).concat(keySeparator).concat(key) : key;
	        return _this5.t(resultKey, options);
	      };

	      if (typeof lng === 'string') {
	        fixedT.lng = lng;
	      } else {
	        fixedT.lngs = lng;
	      }

	      fixedT.ns = ns;
	      fixedT.keyPrefix = keyPrefix;
	      return fixedT;
	    }
	  }, {
	    key: "t",
	    value: function t() {
	      var _this$translator;

	      return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
	    }
	  }, {
	    key: "exists",
	    value: function exists() {
	      var _this$translator2;

	      return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
	    }
	  }, {
	    key: "setDefaultNamespace",
	    value: function setDefaultNamespace(ns) {
	      this.options.defaultNS = ns;
	    }
	  }, {
	    key: "hasLoadedNamespace",
	    value: function hasLoadedNamespace(ns) {
	      var _this6 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      if (!this.isInitialized) {
	        this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
	        return false;
	      }

	      if (!this.languages || !this.languages.length) {
	        this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
	        return false;
	      }

	      var lng = this.resolvedLanguage || this.languages[0];
	      var fallbackLng = this.options ? this.options.fallbackLng : false;
	      var lastLng = this.languages[this.languages.length - 1];
	      if (lng.toLowerCase() === 'cimode') return true;

	      var loadNotPending = function loadNotPending(l, n) {
	        var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];

	        return loadState === -1 || loadState === 2;
	      };

	      if (options.precheck) {
	        var preResult = options.precheck(this, loadNotPending);
	        if (preResult !== undefined) return preResult;
	      }

	      if (this.hasResourceBundle(lng, ns)) return true;
	      if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
	      if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
	      return false;
	    }
	  }, {
	    key: "loadNamespaces",
	    value: function loadNamespaces(ns, callback) {
	      var _this7 = this;

	      var deferred = defer();

	      if (!this.options.ns) {
	        callback && callback();
	        return Promise.resolve();
	      }

	      if (typeof ns === 'string') ns = [ns];
	      ns.forEach(function (n) {
	        if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
	      });
	      this.loadResources(function (err) {
	        deferred.resolve();
	        if (callback) callback(err);
	      });
	      return deferred;
	    }
	  }, {
	    key: "loadLanguages",
	    value: function loadLanguages(lngs, callback) {
	      var deferred = defer();
	      if (typeof lngs === 'string') lngs = [lngs];
	      var preloaded = this.options.preload || [];
	      var newLngs = lngs.filter(function (lng) {
	        return preloaded.indexOf(lng) < 0;
	      });

	      if (!newLngs.length) {
	        if (callback) callback();
	        return Promise.resolve();
	      }

	      this.options.preload = preloaded.concat(newLngs);
	      this.loadResources(function (err) {
	        deferred.resolve();
	        if (callback) callback(err);
	      });
	      return deferred;
	    }
	  }, {
	    key: "dir",
	    value: function dir(lng) {
	      if (!lng) lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
	      if (!lng) return 'rtl';
	      var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam', 'ckb'];
	      return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
	    }
	  }, {
	    key: "cloneInstance",
	    value: function cloneInstance() {
	      var _this8 = this;

	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop$3;

	      var mergedOptions = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, this.options), options), {
	        isClone: true
	      });

	      var clone = new I18n(mergedOptions);

	      if (options.debug !== undefined || options.prefix !== undefined) {
	        clone.logger = clone.logger.clone(options);
	      }

	      var membersToCopy = ['store', 'services', 'language'];
	      membersToCopy.forEach(function (m) {
	        clone[m] = _this8[m];
	      });
	      clone.services = _objectSpread$6({}, this.services);
	      clone.services.utils = {
	        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
	      };
	      clone.translator = new Translator(clone.services, clone.options);
	      clone.translator.on('*', function (event) {
	        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	          args[_key4 - 1] = arguments[_key4];
	        }

	        clone.emit.apply(clone, [event].concat(args));
	      });
	      clone.init(mergedOptions, callback);
	      clone.translator.options = clone.options;
	      clone.translator.backendConnector.services.utils = {
	        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
	      };
	      return clone;
	    }
	  }, {
	    key: "toJSON",
	    value: function toJSON() {
	      return {
	        options: this.options,
	        store: this.store,
	        language: this.language,
	        languages: this.languages,
	        resolvedLanguage: this.resolvedLanguage
	      };
	    }
	  }]);

	  return I18n;
	}(EventEmitter);

	_defineProperty(I18n, "createInstance", function () {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var callback = arguments.length > 1 ? arguments[1] : undefined;
	  return new I18n(options, callback);
	});

	var instance = I18n.createInstance();
	instance.createInstance = I18n.createInstance;

	instance.createInstance;
	instance.init;
	instance.loadResources;
	instance.reloadResources;
	instance.use;
	instance.changeLanguage;
	instance.getFixedT;
	instance.t;
	instance.exists;
	instance.setDefaultNamespace;
	instance.hasLoadedNamespace;
	instance.loadNamespaces;
	instance.loadLanguages;

	let globalAny$2 = {};

	try {
	  globalAny$2 = window;
	} catch (error) {
	  if (error.message !== 'window is not defined') {
	    throw error;
	  }
	}
	/**
	 * Base Params for a any function
	 * @alias ActionParams
	 * @memberof ViewHelpers
	 */


	const runDate = new Date();
	/**
	 * Collection of helper methods available in the views
	 */

	class ViewHelpers {
	  constructor({
	    options
	  } = {}) {
	    let opts = ViewHelpers.getPaths(options);
	    opts = opts || {
	      rootPath: '/admin'
	    }; // when ViewHelpers are used on the frontend, paths are taken from global Redux State

	    this.options = opts;
	  }

	  static getPaths(options) {
	    return options || globalAny$2.REDUX_STATE?.paths;
	  }
	  /**
	   * To each related path adds rootPath passed by the user, as well as a query string
	   * @private
	   * @param  {Array<string>} [paths]      list of parts of the url
	   * @return {string}       path
	   * @return {query}        [search=''] query string which can be fetch
	   *                                    from `location.search`
	   */


	  urlBuilder(paths = [], search = '') {
	    const separator = '/';
	    const replace = new RegExp(`${separator}{1,}`, 'g');
	    let {
	      rootPath
	    } = this.options;

	    if (!rootPath.startsWith(separator)) {
	      rootPath = `${separator}${rootPath}`;
	    }

	    const parts = [rootPath, ...paths];
	    return `${parts.join(separator).replace(replace, separator)}${search}`;
	  }
	  /**
	   * Returns login URL
	   * @return {string}
	   */


	  loginUrl() {
	    return this.options.loginPath;
	  }
	  /**
	   * Returns logout URL
	   * @return {string}
	   */


	  logoutUrl() {
	    return this.options.logoutPath;
	  }
	  /**
	   * Returns URL for the dashboard
	   * @return {string}
	   */


	  dashboardUrl() {
	    return this.options.rootPath;
	  }
	  /**
	   * Returns URL for given page name
	   * @param {string} pageName       page name which is a unique key specified in
	   *                                {@link AdminJSOptions}
	   * @return {string}
	   */


	  pageUrl(pageName) {
	    return this.urlBuilder(['pages', pageName]);
	  }
	  /**
	   * Returns url for a `edit` action in given Resource. Uses {@link recordActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} recordId    id to the record
	   * @param {string} [search]        optional query string
	   */


	  editUrl(resourceId, recordId, search) {
	    return this.recordActionUrl({
	      resourceId,
	      recordId,
	      actionName: 'edit',
	      search
	    });
	  }
	  /**
	   * Returns url for a `show` action in given Resource. Uses {@link recordActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} recordId    id to the record
	   * @param {string} [search]        optional query string
	   */


	  showUrl(resourceId, recordId, search) {
	    return this.recordActionUrl({
	      resourceId,
	      recordId,
	      actionName: 'show',
	      search
	    });
	  }
	  /**
	   * Returns url for a `delete` action in given Resource. Uses {@link recordActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} recordId    id to the record
	   * @param {string} [search]        optional query string
	   */


	  deleteUrl(resourceId, recordId, search) {
	    return this.recordActionUrl({
	      resourceId,
	      recordId,
	      actionName: 'delete',
	      search
	    });
	  }
	  /**
	   * Returns url for a `new` action in given Resource. Uses {@link resourceActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} [search]        optional query string
	   */


	  newUrl(resourceId, search) {
	    return this.resourceActionUrl({
	      resourceId,
	      actionName: 'new',
	      search
	    });
	  }
	  /**
	   * Returns url for a `list` action in given Resource. Uses {@link resourceActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} [search]        optional query string
	   */


	  listUrl(resourceId, search) {
	    return this.resourceActionUrl({
	      resourceId,
	      actionName: 'list',
	      search
	    });
	  }
	  /**
	   * Returns url for a `bulkDelete` action in given Resource. Uses {@link bulkActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {Array<string>} recordIds   separated by comma records
	   * @param {string} [search]        optional query string
	   */


	  bulkDeleteUrl(resourceId, recordIds, search) {
	    return this.bulkActionUrl({
	      resourceId,
	      recordIds,
	      actionName: 'bulkDelete',
	      search
	    });
	  }
	  /**
	   * Returns resourceAction url
	   *
	   * @param   {ResourceActionParams}  options
	   * @param   {string}  options.resourceId
	   * @param   {string}  options.actionName
	   * @param   {string}  [options.search]        optional query string
	   *
	   * @return  {string}
	   */


	  resourceActionUrl({
	    resourceId,
	    actionName,
	    search
	  }) {
	    return this.urlBuilder(['resources', resourceId, 'actions', actionName], search);
	  }

	  resourceUrl({
	    resourceId,
	    search
	  }) {
	    return this.urlBuilder(['resources', resourceId], search);
	  }
	  /**
	   * Returns recordAction url
	   *
	   * @param   {RecordActionParams}  options
	   * @param   {string}  options.resourceId
	   * @param   {string}  options.recordId
	   * @param   {string}  options.actionName
	   *
	   * @return  {string}
	   */


	  recordActionUrl({
	    resourceId,
	    recordId,
	    actionName,
	    search
	  }) {
	    return this.urlBuilder(['resources', resourceId, 'records', recordId, actionName], search);
	  }
	  /**
	   * Returns bulkAction url
	   *
	   * @param   {BulkActionParams}  options
	   * @param   {string}  options.resourceId
	   * @param   {Array<string>}  [options.recordIds]
	   * @param   {string}  options.actionName
	   *
	   * @return  {string}
	   */


	  bulkActionUrl({
	    resourceId,
	    recordIds,
	    actionName,
	    search
	  }) {
	    const url = this.urlBuilder(['resources', resourceId, 'bulk', actionName]);

	    if (recordIds && recordIds.length) {
	      const query = new URLSearchParams(search);
	      query.set('recordIds', recordIds.join(','));
	      return `${url}?${query.toString()}`;
	    }

	    return `${url}${search || ''}`;
	  }
	  /**
	   * Returns absolute path to a given asset.
	   * @private
	   *
	   * @param  {string} asset
	   * @param  {Assets | undefined} assetsConfig
	   * @return {string}
	   */


	  assetPath(asset, assetsConfig) {
	    if (this.options.assetsCDN) {
	      const pathname = assetsConfig?.coreScripts?.[asset] ?? asset;
	      const url = new URL(pathname, this.options.assetsCDN).href; // adding timestamp to the href invalidates the CDN cache

	      return `${url}?date=${runDate.getTime()}`;
	    }

	    return this.urlBuilder(['frontend', 'assets', asset]);
	  }

	}

	function _extends$2() {
	  _extends$2 = Object.assign ? Object.assign.bind() : function (target) {
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
	  return _extends$2.apply(this, arguments);
	}

	/**
	 * @private
	 *
	 * @classdesc
	 * Overrides one of the component form AdminJS core when user pass its name to
	 * {@link ComponentLoader.add} or {@link ComponentLoader.override} method.
	 *
	 * If case of being overridden, component receives additional prop: `OriginalComponent`
	 *
	 * @example
	 * new ComponentLoader().override('SidebarFooter', MySidebarFooter)
	 */
	function allowOverride(OriginalComponent, name) {
	  const WrapperComponent = props => {
	    let Component = OriginalComponent;
	    /**
	     * @new in version 6.3
	     *
	     * This adds support for future theme-specific components via their "theme.bundle.js"
	     *
	     */

	    if (typeof window !== 'undefined') {
	      Component = window.AdminJS?.UserComponents?.[name] ?? window.THEME?.Components?.[name] ?? OriginalComponent;
	    }

	    return /*#__PURE__*/React__default$1["default"].createElement(Component, _extends$2({}, props, {
	      OriginalComponent: OriginalComponent
	    }));
	  };

	  return WrapperComponent;
	}

	const StyledLogo = styled__default["default"](reactRouterDom.Link).withConfig({
	  displayName: "sidebar-branding__StyledLogo",
	  componentId: "sc-1efxyd2-0"
	})(["text-align:center;display:flex;align-content:center;justify-content:center;flex-shrink:0;padding:", " ", " ", ";text-decoration:none;& > h1{text-decoration:none;font-weight:", ";font-size:", ";color:", ";font-size:", ";line-height:", ";}& > img{max-width:170px;}&:hover h1{color:", ";}"], DesignSystem.themeGet('space', 'lg'), DesignSystem.themeGet('space', 'xxl'), DesignSystem.themeGet('space', 'xxl'), DesignSystem.themeGet('fontWeights', 'bolder'), DesignSystem.themeGet('fontWeights', 'bolder'), DesignSystem.themeGet('colors', 'grey80'), DesignSystem.themeGet('fontSizes', 'xl'), DesignSystem.themeGet('lineHeights', 'xl'), DesignSystem.themeGet('colors', 'primary100'));
	const h$3 = new ViewHelpers();

	const SidebarBranding = props => {
	  const {
	    branding
	  } = props;
	  const {
	    logo,
	    companyName
	  } = branding;
	  return /*#__PURE__*/React__default$1["default"].createElement(StyledLogo, {
	    className: DesignSystem.cssClass('Logo'),
	    to: h$3.dashboardUrl(),
	    "data-css": "sidebar-logo"
	  }, logo ? /*#__PURE__*/React__default$1["default"].createElement("img", {
	    src: logo,
	    alt: companyName
	  }) : /*#__PURE__*/React__default$1["default"].createElement("h1", null, companyName));
	};

	var SidebarBranding$1 = allowOverride(SidebarBranding, 'SidebarBranding');

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */

	function arrayReduce$1(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	var _arrayReduce = arrayReduce$1;

	/**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */

	function basePropertyOf$1(object) {
	  return function(key) {
	    return object == null ? undefined : object[key];
	  };
	}

	var _basePropertyOf = basePropertyOf$1;

	var basePropertyOf = _basePropertyOf;

	/** Used to map Latin Unicode letters to basic Latin letters. */
	var deburredLetters = {
	  // Latin-1 Supplement block.
	  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	  '\xc7': 'C',  '\xe7': 'c',
	  '\xd0': 'D',  '\xf0': 'd',
	  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	  '\xd1': 'N',  '\xf1': 'n',
	  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	  '\xc6': 'Ae', '\xe6': 'ae',
	  '\xde': 'Th', '\xfe': 'th',
	  '\xdf': 'ss',
	  // Latin Extended-A block.
	  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
	  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
	  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
	  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
	  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
	  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
	  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
	  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
	  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
	  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
	  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
	  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
	  '\u0134': 'J',  '\u0135': 'j',
	  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
	  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
	  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
	  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
	  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
	  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
	  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
	  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
	  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
	  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
	  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
	  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
	  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
	  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
	  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
	  '\u0174': 'W',  '\u0175': 'w',
	  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
	  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
	  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
	  '\u0132': 'IJ', '\u0133': 'ij',
	  '\u0152': 'Oe', '\u0153': 'oe',
	  '\u0149': "'n", '\u017f': 's'
	};

	/**
	 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	 * letters to basic Latin letters.
	 *
	 * @private
	 * @param {string} letter The matched letter to deburr.
	 * @returns {string} Returns the deburred letter.
	 */
	var deburrLetter$1 = basePropertyOf(deburredLetters);

	var _deburrLetter = deburrLetter$1;

	/** Detect free variable `global` from Node.js. */

	var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal$1;

	var freeGlobal = _freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root$1 = freeGlobal || freeSelf || Function('return this')();

	var _root = root$1;

	var root = _root;

	/** Built-in value references. */
	var Symbol$4 = root.Symbol;

	var _Symbol = Symbol$4;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */

	function arrayMap$1(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap$1;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */

	var isArray$2 = Array.isArray;

	var isArray_1 = isArray$2;

	var Symbol$3 = _Symbol;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto$1.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/** Built-in value references. */
	var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag$1(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
	      tag = value[symToStringTag$1];

	  try {
	    value[symToStringTag$1] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString$1.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag$1] = tag;
	    } else {
	      delete value[symToStringTag$1];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag$1;

	/** Used for built-in method references. */

	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString$1(value) {
	  return nativeObjectToString.call(value);
	}

	var _objectToString = objectToString$1;

	var Symbol$2 = _Symbol,
	    getRawTag = _getRawTag,
	    objectToString = _objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag$2(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	var _baseGetTag = baseGetTag$2;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */

	function isObjectLike$2(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike$2;

	var baseGetTag$1 = _baseGetTag,
	    isObjectLike$1 = isObjectLike_1;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol$2(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike$1(value) && baseGetTag$1(value) == symbolTag);
	}

	var isSymbol_1 = isSymbol$2;

	var Symbol$1 = _Symbol,
	    arrayMap = _arrayMap,
	    isArray$1 = isArray_1,
	    isSymbol$1 = isSymbol_1;

	/** Used as references for various `Number` constants. */
	var INFINITY$1 = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString$2(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray$1(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString$2) + '';
	  }
	  if (isSymbol$1(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
	}

	var _baseToString = baseToString$2;

	var baseToString$1 = _baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString$5(value) {
	  return value == null ? '' : baseToString$1(value);
	}

	var toString_1 = toString$5;

	var deburrLetter = _deburrLetter,
	    toString$4 = toString_1;

	/** Used to match Latin Unicode letters (excluding mathematical operators). */
	var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

	/** Used to compose unicode character classes. */
	var rsComboMarksRange$4 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$4 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$4 = '\\u20d0-\\u20ff',
	    rsComboRange$4 = rsComboMarksRange$4 + reComboHalfMarksRange$4 + rsComboSymbolsRange$4;

	/** Used to compose unicode capture groups. */
	var rsCombo$3 = '[' + rsComboRange$4 + ']';

	/**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */
	var reComboMark = RegExp(rsCombo$3, 'g');

	/**
	 * Deburrs `string` by converting
	 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	 * letters to basic Latin letters and removing
	 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to deburr.
	 * @returns {string} Returns the deburred string.
	 * @example
	 *
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */
	function deburr$1(string) {
	  string = toString$4(string);
	  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
	}

	var deburr_1 = deburr$1;

	/** Used to match words composed of alphanumeric characters. */

	var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

	/**
	 * Splits an ASCII `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function asciiWords$1(string) {
	  return string.match(reAsciiWord) || [];
	}

	var _asciiWords = asciiWords$1;

	/** Used to detect strings that need a more robust regexp to match words. */

	var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

	/**
	 * Checks if `string` contains a word composed of Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a word is found, else `false`.
	 */
	function hasUnicodeWord$1(string) {
	  return reHasUnicodeWord.test(string);
	}

	var _hasUnicodeWord = hasUnicodeWord$1;

	/** Used to compose unicode character classes. */

	var rsAstralRange$3 = '\\ud800-\\udfff',
	    rsComboMarksRange$3 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
	    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
	    rsDingbatRange = '\\u2700-\\u27bf',
	    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	    rsPunctuationRange = '\\u2000-\\u206f',
	    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	    rsVarRange$3 = '\\ufe0e\\ufe0f',
	    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

	/** Used to compose unicode capture groups. */
	var rsApos$1 = "['\u2019]",
	    rsBreak = '[' + rsBreakRange + ']',
	    rsCombo$2 = '[' + rsComboRange$3 + ']',
	    rsDigits = '\\d+',
	    rsDingbat = '[' + rsDingbatRange + ']',
	    rsLower = '[' + rsLowerRange + ']',
	    rsMisc = '[^' + rsAstralRange$3 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	    rsFitz$2 = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier$2 = '(?:' + rsCombo$2 + '|' + rsFitz$2 + ')',
	    rsNonAstral$2 = '[^' + rsAstralRange$3 + ']',
	    rsRegional$2 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair$2 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsUpper = '[' + rsUpperRange + ']',
	    rsZWJ$3 = '\\u200d';

	/** Used to compose unicode regexes. */
	var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
	    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
	    rsOptContrLower = '(?:' + rsApos$1 + '(?:d|ll|m|re|s|t|ve))?',
	    rsOptContrUpper = '(?:' + rsApos$1 + '(?:D|LL|M|RE|S|T|VE))?',
	    reOptMod$2 = rsModifier$2 + '?',
	    rsOptVar$2 = '[' + rsVarRange$3 + ']?',
	    rsOptJoin$2 = '(?:' + rsZWJ$3 + '(?:' + [rsNonAstral$2, rsRegional$2, rsSurrPair$2].join('|') + ')' + rsOptVar$2 + reOptMod$2 + ')*',
	    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
	    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
	    rsSeq$2 = rsOptVar$2 + reOptMod$2 + rsOptJoin$2,
	    rsEmoji = '(?:' + [rsDingbat, rsRegional$2, rsSurrPair$2].join('|') + ')' + rsSeq$2;

	/** Used to match complex or compound words. */
	var reUnicodeWord = RegExp([
	  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
	  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
	  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
	  rsUpper + '+' + rsOptContrUpper,
	  rsOrdUpper,
	  rsOrdLower,
	  rsDigits,
	  rsEmoji
	].join('|'), 'g');

	/**
	 * Splits a Unicode `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function unicodeWords$1(string) {
	  return string.match(reUnicodeWord) || [];
	}

	var _unicodeWords = unicodeWords$1;

	var asciiWords = _asciiWords,
	    hasUnicodeWord = _hasUnicodeWord,
	    toString$3 = toString_1,
	    unicodeWords = _unicodeWords;

	/**
	 * Splits `string` into an array of its words.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {RegExp|string} [pattern] The pattern to match words.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the words of `string`.
	 * @example
	 *
	 * _.words('fred, barney, & pebbles');
	 * // => ['fred', 'barney', 'pebbles']
	 *
	 * _.words('fred, barney, & pebbles', /[^, ]+/g);
	 * // => ['fred', 'barney', '&', 'pebbles']
	 */
	function words$1(string, pattern, guard) {
	  string = toString$3(string);
	  pattern = guard ? undefined : pattern;

	  if (pattern === undefined) {
	    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
	  }
	  return string.match(pattern) || [];
	}

	var words_1 = words$1;

	var arrayReduce = _arrayReduce,
	    deburr = deburr_1,
	    words = words_1;

	/** Used to compose unicode capture groups. */
	var rsApos = "['\u2019]";

	/** Used to match apostrophes. */
	var reApos = RegExp(rsApos, 'g');

	/**
	 * Creates a function like `_.camelCase`.
	 *
	 * @private
	 * @param {Function} callback The function to combine each word.
	 * @returns {Function} Returns the new compounder function.
	 */
	function createCompounder$1(callback) {
	  return function(string) {
	    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
	  };
	}

	var _createCompounder = createCompounder$1;

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */

	function baseSlice$1(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	var _baseSlice = baseSlice$1;

	var baseSlice = _baseSlice;

	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice$2(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : baseSlice(array, start, end);
	}

	var _castSlice = castSlice$2;

	/** Used to compose unicode character classes. */

	var rsAstralRange$2 = '\\ud800-\\udfff',
	    rsComboMarksRange$2 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
	    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2,
	    rsVarRange$2 = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ$2 = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp('[' + rsZWJ$2 + rsAstralRange$2  + rsComboRange$2 + rsVarRange$2 + ']');

	/**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */
	function hasUnicode$4(string) {
	  return reHasUnicode.test(string);
	}

	var _hasUnicode = hasUnicode$4;

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */

	function asciiToArray$1(string) {
	  return string.split('');
	}

	var _asciiToArray = asciiToArray$1;

	/** Used to compose unicode character classes. */

	var rsAstralRange$1 = '\\ud800-\\udfff',
	    rsComboMarksRange$1 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
	    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
	    rsVarRange$1 = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral$1 = '[' + rsAstralRange$1 + ']',
	    rsCombo$1 = '[' + rsComboRange$1 + ']',
	    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier$1 = '(?:' + rsCombo$1 + '|' + rsFitz$1 + ')',
	    rsNonAstral$1 = '[^' + rsAstralRange$1 + ']',
	    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ$1 = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod$1 = rsModifier$1 + '?',
	    rsOptVar$1 = '[' + rsVarRange$1 + ']?',
	    rsOptJoin$1 = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
	    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
	    rsSymbol$1 = '(?:' + [rsNonAstral$1 + rsCombo$1 + '?', rsCombo$1, rsRegional$1, rsSurrPair$1, rsAstral$1].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode$1 = RegExp(rsFitz$1 + '(?=' + rsFitz$1 + ')|' + rsSymbol$1 + rsSeq$1, 'g');

	/**
	 * Converts a Unicode `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function unicodeToArray$1(string) {
	  return string.match(reUnicode$1) || [];
	}

	var _unicodeToArray = unicodeToArray$1;

	var asciiToArray = _asciiToArray,
	    hasUnicode$3 = _hasUnicode,
	    unicodeToArray = _unicodeToArray;

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray$2(string) {
	  return hasUnicode$3(string)
	    ? unicodeToArray(string)
	    : asciiToArray(string);
	}

	var _stringToArray = stringToArray$2;

	var castSlice$1 = _castSlice,
	    hasUnicode$2 = _hasUnicode,
	    stringToArray$1 = _stringToArray,
	    toString$2 = toString_1;

	/**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new case function.
	 */
	function createCaseFirst$1(methodName) {
	  return function(string) {
	    string = toString$2(string);

	    var strSymbols = hasUnicode$2(string)
	      ? stringToArray$1(string)
	      : undefined;

	    var chr = strSymbols
	      ? strSymbols[0]
	      : string.charAt(0);

	    var trailing = strSymbols
	      ? castSlice$1(strSymbols, 1).join('')
	      : string.slice(1);

	    return chr[methodName]() + trailing;
	  };
	}

	var _createCaseFirst = createCaseFirst$1;

	var createCaseFirst = _createCaseFirst;

	/**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */
	var upperFirst$1 = createCaseFirst('toUpperCase');

	var upperFirst_1 = upperFirst$1;

	var createCompounder = _createCompounder,
	    upperFirst = upperFirst_1;

	/**
	 * Converts `string` to
	 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.1.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the start cased string.
	 * @example
	 *
	 * _.startCase('--foo-bar--');
	 * // => 'Foo Bar'
	 *
	 * _.startCase('fooBar');
	 * // => 'Foo Bar'
	 *
	 * _.startCase('__FOO_BAR__');
	 * // => 'FOO BAR'
	 */
	var startCase = createCompounder(function(result, word, index) {
	  return result + (index ? ' ' : '') + upperFirst(word);
	});

	var startCase_1 = startCase;

	/**
	 * @memberof TranslateFunctions
	 * @alias TranslateFunction
	 */

	const formatName = name => name.split('.').join('&#46;');

	const translate = (i18n, key, name, resourceId, options) => {
	  const realOptions = (typeof resourceId === 'string' ? options : resourceId) || {};
	  const formattedName = formatName(name);
	  let keys = [`${key}.${formattedName}`];

	  if (resourceId) {
	    keys = [`resources.${resourceId}.${key}.${formattedName}`, ...keys];
	  }

	  if (i18n.exists(keys)) {
	    return i18n.t(keys, realOptions);
	  }

	  return realOptions.defaultValue ?? startCase_1(name);
	};

	const createFunctions = i18n => {
	  const translateAction = (actionName, resourceId, options) => translate(i18n, 'actions', actionName, resourceId, options);

	  const translateButton = (buttonLabel, resourceId, options) => translate(i18n, 'buttons', buttonLabel, resourceId, options);

	  const translateLabel = (label, resourceId, options) => translate(i18n, 'labels', label, resourceId, options);

	  const translateProperty = (propertyName, resourceId, options) => translate(i18n, 'properties', propertyName, resourceId, options);

	  const translateMessage = (messageName, resourceId, options) => translate(i18n, 'messages', messageName, resourceId, options);

	  return {
	    translateAction,
	    ta: translateAction,
	    translateButton,
	    tb: translateButton,
	    translateLabel,
	    tl: translateLabel,
	    translateProperty,
	    tp: translateProperty,
	    translateMessage,
	    tm: translateMessage,
	    t: i18n.t,
	    translate: i18n.t
	  };
	};

	/**
	 * Extends {@link TranslateFunctions}. Apart from that it also returns all the properties
	 * defined below.
	 *
	 * ```javascript
	 * import { useTranslation } from 'adminjs'
	 *
	 * const MyComponent = () => {
	 *   const { translateButton } = useTranslation()
	 *
	 *   return (
	 *     <Box>
	 *       <Button variant="primary" onClick={...}>{translateButton('save')}<Button>
	 *     </Box>
	 *   )
	 * }
	 * ```
	 *
	 * @memberof useTranslation
	 * @alias UseTranslationResponse
	 *
	 * @property {TranslateFunction} ... All functions defined in {@link TranslateFunctions}
	 */

	/**
	 * @classdesc
	 * Extends the useTranslation hook from react-i18next library.
	 *
	 * Returns all the {@link TranslateFunctions} + methods returned by the original
	 * useTranslation method from react-i18next like: `i18n` instance and `ready` flag.
	 *
	 * @class
	 * @subcategory Hooks
	 * @bundle
	 * @hideconstructor
	 * @returns {UseTranslationResponse}
	 */
	const useTranslation = () => {
	  // eslint-disable-next-line no-shadow
	  const {
	    i18n,
	    ...rest
	  } = commonjs.useTranslation();
	  const translateFunctions = createFunctions(i18n);
	  return { ...rest,
	    i18n,
	    ...translateFunctions
	  };
	};

	const h$2 = new ViewHelpers();

	const SidebarPages = props => {
	  const {
	    pages
	  } = props;
	  const {
	    translateLabel
	  } = useTranslation();
	  const location = reactRouter.useLocation();
	  const navigate = reactRouter.useNavigate();

	  if (!pages || !pages.length) {
	    return null;
	  }

	  const isActive = page => !!location.pathname.match(`/pages/${page.name}`);

	  const elements = pages.map(page => ({
	    id: page.name,
	    label: page.name,
	    isSelected: isActive(page),
	    icon: page.icon,
	    href: h$2.pageUrl(page.name),
	    onClick: (event, element) => {
	      event.preventDefault();

	      if (element.href) {
	        navigate(element.href);
	      }
	    }
	  }));
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Navigation, {
	    label: translateLabel('pages'),
	    elements: elements
	  });
	};

	var SidebarPages$1 = allowOverride(SidebarPages, 'SidebarPages');

	const SidebarFooter = () => {
	  const branding = require$$3.useSelector(state => state.branding);
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    mt: "lg",
	    mb: "md",
	    "data-css": "sidebar-footer"
	  }, branding.withMadeWithLove && /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.MadeWithLove, null));
	};

	var SidebarFooter$1 = allowOverride(SidebarFooter, 'SidebarFooter');

	var axios$3 = {exports: {}};

	var axios$2 = {exports: {}};

	var bind$2 = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};

	var bind$1 = bind$2;

	// utils is a library of generic helper functions non-specific to axios

	var toString$1 = Object.prototype.toString;

	// eslint-disable-next-line func-names
	var kindOf = (function(cache) {
	  // eslint-disable-next-line func-names
	  return function(thing) {
	    var str = toString$1.call(thing);
	    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
	  };
	})(Object.create(null));

	function kindOfTest(type) {
	  type = type.toLowerCase();
	  return function isKindOf(thing) {
	    return kindOf(thing) === type;
	  };
	}

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return Array.isArray(val);
	}

	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}

	/**
	 * Determine if a value is a Buffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Buffer, otherwise false
	 */
	function isBuffer$1(val) {
	  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
	    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @function
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	var isArrayBuffer = kindOfTest('ArrayBuffer');


	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
	  }
	  return result;
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}

	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}

	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject$4(val) {
	  return val !== null && typeof val === 'object';
	}

	/**
	 * Determine if a value is a plain Object
	 *
	 * @param {Object} val The value to test
	 * @return {boolean} True if value is a plain Object, otherwise false
	 */
	function isPlainObject(val) {
	  if (kindOf(val) !== 'object') {
	    return false;
	  }

	  var prototype = Object.getPrototypeOf(val);
	  return prototype === null || prototype === Object.prototype;
	}

	/**
	 * Determine if a value is a Date
	 *
	 * @function
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	var isDate = kindOfTest('Date');

	/**
	 * Determine if a value is a File
	 *
	 * @function
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	var isFile = kindOfTest('File');

	/**
	 * Determine if a value is a Blob
	 *
	 * @function
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	var isBlob = kindOfTest('Blob');

	/**
	 * Determine if a value is a FileList
	 *
	 * @function
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	var isFileList = kindOfTest('FileList');

	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString$1.call(val) === '[object Function]';
	}

	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject$4(val) && isFunction(val.pipe);
	}

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} thing The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(thing) {
	  var pattern = '[object FormData]';
	  return thing && (
	    (typeof FormData === 'function' && thing instanceof FormData) ||
	    toString$1.call(thing) === pattern ||
	    (isFunction(thing.toString) && thing.toString() === pattern)
	  );
	}

	/**
	 * Determine if a value is a URLSearchParams object
	 * @function
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	var isURLSearchParams = kindOfTest('URLSearchParams');

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
	}

	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 * nativescript
	 *  navigator.product -> 'NativeScript' or 'NS'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
	                                           navigator.product === 'NativeScript' ||
	                                           navigator.product === 'NS')) {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }

	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }

	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge$1(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (isPlainObject(result[key]) && isPlainObject(val)) {
	      result[key] = merge$1(result[key], val);
	    } else if (isPlainObject(val)) {
	      result[key] = merge$1({}, val);
	    } else if (isArray(val)) {
	      result[key] = val.slice();
	    } else {
	      result[key] = val;
	    }
	  }

	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind$1(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}

	/**
	 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
	 *
	 * @param {string} content with BOM
	 * @return {string} content value without BOM
	 */
	function stripBOM(content) {
	  if (content.charCodeAt(0) === 0xFEFF) {
	    content = content.slice(1);
	  }
	  return content;
	}

	/**
	 * Inherit the prototype methods from one constructor into another
	 * @param {function} constructor
	 * @param {function} superConstructor
	 * @param {object} [props]
	 * @param {object} [descriptors]
	 */

	function inherits(constructor, superConstructor, props, descriptors) {
	  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
	  constructor.prototype.constructor = constructor;
	  props && Object.assign(constructor.prototype, props);
	}

	/**
	 * Resolve object with deep prototype chain to a flat object
	 * @param {Object} sourceObj source object
	 * @param {Object} [destObj]
	 * @param {Function} [filter]
	 * @returns {Object}
	 */

	function toFlatObject(sourceObj, destObj, filter) {
	  var props;
	  var i;
	  var prop;
	  var merged = {};

	  destObj = destObj || {};

	  do {
	    props = Object.getOwnPropertyNames(sourceObj);
	    i = props.length;
	    while (i-- > 0) {
	      prop = props[i];
	      if (!merged[prop]) {
	        destObj[prop] = sourceObj[prop];
	        merged[prop] = true;
	      }
	    }
	    sourceObj = Object.getPrototypeOf(sourceObj);
	  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

	  return destObj;
	}

	/*
	 * determines whether a string ends with the characters of a specified string
	 * @param {String} str
	 * @param {String} searchString
	 * @param {Number} [position= 0]
	 * @returns {boolean}
	 */
	function endsWith(str, searchString, position) {
	  str = String(str);
	  if (position === undefined || position > str.length) {
	    position = str.length;
	  }
	  position -= searchString.length;
	  var lastIndex = str.indexOf(searchString, position);
	  return lastIndex !== -1 && lastIndex === position;
	}


	/**
	 * Returns new array from array like object
	 * @param {*} [thing]
	 * @returns {Array}
	 */
	function toArray(thing) {
	  if (!thing) return null;
	  var i = thing.length;
	  if (isUndefined(i)) return null;
	  var arr = new Array(i);
	  while (i-- > 0) {
	    arr[i] = thing[i];
	  }
	  return arr;
	}

	// eslint-disable-next-line func-names
	var isTypedArray = (function(TypedArray) {
	  // eslint-disable-next-line func-names
	  return function(thing) {
	    return TypedArray && thing instanceof TypedArray;
	  };
	})(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));

	var utils$9 = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer$1,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject$4,
	  isPlainObject: isPlainObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge$1,
	  extend: extend,
	  trim: trim,
	  stripBOM: stripBOM,
	  inherits: inherits,
	  toFlatObject: toFlatObject,
	  kindOf: kindOf,
	  kindOfTest: kindOfTest,
	  endsWith: endsWith,
	  toArray: toArray,
	  isTypedArray: isTypedArray,
	  isFileList: isFileList
	};

	var utils$8 = utils$9;

	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	var buildURL$1 = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }

	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils$8.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];

	    utils$8.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }

	      if (utils$8.isArray(val)) {
	        key = key + '[]';
	      } else {
	        val = [val];
	      }

	      utils$8.forEach(val, function parseValue(v) {
	        if (utils$8.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils$8.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });

	    serializedParams = parts.join('&');
	  }

	  if (serializedParams) {
	    var hashmarkIndex = url.indexOf('#');
	    if (hashmarkIndex !== -1) {
	      url = url.slice(0, hashmarkIndex);
	    }

	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }

	  return url;
	};

	var utils$7 = utils$9;

	function InterceptorManager$1() {
	  this.handlers = [];
	}

	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected,
	    synchronous: options ? options.synchronous : false,
	    runWhen: options ? options.runWhen : null
	  });
	  return this.handlers.length - 1;
	};

	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager$1.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};

	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager$1.prototype.forEach = function forEach(fn) {
	  utils$7.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};

	var InterceptorManager_1 = InterceptorManager$1;

	var utils$6 = utils$9;

	var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
	  utils$6.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};

	var AxiosError_1;
	var hasRequiredAxiosError;

	function requireAxiosError () {
		if (hasRequiredAxiosError) return AxiosError_1;
		hasRequiredAxiosError = 1;

		var utils = utils$9;

		/**
		 * Create an Error with the specified message, config, error code, request and response.
		 *
		 * @param {string} message The error message.
		 * @param {string} [code] The error code (for example, 'ECONNABORTED').
		 * @param {Object} [config] The config.
		 * @param {Object} [request] The request.
		 * @param {Object} [response] The response.
		 * @returns {Error} The created error.
		 */
		function AxiosError(message, code, config, request, response) {
		  Error.call(this);
		  this.message = message;
		  this.name = 'AxiosError';
		  code && (this.code = code);
		  config && (this.config = config);
		  request && (this.request = request);
		  response && (this.response = response);
		}

		utils.inherits(AxiosError, Error, {
		  toJSON: function toJSON() {
		    return {
		      // Standard
		      message: this.message,
		      name: this.name,
		      // Microsoft
		      description: this.description,
		      number: this.number,
		      // Mozilla
		      fileName: this.fileName,
		      lineNumber: this.lineNumber,
		      columnNumber: this.columnNumber,
		      stack: this.stack,
		      // Axios
		      config: this.config,
		      code: this.code,
		      status: this.response && this.response.status ? this.response.status : null
		    };
		  }
		});

		var prototype = AxiosError.prototype;
		var descriptors = {};

		[
		  'ERR_BAD_OPTION_VALUE',
		  'ERR_BAD_OPTION',
		  'ECONNABORTED',
		  'ETIMEDOUT',
		  'ERR_NETWORK',
		  'ERR_FR_TOO_MANY_REDIRECTS',
		  'ERR_DEPRECATED',
		  'ERR_BAD_RESPONSE',
		  'ERR_BAD_REQUEST',
		  'ERR_CANCELED'
		// eslint-disable-next-line func-names
		].forEach(function(code) {
		  descriptors[code] = {value: code};
		});

		Object.defineProperties(AxiosError, descriptors);
		Object.defineProperty(prototype, 'isAxiosError', {value: true});

		// eslint-disable-next-line func-names
		AxiosError.from = function(error, code, config, request, response, customProps) {
		  var axiosError = Object.create(prototype);

		  utils.toFlatObject(error, axiosError, function filter(obj) {
		    return obj !== Error.prototype;
		  });

		  AxiosError.call(axiosError, error.message, code, config, request, response);

		  axiosError.name = error.name;

		  customProps && Object.assign(axiosError, customProps);

		  return axiosError;
		};

		AxiosError_1 = AxiosError;
		return AxiosError_1;
	}

	var transitional = {
	  silentJSONParsing: true,
	  forcedJSONParsing: true,
	  clarifyTimeoutError: false
	};

	var toFormData_1;
	var hasRequiredToFormData;

	function requireToFormData () {
		if (hasRequiredToFormData) return toFormData_1;
		hasRequiredToFormData = 1;

		var utils = utils$9;

		/**
		 * Convert a data object to FormData
		 * @param {Object} obj
		 * @param {?Object} [formData]
		 * @returns {Object}
		 **/

		function toFormData(obj, formData) {
		  // eslint-disable-next-line no-param-reassign
		  formData = formData || new FormData();

		  var stack = [];

		  function convertValue(value) {
		    if (value === null) return '';

		    if (utils.isDate(value)) {
		      return value.toISOString();
		    }

		    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
		      return typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
		    }

		    return value;
		  }

		  function build(data, parentKey) {
		    if (utils.isPlainObject(data) || utils.isArray(data)) {
		      if (stack.indexOf(data) !== -1) {
		        throw Error('Circular reference detected in ' + parentKey);
		      }

		      stack.push(data);

		      utils.forEach(data, function each(value, key) {
		        if (utils.isUndefined(value)) return;
		        var fullKey = parentKey ? parentKey + '.' + key : key;
		        var arr;

		        if (value && !parentKey && typeof value === 'object') {
		          if (utils.endsWith(key, '{}')) {
		            // eslint-disable-next-line no-param-reassign
		            value = JSON.stringify(value);
		          } else if (utils.endsWith(key, '[]') && (arr = utils.toArray(value))) {
		            // eslint-disable-next-line func-names
		            arr.forEach(function(el) {
		              !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
		            });
		            return;
		          }
		        }

		        build(value, fullKey);
		      });

		      stack.pop();
		    } else {
		      formData.append(parentKey, convertValue(data));
		    }
		  }

		  build(obj);

		  return formData;
		}

		toFormData_1 = toFormData;
		return toFormData_1;
	}

	var settle;
	var hasRequiredSettle;

	function requireSettle () {
		if (hasRequiredSettle) return settle;
		hasRequiredSettle = 1;

		var AxiosError = requireAxiosError();

		/**
		 * Resolve or reject a Promise based on response status.
		 *
		 * @param {Function} resolve A function that resolves the promise.
		 * @param {Function} reject A function that rejects the promise.
		 * @param {object} response The response.
		 */
		settle = function settle(resolve, reject, response) {
		  var validateStatus = response.config.validateStatus;
		  if (!response.status || !validateStatus || validateStatus(response.status)) {
		    resolve(response);
		  } else {
		    reject(new AxiosError(
		      'Request failed with status code ' + response.status,
		      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
		      response.config,
		      response.request,
		      response
		    ));
		  }
		};
		return settle;
	}

	var cookies;
	var hasRequiredCookies;

	function requireCookies () {
		if (hasRequiredCookies) return cookies;
		hasRequiredCookies = 1;

		var utils = utils$9;

		cookies = (
		  utils.isStandardBrowserEnv() ?

		  // Standard browser envs support document.cookie
		    (function standardBrowserEnv() {
		      return {
		        write: function write(name, value, expires, path, domain, secure) {
		          var cookie = [];
		          cookie.push(name + '=' + encodeURIComponent(value));

		          if (utils.isNumber(expires)) {
		            cookie.push('expires=' + new Date(expires).toGMTString());
		          }

		          if (utils.isString(path)) {
		            cookie.push('path=' + path);
		          }

		          if (utils.isString(domain)) {
		            cookie.push('domain=' + domain);
		          }

		          if (secure === true) {
		            cookie.push('secure');
		          }

		          document.cookie = cookie.join('; ');
		        },

		        read: function read(name) {
		          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
		          return (match ? decodeURIComponent(match[3]) : null);
		        },

		        remove: function remove(name) {
		          this.write(name, '', Date.now() - 86400000);
		        }
		      };
		    })() :

		  // Non standard browser env (web workers, react-native) lack needed support.
		    (function nonStandardBrowserEnv() {
		      return {
		        write: function write() {},
		        read: function read() { return null; },
		        remove: function remove() {}
		      };
		    })()
		);
		return cookies;
	}

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	var isAbsoluteURL$1 = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
	};

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};

	var isAbsoluteURL = isAbsoluteURL$1;
	var combineURLs = combineURLs$1;

	/**
	 * Creates a new URL by combining the baseURL with the requestedURL,
	 * only when the requestedURL is not already an absolute URL.
	 * If the requestURL is absolute, this function returns the requestedURL untouched.
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} requestedURL Absolute or relative URL to combine
	 * @returns {string} The combined full path
	 */
	var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
	  if (baseURL && !isAbsoluteURL(requestedURL)) {
	    return combineURLs(baseURL, requestedURL);
	  }
	  return requestedURL;
	};

	var parseHeaders;
	var hasRequiredParseHeaders;

	function requireParseHeaders () {
		if (hasRequiredParseHeaders) return parseHeaders;
		hasRequiredParseHeaders = 1;

		var utils = utils$9;

		// Headers whose duplicates are ignored by node
		// c.f. https://nodejs.org/api/http.html#http_message_headers
		var ignoreDuplicateOf = [
		  'age', 'authorization', 'content-length', 'content-type', 'etag',
		  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
		  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
		  'referer', 'retry-after', 'user-agent'
		];

		/**
		 * Parse headers into an object
		 *
		 * ```
		 * Date: Wed, 27 Aug 2014 08:58:49 GMT
		 * Content-Type: application/json
		 * Connection: keep-alive
		 * Transfer-Encoding: chunked
		 * ```
		 *
		 * @param {String} headers Headers needing to be parsed
		 * @returns {Object} Headers parsed into an object
		 */
		parseHeaders = function parseHeaders(headers) {
		  var parsed = {};
		  var key;
		  var val;
		  var i;

		  if (!headers) { return parsed; }

		  utils.forEach(headers.split('\n'), function parser(line) {
		    i = line.indexOf(':');
		    key = utils.trim(line.substr(0, i)).toLowerCase();
		    val = utils.trim(line.substr(i + 1));

		    if (key) {
		      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
		        return;
		      }
		      if (key === 'set-cookie') {
		        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
		      } else {
		        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
		      }
		    }
		  });

		  return parsed;
		};
		return parseHeaders;
	}

	var isURLSameOrigin;
	var hasRequiredIsURLSameOrigin;

	function requireIsURLSameOrigin () {
		if (hasRequiredIsURLSameOrigin) return isURLSameOrigin;
		hasRequiredIsURLSameOrigin = 1;

		var utils = utils$9;

		isURLSameOrigin = (
		  utils.isStandardBrowserEnv() ?

		  // Standard browser envs have full support of the APIs needed to test
		  // whether the request URL is of the same origin as current location.
		    (function standardBrowserEnv() {
		      var msie = /(msie|trident)/i.test(navigator.userAgent);
		      var urlParsingNode = document.createElement('a');
		      var originURL;

		      /**
		    * Parse a URL to discover it's components
		    *
		    * @param {String} url The URL to be parsed
		    * @returns {Object}
		    */
		      function resolveURL(url) {
		        var href = url;

		        if (msie) {
		        // IE needs attribute set twice to normalize properties
		          urlParsingNode.setAttribute('href', href);
		          href = urlParsingNode.href;
		        }

		        urlParsingNode.setAttribute('href', href);

		        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
		        return {
		          href: urlParsingNode.href,
		          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
		          host: urlParsingNode.host,
		          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
		          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
		          hostname: urlParsingNode.hostname,
		          port: urlParsingNode.port,
		          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
		            urlParsingNode.pathname :
		            '/' + urlParsingNode.pathname
		        };
		      }

		      originURL = resolveURL(window.location.href);

		      /**
		    * Determine if a URL shares the same origin as the current location
		    *
		    * @param {String} requestURL The URL to test
		    * @returns {boolean} True if URL shares the same origin, otherwise false
		    */
		      return function isURLSameOrigin(requestURL) {
		        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
		        return (parsed.protocol === originURL.protocol &&
		            parsed.host === originURL.host);
		      };
		    })() :

		  // Non standard browser envs (web workers, react-native) lack needed support.
		    (function nonStandardBrowserEnv() {
		      return function isURLSameOrigin() {
		        return true;
		      };
		    })()
		);
		return isURLSameOrigin;
	}

	var CanceledError_1;
	var hasRequiredCanceledError;

	function requireCanceledError () {
		if (hasRequiredCanceledError) return CanceledError_1;
		hasRequiredCanceledError = 1;

		var AxiosError = requireAxiosError();
		var utils = utils$9;

		/**
		 * A `CanceledError` is an object that is thrown when an operation is canceled.
		 *
		 * @class
		 * @param {string=} message The message.
		 */
		function CanceledError(message) {
		  // eslint-disable-next-line no-eq-null,eqeqeq
		  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED);
		  this.name = 'CanceledError';
		}

		utils.inherits(CanceledError, AxiosError, {
		  __CANCEL__: true
		});

		CanceledError_1 = CanceledError;
		return CanceledError_1;
	}

	var parseProtocol;
	var hasRequiredParseProtocol;

	function requireParseProtocol () {
		if (hasRequiredParseProtocol) return parseProtocol;
		hasRequiredParseProtocol = 1;

		parseProtocol = function parseProtocol(url) {
		  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
		  return match && match[1] || '';
		};
		return parseProtocol;
	}

	var xhr;
	var hasRequiredXhr;

	function requireXhr () {
		if (hasRequiredXhr) return xhr;
		hasRequiredXhr = 1;

		var utils = utils$9;
		var settle = requireSettle();
		var cookies = requireCookies();
		var buildURL = buildURL$1;
		var buildFullPath = buildFullPath$1;
		var parseHeaders = requireParseHeaders();
		var isURLSameOrigin = requireIsURLSameOrigin();
		var transitionalDefaults = transitional;
		var AxiosError = requireAxiosError();
		var CanceledError = requireCanceledError();
		var parseProtocol = requireParseProtocol();

		xhr = function xhrAdapter(config) {
		  return new Promise(function dispatchXhrRequest(resolve, reject) {
		    var requestData = config.data;
		    var requestHeaders = config.headers;
		    var responseType = config.responseType;
		    var onCanceled;
		    function done() {
		      if (config.cancelToken) {
		        config.cancelToken.unsubscribe(onCanceled);
		      }

		      if (config.signal) {
		        config.signal.removeEventListener('abort', onCanceled);
		      }
		    }

		    if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
		      delete requestHeaders['Content-Type']; // Let the browser set it
		    }

		    var request = new XMLHttpRequest();

		    // HTTP basic authentication
		    if (config.auth) {
		      var username = config.auth.username || '';
		      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
		      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
		    }

		    var fullPath = buildFullPath(config.baseURL, config.url);

		    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

		    // Set the request timeout in MS
		    request.timeout = config.timeout;

		    function onloadend() {
		      if (!request) {
		        return;
		      }
		      // Prepare the response
		      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
		      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
		        request.responseText : request.response;
		      var response = {
		        data: responseData,
		        status: request.status,
		        statusText: request.statusText,
		        headers: responseHeaders,
		        config: config,
		        request: request
		      };

		      settle(function _resolve(value) {
		        resolve(value);
		        done();
		      }, function _reject(err) {
		        reject(err);
		        done();
		      }, response);

		      // Clean up request
		      request = null;
		    }

		    if ('onloadend' in request) {
		      // Use onloadend if available
		      request.onloadend = onloadend;
		    } else {
		      // Listen for ready state to emulate onloadend
		      request.onreadystatechange = function handleLoad() {
		        if (!request || request.readyState !== 4) {
		          return;
		        }

		        // The request errored out and we didn't get a response, this will be
		        // handled by onerror instead
		        // With one exception: request that using file: protocol, most browsers
		        // will return status as 0 even though it's a successful request
		        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
		          return;
		        }
		        // readystate handler is calling before onerror or ontimeout handlers,
		        // so we should call onloadend on the next 'tick'
		        setTimeout(onloadend);
		      };
		    }

		    // Handle browser request cancellation (as opposed to a manual cancellation)
		    request.onabort = function handleAbort() {
		      if (!request) {
		        return;
		      }

		      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

		      // Clean up request
		      request = null;
		    };

		    // Handle low level network errors
		    request.onerror = function handleError() {
		      // Real errors are hidden from us by the browser
		      // onerror should only fire if it's a network error
		      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, request));

		      // Clean up request
		      request = null;
		    };

		    // Handle timeout
		    request.ontimeout = function handleTimeout() {
		      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
		      var transitional = config.transitional || transitionalDefaults;
		      if (config.timeoutErrorMessage) {
		        timeoutErrorMessage = config.timeoutErrorMessage;
		      }
		      reject(new AxiosError(
		        timeoutErrorMessage,
		        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
		        config,
		        request));

		      // Clean up request
		      request = null;
		    };

		    // Add xsrf header
		    // This is only done if running in a standard browser environment.
		    // Specifically not if we're in a web worker, or react-native.
		    if (utils.isStandardBrowserEnv()) {
		      // Add xsrf header
		      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
		        cookies.read(config.xsrfCookieName) :
		        undefined;

		      if (xsrfValue) {
		        requestHeaders[config.xsrfHeaderName] = xsrfValue;
		      }
		    }

		    // Add headers to the request
		    if ('setRequestHeader' in request) {
		      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
		        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
		          // Remove Content-Type if data is undefined
		          delete requestHeaders[key];
		        } else {
		          // Otherwise add header to the request
		          request.setRequestHeader(key, val);
		        }
		      });
		    }

		    // Add withCredentials to request if needed
		    if (!utils.isUndefined(config.withCredentials)) {
		      request.withCredentials = !!config.withCredentials;
		    }

		    // Add responseType to request if needed
		    if (responseType && responseType !== 'json') {
		      request.responseType = config.responseType;
		    }

		    // Handle progress if needed
		    if (typeof config.onDownloadProgress === 'function') {
		      request.addEventListener('progress', config.onDownloadProgress);
		    }

		    // Not all browsers support upload events
		    if (typeof config.onUploadProgress === 'function' && request.upload) {
		      request.upload.addEventListener('progress', config.onUploadProgress);
		    }

		    if (config.cancelToken || config.signal) {
		      // Handle cancellation
		      // eslint-disable-next-line func-names
		      onCanceled = function(cancel) {
		        if (!request) {
		          return;
		        }
		        reject(!cancel || (cancel && cancel.type) ? new CanceledError() : cancel);
		        request.abort();
		        request = null;
		      };

		      config.cancelToken && config.cancelToken.subscribe(onCanceled);
		      if (config.signal) {
		        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
		      }
		    }

		    if (!requestData) {
		      requestData = null;
		    }

		    var protocol = parseProtocol(fullPath);

		    if (protocol && [ 'http', 'https', 'file' ].indexOf(protocol) === -1) {
		      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
		      return;
		    }


		    // Send the request
		    request.send(requestData);
		  });
		};
		return xhr;
	}

	var _null;
	var hasRequired_null;

	function require_null () {
		if (hasRequired_null) return _null;
		hasRequired_null = 1;
		// eslint-disable-next-line strict
		_null = null;
		return _null;
	}

	var utils$5 = utils$9;
	var normalizeHeaderName = normalizeHeaderName$1;
	var AxiosError$1 = requireAxiosError();
	var transitionalDefaults = transitional;
	var toFormData = requireToFormData();

	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};

	function setContentTypeIfUnset(headers, value) {
	  if (!utils$5.isUndefined(headers) && utils$5.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}

	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = requireXhr();
	  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
	    // For node use HTTP adapter
	    adapter = requireXhr();
	  }
	  return adapter;
	}

	function stringifySafely(rawValue, parser, encoder) {
	  if (utils$5.isString(rawValue)) {
	    try {
	      (parser || JSON.parse)(rawValue);
	      return utils$5.trim(rawValue);
	    } catch (e) {
	      if (e.name !== 'SyntaxError') {
	        throw e;
	      }
	    }
	  }

	  return (encoder || JSON.stringify)(rawValue);
	}

	var defaults$4 = {

	  transitional: transitionalDefaults,

	  adapter: getDefaultAdapter(),

	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Accept');
	    normalizeHeaderName(headers, 'Content-Type');

	    if (utils$5.isFormData(data) ||
	      utils$5.isArrayBuffer(data) ||
	      utils$5.isBuffer(data) ||
	      utils$5.isStream(data) ||
	      utils$5.isFile(data) ||
	      utils$5.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils$5.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils$5.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }

	    var isObjectPayload = utils$5.isObject(data);
	    var contentType = headers && headers['Content-Type'];

	    var isFileList;

	    if ((isFileList = utils$5.isFileList(data)) || (isObjectPayload && contentType === 'multipart/form-data')) {
	      var _FormData = this.env && this.env.FormData;
	      return toFormData(isFileList ? {'files[]': data} : data, _FormData && new _FormData());
	    } else if (isObjectPayload || contentType === 'application/json') {
	      setContentTypeIfUnset(headers, 'application/json');
	      return stringifySafely(data);
	    }

	    return data;
	  }],

	  transformResponse: [function transformResponse(data) {
	    var transitional = this.transitional || defaults$4.transitional;
	    var silentJSONParsing = transitional && transitional.silentJSONParsing;
	    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
	    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

	    if (strictJSONParsing || (forcedJSONParsing && utils$5.isString(data) && data.length)) {
	      try {
	        return JSON.parse(data);
	      } catch (e) {
	        if (strictJSONParsing) {
	          if (e.name === 'SyntaxError') {
	            throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
	          }
	          throw e;
	        }
	      }
	    }

	    return data;
	  }],

	  /**
	   * A timeout in milliseconds to abort a request. If set to 0 (default) a
	   * timeout is not created.
	   */
	  timeout: 0,

	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',

	  maxContentLength: -1,
	  maxBodyLength: -1,

	  env: {
	    FormData: require_null()
	  },

	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  },

	  headers: {
	    common: {
	      'Accept': 'application/json, text/plain, */*'
	    }
	  }
	};

	utils$5.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults$4.headers[method] = {};
	});

	utils$5.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults$4.headers[method] = utils$5.merge(DEFAULT_CONTENT_TYPE);
	});

	var defaults_1 = defaults$4;

	var utils$4 = utils$9;
	var defaults$3 = defaults_1;

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	var transformData$1 = function transformData(data, headers, fns) {
	  var context = this || defaults$3;
	  /*eslint no-param-reassign:0*/
	  utils$4.forEach(fns, function transform(fn) {
	    data = fn.call(context, data, headers);
	  });

	  return data;
	};

	var isCancel$1;
	var hasRequiredIsCancel;

	function requireIsCancel () {
		if (hasRequiredIsCancel) return isCancel$1;
		hasRequiredIsCancel = 1;

		isCancel$1 = function isCancel(value) {
		  return !!(value && value.__CANCEL__);
		};
		return isCancel$1;
	}

	var utils$3 = utils$9;
	var transformData = transformData$1;
	var isCancel = requireIsCancel();
	var defaults$2 = defaults_1;
	var CanceledError = requireCanceledError();

	/**
	 * Throws a `CanceledError` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }

	  if (config.signal && config.signal.aborted) {
	    throw new CanceledError();
	  }
	}

	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	var dispatchRequest$1 = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);

	  // Ensure headers exist
	  config.headers = config.headers || {};

	  // Transform request data
	  config.data = transformData.call(
	    config,
	    config.data,
	    config.headers,
	    config.transformRequest
	  );

	  // Flatten headers
	  config.headers = utils$3.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers
	  );

	  utils$3.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );

	  var adapter = config.adapter || defaults$2.adapter;

	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);

	    // Transform response data
	    response.data = transformData.call(
	      config,
	      response.data,
	      response.headers,
	      config.transformResponse
	    );

	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);

	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData.call(
	          config,
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }

	    return Promise.reject(reason);
	  });
	};

	var utils$2 = utils$9;

	/**
	 * Config-specific merge-function which creates a new config-object
	 * by merging two configuration objects together.
	 *
	 * @param {Object} config1
	 * @param {Object} config2
	 * @returns {Object} New object resulting from merging config2 to config1
	 */
	var mergeConfig$2 = function mergeConfig(config1, config2) {
	  // eslint-disable-next-line no-param-reassign
	  config2 = config2 || {};
	  var config = {};

	  function getMergedValue(target, source) {
	    if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source)) {
	      return utils$2.merge(target, source);
	    } else if (utils$2.isPlainObject(source)) {
	      return utils$2.merge({}, source);
	    } else if (utils$2.isArray(source)) {
	      return source.slice();
	    }
	    return source;
	  }

	  // eslint-disable-next-line consistent-return
	  function mergeDeepProperties(prop) {
	    if (!utils$2.isUndefined(config2[prop])) {
	      return getMergedValue(config1[prop], config2[prop]);
	    } else if (!utils$2.isUndefined(config1[prop])) {
	      return getMergedValue(undefined, config1[prop]);
	    }
	  }

	  // eslint-disable-next-line consistent-return
	  function valueFromConfig2(prop) {
	    if (!utils$2.isUndefined(config2[prop])) {
	      return getMergedValue(undefined, config2[prop]);
	    }
	  }

	  // eslint-disable-next-line consistent-return
	  function defaultToConfig2(prop) {
	    if (!utils$2.isUndefined(config2[prop])) {
	      return getMergedValue(undefined, config2[prop]);
	    } else if (!utils$2.isUndefined(config1[prop])) {
	      return getMergedValue(undefined, config1[prop]);
	    }
	  }

	  // eslint-disable-next-line consistent-return
	  function mergeDirectKeys(prop) {
	    if (prop in config2) {
	      return getMergedValue(config1[prop], config2[prop]);
	    } else if (prop in config1) {
	      return getMergedValue(undefined, config1[prop]);
	    }
	  }

	  var mergeMap = {
	    'url': valueFromConfig2,
	    'method': valueFromConfig2,
	    'data': valueFromConfig2,
	    'baseURL': defaultToConfig2,
	    'transformRequest': defaultToConfig2,
	    'transformResponse': defaultToConfig2,
	    'paramsSerializer': defaultToConfig2,
	    'timeout': defaultToConfig2,
	    'timeoutMessage': defaultToConfig2,
	    'withCredentials': defaultToConfig2,
	    'adapter': defaultToConfig2,
	    'responseType': defaultToConfig2,
	    'xsrfCookieName': defaultToConfig2,
	    'xsrfHeaderName': defaultToConfig2,
	    'onUploadProgress': defaultToConfig2,
	    'onDownloadProgress': defaultToConfig2,
	    'decompress': defaultToConfig2,
	    'maxContentLength': defaultToConfig2,
	    'maxBodyLength': defaultToConfig2,
	    'beforeRedirect': defaultToConfig2,
	    'transport': defaultToConfig2,
	    'httpAgent': defaultToConfig2,
	    'httpsAgent': defaultToConfig2,
	    'cancelToken': defaultToConfig2,
	    'socketPath': defaultToConfig2,
	    'responseEncoding': defaultToConfig2,
	    'validateStatus': mergeDirectKeys
	  };

	  utils$2.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
	    var merge = mergeMap[prop] || mergeDeepProperties;
	    var configValue = merge(prop);
	    (utils$2.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
	  });

	  return config;
	};

	var data;
	var hasRequiredData;

	function requireData () {
		if (hasRequiredData) return data;
		hasRequiredData = 1;
		data = {
		  "version": "0.27.2"
		};
		return data;
	}

	var VERSION = requireData().version;
	var AxiosError = requireAxiosError();

	var validators$1 = {};

	// eslint-disable-next-line func-names
	['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
	  validators$1[type] = function validator(thing) {
	    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
	  };
	});

	var deprecatedWarnings = {};

	/**
	 * Transitional option validator
	 * @param {function|boolean?} validator - set to false if the transitional option has been removed
	 * @param {string?} version - deprecated version / removed since version
	 * @param {string?} message - some message with additional info
	 * @returns {function}
	 */
	validators$1.transitional = function transitional(validator, version, message) {
	  function formatMessage(opt, desc) {
	    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
	  }

	  // eslint-disable-next-line func-names
	  return function(value, opt, opts) {
	    if (validator === false) {
	      throw new AxiosError(
	        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
	        AxiosError.ERR_DEPRECATED
	      );
	    }

	    if (version && !deprecatedWarnings[opt]) {
	      deprecatedWarnings[opt] = true;
	      // eslint-disable-next-line no-console
	      console.warn(
	        formatMessage(
	          opt,
	          ' has been deprecated since v' + version + ' and will be removed in the near future'
	        )
	      );
	    }

	    return validator ? validator(value, opt, opts) : true;
	  };
	};

	/**
	 * Assert object's properties type
	 * @param {object} options
	 * @param {object} schema
	 * @param {boolean?} allowUnknown
	 */

	function assertOptions(options, schema, allowUnknown) {
	  if (typeof options !== 'object') {
	    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
	  }
	  var keys = Object.keys(options);
	  var i = keys.length;
	  while (i-- > 0) {
	    var opt = keys[i];
	    var validator = schema[opt];
	    if (validator) {
	      var value = options[opt];
	      var result = value === undefined || validator(value, opt, options);
	      if (result !== true) {
	        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
	      }
	      continue;
	    }
	    if (allowUnknown !== true) {
	      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
	    }
	  }
	}

	var validator$1 = {
	  assertOptions: assertOptions,
	  validators: validators$1
	};

	var utils$1 = utils$9;
	var buildURL = buildURL$1;
	var InterceptorManager = InterceptorManager_1;
	var dispatchRequest = dispatchRequest$1;
	var mergeConfig$1 = mergeConfig$2;
	var buildFullPath = buildFullPath$1;
	var validator = validator$1;

	var validators = validator.validators;
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios$1(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}

	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios$1.prototype.request = function request(configOrUrl, config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof configOrUrl === 'string') {
	    config = config || {};
	    config.url = configOrUrl;
	  } else {
	    config = configOrUrl || {};
	  }

	  config = mergeConfig$1(this.defaults, config);

	  // Set config.method
	  if (config.method) {
	    config.method = config.method.toLowerCase();
	  } else if (this.defaults.method) {
	    config.method = this.defaults.method.toLowerCase();
	  } else {
	    config.method = 'get';
	  }

	  var transitional = config.transitional;

	  if (transitional !== undefined) {
	    validator.assertOptions(transitional, {
	      silentJSONParsing: validators.transitional(validators.boolean),
	      forcedJSONParsing: validators.transitional(validators.boolean),
	      clarifyTimeoutError: validators.transitional(validators.boolean)
	    }, false);
	  }

	  // filter out skipped interceptors
	  var requestInterceptorChain = [];
	  var synchronousRequestInterceptors = true;
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
	      return;
	    }

	    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

	    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });

	  var responseInterceptorChain = [];
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
	  });

	  var promise;

	  if (!synchronousRequestInterceptors) {
	    var chain = [dispatchRequest, undefined];

	    Array.prototype.unshift.apply(chain, requestInterceptorChain);
	    chain = chain.concat(responseInterceptorChain);

	    promise = Promise.resolve(config);
	    while (chain.length) {
	      promise = promise.then(chain.shift(), chain.shift());
	    }

	    return promise;
	  }


	  var newConfig = config;
	  while (requestInterceptorChain.length) {
	    var onFulfilled = requestInterceptorChain.shift();
	    var onRejected = requestInterceptorChain.shift();
	    try {
	      newConfig = onFulfilled(newConfig);
	    } catch (error) {
	      onRejected(error);
	      break;
	    }
	  }

	  try {
	    promise = dispatchRequest(newConfig);
	  } catch (error) {
	    return Promise.reject(error);
	  }

	  while (responseInterceptorChain.length) {
	    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
	  }

	  return promise;
	};

	Axios$1.prototype.getUri = function getUri(config) {
	  config = mergeConfig$1(this.defaults, config);
	  var fullPath = buildFullPath(config.baseURL, config.url);
	  return buildURL(fullPath, config.params, config.paramsSerializer);
	};

	// Provide aliases for supported request methods
	utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios$1.prototype[method] = function(url, config) {
	    return this.request(mergeConfig$1(config || {}, {
	      method: method,
	      url: url,
	      data: (config || {}).data
	    }));
	  };
	});

	utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/

	  function generateHTTPMethod(isForm) {
	    return function httpMethod(url, data, config) {
	      return this.request(mergeConfig$1(config || {}, {
	        method: method,
	        headers: isForm ? {
	          'Content-Type': 'multipart/form-data'
	        } : {},
	        url: url,
	        data: data
	      }));
	    };
	  }

	  Axios$1.prototype[method] = generateHTTPMethod();

	  Axios$1.prototype[method + 'Form'] = generateHTTPMethod(true);
	});

	var Axios_1 = Axios$1;

	var CancelToken_1;
	var hasRequiredCancelToken;

	function requireCancelToken () {
		if (hasRequiredCancelToken) return CancelToken_1;
		hasRequiredCancelToken = 1;

		var CanceledError = requireCanceledError();

		/**
		 * A `CancelToken` is an object that can be used to request cancellation of an operation.
		 *
		 * @class
		 * @param {Function} executor The executor function.
		 */
		function CancelToken(executor) {
		  if (typeof executor !== 'function') {
		    throw new TypeError('executor must be a function.');
		  }

		  var resolvePromise;

		  this.promise = new Promise(function promiseExecutor(resolve) {
		    resolvePromise = resolve;
		  });

		  var token = this;

		  // eslint-disable-next-line func-names
		  this.promise.then(function(cancel) {
		    if (!token._listeners) return;

		    var i;
		    var l = token._listeners.length;

		    for (i = 0; i < l; i++) {
		      token._listeners[i](cancel);
		    }
		    token._listeners = null;
		  });

		  // eslint-disable-next-line func-names
		  this.promise.then = function(onfulfilled) {
		    var _resolve;
		    // eslint-disable-next-line func-names
		    var promise = new Promise(function(resolve) {
		      token.subscribe(resolve);
		      _resolve = resolve;
		    }).then(onfulfilled);

		    promise.cancel = function reject() {
		      token.unsubscribe(_resolve);
		    };

		    return promise;
		  };

		  executor(function cancel(message) {
		    if (token.reason) {
		      // Cancellation has already been requested
		      return;
		    }

		    token.reason = new CanceledError(message);
		    resolvePromise(token.reason);
		  });
		}

		/**
		 * Throws a `CanceledError` if cancellation has been requested.
		 */
		CancelToken.prototype.throwIfRequested = function throwIfRequested() {
		  if (this.reason) {
		    throw this.reason;
		  }
		};

		/**
		 * Subscribe to the cancel signal
		 */

		CancelToken.prototype.subscribe = function subscribe(listener) {
		  if (this.reason) {
		    listener(this.reason);
		    return;
		  }

		  if (this._listeners) {
		    this._listeners.push(listener);
		  } else {
		    this._listeners = [listener];
		  }
		};

		/**
		 * Unsubscribe from the cancel signal
		 */

		CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
		  if (!this._listeners) {
		    return;
		  }
		  var index = this._listeners.indexOf(listener);
		  if (index !== -1) {
		    this._listeners.splice(index, 1);
		  }
		};

		/**
		 * Returns an object that contains a new `CancelToken` and a function that, when called,
		 * cancels the `CancelToken`.
		 */
		CancelToken.source = function source() {
		  var cancel;
		  var token = new CancelToken(function executor(c) {
		    cancel = c;
		  });
		  return {
		    token: token,
		    cancel: cancel
		  };
		};

		CancelToken_1 = CancelToken;
		return CancelToken_1;
	}

	var spread;
	var hasRequiredSpread;

	function requireSpread () {
		if (hasRequiredSpread) return spread;
		hasRequiredSpread = 1;

		/**
		 * Syntactic sugar for invoking a function and expanding an array for arguments.
		 *
		 * Common use case would be to use `Function.prototype.apply`.
		 *
		 *  ```js
		 *  function f(x, y, z) {}
		 *  var args = [1, 2, 3];
		 *  f.apply(null, args);
		 *  ```
		 *
		 * With `spread` this example can be re-written.
		 *
		 *  ```js
		 *  spread(function(x, y, z) {})([1, 2, 3]);
		 *  ```
		 *
		 * @param {Function} callback
		 * @returns {Function}
		 */
		spread = function spread(callback) {
		  return function wrap(arr) {
		    return callback.apply(null, arr);
		  };
		};
		return spread;
	}

	var isAxiosError;
	var hasRequiredIsAxiosError;

	function requireIsAxiosError () {
		if (hasRequiredIsAxiosError) return isAxiosError;
		hasRequiredIsAxiosError = 1;

		var utils = utils$9;

		/**
		 * Determines whether the payload is an error thrown by Axios
		 *
		 * @param {*} payload The value to test
		 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
		 */
		isAxiosError = function isAxiosError(payload) {
		  return utils.isObject(payload) && (payload.isAxiosError === true);
		};
		return isAxiosError;
	}

	var utils = utils$9;
	var bind = bind$2;
	var Axios = Axios_1;
	var mergeConfig = mergeConfig$2;
	var defaults$1 = defaults_1;

	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);

	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);

	  // Copy context to instance
	  utils.extend(instance, context);

	  // Factory for creating new instances
	  instance.create = function create(instanceConfig) {
	    return createInstance(mergeConfig(defaultConfig, instanceConfig));
	  };

	  return instance;
	}

	// Create the default instance to be exported
	var axios$1 = createInstance(defaults$1);

	// Expose Axios class to allow class inheritance
	axios$1.Axios = Axios;

	// Expose Cancel & CancelToken
	axios$1.CanceledError = requireCanceledError();
	axios$1.CancelToken = requireCancelToken();
	axios$1.isCancel = requireIsCancel();
	axios$1.VERSION = requireData().version;
	axios$1.toFormData = requireToFormData();

	// Expose AxiosError class
	axios$1.AxiosError = requireAxiosError();

	// alias for CanceledError for backward compatibility
	axios$1.Cancel = axios$1.CanceledError;

	// Expose all/spread
	axios$1.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios$1.spread = requireSpread();

	// Expose isAxiosError
	axios$1.isAxiosError = requireIsAxiosError();

	axios$2.exports = axios$1;

	// Allow use of default import syntax in TypeScript
	axios$2.exports.default = axios$1;

	(function (module) {
		module.exports = axios$2.exports;
	} (axios$3));

	var axios = /*@__PURE__*/getDefaultExportFromCjs(axios$3.exports);

	let globalAny$1 = {};

	try {
	  globalAny$1 = window;
	} catch (error) {
	  if (error.message !== 'window is not defined') {
	    throw error;
	  } else {
	    globalAny$1 = {
	      isOnServer: true
	    };
	  }
	}
	/**
	 * Type of an [axios request]{@link https://github.com/axios/axios/blob/master/index.d.ts#L43}
	 *
	 * @typedef {object} AxiosRequestConfig
	 * @alias AxiosRequestConfig
	 * @memberof ApiClient
	 * @see https://github.com/axios/axios/blob/master/index.d.ts#L43
	 */


	const checkResponse = response => {
	  if (globalAny$1.isOnServer) {
	    return;
	  }

	  const loginUrl = [globalAny$1.location.origin, globalAny$1.REDUX_STATE.paths.loginPath].join(''); // if response has redirect to loginUrl

	  if (response.request.responseURL && response.request.responseURL.match(loginUrl)) {
	    // eslint-disable-next-line no-undef
	    alert('Your session expired. You will be redirected to login screen');
	    globalAny$1.location.assign(loginUrl);
	  }
	};
	/**
	 * Extends {@link AxiosRequestConfig}
	 *
	 * @alias ActionAPIParams
	 * @memberof ApiClient
	 * @property {any}   ...    any property supported by {@link AxiosRequestConfig}
	 */


	/**
	 * Client which access the admin API.
	 * Use it to fetch data from auto generated AdminJS API.
	 *
	 * In the backend it uses [axios](https://github.com/axios/axios) client
	 * library.
	 *
	 * Usage:
	 * ```javascript
	 * import { ApiClient } from 'adminjs'
	 *
	 * const api = new ApiClient()
	 * // fetching all records
	 * api.resourceAction({ resourceId: 'Comments', actionName: 'list' }).then(results => {...})
	 * ```
	 * @see https://github.com/axios/axios
	 * @hideconstructor
	 */
	class ApiClient {
	  constructor() {
	    this.baseURL = ApiClient.getBaseUrl();
	    this.client = axios.create({
	      baseURL: this.baseURL
	    });
	  }

	  static getBaseUrl() {
	    if (globalAny$1.isOnServer) {
	      return '';
	    }

	    return [globalAny$1.location.origin, globalAny$1.REDUX_STATE?.paths.rootPath].join('');
	  }
	  /**
	   * Search by query string for records in a given resource.
	   *
	   * @param   {Object}  options
	   * @param   {String}  options.resourceId     id of a {@link ResourceJSON}
	   * @param   {String}  options.query          query string
	   * @param   {String}  options.searchProperty optional property name
	   *
	   * @return  {Promise<SearchResponse>}
	   */


	  async searchRecords({
	    resourceId,
	    query,
	    searchProperty
	  }) {
	    if (globalAny$1.isOnServer) {
	      return [];
	    }

	    const actionName = 'search';
	    const response = await this.resourceAction({
	      resourceId,
	      actionName,
	      query,
	      ...(searchProperty ? {
	        params: {
	          searchProperty
	        }
	      } : undefined)
	    });
	    checkResponse(response);
	    return response.data.records;
	  }
	  /**
	   * Invokes given resource {@link Action} on the backend.
	   *
	   * @param   {ResourceActionAPIParams}     options
	   * @return  {Promise<ActionResponse>}     response from an {@link Action}
	   */


	  async resourceAction(options) {
	    const {
	      resourceId,
	      actionName,
	      data,
	      query,
	      ...axiosParams
	    } = options;
	    let url = `/api/resources/${resourceId}/actions/${actionName}`;

	    if (query) {
	      const q = encodeURIComponent(query);
	      url = [url, q].join('/');
	    }

	    const response = await this.client.request({
	      url,
	      method: data ? 'POST' : 'GET',
	      ...axiosParams,
	      data
	    });
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes given record {@link Action} on the backend.
	   *
	   * @param   {RecordActionAPIParams} options
	   * @return  {Promise<RecordActionResponse>}            response from an {@link Action}
	   */


	  async recordAction(options) {
	    const {
	      resourceId,
	      recordId,
	      actionName,
	      data,
	      ...axiosParams
	    } = options;
	    const response = await this.client.request({
	      url: `/api/resources/${resourceId}/records/${recordId}/${actionName}`,
	      method: data ? 'POST' : 'GET',
	      ...axiosParams,
	      data
	    });
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes given bulk {@link Action} on the backend.
	   *
	   * @param   {BulkActionAPIParams} options
	   * @return  {Promise<BulkActionResponse>}            response from an {@link Action}
	   */


	  async bulkAction(options) {
	    const {
	      resourceId,
	      recordIds,
	      actionName,
	      data,
	      ...axiosParams
	    } = options;
	    const params = new URLSearchParams();
	    params.set('recordIds', (recordIds || []).join(','));
	    const response = await this.client.request({
	      url: `/api/resources/${resourceId}/bulk/${actionName}`,
	      method: data ? 'POST' : 'GET',
	      ...axiosParams,
	      data,
	      params
	    });
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes dashboard handler.
	   *
	   * @param   {AxiosRequestConfig}       options
	   * @return  {Promise<AxiosResponse<any>>} response from the handler function defined in
	   *                                     {@link AdminJSOptions#dashboard}
	   */


	  async getDashboard(options = {}) {
	    const response = await this.client.get('/api/dashboard', options);
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes handler function of given page and returns its response.
	   *
	   * @param   {GetPageAPIParams}                options
	   * @return  {Promise<AxiosResponse<any>>}     response from the handler of given page
	   *                                            defined in {@link AdminJSOptions#pages}
	   */


	  async getPage(options) {
	    const {
	      pageName,
	      ...axiosParams
	    } = options;
	    const response = await this.client.request({
	      url: `/api/pages/${pageName}`,
	      ...axiosParams
	    });
	    checkResponse(response);
	    return response;
	  }

	}

	const FORM_VALUE_NULL = '__FORM_VALUE_NULL__';
	const FORM_VALUE_EMPTY_OBJECT = '__FORM_VALUE_EMPTY_OBJECT__';
	const FORM_VALUE_EMPTY_ARRAY = '__FORM_VALUE_EMPTY_ARRAY__';

	const isObjectOrArray = value => typeof value === 'object' && value.constructor !== File && !(value instanceof Date);
	/**
	 * Changes RecordJSON that it can be send as a FormData to the backend.
	 *
	 * FormData is required because we are sending files via the wire. But it has limitations.
	 * Namely it can only transport files and strings. That is why we have to convert some
	 * standard types like NULL to constants so they can be property converted back by the backend.
	 * And thus properly handled.
	 *
	 * @private
	 * @param   {RecordJSON}  record
	 * @return  {FormData}
	 */


	function paramsToFormData(params) {
	  const formData = new FormData(); // Assume that params are flatted

	  Object.entries(params).forEach(([key, value]) => {
	    // {@link updateRecord} does not change empty objects "{}" - so in order to prevent having
	    // them changed to "[object Object]" we have to set them to empty strings.
	    if (value === null) {
	      return formData.set(key, FORM_VALUE_NULL);
	    } // File objects has to go through because they are handled by FormData


	    if (isObjectOrArray(value)) {
	      if (Array.isArray(value)) {
	        return formData.set(key, FORM_VALUE_EMPTY_ARRAY);
	      }

	      return formData.set(key, FORM_VALUE_EMPTY_OBJECT);
	    } // Convert Date fields to UTC timezone


	    if (value instanceof Date) {
	      return formData.set(key, value.toISOString());
	    } // Rest goes as a standard value


	    return formData.set(key, value);
	  });
	  return formData;
	}

	const ADD_NOTICE = 'ADD_NOTICE';
	const addNotice = (data = {
	  message: ''
	}) => ({
	  type: ADD_NOTICE,
	  data: {
	    message: data.message,
	    id: Math.random().toString(36).substr(2, 9),
	    type: data.type || 'success',
	    progress: 0
	  }
	});

	/**
	 * @classdesc
	 * Hook which allows you to add notice message to the app.
	 *
	 * ```javascript
	 * import { useNotice, Button } from 'adminjs'
	 *
	 * const myComponent = () => {
	 *   const sendNotice = useNotice()
	 *   render (
	 *     <Button onClick={() => sendNotice({ message: 'I am awesome' })}>I am awesome</Button>
	 *   )
	 * }
	 * ```
	 *
	 * @class
	 * @subcategory Hooks
	 * @bundle
	 * @hideconstructor
	 */
	const useNotice = () => {
	  const dispatch = require$$3.useDispatch();
	  return notice => dispatch(addNotice(notice));
	};

	/**
	 * Handlers of all [Actions]{@link Action} of type `record` returns record.
	 * Depending on a place and response we have to merge what was returned
	 * to the actual state. It is done in following places:
	 * - {@link useRecord} hook
	 * - {@link RecordInList} component
	 * - {@link RecordAction} component
	 *
	 * @private
	 */
	const mergeRecordResponse = (record, response) => ({ // we start from the response because it can have different recordActions or bulkActions
	  ...(response.record || record),
	  // records has to be reset every time because so that user wont
	  // see old errors which are not relevant anymore
	  errors: response.record.errors,
	  populated: { ...record.populated,
	    ...response.record.populated
	  },
	  params: { ...record.params,
	    ...response.record.params
	  }
	});

	var flat$1 = flatten;
	flatten.flatten = flatten;
	flatten.unflatten = unflatten;

	function isBuffer (obj) {
	  return obj &&
	    obj.constructor &&
	    (typeof obj.constructor.isBuffer === 'function') &&
	    obj.constructor.isBuffer(obj)
	}

	function keyIdentity (key) {
	  return key
	}

	function flatten (target, opts) {
	  opts = opts || {};

	  const delimiter = opts.delimiter || '.';
	  const maxDepth = opts.maxDepth;
	  const transformKey = opts.transformKey || keyIdentity;
	  const output = {};

	  function step (object, prev, currentDepth) {
	    currentDepth = currentDepth || 1;
	    Object.keys(object).forEach(function (key) {
	      const value = object[key];
	      const isarray = opts.safe && Array.isArray(value);
	      const type = Object.prototype.toString.call(value);
	      const isbuffer = isBuffer(value);
	      const isobject = (
	        type === '[object Object]' ||
	        type === '[object Array]'
	      );

	      const newKey = prev
	        ? prev + delimiter + transformKey(key)
	        : transformKey(key);

	      if (!isarray && !isbuffer && isobject && Object.keys(value).length &&
	        (!opts.maxDepth || currentDepth < maxDepth)) {
	        return step(value, newKey, currentDepth + 1)
	      }

	      output[newKey] = value;
	    });
	  }

	  step(target);

	  return output
	}

	function unflatten (target, opts) {
	  opts = opts || {};

	  const delimiter = opts.delimiter || '.';
	  const overwrite = opts.overwrite || false;
	  const transformKey = opts.transformKey || keyIdentity;
	  const result = {};

	  const isbuffer = isBuffer(target);
	  if (isbuffer || Object.prototype.toString.call(target) !== '[object Object]') {
	    return target
	  }

	  // safely ensure that the key is
	  // an integer.
	  function getkey (key) {
	    const parsedKey = Number(key);

	    return (
	      isNaN(parsedKey) ||
	      key.indexOf('.') !== -1 ||
	      opts.object
	    ) ? key
	      : parsedKey
	  }

	  function addKeys (keyPrefix, recipient, target) {
	    return Object.keys(target).reduce(function (result, key) {
	      result[keyPrefix + delimiter + key] = target[key];

	      return result
	    }, recipient)
	  }

	  function isEmpty (val) {
	    const type = Object.prototype.toString.call(val);
	    const isArray = type === '[object Array]';
	    const isObject = type === '[object Object]';

	    if (!val) {
	      return true
	    } else if (isArray) {
	      return !val.length
	    } else if (isObject) {
	      return !Object.keys(val).length
	    }
	  }

	  target = Object.keys(target).reduce(function (result, key) {
	    const type = Object.prototype.toString.call(target[key]);
	    const isObject = (type === '[object Object]' || type === '[object Array]');
	    if (!isObject || isEmpty(target[key])) {
	      result[key] = target[key];
	      return result
	    } else {
	      return addKeys(
	        key,
	        result,
	        flatten(target[key], opts)
	      )
	    }
	  }, {});

	  Object.keys(target).forEach(function (key) {
	    const split = key.split(delimiter).map(transformKey);
	    let key1 = getkey(split.shift());
	    let key2 = getkey(split[0]);
	    let recipient = result;

	    while (key2 !== undefined) {
	      if (key1 === '__proto__') {
	        return
	      }

	      const type = Object.prototype.toString.call(recipient[key1]);
	      const isobject = (
	        type === '[object Object]' ||
	        type === '[object Array]'
	      );

	      // do not write over falsey, non-undefined values if overwrite is false
	      if (!overwrite && !isobject && typeof recipient[key1] !== 'undefined') {
	        return
	      }

	      if ((overwrite && !isobject) || (!overwrite && recipient[key1] == null)) {
	        recipient[key1] = (
	          typeof key2 === 'number' &&
	          !opts.object ? [] : {}
	        );
	      }

	      recipient = recipient[key1];
	      if (split.length > 0) {
	        key1 = getkey(split.shift());
	        key2 = getkey(split[0]);
	      }
	    }

	    // unflatten again for 'messy objects'
	    recipient[key1] = unflatten(target[key], opts);
	  });

	  return result
	}

	const DELIMITER = '.';

	// this is the regex used to find all existing properties starting with a key
	const propertyKeyRegex = (propertyPath, options) => {
	  const delimiter = new RegExp(`\\${DELIMITER}`, 'g');
	  const escapedDelimiter = `\\${DELIMITER}`; // but for `nested.1.property.0` it will produce `nested(\.|\.\d+\.)1(\.|\.\d+\.)property.0`
	  // and this is intentional because user can give an one index in property path for with deeply
	  // nested arrays

	  const escapedDelimiterOrIndex = `(${escapedDelimiter}|${escapedDelimiter}\\d+${escapedDelimiter})`;
	  const path = options?.includeAllSiblings ? propertyPath.replace(delimiter, escapedDelimiterOrIndex) : propertyPath.replace(delimiter, escapedDelimiter);
	  return new RegExp(`^${path}($|${escapedDelimiter})`, '');
	};

	/**
	 * @load ./select-params.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams} params
	 * @param {string | Array<string>} properties
	 * @param {GetOptions} [options]
	 * @returns {FlattenParams}
	 */
	const selectParams = (params, properties, options) => {
	  const propertyArray = Array.isArray(properties) ? properties : [properties];
	  const selected = propertyArray.filter(propertyPath => !!propertyPath).reduce((globalMemo, propertyPath) => {
	    const regex = propertyKeyRegex(propertyPath, options);
	    const filtered = Object.keys(params) // filter all keys which starts with property path
	    .filter(key => key.match(regex)).reduce((memo, key) => {
	      memo[key] = params[key];
	      return memo;
	    }, {});
	    return { ...globalMemo,
	      ...filtered
	    };
	  }, {});
	  return selected;
	};

	/**
	 * @load ./filter-out-params.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams} params
	 * @param {string | Array<string>} properties
	 * @returns {FlattenParams}
	 */
	const filterOutParams = (params, properties) => {
	  const propertyArray = Array.isArray(properties) ? properties : [properties];
	  return propertyArray.filter(propertyPath => !!propertyPath).reduce((globalFiltered, propertyPath) => {
	    const regex = propertyKeyRegex(propertyPath);
	    return Object.keys(globalFiltered).filter(key => !key.match(regex)).reduce((memo, key) => {
	      memo[key] = params[key];
	      return memo;
	    }, {});
	  }, params);
	};

	/**
	 * @memberof module:flat
	 * @alias PathToPartsOptions
	 */

	/**
	 * @load ./path-to-parts.doc.md
	 * @param   {string}              propertyPath
	 * @param   {PathToPartsOptions}  options
	 * @returns  {PathParts}
	 *
	 * @memberof module:flat
	 * @alias pathToParts
	 */
	const pathToParts = (propertyPath, options = {}) => {
	  let allParts = propertyPath.split('.');

	  if (options.skipArrayIndexes) {
	    // eslint-disable-next-line no-restricted-globals
	    allParts = allParts.filter(part => isNaN(+part));
	  }

	  return allParts.reduce((memo, part) => {
	    if (memo.length) {
	      return [...memo, [memo[memo.length - 1], part].join('.')];
	    }

	    return [part];
	  }, []);
	};

	const isObject$3 = value => {
	  // Node environment
	  if (typeof File === 'undefined') {
	    return typeof value === 'object' && value !== null;
	  } // Window environment


	  return typeof value === 'object' && !(value instanceof File) && value !== null;
	};
	/**
	 * @load ./set.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams} params
	 * @param {string} propertyPath
	 * @param {any} [value]       if not give function will only try to remove old keys
	 * @returns {FlattenParams}
	 */


	const set = (params = {}, propertyPath, value) => {
	  const regex = propertyKeyRegex(propertyPath); // remove all existing keys

	  const paramsCopy = Object.keys(params).filter(key => !key.match(regex)).reduce((memo, key) => {
	    memo[key] = params[key];
	    return memo;
	  }, {});

	  if (typeof value !== 'undefined') {
	    if (isObject$3(value) && !(value instanceof Date)) {
	      const flattened = flat$1.flatten(value);

	      if (Object.keys(flattened).length) {
	        Object.keys(flattened).forEach(key => {
	          paramsCopy[`${propertyPath}${DELIMITER}${key}`] = flattened[key];
	        });
	      } else if (Array.isArray(value)) {
	        paramsCopy[propertyPath] = [];
	      } else {
	        paramsCopy[propertyPath] = {};
	      }
	    } else {
	      paramsCopy[propertyPath] = value;
	    } // when user gave { "nested.value": "something" } and had "nested" set to `null`, then
	    // nested should be removed


	    const parts = pathToParts(propertyPath).slice(0, -1);

	    if (parts.length) {
	      return Object.keys(paramsCopy).filter(key => !parts.includes(key)).reduce((memo, key) => {
	        memo[key] = paramsCopy[key];
	        return memo;
	      }, {});
	    }
	  }

	  return paramsCopy;
	};

	const TEMP_HOLDING_KEY = 'TEMP_HOLDING_KEY';
	/**
	 * @load ./get.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams}   params      flatten params from which property has to be taken
	 * @param {string}          [propertyPath]  name of the property
	 * @param {GetOptions}      options     options
	 * @returns {any}                       when property key exists directly it returns what is inside,
	 *                                      otherwise it tries to find any nested objects and returns
	 *                                      them
	 */

	const get = (params = {}, propertyPath, options) => {
	  if (!propertyPath) {
	    return flat$1.unflatten(params);
	  } // when object has this key - simply return it
	  // we cannot rely on typeof params[propertyPath !== 'undefined' because params can actually be
	  // undefined and in such case if would pass and function would return [undefined]


	  if (Object.keys(params).find(key => key === propertyPath)) {
	    return params[propertyPath];
	  }

	  const regex = propertyKeyRegex(propertyPath, options);
	  const selectedParams = selectParams(params, propertyPath, options);
	  const nestedProperties = Object.keys(selectedParams).reduce((memo, key, index) => {
	    let newKey = key.replace(regex, `${TEMP_HOLDING_KEY}${DELIMITER}`); // when user wants to take allSiblings we have to fix the indexes so nested items from
	    // different siblings don't overlap
	    //
	    // Example for key `nested.1.el`:
	    //  'nested.0.el.0.value': 'val0.0',
	    //  'nested.0.el.1.value': 'val0.1',
	    //  'nested.1.el.0.value': 'val1',
	    //  'nested.1.el.1.value': 'val2',
	    //
	    // has to be changed to:
	    //  'TEMP_HOLDING_KEY.0.value': 'val0.0',
	    //  'TEMP_HOLDING_KEY.1.value': 'val0.1',
	    //  'TEMP_HOLDING_KEY.2.value': 'val1',
	    //  'TEMP_HOLDING_KEY.3.value': 'val2',

	    if (options?.includeAllSiblings) {
	      newKey = newKey.replace(new RegExp(`${TEMP_HOLDING_KEY}\\${DELIMITER}(\\d*)`), `${TEMP_HOLDING_KEY}${DELIMITER}${index}`);
	    }

	    memo[newKey] = selectedParams[key];
	    return memo;
	  }, {});

	  if (Object.keys(nestedProperties).length) {
	    return flat$1.unflatten(nestedProperties)[TEMP_HOLDING_KEY];
	  }

	  return undefined;
	};

	/**
	 * Merges params together and returns flatten result
	 *
	 * @param {any} params
	 * @param {Array<any>} ...mergeParams
	 * @returns {FlattenParams}
	 * @memberof module:flat
	 */

	const merge = (params = {}, ...mergeParams) => {
	  const flattenParams = flat$1.flatten(params); // reverse because we merge from right

	  return mergeParams.reverse().reduce((globalMemo, mergeParam) => Object.keys(mergeParam).reduce((memo, key) => set(memo, key, mergeParam[key]), globalMemo), flattenParams);
	};

	/**
	 * @load ./remove-path.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams} params
	 * @param {...string} properties
	 * @returns {FlattenParams}
	 */

	const removePath = (params, path) => {
	  // by default simply filter out elements from the object
	  let filtered = filterOutParams(params, path); // reverse means that we iterate from the closes parent

	  const parentPaths = pathToParts(path).reverse(); // but if one of the parent is an array

	  parentPaths.find((parentPath, parentIndex) => {
	    const parent = get(params, parentPath);

	    if (Array.isArray(parent)) {
	      // previous element is stringified index like 'property.1'
	      const previousPaths = parentPaths[parentIndex - 1].split(DELIMITER); // so this is the index: 1

	      const previousPathIndex = previousPaths[previousPaths.length - 1];
	      parent.splice(+previousPathIndex, 1);
	      filtered = set(params, parentPath, parent); // this works just for the firstly found array item, because in case of removing the last one
	      // it leaves `[]` as a value.

	      return true;
	    }

	    return false;
	  });
	  return filtered;
	};

	/**
	 * @module flat
	 * @name flat
	 * @new in version 3.3
	 * @load ./flat.doc.md
	 */
	const flat = {
	  /**
	   * Raw `flatten` function exported from original {@link https://www.npmjs.com/package/flat flat}
	   * package.
	   */
	  flatten: flat$1.flatten,

	  /**
	   * Raw `unflatten` function exported from original {@link https://www.npmjs.com/package/flat flat}
	   * package.
	   */
	  unflatten: flat$1.unflatten,
	  set,
	  get,
	  selectParams,
	  filterOutParams,
	  removePath,
	  DELIMITER,
	  pathToParts,
	  merge
	};

	/**
	 * HOF returning a function which takes a record and returns an updated record.
	 * This way we can pass this to setState in react, which takes old state
	 * (in our case previousRecord) as an argument.
	 *
	 * Function is used when to the {@link OnPropertyChange} callback, user passes
	 * key (property name) and the value (followed by an optional selectedRecord).
	 *
	 * The responsibility of the function is to:
	 * - clear old values under passed key: so when user passes property === `some.key`
	 *   function removes `some.key.1`, `some.key.2` etc
	 * - sets new value under the passed key for primitive types
	 * - in case of objects - it flattens them first and then sets all the resulted values
	 *   under the path provided in the property argument
	 * - it fills value in RecordJSON#populated when selectedRecord is given
	 * - finally it invalidates populated for given property
	 *
	 *
	 * @param {string}      property        property that must be updated, supports nesting
	 *                                      with dots
	 * @param {any}         value           value that must be set, undefined or null if
	 *                                      deleting, will be flattened
	 * @param {RecordJSON}  selectedRecord  if value is reference ID, this must be a record
	 *                                      it's referencing to
	 * @private
	 */
	const updateRecord = (property, value, selectedRecord) => previousRecord => {
	  let populatedModified = false;
	  const populatedCopy = { ...previousRecord.populated
	  };
	  const paramsCopy = flat.set(previousRecord.params, property, value);

	  if (property in populatedCopy) {
	    delete populatedCopy[property];
	    populatedModified = true;
	  }

	  if (selectedRecord) {
	    populatedCopy[property] = selectedRecord;
	    populatedModified = true;
	  }

	  return { ...previousRecord,
	    params: paramsCopy,
	    populated: populatedModified ? populatedCopy : previousRecord.populated
	  };
	};

	const isEntireRecordGiven = (propertyOrRecord, value) => !!(typeof value === 'undefined' // user can pass property and omit value. This makes sense when
	// third argument of the function (selectedRecord) is passed to onChange
	// callback
	&& !(typeof propertyOrRecord === 'string') // we assume that only params has to be given
	&& propertyOrRecord.params);

	// eslint-disable-next-line no-shadow
	let ErrorTypeEnum;

	(function (ErrorTypeEnum) {
	  ErrorTypeEnum["App"] = "AppError";
	  ErrorTypeEnum["Configuration"] = "ConfigurationError";
	  ErrorTypeEnum["Forbidden"] = "ForbiddenError";
	  ErrorTypeEnum["NotFound"] = "NotFoundError";
	  ErrorTypeEnum["NotImplemented"] = "NotImplementedError";
	  ErrorTypeEnum["Record"] = "RecordError";
	  ErrorTypeEnum["Validation"] = "ValidationError";
	})(ErrorTypeEnum || (ErrorTypeEnum = {}));

	const filterRecordParams = function (record, options = {}) {
	  if (options.includeParams && record) {
	    return { ...record,
	      params: flat.selectParams(record.params || {}, options.includeParams)
	    };
	  }

	  return record;
	};
	const isPropertyPermitted = (propertyName, options = {}) => {
	  const {
	    includeParams
	  } = options;

	  if (includeParams) {
	    const parts = flat.pathToParts(propertyName, {
	      skipArrayIndexes: true
	    });
	    return parts.some(part => includeParams.includes(part));
	  }

	  return true;
	};

	const api$4 = new ApiClient();
	/**
	 * @load ./use-record.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 * @bundle
	 * @param {RecordJSON} [initialRecord],
	 * @param {string} resourceId
	 * @param {UseRecordOptions} [options]
	 * @return {UseRecordResult}
	 */

	const useRecord = (initialRecord, resourceId, options) => {
	  // setting up state
	  const [loading, setLoading] = React$1.useState(false);
	  const [isSynced, setIsSynced] = React$1.useState(true);
	  const [progress, setProgress] = React$1.useState(0);
	  const filteredRecord = initialRecord ? filterRecordParams(initialRecord, options) : null;
	  const [record, setRecord] = React$1.useState({ ...filteredRecord,
	    params: filteredRecord?.params ?? {},
	    errors: initialRecord?.errors ?? {},
	    populated: initialRecord?.populated ?? {}
	  }); // it keeps the same format as useState function which can take either value or function

	  const setFilteredRecord = React$1.useCallback(value => {
	    const newRecord = value instanceof Function ? value(record) : value;
	    setRecord(filterRecordParams(newRecord, options));
	  }, [options, record]);
	  const onNotice = useNotice();
	  const handleChange = React$1.useCallback((propertyOrRecord, value, incomingRecord) => {
	    if (isEntireRecordGiven(propertyOrRecord, value)) {
	      setFilteredRecord(propertyOrRecord);
	    } else if (isPropertyPermitted(propertyOrRecord, options)) {
	      setRecord(updateRecord(propertyOrRecord, value, incomingRecord));
	    } else {
	      // eslint-disable-next-line no-console
	      console.warn([`You are trying to set property: "${propertyOrRecord}" which`, 'is not permitted. Take a look at `useRecord(..., { includeParams: [...]})`'].join('\n'));
	    }

	    setIsSynced(false);
	  }, [setRecord, options]);
	  const handleSubmit = React$1.useCallback((customParams = {}, submitOptions) => {
	    setLoading(true);
	    const mergedParams = flat.merge(record.params, customParams);
	    const formData = paramsToFormData(mergedParams);
	    const params = {
	      resourceId,
	      onUploadProgress: e => setProgress(Math.round(e.loaded * 100 / e.total)),
	      data: formData,
	      headers: {
	        'Content-Type': 'multipart/form-data'
	      }
	    };
	    const promise = initialRecord?.id ? api$4.recordAction({ ...params,
	      actionName: 'edit',
	      recordId: record.id
	    }) : api$4.resourceAction({ ...params,
	      actionName: 'new'
	    });
	    promise.then(response => {
	      if (response.data.notice) {
	        onNotice(response.data.notice);
	      }

	      if (submitOptions?.updateOnSave !== false) {
	        setFilteredRecord(prev => mergeRecordResponse(prev, response.data));
	      }

	      setProgress(0);
	      setLoading(false);
	      setIsSynced(true);
	    }).catch(() => {
	      onNotice({
	        message: 'There was an error updating record, Check out console to see more information.',
	        type: 'error'
	      });
	      setProgress(0);
	      setLoading(false);
	    });
	    return promise;
	  }, [record, resourceId, setLoading, setProgress, setRecord]);
	  return {
	    record,
	    handleChange,
	    submit: handleSubmit,
	    loading,
	    progress,
	    setRecord: setFilteredRecord,
	    isSynced
	  };
	};

	const actionHasComponent = action => typeof action.component !== 'undefined' && action.component === false;

	const h$1 = new ViewHelpers();
	const actionHref = (action, params) => {
	  const actionName = action.name;

	  if (!action.component && !action.hasHandler) {
	    return null;
	  }

	  const hrefMap = {
	    record: () => h$1.recordActionUrl({ ...params,
	      actionName
	    }),
	    resource: () => h$1.resourceActionUrl({
	      resourceId: params.resourceId,
	      actionName
	    }),
	    bulk: () => h$1.bulkActionUrl({ ...params,
	      actionName
	    })
	  };

	  if (hrefMap[action.actionType]) {
	    return hrefMap[action.actionType]();
	  }

	  throw new Error('"actionType" should be either record, resource or bulk');
	};

	const getResourceElementCss = (resourceId, suffix) => `${resourceId}-${suffix}`;
	const getActionElementCss = (resourceId, actionName, suffix) => `${resourceId}-${actionName}-${suffix}`;

	const api$3 = new ApiClient();
	function callActionApi(action, params, search) {
	  let promise;
	  const {
	    recordId,
	    recordIds,
	    resourceId
	  } = params;

	  switch (action.actionType) {
	    case 'record':
	      if (!recordId) {
	        throw new Error('You have to specify "recordId" for record action');
	      }

	      promise = api$3.recordAction({
	        resourceId,
	        actionName: action.name,
	        recordId,
	        search
	      });
	      break;

	    case 'resource':
	      promise = api$3.resourceAction({
	        resourceId,
	        actionName: action.name
	      });
	      break;

	    case 'bulk':
	      if (!recordIds) {
	        throw new Error('You have to specify "recordIds" for bulk action');
	      }

	      promise = api$3.bulkAction({
	        resourceId,
	        actionName: action.name,
	        recordIds,
	        search
	      });
	      break;

	    default:
	      throw new Error('"actionType" should be either record, resource or bulk');
	  }

	  return promise;
	}

	/* eslint-disable arrow-parens */
	const buildActionCallApiTrigger = options => {
	  const {
	    action,
	    params,
	    actionResponseHandler,
	    search
	  } = options;

	  const callApi = () => {
	    const promise = callActionApi(action, params, search);
	    promise.then(actionResponseHandler).catch(error => {
	      throw error;
	    });
	    return promise;
	  };

	  return callApi;
	};

	const buildActionTestId = action => `action-${action.name}`;

	/* eslint-disable no-restricted-globals */
	const buildActionClickHandler = options => {
	  const {
	    action,
	    params,
	    actionResponseHandler,
	    navigate
	  } = options;

	  const handleActionClick = event => {
	    event.preventDefault();
	    event.stopPropagation();
	    const href = actionHref(action, params);
	    const callApi = buildActionCallApiTrigger({
	      params,
	      action,
	      actionResponseHandler
	    });

	    if (action.guard && !confirm(action.guard)) {
	      return;
	    }

	    if (actionHasComponent(action)) {
	      // eslint-disable-next-line consistent-return
	      return callApi();
	    }

	    if (href) {
	      navigate(href);
	    }
	  };

	  return handleActionClick;
	};

	const REFRESH_KEY = 'refresh';
	const IGNORE_PARAMS_KEY = 'ignore_params';
	/**
	 * Adds refresh=true to the url, which in turn should cause list to reload.
	 *
	 * @param {string} url      url to which function should add `refresh`
	 * @param {string} [search] optional search query which should be updated,
	 *                          if not given function will use window.location.search
	 * @private
	 */

	const appendForceRefresh = (url, search) => {
	  const searchParamsIdx = url.lastIndexOf('?');
	  const urlSearchParams = searchParamsIdx !== -1 ? url.substring(searchParamsIdx + 1) : null;
	  const oldParams = new URLSearchParams(search ?? urlSearchParams ?? window.location.search ?? '');
	  const shouldIgnoreOldParams = new URLSearchParams(urlSearchParams || '').get(IGNORE_PARAMS_KEY) === 'true';
	  const newParams = shouldIgnoreOldParams ? new URLSearchParams('') : new URLSearchParams(oldParams.toString());
	  newParams.set(REFRESH_KEY, 'true');
	  const newUrl = searchParamsIdx !== -1 ? url.substring(0, searchParamsIdx) : url;
	  return `${newUrl}?${newParams.toString()}`;
	};
	const hasForceRefresh = search => {
	  const params = new URLSearchParams(search);
	  return !!params.get(REFRESH_KEY);
	};
	const removeForceRefresh = search => {
	  const params = new URLSearchParams(search);

	  if (params.get(REFRESH_KEY)) {
	    params.delete(REFRESH_KEY);
	  }

	  return params.toString();
	};

	/* eslint-disable @typescript-eslint/explicit-function-return-type */
	const useActionResponseHandler = onActionCall => {
	  const location = reactRouter.useLocation();
	  const navigate = reactRouter.useNavigate();
	  const addNotice = useNotice();
	  return response => {
	    const {
	      data
	    } = response;

	    if (data.notice) {
	      addNotice(data.notice);
	    }

	    if (data.redirectUrl && location.pathname !== data.redirectUrl) {
	      const appended = appendForceRefresh(data.redirectUrl);
	      navigate(appended);
	    }

	    if (onActionCall) {
	      onActionCall(data);
	    }
	  };
	};

	/**
	 * @load ./use-action.doc.md
	 * @subcategory Hooks
	 *
	 * @param {ActionJSON}   action      action object
	 * @param {ActionParams} params
	 * @param {ActionCallCallback} onActionCall - callback triggered when action is performed
	 * @return {UseActionResult}
	 * @class
	 * @hideconstructor
	 */

	function useAction(action, params, onActionCall) {
	  const navigate = reactRouter.useNavigate();
	  const actionResponseHandler = useActionResponseHandler(onActionCall);
	  const href = actionHref(action, params);
	  const callApi = buildActionCallApiTrigger({
	    action,
	    params,
	    actionResponseHandler
	  });
	  const handleClick = buildActionClickHandler({
	    action,
	    params,
	    actionResponseHandler,
	    navigate
	  });
	  return {
	    href,
	    callApi,
	    handleClick
	  };
	}

	const SESSION_INITIALIZE = 'SESSION_INITIALIZE';
	const setCurrentAdmin = (data = null) => ({
	  type: SESSION_INITIALIZE,
	  data
	});

	/**
	 * @classdesc
	 * Hook which allows you to get and set currentAdmin
	 *
	 * ### Usage
	 *
	 * ```javascript
	 * import { useCurrentAdmin } from 'adminjs'
	 *
	 * const myComponent = () => {
	 *   const [currentAdmin, setCurrentAdmin] = useCurrentAdmin()
	 *   // ...
	 * }
	 * ```
	 *
	 * @class
	 * @subcategory Hooks
	 * @bundle
	 * @returns {UseCurrentAdminResponse}
	 * @hideconstructor
	 */
	function useCurrentAdmin() {
	  const currentAdmin = require$$3.useSelector(state => state.session);
	  const dispatch = require$$3.useDispatch();
	  return [currentAdmin, admin => dispatch(setCurrentAdmin(admin))];
	}
	/**
	 * Result of the {@link useCurrentAdmin}.
	 * It is a tuple containing value and the setter
	 *
	 * @typedef {Array} UseCurrentAdminResponse
	 * @memberof useCurrentAdmin
	 * @alias UseCurrentAdminResponse
	 * @property {CurrentAdmin | null} [0]    current admin
	 * @property {React.Dispatch<React.SetStateAction<CurrentAdmin>>} [1]    value setter compatible
	 *                                                                       with react useState
	 */

	/* eslint-disable no-console */

	/**
	 * @load ./use-local-storage.doc.md
	 * @subcategory Hooks
	 * @class
	 * @see https://usehooks.com/useLocalStorage
	 *
	 * @param {string} key          key under which hook will store the data
	 * @param {T}      initialValue    value which will be stringified and stored
	 * @return {UseLocalStorageResult<T>}
	 * @bundle
	 * @type {Function}
	 */
	function useLocalStorage(key, initialValue) {
	  // State to store our value
	  // Pass initial state function to useState so logic is only executed once
	  const [storedValue, setStoredValue] = React$1.useState(() => {
	    try {
	      // Get from local storage by key
	      const item = window.localStorage.getItem(key); // Parse stored json or if none return initialValue

	      return item ? JSON.parse(item) : initialValue;
	    } catch (error) {
	      // If error also return initialValue
	      console.log(error);
	      return initialValue;
	    }
	  }); // Return a wrapped version of useState's setter function that ...
	  // ... persists the new value to localStorage.

	  const setValue = value => {
	    try {
	      // Allow value to be a function so we have same API as useState
	      const valueToStore = value instanceof Function ? value(storedValue) : value; // Save state

	      setStoredValue(valueToStore); // Save to local storage

	      window.localStorage.setItem(key, JSON.stringify(valueToStore));
	    } catch (error) {
	      // A more advanced implementation would handle the error case
	      console.log(error);
	    }
	  };

	  return [storedValue, setValue];
	}

	const isSelected = (href, location) => {
	  const regExp = new RegExp(`${href}($|/)`);
	  return !!location.pathname.match(regExp);
	};

	function useNavigationResources(resources) {
	  const [openElements, setOpenElements] = useLocalStorage('sidebarElements', {});
	  const navigate = reactRouter.useNavigate();
	  const location = reactRouter.useLocation();
	  const enrichResource = React$1.useMemo(() => (resource, icon) => ({
	    href: resource.href || undefined,
	    icon,
	    isSelected: isSelected(resource.href, location),
	    label: resource.name,
	    id: resource.id,
	    onClick: event => {
	      if (resource.href) {
	        event.preventDefault();
	        navigate(resource.href);
	      }
	    }
	  }), [location, navigate]); // grouping resources into parents

	  const map = resources // first filter out resources which are not visible
	  .filter(res => res.href && res.navigation?.show !== false).reduce((memo, resource) => {
	    // in case resource has the same name as parent we namespace it wit "resource-""
	    const key = resource.navigation?.name || ['resource', resource.name].join('-');

	    if (!resource.navigation || resource.navigation.name === null) {
	      memo[key] = enrichResource(resource, resource.navigation?.icon);
	    } else if (memo[key] && memo[key].elements && resource.navigation?.name) {
	      memo[key].elements.push(enrichResource(resource));
	    } else {
	      memo[key] = {
	        elements: [enrichResource(resource)],
	        label: resource.navigation?.name,
	        icon: resource.navigation?.icon,
	        onClick: () => setOpenElements({ ...openElements,
	          [key]: !openElements[key]
	        }),
	        isOpen: !!openElements[key]
	      };
	    }

	    return memo;
	  }, {});
	  return Object.values(map);
	}

	const api$2 = new ApiClient();
	/**
	 * @load ./use-records.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 *
	 * @param {string} resourceId      id of a resource for which you want to fetch records
	 * @return {UseRecordsResult}
	 * @bundle
	 * @type {Function}
	 */

	function useRecords(resourceId) {
	  const [records, setRecords] = React$1.useState([]);
	  const [loading, setLoading] = React$1.useState(false);
	  const [perPage, setPerPage] = React$1.useState(10);
	  const [page, setPage] = React$1.useState(1);
	  const [total, setTotal] = React$1.useState(0);
	  const [direction, setDirection] = React$1.useState('asc');
	  const [sortBy, setSortBy] = React$1.useState();
	  const location = reactRouter.useLocation();
	  const navigate = reactRouter.useNavigate();
	  const addNotice = useNotice();
	  const {
	    translateMessage
	  } = useTranslation();
	  const onNotice = useNotice();

	  const fetchData = () => {
	    setLoading(true);
	    const query = new URLSearchParams(location.search);
	    const promise = api$2.resourceAction({
	      actionName: 'list',
	      resourceId,
	      params: query
	    });
	    promise.then(response => {
	      const listActionResponse = response.data;

	      if (listActionResponse.notice) {
	        onNotice(listActionResponse.notice);
	      }

	      if (listActionResponse.redirectUrl) {
	        navigate(listActionResponse.redirectUrl);
	        return;
	      }

	      setRecords(listActionResponse.records);
	      setPage(listActionResponse.meta.page);
	      setPerPage(listActionResponse.meta.perPage);
	      setTotal(listActionResponse.meta.total);
	      setDirection(listActionResponse.meta.direction);
	      setSortBy(listActionResponse.meta.sortBy);
	      setLoading(false);
	    }).catch(() => {
	      addNotice({
	        message: translateMessage('errorFetchingRecords', resourceId),
	        type: 'error'
	      });
	    });
	    return promise;
	  };

	  React$1.useEffect(() => {
	    if (hasForceRefresh(location.search)) {
	      navigate({
	        pathname: location.pathname,
	        search: removeForceRefresh(location.search).toString()
	      }, {
	        replace: true
	      });
	    } else {
	      fetchData();
	    }
	  }, [resourceId, location.search, location.state]);
	  return {
	    records,
	    loading,
	    page,
	    total,
	    direction,
	    sortBy,
	    perPage,
	    fetchData
	  };
	}

	/**
	 * @load ./use-selected-records.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 * @param {Array<RecordJSON>} records     List of records on which you can perform `select` action
	 * @return {UseSelectedRecordsResult}
	 * @bundle
	 * @type {Function}
	 */
	function useSelectedRecords(records) {
	  const [selectedRecords, setSelectedRecords] = React$1.useState([]);

	  const handleSelect = record => {
	    const selectedIndex = selectedRecords.findIndex(selected => selected.id === record.id);

	    if (selectedIndex < 0) {
	      setSelectedRecords([...selectedRecords, record]);
	    } else {
	      const newSelectedRecords = [...selectedRecords];
	      newSelectedRecords.splice(selectedIndex, 1);
	      setSelectedRecords(newSelectedRecords);
	    }
	  };

	  const handleSelectAll = () => {
	    const missing = records.filter(record => !selectedRecords.find(selected => selected.id === record.id) && record.bulkActions.length);

	    if (missing.length) {
	      setSelectedRecords([...selectedRecords, ...missing]);
	    } else {
	      const newSelectedRecords = selectedRecords.filter(selected => !records.find(record => record.id === selected.id));
	      setSelectedRecords(newSelectedRecords);
	    }
	  };

	  return {
	    handleSelect,
	    handleSelectAll,
	    selectedRecords,
	    setSelectedRecords
	  };
	}

	/**
	 * @load ./use-resource.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 * @bundle
	 * @param {string} resourceId    Id of a resource you want to get
	 */
	const useResource = resourceId => {
	  const resources = require$$3.useSelector(state => state.resources);
	  const foundResource = resources.find(resource => resource.id === resourceId);
	  return foundResource;
	};

	const INITIAL_ROUTE = 'INITIAL_ROUTE';
	const ROUTE_CHANGED = 'ROUTE_CHANGED';
	const initializeRoute = location => ({
	  type: ROUTE_CHANGED,
	  data: location
	});
	const changeRoute = location => ({
	  type: ROUTE_CHANGED,
	  data: location
	});

	const useHistoryListen = () => {
	  const location = reactRouter.useLocation();
	  const [storedPath, setStoredPath] = useLocalStorage('prevPage', {});
	  const {
	    to = {},
	    from = {}
	  } = require$$3.useSelector(state => state.router);
	  const dispatch = require$$3.useDispatch();
	  React$1.useEffect(() => {
	    if (storedPath) {
	      dispatch(initializeRoute(storedPath));
	    }
	  }, []);
	  React$1.useEffect(() => {
	    const previousPath = [to.pathname, to.search].join('');
	    const currentPath = [location.pathname, location.search].join('');

	    if (previousPath !== currentPath) {
	      dispatch(changeRoute(location));
	    }
	  }, [location]);
	  React$1.useEffect(() => {
	    if (from.pathname) {
	      setStoredPath(from);
	    }
	  }, [from]);
	};

	var Hooks = /*#__PURE__*/Object.freeze({
		__proto__: null,
		useRecord: useRecord,
		isEntireRecordGiven: isEntireRecordGiven,
		FORM_VALUE_NULL: FORM_VALUE_NULL,
		FORM_VALUE_EMPTY_OBJECT: FORM_VALUE_EMPTY_OBJECT,
		FORM_VALUE_EMPTY_ARRAY: FORM_VALUE_EMPTY_ARRAY,
		paramsToFormData: paramsToFormData,
		updateRecord: updateRecord,
		useAction: useAction,
		useActionResponseHandler: useActionResponseHandler,
		useCurrentAdmin: useCurrentAdmin,
		useLocalStorage: useLocalStorage,
		useNavigationResources: useNavigationResources,
		useNotice: useNotice,
		useRecords: useRecords,
		useSelectedRecords: useSelectedRecords,
		useTranslation: useTranslation,
		useResource: useResource,
		useHistoryListen: useHistoryListen
	});

	/**
	 * @alias SidebarResourceSectionProps
	 * @memberof SidebarResourceSection
	 */

	/**
	 * Groups resources by sections and renders the list in {@link Sidebar}
	 *
	 * ### Usage
	 *
	 * ```
	 * import { SidebarResourceSection } from 'adminjs`
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 * @name SidebarResourceSection
	 */
	const SidebarResourceSectionOriginal = ({
	  resources
	}) => {
	  const elements = useNavigationResources(resources);
	  const {
	    translateLabel
	  } = useTranslation();
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Navigation, {
	    label: translateLabel('navigation'),
	    elements: elements
	  });
	}; // Rollup cannot handle type exports well - that is why we need to do this hack with
	// exporting default and named SidebarResourceSection


	const SidebarResourceSection = allowOverride(SidebarResourceSectionOriginal, 'SidebarResourceSection');

	const StyledSidebar = styled__default["default"](DesignSystem.Box).withConfig({
	  displayName: "sidebar__StyledSidebar",
	  componentId: "sc-ks9lxy-0"
	})(["transition:left 0.3s;top:0;bottom:0;flex-shrink:0;overflow-y:auto;&.hidden{left:-", ";}&.visible{left:0;}"], DesignSystem.themeGet('sizes', 'sidebarWidth'));
	StyledSidebar.defaultProps = {
	  position: ['absolute', 'absolute', 'absolute', 'absolute', 'inherit'],
	  width: 'sidebarWidth',
	  borderRight: 'default',
	  display: 'flex',
	  flexDirection: 'column',
	  zIndex: 50,
	  bg: 'white'
	};

	const SidebarOriginal = props => {
	  const {
	    isVisible
	  } = props;
	  const [branding, resources, pages] = require$$3.useSelector(state => [state.branding, state.resources, state.pages]);
	  return /*#__PURE__*/React__default$1["default"].createElement(StyledSidebar, {
	    className: isVisible ? 'visible' : 'hidden',
	    "data-css": "sidebar"
	  }, /*#__PURE__*/React__default$1["default"].createElement(SidebarBranding$1, {
	    branding: branding
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    flexGrow: 1,
	    className: DesignSystem.cssClass('Resources'),
	    "data-css": "sidebar-resources"
	  }, /*#__PURE__*/React__default$1["default"].createElement(SidebarResourceSection, {
	    resources: resources
	  })), /*#__PURE__*/React__default$1["default"].createElement(SidebarPages$1, {
	    pages: pages
	  }), /*#__PURE__*/React__default$1["default"].createElement(SidebarFooter$1, null));
	};

	const Sidebar = allowOverride(SidebarOriginal, 'Sidebar');

	const LoggedIn = props => {
	  const {
	    session,
	    paths
	  } = props;
	  const {
	    translateButton
	  } = useTranslation();
	  const dropActions = [{
	    label: translateButton('logout'),
	    onClick: event => {
	      event.preventDefault();
	      window.location.href = paths.logoutPath;
	    },
	    icon: 'Logout'
	  }];
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    flexShrink: 0,
	    "data-css": "logged-in"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.CurrentUserNav, {
	    name: session.email,
	    title: session.title,
	    avatarUrl: session.avatarUrl,
	    dropActions: dropActions
	  }));
	};

	const OverridableLoggedIn = allowOverride(LoggedIn, 'LoggedIn');

	const VersionItem = styled__default["default"](DesignSystem.Text).withConfig({
	  displayName: "version__VersionItem",
	  componentId: "sc-13v9ecm-0"
	})(["padding:12px 24px 12px 0;"]);
	VersionItem.defaultProps = {
	  display: ['none', 'block'],
	  color: 'grey100'
	};

	const Version = props => {
	  const {
	    versions
	  } = props;
	  const {
	    admin,
	    app
	  } = versions;
	  const {
	    translateLabel
	  } = useTranslation();
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    flex: true,
	    flexGrow: 1,
	    py: "default",
	    px: "xxl",
	    className: DesignSystem.cssClass('Version'),
	    "data-css": "version"
	  }, admin && /*#__PURE__*/React__default$1["default"].createElement(VersionItem, null, translateLabel('adminVersion', {
	    version: admin
	  })), app && /*#__PURE__*/React__default$1["default"].createElement(VersionItem, null, translateLabel('appVersion', {
	    version: app
	  })));
	};

	const OverridableVersion = allowOverride(Version, 'Version');

	const NavBar = styled__default["default"](DesignSystem.Box).withConfig({
	  displayName: "top-bar__NavBar",
	  componentId: "sc-643l7u-0"
	})(["height:", ";border-bottom:", ";background:", ";display:flex;flex-direction:row;flex-shrink:0;"], ({
	  theme
	}) => theme.sizes.navbarHeight, DesignSystem.themeGet('borders', 'default'), ({
	  theme
	}) => theme.colors.white);
	NavBar.defaultProps = {
	  className: DesignSystem.cssClass('NavBar')
	};

	const TopBar = props => {
	  const {
	    toggleSidebar
	  } = props;
	  const [session, paths, versions] = require$$3.useSelector(state => [state.session, state.paths, state.versions]);
	  return /*#__PURE__*/React__default$1["default"].createElement(NavBar, {
	    "data-css": "topbar"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    py: "lg",
	    px: ['default', 'lg'],
	    onClick: toggleSidebar,
	    display: ['block', 'block', 'block', 'block', 'none'],
	    style: {
	      cursor: 'pointer'
	    }
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Icon, {
	    icon: "Menu",
	    size: 32,
	    color: "grey100"
	  })), /*#__PURE__*/React__default$1["default"].createElement(OverridableVersion, {
	    versions: versions
	  }), session && session.email ? /*#__PURE__*/React__default$1["default"].createElement(OverridableLoggedIn, {
	    session: session,
	    paths: paths
	  }) : '');
	};

	const OverridableTopbar = allowOverride(TopBar, 'TopBar');

	const DROP_NOTICE = 'DROP_NOTICE';
	const dropNotice = noticeId => ({
	  type: 'DROP_NOTICE',
	  data: {
	    noticeId
	  }
	});

	const SET_NOTICE_PROGRESS = 'SET_NOTICE_PROGRESS';
	const setNoticeProgress = data => ({
	  type: SET_NOTICE_PROGRESS,
	  data
	});

	const TIME_TO_DISAPPEAR = 3;
	class NoticeElement extends React__default$1["default"].Component {
	  constructor(props) {
	    super(props);
	    const {
	      notice
	    } = props;
	    this.timer = null;
	    this.state = {
	      progress: notice.progress || 0
	    };
	  }

	  componentDidMount() {
	    const {
	      drop,
	      notice,
	      notifyProgress
	    } = this.props;
	    this.timer = setInterval(() => {
	      this.setState(state => {
	        const progress = state.progress + 100 / TIME_TO_DISAPPEAR;
	        notifyProgress({
	          noticeId: notice.id,
	          progress
	        });
	        return {
	          progress
	        };
	      });
	    }, 1000);
	    setTimeout(() => {
	      if (this.timer) {
	        clearInterval(this.timer);
	      }

	      drop();
	    }, 1000 * (TIME_TO_DISAPPEAR + 1));
	  }

	  componentWillUnmount() {
	    if (this.timer) {
	      clearInterval(this.timer);
	    }
	  }

	  render() {
	    const {
	      notice,
	      drop
	    } = this.props;
	    return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.MessageBox, {
	      style: {
	        minWidth: '480px'
	      },
	      message: notice.message,
	      variant: notice.type === 'success' ? 'success' : 'danger',
	      onCloseClick: drop
	    });
	  }

	}

	const NoticeBox = props => {
	  const {
	    drop,
	    notices,
	    notifyProgress
	  } = props;
	  const notice = notices.length ? notices[notices.length - 1] : null;

	  if (notice) {
	    return /*#__PURE__*/React__default$1["default"].createElement("div", {
	      "data-testid": "notice-wrapper",
	      "data-css": "notice-wrapper"
	    }, /*#__PURE__*/React__default$1["default"].createElement(NoticeElement, {
	      key: notice.id,
	      notice: notice,
	      drop: () => drop(notice.id),
	      notifyProgress: notifyProgress
	    }));
	  }

	  return /*#__PURE__*/React__default$1["default"].createElement("div", null);
	};

	const mapStateToProps$3 = state => ({
	  notices: state.notices
	});

	const mapDispatchToProps$3 = dispatch => ({
	  drop: noticeId => dispatch(dropNotice(noticeId)),
	  notifyProgress: ({
	    noticeId,
	    progress
	  }) => dispatch(setNoticeProgress({
	    noticeId,
	    progress
	  }))
	});

	const ConnectedNoticeBox = require$$3.connect(mapStateToProps$3, mapDispatchToProps$3)(NoticeBox);
	const OverridableConnectedNoticeBox = allowOverride(ConnectedNoticeBox, 'NoticeBox');

	const pageHeaderHeight = 284;
	const pageHeaderPaddingY = 74;
	const pageHeaderPaddingX = 250;
	const DashboardHeader = () => {
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    position: "relative",
	    overflow: "hidden",
	    "data-css": "default-dashboard"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    position: "absolute",
	    top: 50,
	    left: -10,
	    opacity: [0.2, 0.4, 1],
	    animate: true
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Illustration, {
	    variant: "Rocket"
	  })), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    position: "absolute",
	    top: -70,
	    right: -15,
	    opacity: [0.2, 0.4, 1],
	    animate: true
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Illustration, {
	    variant: "Moon"
	  })), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    bg: "grey100",
	    height: pageHeaderHeight,
	    py: pageHeaderPaddingY,
	    px: ['default', 'lg', pageHeaderPaddingX]
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Text, {
	    textAlign: "center",
	    color: "white"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.H2, null, translateMessage('welcomeOnBoard_title')), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Text, {
	    opacity: 0.8
	  }, translateMessage('welcomeOnBoard_subtitle')))));
	};

	const boxes = ({
	  translateMessage
	}) => [{
	  variant: 'Planet',
	  title: translateMessage('addingResources_title'),
	  subtitle: translateMessage('addingResources_subtitle'),
	  href: 'https://adminjs.co/tutorial-passing-resources.html'
	}, {
	  variant: 'DocumentCheck',
	  title: translateMessage('customizeResources_title'),
	  subtitle: translateMessage('customizeResources_subtitle'),
	  href: 'https://adminjs.co/tutorial-customizing-resources.html'
	}, {
	  variant: 'DocumentSearch',
	  title: translateMessage('customizeActions_title'),
	  subtitle: translateMessage('customizeActions_subtitle'),
	  href: 'https://adminjs.co/tutorial-actions.html'
	}, {
	  variant: 'FlagInCog',
	  title: translateMessage('writeOwnComponents_title'),
	  subtitle: translateMessage('writeOwnComponents_subtitle'),
	  href: 'https://adminjs.co/tutorial-writing-react-components.html'
	}, {
	  variant: 'Folders',
	  title: translateMessage('customDashboard_title'),
	  subtitle: translateMessage('customDashboard_subtitle'),
	  href: 'https://adminjs.co/tutorial-custom-dashboard.html'
	}, {
	  variant: 'Astronaut',
	  title: translateMessage('roleBasedAccess_title'),
	  subtitle: translateMessage('roleBasedAccess_subtitle'),
	  href: 'https://adminjs.co/tutorial-rbac.html'
	}];

	const Card = styled__default["default"](DesignSystem.Box).withConfig({
	  displayName: "default-dashboard__Card",
	  componentId: "sc-ek8q4q-0"
	})(["display:", ";color:", ";text-decoration:none;border:1px solid transparent;&:hover{border:1px solid ", ";box-shadow:", ";}"], ({
	  flex
	}) => flex ? 'flex' : 'block', ({
	  theme
	}) => theme.colors.grey100, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.shadows.cardHover);
	Card.defaultProps = {
	  variant: 'white',
	  boxShadow: 'card'
	};
	const Dashboard$1 = () => {
	  const {
	    translateMessage,
	    translateButton
	  } = useTranslation();
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, null, /*#__PURE__*/React__default$1["default"].createElement(DashboardHeader, null), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    mt: ['xl', 'xl', '-100px'],
	    mb: "xl",
	    mx: [0, 0, 0, 'auto'],
	    px: ['default', 'lg', 'xxl', '0'],
	    position: "relative",
	    flex: true,
	    flexDirection: "row",
	    flexWrap: "wrap",
	    width: [1, 1, 1, 1024]
	  }, boxes({
	    translateMessage
	  }).map((box, index) =>
	  /*#__PURE__*/
	  // eslint-disable-next-line react/no-array-index-key
	  React__default$1["default"].createElement(DesignSystem.Box, {
	    key: index,
	    width: [1, 1 / 2, 1 / 2, 1 / 3],
	    p: "lg"
	  }, /*#__PURE__*/React__default$1["default"].createElement(Card, {
	    as: "a",
	    href: box.href,
	    target: "_blank"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Text, {
	    textAlign: "center"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Illustration, {
	    variant: box.variant,
	    width: 100,
	    height: 70
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.H5, {
	    mt: "lg"
	  }, box.title), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Text, null, box.subtitle))))), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    width: [1, 1, 1 / 2],
	    p: "lg"
	  }, /*#__PURE__*/React__default$1["default"].createElement(Card, {
	    as: "a",
	    flex: true,
	    href: "https://adminjs.page.link/slack",
	    target: "_blank"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Illustration, {
	    variant: "SlackLogo"
	  })), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    ml: "xl"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.H4, null, translateMessage('community_title')), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Text, null, translateMessage('community_subtitle'))))), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    width: [1, 1, 1 / 2],
	    p: "lg"
	  }, /*#__PURE__*/React__default$1["default"].createElement(Card, {
	    as: "a",
	    flex: true,
	    href: "https://github.com/SoftwareBrothers/adminjs/issues",
	    target: "_blank"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Illustration, {
	    variant: "GithubLogo"
	  })), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    ml: "xl"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.H4, null, translateMessage('foundBug_title')), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Text, null, translateMessage('foundBug_subtitle'))))), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    variant: "white",
	    boxShadow: "card",
	    width: 1,
	    m: "lg"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Text, {
	    textAlign: "center"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Illustration, {
	    variant: "AdminJSLogo"
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.H4, null, translateMessage('needMoreSolutions_title')), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Text, null, translateMessage('needMoreSolutions_subtitle')), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Text, {
	    mt: "xxl"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Button, {
	    as: "a",
	    variant: "primary",
	    href: "https://share.hsforms.com/1IedvmEz6RH2orhcL6g2UHA8oc5a",
	    target: "_blank"
	  }, translateButton('contactUs')))))));
	};

	const ErrorMessage = ({
	  error
	}) => {
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.MessageBox, {
	    m: "xxl",
	    variant: "danger",
	    message: "Javascript Error"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Text, null, error.toString()), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Text, {
	    mt: "default"
	  }, translateMessage('seeConsoleForMore')));
	};

	class ErrorBoundary$1 extends React__default$1["default"].Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      error: null
	    };
	  }

	  componentDidCatch(error) {
	    this.setState({
	      error
	    });
	  }

	  render() {
	    const {
	      children
	    } = this.props;
	    const {
	      error
	    } = this.state;

	    if (error !== null) {
	      return /*#__PURE__*/React__default$1["default"].createElement(ErrorMessage, {
	        error: error
	      });
	    }

	    return children || null;
	  }

	}

	class Dashboard extends React__default$1["default"].Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      isClient: false
	    };
	  }

	  componentDidMount() {
	    this.setState({
	      isClient: true
	    });
	  }

	  render() {
	    const {
	      dashboard
	    } = this.props;
	    const {
	      isClient
	    } = this.state;
	    let Component;

	    if (dashboard && dashboard.component && isClient && AdminJS.UserComponents[dashboard.component]) {
	      Component = AdminJS.UserComponents[dashboard.component];
	    } else {
	      Component = Dashboard$1;
	    }

	    return /*#__PURE__*/React__default$1["default"].createElement(ErrorBoundary$1, null, /*#__PURE__*/React__default$1["default"].createElement(Component, null));
	  }

	}

	const mapStateToProps$2 = state => ({
	  dashboard: state.dashboard
	});

	var DashboardRoute = allowOverride(require$$3.connect(mapStateToProps$2)(Dashboard), 'DashboardRoute');

	const BreadcrumbLink = styled__default["default"](reactRouterDom.Link).withConfig({
	  displayName: "breadcrumbs__BreadcrumbLink",
	  componentId: "sc-h6isba-0"
	})(["color:", ";font-family:", ";line-height:", ";font-size:", ";text-decoration:none;&:hover{color:", ";}&:after{content:'/';padding:0 ", ";}&:last-child{&:after{content:'';}}"], ({
	  theme
	}) => theme.colors.grey40, ({
	  theme
	}) => theme.font, ({
	  theme
	}) => theme.lineHeights.default, ({
	  theme
	}) => theme.fontSizes.default, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.space.default);
	const BreadcrumbText = styled__default["default"](DesignSystem.Text).withConfig({
	  displayName: "breadcrumbs__BreadcrumbText",
	  componentId: "sc-h6isba-1"
	})(["color:", ";font-family:", ";font-weight:", ";line-height:", ";font-size:", ";cursor:pointer;display:inline;&:after{content:'/';padding:0 ", ";}&:last-child{&:after{content:'';}}"], ({
	  theme
	}) => theme.colors.grey40, ({
	  theme
	}) => theme.font, ({
	  theme
	}) => theme.fontWeights.normal.toString(), ({
	  theme
	}) => theme.lineHeights.default, ({
	  theme
	}) => theme.fontSizes.default, ({
	  theme
	}) => theme.space.default);
	/**
	 * @memberof Breadcrumbs
	 */

	/**
	 * @component
	 * @private
	 */
	const Breadcrumbs = props => {
	  const {
	    resource,
	    record,
	    actionName
	  } = props;
	  const listAction = resource.resourceActions.find(({
	    name
	  }) => name === 'list');
	  const action = resource.actions.find(a => a.name === actionName);
	  const h = new ViewHelpers();
	  const {
	    translateLabel: tl
	  } = useTranslation();
	  const contentTag = getActionElementCss(resource.id, actionName, 'breadcrumbs');
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    flexGrow: 1,
	    className: DesignSystem.cssClass('Breadcrumbs'),
	    "data-css": contentTag
	  }, /*#__PURE__*/React__default$1["default"].createElement(BreadcrumbLink, {
	    to: h.dashboardUrl()
	  }, tl('dashboard')), listAction ? /*#__PURE__*/React__default$1["default"].createElement(BreadcrumbLink, {
	    to: resource.href ? resource.href : '/',
	    className: record ? 'is-active' : ''
	  }, resource.name) : /*#__PURE__*/React__default$1["default"].createElement(BreadcrumbText, null, resource.name), action && action.name !== 'list' && /*#__PURE__*/React__default$1["default"].createElement(BreadcrumbLink, {
	    to: "#"
	  }, action.label));
	};

	const OverridableBreadcrumbs = allowOverride(Breadcrumbs, 'Breadcrumbs');

	const actionsToButtonGroup = options => {
	  const {
	    actions,
	    params,
	    handleClick
	  } = options;
	  const buttons = actions.map(action => {
	    const href = actionHref(action, params);
	    return {
	      icon: action.icon,
	      label: action.label,
	      variant: action.variant,
	      source: action,
	      href: href || undefined,
	      // when href is not defined - handle click should also be not defined
	      // This prevents from "cursor: pointer;"
	      onClick: href ? handleClick : undefined,
	      'data-testid': buildActionTestId(action),
	      buttons: [],
	      'data-css': `${action.resourceId}-${action.name}-button`
	    };
	  }); // nesting buttons

	  const buttonsMap = buttons.reduce((memo, button) => {
	    const action = button.source;

	    if (action.parent) {
	      const parent = memo[action.parent] || buttons.find(btn => btn.source.name === action.parent) || {
	        label: action.parent
	      };
	      parent.buttons = parent.buttons || [];
	      parent.buttons.push(button);
	      return { ...memo,
	        [action.parent]: parent
	      };
	    }

	    return { ...memo,
	      [button.source.name]: button
	    };
	  }, {});
	  return Object.values(buttonsMap);
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const StyledLink$1 = styled__default["default"](({
	  rounded,
	  ...rest
	}) => /*#__PURE__*/React__default$1["default"].createElement(reactRouterDom.Link, rest)).withConfig({
	  displayName: "styled-back-button__StyledLink",
	  componentId: "sc-km87h9-0"
	})(["", ""], DesignSystem.ButtonCSS);

	const StyledBackButton = props => {
	  const {
	    showInDrawer
	  } = props;
	  const {
	    previousRoute
	  } = require$$3.useSelector(state => state.drawer);
	  const {
	    from = {}
	  } = require$$3.useSelector(state => state.router);
	  const cssCloseIcon = showInDrawer ? 'ChevronRight' : 'ChevronLeft';
	  const backLink = React$1.useMemo(() => {
	    if (!showInDrawer) {
	      return from?.pathname;
	    }

	    if (previousRoute?.pathname) {
	      return previousRoute?.pathname;
	    }

	    return from?.pathname;
	  }, [previousRoute, from]);
	  return /*#__PURE__*/React__default$1["default"].createElement(StyledLink$1, {
	    size: "icon",
	    to: backLink,
	    rounded: true,
	    mr: "lg",
	    type: "button"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Icon, {
	    icon: cssCloseIcon
	  }));
	};

	const OverridableStyledBackButton = allowOverride(StyledBackButton, 'StyledBackButton');

	/* eslint-disable jsx-a11y/anchor-is-valid */
	/**
	 * Header of an action. It renders Action name with buttons for all the actions.
	 *
	 * ### Usage
	 *
	 * ```
	 * import { ActionHeader } from 'adminjs'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 */

	const ActionHeader = props => {
	  const {
	    resource,
	    toggleFilter,
	    actionPerformed,
	    record,
	    action,
	    tag,
	    omitActions
	  } = props;
	  const {
	    translateButton
	  } = useTranslation();
	  const navigate = reactRouter.useNavigate();
	  const actionResponseHandler = useActionResponseHandler(actionPerformed);

	  if (action.hideActionHeader) {
	    return null;
	  }

	  const resourceId = resource.id;
	  const params = {
	    resourceId,
	    recordId: record?.id
	  };

	  const handleActionClick = (event, sourceAction) => buildActionClickHandler({
	    action: sourceAction,
	    params,
	    actionResponseHandler,
	    navigate
	  })(event);

	  const actionButtons = actionsToButtonGroup({
	    actions: record ? record.recordActions.filter(ra => !action || action.name !== ra.name) // only new action should be seen in regular "Big" actions place
	    : resource.resourceActions.filter(ra => ra.name === 'new' && (!action || action.name !== ra.name)),
	    params,
	    handleClick: handleActionClick
	  });

	  if (toggleFilter) {
	    actionButtons.push({
	      label: translateButton('filter', resource.id),
	      onClick: toggleFilter,
	      icon: 'SettingsAdjust',
	      'data-css': getResourceElementCss(resource.id, 'filter-button')
	    });
	  } // list and new actions are special and are are always


	  const customResourceButtons = actionsToButtonGroup({
	    actions: action.showResourceActions ? resource.resourceActions.filter(ra => !['list', 'new'].includes(ra.name)) : [],
	    params: {
	      resourceId
	    },
	    handleClick: handleActionClick
	  });
	  const title = action ? action.label : resource.name; // styled which differs if action header is in the drawer or not

	  const cssIsRootFlex = !action.showInDrawer;
	  const cssHeaderMT = action.showInDrawer ? '' : 'lg';
	  const cssActionsMB = action.showInDrawer ? 'xl' : 'default';
	  const CssHComponent = action.showInDrawer ? DesignSystem.H3 : DesignSystem.H2;
	  const contentTag = getActionElementCss(resourceId, action.name, 'action-header');
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    className: DesignSystem.cssClass('ActionHeader'),
	    "data-css": contentTag
	  }, action.showInDrawer ? '' : /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    flex: true,
	    flexDirection: "row",
	    px: ['default', 0]
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridableBreadcrumbs, {
	    resource: resource,
	    actionName: action.name,
	    record: record
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.ButtonGroup, {
	    size: "sm",
	    rounded: true,
	    buttons: customResourceButtons
	  }))), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    display: ['block', cssIsRootFlex ? 'flex' : 'block']
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    mt: cssHeaderMT,
	    flexGrow: 1,
	    px: ['default', 0]
	  }, /*#__PURE__*/React__default$1["default"].createElement(CssHComponent, {
	    mb: "lg"
	  }, action.showInDrawer ? /*#__PURE__*/React__default$1["default"].createElement(OverridableStyledBackButton, {
	    showInDrawer: action.showInDrawer
	  }) : '', title, tag ? /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Badge, {
	    variant: "primary",
	    ml: "default"
	  }, tag) : '')), omitActions ? '' : /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    mt: "xl",
	    mb: cssActionsMB,
	    flexShrink: 0
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.ButtonGroup, {
	    buttons: actionButtons
	  }))));
	};

	const OverridableActionHeader = allowOverride(ActionHeader, 'ActionHeader');

	var dnd_cjs = {};

	var useMemoOne_cjs = {};

	Object.defineProperty(useMemoOne_cjs, '__esModule', { value: true });

	var react = React__default$1["default"];

	function areInputsEqual$1(newInputs, lastInputs) {
	  if (newInputs.length !== lastInputs.length) {
	    return false;
	  }

	  for (var i = 0; i < newInputs.length; i++) {
	    if (newInputs[i] !== lastInputs[i]) {
	      return false;
	    }
	  }

	  return true;
	}

	function useMemoOne$1(getResult, inputs) {
	  var initial = react.useState(function () {
	    return {
	      inputs: inputs,
	      result: getResult()
	    };
	  })[0];
	  var isFirstRun = react.useRef(true);
	  var committed = react.useRef(initial);
	  var useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual$1(inputs, committed.current.inputs));
	  var cache = useCache ? committed.current : {
	    inputs: inputs,
	    result: getResult()
	  };
	  react.useEffect(function () {
	    isFirstRun.current = false;
	    committed.current = cache;
	  }, [cache]);
	  return cache.result;
	}
	function useCallbackOne(callback, inputs) {
	  return useMemoOne$1(function () {
	    return callback;
	  }, inputs);
	}
	var useMemo = useMemoOne$1;
	var useCallback = useCallbackOne;

	useMemoOne_cjs.useCallback = useCallback;
	useMemoOne_cjs.useCallbackOne = useCallbackOne;
	useMemoOne_cjs.useMemo = useMemo;
	useMemoOne_cjs.useMemoOne = useMemoOne$1;

	var cssBoxModel_cjs = {};

	var prefix$2 = 'Invariant failed';
	function invariant$2(condition, message) {
	    if (condition) {
	        return;
	    }
	    var provided = typeof message === 'function' ? message() : message;
	    var value = provided ? "".concat(prefix$2, ": ").concat(provided) : prefix$2;
	    throw new Error(value);
	}

	var tinyInvariant_cjs = invariant$2;

	Object.defineProperty(cssBoxModel_cjs, '__esModule', { value: true });

	function _interopDefault$1 (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

	var invariant$1 = _interopDefault$1(tinyInvariant_cjs);

	var getRect = function getRect(_ref) {
	  var top = _ref.top,
	      right = _ref.right,
	      bottom = _ref.bottom,
	      left = _ref.left;
	  var width = right - left;
	  var height = bottom - top;
	  var rect = {
	    top: top,
	    right: right,
	    bottom: bottom,
	    left: left,
	    width: width,
	    height: height,
	    x: left,
	    y: top,
	    center: {
	      x: (right + left) / 2,
	      y: (bottom + top) / 2
	    }
	  };
	  return rect;
	};
	var expand = function expand(target, expandBy) {
	  return {
	    top: target.top - expandBy.top,
	    left: target.left - expandBy.left,
	    bottom: target.bottom + expandBy.bottom,
	    right: target.right + expandBy.right
	  };
	};
	var shrink = function shrink(target, shrinkBy) {
	  return {
	    top: target.top + shrinkBy.top,
	    left: target.left + shrinkBy.left,
	    bottom: target.bottom - shrinkBy.bottom,
	    right: target.right - shrinkBy.right
	  };
	};

	var shift = function shift(target, shiftBy) {
	  return {
	    top: target.top + shiftBy.y,
	    left: target.left + shiftBy.x,
	    bottom: target.bottom + shiftBy.y,
	    right: target.right + shiftBy.x
	  };
	};

	var noSpacing$1 = {
	  top: 0,
	  right: 0,
	  bottom: 0,
	  left: 0
	};
	var createBox = function createBox(_ref2) {
	  var borderBox = _ref2.borderBox,
	      _ref2$margin = _ref2.margin,
	      margin = _ref2$margin === void 0 ? noSpacing$1 : _ref2$margin,
	      _ref2$border = _ref2.border,
	      border = _ref2$border === void 0 ? noSpacing$1 : _ref2$border,
	      _ref2$padding = _ref2.padding,
	      padding = _ref2$padding === void 0 ? noSpacing$1 : _ref2$padding;
	  var marginBox = getRect(expand(borderBox, margin));
	  var paddingBox = getRect(shrink(borderBox, border));
	  var contentBox = getRect(shrink(paddingBox, padding));
	  return {
	    marginBox: marginBox,
	    borderBox: getRect(borderBox),
	    paddingBox: paddingBox,
	    contentBox: contentBox,
	    margin: margin,
	    border: border,
	    padding: padding
	  };
	};

	var parse = function parse(raw) {
	  var value = raw.slice(0, -2);
	  var suffix = raw.slice(-2);

	  if (suffix !== 'px') {
	    return 0;
	  }

	  var result = Number(value);
	  !!isNaN(result) ? invariant$1(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]")  : void 0;
	  return result;
	};

	var getWindowScroll$1 = function getWindowScroll() {
	  return {
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  };
	};

	var offset = function offset(original, change) {
	  var borderBox = original.borderBox,
	      border = original.border,
	      margin = original.margin,
	      padding = original.padding;
	  var shifted = shift(borderBox, change);
	  return createBox({
	    borderBox: shifted,
	    border: border,
	    margin: margin,
	    padding: padding
	  });
	};
	var withScroll = function withScroll(original, scroll) {
	  if (scroll === void 0) {
	    scroll = getWindowScroll$1();
	  }

	  return offset(original, scroll);
	};
	var calculateBox = function calculateBox(borderBox, styles) {
	  var margin = {
	    top: parse(styles.marginTop),
	    right: parse(styles.marginRight),
	    bottom: parse(styles.marginBottom),
	    left: parse(styles.marginLeft)
	  };
	  var padding = {
	    top: parse(styles.paddingTop),
	    right: parse(styles.paddingRight),
	    bottom: parse(styles.paddingBottom),
	    left: parse(styles.paddingLeft)
	  };
	  var border = {
	    top: parse(styles.borderTopWidth),
	    right: parse(styles.borderRightWidth),
	    bottom: parse(styles.borderBottomWidth),
	    left: parse(styles.borderLeftWidth)
	  };
	  return createBox({
	    borderBox: borderBox,
	    margin: margin,
	    padding: padding,
	    border: border
	  });
	};
	var getBox = function getBox(el) {
	  var borderBox = el.getBoundingClientRect();
	  var styles = window.getComputedStyle(el);
	  return calculateBox(borderBox, styles);
	};

	cssBoxModel_cjs.calculateBox = calculateBox;
	cssBoxModel_cjs.createBox = createBox;
	cssBoxModel_cjs.expand = expand;
	cssBoxModel_cjs.getBox = getBox;
	cssBoxModel_cjs.getRect = getRect;
	cssBoxModel_cjs.offset = offset;
	cssBoxModel_cjs.shrink = shrink;
	cssBoxModel_cjs.withScroll = withScroll;

	var safeIsNaN = Number.isNaN ||
	    function ponyfill(value) {
	        return typeof value === 'number' && value !== value;
	    };
	function isEqual$2(first, second) {
	    if (first === second) {
	        return true;
	    }
	    if (safeIsNaN(first) && safeIsNaN(second)) {
	        return true;
	    }
	    return false;
	}
	function areInputsEqual(newInputs, lastInputs) {
	    if (newInputs.length !== lastInputs.length) {
	        return false;
	    }
	    for (var i = 0; i < newInputs.length; i++) {
	        if (!isEqual$2(newInputs[i], lastInputs[i])) {
	            return false;
	        }
	    }
	    return true;
	}

	function memoizeOne$1(resultFn, isEqual) {
	    if (isEqual === void 0) { isEqual = areInputsEqual; }
	    var cache = null;
	    function memoized() {
	        var newArgs = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            newArgs[_i] = arguments[_i];
	        }
	        if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
	            return cache.lastResult;
	        }
	        var lastResult = resultFn.apply(this, newArgs);
	        cache = {
	            lastResult: lastResult,
	            lastArgs: newArgs,
	            lastThis: this,
	        };
	        return lastResult;
	    }
	    memoized.clear = function clear() {
	        cache = null;
	    };
	    return memoized;
	}

	var memoizeOne_cjs = memoizeOne$1;

	var rafSchd$1 = function rafSchd(fn) {
	  var lastArgs = [];
	  var frameId = null;

	  var wrapperFn = function wrapperFn() {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    lastArgs = args;

	    if (frameId) {
	      return;
	    }

	    frameId = requestAnimationFrame(function () {
	      frameId = null;
	      fn.apply(void 0, lastArgs);
	    });
	  };

	  wrapperFn.cancel = function () {
	    if (!frameId) {
	      return;
	    }

	    cancelAnimationFrame(frameId);
	    frameId = null;
	  };

	  return wrapperFn;
	};

	var rafSchd_cjs = rafSchd$1;

	var _extends$1 = {exports: {}};

	(function (module) {
		function _extends() {
		  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
		    for (var i = 1; i < arguments.length; i++) {
		      var source = arguments[i];

		      for (var key in source) {
		        if (Object.prototype.hasOwnProperty.call(source, key)) {
		          target[key] = source[key];
		        }
		      }
		    }

		    return target;
		  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
		  return _extends.apply(this, arguments);
		}

		module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (_extends$1));

	Object.defineProperty(dnd_cjs, '__esModule', { value: true });

	var React = React__default$1["default"];
	var ReactDOM = require$$1__default["default"];
	var redux = require$$2__default["default"];
	var reactRedux = require$$3__default["default"];
	var useMemoOne = useMemoOne_cjs;
	var cssBoxModel = cssBoxModel_cjs;
	var memoizeOne = memoizeOne_cjs;
	var rafSchd = rafSchd_cjs;
	var _extends = _extends$1.exports;

	function _interopDefaultLegacy$1 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy$1(React);
	var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy$1(ReactDOM);
	var memoizeOne__default = /*#__PURE__*/_interopDefaultLegacy$1(memoizeOne);
	var rafSchd__default = /*#__PURE__*/_interopDefaultLegacy$1(rafSchd);
	var _extends__default = /*#__PURE__*/_interopDefaultLegacy$1(_extends);
	const spacesAndTabs = /[ \t]{2,}/g;
	const lineStartWithSpaces = /^[ \t]*/gm;

	const clean$2 = value => value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();

	const getDevMessage = message => clean$2(`
  %c@hello-pangea/dnd

  %c${clean$2(message)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`);

	const getFormattedMessage = message => [getDevMessage(message), 'color: #00C584; font-size: 1.2em; font-weight: bold;', 'line-height: 1.5', 'color: #723874;'];
	const isDisabledFlag = '__@hello-pangea/dnd-disable-dev-warnings';
	function log(type, message) {

	  if (typeof window !== 'undefined' && window[isDisabledFlag]) {
	    return;
	  }

	  console[type](...getFormattedMessage(message));
	}
	const warning = log.bind(null, 'warn');
	const error = log.bind(null, 'error');

	function noop$2() {}

	function getOptions(shared, fromBinding) {
	  return { ...shared,
	    ...fromBinding
	  };
	}

	function bindEvents(el, bindings, sharedOptions) {
	  const unbindings = bindings.map(binding => {
	    const options = getOptions(sharedOptions, binding.options);
	    el.addEventListener(binding.eventName, binding.fn, options);
	    return function unbind() {
	      el.removeEventListener(binding.eventName, binding.fn, options);
	    };
	  });
	  return function unbindAll() {
	    unbindings.forEach(unbind => {
	      unbind();
	    });
	  };
	}
	const prefix$1 = 'Invariant failed';
	class RbdInvariant extends Error {}

	RbdInvariant.prototype.toString = function toString() {
	  return this.message;
	};

	function invariant(condition, message) {
	  if (condition) {
	    return;
	  }

	  {
	    throw new RbdInvariant(`${prefix$1}: ${message || ''}`);
	  }
	}

	class ErrorBoundary extends React__default["default"].Component {
	  constructor() {
	    super(...arguments);
	    this.callbacks = null;
	    this.unbind = noop$2;

	    this.onWindowError = event => {
	      const callbacks = this.getCallbacks();

	      if (callbacks.isDragging()) {
	        callbacks.tryAbort();
	        warning(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `) ;
	      }

	      const err = event.error;

	      if (err instanceof RbdInvariant) {
	        event.preventDefault();

	        {
	          error(err.message);
	        }
	      }
	    };

	    this.getCallbacks = () => {
	      if (!this.callbacks) {
	        throw new Error('Unable to find AppCallbacks in <ErrorBoundary/>');
	      }

	      return this.callbacks;
	    };

	    this.setCallbacks = callbacks => {
	      this.callbacks = callbacks;
	    };
	  }

	  componentDidMount() {
	    this.unbind = bindEvents(window, [{
	      eventName: 'error',
	      fn: this.onWindowError
	    }]);
	  }

	  componentDidCatch(err) {
	    if (err instanceof RbdInvariant) {
	      {
	        error(err.message);
	      }

	      this.setState({});
	      return;
	    }

	    throw err;
	  }

	  componentWillUnmount() {
	    this.unbind();
	  }

	  render() {
	    return this.props.children(this.setCallbacks);
	  }

	}

	const dragHandleUsageInstructions = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`;

	const position = index => index + 1;

	const onDragStart = start => `
  You have lifted an item in position ${position(start.source.index)}
`;

	const withLocation = (source, destination) => {
	  const isInHomeList = source.droppableId === destination.droppableId;
	  const startPosition = position(source.index);
	  const endPosition = position(destination.index);

	  if (isInHomeList) {
	    return `
      You have moved the item from position ${startPosition}
      to position ${endPosition}
    `;
	  }

	  return `
    You have moved the item from position ${startPosition}
    in list ${source.droppableId}
    to list ${destination.droppableId}
    in position ${endPosition}
  `;
	};

	const withCombine = (id, source, combine) => {
	  const inHomeList = source.droppableId === combine.droppableId;

	  if (inHomeList) {
	    return `
      The item ${id}
      has been combined with ${combine.draggableId}`;
	  }

	  return `
      The item ${id}
      in list ${source.droppableId}
      has been combined with ${combine.draggableId}
      in list ${combine.droppableId}
    `;
	};

	const onDragUpdate = update => {
	  const location = update.destination;

	  if (location) {
	    return withLocation(update.source, location);
	  }

	  const combine = update.combine;

	  if (combine) {
	    return withCombine(update.draggableId, update.source, combine);
	  }

	  return 'You are over an area that cannot be dropped on';
	};

	const returnedToStart = source => `
  The item has returned to its starting position
  of ${position(source.index)}
`;

	const onDragEnd = result => {
	  if (result.reason === 'CANCEL') {
	    return `
      Movement cancelled.
      ${returnedToStart(result.source)}
    `;
	  }

	  const location = result.destination;
	  const combine = result.combine;

	  if (location) {
	    return `
      You have dropped the item.
      ${withLocation(result.source, location)}
    `;
	  }

	  if (combine) {
	    return `
      You have dropped the item.
      ${withCombine(result.draggableId, result.source, combine)}
    `;
	  }

	  return `
    The item has been dropped while not over a drop area.
    ${returnedToStart(result.source)}
  `;
	};

	const preset = {
	  dragHandleUsageInstructions,
	  onDragStart,
	  onDragUpdate,
	  onDragEnd
	};
	var preset$1 = preset;

	const origin = {
	  x: 0,
	  y: 0
	};
	const add = (point1, point2) => ({
	  x: point1.x + point2.x,
	  y: point1.y + point2.y
	});
	const subtract = (point1, point2) => ({
	  x: point1.x - point2.x,
	  y: point1.y - point2.y
	});
	const isEqual$1 = (point1, point2) => point1.x === point2.x && point1.y === point2.y;
	const negate = point => ({
	  x: point.x !== 0 ? -point.x : 0,
	  y: point.y !== 0 ? -point.y : 0
	});
	const patch = function (line, value, otherValue) {
	  if (otherValue === void 0) {
	    otherValue = 0;
	  }

	  if (line === 'x') {
	    return {
	      x: value,
	      y: otherValue
	    };
	  }

	  return {
	    x: otherValue,
	    y: value
	  };
	};
	const distance = (point1, point2) => Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2);
	const closest$1 = (target, points) => Math.min(...points.map(point => distance(target, point)));
	const apply = fn => point => ({
	  x: fn(point.x),
	  y: fn(point.y)
	});

	var executeClip = ((frame, subject) => {
	  const result = cssBoxModel.getRect({
	    top: Math.max(subject.top, frame.top),
	    right: Math.min(subject.right, frame.right),
	    bottom: Math.min(subject.bottom, frame.bottom),
	    left: Math.max(subject.left, frame.left)
	  });

	  if (result.width <= 0 || result.height <= 0) {
	    return null;
	  }

	  return result;
	});

	const offsetByPosition = (spacing, point) => ({
	  top: spacing.top + point.y,
	  left: spacing.left + point.x,
	  bottom: spacing.bottom + point.y,
	  right: spacing.right + point.x
	});
	const getCorners = spacing => [{
	  x: spacing.left,
	  y: spacing.top
	}, {
	  x: spacing.right,
	  y: spacing.top
	}, {
	  x: spacing.left,
	  y: spacing.bottom
	}, {
	  x: spacing.right,
	  y: spacing.bottom
	}];
	const noSpacing = {
	  top: 0,
	  right: 0,
	  bottom: 0,
	  left: 0
	};

	const scroll$1 = (target, frame) => {
	  if (!frame) {
	    return target;
	  }

	  return offsetByPosition(target, frame.scroll.diff.displacement);
	};

	const increase = (target, axis, withPlaceholder) => {
	  if (withPlaceholder && withPlaceholder.increasedBy) {
	    return { ...target,
	      [axis.end]: target[axis.end] + withPlaceholder.increasedBy[axis.line]
	    };
	  }

	  return target;
	};

	const clip = (target, frame) => {
	  if (frame && frame.shouldClipSubject) {
	    return executeClip(frame.pageMarginBox, target);
	  }

	  return cssBoxModel.getRect(target);
	};

	var getSubject = (_ref => {
	  let {
	    page,
	    withPlaceholder,
	    axis,
	    frame
	  } = _ref;
	  const scrolled = scroll$1(page.marginBox, frame);
	  const increased = increase(scrolled, axis, withPlaceholder);
	  const clipped = clip(increased, frame);
	  return {
	    page,
	    withPlaceholder,
	    active: clipped
	  };
	});

	var scrollDroppable = ((droppable, newScroll) => {
	  !droppable.frame ? invariant(false)  : void 0;
	  const scrollable = droppable.frame;
	  const scrollDiff = subtract(newScroll, scrollable.scroll.initial);
	  const scrollDisplacement = negate(scrollDiff);
	  const frame = { ...scrollable,
	    scroll: {
	      initial: scrollable.scroll.initial,
	      current: newScroll,
	      diff: {
	        value: scrollDiff,
	        displacement: scrollDisplacement
	      },
	      max: scrollable.scroll.max
	    }
	  };
	  const subject = getSubject({
	    page: droppable.subject.page,
	    withPlaceholder: droppable.subject.withPlaceholder,
	    axis: droppable.axis,
	    frame
	  });
	  const result = { ...droppable,
	    frame,
	    subject
	  };
	  return result;
	});

	const toDroppableMap = memoizeOne__default["default"](droppables => droppables.reduce((previous, current) => {
	  previous[current.descriptor.id] = current;
	  return previous;
	}, {}));
	const toDraggableMap = memoizeOne__default["default"](draggables => draggables.reduce((previous, current) => {
	  previous[current.descriptor.id] = current;
	  return previous;
	}, {}));
	const toDroppableList = memoizeOne__default["default"](droppables => Object.values(droppables));
	const toDraggableList = memoizeOne__default["default"](draggables => Object.values(draggables));

	var getDraggablesInsideDroppable = memoizeOne__default["default"]((droppableId, draggables) => {
	  const result = toDraggableList(draggables).filter(draggable => droppableId === draggable.descriptor.droppableId).sort((a, b) => a.descriptor.index - b.descriptor.index);
	  return result;
	});

	function tryGetDestination(impact) {
	  if (impact.at && impact.at.type === 'REORDER') {
	    return impact.at.destination;
	  }

	  return null;
	}
	function tryGetCombine(impact) {
	  if (impact.at && impact.at.type === 'COMBINE') {
	    return impact.at.combine;
	  }

	  return null;
	}

	var removeDraggableFromList = memoizeOne__default["default"]((remove, list) => list.filter(item => item.descriptor.id !== remove.descriptor.id));

	var moveToNextCombine = (_ref => {
	  let {
	    isMovingForward,
	    draggable,
	    destination,
	    insideDestination,
	    previousImpact
	  } = _ref;

	  if (!destination.isCombineEnabled) {
	    return null;
	  }

	  const location = tryGetDestination(previousImpact);

	  if (!location) {
	    return null;
	  }

	  function getImpact(target) {
	    const at = {
	      type: 'COMBINE',
	      combine: {
	        draggableId: target,
	        droppableId: destination.descriptor.id
	      }
	    };
	    return { ...previousImpact,
	      at
	    };
	  }

	  const all = previousImpact.displaced.all;
	  const closestId = all.length ? all[0] : null;

	  if (isMovingForward) {
	    return closestId ? getImpact(closestId) : null;
	  }

	  const withoutDraggable = removeDraggableFromList(draggable, insideDestination);

	  if (!closestId) {
	    if (!withoutDraggable.length) {
	      return null;
	    }

	    const last = withoutDraggable[withoutDraggable.length - 1];
	    return getImpact(last.descriptor.id);
	  }

	  const indexOfClosest = withoutDraggable.findIndex(d => d.descriptor.id === closestId);
	  !(indexOfClosest !== -1) ? invariant(false, 'Could not find displaced item in set')  : void 0;
	  const proposedIndex = indexOfClosest - 1;

	  if (proposedIndex < 0) {
	    return null;
	  }

	  const before = withoutDraggable[proposedIndex];
	  return getImpact(before.descriptor.id);
	});

	var isHomeOf = ((draggable, destination) => draggable.descriptor.droppableId === destination.descriptor.id);

	const noDisplacedBy = {
	  point: origin,
	  value: 0
	};
	const emptyGroups = {
	  invisible: {},
	  visible: {},
	  all: []
	};
	const noImpact = {
	  displaced: emptyGroups,
	  displacedBy: noDisplacedBy,
	  at: null
	};
	var noImpact$1 = noImpact;

	var isWithin = ((lowerBound, upperBound) => value => lowerBound <= value && value <= upperBound);

	var isPartiallyVisibleThroughFrame = (frame => {
	  const isWithinVertical = isWithin(frame.top, frame.bottom);
	  const isWithinHorizontal = isWithin(frame.left, frame.right);
	  return subject => {
	    const isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);

	    if (isContained) {
	      return true;
	    }

	    const isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
	    const isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
	    const isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;

	    if (isPartiallyContained) {
	      return true;
	    }

	    const isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
	    const isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
	    const isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;

	    if (isTargetBiggerThanFrame) {
	      return true;
	    }

	    const isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
	    return isTargetBiggerOnOneAxis;
	  };
	});

	var isTotallyVisibleThroughFrame = (frame => {
	  const isWithinVertical = isWithin(frame.top, frame.bottom);
	  const isWithinHorizontal = isWithin(frame.left, frame.right);
	  return subject => {
	    const isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
	    return isContained;
	  };
	});

	const vertical = {
	  direction: 'vertical',
	  line: 'y',
	  crossAxisLine: 'x',
	  start: 'top',
	  end: 'bottom',
	  size: 'height',
	  crossAxisStart: 'left',
	  crossAxisEnd: 'right',
	  crossAxisSize: 'width'
	};
	const horizontal = {
	  direction: 'horizontal',
	  line: 'x',
	  crossAxisLine: 'y',
	  start: 'left',
	  end: 'right',
	  size: 'width',
	  crossAxisStart: 'top',
	  crossAxisEnd: 'bottom',
	  crossAxisSize: 'height'
	};

	var isTotallyVisibleThroughFrameOnAxis = (axis => frame => {
	  const isWithinVertical = isWithin(frame.top, frame.bottom);
	  const isWithinHorizontal = isWithin(frame.left, frame.right);
	  return subject => {
	    if (axis === vertical) {
	      return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
	    }

	    return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
	  };
	});

	const getDroppableDisplaced = (target, destination) => {
	  const displacement = destination.frame ? destination.frame.scroll.diff.displacement : origin;
	  return offsetByPosition(target, displacement);
	};

	const isVisibleInDroppable = (target, destination, isVisibleThroughFrameFn) => {
	  if (!destination.subject.active) {
	    return false;
	  }

	  return isVisibleThroughFrameFn(destination.subject.active)(target);
	};

	const isVisibleInViewport = (target, viewport, isVisibleThroughFrameFn) => isVisibleThroughFrameFn(viewport)(target);

	const isVisible$1 = _ref => {
	  let {
	    target: toBeDisplaced,
	    destination,
	    viewport,
	    withDroppableDisplacement,
	    isVisibleThroughFrameFn
	  } = _ref;
	  const displacedTarget = withDroppableDisplacement ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
	  return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport, isVisibleThroughFrameFn);
	};

	const isPartiallyVisible = args => isVisible$1({ ...args,
	  isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
	});
	const isTotallyVisible = args => isVisible$1({ ...args,
	  isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
	});
	const isTotallyVisibleOnAxis = args => isVisible$1({ ...args,
	  isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
	});

	const getShouldAnimate = (id, last, forceShouldAnimate) => {
	  if (typeof forceShouldAnimate === 'boolean') {
	    return forceShouldAnimate;
	  }

	  if (!last) {
	    return true;
	  }

	  const {
	    invisible,
	    visible
	  } = last;

	  if (invisible[id]) {
	    return false;
	  }

	  const previous = visible[id];
	  return previous ? previous.shouldAnimate : true;
	};

	function getTarget(draggable, displacedBy) {
	  const marginBox = draggable.page.marginBox;
	  const expandBy = {
	    top: displacedBy.point.y,
	    right: 0,
	    bottom: 0,
	    left: displacedBy.point.x
	  };
	  return cssBoxModel.getRect(cssBoxModel.expand(marginBox, expandBy));
	}

	function getDisplacementGroups(_ref) {
	  let {
	    afterDragging,
	    destination,
	    displacedBy,
	    viewport,
	    forceShouldAnimate,
	    last
	  } = _ref;
	  return afterDragging.reduce(function process(groups, draggable) {
	    const target = getTarget(draggable, displacedBy);
	    const id = draggable.descriptor.id;
	    groups.all.push(id);
	    const isVisible = isPartiallyVisible({
	      target,
	      destination,
	      viewport,
	      withDroppableDisplacement: true
	    });

	    if (!isVisible) {
	      groups.invisible[draggable.descriptor.id] = true;
	      return groups;
	    }

	    const shouldAnimate = getShouldAnimate(id, last, forceShouldAnimate);
	    const displacement = {
	      draggableId: id,
	      shouldAnimate
	    };
	    groups.visible[id] = displacement;
	    return groups;
	  }, {
	    all: [],
	    visible: {},
	    invisible: {}
	  });
	}

	function getIndexOfLastItem(draggables, options) {
	  if (!draggables.length) {
	    return 0;
	  }

	  const indexOfLastItem = draggables[draggables.length - 1].descriptor.index;
	  return options.inHomeList ? indexOfLastItem : indexOfLastItem + 1;
	}

	function goAtEnd(_ref) {
	  let {
	    insideDestination,
	    inHomeList,
	    displacedBy,
	    destination
	  } = _ref;
	  const newIndex = getIndexOfLastItem(insideDestination, {
	    inHomeList
	  });
	  return {
	    displaced: emptyGroups,
	    displacedBy,
	    at: {
	      type: 'REORDER',
	      destination: {
	        droppableId: destination.descriptor.id,
	        index: newIndex
	      }
	    }
	  };
	}

	function calculateReorderImpact(_ref2) {
	  let {
	    draggable,
	    insideDestination,
	    destination,
	    viewport,
	    displacedBy,
	    last,
	    index,
	    forceShouldAnimate
	  } = _ref2;
	  const inHomeList = isHomeOf(draggable, destination);

	  if (index == null) {
	    return goAtEnd({
	      insideDestination,
	      inHomeList,
	      displacedBy,
	      destination
	    });
	  }

	  const match = insideDestination.find(item => item.descriptor.index === index);

	  if (!match) {
	    return goAtEnd({
	      insideDestination,
	      inHomeList,
	      displacedBy,
	      destination
	    });
	  }

	  const withoutDragging = removeDraggableFromList(draggable, insideDestination);
	  const sliceFrom = insideDestination.indexOf(match);
	  const impacted = withoutDragging.slice(sliceFrom);
	  const displaced = getDisplacementGroups({
	    afterDragging: impacted,
	    destination,
	    displacedBy,
	    last,
	    viewport: viewport.frame,
	    forceShouldAnimate
	  });
	  return {
	    displaced,
	    displacedBy,
	    at: {
	      type: 'REORDER',
	      destination: {
	        droppableId: destination.descriptor.id,
	        index
	      }
	    }
	  };
	}

	function didStartAfterCritical(draggableId, afterCritical) {
	  return Boolean(afterCritical.effected[draggableId]);
	}

	var fromCombine = (_ref => {
	  let {
	    isMovingForward,
	    destination,
	    draggables,
	    combine,
	    afterCritical
	  } = _ref;

	  if (!destination.isCombineEnabled) {
	    return null;
	  }

	  const combineId = combine.draggableId;
	  const combineWith = draggables[combineId];
	  const combineWithIndex = combineWith.descriptor.index;
	  const didCombineWithStartAfterCritical = didStartAfterCritical(combineId, afterCritical);

	  if (didCombineWithStartAfterCritical) {
	    if (isMovingForward) {
	      return combineWithIndex;
	    }

	    return combineWithIndex - 1;
	  }

	  if (isMovingForward) {
	    return combineWithIndex + 1;
	  }

	  return combineWithIndex;
	});

	var fromReorder = (_ref => {
	  let {
	    isMovingForward,
	    isInHomeList,
	    insideDestination,
	    location
	  } = _ref;

	  if (!insideDestination.length) {
	    return null;
	  }

	  const currentIndex = location.index;
	  const proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
	  const firstIndex = insideDestination[0].descriptor.index;
	  const lastIndex = insideDestination[insideDestination.length - 1].descriptor.index;
	  const upperBound = isInHomeList ? lastIndex : lastIndex + 1;

	  if (proposedIndex < firstIndex) {
	    return null;
	  }

	  if (proposedIndex > upperBound) {
	    return null;
	  }

	  return proposedIndex;
	});

	var moveToNextIndex = (_ref => {
	  let {
	    isMovingForward,
	    isInHomeList,
	    draggable,
	    draggables,
	    destination,
	    insideDestination,
	    previousImpact,
	    viewport,
	    afterCritical
	  } = _ref;
	  const wasAt = previousImpact.at;
	  !wasAt ? invariant(false, 'Cannot move in direction without previous impact location')  : void 0;

	  if (wasAt.type === 'REORDER') {
	    const newIndex = fromReorder({
	      isMovingForward,
	      isInHomeList,
	      location: wasAt.destination,
	      insideDestination
	    });

	    if (newIndex == null) {
	      return null;
	    }

	    return calculateReorderImpact({
	      draggable,
	      insideDestination,
	      destination,
	      viewport,
	      last: previousImpact.displaced,
	      displacedBy: previousImpact.displacedBy,
	      index: newIndex
	    });
	  }

	  const newIndex = fromCombine({
	    isMovingForward,
	    destination,
	    displaced: previousImpact.displaced,
	    draggables,
	    combine: wasAt.combine,
	    afterCritical
	  });

	  if (newIndex == null) {
	    return null;
	  }

	  return calculateReorderImpact({
	    draggable,
	    insideDestination,
	    destination,
	    viewport,
	    last: previousImpact.displaced,
	    displacedBy: previousImpact.displacedBy,
	    index: newIndex
	  });
	});

	var getCombinedItemDisplacement = (_ref => {
	  let {
	    displaced,
	    afterCritical,
	    combineWith,
	    displacedBy
	  } = _ref;
	  const isDisplaced = Boolean(displaced.visible[combineWith] || displaced.invisible[combineWith]);

	  if (didStartAfterCritical(combineWith, afterCritical)) {
	    return isDisplaced ? origin : negate(displacedBy.point);
	  }

	  return isDisplaced ? displacedBy.point : origin;
	});

	var whenCombining = (_ref => {
	  let {
	    afterCritical,
	    impact,
	    draggables
	  } = _ref;
	  const combine = tryGetCombine(impact);
	  !combine ? invariant(false)  : void 0;
	  const combineWith = combine.draggableId;
	  const center = draggables[combineWith].page.borderBox.center;
	  const displaceBy = getCombinedItemDisplacement({
	    displaced: impact.displaced,
	    afterCritical,
	    combineWith,
	    displacedBy: impact.displacedBy
	  });
	  return add(center, displaceBy);
	});

	const distanceFromStartToBorderBoxCenter = (axis, box) => box.margin[axis.start] + box.borderBox[axis.size] / 2;

	const distanceFromEndToBorderBoxCenter = (axis, box) => box.margin[axis.end] + box.borderBox[axis.size] / 2;

	const getCrossAxisBorderBoxCenter = (axis, target, isMoving) => target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;

	const goAfter = _ref => {
	  let {
	    axis,
	    moveRelativeTo,
	    isMoving
	  } = _ref;
	  return patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
	};
	const goBefore = _ref2 => {
	  let {
	    axis,
	    moveRelativeTo,
	    isMoving
	  } = _ref2;
	  return patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
	};
	const goIntoStart = _ref3 => {
	  let {
	    axis,
	    moveInto,
	    isMoving
	  } = _ref3;
	  return patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
	};

	var whenReordering = (_ref => {
	  let {
	    impact,
	    draggable,
	    draggables,
	    droppable,
	    afterCritical
	  } = _ref;
	  const insideDestination = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
	  const draggablePage = draggable.page;
	  const axis = droppable.axis;

	  if (!insideDestination.length) {
	    return goIntoStart({
	      axis,
	      moveInto: droppable.page,
	      isMoving: draggablePage
	    });
	  }

	  const {
	    displaced,
	    displacedBy
	  } = impact;
	  const closestAfter = displaced.all[0];

	  if (closestAfter) {
	    const closest = draggables[closestAfter];

	    if (didStartAfterCritical(closestAfter, afterCritical)) {
	      return goBefore({
	        axis,
	        moveRelativeTo: closest.page,
	        isMoving: draggablePage
	      });
	    }

	    const withDisplacement = cssBoxModel.offset(closest.page, displacedBy.point);
	    return goBefore({
	      axis,
	      moveRelativeTo: withDisplacement,
	      isMoving: draggablePage
	    });
	  }

	  const last = insideDestination[insideDestination.length - 1];

	  if (last.descriptor.id === draggable.descriptor.id) {
	    return draggablePage.borderBox.center;
	  }

	  if (didStartAfterCritical(last.descriptor.id, afterCritical)) {
	    const page = cssBoxModel.offset(last.page, negate(afterCritical.displacedBy.point));
	    return goAfter({
	      axis,
	      moveRelativeTo: page,
	      isMoving: draggablePage
	    });
	  }

	  return goAfter({
	    axis,
	    moveRelativeTo: last.page,
	    isMoving: draggablePage
	  });
	});

	var withDroppableDisplacement = ((droppable, point) => {
	  const frame = droppable.frame;

	  if (!frame) {
	    return point;
	  }

	  return add(point, frame.scroll.diff.displacement);
	});

	const getResultWithoutDroppableDisplacement = _ref => {
	  let {
	    impact,
	    draggable,
	    droppable,
	    draggables,
	    afterCritical
	  } = _ref;
	  const original = draggable.page.borderBox.center;
	  const at = impact.at;

	  if (!droppable) {
	    return original;
	  }

	  if (!at) {
	    return original;
	  }

	  if (at.type === 'REORDER') {
	    return whenReordering({
	      impact,
	      draggable,
	      draggables,
	      droppable,
	      afterCritical
	    });
	  }

	  return whenCombining({
	    impact,
	    draggables,
	    afterCritical
	  });
	};

	var getPageBorderBoxCenterFromImpact = (args => {
	  const withoutDisplacement = getResultWithoutDroppableDisplacement(args);
	  const droppable = args.droppable;
	  const withDisplacement = droppable ? withDroppableDisplacement(droppable, withoutDisplacement) : withoutDisplacement;
	  return withDisplacement;
	});

	var scrollViewport = ((viewport, newScroll) => {
	  const diff = subtract(newScroll, viewport.scroll.initial);
	  const displacement = negate(diff);
	  const frame = cssBoxModel.getRect({
	    top: newScroll.y,
	    bottom: newScroll.y + viewport.frame.height,
	    left: newScroll.x,
	    right: newScroll.x + viewport.frame.width
	  });
	  const updated = {
	    frame,
	    scroll: {
	      initial: viewport.scroll.initial,
	      max: viewport.scroll.max,
	      current: newScroll,
	      diff: {
	        value: diff,
	        displacement
	      }
	    }
	  };
	  return updated;
	});

	function getDraggables$1(ids, draggables) {
	  return ids.map(id => draggables[id]);
	}

	function tryGetVisible(id, groups) {
	  for (let i = 0; i < groups.length; i++) {
	    const displacement = groups[i].visible[id];

	    if (displacement) {
	      return displacement;
	    }
	  }

	  return null;
	}

	var speculativelyIncrease = (_ref => {
	  let {
	    impact,
	    viewport,
	    destination,
	    draggables,
	    maxScrollChange
	  } = _ref;
	  const scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
	  const scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
	  const last = impact.displaced;
	  const withViewportScroll = getDisplacementGroups({
	    afterDragging: getDraggables$1(last.all, draggables),
	    destination,
	    displacedBy: impact.displacedBy,
	    viewport: scrolledViewport.frame,
	    last,
	    forceShouldAnimate: false
	  });
	  const withDroppableScroll = getDisplacementGroups({
	    afterDragging: getDraggables$1(last.all, draggables),
	    destination: scrolledDroppable,
	    displacedBy: impact.displacedBy,
	    viewport: viewport.frame,
	    last,
	    forceShouldAnimate: false
	  });
	  const invisible = {};
	  const visible = {};
	  const groups = [last, withViewportScroll, withDroppableScroll];
	  last.all.forEach(id => {
	    const displacement = tryGetVisible(id, groups);

	    if (displacement) {
	      visible[id] = displacement;
	      return;
	    }

	    invisible[id] = true;
	  });
	  const newImpact = { ...impact,
	    displaced: {
	      all: last.all,
	      invisible,
	      visible
	    }
	  };
	  return newImpact;
	});

	var withViewportDisplacement = ((viewport, point) => add(viewport.scroll.diff.displacement, point));

	var getClientFromPageBorderBoxCenter = (_ref => {
	  let {
	    pageBorderBoxCenter,
	    draggable,
	    viewport
	  } = _ref;
	  const withoutPageScrollChange = withViewportDisplacement(viewport, pageBorderBoxCenter);
	  const offset = subtract(withoutPageScrollChange, draggable.page.borderBox.center);
	  return add(draggable.client.borderBox.center, offset);
	});

	var isTotallyVisibleInNewLocation = (_ref => {
	  let {
	    draggable,
	    destination,
	    newPageBorderBoxCenter,
	    viewport,
	    withDroppableDisplacement,
	    onlyOnMainAxis = false
	  } = _ref;
	  const changeNeeded = subtract(newPageBorderBoxCenter, draggable.page.borderBox.center);
	  const shifted = offsetByPosition(draggable.page.borderBox, changeNeeded);
	  const args = {
	    target: shifted,
	    destination,
	    withDroppableDisplacement,
	    viewport
	  };
	  return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
	});

	var moveToNextPlace = (_ref => {
	  let {
	    isMovingForward,
	    draggable,
	    destination,
	    draggables,
	    previousImpact,
	    viewport,
	    previousPageBorderBoxCenter,
	    previousClientSelection,
	    afterCritical
	  } = _ref;

	  if (!destination.isEnabled) {
	    return null;
	  }

	  const insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
	  const isInHomeList = isHomeOf(draggable, destination);
	  const impact = moveToNextCombine({
	    isMovingForward,
	    draggable,
	    destination,
	    insideDestination,
	    previousImpact
	  }) || moveToNextIndex({
	    isMovingForward,
	    isInHomeList,
	    draggable,
	    draggables,
	    destination,
	    insideDestination,
	    previousImpact,
	    viewport,
	    afterCritical
	  });

	  if (!impact) {
	    return null;
	  }

	  const pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
	    impact,
	    draggable,
	    droppable: destination,
	    draggables,
	    afterCritical
	  });
	  const isVisibleInNewLocation = isTotallyVisibleInNewLocation({
	    draggable,
	    destination,
	    newPageBorderBoxCenter: pageBorderBoxCenter,
	    viewport: viewport.frame,
	    withDroppableDisplacement: false,
	    onlyOnMainAxis: true
	  });

	  if (isVisibleInNewLocation) {
	    const clientSelection = getClientFromPageBorderBoxCenter({
	      pageBorderBoxCenter,
	      draggable,
	      viewport
	    });
	    return {
	      clientSelection,
	      impact,
	      scrollJumpRequest: null
	    };
	  }

	  const distance = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
	  const cautious = speculativelyIncrease({
	    impact,
	    viewport,
	    destination,
	    draggables,
	    maxScrollChange: distance
	  });
	  return {
	    clientSelection: previousClientSelection,
	    impact: cautious,
	    scrollJumpRequest: distance
	  };
	});

	const getKnownActive = droppable => {
	  const rect = droppable.subject.active;
	  !rect ? invariant(false, 'Cannot get clipped area from droppable')  : void 0;
	  return rect;
	};

	var getBestCrossAxisDroppable = (_ref => {
	  let {
	    isMovingForward,
	    pageBorderBoxCenter,
	    source,
	    droppables,
	    viewport
	  } = _ref;
	  const active = source.subject.active;

	  if (!active) {
	    return null;
	  }

	  const axis = source.axis;
	  const isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
	  const candidates = toDroppableList(droppables).filter(droppable => droppable !== source).filter(droppable => droppable.isEnabled).filter(droppable => Boolean(droppable.subject.active)).filter(droppable => isPartiallyVisibleThroughFrame(viewport.frame)(getKnownActive(droppable))).filter(droppable => {
	    const activeOfTarget = getKnownActive(droppable);

	    if (isMovingForward) {
	      return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
	    }

	    return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
	  }).filter(droppable => {
	    const activeOfTarget = getKnownActive(droppable);
	    const isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
	    return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
	  }).sort((a, b) => {
	    const first = getKnownActive(a)[axis.crossAxisStart];
	    const second = getKnownActive(b)[axis.crossAxisStart];

	    if (isMovingForward) {
	      return first - second;
	    }

	    return second - first;
	  }).filter((droppable, index, array) => getKnownActive(droppable)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart]);

	  if (!candidates.length) {
	    return null;
	  }

	  if (candidates.length === 1) {
	    return candidates[0];
	  }

	  const contains = candidates.filter(droppable => {
	    const isWithinDroppable = isWithin(getKnownActive(droppable)[axis.start], getKnownActive(droppable)[axis.end]);
	    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
	  });

	  if (contains.length === 1) {
	    return contains[0];
	  }

	  if (contains.length > 1) {
	    return contains.sort((a, b) => getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start])[0];
	  }

	  return candidates.sort((a, b) => {
	    const first = closest$1(pageBorderBoxCenter, getCorners(getKnownActive(a)));
	    const second = closest$1(pageBorderBoxCenter, getCorners(getKnownActive(b)));

	    if (first !== second) {
	      return first - second;
	    }

	    return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
	  })[0];
	});

	const getCurrentPageBorderBoxCenter = (draggable, afterCritical) => {
	  const original = draggable.page.borderBox.center;
	  return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? subtract(original, afterCritical.displacedBy.point) : original;
	};
	const getCurrentPageBorderBox = (draggable, afterCritical) => {
	  const original = draggable.page.borderBox;
	  return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? offsetByPosition(original, negate(afterCritical.displacedBy.point)) : original;
	};

	var getClosestDraggable = (_ref => {
	  let {
	    pageBorderBoxCenter,
	    viewport,
	    destination,
	    insideDestination,
	    afterCritical
	  } = _ref;
	  const sorted = insideDestination.filter(draggable => isTotallyVisible({
	    target: getCurrentPageBorderBox(draggable, afterCritical),
	    destination,
	    viewport: viewport.frame,
	    withDroppableDisplacement: true
	  })).sort((a, b) => {
	    const distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a, afterCritical)));
	    const distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b, afterCritical)));

	    if (distanceToA < distanceToB) {
	      return -1;
	    }

	    if (distanceToB < distanceToA) {
	      return 1;
	    }

	    return a.descriptor.index - b.descriptor.index;
	  });
	  return sorted[0] || null;
	});

	var getDisplacedBy = memoizeOne__default["default"](function getDisplacedBy(axis, displaceBy) {
	  const displacement = displaceBy[axis.line];
	  return {
	    value: displacement,
	    point: patch(axis.line, displacement)
	  };
	});

	const getRequiredGrowthForPlaceholder = (droppable, placeholderSize, draggables) => {
	  const axis = droppable.axis;

	  if (droppable.descriptor.mode === 'virtual') {
	    return patch(axis.line, placeholderSize[axis.line]);
	  }

	  const availableSpace = droppable.subject.page.contentBox[axis.size];
	  const insideDroppable = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
	  const spaceUsed = insideDroppable.reduce((sum, dimension) => sum + dimension.client.marginBox[axis.size], 0);
	  const requiredSpace = spaceUsed + placeholderSize[axis.line];
	  const needsToGrowBy = requiredSpace - availableSpace;

	  if (needsToGrowBy <= 0) {
	    return null;
	  }

	  return patch(axis.line, needsToGrowBy);
	};

	const withMaxScroll = (frame, max) => ({ ...frame,
	  scroll: { ...frame.scroll,
	    max
	  }
	});

	const addPlaceholder = (droppable, draggable, draggables) => {
	  const frame = droppable.frame;
	  !!isHomeOf(draggable, droppable) ? invariant(false, 'Should not add placeholder space to home list')  : void 0;
	  !!droppable.subject.withPlaceholder ? invariant(false, 'Cannot add placeholder size to a subject when it already has one')  : void 0;
	  const placeholderSize = getDisplacedBy(droppable.axis, draggable.displaceBy).point;
	  const requiredGrowth = getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables);
	  const added = {
	    placeholderSize,
	    increasedBy: requiredGrowth,
	    oldFrameMaxScroll: droppable.frame ? droppable.frame.scroll.max : null
	  };

	  if (!frame) {
	    const subject = getSubject({
	      page: droppable.subject.page,
	      withPlaceholder: added,
	      axis: droppable.axis,
	      frame: droppable.frame
	    });
	    return { ...droppable,
	      subject
	    };
	  }

	  const maxScroll = requiredGrowth ? add(frame.scroll.max, requiredGrowth) : frame.scroll.max;
	  const newFrame = withMaxScroll(frame, maxScroll);
	  const subject = getSubject({
	    page: droppable.subject.page,
	    withPlaceholder: added,
	    axis: droppable.axis,
	    frame: newFrame
	  });
	  return { ...droppable,
	    subject,
	    frame: newFrame
	  };
	};
	const removePlaceholder = droppable => {
	  const added = droppable.subject.withPlaceholder;
	  !added ? invariant(false, 'Cannot remove placeholder form subject when there was none')  : void 0;
	  const frame = droppable.frame;

	  if (!frame) {
	    const subject = getSubject({
	      page: droppable.subject.page,
	      axis: droppable.axis,
	      frame: null,
	      withPlaceholder: null
	    });
	    return { ...droppable,
	      subject
	    };
	  }

	  const oldMaxScroll = added.oldFrameMaxScroll;
	  !oldMaxScroll ? invariant(false, 'Expected droppable with frame to have old max frame scroll when removing placeholder')  : void 0;
	  const newFrame = withMaxScroll(frame, oldMaxScroll);
	  const subject = getSubject({
	    page: droppable.subject.page,
	    axis: droppable.axis,
	    frame: newFrame,
	    withPlaceholder: null
	  });
	  return { ...droppable,
	    subject,
	    frame: newFrame
	  };
	};

	var moveToNewDroppable = (_ref => {
	  let {
	    previousPageBorderBoxCenter,
	    moveRelativeTo,
	    insideDestination,
	    draggable,
	    draggables,
	    destination,
	    viewport,
	    afterCritical
	  } = _ref;

	  if (!moveRelativeTo) {
	    if (insideDestination.length) {
	      return null;
	    }

	    const proposed = {
	      displaced: emptyGroups,
	      displacedBy: noDisplacedBy,
	      at: {
	        type: 'REORDER',
	        destination: {
	          droppableId: destination.descriptor.id,
	          index: 0
	        }
	      }
	    };
	    const proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
	      impact: proposed,
	      draggable,
	      droppable: destination,
	      draggables,
	      afterCritical
	    });
	    const withPlaceholder = isHomeOf(draggable, destination) ? destination : addPlaceholder(destination, draggable, draggables);
	    const isVisibleInNewLocation = isTotallyVisibleInNewLocation({
	      draggable,
	      destination: withPlaceholder,
	      newPageBorderBoxCenter: proposedPageBorderBoxCenter,
	      viewport: viewport.frame,
	      withDroppableDisplacement: false,
	      onlyOnMainAxis: true
	    });
	    return isVisibleInNewLocation ? proposed : null;
	  }

	  const isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] <= moveRelativeTo.page.borderBox.center[destination.axis.line]);

	  const proposedIndex = (() => {
	    const relativeTo = moveRelativeTo.descriptor.index;

	    if (moveRelativeTo.descriptor.id === draggable.descriptor.id) {
	      return relativeTo;
	    }

	    if (isGoingBeforeTarget) {
	      return relativeTo;
	    }

	    return relativeTo + 1;
	  })();

	  const displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
	  return calculateReorderImpact({
	    draggable,
	    insideDestination,
	    destination,
	    viewport,
	    displacedBy,
	    last: emptyGroups,
	    index: proposedIndex
	  });
	});

	var moveCrossAxis = (_ref => {
	  let {
	    isMovingForward,
	    previousPageBorderBoxCenter,
	    draggable,
	    isOver,
	    draggables,
	    droppables,
	    viewport,
	    afterCritical
	  } = _ref;
	  const destination = getBestCrossAxisDroppable({
	    isMovingForward,
	    pageBorderBoxCenter: previousPageBorderBoxCenter,
	    source: isOver,
	    droppables,
	    viewport
	  });

	  if (!destination) {
	    return null;
	  }

	  const insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
	  const moveRelativeTo = getClosestDraggable({
	    pageBorderBoxCenter: previousPageBorderBoxCenter,
	    viewport,
	    destination,
	    insideDestination,
	    afterCritical
	  });
	  const impact = moveToNewDroppable({
	    previousPageBorderBoxCenter,
	    destination,
	    draggable,
	    draggables,
	    moveRelativeTo,
	    insideDestination,
	    viewport,
	    afterCritical
	  });

	  if (!impact) {
	    return null;
	  }

	  const pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
	    impact,
	    draggable,
	    droppable: destination,
	    draggables,
	    afterCritical
	  });
	  const clientSelection = getClientFromPageBorderBoxCenter({
	    pageBorderBoxCenter,
	    draggable,
	    viewport
	  });
	  return {
	    clientSelection,
	    impact,
	    scrollJumpRequest: null
	  };
	});

	var whatIsDraggedOver = (impact => {
	  const at = impact.at;

	  if (!at) {
	    return null;
	  }

	  if (at.type === 'REORDER') {
	    return at.destination.droppableId;
	  }

	  return at.combine.droppableId;
	});

	const getDroppableOver$1 = (impact, droppables) => {
	  const id = whatIsDraggedOver(impact);
	  return id ? droppables[id] : null;
	};

	var moveInDirection = (_ref => {
	  let {
	    state,
	    type
	  } = _ref;
	  const isActuallyOver = getDroppableOver$1(state.impact, state.dimensions.droppables);
	  const isMainAxisMovementAllowed = Boolean(isActuallyOver);
	  const home = state.dimensions.droppables[state.critical.droppable.id];
	  const isOver = isActuallyOver || home;
	  const direction = isOver.axis.direction;
	  const isMovingOnMainAxis = direction === 'vertical' && (type === 'MOVE_UP' || type === 'MOVE_DOWN') || direction === 'horizontal' && (type === 'MOVE_LEFT' || type === 'MOVE_RIGHT');

	  if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
	    return null;
	  }

	  const isMovingForward = type === 'MOVE_DOWN' || type === 'MOVE_RIGHT';
	  const draggable = state.dimensions.draggables[state.critical.draggable.id];
	  const previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
	  const {
	    draggables,
	    droppables
	  } = state.dimensions;
	  return isMovingOnMainAxis ? moveToNextPlace({
	    isMovingForward,
	    previousPageBorderBoxCenter,
	    draggable,
	    destination: isOver,
	    draggables,
	    viewport: state.viewport,
	    previousClientSelection: state.current.client.selection,
	    previousImpact: state.impact,
	    afterCritical: state.afterCritical
	  }) : moveCrossAxis({
	    isMovingForward,
	    previousPageBorderBoxCenter,
	    draggable,
	    isOver,
	    draggables,
	    droppables,
	    viewport: state.viewport,
	    afterCritical: state.afterCritical
	  });
	});

	function isMovementAllowed(state) {
	  return state.phase === 'DRAGGING' || state.phase === 'COLLECTING';
	}

	function isPositionInFrame(frame) {
	  const isWithinVertical = isWithin(frame.top, frame.bottom);
	  const isWithinHorizontal = isWithin(frame.left, frame.right);
	  return function run(point) {
	    return isWithinVertical(point.y) && isWithinHorizontal(point.x);
	  };
	}

	function getHasOverlap(first, second) {
	  return first.left < second.right && first.right > second.left && first.top < second.bottom && first.bottom > second.top;
	}

	function getFurthestAway(_ref) {
	  let {
	    pageBorderBox,
	    draggable,
	    candidates
	  } = _ref;
	  const startCenter = draggable.page.borderBox.center;
	  const sorted = candidates.map(candidate => {
	    const axis = candidate.axis;
	    const target = patch(candidate.axis.line, pageBorderBox.center[axis.line], candidate.page.borderBox.center[axis.crossAxisLine]);
	    return {
	      id: candidate.descriptor.id,
	      distance: distance(startCenter, target)
	    };
	  }).sort((a, b) => b.distance - a.distance);
	  return sorted[0] ? sorted[0].id : null;
	}

	function getDroppableOver(_ref2) {
	  let {
	    pageBorderBox,
	    draggable,
	    droppables
	  } = _ref2;
	  const candidates = toDroppableList(droppables).filter(item => {
	    if (!item.isEnabled) {
	      return false;
	    }

	    const active = item.subject.active;

	    if (!active) {
	      return false;
	    }

	    if (!getHasOverlap(pageBorderBox, active)) {
	      return false;
	    }

	    if (isPositionInFrame(active)(pageBorderBox.center)) {
	      return true;
	    }

	    const axis = item.axis;
	    const childCenter = active.center[axis.crossAxisLine];
	    const crossAxisStart = pageBorderBox[axis.crossAxisStart];
	    const crossAxisEnd = pageBorderBox[axis.crossAxisEnd];
	    const isContained = isWithin(active[axis.crossAxisStart], active[axis.crossAxisEnd]);
	    const isStartContained = isContained(crossAxisStart);
	    const isEndContained = isContained(crossAxisEnd);

	    if (!isStartContained && !isEndContained) {
	      return true;
	    }

	    if (isStartContained) {
	      return crossAxisStart < childCenter;
	    }

	    return crossAxisEnd > childCenter;
	  });

	  if (!candidates.length) {
	    return null;
	  }

	  if (candidates.length === 1) {
	    return candidates[0].descriptor.id;
	  }

	  return getFurthestAway({
	    pageBorderBox,
	    draggable,
	    candidates
	  });
	}

	const offsetRectByPosition = (rect, point) => cssBoxModel.getRect(offsetByPosition(rect, point));

	var withDroppableScroll = ((droppable, area) => {
	  const frame = droppable.frame;

	  if (!frame) {
	    return area;
	  }

	  return offsetRectByPosition(area, frame.scroll.diff.value);
	});

	function getIsDisplaced(_ref) {
	  let {
	    displaced,
	    id
	  } = _ref;
	  return Boolean(displaced.visible[id] || displaced.invisible[id]);
	}

	function atIndex(_ref) {
	  let {
	    draggable,
	    closest,
	    inHomeList
	  } = _ref;

	  if (!closest) {
	    return null;
	  }

	  if (!inHomeList) {
	    return closest.descriptor.index;
	  }

	  if (closest.descriptor.index > draggable.descriptor.index) {
	    return closest.descriptor.index - 1;
	  }

	  return closest.descriptor.index;
	}

	var getReorderImpact = (_ref2 => {
	  let {
	    pageBorderBoxWithDroppableScroll: targetRect,
	    draggable,
	    destination,
	    insideDestination,
	    last,
	    viewport,
	    afterCritical
	  } = _ref2;
	  const axis = destination.axis;
	  const displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
	  const displacement = displacedBy.value;
	  const targetStart = targetRect[axis.start];
	  const targetEnd = targetRect[axis.end];
	  const withoutDragging = removeDraggableFromList(draggable, insideDestination);
	  const closest = withoutDragging.find(child => {
	    const id = child.descriptor.id;
	    const childCenter = child.page.borderBox.center[axis.line];
	    const didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
	    const isDisplaced = getIsDisplaced({
	      displaced: last,
	      id
	    });

	    if (didStartAfterCritical$1) {
	      if (isDisplaced) {
	        return targetEnd <= childCenter;
	      }

	      return targetStart < childCenter - displacement;
	    }

	    if (isDisplaced) {
	      return targetEnd <= childCenter + displacement;
	    }

	    return targetStart < childCenter;
	  }) || null;
	  const newIndex = atIndex({
	    draggable,
	    closest,
	    inHomeList: isHomeOf(draggable, destination)
	  });
	  return calculateReorderImpact({
	    draggable,
	    insideDestination,
	    destination,
	    viewport,
	    last,
	    displacedBy,
	    index: newIndex
	  });
	});

	const combineThresholdDivisor = 4;
	var getCombineImpact = (_ref => {
	  let {
	    draggable,
	    pageBorderBoxWithDroppableScroll: targetRect,
	    previousImpact,
	    destination,
	    insideDestination,
	    afterCritical
	  } = _ref;

	  if (!destination.isCombineEnabled) {
	    return null;
	  }

	  const axis = destination.axis;
	  const displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
	  const displacement = displacedBy.value;
	  const targetStart = targetRect[axis.start];
	  const targetEnd = targetRect[axis.end];
	  const withoutDragging = removeDraggableFromList(draggable, insideDestination);
	  const combineWith = withoutDragging.find(child => {
	    const id = child.descriptor.id;
	    const childRect = child.page.borderBox;
	    const childSize = childRect[axis.size];
	    const threshold = childSize / combineThresholdDivisor;
	    const didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
	    const isDisplaced = getIsDisplaced({
	      displaced: previousImpact.displaced,
	      id
	    });

	    if (didStartAfterCritical$1) {
	      if (isDisplaced) {
	        return targetEnd > childRect[axis.start] + threshold && targetEnd < childRect[axis.end] - threshold;
	      }

	      return targetStart > childRect[axis.start] - displacement + threshold && targetStart < childRect[axis.end] - displacement - threshold;
	    }

	    if (isDisplaced) {
	      return targetEnd > childRect[axis.start] + displacement + threshold && targetEnd < childRect[axis.end] + displacement - threshold;
	    }

	    return targetStart > childRect[axis.start] + threshold && targetStart < childRect[axis.end] - threshold;
	  });

	  if (!combineWith) {
	    return null;
	  }

	  const impact = {
	    displacedBy,
	    displaced: previousImpact.displaced,
	    at: {
	      type: 'COMBINE',
	      combine: {
	        draggableId: combineWith.descriptor.id,
	        droppableId: destination.descriptor.id
	      }
	    }
	  };
	  return impact;
	});

	var getDragImpact = (_ref => {
	  let {
	    pageOffset,
	    draggable,
	    draggables,
	    droppables,
	    previousImpact,
	    viewport,
	    afterCritical
	  } = _ref;
	  const pageBorderBox = offsetRectByPosition(draggable.page.borderBox, pageOffset);
	  const destinationId = getDroppableOver({
	    pageBorderBox,
	    draggable,
	    droppables
	  });

	  if (!destinationId) {
	    return noImpact$1;
	  }

	  const destination = droppables[destinationId];
	  const insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
	  const pageBorderBoxWithDroppableScroll = withDroppableScroll(destination, pageBorderBox);
	  return getCombineImpact({
	    pageBorderBoxWithDroppableScroll,
	    draggable,
	    previousImpact,
	    destination,
	    insideDestination,
	    afterCritical
	  }) || getReorderImpact({
	    pageBorderBoxWithDroppableScroll,
	    draggable,
	    destination,
	    insideDestination,
	    last: previousImpact.displaced,
	    viewport,
	    afterCritical
	  });
	});

	var patchDroppableMap = ((droppables, updated) => ({ ...droppables,
	  [updated.descriptor.id]: updated
	}));

	const clearUnusedPlaceholder = _ref => {
	  let {
	    previousImpact,
	    impact,
	    droppables
	  } = _ref;
	  const last = whatIsDraggedOver(previousImpact);
	  const now = whatIsDraggedOver(impact);

	  if (!last) {
	    return droppables;
	  }

	  if (last === now) {
	    return droppables;
	  }

	  const lastDroppable = droppables[last];

	  if (!lastDroppable.subject.withPlaceholder) {
	    return droppables;
	  }

	  const updated = removePlaceholder(lastDroppable);
	  return patchDroppableMap(droppables, updated);
	};

	var recomputePlaceholders = (_ref2 => {
	  let {
	    draggable,
	    draggables,
	    droppables,
	    previousImpact,
	    impact
	  } = _ref2;
	  const cleaned = clearUnusedPlaceholder({
	    previousImpact,
	    impact,
	    droppables
	  });
	  const isOver = whatIsDraggedOver(impact);

	  if (!isOver) {
	    return cleaned;
	  }

	  const droppable = droppables[isOver];

	  if (isHomeOf(draggable, droppable)) {
	    return cleaned;
	  }

	  if (droppable.subject.withPlaceholder) {
	    return cleaned;
	  }

	  const patched = addPlaceholder(droppable, draggable, draggables);
	  return patchDroppableMap(cleaned, patched);
	});

	var update = (_ref => {
	  let {
	    state,
	    clientSelection: forcedClientSelection,
	    dimensions: forcedDimensions,
	    viewport: forcedViewport,
	    impact: forcedImpact,
	    scrollJumpRequest
	  } = _ref;
	  const viewport = forcedViewport || state.viewport;
	  const dimensions = forcedDimensions || state.dimensions;
	  const clientSelection = forcedClientSelection || state.current.client.selection;
	  const offset = subtract(clientSelection, state.initial.client.selection);
	  const client = {
	    offset,
	    selection: clientSelection,
	    borderBoxCenter: add(state.initial.client.borderBoxCenter, offset)
	  };
	  const page = {
	    selection: add(client.selection, viewport.scroll.current),
	    borderBoxCenter: add(client.borderBoxCenter, viewport.scroll.current),
	    offset: add(client.offset, viewport.scroll.diff.value)
	  };
	  const current = {
	    client,
	    page
	  };

	  if (state.phase === 'COLLECTING') {
	    return { ...state,
	      dimensions,
	      viewport,
	      current
	    };
	  }

	  const draggable = dimensions.draggables[state.critical.draggable.id];
	  const newImpact = forcedImpact || getDragImpact({
	    pageOffset: page.offset,
	    draggable,
	    draggables: dimensions.draggables,
	    droppables: dimensions.droppables,
	    previousImpact: state.impact,
	    viewport,
	    afterCritical: state.afterCritical
	  });
	  const withUpdatedPlaceholders = recomputePlaceholders({
	    draggable,
	    impact: newImpact,
	    previousImpact: state.impact,
	    draggables: dimensions.draggables,
	    droppables: dimensions.droppables
	  });
	  const result = { ...state,
	    current,
	    dimensions: {
	      draggables: dimensions.draggables,
	      droppables: withUpdatedPlaceholders
	    },
	    impact: newImpact,
	    viewport,
	    scrollJumpRequest: scrollJumpRequest || null,
	    forceShouldAnimate: scrollJumpRequest ? false : null
	  };
	  return result;
	});

	function getDraggables(ids, draggables) {
	  return ids.map(id => draggables[id]);
	}

	var recompute = (_ref => {
	  let {
	    impact,
	    viewport,
	    draggables,
	    destination,
	    forceShouldAnimate
	  } = _ref;
	  const last = impact.displaced;
	  const afterDragging = getDraggables(last.all, draggables);
	  const displaced = getDisplacementGroups({
	    afterDragging,
	    destination,
	    displacedBy: impact.displacedBy,
	    viewport: viewport.frame,
	    forceShouldAnimate,
	    last
	  });
	  return { ...impact,
	    displaced
	  };
	});

	var getClientBorderBoxCenter = (_ref => {
	  let {
	    impact,
	    draggable,
	    droppable,
	    draggables,
	    viewport,
	    afterCritical
	  } = _ref;
	  const pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
	    impact,
	    draggable,
	    draggables,
	    droppable,
	    afterCritical
	  });
	  return getClientFromPageBorderBoxCenter({
	    pageBorderBoxCenter,
	    draggable,
	    viewport
	  });
	});

	var refreshSnap = (_ref => {
	  let {
	    state,
	    dimensions: forcedDimensions,
	    viewport: forcedViewport
	  } = _ref;
	  !(state.movementMode === 'SNAP') ? invariant(false)  : void 0;
	  const needsVisibilityCheck = state.impact;
	  const viewport = forcedViewport || state.viewport;
	  const dimensions = forcedDimensions || state.dimensions;
	  const {
	    draggables,
	    droppables
	  } = dimensions;
	  const draggable = draggables[state.critical.draggable.id];
	  const isOver = whatIsDraggedOver(needsVisibilityCheck);
	  !isOver ? invariant(false, 'Must be over a destination in SNAP movement mode')  : void 0;
	  const destination = droppables[isOver];
	  const impact = recompute({
	    impact: needsVisibilityCheck,
	    viewport,
	    destination,
	    draggables
	  });
	  const clientSelection = getClientBorderBoxCenter({
	    impact,
	    draggable,
	    droppable: destination,
	    draggables,
	    viewport,
	    afterCritical: state.afterCritical
	  });
	  return update({
	    impact,
	    clientSelection,
	    state,
	    dimensions,
	    viewport
	  });
	});

	var getHomeLocation = (descriptor => ({
	  index: descriptor.index,
	  droppableId: descriptor.droppableId
	}));

	var getLiftEffect = (_ref => {
	  let {
	    draggable,
	    home,
	    draggables,
	    viewport
	  } = _ref;
	  const displacedBy = getDisplacedBy(home.axis, draggable.displaceBy);
	  const insideHome = getDraggablesInsideDroppable(home.descriptor.id, draggables);
	  const rawIndex = insideHome.indexOf(draggable);
	  !(rawIndex !== -1) ? invariant(false, 'Expected draggable to be inside home list')  : void 0;
	  const afterDragging = insideHome.slice(rawIndex + 1);
	  const effected = afterDragging.reduce((previous, item) => {
	    previous[item.descriptor.id] = true;
	    return previous;
	  }, {});
	  const afterCritical = {
	    inVirtualList: home.descriptor.mode === 'virtual',
	    displacedBy,
	    effected
	  };
	  const displaced = getDisplacementGroups({
	    afterDragging,
	    destination: home,
	    displacedBy,
	    last: null,
	    viewport: viewport.frame,
	    forceShouldAnimate: false
	  });
	  const impact = {
	    displaced,
	    displacedBy,
	    at: {
	      type: 'REORDER',
	      destination: getHomeLocation(draggable.descriptor)
	    }
	  };
	  return {
	    impact,
	    afterCritical
	  };
	});

	var patchDimensionMap = ((dimensions, updated) => ({
	  draggables: dimensions.draggables,
	  droppables: patchDroppableMap(dimensions.droppables, updated)
	}));

	var offsetDraggable = (_ref => {
	  let {
	    draggable,
	    offset,
	    initialWindowScroll
	  } = _ref;
	  const client = cssBoxModel.offset(draggable.client, offset);
	  const page = cssBoxModel.withScroll(client, initialWindowScroll);
	  const moved = { ...draggable,
	    placeholder: { ...draggable.placeholder,
	      client
	    },
	    client,
	    page
	  };
	  return moved;
	});

	var getFrame = (droppable => {
	  const frame = droppable.frame;
	  !frame ? invariant(false, 'Expected Droppable to have a frame')  : void 0;
	  return frame;
	});

	var adjustAdditionsForScrollChanges = (_ref => {
	  let {
	    additions,
	    updatedDroppables,
	    viewport
	  } = _ref;
	  const windowScrollChange = viewport.scroll.diff.value;
	  return additions.map(draggable => {
	    const droppableId = draggable.descriptor.droppableId;
	    const modified = updatedDroppables[droppableId];
	    const frame = getFrame(modified);
	    const droppableScrollChange = frame.scroll.diff.value;
	    const totalChange = add(windowScrollChange, droppableScrollChange);
	    const moved = offsetDraggable({
	      draggable,
	      offset: totalChange,
	      initialWindowScroll: viewport.scroll.initial
	    });
	    return moved;
	  });
	});
	var publishWhileDraggingInVirtual = (_ref => {
	  let {
	    state,
	    published
	  } = _ref;
	  const withScrollChange = published.modified.map(update => {
	    const existing = state.dimensions.droppables[update.droppableId];
	    const scrolled = scrollDroppable(existing, update.scroll);
	    return scrolled;
	  });
	  const droppables = { ...state.dimensions.droppables,
	    ...toDroppableMap(withScrollChange)
	  };
	  const updatedAdditions = toDraggableMap(adjustAdditionsForScrollChanges({
	    additions: published.additions,
	    updatedDroppables: droppables,
	    viewport: state.viewport
	  }));
	  const draggables = { ...state.dimensions.draggables,
	    ...updatedAdditions
	  };
	  published.removals.forEach(id => {
	    delete draggables[id];
	  });
	  const dimensions = {
	    droppables,
	    draggables
	  };
	  const wasOverId = whatIsDraggedOver(state.impact);
	  const wasOver = wasOverId ? dimensions.droppables[wasOverId] : null;
	  const draggable = dimensions.draggables[state.critical.draggable.id];
	  const home = dimensions.droppables[state.critical.droppable.id];
	  const {
	    impact: onLiftImpact,
	    afterCritical
	  } = getLiftEffect({
	    draggable,
	    home,
	    draggables,
	    viewport: state.viewport
	  });
	  const previousImpact = wasOver && wasOver.isCombineEnabled ? state.impact : onLiftImpact;
	  const impact = getDragImpact({
	    pageOffset: state.current.page.offset,
	    draggable: dimensions.draggables[state.critical.draggable.id],
	    draggables: dimensions.draggables,
	    droppables: dimensions.droppables,
	    previousImpact,
	    viewport: state.viewport,
	    afterCritical
	  });
	  const draggingState = { ...state,
	    phase: 'DRAGGING',
	    impact,
	    onLiftImpact,
	    dimensions,
	    afterCritical,
	    forceShouldAnimate: false
	  };

	  if (state.phase === 'COLLECTING') {
	    return draggingState;
	  }

	  const dropPending = { ...draggingState,
	    phase: 'DROP_PENDING',
	    reason: state.reason,
	    isWaiting: false
	  };
	  return dropPending;
	});

	const isSnapping = state => state.movementMode === 'SNAP';

	const postDroppableChange = (state, updated, isEnabledChanging) => {
	  const dimensions = patchDimensionMap(state.dimensions, updated);

	  if (!isSnapping(state) || isEnabledChanging) {
	    return update({
	      state,
	      dimensions
	    });
	  }

	  return refreshSnap({
	    state,
	    dimensions
	  });
	};

	function removeScrollJumpRequest(state) {
	  if (state.isDragging && state.movementMode === 'SNAP') {
	    return { ...state,
	      scrollJumpRequest: null
	    };
	  }

	  return state;
	}

	const idle$2 = {
	  phase: 'IDLE',
	  completed: null,
	  shouldFlush: false
	};
	var reducer$1 = (function (state, action) {
	  if (state === void 0) {
	    state = idle$2;
	  }

	  if (action.type === 'FLUSH') {
	    return { ...idle$2,
	      shouldFlush: true
	    };
	  }

	  if (action.type === 'INITIAL_PUBLISH') {
	    !(state.phase === 'IDLE') ? invariant(false, 'INITIAL_PUBLISH must come after a IDLE phase')  : void 0;
	    const {
	      critical,
	      clientSelection,
	      viewport,
	      dimensions,
	      movementMode
	    } = action.payload;
	    const draggable = dimensions.draggables[critical.draggable.id];
	    const home = dimensions.droppables[critical.droppable.id];
	    const client = {
	      selection: clientSelection,
	      borderBoxCenter: draggable.client.borderBox.center,
	      offset: origin
	    };
	    const initial = {
	      client,
	      page: {
	        selection: add(client.selection, viewport.scroll.initial),
	        borderBoxCenter: add(client.selection, viewport.scroll.initial),
	        offset: add(client.selection, viewport.scroll.diff.value)
	      }
	    };
	    const isWindowScrollAllowed = toDroppableList(dimensions.droppables).every(item => !item.isFixedOnPage);
	    const {
	      impact,
	      afterCritical
	    } = getLiftEffect({
	      draggable,
	      home,
	      draggables: dimensions.draggables,
	      viewport
	    });
	    const result = {
	      phase: 'DRAGGING',
	      isDragging: true,
	      critical,
	      movementMode,
	      dimensions,
	      initial,
	      current: initial,
	      isWindowScrollAllowed,
	      impact,
	      afterCritical,
	      onLiftImpact: impact,
	      viewport,
	      scrollJumpRequest: null,
	      forceShouldAnimate: null
	    };
	    return result;
	  }

	  if (action.type === 'COLLECTION_STARTING') {
	    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
	      return state;
	    }

	    !(state.phase === 'DRAGGING') ? invariant(false, `Collection cannot start from phase ${state.phase}`)  : void 0;
	    const result = { ...state,
	      phase: 'COLLECTING'
	    };
	    return result;
	  }

	  if (action.type === 'PUBLISH_WHILE_DRAGGING') {
	    !(state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') ? invariant(false, `Unexpected ${action.type} received in phase ${state.phase}`)  : void 0;
	    return publishWhileDraggingInVirtual({
	      state,
	      published: action.payload
	    });
	  }

	  if (action.type === 'MOVE') {
	    if (state.phase === 'DROP_PENDING') {
	      return state;
	    }

	    !isMovementAllowed(state) ? invariant(false, `${action.type} not permitted in phase ${state.phase}`)  : void 0;
	    const {
	      client: clientSelection
	    } = action.payload;

	    if (isEqual$1(clientSelection, state.current.client.selection)) {
	      return state;
	    }

	    return update({
	      state,
	      clientSelection,
	      impact: isSnapping(state) ? state.impact : null
	    });
	  }

	  if (action.type === 'UPDATE_DROPPABLE_SCROLL') {
	    if (state.phase === 'DROP_PENDING') {
	      return removeScrollJumpRequest(state);
	    }

	    if (state.phase === 'COLLECTING') {
	      return removeScrollJumpRequest(state);
	    }

	    !isMovementAllowed(state) ? invariant(false, `${action.type} not permitted in phase ${state.phase}`)  : void 0;
	    const {
	      id,
	      newScroll
	    } = action.payload;
	    const target = state.dimensions.droppables[id];

	    if (!target) {
	      return state;
	    }

	    const scrolled = scrollDroppable(target, newScroll);
	    return postDroppableChange(state, scrolled, false);
	  }

	  if (action.type === 'UPDATE_DROPPABLE_IS_ENABLED') {
	    if (state.phase === 'DROP_PENDING') {
	      return state;
	    }

	    !isMovementAllowed(state) ? invariant(false, `Attempting to move in an unsupported phase ${state.phase}`)  : void 0;
	    const {
	      id,
	      isEnabled
	    } = action.payload;
	    const target = state.dimensions.droppables[id];
	    !target ? invariant(false, `Cannot find Droppable[id: ${id}] to toggle its enabled state`)  : void 0;
	    !(target.isEnabled !== isEnabled) ? invariant(false, `Trying to set droppable isEnabled to ${String(isEnabled)}
      but it is already ${String(target.isEnabled)}`)  : void 0;
	    const updated = { ...target,
	      isEnabled
	    };
	    return postDroppableChange(state, updated, true);
	  }

	  if (action.type === 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED') {
	    if (state.phase === 'DROP_PENDING') {
	      return state;
	    }

	    !isMovementAllowed(state) ? invariant(false, `Attempting to move in an unsupported phase ${state.phase}`)  : void 0;
	    const {
	      id,
	      isCombineEnabled
	    } = action.payload;
	    const target = state.dimensions.droppables[id];
	    !target ? invariant(false, `Cannot find Droppable[id: ${id}] to toggle its isCombineEnabled state`)  : void 0;
	    !(target.isCombineEnabled !== isCombineEnabled) ? invariant(false, `Trying to set droppable isCombineEnabled to ${String(isCombineEnabled)}
      but it is already ${String(target.isCombineEnabled)}`)  : void 0;
	    const updated = { ...target,
	      isCombineEnabled
	    };
	    return postDroppableChange(state, updated, true);
	  }

	  if (action.type === 'MOVE_BY_WINDOW_SCROLL') {
	    if (state.phase === 'DROP_PENDING' || state.phase === 'DROP_ANIMATING') {
	      return state;
	    }

	    !isMovementAllowed(state) ? invariant(false, `Cannot move by window in phase ${state.phase}`)  : void 0;
	    !state.isWindowScrollAllowed ? invariant(false, 'Window scrolling is currently not supported for fixed lists')  : void 0;
	    const newScroll = action.payload.newScroll;

	    if (isEqual$1(state.viewport.scroll.current, newScroll)) {
	      return removeScrollJumpRequest(state);
	    }

	    const viewport = scrollViewport(state.viewport, newScroll);

	    if (isSnapping(state)) {
	      return refreshSnap({
	        state,
	        viewport
	      });
	    }

	    return update({
	      state,
	      viewport
	    });
	  }

	  if (action.type === 'UPDATE_VIEWPORT_MAX_SCROLL') {
	    if (!isMovementAllowed(state)) {
	      return state;
	    }

	    const maxScroll = action.payload.maxScroll;

	    if (isEqual$1(maxScroll, state.viewport.scroll.max)) {
	      return state;
	    }

	    const withMaxScroll = { ...state.viewport,
	      scroll: { ...state.viewport.scroll,
	        max: maxScroll
	      }
	    };
	    return { ...state,
	      viewport: withMaxScroll
	    };
	  }

	  if (action.type === 'MOVE_UP' || action.type === 'MOVE_DOWN' || action.type === 'MOVE_LEFT' || action.type === 'MOVE_RIGHT') {
	    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
	      return state;
	    }

	    !(state.phase === 'DRAGGING') ? invariant(false, `${action.type} received while not in DRAGGING phase`)  : void 0;
	    const result = moveInDirection({
	      state,
	      type: action.type
	    });

	    if (!result) {
	      return state;
	    }

	    return update({
	      state,
	      impact: result.impact,
	      clientSelection: result.clientSelection,
	      scrollJumpRequest: result.scrollJumpRequest
	    });
	  }

	  if (action.type === 'DROP_PENDING') {
	    const reason = action.payload.reason;
	    !(state.phase === 'COLLECTING') ? invariant(false, 'Can only move into the DROP_PENDING phase from the COLLECTING phase')  : void 0;
	    const newState = { ...state,
	      phase: 'DROP_PENDING',
	      isWaiting: true,
	      reason
	    };
	    return newState;
	  }

	  if (action.type === 'DROP_ANIMATE') {
	    const {
	      completed,
	      dropDuration,
	      newHomeClientOffset
	    } = action.payload;
	    !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ? invariant(false, `Cannot animate drop from phase ${state.phase}`)  : void 0;
	    const result = {
	      phase: 'DROP_ANIMATING',
	      completed,
	      dropDuration,
	      newHomeClientOffset,
	      dimensions: state.dimensions
	    };
	    return result;
	  }

	  if (action.type === 'DROP_COMPLETE') {
	    const {
	      completed
	    } = action.payload;
	    return {
	      phase: 'IDLE',
	      completed,
	      shouldFlush: false
	    };
	  }

	  return state;
	});

	const beforeInitialCapture = args => ({
	  type: 'BEFORE_INITIAL_CAPTURE',
	  payload: args
	});
	const lift$1 = args => ({
	  type: 'LIFT',
	  payload: args
	});
	const initialPublish = args => ({
	  type: 'INITIAL_PUBLISH',
	  payload: args
	});
	const publishWhileDragging = args => ({
	  type: 'PUBLISH_WHILE_DRAGGING',
	  payload: args
	});
	const collectionStarting = () => ({
	  type: 'COLLECTION_STARTING',
	  payload: null
	});
	const updateDroppableScroll = args => ({
	  type: 'UPDATE_DROPPABLE_SCROLL',
	  payload: args
	});
	const updateDroppableIsEnabled = args => ({
	  type: 'UPDATE_DROPPABLE_IS_ENABLED',
	  payload: args
	});
	const updateDroppableIsCombineEnabled = args => ({
	  type: 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED',
	  payload: args
	});
	const move = args => ({
	  type: 'MOVE',
	  payload: args
	});
	const moveByWindowScroll = args => ({
	  type: 'MOVE_BY_WINDOW_SCROLL',
	  payload: args
	});
	const updateViewportMaxScroll = args => ({
	  type: 'UPDATE_VIEWPORT_MAX_SCROLL',
	  payload: args
	});
	const moveUp = () => ({
	  type: 'MOVE_UP',
	  payload: null
	});
	const moveDown = () => ({
	  type: 'MOVE_DOWN',
	  payload: null
	});
	const moveRight = () => ({
	  type: 'MOVE_RIGHT',
	  payload: null
	});
	const moveLeft = () => ({
	  type: 'MOVE_LEFT',
	  payload: null
	});
	const flush = () => ({
	  type: 'FLUSH',
	  payload: null
	});
	const animateDrop = args => ({
	  type: 'DROP_ANIMATE',
	  payload: args
	});
	const completeDrop = args => ({
	  type: 'DROP_COMPLETE',
	  payload: args
	});
	const drop$1 = args => ({
	  type: 'DROP',
	  payload: args
	});
	const dropPending = args => ({
	  type: 'DROP_PENDING',
	  payload: args
	});
	const dropAnimationFinished = () => ({
	  type: 'DROP_ANIMATION_FINISHED',
	  payload: null
	});

	function checkIndexes(insideDestination) {
	  if (insideDestination.length <= 1) {
	    return;
	  }

	  const indexes = insideDestination.map(d => d.descriptor.index);
	  const errors = {};

	  for (let i = 1; i < indexes.length; i++) {
	    const current = indexes[i];
	    const previous = indexes[i - 1];

	    if (current !== previous + 1) {
	      errors[current] = true;
	    }
	  }

	  if (!Object.keys(errors).length) {
	    return;
	  }

	  const formatted = indexes.map(index => {
	    const hasError = Boolean(errors[index]);
	    return hasError ? `[🔥${index}]` : `${index}`;
	  }).join(', ');
	  warning(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${formatted}
  `) ;
	}

	function validateDimensions(critical, dimensions) {
	  {
	    const insideDestination = getDraggablesInsideDroppable(critical.droppable.id, dimensions.draggables);
	    checkIndexes(insideDestination);
	  }
	}

	var lift = (marshal => _ref => {
	  let {
	    getState,
	    dispatch
	  } = _ref;
	  return next => action => {
	    if (action.type !== 'LIFT') {
	      next(action);
	      return;
	    }

	    const {
	      id,
	      clientSelection,
	      movementMode
	    } = action.payload;
	    const initial = getState();

	    if (initial.phase === 'DROP_ANIMATING') {
	      dispatch(completeDrop({
	        completed: initial.completed
	      }));
	    }

	    !(getState().phase === 'IDLE') ? invariant(false, 'Unexpected phase to start a drag')  : void 0;
	    dispatch(flush());
	    dispatch(beforeInitialCapture({
	      draggableId: id,
	      movementMode
	    }));
	    const scrollOptions = {
	      shouldPublishImmediately: movementMode === 'SNAP'
	    };
	    const request = {
	      draggableId: id,
	      scrollOptions
	    };
	    const {
	      critical,
	      dimensions,
	      viewport
	    } = marshal.startPublishing(request);
	    validateDimensions(critical, dimensions);
	    dispatch(initialPublish({
	      critical,
	      dimensions,
	      clientSelection,
	      movementMode,
	      viewport
	    }));
	  };
	});

	var style = (marshal => () => next => action => {
	  if (action.type === 'INITIAL_PUBLISH') {
	    marshal.dragging();
	  }

	  if (action.type === 'DROP_ANIMATE') {
	    marshal.dropping(action.payload.completed.result.reason);
	  }

	  if (action.type === 'FLUSH' || action.type === 'DROP_COMPLETE') {
	    marshal.resting();
	  }

	  next(action);
	});

	const curves = {
	  outOfTheWay: 'cubic-bezier(0.2, 0, 0, 1)',
	  drop: 'cubic-bezier(.2,1,.1,1)'
	};
	const combine = {
	  opacity: {
	    drop: 0,
	    combining: 0.7
	  },
	  scale: {
	    drop: 0.75
	  }
	};
	const timings = {
	  outOfTheWay: 0.2,
	  minDropTime: 0.33,
	  maxDropTime: 0.55
	};
	const outOfTheWayTiming = `${timings.outOfTheWay}s ${curves.outOfTheWay}`;
	const transitions = {
	  fluid: `opacity ${outOfTheWayTiming}`,
	  snap: `transform ${outOfTheWayTiming}, opacity ${outOfTheWayTiming}`,
	  drop: duration => {
	    const timing = `${duration}s ${curves.drop}`;
	    return `transform ${timing}, opacity ${timing}`;
	  },
	  outOfTheWay: `transform ${outOfTheWayTiming}`,
	  placeholder: `height ${outOfTheWayTiming}, width ${outOfTheWayTiming}, margin ${outOfTheWayTiming}`
	};

	const moveTo = offset => isEqual$1(offset, origin) ? undefined : `translate(${offset.x}px, ${offset.y}px)`;

	const transforms = {
	  moveTo,
	  drop: (offset, isCombining) => {
	    const translate = moveTo(offset);

	    if (!translate) {
	      return undefined;
	    }

	    if (!isCombining) {
	      return translate;
	    }

	    return `${translate} scale(${combine.scale.drop})`;
	  }
	};

	const {
	  minDropTime,
	  maxDropTime
	} = timings;
	const dropTimeRange = maxDropTime - minDropTime;
	const maxDropTimeAtDistance = 1500;
	const cancelDropModifier = 0.6;
	var getDropDuration = (_ref => {
	  let {
	    current,
	    destination,
	    reason
	  } = _ref;
	  const distance$1 = distance(current, destination);

	  if (distance$1 <= 0) {
	    return minDropTime;
	  }

	  if (distance$1 >= maxDropTimeAtDistance) {
	    return maxDropTime;
	  }

	  const percentage = distance$1 / maxDropTimeAtDistance;
	  const duration = minDropTime + dropTimeRange * percentage;
	  const withDuration = reason === 'CANCEL' ? duration * cancelDropModifier : duration;
	  return Number(withDuration.toFixed(2));
	});

	var getNewHomeClientOffset = (_ref => {
	  let {
	    impact,
	    draggable,
	    dimensions,
	    viewport,
	    afterCritical
	  } = _ref;
	  const {
	    draggables,
	    droppables
	  } = dimensions;
	  const droppableId = whatIsDraggedOver(impact);
	  const destination = droppableId ? droppables[droppableId] : null;
	  const home = droppables[draggable.descriptor.droppableId];
	  const newClientCenter = getClientBorderBoxCenter({
	    impact,
	    draggable,
	    draggables,
	    afterCritical,
	    droppable: destination || home,
	    viewport
	  });
	  const offset = subtract(newClientCenter, draggable.client.borderBox.center);
	  return offset;
	});

	var getDropImpact = (_ref => {
	  let {
	    draggables,
	    reason,
	    lastImpact,
	    home,
	    viewport,
	    onLiftImpact
	  } = _ref;

	  if (!lastImpact.at || reason !== 'DROP') {
	    const recomputedHomeImpact = recompute({
	      draggables,
	      impact: onLiftImpact,
	      destination: home,
	      viewport,
	      forceShouldAnimate: true
	    });
	    return {
	      impact: recomputedHomeImpact,
	      didDropInsideDroppable: false
	    };
	  }

	  if (lastImpact.at.type === 'REORDER') {
	    return {
	      impact: lastImpact,
	      didDropInsideDroppable: true
	    };
	  }

	  const withoutMovement = { ...lastImpact,
	    displaced: emptyGroups
	  };
	  return {
	    impact: withoutMovement,
	    didDropInsideDroppable: true
	  };
	});

	const dropMiddleware = _ref => {
	  let {
	    getState,
	    dispatch
	  } = _ref;
	  return next => action => {
	    if (action.type !== 'DROP') {
	      next(action);
	      return;
	    }

	    const state = getState();
	    const reason = action.payload.reason;

	    if (state.phase === 'COLLECTING') {
	      dispatch(dropPending({
	        reason
	      }));
	      return;
	    }

	    if (state.phase === 'IDLE') {
	      return;
	    }

	    const isWaitingForDrop = state.phase === 'DROP_PENDING' && state.isWaiting;
	    !!isWaitingForDrop ? invariant(false, 'A DROP action occurred while DROP_PENDING and still waiting')  : void 0;
	    !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ? invariant(false, `Cannot drop in phase: ${state.phase}`)  : void 0;
	    const critical = state.critical;
	    const dimensions = state.dimensions;
	    const draggable = dimensions.draggables[state.critical.draggable.id];
	    const {
	      impact,
	      didDropInsideDroppable
	    } = getDropImpact({
	      reason,
	      lastImpact: state.impact,
	      afterCritical: state.afterCritical,
	      onLiftImpact: state.onLiftImpact,
	      home: state.dimensions.droppables[state.critical.droppable.id],
	      viewport: state.viewport,
	      draggables: state.dimensions.draggables
	    });
	    const destination = didDropInsideDroppable ? tryGetDestination(impact) : null;
	    const combine = didDropInsideDroppable ? tryGetCombine(impact) : null;
	    const source = {
	      index: critical.draggable.index,
	      droppableId: critical.droppable.id
	    };
	    const result = {
	      draggableId: draggable.descriptor.id,
	      type: draggable.descriptor.type,
	      source,
	      reason,
	      mode: state.movementMode,
	      destination,
	      combine
	    };
	    const newHomeClientOffset = getNewHomeClientOffset({
	      impact,
	      draggable,
	      dimensions,
	      viewport: state.viewport,
	      afterCritical: state.afterCritical
	    });
	    const completed = {
	      critical: state.critical,
	      afterCritical: state.afterCritical,
	      result,
	      impact
	    };
	    const isAnimationRequired = !isEqual$1(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);

	    if (!isAnimationRequired) {
	      dispatch(completeDrop({
	        completed
	      }));
	      return;
	    }

	    const dropDuration = getDropDuration({
	      current: state.current.client.offset,
	      destination: newHomeClientOffset,
	      reason
	    });
	    const args = {
	      newHomeClientOffset,
	      dropDuration,
	      completed
	    };
	    dispatch(animateDrop(args));
	  };
	};

	var drop = dropMiddleware;

	var getWindowScroll = (() => ({
	  x: window.pageXOffset,
	  y: window.pageYOffset
	}));

	function getWindowScrollBinding(update) {
	  return {
	    eventName: 'scroll',
	    options: {
	      passive: true,
	      capture: false
	    },
	    fn: event => {
	      if (event.target !== window && event.target !== window.document) {
	        return;
	      }

	      update();
	    }
	  };
	}

	function getScrollListener(_ref) {
	  let {
	    onWindowScroll
	  } = _ref;

	  function updateScroll() {
	    onWindowScroll(getWindowScroll());
	  }

	  const scheduled = rafSchd__default["default"](updateScroll);
	  const binding = getWindowScrollBinding(scheduled);
	  let unbind = noop$2;

	  function isActive() {
	    return unbind !== noop$2;
	  }

	  function start() {
	    !!isActive() ? invariant(false, 'Cannot start scroll listener when already active')  : void 0;
	    unbind = bindEvents(window, [binding]);
	  }

	  function stop() {
	    !isActive() ? invariant(false, 'Cannot stop scroll listener when not active')  : void 0;
	    scheduled.cancel();
	    unbind();
	    unbind = noop$2;
	  }

	  return {
	    start,
	    stop,
	    isActive
	  };
	}

	const shouldEnd = action => action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'FLUSH';

	const scrollListener = store => {
	  const listener = getScrollListener({
	    onWindowScroll: newScroll => {
	      store.dispatch(moveByWindowScroll({
	        newScroll
	      }));
	    }
	  });
	  return next => action => {
	    if (!listener.isActive() && action.type === 'INITIAL_PUBLISH') {
	      listener.start();
	    }

	    if (listener.isActive() && shouldEnd(action)) {
	      listener.stop();
	    }

	    next(action);
	  };
	};

	var scrollListener$1 = scrollListener;

	var getExpiringAnnounce = (announce => {
	  let wasCalled = false;
	  let isExpired = false;
	  const timeoutId = setTimeout(() => {
	    isExpired = true;
	  });

	  const result = message => {
	    if (wasCalled) {
	      warning('Announcement already made. Not making a second announcement') ;
	      return;
	    }

	    if (isExpired) {
	      warning(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `) ;
	      return;
	    }

	    wasCalled = true;
	    announce(message);
	    clearTimeout(timeoutId);
	  };

	  result.wasCalled = () => wasCalled;

	  return result;
	});

	var getAsyncMarshal = (() => {
	  const entries = [];

	  const execute = timerId => {
	    const index = entries.findIndex(item => item.timerId === timerId);
	    !(index !== -1) ? invariant(false, 'Could not find timer')  : void 0;
	    const [entry] = entries.splice(index, 1);
	    entry.callback();
	  };

	  const add = fn => {
	    const timerId = setTimeout(() => execute(timerId));
	    const entry = {
	      timerId,
	      callback: fn
	    };
	    entries.push(entry);
	  };

	  const flush = () => {
	    if (!entries.length) {
	      return;
	    }

	    const shallow = [...entries];
	    entries.length = 0;
	    shallow.forEach(entry => {
	      clearTimeout(entry.timerId);
	      entry.callback();
	    });
	  };

	  return {
	    add,
	    flush
	  };
	});

	const areLocationsEqual = (first, second) => {
	  if (first == null && second == null) {
	    return true;
	  }

	  if (first == null || second == null) {
	    return false;
	  }

	  return first.droppableId === second.droppableId && first.index === second.index;
	};
	const isCombineEqual = (first, second) => {
	  if (first == null && second == null) {
	    return true;
	  }

	  if (first == null || second == null) {
	    return false;
	  }

	  return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
	};
	const isCriticalEqual = (first, second) => {
	  if (first === second) {
	    return true;
	  }

	  const isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
	  const isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
	  return isDraggableEqual && isDroppableEqual;
	};

	const withTimings = (key, fn) => {
	  fn();
	};

	const getDragStart = (critical, mode) => ({
	  draggableId: critical.draggable.id,
	  type: critical.droppable.type,
	  source: {
	    droppableId: critical.droppable.id,
	    index: critical.draggable.index
	  },
	  mode
	});

	function execute(responder, data, announce, getDefaultMessage) {
	  if (!responder) {
	    announce(getDefaultMessage(data));
	    return;
	  }

	  const willExpire = getExpiringAnnounce(announce);
	  const provided = {
	    announce: willExpire
	  };
	  responder(data, provided);

	  if (!willExpire.wasCalled()) {
	    announce(getDefaultMessage(data));
	  }
	}

	var getPublisher = ((getResponders, announce) => {
	  const asyncMarshal = getAsyncMarshal();
	  let dragging = null;

	  const beforeCapture = (draggableId, mode) => {
	    !!dragging ? invariant(false, 'Cannot fire onBeforeCapture as a drag start has already been published')  : void 0;
	    withTimings('onBeforeCapture', () => {
	      const fn = getResponders().onBeforeCapture;

	      if (fn) {
	        const before = {
	          draggableId,
	          mode
	        };
	        fn(before);
	      }
	    });
	  };

	  const beforeStart = (critical, mode) => {
	    !!dragging ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published')  : void 0;
	    withTimings('onBeforeDragStart', () => {
	      const fn = getResponders().onBeforeDragStart;

	      if (fn) {
	        fn(getDragStart(critical, mode));
	      }
	    });
	  };

	  const start = (critical, mode) => {
	    !!dragging ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published')  : void 0;
	    const data = getDragStart(critical, mode);
	    dragging = {
	      mode,
	      lastCritical: critical,
	      lastLocation: data.source,
	      lastCombine: null
	    };
	    asyncMarshal.add(() => {
	      withTimings('onDragStart', () => execute(getResponders().onDragStart, data, announce, preset$1.onDragStart));
	    });
	  };

	  const update = (critical, impact) => {
	    const location = tryGetDestination(impact);
	    const combine = tryGetCombine(impact);
	    !dragging ? invariant(false, 'Cannot fire onDragMove when onDragStart has not been called')  : void 0;
	    const hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);

	    if (hasCriticalChanged) {
	      dragging.lastCritical = critical;
	    }

	    const hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location);

	    if (hasLocationChanged) {
	      dragging.lastLocation = location;
	    }

	    const hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine);

	    if (hasGroupingChanged) {
	      dragging.lastCombine = combine;
	    }

	    if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) {
	      return;
	    }

	    const data = { ...getDragStart(critical, dragging.mode),
	      combine,
	      destination: location
	    };
	    asyncMarshal.add(() => {
	      withTimings('onDragUpdate', () => execute(getResponders().onDragUpdate, data, announce, preset$1.onDragUpdate));
	    });
	  };

	  const flush = () => {
	    !dragging ? invariant(false, 'Can only flush responders while dragging')  : void 0;
	    asyncMarshal.flush();
	  };

	  const drop = result => {
	    !dragging ? invariant(false, 'Cannot fire onDragEnd when there is no matching onDragStart')  : void 0;
	    dragging = null;
	    withTimings('onDragEnd', () => execute(getResponders().onDragEnd, result, announce, preset$1.onDragEnd));
	  };

	  const abort = () => {
	    if (!dragging) {
	      return;
	    }

	    const result = { ...getDragStart(dragging.lastCritical, dragging.mode),
	      combine: null,
	      destination: null,
	      reason: 'CANCEL'
	    };
	    drop(result);
	  };

	  return {
	    beforeCapture,
	    beforeStart,
	    start,
	    update,
	    flush,
	    drop,
	    abort
	  };
	});

	var responders = ((getResponders, announce) => {
	  const publisher = getPublisher(getResponders, announce);
	  return store => next => action => {
	    if (action.type === 'BEFORE_INITIAL_CAPTURE') {
	      publisher.beforeCapture(action.payload.draggableId, action.payload.movementMode);
	      return;
	    }

	    if (action.type === 'INITIAL_PUBLISH') {
	      const critical = action.payload.critical;
	      publisher.beforeStart(critical, action.payload.movementMode);
	      next(action);
	      publisher.start(critical, action.payload.movementMode);
	      return;
	    }

	    if (action.type === 'DROP_COMPLETE') {
	      const result = action.payload.completed.result;
	      publisher.flush();
	      next(action);
	      publisher.drop(result);
	      return;
	    }

	    next(action);

	    if (action.type === 'FLUSH') {
	      publisher.abort();
	      return;
	    }

	    const state = store.getState();

	    if (state.phase === 'DRAGGING') {
	      publisher.update(state.critical, state.impact);
	    }
	  };
	});

	const dropAnimationFinishMiddleware = store => next => action => {
	  if (action.type !== 'DROP_ANIMATION_FINISHED') {
	    next(action);
	    return;
	  }

	  const state = store.getState();
	  !(state.phase === 'DROP_ANIMATING') ? invariant(false, 'Cannot finish a drop animating when no drop is occurring')  : void 0;
	  store.dispatch(completeDrop({
	    completed: state.completed
	  }));
	};

	var dropAnimationFinish = dropAnimationFinishMiddleware;

	const dropAnimationFlushOnScrollMiddleware = store => {
	  let unbind = null;
	  let frameId = null;

	  function clear() {
	    if (frameId) {
	      cancelAnimationFrame(frameId);
	      frameId = null;
	    }

	    if (unbind) {
	      unbind();
	      unbind = null;
	    }
	  }

	  return next => action => {
	    if (action.type === 'FLUSH' || action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATION_FINISHED') {
	      clear();
	    }

	    next(action);

	    if (action.type !== 'DROP_ANIMATE') {
	      return;
	    }

	    const binding = {
	      eventName: 'scroll',
	      options: {
	        capture: true,
	        passive: false,
	        once: true
	      },
	      fn: function flushDropAnimation() {
	        const state = store.getState();

	        if (state.phase === 'DROP_ANIMATING') {
	          store.dispatch(dropAnimationFinished());
	        }
	      }
	    };
	    frameId = requestAnimationFrame(() => {
	      frameId = null;
	      unbind = bindEvents(window, [binding]);
	    });
	  };
	};

	var dropAnimationFlushOnScroll = dropAnimationFlushOnScrollMiddleware;

	var dimensionMarshalStopper = (marshal => () => next => action => {
	  if (action.type === 'DROP_COMPLETE' || action.type === 'FLUSH' || action.type === 'DROP_ANIMATE') {
	    marshal.stopPublishing();
	  }

	  next(action);
	});

	var focus = (marshal => {
	  let isWatching = false;
	  return () => next => action => {
	    if (action.type === 'INITIAL_PUBLISH') {
	      isWatching = true;
	      marshal.tryRecordFocus(action.payload.critical.draggable.id);
	      next(action);
	      marshal.tryRestoreFocusRecorded();
	      return;
	    }

	    next(action);

	    if (!isWatching) {
	      return;
	    }

	    if (action.type === 'FLUSH') {
	      isWatching = false;
	      marshal.tryRestoreFocusRecorded();
	      return;
	    }

	    if (action.type === 'DROP_COMPLETE') {
	      isWatching = false;
	      const result = action.payload.completed.result;

	      if (result.combine) {
	        marshal.tryShiftRecord(result.draggableId, result.combine.draggableId);
	      }

	      marshal.tryRestoreFocusRecorded();
	    }
	  };
	});

	const shouldStop = action => action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'FLUSH';

	var autoScroll = (autoScroller => store => next => action => {
	  if (shouldStop(action)) {
	    autoScroller.stop();
	    next(action);
	    return;
	  }

	  if (action.type === 'INITIAL_PUBLISH') {
	    next(action);
	    const state = store.getState();
	    !(state.phase === 'DRAGGING') ? invariant(false, 'Expected phase to be DRAGGING after INITIAL_PUBLISH')  : void 0;
	    autoScroller.start(state);
	    return;
	  }

	  next(action);
	  autoScroller.scroll(store.getState());
	});

	const pendingDrop = store => next => action => {
	  next(action);

	  if (action.type !== 'PUBLISH_WHILE_DRAGGING') {
	    return;
	  }

	  const postActionState = store.getState();

	  if (postActionState.phase !== 'DROP_PENDING') {
	    return;
	  }

	  if (postActionState.isWaiting) {
	    return;
	  }

	  store.dispatch(drop$1({
	    reason: postActionState.reason
	  }));
	};

	var pendingDrop$1 = pendingDrop;

	const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
	  name: '@hello-pangea/dnd'
	}) : redux.compose;
	var createStore$1 = (_ref => {
	  let {
	    dimensionMarshal,
	    focusMarshal,
	    styleMarshal,
	    getResponders,
	    announce,
	    autoScroller
	  } = _ref;
	  return redux.createStore(reducer$1, composeEnhancers(redux.applyMiddleware(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift(dimensionMarshal), drop, dropAnimationFinish, dropAnimationFlushOnScroll, pendingDrop$1, autoScroll(autoScroller), scrollListener$1, focus(focusMarshal), responders(getResponders, announce))));
	});

	const clean$1 = () => ({
	  additions: {},
	  removals: {},
	  modified: {}
	});
	function createPublisher(_ref) {
	  let {
	    registry,
	    callbacks
	  } = _ref;
	  let staging = clean$1();
	  let frameId = null;

	  const collect = () => {
	    if (frameId) {
	      return;
	    }

	    callbacks.collectionStarting();
	    frameId = requestAnimationFrame(() => {
	      frameId = null;
	      const {
	        additions,
	        removals,
	        modified
	      } = staging;
	      const added = Object.keys(additions).map(id => registry.draggable.getById(id).getDimension(origin)).sort((a, b) => a.descriptor.index - b.descriptor.index);
	      const updated = Object.keys(modified).map(id => {
	        const entry = registry.droppable.getById(id);
	        const scroll = entry.callbacks.getScrollWhileDragging();
	        return {
	          droppableId: id,
	          scroll
	        };
	      });
	      const result = {
	        additions: added,
	        removals: Object.keys(removals),
	        modified: updated
	      };
	      staging = clean$1();
	      callbacks.publish(result);
	    });
	  };

	  const add = entry => {
	    const id = entry.descriptor.id;
	    staging.additions[id] = entry;
	    staging.modified[entry.descriptor.droppableId] = true;

	    if (staging.removals[id]) {
	      delete staging.removals[id];
	    }

	    collect();
	  };

	  const remove = entry => {
	    const descriptor = entry.descriptor;
	    staging.removals[descriptor.id] = true;
	    staging.modified[descriptor.droppableId] = true;

	    if (staging.additions[descriptor.id]) {
	      delete staging.additions[descriptor.id];
	    }

	    collect();
	  };

	  const stop = () => {
	    if (!frameId) {
	      return;
	    }

	    cancelAnimationFrame(frameId);
	    frameId = null;
	    staging = clean$1();
	  };

	  return {
	    add,
	    remove,
	    stop
	  };
	}

	var getMaxScroll = (_ref => {
	  let {
	    scrollHeight,
	    scrollWidth,
	    height,
	    width
	  } = _ref;
	  const maxScroll = subtract({
	    x: scrollWidth,
	    y: scrollHeight
	  }, {
	    x: width,
	    y: height
	  });
	  const adjustedMaxScroll = {
	    x: Math.max(0, maxScroll.x),
	    y: Math.max(0, maxScroll.y)
	  };
	  return adjustedMaxScroll;
	});

	var getDocumentElement = (() => {
	  const doc = document.documentElement;
	  !doc ? invariant(false, 'Cannot find document.documentElement')  : void 0;
	  return doc;
	});

	var getMaxWindowScroll = (() => {
	  const doc = getDocumentElement();
	  const maxScroll = getMaxScroll({
	    scrollHeight: doc.scrollHeight,
	    scrollWidth: doc.scrollWidth,
	    width: doc.clientWidth,
	    height: doc.clientHeight
	  });
	  return maxScroll;
	});

	var getViewport = (() => {
	  const scroll = getWindowScroll();
	  const maxScroll = getMaxWindowScroll();
	  const top = scroll.y;
	  const left = scroll.x;
	  const doc = getDocumentElement();
	  const width = doc.clientWidth;
	  const height = doc.clientHeight;
	  const right = left + width;
	  const bottom = top + height;
	  const frame = cssBoxModel.getRect({
	    top,
	    left,
	    right,
	    bottom
	  });
	  const viewport = {
	    frame,
	    scroll: {
	      initial: scroll,
	      current: scroll,
	      max: maxScroll,
	      diff: {
	        value: origin,
	        displacement: origin
	      }
	    }
	  };
	  return viewport;
	});

	var getInitialPublish = (_ref => {
	  let {
	    critical,
	    scrollOptions,
	    registry
	  } = _ref;
	  const viewport = getViewport();
	  const windowScroll = viewport.scroll.current;
	  const home = critical.droppable;
	  const droppables = registry.droppable.getAllByType(home.type).map(entry => entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions));
	  const draggables = registry.draggable.getAllByType(critical.draggable.type).map(entry => entry.getDimension(windowScroll));
	  const dimensions = {
	    draggables: toDraggableMap(draggables),
	    droppables: toDroppableMap(droppables)
	  };
	  const result = {
	    dimensions,
	    critical,
	    viewport
	  };
	  return result;
	});

	function shouldPublishUpdate(registry, dragging, entry) {
	  if (entry.descriptor.id === dragging.id) {
	    return false;
	  }

	  if (entry.descriptor.type !== dragging.type) {
	    return false;
	  }

	  const home = registry.droppable.getById(entry.descriptor.droppableId);

	  if (home.descriptor.mode !== 'virtual') {
	    warning(`
      You are attempting to add or remove a Draggable [id: ${entry.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `) ;
	    return false;
	  }

	  return true;
	}

	var createDimensionMarshal = ((registry, callbacks) => {
	  let collection = null;
	  const publisher = createPublisher({
	    callbacks: {
	      publish: callbacks.publishWhileDragging,
	      collectionStarting: callbacks.collectionStarting
	    },
	    registry
	  });

	  const updateDroppableIsEnabled = (id, isEnabled) => {
	    !registry.droppable.exists(id) ? invariant(false, `Cannot update is enabled flag of Droppable ${id} as it is not registered`)  : void 0;

	    if (!collection) {
	      return;
	    }

	    callbacks.updateDroppableIsEnabled({
	      id,
	      isEnabled
	    });
	  };

	  const updateDroppableIsCombineEnabled = (id, isCombineEnabled) => {
	    if (!collection) {
	      return;
	    }

	    !registry.droppable.exists(id) ? invariant(false, `Cannot update isCombineEnabled flag of Droppable ${id} as it is not registered`)  : void 0;
	    callbacks.updateDroppableIsCombineEnabled({
	      id,
	      isCombineEnabled
	    });
	  };

	  const updateDroppableScroll = (id, newScroll) => {
	    if (!collection) {
	      return;
	    }

	    !registry.droppable.exists(id) ? invariant(false, `Cannot update the scroll on Droppable ${id} as it is not registered`)  : void 0;
	    callbacks.updateDroppableScroll({
	      id,
	      newScroll
	    });
	  };

	  const scrollDroppable = (id, change) => {
	    if (!collection) {
	      return;
	    }

	    registry.droppable.getById(id).callbacks.scroll(change);
	  };

	  const stopPublishing = () => {
	    if (!collection) {
	      return;
	    }

	    publisher.stop();
	    const home = collection.critical.droppable;
	    registry.droppable.getAllByType(home.type).forEach(entry => entry.callbacks.dragStopped());
	    collection.unsubscribe();
	    collection = null;
	  };

	  const subscriber = event => {
	    !collection ? invariant(false, 'Should only be subscribed when a collection is occurring')  : void 0;
	    const dragging = collection.critical.draggable;

	    if (event.type === 'ADDITION') {
	      if (shouldPublishUpdate(registry, dragging, event.value)) {
	        publisher.add(event.value);
	      }
	    }

	    if (event.type === 'REMOVAL') {
	      if (shouldPublishUpdate(registry, dragging, event.value)) {
	        publisher.remove(event.value);
	      }
	    }
	  };

	  const startPublishing = request => {
	    !!collection ? invariant(false, 'Cannot start capturing critical dimensions as there is already a collection')  : void 0;
	    const entry = registry.draggable.getById(request.draggableId);
	    const home = registry.droppable.getById(entry.descriptor.droppableId);
	    const critical = {
	      draggable: entry.descriptor,
	      droppable: home.descriptor
	    };
	    const unsubscribe = registry.subscribe(subscriber);
	    collection = {
	      critical,
	      unsubscribe
	    };
	    return getInitialPublish({
	      critical,
	      registry,
	      scrollOptions: request.scrollOptions
	    });
	  };

	  const marshal = {
	    updateDroppableIsEnabled,
	    updateDroppableIsCombineEnabled,
	    scrollDroppable,
	    updateDroppableScroll,
	    startPublishing,
	    stopPublishing
	  };
	  return marshal;
	});

	var canStartDrag = ((state, id) => {
	  if (state.phase === 'IDLE') {
	    return true;
	  }

	  if (state.phase !== 'DROP_ANIMATING') {
	    return false;
	  }

	  if (state.completed.result.draggableId === id) {
	    return false;
	  }

	  return state.completed.result.reason === 'DROP';
	});

	var scrollWindow = (change => {
	  window.scrollBy(change.x, change.y);
	});

	const getScrollableDroppables = memoizeOne__default["default"](droppables => toDroppableList(droppables).filter(droppable => {
	  if (!droppable.isEnabled) {
	    return false;
	  }

	  if (!droppable.frame) {
	    return false;
	  }

	  return true;
	}));

	const getScrollableDroppableOver = (target, droppables) => {
	  const maybe = getScrollableDroppables(droppables).find(droppable => {
	    !droppable.frame ? invariant(false, 'Invalid result')  : void 0;
	    return isPositionInFrame(droppable.frame.pageMarginBox)(target);
	  }) || null;
	  return maybe;
	};

	var getBestScrollableDroppable = (_ref => {
	  let {
	    center,
	    destination,
	    droppables
	  } = _ref;

	  if (destination) {
	    const dimension = droppables[destination];

	    if (!dimension.frame) {
	      return null;
	    }

	    return dimension;
	  }

	  const dimension = getScrollableDroppableOver(center, droppables);
	  return dimension;
	});

	const config = {
	  startFromPercentage: 0.25,
	  maxScrollAtPercentage: 0.05,
	  maxPixelScroll: 28,
	  ease: percentage => percentage ** 2,
	  durationDampening: {
	    stopDampeningAt: 1200,
	    accelerateAt: 360
	  }
	};
	var config$1 = config;

	var getDistanceThresholds = ((container, axis) => {
	  const startScrollingFrom = container[axis.size] * config$1.startFromPercentage;
	  const maxScrollValueAt = container[axis.size] * config$1.maxScrollAtPercentage;
	  const thresholds = {
	    startScrollingFrom,
	    maxScrollValueAt
	  };
	  return thresholds;
	});

	var getPercentage = (_ref => {
	  let {
	    startOfRange,
	    endOfRange,
	    current
	  } = _ref;
	  const range = endOfRange - startOfRange;

	  if (range === 0) {
	    warning(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `) ;
	    return 0;
	  }

	  const currentInRange = current - startOfRange;
	  const percentage = currentInRange / range;
	  return percentage;
	});

	var minScroll = 1;

	var getValueFromDistance = ((distanceToEdge, thresholds) => {
	  if (distanceToEdge > thresholds.startScrollingFrom) {
	    return 0;
	  }

	  if (distanceToEdge <= thresholds.maxScrollValueAt) {
	    return config$1.maxPixelScroll;
	  }

	  if (distanceToEdge === thresholds.startScrollingFrom) {
	    return minScroll;
	  }

	  const percentageFromMaxScrollValueAt = getPercentage({
	    startOfRange: thresholds.maxScrollValueAt,
	    endOfRange: thresholds.startScrollingFrom,
	    current: distanceToEdge
	  });
	  const percentageFromStartScrollingFrom = 1 - percentageFromMaxScrollValueAt;
	  const scroll = config$1.maxPixelScroll * config$1.ease(percentageFromStartScrollingFrom);
	  return Math.ceil(scroll);
	});

	const accelerateAt = config$1.durationDampening.accelerateAt;
	const stopAt = config$1.durationDampening.stopDampeningAt;
	var dampenValueByTime = ((proposedScroll, dragStartTime) => {
	  const startOfRange = dragStartTime;
	  const endOfRange = stopAt;
	  const now = Date.now();
	  const runTime = now - startOfRange;

	  if (runTime >= stopAt) {
	    return proposedScroll;
	  }

	  if (runTime < accelerateAt) {
	    return minScroll;
	  }

	  const betweenAccelerateAtAndStopAtPercentage = getPercentage({
	    startOfRange: accelerateAt,
	    endOfRange,
	    current: runTime
	  });
	  const scroll = proposedScroll * config$1.ease(betweenAccelerateAtAndStopAtPercentage);
	  return Math.ceil(scroll);
	});

	var getValue = (_ref => {
	  let {
	    distanceToEdge,
	    thresholds,
	    dragStartTime,
	    shouldUseTimeDampening
	  } = _ref;
	  const scroll = getValueFromDistance(distanceToEdge, thresholds);

	  if (scroll === 0) {
	    return 0;
	  }

	  if (!shouldUseTimeDampening) {
	    return scroll;
	  }

	  return Math.max(dampenValueByTime(scroll, dragStartTime), minScroll);
	});

	var getScrollOnAxis = (_ref => {
	  let {
	    container,
	    distanceToEdges,
	    dragStartTime,
	    axis,
	    shouldUseTimeDampening
	  } = _ref;
	  const thresholds = getDistanceThresholds(container, axis);
	  const isCloserToEnd = distanceToEdges[axis.end] < distanceToEdges[axis.start];

	  if (isCloserToEnd) {
	    return getValue({
	      distanceToEdge: distanceToEdges[axis.end],
	      thresholds,
	      dragStartTime,
	      shouldUseTimeDampening
	    });
	  }

	  return -1 * getValue({
	    distanceToEdge: distanceToEdges[axis.start],
	    thresholds,
	    dragStartTime,
	    shouldUseTimeDampening
	  });
	});

	var adjustForSizeLimits = (_ref => {
	  let {
	    container,
	    subject,
	    proposedScroll
	  } = _ref;
	  const isTooBigVertically = subject.height > container.height;
	  const isTooBigHorizontally = subject.width > container.width;

	  if (!isTooBigHorizontally && !isTooBigVertically) {
	    return proposedScroll;
	  }

	  if (isTooBigHorizontally && isTooBigVertically) {
	    return null;
	  }

	  return {
	    x: isTooBigHorizontally ? 0 : proposedScroll.x,
	    y: isTooBigVertically ? 0 : proposedScroll.y
	  };
	});

	const clean = apply(value => value === 0 ? 0 : value);
	var getScroll$1 = (_ref => {
	  let {
	    dragStartTime,
	    container,
	    subject,
	    center,
	    shouldUseTimeDampening
	  } = _ref;
	  const distanceToEdges = {
	    top: center.y - container.top,
	    right: container.right - center.x,
	    bottom: container.bottom - center.y,
	    left: center.x - container.left
	  };
	  const y = getScrollOnAxis({
	    container,
	    distanceToEdges,
	    dragStartTime,
	    axis: vertical,
	    shouldUseTimeDampening
	  });
	  const x = getScrollOnAxis({
	    container,
	    distanceToEdges,
	    dragStartTime,
	    axis: horizontal,
	    shouldUseTimeDampening
	  });
	  const required = clean({
	    x,
	    y
	  });

	  if (isEqual$1(required, origin)) {
	    return null;
	  }

	  const limited = adjustForSizeLimits({
	    container,
	    subject,
	    proposedScroll: required
	  });

	  if (!limited) {
	    return null;
	  }

	  return isEqual$1(limited, origin) ? null : limited;
	});

	const smallestSigned = apply(value => {
	  if (value === 0) {
	    return 0;
	  }

	  return value > 0 ? 1 : -1;
	});
	const getOverlap = (() => {
	  const getRemainder = (target, max) => {
	    if (target < 0) {
	      return target;
	    }

	    if (target > max) {
	      return target - max;
	    }

	    return 0;
	  };

	  return _ref => {
	    let {
	      current,
	      max,
	      change
	    } = _ref;
	    const targetScroll = add(current, change);
	    const overlap = {
	      x: getRemainder(targetScroll.x, max.x),
	      y: getRemainder(targetScroll.y, max.y)
	    };

	    if (isEqual$1(overlap, origin)) {
	      return null;
	    }

	    return overlap;
	  };
	})();
	const canPartiallyScroll = _ref2 => {
	  let {
	    max: rawMax,
	    current,
	    change
	  } = _ref2;
	  const max = {
	    x: Math.max(current.x, rawMax.x),
	    y: Math.max(current.y, rawMax.y)
	  };
	  const smallestChange = smallestSigned(change);
	  const overlap = getOverlap({
	    max,
	    current,
	    change: smallestChange
	  });

	  if (!overlap) {
	    return true;
	  }

	  if (smallestChange.x !== 0 && overlap.x === 0) {
	    return true;
	  }

	  if (smallestChange.y !== 0 && overlap.y === 0) {
	    return true;
	  }

	  return false;
	};
	const canScrollWindow = (viewport, change) => canPartiallyScroll({
	  current: viewport.scroll.current,
	  max: viewport.scroll.max,
	  change
	});
	const getWindowOverlap = (viewport, change) => {
	  if (!canScrollWindow(viewport, change)) {
	    return null;
	  }

	  const max = viewport.scroll.max;
	  const current = viewport.scroll.current;
	  return getOverlap({
	    current,
	    max,
	    change
	  });
	};
	const canScrollDroppable = (droppable, change) => {
	  const frame = droppable.frame;

	  if (!frame) {
	    return false;
	  }

	  return canPartiallyScroll({
	    current: frame.scroll.current,
	    max: frame.scroll.max,
	    change
	  });
	};
	const getDroppableOverlap = (droppable, change) => {
	  const frame = droppable.frame;

	  if (!frame) {
	    return null;
	  }

	  if (!canScrollDroppable(droppable, change)) {
	    return null;
	  }

	  return getOverlap({
	    current: frame.scroll.current,
	    max: frame.scroll.max,
	    change
	  });
	};

	var getWindowScrollChange = (_ref => {
	  let {
	    viewport,
	    subject,
	    center,
	    dragStartTime,
	    shouldUseTimeDampening
	  } = _ref;
	  const scroll = getScroll$1({
	    dragStartTime,
	    container: viewport.frame,
	    subject,
	    center,
	    shouldUseTimeDampening
	  });
	  return scroll && canScrollWindow(viewport, scroll) ? scroll : null;
	});

	var getDroppableScrollChange = (_ref => {
	  let {
	    droppable,
	    subject,
	    center,
	    dragStartTime,
	    shouldUseTimeDampening
	  } = _ref;
	  const frame = droppable.frame;

	  if (!frame) {
	    return null;
	  }

	  const scroll = getScroll$1({
	    dragStartTime,
	    container: frame.pageMarginBox,
	    subject,
	    center,
	    shouldUseTimeDampening
	  });
	  return scroll && canScrollDroppable(droppable, scroll) ? scroll : null;
	});

	var scroll = (_ref => {
	  let {
	    state,
	    dragStartTime,
	    shouldUseTimeDampening,
	    scrollWindow,
	    scrollDroppable
	  } = _ref;
	  const center = state.current.page.borderBoxCenter;
	  const draggable = state.dimensions.draggables[state.critical.draggable.id];
	  const subject = draggable.page.marginBox;

	  if (state.isWindowScrollAllowed) {
	    const viewport = state.viewport;
	    const change = getWindowScrollChange({
	      dragStartTime,
	      viewport,
	      subject,
	      center,
	      shouldUseTimeDampening
	    });

	    if (change) {
	      scrollWindow(change);
	      return;
	    }
	  }

	  const droppable = getBestScrollableDroppable({
	    center,
	    destination: whatIsDraggedOver(state.impact),
	    droppables: state.dimensions.droppables
	  });

	  if (!droppable) {
	    return;
	  }

	  const change = getDroppableScrollChange({
	    dragStartTime,
	    droppable,
	    subject,
	    center,
	    shouldUseTimeDampening
	  });

	  if (change) {
	    scrollDroppable(droppable.descriptor.id, change);
	  }
	});

	var createFluidScroller = (_ref => {
	  let {
	    scrollWindow,
	    scrollDroppable
	  } = _ref;
	  const scheduleWindowScroll = rafSchd__default["default"](scrollWindow);
	  const scheduleDroppableScroll = rafSchd__default["default"](scrollDroppable);
	  let dragging = null;

	  const tryScroll = state => {
	    !dragging ? invariant(false, 'Cannot fluid scroll if not dragging')  : void 0;
	    const {
	      shouldUseTimeDampening,
	      dragStartTime
	    } = dragging;
	    scroll({
	      state,
	      scrollWindow: scheduleWindowScroll,
	      scrollDroppable: scheduleDroppableScroll,
	      dragStartTime,
	      shouldUseTimeDampening
	    });
	  };

	  const start$1 = state => {
	    !!dragging ? invariant(false, 'Cannot start auto scrolling when already started')  : void 0;
	    const dragStartTime = Date.now();
	    let wasScrollNeeded = false;

	    const fakeScrollCallback = () => {
	      wasScrollNeeded = true;
	    };

	    scroll({
	      state,
	      dragStartTime: 0,
	      shouldUseTimeDampening: false,
	      scrollWindow: fakeScrollCallback,
	      scrollDroppable: fakeScrollCallback
	    });
	    dragging = {
	      dragStartTime,
	      shouldUseTimeDampening: wasScrollNeeded
	    };

	    if (wasScrollNeeded) {
	      tryScroll(state);
	    }
	  };

	  const stop = () => {
	    if (!dragging) {
	      return;
	    }

	    scheduleWindowScroll.cancel();
	    scheduleDroppableScroll.cancel();
	    dragging = null;
	  };

	  return {
	    start: start$1,
	    stop,
	    scroll: tryScroll
	  };
	});

	var createJumpScroller = (_ref => {
	  let {
	    move,
	    scrollDroppable,
	    scrollWindow
	  } = _ref;

	  const moveByOffset = (state, offset) => {
	    const client = add(state.current.client.selection, offset);
	    move({
	      client
	    });
	  };

	  const scrollDroppableAsMuchAsItCan = (droppable, change) => {
	    if (!canScrollDroppable(droppable, change)) {
	      return change;
	    }

	    const overlap = getDroppableOverlap(droppable, change);

	    if (!overlap) {
	      scrollDroppable(droppable.descriptor.id, change);
	      return null;
	    }

	    const whatTheDroppableCanScroll = subtract(change, overlap);
	    scrollDroppable(droppable.descriptor.id, whatTheDroppableCanScroll);
	    const remainder = subtract(change, whatTheDroppableCanScroll);
	    return remainder;
	  };

	  const scrollWindowAsMuchAsItCan = (isWindowScrollAllowed, viewport, change) => {
	    if (!isWindowScrollAllowed) {
	      return change;
	    }

	    if (!canScrollWindow(viewport, change)) {
	      return change;
	    }

	    const overlap = getWindowOverlap(viewport, change);

	    if (!overlap) {
	      scrollWindow(change);
	      return null;
	    }

	    const whatTheWindowCanScroll = subtract(change, overlap);
	    scrollWindow(whatTheWindowCanScroll);
	    const remainder = subtract(change, whatTheWindowCanScroll);
	    return remainder;
	  };

	  const jumpScroller = state => {
	    const request = state.scrollJumpRequest;

	    if (!request) {
	      return;
	    }

	    const destination = whatIsDraggedOver(state.impact);
	    !destination ? invariant(false, 'Cannot perform a jump scroll when there is no destination')  : void 0;
	    const droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);

	    if (!droppableRemainder) {
	      return;
	    }

	    const viewport = state.viewport;
	    const windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport, droppableRemainder);

	    if (!windowRemainder) {
	      return;
	    }

	    moveByOffset(state, windowRemainder);
	  };

	  return jumpScroller;
	});

	var createAutoScroller = (_ref => {
	  let {
	    scrollDroppable,
	    scrollWindow,
	    move
	  } = _ref;
	  const fluidScroller = createFluidScroller({
	    scrollWindow,
	    scrollDroppable
	  });
	  const jumpScroll = createJumpScroller({
	    move,
	    scrollWindow,
	    scrollDroppable
	  });

	  const scroll = state => {
	    if (state.phase !== 'DRAGGING') {
	      return;
	    }

	    if (state.movementMode === 'FLUID') {
	      fluidScroller.scroll(state);
	      return;
	    }

	    if (!state.scrollJumpRequest) {
	      return;
	    }

	    jumpScroll(state);
	  };

	  const scroller = {
	    scroll,
	    start: fluidScroller.start,
	    stop: fluidScroller.stop
	  };
	  return scroller;
	});

	const prefix = 'data-rfd';
	const dragHandle = (() => {
	  const base = `${prefix}-drag-handle`;
	  return {
	    base,
	    draggableId: `${base}-draggable-id`,
	    contextId: `${base}-context-id`
	  };
	})();
	const draggable = (() => {
	  const base = `${prefix}-draggable`;
	  return {
	    base,
	    contextId: `${base}-context-id`,
	    id: `${base}-id`
	  };
	})();
	const droppable = (() => {
	  const base = `${prefix}-droppable`;
	  return {
	    base,
	    contextId: `${base}-context-id`,
	    id: `${base}-id`
	  };
	})();
	const scrollContainer = {
	  contextId: `${prefix}-scroll-container-context-id`
	};

	const makeGetSelector = context => attribute => `[${attribute}="${context}"]`;

	const getStyles = (rules, property) => rules.map(rule => {
	  const value = rule.styles[property];

	  if (!value) {
	    return '';
	  }

	  return `${rule.selector} { ${value} }`;
	}).join(' ');

	const noPointerEvents = 'pointer-events: none;';
	var getStyles$1 = (contextId => {
	  const getSelector = makeGetSelector(contextId);

	  const dragHandle$1 = (() => {
	    const grabCursor = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
	    return {
	      selector: getSelector(dragHandle.contextId),
	      styles: {
	        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
	        resting: grabCursor,
	        dragging: noPointerEvents,
	        dropAnimating: grabCursor
	      }
	    };
	  })();

	  const draggable$1 = (() => {
	    const transition = `
      transition: ${transitions.outOfTheWay};
    `;
	    return {
	      selector: getSelector(draggable.contextId),
	      styles: {
	        dragging: transition,
	        dropAnimating: transition,
	        userCancel: transition
	      }
	    };
	  })();

	  const droppable$1 = {
	    selector: getSelector(droppable.contextId),
	    styles: {
	      always: `overflow-anchor: none;`
	    }
	  };
	  const body = {
	    selector: 'body',
	    styles: {
	      dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `
	    }
	  };
	  const rules = [draggable$1, dragHandle$1, droppable$1, body];
	  return {
	    always: getStyles(rules, 'always'),
	    resting: getStyles(rules, 'resting'),
	    dragging: getStyles(rules, 'dragging'),
	    dropAnimating: getStyles(rules, 'dropAnimating'),
	    userCancel: getStyles(rules, 'userCancel')
	  };
	});

	const useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? React.useLayoutEffect : React.useEffect;
	var useLayoutEffect = useIsomorphicLayoutEffect;

	const getHead = () => {
	  const head = document.querySelector('head');
	  !head ? invariant(false, 'Cannot find the head to append a style to')  : void 0;
	  return head;
	};

	const createStyleEl = nonce => {
	  const el = document.createElement('style');

	  if (nonce) {
	    el.setAttribute('nonce', nonce);
	  }

	  el.type = 'text/css';
	  return el;
	};

	function useStyleMarshal(contextId, nonce) {
	  const styles = useMemoOne.useMemo(() => getStyles$1(contextId), [contextId]);
	  const alwaysRef = React.useRef(null);
	  const dynamicRef = React.useRef(null);
	  const setDynamicStyle = useMemoOne.useCallback(memoizeOne__default["default"](proposed => {
	    const el = dynamicRef.current;
	    !el ? invariant(false, 'Cannot set dynamic style element if it is not set')  : void 0;
	    el.textContent = proposed;
	  }), []);
	  const setAlwaysStyle = useMemoOne.useCallback(proposed => {
	    const el = alwaysRef.current;
	    !el ? invariant(false, 'Cannot set dynamic style element if it is not set')  : void 0;
	    el.textContent = proposed;
	  }, []);
	  useLayoutEffect(() => {
	    !(!alwaysRef.current && !dynamicRef.current) ? invariant(false, 'style elements already mounted')  : void 0;
	    const always = createStyleEl(nonce);
	    const dynamic = createStyleEl(nonce);
	    alwaysRef.current = always;
	    dynamicRef.current = dynamic;
	    always.setAttribute(`${prefix}-always`, contextId);
	    dynamic.setAttribute(`${prefix}-dynamic`, contextId);
	    getHead().appendChild(always);
	    getHead().appendChild(dynamic);
	    setAlwaysStyle(styles.always);
	    setDynamicStyle(styles.resting);
	    return () => {
	      const remove = ref => {
	        const current = ref.current;
	        !current ? invariant(false, 'Cannot unmount ref as it is not set')  : void 0;
	        getHead().removeChild(current);
	        ref.current = null;
	      };

	      remove(alwaysRef);
	      remove(dynamicRef);
	    };
	  }, [nonce, setAlwaysStyle, setDynamicStyle, styles.always, styles.resting, contextId]);
	  const dragging = useMemoOne.useCallback(() => setDynamicStyle(styles.dragging), [setDynamicStyle, styles.dragging]);
	  const dropping = useMemoOne.useCallback(reason => {
	    if (reason === 'DROP') {
	      setDynamicStyle(styles.dropAnimating);
	      return;
	    }

	    setDynamicStyle(styles.userCancel);
	  }, [setDynamicStyle, styles.dropAnimating, styles.userCancel]);
	  const resting = useMemoOne.useCallback(() => {
	    if (!dynamicRef.current) {
	      return;
	    }

	    setDynamicStyle(styles.resting);
	  }, [setDynamicStyle, styles.resting]);
	  const marshal = useMemoOne.useMemo(() => ({
	    dragging,
	    dropping,
	    resting
	  }), [dragging, dropping, resting]);
	  return marshal;
	}

	function querySelectorAll(parentNode, selector) {
	  return Array.from(parentNode.querySelectorAll(selector));
	}

	var getWindowFromEl = (el => {
	  var _el$ownerDocument;

	  return (el == null ? void 0 : (_el$ownerDocument = el.ownerDocument) == null ? void 0 : _el$ownerDocument.defaultView) || window;
	});

	function isHtmlElement(el) {
	  return el instanceof getWindowFromEl(el).HTMLElement;
	}

	function findDragHandle(contextId, draggableId) {
	  const selector = `[${dragHandle.contextId}="${contextId}"]`;
	  const possible = querySelectorAll(document, selector);

	  if (!possible.length) {
	    warning(`Unable to find any drag handles in the context "${contextId}"`) ;
	    return null;
	  }

	  const handle = possible.find(el => {
	    return el.getAttribute(dragHandle.draggableId) === draggableId;
	  });

	  if (!handle) {
	    warning(`Unable to find drag handle with id "${draggableId}" as no handle with a matching id was found`) ;
	    return null;
	  }

	  if (!isHtmlElement(handle)) {
	    warning('drag handle needs to be a HTMLElement') ;
	    return null;
	  }

	  return handle;
	}

	function useFocusMarshal(contextId) {
	  const entriesRef = React.useRef({});
	  const recordRef = React.useRef(null);
	  const restoreFocusFrameRef = React.useRef(null);
	  const isMountedRef = React.useRef(false);
	  const register = useMemoOne.useCallback(function register(id, focus) {
	    const entry = {
	      id,
	      focus
	    };
	    entriesRef.current[id] = entry;
	    return function unregister() {
	      const entries = entriesRef.current;
	      const current = entries[id];

	      if (current !== entry) {
	        delete entries[id];
	      }
	    };
	  }, []);
	  const tryGiveFocus = useMemoOne.useCallback(function tryGiveFocus(tryGiveFocusTo) {
	    const handle = findDragHandle(contextId, tryGiveFocusTo);

	    if (handle && handle !== document.activeElement) {
	      handle.focus();
	    }
	  }, [contextId]);
	  const tryShiftRecord = useMemoOne.useCallback(function tryShiftRecord(previous, redirectTo) {
	    if (recordRef.current === previous) {
	      recordRef.current = redirectTo;
	    }
	  }, []);
	  const tryRestoreFocusRecorded = useMemoOne.useCallback(function tryRestoreFocusRecorded() {
	    if (restoreFocusFrameRef.current) {
	      return;
	    }

	    if (!isMountedRef.current) {
	      return;
	    }

	    restoreFocusFrameRef.current = requestAnimationFrame(() => {
	      restoreFocusFrameRef.current = null;
	      const record = recordRef.current;

	      if (record) {
	        tryGiveFocus(record);
	      }
	    });
	  }, [tryGiveFocus]);
	  const tryRecordFocus = useMemoOne.useCallback(function tryRecordFocus(id) {
	    recordRef.current = null;
	    const focused = document.activeElement;

	    if (!focused) {
	      return;
	    }

	    if (focused.getAttribute(dragHandle.draggableId) !== id) {
	      return;
	    }

	    recordRef.current = id;
	  }, []);
	  useLayoutEffect(() => {
	    isMountedRef.current = true;
	    return function clearFrameOnUnmount() {
	      isMountedRef.current = false;
	      const frameId = restoreFocusFrameRef.current;

	      if (frameId) {
	        cancelAnimationFrame(frameId);
	      }
	    };
	  }, []);
	  const marshal = useMemoOne.useMemo(() => ({
	    register,
	    tryRecordFocus,
	    tryRestoreFocusRecorded,
	    tryShiftRecord
	  }), [register, tryRecordFocus, tryRestoreFocusRecorded, tryShiftRecord]);
	  return marshal;
	}

	function createRegistry() {
	  const entries = {
	    draggables: {},
	    droppables: {}
	  };
	  const subscribers = [];

	  function subscribe(cb) {
	    subscribers.push(cb);
	    return function unsubscribe() {
	      const index = subscribers.indexOf(cb);

	      if (index === -1) {
	        return;
	      }

	      subscribers.splice(index, 1);
	    };
	  }

	  function notify(event) {
	    if (subscribers.length) {
	      subscribers.forEach(cb => cb(event));
	    }
	  }

	  function findDraggableById(id) {
	    return entries.draggables[id] || null;
	  }

	  function getDraggableById(id) {
	    const entry = findDraggableById(id);
	    !entry ? invariant(false, `Cannot find draggable entry with id [${id}]`)  : void 0;
	    return entry;
	  }

	  const draggableAPI = {
	    register: entry => {
	      entries.draggables[entry.descriptor.id] = entry;
	      notify({
	        type: 'ADDITION',
	        value: entry
	      });
	    },
	    update: (entry, last) => {
	      const current = entries.draggables[last.descriptor.id];

	      if (!current) {
	        return;
	      }

	      if (current.uniqueId !== entry.uniqueId) {
	        return;
	      }

	      delete entries.draggables[last.descriptor.id];
	      entries.draggables[entry.descriptor.id] = entry;
	    },
	    unregister: entry => {
	      const draggableId = entry.descriptor.id;
	      const current = findDraggableById(draggableId);

	      if (!current) {
	        return;
	      }

	      if (entry.uniqueId !== current.uniqueId) {
	        return;
	      }

	      delete entries.draggables[draggableId];

	      if (entries.droppables[entry.descriptor.droppableId]) {
	        notify({
	          type: 'REMOVAL',
	          value: entry
	        });
	      }
	    },
	    getById: getDraggableById,
	    findById: findDraggableById,
	    exists: id => Boolean(findDraggableById(id)),
	    getAllByType: type => Object.values(entries.draggables).filter(entry => entry.descriptor.type === type)
	  };

	  function findDroppableById(id) {
	    return entries.droppables[id] || null;
	  }

	  function getDroppableById(id) {
	    const entry = findDroppableById(id);
	    !entry ? invariant(false, `Cannot find droppable entry with id [${id}]`)  : void 0;
	    return entry;
	  }

	  const droppableAPI = {
	    register: entry => {
	      entries.droppables[entry.descriptor.id] = entry;
	    },
	    unregister: entry => {
	      const current = findDroppableById(entry.descriptor.id);

	      if (!current) {
	        return;
	      }

	      if (entry.uniqueId !== current.uniqueId) {
	        return;
	      }

	      delete entries.droppables[entry.descriptor.id];
	    },
	    getById: getDroppableById,
	    findById: findDroppableById,
	    exists: id => Boolean(findDroppableById(id)),
	    getAllByType: type => Object.values(entries.droppables).filter(entry => entry.descriptor.type === type)
	  };

	  function clean() {
	    entries.draggables = {};
	    entries.droppables = {};
	    subscribers.length = 0;
	  }

	  return {
	    draggable: draggableAPI,
	    droppable: droppableAPI,
	    subscribe,
	    clean
	  };
	}

	function useRegistry() {
	  const registry = useMemoOne.useMemo(createRegistry, []);
	  React.useEffect(() => {
	    return function unmount() {
	      if (React__default["default"].version.startsWith('16') || React__default["default"].version.startsWith('17')) {
	        requestAnimationFrame(registry.clean);
	      } else {
	        registry.clean();
	      }
	    };
	  }, [registry]);
	  return registry;
	}

	var StoreContext = React__default["default"].createContext(null);

	var getBodyElement = (() => {
	  const body = document.body;
	  !body ? invariant(false, 'Cannot find document.body')  : void 0;
	  return body;
	});

	const visuallyHidden = {
	  position: 'absolute',
	  width: '1px',
	  height: '1px',
	  margin: '-1px',
	  border: '0',
	  padding: '0',
	  overflow: 'hidden',
	  clip: 'rect(0 0 0 0)',
	  'clip-path': 'inset(100%)'
	};
	var visuallyHidden$1 = visuallyHidden;

	const getId = contextId => `rfd-announcement-${contextId}`;
	function useAnnouncer(contextId) {
	  const id = useMemoOne.useMemo(() => getId(contextId), [contextId]);
	  const ref = React.useRef(null);
	  React.useEffect(function setup() {
	    const el = document.createElement('div');
	    ref.current = el;
	    el.id = id;
	    el.setAttribute('aria-live', 'assertive');
	    el.setAttribute('aria-atomic', 'true');

	    _extends__default["default"](el.style, visuallyHidden$1);

	    getBodyElement().appendChild(el);
	    return function cleanup() {
	      setTimeout(function remove() {
	        const body = getBodyElement();

	        if (body.contains(el)) {
	          body.removeChild(el);
	        }

	        if (el === ref.current) {
	          ref.current = null;
	        }
	      });
	    };
	  }, [id]);
	  const announce = useMemoOne.useCallback(message => {
	    const el = ref.current;

	    if (el) {
	      el.textContent = message;
	      return;
	    }

	    warning(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${message}"
    `) ;
	  }, []);
	  return announce;
	}

	let count$1 = 0;
	const defaults = {
	  separator: '::'
	};
	function reset$1() {
	  count$1 = 0;
	}
	function useUniqueId(prefix, options) {
	  if (options === void 0) {
	    options = defaults;
	  }

	  return useMemoOne.useMemo(() => `${prefix}${options.separator}${count$1++}`, [options.separator, prefix]);
	}

	function getElementId(_ref) {
	  let {
	    contextId,
	    uniqueId
	  } = _ref;
	  return `rfd-hidden-text-${contextId}-${uniqueId}`;
	}
	function useHiddenTextElement(_ref2) {
	  let {
	    contextId,
	    text
	  } = _ref2;
	  const uniqueId = useUniqueId('hidden-text', {
	    separator: '-'
	  });
	  const id = useMemoOne.useMemo(() => getElementId({
	    contextId,
	    uniqueId
	  }), [uniqueId, contextId]);
	  React.useEffect(function mount() {
	    const el = document.createElement('div');
	    el.id = id;
	    el.textContent = text;
	    el.style.display = 'none';
	    getBodyElement().appendChild(el);
	    return function unmount() {
	      const body = getBodyElement();

	      if (body.contains(el)) {
	        body.removeChild(el);
	      }
	    };
	  }, [id, text]);
	  return id;
	}

	var AppContext = React__default["default"].createContext(null);

	var peerDependencies = {
		react: "^16.8.5 || ^17.0.0 || ^18.0.0",
		"react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
	};

	const semver = /(\d+)\.(\d+)\.(\d+)/;

	const getVersion = value => {
	  const result = semver.exec(value);
	  !(result != null) ? invariant(false, `Unable to parse React version ${value}`)  : void 0;
	  const major = Number(result[1]);
	  const minor = Number(result[2]);
	  const patch = Number(result[3]);
	  return {
	    major,
	    minor,
	    patch,
	    raw: value
	  };
	};

	const isSatisfied = (expected, actual) => {
	  if (actual.major > expected.major) {
	    return true;
	  }

	  if (actual.major < expected.major) {
	    return false;
	  }

	  if (actual.minor > expected.minor) {
	    return true;
	  }

	  if (actual.minor < expected.minor) {
	    return false;
	  }

	  return actual.patch >= expected.patch;
	};

	var checkReactVersion = ((peerDepValue, actualValue) => {
	  const peerDep = getVersion(peerDepValue);
	  const actual = getVersion(actualValue);

	  if (isSatisfied(peerDep, actual)) {
	    return;
	  }

	  warning(`
    React version: [${actual.raw}]
    does not satisfy expected peer dependency version: [${peerDep.raw}]

    This can result in run time bugs, and even fatal crashes
  `) ;
	});

	const suffix = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
	var checkDoctype = (doc => {
	  const doctype = doc.doctype;

	  if (!doctype) {
	    warning(`
      No <!doctype html> found.

      ${suffix}
    `) ;
	    return;
	  }

	  if (doctype.name.toLowerCase() !== 'html') {
	    warning(`
      Unexpected <!doctype> found: (${doctype.name})

      ${suffix}
    `) ;
	  }

	  if (doctype.publicId !== '') {
	    warning(`
      Unexpected <!doctype> publicId found: (${doctype.publicId})
      A html5 doctype does not have a publicId

      ${suffix}
    `) ;
	  }
	});

	function useDev(useHook) {
	  {
	    useHook();
	  }
	}

	function useDevSetupWarning(fn, inputs) {
	  useDev(() => {
	    React.useEffect(() => {
	      try {
	        fn();
	      } catch (e) {
	        error(`
          A setup problem was encountered.

          > ${e.message}
        `);
	      }
	    }, inputs);
	  });
	}

	function useStartupValidation() {
	  useDevSetupWarning(() => {
	    checkReactVersion(peerDependencies.react, React__default["default"].version);
	    checkDoctype(document);
	  }, []);
	}

	function usePrevious(current) {
	  const ref = React.useRef(current);
	  React.useEffect(() => {
	    ref.current = current;
	  });
	  return ref;
	}

	function create() {
	  let lock = null;

	  function isClaimed() {
	    return Boolean(lock);
	  }

	  function isActive(value) {
	    return value === lock;
	  }

	  function claim(abandon) {
	    !!lock ? invariant(false, 'Cannot claim lock as it is already claimed')  : void 0;
	    const newLock = {
	      abandon
	    };
	    lock = newLock;
	    return newLock;
	  }

	  function release() {
	    !lock ? invariant(false, 'Cannot release lock when there is no lock')  : void 0;
	    lock = null;
	  }

	  function tryAbandon() {
	    if (lock) {
	      lock.abandon();
	      release();
	    }
	  }

	  return {
	    isClaimed,
	    isActive,
	    claim,
	    release,
	    tryAbandon
	  };
	}

	function isDragging(state) {
	  if (state.phase === 'IDLE' || state.phase === 'DROP_ANIMATING') {
	    return false;
	  }

	  return state.isDragging;
	}

	const tab = 9;
	const enter = 13;
	const escape = 27;
	const space = 32;
	const pageUp = 33;
	const pageDown = 34;
	const end = 35;
	const home = 36;
	const arrowLeft = 37;
	const arrowUp = 38;
	const arrowRight = 39;
	const arrowDown = 40;

	const preventedKeys = {
	  [enter]: true,
	  [tab]: true
	};
	var preventStandardKeyEvents = (event => {
	  if (preventedKeys[event.keyCode]) {
	    event.preventDefault();
	  }
	});

	const supportedEventName = (() => {
	  const base = 'visibilitychange';

	  if (typeof document === 'undefined') {
	    return base;
	  }

	  const candidates = [base, `ms${base}`, `webkit${base}`, `moz${base}`, `o${base}`];
	  const supported = candidates.find(eventName => `on${eventName}` in document);
	  return supported || base;
	})();

	var supportedPageVisibilityEventName = supportedEventName;

	const primaryButton = 0;
	const sloppyClickThreshold = 5;

	function isSloppyClickThresholdExceeded(original, current) {
	  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
	}

	const idle$1 = {
	  type: 'IDLE'
	};

	function getCaptureBindings(_ref) {
	  let {
	    cancel,
	    completed,
	    getPhase,
	    setPhase
	  } = _ref;
	  return [{
	    eventName: 'mousemove',
	    fn: event => {
	      const {
	        button,
	        clientX,
	        clientY
	      } = event;

	      if (button !== primaryButton) {
	        return;
	      }

	      const point = {
	        x: clientX,
	        y: clientY
	      };
	      const phase = getPhase();

	      if (phase.type === 'DRAGGING') {
	        event.preventDefault();
	        phase.actions.move(point);
	        return;
	      }

	      !(phase.type === 'PENDING') ? invariant(false, 'Cannot be IDLE')  : void 0;
	      const pending = phase.point;

	      if (!isSloppyClickThresholdExceeded(pending, point)) {
	        return;
	      }

	      event.preventDefault();
	      const actions = phase.actions.fluidLift(point);
	      setPhase({
	        type: 'DRAGGING',
	        actions
	      });
	    }
	  }, {
	    eventName: 'mouseup',
	    fn: event => {
	      const phase = getPhase();

	      if (phase.type !== 'DRAGGING') {
	        cancel();
	        return;
	      }

	      event.preventDefault();
	      phase.actions.drop({
	        shouldBlockNextClick: true
	      });
	      completed();
	    }
	  }, {
	    eventName: 'mousedown',
	    fn: event => {
	      if (getPhase().type === 'DRAGGING') {
	        event.preventDefault();
	      }

	      cancel();
	    }
	  }, {
	    eventName: 'keydown',
	    fn: event => {
	      const phase = getPhase();

	      if (phase.type === 'PENDING') {
	        cancel();
	        return;
	      }

	      if (event.keyCode === escape) {
	        event.preventDefault();
	        cancel();
	        return;
	      }

	      preventStandardKeyEvents(event);
	    }
	  }, {
	    eventName: 'resize',
	    fn: cancel
	  }, {
	    eventName: 'scroll',
	    options: {
	      passive: true,
	      capture: false
	    },
	    fn: () => {
	      if (getPhase().type === 'PENDING') {
	        cancel();
	      }
	    }
	  }, {
	    eventName: 'webkitmouseforcedown',
	    fn: event => {
	      const phase = getPhase();
	      !(phase.type !== 'IDLE') ? invariant(false, 'Unexpected phase')  : void 0;

	      if (phase.actions.shouldRespectForcePress()) {
	        cancel();
	        return;
	      }

	      event.preventDefault();
	    }
	  }, {
	    eventName: supportedPageVisibilityEventName,
	    fn: cancel
	  }];
	}

	function useMouseSensor(api) {
	  const phaseRef = React.useRef(idle$1);
	  const unbindEventsRef = React.useRef(noop$2);
	  const startCaptureBinding = useMemoOne.useMemo(() => ({
	    eventName: 'mousedown',
	    fn: function onMouseDown(event) {
	      if (event.defaultPrevented) {
	        return;
	      }

	      if (event.button !== primaryButton) {
	        return;
	      }

	      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
	        return;
	      }

	      const draggableId = api.findClosestDraggableId(event);

	      if (!draggableId) {
	        return;
	      }

	      const actions = api.tryGetLock(draggableId, stop, {
	        sourceEvent: event
	      });

	      if (!actions) {
	        return;
	      }

	      event.preventDefault();
	      const point = {
	        x: event.clientX,
	        y: event.clientY
	      };
	      unbindEventsRef.current();
	      startPendingDrag(actions, point);
	    }
	  }), [api]);
	  const preventForcePressBinding = useMemoOne.useMemo(() => ({
	    eventName: 'webkitmouseforcewillbegin',
	    fn: event => {
	      if (event.defaultPrevented) {
	        return;
	      }

	      const id = api.findClosestDraggableId(event);

	      if (!id) {
	        return;
	      }

	      const options = api.findOptionsForDraggable(id);

	      if (!options) {
	        return;
	      }

	      if (options.shouldRespectForcePress) {
	        return;
	      }

	      if (!api.canGetLock(id)) {
	        return;
	      }

	      event.preventDefault();
	    }
	  }), [api]);
	  const listenForCapture = useMemoOne.useCallback(function listenForCapture() {
	    const options = {
	      passive: false,
	      capture: true
	    };
	    unbindEventsRef.current = bindEvents(window, [preventForcePressBinding, startCaptureBinding], options);
	  }, [preventForcePressBinding, startCaptureBinding]);
	  const stop = useMemoOne.useCallback(() => {
	    const current = phaseRef.current;

	    if (current.type === 'IDLE') {
	      return;
	    }

	    phaseRef.current = idle$1;
	    unbindEventsRef.current();
	    listenForCapture();
	  }, [listenForCapture]);
	  const cancel = useMemoOne.useCallback(() => {
	    const phase = phaseRef.current;
	    stop();

	    if (phase.type === 'DRAGGING') {
	      phase.actions.cancel({
	        shouldBlockNextClick: true
	      });
	    }

	    if (phase.type === 'PENDING') {
	      phase.actions.abort();
	    }
	  }, [stop]);
	  const bindCapturingEvents = useMemoOne.useCallback(function bindCapturingEvents() {
	    const options = {
	      capture: true,
	      passive: false
	    };
	    const bindings = getCaptureBindings({
	      cancel,
	      completed: stop,
	      getPhase: () => phaseRef.current,
	      setPhase: phase => {
	        phaseRef.current = phase;
	      }
	    });
	    unbindEventsRef.current = bindEvents(window, bindings, options);
	  }, [cancel, stop]);
	  const startPendingDrag = useMemoOne.useCallback(function startPendingDrag(actions, point) {
	    !(phaseRef.current.type === 'IDLE') ? invariant(false, 'Expected to move from IDLE to PENDING drag')  : void 0;
	    phaseRef.current = {
	      type: 'PENDING',
	      point,
	      actions
	    };
	    bindCapturingEvents();
	  }, [bindCapturingEvents]);
	  useLayoutEffect(function mount() {
	    listenForCapture();
	    return function unmount() {
	      unbindEventsRef.current();
	    };
	  }, [listenForCapture]);
	}

	function noop$1() {}

	const scrollJumpKeys = {
	  [pageDown]: true,
	  [pageUp]: true,
	  [home]: true,
	  [end]: true
	};

	function getDraggingBindings(actions, stop) {
	  function cancel() {
	    stop();
	    actions.cancel();
	  }

	  function drop() {
	    stop();
	    actions.drop();
	  }

	  return [{
	    eventName: 'keydown',
	    fn: event => {
	      if (event.keyCode === escape) {
	        event.preventDefault();
	        cancel();
	        return;
	      }

	      if (event.keyCode === space) {
	        event.preventDefault();
	        drop();
	        return;
	      }

	      if (event.keyCode === arrowDown) {
	        event.preventDefault();
	        actions.moveDown();
	        return;
	      }

	      if (event.keyCode === arrowUp) {
	        event.preventDefault();
	        actions.moveUp();
	        return;
	      }

	      if (event.keyCode === arrowRight) {
	        event.preventDefault();
	        actions.moveRight();
	        return;
	      }

	      if (event.keyCode === arrowLeft) {
	        event.preventDefault();
	        actions.moveLeft();
	        return;
	      }

	      if (scrollJumpKeys[event.keyCode]) {
	        event.preventDefault();
	        return;
	      }

	      preventStandardKeyEvents(event);
	    }
	  }, {
	    eventName: 'mousedown',
	    fn: cancel
	  }, {
	    eventName: 'mouseup',
	    fn: cancel
	  }, {
	    eventName: 'click',
	    fn: cancel
	  }, {
	    eventName: 'touchstart',
	    fn: cancel
	  }, {
	    eventName: 'resize',
	    fn: cancel
	  }, {
	    eventName: 'wheel',
	    fn: cancel,
	    options: {
	      passive: true
	    }
	  }, {
	    eventName: supportedPageVisibilityEventName,
	    fn: cancel
	  }];
	}

	function useKeyboardSensor(api) {
	  const unbindEventsRef = React.useRef(noop$1);
	  const startCaptureBinding = useMemoOne.useMemo(() => ({
	    eventName: 'keydown',
	    fn: function onKeyDown(event) {
	      if (event.defaultPrevented) {
	        return;
	      }

	      if (event.keyCode !== space) {
	        return;
	      }

	      const draggableId = api.findClosestDraggableId(event);

	      if (!draggableId) {
	        return;
	      }

	      const preDrag = api.tryGetLock(draggableId, stop, {
	        sourceEvent: event
	      });

	      if (!preDrag) {
	        return;
	      }

	      event.preventDefault();
	      let isCapturing = true;
	      const actions = preDrag.snapLift();
	      unbindEventsRef.current();

	      function stop() {
	        !isCapturing ? invariant(false, 'Cannot stop capturing a keyboard drag when not capturing')  : void 0;
	        isCapturing = false;
	        unbindEventsRef.current();
	        listenForCapture();
	      }

	      unbindEventsRef.current = bindEvents(window, getDraggingBindings(actions, stop), {
	        capture: true,
	        passive: false
	      });
	    }
	  }), [api]);
	  const listenForCapture = useMemoOne.useCallback(function tryStartCapture() {
	    const options = {
	      passive: false,
	      capture: true
	    };
	    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
	  }, [startCaptureBinding]);
	  useLayoutEffect(function mount() {
	    listenForCapture();
	    return function unmount() {
	      unbindEventsRef.current();
	    };
	  }, [listenForCapture]);
	}

	const idle = {
	  type: 'IDLE'
	};
	const timeForLongPress = 120;
	const forcePressThreshold = 0.15;

	function getWindowBindings(_ref) {
	  let {
	    cancel,
	    getPhase
	  } = _ref;
	  return [{
	    eventName: 'orientationchange',
	    fn: cancel
	  }, {
	    eventName: 'resize',
	    fn: cancel
	  }, {
	    eventName: 'contextmenu',
	    fn: event => {
	      event.preventDefault();
	    }
	  }, {
	    eventName: 'keydown',
	    fn: event => {
	      if (getPhase().type !== 'DRAGGING') {
	        cancel();
	        return;
	      }

	      if (event.keyCode === escape) {
	        event.preventDefault();
	      }

	      cancel();
	    }
	  }, {
	    eventName: supportedPageVisibilityEventName,
	    fn: cancel
	  }];
	}

	function getHandleBindings(_ref2) {
	  let {
	    cancel,
	    completed,
	    getPhase
	  } = _ref2;
	  return [{
	    eventName: 'touchmove',
	    options: {
	      capture: false
	    },
	    fn: event => {
	      const phase = getPhase();

	      if (phase.type !== 'DRAGGING') {
	        cancel();
	        return;
	      }

	      phase.hasMoved = true;
	      const {
	        clientX,
	        clientY
	      } = event.touches[0];
	      const point = {
	        x: clientX,
	        y: clientY
	      };
	      event.preventDefault();
	      phase.actions.move(point);
	    }
	  }, {
	    eventName: 'touchend',
	    fn: event => {
	      const phase = getPhase();

	      if (phase.type !== 'DRAGGING') {
	        cancel();
	        return;
	      }

	      event.preventDefault();
	      phase.actions.drop({
	        shouldBlockNextClick: true
	      });
	      completed();
	    }
	  }, {
	    eventName: 'touchcancel',
	    fn: event => {
	      if (getPhase().type !== 'DRAGGING') {
	        cancel();
	        return;
	      }

	      event.preventDefault();
	      cancel();
	    }
	  }, {
	    eventName: 'touchforcechange',
	    fn: event => {
	      const phase = getPhase();
	      !(phase.type !== 'IDLE') ? invariant(false)  : void 0;
	      const touch = event.touches[0];

	      if (!touch) {
	        return;
	      }

	      const isForcePress = touch.force >= forcePressThreshold;

	      if (!isForcePress) {
	        return;
	      }

	      const shouldRespect = phase.actions.shouldRespectForcePress();

	      if (phase.type === 'PENDING') {
	        if (shouldRespect) {
	          cancel();
	        }

	        return;
	      }

	      if (shouldRespect) {
	        if (phase.hasMoved) {
	          event.preventDefault();
	          return;
	        }

	        cancel();
	        return;
	      }

	      event.preventDefault();
	    }
	  }, {
	    eventName: supportedPageVisibilityEventName,
	    fn: cancel
	  }];
	}

	function useTouchSensor(api) {
	  const phaseRef = React.useRef(idle);
	  const unbindEventsRef = React.useRef(noop$2);
	  const getPhase = useMemoOne.useCallback(function getPhase() {
	    return phaseRef.current;
	  }, []);
	  const setPhase = useMemoOne.useCallback(function setPhase(phase) {
	    phaseRef.current = phase;
	  }, []);
	  const startCaptureBinding = useMemoOne.useMemo(() => ({
	    eventName: 'touchstart',
	    fn: function onTouchStart(event) {
	      if (event.defaultPrevented) {
	        return;
	      }

	      const draggableId = api.findClosestDraggableId(event);

	      if (!draggableId) {
	        return;
	      }

	      const actions = api.tryGetLock(draggableId, stop, {
	        sourceEvent: event
	      });

	      if (!actions) {
	        return;
	      }

	      const touch = event.touches[0];
	      const {
	        clientX,
	        clientY
	      } = touch;
	      const point = {
	        x: clientX,
	        y: clientY
	      };
	      unbindEventsRef.current();
	      startPendingDrag(actions, point);
	    }
	  }), [api]);
	  const listenForCapture = useMemoOne.useCallback(function listenForCapture() {
	    const options = {
	      capture: true,
	      passive: false
	    };
	    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
	  }, [startCaptureBinding]);
	  const stop = useMemoOne.useCallback(() => {
	    const current = phaseRef.current;

	    if (current.type === 'IDLE') {
	      return;
	    }

	    if (current.type === 'PENDING') {
	      clearTimeout(current.longPressTimerId);
	    }

	    setPhase(idle);
	    unbindEventsRef.current();
	    listenForCapture();
	  }, [listenForCapture, setPhase]);
	  const cancel = useMemoOne.useCallback(() => {
	    const phase = phaseRef.current;
	    stop();

	    if (phase.type === 'DRAGGING') {
	      phase.actions.cancel({
	        shouldBlockNextClick: true
	      });
	    }

	    if (phase.type === 'PENDING') {
	      phase.actions.abort();
	    }
	  }, [stop]);
	  const bindCapturingEvents = useMemoOne.useCallback(function bindCapturingEvents() {
	    const options = {
	      capture: true,
	      passive: false
	    };
	    const args = {
	      cancel,
	      completed: stop,
	      getPhase
	    };
	    const unbindTarget = bindEvents(window, getHandleBindings(args), options);
	    const unbindWindow = bindEvents(window, getWindowBindings(args), options);

	    unbindEventsRef.current = function unbindAll() {
	      unbindTarget();
	      unbindWindow();
	    };
	  }, [cancel, getPhase, stop]);
	  const startDragging = useMemoOne.useCallback(function startDragging() {
	    const phase = getPhase();
	    !(phase.type === 'PENDING') ? invariant(false, `Cannot start dragging from phase ${phase.type}`)  : void 0;
	    const actions = phase.actions.fluidLift(phase.point);
	    setPhase({
	      type: 'DRAGGING',
	      actions,
	      hasMoved: false
	    });
	  }, [getPhase, setPhase]);
	  const startPendingDrag = useMemoOne.useCallback(function startPendingDrag(actions, point) {
	    !(getPhase().type === 'IDLE') ? invariant(false, 'Expected to move from IDLE to PENDING drag')  : void 0;
	    const longPressTimerId = setTimeout(startDragging, timeForLongPress);
	    setPhase({
	      type: 'PENDING',
	      point,
	      actions,
	      longPressTimerId
	    });
	    bindCapturingEvents();
	  }, [bindCapturingEvents, getPhase, setPhase, startDragging]);
	  useLayoutEffect(function mount() {
	    listenForCapture();
	    return function unmount() {
	      unbindEventsRef.current();
	      const phase = getPhase();

	      if (phase.type === 'PENDING') {
	        clearTimeout(phase.longPressTimerId);
	        setPhase(idle);
	      }
	    };
	  }, [getPhase, listenForCapture, setPhase]);
	  useLayoutEffect(function webkitHack() {
	    const unbind = bindEvents(window, [{
	      eventName: 'touchmove',
	      fn: () => {},
	      options: {
	        capture: false,
	        passive: false
	      }
	    }]);
	    return unbind;
	  }, []);
	}

	function useValidateSensorHooks(sensorHooks) {
	  useDev(() => {
	    const previousRef = usePrevious(sensorHooks);
	    useDevSetupWarning(() => {
	      !(previousRef.current.length === sensorHooks.length) ? "development" !== "production" ? invariant(false, 'Cannot change the amount of sensor hooks after mounting') : invariant(false) : void 0;
	    });
	  });
	}

	const interactiveTagNames = ['input', 'button', 'textarea', 'select', 'option', 'optgroup', 'video', 'audio'];

	function isAnInteractiveElement(parent, current) {
	  if (current == null) {
	    return false;
	  }

	  const hasAnInteractiveTag = interactiveTagNames.includes(current.tagName.toLowerCase());

	  if (hasAnInteractiveTag) {
	    return true;
	  }

	  const attribute = current.getAttribute('contenteditable');

	  if (attribute === 'true' || attribute === '') {
	    return true;
	  }

	  if (current === parent) {
	    return false;
	  }

	  return isAnInteractiveElement(parent, current.parentElement);
	}

	function isEventInInteractiveElement(draggable, event) {
	  const target = event.target;

	  if (!isHtmlElement(target)) {
	    return false;
	  }

	  return isAnInteractiveElement(draggable, target);
	}

	var getBorderBoxCenterPosition = (el => cssBoxModel.getRect(el.getBoundingClientRect()).center);

	function isElement(el) {
	  return el instanceof getWindowFromEl(el).Element;
	}

	const supportedMatchesName = (() => {
	  const base = 'matches';

	  if (typeof document === 'undefined') {
	    return base;
	  }

	  const candidates = [base, 'msMatchesSelector', 'webkitMatchesSelector'];
	  const value = candidates.find(name => name in Element.prototype);
	  return value || base;
	})();

	function closestPonyfill(el, selector) {
	  if (el == null) {
	    return null;
	  }

	  if (el[supportedMatchesName](selector)) {
	    return el;
	  }

	  return closestPonyfill(el.parentElement, selector);
	}

	function closest(el, selector) {
	  if (el.closest) {
	    return el.closest(selector);
	  }

	  return closestPonyfill(el, selector);
	}

	function getSelector(contextId) {
	  return `[${dragHandle.contextId}="${contextId}"]`;
	}

	function findClosestDragHandleFromEvent(contextId, event) {
	  const target = event.target;

	  if (!isElement(target)) {
	    warning('event.target must be a Element') ;
	    return null;
	  }

	  const selector = getSelector(contextId);
	  const handle = closest(target, selector);

	  if (!handle) {
	    return null;
	  }

	  if (!isHtmlElement(handle)) {
	    warning('drag handle must be a HTMLElement') ;
	    return null;
	  }

	  return handle;
	}

	function tryGetClosestDraggableIdFromEvent(contextId, event) {
	  const handle = findClosestDragHandleFromEvent(contextId, event);

	  if (!handle) {
	    return null;
	  }

	  return handle.getAttribute(dragHandle.draggableId);
	}

	function findDraggable(contextId, draggableId) {
	  const selector = `[${draggable.contextId}="${contextId}"]`;
	  const possible = querySelectorAll(document, selector);
	  const draggable$1 = possible.find(el => {
	    return el.getAttribute(draggable.id) === draggableId;
	  });

	  if (!draggable$1) {
	    return null;
	  }

	  if (!isHtmlElement(draggable$1)) {
	    warning('Draggable element is not a HTMLElement') ;
	    return null;
	  }

	  return draggable$1;
	}

	function preventDefault(event) {
	  event.preventDefault();
	}

	function isActive(_ref) {
	  let {
	    expected,
	    phase,
	    isLockActive,
	    shouldWarn
	  } = _ref;

	  if (!isLockActive()) {
	    if (shouldWarn) {
	      warning(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `) ;
	    }

	    return false;
	  }

	  if (expected !== phase) {
	    if (shouldWarn) {
	      warning(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${expected}
        You called an action from outdated phase: ${phase}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `) ;
	    }

	    return false;
	  }

	  return true;
	}

	function canStart(_ref2) {
	  let {
	    lockAPI,
	    store,
	    registry,
	    draggableId
	  } = _ref2;

	  if (lockAPI.isClaimed()) {
	    return false;
	  }

	  const entry = registry.draggable.findById(draggableId);

	  if (!entry) {
	    warning(`Unable to find draggable with id: ${draggableId}`) ;
	    return false;
	  }

	  if (!entry.options.isEnabled) {
	    return false;
	  }

	  if (!canStartDrag(store.getState(), draggableId)) {
	    return false;
	  }

	  return true;
	}

	function tryStart(_ref3) {
	  let {
	    lockAPI,
	    contextId,
	    store,
	    registry,
	    draggableId,
	    forceSensorStop,
	    sourceEvent
	  } = _ref3;
	  const shouldStart = canStart({
	    lockAPI,
	    store,
	    registry,
	    draggableId
	  });

	  if (!shouldStart) {
	    return null;
	  }

	  const entry = registry.draggable.getById(draggableId);
	  const el = findDraggable(contextId, entry.descriptor.id);

	  if (!el) {
	    warning(`Unable to find draggable element with id: ${draggableId}`) ;
	    return null;
	  }

	  if (sourceEvent && !entry.options.canDragInteractiveElements && isEventInInteractiveElement(el, sourceEvent)) {
	    return null;
	  }

	  const lock = lockAPI.claim(forceSensorStop || noop$2);
	  let phase = 'PRE_DRAG';

	  function getShouldRespectForcePress() {
	    return entry.options.shouldRespectForcePress;
	  }

	  function isLockActive() {
	    return lockAPI.isActive(lock);
	  }

	  function tryDispatch(expected, getAction) {
	    if (isActive({
	      expected,
	      phase,
	      isLockActive,
	      shouldWarn: true
	    })) {
	      store.dispatch(getAction());
	    }
	  }

	  const tryDispatchWhenDragging = tryDispatch.bind(null, 'DRAGGING');

	  function lift(args) {
	    function completed() {
	      lockAPI.release();
	      phase = 'COMPLETED';
	    }

	    if (phase !== 'PRE_DRAG') {
	      completed();
	      invariant(false, `Cannot lift in phase ${phase}`)  ;
	    }

	    store.dispatch(lift$1(args.liftActionArgs));
	    phase = 'DRAGGING';

	    function finish(reason, options) {
	      if (options === void 0) {
	        options = {
	          shouldBlockNextClick: false
	        };
	      }

	      args.cleanup();

	      if (options.shouldBlockNextClick) {
	        const unbind = bindEvents(window, [{
	          eventName: 'click',
	          fn: preventDefault,
	          options: {
	            once: true,
	            passive: false,
	            capture: true
	          }
	        }]);
	        setTimeout(unbind);
	      }

	      completed();
	      store.dispatch(drop$1({
	        reason
	      }));
	    }

	    return {
	      isActive: () => isActive({
	        expected: 'DRAGGING',
	        phase,
	        isLockActive,
	        shouldWarn: false
	      }),
	      shouldRespectForcePress: getShouldRespectForcePress,
	      drop: options => finish('DROP', options),
	      cancel: options => finish('CANCEL', options),
	      ...args.actions
	    };
	  }

	  function fluidLift(clientSelection) {
	    const move$1 = rafSchd__default["default"](client => {
	      tryDispatchWhenDragging(() => move({
	        client
	      }));
	    });
	    const api = lift({
	      liftActionArgs: {
	        id: draggableId,
	        clientSelection,
	        movementMode: 'FLUID'
	      },
	      cleanup: () => move$1.cancel(),
	      actions: {
	        move: move$1
	      }
	    });
	    return { ...api,
	      move: move$1
	    };
	  }

	  function snapLift() {
	    const actions = {
	      moveUp: () => tryDispatchWhenDragging(moveUp),
	      moveRight: () => tryDispatchWhenDragging(moveRight),
	      moveDown: () => tryDispatchWhenDragging(moveDown),
	      moveLeft: () => tryDispatchWhenDragging(moveLeft)
	    };
	    return lift({
	      liftActionArgs: {
	        id: draggableId,
	        clientSelection: getBorderBoxCenterPosition(el),
	        movementMode: 'SNAP'
	      },
	      cleanup: noop$2,
	      actions
	    });
	  }

	  function abortPreDrag() {
	    const shouldRelease = isActive({
	      expected: 'PRE_DRAG',
	      phase,
	      isLockActive,
	      shouldWarn: true
	    });

	    if (shouldRelease) {
	      lockAPI.release();
	    }
	  }

	  const preDrag = {
	    isActive: () => isActive({
	      expected: 'PRE_DRAG',
	      phase,
	      isLockActive,
	      shouldWarn: false
	    }),
	    shouldRespectForcePress: getShouldRespectForcePress,
	    fluidLift,
	    snapLift,
	    abort: abortPreDrag
	  };
	  return preDrag;
	}

	const defaultSensors = [useMouseSensor, useKeyboardSensor, useTouchSensor];
	function useSensorMarshal(_ref4) {
	  let {
	    contextId,
	    store,
	    registry,
	    customSensors,
	    enableDefaultSensors
	  } = _ref4;
	  const useSensors = [...(enableDefaultSensors ? defaultSensors : []), ...(customSensors || [])];
	  const lockAPI = React.useState(() => create())[0];
	  const tryAbandonLock = useMemoOne.useCallback(function tryAbandonLock(previous, current) {
	    if (isDragging(previous) && !isDragging(current)) {
	      lockAPI.tryAbandon();
	    }
	  }, [lockAPI]);
	  useLayoutEffect(function listenToStore() {
	    let previous = store.getState();
	    const unsubscribe = store.subscribe(() => {
	      const current = store.getState();
	      tryAbandonLock(previous, current);
	      previous = current;
	    });
	    return unsubscribe;
	  }, [lockAPI, store, tryAbandonLock]);
	  useLayoutEffect(() => {
	    return lockAPI.tryAbandon;
	  }, [lockAPI.tryAbandon]);
	  const canGetLock = useMemoOne.useCallback(draggableId => {
	    return canStart({
	      lockAPI,
	      registry,
	      store,
	      draggableId
	    });
	  }, [lockAPI, registry, store]);
	  const tryGetLock = useMemoOne.useCallback((draggableId, forceStop, options) => tryStart({
	    lockAPI,
	    registry,
	    contextId,
	    store,
	    draggableId,
	    forceSensorStop: forceStop || null,
	    sourceEvent: options && options.sourceEvent ? options.sourceEvent : null
	  }), [contextId, lockAPI, registry, store]);
	  const findClosestDraggableId = useMemoOne.useCallback(event => tryGetClosestDraggableIdFromEvent(contextId, event), [contextId]);
	  const findOptionsForDraggable = useMemoOne.useCallback(id => {
	    const entry = registry.draggable.findById(id);
	    return entry ? entry.options : null;
	  }, [registry.draggable]);
	  const tryReleaseLock = useMemoOne.useCallback(function tryReleaseLock() {
	    if (!lockAPI.isClaimed()) {
	      return;
	    }

	    lockAPI.tryAbandon();

	    if (store.getState().phase !== 'IDLE') {
	      store.dispatch(flush());
	    }
	  }, [lockAPI, store]);
	  const isLockClaimed = useMemoOne.useCallback(() => lockAPI.isClaimed(), [lockAPI]);
	  const api = useMemoOne.useMemo(() => ({
	    canGetLock,
	    tryGetLock,
	    findClosestDraggableId,
	    findOptionsForDraggable,
	    tryReleaseLock,
	    isLockClaimed
	  }), [canGetLock, tryGetLock, findClosestDraggableId, findOptionsForDraggable, tryReleaseLock, isLockClaimed]);
	  useValidateSensorHooks(useSensors);

	  for (let i = 0; i < useSensors.length; i++) {
	    useSensors[i](api);
	  }
	}

	const createResponders = props => ({
	  onBeforeCapture: t => {
	    const onBeforeCapureCallback = () => {
	      if (props.onBeforeCapture) {
	        props.onBeforeCapture(t);
	      }
	    };

	    if (React__default["default"].version.startsWith('16') || React__default["default"].version.startsWith('17')) {
	      onBeforeCapureCallback();
	    } else {
	      ReactDOM.flushSync(onBeforeCapureCallback);
	    }
	  },
	  onBeforeDragStart: props.onBeforeDragStart,
	  onDragStart: props.onDragStart,
	  onDragEnd: props.onDragEnd,
	  onDragUpdate: props.onDragUpdate
	});

	function getStore(lazyRef) {
	  !lazyRef.current ? invariant(false, 'Could not find store from lazy ref')  : void 0;
	  return lazyRef.current;
	}

	function App$2(props) {
	  const {
	    contextId,
	    setCallbacks,
	    sensors,
	    nonce,
	    dragHandleUsageInstructions
	  } = props;
	  const lazyStoreRef = React.useRef(null);
	  useStartupValidation();
	  const lastPropsRef = usePrevious(props);
	  const getResponders = useMemoOne.useCallback(() => {
	    return createResponders(lastPropsRef.current);
	  }, [lastPropsRef]);
	  const announce = useAnnouncer(contextId);
	  const dragHandleUsageInstructionsId = useHiddenTextElement({
	    contextId,
	    text: dragHandleUsageInstructions
	  });
	  const styleMarshal = useStyleMarshal(contextId, nonce);
	  const lazyDispatch = useMemoOne.useCallback(action => {
	    getStore(lazyStoreRef).dispatch(action);
	  }, []);
	  const marshalCallbacks = useMemoOne.useMemo(() => redux.bindActionCreators({
	    publishWhileDragging,
	    updateDroppableScroll,
	    updateDroppableIsEnabled,
	    updateDroppableIsCombineEnabled,
	    collectionStarting
	  }, lazyDispatch), [lazyDispatch]);
	  const registry = useRegistry();
	  const dimensionMarshal = useMemoOne.useMemo(() => {
	    return createDimensionMarshal(registry, marshalCallbacks);
	  }, [registry, marshalCallbacks]);
	  const autoScroller = useMemoOne.useMemo(() => createAutoScroller({
	    scrollWindow,
	    scrollDroppable: dimensionMarshal.scrollDroppable,
	    ...redux.bindActionCreators({
	      move
	    }, lazyDispatch)
	  }), [dimensionMarshal.scrollDroppable, lazyDispatch]);
	  const focusMarshal = useFocusMarshal(contextId);
	  const store = useMemoOne.useMemo(() => createStore$1({
	    announce,
	    autoScroller,
	    dimensionMarshal,
	    focusMarshal,
	    getResponders,
	    styleMarshal
	  }), [announce, autoScroller, dimensionMarshal, focusMarshal, getResponders, styleMarshal]);

	  {
	    if (lazyStoreRef.current && lazyStoreRef.current !== store) {
	      warning('unexpected store change') ;
	    }
	  }

	  lazyStoreRef.current = store;
	  const tryResetStore = useMemoOne.useCallback(() => {
	    const current = getStore(lazyStoreRef);
	    const state = current.getState();

	    if (state.phase !== 'IDLE') {
	      current.dispatch(flush());
	    }
	  }, []);
	  const isDragging = useMemoOne.useCallback(() => {
	    const state = getStore(lazyStoreRef).getState();

	    if (state.phase === 'DROP_ANIMATING') {
	      return true;
	    }

	    if (state.phase === 'IDLE') {
	      return false;
	    }

	    return state.isDragging;
	  }, []);
	  const appCallbacks = useMemoOne.useMemo(() => ({
	    isDragging,
	    tryAbort: tryResetStore
	  }), [isDragging, tryResetStore]);
	  setCallbacks(appCallbacks);
	  const getCanLift = useMemoOne.useCallback(id => canStartDrag(getStore(lazyStoreRef).getState(), id), []);
	  const getIsMovementAllowed = useMemoOne.useCallback(() => isMovementAllowed(getStore(lazyStoreRef).getState()), []);
	  const appContext = useMemoOne.useMemo(() => ({
	    marshal: dimensionMarshal,
	    focus: focusMarshal,
	    contextId,
	    canLift: getCanLift,
	    isMovementAllowed: getIsMovementAllowed,
	    dragHandleUsageInstructionsId,
	    registry
	  }), [contextId, dimensionMarshal, dragHandleUsageInstructionsId, focusMarshal, getCanLift, getIsMovementAllowed, registry]);
	  useSensorMarshal({
	    contextId,
	    store,
	    registry,
	    customSensors: sensors || null,
	    enableDefaultSensors: props.enableDefaultSensors !== false
	  });
	  React.useEffect(() => {
	    return tryResetStore;
	  }, [tryResetStore]);
	  return React__default["default"].createElement(AppContext.Provider, {
	    value: appContext
	  }, React__default["default"].createElement(reactRedux.Provider, {
	    context: StoreContext,
	    store: store
	  }, props.children));
	}

	let count = 0;
	function reset() {
	  count = 0;
	}
	function useInstanceCount() {
	  return useMemoOne.useMemo(() => `${count++}`, []);
	}

	function resetServerContext() {
	  reset();
	  reset$1();
	}
	function DragDropContext(props) {
	  const contextId = useInstanceCount();
	  const dragHandleUsageInstructions = props.dragHandleUsageInstructions || preset$1.dragHandleUsageInstructions;
	  return React__default["default"].createElement(ErrorBoundary, null, setCallbacks => React__default["default"].createElement(App$2, {
	    nonce: props.nonce,
	    contextId: contextId,
	    setCallbacks: setCallbacks,
	    dragHandleUsageInstructions: dragHandleUsageInstructions,
	    enableDefaultSensors: props.enableDefaultSensors,
	    sensors: props.sensors,
	    onBeforeCapture: props.onBeforeCapture,
	    onBeforeDragStart: props.onBeforeDragStart,
	    onDragStart: props.onDragStart,
	    onDragUpdate: props.onDragUpdate,
	    onDragEnd: props.onDragEnd
	  }, props.children));
	}

	const zIndexOptions = {
	  dragging: 5000,
	  dropAnimating: 4500
	};

	const getDraggingTransition = (shouldAnimateDragMovement, dropping) => {
	  if (dropping) {
	    return transitions.drop(dropping.duration);
	  }

	  if (shouldAnimateDragMovement) {
	    return transitions.snap;
	  }

	  return transitions.fluid;
	};

	const getDraggingOpacity = (isCombining, isDropAnimating) => {
	  if (!isCombining) {
	    return undefined;
	  }

	  return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
	};

	const getShouldDraggingAnimate = dragging => {
	  if (dragging.forceShouldAnimate != null) {
	    return dragging.forceShouldAnimate;
	  }

	  return dragging.mode === 'SNAP';
	};

	function getDraggingStyle(dragging) {
	  const dimension = dragging.dimension;
	  const box = dimension.client;
	  const {
	    offset,
	    combineWith,
	    dropping
	  } = dragging;
	  const isCombining = Boolean(combineWith);
	  const shouldAnimate = getShouldDraggingAnimate(dragging);
	  const isDropAnimating = Boolean(dropping);
	  const transform = isDropAnimating ? transforms.drop(offset, isCombining) : transforms.moveTo(offset);
	  const style = {
	    position: 'fixed',
	    top: box.marginBox.top,
	    left: box.marginBox.left,
	    boxSizing: 'border-box',
	    width: box.borderBox.width,
	    height: box.borderBox.height,
	    transition: getDraggingTransition(shouldAnimate, dropping),
	    transform,
	    opacity: getDraggingOpacity(isCombining, isDropAnimating),
	    zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
	    pointerEvents: 'none'
	  };
	  return style;
	}

	function getSecondaryStyle(secondary) {
	  return {
	    transform: transforms.moveTo(secondary.offset),
	    transition: secondary.shouldAnimateDisplacement ? undefined : 'none'
	  };
	}

	function getStyle$1(mapped) {
	  return mapped.type === 'DRAGGING' ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
	}

	function getDimension$1(descriptor, el, windowScroll) {
	  if (windowScroll === void 0) {
	    windowScroll = origin;
	  }

	  const computedStyles = window.getComputedStyle(el);
	  const borderBox = el.getBoundingClientRect();
	  const client = cssBoxModel.calculateBox(borderBox, computedStyles);
	  const page = cssBoxModel.withScroll(client, windowScroll);
	  const placeholder = {
	    client,
	    tagName: el.tagName.toLowerCase(),
	    display: computedStyles.display
	  };
	  const displaceBy = {
	    x: client.marginBox.width,
	    y: client.marginBox.height
	  };
	  const dimension = {
	    descriptor,
	    placeholder,
	    displaceBy,
	    client,
	    page
	  };
	  return dimension;
	}

	function useDraggablePublisher(args) {
	  const uniqueId = useUniqueId('draggable');
	  const {
	    descriptor,
	    registry,
	    getDraggableRef,
	    canDragInteractiveElements,
	    shouldRespectForcePress,
	    isEnabled
	  } = args;
	  const options = useMemoOne.useMemo(() => ({
	    canDragInteractiveElements,
	    shouldRespectForcePress,
	    isEnabled
	  }), [canDragInteractiveElements, isEnabled, shouldRespectForcePress]);
	  const getDimension = useMemoOne.useCallback(windowScroll => {
	    const el = getDraggableRef();
	    !el ? invariant(false, 'Cannot get dimension when no ref is set')  : void 0;
	    return getDimension$1(descriptor, el, windowScroll);
	  }, [descriptor, getDraggableRef]);
	  const entry = useMemoOne.useMemo(() => ({
	    uniqueId,
	    descriptor,
	    options,
	    getDimension
	  }), [descriptor, getDimension, options, uniqueId]);
	  const publishedRef = React.useRef(entry);
	  const isFirstPublishRef = React.useRef(true);
	  useLayoutEffect(() => {
	    registry.draggable.register(publishedRef.current);
	    return () => registry.draggable.unregister(publishedRef.current);
	  }, [registry.draggable]);
	  useLayoutEffect(() => {
	    if (isFirstPublishRef.current) {
	      isFirstPublishRef.current = false;
	      return;
	    }

	    const last = publishedRef.current;
	    publishedRef.current = entry;
	    registry.draggable.update(entry, last);
	  }, [entry, registry.draggable]);
	}

	var DroppableContext = React__default["default"].createContext(null);

	function checkIsValidInnerRef(el) {
	  !(el && isHtmlElement(el)) ? invariant(false, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `)  : void 0;
	}

	function useValidation$1(props, contextId, getRef) {
	  useDevSetupWarning(() => {
	    function prefix(id) {
	      return `Draggable[id: ${id}]: `;
	    }

	    const id = props.draggableId;
	    !id ? "development" !== "production" ? invariant(false, 'Draggable requires a draggableId') : invariant(false) : void 0;
	    !(typeof id === 'string') ? "development" !== "production" ? invariant(false, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof id}] (value: ${id})`) : invariant(false) : void 0;
	    !Number.isInteger(props.index) ? "development" !== "production" ? invariant(false, `${prefix(id)} requires an integer index prop`) : invariant(false) : void 0;

	    if (props.mapped.type === 'DRAGGING') {
	      return;
	    }

	    checkIsValidInnerRef(getRef());

	    if (props.isEnabled) {
	      !findDragHandle(contextId, id) ? "development" !== "production" ? invariant(false, `${prefix(id)} Unable to find drag handle`) : invariant(false) : void 0;
	    }
	  });
	}
	function useClonePropValidation(isClone) {
	  useDev(() => {
	    const initialRef = React.useRef(isClone);
	    useDevSetupWarning(() => {
	      !(isClone === initialRef.current) ? "development" !== "production" ? invariant(false, 'Draggable isClone prop value changed during component life') : invariant(false) : void 0;
	    }, [isClone]);
	  });
	}

	function useRequiredContext(Context) {
	  const result = React.useContext(Context);
	  !result ? invariant(false, 'Could not find required context')  : void 0;
	  return result;
	}

	function preventHtml5Dnd(event) {
	  event.preventDefault();
	}

	const Draggable = props => {
	  const ref = React.useRef(null);
	  const setRef = useMemoOne.useCallback(function (el) {
	    if (el === void 0) {
	      el = null;
	    }

	    ref.current = el;
	  }, []);
	  const getRef = useMemoOne.useCallback(() => ref.current, []);
	  const {
	    contextId,
	    dragHandleUsageInstructionsId,
	    registry
	  } = useRequiredContext(AppContext);
	  const {
	    type,
	    droppableId
	  } = useRequiredContext(DroppableContext);
	  const descriptor = useMemoOne.useMemo(() => ({
	    id: props.draggableId,
	    index: props.index,
	    type,
	    droppableId
	  }), [props.draggableId, props.index, type, droppableId]);
	  const {
	    children,
	    draggableId,
	    isEnabled,
	    shouldRespectForcePress,
	    canDragInteractiveElements,
	    isClone,
	    mapped,
	    dropAnimationFinished: dropAnimationFinishedAction
	  } = props;
	  useValidation$1(props, contextId, getRef);
	  useClonePropValidation(isClone);

	  if (!isClone) {
	    const forPublisher = useMemoOne.useMemo(() => ({
	      descriptor,
	      registry,
	      getDraggableRef: getRef,
	      canDragInteractiveElements,
	      shouldRespectForcePress,
	      isEnabled
	    }), [descriptor, registry, getRef, canDragInteractiveElements, shouldRespectForcePress, isEnabled]);
	    useDraggablePublisher(forPublisher);
	  }

	  const dragHandleProps = useMemoOne.useMemo(() => isEnabled ? {
	    tabIndex: 0,
	    role: 'button',
	    'aria-describedby': dragHandleUsageInstructionsId,
	    'data-rfd-drag-handle-draggable-id': draggableId,
	    'data-rfd-drag-handle-context-id': contextId,
	    draggable: false,
	    onDragStart: preventHtml5Dnd
	  } : null, [contextId, dragHandleUsageInstructionsId, draggableId, isEnabled]);
	  const onMoveEnd = useMemoOne.useCallback(event => {
	    if (mapped.type !== 'DRAGGING') {
	      return;
	    }

	    if (!mapped.dropping) {
	      return;
	    }

	    if (event.propertyName !== 'transform') {
	      return;
	    }

	    if (React__default["default"].version.startsWith('16') || React__default["default"].version.startsWith('17')) {
	      dropAnimationFinishedAction();
	    } else {
	      ReactDOM.flushSync(dropAnimationFinishedAction);
	    }
	  }, [dropAnimationFinishedAction, mapped]);
	  const provided = useMemoOne.useMemo(() => {
	    const style = getStyle$1(mapped);
	    const onTransitionEnd = mapped.type === 'DRAGGING' && mapped.dropping ? onMoveEnd : undefined;
	    const result = {
	      innerRef: setRef,
	      draggableProps: {
	        'data-rfd-draggable-context-id': contextId,
	        'data-rfd-draggable-id': draggableId,
	        style,
	        onTransitionEnd
	      },
	      dragHandleProps
	    };
	    return result;
	  }, [contextId, dragHandleProps, draggableId, mapped, onMoveEnd, setRef]);
	  const rubric = useMemoOne.useMemo(() => ({
	    draggableId: descriptor.id,
	    type: descriptor.type,
	    source: {
	      index: descriptor.index,
	      droppableId: descriptor.droppableId
	    }
	  }), [descriptor.droppableId, descriptor.id, descriptor.index, descriptor.type]);
	  return React__default["default"].createElement(React__default["default"].Fragment, null, children(provided, mapped.snapshot, rubric));
	};

	var Draggable$1 = Draggable;

	var isStrictEqual = ((a, b) => a === b);

	var whatIsDraggedOverFromResult = (result => {
	  const {
	    combine,
	    destination
	  } = result;

	  if (destination) {
	    return destination.droppableId;
	  }

	  if (combine) {
	    return combine.droppableId;
	  }

	  return null;
	});

	const getCombineWithFromResult = result => {
	  return result.combine ? result.combine.draggableId : null;
	};

	const getCombineWithFromImpact = impact => {
	  return impact.at && impact.at.type === 'COMBINE' ? impact.at.combine.draggableId : null;
	};

	function getDraggableSelector() {
	  const memoizedOffset = memoizeOne__default["default"]((x, y) => ({
	    x,
	    y
	  }));
	  const getMemoizedSnapshot = memoizeOne__default["default"](function (mode, isClone, draggingOver, combineWith, dropping) {
	    if (draggingOver === void 0) {
	      draggingOver = null;
	    }

	    if (combineWith === void 0) {
	      combineWith = null;
	    }

	    if (dropping === void 0) {
	      dropping = null;
	    }

	    return {
	      isDragging: true,
	      isClone,
	      isDropAnimating: Boolean(dropping),
	      dropAnimation: dropping,
	      mode,
	      draggingOver,
	      combineWith,
	      combineTargetFor: null
	    };
	  });
	  const getMemoizedProps = memoizeOne__default["default"](function (offset, mode, dimension, isClone, draggingOver, combineWith, forceShouldAnimate) {
	    if (draggingOver === void 0) {
	      draggingOver = null;
	    }

	    if (combineWith === void 0) {
	      combineWith = null;
	    }

	    if (forceShouldAnimate === void 0) {
	      forceShouldAnimate = null;
	    }

	    return {
	      mapped: {
	        type: 'DRAGGING',
	        dropping: null,
	        draggingOver,
	        combineWith,
	        mode,
	        offset,
	        dimension,
	        forceShouldAnimate,
	        snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, null)
	      }
	    };
	  });

	  const selector = (state, ownProps) => {
	    if (isDragging(state)) {
	      if (state.critical.draggable.id !== ownProps.draggableId) {
	        return null;
	      }

	      const offset = state.current.client.offset;
	      const dimension = state.dimensions.draggables[ownProps.draggableId];
	      const draggingOver = whatIsDraggedOver(state.impact);
	      const combineWith = getCombineWithFromImpact(state.impact);
	      const forceShouldAnimate = state.forceShouldAnimate;
	      return getMemoizedProps(memoizedOffset(offset.x, offset.y), state.movementMode, dimension, ownProps.isClone, draggingOver, combineWith, forceShouldAnimate);
	    }

	    if (state.phase === 'DROP_ANIMATING') {
	      const completed = state.completed;

	      if (completed.result.draggableId !== ownProps.draggableId) {
	        return null;
	      }

	      const isClone = ownProps.isClone;
	      const dimension = state.dimensions.draggables[ownProps.draggableId];
	      const result = completed.result;
	      const mode = result.mode;
	      const draggingOver = whatIsDraggedOverFromResult(result);
	      const combineWith = getCombineWithFromResult(result);
	      const duration = state.dropDuration;
	      const dropping = {
	        duration,
	        curve: curves.drop,
	        moveTo: state.newHomeClientOffset,
	        opacity: combineWith ? combine.opacity.drop : null,
	        scale: combineWith ? combine.scale.drop : null
	      };
	      return {
	        mapped: {
	          type: 'DRAGGING',
	          offset: state.newHomeClientOffset,
	          dimension,
	          dropping,
	          draggingOver,
	          combineWith,
	          mode,
	          forceShouldAnimate: null,
	          snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, dropping)
	        }
	      };
	    }

	    return null;
	  };

	  return selector;
	}

	function getSecondarySnapshot(combineTargetFor) {
	  if (combineTargetFor === void 0) {
	    combineTargetFor = null;
	  }

	  return {
	    isDragging: false,
	    isDropAnimating: false,
	    isClone: false,
	    dropAnimation: null,
	    mode: null,
	    draggingOver: null,
	    combineTargetFor,
	    combineWith: null
	  };
	}

	const atRest = {
	  mapped: {
	    type: 'SECONDARY',
	    offset: origin,
	    combineTargetFor: null,
	    shouldAnimateDisplacement: true,
	    snapshot: getSecondarySnapshot(null)
	  }
	};

	function getSecondarySelector() {
	  const memoizedOffset = memoizeOne__default["default"]((x, y) => ({
	    x,
	    y
	  }));
	  const getMemoizedSnapshot = memoizeOne__default["default"](getSecondarySnapshot);
	  const getMemoizedProps = memoizeOne__default["default"](function (offset, combineTargetFor, shouldAnimateDisplacement) {
	    if (combineTargetFor === void 0) {
	      combineTargetFor = null;
	    }

	    return {
	      mapped: {
	        type: 'SECONDARY',
	        offset,
	        combineTargetFor,
	        shouldAnimateDisplacement,
	        snapshot: getMemoizedSnapshot(combineTargetFor)
	      }
	    };
	  });

	  const getFallback = combineTargetFor => {
	    return combineTargetFor ? getMemoizedProps(origin, combineTargetFor, true) : null;
	  };

	  const getProps = (ownId, draggingId, impact, afterCritical) => {
	    const visualDisplacement = impact.displaced.visible[ownId];
	    const isAfterCriticalInVirtualList = Boolean(afterCritical.inVirtualList && afterCritical.effected[ownId]);
	    const combine = tryGetCombine(impact);
	    const combineTargetFor = combine && combine.draggableId === ownId ? draggingId : null;

	    if (!visualDisplacement) {
	      if (!isAfterCriticalInVirtualList) {
	        return getFallback(combineTargetFor);
	      }

	      if (impact.displaced.invisible[ownId]) {
	        return null;
	      }

	      const change = negate(afterCritical.displacedBy.point);
	      const offset = memoizedOffset(change.x, change.y);
	      return getMemoizedProps(offset, combineTargetFor, true);
	    }

	    if (isAfterCriticalInVirtualList) {
	      return getFallback(combineTargetFor);
	    }

	    const displaceBy = impact.displacedBy.point;
	    const offset = memoizedOffset(displaceBy.x, displaceBy.y);
	    return getMemoizedProps(offset, combineTargetFor, visualDisplacement.shouldAnimate);
	  };

	  const selector = (state, ownProps) => {
	    if (isDragging(state)) {
	      if (state.critical.draggable.id === ownProps.draggableId) {
	        return null;
	      }

	      return getProps(ownProps.draggableId, state.critical.draggable.id, state.impact, state.afterCritical);
	    }

	    if (state.phase === 'DROP_ANIMATING') {
	      const completed = state.completed;

	      if (completed.result.draggableId === ownProps.draggableId) {
	        return null;
	      }

	      return getProps(ownProps.draggableId, completed.result.draggableId, completed.impact, completed.afterCritical);
	    }

	    return null;
	  };

	  return selector;
	}

	const makeMapStateToProps$1 = () => {
	  const draggingSelector = getDraggableSelector();
	  const secondarySelector = getSecondarySelector();

	  const selector = (state, ownProps) => draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || atRest;

	  return selector;
	};
	const mapDispatchToProps$1 = {
	  dropAnimationFinished: dropAnimationFinished
	};
	const ConnectedDraggable = reactRedux.connect(makeMapStateToProps$1, mapDispatchToProps$1, null, {
	  context: StoreContext,
	  areStatePropsEqual: isStrictEqual
	})(Draggable$1);
	var ConnectedDraggable$1 = ConnectedDraggable;

	function PrivateDraggable(props) {
	  const droppableContext = useRequiredContext(DroppableContext);
	  const isUsingCloneFor = droppableContext.isUsingCloneFor;

	  if (isUsingCloneFor === props.draggableId && !props.isClone) {
	    return null;
	  }

	  return React__default["default"].createElement(ConnectedDraggable$1, props);
	}
	function PublicDraggable(props) {
	  const isEnabled = typeof props.isDragDisabled === 'boolean' ? !props.isDragDisabled : true;
	  const canDragInteractiveElements = Boolean(props.disableInteractiveElementBlocking);
	  const shouldRespectForcePress = Boolean(props.shouldRespectForcePress);
	  return React__default["default"].createElement(PrivateDraggable, _extends__default["default"]({}, props, {
	    isClone: false,
	    isEnabled: isEnabled,
	    canDragInteractiveElements: canDragInteractiveElements,
	    shouldRespectForcePress: shouldRespectForcePress
	  }));
	}

	const isEqual = base => value => base === value;

	const isScroll = isEqual('scroll');
	const isAuto = isEqual('auto');
	const isVisible = isEqual('visible');

	const isEither = (overflow, fn) => fn(overflow.overflowX) || fn(overflow.overflowY);

	const isBoth = (overflow, fn) => fn(overflow.overflowX) && fn(overflow.overflowY);

	const isElementScrollable = el => {
	  const style = window.getComputedStyle(el);
	  const overflow = {
	    overflowX: style.overflowX,
	    overflowY: style.overflowY
	  };
	  return isEither(overflow, isScroll) || isEither(overflow, isAuto);
	};

	const isBodyScrollable = () => {

	  const body = getBodyElement();
	  const html = document.documentElement;
	  !html ? invariant(false)  : void 0;

	  if (!isElementScrollable(body)) {
	    return false;
	  }

	  const htmlStyle = window.getComputedStyle(html);
	  const htmlOverflow = {
	    overflowX: htmlStyle.overflowX,
	    overflowY: htmlStyle.overflowY
	  };

	  if (isBoth(htmlOverflow, isVisible)) {
	    return false;
	  }

	  warning(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `) ;
	  return false;
	};

	const getClosestScrollable = el => {
	  if (el == null) {
	    return null;
	  }

	  if (el === document.body) {
	    return isBodyScrollable() ? el : null;
	  }

	  if (el === document.documentElement) {
	    return null;
	  }

	  if (!isElementScrollable(el)) {
	    return getClosestScrollable(el.parentElement);
	  }

	  return el;
	};

	var getClosestScrollable$1 = getClosestScrollable;

	var checkForNestedScrollContainers = (scrollable => {
	  if (!scrollable) {
	    return;
	  }

	  const anotherScrollParent = getClosestScrollable$1(scrollable.parentElement);

	  if (!anotherScrollParent) {
	    return;
	  }

	  warning(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `) ;
	});

	var getScroll = (el => ({
	  x: el.scrollLeft,
	  y: el.scrollTop
	}));

	const getIsFixed = el => {
	  if (!el) {
	    return false;
	  }

	  const style = window.getComputedStyle(el);

	  if (style.position === 'fixed') {
	    return true;
	  }

	  return getIsFixed(el.parentElement);
	};

	var getEnv = (start => {
	  const closestScrollable = getClosestScrollable$1(start);
	  const isFixedOnPage = getIsFixed(start);
	  return {
	    closestScrollable,
	    isFixedOnPage
	  };
	});

	var getDroppableDimension = (_ref => {
	  let {
	    descriptor,
	    isEnabled,
	    isCombineEnabled,
	    isFixedOnPage,
	    direction,
	    client,
	    page,
	    closest
	  } = _ref;

	  const frame = (() => {
	    if (!closest) {
	      return null;
	    }

	    const {
	      scrollSize,
	      client: frameClient
	    } = closest;
	    const maxScroll = getMaxScroll({
	      scrollHeight: scrollSize.scrollHeight,
	      scrollWidth: scrollSize.scrollWidth,
	      height: frameClient.paddingBox.height,
	      width: frameClient.paddingBox.width
	    });
	    return {
	      pageMarginBox: closest.page.marginBox,
	      frameClient,
	      scrollSize,
	      shouldClipSubject: closest.shouldClipSubject,
	      scroll: {
	        initial: closest.scroll,
	        current: closest.scroll,
	        max: maxScroll,
	        diff: {
	          value: origin,
	          displacement: origin
	        }
	      }
	    };
	  })();

	  const axis = direction === 'vertical' ? vertical : horizontal;
	  const subject = getSubject({
	    page,
	    withPlaceholder: null,
	    axis,
	    frame
	  });
	  const dimension = {
	    descriptor,
	    isCombineEnabled,
	    isFixedOnPage,
	    axis,
	    isEnabled,
	    client,
	    page,
	    frame,
	    subject
	  };
	  return dimension;
	});

	const getClient = (targetRef, closestScrollable) => {
	  const base = cssBoxModel.getBox(targetRef);

	  if (!closestScrollable) {
	    return base;
	  }

	  if (targetRef !== closestScrollable) {
	    return base;
	  }

	  const top = base.paddingBox.top - closestScrollable.scrollTop;
	  const left = base.paddingBox.left - closestScrollable.scrollLeft;
	  const bottom = top + closestScrollable.scrollHeight;
	  const right = left + closestScrollable.scrollWidth;
	  const paddingBox = {
	    top,
	    right,
	    bottom,
	    left
	  };
	  const borderBox = cssBoxModel.expand(paddingBox, base.border);
	  const client = cssBoxModel.createBox({
	    borderBox,
	    margin: base.margin,
	    border: base.border,
	    padding: base.padding
	  });
	  return client;
	};

	var getDimension = (_ref => {
	  let {
	    ref,
	    descriptor,
	    env,
	    windowScroll,
	    direction,
	    isDropDisabled,
	    isCombineEnabled,
	    shouldClipSubject
	  } = _ref;
	  const closestScrollable = env.closestScrollable;
	  const client = getClient(ref, closestScrollable);
	  const page = cssBoxModel.withScroll(client, windowScroll);

	  const closest = (() => {
	    if (!closestScrollable) {
	      return null;
	    }

	    const frameClient = cssBoxModel.getBox(closestScrollable);
	    const scrollSize = {
	      scrollHeight: closestScrollable.scrollHeight,
	      scrollWidth: closestScrollable.scrollWidth
	    };
	    return {
	      client: frameClient,
	      page: cssBoxModel.withScroll(frameClient, windowScroll),
	      scroll: getScroll(closestScrollable),
	      scrollSize,
	      shouldClipSubject
	    };
	  })();

	  const dimension = getDroppableDimension({
	    descriptor,
	    isEnabled: !isDropDisabled,
	    isCombineEnabled,
	    isFixedOnPage: env.isFixedOnPage,
	    direction,
	    client,
	    page,
	    closest
	  });
	  return dimension;
	});

	const immediate = {
	  passive: false
	};
	const delayed = {
	  passive: true
	};
	var getListenerOptions = (options => options.shouldPublishImmediately ? immediate : delayed);

	const getClosestScrollableFromDrag = dragging => dragging && dragging.env.closestScrollable || null;

	function useDroppablePublisher(args) {
	  const whileDraggingRef = React.useRef(null);
	  const appContext = useRequiredContext(AppContext);
	  const uniqueId = useUniqueId('droppable');
	  const {
	    registry,
	    marshal
	  } = appContext;
	  const previousRef = usePrevious(args);
	  const descriptor = useMemoOne.useMemo(() => ({
	    id: args.droppableId,
	    type: args.type,
	    mode: args.mode
	  }), [args.droppableId, args.mode, args.type]);
	  const publishedDescriptorRef = React.useRef(descriptor);
	  const memoizedUpdateScroll = useMemoOne.useMemo(() => memoizeOne__default["default"]((x, y) => {
	    !whileDraggingRef.current ? invariant(false, 'Can only update scroll when dragging')  : void 0;
	    const scroll = {
	      x,
	      y
	    };
	    marshal.updateDroppableScroll(descriptor.id, scroll);
	  }), [descriptor.id, marshal]);
	  const getClosestScroll = useMemoOne.useCallback(() => {
	    const dragging = whileDraggingRef.current;

	    if (!dragging || !dragging.env.closestScrollable) {
	      return origin;
	    }

	    return getScroll(dragging.env.closestScrollable);
	  }, []);
	  const updateScroll = useMemoOne.useCallback(() => {
	    const scroll = getClosestScroll();
	    memoizedUpdateScroll(scroll.x, scroll.y);
	  }, [getClosestScroll, memoizedUpdateScroll]);
	  const scheduleScrollUpdate = useMemoOne.useMemo(() => rafSchd__default["default"](updateScroll), [updateScroll]);
	  const onClosestScroll = useMemoOne.useCallback(() => {
	    const dragging = whileDraggingRef.current;
	    const closest = getClosestScrollableFromDrag(dragging);
	    !(dragging && closest) ? invariant(false, 'Could not find scroll options while scrolling')  : void 0;
	    const options = dragging.scrollOptions;

	    if (options.shouldPublishImmediately) {
	      updateScroll();
	      return;
	    }

	    scheduleScrollUpdate();
	  }, [scheduleScrollUpdate, updateScroll]);
	  const getDimensionAndWatchScroll = useMemoOne.useCallback((windowScroll, options) => {
	    !!whileDraggingRef.current ? invariant(false, 'Cannot collect a droppable while a drag is occurring')  : void 0;
	    const previous = previousRef.current;
	    const ref = previous.getDroppableRef();
	    !ref ? invariant(false, 'Cannot collect without a droppable ref')  : void 0;
	    const env = getEnv(ref);
	    const dragging = {
	      ref,
	      descriptor,
	      env,
	      scrollOptions: options
	    };
	    whileDraggingRef.current = dragging;
	    const dimension = getDimension({
	      ref,
	      descriptor,
	      env,
	      windowScroll,
	      direction: previous.direction,
	      isDropDisabled: previous.isDropDisabled,
	      isCombineEnabled: previous.isCombineEnabled,
	      shouldClipSubject: !previous.ignoreContainerClipping
	    });
	    const scrollable = env.closestScrollable;

	    if (scrollable) {
	      scrollable.setAttribute(scrollContainer.contextId, appContext.contextId);
	      scrollable.addEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));

	      {
	        checkForNestedScrollContainers(scrollable);
	      }
	    }

	    return dimension;
	  }, [appContext.contextId, descriptor, onClosestScroll, previousRef]);
	  const getScrollWhileDragging = useMemoOne.useCallback(() => {
	    const dragging = whileDraggingRef.current;
	    const closest = getClosestScrollableFromDrag(dragging);
	    !(dragging && closest) ? invariant(false, 'Can only recollect Droppable client for Droppables that have a scroll container')  : void 0;
	    return getScroll(closest);
	  }, []);
	  const dragStopped = useMemoOne.useCallback(() => {
	    const dragging = whileDraggingRef.current;
	    !dragging ? invariant(false, 'Cannot stop drag when no active drag')  : void 0;
	    const closest = getClosestScrollableFromDrag(dragging);
	    whileDraggingRef.current = null;

	    if (!closest) {
	      return;
	    }

	    scheduleScrollUpdate.cancel();
	    closest.removeAttribute(scrollContainer.contextId);
	    closest.removeEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));
	  }, [onClosestScroll, scheduleScrollUpdate]);
	  const scroll = useMemoOne.useCallback(change => {
	    const dragging = whileDraggingRef.current;
	    !dragging ? invariant(false, 'Cannot scroll when there is no drag')  : void 0;
	    const closest = getClosestScrollableFromDrag(dragging);
	    !closest ? invariant(false, 'Cannot scroll a droppable with no closest scrollable')  : void 0;
	    closest.scrollTop += change.y;
	    closest.scrollLeft += change.x;
	  }, []);
	  const callbacks = useMemoOne.useMemo(() => {
	    return {
	      getDimensionAndWatchScroll,
	      getScrollWhileDragging,
	      dragStopped,
	      scroll
	    };
	  }, [dragStopped, getDimensionAndWatchScroll, getScrollWhileDragging, scroll]);
	  const entry = useMemoOne.useMemo(() => ({
	    uniqueId,
	    descriptor,
	    callbacks
	  }), [callbacks, descriptor, uniqueId]);
	  useLayoutEffect(() => {
	    publishedDescriptorRef.current = entry.descriptor;
	    registry.droppable.register(entry);
	    return () => {
	      if (whileDraggingRef.current) {
	        warning('Unsupported: changing the droppableId or type of a Droppable during a drag') ;
	        dragStopped();
	      }

	      registry.droppable.unregister(entry);
	    };
	  }, [callbacks, descriptor, dragStopped, entry, marshal, registry.droppable]);
	  useLayoutEffect(() => {
	    if (!whileDraggingRef.current) {
	      return;
	    }

	    marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
	  }, [args.isDropDisabled, marshal]);
	  useLayoutEffect(() => {
	    if (!whileDraggingRef.current) {
	      return;
	    }

	    marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
	  }, [args.isCombineEnabled, marshal]);
	}

	function noop() {}

	const empty = {
	  width: 0,
	  height: 0,
	  margin: noSpacing
	};

	const getSize = _ref => {
	  let {
	    isAnimatingOpenOnMount,
	    placeholder,
	    animate
	  } = _ref;

	  if (isAnimatingOpenOnMount) {
	    return empty;
	  }

	  if (animate === 'close') {
	    return empty;
	  }

	  return {
	    height: placeholder.client.borderBox.height,
	    width: placeholder.client.borderBox.width,
	    margin: placeholder.client.margin
	  };
	};

	const getStyle = _ref2 => {
	  let {
	    isAnimatingOpenOnMount,
	    placeholder,
	    animate
	  } = _ref2;
	  const size = getSize({
	    isAnimatingOpenOnMount,
	    placeholder,
	    animate
	  });
	  return {
	    display: placeholder.display,
	    boxSizing: 'border-box',
	    width: size.width,
	    height: size.height,
	    marginTop: size.margin.top,
	    marginRight: size.margin.right,
	    marginBottom: size.margin.bottom,
	    marginLeft: size.margin.left,
	    flexShrink: '0',
	    flexGrow: '0',
	    pointerEvents: 'none',
	    transition: animate !== 'none' ? transitions.placeholder : null
	  };
	};

	const Placeholder = props => {
	  const animateOpenTimerRef = React.useRef(null);
	  const tryClearAnimateOpenTimer = useMemoOne.useCallback(() => {
	    if (!animateOpenTimerRef.current) {
	      return;
	    }

	    clearTimeout(animateOpenTimerRef.current);
	    animateOpenTimerRef.current = null;
	  }, []);
	  const {
	    animate,
	    onTransitionEnd,
	    onClose,
	    contextId
	  } = props;
	  const [isAnimatingOpenOnMount, setIsAnimatingOpenOnMount] = React.useState(props.animate === 'open');
	  React.useEffect(() => {
	    if (!isAnimatingOpenOnMount) {
	      return noop;
	    }

	    if (animate !== 'open') {
	      tryClearAnimateOpenTimer();
	      setIsAnimatingOpenOnMount(false);
	      return noop;
	    }

	    if (animateOpenTimerRef.current) {
	      return noop;
	    }

	    animateOpenTimerRef.current = setTimeout(() => {
	      animateOpenTimerRef.current = null;
	      setIsAnimatingOpenOnMount(false);
	    });
	    return tryClearAnimateOpenTimer;
	  }, [animate, isAnimatingOpenOnMount, tryClearAnimateOpenTimer]);
	  const onSizeChangeEnd = useMemoOne.useCallback(event => {
	    if (event.propertyName !== 'height') {
	      return;
	    }

	    onTransitionEnd();

	    if (animate === 'close') {
	      onClose();
	    }
	  }, [animate, onClose, onTransitionEnd]);
	  const style = getStyle({
	    isAnimatingOpenOnMount,
	    animate: props.animate,
	    placeholder: props.placeholder
	  });
	  return React__default["default"].createElement(props.placeholder.tagName, {
	    style,
	    'data-rfd-placeholder-context-id': contextId,
	    onTransitionEnd: onSizeChangeEnd,
	    ref: props.innerRef
	  });
	};

	var Placeholder$1 = React__default["default"].memo(Placeholder);

	function isBoolean(value) {
	  return typeof value === 'boolean';
	}

	function runChecks(args, checks) {
	  checks.forEach(check => check(args));
	}

	const shared = [function required(_ref) {
	  let {
	    props
	  } = _ref;
	  !props.droppableId ? invariant(false, 'A Droppable requires a droppableId prop')  : void 0;
	  !(typeof props.droppableId === 'string') ? invariant(false, `A Droppable requires a [string] droppableId. Provided: [${typeof props.droppableId}]`)  : void 0;
	}, function boolean(_ref2) {
	  let {
	    props
	  } = _ref2;
	  !isBoolean(props.isDropDisabled) ? invariant(false, 'isDropDisabled must be a boolean')  : void 0;
	  !isBoolean(props.isCombineEnabled) ? invariant(false, 'isCombineEnabled must be a boolean')  : void 0;
	  !isBoolean(props.ignoreContainerClipping) ? invariant(false, 'ignoreContainerClipping must be a boolean')  : void 0;
	}, function ref(_ref3) {
	  let {
	    getDroppableRef
	  } = _ref3;
	  checkIsValidInnerRef(getDroppableRef());
	}];
	const standard = [function placeholder(_ref4) {
	  let {
	    props,
	    getPlaceholderRef
	  } = _ref4;

	  if (!props.placeholder) {
	    return;
	  }

	  const ref = getPlaceholderRef();

	  if (ref) {
	    return;
	  }

	  warning(`
      Droppable setup issue [droppableId: "${props.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `) ;
	}];
	const virtual = [function hasClone(_ref5) {
	  let {
	    props
	  } = _ref5;
	  !props.renderClone ? invariant(false, 'Must provide a clone render function (renderClone) for virtual lists')  : void 0;
	}, function hasNoPlaceholder(_ref6) {
	  let {
	    getPlaceholderRef
	  } = _ref6;
	  !!getPlaceholderRef() ? invariant(false, 'Expected virtual list to not have a placeholder')  : void 0;
	}];
	function useValidation(args) {
	  useDevSetupWarning(() => {
	    runChecks(args, shared);

	    if (args.props.mode === 'standard') {
	      runChecks(args, standard);
	    }

	    if (args.props.mode === 'virtual') {
	      runChecks(args, virtual);
	    }
	  });
	}

	class AnimateInOut extends React__default["default"].PureComponent {
	  constructor() {
	    super(...arguments);
	    this.state = {
	      isVisible: Boolean(this.props.on),
	      data: this.props.on,
	      animate: this.props.shouldAnimate && this.props.on ? 'open' : 'none'
	    };

	    this.onClose = () => {
	      if (this.state.animate !== 'close') {
	        return;
	      }

	      this.setState({
	        isVisible: false
	      });
	    };
	  }

	  static getDerivedStateFromProps(props, state) {
	    if (!props.shouldAnimate) {
	      return {
	        isVisible: Boolean(props.on),
	        data: props.on,
	        animate: 'none'
	      };
	    }

	    if (props.on) {
	      return {
	        isVisible: true,
	        data: props.on,
	        animate: 'open'
	      };
	    }

	    if (state.isVisible) {
	      return {
	        isVisible: true,
	        data: state.data,
	        animate: 'close'
	      };
	    }

	    return {
	      isVisible: false,
	      animate: 'close',
	      data: null
	    };
	  }

	  render() {
	    if (!this.state.isVisible) {
	      return null;
	    }

	    const provided = {
	      onClose: this.onClose,
	      data: this.state.data,
	      animate: this.state.animate
	    };
	    return this.props.children(provided);
	  }

	}

	const Droppable = props => {
	  const appContext = React.useContext(AppContext);
	  !appContext ? invariant(false, 'Could not find app context')  : void 0;
	  const {
	    contextId,
	    isMovementAllowed
	  } = appContext;
	  const droppableRef = React.useRef(null);
	  const placeholderRef = React.useRef(null);
	  const {
	    children,
	    droppableId,
	    type,
	    mode,
	    direction,
	    ignoreContainerClipping,
	    isDropDisabled,
	    isCombineEnabled,
	    snapshot,
	    useClone,
	    updateViewportMaxScroll,
	    getContainerForClone
	  } = props;
	  const getDroppableRef = useMemoOne.useCallback(() => droppableRef.current, []);
	  const setDroppableRef = useMemoOne.useCallback(function (value) {
	    if (value === void 0) {
	      value = null;
	    }

	    droppableRef.current = value;
	  }, []);
	  const getPlaceholderRef = useMemoOne.useCallback(() => placeholderRef.current, []);
	  const setPlaceholderRef = useMemoOne.useCallback(function (value) {
	    if (value === void 0) {
	      value = null;
	    }

	    placeholderRef.current = value;
	  }, []);
	  useValidation({
	    props,
	    getDroppableRef,
	    getPlaceholderRef
	  });
	  const onPlaceholderTransitionEnd = useMemoOne.useCallback(() => {
	    if (isMovementAllowed()) {
	      updateViewportMaxScroll({
	        maxScroll: getMaxWindowScroll()
	      });
	    }
	  }, [isMovementAllowed, updateViewportMaxScroll]);
	  useDroppablePublisher({
	    droppableId,
	    type,
	    mode,
	    direction,
	    isDropDisabled,
	    isCombineEnabled,
	    ignoreContainerClipping,
	    getDroppableRef
	  });
	  const placeholder = useMemoOne.useMemo(() => React__default["default"].createElement(AnimateInOut, {
	    on: props.placeholder,
	    shouldAnimate: props.shouldAnimatePlaceholder
	  }, _ref => {
	    let {
	      onClose,
	      data,
	      animate
	    } = _ref;
	    return React__default["default"].createElement(Placeholder$1, {
	      placeholder: data,
	      onClose: onClose,
	      innerRef: setPlaceholderRef,
	      animate: animate,
	      contextId: contextId,
	      onTransitionEnd: onPlaceholderTransitionEnd
	    });
	  }), [contextId, onPlaceholderTransitionEnd, props.placeholder, props.shouldAnimatePlaceholder, setPlaceholderRef]);
	  const provided = useMemoOne.useMemo(() => ({
	    innerRef: setDroppableRef,
	    placeholder,
	    droppableProps: {
	      'data-rfd-droppable-id': droppableId,
	      'data-rfd-droppable-context-id': contextId
	    }
	  }), [contextId, droppableId, placeholder, setDroppableRef]);
	  const isUsingCloneFor = useClone ? useClone.dragging.draggableId : null;
	  const droppableContext = useMemoOne.useMemo(() => ({
	    droppableId,
	    type,
	    isUsingCloneFor
	  }), [droppableId, isUsingCloneFor, type]);

	  function getClone() {
	    if (!useClone) {
	      return null;
	    }

	    const {
	      dragging,
	      render
	    } = useClone;
	    const node = React__default["default"].createElement(PrivateDraggable, {
	      draggableId: dragging.draggableId,
	      index: dragging.source.index,
	      isClone: true,
	      isEnabled: true,
	      shouldRespectForcePress: false,
	      canDragInteractiveElements: true
	    }, (draggableProvided, draggableSnapshot) => render(draggableProvided, draggableSnapshot, dragging));
	    return ReactDOM__default["default"].createPortal(node, getContainerForClone());
	  }

	  return React__default["default"].createElement(DroppableContext.Provider, {
	    value: droppableContext
	  }, children(provided, snapshot), getClone());
	};

	var Droppable$1 = Droppable;

	const isMatchingType = (type, critical) => type === critical.droppable.type;

	const getDraggable = (critical, dimensions) => dimensions.draggables[critical.draggable.id];

	const makeMapStateToProps = () => {
	  const idleWithAnimation = {
	    placeholder: null,
	    shouldAnimatePlaceholder: true,
	    snapshot: {
	      isDraggingOver: false,
	      draggingOverWith: null,
	      draggingFromThisWith: null,
	      isUsingPlaceholder: false
	    },
	    useClone: null
	  };
	  const idleWithoutAnimation = { ...idleWithAnimation,
	    shouldAnimatePlaceholder: false
	  };
	  const getDraggableRubric = memoizeOne__default["default"](descriptor => ({
	    draggableId: descriptor.id,
	    type: descriptor.type,
	    source: {
	      index: descriptor.index,
	      droppableId: descriptor.droppableId
	    }
	  }));
	  const getMapProps = memoizeOne__default["default"]((id, isEnabled, isDraggingOverForConsumer, isDraggingOverForImpact, dragging, renderClone) => {
	    const draggableId = dragging.descriptor.id;
	    const isHome = dragging.descriptor.droppableId === id;

	    if (isHome) {
	      const useClone = renderClone ? {
	        render: renderClone,
	        dragging: getDraggableRubric(dragging.descriptor)
	      } : null;
	      const snapshot = {
	        isDraggingOver: isDraggingOverForConsumer,
	        draggingOverWith: isDraggingOverForConsumer ? draggableId : null,
	        draggingFromThisWith: draggableId,
	        isUsingPlaceholder: true
	      };
	      return {
	        placeholder: dragging.placeholder,
	        shouldAnimatePlaceholder: false,
	        snapshot,
	        useClone
	      };
	    }

	    if (!isEnabled) {
	      return idleWithoutAnimation;
	    }

	    if (!isDraggingOverForImpact) {
	      return idleWithAnimation;
	    }

	    const snapshot = {
	      isDraggingOver: isDraggingOverForConsumer,
	      draggingOverWith: draggableId,
	      draggingFromThisWith: null,
	      isUsingPlaceholder: true
	    };
	    return {
	      placeholder: dragging.placeholder,
	      shouldAnimatePlaceholder: true,
	      snapshot,
	      useClone: null
	    };
	  });

	  const selector = (state, ownProps) => {
	    const id = ownProps.droppableId;
	    const type = ownProps.type;
	    const isEnabled = !ownProps.isDropDisabled;
	    const renderClone = ownProps.renderClone;

	    if (isDragging(state)) {
	      const critical = state.critical;

	      if (!isMatchingType(type, critical)) {
	        return idleWithoutAnimation;
	      }

	      const dragging = getDraggable(critical, state.dimensions);
	      const isDraggingOver = whatIsDraggedOver(state.impact) === id;
	      return getMapProps(id, isEnabled, isDraggingOver, isDraggingOver, dragging, renderClone);
	    }

	    if (state.phase === 'DROP_ANIMATING') {
	      const completed = state.completed;

	      if (!isMatchingType(type, completed.critical)) {
	        return idleWithoutAnimation;
	      }

	      const dragging = getDraggable(completed.critical, state.dimensions);
	      return getMapProps(id, isEnabled, whatIsDraggedOverFromResult(completed.result) === id, whatIsDraggedOver(completed.impact) === id, dragging, renderClone);
	    }

	    if (state.phase === 'IDLE' && state.completed && !state.shouldFlush) {
	      const completed = state.completed;

	      if (!isMatchingType(type, completed.critical)) {
	        return idleWithoutAnimation;
	      }

	      const wasOver = whatIsDraggedOver(completed.impact) === id;
	      const wasCombining = Boolean(completed.impact.at && completed.impact.at.type === 'COMBINE');
	      const isHome = completed.critical.droppable.id === id;

	      if (wasOver) {
	        return wasCombining ? idleWithAnimation : idleWithoutAnimation;
	      }

	      if (isHome) {
	        return idleWithAnimation;
	      }

	      return idleWithoutAnimation;
	    }

	    return idleWithoutAnimation;
	  };

	  return selector;
	};
	const mapDispatchToProps$2 = {
	  updateViewportMaxScroll: updateViewportMaxScroll
	};

	function getBody() {
	  !document.body ? invariant(false, 'document.body is not ready')  : void 0;
	  return document.body;
	}

	const defaultProps = {
	  mode: 'standard',
	  type: 'DEFAULT',
	  direction: 'vertical',
	  isDropDisabled: false,
	  isCombineEnabled: false,
	  ignoreContainerClipping: false,
	  renderClone: null,
	  getContainerForClone: getBody
	};
	const ConnectedDroppable = reactRedux.connect(makeMapStateToProps, mapDispatchToProps$2, null, {
	  context: StoreContext,
	  areStatePropsEqual: isStrictEqual
	})(Droppable$1);
	ConnectedDroppable.defaultProps = defaultProps;
	var ConnectedDroppable$1 = ConnectedDroppable;

	var DragDropContext_1 = dnd_cjs.DragDropContext = DragDropContext;
	var Draggable_1 = dnd_cjs.Draggable = PublicDraggable;
	var Droppable_1 = dnd_cjs.Droppable = ConnectedDroppable$1;
	dnd_cjs.resetServerContext = resetServerContext;
	dnd_cjs.useKeyboardSensor = useKeyboardSensor;
	dnd_cjs.useMouseSensor = useMouseSensor;
	dnd_cjs.useTouchSensor = useTouchSensor;

	const AddNewItemButton = props => {
	  const {
	    resource,
	    property
	  } = props;
	  const {
	    translateProperty,
	    translateButton
	  } = useTranslation();
	  const label = translateProperty(`${property.path}.addNewItem`, resource.id, {
	    defaultValue: translateButton('addNewItem', resource.id)
	  });
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, null, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Icon, {
	    icon: "Add"
	  }), label);
	};

	const PropertyDescription = props => {
	  const {
	    property
	  } = props;

	  if (!property.description) {
	    return null;
	  }

	  const direction = property.custom?.tooltipDirection || 'top';
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    mx: "sm",
	    display: "inline-flex"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Tooltip, {
	    direction: direction,
	    title: property.description,
	    size: "lg"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, null, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Icon, {
	    icon: "Help",
	    color: "info"
	  }))));
	};

	const OverridablePropertyDescription = allowOverride(PropertyDescription, 'PropertyDescription');

	const PropertyLabel = props => {
	  const {
	    property,
	    props: labelProps
	  } = props;

	  if (property.hideLabel) {
	    return null;
	  }

	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Label, _extends$2({
	    htmlFor: property.path,
	    required: property.isRequired
	  }, labelProps), property.label, property.description && /*#__PURE__*/React__default$1["default"].createElement(OverridablePropertyDescription, {
	    property: property
	  }));
	};

	const OverridablePropertyLabel = allowOverride(PropertyLabel, 'PropertyLabel');

	const getSubpropertyPath = (...params) => [...params].join(DELIMITER);
	/**
	 * Converts property: PropertyJSON from an array to a sub-property for an actual item in the array
	 * It change path that it has index inside along with the label. Futhermore flat isArray is removed
	 * ,because it was already handled, so that itemRenderer can render property as a regular one
	 *
	 * @param {PropertyJSON}  arrayProperty property with path set to an root Array type property,
	 * @param {Number}        index         index under which sub-property should be placed
	 * @private
	 * @hide
	 */

	const convertToSubProperty$1 = (arrayProperty, index) => ({ ...arrayProperty,

	  /**
	   * @ucodkr 20230323
	   * array type select index is users.0.id
	   */
	  path: getSubpropertyPath(arrayProperty.path, index, 'id'),
	  label: `[${index + 1}]`,
	  isArray: false,
	  isDraggable: false
	});

	/**
	 * Removes selected array item from given record. It performs following tasks:
	 * 1. removes array item from the array
	 * 2. reorders keys in new array item
	 * 3. if property has populated fields it also reorders them
	 * it uses {@link flat } module and its removePath method
	 *
	 * @param {RecordJSON} record
	 * @param {string}     subPropertyPath            which has to be removed. It has to be flattened
	 *                                                in notation, and ending with array index
	 * @private
	 * @hide
	 */
	const removeSubProperty = (record, subPropertyPath) => {
	  // by default populated is flatten just to the path level - object itself is not flatten. That is
	  // why we have to retrieve the original state. That is why we have to replace record.populated to
	  // from { 'some.nested.1.key': RecordJSON } to { 'some.nested.1.key': 'some.nested.1.key' },
	  // then remove keys, and refill back some.nested.1.key to the value from the original populated
	  // object.
	  const populatedKeyMap = Object.keys(record.populated).reduce((memo, propertyKey) => ({ ...memo,
	    [propertyKey]: propertyKey
	  }), {});
	  const newPopulatedKeyMap = flat.removePath(populatedKeyMap, subPropertyPath);
	  const newPopulated = Object.entries(newPopulatedKeyMap).reduce((memo, [newPropertyKey, oldPropertyKey]) => ({ ...memo,
	    [newPropertyKey]: oldPropertyKey && record.populated[oldPropertyKey?.toString()]
	  }), {});
	  return { ...record,
	    params: flat.removePath(record.params, subPropertyPath),
	    populated: newPopulated
	  };
	};

	const ItemRenderer = props => {
	  const {
	    ItemComponent,
	    property,
	    onDelete,
	    index,
	    record,
	    isDraggable
	  } = props;
	  const uniqueDraggableId = window.btoa(unescape(encodeURIComponent(`${JSON.stringify(flat.get(record.params, property.path))}-${property.path}`)));
	  return /*#__PURE__*/React__default$1["default"].createElement(Draggable_1, {
	    draggableId: uniqueDraggableId,
	    index: index,
	    key: uniqueDraggableId,
	    isDragDisabled: !isDraggable
	  }, provided => /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, _extends$2({
	    ref: provided.innerRef
	  }, provided.draggableProps, provided.dragHandleProps, {
	    backgroundColor: "white",
	    flex: true,
	    flexDirection: "row",
	    alignItems: "center",
	    "data-testid": property.path
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    flexGrow: 1
	  }, /*#__PURE__*/React__default$1["default"].createElement(ItemComponent, props)), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    flexShrink: 0,
	    ml: "lg"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Button, {
	    rounded: true,
	    ml: "default",
	    "data-testid": "delete-item",
	    type: "button",
	    size: "icon",
	    onClick: event => onDelete(event, property),
	    variant: "danger"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Icon, {
	    icon: "TrashCan"
	  })))));
	};

	const InputsInSection = props => {
	  const {
	    property,
	    record,
	    resource,
	    onChange
	  } = props;
	  const items = flat.get(record.params, property.path) || [];
	  const addNew = React$1.useCallback(event => {
	    const newItems = [...items, property.subProperties.length ? {} : ''];
	    onChange(property.path, newItems);
	    event.preventDefault();
	    return false;
	  }, [record, onChange, property]);
	  const removeItem = React$1.useCallback((event, subProperty) => {
	    const newRecord = removeSubProperty(record, subProperty.path);
	    onChange(newRecord);
	    event.preventDefault();
	    return false;
	  }, [record, onChange, property]);
	  const handleOnDragEnd = React$1.useCallback(result => {
	    const {
	      source,
	      destination
	    } = result;
	    if (!source || !destination || destination.index === source.index) return;
	    const itemsCopy = Array.from(items);
	    const [sourceItem] = itemsCopy.splice(source.index, 1);
	    itemsCopy.splice(destination.index, 0, sourceItem);
	    onChange(property.path, itemsCopy);
	  }, [record, onChange, property]);
	  return /*#__PURE__*/React__default$1["default"].createElement(DragDropContext_1, {
	    onDragEnd: handleOnDragEnd
	  }, /*#__PURE__*/React__default$1["default"].createElement(Droppable_1, {
	    droppableId: property.path
	  }, provided => /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Section, _extends$2({
	    ref: provided.innerRef
	  }, provided.droppableProps, {
	    mt: "xl",
	    className: property.path
	  }), items.map((item, i) => {
	    const itemProperty = convertToSubProperty$1(property, i);
	    return /*#__PURE__*/React__default$1["default"].createElement(ItemRenderer, _extends$2({}, props, {
	      property: itemProperty,
	      isDraggable: property.isDraggable,
	      key: itemProperty.path,
	      onDelete: removeItem,
	      index: i
	    }));
	  }), provided.placeholder, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Button, {
	    onClick: addNew,
	    type: "button",
	    rounded: true
	  }, /*#__PURE__*/React__default$1["default"].createElement(AddNewItemButton, {
	    resource: resource,
	    property: property
	  })))));
	};

	const Edit$c = props => {
	  const {
	    property,
	    record,
	    testId
	  } = props;
	  const error = record.errors && record.errors[property.propertyPath];
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    error: !!error,
	    "data-testid": testId
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridablePropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default$1["default"].createElement(InputsInSection, props), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	const OverridableEdit$1 = allowOverride(Edit$c, 'DefaultArrayEditProperty');

	const List$9 = props => {
	  const {
	    property,
	    record
	  } = props;
	  const values = flat.get(record.params, property.path) || [];
	  const {
	    translateProperty
	  } = useTranslation();
	  return /*#__PURE__*/React__default$1["default"].createElement("span", null, `${translateProperty('length')}: ${values.length}`);
	};

	var list$8 = allowOverride(List$9, 'DefaultArrayListProperty');

	const Show$b = props => {
	  const {
	    property,
	    record,
	    ItemComponent
	  } = props;
	  const items = flat.get(record.params, property.path) || [];
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.ValueGroup, {
	    label: property.label
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Section, null, (items || []).map((item, i) => {
	    const itemProperty = convertToSubProperty$1(property, i);
	    record.populated[itemProperty.path] = {
	      // params: item,
	      title: item.title || item.name || item.email || item.userName,
	      // TODO change title
	      recordActions: new Array(0)
	    };
	    return /*#__PURE__*/React__default$1["default"].createElement(ItemComponent, _extends$2({}, props, {
	      key: itemProperty.path,
	      property: itemProperty
	    }));
	  })));
	};

	var show$9 = allowOverride(Show$b, 'DefaultArrayShowProperty');

	// import Show from './show'

	var ArrayType = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: show$9,
		edit: OverridableEdit$1,
		list: list$8
	});

	const EditKeyValuePair = props => {
	  const {
	    onKeyChange,
	    onValueChange,
	    onRemoveItem,
	    property,
	    objectValue,
	    objectKey,
	    error
	  } = props;
	  const {
	    tm
	  } = useTranslation();
	  const [currentValue, setValue] = React$1.useState(objectValue ?? '');
	  const [currentKey, setKey] = React$1.useState(objectKey ?? '');
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    flex: true,
	    mb: "lg"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    flex: true,
	    justifyContent: "space-between",
	    flexGrow: 1,
	    flexShrink: 0
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error),
	    mr: "lg",
	    mb: "0px"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Input, _extends$2({
	    placeholder: tm('keyPlaceholder'),
	    onChange: e => setKey(e.target.value),
	    onBlur: () => onKeyChange(objectKey, currentKey),
	    onKeyDown: e => e.keyCode === 13 && onKeyChange(objectKey, currentKey),
	    value: currentKey
	  }, property.props?.keyInputProps ?? {})), error && /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormMessage, null, error.message)), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    mb: "0px"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Input, _extends$2({
	    placeholder: tm('valuePlaceholder'),
	    onChange: e => setValue(e.target.value),
	    onBlur: () => onValueChange(currentKey, currentValue),
	    onKeyDown: e => e.keyCode === 13 && onValueChange(currentKey, currentValue),
	    value: currentValue,
	    disabled: !objectKey
	  }, property.props?.valueInputProps ?? {})))), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Button, {
	    rounded: true,
	    ml: "sm",
	    "data-testid": "delete-item",
	    type: "button",
	    size: "icon",
	    onClick: () => onRemoveItem(currentKey),
	    variant: "danger",
	    flexGrow: 0,
	    flexShrink: 1
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Icon, {
	    icon: "TrashCan"
	  })));
	};

	const Edit$b = props => {
	  const {
	    property,
	    record,
	    onChange,
	    resource
	  } = props;
	  const {
	    tm,
	    tb
	  } = useTranslation();
	  const [objectValue, setObjectValue] = React$1.useState(flat.get(record.params, property.path) ?? {});

	  const handleKeyChange = (oldKey, newKey) => {
	    if (oldKey === newKey) return;
	    const tmpValue = objectValue[oldKey]; // eslint-disable-next-line @typescript-eslint/no-unused-vars

	    const {
	      [oldKey]: _removedKey,
	      ...objectCopy
	    } = objectValue;
	    objectCopy[newKey] = tmpValue ?? '';
	    setObjectValue(parseObjectValue(objectCopy));
	  };

	  const handleValueChange = (key, value) => {
	    objectValue[key] = value;
	    setObjectValue(parseObjectValue({ ...objectValue
	    }));
	  };

	  const parseObjectValue = obj => Object.entries(obj).reduce((memo, [k, v]) => {
	    if (!k || !k.length) return memo;
	    memo[k] = v;
	    return memo;
	  }, {});
	  /**
	   * This is used to prevent empty/duplicate keys from being added to JSON
	   */


	  const getNextKey = previousId => {
	    const nextId = previousId ? previousId + 1 : Object.keys(objectValue ?? {}).length + 1;
	    const nextKey = `${tm('initialKey', resource.id, {
      number: nextId
    })}`;

	    if (objectValue[nextKey] !== undefined) {
	      return getNextKey(nextId);
	    }

	    return nextKey;
	  };

	  const addNewKeyValuePair = event => {
	    event.preventDefault();
	    const key = getNextKey();
	    objectValue[key] = '';
	    setObjectValue(parseObjectValue({ ...objectValue
	    }));
	  };

	  const handleRemoveItem = key => {
	    // eslint-disable-next-line @typescript-eslint/no-unused-vars
	    const {
	      [key]: _removedKey,
	      ...objectCopy
	    } = objectValue;
	    setObjectValue(parseObjectValue(objectCopy));
	  };

	  React$1.useEffect(() => {
	    onChange(property.path, objectValue);
	  }, [objectValue]);
	  const error = record.errors && record.errors[property.path];

	  if (property.description === undefined) {
	    property.description = tm('keyValuePropertyDefaultDescription', resource.id);
	  }

	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridablePropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Section, property.props, Object.entries(objectValue).map(([key, value]) => /*#__PURE__*/React__default$1["default"].createElement(EditKeyValuePair, {
	    key: key,
	    property: property,
	    objectValue: value,
	    objectKey: key,
	    onKeyChange: handleKeyChange,
	    onValueChange: handleValueChange,
	    onRemoveItem: handleRemoveItem,
	    error: record.errors[`${property.path}${flat.DELIMITER}${key}`]
	  })), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Button, {
	    mt: "lg",
	    variant: "primary",
	    onClick: addNewKeyValuePair
	  }, tb('addNewItem', resource.id))), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	const ShowKeyValuePair = props => {
	  const {
	    objectValue,
	    objectKey
	  } = props;
	  const {
	    tm
	  } = useTranslation();
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    flex: true,
	    mb: "lg"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    mr: "lg",
	    mb: "0px"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Input, {
	    placeholder: tm('keyPlaceholder'),
	    value: objectKey,
	    disabled: true
	  })), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    mb: "0px"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Input, {
	    placeholder: tm('valuePlaceholder'),
	    value: objectValue,
	    disabled: true
	  })));
	};

	const Show$a = props => {
	  const {
	    property,
	    record
	  } = props;
	  const objectValue = flat.get(record.params, property.path) ?? {};
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.ValueGroup, {
	    label: property.label
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Section, null, Object.entries(objectValue).map(([key, value]) => /*#__PURE__*/React__default$1["default"].createElement(ShowKeyValuePair, {
	    key: key,
	    objectValue: value,
	    objectKey: key
	  }))));
	};

	var KeyValueType = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: Edit$b,
		show: Show$a
	});

	function convertToSubProperty(property, subProperty) {
	  const [subPropertyPath] = subProperty.name.split(DELIMITER).slice(-1);
	  return { ...subProperty,
	    path: [property.path, subPropertyPath].join(DELIMITER)
	  };
	}

	const Edit$a = props => {
	  const {
	    property,
	    record,
	    ItemComponent
	  } = props;
	  const error = record.errors && record.errors[property.path];
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridablePropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Section, property.props, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => {
	    const subPropertyWithPath = convertToSubProperty(property, subProperty);
	    return /*#__PURE__*/React__default$1["default"].createElement(ItemComponent, _extends$2({}, props, {
	      key: subPropertyWithPath.path,
	      property: subPropertyWithPath
	    }));
	  })), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$9 = allowOverride(Edit$a, 'DefaultMixedEditProperty');

	const Show$9 = props => {
	  const {
	    property,
	    ItemComponent
	  } = props;
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.ValueGroup, {
	    label: property.label
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Section, null, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => {
	    const subPropertyWithPath = convertToSubProperty(property, subProperty);
	    return /*#__PURE__*/React__default$1["default"].createElement(ItemComponent, _extends$2({}, props, {
	      key: subPropertyWithPath.path,
	      property: subPropertyWithPath
	    }));
	  })));
	};

	var show$8 = allowOverride(Show$9, 'DefaultMixedShowProperty');

	const List$8 = props => {
	  const {
	    property,
	    record,
	    resource,
	    ItemComponent
	  } = props;

	  const renderItems = () => /*#__PURE__*/React__default$1["default"].createElement(React__default$1["default"].Fragment, null, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => {
	    const subPropertyWithPath = convertToSubProperty(property, subProperty);
	    return /*#__PURE__*/React__default$1["default"].createElement("div", {
	      key: subPropertyWithPath.path
	    }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Label, {
	      inline: true
	    }, `${subProperty.label}: `), /*#__PURE__*/React__default$1["default"].createElement(ItemComponent, _extends$2({}, props, {
	      property: subPropertyWithPath
	    })));
	  }));

	  const showAction = record.recordActions.find(a => a.name === 'show');

	  if (resource.titleProperty.propertyPath === property.propertyPath && showAction) {
	    const h = new ViewHelpers();
	    const href = h.recordActionUrl({
	      resourceId: resource.id,
	      recordId: record.id,
	      actionName: 'show'
	    });
	    return /*#__PURE__*/React__default$1["default"].createElement(reactRouterDom.Link, {
	      to: href
	    }, renderItems());
	  }

	  return renderItems();
	};

	var list$7 = allowOverride(List$8, 'DefaultMixedListProperty');

	// import Show from './show'

	var MixedType = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: show$8,
		edit: edit$9,
		list: list$7
	});

	/* eslint-disable import/prefer-default-export */

	/**
	 * Function used in React memo to compare if previous property value and next
	 * property value are the same.
	 *
	 * @private
	 */
	const recordPropertyIsEqual = (prevProps, nextProps) => {
	  const prevValue = prevProps.record.params[prevProps.property.path];
	  const nextValue = nextProps.record.params[nextProps.property.path];
	  const prevError = prevProps.record.errors[prevProps.property.path];
	  const nextError = nextProps.record.errors[nextProps.property.path];
	  return prevValue === nextValue && prevError === nextError;
	};

	const parseValue = value => !(!value || value === 'false');

	const Edit$9 = props => {
	  const {
	    property,
	    onChange,
	    record
	  } = props;
	  const value = parseValue(record.params && record.params[property.path]);
	  const error = record.errors && record.errors[property.path];

	  const handleChange = () => {
	    if (!property.isDisabled) {
	      onChange(property.path, !value);
	    }
	  };

	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.CheckBox, _extends$2({
	    id: property.path,
	    name: property.path,
	    onChange: handleChange,
	    checked: value,
	    disabled: property.isDisabled
	  }, property.props)), /*#__PURE__*/React__default$1["default"].createElement(OverridablePropertyLabel, {
	    property: property,
	    props: {
	      inline: true
	    }
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$8 = allowOverride( /*#__PURE__*/React$1.memo(Edit$9, recordPropertyIsEqual), 'DefaultBooleanEditProperty');

	var mapValue$1 = (value => {
	  if (typeof value === 'undefined') {
	    return '';
	  }

	  return value ? 'Yes' : 'No';
	});

	const BooleanPropertyValue = props => {
	  const {
	    record,
	    property,
	    resource
	  } = props;
	  const {
	    translateProperty
	  } = useTranslation();
	  const rawValue = record?.params[property.path];

	  if (typeof rawValue === 'undefined' || rawValue === '') {
	    return null;
	  }

	  const base = mapValue$1(rawValue);
	  const translation = translateProperty(`${property.path}.${rawValue}`, resource.id, {
	    defaultValue: base
	  });
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Badge, {
	    outline: true,
	    size: "sm"
	  }, translation);
	};

	var BooleanPropertyValue$1 = allowOverride(BooleanPropertyValue, 'BooleanPropertyValue');

	const Show$8 = props => {
	  const {
	    property
	  } = props;
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.ValueGroup, {
	    label: property.label
	  }, /*#__PURE__*/React__default$1["default"].createElement(BooleanPropertyValue$1, props));
	};

	var show$7 = allowOverride(Show$8, 'DefaultBooleanShowProperty');

	const List$7 = props => /*#__PURE__*/React__default$1["default"].createElement(BooleanPropertyValue$1, props);

	var list$6 = allowOverride(List$7, 'DefaultBooleanListProperty');

	const boolValue = s => {
	  if (/true/i.test(s)) {
	    return true;
	  }

	  return false;
	};

	const Filter$6 = props => {
	  const {
	    property,
	    filter = {},
	    onChange
	  } = props;
	  const value = typeof filter[property.path] === 'undefined' ? '' : boolValue(filter[property.path]);
	  const options = [{
	    value: true,
	    label: mapValue$1(true)
	  }, {
	    value: false,
	    label: mapValue$1(false)
	  }];
	  const selected = options.find(o => o.value === value);

	  const handleChange = s => {
	    const newValue = s ? s.value : undefined;
	    onChange(property.path, newValue);
	  };

	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, null, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Label, null, property.label), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Select, {
	    variant: "filter",
	    value: typeof selected === 'undefined' ? '' : selected,
	    isClearable: true,
	    options: options,
	    onChange: handleChange
	  }));
	};

	var filter$5 = allowOverride(Filter$6, 'DefaultBooleanFilterProperty');

	var boolean = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$8,
		show: show$7,
		list: list$6,
		filter: filter$5
	});

	const CurrencyInputWrapper = props => {
	  const {
	    id,
	    initial,
	    onChange,
	    options
	  } = props;
	  const [value, setValue] = React$1.useState(initial);

	  const onValueChange = currentValue => {
	    setValue(currentValue);
	    onChange(currentValue);
	  };

	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.CurrencyInput, _extends$2({
	    id: id,
	    name: id,
	    value: value,
	    onValueChange: onValueChange
	  }, options));
	};

	const OverridableCurrencyInputWrapper = allowOverride(CurrencyInputWrapper, 'CurrencyPropertyInputWrapper');

	const Edit$8 = props => {
	  const {
	    onChange,
	    property,
	    record
	  } = props;
	  const propValue = record.params?.[property.path] ?? '';
	  const error = record.errors?.[property.path];
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridablePropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default$1["default"].createElement(OverridableCurrencyInputWrapper, {
	    id: property.path,
	    initial: propValue,
	    options: property.props,
	    onChange: value => onChange(property.path, value)
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$7 = allowOverride( /*#__PURE__*/React$1.memo(Edit$8, recordPropertyIsEqual), 'DefaultCurrencyEditProperty');

	const Filter$5 = props => {
	  const {
	    onChange,
	    property,
	    filter
	  } = props;

	  const handleChange = value => {
	    onChange(property.path, value);
	  };

	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    variant: "filter"
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridablePropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.CurrencyInput, _extends$2({
	    id: property.path,
	    name: `filter-${property.path}`,
	    onValueChange: handleChange,
	    value: filter[property.path]
	  }, property.props)));
	};

	var filter$4 = allowOverride(Filter$5, 'DefaultCurrencyFilterProperty');

	const optionsKeys = ['value', 'decimalSeparator', 'groupSeparator', 'disableGroupSeparators', 'intlConfig', 'decimalScale', 'prefix', 'suffix'];

	const pickFormatOptions = props => {
	  const pickedProps = Object.keys(props).reduce((acc, curr) => {
	    if (optionsKeys.includes(curr)) {
	      if (props[curr] !== null && props[curr] !== undefined) {
	        acc[curr] = props[curr].toString();
	      }
	    }

	    return acc;
	  }, {});
	  return pickedProps;
	};

	const formatValue = (value, props = {}) => {
	  const formatOptions = pickFormatOptions({
	    value,
	    ...props
	  });
	  return DesignSystem.formatCurrencyProperty(formatOptions);
	};

	const List$6 = props => {
	  const {
	    property,
	    record
	  } = props;
	  const value = formatValue(record.params[property.path], property.props);
	  return /*#__PURE__*/React__default$1["default"].createElement("span", null, value);
	};

	var list$5 = allowOverride(List$6, 'DefaultCurrencyListProperty');

	const Show$7 = props => {
	  const {
	    property,
	    record
	  } = props;
	  const value = `${record.params[property.path]}`;
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.ValueGroup, {
	    label: property.label
	  }, formatValue(value, property.props));
	};

	var show$6 = allowOverride(Show$7, 'DefaultCurrencyShowProperty');

	var currency = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$7,
		filter: filter$4,
		list: list$5,
		show: show$6
	});

	const Edit$7 = props => {
	  const {
	    property,
	    onChange,
	    record
	  } = props;
	  const value = record.params && record.params[property.path] || '';
	  const error = record.errors && record.errors[property.path];
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridablePropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.DatePicker, _extends$2({
	    value: value,
	    disabled: property.isDisabled,
	    onChange: date => onChange(property.path, date),
	    propertyType: property.type
	  }, property.props)), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$6 = allowOverride( /*#__PURE__*/React$1.memo(Edit$7, recordPropertyIsEqual), 'DefaultDatetimeEditProperty');

	var mapValue = ((value, propertyType) => {
	  if (!value) {
	    return '';
	  }

	  const date = new Date(value);

	  if (date) {
	    return DesignSystem.formatDateProperty(date, propertyType);
	  }

	  return '';
	});

	const Show$6 = props => {
	  const {
	    property,
	    record
	  } = props;
	  const value = mapValue(record.params[property.path], property.type);
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.ValueGroup, {
	    label: property.label
	  }, value);
	};

	var show$5 = allowOverride(Show$6, 'DefaultDatetimeShowProperty');

	const List$5 = props => {
	  const {
	    property,
	    record
	  } = props;
	  const value = mapValue(record.params[property.path], property.type);
	  return /*#__PURE__*/React__default$1["default"].createElement("span", null, value);
	};

	var list$4 = allowOverride(List$5, 'DefaultDatetimeListProperty');

	const PARAM_SEPARATOR$1 = '~~';

	/**
	 * Filter object wrapping up selected filters.
	 * @private
	 */
	class Filter$4 {
	  /**
	   * Changes raw nested filters to form Object<path, value>.
	   *
	   * @example
	   * const filters = {
	   *  nested: {field: 'ala'},
	   *  'dataField~~from': '2019-08-14'
	   * }
	   *
	   * const normalized = Filter.normalizeFilters(filters)
	   * // {
	   * //   'nested.filter': 'ala',
	   * //   'dataField': {from: '2019-08-14'}
	   * // }
	   *
	   *
	   * @param   {Object}  filters
	   *
	   * @return  {Object}
	   */
	  static normalizeKeys(filters) {
	    return flat.unflatten(flat.flatten(filters), {
	      delimiter: PARAM_SEPARATOR$1
	    });
	  }
	  /**
	   * @param   {Object<String,Object | String>}  filters   selected filters
	   * @param   {BaseResource}                    resource    resource which is filtered
	   */


	  constructor(filters = {}, resource) {
	    this.resource = resource;
	    const normalized = Filter$4.normalizeKeys(filters);
	    this.filters = Object.keys(normalized).reduce((memo, path) => {
	      memo[path] = {
	        path,
	        property: this.resource.property(path),
	        value: normalized[path]
	      };
	      return memo;
	    }, {});
	  }
	  /**
	   * Returns filter for a given property key
	   *
	   * @param {String} key      property key
	   * @returns {Filter.Property | undefined}
	   */


	  get(key) {
	    return this.filters[key];
	  }
	  /**
	   * Populates all filtered properties which refers to other resources
	   */


	  async populate(context) {
	    const keys = Object.keys(this.filters);

	    for (let index = 0; index < keys.length; index += 1) {
	      const key = keys[index];
	      const referenceResource = this.resource.decorate().getPropertyByKey(key)?.reference();

	      if (referenceResource) {
	        const value = this.filters[key].value;
	        this.filters[key].populated = await referenceResource.findOne(value, context);
	      }
	    }

	    return this;
	  }

	  reduce(callback, initial) {
	    return Object.values(this.filters).reduce(callback, initial || {});
	  }

	  isVisible() {
	    return !!Object.keys(this.filters).length;
	  }

	}

	var BackendFilter = /*#__PURE__*/Object.freeze({
		__proto__: null,
		PARAM_SEPARATOR: PARAM_SEPARATOR$1,
		Filter: Filter$4,
		'default': Filter$4
	});

	const {
	  PARAM_SEPARATOR
	} = BackendFilter;

	const Filter$3 = props => {
	  const {
	    property,
	    filter,
	    onChange
	  } = props;
	  const {
	    translateProperty
	  } = useTranslation();
	  const fromKey = `${property.path}${PARAM_SEPARATOR}from`;
	  const toKey = `${property.path}${PARAM_SEPARATOR}to`;
	  const fromValue = filter[fromKey];
	  const toValue = filter[toKey];
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    variant: "filter"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Label, null, property.label), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Label, null, `- ${translateProperty('from')}: `), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.DatePicker, {
	    value: fromValue,
	    onChange: date => onChange(fromKey, date),
	    propertyType: property.type
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Label, {
	    mt: "default"
	  }, `- ${translateProperty('to')}: `), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.DatePicker, {
	    value: toValue,
	    onChange: date => onChange(toKey, date),
	    propertyType: property.type
	  }));
	};

	var filter$3 = allowOverride(Filter$3, 'DefaultDatetimeFilterProperty');

	var datetime = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$6,
		show: show$5,
		list: list$4,
		filter: filter$3
	});

	const DefaultPropertyValue = props => {
	  const {
	    property,
	    record
	  } = props;
	  const rawValue = record?.params[property.path];

	  if (typeof rawValue === 'undefined') {
	    return null;
	  }

	  if (property.availableValues) {
	    const option = property.availableValues.find(opt => opt.value === rawValue);

	    if (!option) {
	      return rawValue;
	    }

	    return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Badge, null, option?.label || rawValue);
	  }

	  return rawValue;
	};

	var DefaultPropertyValue$1 = allowOverride(DefaultPropertyValue, 'DefaultPropertyValue');

	const Show$5 = props => {
	  const {
	    property
	  } = props;
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.ValueGroup, {
	    label: property.label
	  }, /*#__PURE__*/React__default$1["default"].createElement(DefaultPropertyValue$1, props));
	};

	var show$4 = allowOverride(Show$5, 'DefaultShowProperty');

	const Edit$6 = props => {
	  const {
	    property,
	    record
	  } = props;
	  const error = record.errors?.[property.path];
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridablePropertyLabel, {
	    property: property
	  }), property.availableValues ? /*#__PURE__*/React__default$1["default"].createElement(SelectEdit, props) : /*#__PURE__*/React__default$1["default"].createElement(TextEdit, props), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	const SelectEdit = props => {
	  const {
	    record,
	    property,
	    onChange
	  } = props;

	  if (!property.availableValues) {
	    return null;
	  }

	  const propValue = record.params?.[property.path] ?? '';
	  const selected = property.availableValues.find(av => av.value === propValue);
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Select, _extends$2({
	    value: selected,
	    options: property.availableValues,
	    onChange: s => onChange(property.path, s?.value ?? ''),
	    isDisabled: property.isDisabled
	  }, property.props));
	};

	const TextEdit = props => {
	  const {
	    property,
	    record,
	    onChange
	  } = props;
	  const propValue = record.params?.[property.path] ?? '';
	  const [value, setValue] = React$1.useState(propValue);
	  React$1.useEffect(() => {
	    if (value !== propValue) {
	      setValue(propValue);
	    }
	  }, [propValue]);
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Input, _extends$2({
	    id: property.path,
	    name: property.path,
	    required: property.isRequired,
	    onChange: e => setValue(e.target.value),
	    onBlur: () => onChange(property.path, value) // handle clicking ENTER
	    ,
	    onKeyDown: e => e.keyCode === 13 && onChange(property.path, value),
	    value: value,
	    disabled: property.isDisabled
	  }, property.props));
	};

	var edit$5 = allowOverride( /*#__PURE__*/React$1.memo(Edit$6, recordPropertyIsEqual), 'DefaultEditProperty');

	const Filter$2 = props => {
	  const {
	    property,
	    onChange,
	    filter
	  } = props;

	  const handleInputChange = event => {
	    onChange(property.path, event.target.value);
	  };

	  const handleSelectChange = selected => {
	    const value = selected ? selected.value : '';
	    onChange(property.path, value);
	  };

	  const renderInput = () => {
	    const filterKey = `filter-${property.path}`;
	    const value = filter[property.path] || '';

	    if (property.availableValues) {
	      const selected = property.availableValues.find(av => av.value === value);
	      return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Select, {
	        variant: "filter",
	        value: typeof selected === 'undefined' ? '' : selected,
	        isClearable: true,
	        options: property.availableValues,
	        onChange: handleSelectChange
	      });
	    }

	    return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Input, {
	      name: filterKey,
	      onChange: handleInputChange,
	      value: value
	    });
	  };

	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    variant: "filter"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Label, null, property.label), renderInput());
	};

	var filter$2 = allowOverride(Filter$2, 'DefaultFilterProperty');

	const List$4 = props => /*#__PURE__*/React__default$1["default"].createElement(DefaultPropertyValue$1, props);

	var list$3 = allowOverride(List$4, 'DefaultListProperty');

	var defaultType = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: show$4,
		edit: edit$5,
		filter: filter$2,
		list: list$3
	});

	const Edit$5 = props => {
	  const {
	    property,
	    record,
	    onChange
	  } = props;
	  const propValue = record.params[property.path];
	  const [value, setValue] = React$1.useState(propValue);
	  const error = record.errors && record.errors[property.path];
	  const [isInput, setIsInput] = React$1.useState(false);
	  React$1.useEffect(() => {
	    if (value !== propValue) {
	      setValue(propValue);
	    }
	  }, [propValue]);
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridablePropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.InputGroup, null, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Input, _extends$2({
	    type: isInput ? 'input' : 'password',
	    className: "input",
	    id: property.path,
	    name: property.path,
	    onChange: event => setValue(event.target.value),
	    onBlur: () => onChange(property.path, value),
	    onKeyDown: e => e.keyCode === 13 && onChange(property.path, value),
	    value: value ?? '',
	    disabled: property.isDisabled
	  }, property.props)), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Button, {
	    variant: isInput ? 'primary' : 'text',
	    type: "button",
	    size: "icon",
	    onClick: () => setIsInput(!isInput)
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Icon, {
	    icon: "View"
	  }))), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$4 = allowOverride( /*#__PURE__*/React$1.memo(Edit$5, recordPropertyIsEqual), 'DefaultPasswordEditProperty');

	/* eslint-disable import/prefer-default-export */

	var password = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$4
	});

	const Edit$4 = props => {
	  const {
	    onChange,
	    property,
	    record
	  } = props;
	  const propValue = record.params?.[property.path] ?? '';
	  const [value, setValue] = React$1.useState(propValue);
	  const error = record.errors?.[property.path];
	  React$1.useEffect(() => {
	    if (value !== propValue) {
	      setValue(propValue);
	    }
	  }, [propValue]);
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridablePropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.PhoneInput, _extends$2({
	    id: property.path,
	    inputProps: {
	      name: property.path,
	      required: property.isRequired
	    },
	    onChange: setValue,
	    onBlur: () => onChange(property.path, value),
	    value: value
	  }, property.props)), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$3 = allowOverride( /*#__PURE__*/React$1.memo(Edit$4, recordPropertyIsEqual), 'DefaultPhoneEditProperty');

	const Filter$1 = props => {
	  const {
	    onChange,
	    property,
	    filter
	  } = props;
	  const handleChange = React$1.useCallback(value => {
	    onChange(property.path, value);
	  }, []);
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    variant: "filter"
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridablePropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.PhoneInput, _extends$2({
	    id: property.path,
	    inputProps: {
	      name: `filter-${property.path}`
	    },
	    onChange: handleChange,
	    value: filter[property.path]
	  }, property.props)));
	};

	var filter$1 = allowOverride(Filter$1, 'DefaultPhoneFilterProperty');

	const List$3 = props => /*#__PURE__*/React__default$1["default"].createElement(DefaultPropertyValue$1, props);

	var list$2 = allowOverride(List$3, 'DefaultPhoneListProperty');

	const Show$4 = props => {
	  const {
	    property
	  } = props;
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.ValueGroup, {
	    label: property.label
	  }, /*#__PURE__*/React__default$1["default"].createElement(DefaultPropertyValue$1, props));
	};

	var show$3 = allowOverride(Show$4, 'DefaultPhoneShowProperty');

	var phone = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$3,
		filter: filter$1,
		list: list$2,
		show: show$3
	});

	const Edit$3 = props => {
	  const {
	    onChange,
	    property,
	    record
	  } = props;
	  const {
	    reference: resourceId
	  } = property;

	  if (!resourceId) {
	    throw new Error(`Cannot reference resource in property '${property.path}'`);
	  }

	  const handleChange = selected => {
	    if (selected) {
	      onChange(property.path, selected.value, selected.record);
	    } else {
	      onChange(property.path, null);
	    }
	  };

	  const loadOptions = async inputValue => {
	    const api = new ApiClient();
	    const optionRecords = await api.searchRecords({
	      resourceId,
	      query: inputValue
	    });
	    return optionRecords.map(optionRecord => ({
	      value: optionRecord.id,
	      label: optionRecord.title,
	      record: optionRecord
	    }));
	  };

	  const error = record?.errors[property.path];
	  const selectedId = React$1.useMemo(() => flat.get(record?.params, property.path), [record]);
	  const [loadedRecord, setLoadedRecord] = React$1.useState();
	  const [loadingRecord, setLoadingRecord] = React$1.useState(0);
	  React$1.useEffect(() => {
	    if (selectedId) {
	      setLoadingRecord(c => c + 1);
	      const api = new ApiClient();
	      api.recordAction({
	        actionName: 'show',
	        resourceId,
	        recordId: selectedId
	      }).then(({
	        data
	      }) => {
	        setLoadedRecord(data.record);
	      }).finally(() => {
	        setLoadingRecord(c => c - 1);
	      });
	    }
	  }, [selectedId, resourceId]);
	  const selectedValue = loadedRecord;
	  const selectedOption = selectedId && selectedValue ? {
	    value: selectedValue.id,
	    label: selectedValue.title
	  } : {
	    value: '',
	    label: ''
	  };
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridablePropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.SelectAsync, _extends$2({
	    cacheOptions: true,
	    value: selectedOption,
	    defaultOptions: true,
	    loadOptions: loadOptions,
	    onChange: handleChange,
	    isClearable: true,
	    isDisabled: property.isDisabled,
	    isLoading: !!loadingRecord
	  }, property.props)), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormMessage, null, error?.message));
	};

	var edit$2 = allowOverride( /*#__PURE__*/React$1.memo(Edit$3, recordPropertyIsEqual), 'DefaultReferenceEditProperty');

	const StyledLink = styled__default["default"](reactRouterDom.Link).withConfig({
	  displayName: "reference-value__StyledLink",
	  componentId: "sc-bdxg6p-0"
	})(["", ";padding-left:", ";padding-right:", ";"], DesignSystem.ButtonCSS, ({
	  theme
	}) => theme.space.xs, ({
	  theme
	}) => theme.space.xs);

	const ReferenceValue = props => {
	  const {
	    property,
	    record
	  } = props;
	  const h = new ViewHelpers();
	  const refId = record.params[property.path];
	  const populated = record.populated[property.path];
	  const value = populated && populated.title || refId;

	  if (!property.reference) {
	    throw new Error(`property: "${property.path}" does not have a reference`);
	  }

	  if (populated && populated.recordActions.find(a => a.name === 'show')) {
	    const href = h.recordActionUrl({
	      resourceId: property.reference,
	      recordId: refId,
	      actionName: 'show'
	    });
	    return /*#__PURE__*/React__default$1["default"].createElement(StyledLink, {
	      variant: "text",
	      to: href
	    }, value);
	  }

	  return /*#__PURE__*/React__default$1["default"].createElement("span", null, value);
	};

	var ReferenceValue$1 = allowOverride(ReferenceValue, 'DefaultReferenceValue');

	const Show$3 = props => {
	  const {
	    property,
	    record
	  } = props;
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.ValueGroup, {
	    label: property.label
	  }, /*#__PURE__*/React__default$1["default"].createElement(ReferenceValue$1, {
	    property: property,
	    record: record
	  }));
	};

	var show$2 = allowOverride(Show$3, 'DefaultReferenceShowProperty');

	const List$2 = props => /*#__PURE__*/React__default$1["default"].createElement(ReferenceValue$1, props);

	var list$1 = allowOverride(List$2, 'DefaultReferenceListProperty');

	const Filter = props => {
	  const {
	    property,
	    filter,
	    onChange
	  } = props;
	  const [options, setOptions] = React$1.useState([]);
	  const api = new ApiClient();

	  const handleChange = selected => {
	    onChange(property.path, selected ? selected.value : '');
	  };

	  const loadOptions = async inputValue => {
	    const records = await api.searchRecords({
	      resourceId: property.reference,
	      query: inputValue
	    });
	    const loadedOptions = records.map(r => ({
	      value: r.id,
	      label: r.title
	    }));
	    setOptions(loadedOptions);
	    return loadedOptions;
	  };

	  const value = typeof filter[property.path] === 'undefined' ? '' : filter[property.path];
	  const selected = (options || []).find(o => String(o.value) === String(value));
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, null, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Label, null, property.label), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.SelectAsync, {
	    variant: "filter",
	    value: typeof selected === 'undefined' ? '' : selected,
	    isClearable: true,
	    cacheOptions: true,
	    loadOptions: loadOptions,
	    onChange: handleChange,
	    defaultOptions: true
	  }));
	};

	var filter = allowOverride(Filter, 'DefaultReferenceFilterProperty');

	var reference = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$2,
		show: show$2,
		list: list$1,
		filter: filter
	});

	const Edit$2 = props => {
	  const {
	    property,
	    record,
	    onChange
	  } = props;
	  const value = record.params?.[property.path];
	  const error = record.errors && record.errors[property.path];
	  const handleUpdate = React$1.useCallback(newValue => {
	    onChange(property.path, newValue);
	  }, []);
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridablePropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.RichTextEditor, {
	    value: value,
	    onChange: handleUpdate,
	    options: property.props
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormMessage, null, error?.message));
	};

	var edit$1 = allowOverride( /*#__PURE__*/React$1.memo(Edit$2, recordPropertyIsEqual), 'DefaultRichtextEditProperty');

	var lib$1 = {exports: {}};

	var _default$1 = {};

	var lib = {exports: {}};

	var _default = {};

	/**
	 * cssfilter
	 *
	 * @author 老雷<leizongmin@gmail.com>
	 */

	function getDefaultWhiteList$1 () {
	  // 白名单值说明：
	  // true: 允许该属性
	  // Function: function (val) { } 返回true表示允许该属性，其他值均表示不允许
	  // RegExp: regexp.test(val) 返回true表示允许该属性，其他值均表示不允许
	  // 除上面列出的值外均表示不允许
	  var whiteList = {};

	  whiteList['align-content'] = false; // default: auto
	  whiteList['align-items'] = false; // default: auto
	  whiteList['align-self'] = false; // default: auto
	  whiteList['alignment-adjust'] = false; // default: auto
	  whiteList['alignment-baseline'] = false; // default: baseline
	  whiteList['all'] = false; // default: depending on individual properties
	  whiteList['anchor-point'] = false; // default: none
	  whiteList['animation'] = false; // default: depending on individual properties
	  whiteList['animation-delay'] = false; // default: 0
	  whiteList['animation-direction'] = false; // default: normal
	  whiteList['animation-duration'] = false; // default: 0
	  whiteList['animation-fill-mode'] = false; // default: none
	  whiteList['animation-iteration-count'] = false; // default: 1
	  whiteList['animation-name'] = false; // default: none
	  whiteList['animation-play-state'] = false; // default: running
	  whiteList['animation-timing-function'] = false; // default: ease
	  whiteList['azimuth'] = false; // default: center
	  whiteList['backface-visibility'] = false; // default: visible
	  whiteList['background'] = true; // default: depending on individual properties
	  whiteList['background-attachment'] = true; // default: scroll
	  whiteList['background-clip'] = true; // default: border-box
	  whiteList['background-color'] = true; // default: transparent
	  whiteList['background-image'] = true; // default: none
	  whiteList['background-origin'] = true; // default: padding-box
	  whiteList['background-position'] = true; // default: 0% 0%
	  whiteList['background-repeat'] = true; // default: repeat
	  whiteList['background-size'] = true; // default: auto
	  whiteList['baseline-shift'] = false; // default: baseline
	  whiteList['binding'] = false; // default: none
	  whiteList['bleed'] = false; // default: 6pt
	  whiteList['bookmark-label'] = false; // default: content()
	  whiteList['bookmark-level'] = false; // default: none
	  whiteList['bookmark-state'] = false; // default: open
	  whiteList['border'] = true; // default: depending on individual properties
	  whiteList['border-bottom'] = true; // default: depending on individual properties
	  whiteList['border-bottom-color'] = true; // default: current color
	  whiteList['border-bottom-left-radius'] = true; // default: 0
	  whiteList['border-bottom-right-radius'] = true; // default: 0
	  whiteList['border-bottom-style'] = true; // default: none
	  whiteList['border-bottom-width'] = true; // default: medium
	  whiteList['border-collapse'] = true; // default: separate
	  whiteList['border-color'] = true; // default: depending on individual properties
	  whiteList['border-image'] = true; // default: none
	  whiteList['border-image-outset'] = true; // default: 0
	  whiteList['border-image-repeat'] = true; // default: stretch
	  whiteList['border-image-slice'] = true; // default: 100%
	  whiteList['border-image-source'] = true; // default: none
	  whiteList['border-image-width'] = true; // default: 1
	  whiteList['border-left'] = true; // default: depending on individual properties
	  whiteList['border-left-color'] = true; // default: current color
	  whiteList['border-left-style'] = true; // default: none
	  whiteList['border-left-width'] = true; // default: medium
	  whiteList['border-radius'] = true; // default: 0
	  whiteList['border-right'] = true; // default: depending on individual properties
	  whiteList['border-right-color'] = true; // default: current color
	  whiteList['border-right-style'] = true; // default: none
	  whiteList['border-right-width'] = true; // default: medium
	  whiteList['border-spacing'] = true; // default: 0
	  whiteList['border-style'] = true; // default: depending on individual properties
	  whiteList['border-top'] = true; // default: depending on individual properties
	  whiteList['border-top-color'] = true; // default: current color
	  whiteList['border-top-left-radius'] = true; // default: 0
	  whiteList['border-top-right-radius'] = true; // default: 0
	  whiteList['border-top-style'] = true; // default: none
	  whiteList['border-top-width'] = true; // default: medium
	  whiteList['border-width'] = true; // default: depending on individual properties
	  whiteList['bottom'] = false; // default: auto
	  whiteList['box-decoration-break'] = true; // default: slice
	  whiteList['box-shadow'] = true; // default: none
	  whiteList['box-sizing'] = true; // default: content-box
	  whiteList['box-snap'] = true; // default: none
	  whiteList['box-suppress'] = true; // default: show
	  whiteList['break-after'] = true; // default: auto
	  whiteList['break-before'] = true; // default: auto
	  whiteList['break-inside'] = true; // default: auto
	  whiteList['caption-side'] = false; // default: top
	  whiteList['chains'] = false; // default: none
	  whiteList['clear'] = true; // default: none
	  whiteList['clip'] = false; // default: auto
	  whiteList['clip-path'] = false; // default: none
	  whiteList['clip-rule'] = false; // default: nonzero
	  whiteList['color'] = true; // default: implementation dependent
	  whiteList['color-interpolation-filters'] = true; // default: auto
	  whiteList['column-count'] = false; // default: auto
	  whiteList['column-fill'] = false; // default: balance
	  whiteList['column-gap'] = false; // default: normal
	  whiteList['column-rule'] = false; // default: depending on individual properties
	  whiteList['column-rule-color'] = false; // default: current color
	  whiteList['column-rule-style'] = false; // default: medium
	  whiteList['column-rule-width'] = false; // default: medium
	  whiteList['column-span'] = false; // default: none
	  whiteList['column-width'] = false; // default: auto
	  whiteList['columns'] = false; // default: depending on individual properties
	  whiteList['contain'] = false; // default: none
	  whiteList['content'] = false; // default: normal
	  whiteList['counter-increment'] = false; // default: none
	  whiteList['counter-reset'] = false; // default: none
	  whiteList['counter-set'] = false; // default: none
	  whiteList['crop'] = false; // default: auto
	  whiteList['cue'] = false; // default: depending on individual properties
	  whiteList['cue-after'] = false; // default: none
	  whiteList['cue-before'] = false; // default: none
	  whiteList['cursor'] = false; // default: auto
	  whiteList['direction'] = false; // default: ltr
	  whiteList['display'] = true; // default: depending on individual properties
	  whiteList['display-inside'] = true; // default: auto
	  whiteList['display-list'] = true; // default: none
	  whiteList['display-outside'] = true; // default: inline-level
	  whiteList['dominant-baseline'] = false; // default: auto
	  whiteList['elevation'] = false; // default: level
	  whiteList['empty-cells'] = false; // default: show
	  whiteList['filter'] = false; // default: none
	  whiteList['flex'] = false; // default: depending on individual properties
	  whiteList['flex-basis'] = false; // default: auto
	  whiteList['flex-direction'] = false; // default: row
	  whiteList['flex-flow'] = false; // default: depending on individual properties
	  whiteList['flex-grow'] = false; // default: 0
	  whiteList['flex-shrink'] = false; // default: 1
	  whiteList['flex-wrap'] = false; // default: nowrap
	  whiteList['float'] = false; // default: none
	  whiteList['float-offset'] = false; // default: 0 0
	  whiteList['flood-color'] = false; // default: black
	  whiteList['flood-opacity'] = false; // default: 1
	  whiteList['flow-from'] = false; // default: none
	  whiteList['flow-into'] = false; // default: none
	  whiteList['font'] = true; // default: depending on individual properties
	  whiteList['font-family'] = true; // default: implementation dependent
	  whiteList['font-feature-settings'] = true; // default: normal
	  whiteList['font-kerning'] = true; // default: auto
	  whiteList['font-language-override'] = true; // default: normal
	  whiteList['font-size'] = true; // default: medium
	  whiteList['font-size-adjust'] = true; // default: none
	  whiteList['font-stretch'] = true; // default: normal
	  whiteList['font-style'] = true; // default: normal
	  whiteList['font-synthesis'] = true; // default: weight style
	  whiteList['font-variant'] = true; // default: normal
	  whiteList['font-variant-alternates'] = true; // default: normal
	  whiteList['font-variant-caps'] = true; // default: normal
	  whiteList['font-variant-east-asian'] = true; // default: normal
	  whiteList['font-variant-ligatures'] = true; // default: normal
	  whiteList['font-variant-numeric'] = true; // default: normal
	  whiteList['font-variant-position'] = true; // default: normal
	  whiteList['font-weight'] = true; // default: normal
	  whiteList['grid'] = false; // default: depending on individual properties
	  whiteList['grid-area'] = false; // default: depending on individual properties
	  whiteList['grid-auto-columns'] = false; // default: auto
	  whiteList['grid-auto-flow'] = false; // default: none
	  whiteList['grid-auto-rows'] = false; // default: auto
	  whiteList['grid-column'] = false; // default: depending on individual properties
	  whiteList['grid-column-end'] = false; // default: auto
	  whiteList['grid-column-start'] = false; // default: auto
	  whiteList['grid-row'] = false; // default: depending on individual properties
	  whiteList['grid-row-end'] = false; // default: auto
	  whiteList['grid-row-start'] = false; // default: auto
	  whiteList['grid-template'] = false; // default: depending on individual properties
	  whiteList['grid-template-areas'] = false; // default: none
	  whiteList['grid-template-columns'] = false; // default: none
	  whiteList['grid-template-rows'] = false; // default: none
	  whiteList['hanging-punctuation'] = false; // default: none
	  whiteList['height'] = true; // default: auto
	  whiteList['hyphens'] = false; // default: manual
	  whiteList['icon'] = false; // default: auto
	  whiteList['image-orientation'] = false; // default: auto
	  whiteList['image-resolution'] = false; // default: normal
	  whiteList['ime-mode'] = false; // default: auto
	  whiteList['initial-letters'] = false; // default: normal
	  whiteList['inline-box-align'] = false; // default: last
	  whiteList['justify-content'] = false; // default: auto
	  whiteList['justify-items'] = false; // default: auto
	  whiteList['justify-self'] = false; // default: auto
	  whiteList['left'] = false; // default: auto
	  whiteList['letter-spacing'] = true; // default: normal
	  whiteList['lighting-color'] = true; // default: white
	  whiteList['line-box-contain'] = false; // default: block inline replaced
	  whiteList['line-break'] = false; // default: auto
	  whiteList['line-grid'] = false; // default: match-parent
	  whiteList['line-height'] = false; // default: normal
	  whiteList['line-snap'] = false; // default: none
	  whiteList['line-stacking'] = false; // default: depending on individual properties
	  whiteList['line-stacking-ruby'] = false; // default: exclude-ruby
	  whiteList['line-stacking-shift'] = false; // default: consider-shifts
	  whiteList['line-stacking-strategy'] = false; // default: inline-line-height
	  whiteList['list-style'] = true; // default: depending on individual properties
	  whiteList['list-style-image'] = true; // default: none
	  whiteList['list-style-position'] = true; // default: outside
	  whiteList['list-style-type'] = true; // default: disc
	  whiteList['margin'] = true; // default: depending on individual properties
	  whiteList['margin-bottom'] = true; // default: 0
	  whiteList['margin-left'] = true; // default: 0
	  whiteList['margin-right'] = true; // default: 0
	  whiteList['margin-top'] = true; // default: 0
	  whiteList['marker-offset'] = false; // default: auto
	  whiteList['marker-side'] = false; // default: list-item
	  whiteList['marks'] = false; // default: none
	  whiteList['mask'] = false; // default: border-box
	  whiteList['mask-box'] = false; // default: see individual properties
	  whiteList['mask-box-outset'] = false; // default: 0
	  whiteList['mask-box-repeat'] = false; // default: stretch
	  whiteList['mask-box-slice'] = false; // default: 0 fill
	  whiteList['mask-box-source'] = false; // default: none
	  whiteList['mask-box-width'] = false; // default: auto
	  whiteList['mask-clip'] = false; // default: border-box
	  whiteList['mask-image'] = false; // default: none
	  whiteList['mask-origin'] = false; // default: border-box
	  whiteList['mask-position'] = false; // default: center
	  whiteList['mask-repeat'] = false; // default: no-repeat
	  whiteList['mask-size'] = false; // default: border-box
	  whiteList['mask-source-type'] = false; // default: auto
	  whiteList['mask-type'] = false; // default: luminance
	  whiteList['max-height'] = true; // default: none
	  whiteList['max-lines'] = false; // default: none
	  whiteList['max-width'] = true; // default: none
	  whiteList['min-height'] = true; // default: 0
	  whiteList['min-width'] = true; // default: 0
	  whiteList['move-to'] = false; // default: normal
	  whiteList['nav-down'] = false; // default: auto
	  whiteList['nav-index'] = false; // default: auto
	  whiteList['nav-left'] = false; // default: auto
	  whiteList['nav-right'] = false; // default: auto
	  whiteList['nav-up'] = false; // default: auto
	  whiteList['object-fit'] = false; // default: fill
	  whiteList['object-position'] = false; // default: 50% 50%
	  whiteList['opacity'] = false; // default: 1
	  whiteList['order'] = false; // default: 0
	  whiteList['orphans'] = false; // default: 2
	  whiteList['outline'] = false; // default: depending on individual properties
	  whiteList['outline-color'] = false; // default: invert
	  whiteList['outline-offset'] = false; // default: 0
	  whiteList['outline-style'] = false; // default: none
	  whiteList['outline-width'] = false; // default: medium
	  whiteList['overflow'] = false; // default: depending on individual properties
	  whiteList['overflow-wrap'] = false; // default: normal
	  whiteList['overflow-x'] = false; // default: visible
	  whiteList['overflow-y'] = false; // default: visible
	  whiteList['padding'] = true; // default: depending on individual properties
	  whiteList['padding-bottom'] = true; // default: 0
	  whiteList['padding-left'] = true; // default: 0
	  whiteList['padding-right'] = true; // default: 0
	  whiteList['padding-top'] = true; // default: 0
	  whiteList['page'] = false; // default: auto
	  whiteList['page-break-after'] = false; // default: auto
	  whiteList['page-break-before'] = false; // default: auto
	  whiteList['page-break-inside'] = false; // default: auto
	  whiteList['page-policy'] = false; // default: start
	  whiteList['pause'] = false; // default: implementation dependent
	  whiteList['pause-after'] = false; // default: implementation dependent
	  whiteList['pause-before'] = false; // default: implementation dependent
	  whiteList['perspective'] = false; // default: none
	  whiteList['perspective-origin'] = false; // default: 50% 50%
	  whiteList['pitch'] = false; // default: medium
	  whiteList['pitch-range'] = false; // default: 50
	  whiteList['play-during'] = false; // default: auto
	  whiteList['position'] = false; // default: static
	  whiteList['presentation-level'] = false; // default: 0
	  whiteList['quotes'] = false; // default: text
	  whiteList['region-fragment'] = false; // default: auto
	  whiteList['resize'] = false; // default: none
	  whiteList['rest'] = false; // default: depending on individual properties
	  whiteList['rest-after'] = false; // default: none
	  whiteList['rest-before'] = false; // default: none
	  whiteList['richness'] = false; // default: 50
	  whiteList['right'] = false; // default: auto
	  whiteList['rotation'] = false; // default: 0
	  whiteList['rotation-point'] = false; // default: 50% 50%
	  whiteList['ruby-align'] = false; // default: auto
	  whiteList['ruby-merge'] = false; // default: separate
	  whiteList['ruby-position'] = false; // default: before
	  whiteList['shape-image-threshold'] = false; // default: 0.0
	  whiteList['shape-outside'] = false; // default: none
	  whiteList['shape-margin'] = false; // default: 0
	  whiteList['size'] = false; // default: auto
	  whiteList['speak'] = false; // default: auto
	  whiteList['speak-as'] = false; // default: normal
	  whiteList['speak-header'] = false; // default: once
	  whiteList['speak-numeral'] = false; // default: continuous
	  whiteList['speak-punctuation'] = false; // default: none
	  whiteList['speech-rate'] = false; // default: medium
	  whiteList['stress'] = false; // default: 50
	  whiteList['string-set'] = false; // default: none
	  whiteList['tab-size'] = false; // default: 8
	  whiteList['table-layout'] = false; // default: auto
	  whiteList['text-align'] = true; // default: start
	  whiteList['text-align-last'] = true; // default: auto
	  whiteList['text-combine-upright'] = true; // default: none
	  whiteList['text-decoration'] = true; // default: none
	  whiteList['text-decoration-color'] = true; // default: currentColor
	  whiteList['text-decoration-line'] = true; // default: none
	  whiteList['text-decoration-skip'] = true; // default: objects
	  whiteList['text-decoration-style'] = true; // default: solid
	  whiteList['text-emphasis'] = true; // default: depending on individual properties
	  whiteList['text-emphasis-color'] = true; // default: currentColor
	  whiteList['text-emphasis-position'] = true; // default: over right
	  whiteList['text-emphasis-style'] = true; // default: none
	  whiteList['text-height'] = true; // default: auto
	  whiteList['text-indent'] = true; // default: 0
	  whiteList['text-justify'] = true; // default: auto
	  whiteList['text-orientation'] = true; // default: mixed
	  whiteList['text-overflow'] = true; // default: clip
	  whiteList['text-shadow'] = true; // default: none
	  whiteList['text-space-collapse'] = true; // default: collapse
	  whiteList['text-transform'] = true; // default: none
	  whiteList['text-underline-position'] = true; // default: auto
	  whiteList['text-wrap'] = true; // default: normal
	  whiteList['top'] = false; // default: auto
	  whiteList['transform'] = false; // default: none
	  whiteList['transform-origin'] = false; // default: 50% 50% 0
	  whiteList['transform-style'] = false; // default: flat
	  whiteList['transition'] = false; // default: depending on individual properties
	  whiteList['transition-delay'] = false; // default: 0s
	  whiteList['transition-duration'] = false; // default: 0s
	  whiteList['transition-property'] = false; // default: all
	  whiteList['transition-timing-function'] = false; // default: ease
	  whiteList['unicode-bidi'] = false; // default: normal
	  whiteList['vertical-align'] = false; // default: baseline
	  whiteList['visibility'] = false; // default: visible
	  whiteList['voice-balance'] = false; // default: center
	  whiteList['voice-duration'] = false; // default: auto
	  whiteList['voice-family'] = false; // default: implementation dependent
	  whiteList['voice-pitch'] = false; // default: medium
	  whiteList['voice-range'] = false; // default: medium
	  whiteList['voice-rate'] = false; // default: normal
	  whiteList['voice-stress'] = false; // default: normal
	  whiteList['voice-volume'] = false; // default: medium
	  whiteList['volume'] = false; // default: medium
	  whiteList['white-space'] = false; // default: normal
	  whiteList['widows'] = false; // default: 2
	  whiteList['width'] = true; // default: auto
	  whiteList['will-change'] = false; // default: auto
	  whiteList['word-break'] = true; // default: normal
	  whiteList['word-spacing'] = true; // default: normal
	  whiteList['word-wrap'] = true; // default: normal
	  whiteList['wrap-flow'] = false; // default: auto
	  whiteList['wrap-through'] = false; // default: wrap
	  whiteList['writing-mode'] = false; // default: horizontal-tb
	  whiteList['z-index'] = false; // default: auto

	  return whiteList;
	}


	/**
	 * 匹配到白名单上的一个属性时
	 *
	 * @param {String} name
	 * @param {String} value
	 * @param {Object} options
	 * @return {String}
	 */
	function onAttr (name, value, options) {
	  // do nothing
	}

	/**
	 * 匹配到不在白名单上的一个属性时
	 *
	 * @param {String} name
	 * @param {String} value
	 * @param {Object} options
	 * @return {String}
	 */
	function onIgnoreAttr (name, value, options) {
	  // do nothing
	}

	var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;

	/**
	 * 过滤属性值
	 *
	 * @param {String} name
	 * @param {String} value
	 * @return {String}
	 */
	function safeAttrValue$1(name, value) {
	  if (REGEXP_URL_JAVASCRIPT.test(value)) return '';
	  return value;
	}


	_default.whiteList = getDefaultWhiteList$1();
	_default.getDefaultWhiteList = getDefaultWhiteList$1;
	_default.onAttr = onAttr;
	_default.onIgnoreAttr = onIgnoreAttr;
	_default.safeAttrValue = safeAttrValue$1;

	var util$1 = {
	  indexOf: function (arr, item) {
	    var i, j;
	    if (Array.prototype.indexOf) {
	      return arr.indexOf(item);
	    }
	    for (i = 0, j = arr.length; i < j; i++) {
	      if (arr[i] === item) {
	        return i;
	      }
	    }
	    return -1;
	  },
	  forEach: function (arr, fn, scope) {
	    var i, j;
	    if (Array.prototype.forEach) {
	      return arr.forEach(fn, scope);
	    }
	    for (i = 0, j = arr.length; i < j; i++) {
	      fn.call(scope, arr[i], i, arr);
	    }
	  },
	  trim: function (str) {
	    if (String.prototype.trim) {
	      return str.trim();
	    }
	    return str.replace(/(^\s*)|(\s*$)/g, '');
	  },
	  trimRight: function (str) {
	    if (String.prototype.trimRight) {
	      return str.trimRight();
	    }
	    return str.replace(/(\s*$)/g, '');
	  }
	};

	/**
	 * cssfilter
	 *
	 * @author 老雷<leizongmin@gmail.com>
	 */

	var _$3 = util$1;


	/**
	 * 解析style
	 *
	 * @param {String} css
	 * @param {Function} onAttr 处理属性的函数
	 *   参数格式： function (sourcePosition, position, name, value, source)
	 * @return {String}
	 */
	function parseStyle$1 (css, onAttr) {
	  css = _$3.trimRight(css);
	  if (css[css.length - 1] !== ';') css += ';';
	  var cssLength = css.length;
	  var isParenthesisOpen = false;
	  var lastPos = 0;
	  var i = 0;
	  var retCSS = '';

	  function addNewAttr () {
	    // 如果没有正常的闭合圆括号，则直接忽略当前属性
	    if (!isParenthesisOpen) {
	      var source = _$3.trim(css.slice(lastPos, i));
	      var j = source.indexOf(':');
	      if (j !== -1) {
	        var name = _$3.trim(source.slice(0, j));
	        var value = _$3.trim(source.slice(j + 1));
	        // 必须有属性名称
	        if (name) {
	          var ret = onAttr(lastPos, retCSS.length, name, value, source);
	          if (ret) retCSS += ret + '; ';
	        }
	      }
	    }
	    lastPos = i + 1;
	  }

	  for (; i < cssLength; i++) {
	    var c = css[i];
	    if (c === '/' && css[i + 1] === '*') {
	      // 备注开始
	      var j = css.indexOf('*/', i + 2);
	      // 如果没有正常的备注结束，则后面的部分全部跳过
	      if (j === -1) break;
	      // 直接将当前位置调到备注结尾，并且初始化状态
	      i = j + 1;
	      lastPos = i + 1;
	      isParenthesisOpen = false;
	    } else if (c === '(') {
	      isParenthesisOpen = true;
	    } else if (c === ')') {
	      isParenthesisOpen = false;
	    } else if (c === ';') {
	      if (isParenthesisOpen) ; else {
	        addNewAttr();
	      }
	    } else if (c === '\n') {
	      addNewAttr();
	    }
	  }

	  return _$3.trim(retCSS);
	}

	var parser$2 = parseStyle$1;

	/**
	 * cssfilter
	 *
	 * @author 老雷<leizongmin@gmail.com>
	 */

	var DEFAULT$1 = _default;
	var parseStyle = parser$2;


	/**
	 * 返回值是否为空
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 */
	function isNull$1 (obj) {
	  return (obj === undefined || obj === null);
	}

	/**
	 * 浅拷贝对象
	 *
	 * @param {Object} obj
	 * @return {Object}
	 */
	function shallowCopyObject$1 (obj) {
	  var ret = {};
	  for (var i in obj) {
	    ret[i] = obj[i];
	  }
	  return ret;
	}

	/**
	 * 创建CSS过滤器
	 *
	 * @param {Object} options
	 *   - {Object} whiteList
	 *   - {Function} onAttr
	 *   - {Function} onIgnoreAttr
	 *   - {Function} safeAttrValue
	 */
	function FilterCSS$2 (options) {
	  options = shallowCopyObject$1(options || {});
	  options.whiteList = options.whiteList || DEFAULT$1.whiteList;
	  options.onAttr = options.onAttr || DEFAULT$1.onAttr;
	  options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT$1.onIgnoreAttr;
	  options.safeAttrValue = options.safeAttrValue || DEFAULT$1.safeAttrValue;
	  this.options = options;
	}

	FilterCSS$2.prototype.process = function (css) {
	  // 兼容各种奇葩输入
	  css = css || '';
	  css = css.toString();
	  if (!css) return '';

	  var me = this;
	  var options = me.options;
	  var whiteList = options.whiteList;
	  var onAttr = options.onAttr;
	  var onIgnoreAttr = options.onIgnoreAttr;
	  var safeAttrValue = options.safeAttrValue;

	  var retCSS = parseStyle(css, function (sourcePosition, position, name, value, source) {

	    var check = whiteList[name];
	    var isWhite = false;
	    if (check === true) isWhite = check;
	    else if (typeof check === 'function') isWhite = check(value);
	    else if (check instanceof RegExp) isWhite = check.test(value);
	    if (isWhite !== true) isWhite = false;

	    // 如果过滤后 value 为空则直接忽略
	    value = safeAttrValue(name, value);
	    if (!value) return;

	    var opts = {
	      position: position,
	      sourcePosition: sourcePosition,
	      source: source,
	      isWhite: isWhite
	    };

	    if (isWhite) {

	      var ret = onAttr(name, value, opts);
	      if (isNull$1(ret)) {
	        return name + ':' + value;
	      } else {
	        return ret;
	      }

	    } else {

	      var ret = onIgnoreAttr(name, value, opts);
	      if (!isNull$1(ret)) {
	        return ret;
	      }

	    }
	  });

	  return retCSS;
	};


	var css = FilterCSS$2;

	/**
	 * cssfilter
	 *
	 * @author 老雷<leizongmin@gmail.com>
	 */

	(function (module, exports) {
		var DEFAULT = _default;
		var FilterCSS = css;


		/**
		 * XSS过滤
		 *
		 * @param {String} css 要过滤的CSS代码
		 * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
		 * @return {String}
		 */
		function filterCSS (html, options) {
		  var xss = new FilterCSS(options);
		  return xss.process(html);
		}


		// 输出
		exports = module.exports = filterCSS;
		exports.FilterCSS = FilterCSS;
		for (var i in DEFAULT) exports[i] = DEFAULT[i];

		// 在浏览器端使用
		if (typeof window !== 'undefined') {
		  window.filterCSS = module.exports;
		}
	} (lib, lib.exports));

	var util = {
	  indexOf: function (arr, item) {
	    var i, j;
	    if (Array.prototype.indexOf) {
	      return arr.indexOf(item);
	    }
	    for (i = 0, j = arr.length; i < j; i++) {
	      if (arr[i] === item) {
	        return i;
	      }
	    }
	    return -1;
	  },
	  forEach: function (arr, fn, scope) {
	    var i, j;
	    if (Array.prototype.forEach) {
	      return arr.forEach(fn, scope);
	    }
	    for (i = 0, j = arr.length; i < j; i++) {
	      fn.call(scope, arr[i], i, arr);
	    }
	  },
	  trim: function (str) {
	    if (String.prototype.trim) {
	      return str.trim();
	    }
	    return str.replace(/(^\s*)|(\s*$)/g, "");
	  },
	  spaceIndex: function (str) {
	    var reg = /\s|\n|\t/;
	    var match = reg.exec(str);
	    return match ? match.index : -1;
	  },
	};

	/**
	 * default settings
	 *
	 * @author Zongmin Lei<leizongmin@gmail.com>
	 */

	var FilterCSS$1 = lib.exports.FilterCSS;
	var getDefaultCSSWhiteList = lib.exports.getDefaultWhiteList;
	var _$2 = util;

	function getDefaultWhiteList() {
	  return {
	    a: ["target", "href", "title"],
	    abbr: ["title"],
	    address: [],
	    area: ["shape", "coords", "href", "alt"],
	    article: [],
	    aside: [],
	    audio: [
	      "autoplay",
	      "controls",
	      "crossorigin",
	      "loop",
	      "muted",
	      "preload",
	      "src",
	    ],
	    b: [],
	    bdi: ["dir"],
	    bdo: ["dir"],
	    big: [],
	    blockquote: ["cite"],
	    br: [],
	    caption: [],
	    center: [],
	    cite: [],
	    code: [],
	    col: ["align", "valign", "span", "width"],
	    colgroup: ["align", "valign", "span", "width"],
	    dd: [],
	    del: ["datetime"],
	    details: ["open"],
	    div: [],
	    dl: [],
	    dt: [],
	    em: [],
	    figcaption: [],
	    figure: [],
	    font: ["color", "size", "face"],
	    footer: [],
	    h1: [],
	    h2: [],
	    h3: [],
	    h4: [],
	    h5: [],
	    h6: [],
	    header: [],
	    hr: [],
	    i: [],
	    img: ["src", "alt", "title", "width", "height"],
	    ins: ["datetime"],
	    li: [],
	    mark: [],
	    nav: [],
	    ol: [],
	    p: [],
	    pre: [],
	    s: [],
	    section: [],
	    small: [],
	    span: [],
	    sub: [],
	    summary: [],
	    sup: [],
	    strong: [],
	    strike: [],
	    table: ["width", "border", "align", "valign"],
	    tbody: ["align", "valign"],
	    td: ["width", "rowspan", "colspan", "align", "valign"],
	    tfoot: ["align", "valign"],
	    th: ["width", "rowspan", "colspan", "align", "valign"],
	    thead: ["align", "valign"],
	    tr: ["rowspan", "align", "valign"],
	    tt: [],
	    u: [],
	    ul: [],
	    video: [
	      "autoplay",
	      "controls",
	      "crossorigin",
	      "loop",
	      "muted",
	      "playsinline",
	      "poster",
	      "preload",
	      "src",
	      "height",
	      "width",
	    ],
	  };
	}

	var defaultCSSFilter = new FilterCSS$1();

	/**
	 * default onTag function
	 *
	 * @param {String} tag
	 * @param {String} html
	 * @param {Object} options
	 * @return {String}
	 */
	function onTag(tag, html, options) {
	  // do nothing
	}

	/**
	 * default onIgnoreTag function
	 *
	 * @param {String} tag
	 * @param {String} html
	 * @param {Object} options
	 * @return {String}
	 */
	function onIgnoreTag(tag, html, options) {
	  // do nothing
	}

	/**
	 * default onTagAttr function
	 *
	 * @param {String} tag
	 * @param {String} name
	 * @param {String} value
	 * @return {String}
	 */
	function onTagAttr(tag, name, value) {
	  // do nothing
	}

	/**
	 * default onIgnoreTagAttr function
	 *
	 * @param {String} tag
	 * @param {String} name
	 * @param {String} value
	 * @return {String}
	 */
	function onIgnoreTagAttr(tag, name, value) {
	  // do nothing
	}

	/**
	 * default escapeHtml function
	 *
	 * @param {String} html
	 */
	function escapeHtml(html) {
	  return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
	}

	/**
	 * default safeAttrValue function
	 *
	 * @param {String} tag
	 * @param {String} name
	 * @param {String} value
	 * @param {Object} cssFilter
	 * @return {String}
	 */
	function safeAttrValue(tag, name, value, cssFilter) {
	  // unescape attribute value firstly
	  value = friendlyAttrValue(value);

	  if (name === "href" || name === "src") {
	    // filter `href` and `src` attribute
	    // only allow the value that starts with `http://` | `https://` | `mailto:` | `/` | `#`
	    value = _$2.trim(value);
	    if (value === "#") return "#";
	    if (
	      !(
	        value.substr(0, 7) === "http://" ||
	        value.substr(0, 8) === "https://" ||
	        value.substr(0, 7) === "mailto:" ||
	        value.substr(0, 4) === "tel:" ||
	        value.substr(0, 11) === "data:image/" ||
	        value.substr(0, 6) === "ftp://" ||
	        value.substr(0, 2) === "./" ||
	        value.substr(0, 3) === "../" ||
	        value[0] === "#" ||
	        value[0] === "/"
	      )
	    ) {
	      return "";
	    }
	  } else if (name === "background") {
	    // filter `background` attribute (maybe no use)
	    // `javascript:`
	    REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
	    if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
	      return "";
	    }
	  } else if (name === "style") {
	    // `expression()`
	    REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
	    if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
	      return "";
	    }
	    // `url()`
	    REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
	    if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
	      REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
	      if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
	        return "";
	      }
	    }
	    if (cssFilter !== false) {
	      cssFilter = cssFilter || defaultCSSFilter;
	      value = cssFilter.process(value);
	    }
	  }

	  // escape `<>"` before returns
	  value = escapeAttrValue(value);
	  return value;
	}

	// RegExp list
	var REGEXP_LT = /</g;
	var REGEXP_GT = />/g;
	var REGEXP_QUOTE = /"/g;
	var REGEXP_QUOTE_2 = /&quot;/g;
	var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
	var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
	var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
	// var REGEXP_DEFAULT_ON_TAG_ATTR_3 = /\/\*|\*\//gm;
	var REGEXP_DEFAULT_ON_TAG_ATTR_4 =
	  /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi;
	// var REGEXP_DEFAULT_ON_TAG_ATTR_5 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/gi;
	// var REGEXP_DEFAULT_ON_TAG_ATTR_6 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//gi;
	var REGEXP_DEFAULT_ON_TAG_ATTR_7 =
	  /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
	var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;

	/**
	 * escape double quote
	 *
	 * @param {String} str
	 * @return {String} str
	 */
	function escapeQuote(str) {
	  return str.replace(REGEXP_QUOTE, "&quot;");
	}

	/**
	 * unescape double quote
	 *
	 * @param {String} str
	 * @return {String} str
	 */
	function unescapeQuote(str) {
	  return str.replace(REGEXP_QUOTE_2, '"');
	}

	/**
	 * escape html entities
	 *
	 * @param {String} str
	 * @return {String}
	 */
	function escapeHtmlEntities(str) {
	  return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str, code) {
	    return code[0] === "x" || code[0] === "X"
	      ? String.fromCharCode(parseInt(code.substr(1), 16))
	      : String.fromCharCode(parseInt(code, 10));
	  });
	}

	/**
	 * escape html5 new danger entities
	 *
	 * @param {String} str
	 * @return {String}
	 */
	function escapeDangerHtml5Entities(str) {
	  return str
	    .replace(REGEXP_ATTR_VALUE_COLON, ":")
	    .replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
	}

	/**
	 * clear nonprintable characters
	 *
	 * @param {String} str
	 * @return {String}
	 */
	function clearNonPrintableCharacter(str) {
	  var str2 = "";
	  for (var i = 0, len = str.length; i < len; i++) {
	    str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
	  }
	  return _$2.trim(str2);
	}

	/**
	 * get friendly attribute value
	 *
	 * @param {String} str
	 * @return {String}
	 */
	function friendlyAttrValue(str) {
	  str = unescapeQuote(str);
	  str = escapeHtmlEntities(str);
	  str = escapeDangerHtml5Entities(str);
	  str = clearNonPrintableCharacter(str);
	  return str;
	}

	/**
	 * unescape attribute value
	 *
	 * @param {String} str
	 * @return {String}
	 */
	function escapeAttrValue(str) {
	  str = escapeQuote(str);
	  str = escapeHtml(str);
	  return str;
	}

	/**
	 * `onIgnoreTag` function for removing all the tags that are not in whitelist
	 */
	function onIgnoreTagStripAll() {
	  return "";
	}

	/**
	 * remove tag body
	 * specify a `tags` list, if the tag is not in the `tags` list then process by the specify function (optional)
	 *
	 * @param {array} tags
	 * @param {function} next
	 */
	function StripTagBody(tags, next) {
	  if (typeof next !== "function") {
	    next = function () {};
	  }

	  var isRemoveAllTag = !Array.isArray(tags);
	  function isRemoveTag(tag) {
	    if (isRemoveAllTag) return true;
	    return _$2.indexOf(tags, tag) !== -1;
	  }

	  var removeList = [];
	  var posStart = false;

	  return {
	    onIgnoreTag: function (tag, html, options) {
	      if (isRemoveTag(tag)) {
	        if (options.isClosing) {
	          var ret = "[/removed]";
	          var end = options.position + ret.length;
	          removeList.push([
	            posStart !== false ? posStart : options.position,
	            end,
	          ]);
	          posStart = false;
	          return ret;
	        } else {
	          if (!posStart) {
	            posStart = options.position;
	          }
	          return "[removed]";
	        }
	      } else {
	        return next(tag, html, options);
	      }
	    },
	    remove: function (html) {
	      var rethtml = "";
	      var lastPos = 0;
	      _$2.forEach(removeList, function (pos) {
	        rethtml += html.slice(lastPos, pos[0]);
	        lastPos = pos[1];
	      });
	      rethtml += html.slice(lastPos);
	      return rethtml;
	    },
	  };
	}

	/**
	 * remove html comments
	 *
	 * @param {String} html
	 * @return {String}
	 */
	function stripCommentTag(html) {
	  var retHtml = "";
	  var lastPos = 0;
	  while (lastPos < html.length) {
	    var i = html.indexOf("<!--", lastPos);
	    if (i === -1) {
	      retHtml += html.slice(lastPos);
	      break;
	    }
	    retHtml += html.slice(lastPos, i);
	    var j = html.indexOf("-->", i);
	    if (j === -1) {
	      break;
	    }
	    lastPos = j + 3;
	  }
	  return retHtml;
	}

	/**
	 * remove invisible characters
	 *
	 * @param {String} html
	 * @return {String}
	 */
	function stripBlankChar(html) {
	  var chars = html.split("");
	  chars = chars.filter(function (char) {
	    var c = char.charCodeAt(0);
	    if (c === 127) return false;
	    if (c <= 31) {
	      if (c === 10 || c === 13) return true;
	      return false;
	    }
	    return true;
	  });
	  return chars.join("");
	}

	_default$1.whiteList = getDefaultWhiteList();
	_default$1.getDefaultWhiteList = getDefaultWhiteList;
	_default$1.onTag = onTag;
	_default$1.onIgnoreTag = onIgnoreTag;
	_default$1.onTagAttr = onTagAttr;
	_default$1.onIgnoreTagAttr = onIgnoreTagAttr;
	_default$1.safeAttrValue = safeAttrValue;
	_default$1.escapeHtml = escapeHtml;
	_default$1.escapeQuote = escapeQuote;
	_default$1.unescapeQuote = unescapeQuote;
	_default$1.escapeHtmlEntities = escapeHtmlEntities;
	_default$1.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
	_default$1.clearNonPrintableCharacter = clearNonPrintableCharacter;
	_default$1.friendlyAttrValue = friendlyAttrValue;
	_default$1.escapeAttrValue = escapeAttrValue;
	_default$1.onIgnoreTagStripAll = onIgnoreTagStripAll;
	_default$1.StripTagBody = StripTagBody;
	_default$1.stripCommentTag = stripCommentTag;
	_default$1.stripBlankChar = stripBlankChar;
	_default$1.cssFilter = defaultCSSFilter;
	_default$1.getDefaultCSSWhiteList = getDefaultCSSWhiteList;

	var parser$1 = {};

	/**
	 * Simple HTML Parser
	 *
	 * @author Zongmin Lei<leizongmin@gmail.com>
	 */

	var _$1 = util;

	/**
	 * get tag name
	 *
	 * @param {String} html e.g. '<a hef="#">'
	 * @return {String}
	 */
	function getTagName(html) {
	  var i = _$1.spaceIndex(html);
	  var tagName;
	  if (i === -1) {
	    tagName = html.slice(1, -1);
	  } else {
	    tagName = html.slice(1, i + 1);
	  }
	  tagName = _$1.trim(tagName).toLowerCase();
	  if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
	  if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
	  return tagName;
	}

	/**
	 * is close tag?
	 *
	 * @param {String} html 如：'<a hef="#">'
	 * @return {Boolean}
	 */
	function isClosing(html) {
	  return html.slice(0, 2) === "</";
	}

	/**
	 * parse input html and returns processed html
	 *
	 * @param {String} html
	 * @param {Function} onTag e.g. function (sourcePosition, position, tag, html, isClosing)
	 * @param {Function} escapeHtml
	 * @return {String}
	 */
	function parseTag$1(html, onTag, escapeHtml) {

	  var rethtml = "";
	  var lastPos = 0;
	  var tagStart = false;
	  var quoteStart = false;
	  var currentPos = 0;
	  var len = html.length;
	  var currentTagName = "";
	  var currentHtml = "";

	  chariterator: for (currentPos = 0; currentPos < len; currentPos++) {
	    var c = html.charAt(currentPos);
	    if (tagStart === false) {
	      if (c === "<") {
	        tagStart = currentPos;
	        continue;
	      }
	    } else {
	      if (quoteStart === false) {
	        if (c === "<") {
	          rethtml += escapeHtml(html.slice(lastPos, currentPos));
	          tagStart = currentPos;
	          lastPos = currentPos;
	          continue;
	        }
	        if (c === ">" || currentPos === len - 1) {
	          rethtml += escapeHtml(html.slice(lastPos, tagStart));
	          currentHtml = html.slice(tagStart, currentPos + 1);
	          currentTagName = getTagName(currentHtml);
	          rethtml += onTag(
	            tagStart,
	            rethtml.length,
	            currentTagName,
	            currentHtml,
	            isClosing(currentHtml)
	          );
	          lastPos = currentPos + 1;
	          tagStart = false;
	          continue;
	        }
	        if (c === '"' || c === "'") {
	          var i = 1;
	          var ic = html.charAt(currentPos - i);

	          while (ic.trim() === "" || ic === "=") {
	            if (ic === "=") {
	              quoteStart = c;
	              continue chariterator;
	            }
	            ic = html.charAt(currentPos - ++i);
	          }
	        }
	      } else {
	        if (c === quoteStart) {
	          quoteStart = false;
	          continue;
	        }
	      }
	    }
	  }
	  if (lastPos < len) {
	    rethtml += escapeHtml(html.substr(lastPos));
	  }

	  return rethtml;
	}

	var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9\\_:.-]/gim;

	/**
	 * parse input attributes and returns processed attributes
	 *
	 * @param {String} html e.g. `href="#" target="_blank"`
	 * @param {Function} onAttr e.g. `function (name, value)`
	 * @return {String}
	 */
	function parseAttr$1(html, onAttr) {

	  var lastPos = 0;
	  var lastMarkPos = 0;
	  var retAttrs = [];
	  var tmpName = false;
	  var len = html.length;

	  function addAttr(name, value) {
	    name = _$1.trim(name);
	    name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
	    if (name.length < 1) return;
	    var ret = onAttr(name, value || "");
	    if (ret) retAttrs.push(ret);
	  }

	  // 逐个分析字符
	  for (var i = 0; i < len; i++) {
	    var c = html.charAt(i);
	    var v, j;
	    if (tmpName === false && c === "=") {
	      tmpName = html.slice(lastPos, i);
	      lastPos = i + 1;
	      lastMarkPos = html.charAt(lastPos) === '"' || html.charAt(lastPos) === "'" ? lastPos : findNextQuotationMark(html, i + 1);
	      continue;
	    }
	    if (tmpName !== false) {
	      if (
	        i === lastMarkPos
	      ) {
	        j = html.indexOf(c, i + 1);
	        if (j === -1) {
	          break;
	        } else {
	          v = _$1.trim(html.slice(lastMarkPos + 1, j));
	          addAttr(tmpName, v);
	          tmpName = false;
	          i = j;
	          lastPos = i + 1;
	          continue;
	        }
	      }
	    }
	    if (/\s|\n|\t/.test(c)) {
	      html = html.replace(/\s|\n|\t/g, " ");
	      if (tmpName === false) {
	        j = findNextEqual(html, i);
	        if (j === -1) {
	          v = _$1.trim(html.slice(lastPos, i));
	          addAttr(v);
	          tmpName = false;
	          lastPos = i + 1;
	          continue;
	        } else {
	          i = j - 1;
	          continue;
	        }
	      } else {
	        j = findBeforeEqual(html, i - 1);
	        if (j === -1) {
	          v = _$1.trim(html.slice(lastPos, i));
	          v = stripQuoteWrap(v);
	          addAttr(tmpName, v);
	          tmpName = false;
	          lastPos = i + 1;
	          continue;
	        } else {
	          continue;
	        }
	      }
	    }
	  }

	  if (lastPos < html.length) {
	    if (tmpName === false) {
	      addAttr(html.slice(lastPos));
	    } else {
	      addAttr(tmpName, stripQuoteWrap(_$1.trim(html.slice(lastPos))));
	    }
	  }

	  return _$1.trim(retAttrs.join(" "));
	}

	function findNextEqual(str, i) {
	  for (; i < str.length; i++) {
	    var c = str[i];
	    if (c === " ") continue;
	    if (c === "=") return i;
	    return -1;
	  }
	}

	function findNextQuotationMark(str, i) {
	  for (; i < str.length; i++) {
	    var c = str[i];
	    if (c === " ") continue;
	    if (c === "'" || c === '"') return i;
	    return -1;
	  }
	}

	function findBeforeEqual(str, i) {
	  for (; i > 0; i--) {
	    var c = str[i];
	    if (c === " ") continue;
	    if (c === "=") return i;
	    return -1;
	  }
	}

	function isQuoteWrapString(text) {
	  if (
	    (text[0] === '"' && text[text.length - 1] === '"') ||
	    (text[0] === "'" && text[text.length - 1] === "'")
	  ) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function stripQuoteWrap(text) {
	  if (isQuoteWrapString(text)) {
	    return text.substr(1, text.length - 2);
	  } else {
	    return text;
	  }
	}

	parser$1.parseTag = parseTag$1;
	parser$1.parseAttr = parseAttr$1;

	/**
	 * filter xss
	 *
	 * @author Zongmin Lei<leizongmin@gmail.com>
	 */

	var FilterCSS = lib.exports.FilterCSS;
	var DEFAULT = _default$1;
	var parser = parser$1;
	var parseTag = parser.parseTag;
	var parseAttr = parser.parseAttr;
	var _ = util;

	/**
	 * returns `true` if the input value is `undefined` or `null`
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 */
	function isNull(obj) {
	  return obj === undefined || obj === null;
	}

	/**
	 * get attributes for a tag
	 *
	 * @param {String} html
	 * @return {Object}
	 *   - {String} html
	 *   - {Boolean} closing
	 */
	function getAttrs(html) {
	  var i = _.spaceIndex(html);
	  if (i === -1) {
	    return {
	      html: "",
	      closing: html[html.length - 2] === "/",
	    };
	  }
	  html = _.trim(html.slice(i + 1, -1));
	  var isClosing = html[html.length - 1] === "/";
	  if (isClosing) html = _.trim(html.slice(0, -1));
	  return {
	    html: html,
	    closing: isClosing,
	  };
	}

	/**
	 * shallow copy
	 *
	 * @param {Object} obj
	 * @return {Object}
	 */
	function shallowCopyObject(obj) {
	  var ret = {};
	  for (var i in obj) {
	    ret[i] = obj[i];
	  }
	  return ret;
	}

	function keysToLowerCase(obj) {
	  var ret = {};
	  for (var i in obj) {
	    if (Array.isArray(obj[i])) {
	      ret[i.toLowerCase()] = obj[i].map(function (item) {
	        return item.toLowerCase();
	      });
	    } else {
	      ret[i.toLowerCase()] = obj[i];
	    }
	  }
	  return ret;
	}

	/**
	 * FilterXSS class
	 *
	 * @param {Object} options
	 *        whiteList (or allowList), onTag, onTagAttr, onIgnoreTag,
	 *        onIgnoreTagAttr, safeAttrValue, escapeHtml
	 *        stripIgnoreTagBody, allowCommentTag, stripBlankChar
	 *        css{whiteList, onAttr, onIgnoreAttr} `css=false` means don't use `cssfilter`
	 */
	function FilterXSS(options) {
	  options = shallowCopyObject(options || {});

	  if (options.stripIgnoreTag) {
	    if (options.onIgnoreTag) {
	      console.error(
	        'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
	      );
	    }
	    options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
	  }
	  if (options.whiteList || options.allowList) {
	    options.whiteList = keysToLowerCase(options.whiteList || options.allowList);
	  } else {
	    options.whiteList = DEFAULT.whiteList;
	  }

	  options.onTag = options.onTag || DEFAULT.onTag;
	  options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
	  options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
	  options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
	  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
	  options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
	  this.options = options;

	  if (options.css === false) {
	    this.cssFilter = false;
	  } else {
	    options.css = options.css || {};
	    this.cssFilter = new FilterCSS(options.css);
	  }
	}

	/**
	 * start process and returns result
	 *
	 * @param {String} html
	 * @return {String}
	 */
	FilterXSS.prototype.process = function (html) {
	  // compatible with the input
	  html = html || "";
	  html = html.toString();
	  if (!html) return "";

	  var me = this;
	  var options = me.options;
	  var whiteList = options.whiteList;
	  var onTag = options.onTag;
	  var onIgnoreTag = options.onIgnoreTag;
	  var onTagAttr = options.onTagAttr;
	  var onIgnoreTagAttr = options.onIgnoreTagAttr;
	  var safeAttrValue = options.safeAttrValue;
	  var escapeHtml = options.escapeHtml;
	  var cssFilter = me.cssFilter;

	  // remove invisible characters
	  if (options.stripBlankChar) {
	    html = DEFAULT.stripBlankChar(html);
	  }

	  // remove html comments
	  if (!options.allowCommentTag) {
	    html = DEFAULT.stripCommentTag(html);
	  }

	  // if enable stripIgnoreTagBody
	  var stripIgnoreTagBody = false;
	  if (options.stripIgnoreTagBody) {
	    stripIgnoreTagBody = DEFAULT.StripTagBody(
	      options.stripIgnoreTagBody,
	      onIgnoreTag
	    );
	    onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
	  }

	  var retHtml = parseTag(
	    html,
	    function (sourcePosition, position, tag, html, isClosing) {
	      var info = {
	        sourcePosition: sourcePosition,
	        position: position,
	        isClosing: isClosing,
	        isWhite: Object.prototype.hasOwnProperty.call(whiteList, tag),
	      };

	      // call `onTag()`
	      var ret = onTag(tag, html, info);
	      if (!isNull(ret)) return ret;

	      if (info.isWhite) {
	        if (info.isClosing) {
	          return "</" + tag + ">";
	        }

	        var attrs = getAttrs(html);
	        var whiteAttrList = whiteList[tag];
	        var attrsHtml = parseAttr(attrs.html, function (name, value) {
	          // call `onTagAttr()`
	          var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
	          var ret = onTagAttr(tag, name, value, isWhiteAttr);
	          if (!isNull(ret)) return ret;

	          if (isWhiteAttr) {
	            // call `safeAttrValue()`
	            value = safeAttrValue(tag, name, value, cssFilter);
	            if (value) {
	              return name + '="' + value + '"';
	            } else {
	              return name;
	            }
	          } else {
	            // call `onIgnoreTagAttr()`
	            ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
	            if (!isNull(ret)) return ret;
	            return;
	          }
	        });

	        // build new tag html
	        html = "<" + tag;
	        if (attrsHtml) html += " " + attrsHtml;
	        if (attrs.closing) html += " /";
	        html += ">";
	        return html;
	      } else {
	        // call `onIgnoreTag()`
	        ret = onIgnoreTag(tag, html, info);
	        if (!isNull(ret)) return ret;
	        return escapeHtml(html);
	      }
	    },
	    escapeHtml
	  );

	  // if enable stripIgnoreTagBody
	  if (stripIgnoreTagBody) {
	    retHtml = stripIgnoreTagBody.remove(retHtml);
	  }

	  return retHtml;
	};

	var xss$1 = FilterXSS;

	/**
	 * xss
	 *
	 * @author Zongmin Lei<leizongmin@gmail.com>
	 */

	(function (module, exports) {
		var DEFAULT = _default$1;
		var parser = parser$1;
		var FilterXSS = xss$1;

		/**
		 * filter xss function
		 *
		 * @param {String} html
		 * @param {Object} options { whiteList, onTag, onTagAttr, onIgnoreTag, onIgnoreTagAttr, safeAttrValue, escapeHtml }
		 * @return {String}
		 */
		function filterXSS(html, options) {
		  var xss = new FilterXSS(options);
		  return xss.process(html);
		}

		exports = module.exports = filterXSS;
		exports.filterXSS = filterXSS;
		exports.FilterXSS = FilterXSS;

		(function () {
		  for (var i in DEFAULT) {
		    exports[i] = DEFAULT[i];
		  }
		  for (var j in parser) {
		    exports[j] = parser[j];
		  }
		})();

		// using `xss` on the browser, output `filterXSS` to the globals
		if (typeof window !== "undefined") {
		  window.filterXSS = module.exports;
		}

		// using `xss` on the WebWorker, output `filterXSS` to the globals
		function isWorkerEnv() {
		  return (
		    typeof self !== "undefined" &&
		    typeof DedicatedWorkerGlobalScope !== "undefined" &&
		    self instanceof DedicatedWorkerGlobalScope
		  );
		}
		if (isWorkerEnv()) {
		  self.filterXSS = module.exports;
		}
	} (lib$1, lib$1.exports));

	var xss = lib$1.exports;

	const Show$2 = props => {
	  const {
	    property,
	    record
	  } = props;
	  const value = record.params[property.path] || '';

	  const createMarkup = html => ({
	    __html: xss(html)
	  });

	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.ValueGroup, {
	    label: property.label
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    py: "xl",
	    px: ['0', 'xl'],
	    border: "default"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Text, {
	    dangerouslySetInnerHTML: createMarkup(value)
	  })));
	};

	var show$1 = allowOverride(Show$2, 'DefaultRichtextShowProperty');

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */

	function isObject$2(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject$2;

	var baseGetTag = _baseGetTag,
	    isObjectLike = isObjectLike_1;

	/** `Object#toString` result references. */
	var regexpTag = '[object RegExp]';

	/**
	 * The base implementation of `_.isRegExp` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	 */
	function baseIsRegExp$1(value) {
	  return isObjectLike(value) && baseGetTag(value) == regexpTag;
	}

	var _baseIsRegExp = baseIsRegExp$1;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */

	function baseUnary$1(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary$1;

	var _nodeUtil = {exports: {}};

	(function (module, exports) {
		var freeGlobal = _freeGlobal;

		/** Detect free variable `exports`. */
		var freeExports = exports && !exports.nodeType && exports;

		/** Detect free variable `module`. */
		var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

		/** Detect the popular CommonJS extension `module.exports`. */
		var moduleExports = freeModule && freeModule.exports === freeExports;

		/** Detect free variable `process` from Node.js. */
		var freeProcess = moduleExports && freeGlobal.process;

		/** Used to access faster Node.js helpers. */
		var nodeUtil = (function() {
		  try {
		    // Use `util.types` for Node.js 10+.
		    var types = freeModule && freeModule.require && freeModule.require('util').types;

		    if (types) {
		      return types;
		    }

		    // Legacy `process.binding('util')` for Node.js < 10.
		    return freeProcess && freeProcess.binding && freeProcess.binding('util');
		  } catch (e) {}
		}());

		module.exports = nodeUtil;
	} (_nodeUtil, _nodeUtil.exports));

	var baseIsRegExp = _baseIsRegExp,
	    baseUnary = _baseUnary,
	    nodeUtil = _nodeUtil.exports;

	/* Node.js helper references. */
	var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

	/**
	 * Checks if `value` is classified as a `RegExp` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	 * @example
	 *
	 * _.isRegExp(/abc/);
	 * // => true
	 *
	 * _.isRegExp('/abc/');
	 * // => false
	 */
	var isRegExp$1 = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

	var isRegExp_1 = isRegExp$1;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */

	function baseProperty$1(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	var _baseProperty = baseProperty$1;

	var baseProperty = _baseProperty;

	/**
	 * Gets the size of an ASCII `string`.
	 *
	 * @private
	 * @param {string} string The string inspect.
	 * @returns {number} Returns the string size.
	 */
	var asciiSize$1 = baseProperty('length');

	var _asciiSize = asciiSize$1;

	/** Used to compose unicode character classes. */

	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	/**
	 * Gets the size of a Unicode `string`.
	 *
	 * @private
	 * @param {string} string The string inspect.
	 * @returns {number} Returns the string size.
	 */
	function unicodeSize$1(string) {
	  var result = reUnicode.lastIndex = 0;
	  while (reUnicode.test(string)) {
	    ++result;
	  }
	  return result;
	}

	var _unicodeSize = unicodeSize$1;

	var asciiSize = _asciiSize,
	    hasUnicode$1 = _hasUnicode,
	    unicodeSize = _unicodeSize;

	/**
	 * Gets the number of symbols in `string`.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {number} Returns the string size.
	 */
	function stringSize$1(string) {
	  return hasUnicode$1(string)
	    ? unicodeSize(string)
	    : asciiSize(string);
	}

	var _stringSize = stringSize$1;

	/** Used to match a single whitespace character. */

	var reWhitespace = /\s/;

	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
	 * character of `string`.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {number} Returns the index of the last non-whitespace character.
	 */
	function trimmedEndIndex$1(string) {
	  var index = string.length;

	  while (index-- && reWhitespace.test(string.charAt(index))) {}
	  return index;
	}

	var _trimmedEndIndex = trimmedEndIndex$1;

	var trimmedEndIndex = _trimmedEndIndex;

	/** Used to match leading whitespace. */
	var reTrimStart = /^\s+/;

	/**
	 * The base implementation of `_.trim`.
	 *
	 * @private
	 * @param {string} string The string to trim.
	 * @returns {string} Returns the trimmed string.
	 */
	function baseTrim$1(string) {
	  return string
	    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
	    : string;
	}

	var _baseTrim = baseTrim$1;

	var baseTrim = _baseTrim,
	    isObject$1 = isObject_1,
	    isSymbol = isSymbol_1;

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber$1(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject$1(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject$1(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = baseTrim(value);
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	var toNumber_1 = toNumber$1;

	var toNumber = toNumber_1;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite$1(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	var toFinite_1 = toFinite$1;

	var toFinite = toFinite_1;

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger$1(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	var toInteger_1 = toInteger$1;

	var baseToString = _baseToString,
	    castSlice = _castSlice,
	    hasUnicode = _hasUnicode,
	    isObject = isObject_1,
	    isRegExp = isRegExp_1,
	    stringSize = _stringSize,
	    stringToArray = _stringToArray,
	    toInteger = toInteger_1,
	    toString = toString_1;

	/** Used as default options for `_.truncate`. */
	var DEFAULT_TRUNC_LENGTH = 30,
	    DEFAULT_TRUNC_OMISSION = '...';

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Truncates `string` if it's longer than the given maximum string length.
	 * The last characters of the truncated string are replaced with the omission
	 * string which defaults to "...".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to truncate.
	 * @param {Object} [options={}] The options object.
	 * @param {number} [options.length=30] The maximum string length.
	 * @param {string} [options.omission='...'] The string to indicate text is omitted.
	 * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	 * @returns {string} Returns the truncated string.
	 * @example
	 *
	 * _.truncate('hi-diddly-ho there, neighborino');
	 * // => 'hi-diddly-ho there, neighbo...'
	 *
	 * _.truncate('hi-diddly-ho there, neighborino', {
	 *   'length': 24,
	 *   'separator': ' '
	 * });
	 * // => 'hi-diddly-ho there,...'
	 *
	 * _.truncate('hi-diddly-ho there, neighborino', {
	 *   'length': 24,
	 *   'separator': /,? +/
	 * });
	 * // => 'hi-diddly-ho there...'
	 *
	 * _.truncate('hi-diddly-ho there, neighborino', {
	 *   'omission': ' [...]'
	 * });
	 * // => 'hi-diddly-ho there, neig [...]'
	 */
	function truncate(string, options) {
	  var length = DEFAULT_TRUNC_LENGTH,
	      omission = DEFAULT_TRUNC_OMISSION;

	  if (isObject(options)) {
	    var separator = 'separator' in options ? options.separator : separator;
	    length = 'length' in options ? toInteger(options.length) : length;
	    omission = 'omission' in options ? baseToString(options.omission) : omission;
	  }
	  string = toString(string);

	  var strLength = string.length;
	  if (hasUnicode(string)) {
	    var strSymbols = stringToArray(string);
	    strLength = strSymbols.length;
	  }
	  if (length >= strLength) {
	    return string;
	  }
	  var end = length - stringSize(omission);
	  if (end < 1) {
	    return omission;
	  }
	  var result = strSymbols
	    ? castSlice(strSymbols, 0, end).join('')
	    : string.slice(0, end);

	  if (separator === undefined) {
	    return result + omission;
	  }
	  if (strSymbols) {
	    end += (result.length - end);
	  }
	  if (isRegExp(separator)) {
	    if (string.slice(end).search(separator)) {
	      var match,
	          substring = result;

	      if (!separator.global) {
	        separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
	      }
	      separator.lastIndex = 0;
	      while ((match = separator.exec(substring))) {
	        var newEnd = match.index;
	      }
	      result = result.slice(0, newEnd === undefined ? end : newEnd);
	    }
	  } else if (string.indexOf(baseToString(separator), end) != end) {
	    var index = result.lastIndexOf(separator);
	    if (index > -1) {
	      result = result.slice(0, index);
	    }
	  }
	  return result + omission;
	}

	var truncate_1 = truncate;

	const stripHtml = html => {
	  const el = window.document.createElement('DIV');
	  el.innerHTML = html;
	  return el.textContent || el.innerText || '';
	};

	const List$1 = props => {
	  const {
	    property,
	    record
	  } = props;
	  const maxLength = property.custom?.maxLength || 15;
	  const value = record.params[property.path] || '';
	  const textValue = stripHtml(value);
	  return /*#__PURE__*/React__default$1["default"].createElement(React__default$1["default"].Fragment, null, truncate_1(textValue, {
	    length: maxLength,
	    separator: ' '
	  }));
	};

	var list = allowOverride(List$1, 'DefaultReferenceListProperty');

	var richtext = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$1,
		show: show$1,
		list: list
	});

	const Show$1 = props => {
	  const {
	    property,
	    record
	  } = props;
	  const value = record.params[property.path] || '';
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.ValueGroup, {
	    label: property.label
	  }, value.split(/(?:\r\n|\r|\n)/g).map((line, i) =>
	  /*#__PURE__*/
	  // eslint-disable-next-line react/no-array-index-key
	  React__default$1["default"].createElement(React__default$1["default"].Fragment, {
	    key: i
	  }, line, /*#__PURE__*/React__default$1["default"].createElement("br", null))));
	};

	var show = allowOverride(Show$1, 'DefaultTextareaShowProperty');

	const Edit$1 = props => {
	  const {
	    onChange,
	    property,
	    record
	  } = props;
	  const propValue = record.params?.[property.path] ?? '';
	  const [value, setValue] = React$1.useState(propValue);
	  const error = record.errors?.[property.path];
	  React$1.useEffect(() => {
	    if (value !== propValue) {
	      setValue(propValue);
	    }
	  }, [propValue]);
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridablePropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Input, _extends$2({
	    as: "textarea",
	    rows: (value.match(/\n/g) || []).length + 1,
	    id: property.path,
	    name: property.path,
	    onChange: e => setValue(e.target.value),
	    onBlur: () => onChange(property.path, value),
	    value: value,
	    disabled: property.isDisabled
	  }, property.props)), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit = allowOverride( /*#__PURE__*/React$1.memo(Edit$1, recordPropertyIsEqual), 'DefaultTextareaEditProperty');

	var textarea = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: show,
		edit: edit
	});

	let globalAny = {};

	try {
	  globalAny = window;
	} catch (error) {
	  if (error.message !== 'window is not defined') {
	    throw error;
	  }
	}

	const types = {
	  textarea,
	  boolean,
	  datetime,
	  reference,
	  password,
	  date: datetime,
	  richtext,
	  string: defaultType,
	  number: defaultType,
	  float: defaultType,
	  uuid: defaultType,
	  mixed: null,
	  'key-value': null,
	  currency,
	  phone
	};
	/**
	 * @load ./base-property-component.doc.md
	 * @component
	 * @name BasePropertyComponent
	 * @subcategory Application
	 * @class
	 * @hideconstructor
	 */

	const BasePropertyComponent = props => {
	  const {
	    property: baseProperty,
	    resource,
	    record,
	    filter,
	    where,
	    onChange
	  } = props;
	  const property = React$1.useMemo(() => ({ ...baseProperty,
	    // we fill the path if it is not there. That is why all the actual Component Renderers are
	    // called with the path set to this root path. Next mixed and array components adds to this
	    // path either index (for array) or subProperty name.
	    path: baseProperty.path || baseProperty.propertyPath
	  }), [baseProperty]);
	  const testId = `property-${where}-${property.path}`;
	  const contentTag = getActionElementCss(resource.id, where, property.path);
	  let Component = types[property.type] && types[property.type][where] || defaultType[where];

	  if (property.components && property.components[where]) {
	    const component = property.components[where];

	    if (!component) {
	      throw new Error(`there is no "${property.path}.components.${where}"`);
	    }

	    Component = globalAny.AdminJS.UserComponents[component] ?? (() => {
	      throw new Error(`Component "${component}" has not been bundled, ensure it was added to your ComponentLoader instance (the one included in AdminJS options).`);
	    });

	    return /*#__PURE__*/React__default$1["default"].createElement(ErrorBoundary$1, null, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	      "data-css": contentTag,
	      "data-testid": testId
	    }, /*#__PURE__*/React__default$1["default"].createElement(Component, {
	      property: property,
	      resource: resource,
	      record: record,
	      filter: filter,
	      onChange: onChange,
	      where: where
	    })));
	  }

	  const Array = ArrayType[where];
	  const Mixed = MixedType[where];
	  const KeyValue = KeyValueType[where];

	  if (baseProperty.isArray) {
	    if (!Array) {
	      return /*#__PURE__*/React__default$1["default"].createElement("div", null);
	    }

	    return /*#__PURE__*/React__default$1["default"].createElement(Array, _extends$2({}, props, {
	      property: property,
	      ItemComponent: BasePropertyComponent,
	      testId: testId
	    }));
	  }

	  if (baseProperty.type === 'key-value') {
	    if (!KeyValue) {
	      return /*#__PURE__*/React__default$1["default"].createElement("div", null);
	    }

	    return /*#__PURE__*/React__default$1["default"].createElement(KeyValue, _extends$2({}, props, {
	      property: property,
	      testId: testId
	    }));
	  }

	  if (baseProperty.type === 'mixed') {
	    if (!Mixed) {
	      return /*#__PURE__*/React__default$1["default"].createElement("div", null);
	    }

	    return /*#__PURE__*/React__default$1["default"].createElement(Mixed, _extends$2({}, props, {
	      property: property,
	      ItemComponent: BasePropertyComponent,
	      testId: testId
	    }));
	  }

	  return /*#__PURE__*/React__default$1["default"].createElement(ErrorBoundary$1, null, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    "data-css": contentTag,
	    "data-testid": testId
	  }, /*#__PURE__*/React__default$1["default"].createElement(Component, {
	    property: property,
	    resource: resource,
	    record: record,
	    filter: filter,
	    onChange: onChange,
	    where: where
	  })));
	};

	/**
	 * This component is the same as `BasePropertyComponent` but it will not render
	 * custom components. Use this in your custom components to render the default
	 * property component.
	 *
	 * This is useful if you want your custom component to appear custom only for
	 * specific `where` value and default for all others.
	 */

	const CleanPropertyComponent = props => {
	  const {
	    property
	  } = props;
	  const cleanProperty = React$1.useMemo(() => ({ ...property,
	    components: {}
	  }), [property]);
	  return /*#__PURE__*/React__default$1["default"].createElement(BasePropertyComponent, _extends$2({}, props, {
	    property: cleanProperty
	  }));
	};

	function camelizePropertyType(type) {
	  return {
	    Edit: type.edit,
	    Show: type.show,
	    List: type.list,
	    Filter: type.filter
	  };
	}

	const BasePropertyComponentExtended = Object.assign(BasePropertyComponent, {
	  DefaultType: camelizePropertyType(defaultType),
	  Boolean: camelizePropertyType(boolean),
	  DateTime: camelizePropertyType(datetime),
	  RichText: camelizePropertyType(richtext),
	  Reference: camelizePropertyType(reference),
	  TextArea: camelizePropertyType(textarea),
	  Password: camelizePropertyType(password),
	  Currency: camelizePropertyType(currency),
	  Phone: camelizePropertyType(phone)
	});

	const LayoutElementRenderer = props => {
	  const {
	    layoutElement,
	    resource,
	    where,
	    record,
	    onChange
	  } = props;
	  const {
	    props: layoutProps,
	    properties: propertyNames,
	    layoutElements: innerLayoutElements,
	    component
	  } = layoutElement;
	  const {
	    children,
	    ...other
	  } = layoutProps;
	  const properties = propertyNames.map(name => resource.properties[name]);
	  const Component = DesignSystem__namespace[component];

	  if (!Component) {
	    return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem__namespace.MessageBox, {
	      size: "sm",
	      message: "Javascript Error",
	      variant: "danger",
	      py: "xl"
	    }, "There is no component by the name of", /*#__PURE__*/React__default$1["default"].createElement(DesignSystem__namespace.Badge, {
	      size: "sm",
	      variant: "danger",
	      mx: "default"
	    }, component), "in @adminjs/design-system. Change", /*#__PURE__*/React__default$1["default"].createElement(DesignSystem__namespace.Badge, {
	      size: "sm",
	      variant: "danger",
	      mx: "default"
	    }, `@${component}`), "to available component like @Header");
	  }

	  return /*#__PURE__*/React__default$1["default"].createElement(Component, other, properties.map(property => /*#__PURE__*/React__default$1["default"].createElement(DesignSystem__namespace.Box, {
	    flexGrow: 1,
	    key: property.propertyPath
	  }, /*#__PURE__*/React__default$1["default"].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: where,
	    property: property,
	    resource: resource,
	    record: record,
	    onChange: onChange
	  }))), innerLayoutElements.map((innerLayoutElement, i) => /*#__PURE__*/React__default$1["default"].createElement(LayoutElementRenderer, _extends$2({}, props, {
	    // eslint-disable-next-line react/no-array-index-key
	    key: i,
	    layoutElement: innerLayoutElement
	  }))), children);
	};

	const New = props => {
	  const {
	    record: initialRecord,
	    resource,
	    action
	  } = props;
	  const {
	    record,
	    handleChange,
	    submit: handleSubmit,
	    loading,
	    setRecord
	  } = useRecord(initialRecord, resource.id);
	  const {
	    translateButton
	  } = useTranslation();
	  const navigate = reactRouter.useNavigate();
	  React$1.useEffect(() => {
	    if (initialRecord) {
	      setRecord(initialRecord);
	    }
	  }, [initialRecord]);

	  const submit = event => {
	    event.preventDefault();
	    handleSubmit().then(response => {
	      if (response.data.redirectUrl) {
	        navigate(appendForceRefresh(response.data.redirectUrl));
	      } // if record has id === has been created


	      if (response.data.record.id && !Object.keys(response.data.record.errors).length) {
	        handleChange({
	          params: {},
	          populated: {},
	          errors: {}
	        });
	      }
	    });
	    return false;
	  };

	  const contentTag = getActionElementCss(resource.id, action.name, 'drawer-content');
	  const formTag = getActionElementCss(resource.id, action.name, 'form');
	  const footerTag = getActionElementCss(resource.id, action.name, 'drawer-footer');
	  const buttonTag = getActionElementCss(resource.id, action.name, 'drawer-submit');
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    as: "form",
	    onSubmit: submit,
	    flex: true,
	    flexGrow: 1,
	    flexDirection: "column",
	    "data-css": formTag
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.DrawerContent, {
	    "data-css": contentTag
	  }, action?.showInDrawer ? /*#__PURE__*/React__default$1["default"].createElement(OverridableActionHeader, props) : null, action.layout ? action.layout.map((layoutElement, i) => /*#__PURE__*/React__default$1["default"].createElement(LayoutElementRenderer // eslint-disable-next-line react/no-array-index-key
	  , _extends$2({
	    key: i,
	    layoutElement: layoutElement
	  }, props, {
	    where: "edit",
	    onChange: handleChange,
	    record: record
	  }))) : resource.editProperties.map(property => /*#__PURE__*/React__default$1["default"].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "edit",
	    onChange: handleChange,
	    property: property,
	    resource: resource,
	    record: record
	  }))), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.DrawerFooter, {
	    "data-css": footerTag
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Button, {
	    variant: "primary",
	    size: "lg",
	    type: "submit",
	    "data-css": buttonTag,
	    "data-testid": "button-save",
	    disabled: loading
	  }, loading ? /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Icon, {
	    icon: "Fade",
	    spin: true
	  }) : null, translateButton('save', resource.id))));
	};

	const OverridableNew = allowOverride(New, 'DefaultNewAction');

	const Edit = props => {
	  const {
	    record: initialRecord,
	    resource,
	    action
	  } = props;
	  const {
	    record,
	    handleChange,
	    submit: handleSubmit,
	    loading,
	    setRecord
	  } = useRecord(initialRecord, resource.id);
	  const {
	    translateButton
	  } = useTranslation();
	  const navigate = reactRouter.useNavigate();
	  React$1.useEffect(() => {
	    if (initialRecord) {
	      setRecord(initialRecord);
	    }
	  }, [initialRecord]);

	  const submit = event => {
	    event.preventDefault();
	    handleSubmit().then(response => {
	      if (response.data.redirectUrl) {
	        navigate(appendForceRefresh(response.data.redirectUrl));
	      }
	    });
	    return false;
	  };

	  const contentTag = getActionElementCss(resource.id, action.name, 'drawer-content');
	  const formTag = getActionElementCss(resource.id, action.name, 'form');
	  const footerTag = getActionElementCss(resource.id, action.name, 'drawer-footer');
	  const buttonTag = getActionElementCss(resource.id, action.name, 'drawer-submit');
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    as: "form",
	    onSubmit: submit,
	    flex: true,
	    flexDirection: "column",
	    "data-css": formTag
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.DrawerContent, {
	    "data-css": contentTag
	  }, action?.showInDrawer ? /*#__PURE__*/React__default$1["default"].createElement(OverridableActionHeader, props) : null, action.layout ? action.layout.map((layoutElement, i) => /*#__PURE__*/React__default$1["default"].createElement(LayoutElementRenderer // eslint-disable-next-line react/no-array-index-key
	  , _extends$2({
	    key: i,
	    layoutElement: layoutElement
	  }, props, {
	    where: "edit",
	    onChange: handleChange,
	    record: record
	  }))) : resource.editProperties.map(property => /*#__PURE__*/React__default$1["default"].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "edit",
	    onChange: handleChange,
	    property: property,
	    resource: resource,
	    record: record
	  }))), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.DrawerFooter, {
	    "data-css": footerTag
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Button, {
	    variant: "primary",
	    size: "lg",
	    type: "submit",
	    "data-css": buttonTag,
	    "data-testid": "button-save",
	    disabled: loading
	  }, loading ? /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Icon, {
	    icon: "Fade",
	    spin: true
	  }) : null, translateButton('save', resource.id))));
	};

	const OverridableEdit = allowOverride(Edit, 'DefaultEditAction');

	/**
	 * @name ShowAction
	 * @category Actions
	 * @description Shows a given record.
	 * @component
	 * @private
	 */

	const Show = props => {
	  const {
	    resource,
	    record,
	    action
	  } = props;
	  const properties = resource.showProperties;
	  const contentTag = getActionElementCss(resource.id, action.name, 'drawer-content');
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.DrawerContent, {
	    "data-css": contentTag
	  }, action?.showInDrawer ? /*#__PURE__*/React__default$1["default"].createElement(OverridableActionHeader, props) : null, action.layout ? action.layout.map((layoutElement, i) => /*#__PURE__*/React__default$1["default"].createElement(LayoutElementRenderer // eslint-disable-next-line react/no-array-index-key
	  , _extends$2({
	    key: i,
	    layoutElement: layoutElement
	  }, props, {
	    where: "show"
	  }))) : properties.map(property => /*#__PURE__*/React__default$1["default"].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "show",
	    property: property,
	    resource: resource,
	    record: record
	  })));
	};

	const OverridableShow = allowOverride(Show, 'DefaultShowAction');

	/* eslint-disable no-undef */
	/**
	 * @alias ActionButtonProps
	 * @memberof ActionButton
	 */

	/**
	 * Renders Button which redirects to given action
	 *
	 * ### Usage
	 *
	 * ```
	 * import { ActionButton } from 'adminjs'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 */
	const ActionButton = props => {
	  const {
	    children,
	    action,
	    actionPerformed,
	    resourceId,
	    recordId,
	    recordIds
	  } = props;
	  const {
	    href,
	    handleClick
	  } = useAction(action, {
	    resourceId,
	    recordId,
	    recordIds
	  }, actionPerformed);

	  if (!action) {
	    return null;
	  }

	  const firstChild = React__default$1["default"].Children.toArray(children)[0];

	  if (!firstChild || typeof firstChild === 'string' || typeof firstChild === 'number' || typeof firstChild === 'boolean') {
	    throw new Error('ActionButton has to have one child');
	  }

	  const contentTag = getActionElementCss(resourceId, action.name, 'button');
	  const WrappedElement = /*#__PURE__*/React__default$1["default"].cloneElement(firstChild, {
	    onClick: handleClick,
	    'data-testid': buildActionTestId(action),
	    'data-css': contentTag,
	    href
	  });
	  return WrappedElement;
	};

	const OverridableActionButton = allowOverride(ActionButton, 'ActionButton');

	const NoRecordsOriginal = props => {
	  const {
	    resource
	  } = props;
	  const {
	    translateButton,
	    translateMessage
	  } = useTranslation();
	  const canCreate = resource.resourceActions.find(a => a.name === 'new');
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.InfoBox, {
	    title: translateMessage('noRecords', resource.id)
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Text, {
	    mb: "xxl"
	  }, translateMessage('noRecordsInResource', resource.id)), canCreate ? /*#__PURE__*/React__default$1["default"].createElement(OverridableActionButton, {
	    action: canCreate,
	    resourceId: resource.id
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Button, {
	    variant: "primary"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Icon, {
	    icon: "Add"
	  }), translateButton('createFirstRecord', resource.id))) : '');
	}; // This hack prevents rollup from throwing an error


	const NoRecords = allowOverride(NoRecordsOriginal, 'NoRecords');

	const display = isTitle => [isTitle ? 'table-cell' : 'none', isTitle ? 'table-cell' : 'none', 'table-cell', 'table-cell'];

	const RecordInList = props => {
	  const {
	    resource,
	    record: recordFromProps,
	    actionPerformed,
	    isLoading,
	    onSelect,
	    isSelected
	  } = props;
	  const [record, setRecord] = React$1.useState(recordFromProps);
	  const navigate = reactRouter.useNavigate();
	  const handleActionCallback = React$1.useCallback(actionResponse => {
	    if (actionResponse.record && !actionResponse.redirectUrl) {
	      setRecord(mergeRecordResponse(record, actionResponse));
	    } else if (actionPerformed) {
	      actionPerformed(actionResponse);
	    }
	  }, [actionPerformed, record]);
	  const actionResponseHandler = useActionResponseHandler(handleActionCallback);
	  React$1.useEffect(() => {
	    setRecord(recordFromProps);
	  }, [recordFromProps]);
	  const {
	    recordActions
	  } = record;
	  const show = record.recordActions.find(({
	    name
	  }) => name === 'show');
	  const edit = record.recordActions.find(({
	    name
	  }) => name === 'edit');
	  const action = show || edit;

	  const handleClick = event => {
	    const targetTagName = event.target.tagName.toLowerCase();

	    if (action && targetTagName !== 'a' && targetTagName !== 'button' && targetTagName !== 'svg') {
	      buildActionClickHandler({
	        action,
	        params: {
	          resourceId: resource.id,
	          recordId: record.id
	        },
	        actionResponseHandler,
	        navigate
	      })(event);
	    }
	  };

	  const actionParams = {
	    resourceId: resource.id,
	    recordId: record.id
	  };

	  const handleActionClick = (event, sourceAction) => buildActionClickHandler({
	    action: sourceAction,
	    params: actionParams,
	    actionResponseHandler,
	    navigate
	  })(event);

	  const buttons = [{
	    icon: 'OverflowMenuHorizontal',
	    variant: 'light',
	    label: undefined,
	    'data-testid': 'actions-dropdown',
	    buttons: actionsToButtonGroup({
	      actions: recordActions,
	      params: actionParams,
	      handleClick: handleActionClick
	    })
	  }];
	  const contentTag = getResourceElementCss(resource.id, 'table-row');
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.TableRow, {
	    onClick: handleClick,
	    "data-id": record.id,
	    "data-css": contentTag
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.TableCell, {
	    className: isSelected ? 'selected' : 'not-selected'
	  }, onSelect && record.bulkActions.length ? /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.CheckBox, {
	    onChange: () => onSelect(record),
	    checked: isSelected
	  }) : null), resource.listProperties.map(property => {
	    const cellTag = `${resource.id}-${property.name}-table-cell`;
	    return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.TableCell, {
	      style: {
	        cursor: 'pointer'
	      },
	      key: property.propertyPath,
	      "data-property-name": property.propertyPath,
	      display: display(property.isTitle),
	      "data-css": cellTag
	    }, isLoading ? /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Placeholder, {
	      style: {
	        height: 14
	      }
	    }) : /*#__PURE__*/React__default$1["default"].createElement(BasePropertyComponentExtended, {
	      key: property.propertyPath,
	      where: "list",
	      property: property,
	      resource: resource,
	      record: record
	    }));
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.TableCell, {
	    key: "options"
	  }, recordActions.length ? /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.ButtonGroup, {
	    buttons: buttons
	  }) : ''));
	};

	const OverridableRecordInList = allowOverride(RecordInList, 'RecordInList');

	const SortLink = props => {
	  const {
	    sortBy,
	    property,
	    direction
	  } = props;
	  const location = reactRouterDom.useLocation();
	  const isActive = React$1.useMemo(() => sortBy === property.propertyPath, [sortBy, property]);
	  const query = new URLSearchParams(location.search);
	  const oppositeDirection = isActive && direction === 'asc' ? 'desc' : 'asc';
	  const sortedByIcon = `Caret${direction === 'asc' ? 'Up' : 'Down'}`;
	  query.set('direction', oppositeDirection);
	  query.set('sortBy', property.propertyPath);
	  return /*#__PURE__*/React__default$1["default"].createElement(reactRouterDom.NavLink, {
	    to: {
	      search: query.toString()
	    },
	    className: DesignSystem.cssClass('SortLink')
	  }, property.label, isActive ? /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Icon, {
	    icon: sortedByIcon,
	    color: "primary100",
	    ml: "default"
	  }) : '');
	};

	const checkSortProps = (prevProps, nextProps) => prevProps.direction === nextProps.direction && prevProps.property.propertyPath === nextProps.property.propertyPath && prevProps.sortBy === nextProps.sortBy;

	var SortLink$1 = /*#__PURE__*/React$1.memo(SortLink, checkSortProps);

	const PropertyHeader = props => {
	  const {
	    property,
	    titleProperty,
	    display
	  } = props;
	  const isMain = property.propertyPath === titleProperty.propertyPath;
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.TableCell, {
	    className: isMain ? 'main' : undefined,
	    display: display
	  }, property.isSortable ? /*#__PURE__*/React__default$1["default"].createElement(SortLink$1, props) : property.label);
	};

	const OverridablePropertyHeader = allowOverride(PropertyHeader, 'PropertyHeader');

	/**
	 * @memberof RecordsTableHeader
	 * @alias RecordsTableHeaderProps
	 */

	/**
	 * Prints `thead` section for table with records.
	 *
	 * ```
	 * import { RecordsTableHeader } from 'adminjs'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 * @example <caption>List with 2 properties</caption>
	 * const properties = [{
	 *   label: 'First Name',
	 *   name: 'firstName',
	 *   isSortable: true,
	 * }, {
	 *   label: 'Last Name',
	 *   name: 'lastName',
	 * }]
	 * return (
	 * <Box py="xl">
	 *   <Table>
	 *    <RecordsTableHeader
	 *      properties={properties}
	 *      titleProperty={properties[0]}
	 *      sortBy={'firstName'}
	 *      direction={'asc'}
	 *    />
	 *    <TableBody>
	 *      <TableRow>
	 *        <TableCell>John</TableCell>
	 *        <TableCell>Doe</TableCell>
	 *        <TableCell></TableCell>
	 *      </TableRow>
	 *      <TableRow>
	 *        <TableCell>Max</TableCell>
	 *        <TableCell>Kodaly</TableCell>
	 *        <TableCell></TableCell>
	 *      </TableRow>
	 *    </TableBody>
	 *   </Table>
	 * </Box>
	 * )
	 */
	const RecordsTableHeader = props => {
	  const {
	    titleProperty,
	    properties,
	    sortBy,
	    direction,
	    onSelectAll,
	    selectedAll
	  } = props;
	  const contentTag = getResourceElementCss(titleProperty.resourceId, 'table-head');
	  const rowTag = `${titleProperty.resourceId}-table-head-row`;
	  const checkboxCss = `${titleProperty.resourceId}-checkbox-table-cell`;
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.TableHead, {
	    "data-css": contentTag
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.TableRow, {
	    "data-css": rowTag
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.TableCell, {
	    "data-css": checkboxCss
	  }, onSelectAll ? /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.CheckBox, {
	    style: {
	      marginLeft: 5
	    },
	    onChange: () => onSelectAll(),
	    checked: selectedAll
	  }) : null), properties.map(property => /*#__PURE__*/React__default$1["default"].createElement(OverridablePropertyHeader, {
	    display: display(property.isTitle),
	    key: property.propertyPath,
	    titleProperty: titleProperty,
	    property: property,
	    sortBy: sortBy,
	    direction: direction
	  })), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.TableCell, {
	    key: "actions",
	    style: {
	      width: 80
	    }
	  })));
	};

	const OverridableRecordsTableHeader = allowOverride(RecordsTableHeader, 'RecordsTableHeader');

	const getBulkActionsFromRecords = records => {
	  const actions = Object.values(records.reduce((memo, record) => ({ ...memo,
	    ...record.bulkActions.reduce((actionsMemo, action) => ({ ...actionsMemo,
	      [action.name]: action
	    }), {})
	  }), {}));
	  return actions;
	};

	const SelectedRecords = props => {
	  const {
	    resource,
	    selectedRecords
	  } = props;
	  const {
	    translateLabel
	  } = useTranslation();
	  const navigate = reactRouter.useNavigate();
	  const actionResponseHandler = useActionResponseHandler();

	  if (!selectedRecords || !selectedRecords.length) {
	    return null;
	  }

	  const params = {
	    resourceId: resource.id,
	    recordIds: selectedRecords.map(records => records.id)
	  };

	  const handleActionClick = (event, sourceAction) => buildActionClickHandler({
	    action: sourceAction,
	    params,
	    actionResponseHandler,
	    navigate
	  })(event);

	  const bulkButtons = actionsToButtonGroup({
	    actions: getBulkActionsFromRecords(selectedRecords),
	    params,
	    handleClick: handleActionClick
	  });
	  const contentTag = getResourceElementCss(resource.id, 'table-caption');
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.TableCaption, {
	    "data-css": contentTag
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    flex: true,
	    py: "sm",
	    alignItems: "center"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Title, {
	    mr: "lg"
	  }, translateLabel('selectedRecords', resource.id, {
	    selected: selectedRecords.length
	  })), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.ButtonGroup, {
	    size: "sm",
	    rounded: true,
	    buttons: bulkButtons
	  })));
	};

	const OverridableSelectedRecords = allowOverride(SelectedRecords, 'SelectedRecords');

	/**
	 * @alias RecordsTableProps
	 * @memberof RecordsTable
	 */

	/**
	 * @classdesc
	 * Renders an entire records table. To fill the data you might need:
	 *
	 * - {@link useRecords} and
	 * - {@link useSelectedRecords} hooks
	 *
	 * so make sure to see at the documentation pages for both of them
	 *
	 * @component
	 * @class
	 * @hideconstructor
	 * @subcategory Application
	 */
	const RecordsTable = props => {
	  const {
	    resource,
	    records,
	    actionPerformed,
	    sortBy,
	    direction,
	    isLoading,
	    onSelect,
	    selectedRecords,
	    onSelectAll
	  } = props;

	  if (!records.length) {
	    if (isLoading) {
	      return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Loader, null);
	    }

	    return /*#__PURE__*/React__default$1["default"].createElement(NoRecords, {
	      resource: resource
	    });
	  }

	  const selectedAll = selectedRecords && !!records.find(record => selectedRecords.find(selected => selected.id === record.id));
	  const recordsHaveBulkAction = !!records.find(record => record.bulkActions.length);
	  const contentTag = getResourceElementCss(resource.id, 'table');
	  const selectedTag = getResourceElementCss(resource.id, 'table-selected-records');
	  const bodyTag = getResourceElementCss(resource.id, 'table-body');
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Table, {
	    "data-css": contentTag
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridableSelectedRecords, {
	    resource: resource,
	    selectedRecords: selectedRecords,
	    "data-css": selectedTag
	  }), /*#__PURE__*/React__default$1["default"].createElement(OverridableRecordsTableHeader, {
	    properties: resource.listProperties,
	    titleProperty: resource.titleProperty,
	    direction: direction,
	    sortBy: sortBy,
	    onSelectAll: recordsHaveBulkAction ? onSelectAll : undefined,
	    selectedAll: selectedAll
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.TableBody, {
	    "data-css": bodyTag
	  }, records.map(record => /*#__PURE__*/React__default$1["default"].createElement(OverridableRecordInList, {
	    record: record,
	    resource: resource,
	    key: record.id,
	    actionPerformed: actionPerformed,
	    isLoading: isLoading,
	    onSelect: onSelect,
	    isSelected: selectedRecords && !!selectedRecords.find(selected => selected.id === record.id)
	  }))));
	};

	const OverridableRecordsTable = allowOverride(RecordsTable, 'RecordsTable');

	const List = ({
	  resource,
	  setTag
	}) => {
	  const {
	    records,
	    loading,
	    direction,
	    sortBy,
	    page,
	    total,
	    fetchData,
	    perPage
	  } = useRecords(resource.id);
	  const {
	    selectedRecords,
	    handleSelect,
	    handleSelectAll,
	    setSelectedRecords
	  } = useSelectedRecords(records);
	  const location = reactRouter.useLocation();
	  const navigate = reactRouter.useNavigate();
	  React$1.useEffect(() => {
	    if (setTag) {
	      setTag(total.toString());
	    }
	  }, [total]);
	  React$1.useEffect(() => {
	    setSelectedRecords([]);
	  }, [resource.id]);
	  React$1.useEffect(() => {
	    const search = new URLSearchParams(location.search);

	    if (search.get(REFRESH_KEY)) {
	      setSelectedRecords([]);
	    }
	  }, [location.search]);

	  const handleActionPerformed = () => fetchData();

	  const handlePaginationChange = pageNumber => {
	    const search = new URLSearchParams(location.search);
	    search.set('page', pageNumber.toString());
	    navigate({
	      search: search.toString()
	    });
	  };

	  const contentTag = getActionElementCss(resource.id, 'list', 'table-wrapper');
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    variant: "white",
	    "data-css": contentTag
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridableRecordsTable, {
	    resource: resource,
	    records: records,
	    actionPerformed: handleActionPerformed,
	    onSelect: handleSelect,
	    onSelectAll: handleSelectAll,
	    selectedRecords: selectedRecords,
	    direction: direction,
	    sortBy: sortBy,
	    isLoading: loading
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Text, {
	    mt: "xl",
	    textAlign: "center"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Pagination, {
	    page: page,
	    perPage: perPage,
	    total: total,
	    onChange: handlePaginationChange
	  })));
	};

	const OverridableList = allowOverride(List, 'DefaultListAction');

	/* eslint-disable @typescript-eslint/explicit-function-return-type */
	/**
	 * NoticeMessage which can be presented as a "Toast" message.
	 * @alias NoticeMessage
	 * @memberof withNotice
	 */

	const mapDispatchToProps = dispatch => ({
	  addNotice: notice => dispatch(addNotice(notice))
	});
	/**
	 * Higher Order Component which allows you to post notice messages from your components
	 *
	 * It gives you the additional prop: `addNotice(noticeMessage)` taking {@link NoticeMessage}.
	 *
	 * ```javascript
	 * import { withNotice } from 'adminjs/core'
	 *
	 * const MY_MESSAGE = {
	 *   message: 'I am toast message',
	 *   type: 'success',
	 * }
	 * const MyCustomComponent = ({ addNotice }) => {
	 *   return (
	 *     <a onClick={() => addNotice(MY_MESSAGE)}>Click Me</a>
	 *   )
	 * }
	 * export default withNotice(MyCustomComponent)
	 * ```
	 *
	 * @component
	 * @subcategory HOC
	 */


	const withNotice = Component => require$$3.connect(null, mapDispatchToProps)(Component);

	/**
	 * @name BulkDeleteAction
	 * @category Actions
	 * @description Deletes selected records.
	 * @component
	 * @private
	 */

	const BulkDelete = props => {
	  const {
	    resource,
	    records,
	    action,
	    addNotice
	  } = props;
	  const navigate = reactRouter.useNavigate();
	  const [loading, setLoading] = React$1.useState(false);
	  const {
	    translateMessage,
	    translateButton
	  } = useTranslation();

	  if (!records) {
	    return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Text, null, translateMessage('pickSomeFirstToRemove', resource.id));
	  }

	  const handleClick = () => {
	    const api = new ApiClient();
	    setLoading(true);
	    const recordIds = records.map(r => r.id);
	    api.bulkAction({
	      resourceId: resource.id,
	      actionName: action.name,
	      recordIds,
	      method: 'post'
	    }).then(response => {
	      setLoading(false);

	      if (response.data.notice) {
	        addNotice(response.data.notice);
	      }

	      if (response.data.redirectUrl) {
	        const search = new URLSearchParams(window.location.search); // bulk function have recordIds in the URL so it has to be stripped before redirect

	        search.delete('recordIds');
	        navigate(appendForceRefresh(response.data.redirectUrl, search.toString()));
	      }
	    }).catch(error => {
	      setLoading(false);
	      addNotice({
	        message: translateMessage('bulkDeleteError', resource.id),
	        type: 'error'
	      });
	      throw error;
	    });
	  };

	  const contentTag = getActionElementCss(resource.id, action.name, 'drawer-content');
	  const tableTag = getActionElementCss(resource.id, action.name, 'table');
	  const footerTag = getActionElementCss(resource.id, action.name, 'drawer-footer');
	  return /*#__PURE__*/React__default$1["default"].createElement(React__default$1["default"].Fragment, null, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.DrawerContent, {
	    "data-css": contentTag
	  }, action?.showInDrawer ? /*#__PURE__*/React__default$1["default"].createElement(OverridableActionHeader, _extends$2({
	    omitActions: true
	  }, props)) : null, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.MessageBox, {
	    mb: "xxl",
	    variant: "danger",
	    message: translateMessage(records.length > 1 ? 'theseRecordsWillBeRemoved_plural' : 'theseRecordsWillBeRemoved', resource.id, {
	      count: records.length
	    })
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Table, {
	    "data-css": tableTag
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.TableBody, null, records.map(record => /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.TableRow, {
	    key: record.id
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.TableCell, null, /*#__PURE__*/React__default$1["default"].createElement(BasePropertyComponentExtended, {
	    where: "list",
	    property: resource.titleProperty,
	    resource: resource,
	    record: record
	  }))))))), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.DrawerFooter, {
	    "data-css": footerTag
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Button, {
	    variant: "primary",
	    size: "lg",
	    onClick: handleClick,
	    disabled: loading
	  }, loading ? /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Icon, {
	    icon: "Fade",
	    spin: true
	  }) : null, translateButton(records.length > 1 ? 'confirmRemovalMany_plural' : 'confirmRemovalMany', resource.id, {
	    count: records.length
	  }))));
	};

	const FormattedBulkDelete = withNotice(BulkDelete);
	const OverridableFormattedBulkDelete = allowOverride(FormattedBulkDelete, 'DefaultBulkDeleteAction');

	const actions = {
	  new: OverridableNew,
	  edit: OverridableEdit,
	  show: OverridableShow,
	  list: OverridableList,
	  bulkDelete: OverridableFormattedBulkDelete
	};

	/* cspell: disable */
	const DOCS = 'https://docs.adminjs.co';
	const DEFAULT_PATHS = {
	  rootPath: '/admin',
	  logoutPath: '/admin/logout',
	  loginPath: '/admin/login',
	};

	const DEFAULT_TMP_DIR = '.adminjs';
	typeof process === 'object'
	  ? AdminJS.env.ADMIN_JS_TMP_DIR || DEFAULT_TMP_DIR
	  : DEFAULT_TMP_DIR;

	/**
	 * Component which renders all the default and custom actions for both the Resource and the Record.
	 *
	 * It passes all props down to the actual Action component.
	 *
	 * Example of creating your own actions:
	 * ```
	 * // AdminJS options
	 * const AdminJSOptions = {
	 *   resources: [
	 *      resource,
	 *      options: {
	 *        actions: {
	 *           myNewAction: {
	 *             label: 'amazing action',
	 *             icon: 'Add',
	 *             inVisible: (resource, record) => record.param('email') !== '',
	 *             actionType: 'record',
	 *             component: 'MyNewAction',
	 *             handler: (request, response, data) => {
	 *               return {
	 *                  ...
	 *               }
	 *             }
	 *           }
	 *        }
	 *      }
	 *   ]
	 * }
	 * ```
	 *
	 * ```
	 * // ./my-new-action.jsx
	 * import { Box } from 'adminjs'
	 *
	 * const MyNewAction = (props) => {
	 *   const { resource, action, record } = props
	 *   // do something with the props and render action
	 *   return (
	 *     <Box>Some Action Content</Box>
	 *   )
	 * }
	 * ```
	 *
	 * @component
	 * @name BaseActionComponent
	 * @subcategory Application
	 */
	const BaseActionComponent = props => {
	  const {
	    resource,
	    action,
	    record,
	    records,
	    setTag
	  } = props;
	  const documentationLink = [DOCS, 'BaseAction.html'].join('/');
	  const {
	    translateMessage
	  } = useTranslation();
	  let Action = actions[action.name];

	  if (action.component) {
	    Action = AdminJS.UserComponents[action.component];
	  }

	  if (Action) {
	    return /*#__PURE__*/React__default$1["default"].createElement(ErrorBoundary$1, null, /*#__PURE__*/React__default$1["default"].createElement(Action, {
	      action: action,
	      resource: resource,
	      record: record,
	      records: records,
	      setTag: setTag
	    }));
	  }

	  return Action || /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.MessageBox, {
	    variant: "danger"
	  }, translateMessage('noActionComponent'), /*#__PURE__*/React__default$1["default"].createElement(commonjs.Trans, {
	    key: "messages.buttons.seeTheDocumentation"
	  }, "See:", /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Link, {
	    ml: "default",
	    href: documentationLink
	  }, "the documentation")));
	};

	/**
	 * @memberof ErrorMessageBox
	 * @alias ErrorMessageBoxProps
	 */

	/**
	 * @class
	 * Prints error message
	 *
	 * @component
	 * @private
	 * @example
	 * return (
	 * <ErrorMessageBox title={'Some error'}>
	 *   <p>Text below the title</p>
	 * </ErrorMessageBox>
	 * )
	 */
	const ErrorMessageBox = props => {
	  const {
	    children,
	    title,
	    testId
	  } = props;
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.MessageBox, {
	    "data-testid": testId,
	    message: title
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Text, null, children));
	};

	const NoResourceError = props => {
	  const {
	    resourceId
	  } = props;
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.MessageBox, {
	    message: "404 - PAGE NOT FOUND",
	    "data-testid": "NoResourceError",
	    variant: "info",
	    m: "xxl"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Text, null, translateMessage('error404Resource', resourceId, {
	    resourceId
	  })));
	};

	const NoActionError = props => {
	  const {
	    resourceId,
	    actionName
	  } = props;
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.MessageBox, {
	    message: "404 - PAGE NOT FOUND",
	    "data-testid": "NoActionError",
	    variant: "info",
	    m: "xxl"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Text, null, translateMessage('error404Action', resourceId, {
	    resourceId,
	    actionName
	  })));
	};

	const NoRecordError = props => {
	  const {
	    resourceId,
	    recordId
	  } = props;
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.MessageBox, {
	    message: "404 - PAGE NOT FOUND",
	    "data-testid": "NoRecordError",
	    variant: "info",
	    m: "xxl"
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Text, null, translateMessage('error404Record', resourceId, {
	    resourceId,
	    recordId
	  })));
	};

	const StyledWrapperWithFilter = styled__default["default"](DesignSystem.Box).withConfig({
	  displayName: "wrapper__StyledWrapperWithFilter",
	  componentId: "sc-1h9468x-0"
	})(["& > ", "{background:", ";padding:", ";overflow:visible;}& > ", "{background:", ";padding:0 ", " ", ";}"], DesignSystem.DrawerContent, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.space.xxl, DesignSystem.DrawerFooter, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.space.xxl, ({
	  theme
	}) => theme.space.xxl);
	const StyledWrapper = styled__default["default"](DesignSystem.Box).withConfig({
	  displayName: "wrapper__StyledWrapper",
	  componentId: "sc-1h9468x-1"
	})(["& ", "{background:", ";padding:", ";overflow:visible;}& ", "{background:", ";padding:0 ", " ", ";}"], DesignSystem.DrawerContent, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.space.xxl, DesignSystem.DrawerFooter, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.space.xxl, ({
	  theme
	}) => theme.space.xxl);

	const Wrapper = props => {
	  // eslint-disable-next-line @typescript-eslint/no-unused-vars
	  const {
	    children,
	    variant,
	    color,
	    showFilter = false,
	    ...rest
	  } = props;
	  const Component = showFilter ? StyledWrapperWithFilter : StyledWrapper;
	  return /*#__PURE__*/React__default$1["default"].createElement(Component, _extends$2({}, rest, {
	    variant: "grey",
	    mx: "auto",
	    "data-css": "styled-wrapper"
	  }), children);
	};

	var Wrapper$1 = allowOverride(Wrapper, 'RouteWrapper');

	var createRoot;

	var m = require$$1__default["default"];
	{
	  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	  createRoot = function(c, o) {
	    i.usingClientEntryPoint = true;
	    try {
	      return m.createRoot(c, o);
	    } finally {
	      i.usingClientEntryPoint = false;
	    }
	  };
	}

	const DRAWER_PREROUTE_SET = 'DRAWER_PREROUTE_SET';
	const setDrawerPreRoute = data => ({
	  type: DRAWER_PREROUTE_SET,
	  data
	});

	/**
	 * @alias DrawerPortalProps
	 * @memberof DrawerPortal
	 */

	const DRAWER_PORTAL_ID = 'drawerPortal';
	const DRAWER_PORTAL_WRAPPER_ID = 'drawerPortalWrapper';

	const DrawerWrapper = ({
	  onMount,
	  onUnmount
	}) => {
	  React$1.useEffect(() => {
	    onMount();
	    return onUnmount;
	  }, []);
	  return /*#__PURE__*/React__default$1["default"].createElement(styled.ThemeProvider, {
	    theme: window.THEME
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Drawer, {
	    id: DRAWER_PORTAL_ID,
	    className: "hidden",
	    "data-css": "drawer"
	  }));
	};

	const getOrCreatePortalContainer = id => {
	  let container = document.getElementById(id);

	  if (!container) {
	    container = window.document.createElement('div');
	    container.id = id;
	    window.document.body.appendChild(container);
	  }

	  return container;
	};
	/**
	 * Shows all of its children in a Drawer on the right.
	 * Instead of rendering it's own {@link Drawer} component it reuses
	 * the global Drawer via React Portal.
	 *
	 * ### Usage
	 *
	 * ```
	 * import { DrawerPortal } from 'adminjs'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 */


	const DrawerPortal = ({
	  children,
	  width
	}) => {
	  const [drawerElement, setDrawerElement] = React$1.useState(document.getElementById(DRAWER_PORTAL_ID));
	  const {
	    to = null
	  } = require$$3.useSelector(state => state.router);
	  const dispatch = require$$3.useDispatch();

	  const handleDrawerMount = () => {
	    dispatch(setDrawerPreRoute({
	      previousRoute: to
	    }));
	    setDrawerElement(document.getElementById(DRAWER_PORTAL_ID));
	  };

	  const handleDrawerUnmount = () => {
	    dispatch(setDrawerPreRoute({
	      previousRoute: null
	    }));
	  };

	  React$1.useEffect(() => {
	    const innerWrapperElement = getOrCreatePortalContainer(DRAWER_PORTAL_WRAPPER_ID);

	    if (!drawerElement && window) {
	      const drawerRoot = createRoot(innerWrapperElement);
	      drawerRoot.render( /*#__PURE__*/React__default$1["default"].createElement(DrawerWrapper, {
	        onMount: handleDrawerMount,
	        onUnmount: handleDrawerUnmount
	      }));
	    }

	    return () => {
	      const innerWrapper = document.getElementById(DRAWER_PORTAL_WRAPPER_ID);
	      if (innerWrapper) document.body.removeChild(innerWrapper);
	    };
	  }, []);
	  React$1.useEffect(() => {
	    if (drawerElement) {
	      drawerElement.classList.remove('hidden');

	      if (width) {
	        drawerElement.style.width = Array.isArray(width) ? width[0].toString() : width.toString();
	      }

	      return () => {
	        drawerElement.style.width = DesignSystem.DEFAULT_DRAWER_WIDTH;
	        drawerElement.classList.add('hidden');
	        drawerElement.setAttribute('data-css', 'drawer-element');
	      };
	    }

	    return () => undefined;
	  }, [drawerElement]);

	  if (!drawerElement) {
	    return null;
	  }

	  return /*#__PURE__*/require$$1.createPortal(children, drawerElement);
	};

	const parseQuery = location => {
	  const filter = {};
	  const query = new URLSearchParams(location.search);

	  for (const entry of query.entries()) {
	    const [key, value] = entry;

	    if (key.match('filters.')) {
	      filter[key.replace('filters.', '')] = value;
	    }
	  }

	  return filter;
	};

	const FilterDrawer = props => {
	  const {
	    resource,
	    isVisible,
	    toggleFilter
	  } = props;
	  const properties = resource.filterProperties;
	  const location = reactRouterDom.useLocation();
	  const [filter, setFilter] = React$1.useState(parseQuery(location));
	  const params = reactRouterDom.useParams();
	  const navigate = reactRouterDom.useNavigate();
	  const {
	    translateLabel,
	    translateButton
	  } = useTranslation();
	  const initialLoad = React$1.useRef(true);
	  React$1.useEffect(() => {
	    if (initialLoad.current) {
	      initialLoad.current = false;
	    } else {
	      setFilter({});
	    }
	  }, [params.resourceId]);

	  const handleSubmit = event => {
	    event.preventDefault();
	    const search = new URLSearchParams(window.location.search);
	    Object.keys(filter).forEach(key => {
	      if (filter[key] !== '') {
	        search.set(`filters.${key}`, filter[key]);
	      } else {
	        search.delete(`filters.${key}`);
	      }
	    });
	    toggleFilter();
	    search.set('page', '1');
	    navigate(`${location.pathname}?${search.toString()}`);
	    return false;
	  };

	  const resetFilter = event => {
	    event.preventDefault();
	    const filteredSearch = new URLSearchParams();
	    const search = new URLSearchParams(window.location.search);

	    for (const key of search.keys()) {
	      if (!key.match('filters.')) {
	        filteredSearch.set(key, search.get(key));
	      }
	    }

	    const query = filteredSearch.toString() === '' ? `?${filteredSearch.toString()}` : '';
	    toggleFilter();
	    navigate(location.pathname + query);
	    setFilter({});
	  };

	  const handleChange = (propertyName, value) => {
	    if (propertyName.params) {
	      throw new Error('you can not pass RecordJSON to filters');
	    }

	    setFilter({ ...filter,
	      [propertyName]: value
	    });
	  };

	  const contentTag = getResourceElementCss(params.resourceId, 'filter-drawer');
	  const cssContent = getResourceElementCss(params.resourceId, 'filter-drawer-content');
	  const cssFooter = getResourceElementCss(params.resourceId, 'filter-drawer-footer');
	  const cssButtonApply = getResourceElementCss(params.resourceId, 'filter-drawer-button-apply');
	  const cssButtonReset = getResourceElementCss(params.resourceId, 'filter-drawer-button-reset');
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Drawer, {
	    variant: "filter",
	    isHidden: !isVisible,
	    as: "form",
	    onSubmit: handleSubmit,
	    "data-css": contentTag
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.DrawerContent, {
	    "data-css": cssContent
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.H3, null, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Button, {
	    type: "button",
	    size: "icon",
	    rounded: true,
	    mr: "lg",
	    onClick: () => toggleFilter()
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Icon, {
	    icon: "ChevronRight",
	    color: "white"
	  })), translateLabel('filters', resource.id)), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    my: "x3"
	  }, properties.map(property => /*#__PURE__*/React__default$1["default"].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "filter",
	    onChange: handleChange,
	    property: property,
	    filter: filter,
	    resource: resource
	  })))), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.DrawerFooter, {
	    "data-css": cssFooter
	  }, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Button, {
	    variant: "primary",
	    size: "lg",
	    "data-css": cssButtonApply
	  }, translateButton('applyChanges', resource.id)), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Button, {
	    variant: "text",
	    size: "lg",
	    onClick: resetFilter,
	    type: "button",
	    color: "white",
	    "data-css": cssButtonReset
	  }, translateButton('resetFilter', resource.id))));
	};

	const OverridableFilterDrawer = allowOverride(FilterDrawer, 'FilterDrawer');

	var AppComponents = /*#__PURE__*/Object.freeze({
		__proto__: null,
		SortLink: SortLink$1,
		NoRecords: NoRecords,
		PropertyHeader: OverridablePropertyHeader,
		RecordInList: OverridableRecordInList,
		RecordsTableHeader: OverridableRecordsTableHeader,
		RecordsTable: OverridableRecordsTable,
		SelectedRecords: OverridableSelectedRecords,
		SidebarResourceSection: SidebarResourceSection,
		Sidebar: Sidebar,
		ActionButton: OverridableActionButton,
		ActionHeader: OverridableActionHeader,
		BaseActionComponent: BaseActionComponent,
		BreadcrumbLink: BreadcrumbLink,
		BreadcrumbText: BreadcrumbText,
		Breadcrumbs: OverridableBreadcrumbs,
		DashboardHeader: DashboardHeader,
		Dashboard: Dashboard$1,
		ErrorBoundary: ErrorBoundary$1,
		DrawerPortal: DrawerPortal,
		NoResourceError: NoResourceError,
		NoActionError: NoActionError,
		NoRecordError: NoRecordError,
		ErrorMessageBox: ErrorMessageBox,
		FilterDrawer: OverridableFilterDrawer,
		LoggedIn: OverridableLoggedIn,
		NoticeElement: NoticeElement,
		NoticeBox: OverridableConnectedNoticeBox,
		TopBar: OverridableTopbar,
		Version: OverridableVersion
	});

	const api$1 = new ApiClient();

	const RecordAction = () => {
	  const [record, setRecord] = React$1.useState();
	  const [loading, setLoading] = React$1.useState(true);
	  const params = reactRouter.useParams();
	  const addNotice = useNotice();
	  const {
	    translateMessage
	  } = useTranslation();
	  const {
	    actionName,
	    recordId,
	    resourceId
	  } = params;
	  const resource = useResource(resourceId);
	  const action = record && record.recordActions.find(r => r.name === actionName);

	  const fetchRecord = () => {
	    setLoading(true);
	    api$1.recordAction(params).then(response => {
	      if (response.data.notice && response.data.notice.type === 'error') {
	        addNotice(response.data.notice);
	      }

	      if (!response.data.record?.baseError?.type || ![ErrorTypeEnum.App, ErrorTypeEnum.NotFound, ErrorTypeEnum.Forbidden].includes(response.data.record?.baseError?.type)) {
	        setRecord(response.data.record);
	      }
	    }).catch(error => {
	      addNotice({
	        message: translateMessage('errorFetchingRecord', resourceId),
	        type: 'error'
	      });
	      throw error;
	    }).finally(() => {
	      setLoading(false);
	    });
	  };

	  React$1.useEffect(() => {
	    fetchRecord();
	  }, [actionName, recordId, resourceId]);
	  const handleActionPerformed = React$1.useCallback((oldRecord, response) => {
	    if (response.record) {
	      setRecord(mergeRecordResponse(oldRecord, response));
	    } else {
	      fetchRecord();
	    }
	  }, [fetchRecord]);

	  if (!resource) {
	    return /*#__PURE__*/React__default$1["default"].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  } // When the user visits this route (record action) from a different, than the current one, record.
	  // It renders everything with a new resource. The old record remains until useEffect fetches data
	  // from the API. that is why we have to check if the current record has correct record.id.
	  // Alternative approach would be to setRecord(undefined) before the fetch, but it is async and
	  // we cannot be sure that the component wont be rendered (it will be at least once) with the
	  // wrong data.


	  const hasDifferentRecord = record && record.id && record.id.toString() !== recordId;

	  if (loading || hasDifferentRecord) {
	    const actionFromResource = resource.actions.find(r => r.name === actionName);
	    return actionFromResource?.showInDrawer ? /*#__PURE__*/React__default$1["default"].createElement(DrawerPortal, null, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Loader, null)) : /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Loader, null);
	  }

	  if (!action) {
	    return /*#__PURE__*/React__default$1["default"].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: actionName
	    });
	  }

	  if (!record) {
	    return /*#__PURE__*/React__default$1["default"].createElement(NoRecordError, {
	      resourceId: resourceId,
	      recordId: recordId
	    });
	  }

	  if (action.showInDrawer) {
	    return /*#__PURE__*/React__default$1["default"].createElement(DrawerPortal, {
	      width: action.containerWidth
	    }, /*#__PURE__*/React__default$1["default"].createElement(BaseActionComponent, {
	      action: action,
	      resource: resource,
	      record: record
	    }));
	  }

	  return /*#__PURE__*/React__default$1["default"].createElement(Wrapper$1, {
	    width: action.containerWidth
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridableActionHeader, {
	    resource: resource,
	    action: action,
	    record: record,
	    actionPerformed: response => handleActionPerformed(record, response)
	  }), /*#__PURE__*/React__default$1["default"].createElement(BaseActionComponent, {
	    action: action,
	    resource: resource,
	    record: record
	  }));
	};

	var RecordActionRoute = allowOverride(RecordAction, 'RecordActionRoute');

	const ResourceAction$1 = props => {
	  const params = reactRouter.useParams();
	  const {
	    resources
	  } = props;
	  const {
	    resourceId,
	    actionName
	  } = params;
	  const [filterVisible, setFilterVisible] = React$1.useState(false);
	  const [tag, setTag] = React$1.useState('');
	  const resource = resources.find(r => r.id === resourceId);

	  if (!resource) {
	    return /*#__PURE__*/React__default$1["default"].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  }

	  const action = resource.resourceActions.find(r => r.name === actionName);

	  if (!action) {
	    return /*#__PURE__*/React__default$1["default"].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: actionName
	    });
	  }

	  const toggleFilter = action.showFilter ? () => setFilterVisible(!filterVisible) : undefined;

	  if (action.showInDrawer) {
	    return /*#__PURE__*/React__default$1["default"].createElement(DrawerPortal, {
	      width: action.containerWidth
	    }, /*#__PURE__*/React__default$1["default"].createElement(BaseActionComponent, {
	      action: action,
	      resource: resource
	    }));
	  }

	  return /*#__PURE__*/React__default$1["default"].createElement(Wrapper$1, {
	    width: action.containerWidth,
	    showFilter: action.showFilter
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridableActionHeader, {
	    resource: resource,
	    action: action,
	    toggleFilter: toggleFilter,
	    tag: tag
	  }), /*#__PURE__*/React__default$1["default"].createElement(BaseActionComponent, {
	    action: action,
	    resource: resource,
	    setTag: setTag
	  }), action.showFilter ? /*#__PURE__*/React__default$1["default"].createElement(OverridableFilterDrawer, {
	    key: filterVisible.toString(),
	    resource: resource,
	    isVisible: filterVisible,
	    toggleFilter: toggleFilter
	  }) : '');
	};

	const mapStateToProps$1 = state => ({
	  resources: state.resources
	});

	var ResourceActionRoute = allowOverride(require$$3.connect(mapStateToProps$1)(ResourceAction$1), 'ResourceActionRoute');

	const api = new ApiClient();

	const BulkAction = () => {
	  const params = reactRouter.useParams();
	  const [records, setRecords] = React$1.useState([]);
	  const [loading, setLoading] = React$1.useState(false);
	  const {
	    translateMessage
	  } = useTranslation();
	  const addNotice = useNotice();
	  const location = reactRouter.useLocation();
	  const {
	    resourceId,
	    actionName
	  } = params;
	  const resource = useResource(resourceId);

	  const fetchRecords = () => {
	    const recordIdsString = new URLSearchParams(location.search).get('recordIds');
	    const recordIds = recordIdsString ? recordIdsString.split(',') : [];
	    setLoading(true);
	    return api.bulkAction({
	      resourceId: resourceId,
	      recordIds,
	      actionName: actionName
	    }).then(response => {
	      setLoading(false);
	      setRecords(response.data.records);
	    }).catch(error => {
	      setLoading(false);
	      addNotice({
	        message: translateMessage('errorFetchingRecords', resourceId),
	        type: 'error'
	      });
	      throw error;
	    });
	  };

	  React$1.useEffect(() => {
	    fetchRecords();
	  }, [params.resourceId, params.actionName]);

	  if (!resource) {
	    return /*#__PURE__*/React__default$1["default"].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  }

	  if (!records && !loading) {
	    return /*#__PURE__*/React__default$1["default"].createElement(ErrorMessageBox, {
	      title: "No records"
	    }, /*#__PURE__*/React__default$1["default"].createElement("p", null, translateMessage('noRecordsSelected', resourceId)));
	  }

	  const action = getBulkActionsFromRecords(records || []).find(r => r.name === actionName);

	  if (loading) {
	    const actionFromResource = resource.actions.find(r => r.name === actionName);
	    return actionFromResource?.showInDrawer ? /*#__PURE__*/React__default$1["default"].createElement(DrawerPortal, null, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Loader, null)) : /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Loader, null);
	  }

	  if (!action) {
	    return /*#__PURE__*/React__default$1["default"].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: actionName
	    });
	  }

	  if (action.showInDrawer) {
	    return /*#__PURE__*/React__default$1["default"].createElement(DrawerPortal, {
	      width: action.containerWidth
	    }, /*#__PURE__*/React__default$1["default"].createElement(BaseActionComponent, {
	      action: action,
	      resource: resource,
	      records: records
	    }));
	  }

	  return /*#__PURE__*/React__default$1["default"].createElement(Wrapper$1, {
	    width: action.containerWidth
	  }, !action?.showInDrawer ? /*#__PURE__*/React__default$1["default"].createElement(OverridableActionHeader, {
	    resource: resource,
	    action: action
	  }) : '', /*#__PURE__*/React__default$1["default"].createElement(BaseActionComponent, {
	    action: action,
	    resource: resource,
	    records: records
	  }));
	};

	var BulkActionRoute = allowOverride(BulkAction, 'BulkActionRoute');

	const Page = () => {
	  const [pages] = require$$3.useSelector(state => [state.pages]);
	  const params = reactRouter.useParams();
	  const {
	    pageName
	  } = params;
	  const [isClient, setIsClient] = React$1.useState(false);
	  const currentPage = pages.find(page => page.name === pageName);
	  React$1.useEffect(() => {
	    setIsClient(true);
	  }, []);

	  if (!currentPage) {
	    return /*#__PURE__*/React__default$1["default"].createElement(ErrorMessageBox, {
	      title: "There is no page of given name"
	    }, /*#__PURE__*/React__default$1["default"].createElement("p", null, "Page:", /*#__PURE__*/React__default$1["default"].createElement("b", null, ` "${pageName}" `), "does not exist."));
	  }

	  const Component = AdminJS.UserComponents[currentPage.component];

	  if (!Component || !isClient) {
	    return /*#__PURE__*/React__default$1["default"].createElement(ErrorMessageBox, {
	      title: "No component specified"
	    }, /*#__PURE__*/React__default$1["default"].createElement("p", null, "You have to specify component which will render this Page"));
	  }

	  return /*#__PURE__*/React__default$1["default"].createElement(ErrorBoundary$1, null, /*#__PURE__*/React__default$1["default"].createElement(Component, null));
	};

	var PageRoute = allowOverride(Page, 'PageRoute');

	const getAction = resource => {
	  const h = new ViewHelpers();
	  const resourceId = ':resourceId';
	  const actionName = ':actionName';
	  const recordId = ':recordId';
	  const recordActionUrl = h.recordActionUrl({
	    resourceId,
	    recordId,
	    actionName
	  });
	  const resourceActionUrl = h.resourceActionUrl({
	    resourceId,
	    actionName
	  });
	  const bulkActionUrl = h.bulkActionUrl({
	    resourceId,
	    actionName
	  });
	  const resourceActionMatch = reactRouter.useMatch(resourceActionUrl);
	  const recordActionMatch = reactRouter.useMatch(recordActionUrl);
	  const bulkActionMatch = reactRouter.useMatch(bulkActionUrl);
	  const action = resourceActionMatch?.params.actionName || recordActionMatch?.params.actionName || bulkActionMatch?.params.actionName;
	  return action ? resource.actions.find(a => a.name === action) : undefined;
	};

	const ResourceAction = props => {
	  const params = reactRouter.useParams();
	  const {
	    resources
	  } = props;
	  const {
	    resourceId
	  } = params;
	  const [filterVisible, setFilterVisible] = React$1.useState(false);
	  const [tag, setTag] = React$1.useState('');

	  if (!resourceId) {
	    return null;
	  }

	  const resource = resources.find(r => r.id === resourceId);

	  if (!resource) {
	    return /*#__PURE__*/React__default$1["default"].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  }

	  const realEndAction = getAction(resource);

	  if (realEndAction && !realEndAction.showInDrawer) {
	    return null;
	  }

	  const listActionName = 'list';
	  const listAction = resource.resourceActions.find(r => r.name === listActionName);

	  if (!listAction) {
	    return /*#__PURE__*/React__default$1["default"].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: listActionName
	    });
	  }

	  const toggleFilter = listAction.showFilter ? () => setFilterVisible(!filterVisible) : undefined;
	  const contentTag = getResourceElementCss(resource.id, 'list');
	  return /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    variant: "grey",
	    width: listAction.containerWidth,
	    mx: "auto",
	    "data-css": contentTag
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridableActionHeader, {
	    resource: resource,
	    action: listAction,
	    tag: tag,
	    toggleFilter: toggleFilter
	  }), /*#__PURE__*/React__default$1["default"].createElement(BaseActionComponent, {
	    action: listAction,
	    resource: resource,
	    setTag: setTag
	  }), listAction.showFilter ? /*#__PURE__*/React__default$1["default"].createElement(OverridableFilterDrawer, {
	    key: filterVisible.toString(),
	    resource: resource,
	    isVisible: filterVisible,
	    toggleFilter: () => {
	      setFilterVisible(!filterVisible);
	    }
	  }) : '');
	};

	const mapStateToProps = state => ({
	  resources: state.resources
	});

	var ResourceRoute = allowOverride(require$$3.connect(mapStateToProps)(ResourceAction), 'ResourceRoute');

	/* eslint-disable react/no-children-prop */
	const GlobalStyle = styled.createGlobalStyle(["html,body,#app{margin:0;padding:0;width:100%;height:100%;color:", "}"], ({
	  theme
	}) => theme.colors.grey100);
	const h = new ViewHelpers();

	const App = () => {
	  const [sidebarVisible, toggleSidebar] = React$1.useState(false);
	  const location = reactRouter.useLocation();
	  useHistoryListen();
	  React$1.useEffect(() => {
	    if (sidebarVisible) {
	      toggleSidebar(false);
	    }
	  }, [location]);
	  const resourceId = ':resourceId';
	  const actionName = ':actionName';
	  const recordId = ':recordId';
	  const pageName = ':pageName';
	  const dashboardUrl = h.dashboardUrl();
	  const recordActionUrl = h.recordActionUrl({
	    resourceId,
	    recordId,
	    actionName
	  });
	  const resourceActionUrl = h.resourceActionUrl({
	    resourceId,
	    actionName
	  });
	  const bulkActionUrl = h.bulkActionUrl({
	    resourceId,
	    actionName
	  });
	  const resourceUrl = h.resourceUrl({
	    resourceId
	  });
	  const pageUrl = h.pageUrl(pageName);
	  /**
	   * When defining AdminJS routes, we use Routes component twice.
	   * This results in warnings appearing in console, for example about not being able to locate
	   * "/admin" route. They can be safely ignored though and should appear only
	   * in development environment. The warnings originate from the difference between
	   * "Switch" component that AdminJS had used in "react-router" v5 which was later replaced
	   * with "Routes" in "react-router" v6. "Switch" would use the first "Route" component
	   * that matched the provided path, while "Routes" searches for the best matching pattern.
	   * In AdminJS we use "DrawerPortal" to display actions in a drawer when
	   * "showInDrawer" option is set to true. The drawer should appear above the currently viewed
	   * page, but "Routes" broke this behavior because it instead showed a record action route with
	   * an empty background.
	   * The current flow is that first "Routes" component includes "Resource" route component
	   * for drawer-placed actions and the second "Routes" is entered for record actions
	   * on a separate page.
	   */

	  return /*#__PURE__*/React__default$1["default"].createElement(React__default$1["default"].Fragment, null, /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Reset, null), /*#__PURE__*/React__default$1["default"].createElement(GlobalStyle, null), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    height: "100%",
	    flex: true,
	    "data-css": "app"
	  }, sidebarVisible ? /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Overlay, {
	    onClick: () => toggleSidebar(!sidebarVisible)
	  }) : null, /*#__PURE__*/React__default$1["default"].createElement(Sidebar, {
	    isVisible: sidebarVisible,
	    "data-css": "sidebar"
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    flex: true,
	    flexGrow: 1,
	    flexDirection: "column",
	    overflowY: "auto",
	    bg: "bg",
	    "data-css": "app-content"
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridableTopbar, {
	    toggleSidebar: () => toggleSidebar(!sidebarVisible)
	  }), /*#__PURE__*/React__default$1["default"].createElement(DesignSystem.Box, {
	    position: "absolute",
	    top: 0,
	    zIndex: 2000,
	    "data-css": "notice"
	  }, /*#__PURE__*/React__default$1["default"].createElement(OverridableConnectedNoticeBox, null)), /*#__PURE__*/React__default$1["default"].createElement(reactRouterDom.Routes, null, /*#__PURE__*/React__default$1["default"].createElement(reactRouterDom.Route, {
	    path: `${resourceUrl}/*`,
	    element: /*#__PURE__*/React__default$1["default"].createElement(ResourceRoute, null)
	  }), /*#__PURE__*/React__default$1["default"].createElement(reactRouterDom.Route, {
	    path: pageUrl,
	    element: /*#__PURE__*/React__default$1["default"].createElement(PageRoute, null)
	  }), /*#__PURE__*/React__default$1["default"].createElement(reactRouterDom.Route, {
	    path: dashboardUrl,
	    element: /*#__PURE__*/React__default$1["default"].createElement(DashboardRoute, null)
	  })), /*#__PURE__*/React__default$1["default"].createElement(reactRouterDom.Routes, null, /*#__PURE__*/React__default$1["default"].createElement(reactRouterDom.Route, {
	    path: `${resourceActionUrl}/*`,
	    element: /*#__PURE__*/React__default$1["default"].createElement(ResourceActionRoute, null)
	  }), /*#__PURE__*/React__default$1["default"].createElement(reactRouterDom.Route, {
	    path: `${bulkActionUrl}/*`,
	    element: /*#__PURE__*/React__default$1["default"].createElement(BulkActionRoute, null)
	  }), /*#__PURE__*/React__default$1["default"].createElement(reactRouterDom.Route, {
	    path: `${recordActionUrl}/*`,
	    element: /*#__PURE__*/React__default$1["default"].createElement(RecordActionRoute, null)
	  })))));
	};

	var App$1 = allowOverride(App, 'Application');

	const ASSETS_INITIALIZE = 'ASSETS_INITIALIZE';

	const BRANDING_INITIALIZE = 'BRANDING_INITIALIZE';

	const DASHBOARD_INITIALIZE = 'DASHBOARD_INITIALIZE';

	const LOCALE_INITIALIZE = 'LOCALE_INITIALIZE';

	const PAGES_INITIALIZE = 'PAGES_INITIALIZE';

	const PATHS_INITIALIZE = 'PATHS_INITIALIZE';

	const RESOURCES_INITIALIZE = 'RESOURCES_INITIALIZE';

	const VERSIONS_INITIALIZE = 'VERSIONS_INITIALIZE';

	/* eslint-disable @typescript-eslint/explicit-function-return-type */

	const resourcesReducer = (state = [], action) => {
	  switch (action.type) {
	    case RESOURCES_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const pagesReducer = (state = [], action) => {
	  switch (action.type) {
	    case PAGES_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const localesReducer = (state = {
	  language: 'en',
	  translations: {}
	}, action) => {
	  switch (action.type) {
	    case LOCALE_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const brandingReducer = (state = {}, action) => {
	  switch (action.type) {
	    case BRANDING_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const assetsReducer = (state = {}, action) => {
	  switch (action.type) {
	    case ASSETS_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const pathsReducer = (state = DEFAULT_PATHS, action) => {
	  switch (action.type) {
	    case PATHS_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const dashboardReducer = (state = {}, action) => {
	  switch (action.type) {
	    case DASHBOARD_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const sessionReducer = (state = null, action) => {
	  switch (action.type) {
	    case SESSION_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const versionsReducer = (state = {}, action) => {
	  switch (action.type) {
	    case VERSIONS_INITIALIZE:
	      return {
	        admin: action.data.admin,
	        app: action.data.app
	      };

	    default:
	      return state;
	  }
	};

	const routerReducer = (state = {
	  from: {},
	  to: {}
	}, action) => {
	  switch (action.type) {
	    case INITIAL_ROUTE:
	      return { ...state,
	        from: { ...action.data
	        }
	      };

	    case ROUTE_CHANGED:
	      return {
	        from: { ...state.to
	        },
	        to: { ...action.data
	        }
	      };

	    default:
	      return state;
	  }
	};

	const drawerReducer = (state = {
	  previousRoute: null
	}, action) => {
	  switch (action.type) {
	    case DRAWER_PREROUTE_SET:
	      {
	        return { ...state,
	          ...action.data
	        };
	      }

	    default:
	      {
	        return state;
	      }
	  }
	};

	const noticesReducer = (state = [], action) => {
	  switch (action.type) {
	    case ADD_NOTICE:
	      {
	        const notices = [action.data];
	        return notices;
	      }

	    case DROP_NOTICE:
	      {
	        return state.filter(notice => notice.id !== action.data.noticeId);
	      }

	    case SET_NOTICE_PROGRESS:
	      {
	        return state.map(notice => ({ ...notice,
	          progress: notice.id === action.data.noticeId ? action.data.progress : notice.progress
	        }));
	      }

	    default:
	      return state;
	  }
	};

	const reducer = require$$2.combineReducers({
	  resources: resourcesReducer,
	  branding: brandingReducer,
	  assets: assetsReducer,
	  paths: pathsReducer,
	  session: sessionReducer,
	  dashboard: dashboardReducer,
	  notices: noticesReducer,
	  versions: versionsReducer,
	  pages: pagesReducer,
	  locale: localesReducer,
	  router: routerReducer,
	  drawer: drawerReducer
	});
	var createStore = ((initialState = {}) => require$$2.legacy_createStore(reducer, initialState));

	const env = {
	  NODE_ENV: "development" 
	};
	const store = createStore(window.REDUX_STATE);
	const theme = window.THEME;
	const {
	  locale
	} = window.REDUX_STATE;
	instance.use(commonjs.initReactI18next).init({
	  resources: {
	    [locale.language]: {
	      translation: locale.translations
	    }
	  },
	  lng: locale.language,
	  interpolation: {
	    escapeValue: false
	  }
	});
	const Application = /*#__PURE__*/React__default$1["default"].createElement(require$$3.Provider, {
	  store: store
	}, /*#__PURE__*/React__default$1["default"].createElement(styled.ThemeProvider, {
	  theme: theme
	}, /*#__PURE__*/React__default$1["default"].createElement(reactRouterDom.BrowserRouter, null, /*#__PURE__*/React__default$1["default"].createElement(App$1, null)))); // eslint-disable-next-line no-undef

	window.regeneratorRuntime = regenerator;
	var bundleEntry = {
	  withNotice,
	  Application,
	  ViewHelpers,
	  UserComponents: {},
	  ApiClient,
	  BasePropertyComponent: BasePropertyComponentExtended,
	  CleanPropertyComponent,
	  env,
	  ...AppComponents,
	  ...Hooks,
	  flat
	};

	return bundleEntry;

})(React, ReactRedux, ReactRouterDOM, styled, AdminJSDesignSystem, ReactRouter, ReactDOM, Redux);