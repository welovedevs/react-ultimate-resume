"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var styles = {
  container: {
    display: 'flex',
    height: '100%'
  },
  iframe: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: 200,
    height: 300
  },
  picker: {
    width: 300
  },
  orderer: {
    width: 300,
    overflow: 'auto',
    flex: 1
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  dialogContent: {
    overflow: 'hidden !important',
    display: 'flex',
    height: '100%'
  },
  dialogPaper: {
    maxWidth: [900, '!important'],
    minHeight: 'calc(100% - 64px)',
    height: 1
  }
};
exports.styles = styles;