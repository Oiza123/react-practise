export const initalState = {
    loading: false,
    post:{},
    error: false,
};

const PostReducer = (state, action) => {
    switch (action.type){
case "FETCH_START":
    return {
        loading: true,
        error:false,
        post: {},
    };

    case "FETCH_SUCCESS":
        return {
            loading: false,
            error:false,
            posts: action.payload,
        };

        case "FETCH_ERROR":
            return {
                loading: true,
                error:true,
                post: {},
            };   
            
            default:
                return state;
}

}

export default  PostReducer;