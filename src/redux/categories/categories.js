const initialStatusState = [];
const CHECK_STATUS = 'CHECK_STATUS'


function checkStatus() {
	return {
		type: CHECK_STATUS,
	}
}

const checkStatusReducer = (state=initialStatusState, action)=>{
	switch(action.type){
		case CHECK_STATUS: return 'UNDER CONSTRUCTION';
		
		default: return state;
	}
}

export default checkStatusReducer; 