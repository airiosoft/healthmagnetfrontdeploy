import{af as A,ao as L,r as g,ap as y,ae as l}from"./index.b3b82eb3.js";import{u as f}from"./table.1bced37e.js";var t=(e=>(e.CREATE="carers/create",e.LIST="carers/list",e.DETAIL="carers/detail",e.ASSIGN_CARETAKER_TO_PATIENT="carers/assign-patient",e.RELATIONSHIP="relationships/list",e.LIST_PATIENT_ASSIGNED="patients/list-patient-assigned",e.CARERS_UNASSIGN_PATIENT="carers/unassign-patient",e))(t||{});function N(e){return y(l({url:t.LIST,method:"get",params:e}))}function R({configs:e}={}){var a,i;const u=A(),{queryParams:r,...T}=f(),{data:s,...I}=L({...e,queryFn:()=>N(r),queryKey:[t.LIST,r]}),o=g.exports.useMemo(()=>{var c;return(c=s==null?void 0:s.carers)==null?void 0:c.data},[(a=s==null?void 0:s.carers)==null?void 0:a.data]),S=(i=s==null?void 0:s.carers)==null?void 0:i.paging;function n(){u.refetchQueries([t.LIST,r])}return{caretakersList:o,caretakersPaging:S,queryParams:r,invalidateQueryCaretakersList:n,...T,...I}}export{t as C,R as u};