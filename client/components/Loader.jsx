import React, { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

export default function Loader(Component) {
    const HOC = (props) => {
        const [isLoading, setIsLoading] = useState(true);

        return (
            <View>
                {(isLoading ? (
                    <View>
                        <ActivityIndicator />
                        <Text>Loading...</Text>
                    </View>
                ) : null)}
                < Component {...props} setIsLoading={setIsLoading} />
            </View>
        );
    };

    return HOC;
}
