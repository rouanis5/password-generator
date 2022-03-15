// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7nZVA":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var _allMinCss = require("npm:@fortawesome/fontawesome-free/css/all.min.css");
var _normalizeCss = require("npm:normalize.css/normalize.css");
var _styleScss = require("./scss/style.scss");
var _mainJs = require("./js/main.js");
var _increaseNumsJs = require("./js/increaseNums.js");
var _grabJs = require("./js/grab.js"); //these must be the last imported js file !!
var _scrollAnimJs = require("./js/scrollAnim.js");

},{"./scss/style.scss":"fZrcq","./js/main.js":"1SICI","./js/increaseNums.js":"7iQp6","./js/grab.js":"kcQ24","./js/scrollAnim.js":"l9Zos","npm:normalize.css/normalize.css":"eLmrl","npm:@fortawesome/fontawesome-free/css/all.min.css":"c1Qzz"}],"fZrcq":[function() {},{}],"1SICI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "trans", ()=>trans
);
// add .babelrc config to solve parcel&browserlist problem with async/await;
var _words = require("./words");
let tabletWidth = "900px";
let questions = document.querySelectorAll(".faqs .question");
let answers = document.querySelectorAll(".faqs li");
let parents = document.querySelectorAll(".parent");
let page = 0;
let trans = 700;
let ScrollingSpeed = 0.75; //750px per second
let lastKey;
let scrollAnimation;
let onScrolling;
let dataId = document.querySelectorAll("[data-id]");
let profile = document.querySelector(".aboutUs .profile");
let profile_public = document.querySelector(".aboutUs .profile .public");
let themePasswordGenerator = localStorage.getItem("themePasswordGenerator");
let shortcutsPasswordGenerator = localStorage.getItem("shortcutsPasswordGenerator");
let feature_card = document.querySelectorAll(".features .card");
let topnavLinks = document.querySelectorAll(".topnav .links a");
let settingsBtn = document.querySelectorAll(".settings ul li.button");
let settingsLi = document.querySelectorAll(".settings ul li");
let settingsUl = document.querySelector(".settings ul");
let topnavH = 64, topnavOffsetTop, lastScrollTop = 0; //topnav variables
let minPlus = document.querySelectorAll(".settings .select button");
let is_ie = document.querySelectorAll(".is_ie");
let isAllowed = false;
let Is_changed = true;
let noLetters = true;
let charList = "";
let password = "";
let passwordLength = 12;
let characters = [
    "0123456789",
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "!@#$%^&*_-+=",
    "{}[]()/\\'\"`~,;:.<>"
]; //add id
let main = document.getElementById("main");
let topnav = document.getElementById("topnav");
let popupForm = document.getElementById("popupForm");
let switchTheme = document.getElementById("switchTheme");
let menu = document.getElementById("menu");
let emailButton = document.getElementById("emailButton");
let closePopupForm = document.getElementById("closePopupForm");
let showSettings = document.getElementById("showSettings");
let closeSettings = document.getElementById("closeSettings");
let passLength = document.getElementById("passLength");
let generate = document.getElementById("generate");
let screen = document.getElementById("screen");
let remember = document.getElementById("remember");
let copyScreen = document.getElementById("copyScreen");
let copySentence = document.getElementById("copySentence");
let reSentence = document.getElementById("reSentence");
let shortcutPopBtn = document.querySelectorAll(".shortcutPop button");
let shortcutPop = document.getElementById("shortcutPop");
let shortcuts = document.getElementById("shortcuts");
let shortcutsClose = document.getElementById("shortcutsClose");
let sections = document.querySelectorAll(".shortcuts .main .column");
let sectionsBtn = document.querySelectorAll(".shortcuts .title button");
let contactUs = document.querySelector(".contactUs"); //setting h3 pr...
let settingsH3 = document.querySelector(".settings h3");
let settingsH3Data = settingsH3.innerHTML;
let settingsH3Clr = getComputedStyle(settingsH3).color;
let loading = document.querySelector(".loading"); //onload
window.addEventListener("load", ()=>{
    //contactUs if the browser dont support Grid
    if (typeof settingsUl.style.grid !== "string") {
        contactUs.classList.remove("allow");
        for(let i9 = 0; i9 < is_ie.length; i9++)is_ie[i9].classList.add("ie");
    }
    if (!shortcutsPasswordGenerator) setTimeout(()=>{
        if (!shortcuts.classList.contains("active")) shortcutPop.classList.add("active");
    }, 15000);
    loading.classList.add("fade-in");
    setTimeout(()=>{
        loading.classList.add("hide");
    }, trans);
}); //function that wait 2s
function timer() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("resolved");
        }, 1200);
    });
} //function that generate the password
function generateDef() {
    password = "";
    let passLengthInt = parseInt(passLength.value);
    if (Is_changed) {
        charList = "";
        for(let i10 = 0; i10 < settingsBtn.length; i10++)if (settingsBtn[i10].classList.contains("active")) charList += characters[i10];
        Is_changed = false;
        screen.classList.remove("red");
    }
    if (charList !== "") {
        for(let i11 = 0; i11 < passLengthInt; i11++)password += charList[Math.round(Math.random() * (charList.length - 1))];
        isAllowed = true;
    } else {
        if (main.classList.contains("active")) password = "Enable at least one option";
        else password = "Click the settings button below";
        screen.classList.add("red");
        isAllowed = false;
    }
    screen.value = password;
    clipboardDef();
} //create a clipboard function
function clipboardDef() {
    if (isAllowed) {
        let sentence = "";
        noLetters = true;
        password = screen.value;
        for(let i12 = 0; i12 < password.length; i12++){
            let is_letter = false;
            for(let j = 0; j < characters[1].length; j++)if (password[i12].toLowerCase() === characters[1][j]) {
                if (password[i12] === password[i12].toLowerCase()) sentence += _words.wordMap[j][Math.round(Math.random() * (_words.wordMap[j].length - 1))] + " ";
                else sentence += _words.wordMap[j][Math.round(Math.random() * (_words.wordMap[j].length - 1))].toUpperCase() + " ";
                is_letter = true;
                noLetters = false;
                break;
            }
            if (!is_letter) sentence += password[i12] + " ";
        }
        remember.classList.add("active");
        if (!noLetters) {
            remember.classList.remove("yellow");
            remember.value = sentence;
        } else {
            remember.classList.add("yellow");
            remember.value = "⚠ There is no letter in the password";
        }
    } else remember.classList.remove("active");
} //function to remove shortcutpopup and toggle shortcuts
function shortcutDef(t) {
    shortcutPop.classList.remove("active");
    setTimeout(()=>{
        shortcuts.classList.toggle("active");
    }, t);
} //function to show or hide menu
function topnavDef() {
    if (window.matchMedia(`(max-width: ${tabletWidth})`).matches) topnav.classList.toggle("active");
    else topnav.classList.remove("active");
    popupForm.classList.remove("active");
} //go to a location minus the top padding
function goLocation(target, duration = null) {
    cancelAnimationFrame(scrollAnimation);
    onScrolling = true;
    let targetPos = target.offsetTop;
    let startPos = window.pageYOffset;
    let is_topnav = targetPos > startPos ? 0 : -topnavH; //check if the topnav will activated or not
    //if the targetPos is higher than the startPos, so we're descending --> disactivated
    let distance = targetPos - startPos + is_topnav;
    let startTime = null;
    if (duration === null) {
        duration = Math.abs(distance) / ScrollingSpeed;
        if (duration < 100) duration = 500;
    }
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = linear(timeElapsed, startPos, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) scrollAnimation = requestAnimationFrame(animation);
    }
    function easeInOut(t, b, c, d) {
        //the problem was the division by zero when the duration is 0
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    function linear(t, b, c, d) {
        return c * t / d + b;
    }
    scrollAnimation = requestAnimationFrame(animation);
} ///
function faq_answer(i13) {
    for(let j = 0; j < questions.length; j++){
        if (j === i13) continue;
        answers[j].classList.remove("active");
    }
    answers[i13].classList.toggle("active");
}
function popupFormDef() {
    popupForm.classList.toggle("active");
    topnav.classList.remove("scrolling-down");
    topnav.classList.add("sticky");
    topnav.classList.add("scrolling-up");
}
function show_card(i14) {
    for(let j = 0; j < feature_card.length; j++){
        if (j === i14) continue;
        feature_card[j].classList.remove("active");
    }
    feature_card[i14].classList.toggle("active");
} //function to copy to the clipboard
function copyTextDef(copyText) {
    let message = "copied successfully 💪💪";
    if (copyText.value !== message) {
        let tmp = copyText.value; // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, tmp.length); // For mobile devices
        //Copy the text inside the text field
        document.execCommand("copy"); //remove selection
        window.getSelection().removeAllRanges(); //add a feedback message
        copyText.value = message;
        copyText.classList.toggle("copied");
        setTimeout(function() {
            copyText.value = tmp;
            copyText.classList.toggle("copied");
        }, 700);
    }
} //set page index
page = 0;
function setPage() {
    //set the first positive number the min num
    for(let i15 = 0; i15 < parents.length; i15++)if (parents[i15].getBoundingClientRect().top + topnavH >= 0) {
        page = i15;
        break;
    }
    return page;
} //change between themes and creating a local storage
function changeTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem("themePasswordGenerator", document.body.classList.value);
}
if (themePasswordGenerator) document.body.classList.value = themePasswordGenerator;
switchTheme.onclick = changeTheme;
for(let i = 0; i < questions.length; i++)questions[i].onclick = function() {
    faq_answer(i);
};
profile_public.onclick = function() {
    profile.classList.toggle("active");
};
for(let i1 = 0; i1 < feature_card.length; i1++)feature_card[i1].onclick = function() {
    show_card(i1);
};
menu.onclick = topnavDef;
for(let i2 = 0; i2 < topnavLinks.length; i2++)topnavLinks[i2].addEventListener("click", topnavDef);
emailButton.onclick = popupFormDef;
closePopupForm.onclick = popupFormDef;
window.onscroll = function() {
    let is_topnav_active = topnav.classList.contains("active") ? 0 : topnavH;
    if (!topnav.classList.contains("sticky")) topnavOffsetTop = topnav.offsetTop + is_topnav_active;
    if (!popupForm.classList.contains("active")) {
        if (window.scrollY > topnavOffsetTop) topnav.classList.add("sticky");
        else topnav.classList.remove("sticky");
         //hide the topnav on scrolling-down
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (!topnav.classList.contains("active")) {
            if (scrollTop < lastScrollTop) topnav.classList.add("scrolling-up");
            else topnav.classList.remove("scrolling-up");
        }
        lastScrollTop = scrollTop;
    }
}; //settings functions
for(let i3 = 0; i3 < settingsBtn.length; i3++)settingsBtn[i3].onclick = function() {
    settingsBtn[i3].classList.toggle("active");
    Is_changed = true;
};
for(let i4 = 0; i4 < settingsLi.length; i4++){
    settingsLi[i4].onmouseover = function() {
        settingsH3.innerHTML = settingsLi[i4].getAttribute("data-onhover");
        settingsH3.style.color = getComputedStyle(settingsLi[i4]).backgroundColor;
    };
    settingsLi[i4].onmouseout = function() {
        settingsH3.innerHTML = settingsH3Data;
        settingsH3.style.color = settingsH3Clr;
    };
}
showSettings.onclick = function() {
    main.classList.toggle("active");
};
closeSettings.onclick = function() {
    main.classList.remove("active");
};
for(let i5 = 0; i5 < minPlus.length; i5++)minPlus[i5].onclick = function() {
    let num = parseInt(passLength.value);
    let min = parseInt(passLength.min);
    let max = parseInt(passLength.max);
    let op = minPlus[i5].getAttribute("data-op");
    let result = num + parseInt(op);
    if (result >= min && result <= max) passLength.value = result;
    else if (result > max) passLength.value = min;
    else passLength.value = max;
};
passLength.addEventListener("input", async function() {
    const result = await timer();
    let min = parseInt(passLength.min);
    let max = parseInt(passLength.max);
    let num = parseInt(passLength.value);
    if (num > max) passLength.value = max;
    else if (num < min) passLength.value = min;
    else if (isNaN(num)) passLength.value = min;
}); //data-id navigation
for(let i6 = 0; i6 < dataId.length; i6++)dataId[i6].addEventListener("click", ()=>{
    let id = dataId[i6].getAttribute("data-id");
    let link = document.getElementById(id);
    goLocation(link);
});
 //generator
