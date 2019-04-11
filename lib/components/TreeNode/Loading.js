'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('@emotion/styled');

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ul = (0, _styled2.default)('ul', {
    shouldForwardProp: function shouldForwardProp(prop) {
        return ['className', 'children', 'ref'].indexOf(prop) !== -1;
    }
})(function (_ref) {
    var style = _ref.style;
    return style;
});

var Loading = function Loading(_ref2) {
    var style = _ref2.style,
        decorators = _ref2.decorators;
    return _react2.default.createElement(
        Ul,
        { style: style.subtree },
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(decorators.Loading, { style: style.loading })
        )
    );
};

Loading.propTypes = {
    decorators: _propTypes2.default.object.isRequired,
    style: _propTypes2.default.object.isRequired
};

exports.default = Loading;