"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileDropZone = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactDropzone = require("react-dropzone");

var _ui = require("@wld/ui");

var _loading_spinner = require("../loading_spinner/loading_spinner");

var _file_drop_zone_styles = require("./file_drop_zone_styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DropFileIcon = function DropFileIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("title", null, "Exported from Streamline App (https://app.streamlineicons.com)"), _react.default.createElement("g", {
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
    d: "M11.25 15l5.49 7.685a2.543 2.543 0 0 0 4.024.15L38.75 1.248",
    strokeWidth: "2.50005"
  }), _react.default.createElement("path", {
    d: "M27.972 6.373c-8.208-5.08-18.98-2.543-24.06 5.666s-2.544 18.98 5.665 24.06 18.98 2.543 24.06-5.665a17.481 17.481 0 0 0 1.03-16.472",
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
      _useState2 = _slicedToArray(_useState, 2),
      fileUrl = _useState2[0],
      setFileUrl = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
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

  var handleDrop = (0, _react.useCallback)(
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(parameters) {
      var url;
      return regeneratorRuntime.wrap(function _callee$(_context) {
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
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              setFileUrl(false);
              setError(_context.t0);

            case 14:
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

  return _react.default.createElement("button", _extends({
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