generate.onclick = generateDef; ///regenerate the sentence
reSentence.onclick = clipboardDef;
copyScreen.onclick = function() {
    if (isAllowed) copyTextDef(screen);
};
copySentence.onclick = function() {
    if (!noLetters) copyTextDef(remember);
};
window.addEventListener("keydown", function(e) {
    if (!e.target.form) {
        if (e.code.includes("Arrow")) {
            e.preventDefault();
            page = setPage();
            if ((e.code === "ArrowUp" || e.code === "ArrowLeft") && page !== 0) goLocation(parents[--page]);
            else if ((e.code === "ArrowDown" || e.code === "ArrowRight") && page !== parents.length - 1) goLocation(parents[++page]);
        } else if (e.code === "Space") {
            if (onScrolling) {
                e.preventDefault();
                cancelAnimationFrame(scrollAnimation);
                onScrolling = false;
            }
        } else if (e.code === "KeyT") {
            e.preventDefault();
            changeTheme();
        } else if (e.code === "KeyM") {
            e.preventDefault();
            goLocation(main, 1000);
        } else if (lastKey === "Control") {
            if (e.key === "/") {
                e.preventDefault();
                let t = 0;
                if (shortcutPop.classList.contains("active")) t = trans;
                shortcutDef(t);
            }
        } else {
            let xywh = main.getBoundingClientRect(); //function work only if the user in the main page
            if (Math.abs(xywh.y) + topnavH < xywh.height) {
                if (e.key === "Enter") {
                    e.preventDefault();
                    generateDef();
                } else if (e.code === "Tab") {
                    e.preventDefault();
                    main.classList.toggle("active");
                } else {
                    let settingsBtnLetters = "nlusa";
                    for(let i16 = 0; i16 < settingsBtnLetters.length; i16++)if (e.key.toLowerCase() === settingsBtnLetters[i16]) {
                        main.classList.add("active");
                        settingsBtn[i16].click();
                        break;
                    }
                }
            }
        }
        lastKey = e.key;
    }
}, false);
shortcutsClose.onclick = function() {
    shortcuts.classList.remove("active");
}; //add a shortcut session when you click [i got it]
for(let i7 = 0; i7 < shortcutPopBtn.length; i7++)shortcutPopBtn[i7].onclick = function() {
    shortcutDef(trans);
    if (i7 === 1) localStorage.setItem("shortcutsPasswordGenerator", true);
};
 //change between shortcuts sections
