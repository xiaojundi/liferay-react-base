Liferay.Loader.define('react-npm-portlet@1.0.0/lib/components/userDashboard/userDashboard', ['exports', 'react'], function (exports, _react) {
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

    var UserDashboard = function (_React$Component) {
        _inherits(UserDashboard, _React$Component);

        function UserDashboard(props) {
            _classCallCheck(this, UserDashboard);

            var _this = _possibleConstructorReturn(this, (UserDashboard.__proto__ || Object.getPrototypeOf(UserDashboard)).call(this, props));

            _this.state = {
                userData: {},
                isAuth: false
            };
            return _this;
        }

        _createClass(UserDashboard, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;

                Liferay.Service('/aw_users.userinfo/get-user-info', function (obj) {
                    _this2.setState({ userData: obj.data });
                    if (obj.status.code === "00") {
                        _this2.setState({ isAuth: true });
                    }
                });
                console.log(this.state.userData);
            }
        }, {
            key: 'render',
            value: function render() {
                var _this3 = this;

                return this.state.isAuth ? _react2.default.createElement(
                    'div',
                    { className: 'row col-md-12' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-6' },
                        _react2.default.createElement(
                            'table',
                            { className: 'table table-hover' },
                            _react2.default.createElement(
                                'tbody',
                                null,
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('img', { src: '/o/react-npm-portlet/imgs/user.jpg', alt: 'image' })
                                    )
                                ),
                                Object.keys(this.state.userData).map(function (key) {
                                    if (_this3.state.userData[key] != "") {
                                        return _react2.default.createElement(
                                            'tr',
                                            { key: key },
                                            _react2.default.createElement(
                                                'td',
                                                null,
                                                key,
                                                ' : ',
                                                _this3.state.userData[key]
                                            )
                                        );
                                    }
                                })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-6' },
                        _react2.default.createElement('img', { className: 'bitcoin-img', src: '/o/react-npm-portlet/imgs/bitcoin.png', alt: 'image' })
                    )
                ) : _react2.default.createElement(
                    'div',
                    null,
                    'please login'
                );
            }
        }]);

        return UserDashboard;
    }(_react2.default.Component);

    exports.default = UserDashboard;
});
//# sourceMappingURL=userDashboard.js.map