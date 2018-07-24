Liferay.Loader.define('react-npm-portlet@1.0.0/lib/components/home/home', ['exports', 'react', '../../redux/redux', 'react-redux'], function (exports, _react, _redux, _reactRedux) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

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

    var Home = function (_React$Component) {
        _inherits(Home, _React$Component);

        function Home(props) {
            _classCallCheck(this, Home);

            var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

            _this.handleDispach = _this.handleDispach.bind(_this);
            return _this;
        }

        _createClass(Home, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                console.log(this.props.homenav.redirectTo);
            }
        }, {
            key: 'handleDispach',
            value: function handleDispach() {
                this.props.actionCreate("test");
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'div',
                    { onClick: this.handleDispach },
                    'this is home page'
                );
            }
        }]);

        return Home;
    }(_react2.default.Component);

    var mapStatetoProps = function mapStatetoProps(state) {
        return {
            homenav: state.homenav
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            actionCreate: function actionCreate(value) {
                dispatch((0, _redux.actionCreate)(value));
            }
        };
    };

    exports.default = (0, _reactRedux.connect)(mapStatetoProps, mapDispatchToProps)(Home);
});
//# sourceMappingURL=home.js.map