for(let i8 = 0; i8 < sectionsBtn.length; i8++)sectionsBtn[i8].onclick = function() {
    sectionsBtn[i8].classList.add("active");
    sections[i8].classList.add("active");
    for(let j = 0; j < sectionsBtn.length; j++)if (j !== i8) {
        sectionsBtn[j].classList.remove("active");
        sections[j].classList.remove("active");
    }
};

},{"./words":"asjHU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"asjHU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wordMap", ()=>wordMap
);
const wordMap = [
    [
        "a",
        "able",
        "about",
        "absolute",
        "accept",
        "account",
        "achieve",
        "across",
        "act",
        "active",
        "actual",
        "add",
        "address",
        "admit",
        "advertise",
        "affect",
        "afford",
        "after",
        "afternoon",
        "again",
        "against",
        "age",
        "agent",
        "ago",
        "agree",
        "air",
        "all",
        "allow",
        "almost",
        "along",
        "already",
        "alright",
        "also",
        "although",
        "always",
        "america",
        "amount",
        "and",
        "another",
        "answer",
        "any",
        "apart",
        "apparent",
        "appear",
        "apply",
        "appoint",
        "approach",
        "appropriate",
        "area",
        "argue",
        "arm",
        "around",
        "arrange",
        "art",
        "as",
        "ask",
        "associate",
        "assume",
        "at",
        "attend",
        "authority",
        "available",
        "aware",
        "away",
        "awful"
    ],
    [
        "baby",
        "back",
        "bad",
        "bag",
        "balance",
        "ball",
        "bank",
        "bar",
        "base",
        "basis",
        "be",
        "bear",
        "beat",
        "beauty",
        "because",
        "become",
        "bed",
        "before",
        "begin",
        "behind",
        "believe",
        "benefit",
        "best",
        "bet",
        "between",
        "big",
        "bill",
        "birth",
        "bit",
        "black",
        "bloke",
        "blood",
        "blow",
        "blue",
        "board",
        "boat",
        "body",
        "book",
        "both",
        "bother",
        "bottle",
        "bottom",
        "box",
        "boy",
        "break",
        "brief",
        "brilliant",
        "bring",
        "britain",
        "brother",
        "budget",
        "build",
        "bus",
        "business",
        "busy",
        "but",
        "buy",
        "by"
    ],
    [
        "cake",
        "call",
        "can",
        "car",
        "card",
        "care",
        "carry",
        "case",
        "cat",
        "catch",
        "cause",
        "cent",
        "centre",
        "certain",
        "chair",
        "chairman",
        "chance",
        "change",
        "chap",
        "character",
        "charge",
        "cheap",
        "check",
        "child",
        "choice",
        "choose",
        "church",
        "city",
        "claim",
        "class",
        "clean",
        "clear",
        "client",
        "clock",
        "close",
        "closes",
        "clothe",
        "club",
        "coffee",
        "cold",
        "colleague",
        "collect",
        "college",
        "colour",
        "come",
        "comment",
        "commit",
        "committee",
        "common",
        "community",
        "company",
        "compare",
        "complete",
        "compute",
        "concern",
        "condition",
        "confer",
        "consider",
        "consult",
        "contact",
        "continue",
        "contract",
        "control",
        "converse",
        "cook",
        "copy",
        "corner",
        "correct",
        "cost",
        "could",
        "council",
        "count",
        "country",
        "county",
        "couple",
        "course",
        "court",
        "cover",
        "create",
        "cross",
        "cup",
        "current",
        "cut"
    ],
    [
        "dad",
        "danger",
        "date",
        "day",
        "dead",
        "deal",
        "dear",
        "debate",
        "decide",
        "decision",
        "deep",
        "definite",
        "degree",
        "department",
        "depend",
        "describe",
        "design",
        "detail",
        "develop",
        "die",
        "difference",
        "difficult",
        "dinner",
        "direct",
        "discuss",
        "district",
        "divide",
        "do",
        "doctor",
        "document",
        "dog",
        "door",
        "double",
        "doubt",
        "down",
        "draw",
        "dress",
        "drink",
        "drive",
        "drop",
        "dry",
        "due",
        "during"
    ],
    [
        "each",
        "early",
        "east",
        "easy",
        "eat",
        "economy",
        "educate",
        "effect",
        "egg",
        "eight",
        "either",
        "elect",
        "electric",
        "eleven",
        "else",
        "employ",
        "encourage",
        "end",
        "engine",
        "english",
        "enjoy",
        "enough",
        "enter",
        "environment",
        "equal",
        "especial",
        "europe",
        "even",
        "evening",
        "ever",
        "every",
        "evidence",
        "exact",
        "example",
        "except",
        "excuse",
        "exercise",
        "exist",
        "expect",
        "expense",
        "experience",
        "explain",
        "express",
        "extra",
        "eye"
    ],
    [
        "face",
        "fact",
        "fair",
        "fall",
        "family",
        "far",
        "farm",
        "fast",
        "father",
        "favour",
        "feed",
        "feel",
        "few",
        "field",
        "fight",
        "figure",
        "file",
        "fill",
        "film",
        "final",
        "finance",
        "find",
        "fine",
        "finish",
        "fire",
        "first",
        "fish",
        "fit",
        "five",
        "flat",
        "floor",
        "fly",
        "follow",
        "food",
        "foot",
        "for",
        "force",
        "forget",
        "form",
        "fortune",
        "forward",
        "four",
        "france",
        "free",
        "friday",
        "friend",
        "from",
        "front",
        "full",
        "fun",
        "function",
        "fund",
        "further",
        "future"
    ],
    [
        "game",
        "garden",
        "gas",
        "general",
        "germany",
        "get",
        "girl",
        "give",
        "glass",
        "go",
        "god",
        "good",
        "goodbye",
        "govern",
        "grand",
        "grant",
        "great",
        "green",
        "ground",
        "group",
        "grow",
        "guess",
        "guy"
    ],
    [
        "hair",
        "half",
        "hall",
        "hand",
        "hang",
        "happen",
        "happy",
        "hard",
        "hate",
        "have",
        "he",
        "head",
        "health",
        "hear",
        "heart",
        "heat",
        "heavy",
        "hell",
        "help",
        "here",
        "high",
        "history",
        "hit",
        "hold",
        "holiday",
        "home",
        "honest",
        "hope",
        "horse",
        "hospital",
        "hot",
        "hour",
        "house",
        "how",
        "however",
        "hullo",
        "hundred",
        "husband"
    ],
    [
        "idea",
        "identify",
        "if",
        "imagine",
        "important",
        "improve",
        "in",
        "include",
        "income",
        "increase",
        "indeed",
        "individual",
        "industry",
        "inform",
        "inside",
        "instead",
        "insure",
        "interest",
        "into",
        "introduce",
        "invest",
        "involve",
        "issue",
        "it",
        "item"
    ],
    [
        "jesus",
        "job",
        "join",
        "judge",
        "jump",
        "just"
    ],
    [
        "keep",
        "key",
        "kid",
        "kill",
        "kind",
        "king",
        "kitchen",
        "knock",
        "know"
    ],
    [
        "labour",
        "lad",
        "lady",
        "land",
        "language",
        "large",
        "last",
        "late",
        "laugh",
        "law",
        "lay",
        "lead",
        "learn",
        "leave",
        "left",
        "leg",
        "less",
        "let",
        "letter",
        "level",
        "lie",
        "life",
        "light",
        "like",
        "likely",
        "limit",
        "line",
        "link",
        "list",
        "listen",
        "little",
        "live",
        "load",
        "local",
        "lock",
        "london",
        "long",
        "look",
        "lord",
        "lose",
        "lot",
        "love",
        "low",
        "luck",
        "lunch"
    ],
    [
        "machine",
        "main",
        "major",
        "make",
        "man",
        "manage",
        "many",
        "mark",
        "market",
        "marry",
        "match",
        "matter",
        "may",
        "maybe",
        "mean",
        "meaning",
        "measure",
        "meet",
        "member",
        "mention",
        "middle",
        "might",
        "mile",
        "milk",
        "million",
        "mind",
        "minister",
        "minus",
        "minute",
        "miss",
        "mister",
        "moment",
        "monday",
        "money",
        "month",
        "more",
        "morning",
        "most",
        "mother",
        "motion",
        "move",
        "mrs",
        "much",
        "music",
        "must"
    ],
    [
        "name",
        "nation",
        "nature",
        "near",
        "necessary",
        "need",
        "never",
        "new",
        "news",
        "next",
        "nice",
        "night",
        "nine",
        "no",
        "non",
        "none",
        "normal",
        "north",
        "not",
        "note",
        "notice",
        "now",
        "number"
    ],
    [
        "obvious",
        "occasion",
        "odd",
        "of",
        "off",
        "offer",
        "office",
        "often",
        "okay",
        "old",
        "on",
        "once",
        "one",
        "only",
        "open",
        "operate",
        "opportunity",
        "oppose",
        "or",
        "order",
        "organize",
        "original",
        "other",
        "otherwise",
        "ought",
        "out",
        "over",
        "own"
    ],
    [
        "pack",
        "page",
        "paint",
        "pair",
        "paper",
        "paragraph",
        "pardon",
        "parent",
        "park",
        "part",
        "particular",
        "party",
        "pass",
        "past",
        "pay",
        "pence",
        "pension",
        "people",
        "per",
        "percent",
        "perfect",
        "perhaps",
        "period",
        "person",
        "photograph",
        "pick",
        "picture",
        "piece",
        "place",
        "plan",
        "play",
        "please",
        "plus",
        "point",
        "police",
        "policy",
        "politic",
        "poor",
        "position",
        "positive",
        "possible",
        "post",
        "pound",
        "power",
        "practise",
        "prepare",
        "present",
        "press",
        "pressure",
        "presume",
        "pretty",
        "previous",
        "price",
        "print",
        "private",
        "probable",
        "problem",
        "proceed",
        "process",
        "produce",
        "product",
        "programme",
        "project",
        "proper",
        "propose",
        "protect",
        "provide",
        "public",
        "pull",
        "purpose",
        "push",
        "put"
    ],
    [
        "quality",
        "quarter",
        "question",
        "quick",
        "quid",
        "quiet",
        "quite"
    ],
    [
        "radio",
        "rail",
        "raise",
        "range",
        "rate",
        "rather",
        "read",
        "ready",
        "real",
        "realise",
        "really",
        "reason",
        "receive",
        "recent",
        "reckon",
        "recognize",
        "recommend",
        "record",
        "red",
        "reduce",
        "refer",
        "regard",
        "region",
        "relation",
        "remember",
        "report",
        "represent",
        "require",
        "research",
        "resource",
        "respect",
        "responsible",
        "rest",
        "result",
        "return",
        "rid",
        "right",
        "ring",
        "rise",
        "road",
        "role",
        "roll",
        "room",
        "round",
        "rule",
        "run"
    ],
    [
        "safe",
        "sale",
        "same",
        "saturday",
        "save",
        "say",
        "scheme",
        "school",
        "science",
        "score",
        "scotland",
        "seat",
        "second",
        "secretary",
        "section",
        "secure",
        "see",
        "seem",
        "self",
        "sell",
        "send",
        "sense",
        "separate",
        "serious",
        "serve",
        "service",
        "set",
        "settle",
        "seven",
        "shall",
        "share",
        "she",
        "sheet",
        "shoe",
        "shoot",
        "shop",
        "short",
        "should",
        "show",
        "shut",
        "sick",
        "side",
        "sign",
        "similar",
        "simple",
        "since",
        "sing",
        "single",
        "sir",
        "sister",
        "sit",
        "site",
        "situate",
        "six",
        "size",
        "sleep",
        "slight",
        "slow",
        "small",
        "smoke",
        "so",
        "social",
        "society",
        "some",
        "son",
        "soon",
        "sorry",
        "sort",
        "sound",
        "south",
        "space",
        "speak",
        "special",
        "specific",
        "speed",
        "spell",
        "spend",
        "square",
        "staff",
        "stage",
        "stairs",
        "stand",
        "standard",
        "start",
        "state",
        "station",
        "stay",
        "step",
        "stick",
        "still",
        "stop",
        "story",
        "straight",
        "strategy",
        "street",
        "strike",
        "strong",
        "structure",
        "student",
        "study",
        "stuff",
        "stupid",
        "subject",
        "succeed",
        "such",
        "sudden",
        "suggest",
        "suit",
        "summer",
        "sun",
        "sunday",
        "supply",
        "support",
        "suppose",
        "sure",
        "surprise",
        "switch",
        "system"
    ],
    [
        "table",
        "take",
        "talk",
        "tape",
        "tax",
        "tea",
        "teach",
        "team",
        "telephone",
        "television",
        "tell",
        "ten",
        "tend",
        "term",
        "terrible",
        "test",
        "than",
        "thank",
        "the",
        "then",
        "there",
        "therefore",
        "they",
        "thing",
        "think",
        "thirteen",
        "thirty",
        "this",
        "thou",
        "though",
        "thousand",
        "three",
        "through",
        "throw",
        "thursday",
        "tie",
        "time",
        "to",
        "today",
        "together",
        "tomorrow",
        "tonight",
        "too",
        "top",
        "total",
        "touch",
        "toward",
        "town",
        "trade",
        "traffic",
        "train",
        "transport",
        "travel",
        "treat",
        "tree",
        "trouble",
        "true",
        "trust",
        "try",
        "tuesday",
        "turn",
        "twelve",
        "twenty",
        "two",
        "type"
    ],
    [
        "under",
        "understand",
        "union",
        "unit",
        "unite",
        "university",
        "unless",
        "until",
        "up",
        "upon",
        "use",
        "usual"
    ],
    [
        "value",
        "various",
        "very",
        "video",
        "view",
        "village",
        "visit",
        "vote"
    ],
    [
        "wage",
        "wait",
        "walk",
        "wall",
        "want",
        "war",
        "warm",
        "wash",
        "waste",
        "watch",
        "water",
        "way",
        "we",
        "wear",
        "wednesday",
        "wee",
        "week",
        "weigh",
        "welcome",
        "well",
        "west",
        "what",
        "when",
        "where",
        "whether",
        "which",
        "while",
        "white",
        "who",
        "whole",
        "why",
        "wide",
        "wife",
        "will",
        "win",
        "wind",
        "window",
        "wish",
        "with",
        "within",
        "without",
        "woman",
        "wonder",
        "wood",
        "word",
        "work",
        "world",
        "worry",
        "worse",
        "worth",
        "would",
        "write",
        "wrong"
    ],
    [
        "x",
        "xbox"
    ],
    [
        "year",
        "yes",
        "yesterday",
        "yet",
        "you",
        "young"
    ],
    [
        "zebra",
        "zed",
        "zone",
        "zoo",
        "zoom"
    ]
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7iQp6":[function(require,module,exports) {
var _scrollAnim = require("./scrollAnim");
const statsNum = document.querySelectorAll("[data-goal]");
const increaseOnScroll = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (!entry.isIntersecting) return;
        setInterval(()=>{
            if (parseInt(entry.target.textContent, 10) < parseInt(entry.target.getAttribute("data-goal"), 10)) entry.target.textContent = parseInt(entry.target.textContent, 10) + 1;
            else clearInterval();
        }, 20);
        increaseOnScroll.unobserve(entry.target);
    });
}, _scrollAnim.appearOptions);
statsNum.forEach((num)=>{
    increaseOnScroll.observe(num);
});

},{"./scrollAnim":"l9Zos"}],"l9Zos":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "testObserver", ()=>testObserver
);
parcelHelpers.export(exports, "appearOptions", ()=>appearOptions
);
var _main = require("./main");
let faders = document.querySelectorAll(".fade-in");
let sliders = document.querySelectorAll(".slide-in");
let testObserver = document.getElementById("testObserver");
window.addEventListener("load", ()=>{
    //test if the IntersectionObserver is working
    setTimeout(()=>{
        if (!testObserver.classList.contains("appear")) {
            for(let i = 0; i < faders.length; i++)faders[i].classList.add("appear");
            for(let i1 = 0; i1 < sliders.length; i1++)sliders[i1].classList.add("appear");
        }
    }, _main.trans);
}); //create fade-in animation
const appearOptions = {
    threshold: 0.5 // rootMargin: "0px 0px 45px 0px",
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll1) {
    entries.forEach((entry)=>{
        if (!entry.isIntersecting) return;
        else {
            entry.target.classList.add("appear");
            appearOnScroll1.unobserve(entry.target);
        }
    });
}, appearOptions);
faders.forEach((fader)=>{
    appearOnScroll.observe(fader);
});
sliders.forEach((slider)=>{
    appearOnScroll.observe(slider);
}); //test if IntersectionObserver is working
appearOnScroll.observe(testObserver); /////////////////////////////////////////////

},{"./main":"1SICI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kcQ24":[function(require,module,exports) {
//credits to : https://codepen.io/thenutz/pen/VwYeYEE
let grab = document.querySelectorAll(".grab");
grab.forEach((ele)=>{
    let isDown = false;
    let startX;
    let scrollLeft;
    ele.addEventListener('mousedown', (e)=>{
        isDown = true;
        startX = e.pageX - ele.offsetLeft;
        scrollLeft = ele.scrollLeft;
    });
    ele.addEventListener('mouseleave', ()=>{
        isDown = false;
    });
    ele.addEventListener('mouseup', ()=>{
        isDown = false;
    });
    ele.addEventListener('mousemove', (e)=>{
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - ele.offsetLeft;
        const walk = (x - startX) * 1.5; //scroll-fast
        ele.scrollLeft = scrollLeft - walk;
    });
});

},{}],"eLmrl":[function() {},{}],"c1Qzz":[function() {},{}]},["7nZVA","8lqZg"], "8lqZg", "parcelRequire0c43")

//# sourceMappingURL=index.975ef6c8.js.map
