import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import Loader from './Loader';

const LoaderExample = ({setIsLoading}) => {
    const [text, setText] = useState();

    useEffect(() => {
        fetch('/loaderExample')
            .then(res => res.text())
            .then(txt => {
                setText(txt);
                setIsLoading(false);
            });
    }, []);

    return <Text>{text}</Text>;
};

export default Loader(LoaderExample, 'large', '#0000ff');
