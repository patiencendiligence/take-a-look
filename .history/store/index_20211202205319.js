import { createStore } from 'vuex';
import reservation from './modules/reservation';

// ⚠️ store 변수를 만들어서 export 한다는 점에 주의! 
export const store = createStore ({
    modules: { reservation },
});