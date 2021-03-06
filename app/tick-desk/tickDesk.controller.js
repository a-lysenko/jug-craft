const db = require('../db/main.db');

const tickDeskMapper = require('./mapper');
const tickDeskRouter = require('./tickDesk.router');

const mockDataTickDesk = require('../mock/tickDesk.mock');

class TickDeskController {
    constructor() {}

    setRoute(app) {
        const ctrl = this;
        tickDeskRouter.setup(ctrl, app);
    }

    getAllTicks() {
        const promise = new Promise((resolveFn, rejectFn) => {

            // TODO - repace callback interface of 'getAllTicks' with promise. This code is evidence it should be done
            db.getAllTicks((dbTicks) => {
                const clientTickDesk = tickDeskMapper.buildClientTickDesk(dbTicks);

                resolveFn(clientTickDesk);

                // TODO - remove it if one is not needed
                //resolveFn(clientTickDesk.concat(mockDataTickDesk));
            }, rejectFn);
        });

        return promise;
    }
}

module.exports = new TickDeskController();