import axios from "axios";
export const getAllProducts = () => (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });
  axios
    .get("api/products/getallproducts")
    .then((res) => {
      dispatch({ type: "GET_PRODUCT_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_PRODUCT_FAILED", payload: err });
    });
};

export const getProductById = (productid) => (dispatch) => {

    dispatch({ type: "GET_PRODUCTID_REQUEST" });

    axios.post("/api/products/getproductbyid",{productid} )

      .then((res) => {

        dispatch({ type: "GET_PRODUCTID_SUCCESS", payload: res.data });

      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "GET_PRODUCTID_FAILED", payload: err });
      });
  };

  export const filterProducts=(searchkey,sortkey,category)=>dispatch=>{


    var filteredproducts;

    dispatch({type:'GET_PRODUCTS_REQUEST'})


    axios.get('/api/products/getallproducts').then(res=>{


        filteredproducts=res.data

        if(searchkey)
        {

          filteredproducts=res.data.filter(product=>{
                return product.name.toLowerCase().includes(searchkey)
            })
        }
        if(sortkey !=='popular'){

            if(sortkey=='htl'){

                filteredproducts=res.data.sort((a,b)=>{


                    return -a.price + b.price
                })
            }else{

                filteredproducts = res.data.sort((a,b)=>{

                    return a.price -b.price
                })
            }

        }

        if(category!=='all'){

            filteredproducts=res.data.filter(product=>{

                return product.category.toLowerCase().includes(category)
            })
        }

        dispatch({type:'GET_PRODUCT_SUCCESS',payload : filteredproducts})

    }).catch(err=>{

        dispatch({type:'GET_PRODUCTS_FAILED'})
    })

}