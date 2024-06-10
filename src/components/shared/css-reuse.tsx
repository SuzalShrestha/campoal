import React, { ReactNode } from 'react';
type ChildrenProps = {
    children: ReactNode;
    className?: string;
};
function MaxWidth({ children, className }: ChildrenProps) {
    return (
        <div className={`max-w-screen-2xl w-full ${className}`}>{children}</div>
    );
}
export default MaxWidth;
