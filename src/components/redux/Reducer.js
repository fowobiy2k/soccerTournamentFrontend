
function Reducer( state = [], { type, subject, timeElapsed } ) {
    
    if(type === "goal"){
        // console.log("it is a goal");
        // state = [ ...state, "Goal scored" ];
        // console.log( state )
        return [ ...state, {
            message: "Goal scored",
            subject,
            timeElapsed
        } ];
    } else if (type === "foul") {
        // console.log("FOUL!!!");
        // state = [ ...state, "Foul committed" ];
        // console.log( state );
        return [ ...state, {
            message: "Foul committed"
        } ];
    }

    // switch( action.type ) {
    //     case "goal":
    //         console.log("it is a goal");

    //     case "foul":
    //         console.log("FOUL!!!");
    // }
}

export default Reducer
