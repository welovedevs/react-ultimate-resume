"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _core = require("@material-ui/core");

var _dialog_title = require("../../../../commons/dialog/dialog_title/dialog_title");

var _project_dialog_content_title = require("./project_dialog_content_title/project_dialog_content_title");

var _project_dialog_content_images = require("./project_dialog_content_images/project_dialog_content_images");

var _project_dialog_content_description = require("./project_dialog_content_description/project_dialog_content_description");

var _use_card_has_dialog_opened = require("../../../../commons/profile_card/profile_card_hooks/use_card_has_dialog_opened");

var _project_dialog_styles = require("./project_dialog_styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_project_dialog_styles.styles);
var DEFAULT_PROJECT = {
  title: "Développement d'un serpent connecté",
  description: "Et oui, vous avez bien entendu !\nUn serpent connecté, c'est comme une montre connectée, mais en serpent, en fait ça ressemble pas une montre, mais ça reste connecté 🚀",
  images: {
    random1: {
      name: 'Random 1',
      url: 'https://source.unsplash.com/random/1200x600'
    },
    random2: {
      name: 'Random 2',
      url: 'https://source.unsplash.com/random/1200x600'
    },
    random3: {
      name: 'Random 3',
      url: 'https://source.unsplash.com/random/1200x600'
    },
    random4: {
      name: 'Random 4',
      url: 'https://source.unsplash.com/random/1200x600'
    },
    random5: {
      name: 'Random 3',
      url: 'https://source.unsplash.com/random/1200x600'
    },
    random6: {
      name: 'Random 4',
      url: 'https://source.unsplash.com/random/1200x600'
    }
  }
};

var ProjectDialogComponent = function ProjectDialogComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      project = _ref.project;
  var classes = useStyles();

  var _useHasDialogOpened = (0, _use_card_has_dialog_opened.useHasDialogOpened)(),
      _useHasDialogOpened2 = _slicedToArray(_useHasDialogOpened, 2),
      setHasDialogOpened = _useHasDialogOpened2[1];

  (0, _react.useEffect)(function () {
    return setHasDialogOpened(open);
  }, [open]);
  return _react.default.createElement(_core.Dialog, {
    classes: {
      paper: classes.paper
    },
    open: open,
    onClose: onClose
  }, _react.default.createElement(_dialog_title.DialogTitle, null, "Le projet en d\xE9tails"), _react.default.createElement(_core.DialogContent, {
    classes: {
      root: classes.content
    }
  }, _react.default.createElement(_project_dialog_content_title.ProjectDialogContentTitle, {
    title: DEFAULT_PROJECT.title
  }), _react.default.createElement(_project_dialog_content_description.ProjectDialogContentDescription, {
    description: DEFAULT_PROJECT.description
  }), _react.default.createElement(_project_dialog_content_images.ProjectDialogContentImages, {
    images: DEFAULT_PROJECT.images
  })), _react.default.createElement(_core.DialogActions, null, _react.default.createElement(_ui.Button, {
    size: "small",
    onClick: onClose
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.Lang.Close",
    defaultMessage: "Fermer"
  }))));
};

var ProjectDialog = ProjectDialogComponent;
exports.ProjectDialog = ProjectDialog;