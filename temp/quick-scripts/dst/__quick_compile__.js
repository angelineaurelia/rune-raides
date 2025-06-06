
(function () {
var scripts = [{"deps":{"./assets/scripts/LeaderboardManager":20,"./assets/scripts/MapGenerator":9,"./assets/scripts/MapGeneratorCore":11,"./assets/scripts/MapManager":6,"./assets/scripts/MonsterManager":10,"./assets/scripts/Player":7,"./assets/scripts/UIManager":8,"./assets/scripts/ActorController":12,"./assets/scripts/Menu/FirebaseInit":25,"./assets/scripts/Menu/FirebaseManager":1,"./assets/scripts/Menu/GameOver":13,"./assets/scripts/Menu/LoadingManager":26,"./assets/scripts/Menu/LoginSignUp":17,"./assets/scripts/Menu/Menu":35,"./assets/scripts/Menu/MenuMgr":14,"./assets/scripts/Menu/SuccessPopup":15,"./assets/scripts/Menu/AuthManager":19,"./assets/scripts/ai/BlueSlimeAI":16,"./assets/scripts/ai/GreenBossAI":23,"./assets/scripts/ai/GreenSlimeAI":21,"./assets/scripts/ai/LavaSlimeAI":22,"./assets/scripts/ai/ShyAgent":36,"./assets/scripts/ai/WanderAgent":24,"./assets/scripts/ai/Agent":28,"./assets/scripts/ai/navigation/Waypoint":3,"./assets/scripts/ai/strategies/Coward":4,"./assets/scripts/ai/strategies/Wanderer":37,"./assets/scripts/ai/strategies/AgentStrategy":39,"./assets/scripts/camera/CameraTransposer":5,"./assets/scripts/input/IInputControls":2,"./assets/scripts/input/KeyboardControls":32,"./assets/scripts/input/Controller":27,"./assets/scripts/obj/Lock":30,"./assets/scripts/obj/Potion":29,"./assets/scripts/obj/chest":33,"./assets/scripts/obj/Key":31,"./assets/scripts/utilities/ZSorter":34,"./assets/scripts/utilities/ZSortOnLoad":18,"./assets/scripts/GameManager":38},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Menu/FirebaseManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/input/IInputControls.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ai/navigation/Waypoint.js"},{"deps":{"./AgentStrategy":39},"path":"preview-scripts/assets/scripts/ai/strategies/Coward.js"},{"deps":{},"path":"preview-scripts/assets/scripts/camera/CameraTransposer.js"},{"deps":{"./utilities/ZSortOnLoad":18},"path":"preview-scripts/assets/scripts/MapManager.js"},{"deps":{"./GameManager":38,"./ai/LavaSlimeAI":22,"./ai/GreenSlimeAI":21,"./ai/GreenBossAI":23,"./ai/BlueSlimeAI":16},"path":"preview-scripts/assets/scripts/Player.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIManager.js"},{"deps":{"./MapGeneratorCore":11},"path":"preview-scripts/assets/scripts/MapGenerator.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MonsterManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MapGeneratorCore.js"},{"deps":{"./input/IInputControls":2,"./input/Controller":27},"path":"preview-scripts/assets/scripts/ActorController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Menu/GameOver.js"},{"deps":{"./AuthManager":19},"path":"preview-scripts/assets/scripts/Menu/MenuMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Menu/SuccessPopup.js"},{"deps":{"../Player":7},"path":"preview-scripts/assets/scripts/ai/BlueSlimeAI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Menu/LoginSignUp.js"},{"deps":{},"path":"preview-scripts/assets/scripts/utilities/ZSortOnLoad.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Menu/AuthManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/LeaderboardManager.js"},{"deps":{"../Player":7},"path":"preview-scripts/assets/scripts/ai/GreenSlimeAI.js"},{"deps":{"../Player":7},"path":"preview-scripts/assets/scripts/ai/LavaSlimeAI.js"},{"deps":{"../Player":7},"path":"preview-scripts/assets/scripts/ai/GreenBossAI.js"},{"deps":{"../input/IInputControls":2,"./Agent":28,"./strategies/Wanderer":37},"path":"preview-scripts/assets/scripts/ai/WanderAgent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Menu/FirebaseInit.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Menu/LoadingManager.js"},{"deps":{"./IInputControls":2},"path":"preview-scripts/assets/scripts/input/Controller.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ai/Agent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/obj/Potion.js"},{"deps":{},"path":"preview-scripts/assets/scripts/obj/Lock.js"},{"deps":{},"path":"preview-scripts/assets/scripts/obj/Key.js"},{"deps":{"./IInputControls":2},"path":"preview-scripts/assets/scripts/input/KeyboardControls.js"},{"deps":{},"path":"preview-scripts/assets/scripts/obj/chest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/utilities/ZSorter.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Menu/Menu.js"},{"deps":{"../input/IInputControls":2,"./Agent":28,"./strategies/Coward":4,"./strategies/Wanderer":37},"path":"preview-scripts/assets/scripts/ai/ShyAgent.js"},{"deps":{"./AgentStrategy":39},"path":"preview-scripts/assets/scripts/ai/strategies/Wanderer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GameManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ai/strategies/AgentStrategy.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    