
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/ActorController');
require('./assets/scripts/GameManager');
require('./assets/scripts/MapGenerator');
require('./assets/scripts/MapGeneratorCore');
require('./assets/scripts/MapManager');
require('./assets/scripts/Menu/AuthManager');
require('./assets/scripts/Menu/LoadingManager');
require('./assets/scripts/Menu/Menu');
require('./assets/scripts/Menu/MenuMgr');
require('./assets/scripts/MonsterManager');
require('./assets/scripts/Player');
require('./assets/scripts/UIManager');
require('./assets/scripts/ai/Agent');
require('./assets/scripts/ai/BlueSlimeAI');
require('./assets/scripts/ai/GreenBossAI');
require('./assets/scripts/ai/GreenSlimeAI');
require('./assets/scripts/ai/LavaSlimeAI');
require('./assets/scripts/ai/ShyAgent');
require('./assets/scripts/ai/WanderAgent');
require('./assets/scripts/ai/navigation/Waypoint');
require('./assets/scripts/ai/strategies/AgentStrategy');
require('./assets/scripts/ai/strategies/Coward');
require('./assets/scripts/ai/strategies/Wanderer');
require('./assets/scripts/camera/CameraTransposer');
require('./assets/scripts/input/Controller');
require('./assets/scripts/input/IInputControls');
require('./assets/scripts/input/KeyboardControls');
require('./assets/scripts/obj/Key');
require('./assets/scripts/obj/Lock');
require('./assets/scripts/obj/Potion');
require('./assets/scripts/obj/chest');
require('./assets/scripts/utilities/ZSortOnLoad');
require('./assets/scripts/utilities/ZSorter');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();