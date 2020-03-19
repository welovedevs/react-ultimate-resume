"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProjectsArray = exports.mapProjectToJsonResume = exports.mapProjectsFromJsonResume = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _moment = _interopRequireDefault(require("moment"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var mapProjectsFromJsonResume = function mapProjectsFromJsonResume(jsonResume) {
  var _jsonResume$projects;

  return {
    projects: jsonResume === null || jsonResume === void 0 ? void 0 : (_jsonResume$projects = jsonResume.projects) === null || _jsonResume$projects === void 0 ? void 0 : _jsonResume$projects.map(function (project, index) {
      return _objectSpread({}, project, {
        // generating uuid for manipulating data if not present
        id: project.id || (0, _v.default)(),
        date: project.endDate && (0, _moment.default)(project.endDate, 'YYYY-MM-DD'),
        index: project.index || index
      });
    })
  };
};

exports.mapProjectsFromJsonResume = mapProjectsFromJsonResume;

var mapProjectToJsonResume = function mapProjectToJsonResume(project) {
  return _objectSpread({}, project, {
    endDate: project.date && project.date.format('YYYY-MM-DD')
  });
};

exports.mapProjectToJsonResume = mapProjectToJsonResume;

var updateProjectsArray = function updateProjectsArray(newProject, jsonResume) {
  var _jsonResume$projects2;

  // eslint-disable-next-line no-debugger
  if (!((_jsonResume$projects2 = jsonResume.projects) === null || _jsonResume$projects2 === void 0 ? void 0 : _jsonResume$projects2.length)) {
    return {
      projects: [newProject]
    };
  }

  var newProjects = (0, _toConsumableArray2.default)(jsonResume.projects);

  if (!Number.isNaN(newProject.index)) {
    newProjects[newProject.index] = newProject;
    return {
      projects: newProjects
    };
  }

  return {
    projects: newProjects.concat(newProject)
  };
};

exports.updateProjectsArray = updateProjectsArray;