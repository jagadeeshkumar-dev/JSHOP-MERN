import axios from "axios"

export const getAllProductsReducer=(state={products : []},action)=>{


    switch(action.type)
    {
        case 'GET_PRODUCTS_REQUEST':return{

            loading:true
        }
        case 'GET_PRODUCT_SUCCESS' :return{

            products:action.payload,
            loading:false
        }
        case 'GET_PRODUCT_FAILED' :return{
            error:action.payload,
            loading:false
        }
        default: return state
    }

}

export const getProductByIdReducer=(state={product : []},action)=>{


    switch(action.type)
    {
        case 'GET_PRODUCTID_REQUEST':return{

            loading:true
        }
        case 'GET_PRODUCTID_SUCCESS' :return{

            product:action.payload,
            loading:false
        }
        case 'GET_PRODUCTID_FAILED' :return{
            error:action.payload,
            loading:false
        }
        default: return state
    }

}

