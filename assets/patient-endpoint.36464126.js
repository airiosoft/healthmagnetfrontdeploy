import{ab as T,ac as c,ad as A,ae as o,a as r}from"./index.b3b82eb3.js";const l=e=>o({url:`/account/${e}/delete`,method:"DELETE"}),_=({configs:e}={})=>T({mutationFn:l,onSuccess(s){var t,a;!s.success||(t=s.data)!=null&&t.message&&c("SUCCESS",(a=s.data)==null?void 0:a.message)},onError:s=>{A(s)},...e}),L=()=>r("svg",{width:"18",height:"13",viewBox:"0 0 18 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r("path",{d:"M16.5581 1.16278L6.13948 11.5814L0.930176 6.37208",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});var i=(e=>(e.CREATE="patients/create",e.LIST="patients/list",e.DETAIL="patients/detail",e.ASSIGN_DOCTOR_TO_PATIENT="patients/assign-patient",e.REALTIME_HEATH_DATA="patients/health-realtime",e.AVERAGE_HEATH_DATA="patients/health-average",e.CREATE_NOTE="patients/note/create",e.UPDATE_NOTE="patients/note/update",e.DELETE_NOTE="patients/note",e.ACTUAL_HEALTH_DATA="patients/get-actual-health-data",e.DOCTOR_ARPN_LIST_ASSIGN_PATIENT="clinical/list-clinic-assign",e.LIST_DEVICES="devices/list",e))(i||{});export{L as C,i as P,_ as u};