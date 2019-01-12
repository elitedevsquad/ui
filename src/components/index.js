import Pagination from './pagination';
import ButtonLoading from './button-loading';

export const Components = { Pagination, ButtonLoading };

const plugin = {
    install(Vue) {
        for (let name in Components) {
            Vue.component(name, Components[name]);
        }
    },
};

export default plugin;
