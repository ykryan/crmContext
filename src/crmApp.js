import { crmEntity, crmAttr } from './common/crmEntity.js';
import { crmProcess } from './common/crmProcess.js';
import { crmGridList } from './common/crmGridList.js';
export class crmContext {
    constructor(Xrm, pars) {
        this.Xrm = Xrm;
        this.pars = pars || {};
    }
    attr(name) {
        return new crmAttr(this.Xrm, name);
    }
    get entity() {
        return new crmEntity(this.Xrm, this.pars.Sys)
    }
    get process() {
        return new crmProcess(this.Xrm)
    }
    crmGridList(name) {
        return new crmGridList(this.pars.Sys, name)
    }
}
window.crmContext = crmContext;
