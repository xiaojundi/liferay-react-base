Liferay.Loader.define('react-npm-portlet@1.0.0/lib/index.es', ['exports', 'react', 'react-dom', './components/home/home', 'react-redux', './reducer', 'redux', 'redux-thunk', './components/userDashboard/userDashboard'], function (exports, _react, _reactDom, _home, _reactRedux, _reducer, _redux, _reduxThunk, _userDashboard) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function (elementId) {
		_reactDom2.default.render(_react2.default.createElement(Game, null), document.getElementById(elementId));
	};

	var _react2 = _interopRequireDefault(_react);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _home2 = _interopRequireDefault(_home);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _userDashboard2 = _interopRequireDefault(_userDashboard);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var store = (0, _redux.createStore)(_reducer2.default, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), window.devToolsExtension ? window.devToolsExtension() : function (f) {
		return f;
	}));

	var Game = function (_React$Component) {
		_inherits(Game, _React$Component);

		function Game() {
			_classCallCheck(this, Game);

			return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
		}

		_createClass(Game, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					_reactRedux.Provider,
					{ store: store },
					_react2.default.createElement(
						'div',
						{ className: 'game' },
						_react2.default.createElement(_userDashboard2.default, null)
					)
				);
			}
		}]);

		return Game;
	}(_react2.default.Component);
});
//# sourceMappingURL=index.es.js.map