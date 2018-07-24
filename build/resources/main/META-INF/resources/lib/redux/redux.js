Liferay.Loader.define('react-npm-portlet@1.0.0/lib/redux/redux', ['exports', 'react'], function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.homenav = homenav;
    exports.actionCreate = actionCreate;

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
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

    var initState = {
        redirectTo: ''
    };

    function homenav() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
        var action = arguments[1];

        console.log(action);
        switch (action.type) {
            case "home":
                return _extends({}, state, { redirectTo: "home" });
            default:
                return state;
        }
    }

    function actionCreate(value) {
        console.log(value);
        return {
            type: "home",
            payload: value
        };
    }
});
//# sourceMappingURL=redux.js.map