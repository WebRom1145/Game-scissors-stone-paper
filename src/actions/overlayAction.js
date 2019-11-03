export const setSelectValue = (value) => {
    return {
        type:'CHANGE_SELECT',
        payload:value
    }
}
export const handelButtonClick = ()=>{

    return((dispatch) => {
        dispatch({
            type:'DISAPER_OVERLAY',
            payload:{
                showOverlay:false
            }
        })
       
    })

}