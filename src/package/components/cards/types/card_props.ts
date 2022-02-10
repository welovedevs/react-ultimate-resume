export interface CommonCardsProps {
    variant: number;
    side: 'front' | 'back';
}
export interface CardSideProps<T> {
    data: T;
    handleAddButtonClick: () => void;
}
