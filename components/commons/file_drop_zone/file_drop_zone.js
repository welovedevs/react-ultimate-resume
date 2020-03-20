"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileDropZone = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactDropzone = require("react-dropzone");

var _ui = require("@wld/ui");

var _loading_spinner = require("../loading_spinner/loading_spinner");

var _file_drop_zone_styles = require("./file_drop_zone_styles");

var DropFileIcon = function DropFileIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }, _react.default.createElement("path", {
    d: "M28.75 18.75c5.524 0 10 4.477 10 10s-4.476 10-10 10-10-4.476-10-10 4.477-10 10-10zM28.75 23.75v10M28.75 33.75L25 30M28.75 33.75L32.5 30M6.25 11.25h17.5M6.25 18.75h10M6.25 26.25h6.25M12.5 33.75H3.75c-1.38 0-2.5-1.12-2.5-2.5V3.75c0-1.38 1.12-2.5 2.5-2.5h17.715c.664 0 1.299.263 1.767.732l4.787 4.786c.468.469.732 1.104.732 1.767V12.5",
    strokeWidth: "2.50005"
  })));
};

DropFileIcon.defaultProps = {
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
};

var SuccessIcon = function SuccessIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }, _react.default.createElement("path", {
    d: "M10 22.039l4.084 5.795a1.749 1.749 0 0 0 2.845.085L30 11.38",
    strokeWidth: "2.50005"
  }), _react.default.createElement("path", {
    d: "M20 1.248c10.356 0 18.75 8.396 18.75 18.75S30.357 38.75 20 38.75 1.25 30.354 1.25 20 9.645 1.249 20 1.249z",
    strokeWidth: "2.50005"
  })));
};

SuccessIcon.defaultProps = {
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
};

var RemoveIcon = function RemoveIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }, _react.default.createElement("path", {
    d: "M25.304 14.697L14.697 25.302M14.697 14.697l10.607 10.605M20 1.25c10.356 0 18.75 8.395 18.75 18.75S30.357 38.75 20 38.75 1.25 30.357 1.25 20 9.645 1.25 20 1.25z",
    strokeWidth: "2.50005"
  })));
};

RemoveIcon.defaultProps = {
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_file_drop_zone_styles.styles);

var DEFAULT_ON_DROP = function DEFAULT_ON_DROP() {
  throw new Error('Did not provide a valid onDrop function.');
};

var FileDropZoneComponent = function FileDropZoneComponent(_ref) {
  var _ref$onDrop = _ref.onDrop,
      onDrop = _ref$onDrop === void 0 ? DEFAULT_ON_DROP : _ref$onDrop;
  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      fileUrl = _useState2[0],
      setFileUrl = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useMemo = (0, _react.useMemo)(function () {
    return {
      waiting: fileUrl === false,
      loading: fileUrl === null,
      success: Boolean(fileUrl)
    };
  }, [fileUrl]),
      waiting = _useMemo.waiting,
      loading = _useMemo.loading,
      success = _useMemo.success;

  var handleDrop = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(parameters) {
      var url;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof onDrop !== 'function')) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              setFileUrl(null);
              _context.prev = 3;
              _context.next = 6;
              return onDrop(parameters);

            case 6:
              url = _context.sent;
              setFileUrl(url);
              _context.next = 15;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              console.warn('Failed to drop file', _context.t0);
              setFileUrl(false);
              setError(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 10]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [onDrop]);

  var _useDropzone = (0, _reactDropzone.useDropzone)({
    onDrop: handleDrop
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive;

  return _react.default.createElement("button", (0, _extends2.default)({
    className: classes.container,
    type: "button"
  }, getRootProps()), _react.default.createElement(Content, {
    waiting: waiting,
    loading: loading,
    error: error,
    success: success,
    getInputProps: getInputProps,
    isDragActive: isDragActive,
    classes: classes
  }));
};

var Content = function Content(_ref3) {
  var waiting = _ref3.waiting,
      loading = _ref3.loading,
      error = _ref3.error,
      success = _ref3.success,
      getInputProps = _ref3.getInputProps,
      isDragActive = _ref3.isDragActive,
      classes = _ref3.classes;

  if (loading) {
    return _react.default.createElement(_loading_spinner.LoadingSpinner, null);
  }

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("input", getInputProps()), _react.default.createElement(Icon, {
    waiting: waiting,
    error: error,
    success: success,
    classes: classes
  }), _react.default.createElement(Label, {
    waiting: waiting,
    error: error,
    success: success,
    isDragActive: isDragActive,
    classes: classes
  }));
};

var Icon = function Icon(_ref4) {
  var waiting = _ref4.waiting,
      error = _ref4.error,
      success = _ref4.success,
      classes = _ref4.classes;

  if (error) {
    return _react.default.createElement(RemoveIcon, {
      className: classes.icon
    });
  }

  if (waiting) {
    return _react.default.createElement(DropFileIcon, {
      className: classes.icon
    });
  }

  if (success) {
    return _react.default.createElement(SuccessIcon, {
      className: classes.icon
    });
  }

  return null;
};

var Label = function Label(_ref5) {
  var waiting = _ref5.waiting,
      error = _ref5.error,
      success = _ref5.success,
      isDragActive = _ref5.isDragActive,
      classes = _ref5.classes;
  var text = null;

  if (isDragActive) {
    text = 'Release the cracken!';
  } else if (error) {
    text = 'An error occurred.';
  } else if (success) {
    text = 'File successfully uploaded!';
  } else if (waiting) {
    text = "Drag'n drop files or click here.";
  }

  return _react.default.createElement(_ui.Typography, {
    customClasses: {
      container: classes.typography
    },
    variant: "h4",
    component: "h4"
  }, text);
};

var FileDropZone = FileDropZoneComponent;
exports.FileDropZone = FileDropZone;