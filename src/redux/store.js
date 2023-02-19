import { configurestore } from "@reduxjs/toollit";
import counterreducer from '../components/redux/logic';
export default configurestore ({
    reducer:{
        counter:counterreducer,

    }
});