import {firebase,googleAuthProvider} from '../firebase/firebase';



export const login =(uid,displayName,photoURL)=>({
    type:'LOGIN',
    uid,
    displayName,
    photoURL
});

export const startLogin=()=>{
    return ()=>{
return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const startLoginFB=()=>{
    return ()=>{
        var provider = new firebase.auth.FacebookAuthProvider();
        return firebase.auth().signInWithPopup(provider);

    }
}


export const logout =()=>({
    type:'LOGOUT'
});
export const startLogout = ()=>{
    return ()=>{
        return firebase.auth().signOut();
    }
}