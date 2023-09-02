import React , { useState} from 'react'

type Props = {
    func : React.Dispatch<React.SetStateAction<string>>
}


const AddColor = (props: Props) => {
    const [inputValue, setInputValue] = useState<string>('black');

    const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = () => {
        props.func(inputValue);
        // setInputValue(''); 
    };

    return (
        <>
            <label htmlFor="addColor">addColor: 
            <input
                onChange={(e) => setValue(e)}
                type="color"
                name="addColor"
                id="addColor"
                value={inputValue}
            />
            <button type="button" onClick={handleButtonClick}>
                addColor
            </button>
            </label>
        </>
    );
};

export default AddColor