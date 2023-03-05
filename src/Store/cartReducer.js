import axios from "axios";

const initialState = { counter: 1 ,
input:{}
};

export function cartReducer(state = initialState, action) {
    const formData=new FormData();
    // const [input,setinput]=useState({})
    switch (action.type) {
        
        case 'uploadFiles':
          
            formData.append('files',action.payload);
            
              axios.post("http://localhost:8777/uploadFiles",formData)
            return {
                count:action.payload,
          
            };
        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1,
            };
            case 'hangeInput':{
                console.log(action.payload);
                return{
                    ...state,
                    input:action.payload
                }
               
            }
        default:
            return state;
    }
}
