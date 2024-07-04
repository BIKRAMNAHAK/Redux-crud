import generateUniqueId from 'generate-unique-id'
import { getStuddata } from '../Helper'
import { lodder } from '../StudentActions/StudentActions'

  const initialState = {
    allStudents: getStuddata('allStudentsRecord'),
    student : null,
    lodding: false,
  }

function StudentReducer(state = initialState, action) {

  switch(action.type){
    case 'CREATEFORM' :
        const studentid={
          ...action.payload,
          id : generateUniqueId({length: 4 ,useLetters : false })
        }
        const studdata = [...state.allStudents , studentid]
        localStorage.setItem("allStudentsRecord",JSON.stringify(studdata))
        return{
          ...state,
          allStudents : studdata,
          lodding : false
        }

        case 'EDITFORM':
          const studentsRec = [...state.allStudents]
          const singalRec = studentsRec.filter((rec)=>{
            console.log("REC",rec);
            return rec.id === action.payload
          })
          return{
            ...state,
            student : singalRec[0],
          lodding : false,
          }

          case 'UPDATEFORM' :
          const updateRec =[...state.allStudents]
          const UpadteStudRec = updateRec.map((Ustud)=>{
            if(Ustud.id === action.payload.id){
              return action.payload
            }
            return Ustud
          })
          localStorage.setItem("allStudentsRecord",JSON.stringify(UpadteStudRec))
          return{
            ...state,
            allStudents : UpadteStudRec,
            student : null,
          }

          case "LOADER":
            return{...state,lodding : true}

          case 'DELETEFORM':
            const deleteRec = [...state.allStudents]
            const deleteStudRec = deleteRec.filter((dstud)=>{
              return dstud.id !== action.payload
            })
            localStorage.setItem("allStudentsRecord",JSON.stringify(deleteStudRec))
            return{
              ...state,
              allStudents : deleteStudRec
            }
          
        default:
          return state;
  }
}

export default StudentReducer

