"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTechnologies = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _technologies_actions_types = require("../../../store/technologies/technologies_actions_types");

var _contexts = require("../../../utils/context/contexts");

var DEFAULT_OBJECT = {};

var useTechnologies = function useTechnologies() {
  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      endpoints = _useContext.endpoints,
      _useContext$store$tec = (0, _slicedToArray2.default)(_useContext.store.technologies, 2),
      technologies = _useContext$store$tec[0].technologies,
      dispatch = _useContext$store$tec[1];

  (0, _react.useEffect)(function () {
    if (!endpoints.devicons) {
      dispatch({
        type: _technologies_actions_types.TECHNOLOGIES_RECEIVED,
        technologies: DEFAULT_OBJECT
      });
      return;
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
          technologies: DEFAULT_OBJECT
        });
      });
    }
  }, [technologies]);
  return {
    technologies: technologies
  };
};

exports.useTechnologies = useTechnologies;