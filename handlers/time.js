'use strict';

module.exports = {
    get: function (req, res) {
        res.json({
            time: Date.now().toString(10)
        });
    }
};