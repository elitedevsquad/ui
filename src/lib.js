import Comps from './components';
import utilsForm from './utils/form';
import Fltrs from './filters';

export const Components = Comps;
export const Filters = Fltrs;
export const Form = utilsForm;

const lib = {
    install(Vue) {
        Vue.use(Components);

        for (let filter in Filters) {
            Vue.filter(filter, Filters[filter]);
        }
    },
};

export default lib;
