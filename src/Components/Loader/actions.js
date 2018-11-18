export const types = {
  START_GLOBAL_LOADER: 'global/loader/start',
  STOP_GLOBAL_LOADER: 'global/loader/stop',
};

function startLoader(message) {
  return {
    type: types.START_GLOBAL_LOADER,
    message,
  }
}

function stopLoader() {
  return {
    type: types.STOP_GLOBAL_LOADER,
  }
}

export default {
  startLoader,
  stopLoader,
};