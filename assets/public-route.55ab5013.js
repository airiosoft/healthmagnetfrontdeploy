import{bJ as l,b8 as m,aJ as A,b as o,a as t,F as p,bj as b,N as g,O as x}from"./index.b3b82eb3.js";function N({children:e}){var s,a;const i=l(),{isLogged:n,fetchStatus:u,isLoading:r}=m(),{isAdmin:c}=A(),f=((a=(s=i.state)==null?void 0:s.from)==null?void 0:a.pathname)||(c?o.HOME:o.PATIENTS_MANAGEMENT);return u!=="idle"&&r?t(p,{position:"fixed",inset:0,h:"full",w:"full",alignItems:"center",justifyContent:"center",children:t(b,{size:"xl"})}):n?t(g,{to:f,replace:!0}):e!=null?e:t(x,{})}export{N as PublicRoute};