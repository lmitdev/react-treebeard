'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _velocityReact = require('velocity-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Drawer = function (_React$Component) {
  (0, _inherits3.default)(Drawer, _React$Component);

  function Drawer() {
    (0, _classCallCheck3.default)(this, Drawer);
    return (0, _possibleConstructorReturn3.default)(this, (Drawer.__proto__ || (0, _getPrototypeOf2.default)(Drawer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Drawer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          restAnimationInfo = _props.restAnimationInfo,
          children = _props.children,
          ref = _props.ref;

      return _react2.default.createElement(
        _velocityReact.VelocityTransitionGroup,
        (0, _extends3.default)({}, restAnimationInfo, {
          ref: ref
        }),
        children
      );
    }
  }]);
  return Drawer;
}(_react2.default.Component);

Drawer.propTypes = {
  restAnimationInfo: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.arrayOf(_propTypes2.default.func, _propTypes2.default.object), _propTypes2.default.object]),
  ref: _propTypes2.default.func.isRequired
};

exports.default = Drawer;