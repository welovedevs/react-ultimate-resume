"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTechnologies = void 0;

var _react = require("react");

var _technologies_reducer = require("../../../store/technologies/technologies_reducer");

var _profile = require("../../profile");

var _technologies_actions_types = require("../../../store/technologies/technologies_actions_types");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useTechnologies = function useTechnologies() {
  var _useContext = (0, _react.useContext)(_profile.DeveloperProfileContext),
      endpoints = _useContext.endpoints,
      _useContext$store$tec = _slicedToArray(_useContext.store.technologies, 2),
      technologies = _useContext$store$tec[0].technologies,
      dispatch = _useContext$store$tec[1];

  (0, _react.useEffect)(function () {
    if (!endpoints.devicons) {
      dispatch({
        type: _technologies_actions_types.TECHNOLOGIES_RECEIVED,
        technologies: {}
      });
    }

    if (technologies === null && endpoints.devicons) {
      // eslint-disable-next-line no-undef
      fetch(endpoints.devicons).then(function (res) {
        if (res.status.toString().startsWith('2')) {
          return res.json();
        }

        throw new Error("".concat(res.status, " ").concat(res.statusText));
      }).then(function (fetchedTechnologies) {
        return dispatch({
          type: _technologies_actions_types.TECHNOLOGIES_RECEIVED,
          technologies: fetchedTechnologies
        });
      }).catch(function (e) {
        console.error('Failed to fetch technologies', e);
        dispatch({
          type: _technologies_actions_types.TECHNOLOGIES_RECEIVED,
          technologies: {}
        });
      });
    }
  }, [technologies]);
  return {
    technologies: technologies
  };
};

exports.useTechnologies = useTechnologies;