exports.format = function (msgs) {
    const results = [];
    for (const [id, msg] of Object.entries(msgs)) {
        results.push({ id, defaultMessage: msg.defaultMessage });
    }
    return results;
};
