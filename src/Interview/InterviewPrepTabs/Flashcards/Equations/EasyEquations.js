import React from 'react'
import ReactDOM from 'react-dom'
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

//n channel mosfet
var a = `
&lt;Math&gt;I_D = 0, for V_{GS} < V_T&lt;Math&gt;`;
var b = `
&lt;Math&gt;I_D = 0, for V_{GS} < V_T;&lt;Math&gt;`;

export function Ohms_law(){
  return(
    <div>
      <InlineMath>V=\frac I R</InlineMath>
    </div>
  )
}


export function Equations_nzero (){
    return (
        <div>
             <div>
                {a.split("&lt;Math&gt;").map((ele, id)=>{
                return(<InlineMath>{ele}</InlineMath>)
              })}
            </div>
        </div>
    );
}

export function Equations_nlin (){
    return (
        <div>
             <InlineMath>I_D(lin) =  μ.C_o 2 . \frac W L . [2 * (V_gs - V_t) . V_d -V_d^2] </InlineMath>
        </div>
       
    );
}

export function Equations_nsat (){
    return (
        <div>
            <InlineMath>I_D(lin) = (\mu_p*C_x)/ 2 * \frac W L * [2 * (V_g - V_t)^2 * (1+ \lambda*V_d)] </InlineMath>
        </div>
       
    );
}
export function Equations_pzero (){
    return (
        <div>
             <InlineMath>I_D = 0,V_(GS) + V_T</InlineMath>
        </div>
       
    );
}

export function Equations_plin (){
    return (
        <div>
             <InlineMath>I_D = 0,V_(GS) + V_T</InlineMath>
        </div>
       
    );
}

export function Equations_psat (){
    return (
        <div>
             <InlineMath>I_D = 0,V_(GS) + V_T</InlineMath>
        </div>
       
    );
}
