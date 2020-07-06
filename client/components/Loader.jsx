import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';

export default function Loader(Component) {
    const HOC = (props, size, color) => {
        const [isLoading, setIsLoading] = useState(true);

        return (
            <div>
                {isLoading ? <ActivityIndicator size={size} color={color} /> : null}
                < Component {...props} setIsLoading={setIsLoading} />
            </div>
        );
    };

    return HOC;
}
