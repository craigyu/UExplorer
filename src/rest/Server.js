"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restify = require("restify");
var InsightFacade_1 = require("../controller/InsightFacade");
var Util_1 = require("../Util");
var Server = (function () {
    function Server(port) {
        Util_1.default.info("Server::<init>( " + port + " )");
        this.port = port;
    }
    Server.prototype.stop = function () {
        Util_1.default.info('Server::close()');
        var that = this;
        return new Promise(function (fulfill) {
            that.rest.close(function () {
                fulfill(true);
            });
        });
    };
    Server.prototype.start = function () {
        var that = this;
        return new Promise(function (fulfill, reject) {
            try {
                Util_1.default.info('Server::start() - start');
                that.rest = restify.createServer({
                    name: 'insightUBC'
                });
                that.rest.use(restify.bodyParser({ mapParams: true, mapFiles: true }));
                that.rest.get('/', function (req, res, next) {
                    res.send(200);
                    return next();
                });
                that.rest.get('/echo/:msg', Server.echo);
                that.rest.put('/dataset/:id', Server.add);
                that.rest.del('/dataset/:id', Server.del);
                that.rest.post('/query', Server.query);
                that.rest.listen(that.port, function () {
                    Util_1.default.info('Server::start() - restify listening: ' + that.rest.url);
                    fulfill(true);
                });
                that.rest.on('error', function (err) {
                    Util_1.default.info('Server::start() - restify ERROR: ' + err);
                    reject(err);
                });
            }
            catch (err) {
                Util_1.default.error('Server::start() - ERROR: ' + err);
                reject(err);
            }
        });
    };
    Server.echo = function (req, res, next) {
        Util_1.default.trace('Server::echo(..) - params: ' + JSON.stringify(req.params));
        try {
            var result = Server.performEcho(req.params.msg);
            Util_1.default.info('Server::echo(..) - responding ' + result.code);
            res.json(result.code, result.body);
        }
        catch (err) {
            Util_1.default.error('Server::echo(..) - responding 400');
            res.json(400, { error: err.message });
        }
        return next();
    };
    Server.performEcho = function (msg) {
        if (typeof msg !== 'undefined' && msg !== null) {
            return { code: 200, body: { message: msg + '...' + msg } };
        }
        else {
            return { code: 400, body: { error: 'Message not provided' } };
        }
    };
    Server.add = function (req, res, next) {
        var id = req.params.id;
        Util_1.default.trace('Server::Add - params: ' + id);
        try {
            var hello = req.params.body.toString('base64');
            var insF = new InsightFacade_1.default();
            insF.addDataset(id, hello).then(function (result) {
                res.json(result.code, result.body);
            }).catch(function (error) {
                res.json(error.code, error.body);
            });
        }
        catch (err) {
            res.send(400, { error: err.message });
        }
        return next();
    };
    Server.del = function (req, res, next) {
        Util_1.default.trace('Server::Del - params: ' + JSON.stringify(req.params));
        var id = req.params.id;
        var insF = new InsightFacade_1.default();
        insF.removeDataset(id).then(function (result) {
            res.json(result.code, result.body);
        })
            .catch(function (error) {
            res.json(error.code, error.body);
        });
        return next();
    };
    Server.query = function (req, res, next) {
        Util_1.default.trace('Server::Del - query: ');
        var inputQ = req.params;
        var insF = new InsightFacade_1.default();
        try {
            insF.performQuery(inputQ).then(function (result) {
                res.json(result.code, result.body);
            })
                .catch(function (error) {
                res.send(Number(error.code), JSON.stringify(error.body));
            });
        }
        catch (err) {
            res.send(400, { error: err.message });
        }
        return next();
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=Server.js.map