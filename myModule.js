var fs = require('fs'),
    path = require('path');
module.exports = function getListWithExt(folder, extname, callback) {
    fs.readdir(folder, (err, files) => {
        if (err) return callback(err);
        var list = files.filter((file) => {
            if (path.extname(file) === '.' + extname) {
                return file;
            }
        });
        callback(err, list);
    });
}