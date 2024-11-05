export const SET_DROP_DATA = 'SET_DROP_DATA'
export const CLEAR_DROP_DATA = "CLEAR_DROP_DATA";
export const OPEN_DIALOG = "OPEN_DIALOG"
export const CLOSE_DIALOG = "CLOSE_DIALOG"

export const setDropData = (data) =>({
    type:SET_DROP_DATA,
    payload:data
})

export const clearDropData = () => ({
    type: CLEAR_DROP_DATA,
  });


  export const openDialog = ()=>({

    type : OPEN_DIALOG,
   
  })

  export const closeDialog1 = ()=>({

    type: CLOSE_DIALOG,
   
  })