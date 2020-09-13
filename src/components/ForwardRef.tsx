import * as React from 'react';
type Props = {
    property?: string
}
export type RefType = HTMLInputElement;

export const CustomInput = React.forwardRef<RefType, Props>(({property}, ref) => {
    

    return <input ref={ref} type="text"/>;
    
});