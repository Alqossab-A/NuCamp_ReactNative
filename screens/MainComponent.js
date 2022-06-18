import { useState } from 'react';
import { View } from 'react-native';
import { CAMPSITES } from '../shared/campsites';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [campsites, setCampsites] = useState(CAMPSITES);
    const [selectedCampsiteId, setSelectedCampisiteId] = useState();

    return (
        <View style={{ flex: 1 }}>
            <DirectoryScreen
                campsites={campsites}
                onPress={(campsiteId) => setSelectedCampisiteId(campsiteId)}
            />
            <CampsiteInfoScreen
                campsite={
                    campsites.filter(
                        (campsite) => campsite.id === selectedCampsiteId
                    )[0]
                }
            />
        </View>
    )
}

export default Main;