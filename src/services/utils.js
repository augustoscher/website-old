const blackList = ["localhost", "127.0.0.1", ""];

const ignoreAnalytics = () => blackList.includes(window.location.hostname);

export default ignoreAnalytics;
