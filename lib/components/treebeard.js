'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _styled = require('@emotion/styled');

var _styled2 = _interopRequireDefault(_styled);

var _lodash = require('lodash');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _animations = require('../themes/animations');

var _animations2 = _interopRequireDefault(_animations);

var _default = require('../themes/default');

var _default2 = _interopRequireDefault(_default);

var _decorators = require('./decorators');

var _decorators2 = _interopRequireDefault(_decorators);

var _TreeNode = require('./TreeNode');

var _TreeNode2 = _interopRequireDefault(_TreeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ul = (0, _styled2.default)('ul', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return ['className', 'children'].indexOf(prop) !== -1;
  }
})(function (_ref) {
  var style = _ref.style;
  return style;
});

var TreeBeard = function TreeBeard(_ref2) {
  var animations = _ref2.animations,
      decorators = _ref2.decorators,
      data = _ref2.data,
      onToggle = _ref2.onToggle,
      onSelect = _ref2.onSelect,
      style = _ref2.style;
  return _react2.default.createElement(
    Ul,
    { style: (0, _extends3.default)({}, _default2.default.tree.base, style.tree.base) },
    (0, _lodash.castArray)(data).map(function (node) {
      return _react2.default.createElement(_TreeNode2.default, (0, _extends3.default)({ decorators: decorators, node: node, onToggle: onToggle, onSelect: onSelect, animations: animations }, {
        key: node.id,
        style: (0, _extends3.default)({}, _default2.default.tree.node, style.tree.node)
      }));
    })
  );
};

TreeBeard.propTypes = {
  style: _propTypes2.default.object,
  data: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]).isRequired,
  animations: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
  onToggle: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  decorators: _propTypes2.default.object
};

TreeBeard.defaultProps = {
  style: _default2.default,
  animations: _animations2.default,
  decorators: _decorators2.default
};

exports.default = TreeBeard;