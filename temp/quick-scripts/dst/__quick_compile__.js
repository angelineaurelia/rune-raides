
(function () {
<<<<<<< Updated upstream
var scripts = [{"deps":{"./assets/scripts/Menu/LoginSignUp":1,"./assets/scripts/ai/navigation/Waypoint":2,"./assets/scripts/MapGenerator":3,"./assets/scripts/ai/strategies/Coward":4,"./assets/scripts/obj/Potion":5,"./assets/scripts/GameManager":6,"./assets/scripts/MonsterManager":7,"./assets/scripts/Player":8,"./assets/scripts/MapGeneratorCore":9,"./assets/scripts/FirebaseInit":10,"./assets/scripts/ActorController":11,"./assets/scripts/input/IInputControls":12,"./assets/scripts/UIManager":13,"./assets/scripts/camera/CameraTransposer":14,"./assets/scripts/SuccessPopup":15,"./assets/scripts/MapManager":16,"./assets/scripts/ai/BlueSlimeAI":17,"./assets/scripts/ai/GreenBossAI":18,"./assets/scripts/ai/GreenSlimeAI":19,"./assets/scripts/ai/ShyAgent":20,"./assets/scripts/Menu/MenuMgr":21,"./assets/scripts/Menu/LoadingManager":22,"./assets/scripts/ai/LavaSlimeAI":23,"./assets/scripts/utilities/ZSorter":24,"./assets/scripts/Menu/Menu":25,"./assets/scripts/ai/strategies/AgentStrategy":26,"./assets/scripts/ai/Agent":27,"./assets/scripts/ai/strategies/Wanderer":28,"./assets/scripts/obj/Lock":29,"./assets/scripts/obj/chest":30,"./assets/scripts/Menu/FirebaseManager":31,"./assets/scripts/ai/WanderAgent":32,"./assets/scripts/input/KeyboardControls":33,"./assets/scripts/input/Controller":34,"./assets/scripts/AuthManager":35,"./assets/scripts/obj/Key":36,"./assets/scripts/utilities/ZSortOnLoad":37},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Menu/LoginSignUp.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ai/navigation/Waypoint.js"},{"deps":{"./MapGeneratorCore":9},"path":"preview-scripts/assets/scripts/MapGenerator.js"},{"deps":{"./AgentStrategy":26},"path":"preview-scripts/assets/scripts/ai/strategies/Coward.js"},{"deps":{},"path":"preview-scripts/assets/scripts/obj/Potion.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GameManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MonsterManager.js"},{"deps":{"./GameManager":6,"./ai/BlueSlimeAI":17,"./ai/LavaSlimeAI":23,"./ai/GreenSlimeAI":19,"./ai/GreenBossAI":18},"path":"preview-scripts/assets/scripts/Player.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MapGeneratorCore.js"},{"deps":{},"path":"preview-scripts/assets/scripts/FirebaseInit.js"},{"deps":{"./input/Controller":34,"./input/IInputControls":12},"path":"preview-scripts/assets/scripts/ActorController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/input/IInputControls.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/camera/CameraTransposer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/SuccessPopup.js"},{"deps":{"./utilities/ZSortOnLoad":37},"path":"preview-scripts/assets/scripts/MapManager.js"},{"deps":{"../Player":8},"path":"preview-scripts/assets/scripts/ai/BlueSlimeAI.js"},{"deps":{"../Player":8},"path":"preview-scripts/assets/scripts/ai/GreenBossAI.js"},{"deps":{"../Player":8},"path":"preview-scripts/assets/scripts/ai/GreenSlimeAI.js"},{"deps":{"../input/IInputControls":12,"./Agent":27,"./strategies/Coward":4,"./strategies/Wanderer":28},"path":"preview-scripts/assets/scripts/ai/ShyAgent.js"},{"deps":{"../AuthManager":35},"path":"preview-scripts/assets/scripts/Menu/MenuMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Menu/LoadingManager.js"},{"deps":{"../Player":8},"path":"preview-scripts/assets/scripts/ai/LavaSlimeAI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/utilities/ZSorter.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Menu/Menu.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ai/strategies/AgentStrategy.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ai/Agent.js"},{"deps":{"./AgentStrategy":26},"path":"preview-scripts/assets/scripts/ai/strategies/Wanderer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/obj/Lock.js"},{"deps":{},"path":"preview-scripts/assets/scripts/obj/chest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Menu/FirebaseManager.js"},{"deps":{"../input/IInputControls":12,"./Agent":27,"./strategies/Wanderer":28},"path":"preview-scripts/assets/scripts/ai/WanderAgent.js"},{"deps":{"./IInputControls":12},"path":"preview-scripts/assets/scripts/input/KeyboardControls.js"},{"deps":{"./IInputControls":12},"path":"preview-scripts/assets/scripts/input/Controller.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AuthManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/obj/Key.js"},{"deps":{},"path":"preview-scripts/assets/scripts/utilities/ZSortOnLoad.js"}];
=======
var scripts = [{"deps":{"./assets/scripts/MapGenerator":9,"./assets/scripts/MapGeneratorCore":12,"./assets/scripts/MapManager":3,"./assets/scripts/MonsterManager":13,"./assets/scripts/Player":11,"./assets/scripts/UIManager":14,"./assets/scripts/ActorController":18,"./assets/scripts/Menu/FirebaseInit":36,"./assets/scripts/Menu/FirebaseManager":34,"./assets/scripts/Menu/LoadingManager":16,"./assets/scripts/Menu/LoginSignUp":33,"./assets/scripts/Menu/Menu":10,"./assets/scripts/Menu/MenuMgr":1,"./assets/scripts/Menu/SuccessPopup":37,"./assets/scripts/Menu/AuthManager":35,"./assets/scripts/ai/BlueSlimeAI":17,"./assets/scripts/ai/GreenBossAI":19,"./assets/scripts/ai/GreenSlimeAI":24,"./assets/scripts/ai/LavaSlimeAI":23,"./assets/scripts/ai/ShyAgent":15,"./assets/scripts/ai/WanderAgent":20,"./assets/scripts/ai/Agent":21,"./assets/scripts/ai/navigation/Waypoint":4,"./assets/scripts/ai/strategies/Coward":32,"./assets/scripts/ai/strategies/Wanderer":2,"./assets/scripts/ai/strategies/AgentStrategy":31,"./assets/scripts/camera/CameraTransposer":8,"./assets/scripts/input/IInputControls":27,"./assets/scripts/input/KeyboardControls":6,"./assets/scripts/input/Controller":22,"./assets/scripts/obj/Lock":26,"./assets/scripts/obj/Potion":25,"./assets/scripts/obj/chest":5,"./assets/scripts/obj/Key":29,"./assets/scripts/utilities/ZSorter":7,"./assets/scripts/utilities/ZSortOnLoad":28,"./assets/scripts/GameManager":30},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../AuthManager":-1},"path":"preview-scripts/assets/scripts/Menu/MenuMgr.js"},{"deps":{"./AgentStrategy":31},"path":"preview-scripts/assets/scripts/ai/strategies/Wanderer.js"},{"deps":{"./utilities/ZSortOnLoad":28},"path":"preview-scripts/assets/scripts/MapManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ai/navigation/Waypoint.js"},{"deps":{},"path":"preview-scripts/assets/scripts/obj/chest.js"},{"deps":{"./IInputControls":27},"path":"preview-scripts/assets/scripts/input/KeyboardControls.js"},{"deps":{},"path":"preview-scripts/assets/scripts/utilities/ZSorter.js"},{"deps":{},"path":"preview-scripts/assets/scripts/camera/CameraTransposer.js"},{"deps":{"./MapGeneratorCore":12},"path":"preview-scripts/assets/scripts/MapGenerator.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Menu/Menu.js"},{"deps":{"./GameManager":30,"./ai/LavaSlimeAI":23,"./ai/GreenSlimeAI":24,"./ai/GreenBossAI":19,"./ai/BlueSlimeAI":17},"path":"preview-scripts/assets/scripts/Player.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MapGeneratorCore.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MonsterManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIManager.js"},{"deps":{"../input/IInputControls":27,"./Agent":21,"./strategies/Coward":32,"./strategies/Wanderer":2},"path":"preview-scripts/assets/scripts/ai/ShyAgent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Menu/LoadingManager.js"},{"deps":{"../Player":11},"path":"preview-scripts/assets/scripts/ai/BlueSlimeAI.js"},{"deps":{"./input/Controller":22,"./input/IInputControls":27},"path":"preview-scripts/assets/scripts/ActorController.js"},{"deps":{"../Player":11},"path":"preview-scripts/assets/scripts/ai/GreenBossAI.js"},{"deps":{"../input/IInputControls":27,"./Agent":21,"./strategies/Wanderer":2},"path":"preview-scripts/assets/scripts/ai/WanderAgent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ai/Agent.js"},{"deps":{"./IInputControls":27},"path":"preview-scripts/assets/scripts/input/Controller.js"},{"deps":{"../Player":11},"path":"preview-scripts/assets/scripts/ai/LavaSlimeAI.js"},{"deps":{"../Player":11},"path":"preview-scripts/assets/scripts/ai/GreenSlimeAI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/obj/Potion.js"},{"deps":{},"path":"preview-scripts/assets/scripts/obj/Lock.js"},{"deps":{},"path":"preview-scripts/assets/scripts/input/IInputControls.js"},{"deps":{},"path":"preview-scripts/assets/scripts/utilities/ZSortOnLoad.js"},{"deps":{},"path":"preview-scripts/assets/scripts/obj/Key.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GameManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ai/strategies/AgentStrategy.js"},{"deps":{"./AgentStrategy":31},"path":"preview-scripts/assets/scripts/ai/strategies/Coward.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Menu/LoginSignUp.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Menu/FirebaseManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Menu/AuthManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Menu/FirebaseInit.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Menu/SuccessPopup.js"}];
>>>>>>> Stashed changes
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
    