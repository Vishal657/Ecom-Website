export const fiilter = (Men, Women, Children, size, gender, colour) => {
    const helper = []

    if(size !== null){
        Men.forEach((val)=>{
            if(val.size === size) helper.push(val); 
        })
        Women.forEach((val)=>{
            if(val.size === size) helper.push(val); 
        })
        Children.forEach((val)=>{
            if(val.size === size) helper.push(val); 
        })
    }else if(gender !== null){
        Men.forEach((val)=>{
            if(val.gender === gender) helper.push(val); 
        })
        Women.forEach((val)=>{
            if(val.gender === gender) helper.push(val); 
        })
        Children.forEach((val)=>{
            if(val.gender === gender) helper.push(val); 
        })
    }else if(colour !== null){
        Men.forEach((val)=>{
            if(val.colour === colour) helper.push(val); 
        })
        Women.forEach((val)=>{
            if(val.colour === colour) helper.push(val); 
        })
        Children.forEach((val)=>{
            if(val.colour === colour) helper.push(val); 
        })
    }
    const helperHelper = [];
    helper.forEach((val,i)=>{
        let conditionCheck = [];
        if(colour === null){
            conditionCheck.push(1)
        } else if(colour === val.colour) {
            conditionCheck.push(1)
        } else {
            conditionCheck.push(0)
        }

        if(gender === null){
            conditionCheck.push(1)
        } else if(gender === val.gender) {
            conditionCheck.push(1)
        } else {
            conditionCheck.push(0)
        }

        if(size === null){
            conditionCheck.push(1)
        } else if(size === val.size) {
            conditionCheck.push(1)
        } else {
            conditionCheck.push(0)
        }

        if(conditionCheck[0]===1 && conditionCheck[1]===1 && conditionCheck[2]===1) helperHelper.push(val)
    })

    return helperHelper
}