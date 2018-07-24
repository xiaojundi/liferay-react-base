import React from 'react'
const initState = {
    redirectTo: ''
}

export function homenav(state=initState, action){
    console.log(action)
    switch(action.type){
        case "home":
        return {...state, redirectTo:"home"}
        default:
        return state
    }
}

export function actionCreate(value){
    console.log(value)
    return {
        type: "home",
        payload: value
    }
}