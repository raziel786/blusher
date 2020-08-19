import createHistory from 'history/createBrowserHistory';

/**
 * Export the default browser history object used by redux and the router.
 */
export default createHistory({
  forceRefresh: false,
});
