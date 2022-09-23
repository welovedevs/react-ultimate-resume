export interface DialogContentRenderFunction<T> {
    isMobile?: boolean;
    fullScreen?: boolean;
    toggleValue: (field: keyof T) => () => void;
    handleValueChange: (field: keyof T) => (value: any) => void;
}
