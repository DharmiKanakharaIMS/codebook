export const filterReducer =(state,action)=>
{
    const {type,payload} =action
    switch(type){
        case "ProductList":
            return{...state, productList: payload.products};          

        case "SortBy":
            return {...state,sortBy: payload.sortBy}
        
        case "Ratings":
            return {...state,rating: payload.rating}
        
        case "BestSeller":
            return {...state,bestSellerOnly: payload.bestSellerOnly}
        
        case "OnlyInStock":
            return {...state,onlyInStock: payload.onlyInStock}
        
        case "ClearFilter":
            return { ...state,
                    onlyInStock: false,
                    bestSellerOnly:false,
                    sortBy: null,
                    rating: null}
        
        default: 
        throw new Error("No Case Found")
    }
}