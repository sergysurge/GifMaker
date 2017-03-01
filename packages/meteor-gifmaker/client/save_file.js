Meteor.saveFile = function(blob, name, path, type, callback) {
    var fileReader = new FileReader(),
        method, encoding = 'binary', type = type || 'binary';
    switch (type) {
        case 'image/png':
            method = 'readAsText';
            encoding = 'utf8';
            break;
        case 'image/jpeg':
            method = 'readAsText';
            encoding = 'utf8'
            break;
        case 'binary':
            method = 'readAsBinaryString';
            encoding = 'binary';
            break;
        default:
            method = 'readAsBinaryString';
            encoding = 'binary';
            break;
    }
    fileReader.onload = function(file) {
       console.log('onload', file);
       
    }
    fileReader[method](blob);
}